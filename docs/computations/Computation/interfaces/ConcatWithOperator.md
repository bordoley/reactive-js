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

[`PureComputationOf`](../../type-aliases/PureComputationOf.md)\<`TComputation`, `T`\>

### tail

...readonly [`PureComputationOf`](../../type-aliases/PureComputationOf.md)\<`TComputation`, `T`\>[]

## Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<`TComputation`, `T`, `T`\>

> **ConcatWithOperator**\<`T`\>(`snd`, ...`tail`): [`ComputationWithSideEffectsOf`](../../type-aliases/ComputationWithSideEffectsOf.md)\<`TComputation`, `T`\>

## Type Parameters

• **T**

## Parameters

### snd

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<`TComputation`, `T`\>

### tail

...readonly [`ComputationOf`](../../type-aliases/ComputationOf.md)\<`TComputation`, `T`\>[]

## Returns

[`ComputationWithSideEffectsOf`](../../type-aliases/ComputationWithSideEffectsOf.md)\<`TComputation`, `T`\>
