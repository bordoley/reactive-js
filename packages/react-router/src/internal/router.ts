import {
  StateUpdaterLike,
  AsyncEnumerableLike,
} from "@reactive-js/async-enumerable";
import { useObservable, useAsyncEnumerable } from "@reactive-js/react";
import { map, scan, never } from "@reactive-js/observable";
import { pipe } from "@reactive-js/pipe";
import { SchedulerLike } from "@reactive-js/scheduler";
import { createElement, useMemo, ReactElement } from "react";

export interface RelativeURILike {
  readonly fragment: string;
  readonly path: string;
  readonly query: string;
}

const empty: RelativeURILike = {
  path: "",
  query: "",
  fragment: "",
};

export interface RoutableComponentProps {
  readonly referer: RelativeURILike | undefined;
  readonly uri: RelativeURILike;
  readonly uriUpdater: (updater: StateUpdaterLike<RelativeURILike>) => void;
}

interface RouteMap {
  [key: string]: React.ComponentType<RoutableComponentProps>;
}

export interface RouterProps {
  readonly location: AsyncEnumerableLike<
    StateUpdaterLike<RelativeURILike>,
    RelativeURILike
  >;
  readonly notFound: React.ComponentType<RoutableComponentProps>;
  readonly routes: readonly [
    string,
    React.ComponentType<RoutableComponentProps>,
  ][];
  readonly scheduler?: SchedulerLike;
}

const pairify = (
  [_, oldState]: [RelativeURILike | undefined, RelativeURILike],
  next: RelativeURILike,
): [RelativeURILike | undefined, RelativeURILike] =>
  oldState === empty ? [undefined, next] : [oldState, next];

export const Router = function Router(props: RouterProps): ReactElement | null {
  const { location, notFound, routes, scheduler } = props;

  const locationStore = useAsyncEnumerable(location, { replay: 1 });

  const observable = useMemo(() => {
    if (locationStore === undefined) {
      return never<ReactElement>();
    } else {
      const routeMap: RouteMap = {};
      for (const [path, component] of routes) {
        routeMap[path] = component;
      }

      const uriUpdater = (updater: StateUpdaterLike<RelativeURILike>) => {
        locationStore.dispatch(updater);
      };

      return pipe(
        locationStore,
        scan(pairify, (): [RelativeURILike | undefined, RelativeURILike] => [
          undefined,
          empty,
        ]),
        map(([referer, uri]) =>
          createElement(routeMap[uri.path] || notFound, {
            referer,
            uri,
            uriUpdater,
          }),
        ),
      );
    }
  }, [locationStore, notFound, routes]);

  const element = useObservable(observable, scheduler);

  return element ?? null;
};
