import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export default function SignUp() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-app-blue-light via-blue-100 to-purple-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-app-blue rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="w-10 h-10 text-white" fill="white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">PeriodCare</h1>
          <p className="text-gray-600 text-lg">新規登録</p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-xl">
          <div className="text-center py-12">
            <div className="text-6xl mb-4">👋</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              新規登録機能
            </h2>
            <p className="text-gray-600 mb-6">新規登録機能は現在開発中です。</p>
            <Link to="/">
              <Button className="bg-app-blue hover:bg-app-blue-dark text-white">
                ログインページに戻る
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
