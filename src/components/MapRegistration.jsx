import React, { useState, useEffect, useCallback, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  RefreshCw, 
  Radio, 
  Info, 
  Clock, 
  MousePointer,
  RotateCw,
  Gamepad2,
  Lock,
  ShieldAlert,
  Users,
  CheckCircle2,
  ExternalLink,
  Flame,
  Target
} from 'lucide-react';
import { TOURNAMENT_CONFIG } from '../config/tournament';
import { fetchLiveSlotStatus } from '../services/registrationService';
import MapCard from './MapCard';
import MapDetailsModal from './MapDetailsModal';

export default function MapRegistration() {
  const maps = TOURNAMENT_CONFIG.maps; // 6 maps
  const totalMaps = maps.length;

  // Active Center Index (0 = Map 01, 1 = Map 02, ..., 5 = Map 06)
  const [activeIndex, setActiveIndex] = useState(0);

  const [selectedMap, setSelectedMap] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Live real-time drag offset in pixels for tactile visual feedback
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // Responsive card offset calculation
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1024
  );

  // Live Slot Availability State
  const [slotData, setSlotData] = useState({});
  const [hasApi, setHasApi] = useState(false);
  const [apiError, setApiError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [fallbackMessage, setFallbackMessage] = useState(null);

  // References for drag/scroll tracking
  const stageRef = useRef(null);
  const dragStartXRef = useRef(0);
  const dragCurrentDiffRef = useRef(0);
  const isDraggingRef = useRef(false);
  const hasDraggedRef = useRef(false);
  const lastWheelTimeRef = useRef(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Responsive horizontal displacement for left and right cards
  const getCardOffsetDistance = () => {
    if (windowWidth >= 1280) return 360; // Wide Desktop
    if (windowWidth >= 1024) return 320; // Standard Desktop
    if (windowWidth >= 768) return 260;  // Tablet
    if (windowWidth >= 480) return 210;  // Large Mobile
    if (windowWidth >= 380) return 175;  // Standard Mobile
    return 145;                          // Small Mobile (320px-375px symmetric peek)
  };

  const cardOffsetDistance = getCardOffsetDistance();

  // Load Slot Availability
  const loadStatus = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetchLiveSlotStatus();
      setHasApi(res.hasApi);
      setApiError(res.error);
      setFallbackMessage(res.fallbackMessage);
      setLastUpdated(res.updatedAt);
      if (res.slots && Object.keys(res.slots).length > 0) {
        setSlotData(res.slots);
      }
    } catch (e) {
      console.error(e);
      setApiError('Unable to refresh registration status.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadStatus();
    const interval = TOURNAMENT_CONFIG.api.pollIntervalMs || 60000;
    const timer = setInterval(loadStatus, interval);
    return () => clearInterval(timer);
  }, [loadStatus]);

  // CIRCULAR MODULO NAVIGATION
  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalMaps);
  }, [totalMaps]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + totalMaps) % totalMaps);
  }, [totalMaps]);

  // Keyboard navigation (Arrow keys)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isModalOpen) return;
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext, isModalOpen]);

  // MOUSE WHEEL & TRACKPAD SCROLL LISTENER (Active over carousel stage)
  useEffect(() => {
    const stageElement = stageRef.current;
    if (!stageElement) return;

    const handleWheel = (e) => {
      if (isModalOpen) return;

      const deltaX = e.deltaX;
      const deltaY = e.deltaY;
      
      // Determine dominant scroll direction
      const isHorizontal = Math.abs(deltaX) > Math.abs(deltaY);
      const dominantDelta = isHorizontal ? deltaX : deltaY;

      // Filter micro jitter
      if (Math.abs(dominantDelta) < 18) return;

      const now = Date.now();
      // Throttle wheel ticks to at most once per 350ms for clean single-card rotation
      if (now - lastWheelTimeRef.current < 350) {
        e.preventDefault();
        return;
      }

      e.preventDefault();
      lastWheelTimeRef.current = now;

      if (dominantDelta > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    };

    stageElement.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      stageElement.removeEventListener('wheel', handleWheel);
    };
  }, [handleNext, handlePrev, isModalOpen]);

  // MOUSE DRAGGING (Window-level tracking for smooth, unbroken gesture)
  const handleMouseDown = (e) => {
    // If user clicked directly on a button or link, let it click normally
    if (e.target.closest('button') || e.target.closest('a')) {
      return;
    }

    e.preventDefault();
    isDraggingRef.current = true;
    hasDraggedRef.current = false;
    dragStartXRef.current = e.clientX;
    dragCurrentDiffRef.current = 0;
    setIsDragging(true);

    const handleMouseMove = (moveEvent) => {
      if (!isDraggingRef.current) return;
      const diff = moveEvent.clientX - dragStartXRef.current;
      dragCurrentDiffRef.current = diff;
      
      if (Math.abs(diff) > 6) {
        hasDraggedRef.current = true;
      }
      
      // Clamp visual live drag resistance (-120px to +120px)
      const clampedOffset = Math.max(-120, Math.min(120, diff));
      setDragOffset(clampedOffset);
    };

    const handleMouseUp = () => {
      if (!isDraggingRef.current) return;
      isDraggingRef.current = false;
      setIsDragging(false);
      setDragOffset(0);

      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);

      const diff = dragCurrentDiffRef.current;
      if (diff < -40) {
        handleNext();
      } else if (diff > 40) {
        handlePrev();
      }

      // Reset drag flag after 120ms to prevent accidental card click
      setTimeout(() => {
        hasDraggedRef.current = false;
      }, 120);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  // TOUCH SWIPE HANDLING (Mobile & Tablets)
  const touchStartXRef = useRef(0);
  const touchCurrentDiffRef = useRef(0);

  const handleTouchStart = (e) => {
    if (e.target.closest('button') || e.target.closest('a')) return;
    
    isDraggingRef.current = true;
    hasDraggedRef.current = false;
    touchStartXRef.current = e.touches[0].clientX;
    touchCurrentDiffRef.current = 0;
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (!isDraggingRef.current) return;
    const diff = e.touches[0].clientX - touchStartXRef.current;
    touchCurrentDiffRef.current = diff;
    
    if (Math.abs(diff) > 8) {
      hasDraggedRef.current = true;
    }

    const clampedOffset = Math.max(-100, Math.min(100, diff * 0.8));
    setDragOffset(clampedOffset);
  };

  const handleTouchEnd = () => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    setIsDragging(false);
    setDragOffset(0);

    const diff = touchCurrentDiffRef.current;
    if (diff < -40) {
      handleNext();
    } else if (diff > 40) {
      handlePrev();
    }

    setTimeout(() => {
      hasDraggedRef.current = false;
    }, 120);
  };

  // Open Details Modal
  const handleOpenDetails = (map) => {
    setSelectedMap(map);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Modulo-derived maps for indicators
  const prevMapIndex = (activeIndex - 1 + totalMaps) % totalMaps;
  const nextMapIndex = (activeIndex + 1) % totalMaps;

  const activeMap = maps[activeIndex];
  const prevMap = maps[prevMapIndex];
  const nextMap = maps[nextMapIndex];

  return (
    <section id="maps" className="py-16 sm:py-24 relative bg-[#0a0705]/85 bg-grid-pattern backdrop-blur-sm overflow-hidden">
      
      {/* Background Ambient Radial Lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-amber-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-950/60 border border-amber-500/40 text-[11px] sm:text-xs font-tech text-amber-300 tracking-widest uppercase mb-2.5 sm:mb-3">
            <Flame className="w-3.5 h-3.5 text-orange-500" />
            <span>PLAYABLE BATTLEFIELD: BERMUDA SOLO</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            TOURNAMENT <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-orange-500">MAP SELECTION</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 font-tech">
            Bermuda is currently <strong className="text-emerald-400">OPEN</strong> featuring two independent 48-player solo matches (96 total unique capacity). Other 5 maps are coming soon.
          </p>
        </div>

        {/* Live Slot Status Ribbon */}
        <div className="mb-8 p-4 rounded-2xl bg-[#140e09]/85 border border-amber-500/30 backdrop-blur-md flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-xl ${hasApi ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'}`}>
              {hasApi ? <Radio className="w-5 h-5 animate-pulse" /> : <Info className="w-5 h-5" />}
            </div>
            <div>
              <div className="text-xs font-bold font-heading text-white tracking-wide flex items-center gap-2">
                <span>SLOT AVAILABILITY STATUS</span>
                {hasApi && (
                  <span className="px-2 py-0.5 rounded text-[10px] font-tech font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                    LIVE
                  </span>
                )}
              </div>
              <div className="text-xs font-tech text-slate-300">
                {!hasApi 
                  ? (fallbackMessage || "REGISTRATION AVAILABILITY WILL BE UPDATED SOON.")
                  : (apiError ? `Notice: ${apiError}` : 'Live Synchronized Availability across all 6 maps')}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {lastUpdated && (
              <span className="text-xs font-tech text-slate-400 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                Updated: {lastUpdated.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            )}
            <button
              onClick={loadStatus}
              disabled={loading}
              className="px-3.5 py-1.5 rounded-lg text-xs font-tech font-bold tracking-wider text-amber-200 bg-amber-900/30 hover:bg-amber-900/50 border border-amber-500/40 transition-colors flex items-center gap-1.5 disabled:opacity-50"
              title="Refresh availability"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin text-amber-400' : ''}`} />
              <span>{loading ? 'SYNCING...' : 'REFRESH'}</span>
            </button>
          </div>
        </div>

        {/* Carousel Top Navigation Bar with Current Map & Arrows */}
        <div className="flex items-center justify-between mb-4 px-2 sm:px-6">
          
          {/* Previous Button (< PREVIOUS) */}
          <button
            onClick={handlePrev}
            className="group min-w-[44px] min-h-[44px] px-3 sm:px-6 py-2.5 rounded-2xl bg-[#1a120c]/85 hover:bg-[#291b10] border border-amber-500/40 text-amber-200 hover:text-white transition-all shadow-lg flex items-center justify-center gap-2 font-heading font-bold text-xs sm:text-sm tracking-wider"
            aria-label="Previous Map"
          >
            <ChevronLeft className="w-5 h-5 text-amber-400 group-hover:-translate-x-1 transition-transform" />
            <span className="hidden sm:inline">PREVIOUS</span>
            <span className="text-[11px] font-tech text-slate-400 hidden md:inline">({prevMap.name})</span>
          </button>

          {/* Active Center Indicator */}
          <div className="flex flex-col items-center">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-black/80 border border-amber-500/40 text-xs font-tech shadow-inner">
              <span className="text-amber-400 font-extrabold font-heading text-sm sm:text-base">
                MAP {activeMap.number}
              </span>
              <span className="text-amber-500 font-bold">/</span>
              <span className="text-slate-400 font-bold">06</span>
              <span className="text-amber-200 font-bold text-xs sm:text-sm max-w-[110px] sm:max-w-none truncate sm:inline">
                <span className="hidden sm:inline">— </span>{activeMap.name}
              </span>
            </div>
            <div className="text-[10px] sm:text-[11px] font-tech text-slate-400 mt-1 flex items-center gap-1.5">
              <MousePointer className="w-3 h-3 text-amber-400" />
              <span className="hidden xs:inline">Drag, scroll, swipe or click side cards to rotate</span>
              <span className="xs:hidden">Swipe or tap arrows to rotate</span>
            </div>
          </div>

          {/* Next Button (NEXT >) */}
          <button
            onClick={handleNext}
            className="group min-w-[44px] min-h-[44px] px-3 sm:px-6 py-2.5 rounded-2xl bg-[#1a120c]/85 hover:bg-[#291b10] border border-amber-500/40 text-amber-200 hover:text-white transition-all shadow-lg flex items-center justify-center gap-2 font-heading font-bold text-xs sm:text-sm tracking-wider"
            aria-label="Next Map"
          >
            <span className="text-[11px] font-tech text-slate-400 hidden md:inline">({nextMap.name})</span>
            <span className="hidden sm:inline">NEXT</span>
            <ChevronRight className="w-5 h-5 text-amber-400 group-hover:translate-x-1 transition-transform" />
          </button>

        </div>

        {/* 
          THREE-CARD INFINITE CIRCULAR STAGE
          Equipped with:
          - Mouse Dragging
          - Touch Swiping
          - Mouse Wheel & Trackpad Scrolling
          - Side Card Direct Click
        */}
        <div
          ref={stageRef}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className={`relative w-full h-[490px] xs:h-[515px] sm:h-[570px] md:h-[600px] flex items-center justify-center overflow-hidden select-none py-4 transition-cursor ${
            isDragging ? 'cursor-grabbing' : 'cursor-grab'
          }`}
          style={{ touchAction: 'pan-y' }}
        >
          {maps.map((map, index) => {
            // Modulo circular distance from activeIndex in range [-2, -1, 0, 1, 2, 3]
            let offset = ((index - activeIndex) % totalMaps + totalMaps) % totalMaps;
            if (offset > 3) offset -= totalMaps;

            const isCenter = offset === 0;
            const isLeft = offset === -1;
            const isRight = offset === 1;

            // Live drag translation adjustment
            const liveShift = isDragging ? dragOffset : 0;

            let transform = '';
            let zIndex = 0;
            let opacity = 0;
            let pointerEvents = 'none';

            if (isCenter) {
              transform = `translate(calc(-50% + ${liveShift}px), -50%) scale(1)`;
              zIndex = 30;
              opacity = 1;
              pointerEvents = 'auto';
            } else if (isLeft) {
              transform = `translate(calc(-50% - ${cardOffsetDistance}px + ${liveShift * 0.85}px), -50%) scale(0.88)`;
              zIndex = 20;
              opacity = 0.72;
              pointerEvents = 'auto';
            } else if (isRight) {
              transform = `translate(calc(-50% + ${cardOffsetDistance}px + ${liveShift * 0.85}px), -50%) scale(0.88)`;
              zIndex = 20;
              opacity = 0.72;
              pointerEvents = 'auto';
            } else if (offset === -2) {
              transform = `translate(calc(-50% - ${cardOffsetDistance * 1.8}px + ${liveShift * 0.7}px), -50%) scale(0.7)`;
              zIndex = 10;
              opacity = 0;
              pointerEvents = 'none';
            } else if (offset === 2) {
              transform = `translate(calc(-50% + ${cardOffsetDistance * 1.8}px + ${liveShift * 0.7}px), -50%) scale(0.7)`;
              zIndex = 10;
              opacity = 0;
              pointerEvents = 'none';
            } else {
              transform = 'translate(-50%, -50%) scale(0.5)';
              zIndex = 0;
              opacity = 0;
              pointerEvents = 'none';
            }

            const positionType = isCenter ? 'center' : isLeft ? 'left' : isRight ? 'right' : 'hidden';

            return (
              <div
                key={map.id}
                className={`absolute left-1/2 top-1/2 will-change-transform ${
                  isDragging ? 'transition-none' : 'transition-all duration-500 ease-out'
                }`}
                style={{
                  transform,
                  zIndex,
                  opacity,
                  pointerEvents,
                }}
              >
                <MapCard
                  map={map}
                  slotData={slotData[map.id]}
                  position={positionType}
                  onClick={() => {
                    // Ignore card click if user just completed a drag movement
                    if (hasDraggedRef.current) return;

                    if (isLeft) handlePrev();
                    else if (isRight) handleNext();
                    else if (isCenter) handleOpenDetails(map);
                  }}
                  onOpenDetails={handleOpenDetails}
                />
              </div>
            );
          })}
        </div>

        {/* Circular Pagination Indicators (Map 01 to Map 06) */}
        <div className="mt-6 flex flex-col items-center gap-3">
          <div className="flex items-center justify-center gap-2.5">
            {maps.map((map, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={map.id}
                  onClick={() => setActiveIndex(index)}
                  className={`transition-all duration-300 rounded-full flex items-center justify-center ${
                    isActive 
                      ? 'w-12 h-3.5 bg-gradient-to-r from-orange-500 to-amber-400 shadow-neon-gold' 
                      : 'w-3.5 h-3.5 bg-[#1e140d]/80 hover:bg-[#2e1f14] border border-amber-500/30'
                  }`}
                  aria-label={`Switch to Map ${map.number} - ${map.name}`}
                  title={`Map ${map.number}: ${map.name}`}
                />
              );
            })}
          </div>

          {/* Quick Circular Label Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-tech text-slate-400">
            {maps.map((map, index) => {
              const isActive = index === activeIndex;
              const isComingSoon = map.status === 'COMING_SOON';
              return (
                <button
                  key={map.id}
                  onClick={() => setActiveIndex(index)}
                  className={`px-2.5 py-1 rounded-lg border transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-amber-950/70 border-amber-400/60 text-amber-300 font-bold shadow-md shadow-amber-950/40'
                      : isComingSoon
                        ? 'bg-black/40 border-amber-500/15 text-slate-400 hover:text-slate-200'
                        : 'bg-black/50 border-emerald-500/30 text-emerald-300 hover:text-white'
                  }`}
                >
                  <span>{map.number}. {map.name}</span>
                  {isComingSoon && <span className="text-[9px] text-amber-400/70">(SOON)</span>}
                  {!isComingSoon && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />}
                </button>
              );
            })}
          </div>
        </div>

      </div>

      {/* Expanded Map Details Modal */}
      <MapDetailsModal
        map={selectedMap}
        slotData={selectedMap ? { ...(slotData[selectedMap.id] || {}), 'match-01': slotData['match-01'], 'match-02': slotData['match-02'] } : null}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

    </section>
  );
}
