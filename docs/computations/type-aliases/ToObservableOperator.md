[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / ToObservableOperator

# Type Alias: ToObservableOperator()\<TComputationType, T\>

> **ToObservableOperator**\<`TComputationType`, `T`\>: \<`TComputation`\>(`computation`) => `TComputation` *extends* [`PureSynchronousComputationOf`](PureSynchronousComputationOf.md)\<`TComputationType`, `T`\> ? [`PureSynchronousObservableLike`](../interfaces/PureSynchronousObservableLike.md)\<`T`\> : `TComputation` *extends* [`SynchronousComputationWithSideEffectsOf`](SynchronousComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\> ? [`SynchronousObservableWithSideEffectsLike`](../interfaces/SynchronousObservableWithSideEffectsLike.md)\<`T`\> : `TComputation` *extends* [`PureDeferredComputationOf`](PureDeferredComputationOf.md)\<`TComputationType`, `T`\> ? [`PureDeferredObservableLike`](../interfaces/PureDeferredObservableLike.md)\<`T`\> : `TComputation` *extends* [`DeferredComputationWithSideEffectsOf`](DeferredComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\> ? [`DeferredObservableWithSideEffectsLike`](../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\> : `TComputation` *extends* [`MulticastComputationOf`](MulticastComputationOf.md)\<`TComputationType`, `T`\> ? [`MulticastObservableLike`](../interfaces/MulticastObservableLike.md)\<`T`\> : `never`

## Type Parameters

• **TComputationType** *extends* [`ComputationType`](ComputationType.md)

• **T**

## Type Parameters

• **TComputation** *extends* [`ComputationBaseOf`](ComputationBaseOf.md)\<`TComputationType`, `T`\>

## Parameters

### computation

`TComputation`

## Returns

`TComputation` *extends* [`PureSynchronousComputationOf`](PureSynchronousComputationOf.md)\<`TComputationType`, `T`\> ? [`PureSynchronousObservableLike`](../interfaces/PureSynchronousObservableLike.md)\<`T`\> : `TComputation` *extends* [`SynchronousComputationWithSideEffectsOf`](SynchronousComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\> ? [`SynchronousObservableWithSideEffectsLike`](../interfaces/SynchronousObservableWithSideEffectsLike.md)\<`T`\> : `TComputation` *extends* [`PureDeferredComputationOf`](PureDeferredComputationOf.md)\<`TComputationType`, `T`\> ? [`PureDeferredObservableLike`](../interfaces/PureDeferredObservableLike.md)\<`T`\> : `TComputation` *extends* [`DeferredComputationWithSideEffectsOf`](DeferredComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\> ? [`DeferredObservableWithSideEffectsLike`](../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\> : `TComputation` *extends* [`MulticastComputationOf`](MulticastComputationOf.md)\<`TComputationType`, `T`\> ? [`MulticastObservableLike`](../interfaces/MulticastObservableLike.md)\<`T`\> : `never`
