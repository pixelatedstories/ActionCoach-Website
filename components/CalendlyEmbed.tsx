
import React, { useEffect } from 'react';

interface CalendlyEmbedProps {
  url: string;
}

const CalendlyEmbed: React.FC<CalendlyEmbedProps> = ({ url }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div 
      className="calendly-inline-widget w-full h-[700px] border border-white/10 bg-[#1C1C1C]" 
      data-url={url}
    />
  );
};

export default CalendlyEmbed;
