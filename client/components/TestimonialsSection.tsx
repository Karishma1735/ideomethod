import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Fabrizio Reandi",
      handle: "@Fabrizio",
      avatar:
        "https://api.builder.io/api/v1/image/assets/TEMP/1b0bb853aca9b78c78111347f40deecbb25877ed?width=88",
      content:
        "Shortly after I expressed interest in finding software on the @GlobalITMarket website, I got to set up a face to face meeting with someone who could recommend software based on my search.",
    },
    {
      name: "Thomas Rose",
      handle: "@Thomas",
      avatar:
        "https://api.builder.io/api/v1/image/assets/TEMP/9ca4013ed5bb899c2d93a49a4447b6994e49125a?width=88",
      content:
        "We loved not having to stress over so many options to consider. We were pleased with our choices, and ended up finding the perfect software that has such a helpful and kind team.",
    },
    {
      name: "Demetria Gills",
      handle: "@Demetria",
      avatar:
        "https://api.builder.io/api/v1/image/assets/TEMP/4804086c780dad0d0c51fba7565fe1f462e71633?width=88",
      content:
        "Using @GlobalITMarket I was able to connect with companies that could help with my software needs.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <section className="w-full py-20 px-4 md:px-8 lg:px-12 relative bg-globalit-dark">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://i.ibb.co/S71Km5Tn/Group-336.png" 
          alt="background"
          className="w-full h-full object-cover"
          style={{ opacity: 0.5 }}
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-semibold text-white mb-4 leading-tight">
            Why GlobalITMarket?
          </h2>
          <p className="text-white/70 text-xl">
            Here's what people are saying about us
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Single testimonial */}
          <div className="bg-white/5 border border-white rounded-2xl p-8 backdrop-blur-lg w-full">
            <div className="flex flex-col gap-6">
              {/* User info */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-14 h-14 rounded-full"
                />
                <div>
                  <div className="text-white text-lg font-medium">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-white/60 text-sm">
                    {testimonials[currentIndex].handle}
                  </div>
                </div>
              </div>

              {/* Testimonial content */}
              <div className="text-white/70 text-base leading-relaxed">
                {testimonials[currentIndex].content
                  .split("@GlobalITMarket")
                  .map((part, i) => (
                    <span key={i}>
                      {part}
                      {i <
                        testimonials[currentIndex].content.split(
                          "@GlobalITMarket",
                        ).length -
                          1 && (
                        <span className="text-[#19A7FF]">@GlobalITMarket</span>
                      )}
                    </span>
                  ))}
              </div>
            </div>
          </div>

          {/* Navigation controls BELOW */}
          <div className="flex flex-col items-center gap-4 mt-6">
            <div className="flex justify-center items-center gap-4">
              <ChevronLeft
                onClick={prevSlide}
                className="w-8 h-8 text-white/70 cursor-pointer hover:text-white transition-colors"
              />
              <div className="flex justify-center gap-3 ">
                {testimonials.map((_, i) => (
                  <div
                    key={i}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      i === currentIndex ? "bg-[#19A7FF]" : "bg-white/30"
                    }`}
                  />
                ))}
              </div>
              <ChevronRight
                onClick={nextSlide}
                className="w-8 h-8 text-white/70 cursor-pointer hover:text-white transition-colors"
              />
            </div>

            {/* Dots */}
          </div>
        </div>
      </div>
    </section>
  );
}

