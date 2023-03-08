[Reactive-JS](../README.md) / [util](../modules/util.md) / QueueLike

# Interface: QueueLike<T\>

[util](../modules/util.md).QueueLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- **`QueueLike`**

  ↳ [`ContinuationLike`](scheduling.ContinuationLike.md)

  ↳ [`DispatcherLike`](scheduling.DispatcherLike.md)

  ↳ [`PauseableLike`](scheduling.PauseableLike.md)

## Table of contents

### Properties

- [[QueueLike\_count]](util.QueueLike.md#[queuelike_count])

### Methods

- [[QueueLike\_push]](util.QueueLike.md#[queuelike_push])

## Properties

### [QueueLike\_count]

• `Readonly` **[QueueLike\_count]**: `number`

The number of queued up items.

## Methods

### [QueueLike\_push]

▸ **[QueueLike_push]**(`req`): `void`

Push an item onto the queue

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | `T` |

#### Returns

`void`
