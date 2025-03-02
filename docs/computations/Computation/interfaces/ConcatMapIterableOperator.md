[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Computation](../README.md) / ConcatMapIterableOperator

# Interface: ConcatMapIterableOperator()\<TComputation\>

## Type Parameters

• **TComputation** *extends* [`Computation`](../../type-aliases/Computation.md)

> **ConcatMapIterableOperator**\<`TA`, `TB`\>(`selector`): [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<`TComputation`, `TA`, `TB`\>

## Type Parameters

• **TA**

• **TB**

## Parameters

### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, [`PureIterableLike`](../../interfaces/PureIterableLike.md)\<`TB`\>\>

## Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<`TComputation`, `TA`, `TB`\>

> **ConcatMapIterableOperator**\<`TA`, `TB`\>(`selector`, `options`): [`ComputationWithSideEffectsOperator`](../../type-aliases/ComputationWithSideEffectsOperator.md)\<`TComputation`, `TA`, `TB`\>

## Type Parameters

• **TA**

• **TB**

## Parameters

### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, [`IterableLike`](../../interfaces/IterableLike.md)\<`TB`\>\>

### options

#### innerType

`Pick`\<[`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md), *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md)\>

## Returns

[`ComputationWithSideEffectsOperator`](../../type-aliases/ComputationWithSideEffectsOperator.md)\<`TComputation`, `TA`, `TB`\>
