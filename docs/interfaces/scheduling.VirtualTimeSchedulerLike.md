[Reactive-JS](../README.md) / [scheduling](../modules/scheduling.md) / VirtualTimeSchedulerLike

# Interface: VirtualTimeSchedulerLike

[scheduling](../modules/scheduling.md).VirtualTimeSchedulerLike

A non-concurrent scheduler that simulates time but executes synchronously.

## Hierarchy

- [`SchedulerLike`](scheduling.SchedulerLike.md)

- [`DisposableLike`](util.DisposableLike.md)

  ↳ **`VirtualTimeSchedulerLike`**

## Table of contents

### Methods

- [[\_\_\_VirtualTimeSchedulerLike\_run]](scheduling.VirtualTimeSchedulerLike.md#[___virtualtimeschedulerlike_run])

## Methods

### [\_\_\_VirtualTimeSchedulerLike\_run]

▸ **[___VirtualTimeSchedulerLike_run]**(): `void`

Runs the scheduler synchronously until it has no more
enqueued continuations, at which time the scheduler will auto dispose.

#### Returns

`void`
