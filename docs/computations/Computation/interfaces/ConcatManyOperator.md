[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Computation](../README.md) / ConcatManyOperator

# Interface: ConcatManyOperator()\<TComputationType\>

## Type Parameters

• **TComputationType** *extends* [`ComputationType`](../../type-aliases/ComputationType.md)

> **ConcatManyOperator**\<`T`\>(`computations`): [`PureSynchronousComputationOf`](../../type-aliases/PureSynchronousComputationOf.md)\<`TComputationType`, `T`\>

## Type Parameters

• **T**

## Parameters

### computations

readonly [`PureSynchronousComputationOf`](../../type-aliases/PureSynchronousComputationOf.md)\<`TComputationType`, `T`\>[]

## Returns

[`PureSynchronousComputationOf`](../../type-aliases/PureSynchronousComputationOf.md)\<`TComputationType`, `T`\>

> **ConcatManyOperator**\<`T`\>(`computations`): [`SynchronousComputationWithSideEffectsOf`](../../type-aliases/SynchronousComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\>

## Type Parameters

• **T**

## Parameters

### computations

readonly [`SynchronousComputationOf`](../../type-aliases/SynchronousComputationOf.md)\<`TComputationType`, `T`\>[]

## Returns

[`SynchronousComputationWithSideEffectsOf`](../../type-aliases/SynchronousComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\>

> **ConcatManyOperator**\<`T`\>(`computations`): [`PureDeferredComputationOf`](../../type-aliases/PureDeferredComputationOf.md)\<`TComputationType`, `T`\>

## Type Parameters

• **T**

## Parameters

### computations

readonly [`PureDeferredComputationOf`](../../type-aliases/PureDeferredComputationOf.md)\<`TComputationType`, `T`\>[]

## Returns

[`PureDeferredComputationOf`](../../type-aliases/PureDeferredComputationOf.md)\<`TComputationType`, `T`\>

> **ConcatManyOperator**\<`T`\>(`computations`): [`DeferredComputationWithSideEffectsOf`](../../type-aliases/DeferredComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\>

## Type Parameters

• **T**

## Parameters

### computations

readonly [`DeferredComputationOf`](../../type-aliases/DeferredComputationOf.md)\<`TComputationType`, `T`\>[]

## Returns

[`DeferredComputationWithSideEffectsOf`](../../type-aliases/DeferredComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\>
