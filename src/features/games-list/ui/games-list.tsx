import { getIdleGames } from "@/entities/game/server";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";

export async function GamesList() {
  const games = await getIdleGames();

  return (
    <div className="grid grid-cols-2 gap-4">
      {games.map((game) => (
        <Card key={game.id}>
          <CardHeader>
            <CardTitle className="text-lg font-normal">
              Игра с: <span className="font-bold">{game.creator.login}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>Рейтинг: {game.creator.rating}</CardContent>
        </Card>
      ))}
    </div>
  );
}
