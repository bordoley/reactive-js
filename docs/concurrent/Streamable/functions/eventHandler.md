[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [concurrent/Streamable](../README.md) / eventHandler

# Function: eventHandler()

> **eventHandler**\<`TEventType`\>(`op`, `options`?): [`StreamableLike`](../../interfaces/StreamableLike.md)\<`TEventType`, `boolean`, [`StreamLike`](../../interfaces/StreamLike.md)\<`TEventType`, `boolean`\>\>

## Type Parameters

• **TEventType**

## Parameters

### op

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TEventType`, [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\>

### options?

\{ `mode`: `"switching"`; \} | \{ `mode`: `"blocking"`; \} | \{ `backpressureStrategy`: [`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md); `capacity`: `number`; `mode`: `"queueing"`; \}

## Returns

[`StreamableLike`](../../interfaces/StreamableLike.md)\<`TEventType`, `boolean`, [`StreamLike`](../../interfaces/StreamLike.md)\<`TEventType`, `boolean`\>\>
