import { Option } from "./option.mjs";
import { DisposableLike } from "./disposable.mjs";
import { SchedulerLike } from "./scheduler.mjs";
import { ObservableLike } from "./observable.mjs";
/** @noInheritDoc */
interface ReactiveCacheLike<T> extends DisposableLike {
    get(key: string): Option<ObservableLike<T>>;
    set(key: string, value: ObservableLike<T>): ObservableLike<T>;
}
declare const createReactiveCache: <T>(dispatchScheduler: SchedulerLike, cleanupScheduler: SchedulerLike, options?: {
    readonly maxCount?: number;
}) => ReactiveCacheLike<T>;
declare const getOrSet: <T>(cache: ReactiveCacheLike<T>, key: string, defaultValue: ObservableLike<T>) => ObservableLike<T>;
export { ReactiveCacheLike, createReactiveCache, getOrSet };
