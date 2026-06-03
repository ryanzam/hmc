import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function AboutUs() {
    return (
        <section id="about" className="bg-surface py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
                    <Reveal>
                        <p className="eyebrow text-gold">Who We Are</p>
                    </Reveal>

                    <Reveal delay={120} className="space-y-6 text-base leading-relaxed text-charcoal/80">
                        <p>
                            Founded in 2018, Haven Management Consultants Pvt. Ltd. (HMC) is a Kathmandu-based
                            advisory firm where chartered accountants, tax specialists, and legal practitioners
                            work side by side. We help Nepali businesses navigate complex financial and
                            regulatory terrain with clarity.
                        </p>
                        <p>
                            We promise to support the growth of our clients by ensuring they have the freedom to concentrate on their core operations while we manage the financial aspects efficiently. We are here to make your business journey smoother, more profitable, and ultimately more successful.
                        </p>
                    </Reveal>
                </div>

                <div className="mt-20 grid gap-6 md:grid-cols-2">
                    {[
                        {
                            label: "Our Mission",
                            body: "Empowering businesses through expert financial management, freeing them to excel in their core operations while we handle financial complexities.",
                        },
                        {
                            label: "Our Vision",
                            body: "We envision a future where every business we serve achieves financial excellence and reaches new heights of growth and sustainability.",
                        },
                    ].map((c, i) => (
                        <Reveal key={c.label} delay={i * 120}>
                            <div className="border-l-2 border-gold bg-white p-8 shadow-[0_1px_2px_oklch(0_0_0_/_0.04),_0_8px_24px_-12px_oklch(0_0_0_/_0.08)]">
                                <p className="eyebrow text-gold">{c.label}</p>
                                <p className="mt-4 font-serif text-xl leading-snug text-navy">{c.body}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={240} className="mt-16">
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-medium text-navy transition hover:brightness-95"
                    >
                        Let's Talk <ArrowRight size={16} />
                    </a>
                </Reveal>
            </div>
        </section>
    );
}
