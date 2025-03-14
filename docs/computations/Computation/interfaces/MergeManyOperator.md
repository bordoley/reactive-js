[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Computation](../README.md) / MergeManyOperator

# Interface: MergeManyOperator()\<TComputationType\>

## Type Parameters

• **TComputationType** *extends* [`ComputationType`](../../type-aliases/ComputationType.md)

> **MergeManyOperator**\<`T`\>(`computations`): [`PureSynchronousComputationOf`](../../type-aliases/PureSynchronousComputationOf.md)\<`TComputationType`, `T`\>

## Type Parameters

• **T**

## Parameters

### computations

readonly [`PureSynchronousComputationOf`](../../type-aliases/PureSynchronousComputationOf.md)\<`TComputationType`, `T`\>[]

## Returns

[`PureSynchronousComputationOf`](../../type-aliases/PureSynchronousComputationOf.md)\<`TComputationType`, `T`\>

> **MergeManyOperator**\<`T`\>(`computations`): [`SynchronousComputationWithSideEffectsOf`](../../type-aliases/SynchronousComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\>

## Type Parameters

• **T**

## Parameters

### computations

readonly [`SynchronousComputationOf`](../../type-aliases/SynchronousComputationOf.md)\<`TComputationType`, `T`\>[]

## Returns

[`SynchronousComputationWithSideEffectsOf`](../../type-aliases/SynchronousComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\>

> **MergeManyOperator**\<`T`\>(`computations`): [`PureDeferredComputationOf`](../../type-aliases/PureDeferredComputationOf.md)\<`TComputationType`, `T`\>

## Type Parameters

• **T**

## Parameters

### computations

readonly [`PureDeferredComputationOf`](../../type-aliases/PureDeferredComputationOf.md)\<`TComputationType`, `T`\>[]

## Returns

[`PureDeferredComputationOf`](../../type-aliases/PureDeferredComputationOf.md)\<`TComputationType`, `T`\>

> **MergeManyOperator**\<`T`\>(`computations`): [`DeferredComputationWithSideEffectsOf`](../../type-aliases/DeferredComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\>

## Type Parameters

• **T**

## Parameters

### computations

readonly [`DeferredComputationOf`](../../type-aliases/DeferredComputationOf.md)\<`TComputationType`, `T`\>[]

## Returns

[`DeferredComputationWithSideEffectsOf`](../../type-aliases/DeferredComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\>

> **MergeManyOperator**\<`T`\>(`computations`): [`ComputationBaseOf`](../../type-aliases/ComputationBaseOf.md)\<`TComputationType`, `T`\>

## Type Parameters

• **T**

## Parameters

### computations

readonly [`ComputationBaseOf`](../../type-aliases/ComputationBaseOf.md)\<`TComputationType`, `T`\>[]

## Returns

[`ComputationBaseOf`](../../type-aliases/ComputationBaseOf.md)\<`TComputationType`, `T`\>
