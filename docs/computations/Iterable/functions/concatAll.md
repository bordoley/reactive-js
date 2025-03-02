[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Iterable](../README.md) / concatAll

# Function: concatAll()

## Call Signature

> **concatAll**\<`T`\>(`options`?): [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`IterableComputation`](../interfaces/IterableComputation.md), [`PureIterableLike`](../../interfaces/PureIterableLike.md)\<`T`\> & [`IterableLike`](../../interfaces/IterableLike.md)\<`T`\>, `T`\>

### Type Parameters

• **T**

### Parameters

#### options?

### Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<[`IterableComputation`](../interfaces/IterableComputation.md), [`PureIterableLike`](../../interfaces/PureIterableLike.md)\<`T`\> & [`IterableLike`](../../interfaces/IterableLike.md)\<`T`\>, `T`\>

## Call Signature

> **concatAll**\<`T`\>(`options`): [`ComputationWithSideEffectsOperator`](../../type-aliases/ComputationWithSideEffectsOperator.md)\<[`IterableComputation`](../interfaces/IterableComputation.md), [`IterableLike`](../../interfaces/IterableLike.md)\<`T`\>, `T`\>

### Type Parameters

• **T**

### Parameters

#### options

##### innerType

`Pick`\<[`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md), *typeof* [`ComputationLike_isPure`](../../variables/ComputationLike_isPure.md)\>

### Returns

[`ComputationWithSideEffectsOperator`](../../type-aliases/ComputationWithSideEffectsOperator.md)\<[`IterableComputation`](../interfaces/IterableComputation.md), [`IterableLike`](../../interfaces/IterableLike.md)\<`T`\>, `T`\>
