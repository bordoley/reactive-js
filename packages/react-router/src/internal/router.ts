import {
  StateUpdater,
  AsyncEnumerableLike,
} from "@reactive-js/async-enumerable";
import { none, Option, isNone } from "@reactive-js/option";
import { useObservable, useAsyncEnumerable } from "@reactive-js/react";
import { map, scan, never } from "@reactive-js/observable";
import { pipe } from "@reactive-js/pipe";
import { SchedulerLike } from "@reactive-js/scheduler";
import { createElement, useMemo, ReactElement } from "react";

export type RelativeURI = {
  readonly hash: string;
  readonly pathname: string;
  readonly search: string;
};

const empty: RelativeURI = {
  pathname: "",
  search: "",
  hash: "",
};

export type RoutableComponentProps = {
  readonly referer: Option<RelativeURI>;
  readonly uri: RelativeURI;
  readonly uriUpdater: (updater: StateUpdater<RelativeURI>) => void;
};

type RouteMap = {
  [key: string]: React.ComponentType<RoutableComponentProps>;
};

export type RouterProps = {
  readonly location: AsyncEnumerableLike<
    StateUpdater<RelativeURI>,
    RelativeURI
  >;
  readonly notFound: React.ComponentType<RoutableComponentProps>;
  readonly routes: readonly [
    string,
    React.ComponentType<RoutableComponentProps>,
  ][];
  readonly scheduler?: SchedulerLike;
};

const pairify = (
  [_, oldState]: [Option<RelativeURI>, RelativeURI],
  next: RelativeURI,
): [Option<RelativeURI>, RelativeURI] =>
  oldState === empty ? [none, next] : [oldState, next];

export const Router = function Router(props: RouterProps): ReactElement | null {
  const { location, notFound, routes, scheduler } = props;

  const locationStore = useAsyncEnumerable(location, { replay: 1 });

  const observable = useMemo(() => {
    if (isNone(locationStore)) {
      return never<ReactElement>();
    } else {
      const routeMap: RouteMap = {};
      for (const [path, component] of routes) {
        routeMap[path] = component;
      }

      const uriUpdater = (updater: StateUpdater<RelativeURI>) => {
        locationStore.dispatch(updater);
      };

      return pipe(
        locationStore,
        scan(pairify, (): [Option<RelativeURI>, RelativeURI] => [none, empty]),
        map(([referer, uri]) =>
          createElement(routeMap[uri.pathname] ?? notFound, {
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
