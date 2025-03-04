[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Computation](../README.md) / ConcatWithOperator

# Interface: ConcatWithOperator()\<TComputation\>

## Type Parameters

• **TComputation** *extends* [`Computation`](../../type-aliases/Computation.md)

> **ConcatWithOperator**\<`T`\>(`snd`, ...`tail`): [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<`TComputation`, `T`, `T`\>

## Type Parameters

• **T**

## Parameters

### snd

[`PureSynchronousComputationOf`](../../type-aliases/PureSynchronousComputationOf.md)\<`TComputation`, `T`\>

### tail

...readonly [`PureSynchronousComputationOf`](../../type-aliases/PureSynchronousComputationOf.md)\<`TComputation`, `T`\>[]

## Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<`TComputation`, `T`, `T`\>

> **ConcatWithOperator**\<`T`\>(`snd`, ...`tail`): [`ComputationWithSideEffectsOperator`](../../type-aliases/ComputationWithSideEffectsOperator.md)\<`TComputation`, `T`, `T`\>

## Type Parameters

• **T**

## Parameters

### snd

[`SynchronousComputationOf`](../../type-aliases/SynchronousComputationOf.md)\<`TComputation`, `T`\>

### tail

...readonly [`SynchronousComputationOf`](../../type-aliases/SynchronousComputationOf.md)\<`TComputation`, `T`\>[]

## Returns

[`ComputationWithSideEffectsOperator`](../../type-aliases/ComputationWithSideEffectsOperator.md)\<`TComputation`, `T`, `T`\>

> **ConcatWithOperator**\<`T`\>(`snd`, ...`tail`): [`DeferredComputationOperator`](../../type-aliases/DeferredComputationOperator.md)\<`TComputation`, `T`, `T`\>

## Type Parameters

• **T**

## Parameters

### snd

[`PureDeferredComputationOf`](../../type-aliases/PureDeferredComputationOf.md)\<`TComputation`, `T`\>

### tail

...readonly [`PureDeferredComputationOf`](../../type-aliases/PureDeferredComputationOf.md)\<`TComputation`, `T`\>[]

## Returns

[`DeferredComputationOperator`](../../type-aliases/DeferredComputationOperator.md)\<`TComputation`, `T`, `T`\>

> **ConcatWithOperator**\<`T`\>(`snd`, ...`tail`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`DeferredComputationOf`](../../type-aliases/DeferredComputationOf.md)\<`TComputation`, `T`\>, [`DeferredComputationWithSideEffectsOf`](../../type-aliases/DeferredComputationWithSideEffectsOf.md)\<`TComputation`, `T`\>\>

## Type Parameters

• **T**

## Parameters

### snd

[`DeferredComputationOf`](../../type-aliases/DeferredComputationOf.md)\<`TComputation`, `T`\>

### tail

...readonly [`DeferredComputationOf`](../../type-aliases/DeferredComputationOf.md)\<`TComputation`, `T`\>[]

## Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`DeferredComputationOf`](../../type-aliases/DeferredComputationOf.md)\<`TComputation`, `T`\>, [`DeferredComputationWithSideEffectsOf`](../../type-aliases/DeferredComputationWithSideEffectsOf.md)\<`TComputation`, `T`\>\>
