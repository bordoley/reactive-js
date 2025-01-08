[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [events](../README.md) / EventListenerLike

# Interface: EventListenerLike\<T\>

## Extends

- [`DisposableLike`](../../utils/interfaces/DisposableLike.md)

## Extended by

- [`SubjectLike`](../../concurrent/interfaces/SubjectLike.md)
- [`PublisherLike`](PublisherLike.md)

## Type Parameters

• **T** = `unknown`

## Methods

### \[EventListenerLike\_notify\]()

> **\[EventListenerLike\_notify\]**(`event`): `void`

Notifies the EventListener of the next notification produced by the source.

#### Parameters

##### event

`T`

#### Returns

`void`
