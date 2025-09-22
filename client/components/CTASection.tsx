import { CheckCircle, Zap } from "lucide-react";

export function CTASection() {
  const benefits = [
    "Personalized software recommendations",
    "Comparison insights",
    "Option to book free consultation call", 
    "Access to exclusive vendor offers"
  ];

  const features = [
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/670dddab92f406fa38a35b76f9de14cf04ac8202?width=80",
      title: "Personalized Matching",
      description: "Get tailored recommendations by company size, industry, and needs."
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/3973cfaaeb1061f8cb51254086f3e6b9b141b38d?width=80",
      title: "Quick & Easy", 
      description: "Complete in 5–7 minutes with our simple, intuitive interface."
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/49672c62525a14dca979b7b8f670d9256ee0987b?width=80",
      title: "Expert Insights",
      description: "Receive curated recommendations with detailed comparison reports"
    }
  ];

  return (
    <section className="w-full py-20 px-4 md:px-8 lg:px-12 bg-globalit-dark">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-semibold text-globalit-gray mb-6 leading-tight">
            Not sure what you're looking for?
          </h2>
          <p className="text-white text-xl max-w-4xl mx-auto">
            Tell us what you need. We'll match you with the right software and partner - at lightning speed.
          </p>
        </div>

        {/* Main CTA form */}
        <div className="bg-white/5 border-2 border-globalit-purple rounded-3xl p-12 backdrop-blur-md">
          <div className="flex flex-col items-center gap-8">
            {/* Form title */}
            <h3 className="text-2xl font-semibold text-white text-center max-w-lg">
              Tell us what you need and we'll match you to the perfect solution for your company
            </h3>

            {/* Features grid */}
            <div className="grid md:grid-cols-3 gap-7 w-full mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col items-center text-center gap-4">
                  <img 
                    src={feature.icon}
                    alt={feature.title}
                    className="w-10 h-10"
                  />
                  <div className="space-y-2">
                    <h4 className="text-white text-base font-semibold">
                      {feature.title}
                    </h4>
                    <p className="text-globalit-text-light text-xs">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Benefits box */}
            <div className="w-full bg-white/5 rounded-xl p-6 shadow-lg">
              <h4 className="text-white text-base font-semibold mb-4">
                What you'll get:
              </h4>
              
              <div className="grid md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-[#1DFFBF] flex-shrink-0" />
                    <span className="text-white text-sm">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <button className="flex items-center justify-center gap-3 px-12 py-4 bg-gradient-button border border-globalit-purple rounded-full hover:opacity-90 transition-opacity">
              <span className="bg-gradient-primary bg-clip-text text-transparent font-semibold text-base">
                Get started
              </span>
              <Zap className="w-5 h-5 text-gradient-purple" fill="currentColor" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
