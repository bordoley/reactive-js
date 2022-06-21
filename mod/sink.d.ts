import { ContainerLike, Container, ContainerOf, FromArray, FromArrayOptions, ContainerOperator } from "./container.mjs";
import { DisposableLike } from "./disposable.mjs";
import { SideEffect1, Function1, Equality, Predicate, Reducer, Factory } from "./functions.mjs";
import { Option } from "./option.mjs";
interface SinkLike<T> extends DisposableLike, ContainerLike {
    assertState(this: SinkLike<T>): void;
    /**
     * Notifies the the observer of the next notification produced by the observable source.
     *
     * Note: The `notify` method must be called from within a `SchedulerContinuationLike`
     * scheduled using the observer's `schedule` method.
     *
     * @param next The next notification value.
     */
    notify(this: SinkLike<T>, next: T): void;
}
interface SourceLike extends ContainerLike {
    readonly sinkType: DisposableLike & ContainerLike & SinkLike<unknown>;
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
declare function notifyDecodeWithCharset(this: SinkLike<ArrayBuffer> & {
    readonly delegate: SinkLike<string>;
    readonly textDecoder: TextDecoder;
}, next: ArrayBuffer): void;
declare function notifyDistinctUntilChanged<T>(this: SinkLike<T> & {
    readonly delegate: SinkLike<T>;
    readonly equality: Equality<T>;
    prev: Option<T>;
    hasValue: boolean;
}, next: T): void;
declare function notifyKeep<T>(this: SinkLike<T> & {
    readonly delegate: SinkLike<T>;
    readonly predicate: Predicate<T>;
}, next: T): void;
declare function notifyMap<TA, TB>(this: SinkLike<TA> & {
    readonly delegate: SinkLike<TB>;
    readonly mapper: Function1<TA, TB>;
}, next: TA): void;
declare function notifyOnNotify<T>(this: SinkLike<T> & {
    readonly delegate: SinkLike<T>;
    readonly onNotify: SideEffect1<T>;
}, next: T): void;
declare function notifyPairwise<T>(this: SinkLike<T> & {
    readonly delegate: SinkLike<[
        Option<T>,
        T
    ]>;
    prev: Option<T>;
    hasPrev: boolean;
}, value: T): void;
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
export { Lift, Sink, SinkLike, SinkOf, SourceLike, createReduceOperator, createScanOperator, createSkipFirstOperator, createTakeFirstOperator, createTakeLastOperator, createTakeWhileOperator, notifyDecodeWithCharset, notifyDistinctUntilChanged, notifyKeep, notifyMap, notifyOnNotify, notifyPairwise };
