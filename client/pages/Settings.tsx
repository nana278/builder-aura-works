import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  ArrowLeft,
  User,
  Bell,
  Shield,
  HelpCircle,
  LogOut,
} from "lucide-react";

export default function Settings() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-app-blue-light via-blue-100 to-purple-100">
      <div className="max-w-md mx-auto bg-white min-h-screen">
        {/* Header */}
        <div className="bg-white px-6 py-6 border-b">
          <div className="flex items-center">
            <Button
              variant="ghost"
              onClick={() => navigate("/dashboard")}
              className="p-0 h-auto text-gray-600 hover:text-gray-800 mr-4"
            >
              <ArrowLeft className="w-6 h-6" />
            </Button>
            <h1 className="text-2xl font-bold text-gray-800">設定</h1>
          </div>
        </div>

        {/* Profile Section */}
        <div className="p-6">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-app-blue rounded-full flex items-center justify-center mr-4">
              <User className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                ユーザー名
              </h2>
              <p className="text-sm text-gray-600">user@example.com</p>
            </div>
          </div>

          {/* Profile Settings */}
          <div className="space-y-4 mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              アカウント
            </h3>

            <Button
              variant="outline"
              className="w-full justify-start h-14 rounded-2xl border-gray-200"
            >
              <User className="w-5 h-5 mr-3 text-gray-600" />
              <span className="text-gray-800">プロフィール編集</span>
            </Button>

            <Button
              variant="outline"
              className="w-full justify-start h-14 rounded-2xl border-gray-200"
            >
              <Shield className="w-5 h-5 mr-3 text-gray-600" />
              <span className="text-gray-800">プライバシー設定</span>
            </Button>
          </div>

          {/* Notification Settings */}
          <div className="space-y-4 mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">通知</h3>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
              <div className="flex items-center">
                <Bell className="w-5 h-5 mr-3 text-gray-600" />
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    生理予測通知
                  </p>
                  <p className="text-xs text-gray-600">
                    予定日の3日前にお知らせ
                  </p>
                </div>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
              <div className="flex items-center">
                <Bell className="w-5 h-5 mr-3 text-gray-600" />
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    記録リマインダー
                  </p>
                  <p className="text-xs text-gray-600">毎日の記録をお知らせ</p>
                </div>
              </div>
              <Switch />
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
              <div className="flex items-center">
                <Bell className="w-5 h-5 mr-3 text-gray-600" />
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    健康アドバイス
                  </p>
                  <p className="text-xs text-gray-600">週1回の健康情報</p>
                </div>
              </div>
              <Switch defaultChecked />
            </div>
          </div>

          {/* Help & Support */}
          <div className="space-y-4 mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              サポート
            </h3>

            <Button
              variant="outline"
              className="w-full justify-start h-14 rounded-2xl border-gray-200"
            >
              <HelpCircle className="w-5 h-5 mr-3 text-gray-600" />
              <span className="text-gray-800">ヘルプ・FAQ</span>
            </Button>

            <Button
              variant="outline"
              className="w-full justify-start h-14 rounded-2xl border-gray-200"
            >
              <Shield className="w-5 h-5 mr-3 text-gray-600" />
              <span className="text-gray-800">プライバシーポリシー</span>
            </Button>
          </div>

          {/* Logout */}
          <Button
            onClick={() => navigate("/")}
            variant="outline"
            className="w-full justify-start h-14 rounded-2xl border-red-200 text-red-600 hover:bg-red-50"
          >
            <LogOut className="w-5 h-5 mr-3" />
            <span>ログアウト</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
