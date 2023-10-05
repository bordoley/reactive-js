import { DeferredObservableLike, ObservableLike, ObservableLike_isDeferred, ObservableLike_isPure, ObservableLike_isRunnable, ObserverLike, RunnableWithSideEffectsLike } from "../../../concurrent.js";
import { Factory, Optional } from "../../../functions.js";
import { DisposableLike } from "../../../utils.js";
type EffectsMode = "batched" | "combine-latest";
declare const Memo = 1;
declare const Await = 2;
declare const Observe = 3;
declare const Using = 4;
declare const Constant = 5;
declare const __AwaitOrObserveEffect_hasValue: unique symbol;
declare const __AwaitOrObserveEffect_observable: unique symbol;
declare const __AwaitOrObserveEffect_subscription: unique symbol;
declare const __AwaitOrObserveEffect_value: unique symbol;
declare const __ComputeContext_awaitOrObserve: unique symbol;
declare const __ComputeContext_cleanup: unique symbol;
declare const __ComputeContext_constant: unique symbol;
declare const __ComputeContext_effects: unique symbol;
declare const __ComputeContext_index: unique symbol;
declare const __ComputeContext_memoOrUse: unique symbol;
declare const __ComputeContext_mode: unique symbol;
declare const __ComputeContext_observableConfig: unique symbol;
declare const __ComputeContext_observer: unique symbol;
declare const __ComputeContext_runComputation: unique symbol;
declare const __ComputeContext_scheduledComputationSubscription: unique symbol;
declare const __ComputeEffect_type: unique symbol;
declare const __ConstantEffect_args: unique symbol;
declare const __ConstantEffect_value: unique symbol;
declare const __MemoOrUsingEffect_args: unique symbol;
declare const __MemoOrUsingEffect_func: unique symbol;
declare const __MemoOrUsingEffect_value: unique symbol;
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
    constructor(observer: ObserverLike, runComputation: () => void, mode: EffectsMode, config: Pick<ObservableLike, typeof ObservableLike_isDeferred | typeof ObservableLike_isRunnable>);
    [__ComputeContext_awaitOrObserve]<T>(observable: ObservableLike<T>, shouldAwait: boolean): Optional<T>;
    [__ComputeContext_constant]<T>(value: T, ...args: unknown[]): T;
    [__ComputeContext_memoOrUse]<T>(shouldUse: false, f: (...args: any[]) => T, ...args: unknown[]): T;
    [__ComputeContext_memoOrUse]<T extends DisposableLike>(shouldUse: true, f: (...args: any[]) => T, ...args: unknown[]): T;
}
export declare const assertCurrentContext: () => ComputeContext;
interface ObservableComputeWithConfig {
    computeWithConfig<T>(computation: Factory<T>, config: Pick<RunnableWithSideEffectsLike, typeof ObservableLike_isDeferred | typeof ObservableLike_isPure | typeof ObservableLike_isRunnable>, options?: {
        readonly mode?: "batched" | "combine-latest";
    }): RunnableWithSideEffectsLike<T>;
    computeWithConfig<T>(computation: Factory<T>, config: Pick<DeferredObservableLike, typeof ObservableLike_isDeferred | typeof ObservableLike_isPure | typeof ObservableLike_isRunnable>, options?: {
        readonly mode?: "batched" | "combine-latest";
    }): DeferredObservableLike<T>;
}
declare const Observable_computeWithConfig: ObservableComputeWithConfig["computeWithConfig"];
export default Observable_computeWithConfig;
