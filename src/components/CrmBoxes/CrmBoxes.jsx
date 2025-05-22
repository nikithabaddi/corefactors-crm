import React from "react";

const boxes = [
  {
    color: "bg-yellow-400",
    title: (
      <>
        <span className="font-bold">Sales Box</span> <span className="text-blue-700 font-bold">for Sales</span>
      </>
    ),
    desc: "Maximize sales efficiency with automated workflows, advanced sales insights, and integrated communication.",
    features: [
      "Lead Management",
      "Workflow Automation",
      "Sales Force Automation",
      "360° Sales Reports",
    ],
  },
  {
    color: "bg-green-500",
    title: (
      <>
        <span className="font-bold">Marketing Box</span> <span className="text-green-900 font-bold">for Marketing</span>
      </>
    ),
    desc: "Attract, engage, nurture, and create delightful experiences for your customers, across marketing channels.",
    features: [
      "Multiple Channels",
      "List & Contact Manager",
      "Marketing Automation",
      "Real-time Reports",
    ],
  },
  {
    color: "bg-blue-500",
    title: (
      <>
        <span className="font-bold">Success Box</span> <span className="text-blue-900 font-bold">for Customer Success</span>
      </>
    ),
    desc: "Automate renewals, track payment history and customer satisfaction scores, and get a 360-degree view of customer.",
    features: [
      "Renewal Automation",
      "360° Customer View",
      "Success Workflow",
      "Customer Success Reports",
    ],
  },
  {
    color: "bg-sky-400",
    title: (
      <>
        <span className="font-bold">Support Box</span> <span className="text-sky-900 font-bold">for Customer Support</span>
      </>
    ),
    desc: "Ticketing system encompassing a range of features to empower you to efficiently manage customer support requests.",
    features: [
      "Ticket Management",
      "Multichannel Support",
      "Support Workflow",
      "Real Time Reports",
    ],
  },
];

export default function CrmBoxes({ onScheduleDemo }) {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-white">
      <div className="max-w-4xl mx-auto text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
          <span className="block">From <span className="text-blue-500">Lead Management</span> to <span className="text-blue-500">Customer Success</span></span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A single CRM platform with 4 interconnected modules catering to sales, marketing, customer support, and success teams.
        </p>
      </div>
      <div className="relative flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {boxes.map((box, idx) => (
            <div
              key={idx}
              className={`rounded-[48px] ${box.color} shadow-lg px-16 py-12 flex flex-col items-center justify-center w-[560px] max-w-full min-h-[260px] transition-all duration-300 relative`}
            >
              <h3 className="font-bold text-xl mb-3 text-gray-900 text-center">{box.title}</h3>
              <p className="text-gray-800 mb-4 text-center text-base font-medium">{box.desc}</p>
              <div className="w-full flex flex-row gap-8 justify-center">
                <ul className="flex-1 min-w-[180px] list-disc list-inside text-gray-900 text-base text-left font-medium space-y-1">
                  {box.features.slice(0, 2).map(f => <li key={f} className="whitespace-nowrap">{f}</li>)}
                </ul>
                <ul className="flex-1 min-w-[180px] list-disc list-inside text-gray-900 text-base text-left font-medium space-y-1">
                  {box.features.slice(2).map(f => <li key={f} className="whitespace-nowrap">{f}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-yellow-400/30 blur-xl"></div>
            <div className="relative bg-gradient-to-br from-yellow-400 to-yellow-500 text-[#6b4c00] font-bold text-2xl rounded-full shadow-xl flex items-center justify-center w-32 h-32 border-4 border-white transform hover:scale-105 transition-transform duration-300" 
                 style={{ 
                   boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
                   background: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)"
                 }}>
              RevOps
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-12">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-white"
          onClick={onScheduleDemo}
        >
          Schedule a Demo
        </button>
      </div>
    </section>
  );
} 