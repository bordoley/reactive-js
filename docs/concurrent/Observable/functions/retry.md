[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [concurrent/Observable](../README.md) / retry

# Function: retry()

> **retry**\<`T`\>(`shouldRetry`?): [`ObservableOperator`](../type-aliases/ObservableOperator.md)\<`T`, `T`, [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`unknown`\>\>

## Type Parameters

• **T**

## Parameters

### shouldRetry?

(`count`, `error`) => `boolean`

## Returns

[`ObservableOperator`](../type-aliases/ObservableOperator.md)\<`T`, `T`, [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`unknown`\>\>
