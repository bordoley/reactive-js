import { Optional } from "../../../functions.js";
import { CacheLike, ObservableLike } from "../../../rx.js";
import { SchedulerLike } from "../../../util.js";
import Streamable_createCache from "./Streamable.createCache.js";

const Streamable_createPersistentCache = <T>(
  persistentStore: {
    load(
      keys: ReadonlySet<string>,
    ): ObservableLike<Readonly<Record<string, Optional<T>>>>;
    store(updates: Readonly<Record<string, T>>): ObservableLike<void>;
  },
  options: {
    readonly capacity?: number;
    readonly cleanupScheduler?: SchedulerLike;
  } = {},
): CacheLike<T> => Streamable_createCache<T>(persistentStore, options);

export default Streamable_createPersistentCache;
