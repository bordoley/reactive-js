import { StateUpdater } from "@reactive-js/async-iterator-resource";
import { useMemo } from "react";
import { RelativeURI, RoutableComponentProps } from "./router";

const createURIStateUpdater = <TState>(
  stateUpdater: StateUpdater<TState>,
  parse: (serialized: string) => TState,
  serialize: (state: TState) => string,
  stateIsQuery: boolean,
) => (oldURI: RelativeURI) => {
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
): [TState, (updater: StateUpdater<TState>) => void] => {
  const {
    uri: { query, fragment },
    uriUpdater,
  } = props;

  const state = useMemo(() => {
    const serialized = stateIsQuery ? query : fragment;
    return parse(serialized);
  }, [query, fragment]);

  const dispatch = useMemo(
    () => (stateUpdater: StateUpdater<TState>) => {
      uriUpdater(
        createURIStateUpdater(stateUpdater, parse, serialize, stateIsQuery),
      );
    },
    [uriUpdater],
  );

  return [state, dispatch];
};
