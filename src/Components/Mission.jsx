import React from "react";

export function Mission() {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 md:px-8 bg-white overflow-hidden" id="mission">
      <div className="mx-auto text-center max-w-5xl animate-reveal">
        <div className="mb-10 inline-block">
          <h3 className="text-sm sm:text-base font-bold tracking-widest uppercase rounded-full bg-[#EFF8FF] text-[#357ABB] px-6 py-2 shadow-sm">
            Our Mission
          </h3>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-[#0f1112] leading-[1.15] tracking-tight">
          We believe <span className="text-[#357ABB]">every</span> elderly person deserves <span className="italic">compassionate</span> and quality
          care and every caregiver deserves to be <span className="underline decoration-[#357ABB] decoration-2 underline-offset-8 text-[#357ABB]">valued</span>.
        </h2>
      </div>
    </section>
  );
}

export default Mission;