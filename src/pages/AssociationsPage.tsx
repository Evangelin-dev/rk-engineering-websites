import React, { useEffect, useMemo, useState } from 'react';

const associationLogos = Object.entries(
  import.meta.glob<string>('../assets/images/*.jpg', {
    eager: true,
    import: 'default',
  }),
)
  .map(([path, src]) => {
    const match = path.match(/\/(\d+)\.jpg$/);
    return match ? { number: Number(match[1]), src } : null;
  })
  .filter((logo): logo is { number: number; src: string } => logo !== null)
  .sort((first, second) => first.number - second.number);

const logosPerRow = Math.ceil(associationLogos.length / 3);

export const AssociationsPage: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(5);
  const [pages, setPages] = useState([0, 0, 0]);
  const [isPaused, setIsPaused] = useState(false);
  const rows = useMemo(
    () =>
      Array.from({ length: 3 }, (_, rowIndex) =>
        associationLogos.slice(rowIndex * logosPerRow, (rowIndex + 1) * logosPerRow),
      ),
    [],
  );

  useEffect(() => {
    const updateVisibleCount = () => {
      const count = window.innerWidth >= 1024 ? 5 : window.innerWidth >= 640 ? 3 : 2;
      setVisibleCount(count);
      setPages([0, 0, 0]);
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  useEffect(() => {
    if (isPaused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const timer = window.setInterval(() => {
      setPages((currentPages) =>
        currentPages.map((page, rowIndex) => {
          const pageCount = Math.ceil(rows[rowIndex].length / visibleCount);
          return (page + 1) % pageCount;
        }),
      );
    }, 3200);

    return () => window.clearInterval(timer);
  }, [isPaused, rows, visibleCount]);

  return (
    <section className="bg-slate-50 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:space-y-16 lg:px-8">
        <h1 className="sr-only">Our Associations</h1>
        {rows.map((row, rowIndex) => {
          const pageCount = Math.ceil(row.length / visibleCount);

          return (
            <section
              key={rowIndex}
              aria-label={`Association logos row ${rowIndex + 1}`}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onFocus={() => setIsPaused(true)}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setIsPaused(false);
              }}
            >
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-700 ease-in-out motion-reduce:transition-none"
                  style={{ transform: `translateX(-${pages[rowIndex] * 100}%)` }}
                >
                  {Array.from({ length: pageCount }, (_, pageIndex) => {
                    const pageLogos = row.slice(pageIndex * visibleCount, (pageIndex + 1) * visibleCount);
                    return (
                      <div
                        key={pageIndex}
                        className="grid w-full shrink-0 grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 sm:gap-5 lg:gap-6"
                        aria-hidden={pages[rowIndex] !== pageIndex}
                      >
                        {pageLogos.map((logo) => (
                          <div
                            key={logo.number}
                            className="flex h-24 items-center justify-center border border-slate-200 bg-white p-3 sm:h-28 sm:p-4"
                          >
                            <img
                              src={logo.src}
                              alt={`Association logo ${logo.number}`}
                              loading="lazy"
                              className="h-full w-full object-contain"
                            />
                          </div>
                        ))}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-4 flex justify-center gap-2" aria-label={`Choose slide for row ${rowIndex + 1}`}>
                {Array.from({ length: pageCount }, (_, pageIndex) => (
                  <button
                    key={pageIndex}
                    type="button"
                    aria-label={`Show row ${rowIndex + 1}, slide ${pageIndex + 1}`}
                    aria-current={pages[rowIndex] === pageIndex ? 'true' : undefined}
                    onClick={() =>
                      setPages((currentPages) =>
                        currentPages.map((page, index) => (index === rowIndex ? pageIndex : page)),
                      )
                    }
                    className={`h-2.5 w-2.5 rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800 ${
                      pages[rowIndex] === pageIndex ? 'bg-blue-950' : 'bg-slate-300 hover:bg-slate-500'
                    }`}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
};
