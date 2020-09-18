import React from "react";

interface SlicesType {
  color: string;
  value: number;
}
function renderPaths(slices: SlicesType[], size: number) {
  const radCircumference = Math.PI * 2;
  const center = size / 2;
  const radius = center - 1;
  const total = slices.reduce(
    (totalValue: number, { value }: { value: number }) => totalValue + value,
    0
  );

  let radSegment = 0;
  let lastX = radius;
  let lastY = 0;

  return slices.map(
    ({ color, value }: { color: string; value: number }, index: number) => {
      if (value === total) {
        return (
          <circle r={radius} cx={center} cy={center} fill={color} key={index} />
        );
      }

      if (value === 0) {
        return;
      }

      const valuePercentage = value / total;

      // Should the arc go the long way round?
      const longArc = valuePercentage <= 0.5 ? 0 : 1;
      radSegment += valuePercentage * radCircumference;
      const nextX = Math.cos(radSegment) * radius;
      const nextY = Math.sin(radSegment) * radius;

      // d is a string that describes the path of the slice.
      // The weirdly placed minus signs [eg, (-(lastY))] are due to the fact
      // that our calculations are for a graph with positive Y values going up,
      // but on the screen positive Y values go down.
      const d = [
        `M ${center},${center}`,
        `l ${lastX},${-lastY}`,
        `a${radius},${radius}`,
        "0",
        `${longArc},0`,
        `${nextX - lastX},${-(nextY - lastY)}`,
        "z",
      ].join(" ");

      lastX = nextX;
      lastY = nextY;

      return <path d={d} fill={color} key={index} />;
    }
  );
}

/**
 * Generates an SVG pie chart.
 * @see {http://wiki.scribus.net/canvas/Making_a_Pie_Chart}
 */
function PieChart({ size, slices }: any) {
  const center = size / 2;
  return (
    <svg viewBox={`0 0 ${size} ${size}`}>
      <g transform={`rotate(-90 ${center} ${center})`}>
        {renderPaths(slices, size)}
      </g>
    </svg>
  );
}

export default PieChart;
