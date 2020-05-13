import { DisposableLike, add, disposeOnError } from "../../disposable.ts";
import {
  Function2,
  Function,
  Function3,
  Function4,
  Function5,
} from "../../functions.ts";
import { SchedulerLike } from "../../scheduler.ts";
import { ObservableLike, SubscriberLike } from "./interfaces.ts";

class UsingObservable<TResource extends DisposableLike, T>
  implements ObservableLike<T> {
  readonly isSynchronous = false;

  constructor(
    private readonly resourceFactory: Function<
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
  resourceFactory: Function<SchedulerLike, TResource>,
  observableFactory: Function<TResource, ObservableLike<T>>,
): ObservableLike<T>;

export function using<
  TResource1 extends DisposableLike,
  TResource2 extends DisposableLike,
  T
>(
  resourceFactory: Function<SchedulerLike, [TResource1, TResource2]>,
  observableFactory: Function2<TResource1, TResource2, ObservableLike<T>>,
): ObservableLike<T>;

export function using<
  TResource1 extends DisposableLike,
  TResource2 extends DisposableLike,
  TResource3 extends DisposableLike,
  T
>(
  resourceFactory: Function<
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
  resourceFactory: Function<
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
  resourceFactory: Function<
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
  resourceFactory: Function<SchedulerLike, TResource | TResource[]>,
  observableFactory: (...resources: TResource[]) => ObservableLike<T>,
): ObservableLike<T>;

/**
 * Creates an `ObservableLike` that uses one or more resources which
 * will be disposed when the ObservableLike disposes it's only subscription.
 */
export function using<TResource extends DisposableLike, T>(
  resourceFactory: Function<SchedulerLike, TResource | TResource[]>,
  observableFactory: (...resources: TResource[]) => ObservableLike<T>,
): ObservableLike<T> {
  return new UsingObservable(resourceFactory, observableFactory);
}
