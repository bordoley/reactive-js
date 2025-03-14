[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Computation](../README.md) / ConcatWithOperator

# Interface: ConcatWithOperator()\<TComputationType\>

## Type Parameters

• **TComputationType** *extends* [`ComputationType`](../../type-aliases/ComputationType.md)

> **ConcatWithOperator**\<`T`\>(`snd`, ...`tail`): [`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<`TComputationType`, `T`, `T`\>

## Type Parameters

• **T**

## Parameters

### snd

[`PureSynchronousComputationOf`](../../type-aliases/PureSynchronousComputationOf.md)\<`TComputationType`, `T`\>

### tail

...readonly [`PureSynchronousComputationOf`](../../type-aliases/PureSynchronousComputationOf.md)\<`TComputationType`, `T`\>[]

## Returns

[`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<`TComputationType`, `T`, `T`\>

> **ConcatWithOperator**\<`T`\>(`snd`, ...`tail`): [`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<`TComputationType`, `T`, `T`\>

## Type Parameters

• **T**

## Parameters

### snd

[`SynchronousComputationOf`](../../type-aliases/SynchronousComputationOf.md)\<`TComputationType`, `T`\>

### tail

...readonly [`SynchronousComputationOf`](../../type-aliases/SynchronousComputationOf.md)\<`TComputationType`, `T`\>[]

## Returns

[`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<`TComputationType`, `T`, `T`\>

> **ConcatWithOperator**\<`T`\>(`snd`, ...`tail`): [`StatefulAsynchronousComputationOperator`](../../type-aliases/StatefulAsynchronousComputationOperator.md)\<`TComputationType`, `T`, `T`\>

## Type Parameters

• **T**

## Parameters

### snd

[`PureDeferredComputationOf`](../../type-aliases/PureDeferredComputationOf.md)\<`TComputationType`, `T`\>

### tail

...readonly [`PureDeferredComputationOf`](../../type-aliases/PureDeferredComputationOf.md)\<`TComputationType`, `T`\>[]

## Returns

[`StatefulAsynchronousComputationOperator`](../../type-aliases/StatefulAsynchronousComputationOperator.md)\<`TComputationType`, `T`, `T`\>

> **ConcatWithOperator**\<`T`\>(`snd`, ...`tail`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`DeferredComputationOf`](../../type-aliases/DeferredComputationOf.md)\<`TComputationType`, `T`\>, [`DeferredComputationWithSideEffectsOf`](../../type-aliases/DeferredComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\>\>

## Type Parameters

• **T**

## Parameters

### snd

[`DeferredComputationOf`](../../type-aliases/DeferredComputationOf.md)\<`TComputationType`, `T`\>

### tail

...readonly [`DeferredComputationOf`](../../type-aliases/DeferredComputationOf.md)\<`TComputationType`, `T`\>[]

## Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`DeferredComputationOf`](../../type-aliases/DeferredComputationOf.md)\<`TComputationType`, `T`\>, [`DeferredComputationWithSideEffectsOf`](../../type-aliases/DeferredComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\>\>
