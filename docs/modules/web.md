[Reactive-JS](../README.md) / web

# Module: web

## Table of contents

### Interfaces

- [WindowLocationStreamLike](../interfaces/web.WindowLocationStreamLike.md)
- [WindowLocationStreamableLike](../interfaces/web.WindowLocationStreamableLike.md)

### Type Aliases

- [FetchRequest](web.md#fetchrequest)
- [WindowLocationURI](web.md#windowlocationuri)

### Variables

- [windowLocation](web.md#windowlocation)

### Functions

- [createEventSource](web.md#createeventsource)
- [fetch](web.md#fetch)
- [fromEvent](web.md#fromevent)

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

• `Const` **windowLocation**: [`WindowLocationStreamableLike`](../interfaces/web.WindowLocationStreamableLike.md)

## Functions

### createEventSource

▸ **createEventSource**(`url`, `options?`): [`ObservableLike`](../interfaces/observable.ObservableLike.md)<{ `data`: `string` ; `id`: `string` ; `type`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` \| `URL` |
| `options?` | `EventSourceInit` & { `events?`: readonly `string`[]  } |

#### Returns

[`ObservableLike`](../interfaces/observable.ObservableLike.md)<{ `data`: `string` ; `id`: `string` ; `type`: `string`  }\>

___

### fetch

▸ **fetch**<`T`\>(`onResponse`): [`Function1`](functions.md#function1)<`string` \| [`FetchRequest`](web.md#fetchrequest), [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `onResponse` | [`Function1`](functions.md#function1)<`Response`, `Promise`<`T`\> \| [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>\> |

#### Returns

[`Function1`](functions.md#function1)<`string` \| [`FetchRequest`](web.md#fetchrequest), [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>\>

___

### fromEvent

▸ **fromEvent**<`T`\>(`target`, `eventName`, `selector`): [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>

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

[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>
