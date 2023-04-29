[Reactive-JS](../README.md) / [util](../modules/util.md) / VirtualTimeSchedulerLike

# Interface: VirtualTimeSchedulerLike

[util](../modules/util.md).VirtualTimeSchedulerLike

A non-concurrent scheduler that simulates time but executes synchronously.

## Hierarchy

- [`SchedulerLike`](util.SchedulerLike.md)

- [`DisposableLike`](util.DisposableLike.md)

  ↳ **`VirtualTimeSchedulerLike`**

## Table of contents

### Methods

- [[\_\_\_VirtualTimeSchedulerLike\_run]](util.VirtualTimeSchedulerLike.md#[___virtualtimeschedulerlike_run])

## Methods

### [\_\_\_VirtualTimeSchedulerLike\_run]

▸ **[___VirtualTimeSchedulerLike_run]**(): `void`

Runs the scheduler synchronously until it has no more
enqueued continuations, at which time the scheduler will auto dispose.

#### Returns

`void`
