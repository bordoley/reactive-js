import { ContainerLike, AbstractContainer, Container, ContainerOf, ContainerOperator, FromArray, FromArrayOptions } from "./container.mjs";
import { DisposableLike } from "./disposable.mjs";
import { Function1, SideEffect1, Equality, Predicate, Reducer, Factory, Function2, Function3, Function4, Function5 } from "./functions.mjs";
import { Option } from "./option.mjs";
interface SinkLike<T> extends DisposableLike, ContainerLike {
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
interface SourceLike extends ContainerLike {
    readonly sinkType: SinkLike<unknown>;
    sink(this: this["type"], sink: this["sinkType"]): void;
}
declare abstract class AbstractSource<T, TSink extends SinkLike<T>> extends AbstractContainer implements SourceLike {
    get sinkType(): TSink;
    abstract sink(this: this, sink: TSink): void;
}
declare type SinkOf<C extends SourceLike, T> = C extends {
    readonly sinkType: unknown;
} ? (C & {
    readonly T: T;
})["sinkType"] : {
    readonly _C: C;
    readonly _T: () => T;
};
interface Lift<C extends SourceLike> extends Container<C> {
    lift<TA, TB>(operator: Function1<SinkOf<C, TB>, SinkOf<C, TA>>): Function1<ContainerOf<C, TA>, ContainerOf<C, TB>>;
}
interface CreateDelegatingSink<C extends SourceLike> extends Container<C> {
    createDelegatingSink<T>(delegate: SinkOf<C, T>): SinkOf<C, T>;
}
declare const sinkInto: <C extends SourceLike, T>(sink: SinkOf<C, T>) => SideEffect1<C>;
declare const createCatchErrorOperator: <C extends SourceLike>(m: CreateDelegatingSink<C> & Lift<C>) => <T>(onError: Function1<unknown, void | ContainerOf<C, T>>) => ContainerOperator<C, T, T>;
declare const createDecodeWithCharsetOperator: <C extends SourceLike>(m: FromArray<C, FromArrayOptions> & Lift<C>, DecodeWithCharsetSink: new (delegate: SinkOf<C, string>, textDecoder: TextDecoder) => SinkOf<C, ArrayBuffer> & {
    readonly delegate: SinkOf<C, string>;
    readonly textDecoder: TextDecoder;
}) => (charset?: string) => ContainerOperator<C, ArrayBuffer, string>;
declare const createDistinctUntilChangedOperator: <C extends SourceLike>(m: Lift<C>, DistinctUntilChangedSink: new <T>(delegate: SinkOf<C, T>, equality: Equality<T>) => SinkOf<C, T> & {
    readonly delegate: SinkOf<C, T>;
    readonly equality: Equality<T>;
    prev: Option<T>;
    hasValue: boolean;
}) => <T_1>(options?: {
    readonly equality?: Equality<T_1> | undefined;
} | undefined) => ContainerOperator<C, T_1, T_1>;
declare const createEverySatisfyOperator: <C extends SourceLike>(m: FromArray<C, FromArrayOptions> & Lift<C>, EverySatisfySink: new <T>(delegate: SinkOf<C, boolean>, predicate: Predicate<T>) => SinkOf<C, T> & {
    readonly delegate: SinkOf<C, boolean>;
    readonly predicate: Predicate<T>;
}) => <T_1>(predicate: Predicate<T_1>) => ContainerOperator<C, T_1, boolean>;
declare const createKeepOperator: <C extends SourceLike>(m: Lift<C>, KeepSink: new <T>(delegate: SinkOf<C, T>, predicate: Predicate<T>) => SinkOf<C, T> & {
    readonly delegate: SinkOf<C, T>;
    readonly predicate: Predicate<T>;
}) => <T_1>(predicate: Predicate<T_1>) => ContainerOperator<C, T_1, T_1>;
declare const createMapOperator: <C extends SourceLike>(m: Lift<C>, MapSink: new <TA, TB>(delegate: SinkOf<C, TB>, mapper: Function1<TA, TB>) => SinkOf<C, TA> & {
    readonly delegate: SinkOf<C, TB>;
    readonly mapper: Function1<TA, TB>;
}) => <TA_1, TB_1>(mapper: Function1<TA_1, TB_1>) => ContainerOperator<C, TA_1, TB_1>;
declare const createOnNotifyOperator: <C extends SourceLike>(m: Lift<C>, OnNotifySink: new <T>(delegate: SinkOf<C, T>, onNotify: SideEffect1<T>) => SinkOf<C, T> & {
    readonly delegate: SinkOf<C, T>;
    readonly onNotify: SideEffect1<T>;
}) => <T_1>(onNotify: SideEffect1<T_1>) => ContainerOperator<C, T_1, T_1>;
declare const createPairwiseOperator: <C extends SourceLike>(m: Lift<C>, PairwiseSink: new <T>(delegate: SinkOf<C, [
    Option<T>,
    T
]>) => SinkOf<C, T> & {
    readonly delegate: SinkOf<C, [
        Option<T>,
        T
    ]>;
    prev: Option<T>;
    hasPrev: boolean;
}) => <T_1>() => ContainerOperator<C, T_1, [
    Option<T_1>,
    T_1
]>;
declare const createReduceOperator: <C extends SourceLike>(m: FromArray<C, FromArrayOptions> & Lift<C>, ReduceSink: new <T, TAcc>(delegate: SinkOf<C, TAcc>, reducer: Reducer<T, TAcc>, acc: TAcc) => SinkOf<C, T> & {
    readonly reducer: Reducer<T, TAcc>;
    acc: TAcc;
}) => <T_1, TAcc_1>(reducer: Reducer<T_1, TAcc_1>, initialValue: Factory<TAcc_1>) => ContainerOperator<C, T_1, TAcc_1>;
declare const createScanOperator: <C extends SourceLike>(m: Lift<C>, ScanSink: new <T, TAcc>(delegate: SinkOf<C, TAcc>, reducer: Reducer<T, TAcc>, acc: TAcc) => SinkOf<C, T> & {
    readonly delegate: SinkOf<C, TAcc>;
    readonly reducer: Reducer<T, TAcc>;
    acc: TAcc;
}) => <T_1, TAcc_1>(reducer: Reducer<T_1, TAcc_1>, initialValue: Factory<TAcc_1>) => ContainerOperator<C, T_1, TAcc_1>;
declare const createSkipFirstOperator: <C extends SourceLike>(m: Lift<C>, SkipFirstSink: new <T>(delegate: SinkOf<C, T>, skipCount: number) => SinkOf<C, T> & {
    readonly delegate: SinkOf<C, T>;
    count: number;
    readonly skipCount: number;
}) => <T_1>(options?: {
    readonly count?: number;
}) => ContainerOperator<C, T_1, T_1>;
declare const createSomeSatisfyOperator: <C extends SourceLike>(m: FromArray<C, FromArrayOptions> & Lift<C>, SomeSatisfySink: new <T>(delegate: SinkOf<C, boolean>, predicate: Predicate<T>) => SinkOf<C, T> & {
    readonly delegate: SinkOf<C, boolean>;
    readonly predicate: Predicate<T>;
}) => <T_1>(predicate: Predicate<T_1>) => ContainerOperator<C, T_1, boolean>;
declare const createTakeFirstOperator: <C extends SourceLike>(m: FromArray<C, FromArrayOptions> & Lift<C>, TakeFirstSink: new <T>(delegate: SinkOf<C, T>, maxCount: number) => SinkOf<C, T> & {
    readonly delegate: SinkOf<C, T>;
    count: number;
    readonly maxCount: number;
}) => <T_1>(options?: {
    readonly count?: number;
}) => ContainerOperator<C, T_1, T_1>;
declare const createTakeLastOperator: <C extends SourceLike>(m: FromArray<C, FromArrayOptions> & Lift<C>, TakeLastSink: new <T>(delegate: SinkOf<C, T>, maxCount: number) => SinkOf<C, T> & {
    readonly last: T[];
    readonly maxCount: number;
}) => <T_1>(options?: {
    readonly count?: number;
}) => ContainerOperator<C, T_1, T_1>;
declare const createTakeWhileOperator: <C extends SourceLike>(m: Lift<C>, TakeWhileSink: new <T>(delegate: SinkOf<C, T>, predicate: Predicate<T>, inclusive: boolean) => SinkOf<C, T> & {
    readonly delegate: SinkOf<C, T>;
    readonly predicate: Predicate<T>;
    readonly inclusive: boolean;
}) => <T_1>(predicate: Predicate<T_1>, options?: {
    readonly inclusive?: boolean;
}) => ContainerOperator<C, T_1, T_1>;
declare const createThrowIfEmptyOperator: <C extends SourceLike>(m: Lift<C>, ThrowIfEmptySink: new <T>(delegate: SinkOf<C, T>) => SinkOf<C, T> & {
    readonly delegate: SinkOf<C, T>;
    isEmpty: boolean;
}) => <T_1>(factory: Factory<unknown>) => ContainerOperator<C, T_1, T_1>;
declare const createUsing: <C extends SourceLike>(UsingSource: new <TResource extends DisposableLike, T>(resourceFactory: Factory<TResource | readonly TResource[]>, sourceFactory: (...resources: readonly TResource[]) => C) => C & {
    readonly resourceFactory: Function1<SinkOf<C, T>, TResource | readonly TResource[]>;
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
export { AbstractSource, CreateDelegatingSink, Lift, SinkLike, SinkOf, SourceLike, createCatchErrorOperator, createDecodeWithCharsetOperator, createDistinctUntilChangedOperator, createEverySatisfyOperator, createKeepOperator, createMapOperator, createOnNotifyOperator, createPairwiseOperator, createReduceOperator, createScanOperator, createSkipFirstOperator, createSomeSatisfyOperator, createTakeFirstOperator, createTakeLastOperator, createTakeWhileOperator, createThrowIfEmptyOperator, createUsing, sinkInto };
