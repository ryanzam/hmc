import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur shadow-[0_1px_0_var(--rule)]" : "bg-transparent"
                }`}
        >
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
                <a href="#home" className="flex items-center gap-1">
                    <span
                        className={`font-serif text-2xl font-bold tracking-tight ${scrolled ? "text-navy" : "text-white"
                            }`}
                    >
                        HMC
                    </span>
                </a>

                <ul className="hidden items-center gap-9 md:flex">
                    {links.map((l) => (
                        <li key={l.href}>
                            <a
                                href={l.href}
                                className={`nav-link text-sm font-medium ${scrolled ? "text-charcoal" : "text-white/85"
                                    }`}
                            >
                                {l.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <a
                    href="#contact"
                    className="hidden rounded-full bg-gold px-5 py-2.5 text-sm font-medium text-navy transition hover:brightness-95 md:inline-block"
                >
                    Book a Consultation
                </a>

                <button
                    aria-label="Open menu"
                    onClick={() => setOpen(true)}
                    className={`md:hidden ${scrolled ? "text-navy" : "text-white"}`}
                >
                    <Menu />
                </button>
            </nav>

            {open && (
                <div className="fixed inset-0 z-60 flex flex-col bg-navy text-white">
                    <div className="flex items-center justify-between px-6 py-4">
                        <span className="font-serif text-2xl font-bold">HMC</span>
                        <button aria-label="Close menu" onClick={() => setOpen(false)}>
                            <X />
                        </button>
                    </div>
                    <ul className="flex flex-1 flex-col items-center justify-center gap-8">
                        {links.map((l) => (
                            <li key={l.href}>
                                <a
                                    onClick={() => setOpen(false)}
                                    href={l.href}
                                    className="font-serif text-3xl"
                                >
                                    {l.label}
                                </a>
                            </li>
                        ))}
                        <a
                            onClick={() => setOpen(false)}
                            href="#contact"
                            className="mt-6 rounded-full bg-gold px-6 py-3 text-sm font-medium text-navy"
                        >
                            Book a Consultation
                        </a>
                    </ul>
                </div>
            )}
        </header>
    );
}
