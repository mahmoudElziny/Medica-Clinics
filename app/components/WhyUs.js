import { StarIcon } from "@heroicons/react/24/solid";
import { certified } from "@heroicons/react/24/solid";
import { FaBeer } from "react-icons/fa";

import Image from "next/image";

export default function WhyUs() {
  return (
    <section className="bg-white mt-14 px-20 py-10">
      <h2 className="text-2xl font-semibold text-center title">
        Why Choose Us?
      </h2>
      <div className="mx-auto my-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-[#F5F5F5] p-6 rounded-lg text-center hover:shadow-lg transition-all">
            <div className="bg-primary-light w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                ...
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2 font-heading">
              Expert Team
            </h3>
            <p className="text-gray-600">
              Board-certified doctors with 10+ years of experience in
              personalized care.
            </p>
          </div>

          <div className="bg-[#F5F5F5] p-6 rounded-lg text-center hover:shadow-lg transition-all">
            <div className="bg-medical-action w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                ...
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2 font-heading">
              Advanced Technology
            </h3>
            <p className="text-gray-600">
              State-of-the-art equipment for accurate diagnostics and treatment.
            </p>
          </div>

          <div className="bg-[#F5F5F5] p-6 rounded-lg text-center hover:shadow-lg transition-all">
            <div className="bg-medical-success w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                ...
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2 font-heading">
              24/7 Emergency Care
            </h3>
            <p className="text-gray-600">
              Always here when you need us, with minimal wait times.
            </p>
          </div>

          <div className="bg-[#F5F5F5] p-6 rounded-lg text-center hover:shadow-lg transition-all">
            <div className="bg-primary w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                ...
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2 font-heading">
              Patient-Centered Approach
            </h3>
            <p className="text-gray-600">
              We listen to your concerns and tailor treatments to your needs.
            </p>
          </div>
        </div>

        <div class="mt-12 flex flex-wrap justify-center gap-6">
          <Image src={FaBeer} alt="HIPAA Certified" className="h-12" />
          <img src={certified} alt="5-Star Rated" className="h-12" />
        </div>
      </div>
    </section>
  );
}
