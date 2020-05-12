import { DisposableLike, add, disposeOnError } from "../../disposable";
import {
  Selector2,
  Operator,
  Selector3,
  Selector4,
  Selector5,
} from "../../functions";
import { SchedulerLike } from "../../scheduler";
import { ObservableLike, SubscriberLike } from "./interfaces";

class UsingObservable<TResource extends DisposableLike, T>
  implements ObservableLike<T> {
  readonly isSynchronous = false;

  constructor(
    private readonly resourceFactory: Operator<
      SchedulerLike,
      TResource | TResource[]
    >,
    private readonly observableFactory: (
      ...resources: TResource[]
    ) => ObservableLike<T>,
  ) {}

  subscribe(subscriber: SubscriberLike<T>) {
    const resources = this.resourceFactory(subscriber);
    const observableFactory = this.observableFactory;

    const resourcesArray = Array.isArray(resources) ? resources : [resources];
    (add as any)(subscriber, ...resourcesArray);
    observableFactory(...resourcesArray).subscribe(subscriber);

    const teardownSubscriberOnError = disposeOnError(subscriber);
    for (const r of resourcesArray) {
      add(r, teardownSubscriberOnError);
    }
  }
}

export function using<TResource extends DisposableLike, T>(
  resourceFactory: Operator<SchedulerLike, TResource>,
  observableFactory: Operator<TResource, ObservableLike<T>>,
): ObservableLike<T>;

export function using<
  TResource1 extends DisposableLike,
  TResource2 extends DisposableLike,
  T
>(
  resourceFactory: Operator<SchedulerLike, [TResource1, TResource2]>,
  observableFactory: Selector2<TResource1, TResource2, ObservableLike<T>>,
): ObservableLike<T>;

export function using<
  TResource1 extends DisposableLike,
  TResource2 extends DisposableLike,
  TResource3 extends DisposableLike,
  T
>(
  resourceFactory: Operator<
    SchedulerLike,
    [TResource1, TResource2, TResource3]
  >,
  observableFactory: Selector3<
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
  resourceFactory: Operator<
    SchedulerLike,
    [TResource1, TResource2, TResource3, TResource4]
  >,
  observableFactory: Selector4<
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
  resourceFactory: Operator<
    SchedulerLike,
    [TResource1, TResource2, TResource3, TResource4, TResource5]
  >,
  observableFactory: Selector5<
    TResource1,
    TResource2,
    TResource3,
    TResource4,
    TResource5,
    ObservableLike<T>
  >,
): ObservableLike<T>;

export function using<TResource extends DisposableLike, T>(
  resourceFactory: Operator<SchedulerLike, TResource | TResource[]>,
  observableFactory: (...resources: TResource[]) => ObservableLike<T>,
): ObservableLike<T>;

/**
 * Creates an `ObservableLike` that uses one or more resources which
 * will be disposed when the ObservableLike disposes it's only subscription.
 */
export function using<TResource extends DisposableLike, T>(
  resourceFactory: Operator<SchedulerLike, TResource | TResource[]>,
  observableFactory: (...resources: TResource[]) => ObservableLike<T>,
): ObservableLike<T> {
  return new UsingObservable(resourceFactory, observableFactory);
}
