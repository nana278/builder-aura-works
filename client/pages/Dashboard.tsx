import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Plus, X, Settings } from "lucide-react";
import BottomNavigation from "@/components/ui/BottomNavigation";

export default function Dashboard() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  // Mock period data - in real app, this would come from backend/context
  const [periodDates] = useState<string[]>([
    // Example period dates in YYYY-MM-DD format
    "2024-01-15",
    "2024-01-16",
    "2024-01-17",
    "2024-01-18",
    "2024-01-19",
  ]);

  const today = new Date();
  const formatDate = (date: Date) => {
    return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
  };

  const getDayOfWeek = (date: Date) => {
    const days = ["日", "月", "火", "水", "木", "金", "土"];
    return days[date.getDay()];
  };

  // Generate calendar days for current week
  const getWeekDays = () => {
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay());

    return Array.from({ length: 7 }, (_, i) => {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + i);
      return date;
    });
  };

  const weekDays = getWeekDays();

  return (
    <div className="min-h-screen bg-gradient-to-br from-app-blue-light via-blue-100 to-purple-100">
      <div className="max-w-md mx-auto bg-white min-h-screen">
        {/* Header */}
        <div className="bg-white px-6 py-6 border-b">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-800">今日の記録</h1>
            <div className="flex items-center space-x-2">
              <Button
                onClick={() => navigate("/settings")}
                variant="ghost"
                className="w-10 h-10 rounded-full text-gray-600 hover:bg-gray-100 p-0"
              >
                <Settings className="w-5 h-5" />
              </Button>
              <Button
                onClick={() => setShowModal(true)}
                className="w-12 h-12 rounded-full bg-app-blue hover:bg-app-blue-dark text-white p-0"
              >
                <Plus className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>

        {/* Calendar Week View */}
        <div className="px-6 py-4">
          <div className="grid grid-cols-7 gap-2">
            {weekDays.map((date, index) => {
              const isToday = date.toDateString() === today.toDateString();
              const dateString = date.toISOString().split("T")[0]; // YYYY-MM-DD format
              const isPeriodDay = periodDates.includes(dateString);

              return (
                <div
                  key={index}
                  className={`text-center p-3 rounded-2xl relative ${
                    isToday
                      ? "bg-app-blue text-white"
                      : isPeriodDay
                        ? "bg-app-red text-white"
                        : "bg-gray-100"
                  }`}
                >
                  <div className="text-xs mb-1">{getDayOfWeek(date)}</div>
                  <div className="text-lg font-semibold">{date.getDate()}</div>
                  {isPeriodDay && (
                    <div className="absolute top-1 right-1 text-xs">🩸</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="px-6 py-4">
          <h2 className="text-xl font-bold text-gray-800 mb-4">クイック記録</h2>
          <div className="grid grid-cols-2 gap-3">
            <Button
              onClick={() => {
                const todayString = today.toISOString().split("T")[0];
                setRecordedDates((prev) =>
                  prev.includes(todayString) ? prev : [...prev, todayString],
                );
                navigate("/symptoms");
              }}
              className="h-20 flex flex-col items-center justify-center bg-gradient-to-r from-app-pink to-pink-400 hover:from-pink-600 hover:to-pink-500 text-white rounded-2xl"
            >
              <span className="text-2xl mb-1">🩺</span>
              <span className="text-sm font-medium">症状を記録</span>
            </Button>
            <Button
              onClick={() => {
                const todayString = today.toISOString().split("T")[0];
                setRecordedDates((prev) =>
                  prev.includes(todayString) ? prev : [...prev, todayString],
                );
                navigate("/mood");
              }}
              className="h-20 flex flex-col items-center justify-center bg-gradient-to-r from-app-blue to-cyan-400 hover:from-app-blue-dark hover:to-cyan-500 text-white rounded-2xl"
            >
              <span className="text-2xl mb-1">😊</span>
              <span className="text-sm font-medium">体調を記録</span>
            </Button>
          </div>
        </div>

        {/* Recent Records */}
        <div className="px-6 py-4">
          <h2 className="text-xl font-bold text-gray-800 mb-4">最近の記録</h2>
          <div className="space-y-3">
            <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-lg mr-3">🩸</span>
                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      生理開始
                    </p>
                    <p className="text-xs text-gray-500">1月15日</p>
                  </div>
                </div>
                <span className="text-xs text-gray-400">3日前</span>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-lg mr-3">🤕</span>
                  <div>
                    <p className="text-sm font-medium text-gray-800">頭痛</p>
                    <p className="text-xs text-gray-500">1月14日</p>
                  </div>
                </div>
                <span className="text-xs text-gray-400">4日前</span>
              </div>
            </div>
          </div>
        </div>

        {/* Health Advice Section */}
        <div className="px-6 py-4">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            健康アドバイス
          </h2>
          <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-4">
            <p className="text-gray-700">
              今日は水分補給を十分に取って、軽い運動を心がけましょう。
              体調に変化があれば記録することをお忘れなく。
            </p>
          </div>
        </div>

        {/* Record Modal */}
        <Dialog open={showModal} onOpenChange={setShowModal}>
          <DialogContent className="max-w-sm mx-auto rounded-3xl p-0 overflow-hidden">
            <div className="bg-white">
              <DialogHeader className="p-6 pb-4">
                <div className="flex items-center justify-between">
                  <DialogTitle className="text-xl font-bold">
                    今日の記録
                  </DialogTitle>
                  <Button
                    variant="ghost"
                    onClick={() => setShowModal(false)}
                    className="p-0 h-auto text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-6 h-6" />
                  </Button>
                </div>
              </DialogHeader>

              <div className="px-6 pb-6">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-app-blue mb-2">
                    {formatDate(selectedDate)}
                  </div>
                  <div className="text-gray-600">
                    {getDayOfWeek(selectedDate)}曜日
                  </div>
                </div>

                <div className="space-y-3">
                  <Button className="w-full h-14 text-lg rounded-2xl bg-app-red hover:bg-red-600 text-white">
                    生理開始
                  </Button>
                  <Button
                    onClick={() => {
                      setShowModal(false);
                      navigate("/symptoms");
                    }}
                    className="w-full h-14 text-lg rounded-2xl bg-gradient-to-r from-app-pink to-pink-400 hover:from-pink-600 hover:to-pink-500 text-white"
                  >
                    症状���記録
                  </Button>
                  <Button className="w-full h-14 text-lg rounded-2xl bg-gradient-to-r from-app-blue to-cyan-400 hover:from-app-blue-dark hover:to-cyan-500 text-white">
                    体調を記録
                  </Button>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        <BottomNavigation currentPage="home" />
      </div>
    </div>
  );
}
