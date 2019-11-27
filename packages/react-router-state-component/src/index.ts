import { StateUpdater } from "@reactive-js/ix-async-iterator-resource";
import { RoutableComponentProps } from "@reactive-js/react-router";
import { RelativeURI } from "@reactive-js/react-router-relative-uri";
import { createElement, useCallback, useMemo } from "react";

export interface RoutableStateComponentProps<TState> {
  readonly dispatch: (updater: StateUpdater<TState>) => void;
  readonly goTo: (uri: RelativeURI) => void;
  readonly referer: RelativeURI | undefined;
  readonly state: TState;
  readonly uri: RelativeURI;
}

const createURIStateUpdater = <TState>(
  stateUpdater: StateUpdater<TState>, 
  parse: (serialized: string) => TState,
  serialize: (state: TState) => string,
  stateIsQuery: boolean,
) => (
  oldURI: RelativeURI,
) => {
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

export const create = <TState>(
  component: React.ComponentType<RoutableStateComponentProps<TState>>,
  parse: (serialized: string) => TState,
  serialize: (state: TState) => string,
  stateIsQuery = false,
): React.ComponentType<RoutableComponentProps> => {
  const createCallbacks = (uriUpdater: (updater: StateUpdater<RelativeURI>) => void) => {
    const goTo = (uri: RelativeURI) => uriUpdater(_ => uri);

    const dispatch = (stateUpdater: StateUpdater<TState>) => {
      uriUpdater(createURIStateUpdater(stateUpdater, parse, serialize, stateIsQuery));
    };

    return { goTo, dispatch };
  };

  const RoutableStateComponent = ({
    referer,
    uri,
    uriUpdater,
  }: RoutableComponentProps) => {
    const state = useMemo(() => {
      const serialized = stateIsQuery ? uri.query : uri.fragment;
      return parse(serialized);
    }, [uri]);

    const { goTo, dispatch } = useMemo(() => createCallbacks(uriUpdater), [uriUpdater]);

    return createElement(component, {
      uri,
      referer,
      goTo,
      state,
      dispatch,
    });
  };

  return RoutableStateComponent;
};
