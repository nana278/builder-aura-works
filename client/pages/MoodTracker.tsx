import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function MoodTracker() {
  const navigate = useNavigate();
  const [selectedMoods, setSelectedMoods] = useState<string[]>([]);

  const moods = [
    { id: "happy", name: "元気", emoji: "😊" },
    { id: "tired", name: "疲れ気味", emoji: "😴" },
    { id: "energetic", name: "活力的", emoji: "💪" },
    { id: "calm", name: "落ち着いている", emoji: "😌" },
    { id: "stressed", name: "ストレス", emoji: "😰" },
    { id: "sad", name: "憂鬱", emoji: "😢" },
    { id: "anxious", name: "不安", emoji: "😟" },
    { id: "excited", name: "興奮", emoji: "🤗" },
    { id: "peaceful", name: "穏やか", emoji: "🕊️" },
    { id: "motivated", name: "やる気", emoji: "🔥" },
  ];

  const toggleMood = (moodId: string) => {
    setSelectedMoods((prev) =>
      prev.includes(moodId)
        ? prev.filter((id) => id !== moodId)
        : [...prev, moodId],
    );
  };

  const handleSave = () => {
    // Save mood logic here
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-app-blue-light via-blue-100 to-purple-100">
      <div className="max-w-md mx-auto bg-white min-h-screen">
        {/* Header */}
        <div className="bg-gradient-to-r from-app-blue to-cyan-400 px-6 py-6 text-white">
          <div className="flex items-center mb-4">
            <Button
              variant="ghost"
              onClick={() => navigate("/dashboard")}
              className="p-0 h-auto text-white hover:bg-white/20 mr-4"
            >
              <ArrowLeft className="w-6 h-6" />
            </Button>
            <h1 className="text-2xl font-bold">体調記録</h1>
          </div>
          <p className="text-white/90">今日の気分や体調はいかがですか？</p>
        </div>

        {/* Mood Grid */}
        <div className="p-6">
          <div className="grid grid-cols-2 gap-4 mb-8">
            {moods.map((mood) => (
              <Button
                key={mood.id}
                variant="outline"
                onClick={() => toggleMood(mood.id)}
                className={`h-24 flex flex-col items-center justify-center rounded-2xl border-2 transition-all ${
                  selectedMoods.includes(mood.id)
                    ? "border-app-blue bg-app-blue-light text-app-blue"
                    : "border-gray-200 hover:border-app-blue/50"
                }`}
              >
                <div className="text-2xl mb-2">{mood.emoji}</div>
                <div className="text-sm font-medium">{mood.name}</div>
              </Button>
            ))}
          </div>

          {/* Energy Level */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              エネルギーレベル
            </h3>
            <div className="flex justify-between items-center bg-gray-50 rounded-2xl p-4">
              <span className="text-sm text-gray-600">低い</span>
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map((level) => (
                  <button
                    key={level}
                    className="w-8 h-8 rounded-full bg-gray-200 hover:bg-app-blue hover:text-white transition-colors text-sm font-medium"
                  >
                    {level}
                  </button>
                ))}
              </div>
              <span className="text-sm text-gray-600">高い</span>
            </div>
          </div>

          {/* Sleep Quality */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              睡眠の質
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: "poor", label: "悪い", emoji: "😴" },
                { id: "average", label: "普通", emoji: "😐" },
                { id: "good", label: "良い", emoji: "😊" },
              ].map((quality) => (
                <Button
                  key={quality.id}
                  variant="outline"
                  className="h-16 flex flex-col items-center justify-center rounded-2xl border-2 hover:border-app-blue/50"
                >
                  <div className="text-xl mb-1">{quality.emoji}</div>
                  <div className="text-xs">{quality.label}</div>
                </Button>
              ))}
            </div>
          </div>

          {/* Save Button */}
          <Button
            onClick={handleSave}
            className="w-full h-14 text-lg font-medium rounded-2xl bg-gradient-to-r from-app-blue to-cyan-400 hover:from-app-blue-dark hover:to-cyan-500 text-white"
          >
            記録を保存 ({selectedMoods.length}個の気分)
          </Button>
        </div>
      </div>
    </div>
  );
}
