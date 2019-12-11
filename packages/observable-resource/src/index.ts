import { DisposableLike, DisposableOrTeardown } from "@reactive-js/disposable";
import {
  ObservableLike,
  ObservableResourceLike,
  SubscriberLike,
} from "@reactive-js/rx";
import { ObservableOperatorLike } from "@reactive-js/observable";

export interface ObservableResourceOperatorLike<A, B> {
  (observable: ObservableResourceLike<A>): ObservableResourceLike<B>;
}

class LiftedObservableResource<T> implements ObservableResourceLike<T> {
  readonly disposable: DisposableLike;
  readonly observable: ObservableLike<T>;
  constructor(observable: ObservableLike<T>, disposable: DisposableLike) {
    this.observable = observable;
    this.disposable = disposable;
  }

  get isDisposed() {
    return this.disposable.isDisposed;
  }

  add(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ) {
    this.disposable.add(disposable, ...disposables);
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

  subscribe(subscriber: SubscriberLike<T>): void {
    this.observable.subscribe(subscriber);
  }
}

export const lift = <A, B>(
  operator: ObservableOperatorLike<A, B>,
): ObservableResourceOperatorLike<A, B> => observableResource => {
  const liftedObservable = operator(
    observableResource instanceof LiftedObservableResource
      ? observableResource.observable
      : observableResource,
  );

  const disposable =
    observableResource instanceof LiftedObservableResource
      ? observableResource.disposable
      : observableResource;

  return new LiftedObservableResource(liftedObservable, disposable);
};
