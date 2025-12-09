import React from "react";
import pix from "../assets/familycare.png";
import caregiver from "../assets/caregiver.png";

export function Who() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#0F1112] mb-4">
            Who is HCI for?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#2C3236] leading-relaxed max-w-3xl mx-auto">
            This platform is a marketplace for caregivers and care receivers <br /> to
            exchange value for services provided and consumed.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 md:gap-10 md:grid-cols-2">
          {/* For Families */}
          <div className="flex flex-col">
            <div className="mb-6">
              <h3 className="font-semibold text-2xl sm:text-3xl text-[#0F1112] mb-3">
                For Families or Loved Ones
              </h3>
              <p className="text-base sm:text-lg text-[#2C3236] leading-relaxed">
                Looking for trusted, compassionate care for your elderly loved
                ones.
              </p>
            </div>
            <img
              src={pix}
              alt="Family care"
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>

          {/* For Caregivers */}
          <div className="flex flex-col">
            <div className="mb-6">
              <h3 className="font-semibold text-2xl sm:text-3xl text-[#0F1112] mb-3">
                For Caregivers
              </h3>
              <p className="text-base sm:text-lg text-[#2C3236] leading-relaxed">
                Want to offer professional & heartfelt care and make a
                difference.
              </p>
            </div>
            <img
              src={caregiver}
              alt="Caregiver"
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Who;