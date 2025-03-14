import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, Bell, ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Input } from "../ui/input";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${isScrolled ? "bg-black" : "bg-gradient-to-b from-black/80 to-transparent"}`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className="flex items-center">
            <img
              src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=120&q=80"
              alt="Duyflix Logo"
              className="h-8 mr-2"
            />
            <span className="text-red-600 font-bold text-2xl">DUYFLIX</span>
          </div>
        </Link>

        {/* Main Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-sm font-medium hover:text-gray-300">
            Trang chủ
          </Link>
          <Link
            to="/movies"
            className="text-sm font-medium hover:text-gray-300"
          >
            Phim lẻ
          </Link>
          <Link
            to="/series"
            className="text-sm font-medium hover:text-gray-300"
          >
            Phim bộ
          </Link>
          <Link to="/new" className="text-sm font-medium hover:text-gray-300">
            Mới & Phổ biến
          </Link>
          <Link
            to="/mylist"
            className="text-sm font-medium hover:text-gray-300"
          >
            Danh sách của tôi
          </Link>
        </nav>

        {/* Right Side Controls */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative">
            {searchOpen ? (
              <div className="flex items-center bg-black/80 border border-gray-700 rounded-md overflow-hidden">
                <Input
                  type="search"
                  placeholder="Tìm kiếm phim..."
                  className="bg-transparent border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-sm w-[200px]"
                  autoFocus
                />
                <button
                  className="p-2 text-gray-400 hover:text-white"
                  onClick={() => setSearchOpen(false)}
                >
                  Hủy
                </button>
              </div>
            ) : (
              <button
                onClick={() => setSearchOpen(true)}
                className="p-1 text-gray-200 hover:text-white"
              >
                <Search size={20} />
              </button>
            )}
          </div>

          {/* Notifications */}
          <button className="p-1 text-gray-200 hover:text-white relative">
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              3
            </span>
          </button>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center space-x-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Duy" />
                  <AvatarFallback>DT</AvatarFallback>
                </Avatar>
                <ChevronDown size={16} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-56 bg-black/95 border-gray-800"
            >
              <div className="px-4 py-3 border-b border-gray-800">
                <p className="text-sm font-medium">Duy Trần</p>
                <p className="text-xs text-gray-400">duy@example.com</p>
              </div>
              <DropdownMenuItem className="hover:bg-gray-800">
                Hồ sơ của tôi
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-800">
                Tài khoản
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-800">
                Trung tâm trợ giúp
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-gray-800" />
              <DropdownMenuItem className="hover:bg-gray-800">
                Đăng xuất
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
