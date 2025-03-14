[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / HigherOrderComputationOperator

# Type Alias: HigherOrderComputationOperator()\<TComputationType, TInnerLike, TA, TB\>

> **HigherOrderComputationOperator**\<`TComputationType`, `TInnerLike`, `TA`, `TB`\>: \<`TComputationIn`\>(`computation`) => `TComputationIn` *extends* [`PureSynchronousComputationOf`](PureSynchronousComputationOf.md)\<`TComputationType`, `TA`\> ? `HigherOrderPureSynchronousComputationOut`\<`TComputationType`, `TInnerLike`, `TB`\> : `TComputationIn` *extends* [`SynchronousComputationWithSideEffectsOf`](SynchronousComputationWithSideEffectsOf.md)\<`TComputationType`, `TA`\> ? `HigherOrderSynchronousComputationWithSideEffectsOut`\<`TComputationType`, `TInnerLike`, `TB`\> : `TComputationIn` *extends* [`PureDeferredComputationOf`](PureDeferredComputationOf.md)\<`TComputationType`, `TA`\> ? `HigherOrderPureDeferredComputationOut`\<`TComputationType`, `TInnerLike`, `TB`\> : `TComputationIn` *extends* [`DeferredComputationWithSideEffectsOf`](DeferredComputationWithSideEffectsOf.md)\<`TComputationType`, `TA`\> ? `HigherOrderDeferredComputationWithSideEffectsOut`\<`TComputationType`, `TInnerLike`, `TB`\> : `never`

## Type Parameters

• **TComputationType** *extends* [`ComputationType`](ComputationType.md)

• **TInnerLike** *extends* [`HigherOrderInnerComputationLike`](HigherOrderInnerComputationLike.md)

• **TA**

• **TB**

## Type Parameters

• **TComputationIn** *extends* [`ComputationBaseOf`](ComputationBaseOf.md)\<`TComputationType`, `TA`\>

## Parameters

### computation

`TComputationIn`

## Returns

`TComputationIn` *extends* [`PureSynchronousComputationOf`](PureSynchronousComputationOf.md)\<`TComputationType`, `TA`\> ? `HigherOrderPureSynchronousComputationOut`\<`TComputationType`, `TInnerLike`, `TB`\> : `TComputationIn` *extends* [`SynchronousComputationWithSideEffectsOf`](SynchronousComputationWithSideEffectsOf.md)\<`TComputationType`, `TA`\> ? `HigherOrderSynchronousComputationWithSideEffectsOut`\<`TComputationType`, `TInnerLike`, `TB`\> : `TComputationIn` *extends* [`PureDeferredComputationOf`](PureDeferredComputationOf.md)\<`TComputationType`, `TA`\> ? `HigherOrderPureDeferredComputationOut`\<`TComputationType`, `TInnerLike`, `TB`\> : `TComputationIn` *extends* [`DeferredComputationWithSideEffectsOf`](DeferredComputationWithSideEffectsOf.md)\<`TComputationType`, `TA`\> ? `HigherOrderDeferredComputationWithSideEffectsOut`\<`TComputationType`, `TInnerLike`, `TB`\> : `never`
