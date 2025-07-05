import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Plus, X, ChevronLeft, ChevronRight } from "lucide-react";
import BottomNavigation from "@/components/ui/BottomNavigation";

export default function Dashboard() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date(2024, 2)); // March 2024

  // Mock period data - in real app, this would come from backend/context
  const [periodDates] = useState<string[]>([
    "2024-03-15",
    "2024-03-16",
    "2024-03-17",
    "2024-03-18",
    "2024-03-19",
  ]);
  // Track dates that have been recorded
  const [recordedDates, setRecordedDates] = useState<string[]>([]);

  const today = new Date();
  const formatDate = (date: Date) => {
    return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
  };

  const getDayOfWeek = (date: Date) => {
    const days = ["日", "月", "火", "水", "木", "金", "土"];
    return days[date.getDay()];
  };

  const navigateMonth = (direction: "prev" | "next") => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(
      currentMonth.getMonth() + (direction === "next" ? 1 : -1),
    );
    setCurrentMonth(newMonth);
  };

  // Generate calendar days for the month
  const getMonthDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());

    const days = [];
    for (let i = 0; i < 42; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      if (date.getMonth() === month) {
        days.push(date);
      }
    }
    return days;
  };

  const monthDays = getMonthDays();

  const recordToday = () => {
    const todayString = today.toISOString().split("T")[0];
    setRecordedDates((prev) =>
      prev.includes(todayString) ? prev : [...prev, todayString],
    );
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-md mx-auto bg-white min-h-screen">
        {/* Header */}
        <div className="bg-white px-6 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">今日の記録</h1>
            <Button
              onClick={() => setShowModal(true)}
              className="w-12 h-12 rounded-full bg-blue-500 hover:bg-blue-600 text-white p-0 shadow-lg"
            >
              <Plus className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* Calendar Section */}
        <div className="px-6 pb-6">
          <div className="bg-white">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-gray-900">カレンダー</h2>
              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  onClick={() => navigateMonth("prev")}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <span className="text-lg font-semibold text-gray-900">
                  {currentMonth.getFullYear()}年{currentMonth.getMonth() + 1}月
                </span>
                <Button
                  variant="ghost"
                  onClick={() => navigateMonth("next")}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Calendar Grid */}
            <div className="bg-gray-50 rounded-2xl p-4">
              {/* Day headers */}
              <div className="grid grid-cols-7 gap-1 mb-2">
                {["日", "月", "火", "水", "木", "金", "土"].map((day) => (
                  <div
                    key={day}
                    className="text-center text-sm font-medium text-gray-600 py-2"
                  >
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar days */}
              <div className="grid grid-cols-7 gap-1">
                {monthDays.map((date, index) => {
                  const dateString = date.toISOString().split("T")[0];
                  const isPeriodDay = periodDates.includes(dateString);
                  const isRecorded = recordedDates.includes(dateString);
                  const isToday = date.toDateString() === today.toDateString();

                  return (
                    <div
                      key={index}
                      className={`h-10 w-10 rounded-lg flex items-center justify-center text-sm cursor-pointer transition-colors ${
                        isPeriodDay
                          ? "bg-red-200 text-red-800"
                          : isToday && isRecorded
                            ? "bg-green-500 text-white"
                            : isToday
                              ? "bg-blue-500 text-white"
                              : isRecorded
                                ? "bg-green-200 text-green-800"
                                : "hover:bg-gray-200 text-gray-900"
                      }`}
                    >
                      {date.getDate()}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Monthly Summary */}
        <div className="px-6 pb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">月間サマリー</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-red-50 rounded-2xl p-4 text-center">
              <p className="text-sm text-red-600 mb-1">生理期間</p>
              <p className="text-2xl font-bold text-red-700">5日</p>
            </div>
            <div className="bg-blue-50 rounded-2xl p-4 text-center">
              <p className="text-sm text-blue-600 mb-1">平均周期</p>
              <p className="text-2xl font-bold text-blue-700">28日</p>
            </div>
          </div>
        </div>

        {/* Health Advice */}
        <div className="px-6 pb-24">
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            健康アドバイス
          </h2>
          <div className="bg-gray-50 rounded-2xl p-4">
            <p className="text-sm text-gray-700">
              今日は水分補給を十分に取って、軽い運動を心がけましょう。
              体調に変化があれ��記録することをお忘れなく。
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
                  <div className="text-3xl font-bold text-blue-500 mb-2">
                    {formatDate(selectedDate)}
                  </div>
                  <div className="text-gray-600">
                    {getDayOfWeek(selectedDate)}曜日
                  </div>
                </div>

                <div className="space-y-3">
                  <Button
                    onClick={() => {
                      const todayString = today.toISOString().split("T")[0];
                      setRecordedDates((prev) =>
                        prev.includes(todayString)
                          ? prev
                          : [...prev, todayString],
                      );
                      setShowModal(false);
                    }}
                    className="w-full h-14 text-lg rounded-2xl bg-red-500 hover:bg-red-600 text-white"
                  >
                    生理開始
                  </Button>
                  <Button
                    onClick={() => {
                      const todayString = today.toISOString().split("T")[0];
                      setRecordedDates((prev) =>
                        prev.includes(todayString)
                          ? prev
                          : [...prev, todayString],
                      );
                      setShowModal(false);
                      navigate("/symptoms");
                    }}
                    className="w-full h-14 text-lg rounded-2xl bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white"
                  >
                    症状を記録
                  </Button>
                  <Button
                    onClick={() => {
                      const todayString = today.toISOString().split("T")[0];
                      setRecordedDates((prev) =>
                        prev.includes(todayString)
                          ? prev
                          : [...prev, todayString],
                      );
                      setShowModal(false);
                      navigate("/mood");
                    }}
                    className="w-full h-14 text-lg rounded-2xl bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white"
                  >
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
