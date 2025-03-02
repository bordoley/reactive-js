[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [concurrent/DeferredObservable](../README.md) / concatAll

# Function: concatAll()

## Call Signature

> **concatAll**\<`T`\>(`options`?): [`ComputationOperator`](../../../computations/type-aliases/ComputationOperator.md)\<`DeferredObservableComputation`, [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\> & [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`T`\>, `T`\>

### Type Parameters

• **T**

### Parameters

#### options?

### Returns

[`ComputationOperator`](../../../computations/type-aliases/ComputationOperator.md)\<`DeferredObservableComputation`, [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\> & [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`T`\>, `T`\>

## Call Signature

> **concatAll**\<`T`\>(`options`): [`ComputationWithSideEffectsOperator`](../../../computations/type-aliases/ComputationWithSideEffectsOperator.md)\<`DeferredObservableComputation`, [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`T`\>, `T`\>

### Type Parameters

• **T**

### Parameters

#### options

##### innerType

`Pick`\<[`ComputationWithSideEffectsLike`](../../../computations/interfaces/ComputationWithSideEffectsLike.md), *typeof* [`ComputationLike_isPure`](../../../computations/variables/ComputationLike_isPure.md)\>

### Returns

[`ComputationWithSideEffectsOperator`](../../../computations/type-aliases/ComputationWithSideEffectsOperator.md)\<`DeferredObservableComputation`, [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`T`\>, `T`\>
