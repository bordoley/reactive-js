import { StateUpdater } from "@reactive-js/ix-async-iterator-resource";
import { AsyncIteratorResourceLike } from "@reactive-js/ix-core";
import { useObservableResource } from "@reactive-js/react";
import { map, pipe, scan } from "@reactive-js/rx-observable-resource";
import { SchedulerLike } from "@reactive-js/scheduler";
import { createElement } from "react";

export interface RelativeURI {
  readonly fragment: string;
  readonly path: string;
  readonly query: string;
}

const empty: RelativeURI = {
  path: "",
  query: "",
  fragment: "",
};

export interface RoutableComponentProps {
  readonly referer: RelativeURI | undefined;
  readonly uri: RelativeURI;
  readonly uriUpdater: (updater: StateUpdater<RelativeURI>) => void;
}

type RouteMap = {
  [key: string]: React.ComponentType<RoutableComponentProps>;
};

export interface RouterProps {
  readonly locationStoreFactory: () => AsyncIteratorResourceLike<
    StateUpdater<RelativeURI>,
    RelativeURI
  >;
  readonly notFound: React.ComponentType<RoutableComponentProps>;
  readonly routes: readonly [
    string,
    React.ComponentType<RoutableComponentProps>,
  ][];
  readonly scheduler?: SchedulerLike;
}

export const Router = function Router(props: RouterProps) {
  const { locationStoreFactory, notFound, routes, scheduler } = props;

  const element = useObservableResource(
    () => {
      const routeMap: RouteMap = {};
      for (let [path, component] of routes) {
        routeMap[path] = component;
      }

      const locationResource = locationStoreFactory();

      const uriUpdater = (updater: StateUpdater<RelativeURI>) => {
        locationResource.dispatch(updater);
      };

      const pairify = (
        [_, oldState]: [RelativeURI | undefined, RelativeURI],
        next: RelativeURI,
      ): [RelativeURI | undefined, RelativeURI] =>
        oldState === empty ? [undefined, next] : [oldState, next];

      return pipe(
        locationResource,
        scan(pairify, [undefined, empty]),
        map(([referer, uri]) =>
          createElement(routeMap[uri.path] || notFound, {
            referer,
            uri,
            uriUpdater,
          }),
        ),
      );
    },
    [locationStoreFactory, notFound, routes],
    scheduler,
  );

  return element || null;
};
