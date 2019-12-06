import {
  pipe,
  createSubject,
  connect,
  ignoreElements,
  share,
  onNext,
  merge,
  scan,
  startWith,
} from "@reactive-js/observable";
import { SchedulerLike } from "@reactive-js/scheduler";
import { fromEvent } from "./event";
import { AsyncIteratorResourceLike } from "@reactive-js/ix";
import { DisposableOrTeardown } from "@reactive-js/disposable";
import { SubscriberLike, ObservableLike } from "@reactive-js/rx";
import { StateUpdater } from "@reactive-js/async-iterator-resource";

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

const historyPushState = (newLocation: Location) => {
  const currentLocation = getCurrentLocation();
  if (!locationEquals(currentLocation, newLocation)) {
    const { path, query, fragment } = newLocation;
    let uriString = path;
    uriString = query.length > 0 ? `${uriString}?${query}` : uriString;
    uriString = fragment.length > 0 ? `${uriString}#${fragment}` : uriString;
    window.history.pushState(undefined, "", uriString);
  }
};

const getCurrentLocationStateUpdater = (_: unknown) => {
  const uri = getCurrentLocation();
  return (_: Location) => uri;
};

const applyUpdaterReducer = (acc: Location, updater: StateUpdater<Location>) =>
  updater(acc);

class LocationStoreResourceImpl
  implements AsyncIteratorResourceLike<StateUpdater<Location>, Location> {
  private readonly subject = createSubject();
  private readonly observable: ObservableLike<Location>;
  constructor(scheduler: SchedulerLike) {
    const initialLocation = getCurrentLocation();

    const popstateObservable = pipe(
      fromEvent(window, "popstate", getCurrentLocationStateUpdater),
      onNext(next => this.subject.next(next)),
      ignoreElements(),
    );

    const currentLocationObservable = pipe(
      this.subject,
      scan(applyUpdaterReducer, initialLocation),
      onNext(historyPushState),
      startWith(initialLocation),
    );

    this.observable = pipe(
      merge(popstateObservable, currentLocationObservable),
      share(scheduler, 1),
    );

    this.subject.add(connect(this.observable, scheduler));
  }

  get isDisposed(): boolean {
    return this.subject.isDisposed;
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
