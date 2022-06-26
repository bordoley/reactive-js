import { Container, ContainerOf, ContainerOperator, FromArray, FromArrayOptions } from "./container.mjs";
import { DisposableLike, DisposableOrTeardown } from "./disposable.mjs";
import { SideEffect1, Function1, Equality, Predicate, Reducer, Factory } from "./functions.mjs";
import { LiftedStateLike, LiftableLike, Lift as Lift$1, LiftedStateOf, AbstractLiftable, AbstractDisposableLiftable } from "./liftable.mjs";
import { Option } from "./option.mjs";
interface SinkLike<T> extends LiftedStateLike {
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
    readonly liftedStateType: SinkLike<unknown>;
    sink(this: this["type"], sink: this["liftedStateType"]): void;
}
interface Lift<C extends SourceLike> extends Lift$1<C, "contravariant"> {
}
interface CreateSource<C extends SourceLike> extends Container<C> {
    create<T>(onSink: (sink: LiftedStateOf<C, T>) => void): ContainerOf<C, T>;
}
declare abstract class AbstractSource<T, TSink extends SinkLike<T>> extends AbstractLiftable<TSink> implements SourceLike {
    abstract sink(this: this, sink: TSink): void;
}
declare abstract class AbstractDisposableSource<T, TSink extends SinkLike<T>> extends AbstractDisposableLiftable<TSink> implements SourceLike {
    abstract sink(this: this, sink: TSink): void;
}
declare const notifySink: <C extends SourceLike, T, TSink extends LiftedStateOf<C, T>>(sink: TSink) => SideEffect1<T>;
declare const sinkInto: <C extends SourceLike, T, TSink extends LiftedStateOf<C, T>>(sink: TSink) => Function1<C, C>;
declare const sourceFrom: <C extends SourceLike, T, TSink extends LiftedStateOf<C, T>>(source: C) => Function1<TSink, TSink>;
declare const createCatchErrorOperator: <C extends SourceLike>(m: Lift<C>, CatchErrorSink: new <T>(delegate: LiftedStateOf<C, T>) => LiftedStateOf<C, T> & {
    readonly delegate: LiftedStateOf<C, T>;
}) => <T_1>(f: Function1<unknown, void | ContainerOf<C, T_1>>) => ContainerOperator<C, T_1, T_1>;
declare const createDecodeWithCharsetOperator: <C extends SourceLike>(m: FromArray<C, FromArrayOptions> & Lift<C>, DecodeWithCharsetSink: new (delegate: LiftedStateOf<C, string>, textDecoder: TextDecoder) => LiftedStateOf<C, ArrayBuffer> & {
    readonly delegate: LiftedStateOf<C, string>;
    readonly textDecoder: TextDecoder;
}) => (charset?: string) => ContainerOperator<C, ArrayBuffer, string>;
declare const createDistinctUntilChangedOperator: <C extends SourceLike>(m: Lift<C>, DistinctUntilChangedSink: new <T>(delegate: LiftedStateOf<C, T>, equality: Equality<T>) => LiftedStateOf<C, T> & {
    readonly delegate: LiftedStateOf<C, T>;
    readonly equality: Equality<T>;
    prev: Option<T>;
    hasValue: boolean;
}) => <T_1>(options?: {
    readonly equality?: Equality<T_1> | undefined;
} | undefined) => ContainerOperator<C, T_1, T_1>;
declare const createEverySatisfyOperator: <C extends SourceLike>(m: FromArray<C, FromArrayOptions> & Lift<C>, EverySatisfySink: new <T>(delegate: LiftedStateOf<C, boolean>, predicate: Predicate<T>) => LiftedStateOf<C, T> & {
    readonly delegate: LiftedStateOf<C, boolean>;
    readonly predicate: Predicate<T>;
}) => <T_1>(predicate: Predicate<T_1>) => ContainerOperator<C, T_1, boolean>;
declare const createKeepOperator: <C extends SourceLike>(m: Lift<C>, KeepSink: new <T>(delegate: LiftedStateOf<C, T>, predicate: Predicate<T>) => LiftedStateOf<C, T> & {
    readonly delegate: LiftedStateOf<C, T>;
    readonly predicate: Predicate<T>;
}) => <T_1>(predicate: Predicate<T_1>) => ContainerOperator<C, T_1, T_1>;
declare const createMapOperator: <C extends SourceLike>(m: Lift<C>, MapSink: new <TA, TB>(delegate: LiftedStateOf<C, TB>, mapper: Function1<TA, TB>) => LiftedStateOf<C, TA> & {
    readonly delegate: LiftedStateOf<C, TB>;
    readonly mapper: Function1<TA, TB>;
}) => <TA_1, TB_1>(mapper: Function1<TA_1, TB_1>) => ContainerOperator<C, TA_1, TB_1>;
declare const createOnNotifyOperator: <C extends SourceLike>(m: Lift<C>, OnNotifySink: new <T>(delegate: LiftedStateOf<C, T>, onNotify: SideEffect1<T>) => LiftedStateOf<C, T> & {
    readonly delegate: LiftedStateOf<C, T>;
    readonly onNotify: SideEffect1<T>;
}) => <T_1>(onNotify: SideEffect1<T_1>) => ContainerOperator<C, T_1, T_1>;
declare const createPairwiseOperator: <C extends SourceLike>(m: Lift<C>, PairwiseSink: new <T>(delegate: LiftedStateOf<C, [
    Option<T>,
    T
]>) => LiftedStateOf<C, T> & {
    readonly delegate: LiftedStateOf<C, [
        Option<T>,
        T
    ]>;
    prev: Option<T>;
    hasPrev: boolean;
}) => <T_1>() => ContainerOperator<C, T_1, [
    Option<T_1>,
    T_1
]>;
declare const createReduceOperator: <C extends SourceLike>(m: FromArray<C, FromArrayOptions> & Lift<C>, ReduceSink: new <T, TAcc>(delegate: LiftedStateOf<C, TAcc>, reducer: Reducer<T, TAcc>, acc: TAcc) => LiftedStateOf<C, T> & {
    readonly reducer: Reducer<T, TAcc>;
    acc: TAcc;
}) => <T_1, TAcc_1>(reducer: Reducer<T_1, TAcc_1>, initialValue: Factory<TAcc_1>) => ContainerOperator<C, T_1, TAcc_1>;
declare const createScanOperator: <C extends SourceLike>(m: Lift<C>, ScanSink: new <T, TAcc>(delegate: LiftedStateOf<C, TAcc>, reducer: Reducer<T, TAcc>, acc: TAcc) => LiftedStateOf<C, T> & {
    readonly delegate: LiftedStateOf<C, TAcc>;
    readonly reducer: Reducer<T, TAcc>;
    acc: TAcc;
}) => <T_1, TAcc_1>(reducer: Reducer<T_1, TAcc_1>, initialValue: Factory<TAcc_1>) => ContainerOperator<C, T_1, TAcc_1>;
declare const createSkipFirstOperator: <C extends SourceLike>(m: Lift<C>, SkipFirstSink: new <T>(delegate: LiftedStateOf<C, T>, skipCount: number) => LiftedStateOf<C, T> & {
    readonly delegate: LiftedStateOf<C, T>;
    count: number;
    readonly skipCount: number;
}) => <T_1>(options?: {
    readonly count?: number;
}) => ContainerOperator<C, T_1, T_1>;
declare const createSomeSatisfyOperator: <C extends SourceLike>(m: FromArray<C, FromArrayOptions> & Lift<C>, SomeSatisfySink: new <T>(delegate: LiftedStateOf<C, boolean>, predicate: Predicate<T>) => LiftedStateOf<C, T> & {
    readonly delegate: LiftedStateOf<C, boolean>;
    readonly predicate: Predicate<T>;
}) => <T_1>(predicate: Predicate<T_1>) => ContainerOperator<C, T_1, boolean>;
declare const createTakeFirstOperator: <C extends SourceLike>(m: FromArray<C, FromArrayOptions> & Lift<C>, TakeFirstSink: new <T>(delegate: LiftedStateOf<C, T>, maxCount: number) => LiftedStateOf<C, T> & {
    readonly delegate: LiftedStateOf<C, T>;
    count: number;
    readonly maxCount: number;
}) => <T_1>(options?: {
    readonly count?: number;
}) => ContainerOperator<C, T_1, T_1>;
declare const createTakeLastOperator: <C extends SourceLike>(m: FromArray<C, FromArrayOptions> & Lift<C>, TakeLastSink: new <T>(delegate: LiftedStateOf<C, T>, maxCount: number) => LiftedStateOf<C, T> & {
    readonly last: T[];
    readonly maxCount: number;
}) => <T_1>(options?: {
    readonly count?: number;
}) => ContainerOperator<C, T_1, T_1>;
declare const createTakeWhileOperator: <C extends SourceLike>(m: Lift<C>, TakeWhileSink: new <T>(delegate: LiftedStateOf<C, T>, predicate: Predicate<T>, inclusive: boolean) => LiftedStateOf<C, T> & {
    readonly delegate: LiftedStateOf<C, T>;
    readonly predicate: Predicate<T>;
    readonly inclusive: boolean;
}) => <T_1>(predicate: Predicate<T_1>, options?: {
    readonly inclusive?: boolean;
}) => ContainerOperator<C, T_1, T_1>;
declare const createThrowIfEmptyOperator: <C extends SourceLike>(m: Lift<C>, ThrowIfEmptySink: new <T>(delegate: LiftedStateOf<C, T>) => LiftedStateOf<C, T> & {
    readonly delegate: LiftedStateOf<C, T>;
    isEmpty: boolean;
}) => <T_1>(factory: Factory<unknown>) => ContainerOperator<C, T_1, T_1>;
declare const createFromDisposable: <C extends SourceLike>(m: CreateSource<C>) => <T>(disposable: DisposableLike) => ContainerOf<C, T>;
declare const createNever: <C extends SourceLike>(m: CreateSource<C>) => <T>() => ContainerOf<C, T>;
declare const createOnSink: <C extends SourceLike>(m: CreateSource<C>) => <T>(f: Factory<DisposableOrTeardown | void>) => ContainerOperator<C, T, T>;
declare const createUsing: <C extends SourceLike>(m: CreateSource<C>) => <TResource extends DisposableLike, T>(resourceFactory: Factory<TResource | readonly TResource[]>, sourceFactory: (...resources: readonly TResource[]) => ContainerOf<C, T>) => ContainerOf<C, T>;
export { AbstractDisposableSource, AbstractSource, CreateSource, Lift, SinkLike, SourceLike, createCatchErrorOperator, createDecodeWithCharsetOperator, createDistinctUntilChangedOperator, createEverySatisfyOperator, createFromDisposable, createKeepOperator, createMapOperator, createNever, createOnNotifyOperator, createOnSink, createPairwiseOperator, createReduceOperator, createScanOperator, createSkipFirstOperator, createSomeSatisfyOperator, createTakeFirstOperator, createTakeLastOperator, createTakeWhileOperator, createThrowIfEmptyOperator, createUsing, notifySink, sinkInto, sourceFrom };
