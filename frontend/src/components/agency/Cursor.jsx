import { useEffect, useRef } from "react";

export const Cursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // Disable on touch / coarse pointer devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate3d(${mx - 4}px, ${my - 4}px, 0)`;
    };

    const tick = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.transform = `translate3d(${rx - 18}px, ${ry - 18}px, 0)`;
      raf = requestAnimationFrame(tick);
    };

    const onEnter = (e) => {
      const el = e.target;
      if (!(el instanceof Element)) return;
      const isLink = el.closest('a, button, [role="button"], input, textarea, select, [data-cursor="link"]');
      if (isLink) ring.classList.add("is-link");
      const isText = el.closest('input, textarea, [contenteditable]');
      if (isText) ring.classList.add("is-text");
    };
    const onLeave = (e) => {
      const el = e.target;
      if (!(el instanceof Element)) return;
      const isLink = el.closest('a, button, [role="button"], input, textarea, select, [data-cursor="link"]');
      if (isLink) ring.classList.remove("is-link");
      const isText = el.closest('input, textarea, [contenteditable]');
      if (isText) ring.classList.remove("is-text");
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onEnter);
    document.addEventListener("mouseout", onLeave);
    raf = requestAnimationFrame(tick);

    document.body.classList.add("has-custom-cursor");

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onEnter);
      document.removeEventListener("mouseout", onLeave);
      cancelAnimationFrame(raf);
      document.body.classList.remove("has-custom-cursor");
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="hl-cursor-ring" aria-hidden />
      <div ref={dotRef} className="hl-cursor-dot" aria-hidden />
    </>
  );
};
