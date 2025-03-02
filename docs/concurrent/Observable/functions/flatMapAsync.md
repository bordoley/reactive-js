[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [concurrent/Observable](../README.md) / flatMapAsync

# Function: flatMapAsync()

> **flatMapAsync**\<`TA`, `TB`\>(`f`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`TA`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`TB`\>\>

## Type Parameters

• **TA**

• **TB**

## Parameters

### f

[`Function2`](../../../functions/type-aliases/Function2.md)\<`TA`, `AbortSignal`, `Promise`\<`TB`\>\>

## Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`TA`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`TB`\>\>
