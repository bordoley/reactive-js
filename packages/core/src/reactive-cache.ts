import { createStreamable, StreamableLike } from "./streamable";
import { DisposableLike, Exception, AbstractDisposable } from "./disposable";
import { ObservableLike, StreamLike, switchAll, onSubscribe } from "./observable";
import { Option, isNone, isSome } from "./option";
import { pipe } from "./pipe";
import {
  SchedulerLike,
  AbstractSchedulerContinuation,
  schedule,
} from "./scheduler";
import { SubscriberLike } from "./internal/observable/interfaces";

const alwaysFalse = () => false;

class ReactiveCacheSchedulerContinuation<
  T
> extends AbstractSchedulerContinuation {
  constructor(private readonly cache: ReactiveCacheImpl<T>) {
    super();
  }

  produce(shouldYield?: () => boolean): number {
    const { cache, maxCount, garbage } = this.cache;

    shouldYield = shouldYield ?? alwaysFalse;

    for (const [, stream] of garbage) {
      stream.dispose();

      // only delete as many entries as we need to.
      const hasMoreToCleanup = cache.size > maxCount;

      if (hasMoreToCleanup && shouldYield()) {
        return 0;
      } else if (!hasMoreToCleanup) {
        break;
      }
    }

    return -1;
  }
}

/** @noInheritDoc */
export interface ReactiveCacheLike<T> extends DisposableLike {
  get(key: string): Option<ObservableLike<T>>;
  set(key: string, value: ObservableLike<T>): ObservableLike<T>;
}

const markAsGarbage = <T>(
  reactiveCache: ReactiveCacheImpl<T>,
  key: string,
  stream: StreamLike<ObservableLike<T>, T>,
) => {
  reactiveCache.garbage.set(key, stream);

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

const switchAllAsyncEnumerableInstance: StreamableLike<
  ObservableLike<any>,
  any
> = createStreamable(switchAll());
const switchAllAsyncEnumerable = <T>(): StreamableLike<ObservableLike<T>, T> =>
  switchAllAsyncEnumerableInstance;

class ReactiveCacheImpl<T> extends AbstractDisposable
  implements ReactiveCacheLike<T> {
  readonly cache: Map<
    string,
    [StreamLike<ObservableLike<T>, T>, ObservableLike<T>]
  > = new Map();
  cleaning = false;

  // Set of keys that are eligible to be garbage collected
  readonly garbage: Map<string, StreamLike<ObservableLike<T>, T>> = new Map();

  constructor(
    private readonly dispatchScheduler: SchedulerLike,
    readonly cleanupScheduler: SchedulerLike,
    // The ideal max number of cache entries.
    // Note don't delete cache entries that are actively being observed.
    readonly maxCount: number,
  ) {
    super();

    this.add(() => {
      for (const value of this.cache.values()) {
        const [stream] = value;
        stream.dispose();
      }
      this.cache.clear();
      this.garbage.clear();
    });
  }

  get(key: string): Option<ObservableLike<T>> {
    const cachedValue = this.cache.get(key);
    if (isSome(cachedValue)) {
      const [, observable] = cachedValue;
      return observable;
    }
    return;
  }

  set(key: string, value: ObservableLike<T>): ObservableLike<T> {
    let cachedValue = this.cache.get(key);

    if (isNone(cachedValue)) {
      const stream = switchAllAsyncEnumerable()
        .stream(this.dispatchScheduler)
        .add(() => {
          this.cache.delete(key);
          this.garbage.delete(key);
        });

      const onDisposeCleanup = (_?: Exception) =>
        this.add(
          pipe(
            this.cleanupScheduler,
            schedule(() => {
              if (stream.subscriberCount === 0) {
                markAsGarbage(this, key, stream);
              }
            }),
          ),
        );

      const onSubscribeUnmark = (subscriber: SubscriberLike<T>) => {
        this.garbage.delete(key);
        subscriber.add(onDisposeCleanup);
      };

      const observable = pipe(stream, onSubscribe(onSubscribeUnmark));

      cachedValue = [stream, observable];
      this.cache.set(key, cachedValue);

      // Mark the key as garbage until it is subscribed to.
      markAsGarbage(this, key, stream);
    }

    const [stream, observable] = cachedValue;
    stream.dispatch(value);

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
  return observable ?? cache.set(key, defaultValue);
};
