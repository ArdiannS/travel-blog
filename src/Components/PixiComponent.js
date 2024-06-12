import React, { useEffect, useRef } from "react";
import * as PIXI from "pixi.js";

const PixiComponent = () => {
  const pixiContainer = useRef(null);

  useEffect(() => {
    const app = new PIXI.Application({
      width: window.innerWidth,
      height: window.innerHeight,
      backgroundColor: 0xffffff,
    });

    pixiContainer.current.appendChild(app.view);

    const particles = [];
    const particleCount = 100;

    for (let i = 0; i < particleCount; i++) {
      const particle = new PIXI.Graphics();
      particle.beginFill(0x00bfff);
      particle.drawCircle(0, 0, 5);
      particle.endFill();
      particle.x = Math.random() * app.screen.width;
      particle.y = Math.random() * app.screen.height;
      particle.vx = Math.random() * 2 - 1;
      particle.vy = Math.random() * 2 - 1;
      particles.push(particle);
      app.stage.addChild(particle);
    }

    app.ticker.add(() => {
      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x > app.screen.width) {
          particle.x = 0;
        } else if (particle.x < 0) {
          particle.x = app.screen.width;
        }

        if (particle.y > app.screen.height) {
          particle.y = 0;
        } else if (particle.y < 0) {
          particle.y = app.screen.height;
        }
      });
    });

    return () => {
      app.destroy(true, true);
    };
  }, []);

  return (
    <div
      ref={pixiContainer}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
};

export default PixiComponent;
