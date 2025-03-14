[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Computation](../README.md) / FlatMapIterableOperator

# Interface: FlatMapIterableOperator()\<TComputationType, TFlattenKey\>

## Type Parameters

• **TComputationType** *extends* [`ComputationType`](../../type-aliases/ComputationType.md)

• **TFlattenKey** *extends* `string` \| `number` \| `symbol`

> **FlatMapIterableOperator**\<`TA`, `TB`\>(`key`, `selector`): [`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<`TComputationType`, [`PureSynchronousComputationLike`](../../interfaces/PureSynchronousComputationLike.md), `TA`, `TB`\>

## Type Parameters

• **TA**

• **TB**

## Parameters

### key

`TFlattenKey`

### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, [`PureIterableLike`](../../interfaces/PureIterableLike.md)\<`TB`\>\>

## Returns

[`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<`TComputationType`, [`PureSynchronousComputationLike`](../../interfaces/PureSynchronousComputationLike.md), `TA`, `TB`\>

> **FlatMapIterableOperator**\<`TA`, `TB`\>(`key`, `selector`, `options`): [`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<`TComputationType`, [`PureSynchronousComputationLike`](../../interfaces/PureSynchronousComputationLike.md), `TA`, `TB`\>

## Type Parameters

• **TA**

• **TB**

## Parameters

### key

`TFlattenKey`

### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, [`PureIterableLike`](../../interfaces/PureIterableLike.md)\<`TB`\>\>

### options

#### innerType

[`PureSynchronousComputationLike`](../../interfaces/PureSynchronousComputationLike.md)

## Returns

[`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<`TComputationType`, [`PureSynchronousComputationLike`](../../interfaces/PureSynchronousComputationLike.md), `TA`, `TB`\>
