import { __AwaitOrObserveEffect_hasValue, __AwaitOrObserveEffect_observable, __AwaitOrObserveEffect_subscription, __AwaitOrObserveEffect_value, __ComputeContext_awaitOrObserve, __ComputeContext_cleanup, __ComputeContext_constant, __ComputeContext_effects, __ComputeContext_index, __ComputeContext_memoOrUse, __ComputeContext_mode, __ComputeContext_observableConfig, __ComputeContext_observer, __ComputeContext_runComputation, __ComputeContext_scheduledComputationSubscription, __ComputeEffect_type, __ConstantEffect_args, __ConstantEffect_value, __MemoOrUsingEffect_args, __MemoOrUsingEffect_func, __MemoOrUsingEffect_value } from "../../__internal__/symbols.js";
import { Factory, Optional } from "../../functions.js";
import { DeferredObservableLike, DisposableLike, EnumerableLike, ObservableLike, ObservableLike_isEnumerable, ObservableLike_isRunnable, ObserverLike, RunnableLike } from "../../types.js";
type EffectsMode = "batched" | "combine-latest";
declare const Memo = 1;
declare const Await = 2;
declare const Observe = 3;
declare const Using = 4;
declare const Constant = 5;
type MemoOrUsingEffect<T = unknown> = {
    [__MemoOrUsingEffect_func]: (...args: any[]) => unknown;
    [__MemoOrUsingEffect_args]: unknown[];
    [__MemoOrUsingEffect_value]: T;
};
type MemoEffect = {
    readonly [__ComputeEffect_type]: typeof Memo;
} & MemoOrUsingEffect;
type UsingEffect = {
    readonly [__ComputeEffect_type]: typeof Using;
    [__MemoOrUsingEffect_func]: (...args: any[]) => unknown;
    [__MemoOrUsingEffect_args]: unknown[];
} & MemoOrUsingEffect<DisposableLike>;
type AwaitOrObserveEffect = {
    [__AwaitOrObserveEffect_observable]: ObservableLike;
    [__AwaitOrObserveEffect_subscription]: DisposableLike;
    [__AwaitOrObserveEffect_value]: Optional;
    [__AwaitOrObserveEffect_hasValue]: boolean;
};
type ObserveEffect = {
    readonly [__ComputeEffect_type]: typeof Observe;
} & AwaitOrObserveEffect;
type AwaitEffect = {
    readonly [__ComputeEffect_type]: typeof Await;
} & AwaitOrObserveEffect;
type ConstantEffect<T = unknown> = {
    readonly [__ComputeEffect_type]: typeof Constant;
    [__ConstantEffect_value]: T;
    [__ConstantEffect_args]: unknown[];
};
type ComputeEffect = AwaitEffect | ConstantEffect | MemoEffect | ObserveEffect | UsingEffect;
declare class ComputeContext {
    [__ComputeContext_index]: number;
    readonly [__ComputeContext_effects]: ComputeEffect[];
    readonly [__ComputeContext_observableConfig]: {
        readonly [ObservableLike_isEnumerable]: boolean;
        readonly [ObservableLike_isRunnable]: boolean;
    };
    readonly [__ComputeContext_observer]: ObserverLike;
    private [__ComputeContext_scheduledComputationSubscription];
    private readonly [__ComputeContext_runComputation];
    private readonly [__ComputeContext_mode];
    private readonly [__ComputeContext_cleanup];
    constructor(observer: ObserverLike, runComputation: () => void, mode: EffectsMode, config: {
        readonly [ObservableLike_isEnumerable]: boolean;
        readonly [ObservableLike_isRunnable]: boolean;
    });
    [__ComputeContext_awaitOrObserve]<T>(observable: ObservableLike<T>, shouldAwait: boolean): Optional<T>;
    [__ComputeContext_constant]<T>(value: T, ...args: unknown[]): T;
    [__ComputeContext_memoOrUse]<T>(shouldUse: false, f: (...args: any[]) => T, ...args: unknown[]): T;
    [__ComputeContext_memoOrUse]<T extends DisposableLike>(shouldUse: true, f: (...args: any[]) => T, ...args: unknown[]): T;
}
export declare const assertCurrentContext: () => ComputeContext;
export declare const Observable_compute: <T>(computation: Factory<T>, options?: {
    mode?: "batched" | "combine-latest";
}) => DeferredObservableLike<T>;
export declare const Runnable_compute: <T>(computation: Factory<T>, options?: {
    mode?: "batched" | "combine-latest";
}) => RunnableLike<T>;
export declare const Enumerable_compute: <T>(computation: Factory<T>, options?: {
    mode?: "batched" | "combine-latest";
}) => EnumerableLike<T>;
export {};
