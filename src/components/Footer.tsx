import { Mail } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const SocialLinks = [
    { icon: FaLinkedin, link: "https://np.linkedin.com/company/hmc-nepal" },
    { icon: FaFacebook, link: "https://www.facebook.com/havenmgmt/" },
    { icon: FaInstagram, link: "https://www.instagram.com/hmc.nepal/" },
    { icon: Mail, link: "mailto:info@havenconsultants.com.np" }
]

export function Footer() {
    return (
        <footer className="relative bg-navy-deep text-white/80">
            <div className="absolute inset-x-0 top-0 h-px bg-gold" aria-hidden />
            <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
                <div>
                    <div className="flex items-center gap-1">
                        <span className="font-serif text-2xl font-bold text-white">HMC</span>
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold" aria-hidden />
                    </div>
                    <p className="mt-4 text-sm text-white/60">
                        Finance professionals, tax experts and book keepers for Nepali businesses since 2018.
                    </p>
                    <div className="mt-6 flex gap-3">
                        {SocialLinks.map((Social, i) => (
                            <a
                                key={i}
                                href={Social.link}
                                className="flex h-9 w-9 items-center justify-center border border-white/30 text-white/70 transition hover:border-gold hover:text-gold"
                                aria-label="social link"
                            >
                                <Social.icon size={16} />
                            </a>
                        ))}
                    </div>
                </div>

                <FooterCol
                    title="Services"
                    items={[
                        { label: "Strategic Planning", link: "#services" },
                        { label: "Financial Management", link: "#services" },
                        { label: "Operational Efficiency", link: "#services" },
                        { label: "Human Resources", link: "#services" },
                        { label: "Market Research & Analysis", link: "#services" },
                        { label: "Technology Integration", link: "#services" },
                        { label: "Marketing and Branding", link: "#services" },
                        { label: "Risk Management", link: "#services" },
                    ]}
                />
                <FooterCol
                    title="Company"
                    items={[
                        { label: "Home", link: "#home" },
                        { label: "About Us", link: "#about" },
                        { label: "Services", link: "#services" },
                        { label: "Why Us", link: "#why" },
                        { label: "Contact", link: "#contact" },
                    ]}
                />

                <div>
                    <p className="eyebrow text-gold">Contact</p>
                    <div className="mt-5 space-y-3 text-sm text-white/70">
                        <div className="flex gap-1">
                            <a href="tel:+9774034939" className="transition hover:text-gold">+9774034939</a>,
                            <a href="tel:+9779851182261" className="transition hover:text-gold">+9779851182261</a>
                        </div>
                        <div className="flex flex-col">
                            <a href="mailto:info@havenconsultants.com.np" className="transition hover:text-gold">
                                info@havenconsultants.com.np
                            </a>
                            <a href="mailto:support@havenconsultants.com.np" className="transition hover:text-gold">
                                support@havenconsultants.com.np
                            </a>
                        </div>
                        <div>
                            <a className="transition hover:text-gold" target="_blank" href="https://www.google.com/maps/place/Haven+Management+Consultants+(P)+Ltd./@27.7085442,85.2822667,17z/data=!3m1!4b1!4m6!3m5!1s0x39eb196b361cd501:0x160f477d4822a7a1!8m2!3d27.7085442!4d85.2822667!16s%2Fg%2F11hzvw_sh3?entry=ttu&g_ep=EgoyMDI2MDYwMy4xIKXMDSoASAFQAw%3D%3D">
                                Sitapaila Chowk (Opposite Global Bank),2nd Floor,
                                Kathmandu, Bagmati
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/10">
                <div className="mx-auto max-w-7xl px-6 py-6 text-xs text-white/50 lg:px-10">
                    © {new Date().getFullYear()} Haven Management Consultants Pvt. Ltd. · All rights reserved.
                </div>
            </div>
        </footer>
    );
}

function FooterCol({ title, items }: { title: string; items: { label: string; link: string }[] }) {
    return (
        <div>
            <p className="eyebrow text-gold">{title}</p>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
                {items.map((i, idx) => (
                    <li key={idx}>
                        <a href={i.link} className="transition hover:text-gold">
                            {i.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
