[Reactive-JS](../README.md) / integrations/web

# Module: integrations/web

## Table of contents

### Container Interfaces

- [WindowLocationStreamLike](../interfaces/integrations_web.WindowLocationStreamLike.md)

### Other Interfaces

- [FetchRequest](../interfaces/integrations_web.FetchRequest.md)
- [WindowLocationStreamableLike](../interfaces/integrations_web.WindowLocationStreamableLike.md)
- [WindowLocationURI](../interfaces/integrations_web.WindowLocationURI.md)

### Variables

- [windowLocation](integrations_web.md#windowlocation)

### Functions

- [addEventListener](integrations_web.md#addeventlistener)
- [createEventSource](integrations_web.md#createeventsource)
- [fetch](integrations_web.md#fetch)

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

▸ **fetch**<`T`\>(`onResponse`): [`Function1`](functions.md#function1)<`string` \| [`FetchRequest`](../interfaces/integrations_web.FetchRequest.md), [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `onResponse` | [`Function1`](functions.md#function1)<`Response`, `Promise`<`T`\> \| [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\> |

#### Returns

[`Function1`](functions.md#function1)<`string` \| [`FetchRequest`](../interfaces/integrations_web.FetchRequest.md), [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>
