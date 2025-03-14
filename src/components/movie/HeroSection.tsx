import React from "react";
import { Play, Info } from "lucide-react";
import { Button } from "../ui/button";

interface HeroSectionProps {
  title: string;
  description: string;
  backdropUrl: string;
  logoUrl?: string;
  videoId?: string;
}

const HeroSection = ({
  title = "Phim mới nhất",
  description = "Một bộ phim hành động đầy kịch tính với những pha hành động mãn nhãn và cốt truyện hấp dẫn.",
  backdropUrl = "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=1920&q=80",
  logoUrl,
  videoId,
}: HeroSectionProps) => {
  return (
    <div className="relative h-[80vh] w-full overflow-hidden">
      {/* Backdrop Image */}
      <div className="absolute inset-0">
        <img
          src={backdropUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end pb-20 px-8 md:px-16 max-w-3xl">
        {logoUrl ? (
          <img src={logoUrl} alt={title} className="w-2/3 max-w-md mb-6" />
        ) : (
          <h1 className="text-5xl font-bold text-white mb-4">{title}</h1>
        )}

        <p className="text-white text-lg mb-6">{description}</p>

        <div className="flex space-x-4">
          <Button className="bg-white text-black hover:bg-white/90 px-8 py-6 text-lg font-medium">
            <Play className="mr-2 h-5 w-5 fill-current" /> Phát
          </Button>
          <Button
            variant="outline"
            className="bg-gray-700/60 text-white border-0 hover:bg-gray-700/80 px-8 py-6 text-lg font-medium"
          >
            <Info className="mr-2 h-5 w-5" /> Thông tin thêm
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
