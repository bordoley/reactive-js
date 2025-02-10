import { ReadonlyObjectMapLike } from "../collections.js";
import { CacheLike, DeferredObservableLike, ObservableLike, SchedulerLike } from "../concurrent.js";
import { Optional, Updater } from "../functions.js";
import { BackpressureStrategy } from "../utils.js";
/**
 * @noInheritDoc
 */
export interface CacheModule {
    create<T>(scheduler: SchedulerLike, options?: {
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
        readonly cleanupScheduler?: SchedulerLike;
        readonly maxEntries?: number;
        readonly persistentStore?: {
            load(keys: ReadonlySet<string>): DeferredObservableLike<Readonly<Record<string, Optional<T>>>>;
            store(updates: Readonly<Record<string, T>>): DeferredObservableLike<void>;
        };
    }): CacheLike<T>;
    get<T>(cache: CacheLike<T>, key: string): ObservableLike<T>;
    remove<T>(cache: CacheLike<T>, key: string): boolean;
    removeMany<T>(cache: CacheLike<T>, keys: ReadonlyArray<string>): boolean;
    set<T>(cache: CacheLike<T>, key: string, v: Optional<T>): boolean;
    setMany<T>(cache: CacheLike<T>, keyValues: ReadonlyObjectMapLike<string, Optional<T>>): boolean;
    update<T>(cache: CacheLike<T>, key: string, updater: Updater<Optional<T>>): boolean;
    updateMany<T>(cache: CacheLike<T>, keyValues: ReadonlyObjectMapLike<string, Updater<Optional<T>>>): boolean;
}
export type Signature = CacheModule;
export declare const create: CacheModule["create"];
export declare const get: <T>(cache: CacheLike<T>, key: string) => ObservableLike<T>;
export declare const remove: <T>(cache: CacheLike<T>, key: string) => boolean;
export declare const removeMany: <T>(cache: CacheLike<T>, keys: ReadonlyArray<string>) => boolean;
export declare const set: <T>(cache: CacheLike<T>, key: string, v: Optional<T>) => boolean;
export declare const setMany: <T>(cache: CacheLike<T>, keyValues: ReadonlyObjectMapLike<string, Optional<T>>) => boolean;
export declare const update: <T>(cache: CacheLike<T>, key: string, updater: Updater<Optional<T>>) => boolean;
export declare const updateMany: <T>(cache: CacheLike<T>, keyValues: ReadonlyObjectMapLike<string, Updater<Optional<T>>>) => boolean;
