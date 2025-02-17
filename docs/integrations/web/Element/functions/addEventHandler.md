[**Reactive-JS**](../../../../README.md)

***

[Reactive-JS](../../../../README.md) / [integrations/web/Element](../README.md) / addEventHandler

# Function: addEventHandler()

> **addEventHandler**\<`TEventTarget`, `TEventName`\>(`eventName`, `eventHandler`, `options`?): [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>

## Type Parameters

• **TEventTarget** *extends* [`DOMEventTarget`](../../type-aliases/DOMEventTarget.md)

• **TEventName** *extends* `string`

## Parameters

### eventName

`TEventName`

### eventHandler

[`SideEffect1`](../../../../functions/type-aliases/SideEffect1.md)\<[`EventMapOf`](../../type-aliases/EventMapOf.md)\<`TEventTarget`\>\[`TEventName`\]\>

### options?

#### capture?

`boolean`

#### passive?

`boolean`

## Returns

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)\>
