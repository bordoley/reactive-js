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
  private readonly stateContainer: StateContainerLike<string>;

  constructor(scheduler: SchedulerLike) {
    const initialState = getCurrentLocation();
    const stateContainer = StateContainerResource.create(
      initialState,
      scheduler,
    );

    const subscription = connect(
      merge(
        lift(
          observableEvent(window, "popstate", _ => getCurrentLocation()),
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

    this.disposable = Disposable.compose(subscription, stateContainer);
    this.stateContainer = stateContainer;
  }

  get isDisposed() {
    return this.disposable.isDisposed;
  }

  dispose() {
    this.disposable.dispose();
  }

  subscribe(subscriber: SubscriberLike<string>) {
    this.stateContainer.subscribe(subscriber);
  }

  dispatch(updater: StateUpdater<string>) {
    this.stateContainer.dispatch(updater);
  }
}

const create = (scheduler: SchedulerLike): StateContainerResourceLike<string> =>
  new DomLocationStateContainerResourceImpl(scheduler);

export const LocationState = {
  create,
};
