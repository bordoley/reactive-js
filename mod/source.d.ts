import { Container, ContainerOf, FromArray, FromArrayOptions, ContainerOperator } from "./container.mjs";
import { Disposable, DisposableOrTeardown } from "./disposable.mjs";
import { Function1, SideEffect1, Equality, Predicate, Reducer, Factory } from "./functions.mjs";
import { LiftableStateLike, LiftableLike, Lift as Lift$1, ContraVariant, LiftableStateOf, AbstractLiftable, DisposableLiftable, DelegatingLiftableStateOf } from "./liftable.mjs";
import { Option } from "./option.mjs";
interface SinkLike<T> extends LiftableStateLike {
    assertState(this: SinkLike<T>): void;
    /**
     * Notifies the the sink of the next notification produced by the observable source.
     *
     * Note: The `notify` method must be called from within a `SchedulerContinuationLike`
     * scheduled using the sink's `schedule` method.
     *
     * @param next The next notification value.
     */
    notify(this: SinkLike<T>, next: T): void;
}
interface SourceLike extends LiftableLike {
    readonly liftableStateType: SinkLike<unknown>;
    sink(this: this["type"], sink: this["liftableStateType"]): void;
}
interface Lift<C extends SourceLike> extends Lift$1<C, ContraVariant> {
}
interface CreateSource<C extends SourceLike> extends Container<C> {
    create<T>(onSink: (sink: LiftableStateOf<C, T>) => void): ContainerOf<C, T>;
}
declare const assertState: <C extends SourceLike>(sink: LiftableStateOf<C, unknown>) => void;
declare abstract class AbstractSource<T, TSink extends SinkLike<T>> extends AbstractLiftable<TSink> implements SourceLike {
    abstract sink(this: this, sink: TSink): void;
}
declare abstract class DisposableSource<T, TSink extends SinkLike<T>> extends DisposableLiftable<TSink> implements SourceLike {
    abstract sink(this: this, sink: TSink): void;
}
declare const notify: <C extends SourceLike, T, TSink extends LiftableStateOf<C, T>>(v: T) => Function1<TSink, TSink>;
declare const notifySink: <C extends SourceLike, T, TSink extends LiftableStateOf<C, T>>(sink: TSink) => SideEffect1<T>;
declare const sinkInto: <C extends SourceLike, T, TSink extends LiftableStateOf<C, T>>(sink: TSink) => Function1<C, C>;
declare const sourceFrom: <C extends SourceLike, T, TSink extends LiftableStateOf<C, T>>(source: C) => Function1<TSink, TSink>;
declare const createBufferOperator: <C extends SourceLike>(m: Lift<C> & FromArray<C, FromArrayOptions>, BufferSink: new <T>(delegate: LiftableStateOf<C, readonly T[]>, maxBufferSize: number) => LiftableStateOf<C, T> & {
    readonly delegate: LiftableStateOf<C, readonly T[]>;
} & {
    buffer: T[];
    readonly maxBufferSize: number;
}) => <T_1>(options?: {
    readonly maxBufferSize?: number;
}) => ContainerOperator<C, T_1, readonly T_1[]>;
declare const createCatchErrorOperator: <C extends SourceLike>(m: Lift<C>, CatchErrorSink: new <T>(delegate: LiftableStateOf<C, T>) => DelegatingLiftableStateOf<C, T, T, LiftableStateOf<C, T>>) => <T_1>(f: Function1<unknown, void | ContainerOf<C, T_1>>) => ContainerOperator<C, T_1, T_1>;
declare const createDecodeWithCharsetOperator: <C extends SourceLike>(m: FromArray<C, FromArrayOptions> & Lift<C>, DecodeWithCharsetSink: new (delegate: LiftableStateOf<C, string>, textDecoder: TextDecoder) => LiftableStateOf<C, ArrayBuffer> & {
    readonly delegate: LiftableStateOf<C, string>;
} & {
    readonly textDecoder: TextDecoder;
}) => (charset?: string) => ContainerOperator<C, ArrayBuffer, string>;
declare const createDistinctUntilChangedOperator: <C extends SourceLike>(m: Lift<C>, DistinctUntilChangedSink: new <T>(delegate: LiftableStateOf<C, T>, equality: Equality<T>) => LiftableStateOf<C, T> & {
    readonly delegate: LiftableStateOf<C, T>;
} & {
    readonly equality: Equality<T>;
    prev: Option<T>;
    hasValue: boolean;
}) => <T_1>(options?: {
    readonly equality?: Equality<T_1> | undefined;
} | undefined) => ContainerOperator<C, T_1, T_1>;
declare const createEverySatisfyOperator: <C extends SourceLike>(m: FromArray<C, FromArrayOptions> & Lift<C>, EverySatisfySink: new <T>(delegate: LiftableStateOf<C, boolean>, predicate: Predicate<T>) => LiftableStateOf<C, T> & {
    readonly delegate: LiftableStateOf<C, boolean>;
} & {
    readonly predicate: Predicate<T>;
}) => <T_1>(predicate: Predicate<T_1>) => ContainerOperator<C, T_1, boolean>;
declare const createKeepOperator: <C extends SourceLike>(m: Lift<C>, KeepSink: new <T>(delegate: LiftableStateOf<C, T>, predicate: Predicate<T>) => LiftableStateOf<C, T> & {
    readonly delegate: LiftableStateOf<C, T>;
} & {
    readonly predicate: Predicate<T>;
}) => <T_1>(predicate: Predicate<T_1>) => ContainerOperator<C, T_1, T_1>;
declare const createMapOperator: <C extends SourceLike>(m: Lift<C>, MapSink: new <TA, TB>(delegate: LiftableStateOf<C, TB>, mapper: Function1<TA, TB>) => LiftableStateOf<C, TA> & {
    readonly delegate: LiftableStateOf<C, TB>;
} & {
    readonly mapper: Function1<TA, TB>;
}) => <TA_1, TB_1>(mapper: Function1<TA_1, TB_1>) => ContainerOperator<C, TA_1, TB_1>;
declare const createOnNotifyOperator: <C extends SourceLike>(m: Lift<C>, OnNotifySink: new <T>(delegate: LiftableStateOf<C, T>, onNotify: SideEffect1<T>) => LiftableStateOf<C, T> & {
    readonly delegate: LiftableStateOf<C, T>;
} & {
    readonly onNotify: SideEffect1<T>;
}) => <T_1>(onNotify: SideEffect1<T_1>) => ContainerOperator<C, T_1, T_1>;
declare const createPairwiseOperator: <C extends SourceLike>(m: Lift<C>, PairwiseSink: new <T>(delegate: LiftableStateOf<C, [
    Option<T>,
    T
]>) => LiftableStateOf<C, T> & {
    readonly delegate: LiftableStateOf<C, [
        Option<T>,
        T
    ]>;
} & {
    prev: Option<T>;
    hasPrev: boolean;
}) => <T_1>() => ContainerOperator<C, T_1, [
    Option<T_1>,
    T_1
]>;
declare const createReduceOperator: <C extends SourceLike>(m: FromArray<C, FromArrayOptions> & Lift<C>, ReduceSink: new <T, TAcc>(delegate: LiftableStateOf<C, TAcc>, reducer: Reducer<T, TAcc>, acc: TAcc) => LiftableStateOf<C, T> & {
    readonly reducer: Reducer<T, TAcc>;
    acc: TAcc;
}) => <T_1, TAcc_1>(reducer: Reducer<T_1, TAcc_1>, initialValue: Factory<TAcc_1>) => ContainerOperator<C, T_1, TAcc_1>;
declare const createScanOperator: <C extends SourceLike>(m: Lift<C>, ScanSink: new <T, TAcc>(delegate: LiftableStateOf<C, TAcc>, reducer: Reducer<T, TAcc>, acc: TAcc) => LiftableStateOf<C, T> & {
    readonly delegate: LiftableStateOf<C, TAcc>;
} & {
    readonly reducer: Reducer<T, TAcc>;
    acc: TAcc;
}) => <T_1, TAcc_1>(reducer: Reducer<T_1, TAcc_1>, initialValue: Factory<TAcc_1>) => ContainerOperator<C, T_1, TAcc_1>;
declare const createSkipFirstOperator: <C extends SourceLike>(m: Lift<C>, SkipFirstSink: new <T>(delegate: LiftableStateOf<C, T>, skipCount: number) => LiftableStateOf<C, T> & {
    readonly delegate: LiftableStateOf<C, T>;
} & {
    count: number;
    readonly skipCount: number;
}) => <T_1>(options?: {
    readonly count?: number;
}) => ContainerOperator<C, T_1, T_1>;
declare const createSomeSatisfyOperator: <C extends SourceLike>(m: FromArray<C, FromArrayOptions> & Lift<C>, SomeSatisfySink: new <T>(delegate: LiftableStateOf<C, boolean>, predicate: Predicate<T>) => LiftableStateOf<C, T> & {
    readonly delegate: LiftableStateOf<C, boolean>;
} & {
    readonly predicate: Predicate<T>;
}) => <T_1>(predicate: Predicate<T_1>) => ContainerOperator<C, T_1, boolean>;
declare const createTakeFirstOperator: <C extends SourceLike>(m: FromArray<C, FromArrayOptions> & Lift<C>, TakeFirstSink: new <T>(delegate: LiftableStateOf<C, T>, maxCount: number) => LiftableStateOf<C, T> & {
    readonly delegate: LiftableStateOf<C, T>;
} & {
    count: number;
    readonly maxCount: number;
}) => <T_1>(options?: {
    readonly count?: number;
}) => ContainerOperator<C, T_1, T_1>;
declare const createTakeLastOperator: <C extends SourceLike>(m: FromArray<C, FromArrayOptions> & Lift<C>, TakeLastSink: new <T>(delegate: LiftableStateOf<C, T>, maxCount: number) => LiftableStateOf<C, T> & {
    readonly last: T[];
    readonly maxCount: number;
}) => <T_1>(options?: {
    readonly count?: number;
}) => ContainerOperator<C, T_1, T_1>;
declare const createTakeWhileOperator: <C extends SourceLike>(m: Lift<C>, TakeWhileSink: new <T>(delegate: LiftableStateOf<C, T>, predicate: Predicate<T>, inclusive: boolean) => LiftableStateOf<C, T> & {
    readonly delegate: LiftableStateOf<C, T>;
} & {
    readonly predicate: Predicate<T>;
    readonly inclusive: boolean;
}) => <T_1>(predicate: Predicate<T_1>, options?: {
    readonly inclusive?: boolean;
}) => ContainerOperator<C, T_1, T_1>;
declare const createThrowIfEmptyOperator: <C extends SourceLike>(m: Lift<C>, ThrowIfEmptySink: new <T>(delegate: LiftableStateOf<C, T>) => LiftableStateOf<C, T> & {
    readonly delegate: LiftableStateOf<C, T>;
} & {
    isEmpty: boolean;
}) => <T_1>(factory: Factory<unknown>) => ContainerOperator<C, T_1, T_1>;
declare const createFromDisposable: <C extends SourceLike>(m: CreateSource<C>) => <T>(disposable: Disposable) => ContainerOf<C, T>;
declare const createNever: <C extends SourceLike>(m: CreateSource<C>) => <T>() => ContainerOf<C, T>;
declare const createOnSink: <C extends SourceLike>(m: CreateSource<C>) => <T>(f: Factory<DisposableOrTeardown | void>) => ContainerOperator<C, T, T>;
declare const createUsing: <C extends SourceLike>(m: CreateSource<C>) => <TResource extends Disposable, T>(resourceFactory: Factory<TResource | readonly TResource[]>, sourceFactory: (...resources: readonly TResource[]) => ContainerOf<C, T>) => ContainerOf<C, T>;
export { AbstractSource, CreateSource, DisposableSource, Lift, SinkLike, SourceLike, assertState, createBufferOperator, createCatchErrorOperator, createDecodeWithCharsetOperator, createDistinctUntilChangedOperator, createEverySatisfyOperator, createFromDisposable, createKeepOperator, createMapOperator, createNever, createOnNotifyOperator, createOnSink, createPairwiseOperator, createReduceOperator, createScanOperator, createSkipFirstOperator, createSomeSatisfyOperator, createTakeFirstOperator, createTakeLastOperator, createTakeWhileOperator, createThrowIfEmptyOperator, createUsing, notify, notifySink, sinkInto, sourceFrom };
