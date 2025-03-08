[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [utils](../README.md) / QueueableLike

# Interface: QueueableLike\<T\>

An interface for types that support buffering items with backpressure.

## Extended by

- [`QueueLike`](QueueLike.md)
- [`DispatcherLike`](DispatcherLike.md)

## Type Parameters

• **T** = `unknown`

## Properties

### \[QueueableLike\_backpressureStrategy\]

> `readonly` **\[QueueableLike\_backpressureStrategy\]**: [`BackpressureStrategy`](../type-aliases/BackpressureStrategy.md)

The back pressure strategy utilized by the queue when it is at capacity.

***

### \[QueueableLike\_capacity\]

> `readonly` **\[QueueableLike\_capacity\]**: `number`

The number of items the queue is capable of efficiently buffering.

## Methods

### \[QueueableLike\_enqueue\]()

> **\[QueueableLike\_enqueue\]**(`req`): `boolean`

Enqueue an item onto the queue.

#### Parameters

##### req

`T`

The value to enqueue.

#### Returns

`boolean`

`true` if the queue has additional remaining capacity otherwise `false`.
