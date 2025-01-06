[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [concurrent](../README.md) / VirtualTimeSchedulerLike

# Interface: VirtualTimeSchedulerLike

A non-concurrent scheduler that simulates time but executes synchronously.

## Extends

- [`SchedulerLike`](SchedulerLike.md).[`DisposableLike`](../../utils/interfaces/DisposableLike.md)

## Methods

### \[VirtualTimeSchedulerLike\_run\]()

> **\[VirtualTimeSchedulerLike\_run\]**(): `void`

Runs the scheduler synchronously until it has no more
enqueued continuations, at which time the scheduler will auto dispose.

#### Returns

`void`
