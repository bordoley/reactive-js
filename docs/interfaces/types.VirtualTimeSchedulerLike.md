[Reactive-JS](../README.md) / [types](../modules/types.md) / VirtualTimeSchedulerLike

# Interface: VirtualTimeSchedulerLike

[types](../modules/types.md).VirtualTimeSchedulerLike

A non-concurrent scheduler that simulates time but executes synchronously.

## Hierarchy

- [`SchedulerLike`](types.SchedulerLike.md)

- [`DisposableLike`](types.DisposableLike.md)

  ↳ **`VirtualTimeSchedulerLike`**

## Table of contents

### Methods

- [[\_\_\_VirtualTimeSchedulerLike\_run]](types.VirtualTimeSchedulerLike.md#[___virtualtimeschedulerlike_run])

## Methods

### [\_\_\_VirtualTimeSchedulerLike\_run]

▸ **[___VirtualTimeSchedulerLike_run]**(): `void`

Runs the scheduler synchronously until it has no more
enqueued continuations, at which time the scheduler will auto dispose.

#### Returns

`void`
