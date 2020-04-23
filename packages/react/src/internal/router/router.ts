import {
  StateUpdater,
  AsyncEnumerableLike,
  lift,
} from "@reactive-js/core/dist/js/async-enumerable";
import { none, Option, isSome } from "@reactive-js/core/dist/js/option";
import { useAsyncEnumerable } from "../../hooks";
import { scan } from "@reactive-js/core/dist/js/observable";
import { pipe } from "@reactive-js/core/dist/js/pipe";
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
};

const pairify = (
  [_, oldState]: [Option<RelativeURI>, RelativeURI],
  next: RelativeURI,
): [Option<RelativeURI>, RelativeURI] =>
  oldState === empty ? [none, next] : [oldState, next];

export const Router = function Router(props: RouterProps): ReactElement | null {
  const { location, notFound, routes } = props;

  const routeMap = useMemo(() => {
    const routeMap: RouteMap = {};
    for (const [path, component] of routes) {
      routeMap[path] = component;
    }
    return routeMap;
  }, [routes]);

  const pairifiedLocation = useMemo(
    () =>
      pipe(
        location,
        lift(
          scan(pairify, (): [Option<RelativeURI>, RelativeURI] => [
            none,
            empty,
          ]),
        ),
      ),
    [location],
  );

  const [locationState, uriUpdater] = useAsyncEnumerable(pairifiedLocation, {
    replay: 1,
  });

  if (isSome(locationState)) {
    const [referer, uri] = locationState;
    return createElement(routeMap[uri.pathname] ?? notFound, {
      referer,
      uri,
      uriUpdater,
    });
  } else {
    return null;
  }
};
