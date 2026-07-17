import { useEffect, useRef } from "react";
import "./StarCanvas.css";

const StarCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let stars = [];

    // Resize handler
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize 140 stars
    stars = Array.from({ length: 140 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: 1.2 * Math.random() + 0.3,
      a: Math.random(),
      da: (0.003 * Math.random() + 0.001) * (Math.random() < 0.5 ? 1 : -1),
      dx: 0.08 * (Math.random() - 0.5),
      dy: 0.08 * (Math.random() - 0.5),
    }));

    // Animation Loop
    const animateStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const star of stars) {
        star.a += star.da;

        if (star.a > 1 || star.a < 0) {
          star.da *= -1;
        }

        // Wrap around edges nicely
        star.x = (star.x + star.dx + canvas.width) % canvas.width;
        star.y = (star.y + star.dy + canvas.height) % canvas.height;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(245, 151, 15, ${Math.max(0, Math.min(1, star.a))})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(animateStars);
    };

    animateStars();

    // Clean up when the component gets destroyed/unmounted to save performance
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} id="starCanvas" className="astro-background-canvas" />;
};

export default StarCanvas;