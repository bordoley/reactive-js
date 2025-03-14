[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Computation](../README.md) / ConcatMapOperator

# Interface: ConcatMapOperator()\<TComputationType\>

## Type Parameters

• **TComputationType** *extends* [`ComputationType`](../../type-aliases/ComputationType.md)

> **ConcatMapOperator**\<`TA`, `TB`\>(`selector`): [`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<`TComputationType`, [`PureSynchronousComputationLike`](../../interfaces/PureSynchronousComputationLike.md), `TA`, `TB`\>

## Type Parameters

• **TA**

• **TB**

## Parameters

### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, [`PureSynchronousComputationOf`](../../type-aliases/PureSynchronousComputationOf.md)\<`TComputationType`, `TB`\>\>

## Returns

[`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<`TComputationType`, [`PureSynchronousComputationLike`](../../interfaces/PureSynchronousComputationLike.md), `TA`, `TB`\>

> **ConcatMapOperator**\<`TA`, `TB`, `TInnerLike`\>(`selector`, `options`?): [`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<`TComputationType`, `TInnerLike`, `TA`, `TB`\>

## Type Parameters

• **TA**

• **TB**

• **TInnerLike** *extends* [`HigherOrderInnerComputationLike`](../../type-aliases/HigherOrderInnerComputationLike.md)

## Parameters

### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, [`HigherOrderInnerComputationOf`](../../type-aliases/HigherOrderInnerComputationOf.md)\<`TComputationType`, `TInnerLike`, `TB`\>\>

### options?

#### innerType

`TInnerLike`

## Returns

[`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<`TComputationType`, `TInnerLike`, `TA`, `TB`\>
