[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [concurrent/Observable](../README.md) / forkMerge

# Function: forkMerge()

> **forkMerge**\<`TIn`, `TOut`\>(`ops`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TIn`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`TOut`\>\>

## Type Parameters

• **TIn**

• **TOut**

## Parameters

### ops

\[[`Function1`](../../../functions/type-aliases/Function1.md)\<[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TIn`\>, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TOut`\>\>, [`Function1`](../../../functions/type-aliases/Function1.md)\<[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TIn`\>, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TOut`\>\>, `...tail: Function1<MulticastObservableLike<TIn>, ObservableLike<TOut>>[]`\]

## Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TIn`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`TOut`\>\>
