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

- [[QueueableLike\_maxBufferSize]](util.QueueableLike.md#[queueablelike_maxbuffersize])

### Methods

- [[QueueableLike\_enqueue]](util.QueueableLike.md#[queueablelike_enqueue])

## Properties

### [QueueableLike\_maxBufferSize]

• `Readonly` **[QueueableLike\_maxBufferSize]**: `number`

## Methods

### [QueueableLike\_enqueue]

▸ **[QueueableLike_enqueue]**(`req`): `boolean`

Push an item onto the queue

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | `T` |

#### Returns

`boolean`
