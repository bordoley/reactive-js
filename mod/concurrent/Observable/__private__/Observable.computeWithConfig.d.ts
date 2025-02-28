import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous } from "../../../computations.js";
import { DeferredObservableWithSideEffectsLike, ObservableLike, ObserverLike, RunnableWithSideEffectsLike } from "../../../concurrent.js";
import { Factory, Optional } from "../../../functions.js";
import { DisposableLike } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
export declare const BatchedComputeMode = "batched";
export declare const CombineLatestComputeMode = "combine-latest";
declare const Memo = 1;
declare const Await = 2;
declare const Observe = 3;
declare const Using = 4;
declare const Constant = 5;
declare const AwaitOrObserveEffect_hasValue: unique symbol;
declare const AwaitOrObserveEffect_observable: unique symbol;
declare const AwaitOrObserveEffect_subscription: unique symbol;
declare const AwaitOrObserveEffect_value: unique symbol;
export declare const ComputeContext_awaitOrObserve: unique symbol;
declare const ComputeContext_cleanup: unique symbol;
export declare const ComputeContext_constant: unique symbol;
declare const ComputeContext_effects: unique symbol;
declare const ComputeContext_index: unique symbol;
export declare const ComputeContext_memoOrUse: unique symbol;
declare const ComputeContext_mode: unique symbol;
export declare const ComputeContext_observableConfig: unique symbol;
export declare const ComputeContext_observer: unique symbol;
declare const ComputeContext_runComputation: unique symbol;
declare const ComputeContext_scheduledComputationSubscription: unique symbol;
declare const ComputeEffect_type: unique symbol;
declare const ConstantEffect_args: unique symbol;
declare const ConstantEffect_value: unique symbol;
declare const MemoOrUsingEffect_args: unique symbol;
declare const MemoOrUsingEffect_func: unique symbol;
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
type ConstantEffect<T = unknown> = {
    readonly [ComputeEffect_type]: typeof Constant;
    [ConstantEffect_value]: T;
    [ConstantEffect_args]: unknown[];
};
type ComputeEffect = AwaitEffect | ConstantEffect | MemoEffect | ObserveEffect | UsingEffect;
declare class ComputeContext {
    [ComputeContext_index]: number;
    readonly [ComputeContext_effects]: ComputeEffect[];
    readonly [ComputeContext_observableConfig]: {
        readonly [ComputationLike_isDeferred]?: boolean;
        readonly [ComputationLike_isSynchronous]?: boolean;
    };
    readonly [ComputeContext_observer]: ObserverLike;
    private [ComputeContext_scheduledComputationSubscription];
    private readonly [ComputeContext_runComputation];
    private readonly [ComputeContext_mode];
    private readonly [ComputeContext_cleanup];
    constructor(observer: ObserverLike, runComputation: () => void, mode: Observable.ComputeMode, config: Pick<ObservableLike, typeof ComputationLike_isDeferred | typeof ComputationLike_isSynchronous>);
    [ComputeContext_awaitOrObserve]<T>(observable: ObservableLike<T>, shouldAwait: boolean): Optional<T>;
    [ComputeContext_constant]<T>(value: T, ...args: unknown[]): T;
    [ComputeContext_memoOrUse]<T>(shouldUse: false, f: (...args: any[]) => T, ...args: unknown[]): T;
    [ComputeContext_memoOrUse]<T extends DisposableLike>(shouldUse: true, f: (...args: any[]) => T, ...args: unknown[]): T;
}
export declare const assertCurrentContext: () => ComputeContext;
interface ObservableComputeWithConfig {
    computeWithConfig<T>(computation: Factory<T>, config: Pick<RunnableWithSideEffectsLike, typeof ComputationLike_isDeferred | typeof ComputationLike_isPure | typeof ComputationLike_isSynchronous>, options?: {
        readonly mode?: Observable.ComputeMode;
    }): RunnableWithSideEffectsLike<T>;
    computeWithConfig<T>(computation: Factory<T>, config: Pick<DeferredObservableWithSideEffectsLike, typeof ComputationLike_isDeferred | typeof ComputationLike_isPure | typeof ComputationLike_isSynchronous>, options?: {
        readonly mode?: Observable.ComputeMode;
    }): DeferredObservableWithSideEffectsLike<T>;
}
declare const Observable_computeWithConfig: ObservableComputeWithConfig["computeWithConfig"];
export default Observable_computeWithConfig;
