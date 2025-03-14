[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / FromIterableDeferredOperator

# Type Alias: FromIterableDeferredOperator()\<TComputationType, T\>

> **FromIterableDeferredOperator**\<`TComputationType`, `T`\>: \<`TIterable`\>(`iterable`) => `TIterable` *extends* [`PureIterableLike`](../interfaces/PureIterableLike.md) ? [`PureDeferredComputationOf`](PureDeferredComputationOf.md)\<`TComputationType`, `T`\> : [`DeferredComputationWithSideEffectsOf`](DeferredComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\>

## Type Parameters

• **TComputationType** *extends* [`ComputationType`](ComputationType.md)

• **T**

## Type Parameters

• **TIterable** *extends* [`IterableLike`](../interfaces/IterableLike.md)\<`T`\>

## Parameters

### iterable

`TIterable`

## Returns

`TIterable` *extends* [`PureIterableLike`](../interfaces/PureIterableLike.md) ? [`PureDeferredComputationOf`](PureDeferredComputationOf.md)\<`TComputationType`, `T`\> : [`DeferredComputationWithSideEffectsOf`](DeferredComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\>
