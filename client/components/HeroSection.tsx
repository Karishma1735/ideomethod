import { Search, CheckCircle } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative w-full bg-globalit-dark overflow-hidden">
      {/* Hero Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <svg
            className="absolute -top-96 left-0 w-full h-full"
            viewBox="0 0 1920 846"
            fill="none"
          >
            <g filter="url(#filter0_f_hero)">
              <path
                d="M821.114 -53.8867C698.07 -134.589 722.892 -424.681 750.684 -559.639C831.768 -920.458 1125.07 -1095.23 1127.92 -1107.93C1130.77 -1120.62 595.952 -775.717 328.185 -601.679L803.175 329.094L1167.34 98.5677C1103.2 81.3754 944.158 26.8153 821.114 -53.8867Z"
                fill="#4144F2"
              />
            </g>
            <defs>
              <filter id="filter0_f_hero">
                <feGaussianBlur stdDeviation="258" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center px-4 md:px-8 lg:px-12 pt-16 md:pt-20">
        <div className="flex items-center gap-2 px-8 py-3 bg-white/7 border border-globalit-purple rounded-full backdrop-blur-md mb-8">
          <CheckCircle className="w-5 h-5 text-globalit-blue" />
          <span className="text-globalit-blue text-sm font-bold">
            Our promise
          </span>
          <span className="text-white text-sm font-medium">
            We are committed to ensuring that our platform never becomes a
            pay-to-win comparison site
          </span>
        </div>

        <div className="flex flex-col items-center gap-5 max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium leading-tight">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Find the Best
            </span>
            <span className="text-white">
              {" "}
              Global Software Solutions & Providers
            </span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl font-medium max-w-4xl">
            Global IT Marketplace — Smarter SaaS & IT matchmaking that saves
            time, money, and effort.
          </p>
        </div>

        {/* Search Bar */}
        <div className="flex items-center justify-between w-full max-w-3xl bg-white/5 rounded-full px-8 py-6 mt-12 mb-16">
          <input
            type="text"
            placeholder="I'm looking for Digital transformation"
            className="flex-1 bg-transparent text-globalit-text-light text-base font-medium placeholder-globalit-text-light outline-none"
          />
          <Search className="w-6 h-6 text-globalit-gray/70" />
        </div>

        {/* Hero Illustration */}
        <div className="w-full flex justify-center">
          <img
            src="https://i.ibb.co/0VjtGvFn/Group-47274.png"
            alt="Hero Illustration"
            className="w-full max-w-6xl object-contain"
          />
        </div>
        {/* Compare Text */}
        <div className="w-full flex justify-center mt-12">
          <p className="text-white text-[20px] font-medium text-center">
            Compare partners providing solutions such as
          </p>
        </div>

        {/* Partner Logos */}
        <div className="-mt-80 flex justify-center">
          {" "}
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/835210c44afeec599d76891f3c226dc1cb1bf168?width=2000"
            alt="Partner logos including Microsoft, Azure, Oracle and more"
            className="h-20 w-auto max-w-4xl object-contain"
          />
        </div>
      </div>
    </section>
  );
}
