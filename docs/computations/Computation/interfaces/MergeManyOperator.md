[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Computation](../README.md) / MergeManyOperator

# Interface: MergeManyOperator()\<TComputation\>

## Type Parameters

• **TComputation** *extends* [`Computation`](../../type-aliases/Computation.md)

> **MergeManyOperator**\<`T`\>(`computations`): [`PureSynchronousComputationOf`](../../type-aliases/PureSynchronousComputationOf.md)\<`TComputation`, `T`\>

## Type Parameters

• **T**

## Parameters

### computations

readonly [`PureSynchronousComputationOf`](../../type-aliases/PureSynchronousComputationOf.md)\<`TComputation`, `T`\>[]

## Returns

[`PureSynchronousComputationOf`](../../type-aliases/PureSynchronousComputationOf.md)\<`TComputation`, `T`\>

> **MergeManyOperator**\<`T`\>(`computations`): [`SynchronousComputationWithSideEffectsOf`](../../type-aliases/SynchronousComputationWithSideEffectsOf.md)\<`TComputation`, `T`\>

## Type Parameters

• **T**

## Parameters

### computations

readonly [`SynchronousComputationOf`](../../type-aliases/SynchronousComputationOf.md)\<`TComputation`, `T`\>[]

## Returns

[`SynchronousComputationWithSideEffectsOf`](../../type-aliases/SynchronousComputationWithSideEffectsOf.md)\<`TComputation`, `T`\>

> **MergeManyOperator**\<`T`\>(`computations`): [`PureDeferredComputationOf`](../../type-aliases/PureDeferredComputationOf.md)\<`TComputation`, `T`\>

## Type Parameters

• **T**

## Parameters

### computations

readonly [`PureDeferredComputationOf`](../../type-aliases/PureDeferredComputationOf.md)\<`TComputation`, `T`\>[]

## Returns

[`PureDeferredComputationOf`](../../type-aliases/PureDeferredComputationOf.md)\<`TComputation`, `T`\>

> **MergeManyOperator**\<`T`\>(`computations`): [`DeferredComputationWithSideEffectsOf`](../../type-aliases/DeferredComputationWithSideEffectsOf.md)\<`TComputation`, `T`\>

## Type Parameters

• **T**

## Parameters

### computations

readonly [`DeferredComputationOf`](../../type-aliases/DeferredComputationOf.md)\<`TComputation`, `T`\>[]

## Returns

[`DeferredComputationWithSideEffectsOf`](../../type-aliases/DeferredComputationWithSideEffectsOf.md)\<`TComputation`, `T`\>

> **MergeManyOperator**\<`T`\>(`computations`): [`ComputationBaseOf`](../../type-aliases/ComputationBaseOf.md)\<`TComputation`, `T`\>

## Type Parameters

• **T**

## Parameters

### computations

readonly [`ComputationBaseOf`](../../type-aliases/ComputationBaseOf.md)\<`TComputation`, `T`\>[]

## Returns

[`ComputationBaseOf`](../../type-aliases/ComputationBaseOf.md)\<`TComputation`, `T`\>
