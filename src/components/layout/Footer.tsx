import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-6 mb-8">
          <a href="#" className="hover:text-white">
            <Facebook size={20} />
          </a>
          <a href="#" className="hover:text-white">
            <Instagram size={20} />
          </a>
          <a href="#" className="hover:text-white">
            <Twitter size={20} />
          </a>
          <a href="#" className="hover:text-white">
            <Youtube size={20} />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="#" className="hover:text-white">
                  Trung tâm trợ giúp
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white">
                  Thông tin đăng ký
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white">
                  Quan hệ với nhà đầu tư
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="#" className="hover:text-white">
                  Việc làm
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white">
                  Điều khoản sử dụng
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white">
                  Liên hệ với chúng tôi
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="#" className="hover:text-white">
                  Tài khoản
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white">
                  Quyền riêng tư
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white">
                  Kiểm tra tốc độ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="#" className="hover:text-white">
                  Trung tâm đa phương tiện
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white">
                  Tùy chọn cookie
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white">
                  Thông báo pháp lý
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex items-center mb-4">
          <img
            src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=120&q=80"
            alt="Duyflix Logo"
            className="h-10 mr-3"
          />
          <span className="text-red-600 font-bold text-xl">DUYFLIX</span>
        </div>
        <div className="text-xs">
          <p className="mb-4">&copy; 2023 Duyflix, Inc.</p>
          <p>
            Duyflix là dịch vụ xem phim trực tuyến với thư viện phim, chương
            trình truyền hình, anime, tài liệu và nhiều nội dung khác trên nhiều
            thiết bị.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
