[**Reactive-JS**](../../../../README.md)

***

[Reactive-JS](../../../../README.md) / [integrations/react/web](../README.md) / useEventHandler

# Function: useEventHandler()

> **useEventHandler**\<`TEventTarget`, `TEventName`\>(`eventName`, `eventHandler`, `deps`, `options`?): `Ref`\<`TEventTarget`\>

## Type Parameters

• **TEventTarget** *extends* [`DOMEventTarget`](../../../web/type-aliases/DOMEventTarget.md)

• **TEventName** *extends* `string`

## Parameters

### eventName

`TEventName`

### eventHandler

[`SideEffect1`](../../../../functions/type-aliases/SideEffect1.md)\<[`EventMapOf`](../../../web/type-aliases/EventMapOf.md)\<`TEventTarget`\>\[`TEventName`\]\>

### deps

readonly `unknown`[]

### options?

#### capture

`boolean`

#### passive

`boolean`

## Returns

`Ref`\<`TEventTarget`\>
