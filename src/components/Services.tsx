import {
    Calculator,
    Search,
    type LucideIcon,
    NotebookPenIcon,
    CalendarCogIcon,
    Users,
    BookSearchIcon,
    BlocksIcon,
    AwardIcon,
} from "lucide-react";

import { Reveal } from "./Reveal";

const services: { icon: LucideIcon; title: string; body: string }[] = [
    { icon: NotebookPenIcon, title: "Strategic Planning", body: "Assisting businesses in developing and executing effective long-term strategies for growth and competitiveness." },
    { icon: Calculator, title: "Financial Management", body: "Providing financial analysis, budgeting, and forecasting to optimize financial performance and profitability." },
    { icon: CalendarCogIcon, title: "Operational Efficiency", body: "Identifying and implementing process improvements and cost-saving measures." },
    { icon: Users, title: "Human Resources", body: "Offering HR consulting services, including talent acquisition, performance management, and employee development." },
    { icon: BookSearchIcon, title: "Market Research & Analysis", body: "Conducting market research to help businesses understand their target audience and make informed decisions." },
    { icon: BlocksIcon, title: "Technology Integration", body: "Advising on the adoption and integration of technology solutions to streamline operations and enhance productivity." },
    { icon: AwardIcon, title: "Marketing and Branding", body: "Developing marketing strategies, brand positioning, and customer engagement plans to boost visibility and sales." },
    { icon: Search, title: "Risk Management", body: "Identifying and mitigating business risks, including regulatory compliance and cybersecurity." },
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
