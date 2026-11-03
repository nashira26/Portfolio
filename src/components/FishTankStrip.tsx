import React, { useEffect, useRef, useState } from 'react';
import { SITE_CONTENT } from '../content';
import { PixelIcon } from './PixelIcons';

type BubbleAlign = 'left' | 'center' | 'right';

const PixelBubble: React.FC = () => (
  <svg
    viewBox="0 0 6 6"
    shapeRendering="crispEdges"
    aria-hidden="true"
    className="w-2.5 h-2.5"
  >
    <rect x="2" y="0" width="2" height="1" fill="var(--accent)" />
    <rect x="1" y="1" width="1" height="1" fill="var(--accent)" />
    <rect x="4" y="1" width="1" height="1" fill="var(--accent)" />
    <rect x="0" y="2" width="1" height="2" fill="var(--accent)" />
    <rect x="5" y="2" width="1" height="2" fill="var(--accent)" />
    <rect x="1" y="4" width="1" height="1" fill="var(--accent)" />
    <rect x="4" y="4" width="1" height="1" fill="var(--accent)" />
    <rect x="2" y="5" width="2" height="1" fill="var(--accent)" />
    <rect x="2" y="2" width="1" height="1" fill="var(--bg)" />
  </svg>
);

const FISH_CLASSES = [
  { wrapper: 'tank-fish-1', sprite: 'fish-sprite-1', size: 'w-6 h-6' },
  { wrapper: 'tank-fish-2', sprite: 'fish-sprite-2', size: 'w-5 h-5' },
  { wrapper: 'tank-fish-3', sprite: 'fish-sprite-3', size: 'w-6 h-6' },
] as const;

export const FishTankStrip: React.FC = () => {
  const tankRef = useRef<HTMLDivElement | null>(null);
  const timerRef = useRef<number | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [activeFish, setActiveFish] = useState<{
    index: number;
    align: BubbleAlign;
  } | null>(null);

  useEffect(() => {
    const el = tankRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, []);

  const handleFishClick = (
    index: number,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    let align: BubbleAlign = 'center';
    const tankEl = tankRef.current;
    if (tankEl) {
      const tankRect = tankEl.getBoundingClientRect();
      const fishRect = e.currentTarget.getBoundingClientRect();
      const relX =
        (fishRect.left + fishRect.width / 2 - tankRect.left) /
        Math.max(1, tankRect.width);
      if (relX < 0.32) {
        align = 'left';
      } else if (relX > 0.68) {
        align = 'right';
      }
    }

    setActiveFish({ index, align });

    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
    }
    timerRef.current = window.setTimeout(() => {
      setActiveFish(null);
      timerRef.current = null;
    }, 2000);
  };

  return (
    <div
      ref={tankRef}
      aria-label={SITE_CONTENT.ui.aquariumAriaLabel}
      className={`fish-tank-container mt-6 h-[90px] w-full rounded-[8px] bg-[var(--bg-alt)] border border-[var(--border)] relative select-none ${
        !isVisible ? 'tank-paused' : ''
      }`}
    >
      {/* Clipped inner water layer for shimmer, rising bubbles & substrate */}
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-[8px] overflow-hidden pointer-events-none"
      >
        <div className="absolute inset-x-0 top-0 h-[2px] bg-[var(--border)] opacity-60" />

        <div className="absolute tank-bubble-1">
          <PixelBubble />
        </div>
        <div className="absolute tank-bubble-2">
          <PixelBubble />
        </div>
        <div className="absolute tank-bubble-3">
          <PixelBubble />
        </div>
        <div className="absolute tank-bubble-4">
          <PixelBubble />
        </div>

        <div className="absolute inset-x-0 bottom-0 h-[4px] bg-[var(--border)] opacity-55" />
      </div>

      {/* Three interactive swimming pixel fish */}
      {SITE_CONTENT.fishTank.fish.map((fish, idx) => {
        const cfg = FISH_CLASSES[idx];
        const isSpeaking = activeFish?.index === idx;
        const align = activeFish?.align ?? 'center';

        const bubblePosClass =
          align === 'left'
            ? 'left-0'
            : align === 'right'
              ? 'right-0'
              : 'left-1/2 -translate-x-1/2';

        const pointerPosClass =
          align === 'left'
            ? 'left-3'
            : align === 'right'
              ? 'right-3'
              : 'left-1/2 -translate-x-1/2';

        return (
          <div key={fish.id} className={`absolute ${cfg.wrapper} z-10`}>
            {isSpeaking && (
              <div
                role="status"
                aria-live="polite"
                className={`absolute bottom-full mb-1.5 ${bubblePosClass} w-max max-w-[210px] sm:max-w-[270px] rounded-[4px] border-2 border-[var(--text)] bg-[var(--bg)] px-2.5 py-1 font-mono text-[11.5px] leading-[1.35] text-[var(--text)] shadow-sm pointer-events-none z-20`}
              >
                {fish.speech}
                {/* Pixel speech bubble tail */}
                <span
                  aria-hidden="true"
                  className={`absolute top-full ${pointerPosClass} w-1.5 h-1.5 bg-[var(--bg)] border-r-2 border-b-2 border-[var(--text)] rotate-45 -mt-[3px]`}
                />
              </div>
            )}

            <button
              type="button"
              aria-label={fish.label}
              onClick={(e) => handleFishClick(idx, e)}
              className="p-1.5 -m-1.5 rounded-[6px] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[var(--accent)]"
            >
              <span className={`block ${cfg.sprite}`}>
                <PixelIcon name="fish" className={cfg.size} />
              </span>
            </button>
          </div>
        );
      })}
    </div>
  );
};
