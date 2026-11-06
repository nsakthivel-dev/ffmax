import React, { useEffect, useRef } from 'react';

/**
 * BulletFx - High-Performance Tactical Bullet Impact & Spark Particle System
 * Free Fire MAX Inspired Interactive Visual Feedback
 */
export default function BulletFx() {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animFrameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Particle colors inspired by Free Fire muzzle flashes & golden sparks
    const colors = ['#f59e0b', '#fbbf24', '#f97316', '#ef4444', '#ffffff', '#ffd700'];

    class Spark {
      constructor(x, y, isHeavy = false) {
        this.x = x;
        this.y = y;
        const angle = Math.random() * Math.PI * 2;
        const speed = (isHeavy ? 4 : 2) + Math.random() * (isHeavy ? 7 : 4.5);
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;
        this.size = 1.5 + Math.random() * (isHeavy ? 3.5 : 2.5);
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.alpha = 1;
        this.decay = 0.025 + Math.random() * 0.04;
        this.gravity = 0.12;
        this.length = this.size * 2.5;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vy += this.gravity;
        this.vx *= 0.95;
        this.vy *= 0.95;
        this.alpha -= this.decay;
      }

      draw(c) {
        c.save();
        c.globalAlpha = Math.max(0, this.alpha);
        c.fillStyle = this.color;
        c.shadowColor = this.color;
        c.shadowBlur = 8;
        
        // Draw spark with slight directional elongation (bullet streak)
        c.beginPath();
        c.arc(this.x, this.y, Math.max(0.5, this.size * this.alpha), 0, Math.PI * 2);
        c.fill();
        c.restore();
      }
    }

    class Shockwave {
      constructor(x, y, color = '#f59e0b') {
        this.x = x;
        this.y = y;
        this.radius = 2;
        this.maxRadius = 32 + Math.random() * 16;
        this.alpha = 0.85;
        this.color = color;
      }

      update() {
        this.radius += (this.maxRadius - this.radius) * 0.22 + 1;
        this.alpha -= 0.045;
      }

      draw(c) {
        c.save();
        c.globalAlpha = Math.max(0, this.alpha);
        c.strokeStyle = this.color;
        c.lineWidth = 1.5;
        c.shadowColor = this.color;
        c.shadowBlur = 10;
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        c.stroke();
        c.restore();
      }
    }

    const handleClick = (e) => {
      // Check if user clicked on button, link, or card, or anywhere interactive
      const target = e.target;
      const isInteractive = target.closest('button, a, input, [role="button"], .interactive-target, .glass-panel, .hud-card');
      
      const count = isInteractive ? 14 : 7;
      const isHeavy = !!isInteractive;

      // Spawn sparks
      for (let i = 0; i < count; i++) {
        particlesRef.current.push(new Spark(e.clientX, e.clientY, isHeavy));
      }

      // Spawn shockwave ring
      particlesRef.current.push(new Shockwave(e.clientX, e.clientY, isInteractive ? '#fbbf24' : '#f59e0b'));
      if (isHeavy) {
        particlesRef.current.push(new Shockwave(e.clientX, e.clientY, '#ffffff'));
      }
    };

    window.addEventListener('pointerdown', handleClick);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particlesRef.current.length - 1; i >= 0; i--) {
        const p = particlesRef.current[i];
        p.update();
        p.draw(ctx);
        if (p.alpha <= 0) {
          particlesRef.current.splice(i, 1);
        }
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointerdown', handleClick);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
      aria-hidden="true"
    />
  );
}

