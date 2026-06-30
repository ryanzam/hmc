import {
    Users,
    Building2Icon,
    ScrollTextIcon,
    IdCardIcon,
    CalculatorIcon,
    NotebookPenIcon,
    FileChartPieIcon,
    ChartNoAxesColumnIncreasingIcon,
    GraduationCapIcon,
    BookOpenCheckIcon,
    BanknoteArrowDownIcon,
} from "lucide-react";
import type { ComponentType, SVGProps } from "react";

import { Reveal } from "./Reveal";
import { GiPayMoney } from "react-icons/gi";
import { PiHandHeartThin } from "react-icons/pi";
import { RiPresentationLine } from "react-icons/ri";

type ServiceIcon = ComponentType<SVGProps<SVGSVGElement> & { size?: number; strokeWidth?: number }>;

export const services: { icon: ServiceIcon; strokeWidth: number; title: string; body: string }[] = [
    { icon: Building2Icon, strokeWidth: 1.4, title: "Company Registration", body: "Private, Pvt. Ltd., One Person Company including all types of comapny registration service." },
    { icon: ScrollTextIcon, strokeWidth: 1.4, title: "Form Registration", body: "Partnership form, Proprietary form including other form registration service." },
    { icon: IdCardIcon, strokeWidth: 1.4, title: "PAN/VAT Registration", body: "PAN, VAT, Taxpayer registration and annual compliance update service." },
    { icon: Users, strokeWidth: 1.4, title: "Tax Counseling", body: "Offering tax planning, tax counseling and all the tax related consultancy service." },
    { icon: CalculatorIcon, strokeWidth: 1.4, title: "Tax Returns", body: "Income tax, VAT and other tax returns and tax submission" },
    { icon: NotebookPenIcon, strokeWidth: 1.4, title: "Accounting & Book Keeping", body: "Business accounting management, book keeping and accounting outsourcing service." },
    { icon: FileChartPieIcon, strokeWidth: 1.4, title: "Preparation of Financial Statements", body: "Balance sheet, profit & loss accounts, cash flow statements, etc." },
    { icon: ChartNoAxesColumnIncreasingIcon, strokeWidth: 1.4, title: "Business Plan & Project Report", body: "Provding business planing, project reports and feasibility analysis service." },
    { icon: BanknoteArrowDownIcon, strokeWidth: 1.4, title: "FDI Approval", body: "FDI approval and necessary bureaucratic service." },
    { icon: PiHandHeartThin, strokeWidth: 1.4, title: "NGO/INGO Service", body: "NGO, INGO registration, renewal and management related service." },
    { icon: BookOpenCheckIcon, strokeWidth: 1.4, title: "Compliance Service", body: "Company, tax and other legal compliance related service." },
    { icon: GraduationCapIcon, strokeWidth: 1.4, title: "Tax & Accouting Training", body: "Personal and organizational tax and accounting training service." },
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



                <div className="mt-16 grid gap-6 grid-cols-1 md:grid-cols-4">
                    {services.map((s, i) => (
                        <Reveal key={s.title} delay={(i % 4) * 80}>
                            <div className="service-card h-full p-5">
                                <s.icon className="text-gold" size={28} strokeWidth={s.strokeWidth} />
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
