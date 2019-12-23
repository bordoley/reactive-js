import { DisposableLike } from "@reactive-js/disposable";
import { ObservableLike, SubscriberLike } from "@reactive-js/rx";

class UsingObservable<TResource extends DisposableLike[] | DisposableLike, T>
  implements ObservableLike<T> {
  constructor(
    private readonly resourceFactory: () => TResource,
    private readonly observableFactory: (
      resource: TResource,
    ) => ObservableLike<T>,
  ) {}

  subscribe(subscriber: SubscriberLike<T>) {
    const resources = this.resourceFactory();

    // FIXME: Playing a little loose with the typing here.
    if (Array.isArray(resources)) {
      subscriber.add.apply(subscriber, resources as any);
    } else {
      subscriber.add(resources as DisposableLike);
    }

    this.observableFactory(resources).subscribe(subscriber);
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
  observableFactory: (resource: [TResource1, TResource2]) => ObservableLike<T>,
): ObservableLike<T>;

export function using<
  TResource1 extends DisposableLike,
  TResource2 extends DisposableLike,
  TResource3 extends DisposableLike,
  T
>(
  resourceFactory: () => [TResource1, TResource2, TResource3],
  observableFactory: (
    resource: [TResource1, TResource2, TResource3],
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
    resource: [TResource1, TResource2, TResource3, TResource4],
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
    resource: [TResource1, TResource2, TResource3, TResource4, TResource5],
  ) => ObservableLike<T>,
): ObservableLike<T>;
export function using<TResource extends DisposableLike[] | DisposableLike, T>(
  resourceFactory: () => TResource,
  observableFactory: (resource: TResource) => ObservableLike<T>,
): ObservableLike<T> {
  return new UsingObservable(resourceFactory, observableFactory);
}
