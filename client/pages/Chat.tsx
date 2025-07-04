import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, ArrowLeft } from "lucide-react";
import BottomNavigation from "@/components/ui/BottomNavigation";
import CharacterSelector from "@/components/ui/CharacterSelector";

type Character = {
  id: string;
  name: string;
  description: string;
  emoji: string;
  color: string;
};

type Message = {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
};

export default function Chat() {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null,
  );
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");

  const characters: Character[] = [
    {
      id: "prince",
      name: "王子様",
      description: "優しく気遣ってくれる王子様",
      emoji: "👑",
      color: "from-blue-400 to-purple-400",
    },
    {
      id: "mother",
      name: "お母さん",
      description: "温かく包み込んでくれるお母さん",
      emoji: "👩‍👧",
      color: "from-pink-400 to-rose-400",
    },
    {
      id: "grandmother",
      name: "おばあちゃん",
      description: "経験豊富で知恵のあるおばあちゃん",
      emoji: "👵",
      color: "from-amber-400 to-orange-400",
    },
    {
      id: "nurse",
      name: "保健室の先生",
      description: "医学的知識豊富な保健室の先生",
      emoji: "👩‍⚕️",
      color: "from-green-400 to-teal-400",
    },
    {
      id: "boyfriend",
      name: "彼氏",
      description: "理解のある優しい彼氏",
      emoji: "💝",
      color: "from-red-400 to-pink-400",
    },
  ];

  const handleCharacterSelect = (character: Character) => {
    setSelectedCharacter(character);
    // Add welcome message from character
    const welcomeMessage: Message = {
      id: Date.now().toString(),
      text: getWelcomeMessage(character),
      isUser: false,
      timestamp: new Date(),
    };
    setMessages([welcomeMessage]);
  };

  const getWelcomeMessage = (character: Character): string => {
    const messages = {
      prince:
        "こんにちは、お���様。今日はどんなことでお悩みですか？僕があなたの気持ちを大切にお聞きします。",
      mother:
        "お疲れさま、大丈夫よ。何でもお母さんに話してみて。一緒に考えましょうね。",
      grandmother:
        "あらあら、どうしたの？おばあちゃんがいるから安心しなさい。何でも聞いてあげるからね。",
      nurse:
        "こんにちは。体調や気持ちのことで気になることがあれば、遠慮なく相談してくださいね。",
      boyfriend:
        "お疲れさま！何か心配事があるの？僕でよければ何でも聞くよ。君の気持ちを大切にしたいんだ。",
    };
    return (
      messages[character.id as keyof typeof messages] ||
      "こんにちは！何かお手伝いできることはありますか？"
    );
  };

  const sendMessage = () => {
    if (!inputMessage.trim() || !selectedCharacter) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");

    // Simulate character response
    setTimeout(() => {
      const responseMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getCharacterResponse(selectedCharacter, inputMessage),
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, responseMessage]);
    }, 1000);
  };

  const getCharacterResponse = (
    character: Character,
    userInput: string,
  ): string => {
    // Simple response logic - in a real app, this would be more sophisticated
    const responses = {
      prince: [
        "お姫様の気持ちはとてもよく分かります。どんな時も君の味方でいたいと思っています。",
        "君の健康は僕にとってとても大切です。無理をしないでくださいね。",
        "そんな時は休息を取ることが一番です。僕があなたを支えますから。",
      ],
      mother: [
        "そうよね、そういう時もあるのよ。お母さんも同じ経験があるから気持ちが分かるわ。",
        "体を温めて、ゆっくり休むのが一番よ。無理は禁物よ。",
        "女性の体はデリケートなの。自分を大切にしてね。",
      ],
      grandmother: [
        "昔からそういう時は温かいお茶を飲んで、お腹を温めるのが一番よ。",
        "おばあちゃんの時代もそうだったの。女性は強いのよ、大丈夫。",
        "つらい時は無理をしないで、体の声をちゃんと聞くのよ。",
      ],
      nurse: [
        "その症状については適切な対処法がありますよ。まずは十分な休息を取ってください。",
        "規則正しい生活と栄養バランスの取れた食事が大切です。",
        "症状が続く場合は専門医に相談することをお勧めします。",
      ],
      boyfriend: [
        "君がつらい時は僕もつらいよ。何かできることがあれば遠慮なく言ってね。",
        "君の体調を第一に考えよう。僕にできるサポートがあれば何でも言って。",
        "一人で抱え込まないで。僕たちは一緒に乗り越えられるから。",
      ],
    };

    const characterResponses =
      responses[character.id as keyof typeof responses] || responses.nurse;
    return characterResponses[
      Math.floor(Math.random() * characterResponses.length)
    ];
  };

  if (!selectedCharacter) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-app-blue-light via-blue-100 to-purple-100">
        <div className="max-w-md mx-auto bg-white min-h-screen">
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              相談相手を選んでください
            </h1>
            <CharacterSelector
              characters={characters}
              onSelect={handleCharacterSelect}
            />
          </div>
          <BottomNavigation currentPage="chat" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-app-blue-light via-blue-100 to-purple-100">
      <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col">
        {/* Header */}
        <div
          className={`bg-gradient-to-r ${selectedCharacter.color} px-6 py-4 text-white`}
        >
          <div className="flex items-center">
            <Button
              variant="ghost"
              onClick={() => setSelectedCharacter(null)}
              className="p-0 h-auto text-white hover:bg-white/20 mr-4"
            >
              <ArrowLeft className="w-6 h-6" />
            </Button>
            <div className="flex items-center">
              <span className="text-2xl mr-3">{selectedCharacter.emoji}</span>
              <div>
                <h1 className="text-xl font-bold">{selectedCharacter.name}</h1>
                <p className="text-sm text-white/80">
                  {selectedCharacter.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 space-y-4 overflow-y-auto">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                  message.isUser
                    ? "bg-app-blue text-white"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                <p className="text-sm">{message.text}</p>
                <p
                  className={`text-xs mt-1 ${message.isUser ? "text-blue-100" : "text-gray-500"}`}
                >
                  {message.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="p-4 border-t">
          <div className="flex space-x-2">
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="メッセージを入力..."
              className="flex-1 rounded-full"
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            />
            <Button
              onClick={sendMessage}
              size="icon"
              className="rounded-full bg-app-blue hover:bg-app-blue-dark"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <BottomNavigation currentPage="chat" />
      </div>
    </div>
  );
}
