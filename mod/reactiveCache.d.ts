import { Option } from './option';
import { DisposableLike } from './disposable';
import { SchedulerLike } from './scheduler';
import { ObservableLike } from './observable';

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
