import { SchedulerLike } from "@reactive-js/scheduler";
import { fromEvent } from "./event";
import { AsyncIteratorResourceLike, AsyncIteratorLike } from "@reactive-js/ix";
import {
  createPersistentStateStore,
  StateUpdater,
} from "@reactive-js/async-iterator-resource";
import { ObservableLike } from "@reactive-js/rx";
import { concat, ofValue } from "@reactive-js/observable";

export interface Location {
  readonly fragment: string;
  readonly path: string;
  readonly query: string;
}

const emptyLocation = {
  fragment: "",
  path: "",
  query: "",
};

const locationEquals = (a: Location, b: Location): boolean =>
  a === b ||
  (a.path === b.path && a.query === b.query && a.fragment === b.fragment);

const chopLeadingChar = (str: string) =>
  str.length > 0 ? str.substring(1) : "";

const getCurrentLocation = (): Location => {
  const path = window.location.pathname;
  const query = chopLeadingChar(window.location.search);
  const fragment = chopLeadingChar(window.location.hash);
  return { path, query, fragment };
};

const dispatch = (newLocation: Location) => {
  const currentLocation = getCurrentLocation();
  if (!locationEquals(currentLocation, newLocation)) {
    const { path, query, fragment } = newLocation;
    let uriString = path;
    uriString = query.length > 0 ? `${uriString}?${query}` : uriString;
    uriString = fragment.length > 0 ? `${uriString}#${fragment}` : uriString;
    window.history.pushState(undefined, "", uriString);
  }
};

const getCurrentLocationStateUpdater = (_?: unknown): StateUpdater<Location> => {
  const uri = getCurrentLocation();
  return (_: Location) => uri;
};

const observable: ObservableLike<StateUpdater<Location>> = concat(
  ofValue(getCurrentLocationStateUpdater()),
  fromEvent(
    window,
    "popstate",
    getCurrentLocationStateUpdater,
  ),
);

const historyIterator: AsyncIteratorLike<
  Location,
  StateUpdater<Location>
> = {
  dispatch,
  subscribe: subscriber => observable.subscribe(subscriber),
};

export const createLocationStoreResource = (
  scheduler: SchedulerLike,
): AsyncIteratorResourceLike<StateUpdater<Location>, Location> =>
  createPersistentStateStore(
    historyIterator,
    emptyLocation,
    scheduler,
    locationEquals,
  );
