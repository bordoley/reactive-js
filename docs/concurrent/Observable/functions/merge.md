[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [concurrent/Observable](../README.md) / merge

# Function: merge()

## Call Signature

> **merge**\<`T`\>(`fst`, `snd`, ...`tail`): [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>

### Type Parameters

• **T**

### Parameters

#### fst

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>

#### snd

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>

#### tail

...readonly [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>[]

### Returns

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>

## Call Signature

> **merge**\<`T`\>(`fst`, `snd`, ...`tail`): [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\>

### Type Parameters

• **T**

### Parameters

#### fst

[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\>

#### snd

[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\>

#### tail

...readonly [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\>[]

### Returns

[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\>

## Call Signature

> **merge**\<`T`\>(`fst`, `snd`, ...`tail`): [`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<`T`\>

### Type Parameters

• **T**

### Parameters

#### fst

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>

#### snd

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>

#### tail

...readonly [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>[]

### Returns

[`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<`T`\>

## Call Signature

> **merge**\<`T`\>(`fst`, `snd`, ...`tail`): [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\>

### Type Parameters

• **T**

### Parameters

#### fst

[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\>

#### snd

[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\>

#### tail

...readonly [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\>[]

### Returns

[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\>

## Call Signature

> **merge**\<`T`\>(`fst`, `snd`, ...`tail`): [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\>

### Type Parameters

• **T**

### Parameters

#### fst

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`T`\>

#### snd

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`T`\>

#### tail

...readonly [`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`T`\>[]

### Returns

[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\>

## Call Signature

> **merge**\<`T`\>(`fst`, `snd`, ...`tail`): [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>

### Type Parameters

• **T**

### Parameters

#### fst

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>

#### snd

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>

#### tail

...readonly [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>[]

### Returns

[`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>
