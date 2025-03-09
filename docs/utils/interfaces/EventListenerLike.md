[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [utils](../README.md) / EventListenerLike

# Interface: EventListenerLike\<T\>

## Extends

- [`DisposableLike`](DisposableLike.md)

## Extended by

- [`PublisherLike`](../../computations/interfaces/PublisherLike.md)
- [`WritableStoreLike`](../../computations/interfaces/WritableStoreLike.md)
- [`SubjectLike`](../../computations/interfaces/SubjectLike.md)

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
