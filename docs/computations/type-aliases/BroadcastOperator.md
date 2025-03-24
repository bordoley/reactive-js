[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / BroadcastOperator

# Type Alias: BroadcastOperator()\<TComputationType, T\>

> **BroadcastOperator**\<`TComputationType`, `T`\>: \<`TComputationBaseOf`\>(`computation`) => `TComputationBaseOf` *extends* [`DeferredComputationOf`](DeferredComputationOf.md)\<`TComputationType`, `T`\> ? [`BroadcasterLike`](../interfaces/BroadcasterLike.md)\<`T`\> : `never`

FIXME: Consider using FlattenedHigherOrderComputationLike<TComputationIn, TInnerLike> &
ComputationOf<TComputationType, TB> instead.

## Type Parameters

• **TComputationType** *extends* [`ComputationType`](ComputationType.md)

• **T**

## Type Parameters

• **TComputationBaseOf** *extends* [`ComputationBaseOf`](ComputationBaseOf.md)\<`TComputationType`, `T`\>

## Parameters

### computation

`TComputationBaseOf`

## Returns

`TComputationBaseOf` *extends* [`DeferredComputationOf`](DeferredComputationOf.md)\<`TComputationType`, `T`\> ? [`BroadcasterLike`](../interfaces/BroadcasterLike.md)\<`T`\> : `never`
