import { __MulticastObservableLike_buffer as MulticastObservableLike_buffer, __ObservableLike_isEnumerable as ObservableLike_isEnumerable, __ObservableLike_isRunnable as ObservableLike_isRunnable, __ObservableLike_observe as ObservableLike_observe, __ObserverLike_notify as ObserverLike_notify, __PublisherLike_observerCount as PublisherLike_observerCount, __StreamLike_scheduler as StreamLike_scheduler, __StreamableLike_TStream as StreamableLike_TStream, __StreamableLike_stream as StreamableLike_stream } from "./__internal__/symbols.js";
import { AssociativeCollectionLike, Container, ContainerOf, ContainerOperator, Container_T, Container_type, DictionaryLike, ReadonlyObjectMapLike } from "./containers.js";
import { Factory, Function1, Function2, Optional } from "./functions.js";
import { DispatcherEventMap, DispatcherLike, DisposableLike, ErrorSafeEventListenerLike, EventSourceLike, IndexedBufferCollectionLike, PauseableEventMap, PauseableLike, QueueableLike, QueueableLike_backpressureStrategy, SchedulerLike } from "./util.js";
export { MulticastObservableLike_buffer, ObservableLike_isEnumerable, ObservableLike_isRunnable, ObservableLike_observe, ObserverLike_notify, PublisherLike_observerCount, StreamableLike_stream, StreamLike_scheduler, StreamableLike_TStream, };
/**
 * A consumer of push-based notifications.
 *
 * @noInheritDoc
 */
export interface ObserverLike<T = unknown> extends DispatcherLike<T>, DisposableLike, SchedulerLike {
    /**
     * Notifies the the observer of the next notification produced by the observable source.
     *
     * Note: The `notify` method must be called from within a `SchedulerContinuationLike`
     * scheduled using the observer's `schedule` method.
     *
     * @param next - The next notification value.
     */
    [ObserverLike_notify](next: T): void;
}
/**
 * The source of notifications which can be consumed by an `ObserverLike` instance.
 *
 * @noInheritDoc
 * @category Observable
 */
export interface ObservableLike<T = unknown> {
    /**
     * Indicates if the `ObservableLike` supports interactive enumeration.
     */
    readonly [ObservableLike_isEnumerable]: boolean;
    /**
     * Indicates if the `ObservableLike` supports being subscribed to
     * on a VirtualTimeScheduler.
     */
    readonly [ObservableLike_isRunnable]: boolean;
    /**
     * Subscribes the given `ObserverLike` to the `ObservableLike` source.
     *
     * @param observer - The observer.
     */
    [ObservableLike_observe](observer: ObserverLike<T>): void;
}
/**
 * @noInheritDoc
 * @category Container
 */
export interface ObservableContainer extends Container {
    readonly [Container_type]?: ObservableLike<this[typeof Container_T]>;
}
/**
 * An `ObservableLike` that supports being subscribed to on a VirtualTimeScheduler.
 *
 * @noInheritDoc
 * @category Observable
 */
export interface RunnableLike<T = unknown> extends ObservableLike<T> {
    readonly [ObservableLike_isRunnable]: true;
}
/**
 * @noInheritDoc
 * @category Container
 */
export interface RunnableContainer extends Container {
    readonly [Container_type]?: RunnableLike<this[typeof Container_T]>;
}
/**
 * An `ObservableLike` that supports interactive enumeration.
 *
 * @noInheritDoc
 * @category Observable
 */
export interface EnumerableLike<T = unknown> extends RunnableLike<T> {
    readonly [ObservableLike_isEnumerable]: true;
}
/**
 * @noInheritDoc
 * @category Container
 */
export interface EnumerableContainer extends Container {
    readonly [Container_type]?: EnumerableLike<this[typeof Container_T]>;
}
/**
 * A stateful ObservableLike resource.
 *
 * @noInheritDoc
 * @category Observable
 */
export interface MulticastObservableLike<T> extends ObservableLike<T> {
    readonly [ObservableLike_isEnumerable]: false;
    readonly [ObservableLike_isRunnable]: false;
    readonly [MulticastObservableLike_buffer]: IndexedBufferCollectionLike<T>;
}
/**
 * An `EventListener` that can be used to publish notifications to one or more observers.
 *
 * @noInheritDoc
 * @category Observable
 */
export interface PublisherLike<T = unknown> extends ErrorSafeEventListenerLike<T>, MulticastObservableLike<T> {
    /**
     * The number of observers currently observing the `Publisher`.
     */
    readonly [PublisherLike_observerCount]: number;
}
/**
 * A `ObservableLike` that supports imperative flow control
 * via the pause and resume methods.
 *
 * @noInheritDoc
 * @category Observable
 */
export interface PauseableObservableLike<T = unknown> extends ObservableLike<T>, PauseableLike {
    readonly [ObservableLike_isEnumerable]: false;
    readonly [ObservableLike_isRunnable]: false;
}
/**
 * @noInheritDoc
 * @category Container
 */
export interface PauseableObservableContainer extends Container {
    readonly [Container_type]?: PauseableObservableLike<this[typeof Container_T]>;
}
/**
 * Represents a duplex stream
 *
 * @noInheritDoc
 * @category Observable
 */
export interface StreamLike<TReq, T> extends DispatcherLike<TReq>, MulticastObservableLike<T> {
    readonly [StreamLike_scheduler]: SchedulerLike;
}
/**
 * A container that supports bi-directional streaming.
 *
 * @typeparam TReq
 * @typeparam T
 * @typeparam TStream
 *
 * @noInheritDoc
 * @category Streamable
 */
export interface StreamableLike<TReq = unknown, T = unknown> {
    readonly [StreamableLike_TStream]?: StreamLike<TReq, T>;
    /**
     * Subscribe to the Streamable.
     *
     * @param scheduler - The scheduler to subscribe to the stream with.
     * @param options
     */
    [StreamableLike_stream](scheduler: SchedulerLike, options?: {
        /**
         * The number of items to buffer for replay when an observer subscribes
         * to the stream.
         */
        readonly replay?: number;
        /**
         * The capacity of the stream's request queue.
         */
        readonly capacity?: number;
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    }): DisposableStreamOf<this>;
}
export type StreamOf<TStreamable extends StreamableLike> = NonNullable<TStreamable[typeof StreamableLike_TStream]>;
export type DisposableStreamOf<TStreamable extends StreamableLike> = StreamOf<TStreamable> & DisposableLike;
/**
 * A cache stream that support transaction updates of a collection of keys
 * and observing the changing values of individual keys.
 *
 * @noInheritDoc
 *  @category Streamable
 */
export interface CacheLike<T> extends StreamableLike<ReadonlyObjectMapLike<string, Function1<Optional<T>, Optional<T>>>, never> {
    readonly [StreamableLike_TStream]?: StreamLike<ReadonlyObjectMapLike<string, Function1<Optional<T>, Optional<T>>>, never> & AssociativeCollectionLike<string, ObservableLike<T>>;
}
/**
 *
 * @noInheritDoc
 * @category Streamable
 */
export interface AnimationGroupEventHandlerLike<TEventType, T, TKey extends string | number | symbol> extends StreamableLike<TEventType, boolean> {
    readonly [StreamableLike_TStream]?: StreamLike<TEventType, boolean> & PauseableLike & DictionaryLike<TKey, EventSourceLike<{
        type: TEventType;
        value: T;
    }>> & EventSourceLike<DispatcherEventMap[keyof DispatcherEventMap] | PauseableEventMap[keyof PauseableEventMap]>;
}
/**
 *
 * @noInheritDoc
 *  @category Streamable
 */
export interface AnimationEventHandlerLike<TEventType extends Exclude<string | symbol, keyof DispatcherEventMap>, T> extends StreamableLike<TEventType, boolean> {
    readonly [StreamableLike_TStream]?: StreamLike<TEventType, boolean> & PauseableLike & EventSourceLike<{
        type: TEventType;
        value: T;
    } | DispatcherEventMap[keyof DispatcherEventMap] | PauseableEventMap[keyof PauseableEventMap]>;
}
export declare namespace Reactive {
    /**
     * @noInheritDoc
     * @category AnimationConfig
     */
    interface DelayAnimationConfig {
        readonly type: "delay";
        readonly duration: number;
    }
    /**
     * @noInheritDoc
     * @category AnimationConfig
     */
    interface KeyFrameAnimationConfig {
        readonly type: "keyframe";
        readonly from: number;
        readonly to: number;
        readonly duration: number;
        readonly easing?: Function1<number, number>;
    }
    /**
     * @noInheritDoc
     * @category AnimationConfig
     */
    interface FrameAnimationConfig {
        readonly type: "frame";
        readonly value: number;
    }
    /**
     * @noInheritDoc
     * @category AnimationConfig
     */
    interface LoopAnimationConfig<T> {
        readonly type: "loop";
        readonly animation: AnimationConfig<T> | readonly AnimationConfig<T>[];
        readonly count?: number;
    }
    /**
     * @noInheritDoc
     * @category AnimationConfig
     */
    interface SpringAnimationConfig {
        readonly type: "spring";
        readonly from: number;
        readonly to: number;
        readonly stiffness?: number;
        readonly damping?: number;
        readonly precision?: number;
    }
    type AnimationConfig<T = number> = DelayAnimationConfig | LoopAnimationConfig<T> | (T extends number ? (KeyFrameAnimationConfig | SpringAnimationConfig | FrameAnimationConfig) & {
        readonly selector?: never;
    } : (KeyFrameAnimationConfig | SpringAnimationConfig | FrameAnimationConfig) & {
        readonly selector: Function1<number, T>;
    });
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface Animate<C extends Container> {
        /**
         * @category Constructor
         */
        animate<T = number>(configs: AnimationConfig<T> | readonly AnimationConfig<T>[]): ContainerOf<C, T>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface BackpressureStrategy<C extends Container> {
        /**
         * @category Operator
         */
        backpressureStrategy<T>(capacity: number, backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy]): ContainerOperator<C, T, T>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface CatchError<C extends Container> {
        /**
         * Returns a Container which catches errors produced by the source and either continues with
         * the Container returned from the `onError` callback or swallows the error if
         * void is returned.
         *
         * @param onError - A function that takes source error and either returns a Container
         * to continue with or void if the error should be propagated.
         *
         * @category Operator
         */
        catchError<T>(onError: Function1<unknown, ContainerOf<C, T> | void>): ContainerOperator<C, T, T>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface CombineLatest<C extends Container> {
        /**
         * @category Constructor
         */
        combineLatest<TA, TB>(a: ContainerOf<C, TA>, b: ContainerOf<C, TB>): ContainerOf<C, readonly [TA, TB]>;
        combineLatest<TA, TB, TC>(a: ContainerOf<C, TA>, b: ContainerOf<C, TB>, c: ContainerOf<C, TC>): ContainerOf<C, readonly [TA, TB, TC]>;
        combineLatest<TA, TB, TC, TD>(a: ContainerOf<C, TA>, b: ContainerOf<C, TB>, c: ContainerOf<C, TC>, d: ContainerOf<C, TD>): ContainerOf<C, readonly [TA, TB, TC, TD]>;
        combineLatest<TA, TB, TC, TD, TE>(a: ContainerOf<C, TA>, b: ContainerOf<C, TB>, c: ContainerOf<C, TC>, d: ContainerOf<C, TD>, e: ContainerOf<C, TE>): ContainerOf<C, readonly [TA, TB, TC, TD, TE]>;
        combineLatest<TA, TB, TC, TD, TE, TF>(a: ContainerOf<C, TA>, b: ContainerOf<C, TB>, c: ContainerOf<C, TC>, d: ContainerOf<C, TD>, e: ContainerOf<C, TE>, f: ContainerOf<C, TF>): ContainerOf<C, readonly [TA, TB, TC, TD, TE, TF]>;
        combineLatest<TA, TB, TC, TD, TE, TF, TG>(a: ContainerOf<C, TA>, b: ContainerOf<C, TB>, c: ContainerOf<C, TC>, d: ContainerOf<C, TD>, e: ContainerOf<C, TE>, f: ContainerOf<C, TF>, g: ContainerOf<C, TG>): ContainerOf<C, readonly [TA, TB, TC, TD, TE, TF, TG]>;
        combineLatest<TA, TB, TC, TD, TE, TF, TG, TH>(a: ContainerOf<C, TA>, b: ContainerOf<C, TB>, c: ContainerOf<C, TC>, d: ContainerOf<C, TD>, e: ContainerOf<C, TE>, f: ContainerOf<C, TF>, g: ContainerOf<C, TG>, h: ContainerOf<C, TH>): ContainerOf<C, readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
        combineLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: ContainerOf<C, TA>, b: ContainerOf<C, TB>, c: ContainerOf<C, TC>, d: ContainerOf<C, TD>, e: ContainerOf<C, TE>, f: ContainerOf<C, TF>, g: ContainerOf<C, TG>, h: ContainerOf<C, TH>, i: ContainerOf<C, TI>): ContainerOf<C, readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface CurrentTime<C extends Container> {
        /**
         * @category Constructor
         */
        currentTime(options?: {
            readonly delay?: number;
            readonly delayStart?: boolean;
        }): ContainerOf<C, number>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface DecodeWithCharset<C extends Container> {
        /**
         * @category Operator
         */
        decodeWithCharset(options?: {
            charset?: string;
        }): ContainerOperator<C, ArrayBuffer, string>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface Defer<C extends Container> {
        /**
         * @category Constructor
         */
        defer<T>(factory: Factory<ContainerOf<C, T>>): ContainerOf<C, T>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface DispatchTo<C extends Container> {
        /**
         *
         * @category Operator
         */
        dispatchTo<T>(dispatcher: DispatcherLike<T>): ContainerOperator<C, T, T>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface EncodeUtf8<C extends Container> {
        /**
         * @category Operator
         */
        encodeUtf8(): ContainerOperator<C, string, Uint8Array>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface Enqueue<C extends Container> {
        /**
         *
         * @category Operator
         */
        enqueue<T>(queue: QueueableLike<T>): ContainerOperator<C, T, T>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface Exhaust<C extends Container> {
        /**
         *
         * @category Operator
         */
        exhaust: <T>() => ContainerOperator<C, ContainerOf<C, T>, T>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface ExhaustMap<C extends Container> {
        /**
         * @category Operator
         */
        exhaustMap: <TA, TB>(selector: Function1<TA, ContainerOf<C, TB>>) => ContainerOperator<C, TA, TB>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface FirstAsync<C extends Container> {
        /**
         *
         * @category Transform
         */
        firstAsync<T>(): Function1<ContainerOf<C, T>, PromiseLike<Optional<T>>>;
        /**
         *
         * @category Transform
         */
        firstAsync<T>(scheduler: SchedulerLike, options?: {
            capacity?: number;
            backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        }): Function1<ContainerOf<C, T>, PromiseLike<Optional<T>>>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface Flow<C extends Container> {
        /**
         * @category Transform
         */
        flow<T>(scheduler: SchedulerLike, options?: {
            readonly capacity?: number;
            readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        }): Function1<ContainerOf<C, T>, PauseableObservableLike<T> & DisposableLike>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface ForkCombineLatest<C extends Container> {
        /**
         * @category Operator
         */
        forkCombineLatest<T, TA, TB>(a: ContainerOperator<C, T, TA>, b: ContainerOperator<C, T, TB>): ContainerOperator<C, T, readonly [TA, TB]>;
        forkCombineLatest<T, TA, TB, TC>(a: ContainerOperator<C, T, TA>, b: ContainerOperator<C, T, TB>, c: ContainerOperator<C, T, TC>): ContainerOperator<C, T, readonly [TA, TB, TC]>;
        forkCombineLatest<T, TA, TB, TC, TD>(a: ContainerOperator<C, T, TA>, b: ContainerOperator<C, T, TB>, c: ContainerOperator<C, T, TC>, d: ContainerOperator<C, T, TD>): ContainerOperator<C, T, readonly [TA, TB, TC, TD]>;
        forkCombineLatest<T, TA, TB, TC, TD, TE>(a: ContainerOperator<C, T, TA>, b: ContainerOperator<C, T, TB>, c: ContainerOperator<C, T, TC>, d: ContainerOperator<C, T, TD>, e: ContainerOperator<C, T, TE>): ContainerOperator<C, T, readonly [TA, TB, TC, TD, TE]>;
        forkCombineLatest<T, TA, TB, TC, TD, TE, TF>(a: ContainerOperator<C, T, TA>, b: ContainerOperator<C, T, TB>, c: ContainerOperator<C, T, TC>, d: ContainerOperator<C, T, TD>, e: ContainerOperator<C, T, TE>, f: ContainerOperator<C, T, TF>): ContainerOperator<C, T, readonly [TA, TB, TC, TD, TE, TF]>;
        forkCombineLatest<T, TA, TB, TC, TD, TE, TF, TG>(a: ContainerOperator<C, T, TA>, b: ContainerOperator<C, T, TB>, c: ContainerOperator<C, T, TC>, d: ContainerOperator<C, T, TD>, e: ContainerOperator<C, T, TE>, f: ContainerOperator<C, T, TF>, g: ContainerOperator<C, T, TG>): ContainerOperator<C, T, readonly [TA, TB, TC, TD, TE, TF, TG]>;
        forkCombineLatest<T, TA, TB, TC, TD, TE, TF, TG, TH>(a: ContainerOperator<C, T, TA>, b: ContainerOperator<C, T, TB>, c: ContainerOperator<C, T, TC>, d: ContainerOperator<C, T, TD>, e: ContainerOperator<C, T, TE>, f: ContainerOperator<C, T, TF>, g: ContainerOperator<C, T, TG>, h: ContainerOperator<C, T, TH>): ContainerOperator<C, T, readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
        forkCombineLatest<T, TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: ContainerOperator<C, T, TA>, b: ContainerOperator<C, T, TB>, c: ContainerOperator<C, T, TC>, d: ContainerOperator<C, T, TD>, e: ContainerOperator<C, T, TE>, f: ContainerOperator<C, T, TF>, g: ContainerOperator<C, T, TG>, h: ContainerOperator<C, T, TH>, i: ContainerOperator<C, T, TI>): ContainerOperator<C, T, readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface ForkMerge<C extends Container> {
        /**
         * @category Operator
         */
        forkMerge<TIn, TOut>(fst: ContainerOperator<C, TIn, TOut>, snd: ContainerOperator<C, TIn, TOut>, ...tail: readonly ContainerOperator<C, TIn, TOut>[]): ContainerOperator<C, TIn, TOut>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface ForkZipLatest<C extends Container> {
        /**
         * @category Operator
         */
        forkZipLatest<T, TA, TB>(a: ContainerOperator<C, T, TA>, b: ContainerOperator<C, T, TB>): ContainerOperator<C, T, readonly [TA, TB]>;
        forkZipLatest<T, TA, TB, TC>(a: ContainerOperator<C, T, TA>, b: ContainerOperator<C, T, TB>, c: ContainerOperator<C, T, TC>): ContainerOperator<C, T, readonly [TA, TB, TC]>;
        forkZipLatest<T, TA, TB, TC, TD>(a: ContainerOperator<C, T, TA>, b: ContainerOperator<C, T, TB>, c: ContainerOperator<C, T, TC>, d: ContainerOperator<C, T, TD>): ContainerOperator<C, T, readonly [TA, TB, TC, TD]>;
        forkZipLatest<T, TA, TB, TC, TD, TE>(a: ContainerOperator<C, T, TA>, b: ContainerOperator<C, T, TB>, c: ContainerOperator<C, T, TC>, d: ContainerOperator<C, T, TD>, e: ContainerOperator<C, T, TE>): ContainerOperator<C, T, readonly [TA, TB, TC, TD, TE]>;
        forkZipLatest<T, TA, TB, TC, TD, TE, TF>(a: ContainerOperator<C, T, TA>, b: ContainerOperator<C, T, TB>, c: ContainerOperator<C, T, TC>, d: ContainerOperator<C, T, TD>, e: ContainerOperator<C, T, TE>, f: ContainerOperator<C, T, TF>): ContainerOperator<C, T, readonly [TA, TB, TC, TD, TE, TF]>;
        forkZipLatest<T, TA, TB, TC, TD, TE, TF, TG>(a: ContainerOperator<C, T, TA>, b: ContainerOperator<C, T, TB>, c: ContainerOperator<C, T, TC>, d: ContainerOperator<C, T, TD>, e: ContainerOperator<C, T, TE>, f: ContainerOperator<C, T, TF>, g: ContainerOperator<C, T, TG>): ContainerOperator<C, T, readonly [TA, TB, TC, TD, TE, TF, TG]>;
        forkZipLatest<T, TA, TB, TC, TD, TE, TF, TG, TH>(a: ContainerOperator<C, T, TA>, b: ContainerOperator<C, T, TB>, c: ContainerOperator<C, T, TC>, d: ContainerOperator<C, T, TD>, e: ContainerOperator<C, T, TE>, f: ContainerOperator<C, T, TF>, g: ContainerOperator<C, T, TG>, h: ContainerOperator<C, T, TH>): ContainerOperator<C, T, readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
        forkZipLatest<T, TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: ContainerOperator<C, T, TA>, b: ContainerOperator<C, T, TB>, c: ContainerOperator<C, T, TC>, d: ContainerOperator<C, T, TD>, e: ContainerOperator<C, T, TE>, f: ContainerOperator<C, T, TF>, g: ContainerOperator<C, T, TG>, h: ContainerOperator<C, T, TH>, i: ContainerOperator<C, T, TI>): ContainerOperator<C, T, readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface FromEnumerable<C extends Container> {
        /**
         * @category Constructor
         */
        fromEnumerable<T>(): Function1<EnumerableLike<T>, ContainerOf<C, T>>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface FromRunnable<C extends Container> {
        /**
         * @category Constructor
         */
        fromRunnable: <T>() => Function1<RunnableLike<T>, ContainerOf<C, T>>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface LastAsync<C extends Container> {
        /**
         *
         * @category Transform
         */
        lastAsync<T>(): Function1<ContainerOf<C, T>, PromiseLike<Optional<T>>>;
        /**
         *
         * @category Transform
         */
        lastAsync<T>(scheduler: SchedulerLike, options?: {
            capacity?: number;
            backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        }): Function1<ContainerOf<C, T>, PromiseLike<Optional<T>>>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface Merge<C extends Container> {
        /**
         *
         * @category Constructor
         */
        merge<T>(fst: ContainerOf<C, T>, snd: ContainerOf<C, T>, ...tail: readonly ContainerOf<C, T>[]): ContainerOf<C, T>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface MergeAll<C extends Container> {
        /**
         *
         * @category Operator
         */
        mergeAll: <T>(options?: {
            readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
            readonly capacity?: number;
            readonly concurrency?: number;
        }) => ContainerOperator<C, ContainerOf<C, T>, T>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface MergeMap<C extends Container> {
        /**
         * @category Operator
         */
        mergeMap: <TA, TB>(selector: Function1<TA, ContainerOf<C, TB>>, options?: {
            readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
            readonly capacity?: number;
            readonly concurrency?: number;
        }) => ContainerOperator<C, TA, TB>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface MergeWith<C extends Container> {
        /**
         * @category Operator
         */
        mergeWith: <T>(snd: ContainerOf<C, T>, ...tail: readonly ContainerOf<C, T>[]) => ContainerOperator<C, T, T>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface Multicast<C extends Container> {
        /**
         * Returns a `MulticastObservableLike` backed by a single subscription to the source.
         *
         * @param scheduler - A `SchedulerLike` that is used to subscribe to the source observable.
         *
         * @category Transform
         */
        multicast<T>(scheduler: SchedulerLike, options?: {
            /**
             * The number of items to buffer for replay when an observer subscribes
             * to the stream.
             */
            readonly replay?: number;
            /**
             * The capacity of the stream's request queue.
             */
            readonly capacity?: number;
            readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        }): Function1<ContainerOf<C, T>, MulticastObservableLike<T> & DisposableLike>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface Never<C extends Container> {
        /**
         * Returns a Container instance that emits no items and never disposes its state.
         *
         * @category Constructor
         */
        never<T>(): ContainerOf<C, T>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface Retry<C extends Container> {
        /**
         * Returns an `ObservableLike` that mirrors the source, re-subscribing
         * if the source completes with an error.
         *
         * @category Operator
         */
        retry<T>(): ContainerOperator<C, T, T>;
        /**
         * Returns an `ObservableLike` that mirrors the source, resubscrbing
         * if the source completes with an error which satisfies the predicate function.
         *
         * @param predicate
         *
         * @category Operator
         */
        retry<T>(predicate: Function2<number, unknown, boolean>): ContainerOperator<C, T, T>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface ScanLast<C extends Container> {
        /**
         * @category Operator
         */
        scanLast: <T, TAcc>(scanner: Function2<TAcc, T, ContainerOf<C, TAcc>>, initialValue: Factory<TAcc>) => ContainerOperator<C, T, TAcc>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface ScanMany<C extends Container> {
        /**
         * @category Operator
         */
        scanMany: <T, TAcc>(scanner: Function2<TAcc, T, ContainerOf<C, TAcc>>, initialValue: Factory<TAcc>) => ContainerOperator<C, T, TAcc>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface Share<C extends Container> {
        /**
         * Returns an `ObservableLike` backed by a shared refcounted subscription to the
         * source. When the refcount goes to 0, the underlying subscription
         * to the source is disposed.
         *
         * @param scheduler - A `SchedulerLike` that is used to subscribe to the source.
         *
         * @category Transform
         */
        share<T>(scheduler: SchedulerLike, options?: {
            readonly replay?: number;
            readonly capacity?: number;
            readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        }): Function1<ContainerOf<C, T>, ObservableLike<T>>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface SwitchAll<C extends Container> {
        /**
         *
         * @category Operator
         */
        switchAll: <T>() => ContainerOperator<C, ContainerOf<C, T>, T>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface SwitchMap<C extends Container> {
        /**
         * @category Operator
         */
        switchMap: <TA, TB>(selector: Function1<TA, ContainerOf<C, TB>>) => ContainerOperator<C, TA, TB>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface TakeUntil<C extends Container> {
        /**
         * @category Operator
         */
        takeUntil<T>(notifier: ContainerOf<C, unknown>): ContainerOperator<C, T, T>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface Throttle<C extends Container> {
        /**
         * Emits a value from the source, then ignores subsequent source values for a duration determined by another observable.
         *
         * @param duration - Function function that is used to determine the silence duration in between emitted values.
         * @param mode - The throttle mode.
         *
         * @category Operator
         */
        throttle<T>(duration: Function1<T, ContainerOf<C, unknown>>, options?: {
            readonly mode?: "first" | "last" | "interval";
        }): ContainerOperator<C, T, T>;
        /**
         * Returns an `ObservableLike` which emits a value from the source,
         * then ignores subsequent source values for `duration` milliseconds.
         *
         * @param duration - Time to wait before emitting another value after
         * emitting the last value, measured in milliseconds.
         * @param mode - The throttle mode.
         *
         * @category Operator
         */
        throttle<T>(duration: number, options?: {
            readonly mode?: "first" | "last" | "interval";
        }): ContainerOperator<C, T, T>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface ThrowIfEmpty<C extends Container> {
        /**
         * Returns a Container that emits an error if the source completes without emitting a value.
         *
         * @param factory - A factory function invoked to produce the error to be thrown.
         *
         * @category Operator
         */
        throwIfEmpty<T>(factory: Factory<unknown>): ContainerOperator<C, T, T>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface Throws<C extends Container> {
        /**
         * @category Constructor
         */
        throws<T>(options?: {
            raise?: Factory<unknown>;
        }): ContainerOf<C, T>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface Timeout<C extends Container> {
        /**
         * Returns an `ObservableLike` that completes with an error if the source
         * does not emit a value in given time span.
         *
         * @param duration - Time in ms within which the source must emit values.
         *
         * @category Operator
         */
        timeout<T>(duration: number): ContainerOperator<C, T, T>;
        /**
         *
         * @param duration
         *
         * @category Operator
         */
        timeout<T>(duration: ContainerOf<C, unknown>): ContainerOperator<C, T, T>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface ToEnumerable<C extends Container> {
        /**
         * @category Transform
         */
        toEnumerable<T>(): Function1<ContainerOf<C, T>, EnumerableLike<T>>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface ToObservable<C extends Container> {
        /**
         * @category Transform
         */
        toObservable: <T>() => Function1<ContainerOf<C, T>, ObservableLike<T>>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface ToRunnable<C extends Container> {
        /**
         * @category Transform
         */
        toRunnable: <T>() => Function1<ContainerOf<C, T>, RunnableLike<T>>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface WithCurrentTime<C extends Container> {
        /**
         * @category Operator
         */
        withCurrentTime<T, TOut>(selector: Function2<number, T, TOut>): ContainerOperator<C, T, TOut>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface WithLatestFrom<C extends Container> {
        /**
         * @category Operator
         */
        withLatestFrom<TA, TB, T>(other: ContainerOf<C, TB>, selector: Function2<TA, TB, T>): ContainerOperator<C, TA, T>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface ZipLatest<C extends Container> {
        /**
         * Returns a container that zips the latest values from
         * multiple sources.
         *
         * @category Constructor
         */
        zipLatest<TA, TB>(a: ContainerOf<C, TA>, b: ContainerOf<C, TB>): ContainerOf<C, readonly [TA, TB]>;
        zipLatest<TA, TB, TC>(a: ContainerOf<C, TA>, b: ContainerOf<C, TB>, c: ContainerOf<C, TC>): ContainerOf<C, readonly [TA, TB, TC]>;
        zipLatest<TA, TB, TC, TD>(a: ContainerOf<C, TA>, b: ContainerOf<C, TB>, c: ContainerOf<C, TC>, d: ContainerOf<C, TD>): ContainerOf<C, readonly [TA, TB, TC, TD]>;
        zipLatest<TA, TB, TC, TD, TE>(a: ContainerOf<C, TA>, b: ContainerOf<C, TB>, c: ContainerOf<C, TC>, d: ContainerOf<C, TD>, e: ContainerOf<C, TE>): ContainerOf<C, readonly [TA, TB, TC, TD, TE]>;
        zipLatest<TA, TB, TC, TD, TE, TF>(a: ContainerOf<C, TA>, b: ContainerOf<C, TB>, c: ContainerOf<C, TC>, d: ContainerOf<C, TD>, e: ContainerOf<C, TE>, f: ContainerOf<C, TF>): ContainerOf<C, readonly [TA, TB, TC, TD, TE, TF]>;
        zipLatest<TA, TB, TC, TD, TE, TF, TG>(a: ContainerOf<C, TA>, b: ContainerOf<C, TB>, c: ContainerOf<C, TC>, d: ContainerOf<C, TD>, e: ContainerOf<C, TE>, f: ContainerOf<C, TF>, g: ContainerOf<C, TG>): ContainerOf<C, readonly [TA, TB, TC, TD, TE, TF, TG]>;
        zipLatest<TA, TB, TC, TD, TE, TF, TG, TH>(a: ContainerOf<C, TA>, b: ContainerOf<C, TB>, c: ContainerOf<C, TC>, d: ContainerOf<C, TD>, e: ContainerOf<C, TE>, f: ContainerOf<C, TF>, g: ContainerOf<C, TG>, h: ContainerOf<C, TH>): ContainerOf<C, readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
        zipLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: ContainerOf<C, TA>, b: ContainerOf<C, TB>, c: ContainerOf<C, TC>, d: ContainerOf<C, TD>, e: ContainerOf<C, TE>, f: ContainerOf<C, TF>, g: ContainerOf<C, TG>, h: ContainerOf<C, TH>, i: ContainerOf<C, TI>): ContainerOf<C, readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface ZipWithLatestFrom<C extends Container> {
        /**
         * @category Operator
         */
        zipWithLatestFrom<TA, TB, T>(other: ContainerOf<C, TB>, selector: Function2<TA, TB, T>): ContainerOperator<C, TA, T>;
    }
}
