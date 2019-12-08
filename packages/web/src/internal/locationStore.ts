import { SchedulerLike } from "@reactive-js/scheduler";
import {
  createPersistentStateStore,
  AsyncIteratorLike,
  StateStoreResourceLike,
  StateUpdaterLike,
} from "@reactive-js/ix";
import { ObservableLike } from "@reactive-js/rx";
import { concat, ofValue } from "@reactive-js/observable";
import { fromEvent } from "./event";

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

const getCurrentLocation = (): LocationLike => {
  const path = window.location.pathname;
  const query = chopLeadingChar(window.location.search);
  const fragment = chopLeadingChar(window.location.hash);
  return { path, query, fragment };
};

const dispatch = (newLocation: LocationLike) => {
  const currentLocation = getCurrentLocation();
  if (!locationEquals(currentLocation, newLocation)) {
    const { path, query, fragment } = newLocation;
    let uriString = path;
    uriString = query.length > 0 ? `${uriString}?${query}` : uriString;
    uriString = fragment.length > 0 ? `${uriString}#${fragment}` : uriString;
    window.history.pushState(undefined, "", uriString);
  }
};

const getCurrentLocationStateUpdater = (
  _?: unknown,
): StateUpdaterLike<LocationLike> => {
  const uri = getCurrentLocation();
  return (_: LocationLike) => uri;
};

const observable: ObservableLike<StateUpdaterLike<LocationLike>> = concat(
  ofValue(getCurrentLocationStateUpdater()),
  fromEvent(window, "popstate", getCurrentLocationStateUpdater),
);

const historyIterator: AsyncIteratorLike<
  LocationLike,
  StateUpdaterLike<LocationLike>
> = {
  dispatch,
  subscribe: subscriber => observable.subscribe(subscriber),
};

export const createLocationStoreResource = (
  scheduler: SchedulerLike,
): StateStoreResourceLike<LocationLike> =>
  createPersistentStateStore(
    historyIterator,
    emptyLocation,
    scheduler,
    locationEquals,
  );
