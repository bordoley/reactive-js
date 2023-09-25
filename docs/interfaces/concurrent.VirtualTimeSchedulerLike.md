[Reactive-JS](../README.md) / [concurrent](../modules/concurrent.md) / VirtualTimeSchedulerLike

# Interface: VirtualTimeSchedulerLike

[concurrent](../modules/concurrent.md).VirtualTimeSchedulerLike

A non-concurrent scheduler that simulates time but executes synchronously.

## Hierarchy

- [`SchedulerLike`](concurrent.SchedulerLike.md)

- [`DisposableLike`](utils.DisposableLike.md)

  ↳ **`VirtualTimeSchedulerLike`**

## Table of contents

### Methods

- [[VirtualTimeSchedulerLike\_run]](concurrent.VirtualTimeSchedulerLike.md#[virtualtimeschedulerlike_run])

## Methods

### [VirtualTimeSchedulerLike\_run]

▸ **[VirtualTimeSchedulerLike_run]**(): `void`

Runs the scheduler synchronously until it has no more
enqueued continuations, at which time the scheduler will auto dispose.

#### Returns

`void`
