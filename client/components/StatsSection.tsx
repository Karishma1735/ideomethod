export function StatsSection() {
  const stats = [
    {
      number: "58%",
      text: "of businesses regret software buys.",
      subtext: "See how you can make the right choice.",
      gradient: "bg-gradient-stat-1",
    },
    {
      number: "90%+",
      text: "believe tech boosts productivity.",
      subtext: "Tips to find the vendors you need.",
      numberColor: "text-[#1DFFBF]",
    },
    {
      number: "33%",
      text: "face issues training new users.",
      subtext: "You Don't Have To.",
      numberColor: "text-[#FEA0F8]",
    },
  ];

  return (
    <section className="w-full py-20 px-4 md:px-8 lg:px-12 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://i.ibb.co/LD48dNXR/Background-image.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-6xl font-semibold text-white leading-tight">
            Objective insights to drive
            <br />
            business impact with software
          </h2>
        </div>

        {/* Stats cards */}
        <div className="w-full px-4 md:px-8 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 border border-gray-600 rounded-2xl p-6 backdrop-blur-lg"
              >
                <div className="flex flex-col gap-6">
                  <div className="text-3xl font-semibold leading-tight">
                    <span
                      className={
                        stat.gradient
                          ? `${stat.gradient} bg-clip-text text-transparent`
                          : stat.numberColor
                      }
                    >
                      {stat.number}
                    </span>
                    <span className="text-white"> {stat.text}</span>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {stat.subtext}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
