import {
  StateUpdater,
  ObservableStateResourceLike,
} from "@rx-min/rx-observable-state";

import { useResource, useObservable } from "@rx-min/rx-react";

import { createElement, useCallback, useMemo, Children } from "react";
import { lift } from "@rx-min/rx-core";
import { scan } from "@rx-min/rx-operators";

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
  oldState === emptyRelativeURI ? [undefined, next] : [oldState, next];

const createRouter = <TContext>(
  locationResourceFactory: () => ObservableStateResourceLike<RelativeURI>,
  notFoundComponent: React.ComponentType<RoutableComponentProps>,
  routes: readonly [string, React.ComponentType<RoutableComponentProps>][],
  context: React.Context<TContext> | void,
): React.ComponentType<TContext> => {
  const routeMap = routes.reduce(routesReducer, {});

  const RxReactRouter = (props: TContext) => {
    const locationResource = useResource(locationResourceFactory, []);

    const uriUpdater = useCallback(
      (update: StateUpdater<RelativeURI>) => locationResource.dispatch(update),
      [locationResource],
    );

    const locationHistoryObservable = useMemo(
      () =>
        lift(locationResource, scan(pairify, [undefined, emptyRelativeURI])),
      [locationResource],
    );

    const route = useObservable(locationHistoryObservable);

    let child = null;
    if (route !== undefined) {
      const [referer, uri] = route;
      const component = routeMap[uri.path] || notFoundComponent;
      child = createElement(component, { referer, uri, uriUpdater });
    }

    return context !== undefined
      ? createElement(context.Provider, { value: props, children: child })
      : child;
  };

  return RxReactRouter;
};

export const Router = {
  create: createRouter,
};
