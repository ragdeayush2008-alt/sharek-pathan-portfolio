import { useState } from "react";
import { ArrowUpRight, Instagram } from "lucide-react";
import Reveal from "./Reveal";
import ReelCard from "./ReelCard";
import { CLIENTS, REELS } from "../data/content";

export default function Work() {
    const [activeReel, setActiveReel] = useState(null);

    return (
        <section
            id="work"
            data-testid="work-section"
            className="relative py-28 md:py-36 overflow-hidden"
        >
            <div className="gold-radial absolute top-1/3 left-1/2 -translate-x-1/2 h-[40rem] w-[40rem] rounded-full blur-3xl opacity-50 pointer-events-none" />

            <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
                <Reveal>
                    <p className="text-xs tracking-[0.22em] uppercase text-gold/80">
                        Portfolio
                    </p>
                    <h2
                        data-testid="work-headline"
                        className="font-heading mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter text-cream"
                    >
                        Work That{" "}
                        <span className="font-accent italic font-medium gold-text-gradient">
                            Speaks.
                        </span>
                    </h2>
                    <p
                        data-testid="work-subheadline"
                        className="mt-4 max-w-lg text-base md:text-lg text-cream/55"
                    >
                        Real content. Real clients. Built for attention.
                    </p>
                </Reveal>

                <div
                    data-testid="reels-grid"
                    className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
                >
                    {REELS.map((reel, i) => (
                        <Reveal key={reel.id} delay={0.08 * i}>
                            <ReelCard
                                reel={reel}
                                index={i}
                                active={activeReel === i}
                                onActivate={setActiveReel}
                            />
                        </Reveal>
                    ))}
                </div>

                <div className="mt-28 md:mt-36">
                    <Reveal>
                        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                            <div>
                                <p className="text-xs tracking-[0.22em] uppercase text-gold/80">
                                    Social Proof
                                </p>
                                <h3
                                    data-testid="worked-with-headline"
                                    className="font-heading mt-3 text-3xl md:text-4xl font-extrabold tracking-tight text-cream"
                                >
                                    Worked With
                                </h3>
                            </div>
                            <p
                                data-testid="worked-with-stats"
                                className="text-sm text-cream/50"
                            >
                                15+ clients{" "}
                                <span className="text-gold mx-1">•</span> 50M+ views generated
                            </p>
                        </div>
                    </Reveal>

                    <div
                        data-testid="clients-grid"
                        className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
                    >
                        {CLIENTS.map((handle, i) => (
                            <Reveal key={handle} delay={0.06 * i}>
                                <a
                                    href={`https://instagram.com/${handle}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    data-testid={`client-card-${handle.replace(/\./g, "-")}`}
                                    className="card-hover group flex items-center gap-3.5 rounded-xl border border-white/5 bg-charcoal/70 px-5 py-4"
                                >
                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/20 bg-gold/5 text-gold">
                                        <Instagram className="h-4 w-4" />
                                    </span>
                                    <span className="min-w-0">
                                        <span className="block truncate text-sm font-medium text-cream/85 group-hover:text-gold-champagne transition-colors duration-300">
                                            @{handle}
                                        </span>
                                        <span className="mt-0.5 flex items-center gap-1 text-[11px] text-cream/40">
                                            View profile
                                            <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                        </span>
                                    </span>
                                </a>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
