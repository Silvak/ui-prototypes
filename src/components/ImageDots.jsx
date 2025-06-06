"use client";
import { useRef, useEffect, useState } from "react";
import "./ImageDots.css";
import { renderAsciiImage } from "@/utils/asciiConverter";

export const ImageDots = ({
  //resolution = 10,
  min = 1,
  max = 20,
  value = 10,
}) => {
  const canvasRef = useRef(null);
  const [resolution, setResolution] = useState(value);

  useEffect(() => {
    if (canvasRef.current) {
      renderAsciiImage(canvasRef.current, resolution);
    }
  }, [resolution]);

  return (
    <div className="flex flex-col gap-2 w-full h-full">
      {/* canvas */}
      <div className="flex w-full border h-[calc(100%-80px)] bg-black">
        <canvas ref={canvasRef} />
      </div>

      {/* Controls*/}
      <div className="flex flex-col h-[80px] border p-2">
        <label htmlFor="resolution" id="resolutionLabel">
          Resolution {resolution} px
        </label>
        <input
          type="range"
          id="resolution"
          name="resolution"
          min={min}
          max={max}
          value={resolution}
          onChange={(e) => setResolution(Number(e.target.value))}
        />
      </div>
    </div>
  );
};
