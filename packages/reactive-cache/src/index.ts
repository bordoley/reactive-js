import {
  AsyncEnumeratorLike,
  createAsyncEnumerator,
} from "@reactive-js/async-enumerable";
import {
  DisposableLike,
  add,
  createDisposable,
  dispose,
  ErrorLike,
} from "@reactive-js/disposable";
import {
  ObservableLike,
  switchAll,
  onSubscribe,
  onDispose,
} from "@reactive-js/observable";
import { pipe } from "@reactive-js/pipe";
import {
  SchedulerLike,
  SchedulerContinuationLike,
  schedule,
} from "@reactive-js/scheduler";

const alwaysFalse = () => false;

class ReactiveCacheSchedulerContinuation<T>
  implements SchedulerContinuationLike {
  readonly add = add;
  readonly delay = 0;
  readonly disposable = createDisposable();
  readonly dispose = dispose;

  constructor(private readonly cache: ReactiveCacheImpl<T>) {}

  get isDisposed(): boolean {
    return this.disposable.isDisposed;
  }

  run(shouldYield?: () => boolean) {
    const { cache, maxCount, garbage } = this.cache;

    shouldYield = shouldYield || alwaysFalse;

    for (const [, enumerator] of garbage) {
      if (enumerator.subscriberCount > 0) {
        this.dispose({ cause: new Error() });
        break;
      } else {
        enumerator.dispose();
      }

      // only delete as many entries as we need to.
      const hasMoreToCleanup = cache.size > maxCount;

      if (hasMoreToCleanup && shouldYield()) {
        return;
      } else if (!hasMoreToCleanup) {
        break;
      }
    }

    this.dispose();
  }
}

/** @noInheritDoc */
export interface ReactiveCacheLike<T> extends DisposableLike {
  get(key: string): ObservableLike<T> | undefined;
  set(key: string, value: ObservableLike<T>): ObservableLike<T>;
}

const markAsGarbage = <T>(
  reactiveCache: ReactiveCacheImpl<T>,
  key: string,
  enumerator: AsyncEnumeratorLike<ObservableLike<T>, T>,
) => {
  reactiveCache.garbage.set(key, enumerator);

  if (
    reactiveCache.cache.size > reactiveCache.maxCount &&
    !reactiveCache.cleaning
  ) {
    const continuation = new ReactiveCacheSchedulerContinuation(reactiveCache);
    continuation.add(() => {
      reactiveCache.cleaning = false;
    });
    reactiveCache.cleaning = true;
    reactiveCache.cleanupScheduler.schedule(continuation);
  }
};

class ReactiveCacheImpl<T> implements ReactiveCacheLike<T> {
  readonly add = add;
  readonly cache: Map<
    string,
    [AsyncEnumeratorLike<ObservableLike<T>, T>, ObservableLike<T>]
  > = new Map();
  cleaning = false;
  readonly disposable = createDisposable();
  readonly dispose = dispose;

  // Set of keys that are eligible to be garbage collected
  readonly garbage: Map<
    string,
    AsyncEnumeratorLike<ObservableLike<T>, T>
  > = new Map();

  constructor(
    private readonly dispatchScheduler: SchedulerLike,
    readonly cleanupScheduler: SchedulerLike,
    // The ideal max number of cache entries.
    // Note don't delete cache entries that are actively being observed.
    readonly maxCount: number,
  ) {
    this.add(() => {
      for (const value of this.cache.values()) {
        const [enumerator] = value;
        enumerator.dispose();
      }
      this.cache.clear();
      this.garbage.clear();
    });
  }

  get isDisposed(): boolean {
    return this.disposable.isDisposed;
  }

  get(key: string): ObservableLike<T> | undefined {
    const cachedValue = this.cache.get(key);
    if (cachedValue !== undefined) {
      const [, observable] = cachedValue;
      return observable;
    }
    return;
  }

  set(key: string, value: ObservableLike<T>): ObservableLike<T> {
    let cachedValue = this.cache.get(key);

    if (cachedValue === undefined) {
      const enumerator = createAsyncEnumerator<ObservableLike<T>, T>(
        switchAll(),
        this.dispatchScheduler,
        1,
      ).add(() => {
        this.cache.delete(key);
        this.garbage.delete(key);
      });

      const onSubscribeUnmark = () => {
        this.garbage.delete(key);
      };

      const onDisposeCleanup = (_?: ErrorLike) => {
        this.add(
          schedule(this.cleanupScheduler, () => {
            if (enumerator.subscriberCount === 0) {
              markAsGarbage(this, key, enumerator);
            }
          }),
        );
      };

      const observable = pipe(
        enumerator,
        onSubscribe(onSubscribeUnmark),
        onDispose(onDisposeCleanup),
      );

      cachedValue = [enumerator, observable];
      this.cache.set(key, cachedValue);

      // Mark the key as garbage until it is subscribed to.
      markAsGarbage(this, key, enumerator);
    }

    const [enumerator, observable] = cachedValue;
    enumerator.dispatch(value);

    return observable;
  }
}

export const createReactiveCache = <T>(
  dispatchScheduler: SchedulerLike,
  cleanupScheduler: SchedulerLike,
  maxCount: number = Number.MAX_SAFE_INTEGER,
): ReactiveCacheLike<T> =>
  new ReactiveCacheImpl(dispatchScheduler, cleanupScheduler, maxCount);

export const getOrSet = <T>(
  cache: ReactiveCacheLike<T>,
  key: string,
  defaultValue: ObservableLike<T>,
): ObservableLike<T> => {
  const observable = cache.get(key);
  return observable || cache.set(key, defaultValue);
};
