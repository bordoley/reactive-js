import { ObservableLike, StreamLike, StreamOf, StreamableLike } from "../../computations.js";
import { Equality, Factory, Function1, Function2, Function3, Function4, Function5, Function6, Optional, SideEffect, SideEffect1, SideEffect2, SideEffect3, SideEffect4, SideEffect5, SideEffect6, Updater } from "../../functions.js";
import { BackpressureStrategy, DisposableLike, SchedulerLike } from "../../utils.js";
interface __Memo {
    __memo<T>(fn: Factory<T>): T;
    __memo<TA, T>(fn: Function1<TA, T>, a: TA): T;
    __memo<TA, TB, T>(fn: Function2<TA, TB, T>, a: TA, b: TB): T;
    __memo<TA, TB, TC, T>(fn: Function3<TA, TB, TC, T>, a: TA, b: TB, c: TC): T;
    __memo<TA, TB, TC, TD, T>(fn: Function4<TA, TB, TC, TD, T>, a: TA, b: TB, c: TC, d: TD): T;
    __memo<TA, TB, TC, TD, TE, T>(fn: Function5<TA, TB, TC, TD, TE, T>, a: TA, b: TB, c: TC, d: TD, e: TE): T;
    __memo<TA, TB, TC, TD, TE, TF, T>(fn: Function6<TA, TB, TC, TD, TE, TF, T>, a: TA, b: TB, c: TC, d: TD, e: TE, f: TF): T;
}
export declare const __memo: __Memo["__memo"];
export declare const __await: <T>(observable: ObservableLike<T>) => T;
export declare const __constant: <T>(value: T, ...args: unknown[]) => T;
export declare const __observe: <T>(observable: ObservableLike<T>) => Optional<T>;
interface __Do {
    __do(fn: SideEffect): void;
    __do<TA>(fn: SideEffect1<TA>, a: TA): void;
    __do<TA, TB>(fn: SideEffect2<TA, TB>, a: TA, b: TB): void;
    __do<TA, TB, TC>(fn: SideEffect3<TA, TB, TC>, a: TA, b: TB, c: TC): void;
    __do<TA, TB, TC, TD>(fn: SideEffect4<TA, TB, TC, TD>, a: TA, b: TB, c: TC, d: TD): void;
    __do<TA, TB, TC, TD, TE>(fn: SideEffect5<TA, TB, TC, TD, TE>, a: TA, b: TB, c: TC, d: TD, e: TE): void;
    __do<TA, TB, TC, TD, TE, TF>(fn: SideEffect6<TA, TB, TC, TD, TE, TF>, a: TA, b: TB, c: TC, d: TD, e: TE, f: TF): void;
}
export declare const __do: __Do["__do"];
interface __Using {
    __using<T extends DisposableLike>(fn: Factory<T>): T;
    __using<TA, T extends DisposableLike>(fn: Function1<TA, T>, a: TA): T;
    __using<TA, TB, T extends DisposableLike>(fn: Function2<TA, TB, T>, a: TA, b: TB): T;
    __using<TA, TB, TC, T extends DisposableLike>(fn: Function3<TA, TB, TC, T>, a: TA, b: TB, c: TC): T;
    __using<TA, TB, TC, TD, T extends DisposableLike>(fn: Function4<TA, TB, TC, TD, T>, a: TA, b: TB, c: TC, d: TD): T;
    __using<TA, TB, TC, TD, TE, T extends DisposableLike>(fn: Function5<TA, TB, TC, TD, TE, T>, a: TA, b: TB, c: TC, d: TD, e: TE): T;
    __using<TA, TB, TC, TD, TE, TF, T extends DisposableLike>(fn: Function6<TA, TB, TC, TD, TE, TF, T>, a: TA, b: TB, c: TC, d: TD, e: TE, f: TF): T;
}
export declare const __using: __Using["__using"];
export declare const __currentScheduler: () => SchedulerLike;
export declare const __stream: <TStreamable extends StreamableLike>(streamable: TStreamable, { replay, backpressureStrategy, capacity, scheduler, }?: {
    readonly replay?: number;
    readonly scheduler?: SchedulerLike;
    readonly backpressureStrategy?: BackpressureStrategy;
    readonly capacity?: number;
}) => StreamOf<TStreamable>;
export declare const __state: <T>(initialState: () => T, options?: {
    readonly equality?: Optional<Equality<T>>;
    readonly replay?: number;
    readonly scheduler?: SchedulerLike;
    readonly capacity?: number;
}) => StreamLike<Updater<T>, T>;
export {};
