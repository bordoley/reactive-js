import { ReactElement } from "react";
import * as Cache from "./computations/Cache.js";
import { DeferredObservableLike, EventSourceLike, MulticastObservableLike, ObservableLike, StoreLike, StreamOf, StreamableLike } from "./computations.js";
import { Factory, Function1, Optional, SideEffect } from "./functions.js";
import { BackpressureStrategy, DisposableLike, PauseableLike, QueueableLike } from "./utils.js";
interface ReactModule {
    CacheProvider<T>(props: {
        readonly cacheContext: React.Context<Optional<Cache.CacheLike<T>>>;
        readonly priority?: 1 | 2 | 3 | 4 | 5;
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
        readonly cleanupPriority?: 1 | 2 | 3 | 4 | 5;
        readonly maxEntries?: number;
        readonly persistentStore?: {
            load(keys: ReadonlySet<string>): DeferredObservableLike<Readonly<Record<string, Optional<T>>>>;
            store(updates: Readonly<Record<string, T>>): DeferredObservableLike<void>;
        };
        readonly children: React.ReactNode;
    }): React.ReactNode;
    createComponent<TProps>(fn: Function1<MulticastObservableLike<TProps>, ObservableLike<ReactElement>>, options?: {
        readonly priority?: 1 | 2 | 3 | 4 | 5;
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
    }): Function1<TProps, React.ReactNode>;
    useDispatcher<TReq>(queue: Optional<QueueableLike<TReq>>): {
        enqueue: Function1<TReq, boolean>;
        complete: SideEffect;
    };
    /**
     */
    useDisposable<TDisposable extends DisposableLike>(factory: () => Optional<TDisposable>, deps: readonly unknown[]): Optional<TDisposable>;
    /**
     */
    useListen<T>(eventSource: Optional<EventSourceLike<T>>): Optional<T>;
    useListen<T>(factory: Factory<Optional<EventSourceLike<T> & DisposableLike>>, deps: readonly unknown[]): Optional<T>;
    /**
     */
    useObserve<T>(observable: Optional<ObservableLike<T>>, options?: {
        readonly priority?: 1 | 2 | 3 | 4 | 5;
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
    }): Optional<T>;
    useObserve<T>(factory: Factory<Optional<ObservableLike<T>>>, deps: readonly unknown[], options?: {
        readonly priority?: 1 | 2 | 3 | 4 | 5;
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
    }): Optional<T>;
    /**
     */
    usePauseable(pauseable: Optional<PauseableLike>): {
        isPaused: boolean;
        pause: SideEffect;
        resume: SideEffect;
    };
    useStore<T>(store: Optional<StoreLike<T>>): Optional<T>;
    useStore<T>(factory: Factory<Optional<StoreLike> & DisposableLike>, deps: readonly unknown[]): Optional<T>;
    /**
     */
    useStream<TStreamable extends StreamableLike>(streamable: TStreamable, options?: {
        readonly priority?: 1 | 2 | 3 | 4 | 5;
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
        readonly replay?: number;
    }): Optional<StreamOf<TStreamable>>;
    useStream<TStreamable extends StreamableLike>(factory: Factory<TStreamable>, dep: readonly unknown[], options?: {
        readonly priority?: 1 | 2 | 3 | 4 | 5;
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
        readonly replay?: number;
    }): Optional<StreamOf<TStreamable>>;
}
type Signature = ReactModule;
export declare const createComponent: Signature["createComponent"];
export declare const useDispatcher: Signature["useDispatcher"];
export declare const useDisposable: Signature["useDisposable"];
export declare const useListen: Signature["useListen"];
export declare const useObserve: Signature["useObserve"];
export declare const usePauseable: Signature["usePauseable"];
export declare const useStore: Signature["useStore"];
export declare const useStream: Signature["useStream"];
export declare const CacheProvider: Signature["CacheProvider"];
export {};
