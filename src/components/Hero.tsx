import { ArrowRight } from "lucide-react";

const trust = [
    "130+ Happy Clients",
    "2 Regional Offices",
    "10+ Team Members",
];

export function Hero() {
    return (
        <section
            id="home"
            className="hero-noise relative isolate flex min-h-screen items-center overflow-hidden text-white"
        >
            <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-6 pt-32 pb-24 lg:grid-cols-5 lg:px-10">
                <div className="lg:col-span-3">
                    <p className="eyebrow text-gold">Helping Clients Since 2018 · Kathmandu, Nepal</p>
                    <h1 className="mt-6 font-serif text-5xl leading-[1.05] text-white sm:text-6xl lg:text-7xl">
                        Your Finances,
                        <br />
                        <span className="italic text-gold-soft">Expertly Managed.</span>
                    </h1>
                    <p className="mt-7 max-w-xl text-base font-light leading-relaxed text-white/75 sm:text-lg">
                        Haven Management Consultants brings together finance professionals, tax experts, book keepers
                        and legal practitioners to handle your business's financial complexities — so you
                        can focus on what you do best.
                    </p>
                    <div className="mt-10 flex flex-wrap gap-4">
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-medium text-navy transition hover:brightness-95"
                        >
                            Get a Free Consultation <ArrowRight size={16} />
                        </a>
                        <a
                            href="#services"
                            className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-medium text-white transition hover:border-gold hover:text-gold"
                        >
                            Explore Our Services
                        </a>
                    </div>
                </div>

                <div className="relative hidden lg:col-span-2 lg:block">
                    <HeroArt />
                </div>
            </div>

            <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-navy-deep/40 backdrop-blur-sm">
                <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-12 gap-y-3 px-6 py-5 text-xs text-white/70 sm:text-sm lg:px-10">
                    {trust.map((t) => (
                        <div key={t} className="flex items-center gap-3">
                            <span className="h-1 w-1 rounded-full bg-gold" />
                            <span className="tracking-wide">{t}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function HeroArt() {
    return (
        <svg viewBox="0 0 400 400" className="h-full w-full" aria-hidden>
            <defs>
                <linearGradient id="g1" x1="0" x2="1">
                    <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#C9A84C" stopOpacity="0.1" />
                </linearGradient>
            </defs>
            <circle cx="200" cy="200" r="160" fill="none" stroke="url(#g1)" strokeWidth="1" />
            <circle cx="200" cy="200" r="120" fill="none" stroke="#C9A84C" strokeOpacity="0.35" strokeWidth="1" />
            <circle cx="200" cy="200" r="80" fill="none" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="1" />
            <circle cx="200" cy="200" r="6" fill="#C9A84C" />
            <line x1="40" y1="200" x2="360" y2="200" stroke="#ffffff" strokeOpacity="0.12" />
            <line x1="200" y1="40" x2="200" y2="360" stroke="#ffffff" strokeOpacity="0.12" />
            <g stroke="#C9A84C" strokeOpacity="0.6">
                <line x1="200" y1="200" x2="320" y2="120" />
                <circle cx="320" cy="120" r="4" fill="#C9A84C" />
                <line x1="200" y1="200" x2="100" y2="290" />
                <circle cx="100" cy="290" r="4" fill="#C9A84C" />
                <line x1="200" y1="200" x2="290" y2="300" />
                <circle cx="290" cy="300" r="4" fill="#C9A84C" />
            </g>
            <rect x="60" y="60" width="60" height="60" fill="none" stroke="#ffffff" strokeOpacity="0.18" />
            <rect x="280" y="280" width="60" height="60" fill="none" stroke="#C9A84C" strokeOpacity="0.4" />
        </svg>
    );
}
