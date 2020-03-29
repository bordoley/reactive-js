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
import { fromEvent } from "./event";
import { pipe } from "@reactive-js/pipe";

export interface LocationLike {
  readonly fragment: string;
  readonly path: string;
  readonly query: string;
}

const locationEquals = (a: LocationLike, b: LocationLike): boolean =>
  a === b ||
  (a.path === b.path && a.query === b.query && a.fragment === b.fragment);

const chopLeadingChar = (str: string) =>
  str.length > 0 ? str.substring(1) : "";

const getCurrentLocation = (_?: unknown): LocationLike => {
  const path = window.location.pathname;
  const query = chopLeadingChar(window.location.search);
  const fragment = chopLeadingChar(window.location.hash);
  return { path, query, fragment };
};

const pushHistoryState = (newLocation: LocationLike) => {
  const currentLocation = getCurrentLocation();
  if (!locationEquals(currentLocation, newLocation)) {
    const { path, query, fragment } = newLocation;
    let uriString = path;
    uriString = query.length > 0 ? `${uriString}?${query}` : uriString;
    uriString = fragment.length > 0 ? `${uriString}#${fragment}` : uriString;
    window.history.pushState(undefined, "", uriString);
  }
};

const historyOperator = (obs: ObservableLike<LocationLike>) =>
  merge(
    compute(getCurrentLocation),
    pipe(obs, throttle(15), onNotify(pushHistoryState)),
    fromEvent(window, "popstate", getCurrentLocation),
  );

const _history: AsyncEnumerableLike<
  LocationLike,
  LocationLike
> = createAsyncEnumerable(historyOperator);

export const history: AsyncEnumerableLike<
  LocationLike,
  LocationLike
> = _history;
