[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / FromAsyncIterableOperator

# Type Alias: FromAsyncIterableOperator()\<TComputation, T\>

> **FromAsyncIterableOperator**\<`TComputation`, `T`\>: \<`TIterable`\>(`iterable`) => `TIterable` *extends* [`PureAsyncIterableLike`](../interfaces/PureAsyncIterableLike.md)\<`T`\> ? [`PureDeferredComputationOf`](PureDeferredComputationOf.md)\<`TComputation`, `T`\> *extends* `never` ? [`MulticastComputationOf`](MulticastComputationOf.md)\<`TComputation`, `T`\> : [`PureDeferredComputationOf`](PureDeferredComputationOf.md)\<`TComputation`, `T`\> : [`DeferredComputationWithSideEffectsOf`](DeferredComputationWithSideEffectsOf.md)\<`TComputation`, `T`\> *extends* `never` ? [`MulticastComputationOf`](MulticastComputationOf.md)\<`TComputation`, `T`\> : [`DeferredComputationWithSideEffectsOf`](DeferredComputationWithSideEffectsOf.md)\<`TComputation`, `T`\>

## Type Parameters

• **TComputation** *extends* [`ComputationType`](ComputationType.md)

• **T**

## Type Parameters

• **TIterable** *extends* [`AsyncIterableLike`](../interfaces/AsyncIterableLike.md)\<`T`\>

## Parameters

### iterable

`TIterable`

## Returns

`TIterable` *extends* [`PureAsyncIterableLike`](../interfaces/PureAsyncIterableLike.md)\<`T`\> ? [`PureDeferredComputationOf`](PureDeferredComputationOf.md)\<`TComputation`, `T`\> *extends* `never` ? [`MulticastComputationOf`](MulticastComputationOf.md)\<`TComputation`, `T`\> : [`PureDeferredComputationOf`](PureDeferredComputationOf.md)\<`TComputation`, `T`\> : [`DeferredComputationWithSideEffectsOf`](DeferredComputationWithSideEffectsOf.md)\<`TComputation`, `T`\> *extends* `never` ? [`MulticastComputationOf`](MulticastComputationOf.md)\<`TComputation`, `T`\> : [`DeferredComputationWithSideEffectsOf`](DeferredComputationWithSideEffectsOf.md)\<`TComputation`, `T`\>
