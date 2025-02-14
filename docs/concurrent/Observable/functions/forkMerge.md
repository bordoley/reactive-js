[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [concurrent/Observable](../README.md) / forkMerge

# Function: forkMerge()

## Call Signature

> **forkMerge**\<`TIn`, `TOut`\>(`fst`, `snd`, ...`tail`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TIn`\>, [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TOut`\>\>

### Type Parameters

• **TIn**

• **TOut**

### Parameters

#### fst

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TIn`\>, [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TOut`\>\>

#### snd

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TIn`\>, [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TOut`\>\>

#### tail

...readonly [`Function1`](../../../functions/type-aliases/Function1.md)\<[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TIn`\>, [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TOut`\>\>[]

### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TIn`\>, [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TOut`\>\>

## Call Signature

> **forkMerge**\<`TIn`, `TOut`\>(`fst`, `snd`, ...`tail`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TIn`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`TOut`\>\>

### Type Parameters

• **TIn**

• **TOut**

### Parameters

#### fst

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TIn`\>, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TOut`\>\>

#### snd

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TIn`\>, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TOut`\>\>

#### tail

...readonly [`Function1`](../../../functions/type-aliases/Function1.md)\<[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TIn`\>, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TOut`\>\>[]

### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TIn`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`TOut`\>\>
