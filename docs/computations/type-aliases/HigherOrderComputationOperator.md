[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / HigherOrderComputationOperator

# Type Alias: HigherOrderComputationOperator()\<TComputation, TInnerType, TA, TB\>

> **HigherOrderComputationOperator**\<`TComputation`, `TInnerType`, `TA`, `TB`\>: \<`TComputationIn`\>(`computation`) => `TComputationIn` *extends* [`PureSynchronousComputationOf`](PureSynchronousComputationOf.md)\<`TComputation`, `TA`\> ? `HigherOrderPureSynchronousComputationOut`\<`TComputation`, `TInnerType`, `TB`\> : `TComputationIn` *extends* [`SynchronousComputationWithSideEffectsOf`](SynchronousComputationWithSideEffectsOf.md)\<`TComputation`, `TA`\> ? `HigherOrderSynchronousComputationWithSideEffectsOut`\<`TComputation`, `TInnerType`, `TB`\> : `TComputationIn` *extends* [`PureDeferredComputationOf`](PureDeferredComputationOf.md)\<`TComputation`, `TA`\> ? `HigherOrderPureDeferredComputationOut`\<`TComputation`, `TInnerType`, `TB`\> : `TComputationIn` *extends* [`DeferredComputationWithSideEffectsOf`](DeferredComputationWithSideEffectsOf.md)\<`TComputation`, `TA`\> ? `HigherOrderDeferredComputationWithSideEffectsOut`\<`TComputation`, `TInnerType`, `TB`\> : `never`

## Type Parameters

• **TComputation** *extends* [`ComputationType`](ComputationType.md)

• **TInnerType** *extends* [`HigherOrderInnerComputationLike`](HigherOrderInnerComputationLike.md)

• **TA**

• **TB**

## Type Parameters

• **TComputationIn** *extends* [`ComputationBaseOf`](ComputationBaseOf.md)\<`TComputation`, `TA`\>

## Parameters

### computation

`TComputationIn`

## Returns

`TComputationIn` *extends* [`PureSynchronousComputationOf`](PureSynchronousComputationOf.md)\<`TComputation`, `TA`\> ? `HigherOrderPureSynchronousComputationOut`\<`TComputation`, `TInnerType`, `TB`\> : `TComputationIn` *extends* [`SynchronousComputationWithSideEffectsOf`](SynchronousComputationWithSideEffectsOf.md)\<`TComputation`, `TA`\> ? `HigherOrderSynchronousComputationWithSideEffectsOut`\<`TComputation`, `TInnerType`, `TB`\> : `TComputationIn` *extends* [`PureDeferredComputationOf`](PureDeferredComputationOf.md)\<`TComputation`, `TA`\> ? `HigherOrderPureDeferredComputationOut`\<`TComputation`, `TInnerType`, `TB`\> : `TComputationIn` *extends* [`DeferredComputationWithSideEffectsOf`](DeferredComputationWithSideEffectsOf.md)\<`TComputation`, `TA`\> ? `HigherOrderDeferredComputationWithSideEffectsOut`\<`TComputation`, `TInnerType`, `TB`\> : `never`
