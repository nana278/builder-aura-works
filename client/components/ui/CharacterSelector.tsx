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
            {/* Background sparkles */}
            <div className="absolute top-2 left-2 w-1 h-1 bg-yellow-300 rounded-full animate-pulse"></div>
            <div className="absolute bottom-3 right-2 w-0.5 h-0.5 bg-white rounded-full animate-pulse"></div>

            {/* Face base - larger and more anime-like */}
            <div className="bg-gradient-to-b from-orange-100 to-orange-200 w-11 h-11 rounded-full relative border border-orange-300">
              {/* Hair - blonde flowing */}
              <div className="absolute -top-2 -left-2 w-15 h-8 bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 rounded-t-full transform rotate-3"></div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-full transform -rotate-12"></div>

              {/* Crown */}
              <div className="absolute -top-1 left-2 w-6 h-3 bg-gradient-to-r from-yellow-400 to-yellow-500 border border-yellow-600">
                <div className="absolute top-0 left-1 w-1 h-1 bg-yellow-300 rounded-full"></div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-yellow-300 rounded-full"></div>
                <div className="absolute top-0 right-1 w-1 h-1 bg-yellow-300 rounded-full"></div>
              </div>

              {/* Large anime eyes */}
              <div className="absolute top-3 left-2 w-2 h-2 bg-blue-500 rounded-full border border-blue-700">
                <div className="absolute top-0 left-0 w-1 h-1 bg-white rounded-full"></div>
                <div className="absolute bottom-0 right-0 w-0.5 h-0.5 bg-blue-300 rounded-full"></div>
              </div>
              <div className="absolute top-3 right-2 w-2 h-2 bg-blue-500 rounded-full border border-blue-700">
                <div className="absolute top-0 left-0 w-1 h-1 bg-white rounded-full"></div>
                <div className="absolute bottom-0 right-0 w-0.5 h-0.5 bg-blue-300 rounded-full"></div>
              </div>

              {/* Nose */}
              <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-0.5 h-0.5 bg-orange-300 rounded-full"></div>

              {/* Smile */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-1.5 border-b-2 border-red-400 rounded-b-full"></div>

              {/* Blush */}
              <div className="absolute top-4 left-1 w-1 h-1 bg-pink-300 rounded-full opacity-60"></div>
              <div className="absolute top-4 right-1 w-1 h-1 bg-pink-300 rounded-full opacity-60"></div>
            </div>
          </div>
        );

      case "mother":
        return (
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-300 to-rose-400 flex items-center justify-center shadow-lg border-4 border-white relative overflow-hidden">
            {/* Face base */}
            <div className="bg-gradient-to-b from-orange-100 to-orange-200 w-11 h-11 rounded-full relative border border-orange-300">
              {/* Hair - warm brown */}
              <div className="absolute -top-2 -left-2 w-15 h-9 bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 rounded-t-full"></div>
              <div className="absolute -top-1 left-9 w-4 h-4 bg-gradient-to-r from-amber-600 to-amber-700 rounded-full"></div>

              {/* Gentle eyes */}
              <div className="absolute top-3 left-2 w-2 h-1.5 bg-amber-800 rounded-full border border-amber-900">
                <div className="absolute top-0 left-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
              </div>
              <div className="absolute top-3 right-2 w-2 h-1.5 bg-amber-800 rounded-full border border-amber-900">
                <div className="absolute top-0 left-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
              </div>

              {/* Eyebrows */}
              <div className="absolute top-2.5 left-2 w-1.5 h-0.5 bg-amber-700 rounded-full"></div>
              <div className="absolute top-2.5 right-2 w-1.5 h-0.5 bg-amber-700 rounded-full"></div>

              {/* Warm smile */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-1.5 border-b-2 border-red-400 rounded-b-full"></div>

              {/* Blush */}
              <div className="absolute top-4 left-1 w-1.5 h-1 bg-pink-300 rounded-full opacity-60"></div>
              <div className="absolute top-4 right-1 w-1.5 h-1 bg-pink-300 rounded-full opacity-60"></div>

              {/* Small earrings */}
              <div className="absolute top-5 -left-0.5 w-1 h-1 bg-pink-400 rounded-full"></div>
              <div className="absolute top-5 -right-0.5 w-1 h-1 bg-pink-400 rounded-full"></div>
            </div>
          </div>
        );

      case "grandmother":
        return (
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-300 to-orange-500 flex items-center justify-center shadow-lg border-4 border-white relative overflow-hidden">
            {/* Face base */}
            <div className="bg-gradient-to-b from-orange-100 to-orange-200 w-11 h-11 rounded-full relative border border-orange-300">
              {/* Gray hair in bun */}
              <div className="absolute -top-2 -left-2 w-15 h-8 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 rounded-t-full"></div>
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full"></div>

              {/* Glasses */}
              <div className="absolute top-3 left-1.5 w-2.5 h-2 border-2 border-gray-600 rounded-full bg-white/30"></div>
              <div className="absolute top-3 right-1.5 w-2.5 h-2 border-2 border-gray-600 rounded-full bg-white/30"></div>
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-1 h-0.5 bg-gray-600"></div>

              {/* Kind eyes behind glasses */}
              <div className="absolute top-3.5 left-2 w-1.5 h-1.5 bg-brown-600 rounded-full">
                <div className="absolute top-0 left-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
              </div>
              <div className="absolute top-3.5 right-2 w-1.5 h-1.5 bg-brown-600 rounded-full">
                <div className="absolute top-0 left-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
              </div>

              {/* Gentle smile with wrinkles */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-1.5 border-b-2 border-red-400 rounded-b-full"></div>
              <div className="absolute bottom-3 left-2 w-0.5 h-0.5 bg-orange-300 rounded-full"></div>
              <div className="absolute bottom-3 right-2 w-0.5 h-0.5 bg-orange-300 rounded-full"></div>

              {/* Rosy cheeks */}
              <div className="absolute top-4 left-1 w-1.5 h-1 bg-pink-300 rounded-full opacity-60"></div>
              <div className="absolute top-4 right-1 w-1.5 h-1 bg-pink-300 rounded-full opacity-60"></div>
            </div>
          </div>
        );

      case "nurse":
        return (
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-300 to-teal-400 flex items-center justify-center shadow-lg border-4 border-white relative overflow-hidden">
            {/* Face base */}
            <div className="bg-gradient-to-b from-orange-100 to-orange-200 w-11 h-11 rounded-full relative border border-orange-300">
              {/* Hair - professional brown */}
              <div className="absolute -top-2 -left-2 w-15 h-7 bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 rounded-t-full"></div>

              {/* Nurse cap */}
              <div className="absolute -top-1 left-1 w-8 h-3 bg-white rounded-t-full border-b border-gray-300">
                <div className="absolute top-0.5 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-red-500 rounded-full">
                  <div className="absolute top-0.5 left-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
                </div>
              </div>

              {/* Professional eyes */}
              <div className="absolute top-3 left-2 w-2 h-1.5 bg-blue-600 rounded-full border border-blue-800">
                <div className="absolute top-0 left-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
              </div>
              <div className="absolute top-3 right-2 w-2 h-1.5 bg-blue-600 rounded-full border border-blue-800">
                <div className="absolute top-0 left-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
              </div>

              {/* Caring smile */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-1.5 border-b-2 border-red-400 rounded-b-full"></div>

              {/* Professional appearance */}
              <div className="absolute top-4 left-1 w-1 h-1 bg-pink-300 rounded-full opacity-50"></div>
              <div className="absolute top-4 right-1 w-1 h-1 bg-pink-300 rounded-full opacity-50"></div>
            </div>
          </div>
        );

      case "boyfriend":
        return (
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-300 to-pink-500 flex items-center justify-center shadow-lg border-4 border-white relative overflow-hidden">
            {/* Face base - slightly more angular */}
            <div className="bg-gradient-to-b from-orange-100 to-orange-200 w-11 h-11 rounded-full relative border border-orange-300">
              {/* Hair - dark and stylish */}
              <div className="absolute -top-2 -left-2 w-15 h-8 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded-t-full"></div>
              <div className="absolute -top-1 left-8 w-5 h-5 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full transform -rotate-12"></div>

              {/* Gentle eyes */}
              <div className="absolute top-3 left-2 w-2 h-1.5 bg-gray-700 rounded-full border border-gray-800">
                <div className="absolute top-0 left-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
              </div>
              <div className="absolute top-3 right-2 w-2 h-1.5 bg-gray-700 rounded-full border border-gray-800">
                <div className="absolute top-0 left-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
              </div>

              {/* Mature smile */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-1.5 border-b-2 border-red-400 rounded-b-full"></div>

              {/* Light blush */}
              <div className="absolute top-4 left-1 w-1 h-1 bg-pink-300 rounded-full opacity-40"></div>
              <div className="absolute top-4 right-1 w-1 h-1 bg-pink-300 rounded-full opacity-40"></div>

              {/* Heart accent */}
              <div className="absolute top-2 right-0 text-xs">💕</div>
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
