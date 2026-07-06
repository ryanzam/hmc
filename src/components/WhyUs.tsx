import { MapPin, Users, BadgeCheck } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
    {
        icon: MapPin,
        title: "Local Expertise",
        body: "Deep knowledge of Nepal's tax laws, regulatory bodies and financial landscape.",
    },
    {
        icon: Users,
        title: "Integrated Team",
        body: "One firm for accounting, tax, book keeping and legal advisory services in Nepal.",
    },
    {
        icon: BadgeCheck,
        title: "Affordable Quality",
        body: "Premium advisory services priced for growing Nepali businesses.",
    },
];

export function WhyUs() {
    return (
        <section id="why" className="bg-surface py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <Reveal className="mx-auto max-w-2xl text-center">
                    <p className="eyebrow text-gold">Why HMC</p>
                    <h2 className="mt-4 font-serif text-4xl sm:text-5xl">What Makes Us Different</h2>
                    <div className="gold-rule mx-auto mt-8 w-24" />
                </Reveal>

                <div className="mt-16 grid gap-5 md:grid-cols-3">
                    {items.map((it, i) => (
                        <Reveal key={it.title} delay={i * 120}>
                            <div className="flex h-full flex-col items-center border border-gold/40 bg-white p-8 text-center hover:shadow-[0_12px_26px_12px_oklch(0_0_0_/_0.12)] transition">
                                <div className="flex h-12 w-12 items-center justify-center">
                                    <it.icon className="text-gold" size={32} strokeWidth={1.5} />
                                </div>
                                <h3 className="mt-6 font-serif text-2xl text-navy">{it.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-charcoal/75">{it.body}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
