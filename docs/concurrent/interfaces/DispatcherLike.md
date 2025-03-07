[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [concurrent](../README.md) / DispatcherLike

# Interface: DispatcherLike\<T\>

A `QueueableLike` type that consumes enqueued events to
be dispatched from any execution constext.

## Extends

- [`QueueableLike`](../../utils/interfaces/QueueableLike.md)\<`T`\>.[`DisposableLike`](../../utils/interfaces/DisposableLike.md)

## Extended by

- [`ObserverLike`](ObserverLike.md)
- [`StreamLike`](StreamLike.md)
- [`CacheLike`](CacheLike.md)

## Type Parameters

• **T** = `unknown`

## Properties

### \[DispatcherLike\_state\]

> `readonly` **\[DispatcherLike\_state\]**: [`StoreLike`](../../events/interfaces/StoreLike.md)\<[`DispatcherState`](../type-aliases/DispatcherState.md)\>

## Methods

### \[DispatcherLike\_complete\]()

> **\[DispatcherLike\_complete\]**(): `void`

Communicates to the dispatcher that no more events will be enqueued.

#### Returns

`void`
