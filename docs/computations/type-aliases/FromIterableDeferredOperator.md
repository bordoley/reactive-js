[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / FromIterableDeferredOperator

# Type Alias: FromIterableDeferredOperator()\<TComputation, T\>

> **FromIterableDeferredOperator**\<`TComputation`, `T`\>: \<`TIterable`\>(`iterable`) => `TIterable` *extends* [`PureIterableLike`](../interfaces/PureIterableLike.md) ? [`PureDeferredComputationOf`](PureDeferredComputationOf.md)\<`TComputation`, `T`\> : [`DeferredComputationWithSideEffectsOf`](DeferredComputationWithSideEffectsOf.md)\<`TComputation`, `T`\>

## Type Parameters

• **TComputation** *extends* [`ComputationType`](ComputationType.md)

• **T**

## Type Parameters

• **TIterable** *extends* [`IterableLike`](../interfaces/IterableLike.md)\<`T`\>

## Parameters

### iterable

`TIterable`

## Returns

`TIterable` *extends* [`PureIterableLike`](../interfaces/PureIterableLike.md) ? [`PureDeferredComputationOf`](PureDeferredComputationOf.md)\<`TComputation`, `T`\> : [`DeferredComputationWithSideEffectsOf`](DeferredComputationWithSideEffectsOf.md)\<`TComputation`, `T`\>
