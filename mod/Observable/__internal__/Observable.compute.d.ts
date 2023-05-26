import type * as Observable from "../../Observable.js";
import type * as Runnable from "../../Runnable.js";
import { __AwaitOrObserveEffect_hasValue, __AwaitOrObserveEffect_observable, __AwaitOrObserveEffect_subscription, __AwaitOrObserveEffect_value, __ComputeContext_awaitOrObserve, __ComputeContext_cleanup, __ComputeContext_constant, __ComputeContext_effects, __ComputeContext_index, __ComputeContext_memoOrUse, __ComputeContext_mode, __ComputeContext_observableConfig, __ComputeContext_observer, __ComputeContext_runComputation, __ComputeContext_scheduledComputationSubscription, __ComputeEffect_type, __ConstantEffect_args, __ConstantEffect_value, __MemoOrUsingEffect_args, __MemoOrUsingEffect_func, __MemoOrUsingEffect_value } from "../../__internal__/symbols.js";
import { Optional } from "../../functions.js";
import { DisposableLike, ObservableBaseLike, ObservableLike, ObservableLike_isDeferred, ObservableLike_isEnumerable, ObservableLike_isRunnable, ObserverLike } from "../../types.js";
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
        readonly [ObservableLike_isDeferred]: boolean;
        readonly [ObservableLike_isRunnable]: boolean;
    };
    readonly [__ComputeContext_observer]: ObserverLike;
    private [__ComputeContext_scheduledComputationSubscription];
    private readonly [__ComputeContext_runComputation];
    private readonly [__ComputeContext_mode];
    private readonly [__ComputeContext_cleanup];
    constructor(observer: ObserverLike, runComputation: () => void, mode: EffectsMode, config: Pick<ObservableBaseLike, typeof ObservableLike_isDeferred | typeof ObservableLike_isEnumerable | typeof ObservableLike_isRunnable>);
    [__ComputeContext_awaitOrObserve]<T>(observable: ObservableLike<T>, shouldAwait: boolean): Optional<T>;
    [__ComputeContext_constant]<T>(value: T, ...args: unknown[]): T;
    [__ComputeContext_memoOrUse]<T>(shouldUse: false, f: (...args: any[]) => T, ...args: unknown[]): T;
    [__ComputeContext_memoOrUse]<T extends DisposableLike>(shouldUse: true, f: (...args: any[]) => T, ...args: unknown[]): T;
}
export declare const assertCurrentContext: () => ComputeContext;
export declare const Observable_compute: Observable.Signature["compute"];
export declare const Runnable_compute: Runnable.Signature["compute"];
export {};
