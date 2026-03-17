import React from "react";
import pix from "../assets/familycare.png";
import caregiver from "../assets/caregiver.png";

export function Who() {
  return (
    <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-16 bg-gray-50/50 overflow-hidden" id="who">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24 animate-reveal">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F1112] mb-6">
            Who is <span className="text-[#357ABB]">HCI</span> for?
          </h2>
          <p className="text-lg sm:text-xl text-[#2C3236] leading-relaxed max-w-3xl mx-auto opacity-90">
            This platform is a marketplace for caregivers and care receivers to
            exchange value for services provided and consumed.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 md:gap-10 md:grid-cols-2">
          {/* For Families */}
          <div className="flex flex-col animate-reveal delay-100 group">
            <div className="mb-8">
              <h3 className="font-bold text-2xl sm:text-3xl text-[#0F1112] mb-4 group-hover:text-[#357ABB] transition-colors">
                For Families or Loved Ones
              </h3>
              <p className="text-lg text-[#2C3236] leading-relaxed opacity-80">
                Looking for trusted, compassionate care for your elderly loved
                ones.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
              <img
                src={pix}
                alt="Family care"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* For Caregivers */}
          <div className="flex flex-col animate-reveal delay-200 group">
            <div className="mb-8">
              <h3 className="font-bold text-2xl sm:text-3xl text-[#0F1112] mb-4 group-hover:text-[#357ABB] transition-colors">
                For Caregivers
              </h3>
              <p className="text-lg text-[#2C3236] leading-relaxed opacity-80">
                Want to offer professional & heartfelt care and make a
                difference.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
              <img
                src={caregiver}
                alt="Caregiver"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Who;