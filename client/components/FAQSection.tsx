import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

export function FAQSection() {
  const [openQuestion, setOpenQuestion] = useState(0);

  const categories = [
    "General questions",
    "Reviews and publications", 
    "For Partners",
    "For Clients"
  ];

  const faqs = [
    {
      question: "What is The GlobalITMarketplace?",
      answer: "The Global IT Marketplace is a database of some of the very best in Global IT & SaaS talent. It is a place to compare your options and find software and provisioners (we like to call them partners!) that are right for your business. It's our mission to save you time, money & effort by giving you access to software providers that meet your budget, timeline and scope."
    },
    {
      question: "What makes GlobalITMarketplace different from other comparison platforms?",
      answer: "We focus on providing unbiased, comprehensive comparisons without pay-to-win features. Our platform prioritizes user needs over vendor payments."
    },
    {
      question: "How can I sign up as a partner?",
      answer: "You can apply to become a partner through our partner application process. We carefully vet all partners to ensure quality and reliability."
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      answer: "This is a placeholder question that would contain relevant information about our services."
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?", 
      answer: "This is another placeholder question with helpful information for users."
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      answer: "Yet another helpful answer to common questions users might have."
    }
  ];

  return (
    <section className="w-full py-20 px-4 md:px-8 lg:px-12 bg-globalit-dark relative">
      <div className="flex justify-center mb-2">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/4a3f29fcf24420414024c16afd2917e2a18f2b42?width=600"
          alt="FAQ Banner"
          className="w-100 object-contain"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto -mt-16 md:-mt-60 text-center">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-semibold text-globalit-gray mb-6">
            You have questions? We have answers!
          </h2>
          <p className="text-globalit-text-muted text-xl">
            If you don't find the answer you need, you can{" "}
            <span className="text-globalit-blue font-bold">
              contact us directly
            </span>
            , or fill out our{" "}
            <span className="text-globalit-blue font-bold">query form.</span>
          </p>
        </div>

        {/* FAQ Container */}
        <div className="bg-white/5 border-2 border-globalit-purple rounded-3xl p-12 backdrop-blur-md">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Categories sidebar */}
            <div className="lg:w-48 flex-shrink-0">
              <div className="space-y-4">
                {categories.map((category, index) => (
                  <div
                    key={index}
                    className={`text-base font-medium cursor-pointer transition-colors ${
                      index === 0
                        ? "text-white font-bold"
                        : "text-white/40 hover:text-white/70"
                    }`}
                  >
                    {category}
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ content */}
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-10">
                <HelpCircle className="w-8 h-8 text-globalit-gray" />
                <h3 className="text-2xl font-semibold text-globalit-gray">
                  Top General Questions
                </h3>
              </div>

              <div className="space-y-0">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border-b border-globalit-gray/50 last:border-b-0"
                  >
                    <button
                      onClick={() =>
                        setOpenQuestion(openQuestion === index ? -1 : index)
                      }
                      className="w-full py-8 flex justify-between items-center text-left hover:bg-white/5 transition-colors"
                    >
                      <div className="flex-1 pr-4">
                        <h4 className="text-globalit-gray text-base font-bold">
                          {faq.question}
                        </h4>
                        {openQuestion === index && (
                          <div className="mt-4 text-globalit-text-muted text-sm leading-relaxed max-w-2xl">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                      <div className="flex-shrink-0">
                        {openQuestion === index ? (
                          <Minus className="w-6 h-6 text-white" />
                        ) : (
                          <Plus className="w-6 h-6 text-white" />
                        )}
                      </div>
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6">
                <p className="text-globalit-text-muted text-base">
                  See all frequently asked questions{" "}
                  <span className="text-globalit-blue font-bold cursor-pointer hover:underline">
                    here
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
