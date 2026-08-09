import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

const LINKS = [
    { label: "Home", href: "#home", testId: "nav-link-home" },
    { label: "Work", href: "#work", testId: "nav-link-work" },
    { label: "Contact", href: "#contact", testId: "nav-link-contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <header
                data-testid="main-nav"
                className={`fixed top-0 left-0 right-0 z-[60] transition-[background-color,border-color,backdrop-filter] duration-500 ${
                    scrolled
                        ? "bg-ink/75 backdrop-blur-xl border-b border-white/5"
                        : "bg-transparent border-b border-transparent"
                }`}
            >
                <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 md:h-20 flex items-center justify-between">
                    <a
                        href="#home"
                        data-testid="nav-logo"
                        className="font-heading font-extrabold text-lg md:text-xl tracking-tight text-cream"
                    >
                        Sharek Pathan<span className="text-gold">.</span>
                    </a>

                    <nav className="hidden md:flex items-center gap-10">
                        {LINKS.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                data-testid={link.testId}
                                className="text-sm tracking-wide text-cream/60 hover:text-gold transition-colors duration-300"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            data-testid="nav-cta-button"
                            className="btn-gold inline-flex items-center gap-1.5 rounded-full bg-gold px-5 py-2 text-sm font-semibold text-ink"
                        >
                            Let's Talk
                            <ArrowUpRight className="h-4 w-4" />
                        </a>
                    </nav>

                    <button
                        data-testid="mobile-menu-toggle"
                        onClick={() => setOpen((v) => !v)}
                        className="md:hidden text-cream p-2 -mr-2"
                        aria-label="Toggle menu"
                    >
                        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </header>

            <AnimatePresence>
                {open && (
                    <motion.div
                        data-testid="mobile-menu"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[55] bg-ink/95 backdrop-blur-2xl md:hidden flex flex-col items-center justify-center gap-10"
                    >
                        {LINKS.map((link, i) => (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                data-testid={`mobile-nav-link-${link.label.toLowerCase()}`}
                                onClick={() => setOpen(false)}
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.08 * i, duration: 0.4 }}
                                className="font-heading text-4xl font-bold tracking-tight text-cream hover:text-gold transition-colors duration-300"
                            >
                                {link.label}
                            </motion.a>
                        ))}
                        <motion.a
                            href="#contact"
                            data-testid="mobile-nav-cta"
                            onClick={() => setOpen(false)}
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.28, duration: 0.4 }}
                            className="btn-gold mt-4 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 font-semibold text-ink"
                        >
                            Let's Talk
                            <ArrowUpRight className="h-4 w-4" />
                        </motion.a>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
