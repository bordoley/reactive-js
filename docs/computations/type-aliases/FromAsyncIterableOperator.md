[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / FromAsyncIterableOperator

# Type Alias: FromAsyncIterableOperator()\<TComputationType, T\>

> **FromAsyncIterableOperator**\<`TComputationType`, `T`\>: \<`TIterable`\>(`iterable`) => `TIterable` *extends* [`PureAsyncIterableLike`](../interfaces/PureAsyncIterableLike.md)\<`T`\> ? [`PureDeferredComputationOf`](PureDeferredComputationOf.md)\<`TComputationType`, `T`\> *extends* `never` ? [`MulticastComputationOf`](MulticastComputationOf.md)\<`TComputationType`, `T`\> : [`PureDeferredComputationOf`](PureDeferredComputationOf.md)\<`TComputationType`, `T`\> : [`DeferredComputationWithSideEffectsOf`](DeferredComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\> *extends* `never` ? [`MulticastComputationOf`](MulticastComputationOf.md)\<`TComputationType`, `T`\> : [`DeferredComputationWithSideEffectsOf`](DeferredComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\>

## Type Parameters

• **TComputationType** *extends* [`ComputationType`](ComputationType.md)

• **T**

## Type Parameters

• **TIterable** *extends* [`AsyncIterableLike`](../interfaces/AsyncIterableLike.md)\<`T`\>

## Parameters

### iterable

`TIterable`

## Returns

`TIterable` *extends* [`PureAsyncIterableLike`](../interfaces/PureAsyncIterableLike.md)\<`T`\> ? [`PureDeferredComputationOf`](PureDeferredComputationOf.md)\<`TComputationType`, `T`\> *extends* `never` ? [`MulticastComputationOf`](MulticastComputationOf.md)\<`TComputationType`, `T`\> : [`PureDeferredComputationOf`](PureDeferredComputationOf.md)\<`TComputationType`, `T`\> : [`DeferredComputationWithSideEffectsOf`](DeferredComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\> *extends* `never` ? [`MulticastComputationOf`](MulticastComputationOf.md)\<`TComputationType`, `T`\> : [`DeferredComputationWithSideEffectsOf`](DeferredComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\>
