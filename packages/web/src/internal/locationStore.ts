import { SchedulerLike } from "@reactive-js/scheduler";
import {
  createPersistentStateStore,
  AsyncIteratorLike,
  StateStoreResourceLike,
} from "@reactive-js/ix";
import { MulticastObservableLike } from "@reactive-js/rx";
import { concat, ofValue, share } from "@reactive-js/observable";
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

export const createLocationStoreResource = (
  scheduler: SchedulerLike,
): StateStoreResourceLike<LocationLike> => {
  const observable: MulticastObservableLike<LocationLike> = pipe(
    concat(
      ofValue(getCurrentLocation()),
      fromEvent(window, "popstate", getCurrentLocation),
    ),
    share(scheduler),
  );

  const historyIterator: AsyncIteratorLike<LocationLike, LocationLike> = {
    get subscriberCount() {
      return observable.subscriberCount;
    },
    dispatch,
    subscribe: subscriber => observable.subscribe(subscriber),
  };

  return createPersistentStateStore(
    historyIterator,
    emptyLocation,
    scheduler,
    locationEquals,
  );
};
