import {
  AsyncEnumerableLike,
  createAsyncEnumerable,
} from "@reactive-js/async-enumerable";
import {
  compute,
  merge,
  ObservableLike,
  onNotify,
  throttle,
} from "@reactive-js/observable";
import { none } from "@reactive-js/option";
import { pipe } from "@reactive-js/pipe";
import { fromEvent } from "./event";

export type Location = {
  readonly fragment: string;
  readonly path: string;
  readonly query: string;
};

const locationEquals = (a: Location, b: Location): boolean =>
  a === b ||
  (a.path === b.path && a.query === b.query && a.fragment === b.fragment);

const chopLeadingChar = (str: string) =>
  str.length > 0 ? str.substring(1) : "";

const getCurrentLocation = (_?: unknown): Location => {
  const path = window.location.pathname;
  const query = chopLeadingChar(window.location.search);
  const fragment = chopLeadingChar(window.location.hash);
  return { path, query, fragment };
};

const pushHistoryState = (newLocation: Location) => {
  const currentLocation = getCurrentLocation();
  if (!locationEquals(currentLocation, newLocation)) {
    const { path, query, fragment } = newLocation;
    let uriString = path;
    uriString = query.length > 0 ? `${uriString}?${query}` : uriString;
    uriString = fragment.length > 0 ? `${uriString}#${fragment}` : uriString;
    window.history.pushState(none, "", uriString);
  }
};

const historyOperator = (obs: ObservableLike<Location>) =>
  merge(
    compute(getCurrentLocation),
    pipe(obs, throttle(15), onNotify(pushHistoryState)),
    fromEvent(window, "popstate", getCurrentLocation),
  );

const _history: AsyncEnumerableLike<Location, Location> = createAsyncEnumerable(
  historyOperator,
);

export const history: AsyncEnumerableLike<Location, Location> = _history;
