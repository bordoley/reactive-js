import {
  pipe,
  createSubject,
  connect,
  ignoreElements,
  share,
  onNext,
  merge,
  scan,
  map,
  startWith,
} from "@reactive-js/rx-observable";
import { SchedulerLike } from "@reactive-js/scheduler";
import { fromEvent } from "./event";
import { AsyncIteratorResourceLike } from "@reactive-js/ix-core";
import { DisposableOrTeardown } from "@reactive-js/disposable";
import { SubscriberLike, ObservableLike } from "@reactive-js/rx-core";
import { StateUpdater } from "@reactive-js/ix-async-iterator-resource";

export interface Location {
  readonly fragment: string;
  readonly path: string;
  readonly query: string;
}

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

class LocationStoreResourceImpl
  implements AsyncIteratorResourceLike<StateUpdater<Location>, Location> {
  private readonly subject = createSubject(1);
  private readonly observable: ObservableLike<Location>;

  get isDisposed(): boolean {
    return this.subject.isDisposed;
  }

  constructor(scheduler: SchedulerLike) {
    const currentLocation = getCurrentLocation();
    this.observable = pipe(
      merge(
        pipe(
          fromEvent(window, "popstate", _ => getCurrentLocation()),
          map(uri => (_: Location) => uri),
          onNext(next => this.subject.next(next)),
          ignoreElements(),
        ),
        pipe(
          this.subject,
          scan(
            (acc, updater: StateUpdater<Location>) => updater(acc),
            currentLocation,
          ),
          onNext((newLocation: Location) => {
            const currentLocation = getCurrentLocation();
            if (!locationEquals(currentLocation, newLocation)) {
              const { path, query, fragment } = newLocation;
              let uriString = path;
              uriString =
                query.length > 0 ? `${uriString}?${query}` : uriString;
              uriString =
                fragment.length > 0 ? `${uriString}#${fragment}` : uriString;
              window.history.pushState(undefined, "", uriString);
            }
          }),
          startWith(currentLocation),
        ),
      ),
      share(scheduler),
    );

    const popStateSubscription = connect(this.observable, scheduler);
    this.subject.add(popStateSubscription);
  }

  add(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ) {
    this.subject.add(disposable, ...disposables);
  }

  dispatch(updater: StateUpdater<Location>) {
    this.subject.next(updater);
  }

  dispose() {
    this.subject.dispose();
  }

  remove(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ) {
    this.subject.remove(disposable, ...disposables);
  }

  subscribe(subscriber: SubscriberLike<Location>) {
    this.observable.subscribe(subscriber);
  }
}

export const createLocationStoreResource = (
  scheduler: SchedulerLike,
): AsyncIteratorResourceLike<StateUpdater<Location>, Location> =>
  new LocationStoreResourceImpl(scheduler);
