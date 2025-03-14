[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [utils](../README.md) / QueueableLike

# Interface: QueueableLike\<T\>

A `QueueableLike` type that consumes enqueued events to
be consumed.

## Extends

- [`SinkLike`](SinkLike.md)\<`T`\>

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

### \[QueueableLike\_isReady\]

> `readonly` **\[QueueableLike\_isReady\]**: `boolean`

## Methods

### \[QueueableLike\_addOnReadyListener\]()

> **\[QueueableLike\_addOnReadyListener\]**(`callback`): [`DisposableLike`](DisposableLike.md)

#### Parameters

##### callback

[`SideEffect1`](../../functions/type-aliases/SideEffect1.md)\<`void`\>

#### Returns

[`DisposableLike`](DisposableLike.md)
