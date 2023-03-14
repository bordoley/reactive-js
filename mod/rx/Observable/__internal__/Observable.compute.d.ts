import { Equality, Factory, Optional, Updater } from "../../../functions.js";
import { ObservableLike, ObserverLike } from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
import { StreamLike, StreamableLike } from "../../../streaming.js";
import { DisposableLike } from "../../../util.js";
type EffectsMode = "batched" | "combine-latest";
declare const Memo = 1;
declare const Await = 2;
declare const Observe = 3;
declare const Using = 4;
declare const ComputeEffect_type: unique symbol;
declare const MemoOrUsingEffect_func: unique symbol;
declare const MemoOrUsingEffect_args: unique symbol;
declare const MemoOrUsingEffect_value: unique symbol;
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
declare const AwaitOrObserveEffect_observable: unique symbol;
declare const AwaitOrObserveEffect_subscription: unique symbol;
declare const AwaitOrObserveEffect_value: unique symbol;
declare const AwaitOrObserveEffect_hasValue: unique symbol;
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
declare const ComputeContext_index: unique symbol;
declare const ComputeContext_cleanup: unique symbol;
declare const ComputeContext_effects: unique symbol;
declare const ComputeContext_mode: unique symbol;
export declare const ComputeContext_observer: unique symbol;
declare const ComputeContext_runComputation: unique symbol;
declare const ComputeContext_scheduledComputationSubscription: unique symbol;
export declare const ComputeContext_awaitOrObserve: unique symbol;
export declare const ComputeContext_memoOrUse: unique symbol;
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
export declare const Observable_compute__stream: <TReq, T, TStream extends StreamLike<TReq, T>>(streamable: StreamableLike<TReq, T, TStream>, { replay, scheduler, }?: {
    readonly replay?: number | undefined;
    readonly scheduler?: SchedulerLike | undefined;
}) => TStream;
export declare const Observable_compute__state: <T>(initialState: () => T, options?: {
    readonly equality?: Optional<Equality<T>>;
}) => StreamLike<Updater<T>, T>;
export {};
