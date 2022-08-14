[Reactive-JS](../README.md) / integrations/web

# Module: integrations/web

## Table of contents

### Interfaces

- [WindowLocationStreamLike](../interfaces/integrations_web.WindowLocationStreamLike.md)
- [WindowLocationStreamableLike](../interfaces/integrations_web.WindowLocationStreamableLike.md)

### Type Aliases

- [FetchRequest](integrations_web.md#fetchrequest)
- [WindowLocationURI](integrations_web.md#windowlocationuri)

### Variables

- [windowLocation](integrations_web.md#windowlocation)

### Functions

- [addEventListener](integrations_web.md#addeventlistener)
- [createEventSource](integrations_web.md#createeventsource)
- [fetch](integrations_web.md#fetch)

## Type Aliases

### FetchRequest

Ƭ **FetchRequest**: `RequestInit` & { `uri`: `string`  }

___

### WindowLocationURI

Ƭ **WindowLocationURI**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fragment` | `string` |
| `path` | `string` |
| `query` | `string` |
| `title` | `string` |

## Variables

### windowLocation

• `Const` **windowLocation**: [`WindowLocationStreamableLike`](../interfaces/integrations_web.WindowLocationStreamableLike.md)

## Functions

### addEventListener

▸ **addEventListener**<`T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`EventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `selector` | [`Function1`](functions.md#function1)<`Event`, `T`\> |

#### Returns

[`Function1`](functions.md#function1)<`EventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

___

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
