import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="w-full bg-[#000002] relative z-50">
      <div className="flex flex-col items-center gap-3">
        {/* Top section with logo and auth buttons */}
        <div className="flex justify-between items-center w-full px-4 sm:px-8 lg:px-[150px] py-[30px]">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/3d2f5443e8c8a333bd269df19c78af860803cd2b?width=251"
            alt="GlobalITMarketplace Logo"
            className="w-[125.652px] h-[48px]"
          />

          <div className="flex items-center gap-7">
            <span className="text-white text-lg font-semibold leading-5 tracking-[-0.18px] hidden sm:block">
              Log in
            </span>
            <Button className="h-14 px-8 rounded-[56px] border border-[#4B5FA2] bg-[rgba(234,234,234,0.05)] text-white text-lg font-semibold leading-5 tracking-[-0.18px] hover:bg-[rgba(234,234,234,0.1)]">
              Sign up
            </Button>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[rgba(112,112,112,0.56)] to-transparent"></div>

        {/* Navigation links */}
        <div className="flex justify-between items-center w-full px-4 sm:px-8 lg:px-[150px] py-5">
          <div className="flex items-center gap-6 ">
            <a
              href="/"
              className="text-[#1DA1F2] text-base leading-5 tracking-[0.16px] hover:opacity-80"
            >
              Services
            </a>
            <a
              href="#"
              className="text-[#1DA1F2] text-base leading-5 tracking-[0.16px] hover:opacity-80"
            >
              FAQs
            </a>
            <a
              href="/Aboutus"
              className="text-[#1DA1F2] text-base leading-5 tracking-[0.16px] hover:opacity-80"
            >
              Who we are
            </a>
            <a
              href="#"
              className="text-[#1DA1F2] text-base leading-5 tracking-[0.16px] hover:opacity-80"
            >
              Find my match
            </a>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            <a
              href="#"
              className="text-[#1DA1F2] text-base leading-5 tracking-[0.16px] hover:opacity-80"
            >
              Become a Partner
            </a>
            <a
              href="#"
              className="text-[#1DA1F2] text-base leading-5 tracking-[0.16px] hover:opacity-80"
            >
              Write a Review
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
