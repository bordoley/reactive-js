import { AwaitOrObserveEffect_hasValue, AwaitOrObserveEffect_observable, AwaitOrObserveEffect_subscription, AwaitOrObserveEffect_value, ComputeContext_awaitOrObserve, ComputeContext_cleanup, ComputeContext_effects, ComputeContext_index, ComputeContext_memoOrUse, ComputeContext_mode, ComputeContext_observer, ComputeContext_runComputation, ComputeContext_scheduledComputationSubscription, ComputeEffect_type, MemoOrUsingEffect_args, MemoOrUsingEffect_func, MemoOrUsingEffect_value } from "../../../__internal__/symbols.js";
import { Equality, Factory, Optional, Updater } from "../../../functions.js";
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
export declare const Observable_compute__memo: <T>(f: (...args: any[]) => T, ...args: unknown[]) => T;
export declare const Observable_compute__await: <T>(observable: ObservableLike<T>) => T;
export declare const Observable_compute__observe: <T>(observable: ObservableLike<T>) => Optional<T>;
export declare const Observable_compute__do: (f: (...args: any[]) => void, ...args: unknown[]) => void;
export declare const Observable_compute__using: <T extends DisposableLike>(f: (...args: any[]) => T, ...args: unknown[]) => T;
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
export declare const Observable_compute__bindMethod: <T extends { [K in TKey]: Function; }, TKey extends string | number | symbol, TFunction extends T[TKey]>(thiz: T, key: TKey) => TFunction;
export {};
