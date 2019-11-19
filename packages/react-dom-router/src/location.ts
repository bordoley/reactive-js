import {
  Disposable,
  DisposableLike,
  DisposableOrTeardown,
} from "@reactive-js/disposables";
import { connect, Observable, SubscriberLike } from "@reactive-js/rx-core";
import { SchedulerLike } from "@reactive-js/scheduler";
import { keep, onNext } from "@reactive-js/rx-operators";
import { merge } from "@reactive-js/rx-observables";
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
  private readonly disposable: DisposableLike;
  private readonly stateContainer: StateContainerLike<string>;

  constructor(scheduler: SchedulerLike, priority?: number) {
    const initialState = getCurrentLocation();
    const stateContainer = StateContainerResource.create(
      initialState,
      scheduler,
      undefined,
      priority,
    );

    const subscription = connect(
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
    this.disposable.add(subscription);
    this.disposable.add(stateContainer);

    this.stateContainer = stateContainer;
  }

  subscribe(subscriber: SubscriberLike<string>) {
    this.stateContainer.subscribe(subscriber);
  }

  dispatch(updater: StateUpdater<string>) {
    this.stateContainer.dispatch(updater);
  }

  get isDisposed(): boolean {
    return this.disposable.isDisposed;
  }

  add(disposable: DisposableOrTeardown) {
    this.disposable.add(disposable);
  }

  dispose() {
    this.disposable.dispose();
  }

  remove(disposable: DisposableOrTeardown) {
    this.disposable.remove(disposable);
  }
}

const create = (
  scheduler: SchedulerLike,
  priority?: number,
): StateContainerResourceLike<string> =>
  new DomLocationStateContainerResourceImpl(scheduler, priority);

export const LocationState = {
  create,
};
