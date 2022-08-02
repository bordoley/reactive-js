[Reactive-JS](../README.md) / integrations/web

# Module: integrations/web

## Table of contents

### Interfaces

- [WindowLocationStreamLike](../interfaces/integrations_web.WindowLocationStreamLike.md)
- [WindowLocationStreamableLike](../interfaces/integrations_web.WindowLocationStreamableLike.md)
- [WindowLocationURI](../interfaces/integrations_web.WindowLocationURI.md)

### Type Aliases

- [FetchRequest](integrations_web.md#fetchrequest)

### Functions

- [createEventSource](integrations_web.md#createeventsource)
- [fetch](integrations_web.md#fetch)
- [fromEvent](integrations_web.md#fromevent)

## Type Aliases

### FetchRequest

Ƭ **FetchRequest**: `RequestInit` & { `uri`: `string`  }

## Functions

### createEventSource

▸ **createEventSource**(`url`, `options?`): [`ObservableLike`](../interfaces/rx.ObservableLike.md)<{ `data`: `string` ; `id`: `string` ; `type`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` \| `URL` |
| `options?` | `EventSourceInit` & { `events?`: readonly `string`[]  } |

#### Returns

[`ObservableLike`](../interfaces/rx.ObservableLike.md)<{ `data`: `string` ; `id`: `string` ; `type`: `string`  }\>

___

### fetch

▸ **fetch**<`T`\>(`onResponse`): [`Function1`](functions.md#function1)<`string` \| [`FetchRequest`](integrations_web.md#fetchrequest), [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `onResponse` | [`Function1`](functions.md#function1)<`Response`, `Promise`<`T`\> \| [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\> |

#### Returns

[`Function1`](functions.md#function1)<`string` \| [`FetchRequest`](integrations_web.md#fetchrequest), [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

___

### fromEvent

▸ **fromEvent**<`T`\>(`target`, `eventName`, `selector`): [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `EventTarget` |
| `eventName` | `string` |
| `selector` | [`Function1`](functions.md#function1)<`Event`, `T`\> |

#### Returns

[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>
