import { useEffect, useRef } from 'react';

interface AnimatedBackgroundProps {
  darkMode: boolean;
}

interface SnowParticle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  type: 'dot' | 'flake';
  char?: string;
}

export default function AnimatedBackground({ darkMode }: AnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const particles: SnowParticle[] = [];

    let wind = 0;
    let targetWind = 0;
    let gustTimer = 0;

    // ❄ Big snowflakes
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: 14 + Math.random() * 10,
        speedY: 0.6 + Math.random() * 0.6,
        speedX: 0,
        type: 'flake',
        char: '❄️',
      });
    }

    // • Small background dots
    for (let i = 0; i < 120; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: 1 + Math.random() * 2,
        speedY: 0.35 + Math.random() * 0.4,
        speedX: 0,
        type: 'dot',
      });
    }

    const drawWindStreaks = () => {
      const intensity = Math.abs(wind);
      if (intensity < 0.2) return;

      ctx.lineWidth = 3;
      for (let i = 0; i < 8; i++) {
        const startX = Math.random() * width;
        const startY = Math.random() * height;

        const length = 300 + Math.random() * 150;
        const amplitude = 3 + Math.random() * 2;
        const frequency = 0.02 + Math.random() * 0.015;

        ctx.strokeStyle = darkMode
          ? `rgba(255,255,255,${0.2 * intensity})`
          : `rgba(0,0,0,${0.2 * intensity})`;

        ctx.beginPath();
        for (let j = 0; j < length; j += 5) {
          const x = startX - j * Math.sign(wind);
          const y = startY + j + Math.sin(j * frequency) * amplitude;
          if (j === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Background
      ctx.fillStyle = darkMode ? '#0f0f0f' : '#f5f5f5';
      ctx.fillRect(0, 0, width, height);

      // Wind logic
      gustTimer++;
      if (gustTimer > 320) {
        targetWind = Math.random() * 1.2 - 0.6; // slow gusts
        gustTimer = 0;
      }
      wind += (targetWind - wind) * 0.02;
      wind *= 0.97; // slow change

      drawWindStreaks();

      // Animate particles
      particles.forEach(p => {
        if (p.type === 'flake') {
          // Gust effect: stronger horizontal motion
          const gustEffect = 1 + Math.abs(wind) * 2;
          p.speedX = wind * 0.7 * gustEffect;

          // Sway side-to-side
          p.x += Math.sin(p.y * 0.05) * 0.5;

          // Draw flake with tilt
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(Math.sin(p.y * 0.01 + performance.now() * 0.002) * 0.3 * Math.sign(wind));
          ctx.font = `${p.size}px serif`;
          ctx.fillStyle = darkMode ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.35)';
          ctx.fillText(p.char!, 0, 0);
          ctx.restore();
        } else {
          // Small dots
          p.speedX = wind * 0.35;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = darkMode ? 'rgba(255,255,255,0.35)' : 'rgba(0,0,0,0.25)';
          ctx.fill();
        }

        p.y += p.speedY;
        p.x += p.speedX;

        // Wrap around edges
        if (p.y > height) {
          p.y = -p.size;
          p.x = Math.random() * width;
        }
        if (p.x > width) p.x = 0;
        if (p.x < 0) p.x = width;
      });

      requestAnimationFrame(animate);
    };

    animate();

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, [darkMode]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 w-full h-full"
    />
  );
}
