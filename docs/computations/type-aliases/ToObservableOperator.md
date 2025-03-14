[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / ToObservableOperator

# Type Alias: ToObservableOperator()\<TComputationType, T\>

> **ToObservableOperator**\<`TComputationType`, `T`\>: \<`TComputationBaseOf`\>(`computation`) => `TComputationBaseOf` *extends* [`PureSynchronousComputationOf`](PureSynchronousComputationOf.md)\<`TComputationType`, `T`\> ? [`PureSynchronousObservableLike`](../interfaces/PureSynchronousObservableLike.md)\<`T`\> : `TComputationBaseOf` *extends* [`SynchronousComputationWithSideEffectsOf`](SynchronousComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\> ? [`SynchronousObservableWithSideEffectsLike`](../interfaces/SynchronousObservableWithSideEffectsLike.md)\<`T`\> : `TComputationBaseOf` *extends* [`PureDeferredComputationOf`](PureDeferredComputationOf.md)\<`TComputationType`, `T`\> ? [`PureDeferredObservableLike`](../interfaces/PureDeferredObservableLike.md)\<`T`\> : `TComputationBaseOf` *extends* [`DeferredComputationWithSideEffectsOf`](DeferredComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\> ? [`DeferredObservableWithSideEffectsLike`](../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\> : `TComputationBaseOf` *extends* [`MulticastComputationOf`](MulticastComputationOf.md)\<`TComputationType`, `T`\> ? [`MulticastObservableLike`](../interfaces/MulticastObservableLike.md)\<`T`\> : `never`

## Type Parameters

• **TComputationType** *extends* [`ComputationType`](ComputationType.md)

• **T**

## Type Parameters

• **TComputationBaseOf** *extends* [`ComputationBaseOf`](ComputationBaseOf.md)\<`TComputationType`, `T`\>

## Parameters

### computation

`TComputationBaseOf`

## Returns

`TComputationBaseOf` *extends* [`PureSynchronousComputationOf`](PureSynchronousComputationOf.md)\<`TComputationType`, `T`\> ? [`PureSynchronousObservableLike`](../interfaces/PureSynchronousObservableLike.md)\<`T`\> : `TComputationBaseOf` *extends* [`SynchronousComputationWithSideEffectsOf`](SynchronousComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\> ? [`SynchronousObservableWithSideEffectsLike`](../interfaces/SynchronousObservableWithSideEffectsLike.md)\<`T`\> : `TComputationBaseOf` *extends* [`PureDeferredComputationOf`](PureDeferredComputationOf.md)\<`TComputationType`, `T`\> ? [`PureDeferredObservableLike`](../interfaces/PureDeferredObservableLike.md)\<`T`\> : `TComputationBaseOf` *extends* [`DeferredComputationWithSideEffectsOf`](DeferredComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\> ? [`DeferredObservableWithSideEffectsLike`](../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\> : `TComputationBaseOf` *extends* [`MulticastComputationOf`](MulticastComputationOf.md)\<`TComputationType`, `T`\> ? [`MulticastObservableLike`](../interfaces/MulticastObservableLike.md)\<`T`\> : `never`
