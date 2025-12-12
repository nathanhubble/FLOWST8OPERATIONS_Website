import React from 'react';

const IsometricDataStream: React.FC = () => {
  const gridSize = 5;
  const blocks = [];

  // Generate a 5x5 grid
  for (let x = 0; x < gridSize; x++) {
    for (let y = 0; y < gridSize; y++) {
      // Calculate delay to create a diagonal wave effect
      // x + y gives us diagonal bands
      const delay = (x + y) * 0.15;
      blocks.push({ x, y, delay });
    }
  }

  return (
    <div className="w-full h-full flex items-center justify-center overflow-visible">
      <div className="iso-scene">
        {blocks.map((block, i) => (
          <div
            key={i}
            className="iso-block"
            style={{
              left: `${block.x * 56}px`, // 50px width + 6px gap
              top: `${block.y * 56}px`,
              animation: `iso-wave 4s ease-in-out infinite`,
              animationDelay: `${-block.delay}s` // Negative delay starts the animation "in progress"
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default IsometricDataStream;