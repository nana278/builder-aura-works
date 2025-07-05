import React, { useState } from "react";
import {
  Plus,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Home,
  Calendar,
} from "lucide-react";

const PeriodCareHome = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date(2024, 2)); // March 2024
  const [recordedDates, setRecordedDates] = useState<string[]>([]);
  const [showModal, setShowModal] = useState(false);

  // Mock period data matching the image
  const periodDates = [
    "2024-03-15",
    "2024-03-16",
    "2024-03-17",
    "2024-03-18",
    "2024-03-19",
  ];

  const today = new Date();

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
    <div className="min-h-screen bg-gray-50 max-w-md mx-auto">
      {/* Header */}
      <div className="bg-white px-6 py-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">今日の記録</h1>
          <button
            onClick={() => setShowModal(true)}
            className="w-12 h-12 rounded-full bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center shadow-lg transition-colors"
          >
            <Plus className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Calendar Section */}
      <div className="px-6 pb-6">
        <div className="bg-white">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-900">カレンダー</h2>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigateMonth("prev")}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-lg font-semibold text-gray-900">
                {currentMonth.getFullYear()}年{currentMonth.getMonth() + 1}月
              </span>
              <button
                onClick={() => navigateMonth("next")}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
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
        <h2 className="text-lg font-bold text-gray-900 mb-4">健康アドバイス</h2>
        <div className="bg-gray-50 rounded-2xl p-4">
          <p className="text-sm text-gray-700">
            今日は水分補給を十分に取って、軽い運動を心がけましょう。
            体調に変化があれば記録することをお忘れなく。
          </p>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 max-w-md mx-auto">
        <div className="flex items-center justify-around">
          <button className="flex flex-col items-center space-y-1 p-2 rounded-lg text-gray-500">
            <MessageCircle className="w-6 h-6" />
            <span className="text-xs font-medium">チャット</span>
          </button>

          <button className="flex flex-col items-center space-y-1 p-2 rounded-lg text-blue-500">
            <Home className="w-6 h-6" />
            <span className="text-xs font-medium">ホーム</span>
          </button>

          <button className="flex flex-col items-center space-y-1 p-2 rounded-lg text-gray-500">
            <Calendar className="w-6 h-6" />
            <span className="text-xs font-medium">カレンダー</span>
          </button>
        </div>
      </div>

      {/* Record Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 w-full max-w-xs mx-4 relative shadow-xl">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 p-1 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>

            <div className="text-center mb-8">
              <h2 className="text-lg font-bold text-gray-800 mb-6">
                今日の記録
              </h2>

              <div className="text-center mb-6">
                <div className="text-2xl font-bold text-blue-500 mb-2">
                  {today.getFullYear()}年{today.getMonth() + 1}月
                  {today.getDate()}日
                </div>
                <div className="text-gray-600">
                  {["日", "月", "火", "水", "木", "金", "土"][today.getDay()]}
                  曜日
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={recordToday}
                className="w-full bg-red-500 hover:bg-red-600 text-white py-4 rounded-lg font-medium text-lg transition-colors"
              >
                生理開始
              </button>
              <button
                onClick={recordToday}
                className="w-full bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white py-4 rounded-lg font-medium text-lg transition-colors"
              >
                症状を記録
              </button>
              <button
                onClick={recordToday}
                className="w-full bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white py-4 rounded-lg font-medium text-lg transition-colors"
              >
                体調を記録
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PeriodCareHome;
