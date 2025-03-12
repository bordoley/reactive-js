import { ReadonlyObjectMapLike } from "../collections.js";
import { DeferredObservableLike, ObservableLike } from "../computations.js";
import { Optional, Updater } from "../functions.js";
import { BackpressureStrategy, DispatcherLike, DisposableContainerLike, DisposableLike, SchedulerLike } from "../utils.js";
export declare const CacheLike_get: unique symbol;
/**
 * @noInheritDoc
 */
export interface CacheLike<T> extends DispatcherLike<ReadonlyObjectMapLike<string, Updater<Optional<T>>>>, DisposableContainerLike {
    [CacheLike_get](index: string): ObservableLike<T>;
}
interface CacheModule {
    create<T>(scheduler: SchedulerLike, options?: {
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
        readonly cleanupScheduler?: SchedulerLike;
        readonly maxEntries?: number;
        readonly persistentStore?: {
            load(keys: ReadonlySet<string>): DeferredObservableLike<Readonly<ReadonlyObjectMapLike<string, Optional<T>>>>;
            store(updates: Readonly<ReadonlyObjectMapLike<string, T>>): DeferredObservableLike<void>;
        };
    }): CacheLike<T> & DisposableLike;
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
export {};
