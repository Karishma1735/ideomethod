// import React, { useState } from "react";

// const IMAGE_URL = "https://i.ibb.co/zWhJX1CB/Frame-346.png";
// const IMAGES = new Array(6).fill(0).map((_, i) => ({
//   id: i,
//   url: IMAGE_URL,
// }));
//   const [activeTab, setActiveTab] = useState("Project Management");

//   const tabs = ["Project Management", "Accounting", "Human Resources"];
// export default function Discover() {
//   return (
//     <main className="min-h-screen relative overflow-hidden font-sans  text-white py-16">
//       <div className="container mx-auto px-6">
//         <header className="text-center max-w-3xl mx-auto">
//           <h1 className="text-[44px] font-semibold tracking-tight leading-tight">
//             Discover top-viewed software solutions
//           </h1>
//           <a
//             className="ml-3 inline-flex items-center text-sm text-indigo-300 hover:text-indigo-200"
//             href="#list"
//           >
//             See all software solutions <span className="ml-2">→</span>
//           </a>
//         </header>

//         <div className="mt-6 flex items-center justify-center gap-3 flex-wrap">
//           {tabs.map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
//             ${
//               activeTab === tab
//                 ? "bg-indigo-600 text-white shadow-md"
//                 : "bg-slate-800/30 text-slate-300 hover:bg-slate-700/40"
//             }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>

//         <section id="list" className="mt-12">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {IMAGES.map((img) => (
//               <article
//                 key={img.id}
//                 className="relative overflow-hidden rounded-2xl border border-white/6 bg-gradient-to-b from-white/3 to-white/2 backdrop-blur-md"
//               >
//                 <img
//                   src={img.url}
//                   alt="solution"
//                   className="w-full h-76 object-cover rounded-2xl"
//                 />
//               </article>
//             ))}
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// }

// // import React, { useState } from "react";

// // const HERO_IMAGE =
// //   "https://cdn.builder.io/api/v1/image/assets%2F7120377721274303abae7120ed97afce%2F4a395dd3d82442cc8804fdd77f5bfe06?format=webp&width=800";
// // const GALLERY_IMAGE =
// //   "https://cdn.builder.io/api/v1/image/assets%2F7120377721274303abae7120ed97afce%2F9ba8401968c2410597f5505a916de791?format=webp&width=800";

// // type Solution = {
// //   id: number;
// //   name: string;
// //   location: string;
// //   employees: string;
// //   avgProject: string;
// //   completed: string;
// //   tags: string[];
// //   rating: number;
// // };

// // const SOLUTIONS: Solution[] = new Array(6).fill(0).map((_, i) => ({
// //   id: i,
// //   name: "TechNinja",
// //   location: "Keszthely, Hungary",
// //   employees: "15-30 employees",
// //   avgProject: "$750",
// //   completed: "24 completed projects",
// //   tags: ["Great Communication", "Quick Delivery"],
// //   rating: 5,
// // }));

// // const IMAGES = new Array(6)
// //   .fill(0)
// //   .map((_, i) => ({ id: i, url: GALLERY_IMAGE }));

// // function StarIcon({ className = "w-4 h-4" }: { className?: string }) {
// //   return (
// //     <svg
// //       xmlns="http://www.w3.org/2000/svg"
// //       viewBox="0 0 24 24"
// //       fill="currentColor"
// //       className={className}
// //       aria-hidden
// //     >
// //       <path d="M12 .587l3.668 7.431L24 9.748l-6 5.848L19.335 24 12 20.201 4.665 24 6 15.596 0 9.748l8.332-1.73z" />
// //     </svg>
// //   );
// // }

// // export default function Index() {
// //   const [tab, setTab] = useState<"grid" | "images">("grid");

// //   return (
// //     <main className="min-h-screen relative overflow-hidden font-sans bg-gradient-to-b from-[#0b1220] via-[#0f1724] to-[#0b0f1a] text-white py-16">
// //       <img
// //         src={HERO_IMAGE}
// //         alt="decor"
// //         className="pointer-events-none select-none absolute right-0 top-8 w-[520px] max-w-[45%] opacity-20 blur-[3px] mix-blend-screen"
// //       />

// //       <div className="container mx-auto px-6">
// //         <header className="text-center max-w-3xl mx-auto">
// //           <p className="text-sm text-indigo-300/70 uppercase tracking-wider mb-4">
// //             Discover
// //           </p>
// //           <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
// //             Discover top-viewed software solutions
// //           </h1>
// //           <p className="mt-4 text-lg text-slate-200/80">
// //             Browse curated teams and agencies with real reviews and delivery
// //             records.
// //           </p>

// //           <div className="mt-6 flex items-center justify-center gap-3 flex-wrap">
// //             <span className="px-3 py-1 rounded-full bg-slate-800/40 backdrop-blur-sm text-sm">
// //               Project Management
// //             </span>
// //             <span className="px-3 py-1 rounded-full bg-slate-800/30 backdrop-blur-sm text-sm">
// //               Accounting
// //             </span>
// //             <span className="px-3 py-1 rounded-full bg-slate-800/30 backdrop-blur-sm text-sm">
// //               Human Resources
// //             </span>
// //             <a
// //               className="ml-3 inline-flex items-center text-sm text-indigo-300 hover:text-indigo-200"
// //               href="#list"
// //             >
// //               See all software solutions <span className="ml-2">→</span>
// //             </a>
// //           </div>
// //         </header>

// //         {/* Tabs between Discover and content */}
// //         <div className="mt-10 max-w-3xl mx-auto flex items-center justify-center">
// //           <nav className="inline-flex rounded-full bg-white/4 p-1">
// //             <button
// //               onClick={() => setTab("grid")}
// //               className={`px-4 py-2 rounded-full text-sm font-medium transition ${
// //                 tab === "grid"
// //                   ? "bg-gradient-to-r from-indigo-600 to-pink-500 shadow"
// //                   : "text-slate-200/80"
// //               }`}
// //             >
// //               Grid
// //             </button>
// //             <button
// //               onClick={() => setTab("images")}
// //               className={`px-4 py-2 rounded-full text-sm font-medium transition ${
// //                 tab === "images"
// //                   ? "bg-gradient-to-r from-indigo-600 to-pink-500 shadow"
// //                   : "text-slate-200/80"
// //               }`}
// //             >
// //               Images
// //             </button>
// //           </nav>
// //         </div>

// //         <section id="list" className="mt-8">
// //           {tab === "grid" ? (
// //             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// //               {SOLUTIONS.map((s) => (
// //                 <article
// //                   key={s.id}
// //                   className="relative overflow-hidden rounded-2xl border border-white/6 bg-gradient-to-b from-white/3 to-white/2 p-6 backdrop-blur-md"
// //                   aria-labelledby={`solution-${s.id}-title`}
// //                 >
// //                   <div className="flex items-start justify-between">
// //                     <div className="flex items-center gap-3">
// //                       <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-600 to-pink-500 flex items-center justify-center text-white font-semibold">
// //                         LN
// //                       </div>
// //                       <div>
// //                         <h3
// //                           id={`solution-${s.id}-title`}
// //                           className="text-lg font-semibold"
// //                         >
// //                           {s.name}
// //                         </h3>
// //                         <div className="flex items-center gap-2 mt-1 text-sm text-slate-200/80">
// //                           <span className="inline-flex items-center gap-2 bg-slate-900/30 px-2 py-0.5 rounded-full">
// //                             {s.tags[0]}
// //                           </span>
// //                           <span className="inline-flex items-center gap-2 bg-slate-900/30 px-2 py-0.5 rounded-full">
// //                             {s.tags[1]}
// //                           </span>
// //                         </div>
// //                       </div>
// //                     </div>

// //                     <div className="flex items-center gap-2">
// //                       <span className="inline-flex items-center gap-1 bg-slate-900/25 px-3 py-1 rounded-full text-sm">
// //                         <StarIcon className="w-4 h-4 text-yellow-400" />
// //                         <span className="font-medium">{s.rating}.0</span>
// //                       </span>
// //                     </div>
// //                   </div>

// //                   <ul className="mt-5 text-sm space-y-1 text-slate-200/80">
// //                     <li className="flex items-center gap-2">
// //                       <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
// //                       <span>{s.location}</span>
// //                     </li>
// //                     <li className="flex items-center gap-2">
// //                       <span className="w-2 h-2 rounded-full bg-sky-400 inline-block" />
// //                       <span>{s.employees}</span>
// //                     </li>
// //                     <li className="flex items-center gap-2">
// //                       <span className="w-2 h-2 rounded-full bg-violet-400 inline-block" />
// //                       <span>Avg project {s.avgProject}</span>
// //                     </li>
// //                     <li className="flex items-center gap-2">
// //                       <span className="w-2 h-2 rounded-full bg-amber-400 inline-block" />
// //                       <span>{s.completed}</span>
// //                     </li>
// //                   </ul>

// //                   <div className="mt-6 flex items-center justify-between">
// //                     <a
// //                       className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 shadow-md text-sm font-semibold"
// //                       href="#"
// //                     >
// //                       See more
// //                     </a>

// //                     <div className="text-xs text-slate-300/70">5 reviews</div>
// //                   </div>

// //                   <div className="pointer-events-none absolute -bottom-8 -right-12 w-56 h-44 rounded-full bg-gradient-to-tr from-pink-500/30 to-indigo-500/20 blur-2xl" />
// //                 </article>
// //               ))}
// //             </div>
// //           ) : (
// //             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// //               {IMAGES.map((img) => (
// //                 <article
// //                   key={img.id}
// //                   className="overflow-hidden rounded-2xl border border-white/6 bg-white/3 backdrop-blur-md"
// //                 >
// //                   <img
// //                     src={img.url}
// //                     alt={`img-${img.id}`}
// //                     className="w-full h-60 object-cover rounded-2xl"
// //                   />
// //                 </article>
// //               ))}
// //             </div>
// //           )}

// //           <div className="mt-8 text-center">
// //             <button className="px-6 py-3 rounded-full bg-white/6 backdrop-blur-sm text-white hover:bg-white/10">
// //               Load more
// //             </button>
// //           </div>
// //         </section>

// //         <footer className="mt-16 text-center text-slate-400 text-sm">
// //           © {new Date().getFullYear()} Ideomethod — Curated software solutions
// //         </footer>
// //       </div>
// //     </main>
// //   );
// // }


import React, { useState } from "react";

const IMAGE_URL = "https://i.ibb.co/zWhJX1CB/Frame-346.png";
const IMAGES = new Array(6).fill(0).map((_, i) => ({
  id: i,
  url: IMAGE_URL,
}));

export default function Discover() {
  const [activeTab, setActiveTab] = useState("Project Management");

  const tabs = ["Project Management", "Accounting", "Human Resources","CRM" , "Construction Management"];

  return (
    <main className="min-h-screen relative overflow-hidden font-sans bg-globalit-dark text-white py-16">
      <div className="container mx-auto px-6">
        <header className="text-center max-w-3xl mx-auto">
          <h1 className="text-[44px] font-semibold tracking-tight leading-tight">
            Discover top-viewed software solutions
          </h1>
          <a
            className="ml-3 mt-5px inline-flex items-center font-meium"
            href="#list"
            style={{ fontSize: "20px", color: "#19A7FF" }}
          >
            See all software solutions <span className="ml-2">→</span>
          </a>
        </header>

        {/* Tabs */}
        <div className="mt-6 flex items-center justify-center gap-3 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-3 rounded-full text-sm font-medium transition-colors
               ${
                 activeTab === tab
                   ? "text-white shadow-md bg-gradient-to-r from-[#E59CFF5C] via-[#BA9CFF5C] to-[#9CB2FF5C]"
                   : "bg-slate-800/30 text-slate-300 hover:bg-slate-700/40"
               }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Section with filtered content */}
        <section id="list" className="mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {IMAGES.map((img) => (
              <article
                key={img.id}
                className="relative overflow-hidden rounded-2xl border border-white/6 bg-gradient-to-b from-white/3 to-white/2 backdrop-blur-md"
              >
                <img
                  src={img.url}
                  alt="solution"
                  className="w-full h-76 object-cover rounded-2xl"
                />
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
