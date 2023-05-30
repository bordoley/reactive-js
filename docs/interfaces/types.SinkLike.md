[Reactive-JS](../README.md) / [types](../modules/types.md) / SinkLike

# Interface: SinkLike<T\>

[types](../modules/types.md).SinkLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`DisposableLike`](types.DisposableLike.md)

  ↳ **`SinkLike`**

  ↳↳ [`EventListenerLike`](types.EventListenerLike.md)

  ↳↳ [`ObserverLike`](types.ObserverLike.md)

## Table of contents

### Methods

- [[\_\_\_SinkLike\_notify]](types.SinkLike.md#[___sinklike_notify])

## Methods

### [\_\_\_SinkLike\_notify]

▸ **[___SinkLike_notify]**(`event`): `void`

Notifies the sink of the next notification produced by the source.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |

#### Returns

`void`
