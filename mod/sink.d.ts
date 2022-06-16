import { DisposableLike, AbstractDisposable } from "./disposable.mjs";
import { Function1, Equality, Predicate, SideEffect1, Reducer } from "./functions.mjs";
import { Option } from "./option.mjs";
interface SinkLike<T> extends DisposableLike {
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
interface DelegatingSinkLike<TA, TB> extends SinkLike<TA> {
    readonly delegate: SinkLike<TB>;
}
declare type SinkOperator<TA, TB> = Function1<SinkLike<TB>, SinkLike<TA>>;
declare abstract class AbstractSink<T> extends AbstractDisposable implements SinkLike<T> {
    assertState(this: SinkLike<T>): void;
    notify(_: T): void;
}
declare function notifyDistinctUntilChanged<T>(this: DelegatingSinkLike<T, T> & {
    readonly equality: Equality<T>;
    prev: Option<T>;
    hasValue: boolean;
}, next: T): void;
declare function notifyKeep<T>(this: DelegatingSinkLike<T, T> & {
    readonly predicate: Predicate<T>;
}, next: T): void;
declare function notifyMap<TA, TB>(this: DelegatingSinkLike<TA, TB> & {
    readonly mapper: Function1<TA, TB>;
}, next: TA): void;
declare function notifyOnNotify<T>(this: DelegatingSinkLike<T, T> & {
    readonly onNotify: SideEffect1<T>;
}, next: T): void;
declare function notifyPairwise<T>(this: DelegatingSinkLike<T, [
    Option<T>,
    T
]> & {
    prev: Option<T>;
    hasPrev: boolean;
}, value: T): void;
declare function notifyReduce<T, TAcc>(this: SinkLike<T> & {
    readonly reducer: Reducer<T, TAcc>;
    acc: TAcc;
}, next: T): void;
declare function notifyScan<T, TAcc>(this: DelegatingSinkLike<T, TAcc> & {
    readonly reducer: Reducer<T, TAcc>;
    acc: TAcc;
}, next: T): void;
declare function notifySkipFirst<T>(this: DelegatingSinkLike<T, T> & {
    count: number;
    readonly skipCount: number;
}, next: T): void;
declare function notifyTakeFirst<T>(this: DelegatingSinkLike<T, T> & {
    count: number;
    readonly maxCount: number;
}, next: T): void;
declare function notifyTakeLast<T>(this: SinkLike<T> & {
    readonly last: T[];
    readonly maxCount: number;
}, next: T): void;
declare function notifyTakeWhile<T>(this: DelegatingSinkLike<T, T> & {
    readonly predicate: Predicate<T>;
    readonly inclusive: boolean;
}, next: T): void;
export { AbstractSink, DelegatingSinkLike, SinkLike, SinkOperator, notifyDistinctUntilChanged, notifyKeep, notifyMap, notifyOnNotify, notifyPairwise, notifyReduce, notifyScan, notifySkipFirst, notifyTakeFirst, notifyTakeLast, notifyTakeWhile };
