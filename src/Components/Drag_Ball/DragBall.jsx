import React, { useRef, useState } from "react";

const DragBall = () => {
  const ballRef = useRef(null);
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [originalPosition, setOriginalPosition] = useState({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setIsDragging(true);
    const ball = ballRef.current;
    if (ball) {
      const ballRect = ball.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();

      // Store original position relative to the container
      setOriginalPosition({
        x: ballRect.left - containerRect.left,
        y: ballRect.top - containerRect.top,
      });

      // Calculate mouse offset within the ball
      setOffset({
        x: e.clientX - ballRect.left,
        y: e.clientY - ballRect.top,
      });
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const container = containerRef.current;
    const ball = ballRef.current;
    if (container && ball) {
      const containerRect = container.getBoundingClientRect();

      // Calculate new ball position within container bounds
      const newLeft = e.clientX - containerRect.left - offset.x;
      const newTop = e.clientY - containerRect.top - offset.y;

      // Update ball position
      ball.style.position = "absolute";
      ball.style.left = `${Math.max(
        0,
        Math.min(newLeft, containerRect.width - ball.offsetWidth)
      )}px`;
      ball.style.top = `${Math.max(
        0,
        Math.min(newTop, containerRect.height - ball.offsetHeight)
      )}px`;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    const ball = ballRef.current;
    if (ball) {
      // Reset to original position
      ball.style.left = `${originalPosition.x}px`;
      ball.style.top = `${originalPosition.y}px`;
    }
  };

  return (
    <div className="w-[80%] m-auto">
      <h1 className="text-center text-3xl font-bold mt-10">Drag the Ball</h1>
      <div
        ref={containerRef}
        className="border w-[80%] h-[60vh] m-auto mt-10 rounded-xl bg-gray-700 bg-opacity-40 p-4 flex justify-center items-center relative"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp} // Ensure the ball returns even if the mouse leaves the container
      >
        <div>
          <div
            id="ball"
            ref={ballRef}
            className="w-[150px] h-[150px] border m-auto rounded-full bg-yellow-400 cursor-pointer flex justify-center items-center text-black"
            onMouseDown={handleMouseDown}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default DragBall;
