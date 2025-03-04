[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Computation](../README.md) / ConcatManyOperator

# Interface: ConcatManyOperator()\<TComputation\>

## Type Parameters

• **TComputation** *extends* [`ComputationType`](../../type-aliases/ComputationType.md)

> **ConcatManyOperator**\<`T`\>(`computations`): [`PureSynchronousComputationOf`](../../type-aliases/PureSynchronousComputationOf.md)\<`TComputation`, `T`\>

## Type Parameters

• **T**

## Parameters

### computations

readonly [`PureSynchronousComputationOf`](../../type-aliases/PureSynchronousComputationOf.md)\<`TComputation`, `T`\>[]

## Returns

[`PureSynchronousComputationOf`](../../type-aliases/PureSynchronousComputationOf.md)\<`TComputation`, `T`\>

> **ConcatManyOperator**\<`T`\>(`computations`): [`SynchronousComputationWithSideEffectsOf`](../../type-aliases/SynchronousComputationWithSideEffectsOf.md)\<`TComputation`, `T`\>

## Type Parameters

• **T**

## Parameters

### computations

readonly [`SynchronousComputationOf`](../../type-aliases/SynchronousComputationOf.md)\<`TComputation`, `T`\>[]

## Returns

[`SynchronousComputationWithSideEffectsOf`](../../type-aliases/SynchronousComputationWithSideEffectsOf.md)\<`TComputation`, `T`\>

> **ConcatManyOperator**\<`T`\>(`computations`): [`PureDeferredComputationOf`](../../type-aliases/PureDeferredComputationOf.md)\<`TComputation`, `T`\>

## Type Parameters

• **T**

## Parameters

### computations

readonly [`PureDeferredComputationOf`](../../type-aliases/PureDeferredComputationOf.md)\<`TComputation`, `T`\>[]

## Returns

[`PureDeferredComputationOf`](../../type-aliases/PureDeferredComputationOf.md)\<`TComputation`, `T`\>

> **ConcatManyOperator**\<`T`\>(`computations`): [`DeferredComputationWithSideEffectsOf`](../../type-aliases/DeferredComputationWithSideEffectsOf.md)\<`TComputation`, `T`\>

## Type Parameters

• **T**

## Parameters

### computations

readonly [`DeferredComputationOf`](../../type-aliases/DeferredComputationOf.md)\<`TComputation`, `T`\>[]

## Returns

[`DeferredComputationWithSideEffectsOf`](../../type-aliases/DeferredComputationWithSideEffectsOf.md)\<`TComputation`, `T`\>
