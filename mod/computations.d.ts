import { Equality, Factory, Function1, Function2, Optional, Predicate, Reducer, SideEffect1, Tuple2, Tuple3, Tuple4 } from "./functions.js";
import { BackpressureStrategy, ConsumerLike, DisposableContainerLike, DisposableLike, EventListenerLike, ObserverLike, PauseableLike, SchedulerLike, SinkLike } from "./utils.js";
export declare const ComputationLike_isPure: unique symbol;
export declare const ComputationLike_isDeferred: unique symbol;
export declare const ComputationLike_isSynchronous: unique symbol;
export interface ComputationLike {
    readonly [ComputationLike_isPure]: Optional<true> | false;
    readonly [ComputationLike_isSynchronous]: Optional<true> | false;
    readonly [ComputationLike_isDeferred]: Optional<true> | false;
}
export interface PureComputationLike extends ComputationLike {
    readonly [ComputationLike_isPure]: Optional<true>;
}
export interface ComputationWithSideEffectsLike extends ComputationLike {
    readonly [ComputationLike_isPure]: false;
}
export interface MulticastComputationLike extends DisposableContainerLike {
    readonly [ComputationLike_isPure]: Optional<true>;
    readonly [ComputationLike_isSynchronous]: false;
    readonly [ComputationLike_isDeferred]: false;
}
export interface IterableLike<T = unknown> extends Iterable<T>, ComputationLike {
    readonly [ComputationLike_isDeferred]: Optional<true>;
    readonly [ComputationLike_isSynchronous]: Optional<true>;
}
export interface PureIterableLike<T = unknown> extends IterableLike<T> {
    readonly [ComputationLike_isPure]: Optional<true>;
}
export interface IterableWithSideEffectsLike<T = unknown> extends IterableLike<T> {
    readonly [ComputationLike_isPure]: false;
}
export interface AsyncIterableLike<T = unknown> extends AsyncIterable<T>, ComputationLike {
    readonly [ComputationLike_isDeferred]: Optional<true>;
    readonly [ComputationLike_isSynchronous]: false;
}
export interface PureAsyncIterableLike<T = unknown> extends AsyncIterableLike<T> {
    readonly [ComputationLike_isPure]: Optional<true>;
}
export interface AsyncIterableWithSideEffectsLike<T = unknown> extends AsyncIterableLike<T> {
    readonly [ComputationLike_isPure]: false;
}
export declare const RunnableLike_eval: unique symbol;
export interface RunnableLike<T = unknown> extends ComputationLike {
    readonly [ComputationLike_isDeferred]: Optional<true>;
    readonly [ComputationLike_isSynchronous]: Optional<true>;
    [RunnableLike_eval](sink: SinkLike<T>): void;
}
export interface PureRunnableLike<T = unknown> extends RunnableLike<T> {
    readonly [ComputationLike_isPure]: Optional<true>;
}
export interface RunnableWithSideEffectsLike<T = unknown> extends RunnableLike<T> {
    readonly [ComputationLike_isPure]: false;
}
export declare const EventSourceLike_subscribe: unique symbol;
export interface EventSourceLike<out T = unknown, TEventListener extends EventListenerLike<T> = EventListenerLike<T>> extends ComputationLike {
    [EventSourceLike_subscribe](EventListener: TEventListener): void;
}
export interface DeferredEventSourceLike<T = unknown, TConsumer extends ConsumerLike<T> = ConsumerLike<T>> extends EventSourceLike<T, TConsumer> {
    [ComputationLike_isDeferred]: true;
}
export interface ProducerLike<out T = unknown> extends DeferredEventSourceLike<T, ConsumerLike<T>>, ComputationLike {
    readonly [ComputationLike_isDeferred]: true;
    readonly [ComputationLike_isSynchronous]: false;
}
export interface PureProducerLike<out T = unknown> extends ProducerLike<T> {
    readonly [ComputationLike_isPure]: Optional<true>;
}
export interface ProducerWithSideEffectsLike<out T = unknown> extends ProducerLike<T> {
    readonly [ComputationLike_isPure]: false;
}
export interface ObservableLike<out T = unknown> extends DeferredEventSourceLike<T, ObserverLike<T>>, ComputationLike {
    readonly [ComputationLike_isDeferred]: true;
}
export interface PureObservableLike<out T = unknown> extends ObservableLike<T> {
    readonly [ComputationLike_isPure]: Optional<true>;
}
export interface ObservableWithSideEffectsLike<out T = unknown> extends ObservableLike<T> {
    readonly [ComputationLike_isPure]: false;
}
export interface SynchronousObservableLike<out T = unknown> extends ObservableLike<T> {
    readonly [ComputationLike_isSynchronous]: Optional<true>;
}
export interface PureSynchronousObservableLike<out T = unknown> extends SynchronousObservableLike<T>, PureObservableLike<T> {
    readonly [ComputationLike_isSynchronous]: Optional<true>;
    readonly [ComputationLike_isPure]: Optional<true>;
}
export interface SynchronousObservableWithSideEffectsLike<out T = unknown> extends SynchronousObservableLike<T>, ObservableWithSideEffectsLike<T> {
    readonly [ComputationLike_isSynchronous]: Optional<true>;
    readonly [ComputationLike_isPure]: false;
}
export interface BroadcasterLike<out T = unknown> extends EventSourceLike<T>, DisposableContainerLike, MulticastComputationLike {
    readonly [ComputationLike_isDeferred]: false;
    readonly [ComputationLike_isPure]: Optional<true>;
    readonly [ComputationLike_isSynchronous]: false;
}
export interface PublisherLike<T = unknown> extends BroadcasterLike<T>, EventListenerLike<T> {
}
export declare const StoreLike_value: unique symbol;
export interface StoreLike<T = unknown> extends BroadcasterLike<T> {
    readonly [StoreLike_value]: T;
}
export interface WritableStoreLike<T = unknown> extends StoreLike<T>, PublisherLike<T> {
    [StoreLike_value]: T;
}
export declare const StreamableLike_stream: unique symbol;
export interface StreamLike<TReq, out T> extends ConsumerLike<TReq>, BroadcasterLike<T>, PauseableLike {
}
export interface StreamableLike<TReq = unknown, out T = unknown, TStream extends StreamLike<TReq, T> = StreamLike<TReq, T>> {
    [StreamableLike_stream](scheduler: SchedulerLike, options?: {
        readonly autoDispose?: boolean;
        readonly capacity?: number;
        readonly backpressureStrategy?: BackpressureStrategy;
    }): TStream & DisposableLike;
}
export type StreamOf<TStreamable extends StreamableLike> = ReturnType<TStreamable[typeof StreamableLike_stream]>;
export declare const Computation_T: unique symbol;
export declare const Computation_baseOfT: unique symbol;
export interface ComputationTypeLike<TComputationBaseOfT extends ComputationLike = ComputationLike> {
    readonly [Computation_T]?: unknown;
    readonly [Computation_baseOfT]?: TComputationBaseOfT;
}
export type PureComputationOf<TComputationType extends ComputationTypeLike, T = unknown> = TComputationType extends {
    readonly [Computation_baseOfT]?: unknown;
} ? NonNullable<(TComputationType & {
    readonly [Computation_T]: T;
})[typeof Computation_baseOfT]> & PureComputationLike : {
    readonly _C: TComputationType;
    readonly _T: () => T;
};
export type ComputationWithSideEffectsOf<TComputationType extends ComputationTypeLike, T = unknown> = TComputationType extends {
    readonly [Computation_baseOfT]?: unknown;
} ? NonNullable<(TComputationType & {
    readonly [Computation_T]: T;
})[typeof Computation_baseOfT]> & ComputationWithSideEffectsLike : {
    readonly _C: TComputationType;
    readonly _T: () => T;
};
export type ComputationOf<TComputationType extends ComputationTypeLike, T = unknown> = PureComputationOf<TComputationType, T> | ComputationWithSideEffectsOf<TComputationType, T>;
export type NewPureInstanceOf<TComputationType extends ComputationTypeLike, T> = PureComputationOf<TComputationType, T> extends MulticastComputationLike ? PureComputationOf<TComputationType, T> & PauseableLike & DisposableLike : PureComputationOf<TComputationType, T>;
export type NewInstanceWithSideEffectsOf<TComputationType extends ComputationTypeLike, T> = ComputationWithSideEffectsOf<TComputationType, T>;
export type PureComputationOperator<TComputationType extends ComputationTypeLike, TA, out TB> = <TComputationOf extends ComputationOf<TComputationType, TA>>(computation: TComputationOf) => TComputationOf extends PureComputationOf<TComputationType, TA> ? PureComputationOf<TComputationType, TB> : TComputationOf extends ComputationWithSideEffectsOf<TComputationType, TA> ? ComputationWithSideEffectsOf<TComputationType, TB> : never;
export type ComputationOperatorWithSideEffects<TComputationType extends ComputationTypeLike, TA, out TB> = (computation: ComputationOf<TComputationType, TA>) => ComputationWithSideEffectsOf<TComputationType, TB>;
export declare const ComputationModuleLike_computationType: unique symbol;
export interface ComputationModuleLike<TComputationType extends ComputationTypeLike = ComputationTypeLike> {
    [ComputationModuleLike_computationType]?: TComputationType;
}
export type ComputationTypeOfModule<TModule extends ComputationModuleLike> = NonNullable<TModule[typeof ComputationModuleLike_computationType]>;
export type ComputationOfModule<TModule extends ComputationModuleLike, T> = ComputationOf<ComputationTypeOfModule<TModule>, T>;
export type PickComputationModule<TModule extends ComputationModuleLike, K extends keyof TModule> = Pick<TModule, K | typeof ComputationModuleLike_computationType>;
export interface ComputationModule<TComputationType extends ComputationTypeLike, TCreationOptions extends {
    genPure?: Record<string, any>;
    toProducer?: Record<string, any>;
} = {}> extends ComputationModuleLike<TComputationType> {
    distinctUntilChanged<T>(options?: {
        readonly equality?: Equality<T>;
    }): PureComputationOperator<TComputationType, T, T>;
    encodeUtf8(): PureComputationOperator<TComputationType, string, Uint8Array>;
    genPure<T>(factory: Factory<Iterator<T>>, options?: TCreationOptions["genPure"]): NewPureInstanceOf<TComputationType, T>;
    keep<T>(predicate: Predicate<T>): PureComputationOperator<TComputationType, T, T>;
    map<TA, TB>(selector: Function1<TA, TB>): PureComputationOperator<TComputationType, TA, TB>;
    scan<T, TAcc>(scanner: Reducer<T, TAcc>, initialValue: Factory<TAcc>): PureComputationOperator<TComputationType, T, TAcc>;
    pairwise<T>(): PureComputationOperator<TComputationType, T, Tuple2<T, T>>;
    skipFirst<T>(options?: {
        readonly count?: number;
    }): PureComputationOperator<TComputationType, T, T>;
    takeFirst<T>(options?: {
        readonly count?: number;
    }): PureComputationOperator<TComputationType, T, T>;
    takeWhile<T>(predicate: Predicate<T>, options?: {
        readonly inclusive?: boolean;
    }): PureComputationOperator<TComputationType, T, T>;
    toProducer<T>(options?: TCreationOptions["toProducer"]): <TComputationOf extends ComputationOf<TComputationType, T>>(computation: TComputationOf) => TComputationOf extends PureComputationOf<TComputationType, T> ? PureProducerLike<T> : TComputationOf extends ComputationWithSideEffectsOf<TComputationType, T> ? ProducerWithSideEffectsLike<T> : never;
}
export interface SequentialComputationModule<TComputationType extends ComputationTypeLike, TCreationOptions extends {
    gen?: Record<string, any>;
} = {}> extends ComputationModuleLike<TComputationType> {
    catchError<T>(onError: SideEffect1<Error>): PureComputationOperator<TComputationType, T, T>;
    catchError<T>(onError: Function1<Error, PureComputationOf<TComputationType, T>>, options: {
        readonly [ComputationLike_isPure]: Optional<true>;
    }): PureComputationOperator<TComputationType, T, T>;
    catchError<T>(onError: Function1<Error, PureComputationOf<TComputationType, T>>, options: {
        readonly [ComputationLike_isPure]: false;
    }): ComputationOperatorWithSideEffects<TComputationType, T, T>;
    concat<T>(...computations: readonly PureComputationOf<TComputationType, T>[]): PureComputationOf<TComputationType, T>;
    concat<T>(...computations: readonly ComputationOf<TComputationType, T>[]): ComputationWithSideEffectsOf<TComputationType, T>;
    concatAll<T>(): Function1<PureComputationOf<TComputationType, PureComputationOf<TComputationType, T>>, PureComputationOf<TComputationType, T>>;
    concatAll<T>(options: {
        readonly [ComputationLike_isPure]: Optional<true>;
    }): Function1<PureComputationOf<TComputationType, PureComputationOf<TComputationType, T>>, PureComputationOf<TComputationType, T>>;
    concatAll<T>(options: {
        readonly [ComputationLike_isPure]: false;
    }): Function1<ComputationOf<TComputationType, ComputationOf<TComputationType, T>>, ComputationWithSideEffectsOf<TComputationType, T>>;
    forEach<T>(sideEffect: SideEffect1<T>): ComputationOperatorWithSideEffects<TComputationType, T, T>;
    gen<T>(factory: Factory<Iterator<T>>, options?: TCreationOptions["gen"]): NewInstanceWithSideEffectsOf<TComputationType, T>;
    repeat<T>(predicate: Predicate<number>): PureComputationOperator<TComputationType, T, T>;
    repeat<T>(count: number): PureComputationOperator<TComputationType, T, T>;
    repeat<T>(): PureComputationOperator<TComputationType, T, T>;
    retry<T>(shouldRetry?: (count: number, error: Error) => boolean): PureComputationOperator<TComputationType, T, T>;
    scanDistinct<T, TAcc>(reducer: Reducer<T, TAcc>, initialState: Factory<TAcc>, options?: {
        readonly equality?: Equality<TAcc>;
    }): PureComputationOperator<TComputationType, T, TAcc>;
    throwIfEmpty<T>(factory: Factory<unknown>, options?: undefined): PureComputationOperator<TComputationType, T, T>;
    withEffect<T>(effect: () => void | DisposableLike | SideEffect1<Optional<Error>>): ComputationOperatorWithSideEffects<TComputationType, T, T>;
}
export interface SynchronousComputationModule<TComputationType extends ComputationTypeLike, TCreationOptions extends {
    toObservable?: Record<string, any>;
    toRunnable?: Record<string, any>;
} = {}> extends ComputationModuleLike<TComputationType> {
    toRunnable<T>(options?: TCreationOptions["toRunnable"]): <TComputationOf extends ComputationOf<TComputationType, T>>(computation: TComputationOf) => TComputationOf extends PureComputationOf<TComputationType, T> ? PureRunnableLike<T> : TComputationOf extends ComputationWithSideEffectsOf<TComputationType, T> ? RunnableWithSideEffectsLike<T> : never;
}
export interface InteractiveComputationModule<TComputationType extends ComputationTypeLike> extends ComputationModuleLike<TComputationType> {
    zip<TA, TB>(a: PureComputationOf<TComputationType, TA>, b: PureComputationOf<TComputationType, TB>): PureComputationOf<TComputationType, Tuple2<TA, TB>>;
    zip<TA, TB, TC>(a: PureComputationOf<TComputationType, TA>, b: PureComputationOf<TComputationType, TB>, c: PureComputationOf<TComputationType, TC>): PureComputationOf<TComputationType, Tuple3<TA, TB, TC>>;
    zip<TA, TB, TC, TD>(a: PureComputationOf<TComputationType, TA>, b: PureComputationOf<TComputationType, TB>, c: PureComputationOf<TComputationType, TC>, d: PureComputationOf<TComputationType, TD>): PureComputationOf<TComputationType, Tuple4<TA, TB, TC, TD>>;
    zip<TA, TB>(a: ComputationOf<TComputationType, TA>, b: ComputationOf<TComputationType, TB>): ComputationWithSideEffectsOf<TComputationType, Tuple2<TA, TB>>;
    zip<TA, TB, TC>(a: ComputationOf<TComputationType, TA>, b: ComputationOf<TComputationType, TB>, c: ComputationOf<TComputationType, TC>): ComputationWithSideEffectsOf<TComputationType, Tuple3<TA, TB, TC>>;
    zip<TA, TB, TC, TD>(a: ComputationOf<TComputationType, TA>, b: ComputationOf<TComputationType, TB>, c: ComputationOf<TComputationType, TC>, d: ComputationOf<TComputationType, TD>): ComputationWithSideEffectsOf<TComputationType, Tuple4<TA, TB, TC, TD>>;
}
export interface ConcurrentDeferredComputationModule<TComputationType extends ComputationTypeLike> extends ComputationModuleLike<TComputationType> {
    genAsync<T>(factory: Factory<AsyncIterator<T>>): NewInstanceWithSideEffectsOf<TComputationType, T>;
    genPureAsync<T>(factory: Factory<AsyncIterator<T>>): NewPureInstanceOf<TComputationType, T>;
}
export interface SequentialReactiveComputationModule<TComputationType extends ComputationTypeLike> extends ComputationModuleLike<TComputationType> {
    buffer<T>(options?: {
        count?: number;
    }): PureComputationOperator<TComputationType, T, readonly T[]>;
    decodeWithCharset(options?: {
        readonly charset?: string;
        readonly fatal?: boolean;
        readonly ignoreBOM?: boolean;
    }): PureComputationOperator<TComputationType, ArrayBuffer, string>;
    takeLast<T>(options?: {
        readonly count?: number;
    }): PureComputationOperator<TComputationType, T, T>;
}
export interface ReactiveComputationModule<TComputationType extends ComputationTypeLike> extends ComputationModuleLike<TComputationType> {
    combineLatest<TA, TB>(a: PureComputationOf<TComputationType, TA>, b: PureComputationOf<TComputationType, TB>): PureComputationOf<TComputationType, Tuple2<TA, TB>>;
    combineLatest<TA, TB, TC>(a: PureComputationOf<TComputationType, TA>, b: PureComputationOf<TComputationType, TB>, c: PureComputationOf<TComputationType, TC>): PureComputationOf<TComputationType, Tuple3<TA, TB, TC>>;
    combineLatest<TA, TB, TC, TD>(a: PureComputationOf<TComputationType, TA>, b: PureComputationOf<TComputationType, TB>, c: PureComputationOf<TComputationType, TC>, d: PureComputationOf<TComputationType, TD>): PureComputationOf<TComputationType, Tuple4<TA, TB, TC, TD>>;
    combineLatest<TA, TB>(a: ComputationOf<TComputationType, TA>, b: ComputationOf<TComputationType, TB>): ComputationWithSideEffectsOf<TComputationType, Tuple2<TA, TB>>;
    combineLatest<TA, TB, TC>(a: ComputationOf<TComputationType, TA>, b: ComputationOf<TComputationType, TB>, c: ComputationOf<TComputationType, TC>): ComputationWithSideEffectsOf<TComputationType, Tuple3<TA, TB, TC>>;
    combineLatest<TA, TB, TC, TD>(a: ComputationOf<TComputationType, TA>, b: ComputationOf<TComputationType, TB>, c: ComputationOf<TComputationType, TC>, d: ComputationOf<TComputationType, TD>): ComputationWithSideEffectsOf<TComputationType, Tuple4<TA, TB, TC, TD>>;
    forkMerge<TIn, TOut>(a: Function1<PureComputationOf<TComputationType, TIn>, PureComputationOf<TComputationType, TOut>>, b: Function1<PureComputationOf<TComputationType, TIn>, PureComputationOf<TComputationType, TOut>>): PureComputationOperator<TComputationType, TIn, TOut>;
    forkMerge<TIn, TOut>(a: Function1<PureComputationOf<TComputationType, TIn>, PureComputationOf<TComputationType, TOut>>, b: Function1<PureComputationOf<TComputationType, TIn>, PureComputationOf<TComputationType, TOut>>, options: {
        readonly [ComputationLike_isPure]: Optional<true>;
    }): PureComputationOperator<TComputationType, TIn, TOut>;
    forkMerge<TIn, TOut>(a: Function1<PureComputationOf<TComputationType, TIn>, ComputationOf<TComputationType, TOut>>, b: Function1<PureComputationOf<TComputationType, TIn>, ComputationOf<TComputationType, TOut>>, options: {
        readonly [ComputationLike_isPure]: false;
    }): ComputationOperatorWithSideEffects<TComputationType, TIn, TOut>;
    forkMerge<TIn, TOut>(a: Function1<PureComputationOf<TComputationType, TIn>, PureComputationOf<TComputationType, TOut>>, b: Function1<PureComputationOf<TComputationType, TIn>, PureComputationOf<TComputationType, TOut>>, c: Function1<PureComputationOf<TComputationType, TIn>, PureComputationOf<TComputationType, TOut>>, options: {
        readonly [ComputationLike_isPure]: Optional<true>;
    }): PureComputationOperator<TComputationType, TIn, TOut>;
    forkMerge<TIn, TOut>(a: Function1<PureComputationOf<TComputationType, TIn>, ComputationOf<TComputationType, TOut>>, b: Function1<PureComputationOf<TComputationType, TIn>, ComputationOf<TComputationType, TOut>>, c: Function1<PureComputationOf<TComputationType, TIn>, ComputationOf<TComputationType, TOut>>, options: {
        readonly [ComputationLike_isPure]: false;
    }): ComputationOperatorWithSideEffects<TComputationType, TIn, TOut>;
    forkMerge<TIn, TOut>(a: Function1<PureComputationOf<TComputationType, TIn>, PureComputationOf<TComputationType, TOut>>, b: Function1<PureComputationOf<TComputationType, TIn>, PureComputationOf<TComputationType, TOut>>, c: Function1<PureComputationOf<TComputationType, TIn>, PureComputationOf<TComputationType, TOut>>, d: Function1<PureComputationOf<TComputationType, TIn>, PureComputationOf<TComputationType, TOut>>, options: {
        readonly [ComputationLike_isPure]: Optional<true>;
    }): PureComputationOperator<TComputationType, TIn, TOut>;
    forkMerge<TIn, TOut>(a: Function1<PureComputationOf<TComputationType, TIn>, ComputationOf<TComputationType, TOut>>, b: Function1<PureComputationOf<TComputationType, TIn>, ComputationOf<TComputationType, TOut>>, c: Function1<PureComputationOf<TComputationType, TIn>, ComputationOf<TComputationType, TOut>>, d: Function1<PureComputationOf<TComputationType, TIn>, ComputationOf<TComputationType, TOut>>, options: {
        readonly [ComputationLike_isPure]: false;
    }): ComputationOperatorWithSideEffects<TComputationType, TIn, TOut>;
    merge<T>(...computations: readonly PureComputationOf<TComputationType, T>[]): PureComputationOf<TComputationType, T>;
    merge<T>(...computations: readonly ComputationOf<TComputationType, T>[]): ComputationWithSideEffectsOf<TComputationType, T>;
    takeUntil<T>(notifier: PureComputationOf<TComputationType, unknown>): PureComputationOperator<TComputationType, T, T>;
    takeUntil<T>(notifier: ComputationOf<TComputationType, unknown>): ComputationOperatorWithSideEffects<TComputationType, T, T>;
    withLatestFrom<TA, TB>(other: PureComputationOf<TComputationType, TB>): PureComputationOperator<TComputationType, TA, Tuple2<TA, TB>>;
    withLatestFrom<TA, TB, T>(other: PureComputationOf<TComputationType, TB>, selector: Function2<TA, TB, T>): PureComputationOperator<TComputationType, TA, T>;
    withLatestFrom<TA, TB>(other: ComputationOf<TComputationType, TB>): ComputationOperatorWithSideEffects<TComputationType, TA, Tuple2<TA, TB>>;
    withLatestFrom<TA, TB, T>(other: ComputationOf<TComputationType, TB>, selector: Function2<TA, TB, T>): ComputationOperatorWithSideEffects<TComputationType, TA, T>;
    zipLatest<TA, TB>(a: PureComputationOf<TComputationType, TA>, b: PureComputationOf<TComputationType, TB>): PureComputationOf<TComputationType, Tuple2<TA, TB>>;
    zipLatest<TA, TB, TC>(a: PureComputationOf<TComputationType, TA>, b: PureComputationOf<TComputationType, TB>, c: PureComputationOf<TComputationType, TC>): PureComputationOf<TComputationType, Tuple3<TA, TB, TC>>;
    zipLatest<TA, TB, TC, TD>(a: PureComputationOf<TComputationType, TA>, b: PureComputationOf<TComputationType, TB>, c: PureComputationOf<TComputationType, TC>, d: PureComputationOf<TComputationType, TD>): PureComputationOf<TComputationType, Tuple4<TA, TB, TC, TD>>;
    zipLatest<TA, TB>(a: ComputationOf<TComputationType, TA>, b: ComputationOf<TComputationType, TB>): ComputationWithSideEffectsOf<TComputationType, Tuple2<TA, TB>>;
    zipLatest<TA, TB, TC>(a: ComputationOf<TComputationType, TA>, b: ComputationOf<TComputationType, TB>, c: ComputationOf<TComputationType, TC>): ComputationWithSideEffectsOf<TComputationType, Tuple3<TA, TB, TC>>;
    zipLatest<TA, TB, TC, TD>(a: ComputationOf<TComputationType, TA>, b: ComputationOf<TComputationType, TB>, c: ComputationOf<TComputationType, TC>, d: ComputationOf<TComputationType, TD>): ComputationWithSideEffectsOf<TComputationType, Tuple4<TA, TB, TC, TD>>;
}
export interface ConcurrentReactiveComputationModule<TComputationType extends ComputationTypeLike> extends ComputationModuleLike<TComputationType> {
    fromBroadcaster<T>(): Function1<BroadcasterLike<T>, PureComputationOf<TComputationType, T>>;
    fromObservable<T>(options?: {
        scheduler?: SchedulerLike;
    }): <TObservable extends ObservableLike<T>>(iterable: TObservable) => TObservable extends PureComputationLike ? NewPureInstanceOf<TComputationType, T> : TObservable extends ComputationWithSideEffectsLike ? (NewPureInstanceOf<TComputationType, T> extends MulticastComputationLike ? NewPureInstanceOf<TComputationType, T> : NewInstanceWithSideEffectsOf<TComputationType, T>) : never;
    fromProducer<T>(): <TProducer extends ProducerLike<T>>(iterable: TProducer) => TProducer extends PureComputationLike ? NewPureInstanceOf<TComputationType, T> : TProducer extends ComputationWithSideEffectsLike ? (NewPureInstanceOf<TComputationType, T> extends MulticastComputationLike ? NewPureInstanceOf<TComputationType, T> : NewInstanceWithSideEffectsOf<TComputationType, T>) : never;
}
export interface DeferredReactiveComputationModule<TComputationType extends ComputationTypeLike> extends ComputationModuleLike<TComputationType> {
    mergeAll<T>(options?: {
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
        readonly concurrency?: number;
    }): Function1<PureComputationOf<TComputationType, PureComputationOf<TComputationType, T>>, PureComputationOf<TComputationType, T>>;
    mergeAll<T>(options: {
        readonly [ComputationLike_isPure]: Optional<true>;
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
        readonly concurrency?: number;
    }): Function1<PureComputationOf<TComputationType, PureComputationOf<TComputationType, T>>, PureComputationOf<TComputationType, T>>;
    mergeAll<T>(options: {
        readonly [ComputationLike_isPure]: false;
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
        readonly concurrency?: number;
    }): Function1<ComputationOf<TComputationType, ComputationOf<TComputationType, T>>, ComputationWithSideEffectsOf<TComputationType, T>>;
    scanMany<T, TAcc>(scanner: Function2<TAcc, T, PureComputationOf<TComputationType, TAcc>>, initialValue: Factory<TAcc>): PureComputationOperator<TComputationType, T, TAcc>;
    scanMany<T, TAcc>(scanner: Function2<TAcc, T, PureComputationOf<TComputationType, TAcc>>, initialValue: Factory<TAcc>, options: {
        readonly [ComputationLike_isPure]: Optional<true>;
    }): PureComputationOperator<TComputationType, T, TAcc>;
    scanMany<T, TAcc>(scanner: Function2<TAcc, T, ComputationOf<TComputationType, TAcc>>, initialValue: Factory<TAcc>, options: {
        readonly [ComputationLike_isPure]: Optional<true>;
    }): ComputationOperatorWithSideEffects<TComputationType, T, TAcc>;
    switchAll<T>(): Function1<PureComputationOf<TComputationType, PureComputationOf<TComputationType, T>>, PureComputationOf<TComputationType, T>>;
    switchAll<T>(options: {
        readonly [ComputationLike_isPure]: Optional<true>;
    }): Function1<PureComputationOf<TComputationType, PureComputationOf<TComputationType, T>>, PureComputationOf<TComputationType, T>>;
    switchAll<T>(options: {
        readonly [ComputationLike_isPure]: false;
    }): Function1<ComputationOf<TComputationType, ComputationOf<TComputationType, T>>, ComputationWithSideEffectsOf<TComputationType, T>>;
    withBackpressure<T>(config: {
        capacity: number;
        backpressureStrategy: BackpressureStrategy;
    }): PureComputationOperator<TComputationType, T, T>;
}
