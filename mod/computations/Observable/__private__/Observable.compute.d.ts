import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, ObservableLike } from "../../../computations.js";
import { Optional } from "../../../functions.js";
import { DisposableLike, ObserverLike } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import type * as SynchronousObservable from "../../SynchronousObservable.js";
export declare const BatchedComputeMode = "batched";
export declare const CombineLatestComputeMode = "combine-latest";
type ComputeMode = "batched" | "combine-latest";
declare const Memo = 1;
declare const Await = 2;
declare const Observe = 3;
declare const Using = 4;
declare const Constant = 5;
declare const AwaitOrObserveEffect_hasValue: unique symbol;
declare const AwaitOrObserveEffect_observable: unique symbol;
declare const AwaitOrObserveEffect_subscription: unique symbol;
declare const AwaitOrObserveEffect_value: unique symbol;
export declare const ObservableComputeContext_awaitOrObserve: unique symbol;
declare const ObservableComputeContext_cleanup: unique symbol;
export declare const ObservableComputeContext_constant: unique symbol;
declare const ObservableComputeContext_effects: unique symbol;
declare const ObservableComputeContext_index: unique symbol;
export declare const ObservableComputeContext_memoOrUse: unique symbol;
declare const ObservableComputeContext_mode: unique symbol;
export declare const ObservableComputeContext_observableConfig: unique symbol;
export declare const ObservableComputeContext_observer: unique symbol;
declare const ObservableComputeContext_runComputation: unique symbol;
declare const ObservableComputeContext_scheduledComputationSubscription: unique symbol;
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
declare class ObservableComputeContext {
    [ObservableComputeContext_index]: number;
    readonly [ObservableComputeContext_effects]: ComputeEffect[];
    readonly [ObservableComputeContext_observableConfig]: {
        readonly [ComputationLike_isDeferred]?: boolean;
        readonly [ComputationLike_isSynchronous]?: boolean;
    };
    readonly [ObservableComputeContext_observer]: ObserverLike;
    private [ObservableComputeContext_scheduledComputationSubscription];
    private readonly [ObservableComputeContext_runComputation];
    private readonly [ObservableComputeContext_mode];
    private readonly [ObservableComputeContext_cleanup];
    constructor(observer: ObserverLike, runComputation: () => void, mode: ComputeMode, config: Pick<ObservableLike, typeof ComputationLike_isPure | typeof ComputationLike_isSynchronous>);
    [ObservableComputeContext_awaitOrObserve]<T>(observable: ObservableLike<T>, shouldAwait: boolean): Optional<T>;
    [ObservableComputeContext_constant]<T>(value: T, ...args: unknown[]): T;
    [ObservableComputeContext_memoOrUse]<T>(shouldUse: false, f: (...args: any[]) => T, ...args: unknown[]): T;
    [ObservableComputeContext_memoOrUse]<T extends DisposableLike>(shouldUse: true, f: (...args: any[]) => T, ...args: unknown[]): T;
}
export declare const assertCurrentContext: () => ObservableComputeContext;
export declare const Observable_computeDeferred: Observable.Signature["compute"];
export declare const Observable_computeSynchronous: SynchronousObservable.Signature["compute"];
export {};
