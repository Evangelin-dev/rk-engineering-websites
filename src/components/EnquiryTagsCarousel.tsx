import React, { useEffect, useRef, useState } from 'react';

export interface EnquiryTagPrefill {
  enquiryType?: string;
  shippingTerms?: string;
  message?: string;
  focusMessage?: boolean;
}

interface EnquiryTagsCarouselProps {
  onSelect: (prefill: EnquiryTagPrefill) => void;
}

const ENQUIRY_TAGS = [
  {
    label: 'Get Response Within 1 Hour',
    prefill: { message: 'Please respond to this enquiry within 1 hour.', focusMessage: true },
  },
  {
    label: 'Get CIF Nhava Sheva',
    prefill: { enquiryType: 'Export Enquiry', shippingTerms: 'CIF' },
  },
  {
    label: 'Get FOB Nhava Sheva',
    prefill: { enquiryType: 'Export Enquiry', shippingTerms: 'FOB' },
  },
  {
    label: 'Request an Export Quote',
    prefill: { enquiryType: 'Export Enquiry' },
  },
  {
    label: 'Get Product Pricing',
    prefill: { message: 'Please share product pricing for my requirements.', focusMessage: true },
  },
  {
    label: 'Submit Your Requirements',
    prefill: { focusMessage: true },
  },
] as const;

export const EnquiryTagsCarousel: React.FC<EnquiryTagsCarouselProps> = ({ onSelect }) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let frame = 0;
    let lastTimestamp = performance.now();
    const scroll = (timestamp: number) => {
      const elapsed = timestamp - lastTimestamp;
      lastTimestamp = timestamp;
      if (!isPaused && scroller.scrollWidth > scroller.clientWidth) {
        scroller.scrollLeft += elapsed * 0.035;
        const loopWidth = scroller.scrollWidth / 2;
        if (scroller.scrollLeft >= loopWidth) scroller.scrollLeft -= loopWidth;
      }
      frame = window.requestAnimationFrame(scroll);
    };
    frame = window.requestAnimationFrame(scroll);
    return () => window.cancelAnimationFrame(frame);
  }, [isPaused]);

  return (
    <section aria-label="Quick enquiry options" className="border-b border-slate-200 bg-white py-4 sm:py-5">
      <div
        ref={scrollerRef}
        className="mx-auto flex max-w-[1200px] overflow-x-auto px-6 [scrollbar-width:none] sm:px-8 [&::-webkit-scrollbar]:hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onPointerDown={() => setIsPaused(true)}
        onPointerUp={() => setIsPaused(false)}
        onPointerCancel={() => setIsPaused(false)}
      >
        <div className="flex min-w-max gap-3 pr-3">
          {[...ENQUIRY_TAGS, ...ENQUIRY_TAGS].map((tag, index) => (
            <button
              key={`${tag.label}-${index}`}
              type="button"
              onClick={() => onSelect(tag.prefill)}
              className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs font-bold tracking-wide text-slate-700 shadow-sm transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800 active:scale-[0.98] motion-reduce:transform-none sm:px-5 sm:text-sm"
            >
              {tag.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
