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
        "こんにちは、美しき姫君...💫 今日はどんなことで君の心が曇っているのかな？こ��僕が、君の全てを受け止めよう。遠慮はいらないよ✨",
      mother:
        "あら、お疲れさま💕 お母さんのところへよく来てくれたわね。何でも話してちょうだい。あなたの気持ち、全部受け止めてあげるから💖",
      grandmother:
        "あらあら、可愛い子がきたのね🌸 おばあちゃんは何でも知ってるのよ。心配事があるなら、遠慮しないで話してちょうだい。きっと解決策があるわ✨",
      nurse:
        "いらっしゃいませ💊 体調のことでも心のことでも、何でも相談してくださいね。専門的な知識でサポートします。一人で抱え込まないで💕",
      boyfriend:
        "やあ、君💝 今日も可愛いね...何か悩みがあるみたいだけど、僕でよければ話を聞かせてよ。君のことを想っているから、力になりたいんだ✨",
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
        "君の気持ち、僕にはよく分かるよ✨ どんな時でも、この僕が君の騎士として守り抜こう。君は一人じゃない💫",
        "君の健康は僕の宝物なんだ💎 無理をしないで、ゆっくり休んでくれ。君の笑顔が一番大切だから✨",
        "そんな時こそ、僕に甘えてくれ💕 君を支えることが、僕の使命なのだから...🌟",
        "美しき君が辛そうにしているなんて、僕の心も痛むよ💔 一緒に乗り越えよう、愛しい人よ✨",
      ],
      mother: [
        "そ��よね、そういう時もあるのよ💕 お母さんも同じ道を歩んできたから、あなたの気持ちがよく分かるわ🌸",
        "体を温めて、ゆっくり休むのが一番よ💖 お母さんがいつでもそばにいるからね✨",
        "女性の体はとても繊細で美しいの🌹 自分を大切にして、愛でてあげてね💕",
        "辛い時は無理しないで、お母さんに甘えなさい💝 あなたは大切な大切な娘なのだから🌸",
      ],
      grandmother: [
        "昔からそういう時は温かいお茶とゆっくりした時間が一番よ🍵 おばあちゃんの知恵を試してみなさい✨",
        "おばあちゃんの時代もそうだったのよ🌸 女性は強くて美しい存在なの。自信を持ちなさい💕",
        "つらい時は無理をしないで、自分の心と体の声をよく聞くのよ💖 それが女性の知恵なの✨",
        "可愛い子、心配しないで🌺 時が解決してくれることもあるのよ。今は休息が一番大切💫",
      ],
      nurse: [
        "その症状について、適切なケア方法をお教えしますね💊 まずはゆっくり休息を取ることが大切です✨",
        "規則正しい生活と栄養バ���ンスを整えましょう🍎 あなたの健康が私の願いです💕",
        "症状が続くようでしたら、専門医への相談をお勧めします🏥 一人で悩まないでくださ���ね💖",
        "女性の体はとても複雑で繊細です🌸 自分を労わることを忘れないでくださいね✨",
      ],
      boyfriend: [
        "君がつらい時は、僕も胸が痛むよ💔 何でもできることがあれば、遠慮なく言ってくれ💕",
        "君の体調が一番大切だ✨ 僕にできることがあれば、何でもするから安心して💝",
        "一人で抱え込まないで、僕がそばにいるから💖 二人で一緒に乗り越えよう🌟",
        "君の笑顔が僕の幸せなんだ😊 早く元気になって、また君の素敵な笑顔を見せてくれ💕",
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
      <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 relative overflow-hidden">
        {/* Sparkle decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 text-pink-300 text-2xl animate-pulse">
            ✨
          </div>
          <div className="absolute top-20 right-16 text-purple-300 text-xl animate-bounce">
            💫
          </div>
          <div className="absolute bottom-32 left-8 text-blue-300 text-lg animate-pulse">
            ⭐
          </div>
          <div className="absolute bottom-40 right-12 text-pink-300 text-2xl animate-bounce">
            💖
          </div>
        </div>

        <div className="max-w-md mx-auto bg-white/90 backdrop-blur-sm min-h-screen">
          <div className="p-6">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-3">
                💕 恋する相談室 💕
              </h1>
              <p className="text-lg text-gray-600">どなたとお話ししますか？</p>
            </div>
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
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 relative overflow-hidden">
      {/* Romantic background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-4 left-4 text-pink-300 text-sm animate-pulse">
          💕
        </div>
        <div className="absolute top-12 right-8 text-purple-300 text-xs animate-bounce">
          ✨
        </div>
        <div className="absolute top-24 left-12 text-blue-300 text-sm animate-pulse">
          ⭐
        </div>
        <div className="absolute top-32 right-16 text-pink-300 text-xs animate-bounce">
          🌸
        </div>
        <div className="absolute bottom-32 left-6 text-purple-300 text-sm animate-pulse">
          💫
        </div>
        <div className="absolute bottom-40 right-10 text-blue-300 text-xs animate-bounce">
          💖
        </div>
      </div>

      <div className="max-w-md mx-auto bg-white/95 backdrop-blur-sm min-h-screen flex flex-col shadow-2xl">
        {/* Otome Game Header */}
        <div
          className={`bg-gradient-to-r ${selectedCharacter.color} px-6 py-6 text-white relative overflow-hidden`}
        >
          {/* Decorative elements */}
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-2 right-4 text-white/30 text-lg">✨</div>
          <div className="absolute bottom-2 left-8 text-white/30 text-sm">
            💖
          </div>

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-2">
              <Button
                variant="ghost"
                onClick={() => setSelectedCharacter(null)}
                className="p-2 h-auto text-white hover:bg-white/20 rounded-full"
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div className="flex items-center text-white/80">
                <span className="text-sm mr-2">💬</span>
                <span className="text-sm">チャット中</span>
              </div>
            </div>

            <div className="flex items-center">
              <div className="relative">
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-br ${selectedCharacter.color} flex items-center justify-center border-4 border-white/30 shadow-lg`}
                >
                  <span className="text-3xl">{selectedCharacter.emoji}</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-white flex items-center justify-center">
                  <span className="text-xs">💫</span>
                </div>
              </div>
              <div className="ml-4">
                <h1 className="text-2xl font-bold drop-shadow-sm">
                  {selectedCharacter.name}
                </h1>
                <p className="text-sm text-white/90 italic">
                  {selectedCharacter.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Otome Game Messages */}
        <div className="flex-1 p-4 space-y-6 overflow-y-auto bg-gradient-to-b from-pink-50/50 to-purple-50/50">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isUser ? "justify-end" : "justify-start"} items-end space-x-2`}
            >
              {!message.isUser && (
                <div className="flex-shrink-0">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${selectedCharacter.color} flex items-center justify-center border-2 border-white shadow-lg`}
                  >
                    <span className="text-lg">{selectedCharacter.emoji}</span>
                  </div>
                </div>
              )}

              <div className="max-w-xs lg:max-w-md relative">
                {!message.isUser && (
                  <div className="mb-1">
                    <span className="text-sm font-semibold text-gray-700 px-3">
                      {selectedCharacter.name}
                    </span>
                  </div>
                )}

                <div
                  className={`relative px-6 py-4 rounded-3xl shadow-lg ${
                    message.isUser
                      ? "bg-gradient-to-r from-app-blue to-cyan-400 text-white ml-4"
                      : "bg-white text-gray-800 border-2 border-pink-100 mr-4"
                  }`}
                >
                  {/* Speech bubble tail */}
                  <div
                    className={`absolute top-4 w-4 h-4 transform rotate-45 ${
                      message.isUser
                        ? "bg-app-blue -right-1"
                        : "bg-white border-r-2 border-b-2 border-pink-100 -left-1"
                    }`}
                  ></div>

                  <p className="text-base leading-relaxed relative z-10">
                    {message.text}
                  </p>

                  {!message.isUser && (
                    <div className="absolute -top-2 -right-2 text-pink-400 text-sm animate-pulse">
                      💕
                    </div>
                  )}
                </div>

                <p
                  className={`text-xs mt-1 px-3 ${
                    message.isUser
                      ? "text-right text-gray-500"
                      : "text-left text-gray-500"
                  }`}
                >
                  {message.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>

              {message.isUser && (
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-app-blue to-cyan-400 flex items-center justify-center border-2 border-white shadow-lg">
                    <span className="text-lg">👤</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Otome Game Input */}
        <div className="p-4 bg-white/80 backdrop-blur-sm border-t border-pink-100">
          <div className="flex space-x-3 items-center">
            <div className="flex-1 relative">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="心の想いを伝えて..."
                className="rounded-full border-2 border-pink-200 bg-white/90 text-gray-800 placeholder:text-gray-500 pl-6 pr-12 py-3 text-base focus:border-pink-300 focus:ring-pink-200"
                onKeyPress={(e) => e.key === "Enter" && sendMessage()}
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-pink-300">
                💬
              </div>
            </div>
            <Button
              onClick={sendMessage}
              size="icon"
              className={`rounded-full w-12 h-12 bg-gradient-to-r ${selectedCharacter.color} hover:shadow-lg transform hover:scale-105 transition-all duration-200 border-2 border-white shadow-md`}
            >
              <Send className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <BottomNavigation currentPage="chat" />
      </div>
    </div>
  );
}
