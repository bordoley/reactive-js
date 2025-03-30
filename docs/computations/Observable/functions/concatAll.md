[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Observable](../README.md) / concatAll

# Function: concatAll()

## Call Signature

> **concatAll**\<`T`\>(): [`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), [`PureSynchronousComputationLike`](../../interfaces/PureSynchronousComputationLike.md), [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, `T`\>

### Type Parameters

• **T**

### Returns

[`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), [`PureSynchronousComputationLike`](../../interfaces/PureSynchronousComputationLike.md), [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, `T`\>

## Call Signature

> **concatAll**\<`T`, `TInnerLike`\>(`options`): [`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `TInnerLike`, [`HigherOrderInnerComputationOf`](../../type-aliases/HigherOrderInnerComputationOf.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `TInnerLike`, `T`\>, `T`\>

### Type Parameters

• **T**

• **TInnerLike** *extends* [`HigherOrderInnerComputationLike`](../../type-aliases/HigherOrderInnerComputationLike.md)

### Parameters

#### options

`TInnerLike`

### Returns

[`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `TInnerLike`, [`HigherOrderInnerComputationOf`](../../type-aliases/HigherOrderInnerComputationOf.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `TInnerLike`, `T`\>, `T`\>
