import { RoutableComponentProps } from "@reactive-js/react-router";
import { RelativeURI } from "@reactive-js/react-router-relative-uri";
import { StateUpdater } from "@reactive-js/state-container";
import { createElement, useCallback, useMemo } from "react";

export interface RoutableStateComponentProps<TState> {
  readonly dispatch: (updater: StateUpdater<TState>) => void;
  readonly goTo: (uri: RelativeURI) => void;
  readonly referer: RelativeURI | undefined;
  readonly state: TState;
  readonly uri: RelativeURI;
}

export const create = <TState>(
  component: React.ComponentType<RoutableStateComponentProps<TState>>,
  parseState: (fragment: string) => TState,
  serialize: (state: TState) => string,
  stateIsQuery = false,
): React.ComponentType<RoutableComponentProps> => {
  const createURIStateUpdater = (stateUpdater: StateUpdater<TState>) => (
    oldURI: RelativeURI,
  ) => {
    const oldSerialized = stateIsQuery ? oldURI.query : oldURI.fragment;

    const oldState = parseState(oldSerialized);
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

  const RoutableStateComponent = ({
    referer,
    uri,
    uriUpdater,
  }: RoutableComponentProps) => {
    const state = useMemo(() => {
      const serialized = stateIsQuery ? uri.query : uri.fragment;
      return parseState(serialized);
    }, [uri]);

    const goTo: (uri: RelativeURI) => void = useCallback(
      uri => uriUpdater(_ => uri),
      [uri, uriUpdater],
    );

    const dispatch: (updater: StateUpdater<TState>) => void = useCallback(
      stateUpdater => {
        uriUpdater(createURIStateUpdater(stateUpdater));
      },
      [uriUpdater],
    );

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
