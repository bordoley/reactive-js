import { SchedulerLike } from "@reactive-js/scheduler";
import {
  createPersistentStateAsyncIterable,
  AsyncIteratorResourceLike,
} from "@reactive-js/ix";
import {
  concat,
  ofValue,
  MulticastObservableResourceLike,
  publish,
  SubscriberLike,
} from "@reactive-js/rx";
import { fromEvent } from "./event";
import { pipe } from "@reactive-js/pipe";
import { disposableMixin } from "@reactive-js/disposable";

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

class HistoryIteratorResourceImpl
  implements AsyncIteratorResourceLike<LocationLike, LocationLike> {

  constructor(
    private readonly disposable: MulticastObservableResourceLike<LocationLike>,
  ) {}

  get isDisposed(): boolean {
    return this.disposable.isDisposed;
  }

  get subscriberCount(): number {
    return this.disposable.subscriberCount;
  }

  add = disposableMixin.add;

  dispatch(newLocation: LocationLike) {
    const currentLocation = getCurrentLocation();
    if (!locationEquals(currentLocation, newLocation)) {
      const { path, query, fragment } = newLocation;
      let uriString = path;
      uriString = query.length > 0 ? `${uriString}?${query}` : uriString;
      uriString = fragment.length > 0 ? `${uriString}#${fragment}` : uriString;
      window.history.pushState(undefined, "", uriString);
    }
  }

  dispose = disposableMixin.dispose;

  remove = disposableMixin.remove;

  subscribe(subscriber: SubscriberLike<LocationLike>) {
    this.disposable.subscribe(subscriber);
  }
}

const historyIterable = {
  getIXAsyncIterator(scheduler: SchedulerLike, replayCount?: number) {
    const observable: MulticastObservableResourceLike<LocationLike> = pipe(
      concat(
        ofValue(getCurrentLocation()),
        fromEvent(window, "popstate", getCurrentLocation),
      ),
      publish(scheduler, replayCount),
    );
    return new HistoryIteratorResourceImpl(observable);
  },
}

export const locationAsyncIterable = createPersistentStateAsyncIterable(
  historyIterable,
  () => emptyLocation,
  locationEquals,
);