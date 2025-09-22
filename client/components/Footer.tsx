import { ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-[#0D0D0D] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <svg className="absolute top-0 left-0 w-full h-full opacity-30" viewBox="0 0 1747 524" fill="none">
          <g filter="url(#filter0_f_footer)">
            <path d="M704.988 770.607C742.115 708.34 885.427 714.439 952.442 725.272C1131.75 757.572 1223.97 898.252 1230.27 899.388C1236.58 900.525 1055.53 644.553 964.222 516.425L516.1 769.855L637.25 944.242C644.36 912.308 667.86 832.873 704.988 770.607Z" fill="#4144F2"/>
          </g>
          <defs>
            <filter id="filter0_f_footer">
              <feGaussianBlur stdDeviation="258"/>
            </filter>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 px-4 md:px-8 lg:px-12 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Main footer content */}
          <div className="grid lg:grid-cols-4 gap-12 mb-12">
            {/* Company info */}
            <div className="lg:col-span-1 space-y-6">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/9660f4809b9a021cad54a39320c47a936c913d3e?width=251"
                alt="GlobalITMarket"
                className="h-12 w-auto aspect-[125.65/48]"
              />
              
              <p className="text-globalit-text-muted text-sm leading-relaxed">
                Sponsored by Project Advisory Solutions, we are a global hub for discovering trusted IT and software partners.
                We connect companies to opportunities in high-value markets, helping you cut search time, unlock new solutions, and grow with confidence.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-1 text-globalit-blue text-sm font-semibold cursor-pointer hover:underline">
                  <span>Learn more about us</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
                
                <div className="flex items-center gap-1 text-globalit-blue text-sm font-semibold cursor-pointer hover:underline">
                  <span>About Project Advisory Solutions</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Navigation links */}
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Column 1 */}
                <div className="space-y-4">
                  <div className="text-globalit-blue text-base leading-relaxed">
                    Browse all Partners<br/>
                    FAQs<br/>
                    Find my match
                  </div>
                </div>

                {/* Column 2 */}
                <div className="space-y-4">
                  <div className="text-globalit-blue text-base leading-relaxed">
                    Become a Partner<br/>
                    Write a Review
                  </div>
                </div>

                {/* Column 3 */}
                <div className="space-y-4">
                  <div className="text-globalit-blue text-base leading-relaxed">
                    Facebook<br/>
                    Instagram<br/>
                    LinkedIn
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/20 mb-6"></div>

          {/* Bottom footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <div className="flex gap-8">
              <span className="text-white/60">Privacy Policy</span>
              <span className="text-white/60">Terms of Conditions</span>
            </div>
            
            <span className="text-white/60">
              Copyrights GlobalITMarketplace 2025
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
