import React from 'react';
import { AurocChartData } from '../content';

interface AurocChartProps {
  data: AurocChartData;
}

/**
 * Hand-built SVG horizontal bar chart (no external chart library).
 * Renders AUROC bars in the active water accent colour alongside
 * a dashed vertical reference line at 0.5 ("coin flip") with monospace labels.
 */
export const AurocChart: React.FC<AurocChartProps> = ({ data }) => {
  const trackStart = 78;
  const trackWidth = 310;
  const baselineX = trackStart + data.baselineValue * trackWidth;

  return (
    <div className="my-3 rounded-[8px] border border-[var(--border)] bg-[var(--bg)] px-3.5 py-2.5 max-w-[500px]">
      <svg
        viewBox="0 0 460 126"
        role="img"
        aria-label={data.ariaLabel}
        className="w-full h-[126px] block select-none font-mono"
      >
        {/* Title */}
        <text
          x="0"
          y="16"
          fill="var(--text)"
          fontSize="12"
          fontWeight="600"
        >
          {data.title}
        </text>

        {/* Horizontal bars */}
        {data.bars.map((bar, idx) => {
          const y = 32 + idx * 32;
          const barWidth = Math.max(4, bar.value * trackWidth);

          return (
            <g key={bar.label}>
              {/* Method label */}
              <text
                x={trackStart - 10}
                y={y + 15}
                textAnchor="end"
                fill="var(--text-muted)"
                fontSize="12"
              >
                {bar.label}
              </text>

              {/* Full [0..1] background track */}
              <rect
                x={trackStart}
                y={y}
                width={trackWidth}
                height="22"
                rx="4"
                fill="var(--bg-alt)"
                stroke="var(--border)"
                strokeWidth="1"
              />

              {/* Accent value bar */}
              <rect
                x={trackStart}
                y={y}
                width={barWidth}
                height="22"
                rx="4"
                fill="var(--accent)"
              />

              {/* Numeric AUROC value */}
              <text
                x={trackStart + barWidth + 8}
                y={y + 15}
                fill="var(--text)"
                fontSize="12"
                fontWeight="600"
              >
                {bar.displayValue}
              </text>
            </g>
          );
        })}

        {/* Dashed vertical line at 0.5 ("coin flip") */}
        <line
          x1={baselineX}
          y1="26"
          x2={baselineX}
          y2="96"
          stroke="var(--text-muted)"
          strokeWidth="1.5"
          strokeDasharray="3 3"
        />

        {/* Axis endpoints and coin-flip label */}
        <text
          x={trackStart}
          y="113"
          fill="var(--text-muted)"
          fontSize="10.5"
        >
          0.0
        </text>
        <text
          x={baselineX}
          y="113"
          textAnchor="middle"
          fill="var(--text-muted)"
          fontSize="11"
        >
          {data.baselineLabel}
        </text>
        <text
          x={trackStart + trackWidth}
          y="113"
          textAnchor="end"
          fill="var(--text-muted)"
          fontSize="10.5"
        >
          1.0
        </text>
      </svg>
    </div>
  );
};
