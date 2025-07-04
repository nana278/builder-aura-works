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
          className="w-full h-20 justify-start p-4 rounded-2xl border-2 hover:border-app-blue/50 hover:bg-app-blue-light/20 transition-all"
        >
          <div className="flex items-center w-full">
            <div
              className={`w-12 h-12 rounded-full bg-gradient-to-r ${character.color} flex items-center justify-center mr-4`}
            >
              <span className="text-2xl">{character.emoji}</span>
            </div>
            <div className="flex-1 text-left">
              <div className="font-semibold text-gray-800">
                {character.name}
              </div>
              <div className="text-sm text-gray-600">
                {character.description}
              </div>
            </div>
          </div>
        </Button>
      ))}
    </div>
  );
}
