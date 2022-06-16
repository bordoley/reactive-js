[Reactive-JS](../README.md) / [web](../modules/web.md) / WindowLocationStreamableLike

# Interface: WindowLocationStreamableLike

[web](../modules/web.md).WindowLocationStreamableLike

## Hierarchy

- [`StreamableLike`](streamable.StreamableLike.md)<[`Updater`](../modules/functions.md#updater)<[`WindowLocationURI`](web.WindowLocationURI.md)\> \| [`WindowLocationURI`](web.WindowLocationURI.md), [`WindowLocationURI`](web.WindowLocationURI.md)\>

  ↳ **`WindowLocationStreamableLike`**

## Table of contents

### Methods

- [stream](web.WindowLocationStreamableLike.md#stream)

## Methods

### stream

▸ **stream**(`this`, `scheduler`, `options?`): [`WindowLocationStreamLike`](web.WindowLocationStreamLike.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`WindowLocationStreamableLike`](web.WindowLocationStreamableLike.md) |
| `scheduler` | [`SchedulerLike`](scheduler.SchedulerLike.md) |
| `options?` | `Object` |
| `options.replay?` | `number` |

#### Returns

[`WindowLocationStreamLike`](web.WindowLocationStreamLike.md)

#### Overrides

[StreamableLike](streamable.StreamableLike.md).[stream](streamable.StreamableLike.md#stream)
