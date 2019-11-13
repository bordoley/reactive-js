import { Disposable, DisposableLike } from "@rx-min/rx-disposables";
import { connect, lift, SchedulerLike, SubscriberLike } from "@rx-min/rx-core";
import { keep, onNext } from "@rx-min/rx-operators";
import { merge } from "@rx-min/rx-observables";
import {
  StateContainerLike,
  StateContainerResource,
  StateContainerResourceLike,
  StateUpdater,
} from "@rx-min/ix-state-container";

import { observableEvent } from "./observableEvent";

const getCurrentLocation = () => {
  const path = window.location.pathname;
  const query = window.location.search;
  const fragment = window.location.hash;
  return path + query + fragment;
};

class DomLocationStateContainerResourceImpl
  implements StateContainerResourceLike<string> {
  private readonly disposable: DisposableLike;
  private readonly observableState: StateContainerLike<string>;

  constructor(scheduler: SchedulerLike) {
    const initialState = getCurrentLocation();
    const observableState = StateContainerResource.create(
      initialState,
      scheduler,
    );

    const subscription = connect(
      merge(
        lift(
          observableEvent(window, "popstate", _ => getCurrentLocation()),
          onNext((state: string) => observableState.dispatch(_ => state)),
        ),
        lift(
          observableState,
          keep(location => location !== getCurrentLocation()),
          onNext((next: string) =>
            window.history.pushState(undefined, "", next),
          ),
        ),
      ),
      scheduler,
    );

    this.disposable = Disposable.compose(subscription, observableState);
    this.observableState = observableState;
  }

  get isDisposed() {
    return this.disposable.isDisposed;
  }

  dispose() {
    this.disposable.dispose();
  }

  subscribe(subscriber: SubscriberLike<string>) {
    this.observableState.subscribe(subscriber);
  }

  dispatch(updater: StateUpdater<string>) {
    this.observableState.dispatch(updater);
  }
}

const create = (
  scheduler: SchedulerLike,
): StateContainerResourceLike<string> =>
  new DomLocationStateContainerResourceImpl(scheduler);

export const LocationState = {
  create,
};
