[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / HigherOrderInnerComputationOf

# Type Alias: HigherOrderInnerComputationOf\<TComputation, THigherOrderInnerComputation, T\>

> **HigherOrderInnerComputationOf**\<`TComputation`, `THigherOrderInnerComputation`, `T`\>: `THigherOrderInnerComputation` *extends* [`PureSynchronousComputationLike`](../interfaces/PureSynchronousComputationLike.md) ? [`PureSynchronousComputationOf`](PureSynchronousComputationOf.md)\<`TComputation`, `T`\> : `THigherOrderInnerComputation` *extends* [`SynchronousComputationWithSideEffectsLike`](../interfaces/SynchronousComputationWithSideEffectsLike.md) ? [`SynchronousComputationOf`](SynchronousComputationOf.md)\<`TComputation`, `T`\> : `THigherOrderInnerComputation` *extends* [`PureDeferredComputationLike`](../interfaces/PureDeferredComputationLike.md) ? [`PureDeferredComputationOf`](PureDeferredComputationOf.md)\<`TComputation`, `T`\> : `THigherOrderInnerComputation` *extends* [`DeferredComputationWithSideEffectsLike`](../interfaces/DeferredComputationWithSideEffectsLike.md) ? [`DeferredComputationOf`](DeferredComputationOf.md)\<`TComputation`, `T`\> : `never`

## Type Parameters

• **TComputation** *extends* [`ComputationType`](ComputationType.md)

• **THigherOrderInnerComputation** *extends* [`HigherOrderInnerComputationLike`](HigherOrderInnerComputationLike.md)

• **T**
