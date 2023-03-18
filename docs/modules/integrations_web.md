[Reactive-JS](../README.md) / integrations/web

# Module: integrations/web

## Table of contents

### Container Interfaces

- [WindowLocationStreamLike](../interfaces/integrations_web.WindowLocationStreamLike.md)

### Other Interfaces

- [WindowLocationURI](../interfaces/integrations_web.WindowLocationURI.md)

### Variables

- [windowLocation](integrations_web.md#windowlocation)

### Functions

- [addEventListener](integrations_web.md#addeventlistener)
- [createEventSource](integrations_web.md#createeventsource)

## Variables

### windowLocation

• `Const` **windowLocation**: [`StreamableLike`](../interfaces/streaming.StreamableLike.md)<[`Updater`](functions.md#updater)<[`WindowLocationURI`](../interfaces/integrations_web.WindowLocationURI.md)\> \| [`WindowLocationURI`](../interfaces/integrations_web.WindowLocationURI.md), [`WindowLocationURI`](../interfaces/integrations_web.WindowLocationURI.md), [`WindowLocationStreamLike`](../interfaces/integrations_web.WindowLocationStreamLike.md)\>

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
