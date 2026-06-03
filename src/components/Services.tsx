import {
    Calculator,
    BookOpen,
    Search,
    type LucideIcon,
} from "lucide-react";
import { Reveal } from "./Reveal";

const services: { icon: LucideIcon; title: string; body: string }[] = [
    { icon: Calculator, title: "Taxation & Compliance", body: "VAT, income tax, TDS filing and full regulatory compliance for Nepali businesses." },
    { icon: BookOpen, title: "Accounting & Bookkeeping", body: "Accurate, timely financial records using modern accounting software." },
    { icon: Search, title: "Audit & Assurance", body: "Independent financial audits that build credibility with stakeholders." },
];

export function Services() {
    return (
        <section id="services" className="bg-white py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <Reveal className="mx-auto max-w-2xl text-center">
                    <p className="eyebrow text-gold">What We Do</p>
                    <h2 className="mt-4 font-serif text-4xl sm:text-5xl">Our Services</h2>
                    <div className="gold-rule mx-auto mt-8 w-24" />
                </Reveal>

                <div className="mt-16 grid gap-6 grid-cols-1 md:grid-cols-3">
                    {services.map((s, i) => (
                        <Reveal key={s.title} delay={(i % 4) * 80}>
                            <div className="service-card h-full p-7">
                                <s.icon className="text-gold" size={28} strokeWidth={1.4} />
                                <h3 className="mt-6 font-serif text-xl text-navy">{s.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-charcoal/70">{s.body}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
