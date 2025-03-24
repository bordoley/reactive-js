[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / HigherOrderInnerComputationOf

# Type Alias: HigherOrderInnerComputationOf\<TComputationType, THigherOrderInnerComputation, T\>

> **HigherOrderInnerComputationOf**\<`TComputationType`, `THigherOrderInnerComputation`, `T`\>: `THigherOrderInnerComputation` *extends* [`PureSynchronousComputationLike`](../interfaces/PureSynchronousComputationLike.md) ? [`PureSynchronousComputationOf`](PureSynchronousComputationOf.md)\<`TComputationType`, `T`\> : `THigherOrderInnerComputation` *extends* [`SynchronousComputationWithSideEffectsLike`](../interfaces/SynchronousComputationWithSideEffectsLike.md) ? [`SynchronousComputationOf`](SynchronousComputationOf.md)\<`TComputationType`, `T`\> : `THigherOrderInnerComputation` *extends* [`PureDeferredComputationLike`](../interfaces/PureDeferredComputationLike.md) ? [`PureDeferredComputationOf`](PureDeferredComputationOf.md)\<`TComputationType`, `T`\> : `THigherOrderInnerComputation` *extends* [`DeferredComputationWithSideEffectsLike`](../interfaces/DeferredComputationWithSideEffectsLike.md) ? [`DeferredComputationWithSideEffectsOf`](DeferredComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\> : `never`

## Type Parameters

• **TComputationType** *extends* [`ComputationType`](ComputationType.md)

• **THigherOrderInnerComputation** *extends* [`HigherOrderInnerComputationLike`](HigherOrderInnerComputationLike.md)

• **T**
