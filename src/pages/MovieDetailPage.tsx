import React from "react";
import { useParams } from "react-router-dom";
import { Play, Plus, ThumbsUp, Share2, Download, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import MovieRow from "@/components/movie/MovieRow";

const MovieDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  // Mock movie data
  const movie = {
    id: "1",
    title: "Người Nhện: Không Còn Nhà",
    originalTitle: "Spider-Man: No Way Home",
    year: 2023,
    rating: "PG-13",
    duration: "2h 28m",
    genres: ["Hành động", "Phiêu lưu", "Siêu anh hùng"],
    director: "Jon Watts",
    cast: ["Tom Holland", "Zendaya", "Benedict Cumberbatch", "Jacob Batalon"],
    description:
      "Peter Parker phải đối mặt với hậu quả sau khi danh tính của anh bị tiết lộ. Khi anh tìm kiếm sự giúp đỡ từ Doctor Strange, mọi thứ trở nên nguy hiểm hơn, buộc anh phải khám phá ý nghĩa thực sự của việc trở thành Người Nhện.",
    matchPercentage: 96,
    backdropUrl:
      "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=1920&q=80",
    posterUrl:
      "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500&h=750&q=80",
  };

  // Similar movies
  const similarMovies = [
    {
      id: "2",
      title: "Vệ Binh Dải Ngân Hà 3",
      posterUrl:
        "https://images.unsplash.com/photo-1560343776-97e7d202ff0e?w=500&h=750&q=80",
      year: 2023,
      rating: "92",
      duration: "2h 30m",
      genres: ["Hành động", "Hài hước", "Khoa học viễn tưởng"],
      isNew: true,
    },
    {
      id: "3",
      title: "Nhiệm Vụ Bất Khả Thi",
      posterUrl:
        "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&h=750&q=80",
      year: 2023,
      rating: "95",
      duration: "2h 43m",
      genres: ["Hành động", "Phiêu lưu", "Gián điệp"],
      isNew: false,
    },
    {
      id: "4",
      title: "Oppenheimer",
      posterUrl:
        "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500&h=750&q=80",
      year: 2023,
      rating: "98",
      duration: "3h 0m",
      genres: ["Tiểu sử", "Lịch sử", "Chính kịch"],
      isNew: false,
    },
    {
      id: "5",
      title: "Barbie",
      posterUrl:
        "https://images.unsplash.com/photo-1615779113475-aaef173bc8e5?w=500&h=750&q=80",
      year: 2023,
      rating: "88",
      duration: "1h 54m",
      genres: ["Hài hước", "Phiêu lưu", "Hư cấu"],
      isNew: false,
    },
    {
      id: "6",
      title: "Quỷ Quyệt: Cửa Đỏ Vô Định",
      posterUrl:
        "https://images.unsplash.com/photo-1559583109-3e7968136c99?w=500&h=750&q=80",
      year: 2023,
      rating: "84",
      duration: "1h 47m",
      genres: ["Kinh dị", "Bí ẩn", "Siêu nhiên"],
      isNew: true,
    },
  ];

  return (
    <div className="bg-black text-white pt-16">
      {/* Hero Section with Backdrop */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            src={movie.backdropUrl}
            alt={movie.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
        </div>

        <div className="relative min-h-[70vh] container mx-auto px-4 py-16 flex flex-col justify-end">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Poster */}
            <div className="w-64 flex-shrink-0 rounded-md overflow-hidden shadow-2xl hidden md:block">
              <img
                src={movie.posterUrl}
                alt={movie.title}
                className="w-full h-auto"
              />
            </div>

            {/* Movie Info */}
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-2">{movie.title}</h1>
              <p className="text-gray-400 mb-4">{movie.originalTitle}</p>

              <div className="flex items-center flex-wrap gap-3 mb-4">
                <span className="text-green-500 font-medium">
                  {movie.matchPercentage}% phù hợp
                </span>
                <span>{movie.year}</span>
                <span>{movie.rating}</span>
                <span>{movie.duration}</span>
                <span className="text-xs px-1.5 py-0.5 bg-gray-800 rounded">
                  HD
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 mb-6">
                <Button className="bg-white text-black hover:bg-white/90">
                  <Play className="mr-2 h-4 w-4 fill-current" /> Phát
                </Button>
                <Button
                  variant="outline"
                  className="border-white/20 bg-white/10 hover:bg-white/20"
                >
                  <Plus className="mr-2 h-4 w-4" /> Danh sách
                </Button>
                <Button
                  variant="outline"
                  className="border-white/20 bg-white/10 hover:bg-white/20"
                >
                  <ThumbsUp className="mr-2 h-4 w-4" /> Đánh giá
                </Button>
                <Button
                  variant="outline"
                  className="border-white/20 bg-white/10 hover:bg-white/20"
                >
                  <Share2 className="mr-2 h-4 w-4" /> Chia sẻ
                </Button>
                <Button
                  variant="outline"
                  className="border-white/20 bg-white/10 hover:bg-white/20"
                >
                  <Download className="mr-2 h-4 w-4" /> Tải xuống
                </Button>
              </div>

              {/* Description */}
              <p className="text-lg mb-6">{movie.description}</p>

              {/* Details */}
              <div className="space-y-2">
                <p>
                  <span className="text-gray-400">Đạo diễn: </span>
                  {movie.director}
                </p>
                <p>
                  <span className="text-gray-400">Diễn viên: </span>
                  {movie.cast.join(", ")}
                </p>
                <p>
                  <span className="text-gray-400">Thể loại: </span>
                  {movie.genres.map((genre, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="mr-2 bg-transparent border-white/20"
                    >
                      {genre}
                    </Badge>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Similar Movies */}
      <div className="py-8">
        <MovieRow title="Phim tương tự" movies={similarMovies} />
      </div>
    </div>
  );
};

export default MovieDetailPage;
