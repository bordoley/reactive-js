[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [concurrent/SynchronousObservable](../README.md) / concatAll

# Function: concatAll()

## Call Signature

> **concatAll**\<`T`\>(`options`?): [`ComputationOperator`](../../../computations/type-aliases/ComputationOperator.md)\<`SynchronousObservableComputation`, [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\> & [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>, `T`\>

### Type Parameters

• **T**

### Parameters

#### options?

### Returns

[`ComputationOperator`](../../../computations/type-aliases/ComputationOperator.md)\<`SynchronousObservableComputation`, [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\> & [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>, `T`\>

## Call Signature

> **concatAll**\<`T`\>(`options`): [`ComputationWithSideEffectsOperator`](../../../computations/type-aliases/ComputationWithSideEffectsOperator.md)\<`SynchronousObservableComputation`, [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>, `T`\>

### Type Parameters

• **T**

### Parameters

#### options

##### innerType

`Pick`\<[`ComputationWithSideEffectsLike`](../../../computations/interfaces/ComputationWithSideEffectsLike.md), *typeof* [`ComputationLike_isPure`](../../../computations/variables/ComputationLike_isPure.md)\>

### Returns

[`ComputationWithSideEffectsOperator`](../../../computations/type-aliases/ComputationWithSideEffectsOperator.md)\<`SynchronousObservableComputation`, [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>, `T`\>
