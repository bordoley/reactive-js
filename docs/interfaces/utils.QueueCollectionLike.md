[Reactive-JS](../README.md) / [utils](../modules/utils.md) / QueueCollectionLike

# Interface: QueueCollectionLike<T\>

[utils](../modules/utils.md).QueueCollectionLike

An interface for types that support buffering items with backpressure.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`QueueLike`](utils.QueueLike.md)<`T`\>

- [`CollectionLike`](collections.CollectionLike.md)<`T`\>

  ↳ **`QueueCollectionLike`**

## Table of contents

### Properties

- [[CollectionLike\_count]](utils.QueueCollectionLike.md#[collectionlike_count])
- [[QueueLike\_head]](utils.QueueCollectionLike.md#[queuelike_head])
- [[QueueableLike\_backpressureStrategy]](utils.QueueCollectionLike.md#[queueablelike_backpressurestrategy])
- [[QueueableLike\_capacity]](utils.QueueCollectionLike.md#[queueablelike_capacity])

### Methods

- [[QueueLike\_dequeue]](utils.QueueCollectionLike.md#[queuelike_dequeue])
- [[QueueableLike\_enqueue]](utils.QueueCollectionLike.md#[queueablelike_enqueue])

## Properties

### [CollectionLike\_count]

• `Readonly` **[CollectionLike\_count]**: `number`

#### Inherited from

[CollectionLike](collections.CollectionLike.md).[[CollectionLike_count]](collections.CollectionLike.md#[collectionlike_count])

___

### [QueueLike\_head]

• `Readonly` **[QueueLike\_head]**: [`Optional`](../modules/functions.md#optional)<`T`\>

#### Inherited from

[QueueLike](utils.QueueLike.md).[[QueueLike_head]](utils.QueueLike.md#[queuelike_head])

___

### [QueueableLike\_backpressureStrategy]

• `Readonly` **[QueueableLike\_backpressureStrategy]**: ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"``

The back pressure strategy utilized by the queue when it is at capacity.

#### Inherited from

[QueueLike](utils.QueueLike.md).[[QueueableLike_backpressureStrategy]](utils.QueueLike.md#[queueablelike_backpressurestrategy])

___

### [QueueableLike\_capacity]

• `Readonly` **[QueueableLike\_capacity]**: `number`

The number of items the queue is capable of efficiently buffering.

#### Inherited from

[QueueLike](utils.QueueLike.md).[[QueueableLike_capacity]](utils.QueueLike.md#[queueablelike_capacity])

## Methods

### [QueueLike\_dequeue]

▸ **[QueueLike_dequeue]**(): [`Optional`](../modules/functions.md#optional)<`T`\>

#### Returns

[`Optional`](../modules/functions.md#optional)<`T`\>

#### Inherited from

[QueueLike](utils.QueueLike.md).[[QueueLike_dequeue]](utils.QueueLike.md#[queuelike_dequeue])

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

[QueueLike](utils.QueueLike.md).[[QueueableLike_enqueue]](utils.QueueLike.md#[queueablelike_enqueue])
