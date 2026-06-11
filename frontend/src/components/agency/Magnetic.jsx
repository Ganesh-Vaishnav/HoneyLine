import { useEffect, useRef } from "react";

/**
 * Magnetic wrapper — children get pulled toward the cursor on hover (desktop).
 * Use as a wrapper around <a>, <button>, etc. Adds zero markup of its own beyond a div.
 */
export const Magnetic = ({ children, strength = 0.35, className = "", as = "div", ...props }) => {
  const ref = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const el = ref.current;
    const inner = innerRef.current;
    if (!el || !inner) return;

    let rafId;
    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;

    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const rx = e.clientX - (r.left + r.width / 2);
      const ry = e.clientY - (r.top + r.height / 2);
      tx = rx * strength;
      ty = ry * strength;
    };

    const onLeave = () => {
      tx = 0;
      ty = 0;
    };

    const tick = () => {
      cx += (tx - cx) * 0.2;
      cy += (ty - cy) * 0.2;
      inner.style.transform = `translate3d(${cx.toFixed(2)}px, ${cy.toFixed(2)}px, 0)`;
      rafId = requestAnimationFrame(tick);
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    rafId = requestAnimationFrame(tick);

    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(rafId);
    };
  }, [strength]);

  const Tag = as;
  return (
    <Tag ref={ref} className={`inline-block ${className}`} {...props}>
      <span ref={innerRef} className="inline-block will-change-transform">
        {children}
      </span>
    </Tag>
  );
};
