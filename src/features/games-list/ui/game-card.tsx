import { Card, CardHeader, CardTitle, CardContent } from "@/shared/ui/card";

export function GameCard({ login, rating }: { login: string; rating: number }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-normal">
          Игра с: <span className="font-bold">{login}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>Рейтинг: {rating}</CardContent>
    </Card>
  );
}
