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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 flex flex-col items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">PeriodCare</h1>
          <p className="text-gray-600 text-sm">あなたの健康をサポート</p>
        </div>

        <div className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="メールアドレス"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:outline-none"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="パスワード"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:outline-none"
            />
          </div>
          <button
            onClick={() => setCurrentScreen("home")}
            className="w-full bg-gradient-to-r from-blue-400 to-cyan-400 text-white py-3 rounded-xl font-semibold hover:from-blue-500 hover:to-cyan-500 transition-all"
          >
            ログイン
          </button>

          <button
            onClick={() => setCurrentScreen("forgotPassword")}
            className="w-full text-center text-sm text-gray-600 hover:text-blue-600 transition-colors"
          >
            パスワードをお忘れの方はこちら
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100">
          <button className="w-full flex items-center justify-center space-x-2 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors mb-4">
            <span className="text-sm text-gray-700">Googleでログイン</span>
          </button>

          <div className="text-center">
            <button
              onClick={() => setCurrentScreen("register")}
              className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
            >
              新規登録はこちら
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Registration Screen
  const RegisterScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 flex flex-col items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">新規登録</h1>
          <p className="text-gray-600 text-sm">アカウントを作成しましょう</p>
        </div>

        <div className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="お名前"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:outline-none"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="メールアドレス"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:outline-none"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="パスワード（8文字以上）"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:outline-none"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="パスワード確認"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:outline-none"
            />
          </div>

          <div className="flex items-start space-x-3">
            <input type="checkbox" className="mt-1" />
            <p className="text-xs text-gray-600">
              <span className="text-blue-600 underline cursor-pointer">
                利用規約
              </span>
              および
              <span className="text-blue-600 underline cursor-pointer">
                プライバシーポリシー
              </span>
              に同意します
            </p>
          </div>

          <button
            onClick={() => setCurrentScreen("home")}
            className="w-full bg-gradient-to-r from-blue-400 to-cyan-400 text-white py-3 rounded-xl font-semibold hover:from-blue-500 hover:to-cyan-500 transition-all"
          >
            新規登録
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100">
          <div className="text-center">
            <button
              onClick={() => setCurrentScreen("login")}
              className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
            >
              既にアカウントをお持ちの方はこちら
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Forgot Password Screen
  const ForgotPasswordScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 flex flex-col items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            パスワード再設定
          </h1>
          <p className="text-gray-600 text-sm">
            登録したメールアドレスを入力してください
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="メールアドレス"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:outline-none"
            />
          </div>
          <button
            onClick={() => setCurrentScreen("login")}
            className="w-full bg-gradient-to-r from-blue-400 to-cyan-400 text-white py-3 rounded-xl font-semibold hover:from-blue-500 hover:to-cyan-500 transition-all"
          >
            再設定メールを送信
          </button>

          <div className="text-center">
            <button
              onClick={() => setCurrentScreen("login")}
              className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
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
            この操作をすると、
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
    const monthDays = Array.from({ length: 31 }, (_, i) => i + 1);

    return (
      <div className="min-h-screen bg-gray-50 pb-20">
        <div className="bg-white shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">今日の記録</h1>
              <p className="text-sm text-blue-600">次回予測: 4月12日</p>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setIsEditMode(!isEditMode)}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                <Edit3 className="w-5 h-5 text-gray-600" />
              </button>
              <button
                onClick={() => setShowDateModal(true)}
                className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center shadow-lg"
              >
                <Plus className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>

          {/* Calendar Section */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900">カレンダー</h2>
              <div className="flex items-center space-x-4">
                <button className="p-2 rounded-full hover:bg-gray-200">
                  <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>
                <span className="text-lg font-semibold text-gray-800">
                  2024年3月
                </span>
                <button className="p-2 rounded-full hover:bg-gray-200">
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-4">
              <div className="grid grid-cols-7 gap-1 text-center mb-2">
                {["日", "月", "火", "水", "木", "金", "土"].map((day) => (
                  <div
                    key={day}
                    className="p-2 text-sm font-medium text-gray-600"
                  >
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-1">
                {monthDays.map((day) => {
                  const dateString = `2024-03-${String(day).padStart(2, "0")}`;
                  const isPeriodDay = recordedDates.includes(dateString);
                  const isToday = day === 15; // Mock today

                  return (
                    <div
                      key={day}
                      className={`h-10 w-10 rounded-lg flex items-center justify-center text-sm cursor-pointer transition-colors ${
                        isPeriodDay
                          ? "bg-red-200 text-red-800"
                          : isToday
                            ? "bg-blue-500 text-white"
                            : "hover:bg-gray-200"
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
        <div className="px-6 pb-6">
          <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              健康アドバイス
            </h3>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4">
              <p className="text-sm text-gray-700">
                今日は水分をしっかり摂取しましょう。軽い運動もおすすめです。
              </p>
            </div>
          </div>

          {/* Period History */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              直近6ヶ月の生理記録
            </h3>
            <div className="space-y-3">
              {[
                { start: "2024/3/15", end: "2024/3/19", cycle: "28日" },
                { start: "2024/2/16", end: "2024/2/20", cycle: "29日" },
                { start: "2024/1/18", end: "2024/1/22", cycle: "27日" },
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 pb-20">
      <div className="bg-white shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => setCurrentScreen("home")}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </button>
          <h1 className="text-xl font-bold text-gray-800">
            チャット相手を選択
          </h1>
          <div className="w-10"></div>
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 gap-4">
          {[
            {
              id: "prince",
              name: "王子様",
              emoji: "🤴",
              description: "優しく励ましてくれます",
            },
            {
              id: "mother",
              name: "お母さん",
              emoji: "👩",
              description: "温かく見守ってくれます",
            },
            {
              id: "grandmother",
              name: "おばあちゃん",
              emoji: "👵",
              description: "経験豊富で優しいです",
            },
            {
              id: "boyfriend",
              name: "彼氏",
              emoji: "👨",
              description: "理解を示してくれます",
            },
            {
              id: "nurse",
              name: "保健室の先生",
              emoji: "👩‍⚕️",
              description: "専門的なアドバイスをくれます",
            },
          ].map((character) => (
            <button
              key={character.id}
              onClick={() => {
                setSelectedCharacter(character.id);
                setCurrentScreen("chat");
              }}
              className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center space-x-4">
                <div className="text-4xl">{character.emoji}</div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {character.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {character.description}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  // Chat Screen
  const ChatScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 pb-20">
      <div className="bg-white shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => setCurrentScreen("characterSelection")}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </button>
          <h1 className="text-xl font-bold text-gray-800">
            {selectedCharacter === "prince" && "王子様"}
            {selectedCharacter === "mother" && "お母さん"}
            {selectedCharacter === "grandmother" && "おばあちゃん"}
            {selectedCharacter === "boyfriend" && "彼氏"}
            {selectedCharacter === "nurse" && "保健室の先生"}
          </h1>
          <div className="w-10"></div>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div className="bg-white rounded-2xl shadow-sm p-4">
          <div className="flex items-start space-x-3">
            <div className="text-2xl">
              {selectedCharacter === "prince" && "🤴"}
              {selectedCharacter === "mother" && "👩"}
              {selectedCharacter === "grandmother" && "👵"}
              {selectedCharacter === "boyfriend" && "👨"}
              {selectedCharacter === "nurse" && "👩‍⚕️"}
            </div>
            <div>
              <p className="text-sm text-gray-700">
                {selectedCharacter === "prince" &&
                  "お疲れ様、お姫様。今日��どんな一日でしたか？"}
                {selectedCharacter === "mother" &&
                  "お疲れ様、今日の調子はどうでしたか？"}
                {selectedCharacter === "grandmother" &&
                  "お疲れ様でした。体調はいかがですか？"}
                {selectedCharacter === "boyfriend" &&
                  "お疲れ様！今日はどうだった？"}
                {selectedCharacter === "nurse" &&
                  "こんにちは。今日の体調について教えてください。"}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-20 left-0 right-0 p-4 bg-white border-t border-gray-200">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="メッセージを入力..."
            className="flex-1 px-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:border-blue-400"
          />
          <button className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center">
            <span className="text-white">→</span>
          </button>
        </div>
      </div>
    </div>
  );

  // Settings Screen
  const SettingsScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 pb-20">
      <div className="bg-white shadow-sm p-6">
        <h1 className="text-2xl font-bold text-gray-800">設定</h1>
      </div>

      <div className="p-6">
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
          <div className="space-y-4">
            <button className="w-full flex items-center space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <User className="w-6 h-6 text-gray-600" />
              <span className="text-gray-800">プロフィール設定</span>
            </button>

            <button className="w-full flex items-center space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <Bell className="w-6 h-6 text-gray-600" />
              <span className="text-gray-800">通知設定</span>
            </button>

            <button className="w-full flex items-center space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <Shield className="w-6 h-6 text-gray-600" />
              <span className="text-gray-800">プライバシー設定</span>
            </button>

            <button className="w-full flex items-center space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <HelpCircle className="w-6 h-6 text-gray-600" />
              <span className="text-gray-800">ヘルプ・サポート</span>
            </button>

            <button className="w-full flex items-center space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <FileText className="w-6 h-6 text-gray-600" />
              <span className="text-gray-800">利用規約</span>
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6">
          <button
            onClick={() => setCurrentScreen("login")}
            className="w-full flex items-center space-x-4 p-4 hover:bg-red-50 rounded-lg transition-colors text-red-600"
          >
            <LogOut className="w-6 h-6" />
            <span>ログアウト</span>
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
              ? "text-blue-500"
              : "text-gray-500"
          }`}
        >
          <MessageCircle className="w-6 h-6" />
          <span className="text-xs font-medium">チャット</span>
        </button>

        <button
          onClick={() => setCurrentScreen("home")}
          className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-colors ${
            currentScreen === "home" ? "text-blue-500" : "text-gray-500"
          }`}
        >
          <Home className="w-6 h-6" />
          <span className="text-xs font-medium">ホーム</span>
        </button>

        <button
          onClick={() => setCurrentScreen("settings")}
          className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-colors ${
            currentScreen === "settings" ? "text-blue-500" : "text-gray-500"
          }`}
        >
          <User className="w-6 h-6" />
          <span className="text-xs font-medium">設定</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-100 min-h-screen max-w-md mx-auto">
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
