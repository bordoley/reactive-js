[Reactive-JS](../README.md) / [utils](../modules/utils.md) / QueueableLike

# Interface: QueueableLike<T\>

[utils](../modules/utils.md).QueueableLike

An interface for types that support buffering items with backpressure.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Table of contents

### Properties

- [[QueueableLike\_backpressureStrategy]](utils.QueueableLike.md#[queueablelike_backpressurestrategy])
- [[QueueableLike\_capacity]](utils.QueueableLike.md#[queueablelike_capacity])

### Methods

- [[QueueableLike\_enqueue]](utils.QueueableLike.md#[queueablelike_enqueue])

## Properties

### [QueueableLike\_backpressureStrategy]

• `Readonly` **[QueueableLike\_backpressureStrategy]**: ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"``

The back pressure strategy utilized by the queue when it is at capacity.

___

### [QueueableLike\_capacity]

• `Readonly` **[QueueableLike\_capacity]**: `number`

The number of items the queue is capable of efficiently buffering.

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
