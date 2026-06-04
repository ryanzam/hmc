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
                    </div>
                    <p className="mt-4 text-sm text-white/60">
                        Finance, tax, audit & book keeping for Nepali businesses since 2018.
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
                        { label: "Taxation", link: "#services" },
                        { label: "Accounting", link: "#services" },
                        { label: "Audit", link: "#services" },
                        { label: "Book Keeping", link: "#services" },
                    ]}
                />
                <FooterCol
                    title="Company"
                    items={[
                        { label: "Home", link: "#home" },
                        { label: "About Us", link: "#about" },
                        { label: "Services", link: "#services" },
                        { label: "Contact", link: "#contact" },
                    ]}
                />

                <div>
                    <p className="eyebrow text-gold">Contact</p>
                    <ul className="mt-5 space-y-3 text-sm text-white/70">
                        <li>+9774034939, +9779851182261</li>
                        <li>info@havenconsultants.com.np, support@havenconsultants.com.np</li>
                        <li>Sitapaila Chowk(Opposite Global Bank),2nd Floor,
                            Kathmandu, Bagmati</li>
                    </ul>
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
                {items.map((i) => (
                    <li key={i.link}>
                        <a href={i.link} className="transition hover:text-gold">
                            {i.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
