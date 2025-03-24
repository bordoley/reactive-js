[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Computation](../README.md) / MergeWithOperator

# Interface: MergeWithOperator()\<TComputationType\>

## Type Parameters

• **TComputationType** *extends* [`ComputationType`](../../type-aliases/ComputationType.md)

> **MergeWithOperator**\<`T`\>(`snd`, ...`tail`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<`TComputationType`, `T`, `T`\>

## Type Parameters

• **T**

## Parameters

### snd

[`PureSynchronousComputationOf`](../../type-aliases/PureSynchronousComputationOf.md)\<`TComputationType`, `T`\>

### tail

...readonly [`PureSynchronousComputationOf`](../../type-aliases/PureSynchronousComputationOf.md)\<`TComputationType`, `T`\>[]

## Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<`TComputationType`, `T`, `T`\>

> **MergeWithOperator**\<`T`\>(`snd`, ...`tail`): [`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<`TComputationType`, `T`, `T`\>

## Type Parameters

• **T**

## Parameters

### snd

[`SynchronousComputationOf`](../../type-aliases/SynchronousComputationOf.md)\<`TComputationType`, `T`\>

### tail

...readonly [`SynchronousComputationOf`](../../type-aliases/SynchronousComputationOf.md)\<`TComputationType`, `T`\>[]

## Returns

[`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<`TComputationType`, `T`, `T`\>

> **MergeWithOperator**\<`T`\>(`snd`, ...`tail`): [`PureAsynchronousComputationOperator`](../../type-aliases/PureAsynchronousComputationOperator.md)\<`TComputationType`, `T`, `T`\>

## Type Parameters

• **T**

## Parameters

### snd

[`PureDeferredComputationOf`](../../type-aliases/PureDeferredComputationOf.md)\<`TComputationType`, `T`\>

### tail

...readonly [`PureDeferredComputationOf`](../../type-aliases/PureDeferredComputationOf.md)\<`TComputationType`, `T`\>[]

## Returns

[`PureAsynchronousComputationOperator`](../../type-aliases/PureAsynchronousComputationOperator.md)\<`TComputationType`, `T`, `T`\>

> **MergeWithOperator**\<`T`\>(`snd`, ...`tail`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../../type-aliases/ComputationOf.md)\<`TComputationType`, `T`\>, [`DeferredComputationWithSideEffectsOf`](../../type-aliases/DeferredComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\>\>

## Type Parameters

• **T**

## Parameters

### snd

[`DeferredComputationOf`](../../type-aliases/DeferredComputationOf.md)\<`TComputationType`, `T`\>

### tail

...readonly [`DeferredComputationOf`](../../type-aliases/DeferredComputationOf.md)\<`TComputationType`, `T`\>[]

## Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../../type-aliases/ComputationOf.md)\<`TComputationType`, `T`\>, [`DeferredComputationWithSideEffectsOf`](../../type-aliases/DeferredComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\>\>

> **MergeWithOperator**\<`T`\>(`snd`, ...`tail`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`MulticastComputationOf`](../../type-aliases/MulticastComputationOf.md)\<`TComputationType`, `T`\>, [`MulticastComputationOf`](../../type-aliases/MulticastComputationOf.md)\<`TComputationType`, `T`\>\>

## Type Parameters

• **T**

## Parameters

### snd

[`MulticastComputationOf`](../../type-aliases/MulticastComputationOf.md)\<`TComputationType`, `T`\>

### tail

...readonly [`MulticastComputationOf`](../../type-aliases/MulticastComputationOf.md)\<`TComputationType`, `T`\>[]

## Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`MulticastComputationOf`](../../type-aliases/MulticastComputationOf.md)\<`TComputationType`, `T`\>, [`MulticastComputationOf`](../../type-aliases/MulticastComputationOf.md)\<`TComputationType`, `T`\>\>

> **MergeWithOperator**\<`T`\>(`snd`, ...`tail`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationBaseOf`](../../type-aliases/ComputationBaseOf.md)\<`TComputationType`, `T`\>, [`ComputationBaseOf`](../../type-aliases/ComputationBaseOf.md)\<`TComputationType`, `T`\>\>

## Type Parameters

• **T**

## Parameters

### snd

[`ComputationBaseOf`](../../type-aliases/ComputationBaseOf.md)\<`TComputationType`, `T`\>

### tail

...readonly [`ComputationBaseOf`](../../type-aliases/ComputationBaseOf.md)\<`TComputationType`, `T`\>[]

## Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationBaseOf`](../../type-aliases/ComputationBaseOf.md)\<`TComputationType`, `T`\>, [`ComputationBaseOf`](../../type-aliases/ComputationBaseOf.md)\<`TComputationType`, `T`\>\>
