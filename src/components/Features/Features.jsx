import React from "react";

export default function Features() {
  return (
    <>
      
      <div className="bg-white w-full h-12 md:h-16"></div>
      <section className="relative bg-hero-gradient pt-8 pb-12">
      
        <div
          className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
          aria-hidden="true"
        >
          <img
            className="max-w-none"
            src="/images/blurred-shape-gray.svg"
            width={760}
            height={668}
            alt="Blurred shape"
          />
        </div>
       
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
          aria-hidden="true"
        >
          <img
            className="max-w-none"
            src="/images/blurred-shape.svg"
            width={760}
            height={668}
            alt="Blurred shape"
          />
        </div>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 w-full">
          <div className="py-2 md:py-4">
         
            <div className="mx-auto max-w-3xl pb-2 text-center md:pb-4">
              <h2 className="font-extrabold text-4xl md:text-5xl text-white mb-2 whitespace-nowrap">
                Built for <span className="text-green-400">modern CRM teams</span>
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Corefactors CRM unifies your sales, marketing, support, and success teams, so you can automate, align, and grow your business faster than ever before.
              </p>
            </div>
   
            <div className="mx-auto grid max-w-sm gap-8 sm:max-w-none sm:grid-cols-2 md:gap-x-10 md:gap-y-8 lg:grid-cols-3 mt-4">
              {[
                {
                  icon: (
                    <svg className="mb-3 fill-green-400" xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
                      <path d="M0 0h14v17H0V0Zm2 2v13h10V2H2Z" />
                      <path fillOpacity=".48" d="m16.295 5.393 7.528 2.034-4.436 16.412L5.87 20.185l.522-1.93 11.585 3.132 3.392-12.55-5.597-1.514.522-1.93Z" />
                    </svg>
                  ),
                  title: "Lead Management",
                  desc: "Capture, nurture, and convert leads efficiently with automated workflows and integrated communication tools."
                },
                {
                  icon: (
                    <svg className="mb-3 fill-green-400" xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
                      <path fillOpacity=".48" d="M7 8V0H5v8h2Zm12 16v-4h-2v4h2Z" />
                      <path d="M19 6H0v2h17v8H7v-6H5v8h19v-2h-5V6Z" />
                    </svg>
                  ),
                  title: "Team Collaboration",
                  desc: "Empower your teams to work together seamlessly, share insights, and close more deals as one."
                },
                {
                  icon: (
                    <svg className="mb-3 fill-green-400" xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
                      <path d="M23.414 6 18 .586 16.586 2l3 3H7a6 6 0 0 0-6 6h2a4 4 0 0 1 4-4h12.586l-3 3L18 11.414 23.414 6Z" />
                      <path fillOpacity=".48" d="M13.01 12.508a2.5 2.5 0 0 0-3.502.482L1.797 23.16.203 21.952l7.71-10.17a4.5 4.5 0 1 1 7.172 5.437l-4.84 6.386-1.594-1.209 4.841-6.385a2.5 2.5 0 0 0-.482-3.503Z" />
                    </svg>
                  ),
                  title: "Sales Automation",
                  desc: "Automate repetitive sales tasks, track opportunities, and boost productivity with intelligent CRM automation."
                },
                {
                  icon: (
                    <svg className="mb-3 fill-green-400" xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
                      <path fillOpacity=".48" d="m3.031 9.05-.593-.805 1.609-1.187.594.804a6.966 6.966 0 0 1 0 8.276l-.594.805-1.61-1.188.594-.805a4.966 4.966 0 0 0 0-5.9Z" />
                      <path d="m7.456 6.676-.535-.845 1.69-1.07.534.844a11.944 11.944 0 0 1 0 12.789l-.535.845-1.69-1.071.536-.845a9.944 9.944 0 0 0 0-10.647Z" />
                      <path d="m11.888 4.35-.514-.858 1.717-1.027.513.858a16.9 16.9 0 0 1 2.4 8.677 16.9 16.9 0 0 1-2.4 8.676l-.513.859-1.717-1.028.514-.858A14.9 14.9 0 0 0 14.003 12a14.9 14.9 0 0 0-2.115-7.65Z" opacity=".48" />
                      <path d="m16.321 2-.5-.866 1.733-1 .5.866A22 22 0 0 1 21 12c0 3.852-1.017 7.636-2.948 10.97l-.502.865-1.73-1.003.501-.865A19.878 19.878 0 0 0 19 12a20 20 0 0 0-2.679-10Z" />
                    </svg>
                  ),
                  title: "Marketing Campaigns",
                  desc: "Launch, track, and optimize multi-channel campaigns to engage prospects and drive measurable results."
                },
                {
                  icon: (
                    <svg className="mb-3 fill-green-400" xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
                      <path fillOpacity=".48" d="M12 8.8a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" />
                      <path d="m7.454 2.891.891-.454L7.437.655l-.891.454a12 12 0 0 0 0 21.382l.89.454.91-1.781-.892-.455a10 10 0 0 1 0-17.818ZM17.456 1.11l-.891-.454-.909 1.782.891.454a10 10 0 0 1 0 17.819l-.89.454.908 1.781.89-.454a12 12 0 0 0 0-21.382Z" />
                    </svg>
                  ),
                  title: "Customer Support",
                  desc: "Deliver exceptional support with ticketing, knowledge base, and real-time communication for customer satisfaction."
                },
                {
                  icon: (
                    <svg className="mb-3 fill-green-400" xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
                      <path fillOpacity=".48" d="M19 8h5v2h-5V8Zm-4 5h9v2h-9v-2Zm9 5H11v2h13v-2Z" />
                      <path d="M19.406 3.844 6.083 20.497.586 15 2 13.586l3.917 3.917L17.844 2.595l1.562 1.25Z" />
                    </svg>
                  ),
                  title: "Workflow Customization",
                  desc: "Tailor CRM workflows to your unique business processes for maximum efficiency and team alignment."
                }
              ].map((item) => (
                <article key={item.title} className="bg-[#18184a] rounded-2xl shadow-xl p-8 text-center flex flex-col items-center">
                  {item.icon}
                  <h3 className="mb-1 font-bold text-white text-lg">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-base">
                    {item.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 