import { StateStoreLike, StateUpdaterLike } from "@reactive-js/ix";
import { useObservable } from "@reactive-js/react";
import { map, pipe, scan } from "@reactive-js/observable";
import { SchedulerLike } from "@reactive-js/scheduler";
import { createElement, useMemo } from "react";

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
  readonly uriUpdater: (updater: StateUpdaterLike<RelativeURI>) => void;
}

interface RouteMap {
  [key: string]: React.ComponentType<RoutableComponentProps>;
}

export interface RouterProps {
  readonly locationStore: StateStoreLike<RelativeURI>;
  readonly notFound: React.ComponentType<RoutableComponentProps>;
  readonly routes: readonly [
    string,
    React.ComponentType<RoutableComponentProps>,
  ][];
  readonly scheduler?: SchedulerLike;
}

export const Router = function Router(props: RouterProps) {
  const { locationStore, notFound, routes, scheduler } = props;

  const observable = useMemo(() => {
    const routeMap: RouteMap = {};
    for (const [path, component] of routes) {
      routeMap[path] = component;
    }

    const uriUpdater = (updater: StateUpdaterLike<RelativeURI>) => {
      locationStore.dispatch(updater);
    };

    const pairify = (
      [_, oldState]: [RelativeURI | undefined, RelativeURI],
      next: RelativeURI,
    ): [RelativeURI | undefined, RelativeURI] =>
      oldState === empty ? [undefined, next] : [oldState, next];

    return pipe(
      locationStore,
      scan(pairify, [undefined, empty]),
      map(([referer, uri]) =>
        createElement(routeMap[uri.path] || notFound, {
          referer,
          uri,
          uriUpdater,
        }),
      ),
    );
  }, [locationStore, notFound, routes]);

  const element = useObservable(observable, scheduler);

  return element ?? null;
};
