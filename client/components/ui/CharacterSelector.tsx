import { Button } from "@/components/ui/button";

type Character = {
  id: string;
  name: string;
  description: string;
  emoji: string;
  color: string;
};

interface CharacterSelectorProps {
  characters: Character[];
  onSelect: (character: Character) => void;
}

const CharacterAvatar = ({ character }: { character: any }) => {
  const getCharacterAvatar = (id: string) => {
    switch (id) {
      case "prince":
        return (
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center shadow-lg border-4 border-white relative overflow-hidden">
            {/* Crown */}
            <div className="absolute top-1 text-yellow-300 text-xs">👑</div>
            {/* Face */}
            <div className="bg-gradient-to-b from-orange-200 to-orange-300 w-10 h-10 rounded-full relative">
              {/* Eyes */}
              <div className="absolute top-3 left-2 w-1 h-1 bg-gray-800 rounded-full"></div>
              <div className="absolute top-3 right-2 w-1 h-1 bg-gray-800 rounded-full"></div>
              {/* Smile */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-1 border-b-2 border-gray-800 rounded-b-full"></div>
              {/* Hair */}
              <div className="absolute -top-1 -left-1 w-12 h-6 bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-t-full"></div>
            </div>
          </div>
        );
      case "mother":
        return (
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-300 to-rose-400 flex items-center justify-center shadow-lg border-4 border-white relative overflow-hidden">
            {/* Face */}
            <div className="bg-gradient-to-b from-orange-200 to-orange-300 w-12 h-12 rounded-full relative">
              {/* Eyes */}
              <div className="absolute top-4 left-3 w-1 h-1 bg-gray-800 rounded-full"></div>
              <div className="absolute top-4 right-3 w-1 h-1 bg-gray-800 rounded-full"></div>
              {/* Smile */}
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-3 h-1 border-b-2 border-gray-800 rounded-b-full"></div>
              {/* Hair */}
              <div className="absolute -top-1 -left-1 w-14 h-8 bg-gradient-to-r from-amber-600 to-amber-700 rounded-t-full"></div>
              {/* Earrings */}
              <div className="absolute top-6 -left-1 w-1 h-2 bg-pink-400 rounded-full"></div>
              <div className="absolute top-6 -right-1 w-1 h-2 bg-pink-400 rounded-full"></div>
            </div>
          </div>
        );
      case "grandmother":
        return (
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-300 to-orange-500 flex items-center justify-center shadow-lg border-4 border-white relative overflow-hidden">
            {/* Face */}
            <div className="bg-gradient-to-b from-orange-200 to-orange-300 w-12 h-12 rounded-full relative">
              {/* Eyes */}
              <div className="absolute top-4 left-3 w-1 h-1 bg-gray-800 rounded-full"></div>
              <div className="absolute top-4 right-3 w-1 h-1 bg-gray-800 rounded-full"></div>
              {/* Smile */}
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-3 h-1 border-b-2 border-gray-800 rounded-b-full"></div>
              {/* Hair */}
              <div className="absolute -top-1 -left-1 w-14 h-8 bg-gradient-to-r from-gray-300 to-gray-400 rounded-t-full"></div>
              {/* Glasses */}
              <div className="absolute top-3 left-2 w-2 h-2 border border-gray-600 rounded-full bg-white/20"></div>
              <div className="absolute top-3 right-2 w-2 h-2 border border-gray-600 rounded-full bg-white/20"></div>
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-1 h-0.5 bg-gray-600"></div>
            </div>
          </div>
        );
      case "nurse":
        return (
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-300 to-teal-400 flex items-center justify-center shadow-lg border-4 border-white relative overflow-hidden">
            {/* Nurse cap */}
            <div className="absolute top-0 w-12 h-4 bg-white rounded-t-full border-b-2 border-red-400"></div>
            <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-red-400 rounded-full"></div>
            {/* Face */}
            <div className="bg-gradient-to-b from-orange-200 to-orange-300 w-10 h-10 rounded-full relative mt-2">
              {/* Eyes */}
              <div className="absolute top-3 left-2 w-1 h-1 bg-gray-800 rounded-full"></div>
              <div className="absolute top-3 right-2 w-1 h-1 bg-gray-800 rounded-full"></div>
              {/* Smile */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-1 border-b-2 border-gray-800 rounded-b-full"></div>
              {/* Hair */}
              <div className="absolute -top-1 -left-1 w-12 h-6 bg-gradient-to-r from-amber-600 to-amber-700 rounded-t-full"></div>
            </div>
          </div>
        );
      case "boyfriend":
        return (
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-300 to-pink-500 flex items-center justify-center shadow-lg border-4 border-white relative overflow-hidden">
            {/* Face */}
            <div className="bg-gradient-to-b from-orange-200 to-orange-300 w-12 h-12 rounded-full relative">
              {/* Eyes */}
              <div className="absolute top-4 left-3 w-1 h-1 bg-gray-800 rounded-full"></div>
              <div className="absolute top-4 right-3 w-1 h-1 bg-gray-800 rounded-full"></div>
              {/* Smile */}
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-3 h-1 border-b-2 border-gray-800 rounded-b-full"></div>
              {/* Hair */}
              <div className="absolute -top-1 -left-1 w-14 h-8 bg-gradient-to-r from-gray-700 to-gray-800 rounded-t-full"></div>
              {/* Heart accent */}
              <div className="absolute top-2 right-0 text-red-400 text-xs">
                💝
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div
            className={`w-16 h-16 rounded-full bg-gradient-to-br ${character.color} flex items-center justify-center shadow-lg border-4 border-white`}
          >
            <span className="text-3xl">{character.emoji}</span>
          </div>
        );
    }
  };

  return (
    <div className="relative mr-6">{getCharacterAvatar(character.id)}</div>
  );
};

export default function CharacterSelector({
  characters,
  onSelect,
}: CharacterSelectorProps) {
  return (
    <div className="space-y-6">
      {characters.map((character) => (
        <Button
          key={character.id}
          onClick={() => onSelect(character)}
          variant="outline"
          className="w-full h-28 justify-start p-6 rounded-3xl border-2 border-gray-200 hover:border-app-blue hover:bg-gradient-to-r hover:from-white hover:to-app-blue-light/30 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg bg-white shadow-sm group"
        >
          <div className="flex items-center w-full">
            <CharacterAvatar character={character} />
            <div className="flex-1 text-left">
              <div className="text-xl font-bold text-gray-800 mb-2 group-hover:text-app-blue transition-colors">
                {character.name}
              </div>
              <div className="text-sm text-gray-600 leading-relaxed">
                {character.description}
              </div>
            </div>
            {/* Arrow indicator */}
            <div className="ml-4 text-gray-400 group-hover:text-app-blue transition-colors">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </Button>
      ))}
    </div>
  );
}
