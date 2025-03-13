[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [utils](../README.md) / QueueableLike

# Interface: QueueableLike\<T\>

A `QueueableLike` type that consumes enqueued events to
be consumed.

## Extended by

- [`CacheLike`](../../computations/Cache/interfaces/CacheLike.md)
- [`StreamLike`](../../computations/interfaces/StreamLike.md)
- [`QueueLike`](QueueLike.md)
- [`ObserverLike`](ObserverLike.md)

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

***

### \[QueueableLike\_isCompleted\]

> `readonly` **\[QueueableLike\_isCompleted\]**: `boolean`

***

### \[QueueableLike\_isReady\]

> `readonly` **\[QueueableLike\_isReady\]**: `boolean`

***

### \[QueueableLike\_onReady\]

> `readonly` **\[QueueableLike\_onReady\]**: [`EventSourceLike`](../../computations/interfaces/EventSourceLike.md)\<`void`\>

## Methods

### \[QueueableLike\_complete\]()

> **\[QueueableLike\_complete\]**(): `void`

Communicates to the queue that no more events will be enqueued.

#### Returns

`void`

***

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
