import { useEffect, useState } from 'react';
import { AccentId, InternalActionLink, SITE_CONTENT } from './content';
import { Sidebar } from './components/Sidebar';
import { PixelIcon } from './components/PixelIcons';
import { ShelfCardList } from './components/ShelfCardList';
import { FishTankStrip } from './components/FishTankStrip';

const THEME_STORAGE_KEY = 'nashira-theme';
const ACCENT_STORAGE_KEY = 'nashira-accent';
const VALID_ACCENTS: AccentId[] = ['teal', 'coral', 'kelp', 'blue', 'goldfish'];

let hasLoggedConsoleGreeting = false;

function getInitialTheme(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    if (saved === 'dark') return true;
    if (saved === 'light') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  } catch {
    return false;
  }
}

function getInitialAccent(): AccentId {
  if (typeof window === 'undefined') return 'teal';
  try {
    const saved = localStorage.getItem(ACCENT_STORAGE_KEY) as AccentId | null;
    if (saved && VALID_ACCENTS.includes(saved)) {
      return saved;
    }
  } catch {
    // ignore storage errors
  }
  return 'teal';
}

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(getInitialTheme);
  const [accent, setAccent] = useState<AccentId>(getInitialAccent);
  const [activeSection, setActiveSection] = useState<string>(SITE_CONTENT.nav[0].id);
  const [openProjectId, setOpenProjectId] = useState<string | null>(null);

  // Styled browser console greeting on initial page load
  useEffect(() => {
    if (!hasLoggedConsoleGreeting) {
      hasLoggedConsoleGreeting = true;
      console.log(
        `%c${SITE_CONTENT.consoleGreeting}`,
        'color: #1F8A82; background: #F8F4E6; border: 1px solid #E5DCBD; border-radius: 6px; padding: 6px 10px; font-family: monospace; font-size: 13px; font-weight: 600;'
      );
    }
  }, []);

  // Sync dark mode class on <html>
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  // Listen to OS color-scheme changes if user hasn't explicitly chosen a theme
  useEffect(() => {
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      try {
        if (!localStorage.getItem(THEME_STORAGE_KEY)) {
          setIsDark(e.matches);
        }
      } catch {
        setIsDark(e.matches);
      }
    };
    mql.addEventListener('change', handleChange);
    return () => mql.removeEventListener('change', handleChange);
  }, []);

  // Sync accent attribute on <html>
  useEffect(() => {
    document.documentElement.setAttribute('data-accent', accent);
  }, [accent]);

  // Track active section while scrolling (evaluated in DOM vertical order)
  useEffect(() => {
    const sectionIds = SITE_CONTENT.nav.map((item) => item.id);
    let ticking = false;

    const updateActiveOnScroll = () => {
      const elements = sectionIds
        .map((id) => document.getElementById(id))
        .filter((el): el is HTMLElement => el !== null)
        .sort((a, b) => a.offsetTop - b.offsetTop);

      if (elements.length === 0) {
        ticking = false;
        return;
      }

      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 40;

      if (nearBottom) {
        setActiveSection(elements[elements.length - 1].id);
        ticking = false;
        return;
      }

      const threshold = window.innerHeight * 0.32;
      let current = elements[0].id;

      for (const el of elements) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= threshold) {
          current = el.id;
        }
      }

      setActiveSection(current);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActiveOnScroll);
        ticking = true;
      }
    };

    updateActiveOnScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const handleToggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      try {
        localStorage.setItem(THEME_STORAGE_KEY, next ? 'dark' : 'light');
      } catch {
        // ignore storage errors
      }
      return next;
    });
  };

  const handleSelectAccent = (nextAccent: AccentId) => {
    setAccent(nextAccent);
    try {
      localStorage.setItem(ACCENT_STORAGE_KEY, nextAccent);
    } catch {
      // ignore storage errors
    }
  };

  const handleInternalNavigate = (action: InternalActionLink) => {
    if (action.targetShelfId === 'projects') {
      setOpenProjectId(action.targetItemId);
    }
    setActiveSection(action.targetShelfId);

    const targetEl =
      document.getElementById(`${action.targetShelfId}-btn-${action.targetItemId}`) ??
      document.getElementById(action.targetShelfId);

    if (targetEl) {
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;
      targetEl.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
        block: 'start',
      });
    }
  };

  const { hero, shelves, footer } = SITE_CONTENT;

  return (
    <div
      id="top"
      className="min-h-screen flex flex-col desk:flex-row bg-[var(--bg)] text-[var(--text)] transition-colors duration-150"
    >
      <Sidebar
        activeSection={activeSection}
        onSelectSection={setActiveSection}
        isDark={isDark}
        onToggleTheme={handleToggleTheme}
        accent={accent}
        onSelectAccent={handleSelectAccent}
      />

      <div className="flex-1 min-w-0">
        <main className="w-full max-w-[760px] mx-auto px-5 sm:px-8 pt-10 pb-8 desk:pt-14 desk:pb-12">
          {/* Top hero introduction */}
          <header className="pb-10">
            <p className="font-mono text-[14px] text-[var(--text-muted)]">
              {hero.greeting}
            </p>

            <h1 className="mt-1 font-display text-[2.35rem] sm:text-[2.75rem] font-bold tracking-tight text-[var(--text)] leading-[1.15]">
              {hero.name}
            </h1>

            <p className="mt-2 flex items-center gap-1.5 font-mono text-[13.5px] text-[var(--text-muted)]">
              <PixelIcon name="map-pin" className="w-3.5 h-3.5 shrink-0" />
              <span>{hero.location}</span>
            </p>

            <p className="mt-4 text-[1.05rem] leading-[1.55] max-w-[600px] text-[var(--text)]">
              {hero.intro}
            </p>

            <p className="mt-3.5 inline-flex items-center gap-2 text-[14px] text-[var(--text-muted)]">
              <span
                aria-hidden="true"
                className="w-2 h-2 rounded-full bg-[var(--accent)] availability-dot shrink-0"
              />
              <span>{hero.availability}</span>
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href={hero.primaryCta.href}
                onClick={() => setActiveSection('projects')}
                className="inline-flex items-center justify-center rounded-[8px] bg-[var(--accent)] text-[var(--accent-fg)] font-medium text-[15px] px-4 py-2 transition-opacity duration-150 hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] whitespace-nowrap"
              >
                {hero.primaryCta.label}
              </a>

              <a
                href={hero.secondaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-[8px] border border-[var(--border)] bg-transparent text-[var(--text)] font-medium text-[15px] px-4 py-2 transition-colors duration-150 hover:bg-[var(--bg-alt)] hover:border-[var(--accent)] hover:text-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] whitespace-nowrap"
              >
                {hero.secondaryCta.label}
              </a>
            </div>
          </header>

          {/* 1. Projects shelf */}
          <ShelfCardList
            shelf={shelves.projects}
            openItemId={openProjectId}
            onOpenItemChange={setOpenProjectId}
          />

          {/* 2. Experience shelf */}
          <ShelfCardList
            shelf={shelves.experience}
            onInternalNavigate={handleInternalNavigate}
          />

          {/* 3. Education shelf */}
          <ShelfCardList shelf={shelves.education} />

          {/* 4. Toolbox shelf (always visible) */}
          <section
            id={shelves.toolbox.id}
            className="scroll-mt-20 desk:scroll-mt-10 border-t border-[var(--border)] py-9"
          >
            <div className="flex items-center gap-3">
              <PixelIcon
                name={shelves.toolbox.icon}
                className="w-[28px] h-[28px] shrink-0"
              />
              <h2 className="font-display text-[1.45rem] font-semibold tracking-tight text-[var(--text)]">
                {shelves.toolbox.title}
              </h2>
            </div>

            <p className="mt-1.5 mb-5 text-[var(--text-muted)]">
              {shelves.toolbox.description}
            </p>

            <div className="space-y-4">
              {shelves.toolbox.groups.map((group) => (
                <div
                  key={group.label}
                  className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4"
                >
                  <span className="font-mono text-[13px] text-[var(--text-muted)] sm:w-28 shrink-0">
                    {group.label}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-[8px] bg-[var(--bg-alt)] border border-[var(--border)] px-2.5 py-1 text-[13.5px] text-[var(--text)] whitespace-nowrap"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 5. Journey section (between Toolbox and Off the clock) */}
          <section
            id={shelves.journey.id}
            className="scroll-mt-20 desk:scroll-mt-10 border-t border-[var(--border)] py-9"
          >
            <div className="flex items-center gap-3 mb-5">
              <PixelIcon
                name={shelves.journey.icon}
                className="w-[28px] h-[28px] shrink-0"
              />
              <h2 className="font-display text-[1.45rem] font-semibold tracking-tight text-[var(--text)]">
                {shelves.journey.title}
              </h2>
            </div>

            <div className="space-y-3.5 max-w-[65ch] text-[var(--text)]">
              {shelves.journey.paragraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </section>

          {/* 6. Off the clock shelf + pixel fish tank strip */}
          <ShelfCardList shelf={shelves.offTheClock}>
            <FishTankStrip />
          </ShelfCardList>

          {/* Footer */}
          <footer className="mt-4 pt-6 border-t border-[var(--border)] text-[14px] text-[var(--text-muted)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <p>{footer.text}</p>
            <div className="flex items-center gap-3 shrink-0">
              {footer.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  title={link.label}
                  className="p-1 rounded-[6px] text-[var(--text-muted)] opacity-75 hover:opacity-100 hover:bg-[var(--bg-alt)] transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
                >
                  <PixelIcon name={link.icon} className="w-4 h-4" />
                </a>
              ))}
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
