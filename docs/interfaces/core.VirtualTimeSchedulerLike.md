[Reactive-JS](../README.md) / [core](../modules/core.md) / VirtualTimeSchedulerLike

# Interface: VirtualTimeSchedulerLike

[core](../modules/core.md).VirtualTimeSchedulerLike

A non-concurrent scheduler that simulates time but executes synchronously.

## Hierarchy

- [`SchedulerLike`](core.SchedulerLike.md)

- [`DisposableLike`](core.DisposableLike.md)

  ↳ **`VirtualTimeSchedulerLike`**

## Table of contents

### Methods

- [[\_\_\_VirtualTimeSchedulerLike\_run]](core.VirtualTimeSchedulerLike.md#[___virtualtimeschedulerlike_run])

## Methods

### [\_\_\_VirtualTimeSchedulerLike\_run]

▸ **[___VirtualTimeSchedulerLike_run]**(): `void`

Runs the scheduler synchronously until it has no more
enqueued continuations, at which time the scheduler will auto dispose.

#### Returns

`void`
