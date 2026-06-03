import { useState, type FormEvent } from "react";
import { z } from "zod";
import { Reveal } from "./Reveal";
import { ClockCheck, MapPin, PhoneCall } from "lucide-react";

const schema = z.object({
    name: z.string().trim().min(1, "Please enter your name").max(100),
    company: z.string().trim().max(120).optional().or(z.literal("")),
    phone: z
        .string()
        .trim()
        .min(7, "Enter a valid phone number")
        .max(20)
        .regex(/^[+\d\s\-()]+$/, "Only digits, spaces, and + - ( )"),
    service: z.string().min(1, "Please select a service"),
    message: z.string().trim().min(10, "Tell us a bit more (min 10 chars)").max(1000),
});

const services = [
    "Taxation & Compliance",
    "Accounting & Bookkeeping",
    "Audit & Assurance",
    "Corporate Law & Secretarial",
    "Financial Management",
    "Strategic Planning",
    "Operational Efficiency",
    "Risk Management",
];

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

export function Contact() {
    const [errors, setErrors] = useState<Errors>({});
    const [submitted, setSubmitted] = useState(false);

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        const data = Object.fromEntries(fd.entries());
        const result = schema.safeParse(data);
        if (!result.success) {
            const errs: Errors = {};
            for (const issue of result.error.issues) {
                errs[issue.path[0] as keyof Errors] = issue.message;
            }
            setErrors(errs);
            return;
        }
        setErrors({});
        setSubmitted(true);
    };

    return (
        <section id="contact" className="relative isolate overflow-hidden">
            <div className="hero-noise bg-navy py-24 text-white lg:py-32">
                <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
                    <Reveal>
                        <p className="eyebrow text-gold text-left">Contact</p>
                        <h3 className="mt-4 font-serif text-4xl text-white sm:text-5xl text-left">Let's start a conversation.</h3>
                        <div className="gold-rule mt-6 w-20" />
                        <div className="mt-10 space-y-4 text-sm">
                            <div className="flex items-center gap-1">
                                <PhoneCall className="text-gold" size={16} />
                                +9774034939, +9779851182261
                            </div>
                            <div className="flex items-center gap-1">
                                <MapPin className="text-gold" size={16} />
                                Sitapaila Chowk(Opposite of Global Bank) 2nd Floor — Head Office
                            </div>
                            <div className="flex items-center gap-1">
                                <ClockCheck className="text-gold" size={16} />
                                Mon – Sun · 9:30 AM – 5:00 PM (NPT)
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>

            <div className="w-full h-100" >
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.283098821798!2d85.27969713937978!3d27.70854417628097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb196b361cd501%3A0x160f477d4822a7a1!2sHaven%20Management%20Consultants%20(P)%20Ltd.!5e0!3m2!1sen!2snp!4v1780490012403!5m2!1sen!2snp" style={{ width: "100%", height: "100%", border: 0 }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div id="contact-form" className="bg-surface py-24 lg:py-32">
                <div className="mx-auto grid max-w-6xl gap-16 px-6">
                    <Reveal delay={120} className="lg:col-span-3">
                        {submitted ? (
                            <div className="border-l-2 border-gold bg-white p-10 shadow-[0_8px_24px_-12px_oklch(0_0_0_/_0.12)]">
                                <h3 className="font-serif text-2xl text-navy">Thank you.</h3>
                                <p className="mt-3 text-charcoal/75">
                                    We've received your request and a member of our team will be in touch within
                                    one business day.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={onSubmit} noValidate className="space-y-5 bg-white p-8 shadow-[0_8px_24px_-12px_oklch(0_0_0_/_0.12)]">
                                <div className="grid gap-5 sm:grid-cols-2">
                                    <Field label="Name" name="name" error={errors.name} />
                                    <Field label="Company" name="company" error={errors.company} />
                                </div>
                                <div className="grid gap-5 sm:grid-cols-2">
                                    <Field label="Phone" name="phone" type="tel" error={errors.phone} />
                                    <div>
                                        <Label>Service</Label>
                                        <select
                                            name="service"
                                            defaultValue=""
                                            className="mt-2 w-full border border-rule bg-white px-3 py-2.5 text-sm text-charcoal outline-none focus:border-gold"
                                        >
                                            <option value="" disabled>Select a service</option>
                                            {services.map((s) => (
                                                <option key={s} value={s}>{s}</option>
                                            ))}
                                        </select>
                                        {errors.service && <p className="mt-1 text-xs text-destructive">{errors.service}</p>}
                                    </div>
                                </div>
                                <div>
                                    <Label>Message</Label>
                                    <textarea
                                        name="message"
                                        rows={5}
                                        className="mt-2 w-full resize-none border border-rule bg-white px-3 py-2.5 text-sm text-charcoal outline-none focus:border-gold"
                                    />
                                    {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
                                </div>
                                <button
                                    type="submit"
                                    className="rounded-full bg-navy px-6 py-3 text-sm font-medium text-white transition hover:bg-navy-deep"
                                >
                                    Send Inquiry
                                </button>
                            </form>
                        )}
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

function Label({ children }: { children: React.ReactNode }) {
    return <label className="eyebrow text-charcoal/60">{children}</label>;
}

function Field({
    label,
    name,
    type = "text",
    error,
}: {
    label: string;
    name: string;
    type?: string;
    error?: string;
}) {
    return (
        <div>
            <Label>{label}</Label>
            <input
                name={name}
                type={type}
                className="mt-2 w-full border border-rule bg-white px-3 py-2.5 text-sm text-charcoal outline-none focus:border-gold"
            />
            {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
        </div>
    );
}
