import {
  DisposableLike,
  add,
  createDisposable,
  dispose,
} from "@reactive-js/disposable";
import {
  AsyncEnumeratorLike,
  createAsyncEnumerator,
} from "@reactive-js/async-enumerable";
import {
  ObservableLike,
  switchAll,
  onSubscribe,
  onDispose,
} from "@reactive-js/observable";
import {
  SchedulerLike,
  SchedulerContinuationLike,
} from "@reactive-js/scheduler";
import { pipe, OperatorLike } from "@reactive-js/pipe";

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

    for (const key of garbage) {
      const [enumerator] = cache.get(key) || [undefined, undefined];

      if (enumerator === undefined) {
        this.dispose({ cause: new Error() });
        break;
      } else if (enumerator.subscriberCount > 0) {
        this.dispose({ cause: new Error() });
        break;
      } else {
        enumerator.dispose();
        cache.delete(key);
      }

      garbage.delete(key);

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

class ReactiveCacheImpl<T> implements ReactiveCacheLike<T> {
  readonly add = add;
  readonly cache: Map<
    string,
    [AsyncEnumeratorLike<ObservableLike<T>, T>, ObservableLike<T>]
  > = new Map();
  private cleaning = false;
  readonly disposable = createDisposable();
  readonly dispose = dispose;

  // Set of keys that are eligible to be garbage collected
  readonly garbage: Set<string> = new Set();

  constructor(
    private readonly dispatchScheduler: SchedulerLike,
    private readonly cleanupScheduler: SchedulerLike,
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
      );

      const observable = pipe(
        enumerator,
        onSubscribe(() => {
          this.garbage.delete(key);
        }),
        onDispose(_ => {
          if (enumerator.subscriberCount === 0) {
            this.garbage.add(key);

            if (this.cache.size > this.maxCount && !this.cleaning) {
              const continuation = new ReactiveCacheSchedulerContinuation(this);
              continuation.add(() => (this.cleaning = false));
              this.cleaning = true;
              this.cleanupScheduler.schedule(continuation);
            }
          }
        }),
      );

      cachedValue = [enumerator, observable];
      this.cache.set(key, cachedValue);
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
  key: string,
  defaultValue: ObservableLike<T>,
): OperatorLike<ReactiveCacheLike<T>, ObservableLike<T>> => cache => {
  const observable = cache.get(key);
  return observable || cache.set(key, defaultValue);
};
