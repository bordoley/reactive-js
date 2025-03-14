[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / FromIterableOperator

# Type Alias: FromIterableOperator()\<TComputationType, T\>

> **FromIterableOperator**\<`TComputationType`, `T`\>: \<`TIterable`\>(`iterable`) => `TIterable` *extends* [`PureIterableLike`](../interfaces/PureIterableLike.md) ? [`PureSynchronousComputationOf`](PureSynchronousComputationOf.md)\<`TComputationType`, `T`\> *extends* [`ComputationBaseOf`](ComputationBaseOf.md)\<`TComputationType`, `T`\> ? [`PureSynchronousComputationOf`](PureSynchronousComputationOf.md)\<`TComputationType`, `T`\> : [`PureDeferredComputationOf`](PureDeferredComputationOf.md)\<`TComputationType`, `T`\> *extends* [`ComputationBaseOf`](ComputationBaseOf.md)\<`TComputationType`, `T`\> ? [`PureDeferredComputationOf`](PureDeferredComputationOf.md)\<`TComputationType`, `T`\> : [`MulticastComputationOf`](MulticastComputationOf.md)\<`TComputationType`, `T`\> & [`DisposableLike`](../../utils/interfaces/DisposableLike.md) : `TIterable` *extends* [`IterableWithSideEffectsLike`](../interfaces/IterableWithSideEffectsLike.md) ? [`SynchronousComputationWithSideEffectsOf`](SynchronousComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\> *extends* [`ComputationBaseOf`](ComputationBaseOf.md)\<`TComputationType`, `T`\> ? [`SynchronousComputationWithSideEffectsOf`](SynchronousComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\> : [`DeferredComputationWithSideEffectsOf`](DeferredComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\> *extends* [`ComputationBaseOf`](ComputationBaseOf.md)\<`TComputationType`, `T`\> ? [`DeferredComputationWithSideEffectsOf`](DeferredComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\> : [`MulticastComputationOf`](MulticastComputationOf.md)\<`TComputationType`, `T`\> & [`DisposableLike`](../../utils/interfaces/DisposableLike.md) : [`ComputationBaseOf`](ComputationBaseOf.md)\<`TComputationType`, `T`\>

## Type Parameters

• **TComputationType** *extends* [`ComputationType`](ComputationType.md)

• **T**

## Type Parameters

• **TIterable** *extends* [`IterableLike`](../interfaces/IterableLike.md)\<`T`\>

## Parameters

### iterable

`TIterable`

## Returns

`TIterable` *extends* [`PureIterableLike`](../interfaces/PureIterableLike.md) ? [`PureSynchronousComputationOf`](PureSynchronousComputationOf.md)\<`TComputationType`, `T`\> *extends* [`ComputationBaseOf`](ComputationBaseOf.md)\<`TComputationType`, `T`\> ? [`PureSynchronousComputationOf`](PureSynchronousComputationOf.md)\<`TComputationType`, `T`\> : [`PureDeferredComputationOf`](PureDeferredComputationOf.md)\<`TComputationType`, `T`\> *extends* [`ComputationBaseOf`](ComputationBaseOf.md)\<`TComputationType`, `T`\> ? [`PureDeferredComputationOf`](PureDeferredComputationOf.md)\<`TComputationType`, `T`\> : [`MulticastComputationOf`](MulticastComputationOf.md)\<`TComputationType`, `T`\> & [`DisposableLike`](../../utils/interfaces/DisposableLike.md) : `TIterable` *extends* [`IterableWithSideEffectsLike`](../interfaces/IterableWithSideEffectsLike.md) ? [`SynchronousComputationWithSideEffectsOf`](SynchronousComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\> *extends* [`ComputationBaseOf`](ComputationBaseOf.md)\<`TComputationType`, `T`\> ? [`SynchronousComputationWithSideEffectsOf`](SynchronousComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\> : [`DeferredComputationWithSideEffectsOf`](DeferredComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\> *extends* [`ComputationBaseOf`](ComputationBaseOf.md)\<`TComputationType`, `T`\> ? [`DeferredComputationWithSideEffectsOf`](DeferredComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\> : [`MulticastComputationOf`](MulticastComputationOf.md)\<`TComputationType`, `T`\> & [`DisposableLike`](../../utils/interfaces/DisposableLike.md) : [`ComputationBaseOf`](ComputationBaseOf.md)\<`TComputationType`, `T`\>
