[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / DispatcherLike

# Interface: DispatcherLike\<T\>

A `QueueableLike` type that consumes enqueued events to
be dispatched from any execution constext.

## Extends

- [`QueueableLike`](../../utils/interfaces/QueueableLike.md)\<`T`\>.[`DisposableLike`](../../utils/interfaces/DisposableLike.md)

## Extended by

- [`CacheLike`](../Cache/interfaces/CacheLike.md)
- [`ObserverLike`](ObserverLike.md)
- [`StreamLike`](StreamLike.md)

## Type Parameters

• **T** = `unknown`

## Properties

### \[DispatcherLike\_state\]

> `readonly` **\[DispatcherLike\_state\]**: [`StoreLike`](StoreLike.md)\<[`DispatcherState`](../type-aliases/DispatcherState.md)\>

## Methods

### \[DispatcherLike\_complete\]()

> **\[DispatcherLike\_complete\]**(): `void`

Communicates to the dispatcher that no more events will be enqueued.

#### Returns

`void`
