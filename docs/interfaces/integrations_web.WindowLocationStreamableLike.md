[Reactive-JS](../README.md) / [integrations/web](../modules/integrations_web.md) / WindowLocationStreamableLike

# Interface: WindowLocationStreamableLike

[integrations/web](../modules/integrations_web.md).WindowLocationStreamableLike

## Hierarchy

- [`StreamableLike`](streaming.StreamableLike.md)<[`Updater`](../modules/functions.md#updater)<[`WindowLocationURI`](integrations_web.WindowLocationURI.md)\> \| [`WindowLocationURI`](integrations_web.WindowLocationURI.md), [`WindowLocationURI`](integrations_web.WindowLocationURI.md), [`WindowLocationStreamLike`](integrations_web.WindowLocationStreamLike.md)\>

  ↳ **`WindowLocationStreamableLike`**

## Table of contents

### Methods

- [[StreamableLike\_stream]](integrations_web.WindowLocationStreamableLike.md#[streamablelike_stream])
- [stream](integrations_web.WindowLocationStreamableLike.md#stream)

## Methods

### [StreamableLike\_stream]

▸ **[StreamableLike_stream]**(`scheduler`, `options?`): [`WindowLocationStreamLike`](integrations_web.WindowLocationStreamLike.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](scheduling.SchedulerLike.md) |
| `options?` | `Object` |
| `options.replay?` | `number` |

#### Returns

[`WindowLocationStreamLike`](integrations_web.WindowLocationStreamLike.md)

#### Inherited from

[StreamableLike](streaming.StreamableLike.md).[[StreamableLike_stream]](streaming.StreamableLike.md#[streamablelike_stream])

___

### stream

▸ **stream**(`this`, `scheduler`, `options?`): [`WindowLocationStreamLike`](integrations_web.WindowLocationStreamLike.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`WindowLocationStreamableLike`](integrations_web.WindowLocationStreamableLike.md) |
| `scheduler` | [`SchedulerLike`](scheduling.SchedulerLike.md) |
| `options?` | `Object` |
| `options.replay?` | `number` |

#### Returns

[`WindowLocationStreamLike`](integrations_web.WindowLocationStreamLike.md)
