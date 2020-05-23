import {
  DisposableLike,
  Error,
  AbstractDisposable,
  dispose,
  addTeardown,
  addDisposable,
} from "../disposable";
import { pipe } from "../functions";
import {
  ObservableLike,
  StreamLike,
  switchAll,
  onSubscribe,
  dispatch,
} from "../observable";
import { Option, isNone, isSome } from "../option";
import { SchedulerLike, schedule, yield$ } from "../scheduler";
import {
  createStreamable,
  StreamableLike,
  stream as streamStreamable,
} from "../streamable";

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
    const continuation = (scheduler: SchedulerLike) => {
      const { cache, maxCount, garbage } = reactiveCache;

      for (const [, stream] of garbage) {
        dispose(stream);

        // only delete as many entries as we need to.
        const hasMoreToCleanup = cache.size > maxCount;

        if (hasMoreToCleanup) {
          yield$(scheduler);
        } else if (!hasMoreToCleanup) {
          break;
        }
      }
    };

    reactiveCache.cleaning = true;

    const schedulerContinuation = schedule(
      reactiveCache.cleanupScheduler,
      continuation,
    );
    addTeardown(schedulerContinuation, () => {
      reactiveCache.cleaning = false;
    });
  }
};

const switchAllStreamInstance: StreamableLike<
  ObservableLike<any>,
  any
> = createStreamable(switchAll());
const switchAllStream = <T>(): StreamableLike<ObservableLike<T>, T> =>
  switchAllStreamInstance;

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

    addTeardown(this, () => {
      for (const value of this.cache.values()) {
        const [stream] = value;
        dispose(stream);
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
      const stream = streamStreamable(
        switchAllStream(),
        this.dispatchScheduler,
      );
      addTeardown(stream, () => {
        this.cache.delete(key);
        this.garbage.delete(key);
      });

      const onDisposeCleanup = (_?: Error) =>
        addDisposable(
          this,
          schedule(this.cleanupScheduler, () => {
            if (stream.observerCount === 0) {
              markAsGarbage(this, key, stream);
            }
          }),
        );

      const onSubscribeUnmark = () => {
        this.garbage.delete(key);
        return onDisposeCleanup;
      };

      const observable = pipe(stream, onSubscribe(onSubscribeUnmark));

      cachedValue = [stream, observable];
      this.cache.set(key, cachedValue);

      // Mark the key as garbage until it is subscribed to.
      markAsGarbage(this, key, stream);
    }

    const [stream, observable] = cachedValue;
    dispatch(stream, value);

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
