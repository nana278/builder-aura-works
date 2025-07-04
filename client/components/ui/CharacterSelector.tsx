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
          className="w-full h-28 justify-start p-6 rounded-3xl border-2 border-gray-200 hover:border-app-blue hover:bg-gradient-to-r hover:from-white hover:to-app-blue-light/30 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg bg-white shadow-sm"
        >
          <div className="flex items-center w-full">
            <div className="relative mr-6">
              <div
                className={`w-16 h-16 rounded-full bg-gradient-to-br ${character.color} flex items-center justify-center shadow-lg border-4 border-white`}
              >
                <span className="text-3xl">{character.emoji}</span>
              </div>
              {/* Status indicator */}
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-white"></div>
            </div>
            <div className="flex-1 text-left">
              <div className="text-xl font-bold text-gray-800 mb-2">
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
