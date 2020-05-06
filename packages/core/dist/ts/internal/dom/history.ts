import { createStreamable, map, mapReq } from "../../streamable.ts";
import {
  compute,
  distinctUntilChanged,
  merge,
  ObservableLike,
  onNotify,
  throttle,
} from "../../observable.ts";
import { none } from "../../option.ts";
import { pipe } from "../../functions.ts";
import { fromEvent } from "./event.ts";
import { StateStoreLike, toStateStore, StateUpdater } from "../../stateStore.ts";

const getCurrentLocation = (_?: unknown): string => window.location.href;

const pushHistoryState = (newLocation: string) => {
  const currentLocation = getCurrentLocation();
  if (currentLocation !== newLocation) {
    window.history.pushState(none, "", newLocation);
  }
};

const historyOperator = (obs: ObservableLike<string>) =>
  pipe(
    merge(
      compute(getCurrentLocation),
      pipe(obs, throttle(15), onNotify(pushHistoryState)),
      fromEvent(window, "popstate", getCurrentLocation),
    ),
    distinctUntilChanged(),
  );

const _historyStateStore: StateStoreLike<string> = pipe(
  createStreamable(historyOperator),
  toStateStore(() => ""),
);

export const historyStateStore: StateStoreLike<string> = _historyStateStore;

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
  stateUpdater: StateUpdater<ParamMap>,
): StateUpdater<string> => (prevStateString: string) => {
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

export const historySearchStateStore: StateStoreLike<{
  readonly [key: string]: string;
}> = pipe(
  historyStateStore,
  mapReq(searchStateRequestMapper),
  map(getSearchState),
);

const parseHashState = (str: string) =>
  str.length > 1 ? decodeURIComponent(str.substring(1)) : "";

const getHashState = (state: string): string => {
  const url = new URL(state);
  return parseHashState(url.hash);
};

const hashStateRequestMapper = (
  stateUpdater: StateUpdater<string>,
): StateUpdater<string> => (prevStateString: string) => {
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

export const historyHashStateStore: StateStoreLike<string> = pipe(
  historyStateStore,
  mapReq(hashStateRequestMapper),
  map(getHashState),
);
