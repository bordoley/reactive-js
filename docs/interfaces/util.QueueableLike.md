[Reactive-JS](../README.md) / [util](../modules/util.md) / QueueableLike

# Interface: QueueableLike<T\>

[util](../modules/util.md).QueueableLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- **`QueueableLike`**

  ↳ [`DispatcherLike`](scheduling.DispatcherLike.md)

## Table of contents

### Properties

- [[QueueableLike\_count]](util.QueueableLike.md#[queueablelike_count])

### Methods

- [[QueueableLike\_push]](util.QueueableLike.md#[queueablelike_push])

## Properties

### [QueueableLike\_count]

• `Readonly` **[QueueableLike\_count]**: `number`

The number of queued up items.

## Methods

### [QueueableLike\_push]

▸ **[QueueableLike_push]**(`req`): `void`

Push an item onto the queue

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | `T` |

#### Returns

`void`
