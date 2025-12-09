import React, { useState } from "react";

export function WaitList() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    role: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="bg-[#265782] text-white py-12 sm:py-20 md:py-32 px-4 sm:px-6 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto grid gap-8 md:gap-16 items-center md:grid-cols-2">
        {/* Form Card */}
        <div className="bg-white text-gray-600 rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 order-2 md:order-1">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6 md:mb-8">
            Join the Waitlist
          </h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="eg. Jude Jonzz"
                className="w-full bg-gray-100 rounded-lg px-4 py-3 text-gray-600 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#357ABB]"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="abc@gmail.com"
                className="w-full bg-gray-100 rounded-lg px-4 py-3 text-gray-600 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#357ABB]"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Role
              </label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full bg-gray-100 rounded-lg px-4 py-3 text-gray-600 text-sm focus:outline-none focus:ring-2 focus:ring-[#357ABB]"
              >
                <option value="">Select your role</option>
                <option value="caregiver">Caregiver</option>
                <option value="family">Family Member</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Location
              </label>
              <select
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full bg-gray-100 rounded-lg px-4 py-3 text-gray-600 text-sm focus:outline-none focus:ring-2 focus:ring-[#357ABB]"
              >
                <option value="">Select your location</option>
                <option value="lagos">Lagos</option>
                <option value="abuja">Abuja</option>
                <option value="other">Other</option>
              </select>
            </div>
          </form>

          <a
            href="https://bit.ly/HCI-WAITLIST"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-[#2F6DB5] hover:bg-[#285c97] text-white font-semibold mt-8 py-4 rounded-full text-center text-base transition-colors"
          >
            Join the Waitlist
          </a>
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left order-1 md:order-2 flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 md:mb-6">
            Secure Your Spot on the HCI Waitlist
          </h2>
          <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
            Fill in your details below to reserve early access to our trusted
            elderly care services.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WaitList;