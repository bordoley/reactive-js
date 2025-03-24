[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [web/Element](../README.md) / eventSource

# Function: eventSource()

> **eventSource**\<`TEventTarget`, `TEventName`\>(`eventName`, `options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`BroadcasterLike`](../../../computations/interfaces/BroadcasterLike.md)\<[`EventMapOf`](../../type-aliases/EventMapOf.md)\<`TEventTarget`\>\[`TEventName`\]\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

## Type Parameters

• **TEventTarget** *extends* [`DOMEventTarget`](../../type-aliases/DOMEventTarget.md)

• **TEventName** *extends* `string`

## Parameters

### eventName

`TEventName`

### options?

#### autoDispose?

`boolean`

#### capture?

`boolean`

#### passive?

`boolean`

## Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`BroadcasterLike`](../../../computations/interfaces/BroadcasterLike.md)\<[`EventMapOf`](../../type-aliases/EventMapOf.md)\<`TEventTarget`\>\[`TEventName`\]\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>
