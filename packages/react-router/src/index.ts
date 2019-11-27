import { useObservableResource } from "@reactive-js/react-hooks";
import {
  empty as emptyRelativeURI,
  RelativeURI,
} from "@reactive-js/react-router-relative-uri";
import { lift, pipe } from "@reactive-js/rx-observable-resource";
import { map, scan } from "@reactive-js/rx-observables";
import { createElement } from "react";
import {
  AsyncIteratorResourceLike,
  StateUpdater,
} from "@reactive-js/ix-async-iterator-resource";

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
  readonly locationResourceFactory: () => AsyncIteratorResourceLike<
    StateUpdater<RelativeURI>,
    RelativeURI
  >;
  readonly notFound: React.ComponentType<RoutableComponentProps>;
  readonly routes: readonly [
    string,
    React.ComponentType<RoutableComponentProps>,
  ][];
}

export const Router: React.ComponentType<RouterProps> = ({
  locationResourceFactory,
  notFound,
  routes,
}) => {
  const element = useObservableResource(() => {
    const routeMap = routes.reduce(routesReducer, {});
    const locationResource = locationResourceFactory();

    const uriUpdater = (updater: StateUpdater<RelativeURI>) => {
      locationResource.dispatch(updater);
    };

    return pipe(
      locationResource,
      lift(scan(pairify, [undefined, emptyRelativeURI])),
      lift(
        map(([referer, uri]) =>
          createElement(routeMap[uri.path] || notFound, {
            referer,
            uri,
            uriUpdater,
          }),
        ),
      ),
    );
  }, [locationResourceFactory, routes]);

  return element || null;
};
