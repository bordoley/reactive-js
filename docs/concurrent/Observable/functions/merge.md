[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [concurrent/Observable](../README.md) / merge

# Function: merge()

## Call Signature

> **merge**\<`T`\>(...`computations`): [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>

### Type Parameters

• **T**

### Parameters

#### computations

...readonly [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>[]

### Returns

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>

## Call Signature

> **merge**\<`T`\>(...`computations`): [`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>

### Type Parameters

• **T**

### Parameters

#### computations

...readonly [`SynchronousComputationOf`](../../../computations/type-aliases/SynchronousComputationOf.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `T`\>[]

### Returns

[`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>

## Call Signature

> **merge**\<`T`\>(...`computations`): [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>

### Type Parameters

• **T**

### Parameters

#### computations

...readonly [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>[]

### Returns

[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>

## Call Signature

> **merge**\<`T`\>(...`computations`): [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>

### Type Parameters

• **T**

### Parameters

#### computations

...readonly [`DeferredComputationOf`](../../../computations/type-aliases/DeferredComputationOf.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `T`\>[]

### Returns

[`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>

## Call Signature

> **merge**\<`T`\>(...`computations`): `NonNullable`\<[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>\>

### Type Parameters

• **T**

### Parameters

#### computations

...readonly `NonNullable`\<[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>\>[]

### Returns

`NonNullable`\<[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>\>

## Call Signature

> **merge**\<`T`\>(...`computations`): [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>

### Type Parameters

• **T**

### Parameters

#### computations

...readonly [`PureComputationOf`](../../../computations/type-aliases/PureComputationOf.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `T`\>[]

### Returns

[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>

## Call Signature

> **merge**\<`T`\>(...`computations`): [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>

### Type Parameters

• **T**

### Parameters

#### computations

...readonly [`ComputationOf`](../../../computations/type-aliases/ComputationOf.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `T`\>[]

### Returns

[`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>
