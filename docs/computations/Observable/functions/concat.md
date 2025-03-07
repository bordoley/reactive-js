[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Observable](../README.md) / concat

# Function: concat()

## Call Signature

> **concat**\<`T`\>(...`computations`): [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>

### Type Parameters

• **T**

### Parameters

#### computations

...readonly [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>[]

### Returns

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>

## Call Signature

> **concat**\<`T`\>(...`computations`): [`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>

### Type Parameters

• **T**

### Parameters

#### computations

...readonly [`SynchronousComputationOf`](../../type-aliases/SynchronousComputationOf.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `T`\>[]

### Returns

[`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>

## Call Signature

> **concat**\<`T`\>(...`computations`): [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>

### Type Parameters

• **T**

### Parameters

#### computations

...readonly [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>[]

### Returns

[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>

## Call Signature

> **concat**\<`T`\>(...`computations`): [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>

### Type Parameters

• **T**

### Parameters

#### computations

...readonly [`DeferredComputationOf`](../../type-aliases/DeferredComputationOf.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `T`\>[]

### Returns

[`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>
