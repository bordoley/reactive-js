[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [utils](../README.md) / QueueLike

# Interface: QueueLike\<T\>

## Extends

- [`CollectionEnumeratorLike`](CollectionEnumeratorLike.md)\<`T`\>

## Extended by

- [`FlowControlQueueLike`](FlowControlQueueLike.md)

## Type Parameters

• **T** = `unknown`

## Properties

### \[QueueLike\_backpressureStrategy\]

> `readonly` **\[QueueLike\_backpressureStrategy\]**: [`BackpressureStrategy`](../type-aliases/BackpressureStrategy.md)

The back pressure strategy utilized by the queue when it is at capacity.

***

### \[QueueLike\_capacity\]

> `readonly` **\[QueueLike\_capacity\]**: `number`

The number of items the queue is capable of efficiently buffering.

## Methods

### \[QueueLike\_enqueue\]()

> **\[QueueLike\_enqueue\]**(`v`): `void`

#### Parameters

##### v

`T`

#### Returns

`void`
