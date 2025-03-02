[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [concurrent/SynchronousObservable](../README.md) / catchError

# Function: catchError()

## Call Signature

> **catchError**\<`T`\>(`onError`): [`ComputationOperator`](../../../computations/type-aliases/ComputationOperator.md)\<`SynchronousObservableComputation`, `T`, `T`\>

### Type Parameters

• **T**

### Parameters

#### onError

[`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<`Error`\>

### Returns

[`ComputationOperator`](../../../computations/type-aliases/ComputationOperator.md)\<`SynchronousObservableComputation`, `T`, `T`\>

## Call Signature

> **catchError**\<`T`\>(`onError`): [`ComputationOperator`](../../../computations/type-aliases/ComputationOperator.md)\<`SynchronousObservableComputation`, `T`, `T`\>

### Type Parameters

• **T**

### Parameters

#### onError

[`Function1`](../../../functions/type-aliases/Function1.md)\<`Error`, [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\> & [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>\>

### Returns

[`ComputationOperator`](../../../computations/type-aliases/ComputationOperator.md)\<`SynchronousObservableComputation`, `T`, `T`\>

## Call Signature

> **catchError**\<`T`\>(`onError`, `options`): [`ComputationWithSideEffectsOperator`](../../../computations/type-aliases/ComputationWithSideEffectsOperator.md)\<`SynchronousObservableComputation`, `T`, `T`\>

### Type Parameters

• **T**

### Parameters

#### onError

[`Function1`](../../../functions/type-aliases/Function1.md)\<`Error`, [`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<`T`\> & [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>\>

#### options

##### innerType

`Pick`\<[`ComputationWithSideEffectsLike`](../../../computations/interfaces/ComputationWithSideEffectsLike.md), *typeof* [`ComputationLike_isPure`](../../../computations/variables/ComputationLike_isPure.md)\>

### Returns

[`ComputationWithSideEffectsOperator`](../../../computations/type-aliases/ComputationWithSideEffectsOperator.md)\<`SynchronousObservableComputation`, `T`, `T`\>
