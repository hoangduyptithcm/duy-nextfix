import React, { useState } from "react";
import { Filter, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MovieCard from "@/components/movie/MovieCard";

const MoviesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  // Mock movie data
  const allMovies = [
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
    {
      id: "8",
      title: "Vua Khỉ: Tái Xuất",
      posterUrl:
        "https://images.unsplash.com/photo-1615779113475-aaef173bc8e5?w=500&h=750&q=80",
      year: 2023,
      rating: "82",
      duration: "1h 58m",
      genres: ["Hành động", "Phiêu lưu", "Thần thoại"],
      isNew: true,
    },
    {
      id: "9",
      title: "Vùng Đất Linh Hồn",
      posterUrl:
        "https://images.unsplash.com/photo-1559583109-3e7968136c99?w=500&h=750&q=80",
      year: 2023,
      rating: "90",
      duration: "2h 5m",
      genres: ["Hoạt hình", "Phiêu lưu", "Gia đình"],
      isNew: false,
    },
    {
      id: "10",
      title: "Đảo Kinh Hoàng",
      posterUrl:
        "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&h=750&q=80",
      year: 2023,
      rating: "85",
      duration: "1h 52m",
      genres: ["Kinh dị", "Bí ẩn", "Tâm lý"],
      isNew: false,
    },
    {
      id: "11",
      title: "Vũ Trụ Người Kiến",
      posterUrl:
        "https://images.unsplash.com/photo-1560343776-97e7d202ff0e?w=500&h=750&q=80",
      year: 2023,
      rating: "87",
      duration: "2h 5m",
      genres: ["Hành động", "Khoa học viễn tưởng", "Siêu anh hùng"],
      isNew: false,
    },
    {
      id: "12",
      title: "Vương Quốc Bí Mật",
      posterUrl:
        "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=500&h=750&q=80",
      year: 2023,
      rating: "91",
      duration: "2h 12m",
      genres: ["Phiêu lưu", "Gia đình", "Kỳ ảo"],
      isNew: true,
    },
  ];

  // Filter movies based on active filter and search query
  const filteredMovies = allMovies.filter((movie) => {
    const matchesSearch = movie.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    if (activeFilter === "all") return matchesSearch;
    if (activeFilter === "new") return matchesSearch && movie.isNew;
    if (activeFilter === "action") {
      return matchesSearch && movie.genres.includes("Hành động");
    }
    if (activeFilter === "comedy") {
      return matchesSearch && movie.genres.includes("Hài hước");
    }
    if (activeFilter === "horror") {
      return matchesSearch && movie.genres.includes("Kinh dị");
    }

    return matchesSearch;
  });

  return (
    <div className="bg-black text-white min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <h1 className="text-3xl font-bold">Phim lẻ</h1>

          <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="search"
                placeholder="Tìm kiếm phim..."
                className="pl-10 bg-gray-900 border-gray-700 w-full md:w-64"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <Button variant="outline" className="border-gray-700 bg-gray-900">
              <Filter className="mr-2 h-4 w-4" /> Lọc
            </Button>
          </div>
        </div>

        <Tabs
          defaultValue="all"
          className="mb-8"
          onValueChange={setActiveFilter}
        >
          <TabsList className="bg-gray-900 border border-gray-800">
            <TabsTrigger value="all">Tất cả</TabsTrigger>
            <TabsTrigger value="new">Mới nhất</TabsTrigger>
            <TabsTrigger value="action">Hành động</TabsTrigger>
            <TabsTrigger value="comedy">Hài hước</TabsTrigger>
            <TabsTrigger value="horror">Kinh dị</TabsTrigger>
          </TabsList>
        </Tabs>

        {filteredMovies.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {filteredMovies.map((movie) => (
              <MovieCard key={movie.id} {...movie} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-400">Không tìm thấy phim phù hợp.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MoviesPage;
