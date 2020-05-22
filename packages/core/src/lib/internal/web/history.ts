import { pipe, Updater, compose } from "../../functions";
import {
  compute,
  concatWith,
  mergeWith,
  onNotify,
  throttle,
} from "../../observable";
import { none } from "../../option";
import { StateStoreLike, toStateStore } from "../../stateStore";
import { createStreamable, map, mapReq } from "../../streamable";
import { fromEvent } from "./event";

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

export type RelativeURI = {
  pathname: string,
  search: string,
  hash: string,
};

export const emptyURI = {
  pathname: "",
  search: "",
  hash: ""
}

const toRelativeURI = (href: string): RelativeURI => {
  const uri = new URL(href);
  return {
    pathname: uri.pathname,
    search: uri.search,
    hash: uri.hash,
  };
};

const requestMapper = (
  stateUpdater: Updater<RelativeURI>,
): Updater<string> => (prevStateString: string) => {
  const prevStateURI = toRelativeURI(prevStateString);
  const newStateURI = stateUpdater(prevStateURI);

  if (newStateURI === prevStateURI) {
    return prevStateString;
  } else {
    const { pathname, search, hash } = newStateURI;
    const newURL = new URL(`${pathname}${search}${hash}`, prevStateString);
    return newURL.href;
  }
};

const _historyStateStore: StateStoreLike<RelativeURI> = pipe(
  createStreamable(historyFunction),
  toStateStore(),
  mapReq(requestMapper),
  map(toRelativeURI),
);

export const historyStateStore: StateStoreLike<RelativeURI> = _historyStateStore;
