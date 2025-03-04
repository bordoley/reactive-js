[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [concurrent/Observable](../README.md) / switchAll

# Function: switchAll()

## Call Signature

> **switchAll**\<`T`\>(): [`HigherOrderComputationOperator`](../../../computations/type-aliases/HigherOrderComputationOperator.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`unknown`\>, [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>, `T`\>

### Type Parameters

• **T**

### Returns

[`HigherOrderComputationOperator`](../../../computations/type-aliases/HigherOrderComputationOperator.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`unknown`\>, [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>, `T`\>

## Call Signature

> **switchAll**\<`T`, `TInnerType`\>(`options`): [`HigherOrderComputationOperator`](../../../computations/type-aliases/HigherOrderComputationOperator.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `TInnerType`, [`HigherOrderInnerComputationOf`](../../../computations/type-aliases/HigherOrderInnerComputationOf.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `TInnerType`, `T`\>, `T`\>

### Type Parameters

• **T**

• **TInnerType** *extends* [`HigherOrderInnerComputationLike`](../../../computations/type-aliases/HigherOrderInnerComputationLike.md)

### Parameters

#### options

##### innerType

`TInnerType`

### Returns

[`HigherOrderComputationOperator`](../../../computations/type-aliases/HigherOrderComputationOperator.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `TInnerType`, [`HigherOrderInnerComputationOf`](../../../computations/type-aliases/HigherOrderInnerComputationOf.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `TInnerType`, `T`\>, `T`\>
