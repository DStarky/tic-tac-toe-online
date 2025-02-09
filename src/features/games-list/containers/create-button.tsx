"use client";

import { mapLeft, right } from "@/shared/lib/either";
import { useActionState } from "@/shared/lib/react";
import { Button } from "@/shared/ui/button";
import { createGameAction } from "../actions/create-game";
import { startTransition } from "react";

export function CreateButton() {
  const [state, dispatch, isPending] = useActionState(
    createGameAction,
    right(undefined),
  );

  return (
    <Button
      disabled={isPending}
      onClick={() => startTransition(dispatch)}
      error={mapLeft(
        state,
        (e) =>
          ({
            ["user-not-found"]: "Пользователь не найден",
            ["can-create-only-one-game"]: "Вы можете создать только одну игру",
          })[e],
      )}
    >
      Создать игру
    </Button>
  );
}
