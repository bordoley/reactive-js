[Reactive-JS](../README.md) / [utils](../modules/utils.md) / StackLike

# Interface: StackLike<T\>

[utils](../modules/utils.md).StackLike

An interface for types that support buffering items with backpressure.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`QueueableLike`](utils.QueueableLike.md)<`T`\>

  ↳ **`StackLike`**

  ↳↳ [`IndexedQueueLike`](utils.IndexedQueueLike.md)

## Table of contents

### Properties

- [[QueueableLike\_backpressureStrategy]](utils.StackLike.md#[queueablelike_backpressurestrategy])
- [[QueueableLike\_capacity]](utils.StackLike.md#[queueablelike_capacity])
- [[StackLike\_head]](utils.StackLike.md#[stacklike_head])

### Methods

- [[QueueableLike\_enqueue]](utils.StackLike.md#[queueablelike_enqueue])
- [[StackLike\_pop]](utils.StackLike.md#[stacklike_pop])

## Properties

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

___

### [StackLike\_head]

• `Readonly` **[StackLike\_head]**: [`Optional`](../modules/functions.md#optional)<`T`\>

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

#### Inherited from

[QueueableLike](utils.QueueableLike.md).[[QueueableLike_enqueue]](utils.QueueableLike.md#[queueablelike_enqueue])

___

### [StackLike\_pop]

▸ **[StackLike_pop]**(): [`Optional`](../modules/functions.md#optional)<`T`\>

#### Returns

[`Optional`](../modules/functions.md#optional)<`T`\>
