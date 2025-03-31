[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/SynchronousObservable](../README.md) / mergeAll

# Function: mergeAll()

## Call Signature

> **mergeAll**\<`T`\>(`options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

### Type Parameters

• **T**

### Parameters

#### options?

##### backpressureStrategy?

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

##### capacity?

`number`

##### concurrency?

`number`

### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

## Call Signature

> **mergeAll**\<`T`\>(`options`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

### Type Parameters

• **T**

### Parameters

#### options

##### [ComputationLike_isPure]

[`Optional`](../../../functions/type-aliases/Optional.md)\<`true`\>

##### backpressureStrategy?

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

##### capacity?

`number`

##### concurrency?

`number`

### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

## Call Signature

> **mergeAll**\<`T`\>(`options`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`SynchronousObservableComputation`](../interfaces/SynchronousObservableComputation.md), [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`SynchronousObservableComputation`](../interfaces/SynchronousObservableComputation.md), `T`\>\>, [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)\>

### Type Parameters

• **T**

### Parameters

#### options

##### [ComputationLike_isPure]

`false`

##### backpressureStrategy?

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

##### capacity?

`number`

##### concurrency?

`number`

### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`SynchronousObservableComputation`](../interfaces/SynchronousObservableComputation.md), [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`SynchronousObservableComputation`](../interfaces/SynchronousObservableComputation.md), `T`\>\>, [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)\>
