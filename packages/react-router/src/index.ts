import { lift } from "@reactive-js/ix-async-iterator-resource";
import { useAsyncIteratorResource } from "@reactive-js/react-hooks";
import {
  empty as emptyRelativeURI,
  RelativeURI,
} from "@reactive-js/react-router-relative-uri";
import { scan } from "@reactive-js/rx-operators";
import {
  StateContainerResourceLike,
  StateUpdater,
} from "@reactive-js/state-container";
import { createElement, useCallback, useMemo } from "react";

export interface RoutableComponentProps {
  readonly referer: RelativeURI | undefined;
  readonly uri: RelativeURI;
  readonly uriUpdater: (updater: StateUpdater<RelativeURI>) => void;
}

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

export interface RouterProps {
  readonly notFoundComponent: React.ComponentType<RoutableComponentProps>;
  readonly routes: readonly [
    string,
    React.ComponentType<RoutableComponentProps>,
  ][];
}

export const create = (
  locationResourceFactory: () => StateContainerResourceLike<RelativeURI>,
): React.ComponentType<RouterProps> => {
  const ReactRouter = ({ notFoundComponent, routes }: RouterProps) => {
    const routeMap = useMemo(() => routes.reduce(routesReducer, {}), [routes]);

    const [route, uriUpdater] = useAsyncIteratorResource(
      () =>
        lift(
          locationResourceFactory(),
          scan(pairify, [undefined, emptyRelativeURI]),
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
