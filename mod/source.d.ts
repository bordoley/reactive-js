import { ContainerOf, ContainerOperator, FromArray, FromArrayOptions } from "./container.mjs";
import { DisposableLike } from "./disposable.mjs";
import { SideEffect1, Function1, Equality, Predicate, Reducer, Factory, Function2, Function3, Function4, Function5 } from "./functions.mjs";
import { LiftedStateLike, LiftableLike, Lift as Lift$1, AbstractLiftable, AbstractDisposableLiftable, LiftedStateOf } from "./liftable.mjs";
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
declare abstract class AbstractSource<T, TSink extends SinkLike<T>> extends AbstractLiftable<TSink> implements SourceLike {
    abstract sink(this: this, sink: TSink): void;
}
declare abstract class AbstractDisposableSource<T, TSink extends SinkLike<T>> extends AbstractDisposableLiftable<TSink> implements SourceLike {
    abstract sink(this: this, sink: TSink): void;
}
declare const sinkInto: <C extends SourceLike, T>(sink: LiftedStateOf<C, T>) => SideEffect1<C>;
declare const createCatchErrorOperator: <C extends SourceLike>(m: Lift<C>, CatchErrorSink: new <T>(delegate: LiftedStateOf<C, T>) => LiftedStateOf<C, T> & {
    readonly delegate: LiftedStateOf<C, T>;
}) => <T_1>(onError: Function1<unknown, void | ContainerOf<C, T_1>>) => ContainerOperator<C, T_1, T_1>;
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
declare const createUsing: <C extends SourceLike>(UsingSource: new <TResource extends DisposableLike, T>(resourceFactory: Factory<TResource | readonly TResource[]>, sourceFactory: (...resources: readonly TResource[]) => C) => C & {
    readonly resourceFactory: Function1<LiftedStateOf<C, T>, TResource | readonly TResource[]>;
    readonly sourceFactory: (...resources: readonly TResource[]) => C;
}) => {
    <TResource_1 extends DisposableLike, T_1>(resourceFactory: Factory<TResource_1>, observableFactory: Function1<TResource_1, C>): C;
    <TResource1 extends DisposableLike, TResource2 extends DisposableLike, T_2>(resourceFactory: Factory<readonly [
        TResource1,
        TResource2
    ]>, observableFactory: Function2<TResource1, TResource2, C>): C;
    <TResource1_1 extends DisposableLike, TResource2_1 extends DisposableLike, TResource3 extends DisposableLike, T_3>(resourceFactory: Factory<readonly [
        TResource1_1,
        TResource2_1,
        TResource3
    ]>, observableFactory: Function3<TResource1_1, TResource2_1, TResource3, C>): C;
    <TResource1_2 extends DisposableLike, TResource2_2 extends DisposableLike, TResource3_1 extends DisposableLike, TResource4 extends DisposableLike, T_4>(resourceFactory: Factory<readonly [
        TResource1_2,
        TResource2_2,
        TResource3_1,
        TResource4
    ]>, observableFactory: Function4<TResource1_2, TResource2_2, TResource3_1, TResource4, C>): C;
    <TResource1_3 extends DisposableLike, TResource2_3 extends DisposableLike, TResource3_2 extends DisposableLike, TResource4_1 extends DisposableLike, TResource5 extends DisposableLike, T_5>(resourceFactory: Factory<readonly [
        TResource1_3,
        TResource2_3,
        TResource3_2,
        TResource4_1,
        TResource5
    ]>, observableFactory: Function5<TResource1_3, TResource2_3, TResource3_2, TResource4_1, TResource5, C>): C;
    <TResource_2 extends DisposableLike, T_6>(resourceFactory: Factory<TResource_2 | readonly TResource_2[]>, runnableFactory: (...resources: readonly TResource_2[]) => C): C;
};
export { AbstractDisposableSource, AbstractSource, Lift, SinkLike, SourceLike, createCatchErrorOperator, createDecodeWithCharsetOperator, createDistinctUntilChangedOperator, createEverySatisfyOperator, createKeepOperator, createMapOperator, createOnNotifyOperator, createPairwiseOperator, createReduceOperator, createScanOperator, createSkipFirstOperator, createSomeSatisfyOperator, createTakeFirstOperator, createTakeLastOperator, createTakeWhileOperator, createThrowIfEmptyOperator, createUsing, sinkInto };
