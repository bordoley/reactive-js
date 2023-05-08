[Reactive-JS](../README.md) / [core](../modules/core.md) / QueueableLike

# Interface: QueueableLike<T\>

[core](../modules/core.md).QueueableLike

An interface for types that support buffering items with backpressure.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`BufferLike`](core.BufferLike.md)

  ↳ **`QueueableLike`**

  ↳↳ [`DispatcherLike`](core.DispatcherLike.md)

## Table of contents

### Properties

- [[\_\_\_QueueableLike\_backpressureStrategy]](core.QueueableLike.md#[___queueablelike_backpressurestrategy])

### Methods

- [[\_\_\_QueueableLike\_enqueue]](core.QueueableLike.md#[___queueablelike_enqueue])

## Properties

### [\_\_\_QueueableLike\_backpressureStrategy]

• `Readonly` **[\_\_\_QueueableLike\_backpressureStrategy]**: ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"``

The back pressure strategy utilized by the queue when it is at capacity.

## Methods

### [\_\_\_QueueableLike\_enqueue]

▸ **[___QueueableLike_enqueue]**(`req`): `boolean`

Enqueue an item onto the queue.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `req` | `T` | The value to enqueue. |

#### Returns

`boolean`

`true` if the queue has additional remaining capacity otherwise `false`.
