import { DisposableLike, addDisposableDisposeParentOnChildError } from "../../disposable";
import {
  Function2,
  Function1,
  Function3,
  Function4,
  Function5,
} from "../../functions";
import { SchedulerLike } from "../../scheduler";
import { ObservableLike, ObserverLike } from "./interfaces";
import { observe } from "./observable";

class UsingObservable<TResource extends DisposableLike, T>
  implements ObservableLike<T> {
  readonly isSynchronous = false;

  constructor(
    private readonly resourceFactory: Function1<
      SchedulerLike,
      TResource | TResource[]
    >,
    private readonly observableFactory: (
      ...resources: TResource[]
    ) => ObservableLike<T>,
  ) {}

  observe(observer: ObserverLike<T>) {
    const resources = this.resourceFactory(observer);
    const observableFactory = this.observableFactory;

    const resourcesArray = Array.isArray(resources) ? resources : [resources];

    for (const r of resourcesArray) {
      addDisposableDisposeParentOnChildError(observer, r);
    }

    observe(observableFactory(...resourcesArray), observer);
  }
}

export function using<TResource extends DisposableLike, T>(
  resourceFactory: Function1<SchedulerLike, TResource>,
  observableFactory: Function1<TResource, ObservableLike<T>>,
): ObservableLike<T>;

export function using<
  TResource1 extends DisposableLike,
  TResource2 extends DisposableLike,
  T
>(
  resourceFactory: Function1<SchedulerLike, [TResource1, TResource2]>,
  observableFactory: Function2<TResource1, TResource2, ObservableLike<T>>,
): ObservableLike<T>;

export function using<
  TResource1 extends DisposableLike,
  TResource2 extends DisposableLike,
  TResource3 extends DisposableLike,
  T
>(
  resourceFactory: Function1<
    SchedulerLike,
    [TResource1, TResource2, TResource3]
  >,
  observableFactory: Function3<
    TResource1,
    TResource2,
    TResource3,
    ObservableLike<T>
  >,
): ObservableLike<T>;

export function using<
  TResource1 extends DisposableLike,
  TResource2 extends DisposableLike,
  TResource3 extends DisposableLike,
  TResource4 extends DisposableLike,
  T
>(
  resourceFactory: Function1<
    SchedulerLike,
    [TResource1, TResource2, TResource3, TResource4]
  >,
  observableFactory: Function4<
    TResource1,
    TResource2,
    TResource3,
    TResource4,
    ObservableLike<T>
  >,
): ObservableLike<T>;

export function using<
  TResource1 extends DisposableLike,
  TResource2 extends DisposableLike,
  TResource3 extends DisposableLike,
  TResource4 extends DisposableLike,
  TResource5 extends DisposableLike,
  T
>(
  resourceFactory: Function1<
    SchedulerLike,
    [TResource1, TResource2, TResource3, TResource4, TResource5]
  >,
  observableFactory: Function5<
    TResource1,
    TResource2,
    TResource3,
    TResource4,
    TResource5,
    ObservableLike<T>
  >,
): ObservableLike<T>;

export function using<TResource extends DisposableLike, T>(
  resourceFactory: Function1<SchedulerLike, TResource | TResource[]>,
  observableFactory: (...resources: TResource[]) => ObservableLike<T>,
): ObservableLike<T>;

/**
 * Creates an `ObservableLike` that uses one or more resources which
 * will be disposed when the ObservableLike disposes it's only subscription.
 */
export function using<TResource extends DisposableLike, T>(
  resourceFactory: Function1<SchedulerLike, TResource | TResource[]>,
  observableFactory: (...resources: TResource[]) => ObservableLike<T>,
): ObservableLike<T> {
  return new UsingObservable(resourceFactory, observableFactory);
}
