import React, { useState } from "react";
import { Filter, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MovieCard from "@/components/movie/MovieCard";

const SeriesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  // Mock series data
  const allSeries = [
    {
      id: "s1",
      title: "Stranger Things",
      posterUrl:
        "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500&h=750&q=80",
      year: 2023,
      rating: "96",
      duration: "4 Mùa",
      genres: ["Kinh dị", "Khoa học viễn tưởng", "Bí ẩn"],
      isNew: true,
    },
    {
      id: "s2",
      title: "Wednesday",
      posterUrl:
        "https://images.unsplash.com/photo-1559583109-3e7968136c99?w=500&h=750&q=80",
      year: 2023,
      rating: "92",
      duration: "1 Mùa",
      genres: ["Hài hước đen tối", "Siêu nhiên", "Bí ẩn"],
      isNew: true,
    },
    {
      id: "s3",
      title: "The Witcher",
      posterUrl:
        "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&h=750&q=80",
      year: 2023,
      rating: "95",
      duration: "3 Mùa",
      genres: ["Kỳ ảo", "Phiêu lưu", "Hành động"],
      isNew: false,
    },
    {
      id: "s4",
      title: "Squid Game",
      posterUrl:
        "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=500&h=750&q=80",
      year: 2023,
      rating: "98",
      duration: "1 Mùa",
      genres: ["Kinh dị", "Sinh tồn", "Chính kịch"],
      isNew: false,
    },
    {
      id: "s5",
      title: "Money Heist",
      posterUrl:
        "https://images.unsplash.com/photo-1615779113475-aaef173bc8e5?w=500&h=750&q=80",
      year: 2023,
      rating: "88",
      duration: "5 Mùa",
      genres: ["Tội phạm", "Hành động", "Chính kịch"],
      isNew: false,
    },
    {
      id: "s6",
      title: "Dark",
      posterUrl:
        "https://images.unsplash.com/photo-1560343776-97e7d202ff0e?w=500&h=750&q=80",
      year: 2023,
      rating: "94",
      duration: "3 Mùa",
      genres: ["Khoa học viễn tưởng", "Bí ẩn", "Chính kịch"],
      isNew: false,
    },
    {
      id: "s7",
      title: "The Queen's Gambit",
      posterUrl:
        "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500&h=750&q=80",
      year: 2023,
      rating: "93",
      duration: "1 Mùa",
      genres: ["Chính kịch", "Tiểu sử"],
      isNew: false,
    },
    {
      id: "s8",
      title: "Bridgerton",
      posterUrl:
        "https://images.unsplash.com/photo-1615779113475-aaef173bc8e5?w=500&h=750&q=80",
      year: 2023,
      rating: "87",
      duration: "2 Mùa",
      genres: ["Lãng mạn", "Chính kịch", "Lịch sử"],
      isNew: true,
    },
    {
      id: "s9",
      title: "The Last of Us",
      posterUrl:
        "https://images.unsplash.com/photo-1559583109-3e7968136c99?w=500&h=750&q=80",
      year: 2023,
      rating: "95",
      duration: "1 Mùa",
      genres: ["Hậu tận thế", "Kinh dị", "Hành động"],
      isNew: true,
    },
    {
      id: "s10",
      title: "Breaking Bad",
      posterUrl:
        "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&h=750&q=80",
      year: 2023,
      rating: "99",
      duration: "5 Mùa",
      genres: ["Tội phạm", "Chính kịch", "Hồi hộp"],
      isNew: false,
    },
    {
      id: "s11",
      title: "The Crown",
      posterUrl:
        "https://images.unsplash.com/photo-1560343776-97e7d202ff0e?w=500&h=750&q=80",
      year: 2023,
      rating: "91",
      duration: "5 Mùa",
      genres: ["Tiểu sử", "Lịch sử", "Chính kịch"],
      isNew: false,
    },
    {
      id: "s12",
      title: "Peaky Blinders",
      posterUrl:
        "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=500&h=750&q=80",
      year: 2023,
      rating: "94",
      duration: "6 Mùa",
      genres: ["Tội phạm", "Lịch sử", "Chính kịch"],
      isNew: false,
    },
  ];

  // Filter series based on active filter and search query
  const filteredSeries = allSeries.filter((series) => {
    const matchesSearch = series.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    if (activeFilter === "all") return matchesSearch;
    if (activeFilter === "new") return matchesSearch && series.isNew;
    if (activeFilter === "action") {
      return matchesSearch && series.genres.includes("Hành động");
    }
    if (activeFilter === "drama") {
      return matchesSearch && series.genres.includes("Chính kịch");
    }
    if (activeFilter === "scifi") {
      return matchesSearch && series.genres.includes("Khoa học viễn tưởng");
    }

    return matchesSearch;
  });

  return (
    <div className="bg-black text-white min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <h1 className="text-3xl font-bold">Phim bộ</h1>

          <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="search"
                placeholder="Tìm kiếm phim bộ..."
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
            <TabsTrigger value="drama">Chính kịch</TabsTrigger>
            <TabsTrigger value="scifi">Khoa học viễn tưởng</TabsTrigger>
          </TabsList>
        </Tabs>

        {filteredSeries.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {filteredSeries.map((series) => (
              <MovieCard key={series.id} {...series} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-400">Không tìm thấy phim bộ phù hợp.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SeriesPage;
