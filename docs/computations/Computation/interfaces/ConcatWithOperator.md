[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Computation](../README.md) / ConcatWithOperator

# Interface: ConcatWithOperator()\<TComputation\>

## Type Parameters

• **TComputation** *extends* [`ComputationType`](../../type-aliases/ComputationType.md)

> **ConcatWithOperator**\<`T`\>(`snd`, ...`tail`): [`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<`TComputation`, `T`, `T`\>

## Type Parameters

• **T**

## Parameters

### snd

[`PureSynchronousComputationOf`](../../type-aliases/PureSynchronousComputationOf.md)\<`TComputation`, `T`\>

### tail

...readonly [`PureSynchronousComputationOf`](../../type-aliases/PureSynchronousComputationOf.md)\<`TComputation`, `T`\>[]

## Returns

[`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<`TComputation`, `T`, `T`\>

> **ConcatWithOperator**\<`T`\>(`snd`, ...`tail`): [`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<`TComputation`, `T`, `T`\>

## Type Parameters

• **T**

## Parameters

### snd

[`SynchronousComputationOf`](../../type-aliases/SynchronousComputationOf.md)\<`TComputation`, `T`\>

### tail

...readonly [`SynchronousComputationOf`](../../type-aliases/SynchronousComputationOf.md)\<`TComputation`, `T`\>[]

## Returns

[`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<`TComputation`, `T`, `T`\>

> **ConcatWithOperator**\<`T`\>(`snd`, ...`tail`): [`StatefulAsynchronousComputationOperator`](../../type-aliases/StatefulAsynchronousComputationOperator.md)\<`TComputation`, `T`, `T`\>

## Type Parameters

• **T**

## Parameters

### snd

[`PureDeferredComputationOf`](../../type-aliases/PureDeferredComputationOf.md)\<`TComputation`, `T`\>

### tail

...readonly [`PureDeferredComputationOf`](../../type-aliases/PureDeferredComputationOf.md)\<`TComputation`, `T`\>[]

## Returns

[`StatefulAsynchronousComputationOperator`](../../type-aliases/StatefulAsynchronousComputationOperator.md)\<`TComputation`, `T`, `T`\>

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
