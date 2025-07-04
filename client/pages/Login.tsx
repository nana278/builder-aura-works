import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simple mock login - navigate to dashboard
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-app-blue-light via-blue-100 to-purple-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo and title */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-app-blue rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="w-10 h-10 text-white" fill="white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">PeriodCare</h1>
          <p className="text-gray-600 text-lg">あなたの健康をサポート</p>
        </div>

        {/* Login form */}
        <div className="bg-white rounded-3xl p-8 shadow-xl">
          <div className="space-y-6">
            <div>
              <Input
                type="email"
                placeholder="メールアドレス"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-14 text-lg rounded-2xl border-gray-200 placeholder:text-gray-400"
              />
            </div>

            <div>
              <Input
                type="password"
                placeholder="パスワード"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-14 text-lg rounded-2xl border-gray-200 placeholder:text-gray-400"
              />
            </div>

            <Button
              onClick={handleLogin}
              className="w-full h-14 text-lg font-medium rounded-2xl bg-gradient-to-r from-app-blue to-cyan-400 hover:from-app-blue-dark hover:to-cyan-500 text-white shadow-lg"
            >
              ログイン
            </Button>

            <div className="text-center">
              <Link
                to="/forgot-password"
                className="text-gray-600 hover:text-gray-800"
              >
                パスワードをお忘れの方はこちら
              </Link>
            </div>
          </div>
        </div>

        {/* Google login */}
        <div className="mt-6">
          <Button
            variant="outline"
            className="w-full h-14 text-lg rounded-2xl border-gray-200 hover:bg-gray-50"
          >
            Googleでログイン
          </Button>
        </div>

        {/* Sign up link */}
        <div className="text-center mt-6">
          <Link
            to="/signup"
            className="text-app-blue hover:text-app-blue-dark font-medium text-lg"
          >
            新規登録はこちら
          </Link>
        </div>

        <div className="text-center mt-4 text-sm text-gray-500">
          プライバシーポリシー等に同意の上ご利用ください
        </div>
      </div>
    </div>
  );
}
