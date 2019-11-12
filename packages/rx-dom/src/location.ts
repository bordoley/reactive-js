import { Disposable, DisposableLike } from "@rx-min/rx-disposables";
import { connect, lift, SchedulerLike, SubscriberLike } from "@rx-min/rx-core";
import { keep, onNext } from "@rx-min/rx-operators";
import { merge } from "@rx-min/rx-observables";
import {
  ObservableStateLike,
  ObservableStateResource,
  ObservableStateResourceLike,
  StateUpdater,
} from "@rx-min/rx-observable-state";

import { observableEvent } from "./observableEvent";

const getCurrentLocation = () => {
  const path = window.location.pathname;
  const query = window.location.search;
  const fragment = window.location.hash;
  return path + query + fragment;
};

class DomLocationObservableStateResourceImpl
  implements ObservableStateResourceLike<string> {
  private readonly disposable: DisposableLike;
  private readonly observableState: ObservableStateLike<string>;

  constructor(scheduler: SchedulerLike) {
    const initialState = getCurrentLocation();
    const observableState = ObservableStateResource.create(
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
): ObservableStateResourceLike<string> =>
  new DomLocationObservableStateResourceImpl(scheduler);

export const Location = {
  create,
};
