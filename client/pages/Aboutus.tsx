import React from "react";
export default function Aboutus() {
  return (
    <div className="min-h-screen bg-[#000002] relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[586px] w-full h-[714px] opacity-30">
          <div className="w-full h-[566px] bg-gradient-to-r from-[#2B75FF] via-[rgba(156,178,255,0.35)] to-[#225ECC] blur-[118px]"></div>
        </div>

        {/* Decorative SVG elements */}
        <div className="absolute top-[-400px] left-[244px] w-[2116px] h-[2069px] opacity-50">
          <svg
            width="1920"
            height="846"
            viewBox="0 0 1920 846"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_f)">
              <path
                d="M821.114 -53.8855C698.07 -134.588 722.892 -424.68 750.684 -559.638C831.768 -920.456 1125.07 -1095.23 1127.92 -1107.93C1130.77 -1120.62 595.952 -775.716 328.185 -601.677L803.175 329.095L1167.34 98.5689C1103.2 81.3766 944.158 26.8165 821.114 -53.8855Z"
                fill="#4144F2"
              />
            </g>
            <defs>
              <filter
                id="filter0_f"
                x="-187.814"
                y="-1624.27"
                width="1871.16"
                height="2469.36"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feGaussianBlur
                  stdDeviation="258"
                  result="effect1_foregroundBlur"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="relative z-10">

        <section className="px-4 sm:px-8 lg:px-[150px] py-20 lg:py-32 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-[150%] tracking-[-0.48px]">
                <span className="font-bold brand-gradient-text">
                  The GlobalITMarketplace
                </span>
                <span className="text-[#EAEAEA]">
                  {" "}
                  is dedicated to bridging the gap between businesses in the UK
                  & EU, and world-class, global IT solutions.
                </span>
              </h1>

              <p className="text-[#EAEAEA] text-3xl sm:text-4xl lg:text-5xl font-normal leading-[150%] tracking-[-0.48px]">
                Our mission is to give you the tools to make informed decisions
                about software and give you access to high-quality, global
                providers that you may never have found on your own.
              </p>
            </div>

            <div className="relative">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/a4443a0c245da94b6be4b6cce60ae85a38018e60?width=1674"
                alt="Global IT Marketplace Planet"
                className="w-full max-w-[800px] h-auto"
              />
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="px-4 sm:px-8 lg:px-[200px] py-20 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8">
              <div className="relative">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/4099706063def2287ab888777536757f972517be?width=744"
                  alt="Rocket illustration"
                  className="w-[372px] h-[372px] transform rotate-[5.544deg] absolute -left-20 -top-20 opacity-20"
                />
              </div>

              <div className="space-y-6">
                <p className="text-[#EAEAEA] text-2xl sm:text-3xl font-normal leading-[140%]">
                  While working with companies in the UK, we noticed something.
                  UK companies are consistently overpaying for poorly matched
                  software solutions, that end up costing time and money and not
                  meeting their project requirements.
                </p>

                <p className="text-[#EAEAEA] text-2xl sm:text-3xl font-normal leading-[140%]">
                  So we decided to act.
                </p>

                <p className="text-[#EAEAEA] text-2xl sm:text-3xl font-normal leading-[140%]">
                  Our solution? A curated directory of trusted SaaS partners
                  from around the world and the tools to compare solutions based
                  on the metrics that matter to you.
                </p>
              </div>
            </div>

            <div className="flex flex-row items-center space-y-8">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/d83fbd80a9fde8d91a6a060a77f6d38aab9fb117?width=352"
                alt="Aiden Nohar - Founder"
                className="w-[176px] h-[176px] rounded-full shadow-[0_4px_44px_rgba(0,0,0,0.34)]"
              />

              <div className="text-center space-y-4">
                <p className="text-[#EAEAEA] text-xl font-normal leading-[150%]">
                  The <span className="font-bold">GlobalITMarketplace</span>{" "}
                  grew from{" "}
                  <span className="text-[#1DA1F2] font-bold">
                    Project Advisory Solutions
                  </span>
                  , a lead generation and tailored partner sourcing company in
                  the UK, operated by our founder{" "}
                  <span className="text-[#1DA1F2] font-bold">Aiden Nohar</span>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Demo Section */}
        <section className="px-4 sm:px-8 lg:px-[200px] py-20 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/65ca089ae3a0b6bf9fa3dc8f16b13788887249f4?width=2160"
                alt="Platform Interface"
                className="w-full rounded-[28px] border-2 border-[#4B5FA2]"
              />

              {/* Decorative glass elements */}
              <div className="absolute -bottom-10 -left-10 w-[379px] h-[390px] transform rotate-[5.736deg] opacity-30">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/dcc26f30fde553cb58c24cb90ef932527b4169d4?width=759"
                  alt=""
                  className="w-full h-full"
                />
              </div>

              <div className="absolute -bottom-5 left-20 w-[309px] h-[330px] transform rotate-[5.489deg] opacity-30">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/3d2633f17d2adba9403bd2aa02985dabaa303ef5?width=618"
                  alt=""
                  className="w-full h-full"
                />
              </div>
            </div>

            <div className="space-y-8">
              <p className="text-[#EAEAEA] text-2xl sm:text-3xl font-normal leading-[140%]">
                The GlobalITMarketplace offers your teams the ability to make
                informed decisions when choosing software and find IT partners
                that meet your time & budget constraints, and if you're still
                struggling we offer free, live consultation calls to help you
                make the final decision with confidence.
              </p>

              <p className="text-[#EAEAEA] text-2xl sm:text-3xl font-normal leading-[140%]">
                From fast-scaling startups, to established enterprises, we help
                decision makers across industries make smarter digital
                investments.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-4 sm:px-8 lg:px-[200px] py-20 relative">
          <div className="space-y-8">
            {/* Quality over Quantity - Main feature */}
            <div className="relative rounded-[30px] border-2 border-transparent bg-gradient-to-r from-[#101010] via-[rgba(22,21,21,0.29)] to-[rgba(156,178,255,0.19)] p-12 lg:p-16">
              <div className="absolute inset-0 rounded-[30px] p-[2px] bg-gradient-to-r from-[#2575EE] via-[#FFF] to-[#D690EF] opacity-50">
                <div className="w-full h-full rounded-[28px] bg-gradient-to-r from-[#101010] via-[rgba(22,21,21,0.29)] to-[rgba(156,178,255,0.19)]"></div>
              </div>

              <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="space-y-5">
                  <h2 className="text-white text-3xl lg:text-4xl font-semibold leading-[160%] tracking-[-0.4px]">
                    Quality over Quantity
                  </h2>
                  <p className="text-[rgba(239,237,253,0.7)] text-lg lg:text-xl leading-[150%]">
                    Unlike existing directories, filled with unverified
                    listings, we prioritize quality over quantity. Every partner
                    is carefully vetted to ensure they match our criteria.
                  </p>
                </div>

                <div className="relative">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/39785264ce2bf1eabc0dbeb526427fc86df790cb?width=628"
                    alt="Quality illustration"
                    className="w-[314px] h-[314px] transform rotate-[21.808deg] ml-auto"
                  />
                </div>
              </div>
            </div>

            {/* Trust & Transparency + Personal Touch */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Trust & Transparency */}
              <div className="relative rounded-[30px] border-2 border-transparent bg-gradient-to-br from-[#101010] via-[rgba(22,21,21,0.29)] to-[rgba(156,178,255,0.19)] p-8 lg:p-12">
                <div className="absolute inset-0 rounded-[30px] p-[2px] bg-gradient-to-r from-[#2575EE] via-[#FFF] to-[#D690EF] opacity-50">
                  <div className="w-full h-full rounded-[28px] bg-gradient-to-br from-[#101010] via-[rgba(22,21,21,0.29)] to-[rgba(156,178,255,0.19)]"></div>
                </div>

                <div className="relative space-y-6">
                  <div className="relative">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/97f4bbff58f787f1242624935f3904b9cf58935c?width=244"
                      alt=""
                      className="w-[122px] h-[128px] absolute -top-4 -left-4"
                    />
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/34194cfc84c97a1c067f6f0ffb35468f7bcf70b3?width=244"
                      alt=""
                      className="w-[122px] h-[128px] transform rotate-[74.101deg] relative"
                    />
                  </div>

                  <h3 className="text-white text-3xl lg:text-4xl font-semibold leading-[160%] tracking-[-0.4px]">
                    Trust & Transparency
                  </h3>
                  <p className="text-[rgba(239,237,253,0.7)] text-lg lg:text-xl leading-[150%]">
                    We ensure that any partner or software reviews pass through
                    our stringent QA, to make sure that you can trust in the
                    value of their service.
                  </p>
                </div>
              </div>

              {/* Personal Touch */}
              <div className="relative rounded-[30px] border-2 border-transparent bg-gradient-to-br from-[#101010] via-[rgba(22,21,21,0.29)] to-[rgba(156,178,255,0.19)] p-8 lg:p-12">
                <div className="absolute inset-0 rounded-[30px] p-[2px] bg-gradient-to-r from-[#2575EE] via-[#FFF] to-[#D690EF] opacity-50">
                  <div className="w-full h-full rounded-[28px] bg-gradient-to-br from-[#101010] via-[rgba(22,21,21,0.29)] to-[rgba(156,178,255,0.19)]"></div>
                </div>

                <div className="relative space-y-6">
                  <div className="relative">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/39508cb93855efb1e2912014b0f5e4ab08260689?width=191"
                      alt=""
                      className="w-[96px] h-[133px] transform rotate-[-66.485deg] absolute top-0 right-0"
                    />
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/95ce6e706364ba137a2d369521cd7fc9cc0262c3?width=254"
                      alt=""
                      className="w-[127px] h-[124px] relative"
                    />
                  </div>

                  <h3 className="text-white text-3xl lg:text-4xl font-semibold leading-[160%] tracking-[-0.4px]">
                    Personal Touch
                  </h3>
                  <p className="text-[rgba(239,237,253,0.7)] text-lg lg:text-xl leading-[150%]">
                    We don't just help you find the right partners — we guide
                    you through the software landscape to make smart,
                    future-ready decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>


      </div>
    </div>
  );
}
