import React from "react";

export default function Workflows() {
  return (
    <section className="bg-white min-h-screen flex flex-col justify-center items-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 w-full">
        <div className="pb-2 md:pb-2">
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-6">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
              How We're <span className="text-blue-600">Different</span>
            </h2>
            <div className="text-lg text-gray-900 mb-4 text-center max-w-2xl mx-auto">
              Unify your revenue teams, boost collaboration, and drive predictable growth with our <span className="text-blue-600">RevOps-enabled CRM solution.</span>
            </div>
          </div>
         
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 group relative mt-0">
        
            <div className="feature-card relative rounded-2xl border border-gray-100 bg-white p-10 min-w-[320px] shadow-lg transition-all duration-300 text-center z-10 hover:z-20">
              <img src="https://cdn.prod.website-files.com/66cd8db8ed41e612e5dfabe3/67921f68091a37e5ab52e314_Simplification%20(7).png" alt="AI Powered" className="w-28 h-28 object-contain mx-auto mb-6" />
              <h3 className="font-medium text-base mb-1 text-gray-900">AI Powered</h3>
              <p className="text-gray-600 text-sm">
                AI-driven insights for smarter decisions and accelerated growth.
              </p>
            </div>
            
            <div className="feature-card relative rounded-2xl border border-gray-100 bg-white p-14 min-w-[400px] shadow-lg transition-all duration-300 text-center z-10 hover:z-20">
              <img src="https://cdn.prod.website-files.com/66cd8db8ed41e612e5dfabe3/67921f2e19327e371d4d6eac_Simplification%20(2).png" alt="Advanced Automation" className="w-28 h-28 object-contain mx-auto mb-6" />
              <h3 className="font-medium text-base mb-1 text-gray-900">Advanced Automation</h3>
              <p className="text-gray-600 text-sm">
                Workflow automation that enhances the productivity and efficiency of users.
              </p>
            </div>
           
            <div className="feature-card relative rounded-2xl border border-gray-100 bg-white p-10 min-w-[320px] shadow-lg transition-all duration-300 text-center z-10 hover:z-20">
              <img src="https://cdn.prod.website-files.com/66cd8db8ed41e612e5dfabe3/67921dff5c8a1f3585f0c116_Group%201171276028.png" alt="Scalable and Customizable" className="w-28 h-28 object-contain mx-auto mb-6" />
              <h3 className="font-medium text-base mb-1 text-gray-900">Scalable and Customizable</h3>
              <p className="text-gray-600 text-sm">
                Tailored solutions that fit your business needs and grow with your business.
              </p>
            </div>
          
            <div className="feature-card relative rounded-2xl border border-gray-100 bg-white p-10 min-w-[320px] shadow-lg transition-all duration-300 text-center z-10 hover:z-20">
              <img src="https://cdn.prod.website-files.com/66cd8db8ed41e612e5dfabe3/679205ed698930a2bdd6a7bc_Simplification.png" alt="Secured" className="w-28 h-28 object-contain mx-auto mb-6" />
              <h3 className="font-medium text-base mb-1 text-gray-900">Secured</h3>
              <p className="text-gray-600 text-sm">
                ISO 27001 and AICPA SOC Type II certified ensuring your data is always secured.
              </p>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .feature-card {
          margin-left: -24px;
        }
        .feature-card:first-child {
          margin-left: 0;
        }
        .feature-card:hover {
          transform: translateY(-12px) scale(1.05);
          box-shadow: 0 8px 32px 0 rgba(0,0,0,0.12);
          opacity: 1;
        }
      `}</style>
    </section>
  );
} 