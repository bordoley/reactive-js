import { ReadonlyObjectMapLike } from "../collections.js";
import { DeferredObservableLike, ObservableLike } from "../computations.js";
import { Optional, Updater } from "../functions.js";
import { BackpressureStrategy, DisposableContainerLike, DisposableLike, QueueableLike, SchedulerLike } from "../utils.js";
export declare const CacheLike_get: unique symbol;
/**
 * @noInheritDoc
 */
export interface CacheLike<T> extends QueueableLike<ReadonlyObjectMapLike<string, Updater<Optional<T>>>>, DisposableContainerLike {
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
    remove<T>(cache: CacheLike<T>, key: string): void;
    removeMany<T>(cache: CacheLike<T>, keys: ReadonlyArray<string>): void;
    set<T>(cache: CacheLike<T>, key: string, v: Optional<T>): void;
    setMany<T>(cache: CacheLike<T>, keyValues: ReadonlyObjectMapLike<string, Optional<T>>): void;
    update<T>(cache: CacheLike<T>, key: string, updater: Updater<Optional<T>>): void;
    updateMany<T>(cache: CacheLike<T>, keyValues: ReadonlyObjectMapLike<string, Updater<Optional<T>>>): void;
}
export type Signature = CacheModule;
export declare const create: CacheModule["create"];
export declare const get: <T>(cache: CacheLike<T>, key: string) => ObservableLike<T>;
export declare const remove: <T>(cache: CacheLike<T>, key: string) => void;
export declare const removeMany: <T>(cache: CacheLike<T>, keys: ReadonlyArray<string>) => void;
export declare const set: <T>(cache: CacheLike<T>, key: string, v: Optional<T>) => void;
export declare const setMany: <T>(cache: CacheLike<T>, keyValues: ReadonlyObjectMapLike<string, Optional<T>>) => void;
export declare const update: <T>(cache: CacheLike<T>, key: string, updater: Updater<Optional<T>>) => void;
export declare const updateMany: <T>(cache: CacheLike<T>, keyValues: ReadonlyObjectMapLike<string, Updater<Optional<T>>>) => void;
export {};
