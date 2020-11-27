import { Updater, compose, pipe } from "../functions";
import {
  compute,
  concatWith,
  mergeWith,
  onNotify,
  throttle,
} from "../observable";
import { none } from "../option";
import { RelativeURI, fromHref, toHref } from "../relativeURI";
import { StateStoreLike, toStateStore } from "../stateStore";
import { createStreamable, map, mapReq } from "../streamable";
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
