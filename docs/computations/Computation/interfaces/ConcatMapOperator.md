[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Computation](../README.md) / ConcatMapOperator

# Interface: ConcatMapOperator()\<TComputation\>

## Type Parameters

• **TComputation** *extends* [`Computation`](../../type-aliases/Computation.md)

> **ConcatMapOperator**\<`TA`, `TB`\>(`selector`): [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<`TComputation`, `TA`, `TB`\>

## Type Parameters

• **TA**

• **TB**

## Parameters

### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, [`PureComputationOf`](../../type-aliases/PureComputationOf.md)\<`TComputation`, `TB`\>\>

## Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<`TComputation`, `TA`, `TB`\>

> **ConcatMapOperator**\<`TA`, `TB`\>(`selector`, `options`?): [`ComputationWithSideEffectsOperator`](../../type-aliases/ComputationWithSideEffectsOperator.md)\<`TComputation`, [`ComputationOf`](../../type-aliases/ComputationOf.md)\<`TComputation`, `TA`\>, `TB`\>

## Type Parameters

• **TA**

• **TB**

## Parameters

### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, [`ComputationOf`](../../type-aliases/ComputationOf.md)\<`TComputation`, `TB`\>\>

### options?

#### innerType

`Pick`\<[`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md), *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md)\>

## Returns

[`ComputationWithSideEffectsOperator`](../../type-aliases/ComputationWithSideEffectsOperator.md)\<`TComputation`, [`ComputationOf`](../../type-aliases/ComputationOf.md)\<`TComputation`, `TA`\>, `TB`\>
