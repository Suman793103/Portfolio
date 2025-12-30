import React, { useEffect, useRef } from "react";

const ConstellationCanvas = () => {
  const canvasRef = useRef(null);
  const starsRef = useRef([]);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const maxStars = 100;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Star {
      constructor(canvasWidth, canvasHeight) {
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.radius = Math.random() * 1.5;
        this.alpha = Math.random();
        this.dx = Math.random() * 0.5 - 0.25;
        this.dy = Math.random() * 0.5 - 0.25;
      }

      draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
        ctx.fill();
      }

      update(canvasWidth, canvasHeight) {
        this.x += this.dx;
        this.y += this.dy;

        if (this.x < 0 || this.x > canvasWidth) this.dx *= -1;
        if (this.y < 0 || this.y > canvasHeight) this.dy *= -1;
      }
    }

    const connectStars = (stars, ctx) => {
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x;
          const dy = stars[i].y - stars[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(stars[i].x, stars[i].y);
            ctx.lineTo(stars[j].x, stars[j].y);
            ctx.strokeStyle = `rgba(255, 255, 255, 0.1)`;
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      starsRef.current.forEach((star) => {
        star.update(canvas.width, canvas.height);
        star.draw(ctx);
      });

      connectStars(starsRef.current, ctx);
      animationRef.current = requestAnimationFrame(animate);
    };

    const init = () => {
      resizeCanvas();
      starsRef.current = [];
      for (let i = 0; i < maxStars; i++) {
        starsRef.current.push(new Star(canvas.width, canvas.height));
      }
      animate();
    };

    init();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return <canvas ref={canvasRef} id="constellation-canvas"></canvas>;
};

export default ConstellationCanvas;
