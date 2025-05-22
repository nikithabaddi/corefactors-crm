import React, { useState, useEffect } from 'react';

const CookieDialog = ({ open, onClose }) => {
  const [requirement, setRequirement] = useState('');

  useEffect(() => {
    const handleMessage = async (event) => {
     
      if (event.origin.includes('calendly.com') && event.data.event === 'calendly.event_scheduled') {
        
        console.log("Calendly message received:", event.data);

        const payload = event.data.payload;
        console.log("Full invitee object:", JSON.stringify(payload.invitee, null, 2));

     
        if (!payload || !payload.invitee || !payload.invitee.uri) {
          console.error("Invitee data is missing in Calendly payload", payload);
          return;
        }

        try {
          
          const response = await fetch(payload.invitee.uri, {
            headers: {
              'Authorization': `Bearer ${import.meta.env.VITE_CALENDLY_API_TOKEN}`,
              'Content-Type': 'application/json'
            }
          });

          if (!response.ok) {
            throw new Error('Failed to fetch invitee details');
          }

          const inviteeData = await response.json();
          console.log("Fetched invitee details:", JSON.stringify(inviteeData, null, 2));

          const name = inviteeData.resource.name || 'Not found';
          const email = inviteeData.resource.email || 'Not found';
          const questions = inviteeData.resource.questions_and_answers || [];

          const mobileNumber = questions.find(q => 
            q.question.toLowerCase().includes('mobile')
          )?.answer || 'Not found';

          const company = questions.find(q => 
            q.question.toLowerCase().includes('company')
          )?.answer || 'Not found';

          const requirementDescription = questions.find(q => 
            q.question.toLowerCase().includes('requirement')
          )?.answer || 'No specific requirements mentioned';

          console.log("Parsed booking data:", { 
            name, 
            email, 
            mobileNumber, 
            company, 
            requirement: requirementDescription 
          });

          const formData = new URLSearchParams();
          formData.append('Name', name);
          formData.append('Email', email);
          formData.append('Mobile Number', mobileNumber);
          formData.append('Company', company);
          formData.append('Requirement Description', requirementDescription);

          await fetch('https://script.google.com/macros/s/AKfycbz7rxF3ZTpRKANFuapiKrJ-ydVUKvjua67Ss_Pr2_wpQNpJf3cNAmMXfX__BRNl8aAYwg/exec', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData
          });
          
          console.log('Data sent successfully');
          setRequirement('');
        } catch (error) {
          console.error('Error processing Calendly data:', error);
          alert('Failed to process booking data. Please try again.');
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [requirement]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
      <button
        className="absolute top-8 right-8 bg-gray-200 text-gray-800 font-bold py-2 px-6 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-300"
        onClick={onClose}
      >
        Cancel
      </button>
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl relative p-0"
        role="dialog"
        aria-modal="true"
        style={{ transform: 'translateX(-25%)' }}
      >
        <div className="w-full h-[700px]">
          <iframe
            src="https://calendly.com/nikitabaddi1604/new-meeting?embed_domain=localhost&embed_type=Inline"
            width="150%"
            height="100%"
            frameBorder="0"
            title="Book a Demo"
            style={{ minHeight: 700, borderRadius: 8 }}
            allow="camera; microphone; fullscreen"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default CookieDialog;
