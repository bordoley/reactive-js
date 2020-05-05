import { scan, StreamableLike, mapReq } from "@reactive-js/core/dist/js/streamable";
import { none, Option, isSome } from "@reactive-js/core/dist/js/option";
import { useStreamable } from "../../hooks";
import { createElement, useMemo, ReactElement } from "react";
import {
  StateUpdater,
  toStateStore,
} from "@reactive-js/core/dist/js/stateStore";
import { returns, pipe } from "@reactive-js/core/dist/js/functions";

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

const urlToRelativeURI = (url: URL): RelativeURI => {
  const pathname = url.pathname;
  const search = url.search;
  const hash = url.hash;
  return { pathname, search, hash };
}

const parseRelativeURIOrThrow = (str: string): RelativeURI => {
  const url = new URL(str);
  return urlToRelativeURI(url);
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
  readonly history: StreamableLike<string, string>;
  readonly notFound: React.ComponentType<RoutableComponentProps>;
  readonly routes: readonly [
    string,
    React.ComponentType<RoutableComponentProps>,
  ][];
};

const pairify = (
  [_, oldState]: [Option<RelativeURI>, RelativeURI],
  next: string,
): [Option<RelativeURI>, RelativeURI] => {
  const nextURI = parseRelativeURIOrThrow(next);
  return oldState === empty ? [none, nextURI] : [oldState, nextURI];
};

const mapRequest = (
  stateUpdater: StateUpdater<RelativeURI>,
): StateUpdater<string> => prevStateString => {
  const prevStateURL = new URL(prevStateString);
  const prevStateRelativeURI = urlToRelativeURI(prevStateURL);

  const {
    pathname,
    search, 
    hash,
  } = stateUpdater(prevStateRelativeURI);

  let newRelativeString = pathname;
  newRelativeString = search.length > 0 ? `${newRelativeString}${search}` : newRelativeString;
  newRelativeString = hash.length > 0 ? `${newRelativeString}${hash}` : newRelativeString;

  const newURL = new URL(newRelativeString, prevStateURL)
  return newURL.href;
}

export const Router = function Router(props: RouterProps): ReactElement | null {
  const { history, notFound, routes } = props;

  const routeMap = useMemo(() => {
    const routeMap: RouteMap = {};
    for (const [path, component] of routes) {
      routeMap[path] = component;
    }
    return routeMap;
  }, [routes]);

  const relativeURIStore = useMemo(
    () => pipe(
      history,
      toStateStore(() => ""),
      mapReq(mapRequest),
      scan(
        pairify,
        returns<[Option<RelativeURI>, RelativeURI]>([none, empty]),
      ),
    ),
    [history],
  );

  const [locationState, uriUpdater] = useStreamable(relativeURIStore, {
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
