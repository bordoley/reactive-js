[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / ComputationOfInnerType

# Type Alias: ComputationOfInnerType\<TComputation, TType, T\>

> **ComputationOfInnerType**\<`TComputation`, `TType`, `T`\>: `TType` *extends* [`PureSynchronousComputationLike`](../interfaces/PureSynchronousComputationLike.md) ? [`PureSynchronousComputationOf`](PureSynchronousComputationOf.md)\<`TComputation`, `T`\> : `TType` *extends* [`SynchronousComputationWithSideEffectsLike`](../interfaces/SynchronousComputationWithSideEffectsLike.md) ? [`SynchronousComputationOf`](SynchronousComputationOf.md)\<`TComputation`, `T`\> : `TType` *extends* [`PureDeferredComputationLike`](../interfaces/PureDeferredComputationLike.md) ? [`PureDeferredComputationOf`](PureDeferredComputationOf.md)\<`TComputation`, `T`\> : `TType` *extends* [`DeferredComputationWithSideEffectsLike`](../interfaces/DeferredComputationWithSideEffectsLike.md) ? [`DeferredComputationOf`](DeferredComputationOf.md)\<`TComputation`, `T`\> : `never`

## Type Parameters

• **TComputation** *extends* [`Computation`](Computation.md)

• **TType** *extends* [`DeferringHigherOrderInnerType`](DeferringHigherOrderInnerType.md)

• **T**
