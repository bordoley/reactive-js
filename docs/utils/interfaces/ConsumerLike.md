[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [utils](../README.md) / ConsumerLike

# Interface: ConsumerLike\<T\>

A `ConsumerLike` type that consumes enqueued events to
be consumed.

## Extends

- [`SinkLike`](SinkLike.md)\<`T`\>

## Extended by

- [`CacheLike`](../../computations/Cache/interfaces/CacheLike.md)
- [`StreamLike`](../../computations/interfaces/StreamLike.md)
- [`ObserverLike`](ObserverLike.md)

## Type Parameters

• **T** = `unknown`

## Properties

### \[ConsumerLike\_backpressureStrategy\]

> `readonly` **\[ConsumerLike\_backpressureStrategy\]**: [`BackpressureStrategy`](../type-aliases/BackpressureStrategy.md)

The back pressure strategy utilized by the queue when it is at capacity.

***

### \[ConsumerLike\_capacity\]

> `readonly` **\[ConsumerLike\_capacity\]**: `number`

The number of items the queue is capable of efficiently buffering.

***

### \[ConsumerLike\_isReady\]

> `readonly` **\[ConsumerLike\_isReady\]**: `boolean`

## Methods

### \[ConsumerLike\_addOnReadyListener\]()

> **\[ConsumerLike\_addOnReadyListener\]**(`callback`): [`DisposableLike`](DisposableLike.md)

#### Parameters

##### callback

[`SideEffect1`](../../functions/type-aliases/SideEffect1.md)\<`void`\>

#### Returns

[`DisposableLike`](DisposableLike.md)
