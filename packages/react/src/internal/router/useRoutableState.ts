import { StateUpdater } from "@reactive-js/core/dist/js/async-enumerable";
import { useCallback, useMemo } from "react";
import { RelativeURI, RoutableComponentProps } from "./router";

const createURIStateUpdater = <TState>(
  stateUpdater: StateUpdater<TState>,
  parse: (serialized: string) => TState,
  serialize: (state: TState) => string,
  stateIssearch: boolean,
) => (oldURI: RelativeURI) => {
  const oldSerialized = stateIssearch ? oldURI.search : oldURI.hash;

  const oldState = parse(oldSerialized);
  const newState = stateUpdater(oldState);

  if (oldState === newState) {
    return oldURI;
  } else if (stateIssearch) {
    const search = serialize(newState);
    return {
      ...oldURI,
      search,
    };
  } else {
    const hash = serialize(newState);
    return {
      ...oldURI,
      hash,
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
    uri: { search, hash },
    uriUpdater,
  } = props;

  const state = useMemo(() => {
    const serialized = stateIsQuery ? search : hash;
    return parse(serialized);
  }, [parse, search, hash]);

  const notify = useCallback(
    (stateUpdater: StateUpdater<TState>) => {
      uriUpdater(
        createURIStateUpdater(stateUpdater, parse, serialize, stateIsQuery),
      );
    },
    [uriUpdater, parse, serialize, stateIsQuery],
  );

  return [state, notify];
};
