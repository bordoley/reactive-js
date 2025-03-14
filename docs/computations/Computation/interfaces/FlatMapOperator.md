[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Computation](../README.md) / FlatMapOperator

# Interface: FlatMapOperator()\<TComputationType, TFlattenKey\>

## Type Parameters

• **TComputationType** *extends* [`ComputationType`](../../type-aliases/ComputationType.md)

• **TFlattenKey** *extends* `string` \| `number` \| `symbol`

> **FlatMapOperator**\<`TA`, `TB`\>(`key`, `selector`): [`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<`TComputationType`, [`PureSynchronousComputationLike`](../../interfaces/PureSynchronousComputationLike.md), `TA`, `TB`\>

## Type Parameters

• **TA**

• **TB**

## Parameters

### key

`TFlattenKey`

### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, [`PureSynchronousComputationOf`](../../type-aliases/PureSynchronousComputationOf.md)\<`TComputationType`, `TB`\>\>

## Returns

[`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<`TComputationType`, [`PureSynchronousComputationLike`](../../interfaces/PureSynchronousComputationLike.md), `TA`, `TB`\>

> **FlatMapOperator**\<`TA`, `TB`, `TInnerLike`\>(`key`, `selector`, `options`?): [`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<`TComputationType`, `TInnerLike`, `TA`, `TB`\>

## Type Parameters

• **TA**

• **TB**

• **TInnerLike** *extends* [`HigherOrderInnerComputationLike`](../../type-aliases/HigherOrderInnerComputationLike.md)

## Parameters

### key

`TFlattenKey`

### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, [`HigherOrderInnerComputationOf`](../../type-aliases/HigherOrderInnerComputationOf.md)\<`TComputationType`, `TInnerLike`, `TB`\>\>

### options?

#### innerType

`TInnerLike`

## Returns

[`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<`TComputationType`, `TInnerLike`, `TA`, `TB`\>
