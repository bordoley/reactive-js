import { create as createRouter, RouterProps } from "@reactive-js/react-router";
import { RelativeURI } from "@reactive-js/react-router-relative-uri";
import {
  create as stateContainerCreate,
  StateContainerLike,
  StateContainerResourceLike,
  StateUpdater,
} from "@reactive-js/state-container";

import {
  lift as liftIterator,
  map as asyncIteratorMap,
} from "@reactive-js/ix-async-iterator-resource";
import {
  distinctUntilChanged,
  keep,
  map,
  onNext,
} from "@reactive-js/rx-operators";

import { scheduler } from "@reactive-js/react-scheduler";

import {
  create as disposableCreate,
  DisposableLike,
  DisposableOrTeardown,
} from "@reactive-js/disposable";
import { connect, lift } from "@reactive-js/rx-observable";
import { merge } from "@reactive-js/rx-observables";
import { SubscriberLike } from "@reactive-js/rx-subscriber";
import { SchedulerLike } from "@reactive-js/scheduler";

import { fromEvent } from "@reactive-js/dom";

const getCurrentLocation = () => {
  const path = window.location.pathname;
  const query = window.location.search;
  const fragment = window.location.hash;
  return path + query + fragment;
};

class DomLocationStateContainerResourceImpl
  implements StateContainerResourceLike<string> {
  get isDisposed(): boolean {
    return this.disposable.isDisposed;
  }
  private readonly disposable: DisposableLike;
  private readonly stateContainer: StateContainerLike<string>;

  constructor(scheduler?: SchedulerLike, priority?: number) {
    const initialState = getCurrentLocation();
    const stateContainer = stateContainerCreate(
      initialState,
      undefined,
      scheduler,
      priority,
    );

    const subscription = connect(
      merge(
        lift(
          fromEvent(window, "popstate", _ => getCurrentLocation(), priority),
          onNext((state: string) => stateContainer.dispatch(_ => state)),
        ),
        lift(
          stateContainer,
          keep(location => location !== getCurrentLocation()),
          onNext((next: string) =>
            window.history.pushState(undefined, "", next),
          ),
        ),
      ),
      scheduler,
    );

    this.disposable = disposableCreate();
    this.disposable.add(subscription, stateContainer);

    this.stateContainer = stateContainer;
  }

  add(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ) {
    this.disposable.add(disposable, ...disposables);
  }

  dispatch(updater: StateUpdater<string>) {
    this.stateContainer.dispatch(updater);
  }

  dispose() {
    this.disposable.dispose();
  }

  remove(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ) {
    this.disposable.remove(disposable, ...disposables);
  }

  subscribe(subscriber: SubscriberLike<string>) {
    this.stateContainer.subscribe(subscriber);
  }
}

const mapper = (v: string): RelativeURI => {
  const parsedAccURL = new URL(v);
  return {
    path: parsedAccURL.pathname,
    query: parsedAccURL.search,
    fragment: parsedAccURL.hash,
  };
};

const reducer = (
  acc: string,
  stateUpdater: StateUpdater<RelativeURI>,
): string => {
  const parsedAccURL = new URL(acc);
  const accRelativeURI = {
    path: parsedAccURL.pathname,
    query: parsedAccURL.search,
    fragment: parsedAccURL.hash,
  };

  const { path, query, fragment } = stateUpdater(accRelativeURI);
  return path + query + fragment;
};

const requestMapper = (updater: StateUpdater<RelativeURI>) => (acc: string) =>
  reducer(acc, updater);

const createRelativeURILocation = (priority?: number) => {
  const lifted = liftIterator(
    new DomLocationStateContainerResourceImpl(scheduler, priority),
    map(mapper),
    distinctUntilChanged(),
  );

  return asyncIteratorMap(lifted, requestMapper);
};

export const create = (priority?: number): React.ComponentType<RouterProps> =>
  createRouter(() => createRelativeURILocation(priority));
