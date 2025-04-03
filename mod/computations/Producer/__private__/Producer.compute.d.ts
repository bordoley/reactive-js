import { ProducerLike } from "../../../computations.js";
import { Optional } from "../../../functions.js";
import { ConsumerLike, DisposableLike } from "../../../utils.js";
import type * as Producer from "../../Producer.js";
declare const Memo = 1;
declare const Await = 2;
declare const Observe = 3;
declare const Using = 4;
declare const Constant = 5;
declare const AwaitOrObserveEffect_hasValue: unique symbol;
declare const AwaitOrObserveEffect_observable: unique symbol;
declare const AwaitOrObserveEffect_subscription: unique symbol;
declare const AwaitOrObserveEffect_value: unique symbol;
export declare const ProducerComputeContext_awaitOrObserve: unique symbol;
declare const ProducerComputeContext_cleanup: unique symbol;
export declare const ProducerComputeContext_constant: unique symbol;
declare const ProducerComputeContext_effects: unique symbol;
declare const ProducerComputeContext_index: unique symbol;
export declare const ProducerComputeContext_memoOrUse: unique symbol;
export declare const ProducerComputeContext_consumer: unique symbol;
declare const ProducerComputeContext_runComputation: unique symbol;
declare const ProducerComputeContext_scheduledComputationSubscription: unique symbol;
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
    [AwaitOrObserveEffect_observable]: ProducerLike;
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
declare class ProducerProducerComputeContext {
    [ProducerComputeContext_index]: number;
    readonly [ProducerComputeContext_effects]: ComputeEffect[];
    readonly [ProducerComputeContext_consumer]: ConsumerLike;
    private [ProducerComputeContext_scheduledComputationSubscription];
    private readonly [ProducerComputeContext_runComputation];
    private readonly [ProducerComputeContext_cleanup];
    constructor(consumer: ConsumerLike, runComputation: () => void);
    [ProducerComputeContext_awaitOrObserve]<T>(observable: ProducerLike<T>, shouldAwait: boolean): Optional<T>;
    [ProducerComputeContext_constant]<T>(value: T, ...args: unknown[]): T;
    [ProducerComputeContext_memoOrUse]<T>(shouldUse: false, f: (...args: any[]) => T, ...args: unknown[]): T;
    [ProducerComputeContext_memoOrUse]<T extends DisposableLike>(shouldUse: true, f: (...args: any[]) => T, ...args: unknown[]): T;
}
export declare const assertCurrentContext: () => ProducerProducerComputeContext;
declare const Producer_compute: Producer.Signature["compute"];
export default Producer_compute;
