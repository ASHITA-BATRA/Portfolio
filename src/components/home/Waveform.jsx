import React, { useEffect, useRef, useState } from "react";

const Waveform = () => {
  const waveRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const wave = waveRef.current;
    let barCount = Math.floor(window.innerWidth / 6); // Adjust based on screen width

    const createWaveBars = () => {
      wave.innerHTML = ""; // Clear previous bars
      for (let i = 0; i < barCount; i++) {
        let bar = document.createElement("span");
        bar.style.height = `${Math.random() * 80 + 20}px`; // Random initial height
        bar.style.width = "10%";
        bar.style.marginRight = "3px";
        bar.style.paddingRight = "3px";
        bar.style.borderRadius = "3px";
        bar.style.background = "darkblue"; // Blue color with transparency
        bar.style.display = "inline-block";
        bar.style.transition = "height 0.2s ease-in-out";
        bar.style.position = "relative";
        bar.style.opacity = "0.1";
        bar.style.transform = "translateY(30%)";
        wave.appendChild(bar);
      }
    };

    const animateWave = () => {
      const bars = wave.querySelectorAll("span");
      bars.forEach((bar) => {
        let randomHeight = Math.random() * 100 + 90; // Random height variation
        bar.style.height = `${randomHeight}px`;
      });
    };

    createWaveBars();
    const interval = setInterval(animateWave, 400); // Update every 400ms

    // Track window resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth); // Update state
      barCount = Math.floor(window.innerWidth / 6);
      createWaveBars();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        width: "100vw",
        left: 0,
        top: windowWidth < 1000 ? "-19%" : "-14%", // Responsive top position
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        pointerEvents: "none", // Allows clicks to pass through
      }}
    >
      <div ref={waveRef} style={{ display: "flex", width: "100%" }}></div>
    </div>
  );
};

export default Waveform;
