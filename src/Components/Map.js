import React, { useEffect, useRef } from "react";
import * as PIXI from "pixi.js";
import image from "../Assets/7_Koritnik.jpg";

function Map() {
  const app = useRef(null);

  useEffect(() => {
    // Initialize PixiJS
    app.current = new PIXI.Application({
      width: window.innerWidth,
      height: window.innerHeight,
      antialias: true,
      transparent: false,
      resolution: 1,
    });

    const mapContainer = document.getElementById("map");
    if (mapContainer) {
      mapContainer.appendChild(app.current.view);
    } else {
      console.error("Map container not found");
      return;
    }

    // Load a map image using PixiJS Loader
    PIXI.Assets.load(image).then((texture) => {
      setup(texture);
    });
    function setup(texture) {
      if (!texture) {
        console.error("Texture is null or undefined");
        return;
      }

      let map = new PIXI.Sprite(texture);
      map.width = app.current.screen.width;
      map.height = app.current.screen.height;
      app.current.stage.addChild(map);

      const destinations = [
        { name: "Rugove", x: 300, y: 300 },
        { name: "Hajla", x: 500, y: 100 },
        { name: "Kosharishte", x: 700, y: 70 },
        { name: "Provalia", x: 800, y: 180 },
        { name: "Livadhet e Istogut", x: 820, y: 400 },
        { name: "Bajshe", x: 900, y: 440 },
        { name: "Rupce", x: 980, y: 450 },
      ];

      // Add points to the map
      destinations.forEach((dest) => {
        let point = new PIXI.Graphics();
        point.beginFill(0xff0000);
        point.drawCircle(0, 0, 10);
        point.endFill();
        point.x = dest.x;
        point.y = dest.y;
        point.interactive = true;
        point.buttonMode = true;
        point.on("pointerdown", () => showTooltip(dest));
        map.addChild(point); // Add points to the map sprite, not app.stage
      });

      // Tooltip for displaying destination info
      let tooltip = new PIXI.Text("", {
        fontFamily: "Arial",
        fontSize: 24,
        fill: 0xffffff,
        align: "center",
      });
      tooltip.visible = false;
      map.addChild(tooltip); // Add tooltip to the map sprite

      // Show tooltip function
      function showTooltip(dest) {
        tooltip.text = dest.name;
        tooltip.x = dest.x + 15;
        tooltip.y = dest.y - 15;
        tooltip.visible = true;

        setTimeout(() => {
          tooltip.visible = false;
        }, 3000);
      }
    }

    // Cleanup function to remove PixiJS view on unmount
    return () => {
      // Check if PixiJS app is initialized
      if (app.current) {
        // Remove PixiJS view from map container
        mapContainer.removeChild(app.current.view);

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
  }, []);

  return (
    <div>
      <h1>Join us in our Trip to Rupce</h1>
      <div id="map" style={{ width: "100vw", height: "100vh" }}></div>
    </div>
  );
}

export default Map;
