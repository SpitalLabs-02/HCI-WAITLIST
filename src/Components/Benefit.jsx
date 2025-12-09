import React from "react";
import key from "../assets/keyicon.png";
import star from "../assets/staricon.png";
import shield from "../assets/shieldicon.png";

export function Benefit() {
  return (
    <section className="py-16 bg-white px-4 sm:px-8 md:px-16">
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 items-start">
        {/* Left column */}
        <div className="md:pr-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6">
            Why join the HCI Waitlist?
          </h2>
          <p className="text-base sm:text-lg text-gray-700">
            We provide comprehensive care services tailored to meet the unique
            needs of every senior, ensuring dignity, comfort, and peace of mind
            for families.
          </p>
        </div>

        {/* Right column - benefit cards */}
        <div className="grid gap-6">
          <article className="flex flex-col sm:flex-row items-center gap-4 bg-[#EDF9EE] p-6 rounded-lg shadow-sm">
            <div className="flex-1">
              <h4 className="font-semibold text-xl sm:text-2xl mb-2">Priority Access</h4>
              <p className="text-gray-600 text-sm sm:text-base">
                Get onboarded & verified early <br /> when service launches.
              </p>
            </div>
            <img
              src={key}
              alt="Priority access icon"
              className="w-20 h-20 sm:w-28 sm:h-28 object-contain"
            />
          </article>

          <article className="flex flex-col sm:flex-row items-center gap-4 bg-[#FCF5FF] p-6 rounded-lg shadow-sm">
            <div className="flex-1">
              <h4 className="font-semibold text-xl sm:text-2xl mb-2">Exclusive Benefits</h4>
              <p className="text-gray-600 text-sm sm:text-base">
                Early members enjoy special <br /> offers.
              </p>
            </div>
            <img
              src={star}
              alt="Exclusive benefits icon"
              className="w-20 h-20 sm:w-28 sm:h-28 object-contain"
            />
          </article>

          <article className="flex flex-col sm:flex-row items-center gap-4 bg-[#EBF5FF] p-6 rounded-lg shadow-sm">
            <div className="flex-1">
              <h4 className="font-semibold text-xl sm:text-2xl mb-2">Trusted & Secure</h4>
              <p className="text-gray-600 text-sm sm:text-base">
                Get early access to quality & <br /> verified caregivers.
              </p>
            </div>
            <img
              src={shield}
              alt="Trusted and secure icon"
              className="w-20 h-20 sm:w-28 sm:h-28 object-contain"
            />
          </article>
        </div>
      </div>
    </section>
  );
}

export default Benefit;