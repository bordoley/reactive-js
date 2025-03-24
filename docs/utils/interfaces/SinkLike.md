[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [utils](../README.md) / SinkLike

# Interface: SinkLike\<T\>

## Extends

- [`DisposableLike`](DisposableLike.md)

## Extended by

- [`PublisherLike`](../../computations/interfaces/PublisherLike.md)
- [`ConsumerLike`](ConsumerLike.md)

## Type Parameters

• **T** = `unknown`

## Properties

### \[SinkLike\_isCompleted\]

> `readonly` **\[SinkLike\_isCompleted\]**: `boolean`

## Methods

### \[EventListenerLike\_notify\]()

> **\[EventListenerLike\_notify\]**(`event`): `void`

Notifies the EventSink of the next notification produced by the source.

#### Parameters

##### event

`T`

#### Returns

`void`

***

### \[SinkLike\_complete\]()

> **\[SinkLike\_complete\]**(): `void`

#### Returns

`void`
