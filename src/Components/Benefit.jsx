import React from "react";
import key from "../assets/keyicon.png";
import star from "../assets/staricon.png";
import shield from "../assets/shieldicon.png";

export function Benefit() {
  return (
    <section className="py-20 bg-white px-4 sm:px-8 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 items-start">
        {/* Left column */}
        <div className="md:pr-8 animate-reveal">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Why join the <span className="text-[#357ABB]">HCI Waitlist?</span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed opacity-90">
            We provide comprehensive care services tailored to meet the unique
            needs of every senior, ensuring dignity, comfort, and peace of mind
            for families.
          </p>
        </div>

        {/* Right column - benefit cards */}
        <div className="grid gap-6">
          <article className="flex flex-col sm:flex-row items-center gap-6 bg-[#EDF9EE] p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-reveal delay-100 group">
            <div className="flex-1 text-center sm:text-left">
              <h4 className="font-bold text-xl sm:text-2xl mb-2 group-hover:text-[#1E5F3B] transition-colors">Priority Access</h4>
              <p className="text-gray-600 text-base leading-relaxed">
                Get onboarded & verified early <br className="hidden sm:block" /> when service launches.
              </p>
            </div>
            <img
              src={key}
              alt="Priority access icon"
              className="w-20 h-20 sm:w-24 sm:h-24 object-contain group-hover:scale-110 transition-transform duration-300"
            />
          </article>

          <article className="flex flex-col sm:flex-row items-center gap-6 bg-[#FCF5FF] p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-reveal delay-200 group">
            <div className="flex-1 text-center sm:text-left">
              <h4 className="font-bold text-xl sm:text-2xl mb-2 group-hover:text-[#69218F] transition-colors">Exclusive Benefits</h4>
              <p className="text-gray-600 text-base leading-relaxed">
                Early members enjoy special <br className="hidden sm:block" /> offers.
              </p>
            </div>
            <img
              src={star}
              alt="Exclusive benefits icon"
              className="w-20 h-20 sm:w-24 sm:h-24 object-contain group-hover:scale-110 transition-transform duration-300"
            />
          </article>

          <article className="flex flex-col sm:flex-row items-center gap-6 bg-[#EBF5FF] p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-reveal delay-300 group">
            <div className="flex-1 text-center sm:text-left">
              <h4 className="font-bold text-xl sm:text-2xl mb-2 group-hover:text-[#357ABB] transition-colors">Trusted & Secure</h4>
              <p className="text-gray-600 text-base leading-relaxed">
                Get early access to quality & <br className="hidden sm:block" /> verified caregivers.
              </p>
            </div>
            <img
              src={shield}
              alt="Trusted and secure icon"
              className="w-20 h-20 sm:w-24 sm:h-24 object-contain group-hover:scale-110 transition-transform duration-300"
            />
          </article>
        </div>
      </div>
    </section>
  );
}

export default Benefit;