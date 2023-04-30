[Reactive-JS](../README.md) / [util](../modules/util.md) / DispatcherLike

# Interface: DispatcherLike<T, TEvents\>

[util](../modules/util.md).DispatcherLike

A `QueueableLike` type that consumes enqueued events to
be dispatched from any execution constext.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |
| `TEvents` | extends `Object` = { `type`: ``"wait"`` \| ``"drain"`` \| ``"complete"``  } |

## Hierarchy

- [`QueueableLike`](util.QueueableLike.md)<`T`\>

- [`EventSourceLike`](util.EventSourceLike.md)<`TEvents`\>

  ↳ **`DispatcherLike`**

  ↳↳ [`ObserverLike`](rx.ObserverLike.md)

  ↳↳ [`StreamLike`](streaming.StreamLike.md)

## Table of contents

### Methods

- [[\_\_\_DispatcherLike\_complete]](util.DispatcherLike.md#[___dispatcherlike_complete])

## Methods

### [\_\_\_DispatcherLike\_complete]

▸ **[___DispatcherLike_complete]**(): `void`

Communicates to the dispatcher that no more events will be enqueued.

#### Returns

`void`
