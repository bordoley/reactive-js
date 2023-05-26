[Reactive-JS](../README.md) / [types](../modules/types.md) / QueueableLike

# Interface: QueueableLike<T\>

[types](../modules/types.md).QueueableLike

An interface for types that support buffering items with backpressure.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- **`QueueableLike`**

  ↳ [`DispatcherLike`](types.DispatcherLike.md)

## Table of contents

### Properties

- [[\_\_\_QueueableLike\_backpressureStrategy]](types.QueueableLike.md#[___queueablelike_backpressurestrategy])
- [[\_\_\_QueueableLike\_capacity]](types.QueueableLike.md#[___queueablelike_capacity])

### Methods

- [[\_\_\_QueueableLike\_enqueue]](types.QueueableLike.md#[___queueablelike_enqueue])

## Properties

### [\_\_\_QueueableLike\_backpressureStrategy]

• `Readonly` **[\_\_\_QueueableLike\_backpressureStrategy]**: ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"``

The back pressure strategy utilized by the queue when it is at capacity.

___

### [\_\_\_QueueableLike\_capacity]

• `Readonly` **[\_\_\_QueueableLike\_capacity]**: `number`

The number of items the queue is capable of efficiently buffering.

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
