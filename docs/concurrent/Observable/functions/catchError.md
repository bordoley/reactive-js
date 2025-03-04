[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [concurrent/Observable](../README.md) / catchError

# Function: catchError()

## Call Signature

> **catchError**\<`T`\>(`onError`): [`StatefulSynchronousComputationOperator`](../../../computations/type-aliases/StatefulSynchronousComputationOperator.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `T`, `T`\>

### Type Parameters

• **T**

### Parameters

#### onError

[`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<`Error`\>

### Returns

[`StatefulSynchronousComputationOperator`](../../../computations/type-aliases/StatefulSynchronousComputationOperator.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `T`, `T`\>

## Call Signature

> **catchError**\<`T`\>(`onError`): [`HigherOrderComputationOperator`](../../../computations/type-aliases/HigherOrderComputationOperator.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), [`PureSynchronousComputationLike`](../../../computations/interfaces/PureSynchronousComputationLike.md), `T`, `T`\>

### Type Parameters

• **T**

### Parameters

#### onError

[`Function1`](../../../functions/type-aliases/Function1.md)\<`Error`, [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>\>

### Returns

[`HigherOrderComputationOperator`](../../../computations/type-aliases/HigherOrderComputationOperator.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), [`PureSynchronousComputationLike`](../../../computations/interfaces/PureSynchronousComputationLike.md), `T`, `T`\>

## Call Signature

> **catchError**\<`T`, `TInnerType`\>(`onError`, `options`): [`HigherOrderComputationOperator`](../../../computations/type-aliases/HigherOrderComputationOperator.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `TInnerType`, `T`, `T`\>

### Type Parameters

• **T**

• **TInnerType** *extends* [`HigherOrderInnerComputationLike`](../../../computations/type-aliases/HigherOrderInnerComputationLike.md)

### Parameters

#### onError

[`Function1`](../../../functions/type-aliases/Function1.md)\<`Error`, [`HigherOrderInnerComputationOf`](../../../computations/type-aliases/HigherOrderInnerComputationOf.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `TInnerType`, `T`\>\>

#### options

##### innerType

`TInnerType`

### Returns

[`HigherOrderComputationOperator`](../../../computations/type-aliases/HigherOrderComputationOperator.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `TInnerType`, `T`, `T`\>
