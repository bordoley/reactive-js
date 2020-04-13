import {
  StateUpdater,
  AsyncEnumerableLike,
} from "@reactive-js/async-enumerable";
import { useObservable, useAsyncEnumerable } from "@reactive-js/react";
import { map, scan, never } from "@reactive-js/observable";
import { pipe } from "@reactive-js/pipe";
import { SchedulerLike } from "@reactive-js/scheduler";
import { createElement, useMemo, ReactElement } from "react";

export type RelativeURI = {
  readonly fragment: string;
  readonly path: string;
  readonly query: string;
};

const empty: RelativeURI = {
  path: "",
  query: "",
  fragment: "",
};

export type RoutableComponentProps = {
  readonly referer: RelativeURI | undefined;
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
  [_, oldState]: [RelativeURI | undefined, RelativeURI],
  next: RelativeURI,
): [RelativeURI | undefined, RelativeURI] =>
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

      const uriUpdater = (updater: StateUpdater<RelativeURI>) => {
        locationStore.dispatch(updater);
      };

      return pipe(
        locationStore,
        scan(pairify, (): [RelativeURI | undefined, RelativeURI] => [
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
