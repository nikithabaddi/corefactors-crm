import React, { useState } from "react";

const testimonials = [
  {
    text: "We scouted for the best CRM solutions, including the ones that top-class banks use. Corefactors stood out when compared to more mature players in the market. It was not only ...",
    name: "Dhanajay Tambekar",
    title: "MD & CEO, Godavari Urban Multistate Credit Cooperative Society",
    avatar: "https://ui-avatars.com/api/?name=Dhanajay+Tambekar&background=fff&color=FFC72C&size=128",
  },
  {
    text: "We compared available options in the market based on their product fit, cost, and customer service. Corefactors was a clear winner. Corefactors perfectly fit with the kind of ecosystem we are trying to build. This ...",
    name: "Vijay Kadam",
    title: "Co-Founder & CEO, Finfinity",
    avatar: "https://ui-avatars.com/api/?name=Vijay+Kadam&background=fff&color=FFC72C&size=128",
  },
  {
    text: "I have had experience with bigger players in the CRM industry and one of the reasons we chose Corefactors is its excellent customer support. Being a technology-driven startup we require prompt issue resolution and support when ...",
    name: "Vikas Agrawal",
    title: "Founder & CEO, AIF & PMS Experts India",
    avatar: "https://ui-avatars.com/api/?name=Vikas+Agrawal&background=fff&color=FFC72C&size=128",
  },
];

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const visibleTestimonials = testimonials;

  return (
    <section className="bg-hero-gradient min-h-screen flex flex-col justify-center items-center py-16 px-4">
      <div className="max-w-7xl mx-auto w-full">
        {/* Heading and navigation */}
        <div className="w-full flex items-center justify-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white text-center leading-tight">
            Hear From Our <span className="text-yellow-400">Happy</span> Customers
          </h2>
        </div>
        {/* Testimonial cards */}
        <div className="flex items-stretch justify-center gap-8 mb-8 mt-16">
          {visibleTestimonials.map((t, idx) => (
            <div
              key={idx}
              className="relative flex flex-col bg-white/10 rounded-2xl border border-white/20 px-10 py-8 text-white min-w-[350px] max-w-[420px] flex-1 shadow-lg backdrop-blur-md"
              style={{ minHeight: 240 }}
            >
              <span className="absolute -top-8 left-6 text-6xl text-blue-200 font-bold select-none">"</span>
              <div className="min-h-[100px]">
                <p className="mb-4 text-base leading-relaxed">{t.text}</p>
                <a href="#0" className="text-blue-200 underline text-sm">Read More</a>
              </div>
              {/* Avatar, name, title below card */}
              <div className="flex flex-row items-center gap-4 mt-8">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-16 h-16 rounded-full border-4 border-yellow-400 bg-white"
                />
                <div>
                  <div className="font-extrabold text-lg text-white">{t.name}</div>
                  <div className="text-sm text-blue-100 text-left">{t.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 