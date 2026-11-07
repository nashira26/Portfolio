import React from 'react';
import { PixelIconId } from '../content';

interface PixelIconProps {
  name: PixelIconId;
  className?: string;
}

/**
 * Hand-crafted 16x16 retro pixel-art SVG icons.
 * Every icon is drawn on a strict 16x16 coordinate grid with crisp square pixels.
 * Uses CSS theme variables (--accent, --text, --text-muted, --bg-alt) so icons
 * adapt seamlessly to light/dark modes and all 5 water-themed accents.
 */
export const PixelIcon: React.FC<PixelIconProps> = ({ name, className = 'w-4 h-4' }) => {
  const outline = 'var(--text)';
  const accent = 'var(--accent)';
  const muted = 'var(--text-muted)';
  const surface = 'var(--bg-alt)';
  const bg = 'var(--bg)';

  const renderPixels = () => {
    switch (name) {
      case 'fish':
        // Tropical pixel fish facing right (tail on left, eye on right)
        return (
          <>
            {/* Dorsal & ventral fins */}
            <rect x="6" y="2" width="4" height="1" fill={outline} />
            <rect x="7" y="3" width="3" height="1" fill={accent} />
            <rect x="6" y="3" width="1" height="1" fill={outline} />
            <rect x="10" y="3" width="1" height="1" fill={outline} />
            <rect x="7" y="12" width="3" height="1" fill={outline} />
            <rect x="7" y="11" width="2" height="1" fill={accent} />
            {/* Tail fin */}
            <rect x="1" y="4" width="2" height="1" fill={outline} />
            <rect x="1" y="5" width="1" height="6" fill={outline} />
            <rect x="1" y="11" width="2" height="1" fill={outline} />
            <rect x="2" y="5" width="2" height="6" fill={accent} />
            <rect x="3" y="4" width="1" height="1" fill={outline} />
            <rect x="3" y="11" width="1" height="1" fill={outline} />
            {/* Body outline */}
            <rect x="4" y="5" width="1" height="1" fill={outline} />
            <rect x="5" y="4" width="7" height="1" fill={outline} />
            <rect x="12" y="5" width="2" height="1" fill={outline} />
            <rect x="14" y="6" width="1" height="4" fill={outline} />
            <rect x="12" y="10" width="2" height="1" fill={outline} />
            <rect x="5" y="11" width="7" height="1" fill={outline} />
            <rect x="4" y="10" width="1" height="1" fill={outline} />
            <rect x="4" y="6" width="1" height="4" fill={accent} />
            {/* Body fill */}
            <rect x="5" y="5" width="7" height="6" fill={accent} />
            <rect x="12" y="6" width="2" height="4" fill={accent} />
            {/* Belly highlight & gill stripe */}
            <rect x="6" y="9" width="5" height="2" fill={surface} />
            <rect x="9" y="6" width="1" height="3" fill={outline} opacity="0.35" />
            {/* Eye */}
            <rect x="11" y="6" width="2" height="2" fill={bg} />
            <rect x="12" y="6" width="1" height="1" fill={outline} />
          </>
        );

      case 'shelf-research':
        // Pixel laboratory Erlenmeyer flask bubbling with accent liquid
        return (
          <>
            <rect x="6" y="1" width="4" height="1" fill={outline} />
            <rect x="6" y="2" width="1" height="4" fill={outline} />
            <rect x="9" y="2" width="1" height="4" fill={outline} />
            <rect x="7" y="2" width="2" height="4" fill={surface} />
            <rect x="5" y="6" width="1" height="2" fill={outline} />
            <rect x="10" y="6" width="1" height="2" fill={outline} />
            <rect x="4" y="8" width="1" height="2" fill={outline} />
            <rect x="11" y="8" width="1" height="2" fill={outline} />
            <rect x="3" y="10" width="1" height="4" fill={outline} />
            <rect x="12" y="10" width="1" height="4" fill={outline} />
            <rect x="4" y="14" width="8" height="1" fill={outline} />
            {/* Upper glass */}
            <rect x="6" y="6" width="4" height="3" fill={surface} />
            <rect x="5" y="8" width="6" height="2" fill={surface} />
            {/* Liquid */}
            <rect x="4" y="10" width="8" height="4" fill={accent} />
            <rect x="5" y="9" width="2" height="1" fill={accent} />
            {/* Bubbles */}
            <rect x="6" y="11" width="1" height="1" fill={bg} />
            <rect x="9" y="12" width="1" height="1" fill={bg} />
            <rect x="8" y="4" width="1" height="1" fill={accent} />
          </>
        );

      case 'shelf-ai':
        // Cute pixel robot head with antenna
        return (
          <>
            <rect x="7" y="1" width="2" height="2" fill={accent} />
            <rect x="7" y="3" width="2" height="1" fill={outline} />
            <rect x="4" y="4" width="8" height="1" fill={outline} />
            <rect x="3" y="5" width="1" height="8" fill={outline} />
            <rect x="12" y="5" width="1" height="8" fill={outline} />
            <rect x="4" y="13" width="8" height="1" fill={outline} />
            {/* Ears */}
            <rect x="2" y="7" width="1" height="4" fill={accent} />
            <rect x="13" y="7" width="1" height="4" fill={accent} />
            {/* Face plate */}
            <rect x="4" y="5" width="8" height="8" fill={surface} />
            {/* Eyes */}
            <rect x="5" y="7" width="2" height="2" fill={accent} />
            <rect x="9" y="7" width="2" height="2" fill={accent} />
            <rect x="5" y="7" width="1" height="1" fill={outline} />
            <rect x="9" y="7" width="1" height="1" fill={outline} />
            {/* Mouth */}
            <rect x="6" y="11" width="4" height="1" fill={outline} />
          </>
        );

      case 'shelf-swe':
        // Pixel terminal window with >_ prompt
        return (
          <>
            <rect x="2" y="2" width="12" height="1" fill={outline} />
            <rect x="1" y="3" width="1" height="10" fill={outline} />
            <rect x="14" y="3" width="1" height="10" fill={outline} />
            <rect x="2" y="13" width="12" height="1" fill={outline} />
            {/* Title bar */}
            <rect x="2" y="3" width="12" height="2" fill={accent} />
            <rect x="3" y="3" width="1" height="1" fill={bg} />
            <rect x="5" y="3" width="1" height="1" fill={bg} />
            <rect x="2" y="5" width="12" height="1" fill={outline} />
            {/* Screen */}
            <rect x="2" y="6" width="12" height="7" fill={surface} />
            {/* >_ prompt */}
            <rect x="4" y="8" width="1" height="1" fill={outline} />
            <rect x="5" y="9" width="1" height="1" fill={outline} />
            <rect x="4" y="10" width="1" height="1" fill={outline} />
            <rect x="7" y="10" width="4" height="1" fill={accent} />
          </>
        );

      case 'shelf-toolbox':
        // Pixel tackle / toolbox with handle and clasp
        return (
          <>
            {/* Handle */}
            <rect x="6" y="2" width="4" height="1" fill={outline} />
            <rect x="5" y="3" width="1" height="2" fill={outline} />
            <rect x="10" y="3" width="1" height="2" fill={outline} />
            {/* Box outline */}
            <rect x="2" y="5" width="12" height="1" fill={outline} />
            <rect x="1" y="6" width="1" height="7" fill={outline} />
            <rect x="14" y="6" width="1" height="7" fill={outline} />
            <rect x="2" y="13" width="12" height="1" fill={outline} />
            {/* Lid & lower body */}
            <rect x="2" y="6" width="12" height="3" fill={accent} />
            <rect x="2" y="9" width="12" height="1" fill={outline} />
            <rect x="2" y="10" width="12" height="3" fill={surface} />
            {/* Center latch */}
            <rect x="7" y="8" width="2" height="3" fill={bg} />
            <rect x="7" y="8" width="2" height="1" fill={outline} />
            <rect x="7" y="10" width="2" height="1" fill={outline} />
          </>
        );

      case 'shelf-background':
        // Pixel graduation cap & tassel
        return (
          <>
            <rect x="7" y="2" width="2" height="1" fill={outline} />
            <rect x="5" y="3" width="6" height="1" fill={outline} />
            <rect x="3" y="4" width="10" height="1" fill={outline} />
            <rect x="1" y="5" width="14" height="2" fill={accent} />
            <rect x="1" y="5" width="2" height="1" fill={outline} />
            <rect x="13" y="5" width="2" height="1" fill={outline} />
            <rect x="3" y="7" width="10" height="1" fill={outline} />
            {/* Cap base */}
            <rect x="4" y="8" width="1" height="4" fill={outline} />
            <rect x="11" y="8" width="1" height="4" fill={outline} />
            <rect x="5" y="8" width="6" height="4" fill={surface} />
            <rect x="5" y="12" width="6" height="1" fill={outline} />
            {/* Tassel */}
            <rect x="13" y="7" width="1" height="5" fill={accent} />
            <rect x="12" y="12" width="2" height="2" fill={accent} />
          </>
        );

      case 'shelf-offclock':
        // Pixel wave crest & warm horizon
        return (
          <>
            {/* Sun */}
            <rect x="9" y="2" width="4" height="4" fill={accent} opacity="0.65" />
            <rect x="10" y="1" width="2" height="1" fill={accent} opacity="0.65" />
            {/* Wave crest */}
            <rect x="2" y="7" width="4" height="1" fill={outline} />
            <rect x="6" y="6" width="3" height="1" fill={outline} />
            <rect x="9" y="7" width="1" height="2" fill={outline} />
            <rect x="7" y="8" width="2" height="1" fill={bg} />
            {/* Water layers */}
            <rect x="1" y="8" width="6" height="3" fill={accent} />
            <rect x="1" y="11" width="14" height="3" fill={accent} />
            <rect x="10" y="9" width="5" height="2" fill={accent} />
            {/* Foam highlights */}
            <rect x="3" y="8" width="3" height="1" fill={bg} />
            <rect x="11" y="10" width="3" height="1" fill={bg} />
            <rect x="5" y="12" width="4" height="1" fill={surface} />
            <rect x="1" y="14" width="14" height="1" fill={outline} />
          </>
        );

      case 'magnifying-glass':
        // Magnifying glass (LLM-as-a-Judge uncertainty)
        return (
          <>
            <rect x="4" y="2" width="5" height="1" fill={outline} />
            <rect x="3" y="3" width="1" height="1" fill={outline} />
            <rect x="9" y="3" width="1" height="1" fill={outline} />
            <rect x="2" y="4" width="1" height="5" fill={outline} />
            <rect x="10" y="4" width="1" height="5" fill={outline} />
            <rect x="3" y="9" width="1" height="1" fill={outline} />
            <rect x="9" y="9" width="1" height="1" fill={outline} />
            <rect x="4" y="10" width="5" height="1" fill={outline} />
            {/* Lens fill */}
            <rect x="4" y="3" width="5" height="7" fill={accent} opacity="0.35" />
            <rect x="3" y="4" width="7" height="5" fill={accent} opacity="0.35" />
            {/* Glint */}
            <rect x="4" y="4" width="2" height="1" fill={bg} />
            <rect x="4" y="5" width="1" height="1" fill={bg} />
            {/* Handle */}
            <rect x="9" y="10" width="2" height="1" fill={outline} />
            <rect x="10" y="11" width="2" height="1" fill={accent} />
            <rect x="11" y="12" width="2" height="1" fill={accent} />
            <rect x="12" y="13" width="2" height="2" fill={outline} />
          </>
        );

      case 'entropy-clusters':
        // Semantic entropy clusters (3 grouped pixel clusters with links)
        return (
          <>
            {/* Connecting dashed bridges */}
            <rect x="6" y="5" width="1" height="1" fill={muted} />
            <rect x="8" y="6" width="1" height="1" fill={muted} />
            <rect x="6" y="9" width="1" height="1" fill={muted} />
            <rect x="8" y="10" width="1" height="1" fill={muted} />
            {/* Cluster A (top-left) */}
            <rect x="2" y="2" width="4" height="4" fill={outline} />
            <rect x="3" y="3" width="2" height="2" fill={accent} />
            {/* Cluster B (right) */}
            <rect x="10" y="5" width="4" height="4" fill={outline} />
            <rect x="11" y="6" width="2" height="2" fill={accent} />
            {/* Cluster C (bottom-left) */}
            <rect x="3" y="10" width="4" height="4" fill={outline} />
            <rect x="4" y="11" width="2" height="2" fill={surface} />
            {/* Outlier dot */}
            <rect x="11" y="12" width="2" height="2" fill={accent} />
          </>
        );

      case 'scale-alert':
        // Tilted balance scale (Where consistency fails)
        return (
          <>
            {/* Pillar & base */}
            <rect x="7" y="3" width="2" height="10" fill={outline} />
            <rect x="4" y="13" width="8" height="2" fill={outline} />
            <rect x="5" y="13" width="6" height="1" fill={accent} />
            {/* Tilted beam */}
            <rect x="2" y="5" width="4" height="1" fill={outline} />
            <rect x="6" y="4" width="4" height="1" fill={outline} />
            <rect x="10" y="3" width="4" height="1" fill={outline} />
            {/* Left pan (lower/heavier) */}
            <rect x="2" y="6" width="1" height="3" fill={muted} />
            <rect x="5" y="6" width="1" height="3" fill={muted} />
            <rect x="1" y="9" width="6" height="2" fill={accent} />
            <rect x="2" y="11" width="4" height="1" fill={outline} />
            {/* Right pan (higher) */}
            <rect x="10" y="4" width="1" height="3" fill={muted} />
            <rect x="13" y="4" width="1" height="3" fill={muted} />
            <rect x="9" y="7" width="6" height="2" fill={surface} />
            <rect x="10" y="9" width="4" height="1" fill={outline} />
          </>
        );

      case 'robot-hand':
        // Pixel mechanical robot hand (AI Web-Form Agent)
        return (
          <>
            {/* Three articulated fingers */}
            <rect x="4" y="2" width="2" height="4" fill={outline} />
            <rect x="4" y="3" width="1" height="2" fill={accent} />
            <rect x="7" y="1" width="2" height="5" fill={outline} />
            <rect x="7" y="2" width="1" height="3" fill={accent} />
            <rect x="10" y="2" width="2" height="4" fill={outline} />
            <rect x="10" y="3" width="1" height="2" fill={accent} />
            {/* Thumb */}
            <rect x="2" y="6" width="2" height="4" fill={outline} />
            <rect x="2" y="7" width="1" height="2" fill={accent} />
            {/* Palm chassis */}
            <rect x="4" y="6" width="8" height="6" fill={outline} />
            <rect x="5" y="7" width="6" height="4" fill={surface} />
            <rect x="7" y="8" width="2" height="2" fill={accent} />
            {/* Wrist cuff */}
            <rect x="5" y="12" width="6" height="3" fill={accent} />
            <rect x="4" y="12" width="1" height="3" fill={outline} />
            <rect x="11" y="12" width="1" height="3" fill={outline} />
          </>
        );

      case 'speech-bubble':
        // Pixel speech bubble with emotion heart (Emotion-Conditioned Dialogue)
        return (
          <>
            <rect x="3" y="2" width="10" height="1" fill={outline} />
            <rect x="2" y="3" width="1" height="8" fill={outline} />
            <rect x="13" y="3" width="1" height="8" fill={outline} />
            <rect x="3" y="11" width="3" height="1" fill={outline} />
            <rect x="8" y="11" width="5" height="1" fill={outline} />
            {/* Bubble tail */}
            <rect x="5" y="12" width="1" height="2" fill={outline} />
            <rect x="4" y="14" width="2" height="1" fill={outline} />
            <rect x="7" y="12" width="1" height="1" fill={outline} />
            <rect x="6" y="13" width="1" height="1" fill={outline} />
            {/* Fill */}
            <rect x="3" y="3" width="10" height="8" fill={surface} />
            <rect x="6" y="11" width="2" height="2" fill={surface} />
            {/* Pixel heart inside */}
            <rect x="6" y="5" width="1" height="1" fill={accent} />
            <rect x="9" y="5" width="1" height="1" fill={accent} />
            <rect x="5" y="6" width="6" height="2" fill={accent} />
            <rect x="6" y="8" width="4" height="1" fill={accent} />
            <rect x="7" y="9" width="2" height="1" fill={accent} />
          </>
        );

      case 'lock':
        // Pixel padlock (Robustness in Private Federated Learning)
        return (
          <>
            {/* Shackle */}
            <rect x="5" y="2" width="6" height="1" fill={outline} />
            <rect x="4" y="3" width="2" height="4" fill={outline} />
            <rect x="10" y="3" width="2" height="4" fill={outline} />
            <rect x="5" y="3" width="1" height="4" fill={surface} />
            <rect x="10" y="3" width="1" height="4" fill={surface} />
            {/* Body */}
            <rect x="3" y="7" width="10" height="1" fill={outline} />
            <rect x="2" y="8" width="1" height="6" fill={outline} />
            <rect x="13" y="8" width="1" height="6" fill={outline} />
            <rect x="3" y="14" width="10" height="1" fill={outline} />
            <rect x="3" y="8" width="10" height="6" fill={accent} />
            {/* Keyhole */}
            <rect x="7" y="10" width="2" height="2" fill={bg} />
            <rect x="7" y="12" width="2" height="1" fill={outline} />
          </>
        );

      case 'circuit-board':
        // Pixel PCB circuit board with pins & traces (PCB Defect Segmentation)
        return (
          <>
            {/* Outer board */}
            <rect x="2" y="2" width="12" height="12" fill={outline} />
            <rect x="3" y="3" width="10" height="10" fill={surface} />
            {/* Traces */}
            <rect x="4" y="4" width="3" height="1" fill={accent} />
            <rect x="4" y="5" width="1" height="4" fill={accent} />
            <rect x="9" y="11" width="3" height="1" fill={accent} />
            <rect x="11" y="7" width="1" height="4" fill={accent} />
            {/* Central IC chip */}
            <rect x="6" y="6" width="4" height="4" fill={outline} />
            <rect x="7" y="7" width="2" height="2" fill={accent} />
            {/* Solder pads */}
            <rect x="4" y="10" width="2" height="2" fill={outline} />
            <rect x="10" y="4" width="2" height="2" fill={accent} />
          </>
        );

      case 'server-rack':
        // Pixel multi-tenant server stack (Encyte SaaS)
        return (
          <>
            {/* Top blade */}
            <rect x="2" y="2" width="12" height="4" fill={outline} />
            <rect x="3" y="3" width="10" height="2" fill={surface} />
            <rect x="4" y="3" width="2" height="2" fill={accent} />
            <rect x="11" y="3" width="1" height="1" fill={outline} />
            {/* Middle blade */}
            <rect x="2" y="6" width="12" height="4" fill={outline} />
            <rect x="3" y="7" width="10" height="2" fill={surface} />
            <rect x="4" y="7" width="2" height="2" fill={accent} />
            <rect x="11" y="7" width="1" height="1" fill={outline} />
            {/* Bottom blade */}
            <rect x="2" y="10" width="12" height="4" fill={outline} />
            <rect x="3" y="11" width="10" height="2" fill={surface} />
            <rect x="4" y="11" width="2" height="2" fill={accent} />
            <rect x="11" y="11" width="1" height="1" fill={outline} />
          </>
        );

      case 'gradebook':
        // Pixel spiral notebook / gradebook (Grade-Book)
        return (
          <>
            {/* Cover */}
            <rect x="3" y="2" width="10" height="12" fill={outline} />
            <rect x="4" y="3" width="8" height="10" fill={surface} />
            {/* Binding rings */}
            <rect x="2" y="4" width="2" height="1" fill={accent} />
            <rect x="2" y="7" width="2" height="1" fill={accent} />
            <rect x="2" y="10" width="2" height="1" fill={accent} />
            {/* Accent header & lines */}
            <rect x="6" y="4" width="5" height="2" fill={accent} />
            <rect x="6" y="8" width="5" height="1" fill={outline} />
            <rect x="6" y="10" width="4" height="1" fill={muted} />
          </>
        );

      case 'code-crate':
        // Pixel folder / repo archive box (Everything on GitHub)
        return (
          <>
            {/* Folder tab */}
            <rect x="2" y="3" width="5" height="1" fill={outline} />
            <rect x="7" y="4" width="7" height="1" fill={outline} />
            <rect x="1" y="4" width="1" height="10" fill={outline} />
            <rect x="14" y="5" width="1" height="9" fill={outline} />
            <rect x="2" y="14" width="12" height="1" fill={outline} />
            {/* Fill */}
            <rect x="2" y="4" width="5" height="2" fill={accent} />
            <rect x="2" y="6" width="12" height="8" fill={accent} />
            <rect x="3" y="7" width="10" height="6" fill={surface} />
            {/* < > brackets */}
            <rect x="6" y="9" width="1" height="1" fill={outline} />
            <rect x="5" y="10" width="1" height="1" fill={outline} />
            <rect x="6" y="11" width="1" height="1" fill={outline} />
            <rect x="9" y="9" width="1" height="1" fill={outline} />
            <rect x="10" y="10" width="1" height="1" fill={outline} />
            <rect x="9" y="11" width="1" height="1" fill={outline} />
          </>
        );

      case 'hiking-boot':
        // Pixel trail boot (Hiking)
        return (
          <>
            <rect x="3" y="3" width="5" height="1" fill={outline} />
            <rect x="2" y="4" width="1" height="9" fill={outline} />
            <rect x="8" y="4" width="1" height="4" fill={outline} />
            <rect x="9" y="8" width="4" height="1" fill={outline} />
            <rect x="13" y="9" width="1" height="4" fill={outline} />
            <rect x="2" y="13" width="12" height="1" fill={outline} />
            {/* Boot upper */}
            <rect x="3" y="4" width="5" height="7" fill={accent} />
            <rect x="8" y="9" width="5" height="2" fill={accent} />
            {/* Laces */}
            <rect x="6" y="5" width="2" height="1" fill={bg} />
            <rect x="6" y="7" width="2" height="1" fill={bg} />
            {/* Lug sole */}
            <rect x="3" y="11" width="10" height="2" fill={surface} />
            <rect x="4" y="12" width="1" height="1" fill={outline} />
            <rect x="7" y="12" width="1" height="1" fill={outline} />
            <rect x="10" y="12" width="1" height="1" fill={outline} />
          </>
        );

      case 'open-book':
        // Pixel open book with ribbon bookmark (Reading)
        return (
          <>
            <rect x="2" y="3" width="5" height="1" fill={outline} />
            <rect x="9" y="3" width="5" height="1" fill={outline} />
            <rect x="7" y="4" width="2" height="9" fill={outline} />
            <rect x="1" y="4" width="1" height="9" fill={outline} />
            <rect x="14" y="4" width="1" height="9" fill={outline} />
            {/* Pages */}
            <rect x="2" y="4" width="5" height="8" fill={surface} />
            <rect x="9" y="4" width="5" height="8" fill={surface} />
            <rect x="2" y="12" width="5" height="1" fill={outline} />
            <rect x="9" y="12" width="5" height="1" fill={outline} />
            {/* Text lines */}
            <rect x="3" y="6" width="3" height="1" fill={muted} />
            <rect x="3" y="8" width="3" height="1" fill={muted} />
            <rect x="10" y="6" width="3" height="1" fill={muted} />
            <rect x="10" y="8" width="3" height="1" fill={muted} />
            {/* Bookmark */}
            <rect x="10" y="3" width="2" height="4" fill={accent} />
            <rect x="7" y="13" width="2" height="2" fill={accent} />
          </>
        );

      case 'fish-tank':
        // Pixel planted fishbowl (Fishkeeping)
        return (
          <>
            <rect x="4" y="2" width="8" height="1" fill={outline} />
            <rect x="3" y="3" width="10" height="1" fill={outline} />
            <rect x="2" y="4" width="1" height="8" fill={outline} />
            <rect x="13" y="4" width="1" height="8" fill={outline} />
            <rect x="3" y="12" width="1" height="2" fill={outline} />
            <rect x="12" y="12" width="1" height="2" fill={outline} />
            <rect x="4" y="14" width="8" height="1" fill={outline} />
            {/* Water */}
            <rect x="3" y="6" width="10" height="6" fill={accent} opacity="0.28" />
            <rect x="4" y="12" width="8" height="2" fill={surface} />
            {/* Tiny fish & plant */}
            <rect x="5" y="9" width="1" height="3" fill={outline} />
            <rect x="7" y="8" width="3" height="2" fill={accent} />
            <rect x="6" y="8" width="1" height="2" fill={outline} />
          </>
        );

      case 'github':
        // Pixel cat silhouette
        return (
          <>
            <rect x="4" y="2" width="2" height="2" fill={outline} />
            <rect x="10" y="2" width="2" height="2" fill={outline} />
            <rect x="3" y="4" width="10" height="6" fill={outline} />
            <rect x="5" y="6" width="2" height="2" fill={bg} />
            <rect x="9" y="6" width="2" height="2" fill={bg} />
            <rect x="5" y="10" width="6" height="4" fill={outline} />
            <rect x="3" y="11" width="2" height="1" fill={outline} />
            <rect x="2" y="10" width="1" height="1" fill={outline} />
          </>
        );

      case 'linkedin':
        // Pixel "in" square badge
        return (
          <>
            <rect x="2" y="2" width="12" height="12" fill={outline} />
            <rect x="3" y="3" width="10" height="10" fill={surface} />
            <rect x="4" y="5" width="2" height="1" fill={accent} />
            <rect x="4" y="7" width="2" height="5" fill={outline} />
            <rect x="7" y="7" width="2" height="5" fill={outline} />
            <rect x="9" y="7" width="2" height="1" fill={outline} />
            <rect x="10" y="8" width="2" height="4" fill={outline} />
          </>
        );

      case 'email':
        // Pixel envelope
        return (
          <>
            <rect x="2" y="3" width="12" height="1" fill={outline} />
            <rect x="1" y="4" width="1" height="9" fill={outline} />
            <rect x="14" y="4" width="1" height="9" fill={outline} />
            <rect x="2" y="13" width="12" height="1" fill={outline} />
            <rect x="2" y="4" width="12" height="9" fill={surface} />
            <rect x="2" y="5" width="2" height="1" fill={accent} />
            <rect x="4" y="6" width="2" height="1" fill={accent} />
            <rect x="6" y="7" width="4" height="1" fill={accent} />
            <rect x="10" y="6" width="2" height="1" fill={accent} />
            <rect x="12" y="5" width="2" height="1" fill={accent} />
          </>
        );

      case 'resume':
        // Pixel document page with folded corner
        return (
          <>
            <rect x="3" y="2" width="7" height="1" fill={outline} />
            <rect x="10" y="3" width="1" height="1" fill={outline} />
            <rect x="11" y="4" width="1" height="1" fill={outline} />
            <rect x="2" y="3" width="1" height="11" fill={outline} />
            <rect x="12" y="5" width="1" height="9" fill={outline} />
            <rect x="3" y="14" width="9" height="1" fill={outline} />
            <rect x="3" y="3" width="7" height="11" fill={surface} />
            <rect x="10" y="5" width="2" height="9" fill={surface} />
            <rect x="9" y="3" width="1" height="3" fill={outline} />
            <rect x="9" y="5" width="3" height="1" fill={outline} />
            <rect x="5" y="7" width="5" height="1" fill={accent} />
            <rect x="5" y="9" width="5" height="1" fill={muted} />
            <rect x="5" y="11" width="4" height="1" fill={muted} />
          </>
        );

      case 'degree-scroll':
        // Pixel rolled diploma scroll with ribbon seal
        return (
          <>
            {/* Top roll */}
            <rect x="3" y="2" width="10" height="1" fill={outline} />
            <rect x="2" y="3" width="12" height="2" fill={outline} />
            <rect x="3" y="3" width="10" height="1" fill={surface} />
            {/* Parchment body */}
            <rect x="4" y="5" width="1" height="6" fill={outline} />
            <rect x="11" y="5" width="1" height="6" fill={outline} />
            <rect x="5" y="5" width="6" height="6" fill={surface} />
            {/* Bottom roll */}
            <rect x="2" y="11" width="12" height="2" fill={outline} />
            <rect x="3" y="12" width="10" height="1" fill={surface} />
            <rect x="3" y="13" width="10" height="1" fill={outline} />
            {/* Accent ribbon & tails */}
            <rect x="7" y="5" width="2" height="6" fill={accent} />
            <rect x="6" y="7" width="4" height="2" fill={accent} />
            <rect x="6" y="13" width="1" height="2" fill={accent} />
            <rect x="9" y="13" width="1" height="2" fill={accent} />
          </>
        );

      case 'shelf-experience':
        // Pixel briefcase with handle and twin clasps
        return (
          <>
            {/* Top handle */}
            <rect x="6" y="2" width="4" height="1" fill={outline} />
            <rect x="5" y="3" width="1" height="2" fill={outline} />
            <rect x="10" y="3" width="1" height="2" fill={outline} />
            {/* Outer case outline */}
            <rect x="2" y="5" width="12" height="1" fill={outline} />
            <rect x="1" y="6" width="1" height="8" fill={outline} />
            <rect x="14" y="6" width="1" height="8" fill={outline} />
            <rect x="2" y="14" width="12" height="1" fill={outline} />
            {/* Upper flap & lower body */}
            <rect x="2" y="6" width="12" height="3" fill={accent} />
            <rect x="2" y="9" width="12" height="1" fill={outline} />
            <rect x="2" y="10" width="12" height="4" fill={surface} />
            {/* Twin clasps */}
            <rect x="4" y="8" width="2" height="3" fill={bg} />
            <rect x="4" y="8" width="2" height="1" fill={outline} />
            <rect x="4" y="10" width="2" height="1" fill={outline} />
            <rect x="10" y="8" width="2" height="3" fill={bg} />
            <rect x="10" y="8" width="2" height="1" fill={outline} />
            <rect x="10" y="10" width="2" height="1" fill={outline} />
          </>
        );

      case 'cinema':
        // Pixel movie clapperboard with diagonal stripes and play symbol
        return (
          <>
            {/* Clapper top bar */}
            <rect x="2" y="2" width="12" height="1" fill={outline} />
            <rect x="1" y="3" width="1" height="11" fill={outline} />
            <rect x="14" y="3" width="1" height="11" fill={outline} />
            <rect x="2" y="14" width="12" height="1" fill={outline} />
            {/* Diagonal clapper stripes */}
            <rect x="2" y="3" width="12" height="2" fill={surface} />
            <rect x="3" y="3" width="2" height="1" fill={accent} />
            <rect x="2" y="4" width="2" height="1" fill={accent} />
            <rect x="7" y="3" width="2" height="1" fill={accent} />
            <rect x="6" y="4" width="2" height="1" fill={accent} />
            <rect x="11" y="3" width="2" height="1" fill={accent} />
            <rect x="10" y="4" width="2" height="1" fill={accent} />
            <rect x="2" y="5" width="12" height="1" fill={outline} />
            {/* Slate body */}
            <rect x="2" y="6" width="12" height="8" fill={surface} />
            {/* Play triangle */}
            <rect x="6" y="8" width="1" height="5" fill={accent} />
            <rect x="7" y="9" width="2" height="3" fill={accent} />
            <rect x="9" y="10" width="2" height="1" fill={accent} />
          </>
        );

      case 'map-pin':
        // Pixel location pin
        return (
          <>
            <rect x="6" y="1" width="4" height="1" fill={outline} />
            <rect x="4" y="2" width="2" height="1" fill={outline} />
            <rect x="10" y="2" width="2" height="1" fill={outline} />
            <rect x="3" y="3" width="1" height="5" fill={outline} />
            <rect x="12" y="3" width="1" height="5" fill={outline} />
            <rect x="4" y="8" width="1" height="2" fill={outline} />
            <rect x="11" y="8" width="1" height="2" fill={outline} />
            <rect x="5" y="10" width="1" height="2" fill={outline} />
            <rect x="10" y="10" width="1" height="2" fill={outline} />
            <rect x="6" y="12" width="1" height="2" fill={outline} />
            <rect x="9" y="12" width="1" height="2" fill={outline} />
            <rect x="7" y="14" width="2" height="1" fill={outline} />
            {/* Pin fill */}
            <rect x="6" y="2" width="4" height="1" fill={accent} />
            <rect x="4" y="3" width="8" height="5" fill={accent} />
            <rect x="5" y="8" width="6" height="2" fill={accent} />
            <rect x="6" y="10" width="4" height="2" fill={accent} />
            <rect x="7" y="12" width="2" height="2" fill={accent} />
            {/* Inner hole */}
            <rect x="7" y="4" width="2" height="2" fill={bg} />
          </>
        );

      case 'instagram':
        // Pixel rounded-square camera icon
        return (
          <>
            {/* Outer rounded-square frame */}
            <rect x="3" y="2" width="10" height="1" fill={outline} />
            <rect x="3" y="13" width="10" height="1" fill={outline} />
            <rect x="2" y="3" width="1" height="10" fill={outline} />
            <rect x="13" y="3" width="1" height="10" fill={outline} />
            {/* Inner surface */}
            <rect x="3" y="3" width="10" height="10" fill={surface} />
            {/* Viewfinder dot */}
            <rect x="11" y="4" width="1" height="1" fill={accent} />
            {/* Central circular lens */}
            <rect x="6" y="5" width="4" height="1" fill={outline} />
            <rect x="6" y="10" width="4" height="1" fill={outline} />
            <rect x="5" y="6" width="1" height="4" fill={outline} />
            <rect x="10" y="6" width="1" height="4" fill={outline} />
            <rect x="6" y="6" width="4" height="4" fill={accent} />
            <rect x="7" y="7" width="2" height="2" fill={bg} />
          </>
        );

      case 'sprout':
        // Pixel seedling sprout with two leaves and soil mound
        return (
          <>
            {/* Right upper leaf */}
            <rect x="9" y="2" width="4" height="1" fill={outline} />
            <rect x="8" y="3" width="1" height="3" fill={outline} />
            <rect x="13" y="3" width="1" height="3" fill={outline} />
            <rect x="9" y="6" width="4" height="1" fill={outline} />
            <rect x="9" y="3" width="4" height="3" fill={accent} />
            <rect x="10" y="4" width="2" height="1" fill={surface} />
            {/* Left leaf */}
            <rect x="3" y="4" width="4" height="1" fill={outline} />
            <rect x="2" y="5" width="1" height="3" fill={outline} />
            <rect x="7" y="5" width="1" height="3" fill={outline} />
            <rect x="3" y="8" width="4" height="1" fill={outline} />
            <rect x="3" y="5" width="4" height="3" fill={accent} />
            <rect x="4" y="6" width="2" height="1" fill={surface} />
            {/* Stem */}
            <rect x="7" y="6" width="2" height="7" fill={outline} />
            <rect x="8" y="6" width="1" height="6" fill={accent} />
            {/* Soil mound */}
            <rect x="5" y="12" width="6" height="1" fill={outline} />
            <rect x="4" y="13" width="8" height="1" fill={surface} />
            <rect x="3" y="13" width="1" height="1" fill={outline} />
            <rect x="12" y="13" width="1" height="1" fill={outline} />
            <rect x="3" y="14" width="10" height="1" fill={outline} />
          </>
        );

      case 'child-care':
        // Pixel house with a heart in the doorway (CareQ)
        return (
          <>
            {/* Roof */}
            <rect x="7" y="1" width="2" height="1" fill={outline} />
            <rect x="6" y="2" width="1" height="1" fill={outline} />
            <rect x="9" y="2" width="1" height="1" fill={outline} />
            <rect x="5" y="3" width="1" height="1" fill={outline} />
            <rect x="10" y="3" width="1" height="1" fill={outline} />
            <rect x="4" y="4" width="1" height="1" fill={outline} />
            <rect x="11" y="4" width="1" height="1" fill={outline} />
            <rect x="3" y="5" width="1" height="1" fill={outline} />
            <rect x="12" y="5" width="1" height="1" fill={outline} />
            <rect x="2" y="6" width="1" height="1" fill={outline} />
            <rect x="13" y="6" width="1" height="1" fill={outline} />
            <rect x="1" y="7" width="3" height="1" fill={outline} />
            <rect x="12" y="7" width="3" height="1" fill={outline} />
            <rect x="7" y="2" width="2" height="1" fill={accent} />
            <rect x="6" y="3" width="4" height="1" fill={accent} />
            <rect x="5" y="4" width="6" height="1" fill={accent} />
            <rect x="4" y="5" width="8" height="1" fill={accent} />
            <rect x="3" y="6" width="10" height="1" fill={accent} />
            {/* Walls */}
            <rect x="3" y="8" width="1" height="6" fill={outline} />
            <rect x="12" y="8" width="1" height="6" fill={outline} />
            <rect x="3" y="14" width="10" height="1" fill={outline} />
            <rect x="4" y="7" width="8" height="7" fill={surface} />
            {/* Heart */}
            <rect x="5" y="8" width="2" height="1" fill={accent} />
            <rect x="9" y="8" width="2" height="1" fill={accent} />
            <rect x="4" y="9" width="8" height="2" fill={accent} />
            <rect x="5" y="11" width="6" height="1" fill={accent} />
            <rect x="6" y="12" width="4" height="1" fill={accent} />
            <rect x="7" y="13" width="2" height="1" fill={accent} />
          </>
        );
    }
  };

  return (
    <svg
      viewBox="0 0 16 16"
      shapeRendering="crispEdges"
      aria-hidden="true"
      className={className}
    >
      {renderPixels()}
    </svg>
  );
};
