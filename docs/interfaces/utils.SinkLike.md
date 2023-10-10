[Reactive-JS](../README.md) / [utils](../modules/utils.md) / SinkLike

# Interface: SinkLike<T\>

[utils](../modules/utils.md).SinkLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`DisposableLike`](utils.DisposableLike.md)

  ↳ **`SinkLike`**

  ↳↳ [`ObserverLike`](concurrent.ObserverLike.md)

  ↳↳ [`EventListenerLike`](events.EventListenerLike.md)

## Table of contents

### Methods

- [[SinkLike\_notify]](utils.SinkLike.md#[sinklike_notify])

## Methods

### [SinkLike\_notify]

▸ **[SinkLike_notify]**(`event`): `void`

Notifies the sink of the next notification produced by the source.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |

#### Returns

`void`
