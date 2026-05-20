import { useState, useEffect, useRef, useCallback } from "react";

/** Respects prefers-reduced-motion */
export function useReducedMotion() {
  const [reduced, setReduced] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false
  );
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (e) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

/** 3-D tilt — disabled on touch/mobile and when reduced-motion */
export function useTilt(strength = 10) {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const reduced = useReducedMotion();
  const isTouchRef = useRef(false);

  const onMove = useCallback((e) => {
    if (reduced || isTouchRef.current || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width  - 0.5) * strength;
    const y = ((e.clientY - rect.top)  / rect.height - 0.5) * strength;
    setTilt({ x, y });
  }, [reduced, strength]);

  const onLeave = useCallback(() => setTilt({ x: 0, y: 0 }), []);

  // Detect touch device — disable tilt permanently on touch
  useEffect(() => {
    const onTouch = () => { isTouchRef.current = true; };
    window.addEventListener("touchstart", onTouch, { once: true, passive: true });
    return () => window.removeEventListener("touchstart", onTouch);
  }, []);

  const tiltStyle = reduced
    ? {}
    : {
        transform: `perspective(800px) rotateY(${tilt.x}deg) rotateX(${-tilt.y}deg)`,
        transition: tilt.x === 0 ? "transform 0.55s var(--ease-out)" : "transform 0.08s linear",
      };

  return { ref, tiltStyle, onMouseMove: onMove, onMouseLeave: onLeave };
}

/** Smooth scroll with offset for fixed navbar */
export function useSmoothScroll(offset = 72) {
  useEffect(() => {
    const handler = (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const id = link.getAttribute("href").slice(1);
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [offset]);
}

/** IntersectionObserver reveal — replaces framer whileInView for perf */
export function useReveal(options = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px", ...options }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}
