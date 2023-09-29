[Reactive-JS](../README.md) / [utils](../modules/utils.md) / QueueLike

# Interface: QueueLike<T\>

[utils](../modules/utils.md).QueueLike

An interface for types that support buffering items with backpressure.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`QueueableLike`](utils.QueueableLike.md)<`T`\>

  ↳ **`QueueLike`**

  ↳↳ [`QueueCollectionLike`](utils.QueueCollectionLike.md)

  ↳↳ [`IndexedQueueLike`](utils.IndexedQueueLike.md)

## Table of contents

### Properties

- [[QueueLike\_head]](utils.QueueLike.md#[queuelike_head])
- [[QueueableLike\_backpressureStrategy]](utils.QueueLike.md#[queueablelike_backpressurestrategy])
- [[QueueableLike\_capacity]](utils.QueueLike.md#[queueablelike_capacity])

### Methods

- [[QueueLike\_dequeue]](utils.QueueLike.md#[queuelike_dequeue])
- [[QueueableLike\_enqueue]](utils.QueueLike.md#[queueablelike_enqueue])

## Properties

### [QueueLike\_head]

• `Readonly` **[QueueLike\_head]**: [`Optional`](../modules/functions.md#optional)<`T`\>

___

### [QueueableLike\_backpressureStrategy]

• `Readonly` **[QueueableLike\_backpressureStrategy]**: ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"``

The back pressure strategy utilized by the queue when it is at capacity.

#### Inherited from

[QueueableLike](utils.QueueableLike.md).[[QueueableLike_backpressureStrategy]](utils.QueueableLike.md#[queueablelike_backpressurestrategy])

___

### [QueueableLike\_capacity]

• `Readonly` **[QueueableLike\_capacity]**: `number`

The number of items the queue is capable of efficiently buffering.

#### Inherited from

[QueueableLike](utils.QueueableLike.md).[[QueueableLike_capacity]](utils.QueueableLike.md#[queueablelike_capacity])

## Methods

### [QueueLike\_dequeue]

▸ **[QueueLike_dequeue]**(): [`Optional`](../modules/functions.md#optional)<`T`\>

#### Returns

[`Optional`](../modules/functions.md#optional)<`T`\>

___

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

#### Inherited from

[QueueableLike](utils.QueueableLike.md).[[QueueableLike_enqueue]](utils.QueueableLike.md#[queueablelike_enqueue])
