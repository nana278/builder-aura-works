import React, { useState } from "react";
import {
  Heart,
  MessageCircle,
  Calendar,
  Home,
  X,
  ChevronLeft,
  ChevronRight,
  Plus,
  ArrowLeft,
  Edit3,
  User,
  Bell,
  Shield,
  HelpCircle,
  FileText,
  LogOut,
  Check,
  Send,
} from "lucide-react";

const PeriodCareApp = () => {
  const [currentScreen, setCurrentScreen] = useState("appIcon");
  const [showDateModal, setShowDateModal] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date(2024, 2, 15)); // March 15, 2024
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState("");
  const [recordedDates, setRecordedDates] = useState([
    "2024-03-15",
    "2024-03-16",
    "2024-03-17",
    "2024-03-18",
    "2024-03-19",
  ]);
  const [currentMonth, setCurrentMonth] = useState(new Date(2024, 2)); // March 2024

  // App Icon Screen
  const AppIconScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-6">
      <div className="text-center">
        <div
          onClick={() => setCurrentScreen("login")}
          className="w-32 h-32 bg-gradient-to-br from-pink-400 via-red-400 to-red-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-3xl"
        >
          <Heart className="w-16 h-16 text-white" />
        </div>
        <h1 className="text-white text-2xl font-bold mb-2">PeriodCare</h1>
        <p className="text-gray-300 text-sm">タップして開始</p>
      </div>
    </div>
  );

  // Login Screen
  const LoginScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex flex-col items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-sky-400 to-sky-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">PeriodCare</h1>
          <p className="text-gray-500 text-sm">あなたの健康をサポート</p>
        </div>

        <div className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="メールアドレス"
              className="w-full px-4 py-4 rounded-xl border border-gray-100 bg-gray-50 focus:border-sky-400 focus:outline-none text-gray-700 placeholder-gray-400"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="パスワード"
              className="w-full px-4 py-4 rounded-xl border border-gray-100 bg-gray-50 focus:border-sky-400 focus:outline-none text-gray-700 placeholder-gray-400"
            />
          </div>
          <button
            onClick={() => setCurrentScreen("home")}
            className="w-full bg-gradient-to-r from-sky-400 to-sky-500 text-white py-4 rounded-xl font-semibold text-lg hover:from-sky-500 hover:to-sky-600 transition-all shadow-lg"
          >
            ログイン
          </button>

          <button
            onClick={() => setCurrentScreen("forgotPassword")}
            className="w-full text-center text-sm text-gray-500 hover:text-sky-600 transition-colors py-2"
          >
            パスワードをお忘れの方はこちら
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100">
          <button className="w-full flex items-center justify-center space-x-3 py-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors mb-4">
            <div className="w-5 h-5 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full"></div>
            <span className="text-sm text-gray-700 font-medium">
              Googleでログイン
            </span>
          </button>

          <div className="text-center">
            <button
              onClick={() => setCurrentScreen("register")}
              className="text-sm text-sky-600 hover:text-sky-800 transition-colors font-medium"
            >
              新規登録はこちら
            </button>
          </div>

          <div className="text-center mt-4">
            <button className="text-xs text-gray-400 hover:text-gray-600 transition-colors">
              プライバシーポリシー等に関する問い合わせ
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Registration Screen
  const RegisterScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex flex-col items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-sky-400 to-sky-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">PeriodCare</h1>
          <p className="text-gray-500 text-sm">あなたの健康をサポート</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              お名前
            </label>
            <input
              type="text"
              placeholder="山田 花子"
              className="w-full px-4 py-4 rounded-xl border border-gray-100 bg-gray-50 focus:border-sky-400 focus:outline-none text-gray-700 placeholder-gray-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              メールアドレス
            </label>
            <input
              type="email"
              placeholder="example@email.com"
              className="w-full px-4 py-4 rounded-xl border border-gray-100 bg-gray-50 focus:border-sky-400 focus:outline-none text-gray-700 placeholder-gray-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              パスワード
            </label>
            <input
              type="password"
              placeholder="8文字以上で入力してください"
              className="w-full px-4 py-4 rounded-xl border border-gray-100 bg-gray-50 focus:border-sky-400 focus:outline-none text-gray-700 placeholder-gray-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              パスワード（確認）
            </label>
            <input
              type="password"
              placeholder="もう一度入力してください"
              className="w-full px-4 py-4 rounded-xl border border-gray-100 bg-gray-50 focus:border-sky-400 focus:outline-none text-gray-700 placeholder-gray-400"
            />
          </div>

          <div className="flex items-start space-x-3 py-2">
            <input
              type="checkbox"
              className="mt-1 w-4 h-4 text-sky-600 border-gray-300 rounded"
            />
            <p className="text-xs text-gray-600 leading-relaxed">
              <span className="text-sky-600 underline cursor-pointer">
                利用規約
              </span>
              および
              <span className="text-sky-600 underline cursor-pointer">
                プライバシーポリシー
              </span>
              に同意して
              <br />
              アカウントを作成します
            </p>
          </div>

          <button
            onClick={() => setCurrentScreen("home")}
            className="w-full bg-gradient-to-r from-sky-400 to-sky-500 text-white py-4 rounded-xl font-semibold text-lg hover:from-sky-500 hover:to-sky-600 transition-all shadow-lg"
          >
            新規登録
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100">
          <div className="text-center mb-4">
            <span className="text-sm text-gray-500">または</span>
          </div>

          <button className="w-full flex items-center justify-center space-x-3 py-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors mb-4">
            <div className="w-5 h-5 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full"></div>
            <span className="text-sm text-gray-700 font-medium">
              Googleで新規登録
            </span>
          </button>

          <div className="text-center">
            <button
              onClick={() => setCurrentScreen("login")}
              className="text-sm text-sky-600 hover:text-sky-800 transition-colors font-medium"
            >
              すでにアカウントをお持ちの方はこちら
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Forgot Password Screen
  const ForgotPasswordScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex flex-col items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-sky-400 to-sky-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            パスワード再設定
          </h1>
          <p className="text-gray-500 text-sm">
            登録したメールアドレスを入力してください
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="メールアドレス"
              className="w-full px-4 py-4 rounded-xl border border-gray-100 bg-gray-50 focus:border-sky-400 focus:outline-none text-gray-700 placeholder-gray-400"
            />
          </div>
          <button
            onClick={() => setCurrentScreen("login")}
            className="w-full bg-gradient-to-r from-sky-400 to-sky-500 text-white py-4 rounded-xl font-semibold text-lg hover:from-sky-500 hover:to-sky-600 transition-all shadow-lg"
          >
            再設定メールを送信
          </button>

          <div className="text-center">
            <button
              onClick={() => setCurrentScreen("login")}
              className="text-sm text-sky-600 hover:text-sky-800 transition-colors font-medium"
            >
              ログイン画面に戻る
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Date Selection Modal
  const DateSelectionModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 w-full max-w-xs mx-4 relative shadow-xl">
        <button
          onClick={() => setShowDateModal(false)}
          className="absolute top-4 right-4 p-1 text-gray-400 hover:text-gray-600"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-8">
          <h2 className="text-lg font-bold text-gray-800 mb-6">
            生理開始日を選択
          </h2>

          {/* Date Picker (slot-like) */}
          <div className="bg-gray-50 rounded-xl p-4 mb-6">
            <div className="flex items-center justify-center space-x-2">
              <select
                className="bg-white border border-gray-200 rounded-lg px-3 py-2"
                value={selectedDate.getFullYear()}
                onChange={(e) =>
                  setSelectedDate(
                    new Date(
                      parseInt(e.target.value),
                      selectedDate.getMonth(),
                      selectedDate.getDate(),
                    ),
                  )
                }
              >
                <option value={2024}>2024年</option>
                <option value={2023}>2023年</option>
              </select>
              <select
                className="bg-white border border-gray-200 rounded-lg px-3 py-2"
                value={selectedDate.getMonth() + 1}
                onChange={(e) =>
                  setSelectedDate(
                    new Date(
                      selectedDate.getFullYear(),
                      parseInt(e.target.value) - 1,
                      selectedDate.getDate(),
                    ),
                  )
                }
              >
                {Array.from({ length: 12 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}月
                  </option>
                ))}
              </select>
              <select
                className="bg-white border border-gray-200 rounded-lg px-3 py-2"
                value={selectedDate.getDate()}
                onChange={(e) =>
                  setSelectedDate(
                    new Date(
                      selectedDate.getFullYear(),
                      selectedDate.getMonth(),
                      parseInt(e.target.value),
                    ),
                  )
                }
              >
                {Array.from({ length: 31 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}日
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <button
          onClick={() => {
            setShowDateModal(false);
            setShowConfirmDialog(true);
          }}
          className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-4 rounded-lg font-medium text-lg"
        >
          生理開始を記録
        </button>
      </div>
    </div>
  );

  // Confirmation Dialog
  const ConfirmDialog = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 w-full max-w-sm mx-4 relative shadow-xl">
        <div className="text-center mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            生理が始まりましたか？
          </h2>
          <p className="text-gray-600 text-sm mb-6">
            こ��操作をすると、
            <span className="font-bold text-red-600">
              {selectedDate.getFullYear()}年{selectedDate.getMonth() + 1}月
              {selectedDate.getDate()}日
            </span>
            を生理開始日として記録します。
          </p>
          <p className="text-gray-500 text-xs">
            後から編集はできますが、間違いがないかご確認ください。
          </p>
        </div>

        <div className="flex space-x-4">
          <button
            onClick={() => setShowConfirmDialog(false)}
            className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg font-medium"
          >
            キャンセル
          </button>
          <button
            onClick={() => {
              const dateString = `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, "0")}-${String(selectedDate.getDate()).padStart(2, "0")}`;
              setRecordedDates((prev) => [...prev, dateString]);
              setShowConfirmDialog(false);
            }}
            className="flex-1 bg-gradient-to-r from-red-500 to-red-600 text-white py-3 rounded-lg font-medium"
          >
            記録する
          </button>
        </div>
      </div>
    </div>
  );

  // Home Screen
  const HomeScreen = () => {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonthIndex = today.getMonth();
    const currentDay = today.getDate();

    // Get days in current month
    const daysInMonth = new Date(
      currentYear,
      currentMonthIndex + 1,
      0,
    ).getDate();
    const firstDayOfMonth = new Date(
      currentYear,
      currentMonthIndex,
      1,
    ).getDay();

    // Create calendar grid
    const calendarDays = [];

    // Add empty cells for days before month starts
    for (let i = 0; i < firstDayOfMonth; i++) {
      calendarDays.push(null);
    }

    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      calendarDays.push(day);
    }

    return (
      <div className="min-h-screen bg-gray-50 pb-20">
        <div className="bg-white p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-xl font-bold text-gray-900">今日の記録</h1>
            </div>
            <button
              onClick={() => setShowDateModal(true)}
              className="w-12 h-12 bg-gradient-to-br from-sky-400 to-sky-500 rounded-full flex items-center justify-center shadow-lg"
            >
              <Plus className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Calendar Section */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900">カレンダー</h2>
              <div className="flex items-center space-x-4">
                <button className="p-1">
                  <ChevronLeft className="w-6 h-6 text-gray-600" />
                </button>
                <span className="text-lg font-bold text-gray-900">
                  2024年3月
                </span>
                <button className="p-1">
                  <ChevronRight className="w-6 h-6 text-gray-600" />
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100">
              <div className="grid grid-cols-7 gap-0 text-center">
                {["日", "月", "火", "水", "木", "金", "土"].map((day) => (
                  <div
                    key={day}
                    className="py-3 text-sm font-medium text-gray-600 border-b border-gray-100"
                  >
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-0">
                {calendarDays.map((day, index) => {
                  if (day === null) {
                    return <div key={index} className="h-12"></div>;
                  }

                  const dateString = `2024-03-${String(day).padStart(2, "0")}`;
                  const isPeriodDay = recordedDates.includes(dateString);
                  const isToday = day === 15; // Mock today

                  return (
                    <div
                      key={day}
                      className={`h-12 flex items-center justify-center text-sm cursor-pointer transition-colors border-r border-b border-gray-50 last:border-r-0 ${
                        isPeriodDay
                          ? "bg-red-100 text-red-800"
                          : isToday
                            ? "bg-blue-500 text-white"
                            : "hover:bg-gray-50 text-gray-900"
                      }`}
                      onClick={() =>
                        isEditMode && setSelectedDate(new Date(2024, 2, day))
                      }
                    >
                      {day}
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
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <p className="text-sm text-red-600 mb-1">生理期間</p>
              <p className="text-3xl font-bold text-red-700">5日</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <p className="text-sm text-blue-600 mb-1">平均周期</p>
              <p className="text-3xl font-bold text-blue-700">28日</p>
            </div>
          </div>
        </div>

        {/* Health Advice */}
        <div className="px-6 pb-6">
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              健康アドバイス
            </h3>
            <div className="bg-gradient-to-r from-blue-50 to-sky-50 rounded-xl p-4">
              <p className="text-sm text-gray-700">
                今日は水分をしっかり摂取しましょう。軽い運動もおすすめです。
              </p>
            </div>
          </div>

          {/* Recent Period History */}
          <div className="bg-white rounded-xl border border-gray-100 p-6 mt-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              直近6回の生理記録
            </h3>
            <div className="space-y-3">
              {[
                { start: "2024/3/15", end: "2024/3/19", cycle: "28日" },
                { start: "2024/2/16", end: "2024/2/20", cycle: "29日" },
                { start: "2024/1/18", end: "2024/1/22", cycle: "27日" },
                { start: "2023/12/21", end: "2023/12/25", cycle: "28日" },
                { start: "2023/11/23", end: "2023/11/27", cycle: "30日" },
                { start: "2023/10/24", end: "2023/10/28", cycle: "29日" },
              ].map((period, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-red-50 rounded-lg"
                >
                  <div>
                    <p className="text-sm font-medium text-red-800">
                      {period.start} - {period.end}
                    </p>
                    <p className="text-xs text-red-600">周期: {period.cycle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Character Selection Screen
  const CharacterSelectionScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pb-20">
      <div className="bg-white shadow-sm p-6">
        <div className="flex items-center justify-center mb-6 relative">
          <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-sky-500 rounded-full flex items-center justify-center">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            相談チャット
          </h1>
          <p className="text-gray-500 text-sm">
            話しやすい相手を選んでください
          </p>
        </div>
      </div>

      <div className="p-6">
        <div className="space-y-4">
          {[
            {
              id: "prince",
              name: "王子様",
              avatar: "👑",
              bgColor: "from-purple-400 to-purple-500",
              description: "優しく気遣ってくれる王子様",
              online: true,
            },
            {
              id: "mother",
              name: "お母��ん",
              avatar: "👩",
              bgColor: "from-pink-400 to-pink-500",
              description: "温かく包み込んでくれるお母さん",
              online: true,
            },
            {
              id: "grandmother",
              name: "おばあちゃん",
              avatar: "👵",
              bgColor: "from-orange-400 to-orange-500",
              description: "経験豊富で知恵のあるおばあちゃん",
              online: true,
            },
            {
              id: "nurse",
              name: "保健室の先生",
              avatar: "👩‍⚕️",
              bgColor: "from-green-400 to-green-500",
              description: "医学的知識豊富な保健室の先生",
              online: true,
            },
            {
              id: "boyfriend",
              name: "彼氏",
              avatar: "💕",
              bgColor: "from-red-400 to-red-500",
              description: "理解のある優しい彼氏",
              online: false,
            },
          ].map((character) => (
            <button
              key={character.id}
              onClick={() => {
                setSelectedCharacter(character.id);
                setCurrentScreen("chat");
              }}
              className="w-full bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition-all border border-gray-100"
            >
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${character.bgColor} rounded-full flex items-center justify-center text-2xl`}
                  >
                    {character.avatar}
                  </div>
                  <div
                    className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${character.online ? "bg-green-400" : "bg-gray-300"}`}
                  ></div>
                </div>
                <div className="text-left flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {character.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {character.description}
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  // Chat Screen
  const ChatScreen = () => {
    const characterData = {
      prince: {
        name: "王子様",
        avatar: "👑",
        bgGradient: "from-purple-400 to-purple-600",
        description: "優しく気遣ってくれる王子様",
      },
      mother: {
        name: "お母さん",
        avatar: "👩",
        bgGradient: "from-pink-400 to-pink-600",
        description: "温かく包み込んでくれるお母さん",
      },
      grandmother: {
        name: "おばあちゃん",
        avatar: "👵",
        bgGradient: "from-orange-400 to-orange-600",
        description: "経験豊富で知恵のあるおばあちゃん",
      },
      nurse: {
        name: "保健室の先生",
        avatar: "👩‍⚕️",
        bgGradient: "from-green-400 to-green-600",
        description: "医学的知識豊富な保健室の先生",
      },
      boyfriend: {
        name: "彼氏",
        avatar: "💕",
        bgGradient: "from-red-400 to-red-600",
        description: "理解のある優しい彼氏",
      },
    };

    const character = characterData[selectedCharacter] || characterData.prince;

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pb-20">
        {/* Header */}
        <div
          className={`bg-gradient-to-r ${character.bgGradient} p-6 text-white`}
        >
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setCurrentScreen("characterSelection")}
              className="p-2 rounded-full hover:bg-white/20 transition-colors"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                {character.avatar}
              </div>
              <div>
                <h1 className="text-xl font-bold">{character.name}</h1>
                <p className="text-sm opacity-90">{character.description}</p>
              </div>
            </div>
            <div className="ml-auto flex items-center space-x-2">
              <MessageCircle className="w-5 h-5 opacity-70" />
              <span className="text-sm">チャット中</span>
            </div>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="p-6 space-y-4 flex-1">
          <div className="bg-white rounded-2xl shadow-sm p-4 max-w-xs">
            <div className="flex items-start space-x-3">
              <div className="text-2xl">{character.avatar}</div>
              <div>
                <p className="text-sm font-medium text-gray-900 mb-1">
                  {character.name}
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {selectedCharacter === "prince" &&
                    "こんにちは、美しいお姫様…。今日はどんなことで君の心が曇っているのかな？✨💎✨僕が、君の全てを受け止めよう。遠慮はいらないよ✨"}
                  {selectedCharacter === "mother" &&
                    "お疲れ様、今日の調子はどうでしたか？お母さんにはなんでも話してね。"}
                  {selectedCharacter === "grandmother" &&
                    "お疲れ様でした。体調はいかがですか？おばあちゃんの経験をお話ししましょうか。"}
                  {selectedCharacter === "boyfriend" &&
                    "お疲れ様！今日はどうだった？"}
                  {selectedCharacter === "nurse" &&
                    "こんにちは。今日の体調について教えてください。"}
                </p>
                <p className="text-xs text-gray-400 mt-2">14:53</p>
              </div>
            </div>
          </div>
        </div>

        {/* Message Input */}
        <div className="fixed bottom-20 left-0 right-0 p-4 bg-white border-t border-gray-100">
          <div className="flex items-center space-x-3 max-w-md mx-auto">
            <input
              type="text"
              placeholder="心の想いを伝えて..."
              className="flex-1 px-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:border-sky-400 bg-gray-50"
            />
            <button
              className={`w-12 h-12 bg-gradient-to-br ${character.bgGradient} rounded-full flex items-center justify-center shadow-lg`}
            >
              <Send className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Settings Screen
  const SettingsScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pb-20">
      <div className="bg-white shadow-sm p-6">
        <h1 className="text-2xl font-bold text-gray-900">設定</h1>
      </div>

      <div className="p-6">
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6 border border-gray-100">
          <div className="space-y-1">
            <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="flex items-center space-x-4">
                <User className="w-6 h-6 text-gray-600" />
                <span className="text-gray-900 font-medium">
                  プロフィール設定
                </span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>

            <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="flex items-center space-x-4">
                <Bell className="w-6 h-6 text-gray-600" />
                <span className="text-gray-900 font-medium">通知設定</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>

            <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="flex items-center space-x-4">
                <Shield className="w-6 h-6 text-gray-600" />
                <span className="text-gray-900 font-medium">
                  プライバシー設定
                </span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>

            <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="flex items-center space-x-4">
                <HelpCircle className="w-6 h-6 text-gray-600" />
                <span className="text-gray-900 font-medium">
                  ヘルプ・サポート
                </span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>

            <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="flex items-center space-x-4">
                <FileText className="w-6 h-6 text-gray-600" />
                <span className="text-gray-900 font-medium">利用規約</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
          <button
            onClick={() => setCurrentScreen("login")}
            className="w-full flex items-center justify-between p-4 hover:bg-red-50 rounded-lg transition-colors text-red-600"
          >
            <div className="flex items-center space-x-4">
              <LogOut className="w-6 h-6" />
              <span className="font-medium">ログアウト</span>
            </div>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );

  // Bottom Navigation
  const BottomNav = () => (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 max-w-md mx-auto">
      <div className="flex items-center justify-around">
        <button
          onClick={() => setCurrentScreen("characterSelection")}
          className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-colors ${
            currentScreen === "chat" || currentScreen === "characterSelection"
              ? "text-sky-500 bg-sky-50"
              : "text-gray-500"
          }`}
        >
          <MessageCircle className="w-6 h-6" />
          <span className="text-xs font-medium">チャット</span>
        </button>

        <button
          onClick={() => setCurrentScreen("home")}
          className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-colors ${
            currentScreen === "home"
              ? "text-sky-500 bg-sky-50"
              : "text-gray-500"
          }`}
        >
          <Home className="w-6 h-6" />
          <span className="text-xs font-medium">ホーム</span>
        </button>

        <button
          onClick={() => setCurrentScreen("settings")}
          className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-colors ${
            currentScreen === "settings"
              ? "text-sky-500 bg-sky-50"
              : "text-gray-500"
          }`}
        >
          <User className="w-6 h-6" />
          <span className="text-xs font-medium">設定</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-100 min-h-screen max-w-md mx-auto relative">
      {currentScreen === "appIcon" && <AppIconScreen />}
      {currentScreen === "login" && <LoginScreen />}
      {currentScreen === "register" && <RegisterScreen />}
      {currentScreen === "forgotPassword" && <ForgotPasswordScreen />}
      {currentScreen === "home" && <HomeScreen />}
      {currentScreen === "characterSelection" && <CharacterSelectionScreen />}
      {currentScreen === "chat" && <ChatScreen />}
      {currentScreen === "settings" && <SettingsScreen />}

      {!["appIcon", "login", "register", "forgotPassword"].includes(
        currentScreen,
      ) && <BottomNav />}
      {showDateModal && <DateSelectionModal />}
      {showConfirmDialog && <ConfirmDialog />}
    </div>
  );
};

export default PeriodCareApp;
