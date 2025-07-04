import BottomNavigation from "@/components/ui/BottomNavigation";

export default function Calendar() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-app-blue-light via-blue-100 to-purple-100">
      <div className="max-w-md mx-auto bg-white min-h-screen">
        {/* Header */}
        <div className="bg-white px-6 py-6 border-b">
          <h1 className="text-2xl font-bold text-gray-800">カレンダー</h1>
        </div>

        {/* Placeholder content */}
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="text-center">
            <div className="text-6xl mb-4">📅</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              カレンダー機能
            </h2>
            <p className="text-gray-600">
              月経周期の詳細なカレンダー表示機能は現在開発中です。
            </p>
          </div>
        </div>

        <BottomNavigation currentPage="calendar" />
      </div>
    </div>
  );
}
