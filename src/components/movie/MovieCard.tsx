import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Play, Info, Plus, ThumbsUp } from "lucide-react";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

interface MovieCardProps {
  id: string;
  title: string;
  posterUrl: string;
  year: number;
  rating: string;
  duration?: string;
  genres?: string[];
  isNew?: boolean;
}

const MovieCard = ({
  id,
  title,
  posterUrl,
  year,
  rating,
  duration = "2h 15m",
  genres = ["Hành động", "Phiêu lưu"],
  isNew = false,
}: MovieCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative rounded-md overflow-hidden transition-transform duration-300 ease-in-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/movie/${id}`}>
        <div className="aspect-[2/3] bg-gray-900 relative overflow-hidden">
          <img
            src={posterUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          {isNew && (
            <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
              MỚI
            </div>
          )}
        </div>
      </Link>

      {isHovered && (
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent flex flex-col justify-end p-3 transition-opacity duration-300">
          <h3 className="text-white font-bold truncate">{title}</h3>
          <div className="flex items-center text-xs text-gray-300 mt-1 space-x-2">
            <span className="text-green-500 font-medium">
              {rating}% phù hợp
            </span>
            <span>{year}</span>
            {duration && <span>{duration}</span>}
          </div>

          <div className="flex flex-wrap gap-1 mt-1">
            {genres.map((genre, index) => (
              <span
                key={index}
                className="text-xs text-gray-300 after:content-['•'] after:mx-1 last:after:content-none"
              >
                {genre}
              </span>
            ))}
          </div>

          <div className="flex items-center space-x-2 mt-3">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="icon"
                    className="rounded-full bg-white text-black hover:bg-white/90 h-8 w-8"
                  >
                    <Play size={16} className="fill-current" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Phát</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="icon"
                    variant="outline"
                    className="rounded-full border-white/40 bg-black/30 hover:bg-black/50 h-8 w-8"
                  >
                    <Plus size={16} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Thêm vào danh sách</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="icon"
                    variant="outline"
                    className="rounded-full border-white/40 bg-black/30 hover:bg-black/50 h-8 w-8"
                  >
                    <ThumbsUp size={16} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Thích</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="icon"
                    variant="outline"
                    className="rounded-full border-white/40 bg-black/30 hover:bg-black/50 h-8 w-8 ml-auto"
                  >
                    <Info size={16} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Thông tin chi tiết</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
