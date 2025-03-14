import React, { useState } from "react";
import { Search, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import MovieCard from "@/components/movie/MovieCard";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const MyListPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [myList, setMyList] = useState([
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
      dateAdded: "2023-06-15",
    },
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
      dateAdded: "2023-06-10",
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
      dateAdded: "2023-06-05",
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
      dateAdded: "2023-05-28",
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
      dateAdded: "2023-05-20",
    },
  ]);

  // Filter list based on search query
  const filteredList = myList.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const removeFromList = (id: string) => {
    setMyList(myList.filter((item) => item.id !== id));
  };

  const clearList = () => {
    setMyList([]);
  };

  return (
    <div className="bg-black text-white min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <h1 className="text-3xl font-bold">Danh sách của tôi</h1>

          <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="search"
                placeholder="Tìm kiếm trong danh sách..."
                className="pl-10 bg-gray-900 border-gray-700 w-full md:w-64"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  variant="destructive"
                  className="bg-red-600 hover:bg-red-700"
                >
                  <Trash2 className="mr-2 h-4 w-4" /> Xóa tất cả
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="bg-gray-900 border-gray-700">
                <AlertDialogHeader>
                  <AlertDialogTitle>Xóa tất cả?</AlertDialogTitle>
                  <AlertDialogDescription className="text-gray-400">
                    Bạn có chắc chắn muốn xóa tất cả phim trong danh sách của
                    mình không? Hành động này không thể hoàn tác.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel className="bg-gray-800 hover:bg-gray-700 border-gray-700">
                    Hủy
                  </AlertDialogCancel>
                  <AlertDialogAction
                    className="bg-red-600 hover:bg-red-700"
                    onClick={clearList}
                  >
                    Xóa tất cả
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>

        {filteredList.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {filteredList.map((item) => (
              <div key={item.id} className="relative group">
                <MovieCard {...item} />
                <button
                  className="absolute top-2 right-2 bg-red-600 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
                  onClick={() => removeFromList(item.id)}
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-400 mb-4">Danh sách của bạn đang trống.</p>
            <Button className="bg-red-600 hover:bg-red-700">
              Khám phá phim
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyListPage;
