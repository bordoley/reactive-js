import { Factory, Optional, Equality, Updater } from "../../../functions.js";
import { ObservableLike, ObserverLike } from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
import { StreamLike, StreamableLike } from "../../../streaming.js";
import { DisposableLike } from "../../../util.js";
type EffectsMode = "batched" | "combine-latest";
declare const Memo = 1;
declare const Await = 2;
declare const Observe = 3;
declare const Using = 4;
declare const AsyncEffect_type: unique symbol;
declare const MemoOrUsingEffect_func: unique symbol;
declare const MemoOrUsingEffect_args: unique symbol;
declare const MemoOrUsingEffect_value: unique symbol;
type MemoOrUsingEffect<T = unknown> = {
    [MemoOrUsingEffect_func]: (...args: any[]) => unknown;
    [MemoOrUsingEffect_args]: unknown[];
    [MemoOrUsingEffect_value]: T;
};
type MemoEffect = {
    readonly [AsyncEffect_type]: typeof Memo;
} & MemoOrUsingEffect;
type UsingEffect = {
    readonly [AsyncEffect_type]: typeof Using;
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
    readonly [AsyncEffect_type]: typeof Observe;
} & AwaitOrObserveEffect;
type AwaitEffect = {
    readonly [AsyncEffect_type]: typeof Await;
} & AwaitOrObserveEffect;
type AsyncEffect = AwaitEffect | MemoEffect | ObserveEffect | UsingEffect;
declare const AsyncContext_index: unique symbol;
declare const AsyncContext_cleanup: unique symbol;
declare const AsyncContext_effects: unique symbol;
declare const AsyncContext_mode: unique symbol;
declare const AsyncContext_observer: unique symbol;
declare const AsyncContext_runComputation: unique symbol;
declare const AsyncContext_scheduledComputationSubscription: unique symbol;
declare const AsyncContext_awaitOrObserve: unique symbol;
declare const AsyncContext_memoOrUse: unique symbol;
declare class AsyncContext {
    [AsyncContext_index]: number;
    readonly [AsyncContext_effects]: AsyncEffect[];
    readonly [AsyncContext_observer]: ObserverLike;
    private [AsyncContext_scheduledComputationSubscription];
    private readonly [AsyncContext_runComputation];
    private readonly [AsyncContext_mode];
    private readonly [AsyncContext_cleanup];
    constructor(observer: ObserverLike, runComputation: () => void, mode: EffectsMode);
    [AsyncContext_awaitOrObserve]<T>(observable: ObservableLike<T>, shouldAwait: boolean): Optional<T>;
    [AsyncContext_memoOrUse]<T>(shouldUse: false, f: (...args: any[]) => T, ...args: unknown[]): T;
    [AsyncContext_memoOrUse]<T extends DisposableLike>(shouldUse: true, f: (...args: any[]) => T, ...args: unknown[]): T;
}
declare const assertCurrentContext: () => AsyncContext;
declare const Observable_async: <T>(computation: Factory<T>, { mode }?: {
    mode?: "batched" | "combine-latest" | undefined;
}) => ObservableLike<T>;
declare const Observable_async__memo: <T>(f: (...args: any[]) => T, ...args: unknown[]) => T;
declare const Observable_async__await: <T>(observable: ObservableLike<T>) => T;
declare const Observable_async__observe: <T>(observable: ObservableLike<T>) => Optional<T>;
declare const Observable_async__do: (f: (...args: any[]) => void, ...args: unknown[]) => void;
declare const Observable_async__using: <T extends DisposableLike>(f: (...args: any[]) => T, ...args: unknown[]) => T;
declare function Observable_async__currentScheduler(): SchedulerLike;
declare const Observable_async__stream: <TReq, T, TStream extends StreamLike<TReq, T>>(streamable: StreamableLike<TReq, T, TStream>, { replay, scheduler, }?: {
    readonly replay?: number | undefined;
    readonly scheduler?: SchedulerLike | undefined;
}) => TStream;
declare const Observable_async__state: <T>(initialState: () => T, options?: {
    readonly equality?: Optional<Equality<T>>;
}) => StreamLike<Updater<T>, T>;
export { AsyncContext_awaitOrObserve, AsyncContext_memoOrUse, AsyncContext_observer, Observable_async, Observable_async__await, Observable_async__currentScheduler, Observable_async__do, Observable_async__memo, Observable_async__observe, Observable_async__state, Observable_async__stream, Observable_async__using, assertCurrentContext };
