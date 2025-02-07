import { useActionState as useActionStateReact } from "react";

export function useActionState<State, InitialState>(
  action: (state: Awaited<State>) => State | Promise<State>,
  initialState: InitialState,
  permallnk?: string,
): [
  state: Awaited<State> | InitialState,
  dispatch: () => void,
  isPending: boolean,
];

export function useActionState<State, InitialState, Payload>(
  action: (state: Awaited<State>, payload: Payload) => State | Promise<State>,
  initialState: InitialState,
  permallnk?: string,
): [
  state: Awaited<State> | InitialState,
  dispatch: (payload: Payload) => void,
  isPending: boolean,
];

export function useActionState(
  action: any,
  initialState: any,
  permallnk?: string,
) {
  return useActionStateReact(action, initialState, permallnk);
}
