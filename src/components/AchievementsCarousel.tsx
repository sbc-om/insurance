import { useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import './AchievementsCarousel.css';

interface AchievementImage {
  src: string;
  alt: string;
}

interface AchievementsCarouselProps {
  images: AchievementImage[];
  isRTL?: boolean;
}

export default function AchievementsCarousel({ images, isRTL = false }: AchievementsCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
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
    }, 3500);

    return () => clearInterval(autoplay);
  }, [emblaApi]);

  return (
    <div className="achievement-embla">
      <div className="achievement-embla__viewport" ref={emblaRef}>
        <div className="achievement-embla__container">
          {images.map((image, index) => (
            <div className="achievement-embla__slide" key={index}>
              <div className="achievement-card-media">
                <img src={image.src} alt={image.alt} loading="lazy" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="achievement-embla__button achievement-embla__button--prev" onClick={scrollPrev} aria-label="Previous">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      <button className="achievement-embla__button achievement-embla__button--next" onClick={scrollNext} aria-label="Next">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </div>
  );
}
