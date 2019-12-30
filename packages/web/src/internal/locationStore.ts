import { SchedulerLike } from "@reactive-js/scheduler";
import {
  createPersistentStateAsyncIterable,
  createAsyncIteratorResource,
} from "@reactive-js/ix";
import { merge, ObservableLike, onNext } from "@reactive-js/rx";
import { fromEvent } from "./event";
import { pipe } from "@reactive-js/pipe";

export interface LocationLike {
  readonly fragment: string;
  readonly path: string;
  readonly query: string;
}

const emptyLocation = {
  fragment: "",
  path: "",
  query: "",
};

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
    pipe(obs, onNext(pushHistoryState)),
    fromEvent(window, "popstate", getCurrentLocation),
  );

const historyIterable = {
  getIXAsyncIterator(scheduler: SchedulerLike, replayCount?: number) {
    const iter = createAsyncIteratorResource(
      historyOperator,
      scheduler,
      replayCount,
    );
    iter.dispatch(getCurrentLocation());
    return iter;
  },
};

export const locationAsyncIterable = createPersistentStateAsyncIterable(
  historyIterable,
  () => emptyLocation,
  locationEquals,
);
