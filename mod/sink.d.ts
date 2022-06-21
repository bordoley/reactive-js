import { ContainerLike, ContainerOf, FromArray, FromArrayOptions } from "./container.mjs";
import { DisposableLike } from "./disposable.mjs";
import { SideEffect1, Function1, Equality, Predicate, Reducer } from "./functions.mjs";
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
    readonly sinkType: DisposableLike & ContainerLike;
}
declare type SinkOf<C extends SourceLike, T> = C extends {
    readonly sinkType: unknown;
} ? (C & {
    readonly T: T;
})["sinkType"] : {
    readonly _C: C;
    readonly _T: () => T;
};
interface SourceContainer<C extends SourceLike> {
    readonly type?: C;
}
interface Sink<C extends SourceLike> extends SourceContainer<C> {
    sink<T>(sink: SinkOf<C, T>): SideEffect1<ContainerOf<C, T>>;
}
interface Lift<C extends SourceLike> extends SourceContainer<C> {
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
declare function notifyReduce<T, TAcc>(this: SinkLike<T> & {
    readonly reducer: Reducer<T, TAcc>;
    acc: TAcc;
}, next: T): void;
declare function notifyScan<T, TAcc>(this: SinkLike<T> & {
    readonly delegate: SinkLike<TAcc>;
    readonly reducer: Reducer<T, TAcc>;
    acc: TAcc;
}, next: T): void;
declare function notifySkipFirst<T>(this: SinkLike<T> & {
    readonly delegate: SinkLike<T>;
    count: number;
    readonly skipCount: number;
}, next: T): void;
declare function notifyTakeFirst<T>(this: SinkLike<T> & {
    readonly delegate: SinkLike<T>;
    count: number;
    readonly maxCount: number;
}, next: T): void;
declare const createTakeLastOperator: <C extends SourceLike>(m: FromArray<C, FromArrayOptions> & Sink<C> & Lift<C>, constructor: new <T>(delegate: SinkOf<C, T>, count: number) => SinkOf<C, T> & {
    readonly last: T[];
}) => <T_1>(options?: {
    readonly count?: number;
}) => Function1<ContainerOf<C, T_1>, ContainerOf<C, T_1>>;
declare function notifyTakeWhile<T>(this: SinkLike<T> & {
    readonly delegate: SinkLike<T>;
    readonly predicate: Predicate<T>;
    readonly inclusive: boolean;
}, next: T): void;
export { Lift, Sink, SinkLike, SinkOf, SourceContainer, SourceLike, createTakeLastOperator, notifyDecodeWithCharset, notifyDistinctUntilChanged, notifyKeep, notifyMap, notifyOnNotify, notifyPairwise, notifyReduce, notifyScan, notifySkipFirst, notifyTakeFirst, notifyTakeWhile };
