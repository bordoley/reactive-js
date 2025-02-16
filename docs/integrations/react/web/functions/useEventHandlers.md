[**Reactive-JS**](../../../../README.md)

***

[Reactive-JS](../../../../README.md) / [integrations/react/web](../README.md) / useEventHandlers

# Function: useEventHandlers()

> **useEventHandlers**\<`TEventTarget`\>(`events`, `deps`, `options`?): `Ref`\<`TEventTarget`\>

## Type Parameters

• **TEventTarget** *extends* [`DOMEventTarget`](../../../web/type-aliases/DOMEventTarget.md)

## Parameters

### events

`{ [TEventName in string]?: SideEffect1<EventMapOf<TEventTarget>[TEventName]> }`

### deps

readonly `unknown`[]

### options?

`{ [TEventName in string]?: { capture?: boolean; passive?: boolean } }`

## Returns

`Ref`\<`TEventTarget`\>
