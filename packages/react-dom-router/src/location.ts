import {
  Disposable,
  DisposableLike,
  DisposableOrTeardown,
} from "@reactive-js/disposables";
import { Observable, SubscriberLike } from "@reactive-js/rx-core";
import { merge } from "@reactive-js/rx-observables";
import { keep, onNext } from "@reactive-js/rx-operators";
import { SchedulerLike } from "@reactive-js/scheduler";
import {
  StateContainerLike,
  StateContainerResource,
  StateContainerResourceLike,
  StateUpdater,
} from "@reactive-js/state-container";

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
    const stateContainer = StateContainerResource.create(
      initialState,
      undefined,
      scheduler,
      priority,
    );

    const subscription = Observable.connect(
      merge(
        Observable.lift(
          fromEvent(window, "popstate", _ => getCurrentLocation(), priority),
          onNext((state: string) => stateContainer.dispatch(_ => state)),
        ),
        Observable.lift(
          stateContainer,
          keep(location => location !== getCurrentLocation()),
          onNext((next: string) =>
            window.history.pushState(undefined, "", next),
          ),
        ),
      ),
      scheduler,
    );

    this.disposable = Disposable.create();
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

const create = (
  scheduler?: SchedulerLike,
  priority?: number,
): StateContainerResourceLike<string> =>
  new DomLocationStateContainerResourceImpl(scheduler, priority);

export const LocationState = {
  create,
};
