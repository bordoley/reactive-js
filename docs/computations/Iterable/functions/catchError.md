[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Iterable](../README.md) / catchError

# Function: catchError()

## Call Signature

> **catchError**\<`T`\>(`onError`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`IterableComputation`](../interfaces/IterableComputation.md), `T`, `T`\>

### Type Parameters

• **T**

### Parameters

#### onError

[`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<`Error`\>

### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`IterableComputation`](../interfaces/IterableComputation.md), `T`, `T`\>

## Call Signature

> **catchError**\<`T`, `TInnerLike`\>(`onError`, `options`): [`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`IterableComputation`](../interfaces/IterableComputation.md), `TInnerLike`, `T`, `T`\>

### Type Parameters

• **T**

• **TInnerLike** *extends* [`HigherOrderInnerComputationLike`](../../type-aliases/HigherOrderInnerComputationLike.md)

### Parameters

#### onError

[`Function1`](../../../functions/type-aliases/Function1.md)\<`Error`, [`HigherOrderInnerComputationOf`](../../type-aliases/HigherOrderInnerComputationOf.md)\<[`IterableComputation`](../interfaces/IterableComputation.md), `TInnerLike`, `T`\>\>

#### options

`TInnerLike`

### Returns

[`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`IterableComputation`](../interfaces/IterableComputation.md), `TInnerLike`, `T`, `T`\>
