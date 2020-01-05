import { StateUpdaterLike } from "@reactive-js/ix";
import { useCallback, useMemo } from "react";
import { RelativeURILike, RoutableComponentProps } from "./router";

const createURIStateUpdater = <TState>(
  stateUpdater: StateUpdaterLike<TState>,
  parse: (serialized: string) => TState,
  serialize: (state: TState) => string,
  stateIsQuery: boolean,
) => (oldURI: RelativeURILike) => {
  const oldSerialized = stateIsQuery ? oldURI.query : oldURI.fragment;

  const oldState = parse(oldSerialized);
  const newState = stateUpdater(oldState);

  if (oldState === newState) {
    return oldURI;
  } else if (stateIsQuery) {
    const query = serialize(newState);
    return {
      ...oldURI,
      query,
    };
  } else {
    const fragment = serialize(newState);
    return {
      ...oldURI,
      fragment,
    };
  }
};

export const useRoutableState = <TState>(
  props: RoutableComponentProps,
  parse: (serialized: string) => TState,
  serialize: (state: TState) => string,
  stateIsQuery = false,
): [TState, (updater: StateUpdaterLike<TState>) => void] => {
  const {
    uri: { query, fragment },
    uriUpdater,
  } = props;

  const state = useMemo(() => {
    const serialized = stateIsQuery ? query : fragment;
    return parse(serialized);
  }, [query, fragment]);

  const notifyNext = useCallback(
    (stateUpdater: StateUpdaterLike<TState>) => {
      uriUpdater(
        createURIStateUpdater(stateUpdater, parse, serialize, stateIsQuery),
      );
    },
    [uriUpdater],
  );

  return [state, notifyNext];
};
