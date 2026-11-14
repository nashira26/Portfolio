import React, { useMemo } from "react";
import {
	AchievementsShelf,
	formatDateRange,
	InternalActionLink,
} from "../content";
import { PixelIcon } from "./PixelIcons";

interface AchievementListProps {
	shelf: AchievementsShelf;
	onInternalNavigate?: (action: InternalActionLink) => void;
}

const smallLinkClass =
	"font-mono text-[12.5px] text-[var(--text-muted)] hover:text-[var(--accent)] hover:underline underline-offset-4 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] rounded-[4px]";

/** Simple, non-collapsible rows: icon, title (optionally linked), muted issuer, date on the right. */
export const AchievementList: React.FC<AchievementListProps> = ({
	shelf,
	onInternalNavigate,
}) => {
	// Newest first: by end date, then start date
	const items = useMemo(
		() =>
			[...shelf.items].sort(
				(a, b) =>
					b.end.localeCompare(a.end) || b.start.localeCompare(a.start)
			),
		[shelf.items]
	);

	return (
		<section
			id={shelf.id}
			className="scroll-mt-20 desk:scroll-mt-10 border-t border-[var(--border)] py-9">
			{/* Heading row */}
			<div
				className={`flex items-center gap-3 ${
					shelf.description ? "" : "mb-5"
				}`}>
				<PixelIcon name={shelf.icon} className="w-[28px] h-[28px] shrink-0" />
				<h2 className="font-display text-[1.45rem] font-semibold tracking-tight text-[var(--text)]">
					{shelf.title}
				</h2>
			</div>

			{shelf.description && (
				<p className="mt-1.5 mb-5 text-[var(--text-muted)]">
					{shelf.description}
				</p>
			)}

			<ul className="grid grid-cols-1 gap-y-1.5">
				{items.map((item) => (
					<li
						key={item.id}
						className="flex items-start gap-2.5 sm:gap-3 px-2.5 py-2 rounded-[8px]">
						{/* Fixed-width icon slot keeps titles aligned whether a logo or pixel icon is shown */}
						<span className="w-[34px] h-[34px] shrink-0 flex items-center justify-center">
							{item.logo ? (
								<img
									src={item.logo}
									alt=""
									aria-hidden="true"
									className="w-[34px] h-[34px] object-contain rounded-[5px]"
									onError={(e) => {
										e.currentTarget.style.visibility = "hidden";
									}}
								/>
							) : (
								<PixelIcon name={item.icon} className="w-[25px] h-[25px]" />
							)}
						</span>

						<span className="flex-1 min-w-0 flex flex-col gap-0.5">
							{item.href ? (
								<a
									href={item.href}
									target="_blank"
									rel="noopener noreferrer"
									className="font-medium text-[var(--text)] hover:text-[var(--accent)] hover:underline decoration-1 underline-offset-4 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] rounded-[4px]">
									{item.title}
								</a>
							) : (
								<span className="font-medium text-[var(--text)]">
									{item.title}
								</span>
							)}

							<span className="text-[14.5px] text-[var(--text-muted)]">
								{item.issuer}
							</span>

							{((item.links && item.links.length > 0) ||
								item.internalLink) && (
								<span className="flex flex-wrap items-center gap-x-3 gap-y-1 pt-0.5">
									{item.links?.map((link) => (
										<a
											key={link.href}
											href={link.href}
											target="_blank"
											rel="noopener noreferrer"
											className={smallLinkClass}>
											{link.label} ↗
										</a>
									))}

									{item.internalLink && (
										<a
											href={`#${item.internalLink.targetShelfId}-btn-${item.internalLink.targetItemId}`}
											onClick={(e) => {
												e.preventDefault();
												onInternalNavigate?.(item.internalLink!);
											}}
											className={smallLinkClass}>
											{item.internalLink.label}
										</a>
									)}
								</span>
							)}
						</span>

						<span className="flex items-center gap-2.5 sm:gap-3 shrink-0 pt-0.5">
							{item.accentBadge && (
								<span className="font-mono text-[12px] text-[var(--accent)] bg-[var(--accent-soft)] px-2 py-0.5 rounded-[6px] whitespace-nowrap">
									{item.accentBadge}
								</span>
							)}
							<span className="font-mono text-[12.5px] text-[var(--text-muted)] tabular-nums whitespace-nowrap">
								{formatDateRange(item.start, item.end)}
							</span>
						</span>
					</li>
				))}
			</ul>
		</section>
	);
};
