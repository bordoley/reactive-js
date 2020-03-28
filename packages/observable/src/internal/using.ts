import { DisposableLike } from "@reactive-js/disposable";
import { ObservableLike, SubscriberLike } from "./interfaces";
import { enumerate } from "./observable";

class UsingObservable<TResource extends DisposableLike[] | DisposableLike, T>
  implements ObservableLike<T> {
  readonly enumerate = enumerate;
  readonly isSynchronous = false;

  constructor(
    private readonly resourceFactory: () => TResource | TResource[],
    private readonly observableFactory: (
      ...resources: TResource[]
    ) => ObservableLike<T>,
  ) {}

  subscribe(subscriber: SubscriberLike<T>) {
    const resources = this.resourceFactory();
    const observableFactory = this.observableFactory;

    if (Array.isArray(resources)) {
      for(const resource of resources) {
        subscriber.add(resource as DisposableLike);
      }
      observableFactory(...resources).subscribe(subscriber);
    } else {
      subscriber.add(resources as DisposableLike);
      observableFactory(resources).subscribe(subscriber);
    }
  }
}

export function using<TResource extends DisposableLike, T>(
  resourceFactory: () => TResource,
  observableFactory: (resource: TResource) => ObservableLike<T>,
): ObservableLike<T>;

export function using<
  TResource1 extends DisposableLike,
  TResource2 extends DisposableLike,
  T
>(
  resourceFactory: () => [TResource1, TResource2],
  observableFactory: (r1: TResource1, r2: TResource2) => ObservableLike<T>,
): ObservableLike<T>;

export function using<
  TResource1 extends DisposableLike,
  TResource2 extends DisposableLike,
  TResource3 extends DisposableLike,
  T
>(
  resourceFactory: () => [TResource1, TResource2, TResource3],
  observableFactory: (
    r1: TResource1,
    r2: TResource2,
    r3: TResource3,
  ) => ObservableLike<T>,
): ObservableLike<T>;

export function using<
  TResource1 extends DisposableLike,
  TResource2 extends DisposableLike,
  TResource3 extends DisposableLike,
  TResource4 extends DisposableLike,
  T
>(
  resourceFactory: () => [TResource1, TResource2, TResource3, TResource4],
  observableFactory: (
    r1: TResource1,
    r2: TResource2,
    r3: TResource3,
    r4: TResource4,
  ) => ObservableLike<T>,
): ObservableLike<T>;

export function using<
  TResource1 extends DisposableLike,
  TResource2 extends DisposableLike,
  TResource3 extends DisposableLike,
  TResource4 extends DisposableLike,
  TResource5 extends DisposableLike,
  T
>(
  resourceFactory: () => [
    TResource1,
    TResource2,
    TResource3,
    TResource4,
    TResource5,
  ],
  observableFactory: (
    r1: TResource1,
    r2: TResource2,
    r3: TResource3,
    r4: TResource5,
  ) => ObservableLike<T>,
): ObservableLike<T>;

/**
 * Creates an `ObservableLike` that uses one or more resources which
 * will be disposed when the ObservableLike disposes it's only subscription.
 */
export function using<TResource extends DisposableLike[] | DisposableLike, T>(
  resourceFactory: () => TResource | TResource[],
  observableFactory: (...resources: TResource[]) => ObservableLike<T>,
): ObservableLike<T> {
  return new UsingObservable(resourceFactory, observableFactory);
}
