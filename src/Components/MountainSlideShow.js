// MountainSlideshow.js
import React, { useEffect, useRef, useState } from "react";
import * as PIXI from "pixi.js";

function MountainSlideshow({ mountainDestinations }) {
  const app = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Initialize PixiJS
    app.current = new PIXI.Application({
      width: 800,
      height: 600,
      antialias: true,
      transparent: false,
      resolution: 1,
    });

    const slideshowContainer = document.getElementById("mountain-slideshow");
    if (slideshowContainer) {
      slideshowContainer.appendChild(app.current.view);
    } else {
      console.error("Slideshow container not found");
      return;
    }

    // Load slideshow images
    const loader = new PIXI.Loader();
    mountainDestinations.forEach((destination, index) => {
      loader.add(`mountain-destination-${index}`, destination.image);
    });
    loader.load((loader, resources) => {
      setup(resources);
    });

    function setup(resources) {
      const slides = Object.values(resources);

      // Create slideshow sprites
      slides.forEach((slide, index) => {
        const sprite = new PIXI.Sprite(slide.texture);
        sprite.width = app.current.screen.width;
        sprite.height = app.current.screen.height;
        sprite.visible = index === 0;
        app.current.stage.addChild(sprite);
      });

      // Animation loop to change slides
      const animate = () => {
        slides.forEach((slide, index) => {
          slide.visible = index === currentSlide;
        });
        requestAnimationFrame(animate);
      };
      animate();
    }

    // Cleanup function to remove PixiJS view on unmount
    return () => {
      // Check if PixiJS app is initialized
      if (app.current) {
        // Remove PixiJS view from slideshow container
        slideshowContainer.removeChild(app.current.view);

        // Destroy PixiJS app and remove event listeners
        app.current.destroy(true, {
          children: true,
          texture: true,
          baseTexture: true,
        });

        // Set the current app to null to ensure it is not used after unmount
        app.current = null;
      }
    };
  }, [mountainDestinations]); // Re-run effect when mountainDestinations change

  return (
    <div
      id="mountain-slideshow"
      style={{ width: "800px", height: "600px" }}
    ></div>
  );
}

export default MountainSlideshow;
