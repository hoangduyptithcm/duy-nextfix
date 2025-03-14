import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import MovieCard from "./MovieCard";

interface Movie {
  id: string;
  title: string;
  posterUrl: string;
  year: number;
  rating: string;
  duration?: string;
  genres?: string[];
  isNew?: boolean;
}

interface MovieRowProps {
  title: string;
  movies: Movie[];
  seeAllLink?: string;
}

const MovieRow = ({ title, movies, seeAllLink }: MovieRowProps) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleScroll = () => {
    if (rowRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = rowRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scrollLeft = () => {
    if (rowRef.current) {
      rowRef.current.scrollBy({
        left: -rowRef.current.clientWidth / 2,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (rowRef.current) {
      rowRef.current.scrollBy({
        left: rowRef.current.clientWidth / 2,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4 px-4">
        <h2 className="text-xl font-bold text-white">{title}</h2>
        {seeAllLink && (
          <a
            href={seeAllLink}
            className="text-sm text-gray-400 hover:text-white"
          >
            Xem tất cả
          </a>
        )}
      </div>

      <div className="relative group">
        {showLeftArrow && (
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={scrollLeft}
          >
            <ChevronLeft className="text-white" />
          </button>
        )}

        <div
          ref={rowRef}
          className="flex space-x-2 overflow-x-scroll scrollbar-hide px-4 pb-4"
          onScroll={handleScroll}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {movies.map((movie) => (
            <div key={movie.id} className="flex-none w-[180px]">
              <MovieCard {...movie} />
            </div>
          ))}
        </div>

        {showRightArrow && (
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={scrollRight}
          >
            <ChevronRight className="text-white" />
          </button>
        )}
      </div>
    </div>
  );
};

export default MovieRow;
