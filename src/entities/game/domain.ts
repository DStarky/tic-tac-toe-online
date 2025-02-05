export type GameEntity =
  | GameIdleEntity
  | GameInProgressEntity
  | GameOverEntity
  | GameOverDrawEntity;
  
export type GameIdleEntity = {
  id: string;
  players: PlayerEntity[];
  status: "idle";
};

export type GameInProgressEntity = {
  id: string;
  players: PlayerEntity[];
  field: Field[];
  status: "inProgress";
};

export type GameOverEntity = {
  id: string;
  players: PlayerEntity[];
  field: Field[];
  status: "gameOver";
  winner: PlayerEntity;
};

export type GameOverDrawEntity = {
  id: string;
  players: PlayerEntity[];
  field: Field[];
  status: "gameOverDraw";
  isDraw?: boolean;
};

export type PlayerEntity = {
  id: string;
  name: string;
  rating: number;
};

export type Field = Cell[];
export type Cell = string | null;
export type GameSymbol = string;
