[Reactive-JS](../README.md) / [utils](../modules/utils.md) / IndexedQueueLike

# Interface: IndexedQueueLike<T\>

[utils](../modules/utils.md).IndexedQueueLike

An interface for types that support buffering items with backpressure.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`QueueLike`](utils.QueueLike.md)<`T`\>

- [`MutableIndexedLike`](collections.MutableIndexedLike.md)<`T`\>

- [`StackLike`](utils.StackLike.md)<`T`\>

  ↳ **`IndexedQueueLike`**

## Table of contents

### Properties

- [[QueueLike\_head]](utils.IndexedQueueLike.md#[queuelike_head])
- [[QueueableLike\_backpressureStrategy]](utils.IndexedQueueLike.md#[queueablelike_backpressurestrategy])
- [[QueueableLike\_capacity]](utils.IndexedQueueLike.md#[queueablelike_capacity])
- [[StackLike\_head]](utils.IndexedQueueLike.md#[stacklike_head])

### Methods

- [[MutableKeyedLike\_set]](utils.IndexedQueueLike.md#[mutablekeyedlike_set])
- [[QueueLike\_dequeue]](utils.IndexedQueueLike.md#[queuelike_dequeue])
- [[QueueableLike\_enqueue]](utils.IndexedQueueLike.md#[queueablelike_enqueue])
- [[StackLike\_pop]](utils.IndexedQueueLike.md#[stacklike_pop])

## Properties

### [QueueLike\_head]

• `Readonly` **[QueueLike\_head]**: [`Optional`](../modules/functions.md#optional)<`T`\>

#### Inherited from

[QueueLike](utils.QueueLike.md).[[QueueLike_head]](utils.QueueLike.md#[queuelike_head])

___

### [QueueableLike\_backpressureStrategy]

• `Readonly` **[QueueableLike\_backpressureStrategy]**: ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"``

The back pressure strategy utilized by the queue when it is at capacity.

#### Inherited from

[StackLike](utils.StackLike.md).[[QueueableLike_backpressureStrategy]](utils.StackLike.md#[queueablelike_backpressurestrategy])

___

### [QueueableLike\_capacity]

• `Readonly` **[QueueableLike\_capacity]**: `number`

The number of items the queue is capable of efficiently buffering.

#### Inherited from

[StackLike](utils.StackLike.md).[[QueueableLike_capacity]](utils.StackLike.md#[queueablelike_capacity])

___

### [StackLike\_head]

• `Readonly` **[StackLike\_head]**: [`Optional`](../modules/functions.md#optional)<`T`\>

#### Inherited from

[StackLike](utils.StackLike.md).[[StackLike_head]](utils.StackLike.md#[stacklike_head])

## Methods

### [MutableKeyedLike\_set]

▸ **[MutableKeyedLike_set]**(`key`, `value`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `number` |
| `value` | `T` |

#### Returns

`T`

#### Inherited from

[MutableIndexedLike](collections.MutableIndexedLike.md).[[MutableKeyedLike_set]](collections.MutableIndexedLike.md#[mutablekeyedlike_set])

___

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

[StackLike](utils.StackLike.md).[[QueueableLike_enqueue]](utils.StackLike.md#[queueablelike_enqueue])

___

### [StackLike\_pop]

▸ **[StackLike_pop]**(): [`Optional`](../modules/functions.md#optional)<`T`\>

#### Returns

[`Optional`](../modules/functions.md#optional)<`T`\>

#### Inherited from

[StackLike](utils.StackLike.md).[[StackLike_pop]](utils.StackLike.md#[stacklike_pop])
