[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Computation](../README.md) / MergeWithOperator

# Interface: MergeWithOperator()\<TComputation\>

## Type Parameters

• **TComputation** *extends* [`Computation`](../../type-aliases/Computation.md)

> **MergeWithOperator**\<`T`\>(`snd`, ...`tail`): [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<`TComputation`, `T`, `T`\>

## Type Parameters

• **T**

## Parameters

### snd

[`PureSynchronousComputationOf`](../../type-aliases/PureSynchronousComputationOf.md)\<`TComputation`, `T`\>

### tail

...readonly [`PureSynchronousComputationOf`](../../type-aliases/PureSynchronousComputationOf.md)\<`TComputation`, `T`\>[]

## Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<`TComputation`, `T`, `T`\>

> **MergeWithOperator**\<`T`\>(`snd`, ...`tail`): [`ComputationWithSideEffectsOperator`](../../type-aliases/ComputationWithSideEffectsOperator.md)\<`TComputation`, `T`, `T`\>

## Type Parameters

• **T**

## Parameters

### snd

[`SynchronousComputationOf`](../../type-aliases/SynchronousComputationOf.md)\<`TComputation`, `T`\>

### tail

...readonly [`SynchronousComputationOf`](../../type-aliases/SynchronousComputationOf.md)\<`TComputation`, `T`\>[]

## Returns

[`ComputationWithSideEffectsOperator`](../../type-aliases/ComputationWithSideEffectsOperator.md)\<`TComputation`, `T`, `T`\>

> **MergeWithOperator**\<`T`\>(`snd`, ...`tail`): [`DeferredComputationOperator`](../../type-aliases/DeferredComputationOperator.md)\<`TComputation`, `T`, `T`\>

## Type Parameters

• **T**

## Parameters

### snd

[`PureDeferredComputationOf`](../../type-aliases/PureDeferredComputationOf.md)\<`TComputation`, `T`\>

### tail

...readonly [`PureDeferredComputationOf`](../../type-aliases/PureDeferredComputationOf.md)\<`TComputation`, `T`\>[]

## Returns

[`DeferredComputationOperator`](../../type-aliases/DeferredComputationOperator.md)\<`TComputation`, `T`, `T`\>

> **MergeWithOperator**\<`T`\>(`snd`, ...`tail`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationBaseOf`](../../type-aliases/ComputationBaseOf.md)\<`TComputation`, `T`\>, [`DeferredComputationWithSideEffectsOf`](../../type-aliases/DeferredComputationWithSideEffectsOf.md)\<`TComputation`, `T`\>\>

## Type Parameters

• **T**

## Parameters

### snd

[`DeferredComputationOf`](../../type-aliases/DeferredComputationOf.md)\<`TComputation`, `T`\>

### tail

...readonly [`DeferredComputationOf`](../../type-aliases/DeferredComputationOf.md)\<`TComputation`, `T`\>[]

## Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationBaseOf`](../../type-aliases/ComputationBaseOf.md)\<`TComputation`, `T`\>, [`DeferredComputationWithSideEffectsOf`](../../type-aliases/DeferredComputationWithSideEffectsOf.md)\<`TComputation`, `T`\>\>

> **MergeWithOperator**\<`T`\>(`snd`, ...`tail`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`MulticastComputationOf`](../../type-aliases/MulticastComputationOf.md)\<`TComputation`, `T`\>, [`MulticastComputationOf`](../../type-aliases/MulticastComputationOf.md)\<`TComputation`, `T`\>\>

## Type Parameters

• **T**

## Parameters

### snd

[`MulticastComputationOf`](../../type-aliases/MulticastComputationOf.md)\<`TComputation`, `T`\>

### tail

...readonly [`MulticastComputationOf`](../../type-aliases/MulticastComputationOf.md)\<`TComputation`, `T`\>[]

## Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`MulticastComputationOf`](../../type-aliases/MulticastComputationOf.md)\<`TComputation`, `T`\>, [`MulticastComputationOf`](../../type-aliases/MulticastComputationOf.md)\<`TComputation`, `T`\>\>

> **MergeWithOperator**\<`T`\>(`snd`, ...`tail`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationBaseOf`](../../type-aliases/ComputationBaseOf.md)\<`TComputation`, `T`\>, [`ComputationBaseOf`](../../type-aliases/ComputationBaseOf.md)\<`TComputation`, `T`\>\>

## Type Parameters

• **T**

## Parameters

### snd

[`ComputationBaseOf`](../../type-aliases/ComputationBaseOf.md)\<`TComputation`, `T`\>

### tail

...readonly [`ComputationBaseOf`](../../type-aliases/ComputationBaseOf.md)\<`TComputation`, `T`\>[]

## Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationBaseOf`](../../type-aliases/ComputationBaseOf.md)\<`TComputation`, `T`\>, [`ComputationBaseOf`](../../type-aliases/ComputationBaseOf.md)\<`TComputation`, `T`\>\>
