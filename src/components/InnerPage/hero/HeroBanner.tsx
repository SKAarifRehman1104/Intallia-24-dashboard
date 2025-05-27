
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import innerpageimg from '@/assets/image.svg';

interface HeroBannerProps {
  title: string;
  buttonText: string;
  backgroundImage: string;
  onButtonClick: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  title,
  buttonText,
  backgroundImage,
  onButtonClick
}) => {
  return (
    <div className="relative w-full max-w-[1200px] h-[396px] mx-auto mt-4 overflow-hidden rounded-md shadow-sm">
      <img
        src={innerpageimg}
        alt="Shopping cart"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute bottom-0 bg-white rounded-md p-4 w-68 flex h-36 flex-col justify-center">
        <h2 className="text-lg md:text-xl font-semibold text-gray-800 leading-tight">
          {title}
        </h2>
        <div className="mt-4">
          <Button
            onClick={onButtonClick}
            variant="default"
            className="bg-gray-900 hover:bg-gray-800 text-white rounded-md px-4 py-1 text-xs"
            size="sm"
          >
            {buttonText} <ArrowRight className="h-3 w-3 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  );
};
