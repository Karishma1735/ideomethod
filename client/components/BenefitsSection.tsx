export function BenefitsSection() {
  return (
    <section className="w-full py-20 px-4 md:px-8 lg:px-12 bg-globalit-dark relative">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/a4f8429179400c7dd17e5c21db32c1bd946d0d82?width=2732"
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-semibold text-globalit-gray mb-6">
            A better way to...
          </h2>
          <p className="text-globalit-text-muted text-xl max-w-3xl mx-auto">
            Discover how GlobalITMarket gives you the tools to make informed software decisions with or without technical knowledge
          </p>
        </div>

        {/* Benefits grid */}
        <div className="space-y-8">
          {/* Save time - full width */}
          <div className="bg-gradient-card border-2 border-gray-600 rounded-3xl p-12">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1 space-y-5">
                <h3 className="text-3xl md:text-4xl font-semibold text-white">
                  Save time
                </h3>
                <p className="text-globalit-text-muted text-lg md:text-xl leading-relaxed">
                  Skip weeks of research. Our platform aggregates real user reviews, pricing data, feature comparisons and key metrics to help you make informed decisions in a fraction of the time.
                </p>
              </div>
              <div className="flex-shrink-0">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/5e39731887097a14c348ef8b9db1fe4f076412e3?width=592"
                  alt="Time saving illustration"
                  className="w-72 h-auto"
                />
              </div>
            </div>
          </div>

          {/* Save money and Save effort - side by side */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Save money */}
            <div className="bg-gradient-card border-2 border-gray-600 rounded-3xl p-12 min-h-[480px] flex flex-col">
              <div className="space-y-6 flex-1">
                <div className="w-28 h-30">
                  <img 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/c7486304dc60ec3b4d6e0e57677cf55e80cc480d?width=224"
                    alt="Money saving illustration"
                    className="w-full h-auto"
                  />
                </div>
                
                <h3 className="text-3xl md:text-4xl font-semibold text-white">
                  Save money
                </h3>
                <p className="text-globalit-text-muted text-lg md:text-xl leading-relaxed">
                  Find cost-effective software solutions that match your scope and budget, including high-quality global options you may not have considered.
                </p>
              </div>
            </div>

            {/* Save effort */}
            <div className="bg-gradient-card border-2 border-gray-600 rounded-3xl p-12 min-h-[480px] flex flex-col">
              <div className="space-y-6 flex-1">
                <div className="w-30 h-30">
                  <img 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/1cca0c123f14e1f79136d5575991b5dc2db67bce?width=240"
                    alt="Effort saving illustration"
                    className="w-full h-auto"
                  />
                </div>
                
                <h3 className="text-3xl md:text-4xl font-semibold text-white">
                  Save effort
                </h3>
                <p className="text-globalit-text-muted text-lg md:text-xl leading-relaxed">
                  We've done the hard work! Shortlist, compare and connect with partners that are ready to deliver exactly what you need.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
