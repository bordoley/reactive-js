[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Computation](../README.md) / MergeWithOperator

# Interface: MergeWithOperator()\<TComputationType\>

## Type Parameters

• **TComputationType** *extends* [`ComputationTypeLike`](../../interfaces/ComputationTypeLike.md)

> **MergeWithOperator**\<`T`\>(`snd`, ...`tail`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<`TComputationType`, `T`, `T`\>

## Type Parameters

• **T**

## Parameters

### snd

[`PureComputationOf`](../../type-aliases/PureComputationOf.md)\<`TComputationType`, `T`\>

### tail

...readonly [`PureComputationOf`](../../type-aliases/PureComputationOf.md)\<`TComputationType`, `T`\>[]

## Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<`TComputationType`, `T`, `T`\>

> **MergeWithOperator**\<`T`\>(`snd`, ...`tail`): [`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<`TComputationType`, `T`, `T`\>

## Type Parameters

• **T**

## Parameters

### snd

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<`TComputationType`, `T`\>

### tail

...readonly [`ComputationOf`](../../type-aliases/ComputationOf.md)\<`TComputationType`, `T`\>[]

## Returns

[`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<`TComputationType`, `T`, `T`\>
