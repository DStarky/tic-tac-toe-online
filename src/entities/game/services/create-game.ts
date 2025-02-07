import cuid from "cuid";
import { PlayerEntity } from "../domain";
import { gameRepository } from "../repositories/game-repository";

export async function createGame(player: PlayerEntity) {
  const playerGames = await gameRepository.gamesList({
    players: {
      some: {
        id: player.id,
      },
    },
    status: "idle",
  });

  const isGameInIdleStatus = playerGames.some(
    (game) => game.status === "idle" && game.creator.id === player.id,
  );

  if (isGameInIdleStatus) {
    return {
      type: "error",
      error: "can-create-only-one-game",
    } as const;
  }

  const createdGame = await gameRepository.createGame({
    id: cuid(),
    creator: player,
    status: "idle",
  });

  return createdGame;
}
