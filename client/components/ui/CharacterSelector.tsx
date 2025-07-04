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
    <div className="space-y-4">
      {characters.map((character) => (
        <Button
          key={character.id}
          onClick={() => onSelect(character)}
          variant="outline"
          className="w-full h-24 justify-start p-4 rounded-3xl border-3 border-pink-200 hover:border-pink-300 hover:bg-pink-50 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl bg-white/80 backdrop-blur-sm group"
        >
          <div className="flex items-center w-full">
            <div className="relative">
              <div
                className={`w-16 h-16 rounded-full bg-gradient-to-br ${character.color} flex items-center justify-center mr-4 border-3 border-white shadow-lg group-hover:shadow-xl transition-all duration-300`}
              >
                <span className="text-3xl">{character.emoji}</span>
              </div>
              {/* Sparkle decoration */}
              <div className="absolute -top-1 -right-1 text-pink-400 text-lg animate-pulse">
                ✨
              </div>
            </div>
            <div className="flex-1 text-left">
              <div className="font-bold text-lg text-gray-800 mb-1 group-hover:text-pink-700 transition-colors">
                {character.name}
              </div>
              <div className="text-sm text-gray-600 italic">
                {character.description}
              </div>
            </div>
            {/* Heart decoration */}
            <div className="text-pink-300 text-xl group-hover:text-pink-500 transition-colors ml-2">
              💕
            </div>
          </div>
        </Button>
      ))}
    </div>
  );
}
