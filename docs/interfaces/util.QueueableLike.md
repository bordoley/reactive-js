[Reactive-JS](../README.md) / [util](../modules/util.md) / QueueableLike

# Interface: QueueableLike<T\>

[util](../modules/util.md).QueueableLike

An interface for types that support buffering items with backpressure.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`BufferLike`](util.BufferLike.md)

  ↳ **`QueueableLike`**

  ↳↳ [`DispatcherLike`](rx.DispatcherLike.md)

## Table of contents

### Properties

- [[QueueableLike\_backpressureStrategy]](util.QueueableLike.md#[queueablelike_backpressurestrategy])

### Methods

- [[QueueableLike\_enqueue]](util.QueueableLike.md#[queueablelike_enqueue])

## Properties

### [QueueableLike\_backpressureStrategy]

• `Readonly` **[QueueableLike\_backpressureStrategy]**: ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"``

The back pressure strategy utilized by the queue when it is at capacity.

## Methods

### [QueueableLike\_enqueue]

▸ **[QueueableLike_enqueue]**(`req`): `boolean`

Enqueue an item onto the queue.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `req` | `T` | The value to enqueue. |

#### Returns

`boolean`

`true` if the queue has additional remaining capacity otherwise `false`.
