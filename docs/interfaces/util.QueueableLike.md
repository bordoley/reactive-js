[Reactive-JS](../README.md) / [util](../modules/util.md) / QueueableLike

# Interface: QueueableLike<T\>

[util](../modules/util.md).QueueableLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- **`QueueableLike`**

  ↳ [`DispatcherLike`](rx.DispatcherLike.md)

## Table of contents

### Properties

- [[QueueableLike\_capacity]](util.QueueableLike.md#[queueablelike_capacity])

### Methods

- [[QueueableLike\_enqueue]](util.QueueableLike.md#[queueablelike_enqueue])

## Properties

### [QueueableLike\_capacity]

• `Readonly` **[QueueableLike\_capacity]**: `number`

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

`true` if the queue has additional capacity otherwise false.
