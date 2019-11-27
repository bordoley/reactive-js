import { DisposableOrTeardown } from "@reactive-js/disposable";
import { SubscriberLike } from "@reactive-js/rx-subscriber";
import { connect, ObservableLike, pipe } from "@reactive-js/rx-observable";
import { SchedulerLike } from "@reactive-js/scheduler";
import {
  distinctUntilChanged,
  scan,
  shareReplayLast,
  startWith,
} from "@reactive-js/rx-observables";
import { create as eventResourceCreate } from "@reactive-js/ix-event";
import { AsyncIteratorResourceLike } from "@reactive-js/ix-async-iterator-resource";
import {
  StateContainerLike,
  StateUpdater,
} from "@reactive-js/ix-state-container";

/** @noInheritDoc */
export interface StateContainerResourceLike<T>
  extends AsyncIteratorResourceLike<StateUpdater<T>, T>,
    StateContainerLike<T> {}

class StateContainerResourceImpl<T> implements StateContainerResourceLike<T> {
  get isDisposed(): boolean {
    return this.dispatcher.isDisposed;
  }
  private readonly delegate: ObservableLike<T>;
  private readonly dispatcher: AsyncIteratorResourceLike<
    StateUpdater<T>,
    StateUpdater<T>
  >;

  constructor(
    delegate: ObservableLike<T>,
    dispatcher: AsyncIteratorResourceLike<StateUpdater<T>, StateUpdater<T>>,
  ) {
    this.delegate = delegate;
    this.dispatcher = dispatcher;
  }

  add(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ) {
    this.dispatcher.add(disposable, ...disposables);
  }

  dispatch(updater: StateUpdater<T>) {
    this.dispatcher.dispatch(updater);
  }

  dispose() {
    this.dispatcher.dispose();
  }

  remove(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ) {
    this.dispatcher.remove(disposable, ...disposables);
  }

  subscribe(subscriber: SubscriberLike<T>) {
    this.delegate.subscribe(subscriber);
  }
}

const referenceEquality = <T>(a: T, b: T): boolean => a === b;

export const create = <T>(
  initialState: T,
  equals: (a: T, b: T) => boolean = referenceEquality,
  scheduler?: SchedulerLike,
  priority?: number,
): StateContainerResourceLike<T> => {
  const dispatcher: AsyncIteratorResourceLike<
    StateUpdater<T>,
    StateUpdater<T>
  > = eventResourceCreate();
  const delegate = pipe(
    dispatcher,
    scan((acc, next) => next(acc), initialState),
    startWith(initialState),
    distinctUntilChanged(equals),
    shareReplayLast(scheduler, priority),
  );

  dispatcher.add(connect(delegate, scheduler));
  return new StateContainerResourceImpl(delegate, dispatcher);
};
