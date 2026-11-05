import React, { useEffect, useRef, useState } from "react";
import { AccentId, SITE_CONTENT } from "../content";
import { PixelIcon } from "./PixelIcons";

interface SidebarProps {
	activeSection: string;
	onSelectSection: (id: string) => void;
	isDark: boolean;
	onToggleTheme: () => void;
	accent: AccentId;
	onSelectAccent: (accent: AccentId) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
	activeSection,
	onSelectSection,
	isDark,
	onToggleTheme,
	accent,
	onSelectAccent,
}) => {
	const [pickerOpen, setPickerOpen] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const pickerRefDesktop = useRef<HTMLDivElement | null>(null);
	const pickerRefMobile = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const handlePointerDown = (e: MouseEvent) => {
			const target = e.target as Node;
			const inDesktop = pickerRefDesktop.current?.contains(target);
			const inMobile = pickerRefMobile.current?.contains(target);
			if (!inDesktop && !inMobile) {
				setPickerOpen(false);
			}
		};

		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				setPickerOpen(false);
				setMobileMenuOpen(false);
			}
		};

		document.addEventListener("mousedown", handlePointerDown);
		document.addEventListener("keydown", handleKeyDown);
		return () => {
			document.removeEventListener("mousedown", handlePointerDown);
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, []);

	const renderAccentPicker = (
		refObj: React.RefObject<HTMLDivElement | null>
	) => (
		<div ref={refObj} className="relative">
			<button
				type="button"
				aria-label={SITE_CONTENT.ui.accentPickerLabel}
				aria-expanded={pickerOpen}
				onClick={() => setPickerOpen((prev) => !prev)}
				className="w-8 h-8 rounded-[8px] flex items-center justify-center border border-transparent hover:border-[var(--border)] hover:bg-[var(--bg-alt)] transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]">
				<span
					aria-hidden="true"
					className="w-3.5 h-3.5 rounded-full bg-[var(--accent)] ring-1 ring-[var(--border)]"
				/>
			</button>

			{pickerOpen && (
				<div
					role="menu"
					aria-label={SITE_CONTENT.ui.accentPickerLabel}
					className="absolute right-0 mt-1.5 w-40 rounded-[8px] border border-[var(--border)] bg-[var(--bg)] p-1.5 shadow-sm z-50">
					{SITE_CONTENT.accents.map((opt) => {
						const selected = opt.id === accent;
						return (
							<button
								key={opt.id}
								type="button"
								role="menuitemradio"
								aria-checked={selected}
								onClick={() => {
									onSelectAccent(opt.id);
									setPickerOpen(false);
								}}
								className={`w-full flex items-center gap-2.5 px-2.5 py-1.5 rounded-[6px] text-left font-mono text-[12.5px] transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[var(--accent)] ${
									selected
										? "bg-[var(--bg-alt)] text-[var(--text)] font-semibold"
										: "text-[var(--text-muted)] hover:bg-[var(--bg-alt)] hover:text-[var(--text)]"
								}`}>
								<span
									aria-hidden="true"
									className={`w-3 h-3 rounded-full shrink-0 ${opt.swatchClass}`}
								/>
								<span className="flex-1 truncate">{opt.label}</span>
								{selected && (
									<span
										aria-hidden="true"
										className="text-[var(--accent)] text-xs">
										✓
									</span>
								)}
							</button>
						);
					})}
				</div>
			)}
		</div>
	);

	const renderThemeButton = () => (
		<button
			type="button"
			onClick={onToggleTheme}
			aria-label={
				isDark
					? SITE_CONTENT.ui.themeToggleLightLabel
					: SITE_CONTENT.ui.themeToggleDarkLabel
			}
			className="w-8 h-8 rounded-[8px] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--bg-alt)] border border-transparent hover:border-[var(--border)] transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]">
			{isDark ? (
				/* Crisp sun icon */
				<svg
					viewBox="0 0 16 16"
					fill="none"
					aria-hidden="true"
					className="w-4 h-4">
					<circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
					<path
						d="M8 1.5V3M8 13V14.5M1.5 8H3M13 8H14.5M3.4 3.4L4.5 4.5M11.5 11.5L12.6 12.6M12.6 3.4L11.5 4.5M4.5 11.5L3.4 12.6"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
					/>
				</svg>
			) : (
				/* Crisp crescent moon icon */
				<svg
					viewBox="0 0 16 16"
					fill="none"
					aria-hidden="true"
					className="w-4 h-4">
					<path
						d="M13.2 9.8A5.5 5.5 0 0 1 6.2 2.8a5.5 5.5 0 1 0 7 7Z"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			)}
		</button>
	);

	const renderNavLinks = (onNavigate?: () => void) => (
		<nav aria-label="Page sections" className="space-y-0.5">
			{SITE_CONTENT.nav.map((item) => {
				const isActive = activeSection === item.id;
				return (
					<a
						key={item.id}
						href={`#${item.id}`}
						onClick={() => {
							onSelectSection(item.id);
							onNavigate?.();
						}}
						className={`flex items-center gap-2.5 px-2.5 py-1.5 rounded-[8px] text-[14px] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] ${
							isActive
								? "bg-[var(--accent-soft)] text-[var(--accent)] font-medium"
								: "text-[var(--text-muted)] hover:bg-[var(--bg-alt)] hover:text-[var(--text)]"
						}`}>
						<PixelIcon name={item.icon} className="w-4 h-4 shrink-0" />
						<span className="truncate">{item.label}</span>
					</a>
				);
			})}
		</nav>
	);

	const renderSocialLinks = () => (
		<div className="space-y-0.5">
			{SITE_CONTENT.socials.map((item) => (
				<a
					key={item.label}
					href={item.href}
					target={item.external ? "_blank" : undefined}
					rel={item.external ? "noopener noreferrer" : undefined}
					className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-[8px] text-[14px] text-[var(--text-muted)] hover:bg-[var(--bg-alt)] hover:text-[var(--accent)] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]">
					<PixelIcon name={item.icon} className="w-4 h-4 shrink-0" />
					<span className="truncate">{item.label}</span>
				</a>
			))}
		</div>
	);

	const renderStatusCard = () => (
		<div className="rounded-[8px] bg-[var(--bg-alt)] border border-[var(--border)] px-3 py-2.5 text-[13px] leading-[1.5] text-[var(--text-muted)] space-y-1">
			<p
				className="truncate"
				title={`${SITE_CONTENT.sidebarCard.readingPrefix} ${SITE_CONTENT.sidebarCard.reading}`}>
				<span className="font-mono">
					{SITE_CONTENT.sidebarCard.readingPrefix}
				</span>{" "}
				<span className="text-[var(--text)]">
					{SITE_CONTENT.sidebarCard.reading}
				</span>
			</p>
			<p
				className="truncate"
				title={`${SITE_CONTENT.sidebarCard.tankPrefix} ${SITE_CONTENT.sidebarCard.tank}`}>
				<span className="font-mono">{SITE_CONTENT.sidebarCard.tankPrefix}</span>{" "}
				<span className="text-[var(--text)]">
					{SITE_CONTENT.sidebarCard.tank}
				</span>
			</p>
		</div>
	);

	return (
		<>
			{/* Desktop sticky sidebar (>=1020px) */}
			<aside className="hidden desk:flex desk:flex-col desk:sticky desk:top-0 desk:h-screen desk:w-[260px] desk:shrink-0 border-r border-[var(--border)] bg-[var(--bg)] select-none overflow-y-auto">
				{/* 1. Logo row */}
				<div className="flex items-center justify-between gap-2 px-4 py-3.5 border-b border-[var(--border)]">
					<a
						href="#top"
						className="inline-flex items-center gap-2 rounded-[6px] py-0.5 pr-1 text-[var(--text)] hover:text-[var(--accent)] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] whitespace-nowrap">
						<PixelIcon name="fish" className="w-4 h-4 shrink-0" />
						<span className="font-mono font-semibold text-[15px]">
							{SITE_CONTENT.meta.siteName}
						</span>
					</a>

					<div className="flex items-center gap-0.5 shrink-0">
						{renderAccentPicker(pickerRefDesktop)}
						{renderThemeButton()}
					</div>
				</div>

				{/* 2. Nav links */}
				<div className="px-3 py-3.5 border-b border-[var(--border)]">
					{renderNavLinks()}
				</div>

				{/* 3. Social links */}
				<div className="px-3 py-3.5 border-b border-[var(--border)]">
					{renderSocialLinks()}
				</div>
			</aside>

			{/* Mobile slim top bar (<1020px) */}
			<header className="desk:hidden sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--bg)]">
				<div className="h-[52px] px-4 flex items-center justify-between gap-3">
					<a
						href="#top"
						onClick={() => setMobileMenuOpen(false)}
						className="inline-flex items-center gap-2 rounded-[6px] py-1 text-[var(--text)] hover:text-[var(--accent)] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] whitespace-nowrap">
						<PixelIcon name="fish" className="w-4 h-4 shrink-0" />
						<span className="font-mono font-semibold text-[15px]">
							{SITE_CONTENT.meta.siteName}
						</span>
					</a>

					<div className="flex items-center gap-1 shrink-0">
						{renderAccentPicker(pickerRefMobile)}
						{renderThemeButton()}
						<button
							type="button"
							aria-expanded={mobileMenuOpen}
							aria-controls="mobile-nav-drawer"
							aria-label={
								mobileMenuOpen
									? SITE_CONTENT.ui.mobileMenuCloseLabel
									: SITE_CONTENT.ui.mobileMenuOpenLabel
							}
							onClick={() => setMobileMenuOpen((prev) => !prev)}
							className="w-9 h-9 rounded-[8px] flex items-center justify-center text-[var(--text)] hover:bg-[var(--bg-alt)] border border-transparent hover:border-[var(--border)] transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]">
							{mobileMenuOpen ? (
								<svg
									viewBox="0 0 16 16"
									fill="none"
									aria-hidden="true"
									className="w-4 h-4">
									<path
										d="M3.5 3.5L12.5 12.5M12.5 3.5L3.5 12.5"
										stroke="currentColor"
										strokeWidth="1.6"
										strokeLinecap="round"
									/>
								</svg>
							) : (
								<svg
									viewBox="0 0 16 16"
									fill="none"
									aria-hidden="true"
									className="w-4 h-4">
									<path
										d="M2.5 4.5H13.5M2.5 8H13.5M2.5 11.5H13.5"
										stroke="currentColor"
										strokeWidth="1.6"
										strokeLinecap="round"
									/>
								</svg>
							)}
						</button>
					</div>
				</div>

				{mobileMenuOpen && (
					<div
						id="mobile-nav-drawer"
						className="border-t border-[var(--border)] bg-[var(--bg)] px-4 py-3.5 space-y-3.5 max-h-[calc(100vh-52px)] overflow-y-auto shadow-sm">
						<div>{renderNavLinks(() => setMobileMenuOpen(false))}</div>
						<div className="pt-3 border-t border-[var(--border)]">
							{renderSocialLinks()}
						</div>
					</div>
				)}
			</header>
		</>
	);
};
