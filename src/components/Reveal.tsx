import { useEffect, useRef, type ReactNode, type ElementType } from "react";

interface RevealProps {
    children: ReactNode;
    as?: ElementType;
    delay?: number;
    className?: string;
}

export function Reveal({ children, as: Tag = "div", delay = 0, className = "" }: RevealProps) {
    const ref = useRef<HTMLElement | null>(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        (e.target as HTMLElement).style.transitionDelay = `${delay}ms`;
                        e.target.classList.add("is-visible");
                        io.unobserve(e.target);
                    }
                });
            },
            { threshold: 0.15 }
        );
        io.observe(el);
        return () => io.disconnect();
    }, [delay]);
    return (
        <Tag ref={ref as never} className={`reveal ${className}`}>
            {children}
        </Tag>
    );
}
