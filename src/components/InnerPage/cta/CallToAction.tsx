
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import bottomimg from '@/assets/bottomimg.svg';

interface CallToActionProps {
  title: string;
  description: string;
  buttonText: string;
  imageUrl: string;
  onButtonClick: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({
  title,
  description,
  buttonText,
  imageUrl,
  onButtonClick,
}) => {
  return (
    <section className="w-full max-w-[1200px] mx-auto mt-32 mb-16 rounded-xl overflow-hidden bg-[#F8F9FA]">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="px-8 py-12 md:pl-12 md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00D1B0] to-[#00B4C6] bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="text-black/90 mt-6 text-base">
            {description}
          </p>
          <div className="mt-8">
            <Button
              onClick={onButtonClick}
              className="bg-gray-900 text-white hover:bg-gray-800 rounded-md px-4 py-2 text-sm font-medium flex items-center"
            >
              {buttonText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="md:w-1/3 relative flex justify-end items-end">
          <img
            src={bottomimg}
            alt="CTA illustration"
            className="relative max-w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};
