import { ContainerLike, AbstractContainer, Container, ContainerOf, FromArray, FromArrayOptions, ContainerOperator } from "./container.mjs";
import { DisposableLike } from "./disposable.mjs";
import { SideEffect1, Function1, Equality, Predicate, Reducer, Factory } from "./functions.mjs";
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
}
declare abstract class AbstractSource<T, TSink extends SinkLike<T>> extends AbstractContainer implements SourceLike {
    get sinkType(): TSink;
}
declare type SinkOf<C extends SourceLike, T> = C extends {
    readonly sinkType: unknown;
} ? (C & {
    readonly T: T;
})["sinkType"] : {
    readonly _C: C;
    readonly _T: () => T;
};
interface Sink<C extends SourceLike> extends Container<C> {
    sink<T>(sink: SinkOf<C, T>): SideEffect1<ContainerOf<C, T>>;
}
interface Lift<C extends SourceLike> extends Container<C> {
    lift<TA, TB>(operator: Function1<SinkOf<C, TB>, SinkOf<C, TA>>): Function1<ContainerOf<C, TA>, ContainerOf<C, TB>>;
}
declare const createDecodeWithCharsetOperator: <C extends SourceLike>(m: FromArray<C, FromArrayOptions> & Sink<C> & Lift<C>, DecodeWithCharsetSink: new (delegate: SinkOf<C, string>, textDecoder: TextDecoder) => SinkOf<C, ArrayBuffer> & {
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
declare const createReduceOperator: <C extends SourceLike>(m: FromArray<C, FromArrayOptions> & Lift<C> & Sink<C>, ReduceSink: new <T, TAcc>(delegate: SinkOf<C, TAcc>, reducer: Reducer<T, TAcc>, acc: TAcc) => SinkOf<C, T> & {
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
declare const createTakeFirstOperator: <C extends SourceLike>(m: FromArray<C, FromArrayOptions> & Lift<C>, TakeFirstSink: new <T>(delegate: SinkOf<C, T>, maxCount: number) => SinkOf<C, T> & {
    readonly delegate: SinkOf<C, T>;
    count: number;
    readonly maxCount: number;
}) => <T_1>(options?: {
    readonly count?: number;
}) => ContainerOperator<C, T_1, T_1>;
declare const createTakeLastOperator: <C extends SourceLike>(m: FromArray<C, FromArrayOptions> & Sink<C> & Lift<C>, TakeLastSink: new <T>(delegate: SinkOf<C, T>, maxCount: number) => SinkOf<C, T> & {
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
export { AbstractSource, Lift, Sink, SinkLike, SinkOf, SourceLike, createDecodeWithCharsetOperator, createDistinctUntilChangedOperator, createKeepOperator, createMapOperator, createOnNotifyOperator, createPairwiseOperator, createReduceOperator, createScanOperator, createSkipFirstOperator, createTakeFirstOperator, createTakeLastOperator, createTakeWhileOperator };
