import { useEffect, useState, RefObject } from 'react';

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export function useInView(
  ref: RefObject<Element>,
  options: UseInViewOptions = {}
): boolean {
  const { threshold = 0.1, rootMargin = '0px', once = true } = options;
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Fallback for environments without IntersectionObserver
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, threshold, rootMargin, once]);

  return inView;
}
