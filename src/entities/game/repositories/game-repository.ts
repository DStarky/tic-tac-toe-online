import { prisma } from "@/shared/lib/db";
import { GameEntity } from "../domain";

async function gamesList(): Promise<GameEntity[]> {
  const games = await prisma.game.findMany({
    include: {
      players: true,
      winner: true,
    },
  });
}

export const gameRepository = {};
