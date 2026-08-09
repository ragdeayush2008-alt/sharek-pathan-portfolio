import { Instagram, MessageCircle } from "lucide-react";
import Reveal from "./Reveal";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, WHATSAPP_URL } from "../data/content";

export default function Contact() {
    return (
        <section
            id="contact"
            data-testid="contact-section"
            className="relative min-h-screen flex flex-col justify-center overflow-hidden py-28 md:py-36"
        >
            <div className="gold-radial absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[42rem] w-[42rem] rounded-full blur-3xl pointer-events-none" />

            <div className="relative mx-auto w-full max-w-4xl px-6 text-center">
                <Reveal>
                    <p className="text-xs tracking-[0.22em] uppercase text-gold/80">
                        Let's Build
                    </p>
                    <h2
                        data-testid="contact-headline"
                        className="font-heading mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-[1.08] text-cream"
                    >
                        Ready to stop doing{" "}
                        <span className="font-accent italic font-medium gold-text-gradient">
                            everything yourself?
                        </span>
                    </h2>
                </Reveal>

                <Reveal delay={0.12}>
                    <p
                        data-testid="contact-copy"
                        className="mx-auto mt-6 max-w-xl text-base md:text-lg leading-relaxed text-cream/60"
                    >
                        Let's build a content system that keeps your brand consistent,
                        strategic and moving. I handle the content system — from ideas and
                        scripts to AI avatars, voice, editing and strategy.
                    </p>
                </Reveal>

                <Reveal delay={0.2}>
                    <p
                        data-testid="contact-statement"
                        className="font-heading mt-12 text-2xl md:text-3xl font-bold tracking-tight text-cream/90"
                    >
                        Your content.{" "}
                        <span className="text-gold">My system.</span>{" "}
                        <span className="font-accent italic font-medium gold-text-gradient">
                            Let's build.
                        </span>
                    </p>
                </Reveal>

                <Reveal delay={0.28}>
                    <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="whatsapp-cta-button"
                            className="btn-gold inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-full bg-gold px-8 py-4 font-semibold text-ink"
                        >
                            <MessageCircle className="h-5 w-5" />
                            Connect With Me on WhatsApp
                        </a>
                        <a
                            href={INSTAGRAM_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="instagram-cta-button"
                            className="btn-outline inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-full border border-cream/15 px-8 py-4 font-medium text-cream/80 hover:border-gold/40 hover:text-gold-champagne"
                        >
                            <Instagram className="h-5 w-5" />
                            Connect on Instagram
                        </a>
                    </div>
                </Reveal>
            </div>

            <footer
                data-testid="site-footer"
                className="relative mt-24 border-t border-white/5 pt-8 pb-2"
            >
                <div className="mx-auto flex max-w-7xl flex-col md:flex-row items-center justify-between gap-3 px-6 lg:px-10 text-xs text-cream/35">
                    <p>© 2026 Sharek Pathan · AI Avatar &amp; Done-For-You Content System</p>
                    <a
                        href={INSTAGRAM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid="footer-instagram-link"
                        className="hover:text-gold transition-colors duration-300"
                    >
                        {INSTAGRAM_HANDLE}
                    </a>
                </div>
            </footer>
        </section>
    );
}
