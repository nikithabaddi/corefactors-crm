import React from "react";

export default function Cta({ onScheduleDemo }) {
  return (
    <section className="py-12 flex flex-col justify-center items-center bg-[#FFC72C]">
      <div className="max-w-7xl w-full mx-auto px-4 py-0 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left: Image */}
        <div className="flex-1 flex justify-center items-center min-w-[320px]">
          <img
            src="https://cdn.prod.website-files.com/66cd8db8ed41e612e5dfabe3/66eafe81afe000edde52c47f_SVG%20(1).png"
            alt="RevOps Demo"
            className="w-full max-w-[420px] h-auto"
            draggable="false"
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-center max-w-xl md:pl-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Discover How We Can<br />Transform Your Business Operations
          </h2>
          <p className="text-lg text-gray-900 mb-8 font-medium">
            Get a demo today to experience how Corefactors CRM can revolutionize your sales, marketing, support and customer success operations.
          </p>
          <button
            className="bg-blue-700 hover:bg-blue-800 text-white font-bold text-lg px-8 py-4 rounded-lg shadow transition-all duration-200"
            onClick={onScheduleDemo}
          >
            Book a Demo Now
          </button>
        </div>
      </div>
    </section>
  );
} 