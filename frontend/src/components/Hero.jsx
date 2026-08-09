import { ArrowRight, Check, Sparkles, X } from "lucide-react";
import Reveal from "./Reveal";
import { CAPABILITIES } from "../data/content";

export default function Hero() {
    return (
        <section
            id="home"
            data-testid="hero-section"
            className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-20 md:pt-32"
        >
            <div className="gold-radial absolute -top-40 -right-40 h-[36rem] w-[36rem] rounded-full blur-3xl pointer-events-none" />
            <div className="gold-radial absolute bottom-0 -left-52 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-60 pointer-events-none" />

            <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 items-center">
                    <div className="lg:col-span-7">
                        <Reveal>
                            <p
                                data-testid="hero-eyebrow"
                                className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/5 px-4 py-1.5 text-xs tracking-[0.18em] uppercase text-gold-champagne"
                            >
                                <Sparkles className="h-3.5 w-3.5" />
                                AI Avatar Content · Done-For-You System
                            </p>
                        </Reveal>

                        <Reveal delay={0.1}>
                            <h1
                                data-testid="hero-headline"
                                className="font-heading mt-7 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-[1.05] text-cream"
                            >
                                Your Content System.
                                <br />
                                <span className="font-accent italic font-medium gold-text-gradient">
                                    Done For You.
                                </span>
                            </h1>
                        </Reveal>

                        <Reveal delay={0.18}>
                            <p
                                data-testid="hero-subheadline"
                                className="mt-6 max-w-xl text-base md:text-lg leading-relaxed text-cream/60"
                            >
                                AI-powered content that keeps your brand consistent, strategic
                                and built for reach. Hey, I'm{" "}
                                <span className="text-cream font-medium">Sharek Pathan</span> —
                                I build AI Avatar + Done-For-You content systems for creators
                                and brands, from ideation and scripting to AI avatar creation,
                                voice, editing and content strategy.
                            </p>
                        </Reveal>

                        <Reveal delay={0.24}>
                            <p
                                data-testid="hero-not-generic"
                                className="mt-5 inline-flex items-center gap-2 text-sm text-cream/50"
                            >
                                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-gold/30 text-gold">
                                    <X className="h-3 w-3" />
                                </span>
                                Not generic content &amp; reels.
                            </p>
                        </Reveal>

                        <Reveal delay={0.3}>
                            <div className="mt-9 flex flex-wrap items-center gap-4">
                                <a
                                    href="#work"
                                    data-testid="hero-cta-view-work"
                                    className="btn-gold inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 font-semibold text-ink"
                                >
                                    View My Work
                                    <ArrowRight className="h-4 w-4" />
                                </a>
                                <a
                                    href="#contact"
                                    data-testid="hero-cta-talk"
                                    className="btn-outline inline-flex items-center gap-2 rounded-full border border-cream/15 px-7 py-3.5 font-medium text-cream/80 hover:border-gold/40 hover:text-gold-champagne"
                                >
                                    Talk to Sharek
                                </a>
                            </div>
                        </Reveal>

                        <Reveal delay={0.38}>
                            <div
                                data-testid="hero-stats"
                                className="mt-12 flex items-center gap-10 md:gap-14"
                            >
                                <div>
                                    <p
                                        data-testid="hero-stat-views"
                                        className="font-heading text-4xl md:text-5xl font-extrabold tracking-tight gold-text-gradient"
                                    >
                                        50M+
                                    </p>
                                    <p className="mt-1 text-xs md:text-sm tracking-wide text-cream/50">
                                        Views Generated
                                    </p>
                                </div>
                                <div className="h-12 w-px bg-white/10" />
                                <div>
                                    <p
                                        data-testid="hero-stat-clients"
                                        className="font-heading text-4xl md:text-5xl font-extrabold tracking-tight text-cream"
                                    >
                                        15+
                                    </p>
                                    <p className="mt-1 text-xs md:text-sm tracking-wide text-cream/50">
                                        Clients Worked With
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    <div className="lg:col-span-5 flex flex-col gap-6">
                        <Reveal delay={0.2}>
                            <div
                                data-testid="results-first-card"
                                className="card-hover relative overflow-hidden rounded-2xl border border-gold/25 bg-charcoal/80 p-8 md:p-10"
                            >
                                <div className="gold-radial absolute -top-24 -right-24 h-64 w-64 rounded-full blur-3xl pointer-events-none" />
                                <p className="text-xs tracking-[0.22em] uppercase text-gold/80">
                                    What makes us different
                                </p>
                                <p
                                    data-testid="results-first-title"
                                    className="font-heading mt-4 text-3xl md:text-4xl font-extrabold tracking-tight gold-text-gradient"
                                >
                                    RESULTS FIRST.
                                </p>
                                <p className="font-accent italic mt-4 text-lg md:text-xl leading-relaxed text-cream/85">
                                    "If you don't get results, you don't need to pay."
                                </p>
                            </div>
                        </Reveal>

                        <Reveal delay={0.3}>
                            <div
                                data-testid="capabilities-card"
                                className="card-hover rounded-2xl border border-white/5 bg-charcoal/60 p-8"
                            >
                                <p className="text-xs tracking-[0.22em] uppercase text-cream/40">
                                    The complete system
                                </p>
                                <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5">
                                    {CAPABILITIES.map((cap) => (
                                        <li
                                            key={cap}
                                            data-testid={`capability-${cap.toLowerCase().replace(/\s+/g, "-")}`}
                                            className="flex items-center gap-2.5 text-sm text-cream/75"
                                        >
                                            <Check className="h-4 w-4 shrink-0 text-gold" />
                                            {cap}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
