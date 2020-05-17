import { Updater, SideEffect1, returns, pipe } from "@reactive-js/core/lib/functions";
import { none, Option, isSome } from "@reactive-js/core/lib/option";
import { StateStoreLike } from "@reactive-js/core/lib/stateStore";
import { scan, mapReq } from "@reactive-js/core/lib/streamable";
import { createElement, useMemo, ReactElement } from "react";
import { useStreamable } from "./hooks";

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
};

const parseRelativeURIOrThrow = (str: string): RelativeURI => {
  const url = new URL(str);
  return urlToRelativeURI(url);
};

const serializeRelativeURI = (
  { pathname, search, hash }: RelativeURI,
  base: URL,
) => {
  let newRelativeString = pathname;
  newRelativeString =
    search.length > 0 ? `${newRelativeString}${search}` : newRelativeString;
  newRelativeString =
    hash.length > 0 ? `${newRelativeString}${hash}` : newRelativeString;

  const newURL = new URL(newRelativeString, base);
  return newURL.href;
};

export type RoutableComponentProps = {
  readonly referer: Option<RelativeURI>;
  readonly uri: RelativeURI;
  readonly uriUpdater: SideEffect1<Updater<RelativeURI>>;
};

export type RouteMap = {
  readonly [key: string]: React.ComponentType<RoutableComponentProps>;
};

export type RouterProps = {
  readonly stateStore: StateStoreLike<string>;
  readonly notFound: React.ComponentType<RoutableComponentProps>;
  readonly routes: RouteMap;
};

const pairify = (
  [_, oldState]: [Option<RelativeURI>, RelativeURI],
  next: string,
): [Option<RelativeURI>, RelativeURI] => {
  const nextURI = parseRelativeURIOrThrow(next);
  return oldState === empty ? [none, nextURI] : [oldState, nextURI];
};

const mapRequest = (
  stateUpdater: Updater<RelativeURI>,
): Updater<string> => prevStateString => {
  const prevStateURL = new URL(prevStateString);
  const newStateRelativeURI = pipe(
    prevStateURL,
    urlToRelativeURI,
    stateUpdater,
  );
  return serializeRelativeURI(newStateRelativeURI, prevStateURL);
};

export const Router = function Router(props: RouterProps): ReactElement | null {
  const { stateStore, notFound, routes } = props;

  const relativeURIStore = useMemo(
    () =>
      pipe(
        stateStore,
        mapReq(mapRequest),
        scan(
          pairify,
          returns<[Option<RelativeURI>, RelativeURI]>([none, empty]),
        ),
      ),
    [stateStore],
  );

  const [locationState, uriUpdater] = useStreamable(relativeURIStore, {
    replay: 1,
  });

  if (isSome(locationState)) {
    const [referer, uri] = locationState;
    return createElement(routes[uri.pathname] ?? notFound, {
      referer,
      uri,
      uriUpdater,
    });
  } else {
    return null;
  }
};
