import React from "react";
import logo from "../assets/LogoIcon.png";
import appstore from "../assets/appstore.png";
import playstore from "../assets/playstore.png";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export function Footer() {
    return (
        <footer className="bg-[#F1F7FC] py-10 text-gray-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
                    {/* Left column */}
                    <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-4">
                            <div className="flex items-center gap-3">
                                <img
                                    src={logo}
                                    alt="HCI Logo"
                                    className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
                                />
                                <h1 className="text-sm sm:text-base font-semibold leading-tight">
                                    HUMMINGBIRD
                                    <br />
                                    CARE INITIATIVE
                                </h1>
                            </div>
                        </div>

                        <p className="mt-4 text-sm sm:text-base leading-relaxed">
                            Providing compassionate care for elderly <br /> individuals, connecting
                            caregivers with <br /> those who need assistance.
                        </p>

                        <div className="mt-4 items-center gap-4">
                            <div className="flex items-center gap-6">
                                <a
                                    href="https://x.com/humingbirdscare?s=21"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Follow us on Twitter"
                                    className="w-10 h-10 rounded-full bg-white border flex items-center justify-center hover:bg-[#357ABB] hover:text-white transition-colors"
                                >
                                    <FaTwitter className="w-5 h-5" />
                                </a>

                                <a
                                    href="https://www.instagram.com/hummingbirdscare?igsh=enc4ZndweTR0Yjcy"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Follow us on Instagram"
                                    className="w-10 h-10 rounded-full bg-white border flex items-center justify-center hover:bg-[#357ABB] hover:text-white transition-colors"
                                >
                                    <FaInstagram className="w-5 h-5" />
                                </a>

                                <a
                                    href="https://www.linkedin.com/company/hummingbirdscare"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Follow us on LinkedIn"
                                    className="w-10 h-10 rounded-full bg-white border flex items-center justify-center hover:bg-[#357ABB] hover:text-white transition-colors"
                                >
                                    <FaLinkedinIn className="w-5 h-5" />
                                </a>
                            </div>

                            <div className="flex items-center gap-3 ml-2">
                                <img
                                    src={appstore}
                                    alt="App store"
                                    className="h-9 sm:h-10 object-contain"
                                />
                                <img
                                    src={playstore}
                                    alt="Play store"
                                    className="h-9 sm:h-10 object-contain"
                                />
                            </div>
                        </div>

                        <p className="mt-6 text-xs sm:text-sm text-gray-600">
                            &copy; 2025 Hummingbird Care Initiative. All rights reserved.
                        </p>
                    </div>

                    {/* Right column */}
                    <div className="w-full md:w-auto flex flex-col sm:flex-row gap-6 sm:gap-12">
                        <div className="min-w-[140px]">
                            <h4 className="font-semibold mb-2">Quick Links</h4>
                            <ul className="space-y-1 text-sm text-gray-600">
                                <li>
                                    <a href="#benefits" className="hover:underline">
                                        Benefits
                                    </a>
                                </li>
                                <li>
                                    <a href="#how" className="hover:underline">
                                        How It Works
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="min-w-[160px]">
                            <h4 className="font-semibold mb-2">Contact Us</h4>
                            <p className="text-sm">
                                <a
                                    href="mailto:info@hcareinitiative.org"
                                    className="hover:underline text-gray-600"
                                >
                                    info@hcareinitiative.org
                                </a>
                            </p>
                            <p className="text-sm mt-3 text-gray-600">Phone: (optional)</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;