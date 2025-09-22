// import { ArrowRight } from "lucide-react";

// export function FeaturesSection() {
//   return (
//     <section className="w-full py-20 px-4 md:px-8 lg:px-12 relative">
//       {/* Background image */}
//       <div className="absolute inset-0 -z-10">
//         <img 
//           src="https://api.builder.io/api/v1/image/assets/TEMP/f3f47191df4d5bb1228da1fd5bc5b9b28b05da12?width=3696"
//           alt=""
//           className="w-full h-full object-cover rounded-[200px_200px_400px_400px]"
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-600/50 to-globalit-dark rounded-[400px_400px_200px_200px] mix-blend-multiply"></div>
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto">
//         {/* Main comparison tool card */}
//         <div className="flex justify-center mb-16">
//           <div className="w-full max-w-4xl bg-gradient-card border-2 border-gray-600 rounded-3xl backdrop-blur-lg overflow-hidden">
//             <img 
//               src="https://api.builder.io/api/v1/image/assets/TEMP/526acbcf4262fb47b4123f18b0061b59acbf8783?width=2160"
//               alt="Comparison tools interface"
//               className="w-full h-auto"
//             />
//           </div>
//         </div>

//         {/* Feature cards */}
//         <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
//           {/* In-depth Comparison Tools */}
//           <div className="bg-white/5 border border-gray-600 rounded-3xl p-8 backdrop-blur-3xl shadow-2xl">
//             <div className="flex flex-col items-center text-center gap-6">
//               <div className="w-16 h-16 bg-gradient-primary/20 rounded-3xl flex items-center justify-center">
//                 <img 
//                   src="https://api.builder.io/api/v1/image/assets/TEMP/55970c844b242882ae865b288d17e82d1690d797?width=130"
//                   alt="Comparison tools icon"
//                   className="w-8 h-8"
//                 />
//               </div>
              
//               <div className="space-y-4">
//                 <h3 className="text-xl font-bold text-white">
//                   In-depth Comparison Tools
//                 </h3>
//                 <p className="text-globalit-text-light text-sm leading-relaxed max-w-xs">
//                   Narrow down your options. Compare and evaluate features, pricing and ratings.
//                 </p>
//               </div>

//               <div className="flex items-center gap-2">
//                 <span className="text-globalit-blue text-base">Coming Soon</span>
//               </div>
//             </div>
//           </div>

//           {/* One-on-one Consultation */}
//           <div className="bg-white/5 border border-gray-600 rounded-3xl p-8 backdrop-blur-3xl shadow-2xl">
//             <div className="flex flex-col items-center text-center gap-6">
//               <div className="w-16 h-16 bg-gradient-primary/20 rounded-3xl flex items-center justify-center">
//                 <img 
//                   src="https://api.builder.io/api/v1/image/assets/TEMP/e6f59858023ae03e1845ccf03df827854c7cc127?width=130"
//                   alt="Consultation icon"
//                   className="w-8 h-8"
//                 />
//               </div>
              
//               <div className="space-y-4">
//                 <h3 className="text-xl font-bold text-white">
//                   One-one-one Consultation
//                 </h3>
//                 <p className="text-globalit-text-light text-xs leading-relaxed max-w-xs">
//                   Speak to one of our experts and let them help you make the right decision
//                 </p>
//               </div>

//               <div className="flex items-center gap-2">
//                 <span className="text-globalit-blue text-base">Book a free consultation call</span>
//                 <ArrowRight className="w-6 h-6 text-globalit-blue" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



import { ArrowRight } from "lucide-react";

export function FeaturesSection() {
  return (
    <section className="w-full py-20 px-4 md:px-8 lg:px-12 relative bg-globalit-dark">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/f3f47191df4d5bb1228da1fd5bc5b9b28b05da12?width=3696"
          alt=""
          className="w-full h-full object-cover rounded-[200px_200px_400px_400px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-600/50 to-globalit-dark rounded-[400px_400px_200px_200px] mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main comparison tool card */}
        <div className="flex justify-center mb-32 relative">
          <div className="w-full max-w-4xl bg-gradient-card border-2 border-gray-600 rounded-3xl backdrop-blur-lg overflow-hidden">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/526acbcf4262fb47b4123f18b0061b59acbf8783?width=2160"
              alt="Comparison tools interface"
              className="w-full h-auto"
            />
          </div>

          {/* In-depth Comparison Tools */}
          <div className="absolute top-20 -left-12 w-72   bg-gradient-to-b from-[#404040] to-[#101010]  border border-gray-600 rounded-3xl p-4 m-2  shadow-2xl">
            <div className="flex flex-col items-center text-center gap-6">
              <div className="w-16 h-16 bg-gradient-primary/20 rounded-3xl flex items-center justify-center">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/55970c844b242882ae865b288d17e82d1690d797?width=130"
                  alt="Comparison tools icon"
                  className="w-8 h-8"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">
                  In-depth Comparison Tools
                </h3>
                <p className="text-globalit-text-light text-sm leading-relaxed max-w-xs">
                  Narrow down your options. Compare and evaluate features,
                  pricing and ratings.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-globalit-blue text-base">
                  Coming Soon
                </span>
              </div>
            </div>
          </div>

          {/* One-on-one Consultation */}
          <div className="absolute -bottom-12 -right-10 w-72 bg-white/5 border border-gray-600 rounded-3xl p-4 m-2 backdrop-blur-3xl shadow-2xl">
            <div className="flex flex-col items-center text-center gap-6">
              <div className="w-16 h-16 bg-gradient-primary/20 rounded-3xl flex items-center justify-center">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/e6f59858023ae03e1845ccf03df827854c7cc127?width=130"
                  alt="Consultation icon"
                  className="w-8 h-8"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">
                  One-on-one Consultation
                </h3>
                <p className="text-globalit-text-light text-xs leading-relaxed max-w-xs">
                  Speak to one of our experts and let them help you make the
                  right decision
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-globalit-blue text-base">
                  Book a free consultation call
                </span>
                <ArrowRight className="w-6 h-6 text-globalit-blue" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

