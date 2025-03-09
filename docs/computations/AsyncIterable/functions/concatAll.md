[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/AsyncIterable](../README.md) / concatAll

# Function: concatAll()

## Call Signature

> **concatAll**\<`T`\>(): [`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`AsyncIterableComputation`](../interfaces/AsyncIterableComputation.md), [`PureSynchronousComputationLike`](../../interfaces/PureSynchronousComputationLike.md), `never`, `T`\>

### Type Parameters

• **T**

### Returns

[`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`AsyncIterableComputation`](../interfaces/AsyncIterableComputation.md), [`PureSynchronousComputationLike`](../../interfaces/PureSynchronousComputationLike.md), `never`, `T`\>

## Call Signature

> **concatAll**\<`T`, `TInnerType`\>(`options`): [`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`AsyncIterableComputation`](../interfaces/AsyncIterableComputation.md), `TInnerType`, [`HigherOrderInnerComputationOf`](../../type-aliases/HigherOrderInnerComputationOf.md)\<[`AsyncIterableComputation`](../interfaces/AsyncIterableComputation.md), `TInnerType`, `T`\>, `T`\>

### Type Parameters

• **T**

• **TInnerType** *extends* [`HigherOrderInnerComputationLike`](../../type-aliases/HigherOrderInnerComputationLike.md)

### Parameters

#### options

##### innerType

`TInnerType`

### Returns

[`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`AsyncIterableComputation`](../interfaces/AsyncIterableComputation.md), `TInnerType`, [`HigherOrderInnerComputationOf`](../../type-aliases/HigherOrderInnerComputationOf.md)\<[`AsyncIterableComputation`](../interfaces/AsyncIterableComputation.md), `TInnerType`, `T`\>, `T`\>
