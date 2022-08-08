import { Factory, Option, Equality, Updater, Function1, Function2, Function3, Function4, Function5, Function6, SideEffect, SideEffect1, SideEffect2, SideEffect3, SideEffect4, SideEffect5, SideEffect6 } from "./functions.mjs";
import { ObservableLike } from "./rx.mjs";
import { SchedulerLike } from "./scheduling.mjs";
import { StreamLike, StreamableLike } from "./streaming.mjs";
import { DisposableLike } from "./util.mjs";
declare const async: <T>(computation: Factory<T>, { mode }?: {
    mode?: "batched" | "combine-latest" | undefined;
}) => ObservableLike<T>;
interface __Memo {
    <T>(fn: Factory<T>): T;
    <TA, T>(fn: Function1<TA, T>, a: TA): T;
    <TA, TB, T>(fn: Function2<TA, TB, T>, a: TA, b: TB): T;
    <TA, TB, TC, T>(fn: Function3<TA, TB, TC, T>, a: TA, b: TB, c: TC): T;
    <TA, TB, TC, TD, T>(fn: Function4<TA, TB, TC, TD, T>, a: TA, b: TB, c: TC, d: TD): T;
    <TA, TB, TC, TD, TE, T>(fn: Function5<TA, TB, TC, TD, TE, T>, a: TA, b: TB, c: TC, d: TD, e: TE): T;
    <TA, TB, TC, TD, TE, TF, T>(fn: Function6<TA, TB, TC, TD, TE, TF, T>, a: TA, b: TB, c: TC, d: TD, e: TE, f: TF): T;
}
declare const __memo: __Memo;
declare const __await: <T>(observable: ObservableLike<T>) => Option<T>;
interface __Do {
    (fn: SideEffect): void;
    <TA>(fn: SideEffect1<TA>, a: TA): void;
    <TA, TB>(fn: SideEffect2<TA, TB>, a: TA, b: TB): void;
    <TA, TB, TC>(fn: SideEffect3<TA, TB, TC>, a: TA, b: TB, c: TC): void;
    <TA, TB, TC, TD>(fn: SideEffect4<TA, TB, TC, TD>, a: TA, b: TB, c: TC, d: TD): void;
    <TA, TB, TC, TD, TE>(fn: SideEffect5<TA, TB, TC, TD, TE>, a: TA, b: TB, c: TC, d: TD, e: TE): void;
    <TA, TB, TC, TD, TE, TF>(fn: SideEffect6<TA, TB, TC, TD, TE, TF>, a: TA, b: TB, c: TC, d: TD, e: TE, f: TF): void;
}
declare const __do: __Do;
interface __Using {
    <T extends DisposableLike>(fn: Factory<T>): T;
    <TA, T extends DisposableLike>(fn: Function1<TA, T>, a: TA): T;
    <TA, TB, T extends DisposableLike>(fn: Function2<TA, TB, T>, a: TA, b: TB): T;
    <TA, TB, TC, T extends DisposableLike>(fn: Function3<TA, TB, TC, T>, a: TA, b: TB, c: TC): T;
    <TA, TB, TC, TD, T extends DisposableLike>(fn: Function4<TA, TB, TC, TD, T>, a: TA, b: TB, c: TC, d: TD): T;
    <TA, TB, TC, TD, TE, T extends DisposableLike>(fn: Function5<TA, TB, TC, TD, TE, T>, a: TA, b: TB, c: TC, d: TD, e: TE): T;
    <TA, TB, TC, TD, TE, TF, T extends DisposableLike>(fn: Function6<TA, TB, TC, TD, TE, TF, T>, a: TA, b: TB, c: TC, d: TD, e: TE, f: TF): T;
}
declare const __using: __Using;
declare function __currentScheduler(): SchedulerLike;
declare const __stream: <TReq, T, TStream extends StreamLike<TReq, T>>(streamable: StreamableLike<TReq, T, TStream>, { replay, scheduler, }?: {
    readonly replay?: number | undefined;
    readonly scheduler?: SchedulerLike | undefined;
}) => TStream;
declare const __state: <T>(initialState: () => T, options?: {
    readonly equality?: Option<Equality<T>>;
}) => StreamLike<Updater<T>, T>;
export { __await, __currentScheduler, __do, __memo, __state, __stream, __using, async };
