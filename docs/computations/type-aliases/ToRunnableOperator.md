[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / ToRunnableOperator

# Type Alias: ToRunnableOperator()\<TComputationType, T\>

> **ToRunnableOperator**\<`TComputationType`, `T`\>: \<`TComputationBaseOf`\>(`computation`) => `TComputationBaseOf` *extends* [`PureSynchronousComputationOf`](PureSynchronousComputationOf.md)\<`TComputationType`, `T`\> ? [`PureRunnableLike`](../interfaces/PureRunnableLike.md)\<`T`\> : `TComputationBaseOf` *extends* [`SynchronousComputationWithSideEffectsOf`](SynchronousComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\> ? [`RunnableWithSideEffectsLike`](../interfaces/RunnableWithSideEffectsLike.md)\<`T`\> : `never`

## Type Parameters

• **TComputationType** *extends* [`ComputationType`](ComputationType.md)

• **T**

## Type Parameters

• **TComputationBaseOf** *extends* [`ComputationBaseOf`](ComputationBaseOf.md)\<`TComputationType`, `T`\>

## Parameters

### computation

`TComputationBaseOf`

## Returns

`TComputationBaseOf` *extends* [`PureSynchronousComputationOf`](PureSynchronousComputationOf.md)\<`TComputationType`, `T`\> ? [`PureRunnableLike`](../interfaces/PureRunnableLike.md)\<`T`\> : `TComputationBaseOf` *extends* [`SynchronousComputationWithSideEffectsOf`](SynchronousComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\> ? [`RunnableWithSideEffectsLike`](../interfaces/RunnableWithSideEffectsLike.md)\<`T`\> : `never`
