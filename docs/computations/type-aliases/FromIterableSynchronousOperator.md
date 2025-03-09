[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / FromIterableSynchronousOperator

# Type Alias: FromIterableSynchronousOperator()\<TComputation, T\>

> **FromIterableSynchronousOperator**\<`TComputation`, `T`\>: \<`TIterable`\>(`iterable`) => `TIterable` *extends* [`PureIterableLike`](../interfaces/PureIterableLike.md) ? [`PureSynchronousComputationOf`](PureSynchronousComputationOf.md)\<`TComputation`, `T`\> : [`SynchronousComputationWithSideEffectsOf`](SynchronousComputationWithSideEffectsOf.md)\<`TComputation`, `T`\>

## Type Parameters

• **TComputation** *extends* [`ComputationType`](ComputationType.md)

• **T**

## Type Parameters

• **TIterable** *extends* [`IterableLike`](../interfaces/IterableLike.md)\<`T`\>

## Parameters

### iterable

`TIterable`

## Returns

`TIterable` *extends* [`PureIterableLike`](../interfaces/PureIterableLike.md) ? [`PureSynchronousComputationOf`](PureSynchronousComputationOf.md)\<`TComputation`, `T`\> : [`SynchronousComputationWithSideEffectsOf`](SynchronousComputationWithSideEffectsOf.md)\<`TComputation`, `T`\>
