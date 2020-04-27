import {
  StreamableLike,
  createStreamable,
} from "@reactive-js/core/dist/js/streamable";
import {
  compute,
  merge,
  ObservableLike,
  onNotify,
  throttle,
} from "@reactive-js/core/dist/js/observable";
import { none } from "@reactive-js/core/dist/js/option";
import { pipe } from "@reactive-js/core/dist/js/functions";
import { fromEvent } from "./event";

export type Location = {
  readonly hash: string;
  readonly pathname: string;
  readonly search: string;
};

const locationEquals = (a: Location, b: Location): boolean =>
  a === b ||
  (a.pathname === b.pathname && a.search === b.search && a.hash === b.hash);

const getCurrentLocation = (_?: unknown): Location => {
  const pathname = window.location.pathname;
  const search = window.location.search;
  const hash = window.location.hash;
  return { pathname, search, hash };
};

const pushHistoryState = (newLocation: Location) => {
  const currentLocation = getCurrentLocation();
  if (!locationEquals(currentLocation, newLocation)) {
    const { pathname, search, hash } = newLocation;
    let uriString = pathname;
    uriString = search.length > 0 ? `${uriString}${search}` : uriString;
    uriString = hash.length > 0 ? `${uriString}${hash}` : uriString;
    window.history.pushState(none, "", uriString);
  }
};

const historyOperator = (obs: ObservableLike<Location>) =>
  merge(
    compute(getCurrentLocation),
    pipe(obs, throttle(15), onNotify(pushHistoryState)),
    fromEvent(window, "popstate", getCurrentLocation),
  );

const _history: StreamableLike<Location, Location> = createStreamable(
  historyOperator,
);

export const history: StreamableLike<Location, Location> = _history;
