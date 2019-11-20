import {
  StateUpdater,
  StateContainerResourceLike,
} from "@reactive-js/state-container";

import { useAsyncIterator } from "@reactive-js/react-hooks";

import { createElement, useCallback, useMemo } from "react";
import { AsyncIterator } from "@reactive-js/ix-core";
import { scan } from "@reactive-js/rx-operators";
import { bool } from "prop-types";

// React Native doesn't use a standard URI library so define
// a minimal type that can be passed around
export interface RelativeURI {
  readonly path: string;
  readonly query: string;
  readonly fragment: string;
}

const emptyRelativeURI: RelativeURI = {
  path: "",
  query: "",
  fragment: "",
};

export const RelativeURI = {
  empty: emptyRelativeURI,
  equals: (a: RelativeURI, b: RelativeURI): boolean =>
    a === b ||
    (a.path === b.path && a.query === b.query && a.fragment === b.fragment),
};

export interface RoutableComponentProps {
  readonly referer: RelativeURI | undefined;
  readonly uri: RelativeURI;
  readonly uriUpdater: (updater: StateUpdater<RelativeURI>) => void;
}

export interface RoutableStateComponentProps<TState> {
  readonly uri: RelativeURI;
  readonly referer: RelativeURI | undefined;
  readonly goTo: (uri: RelativeURI) => void;
  readonly state: TState;
  readonly dispatch: (updater: StateUpdater<TState>) => void;
}

const createRoutableStateComponent = <TState>(
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

export const RoutableStateComponent = {
  create: createRoutableStateComponent,
};

type RouteMap = {
  [key: string]: React.ComponentType<RoutableComponentProps>;
};

const routesReducer = (
  acc: RouteMap,
  [path, component]: [string, React.ComponentType<RoutableComponentProps>],
): RouteMap => {
  acc[path] = component;
  return acc;
};

const pairify = (
  [_, oldState]: [RelativeURI | undefined, RelativeURI],
  next: RelativeURI,
): [RelativeURI | undefined, RelativeURI] =>
  oldState === RelativeURI.empty ? [undefined, next] : [oldState, next];

export type RouterProps = {
  notFoundComponent: React.ComponentType<RoutableComponentProps>;
  routes: readonly [string, React.ComponentType<RoutableComponentProps>][];
};

const create = (
  locationResourceFactory: () => StateContainerResourceLike<RelativeURI>,
): React.ComponentType<RouterProps> => {
  const ReactRouter = ({ notFoundComponent, routes }: RouterProps) => {
    const routeMap = useMemo(() => routes.reduce(routesReducer, {}), [routes]);

    const [route, uriUpdater] = useAsyncIterator(
      () =>
        AsyncIterator.lift(
          locationResourceFactory(),
          scan(pairify, [undefined, RelativeURI.empty]),
        ),
      [],
    );

    const child =
      route !== undefined
        ? createElement(routeMap[route[1].path] || notFoundComponent, {
            referer: route[0],
            uri: route[1],
            uriUpdater,
          })
        : null;

    return child;
  };

  return ReactRouter;
};

export const Router = { create };
