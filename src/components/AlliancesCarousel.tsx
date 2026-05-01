import { useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import './AlliancesCarousel.css';

interface Alliance {
  logo: string;
  alt: string;
  slug: string;
}

interface AlliancesCarouselProps {
  alliances: Alliance[];
  isRTL?: boolean;
  lang?: string;
}

export default function AlliancesCarousel({ alliances, isRTL = false, lang = 'en' }: AlliancesCarouselProps) {
  const getPartnerUrl = (slug: string) => {
    if (lang === 'en') return `/partners/${slug}`;
    return `/${lang}/partners/${slug}`;
  };
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'start',
    slidesToScroll: 1,
    skipSnaps: false,
    direction: isRTL ? 'rtl' : 'ltr',
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, 3000);

    return () => clearInterval(autoplay);
  }, [emblaApi]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {alliances.map((alliance, index) => (
            <div className="embla__slide" key={index}>
              <a href={getPartnerUrl(alliance.slug)} className="alliance-logo">
                <img src={alliance.logo} alt={alliance.alt} loading="lazy" />
              </a>
            </div>
          ))}
        </div>
      </div>
      <button className="embla__button embla__button--prev" onClick={scrollPrev} aria-label="Previous">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      <button className="embla__button embla__button--next" onClick={scrollNext} aria-label="Next">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </div>
  );
}
