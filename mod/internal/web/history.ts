import { pipe, Updater, compose } from "../../functions.ts";
import {
  compute,
  concatWith,
  mergeWith,
  onNotify,
  throttle,
} from "../../observable.ts";
import { none } from "../../option.ts";
import { RelativeURI, fromHref, toHref } from "../../relativeURI.ts";
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

const requestMapper = (stateUpdater: Updater<RelativeURI>): Updater<string> => (
  prevStateString: string,
) => {
  const prevStateURI = fromHref(prevStateString);
  const newStateURI = stateUpdater(prevStateURI);

  return newStateURI === prevStateURI
    ? prevStateString
    : toHref(newStateURI, prevStateString);
};

const _historyStateStore: StateStoreLike<RelativeURI> = pipe(
  createStreamable(historyFunction),
  toStateStore(),
  mapReq(requestMapper),
  map(fromHref),
);

export const historyStateStore: StateStoreLike<RelativeURI> = _historyStateStore;
