import { pipe, Updater, compose } from "../../functions.ts";
import {
  compute,
  concatWith,
  mergeWith,
  onNotify,
  throttle,
} from "../../observable.ts";
import { none } from "../../option.ts";
import { StateStoreLike, toStateStore } from "../../stateStore.ts";
import { createStreamable, map, mapReq } from "../../streamable.ts";
import { fromEvent } from "./event.ts";

const getCurrentLocation = (_?: unknown): string => window.location.href;

const pushHistoryState = (newLocation: string) => {
  const currentLocation = getCurrentLocation();
  if (currentLocation !== newLocation) {
    window.history.pushState(none, "", newLocation);
  }
};

const historyFunction = compose(
  throttle<string>(15),
  onNotify(pushHistoryState),
  mergeWith(
    pipe(
      getCurrentLocation,
      compute(),
      concatWith(fromEvent(window, "popstate", getCurrentLocation)),
    ),
  ),
);

const _historyStateStore: StateStoreLike<string> = pipe(
  createStreamable(historyFunction),
  toStateStore(),
);

export const historyStateStore: StateStoreLike<string> = _historyStateStore;

const getPathState = (state: string): string => {
  const url = new URL(state);
  return url.pathname;
};

const pathStateRequestMapper = (
  stateUpdater: Updater<string>,
): Updater<string> => (prevStateString: string) => {
  const prevStateURL = new URL(prevStateString);
  const prevState = prevStateURL.pathname;
  const newState = stateUpdater(prevState);

  if (newState === prevState) {
    return prevStateString;
  } else {
    const newURL = new URL("", prevStateURL);
    newURL.pathname = newState;
    return newURL.href;
  }
};

const _historyPathStateStore = pipe(
  historyStateStore,
  mapReq(pathStateRequestMapper),
  map(getPathState),
);

export const historyPathStateStore: StateStoreLike<string> = _historyPathStateStore;

type ParamMap = { readonly [key: string]: string };

const parseQueryState = (searchParams: URLSearchParams): ParamMap => {
  const retval: { [key: string]: string } = {};

  searchParams.forEach((v, k) => {
    retval[k] = v;
  });

  return retval;
};

const getSearchState = (state: string): ParamMap => {
  const url = new URL(state);
  return parseQueryState(url.searchParams);
};

const searchStateRequestMapper = (
  stateUpdater: Updater<ParamMap>,
): Updater<string> => (prevStateString: string) => {
  const prevStateURL = new URL(prevStateString);
  const prevState = parseQueryState(prevStateURL.searchParams);
  const newState = stateUpdater(prevState);

  if (newState === prevState) {
    return prevStateString;
  } else {
    const newURL = new URL("", prevStateURL);

    const searchParams = new URLSearchParams(newState);
    const searchParamsStr = searchParams.toString();
    newURL.search = searchParamsStr.length > 0 ? `?${searchParamsStr}` : "";
    return newURL.href;
  }
};

const _historySearchStateStore = pipe(
  historyStateStore,
  mapReq(searchStateRequestMapper),
  map(getSearchState),
);

export const historySearchStateStore: StateStoreLike<{
  readonly [key: string]: string;
}> = _historySearchStateStore;

const parseHashState = (str: string) =>
  str.length > 1 ? decodeURIComponent(str.substring(1)) : "";

const getHashState = (state: string): string => {
  const url = new URL(state);
  return parseHashState(url.hash);
};

const hashStateRequestMapper = (
  stateUpdater: Updater<string>,
): Updater<string> => (prevStateString: string) => {
  const prevStateURL = new URL(prevStateString);
  const prevState = parseHashState(prevStateURL.hash);
  const newState = stateUpdater(prevState);

  if (newState === prevState) {
    return prevStateString;
  } else {
    const newURL = new URL("", prevStateURL);
    newURL.hash = newState.length > 0 ? "#" + encodeURIComponent(newState) : "";
    return newURL.href;
  }
};

const _historyHashStateStore = pipe(
  historyStateStore,
  mapReq(hashStateRequestMapper),
  map(getHashState),
);
export const historyHashStateStore: StateStoreLike<string> = _historyHashStateStore;
