import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function SymptomTracker() {
  const navigate = useNavigate();
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);

  const symptoms = [
    { id: "period-pain", name: "生理痛", emoji: "🩸" },
    { id: "headache", name: "頭痛", emoji: "🤕" },
    { id: "bloating", name: "お腹の張り", emoji: "🤰" },
    { id: "mood-changes", name: "気分の変化", emoji: "😤" },
    { id: "fatigue", name: "疲労感", emoji: "😴" },
    { id: "acne", name: "ニキビ", emoji: "😣" },
    { id: "chest-pain", name: "胸の張り", emoji: "💔" },
    { id: "nausea", name: "吐き気", emoji: "🤢" },
    { id: "dizziness", name: "めまい", emoji: "😵" },
    { id: "back-pain", name: "腰痛", emoji: "🦴" },
  ];

  const toggleSymptom = (symptomId: string) => {
    setSelectedSymptoms((prev) =>
      prev.includes(symptomId)
        ? prev.filter((id) => id !== symptomId)
        : [...prev, symptomId],
    );
  };

  const handleSave = () => {
    // Save symptoms logic here
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-app-pink-light via-pink-100 to-purple-100">
      <div className="max-w-md mx-auto bg-white min-h-screen">
        {/* Header */}
        <div className="bg-gradient-to-r from-app-pink to-pink-400 px-6 py-6 text-white">
          <div className="flex items-center mb-4">
            <Button
              variant="ghost"
              onClick={() => navigate("/dashboard")}
              className="p-0 h-auto text-white hover:bg-white/20 mr-4"
            >
              <ArrowLeft className="w-6 h-6" />
            </Button>
            <h1 className="text-2xl font-bold">症状記録</h1>
          </div>
          <p className="text-white/90">今日感じている症状を選択してください</p>
        </div>

        {/* Symptoms Grid */}
        <div className="p-6">
          <div className="grid grid-cols-2 gap-4 mb-8">
            {symptoms.map((symptom) => (
              <Button
                key={symptom.id}
                variant="outline"
                onClick={() => toggleSymptom(symptom.id)}
                className={`h-24 flex flex-col items-center justify-center rounded-2xl border-2 transition-all ${
                  selectedSymptoms.includes(symptom.id)
                    ? "border-app-pink bg-app-pink-light text-app-pink"
                    : "border-gray-200 hover:border-app-pink/50"
                }`}
              >
                <div className="text-2xl mb-2">{symptom.emoji}</div>
                <div className="text-sm font-medium">{symptom.name}</div>
              </Button>
            ))}
          </div>

          {/* Save Button */}
          <Button
            onClick={handleSave}
            className="w-full h-14 text-lg font-medium rounded-2xl bg-gradient-to-r from-app-pink to-pink-400 hover:from-pink-600 hover:to-pink-500 text-white"
          >
            記録を保存 ({selectedSymptoms.length}個の症状)
          </Button>
        </div>
      </div>
    </div>
  );
}
