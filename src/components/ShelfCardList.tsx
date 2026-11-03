import React, { useMemo, useState } from 'react';
import {
  ExpandableShelf,
  formatDateRange,
  InternalActionLink,
  SITE_CONTENT,
} from '../content';
import { PixelIcon } from './PixelIcons';
import { AurocChart } from './AurocChart';

interface ShelfCardListProps {
  shelf: ExpandableShelf;
  openItemId?: string | null;
  onOpenItemChange?: (id: string | null) => void;
  onInternalNavigate?: (action: InternalActionLink) => void;
  children?: React.ReactNode;
}

export const ShelfCardList: React.FC<ShelfCardListProps> = ({
  shelf,
  openItemId: controlledOpenId,
  onOpenItemChange,
  onInternalNavigate,
  children,
}) => {
  const [uncontrolledOpenId, setUncontrolledOpenId] = useState<string | null>(null);

  const isControlled = controlledOpenId !== undefined;
  const openItemId = isControlled ? controlledOpenId : uncontrolledOpenId;

  // Automatically sort sections with start dates newest-first
  const items = useMemo(() => {
    if (!shelf.items.some((it) => Boolean(it.start))) {
      return shelf.items;
    }
    return [...shelf.items].sort((a, b) =>
      (b.start ?? '').localeCompare(a.start ?? '')
    );
  }, [shelf.items]);

  const handleToggle = (id: string) => {
    const next = openItemId === id ? null : id;
    if (!isControlled) {
      setUncontrolledOpenId(next);
    }
    onOpenItemChange?.(next);
  };

  const isTwoCol = (shelf.columns ?? 2) === 2;

  return (
    <section
      id={shelf.id}
      className="scroll-mt-20 desk:scroll-mt-10 border-t border-[var(--border)] py-9"
    >
      {/* Heading row */}
      <div className={`flex items-center gap-3 ${shelf.description ? '' : 'mb-5'}`}>
        <PixelIcon name={shelf.icon} className="w-[28px] h-[28px] shrink-0" />
        <h2 className="font-display text-[1.45rem] font-semibold tracking-tight text-[var(--text)]">
          {shelf.title}
        </h2>
      </div>

      {/* One-line shelf description */}
      {shelf.description && (
        <p className="mt-1.5 mb-5 text-[var(--text-muted)]">
          {shelf.description}
        </p>
      )}

      {/* Single-column list or 2-column desktop grid */}
      <div
        className={
          isTwoCol
            ? 'grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-1.5 items-start'
            : 'grid grid-cols-1 gap-y-1.5 items-start'
        }
      >
        {items.map((item) => {
          const isOpen = openItemId === item.id;
          const buttonId = `${shelf.id}-btn-${item.id}`;
          const panelId = `${shelf.id}-panel-${item.id}`;

          const computedRightLabel =
            item.start && item.end
              ? formatDateRange(item.start, item.end)
              : item.rightLabel;

          const hasFooterRow =
            (item.tags && item.tags.length > 0) ||
            Boolean(item.href) ||
            Boolean(item.internalLink) ||
            Boolean(item.statusNote);

          return (
            <div
              key={item.id}
              className={`rounded-[8px] transition-colors duration-150 ${
                isOpen
                  ? `${isTwoCol ? 'sm:col-span-2 ' : ''}bg-[var(--bg-alt)] border border-[var(--border)]`
                  : 'border border-transparent'
              }`}
            >
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => handleToggle(item.id)}
                className={`group w-full flex items-center gap-2.5 sm:gap-3 text-left rounded-[8px] cursor-pointer transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] scroll-mt-24 ${
                  isOpen
                    ? 'px-3.5 pt-3 pb-2'
                    : 'px-2.5 py-2 hover:bg-[var(--bg-alt)]'
                }`}
              >
                <PixelIcon
                  name={item.icon}
                  className="w-[25px] h-[25px] shrink-0"
                />
                <span
                  className={`flex-1 min-w-0 font-medium transition-colors duration-150 ${
                    isOpen
                      ? 'text-[var(--accent)]'
                      : 'text-[var(--text)] group-hover:text-[var(--accent)] group-hover:underline decoration-1 underline-offset-4'
                  }`}
                >
                  {item.title}
                </span>

                {item.accentBadge && (
                  <span className="font-mono text-[12px] text-[var(--accent)] bg-[var(--accent-soft)] px-2 py-0.5 rounded-[6px] shrink-0 whitespace-nowrap">
                    {item.accentBadge}
                  </span>
                )}

                {computedRightLabel && (
                  <span className="font-mono text-[12.5px] text-[var(--text-muted)] tabular-nums shrink-0 whitespace-nowrap">
                    {computedRightLabel}
                  </span>
                )}

                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                  className={`w-4 h-4 shrink-0 transition-transform duration-200 motion-reduce:transition-none ${
                    isOpen
                      ? 'rotate-180 text-[var(--accent)]'
                      : 'text-[var(--text-muted)] group-hover:text-[var(--accent)]'
                  }`}
                >
                  <path
                    d="M4 6L8 10L12 6"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Smooth ~200ms height reveal panel (instant if prefers-reduced-motion) */}
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                aria-hidden={!isOpen}
                className={`grid transition-[grid-template-rows,opacity] duration-200 ease-out motion-reduce:transition-none ${
                  isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-3.5 pb-3.5 pt-1 sm:pl-[49px] space-y-2.5">
                    {item.description && (
                      <p className="text-[15px] leading-[1.55] text-[var(--text)] max-w-[64ch]">
                        {item.description}
                      </p>
                    )}

                    {item.keyResult && (
                      <p className="font-mono text-[13px] font-medium text-[var(--accent)]">
                        {item.keyResult}
                      </p>
                    )}

                    {item.chart && <AurocChart data={item.chart} />}

                    {item.labeledTags && (
                      <div className="space-y-1.5 pt-0.5">
                        <p className="font-mono text-[12.5px] text-[var(--text-muted)]">
                          {item.labeledTags.label}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {item.labeledTags.items.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-[8px] border border-[var(--border)] bg-[var(--bg)] px-2.5 py-0.5 font-mono text-[12px] text-[var(--text-muted)] whitespace-nowrap"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {item.publication && (
                      <div className="pt-2.5 border-t border-[var(--border)] space-y-1.5">
                        <p className="font-mono text-[12px] text-[var(--text-muted)]">
                          {item.publication.heading}
                        </p>
                        <div className="flex items-start gap-2.5">
                          <PixelIcon
                            name={item.publication.icon}
                            className="w-[18px] h-[18px] shrink-0 mt-0.5"
                          />
                          <div className="min-w-0 space-y-1">
                            <p className="text-[14.5px] font-medium leading-[1.45] text-[var(--text)]">
                              {item.publication.title}
                            </p>
                            <p className="text-[13px] text-[var(--text-muted)]">
                              {item.publication.venue}
                            </p>
                            <a
                              href={item.publication.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              tabIndex={isOpen ? 0 : -1}
                              className="inline-flex items-center font-mono text-[13px] font-medium text-[var(--accent)] hover:underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] rounded-[4px] whitespace-nowrap"
                            >
                              {item.publication.linkLabel}
                            </a>
                          </div>
                        </div>
                      </div>
                    )}

                    {hasFooterRow && (
                      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 pt-1">
                        {item.tags && item.tags.length > 0 ? (
                          <div className="flex flex-wrap gap-1.5">
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="rounded-[8px] border border-[var(--border)] bg-[var(--bg)] px-2.5 py-0.5 font-mono text-[12px] text-[var(--text-muted)] whitespace-nowrap"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        ) : null}

                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
                          {item.href && (
                            <a
                              href={item.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              tabIndex={isOpen ? 0 : -1}
                              className="inline-flex items-center font-mono text-[13px] font-medium text-[var(--accent)] hover:underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] rounded-[4px] whitespace-nowrap shrink-0"
                            >
                              {item.linkLabel ?? SITE_CONTENT.ui.githubLinkText}
                            </a>
                          )}

                          {item.internalLink && (
                            <a
                              href={`#${item.internalLink.targetShelfId}-btn-${item.internalLink.targetItemId}`}
                              tabIndex={isOpen ? 0 : -1}
                              onClick={(e) => {
                                e.preventDefault();
                                onInternalNavigate?.(item.internalLink!);
                              }}
                              className="inline-flex items-center font-mono text-[12.5px] text-[var(--text-muted)] hover:text-[var(--accent)] hover:underline underline-offset-4 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] rounded-[4px]"
                            >
                              {item.internalLink.label}
                            </a>
                          )}

                          {!item.href && item.statusNote && (
                            <span className="font-mono text-[12px] text-[var(--text-muted)] whitespace-nowrap shrink-0">
                              {item.statusNote}
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {shelf.footerLink && (
        <div className="mt-4 pl-2.5">
          <a
            href={shelf.footerLink.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center font-mono text-[13px] text-[var(--text-muted)] hover:text-[var(--accent)] hover:underline underline-offset-4 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] rounded-[4px]"
          >
            {shelf.footerLink.label}
          </a>
        </div>
      )}

      {children}
    </section>
  );
};
