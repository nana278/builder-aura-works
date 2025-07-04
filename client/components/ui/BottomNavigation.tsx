import { Link, useNavigate } from "react-router-dom";
import { MessageCircle, Home, Calendar } from "lucide-react";

interface BottomNavigationProps {
  currentPage: "chat" | "home" | "calendar";
}

export default function BottomNavigation({
  currentPage,
}: BottomNavigationProps) {
  const navigate = useNavigate();

  const navItems = [
    {
      id: "chat",
      label: "チャット",
      icon: MessageCircle,
      path: "/chat",
    },
    {
      id: "home",
      label: "ホーム",
      icon: Home,
      path: "/dashboard",
    },
    {
      id: "calendar",
      label: "カレンダー",
      icon: Calendar,
      path: "/calendar",
    },
  ];

  return (
    <div className="bg-white border-t border-gray-200 p-2">
      <div className="flex justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;

          return (
            <button
              key={item.id}
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center justify-center p-3 rounded-xl transition-colors ${
                isActive
                  ? "text-app-blue bg-app-blue-light"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              <Icon className="w-6 h-6 mb-1" />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
