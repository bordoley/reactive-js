[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Iterable](../README.md) / catchError

# Function: catchError()

## Call Signature

> **catchError**\<`T`\>(`onError`): [`DeferringComputationOperator`](../../type-aliases/DeferringComputationOperator.md)\<[`IterableComputation`](../interfaces/IterableComputation.md), `T`, `T`\>

### Type Parameters

• **T**

### Parameters

#### onError

[`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<`Error`\>

### Returns

[`DeferringComputationOperator`](../../type-aliases/DeferringComputationOperator.md)\<[`IterableComputation`](../interfaces/IterableComputation.md), `T`, `T`\>

## Call Signature

> **catchError**\<`T`\>(`onError`): [`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`IterableComputation`](../interfaces/IterableComputation.md), [`PureSynchronousComputationLike`](../../interfaces/PureSynchronousComputationLike.md), `T`, `T`\>

### Type Parameters

• **T**

### Parameters

#### onError

[`Function1`](../../../functions/type-aliases/Function1.md)\<`Error`, [`PureIterableLike`](../../interfaces/PureIterableLike.md)\<`T`\> & [`IterableLike`](../../interfaces/IterableLike.md)\<`T`\>\>

### Returns

[`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`IterableComputation`](../interfaces/IterableComputation.md), [`PureSynchronousComputationLike`](../../interfaces/PureSynchronousComputationLike.md), `T`, `T`\>

## Call Signature

> **catchError**\<`T`, `TInnerType`\>(`onError`, `options`): [`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`IterableComputation`](../interfaces/IterableComputation.md), `TInnerType`, `T`, `T`\>

### Type Parameters

• **T**

• **TInnerType** *extends* [`HigherOrderInnerComputationLike`](../../type-aliases/HigherOrderInnerComputationLike.md)

### Parameters

#### onError

[`Function1`](../../../functions/type-aliases/Function1.md)\<`Error`, [`HigherOrderInnerComputationOf`](../../type-aliases/HigherOrderInnerComputationOf.md)\<[`IterableComputation`](../interfaces/IterableComputation.md), `TInnerType`, `T`\>\>

#### options

##### innerType

`TInnerType`

### Returns

[`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`IterableComputation`](../interfaces/IterableComputation.md), `TInnerType`, `T`, `T`\>
