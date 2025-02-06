import { prisma } from "@/shared/lib/db";
import { Game, Prisma, User } from "@prisma/client";
import { z } from "zod";
import { GameEntity, GameIdleEntity, GameOverEntity } from "../domain";
import { removePassword } from "@/shared/lib/removePassword";

async function gamesList(where?: Prisma.GameWhereInput): Promise<GameEntity[]> {
  const games = await prisma.game.findMany({
    where,
    include: {
      players: true,
      winner: true,
    },
  });

  return games.map(dbGameToGameEntity);
}

const fieldSchema = z.array(z.union([z.string(), z.null()]));

function dbGameToGameEntity(
  game: Game & { players: User[]; winner?: User | null },
): GameEntity {
  const players = game.players.map(removePassword);

  switch (game.status) {
    case "idle": {
      const [creator] = players;
      if (!creator) throw new Error("Game idle without creator");

      return {
        id: game.id,
        creator: creator,
        status: game.status,
      } satisfies GameIdleEntity;
    }
    case "gameOver":
      if (!game.winner) throw new Error("Game over without winner");
      return {
        id: game.id,
        players: players,
        status: game.status,
        field: fieldSchema.parse(game.field),
        winner: removePassword(game.winner),
      } satisfies GameOverEntity;

    case "gameOverDraw":
    case "inProgress":
      return {
        id: game.id,
        players: players,
        status: game.status,
        field: fieldSchema.parse(game.field),
      };
  }
}

export const gameRepository = { gamesList };
