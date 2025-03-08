[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [utils](../README.md) / DispatcherLike

# Interface: DispatcherLike\<T\>

A `QueueableLike` type that consumes enqueued events to
be dispatched from any execution constext.

## Extends

- [`QueueableLike`](QueueableLike.md)\<`T`\>.[`DisposableLike`](DisposableLike.md)

## Extended by

- [`CacheLike`](../../computations/Cache/interfaces/CacheLike.md)
- [`StreamLike`](../../computations/interfaces/StreamLike.md)
- [`ObserverLike`](ObserverLike.md)

## Type Parameters

• **T** = `unknown`

## Properties

### \[DispatcherLike\_state\]

> `readonly` **\[DispatcherLike\_state\]**: [`StoreLike`](../../computations/interfaces/StoreLike.md)\<[`DispatcherState`](../type-aliases/DispatcherState.md)\>

## Methods

### \[DispatcherLike\_complete\]()

> **\[DispatcherLike\_complete\]**(): `void`

Communicates to the dispatcher that no more events will be enqueued.

#### Returns

`void`
