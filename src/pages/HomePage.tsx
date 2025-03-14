import React from "react";
import HeroSection from "../components/movie/HeroSection";
import MovieRow from "../components/movie/MovieRow";
import ImageCarousel from "../components/ui/image-carousel";

const HomePage = () => {
  // Mock data for movies
  const trendingMovies = [
    {
      id: "1",
      title: "Người Nhện: Không Còn Nhà",
      posterUrl:
        "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=500&h=750&q=80",
      year: 2023,
      rating: "96",
      duration: "2h 28m",
      genres: ["Hành động", "Phiêu lưu", "Siêu anh hùng"],
      isNew: true,
    },
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
    {
      id: "7",
      title: "Transformers: Quái Thú Trỗi Dậy",
      posterUrl:
        "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500&h=750&q=80",
      year: 2023,
      rating: "78",
      duration: "2h 7m",
      genres: ["Hành động", "Khoa học viễn tưởng"],
      isNew: false,
    },
  ];

  const popularMovies = [...trendingMovies].sort(() => 0.5 - Math.random());
  const newReleases = trendingMovies.filter((movie) => movie.isNew);
  const actionMovies = [...trendingMovies].sort(() => 0.5 - Math.random());

  return (
    <div className="bg-black text-white pt-16">
      <HeroSection
        title="Người Nhện: Không Còn Nhà"
        description="Peter Parker phải đối mặt với hậu quả sau khi danh tính của anh bị tiết lộ. Khi anh tìm kiếm sự giúp đỡ từ Doctor Strange, mọi thứ trở nên nguy hiểm hơn, buộc anh phải khám phá ý nghĩa thực sự của việc trở thành Người Nhện."
        backdropUrl="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=1920&q=80"
        logoUrl="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80"
      />

      <div className="py-8">
        <div className="container mx-auto px-4 mb-8">
          <h2 className="text-xl font-bold text-white mb-4 px-4">
            Đang chiếu tại rạp
          </h2>
          <ImageCarousel className="h-[300px] rounded-xl" />
        </div>
        <MovieRow
          title="Xu hướng"
          movies={trendingMovies}
          seeAllLink="/trending"
        />
        <MovieRow title="Phim mới" movies={newReleases} seeAllLink="/new" />
        <MovieRow
          title="Phổ biến trên Duyflix"
          movies={popularMovies}
          seeAllLink="/popular"
        />
        <MovieRow
          title="Phim hành động"
          movies={actionMovies}
          seeAllLink="/genre/action"
        />
      </div>
    </div>
  );
};

export default HomePage;
