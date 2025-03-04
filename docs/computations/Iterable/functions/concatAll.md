[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Iterable](../README.md) / concatAll

# Function: concatAll()

## Call Signature

> **concatAll**\<`T`\>(): [`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`IterableComputation`](../interfaces/IterableComputation.md), [`PureSynchronousComputationLike`](../../interfaces/PureSynchronousComputationLike.md), [`PureIterableLike`](../../interfaces/PureIterableLike.md)\<`T`\> & [`IterableLike`](../../interfaces/IterableLike.md)\<`T`\>, `T`\>

### Type Parameters

• **T**

### Returns

[`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`IterableComputation`](../interfaces/IterableComputation.md), [`PureSynchronousComputationLike`](../../interfaces/PureSynchronousComputationLike.md), [`PureIterableLike`](../../interfaces/PureIterableLike.md)\<`T`\> & [`IterableLike`](../../interfaces/IterableLike.md)\<`T`\>, `T`\>

## Call Signature

> **concatAll**\<`T`, `TInnerType`\>(`options`): [`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`IterableComputation`](../interfaces/IterableComputation.md), `TInnerType`, [`ComputationOfInnerType`](../../type-aliases/ComputationOfInnerType.md)\<[`IterableComputation`](../interfaces/IterableComputation.md), `TInnerType`, `T`\>, `T`\>

### Type Parameters

• **T**

• **TInnerType** *extends* [`DeferringHigherOrderInnerType`](../../type-aliases/DeferringHigherOrderInnerType.md)

### Parameters

#### options

##### innerType

`TInnerType`

### Returns

[`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`IterableComputation`](../interfaces/IterableComputation.md), `TInnerType`, [`ComputationOfInnerType`](../../type-aliases/ComputationOfInnerType.md)\<[`IterableComputation`](../interfaces/IterableComputation.md), `TInnerType`, `T`\>, `T`\>
