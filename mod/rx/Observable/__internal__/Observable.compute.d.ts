import { AwaitOrObserveEffect_hasValue, AwaitOrObserveEffect_observable, AwaitOrObserveEffect_subscription, AwaitOrObserveEffect_value, ComputeContext_awaitOrObserve, ComputeContext_cleanup, ComputeContext_effects, ComputeContext_index, ComputeContext_memoOrUse, ComputeContext_mode, ComputeContext_observer, ComputeContext_runComputation, ComputeContext_scheduledComputationSubscription, ComputeEffect_type, MemoOrUsingEffect_args, MemoOrUsingEffect_func, MemoOrUsingEffect_value } from "../../../__internal__/symbols.js";
import { Equality, Factory, Function1, Function2, Function3, Function4, Function5, Function6, Optional, SideEffect, SideEffect1, SideEffect2, SideEffect3, SideEffect4, SideEffect5, SideEffect6, Updater } from "../../../functions.js";
import { ObservableLike, ObserverLike } from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
import { StreamLike, StreamableLike } from "../../../streaming.js";
import { DisposableLike, QueueableLike, QueueableLike_backpressureStrategy } from "../../../util.js";
type EffectsMode = "batched" | "combine-latest";
declare const Memo = 1;
declare const Await = 2;
declare const Observe = 3;
declare const Using = 4;
type MemoOrUsingEffect<T = unknown> = {
    [MemoOrUsingEffect_func]: (...args: any[]) => unknown;
    [MemoOrUsingEffect_args]: unknown[];
    [MemoOrUsingEffect_value]: T;
};
type MemoEffect = {
    readonly [ComputeEffect_type]: typeof Memo;
} & MemoOrUsingEffect;
type UsingEffect = {
    readonly [ComputeEffect_type]: typeof Using;
    [MemoOrUsingEffect_func]: (...args: any[]) => unknown;
    [MemoOrUsingEffect_args]: unknown[];
} & MemoOrUsingEffect<DisposableLike>;
type AwaitOrObserveEffect = {
    [AwaitOrObserveEffect_observable]: ObservableLike;
    [AwaitOrObserveEffect_subscription]: DisposableLike;
    [AwaitOrObserveEffect_value]: Optional;
    [AwaitOrObserveEffect_hasValue]: boolean;
};
type ObserveEffect = {
    readonly [ComputeEffect_type]: typeof Observe;
} & AwaitOrObserveEffect;
type AwaitEffect = {
    readonly [ComputeEffect_type]: typeof Await;
} & AwaitOrObserveEffect;
type ComputeEffect = AwaitEffect | MemoEffect | ObserveEffect | UsingEffect;
declare class ComputeContext {
    [ComputeContext_index]: number;
    readonly [ComputeContext_effects]: ComputeEffect[];
    readonly [ComputeContext_observer]: ObserverLike;
    private [ComputeContext_scheduledComputationSubscription];
    private readonly [ComputeContext_runComputation];
    private readonly [ComputeContext_mode];
    private readonly [ComputeContext_cleanup];
    constructor(observer: ObserverLike, runComputation: () => void, mode: EffectsMode);
    [ComputeContext_awaitOrObserve]<T>(observable: ObservableLike<T>, shouldAwait: boolean): Optional<T>;
    [ComputeContext_memoOrUse]<T>(shouldUse: false, f: (...args: any[]) => T, ...args: unknown[]): T;
    [ComputeContext_memoOrUse]<T extends DisposableLike>(shouldUse: true, f: (...args: any[]) => T, ...args: unknown[]): T;
}
export declare const assertCurrentContext: () => ComputeContext;
export declare const Observable_compute: <T>(computation: Factory<T>, { mode }?: {
    mode?: "batched" | "combine-latest" | undefined;
}) => ObservableLike<T>;
interface __Memo {
    __memo<T>(fn: Factory<T>): T;
    __memo<TA, T>(fn: Function1<TA, T>, a: TA): T;
    __memo<TA, TB, T>(fn: Function2<TA, TB, T>, a: TA, b: TB): T;
    __memo<TA, TB, TC, T>(fn: Function3<TA, TB, TC, T>, a: TA, b: TB, c: TC): T;
    __memo<TA, TB, TC, TD, T>(fn: Function4<TA, TB, TC, TD, T>, a: TA, b: TB, c: TC, d: TD): T;
    __memo<TA, TB, TC, TD, TE, T>(fn: Function5<TA, TB, TC, TD, TE, T>, a: TA, b: TB, c: TC, d: TD, e: TE): T;
    __memo<TA, TB, TC, TD, TE, TF, T>(fn: Function6<TA, TB, TC, TD, TE, TF, T>, a: TA, b: TB, c: TC, d: TD, e: TE, f: TF): T;
}
export declare const Observable_compute__memo: __Memo["__memo"];
export declare const Observable_compute__await: <T>(observable: ObservableLike<T>) => T;
export declare const Observable_compute__observe: <T>(observable: ObservableLike<T>) => Optional<T>;
interface __Do {
    __do(fn: SideEffect): void;
    __do<TA>(fn: SideEffect1<TA>, a: TA): void;
    __do<TA, TB>(fn: SideEffect2<TA, TB>, a: TA, b: TB): void;
    __do<TA, TB, TC>(fn: SideEffect3<TA, TB, TC>, a: TA, b: TB, c: TC): void;
    __do<TA, TB, TC, TD>(fn: SideEffect4<TA, TB, TC, TD>, a: TA, b: TB, c: TC, d: TD): void;
    __do<TA, TB, TC, TD, TE>(fn: SideEffect5<TA, TB, TC, TD, TE>, a: TA, b: TB, c: TC, d: TD, e: TE): void;
    __do<TA, TB, TC, TD, TE, TF>(fn: SideEffect6<TA, TB, TC, TD, TE, TF>, a: TA, b: TB, c: TC, d: TD, e: TE, f: TF): void;
}
export declare const Observable_compute__do: __Do["__do"];
interface __Using {
    __using<T extends DisposableLike>(fn: Factory<T>): T;
    __using<TA, T extends DisposableLike>(fn: Function1<TA, T>, a: TA): T;
    __using<TA, TB, T extends DisposableLike>(fn: Function2<TA, TB, T>, a: TA, b: TB): T;
    __using<TA, TB, TC, T extends DisposableLike>(fn: Function3<TA, TB, TC, T>, a: TA, b: TB, c: TC): T;
    __using<TA, TB, TC, TD, T extends DisposableLike>(fn: Function4<TA, TB, TC, TD, T>, a: TA, b: TB, c: TC, d: TD): T;
    __using<TA, TB, TC, TD, TE, T extends DisposableLike>(fn: Function5<TA, TB, TC, TD, TE, T>, a: TA, b: TB, c: TC, d: TD, e: TE): T;
    __using<TA, TB, TC, TD, TE, TF, T extends DisposableLike>(fn: Function6<TA, TB, TC, TD, TE, TF, T>, a: TA, b: TB, c: TC, d: TD, e: TE, f: TF): T;
}
export declare const Observable_compute__using: __Using["__using"];
export declare function Observable_compute__currentScheduler(): SchedulerLike;
export declare const Observable_compute__stream: <TReq, T, TStream extends StreamLike<TReq, T>>(streamable: StreamableLike<TReq, T, TStream>, { replay, backpressureStrategy, capacity, scheduler, }?: {
    readonly replay?: number | undefined;
    readonly scheduler?: SchedulerLike | undefined;
    readonly backpressureStrategy?: "overflow" | "drop-latest" | "drop-oldest" | "throw" | undefined;
    readonly capacity?: number | undefined;
}) => TStream;
export declare const Observable_compute__state: <T>(initialState: () => T, options?: {
    readonly equality?: Optional<Equality<T>>;
    readonly replay?: number | undefined;
    readonly scheduler?: SchedulerLike | undefined;
    readonly capacity?: number | undefined;
}) => StreamLike<Updater<T>, T>;
export declare const Observable_compute__bind: <F extends Function>(f: F, thiz: unknown) => F;
export declare const Observable_compute__bindMethod: <T extends { [K in TKey]: (...args: any[]) => any; }, TKey extends string | number | symbol, TFunction extends T[TKey]>(thiz: T, key: TKey) => TFunction;
export {};
