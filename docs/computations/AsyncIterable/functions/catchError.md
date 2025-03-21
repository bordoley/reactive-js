[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/AsyncIterable](../README.md) / catchError

# Function: catchError()

## Call Signature

> **catchError**\<`T`\>(`onError`): [`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`AsyncIterableComputation`](../interfaces/AsyncIterableComputation.md), `T`, `T`\>

### Type Parameters

• **T**

### Parameters

#### onError

[`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<`Error`\>

### Returns

[`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`AsyncIterableComputation`](../interfaces/AsyncIterableComputation.md), `T`, `T`\>

## Call Signature

> **catchError**\<`T`, `TInnerLike`\>(`onError`, `options`): [`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`AsyncIterableComputation`](../interfaces/AsyncIterableComputation.md), `TInnerLike`, `T`, `T`\>

### Type Parameters

• **T**

• **TInnerLike** *extends* [`HigherOrderInnerComputationLike`](../../type-aliases/HigherOrderInnerComputationLike.md)

### Parameters

#### onError

[`Function1`](../../../functions/type-aliases/Function1.md)\<`Error`, [`HigherOrderInnerComputationOf`](../../type-aliases/HigherOrderInnerComputationOf.md)\<[`AsyncIterableComputation`](../interfaces/AsyncIterableComputation.md), `TInnerLike`, `T`\>\>

#### options

##### innerType

`TInnerLike`

### Returns

[`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`AsyncIterableComputation`](../interfaces/AsyncIterableComputation.md), `TInnerLike`, `T`, `T`\>
