[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [integrations/web](../README.md) / DOMEventTarget

# Type Alias: DOMEventTarget

> **DOMEventTarget**: `object`

## Type declaration

### addEventListener()

#### Type Parameters

• **This**

• **TEventName** *extends* `string`

#### Parameters

##### this

`This`

##### eventName

`TEventName`

##### listener

[`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<[`EventMapOf`](EventMapOf.md)\<`This`\>\[`TEventName`\]\>

##### options?

`unknown`

#### Returns

`void`

### removeEventListener()

#### Type Parameters

• **This**

• **TEventName** *extends* `string`

#### Parameters

##### this

`This`

##### eventName

`TEventName`

##### listener

[`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<[`EventMapOf`](EventMapOf.md)\<`This`\>\[`TEventName`\]\>

#### Returns

`void`
