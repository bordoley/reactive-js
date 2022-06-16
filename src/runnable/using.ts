import {
  addDisposableDisposeParentOnChildError,
  DisposableLike,
} from "../disposable";
import {
  Factory,
  Function1,
  Function2,
  Function3,
  Function4,
  Function5,
} from "../functions";
import { RunnableLike } from "../runnable";
import { createRunnable } from "./createRunnable";
import { SinkLike } from "../sink";

export function using<TResource extends DisposableLike, T>(
  resourceFactory: Factory<TResource>,
  observableFactory: Function1<TResource, RunnableLike<T>>,
): RunnableLike<T>;

export function using<
  TResource1 extends DisposableLike,
  TResource2 extends DisposableLike,
  T,
>(
  resourceFactory: Factory<[TResource1, TResource2]>,
  observableFactory: Function2<TResource1, TResource2, RunnableLike<T>>,
): RunnableLike<T>;

export function using<
  TResource1 extends DisposableLike,
  TResource2 extends DisposableLike,
  TResource3 extends DisposableLike,
  T,
>(
  resourceFactory: Factory<[TResource1, TResource2, TResource3]>,
  observableFactory: Function3<
    TResource1,
    TResource2,
    TResource3,
    RunnableLike<T>
  >,
): RunnableLike<T>;

export function using<
  TResource1 extends DisposableLike,
  TResource2 extends DisposableLike,
  TResource3 extends DisposableLike,
  TResource4 extends DisposableLike,
  T,
>(
  resourceFactory: Factory<[TResource1, TResource2, TResource3, TResource4]>,
  observableFactory: Function4<
    TResource1,
    TResource2,
    TResource3,
    TResource4,
    RunnableLike<T>
  >,
): RunnableLike<T>;

export function using<
  TResource1 extends DisposableLike,
  TResource2 extends DisposableLike,
  TResource3 extends DisposableLike,
  TResource4 extends DisposableLike,
  TResource5 extends DisposableLike,
  T,
>(
  resourceFactory: Factory<
    [TResource1, TResource2, TResource3, TResource4, TResource5]
  >,
  observableFactory: Function5<
    TResource1,
    TResource2,
    TResource3,
    TResource4,
    TResource5,
    RunnableLike<T>
  >,
): RunnableLike<T>;

export function using<TResource extends DisposableLike, T>(
  resourceFactory: Factory<TResource | readonly TResource[]>,
  observableFactory: (...resources: readonly TResource[]) => RunnableLike<T>,
): RunnableLike<T>;

/**
 * Creates an `RunnableLike` that uses one or more resources which
 * will be disposed when the RunnableLike disposes it's only subscription.
 */
export function using<TResource extends DisposableLike, T>(
  resourceFactory: Factory<TResource | readonly TResource[]>,
  runnableFactory: (...resources: readonly TResource[]) => RunnableLike<T>,
): RunnableLike<T> {
  const run = (sink: SinkLike<T>) => {
    const resources = resourceFactory();
    const resourcesArray = Array.isArray(resources) ? resources : [resources];
    const runnable = runnableFactory(...resourcesArray);

    for (const r of resourcesArray) {
      addDisposableDisposeParentOnChildError(sink, r);
    }

    runnable.run(sink);
  };
  return createRunnable(run);
}
