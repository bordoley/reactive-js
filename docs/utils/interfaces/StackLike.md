[**Reactive-JS**](../../README.md) • **Docs**

***

[Reactive-JS](../../README.md) / [utils](../README.md) / StackLike

# Interface: StackLike\<T\>

## Extends

- [`QueueableLike`](QueueableLike.md)\<`T`\>

## Extended by

- [`IndexedQueueLike`](IndexedQueueLike.md)

## Type Parameters

• **T** = `unknown`

## Properties

### \[QueueableLike\_backpressureStrategy\]

> `readonly` **\[QueueableLike\_backpressureStrategy\]**: [`BackpressureStrategy`](../type-aliases/BackpressureStrategy.md)

The back pressure strategy utilized by the queue when it is at capacity.

#### Inherited from

[`QueueableLike`](QueueableLike.md).[`[QueueableLike_backpressureStrategy]`](QueueableLike.md#%5Bqueueablelike_backpressurestrategy%5D)

***

### \[QueueableLike\_capacity\]

> `readonly` **\[QueueableLike\_capacity\]**: `number`

The number of items the queue is capable of efficiently buffering.

#### Inherited from

[`QueueableLike`](QueueableLike.md).[`[QueueableLike_capacity]`](QueueableLike.md#%5Bqueueablelike_capacity%5D)

***

### \[StackLike\_head\]

> `readonly` **\[StackLike\_head\]**: [`Optional`](../../functions/type-aliases/Optional.md)\<`T`\>

## Methods

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

[`QueueableLike`](QueueableLike.md).[`[QueueableLike_enqueue]`](QueueableLike.md#%5Bqueueablelike_enqueue%5D)

***

### \[StackLike\_pop\]()

> **\[StackLike\_pop\]**(): [`Optional`](../../functions/type-aliases/Optional.md)\<`T`\>

#### Returns

[`Optional`](../../functions/type-aliases/Optional.md)\<`T`\>
