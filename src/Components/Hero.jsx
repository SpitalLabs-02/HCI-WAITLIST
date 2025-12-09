import React from "react";
import img from "../assets/Image.png";
import background from "../assets/backgd.png";

export function Hero() {
    return (
        <section
            className="bg-cover bg-center"
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className="min-h-screen flex items-center">
                <div className="max-w-7xl mx-auto w-full px-6 py-20">
                    <div className="grid gap-8 items-center md:grid-cols-2">
                        {/* Text column */}
                        <div className="order-1 md:order-1">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-[#0f1112]">
                                Be among the first to experience{" "}
                                <span className="text-[#357ABB]">compassionate care</span> for
                                your loved ones, or join us in offering{" "}
                                <span className="text-[#357ABB]">heartfelt care</span> to the
                                elderly.
                            </h2>

                            <p className="mt-4 text-base sm:text-lg text-[#2c3236] max-w-xl">
                                Join our exclusive waitlist to access quality care for your loved
                                ones or to become a trusted caregiver for the elderly.
                            </p>
 
                            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
                                <a
                                    href="https://bit.ly/HCI-WAITLIST"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center bg-[#357ABB] hover:bg-blue-800 text-white rounded-full px-6 py-3 text-base font-medium w-full sm:w-auto text-center"
                                >
                                    Join the Waitlist
                                </a>

                                <button
                                    type="button"
                                    className="inline-flex items-center justify-center border border-[#357ABB] text-[#357ABB] bg-white hover:bg-blue-50 rounded-full px-6 py-3 text-base font-medium w-full sm:w-auto"
                                >
                                    How it Works
                                </button>
                            </div>
                        </div>

                        {/* Image column */}
                        <div className="order-2 md:order-2 flex justify-center md:justify-end">
                            <img
                                src={img}
                                alt="Person receiving care"
                                className="w-64 sm:w-80 md:w-[504px] h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;