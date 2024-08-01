[**Reactive-JS**](../../README.md) • **Docs**

***

[Reactive-JS](../../README.md) / [utils](../README.md) / IndexedQueueLike

# Interface: IndexedQueueLike\<T\>

## Extends

- [`QueueLike`](QueueLike.md)\<`T`\>.[`StackLike`](StackLike.md)\<`T`\>

## Type Parameters

• **T** = `unknown`

## Properties

### \[QueueLike\_count\]

> `readonly` **\[QueueLike\_count\]**: `number`

#### Inherited from

[`QueueLike`](QueueLike.md).[`[QueueLike_count]`](QueueLike.md#%5Bqueuelike_count%5D)

***

### \[QueueLike\_head\]

> `readonly` **\[QueueLike\_head\]**: [`Optional`](../../functions/type-aliases/Optional.md)\<`T`\>

#### Inherited from

[`QueueLike`](QueueLike.md).[`[QueueLike_head]`](QueueLike.md#%5Bqueuelike_head%5D)

***

### \[QueueableLike\_backpressureStrategy\]

> `readonly` **\[QueueableLike\_backpressureStrategy\]**: [`BackpressureStrategy`](../type-aliases/BackpressureStrategy.md)

The back pressure strategy utilized by the queue when it is at capacity.

#### Inherited from

[`StackLike`](StackLike.md).[`[QueueableLike_backpressureStrategy]`](StackLike.md#%5Bqueueablelike_backpressurestrategy%5D)

***

### \[QueueableLike\_capacity\]

> `readonly` **\[QueueableLike\_capacity\]**: `number`

The number of items the queue is capable of efficiently buffering.

#### Inherited from

[`StackLike`](StackLike.md).[`[QueueableLike_capacity]`](StackLike.md#%5Bqueueablelike_capacity%5D)

***

### \[StackLike\_head\]

> `readonly` **\[StackLike\_head\]**: [`Optional`](../../functions/type-aliases/Optional.md)\<`T`\>

#### Inherited from

[`StackLike`](StackLike.md).[`[StackLike_head]`](StackLike.md#%5Bstacklike_head%5D)

## Methods

### \[IndexedQueueLike\_get\]()

> **\[IndexedQueueLike\_get\]**(`index`): `T`

#### Parameters

• **index**: `number`

#### Returns

`T`

***

### \[IndexedQueueLike\_set\]()

> **\[IndexedQueueLike\_set\]**(`key`, `value`): `T`

#### Parameters

• **key**: `number`

• **value**: `T`

#### Returns

`T`

***

### \[QueueLike\_dequeue\]()

> **\[QueueLike\_dequeue\]**(): [`Optional`](../../functions/type-aliases/Optional.md)\<`T`\>

#### Returns

[`Optional`](../../functions/type-aliases/Optional.md)\<`T`\>

#### Inherited from

[`QueueLike`](QueueLike.md).[`[QueueLike_dequeue]`](QueueLike.md#%5Bqueuelike_dequeue%5D)

***

### \[QueueableLike\_enqueue\]()

> **\[QueueableLike\_enqueue\]**(`req`): `boolean`

Enqueue an item onto the queue.

#### Parameters

• **req**: `T`

The value to enqueue.

#### Returns

`boolean`

`true` if the queue has additional remaining capacity otherwise `false`.

#### Inherited from

[`StackLike`](StackLike.md).[`[QueueableLike_enqueue]`](StackLike.md#%5Bqueueablelike_enqueue%5D)

***

### \[StackLike\_pop\]()

> **\[StackLike\_pop\]**(): [`Optional`](../../functions/type-aliases/Optional.md)\<`T`\>

#### Returns

[`Optional`](../../functions/type-aliases/Optional.md)\<`T`\>

#### Inherited from

[`StackLike`](StackLike.md).[`[StackLike_pop]`](StackLike.md#%5Bstacklike_pop%5D)
