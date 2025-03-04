[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [concurrent/Observable](../README.md) / concatAll

# Function: concatAll()

## Call Signature

> **concatAll**\<`T`\>(): [`HigherOrderComputationOperator`](../../../computations/type-aliases/HigherOrderComputationOperator.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), [`PureSynchronousComputationLike`](../../../computations/interfaces/PureSynchronousComputationLike.md), [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, `T`\>

### Type Parameters

• **T**

### Returns

[`HigherOrderComputationOperator`](../../../computations/type-aliases/HigherOrderComputationOperator.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), [`PureSynchronousComputationLike`](../../../computations/interfaces/PureSynchronousComputationLike.md), [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, `T`\>

## Call Signature

> **concatAll**\<`T`, `TInnerType`\>(`options`): [`HigherOrderComputationOperator`](../../../computations/type-aliases/HigherOrderComputationOperator.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `TInnerType`, [`HigherOrderInnerComputationOf`](../../../computations/type-aliases/HigherOrderInnerComputationOf.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `TInnerType`, `T`\>, `T`\>

### Type Parameters

• **T**

• **TInnerType** *extends* [`HigherOrderInnerComputationLike`](../../../computations/type-aliases/HigherOrderInnerComputationLike.md)

### Parameters

#### options

##### innerType

`TInnerType`

### Returns

[`HigherOrderComputationOperator`](../../../computations/type-aliases/HigherOrderComputationOperator.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `TInnerType`, [`HigherOrderInnerComputationOf`](../../../computations/type-aliases/HigherOrderInnerComputationOf.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `TInnerType`, `T`\>, `T`\>
