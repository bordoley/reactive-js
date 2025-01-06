[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [concurrent/Observable](../README.md) / merge

# Function: merge()

## Call Signature

> **merge**\<`T`\>(`fst`, `snd`, ...`tail`): [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>

### Type Parameters

• **T**

### Parameters

#### fst

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>

#### snd

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>

#### tail

...readonly [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>[]

### Returns

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>

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

> **merge**\<`T`\>(`fst`, `snd`, ...`tail`): [`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<`T`\>

### Type Parameters

• **T**

### Parameters

#### fst

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>

#### snd

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>

#### tail

...readonly [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>[]

### Returns

[`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<`T`\>

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
