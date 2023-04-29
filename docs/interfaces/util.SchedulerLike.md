[Reactive-JS](../README.md) / [util](../modules/util.md) / SchedulerLike

# Interface: SchedulerLike

[util](../modules/util.md).SchedulerLike

Schedulers are the core unit of concurrency, orchestration and
cooperative multi-tasking.

## Hierarchy

- **`SchedulerLike`**

  ↳ [`ObserverLike`](rx.ObserverLike.md)

  ↳ [`PauseableSchedulerLike`](util.PauseableSchedulerLike.md)

  ↳ [`VirtualTimeSchedulerLike`](util.VirtualTimeSchedulerLike.md)

## Table of contents

### Properties

- [[\_\_\_SchedulerLike\_inContinuation]](util.SchedulerLike.md#[___schedulerlike_incontinuation])
- [[\_\_\_SchedulerLike\_maxYieldInterval]](util.SchedulerLike.md#[___schedulerlike_maxyieldinterval])
- [[\_\_\_SchedulerLike\_now]](util.SchedulerLike.md#[___schedulerlike_now])
- [[\_\_\_SchedulerLike\_shouldYield]](util.SchedulerLike.md#[___schedulerlike_shouldyield])

### Methods

- [[\_\_\_SchedulerLike\_requestYield]](util.SchedulerLike.md#[___schedulerlike_requestyield])
- [[\_\_\_SchedulerLike\_schedule]](util.SchedulerLike.md#[___schedulerlike_schedule])
- [[\_\_\_SchedulerLike\_yield]](util.SchedulerLike.md#[___schedulerlike_yield])

## Properties

### [\_\_\_SchedulerLike\_inContinuation]

• `Readonly` **[\_\_\_SchedulerLike\_inContinuation]**: `boolean`

Boolean flag indicating the scheduler is currently
running a continuation.

___

### [\_\_\_SchedulerLike\_maxYieldInterval]

• `Readonly` **[\_\_\_SchedulerLike\_maxYieldInterval]**: `number`

The max number of milliseconds the scheduler will run
before yielding control back to the underlying system scheduler.

___

### [\_\_\_SchedulerLike\_now]

• `Readonly` **[\_\_\_SchedulerLike\_now]**: `number`

The current time in milliseconds.

___

### [\_\_\_SchedulerLike\_shouldYield]

• `Readonly` **[\_\_\_SchedulerLike\_shouldYield]**: `boolean`

Boolean flag indicating whether a running continuation
should yield control back to the scheduler.

## Methods

### [\_\_\_SchedulerLike\_requestYield]

▸ **[___SchedulerLike_requestYield]**(): `void`

Request the scheduler to yield the current continuation.

#### Returns

`void`

___

### [\_\_\_SchedulerLike\_schedule]

▸ **[___SchedulerLike_schedule]**(`continuation`, `options?`): [`DisposableLike`](util.DisposableLike.md)

Schedule a continuation on the Scheduler.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `continuation` | [`SideEffect1`](../modules/functions.md#sideeffect1)<[`SchedulerLike`](util.SchedulerLike.md)\> | The continuation to run on the scheduler. |
| `options?` | `Object` |  |
| `options.delay?` | `number` | The amount of time in ms to delay execution of the continuation. |

#### Returns

[`DisposableLike`](util.DisposableLike.md)

___

### [\_\_\_SchedulerLike\_yield]

▸ **[___SchedulerLike_yield]**(`delay?`): `void`

Yields control back to the scheduler.

If no delay is specified, a scheduler may either allow
the continuation to continue to execute, or it will throw
an internal exception that must not be caught by the continuation
which the scheduler will use to reschedule the continuation for
a future time.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `delay?` | `number` | The amount of delay in ms the scheduler should delay before resuming execution of the continuation. |

#### Returns

`void`
