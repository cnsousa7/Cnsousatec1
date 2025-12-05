import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  company: string;
  service: string;
  text: string;
  rating: number;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialCarousel({
  testimonials,
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setAutoPlay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setAutoPlay(false);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="w-full">
      {/* Carousel Container */}
      <div className="relative bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Testimonial Content */}
        <div className="p-8 md:p-12 min-h-[300px] flex flex-col justify-between">
          {/* Stars */}
          <div className="flex gap-1 mb-4">
            {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
              <Star
                key={i}
                size={20}
                className="fill-accent text-accent"
              />
            ))}
          </div>

          {/* Quote Text */}
          <blockquote className="text-lg md:text-xl text-foreground font-medium mb-6 italic">
            "{currentTestimonial.text}"
          </blockquote>

          {/* Author Info */}
          <div className="border-t border-border pt-6">
            <p className="font-bold text-foreground">
              {currentTestimonial.name}
            </p>
            <p className="text-sm text-muted-foreground">
              {currentTestimonial.company}
            </p>
            <p className="text-xs text-accent font-medium mt-1">
              Serviço: {currentTestimonial.service}
            </p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary hover:bg-primary/90 text-white p-2 rounded-full transition-colors z-10"
          aria-label="Depoimento anterior"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary hover:bg-primary/90 text-white p-2 rounded-full transition-colors z-10"
          aria-label="Próximo depoimento"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex
                ? "bg-primary w-8"
                : "bg-border w-2 hover:bg-muted-foreground"
            }`}
            aria-label={`Ir para depoimento ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
