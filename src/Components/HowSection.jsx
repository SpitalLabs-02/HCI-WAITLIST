import React from "react";
import wheelchairImage from "../assets/love.png";

export function HowSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid gap-8 md:gap-16 items-center md:grid-cols-2">
        {/* Image column */}
        <div className="order-2 md:order-1 flex justify-center">
          <img
            src={wheelchairImage}
            alt="Elderly assistance"
            className="w-full max-w-sm md:max-w-none h-auto object-contain"
          />
        </div>

        {/* Text column */}
        <div className="order-1 md:order-2">
          <div className="mb-6 md:mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#0f1112]">
              How Our Waitlist Works
            </h2>
            <p className="text-base sm:text-lg md:text-xl font-normal text-gray-700 mt-3 md:mt-4">
              Getting started is easy. Here's how you'll join and benefit from
              the HCI Waitlist.
            </p>
          </div >

          <div className="max-w-6xl mx-auto  w-full py-16 px-6">
            <div className=" grid-cols-1 gap-2 md:grid">
              <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Step 1 */}
                <div className="flex flex-col  ">
                  <div className="w-12 h-12 rounded-full bg-[#357ABB] flex items-center justify-center text-xl font-semibold text-[#FFFFFF] mb-4">
                    1
                  </div>
                  <h3 className="text-xl font-semibold text-[#101828] mb-2">
                    Sign Up
                  </h3>
                  <p className="text-[#475467] text-base max-w-xs">
                    Fill in a quick form with your details to secure your spot on our exclusive waitlist.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col ">
                  <div className="w-12 h-12 rounded-full bg-[#357ABB] flex items-center justify-center text-xl font-semibold text-[#FFFFFF] mb-4">
                    2
                  </div>
                  <h3 className="text-xl font-semibold text-[#101828] mb-2">
                    Get Notified
                  </h3>
                  <p className="text-[#475467] text-base max-w-xs">
                    Be among the early notifiers once the service is available.
                  </p>
                </div>
              </div>
              {/* Step 3 */}
              <div className="flex flex-col ">
                <div className="w-12 h-12 rounded-full bg-[#357ABB] flex items-center justify-center text-xl font-semibold text-[#FFFFFF] mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold text-[#101828] mb-2">
                  Start Care
                </h3>
                <p className="text-[#475467] text-base leading-relaxed max-w-xs">
                  Onboard, verify, and connect with caregivers or families requiring compassionate elderly care for their loved ones.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HowSection;