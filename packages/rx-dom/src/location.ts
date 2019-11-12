import { Disposable, DisposableLike } from "@rx-min/rx-disposables";
import { Observable, SchedulerLike, SubscriberLike } from "@rx-min/rx-core";
import { onNext } from "@rx-min/rx-operators";
import {
  ObservableState,
  ObservableStateLike,
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
    const observableState = ObservableState.create(initialState, scheduler);

    const setState = (state: string) => observableState.dispatch(_ => state);

    const subscription = Observable.connect(
      Observable.lift(
        observableEvent(window, "popstate", _ => getCurrentLocation()),
        onNext(setState),
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

const create = (scheduler: SchedulerLike): ObservableStateResourceLike<string> =>
  new DomLocationObservableStateResourceImpl(scheduler);

export const Location ={
  create,
};