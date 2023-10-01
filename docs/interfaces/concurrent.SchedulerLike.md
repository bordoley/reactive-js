[Reactive-JS](../README.md) / [concurrent](../modules/concurrent.md) / SchedulerLike

# Interface: SchedulerLike

[concurrent](../modules/concurrent.md).SchedulerLike

Schedulers are the core unit of concurrency, orchestration and
cooperative multi-tasking.

## Hierarchy

- **`SchedulerLike`**

  ↳ [`VirtualTimeSchedulerLike`](concurrent.VirtualTimeSchedulerLike.md)

  ↳ [`PauseableSchedulerLike`](concurrent.PauseableSchedulerLike.md)

  ↳ [`ContinuationSchedulerLike`](concurrent.ContinuationSchedulerLike.md)

  ↳ [`ObserverLike`](concurrent.ObserverLike.md)

## Table of contents

### Properties

- [[SchedulerLike\_inContinuation]](concurrent.SchedulerLike.md#[schedulerlike_incontinuation])
- [[SchedulerLike\_maxYieldInterval]](concurrent.SchedulerLike.md#[schedulerlike_maxyieldinterval])
- [[SchedulerLike\_now]](concurrent.SchedulerLike.md#[schedulerlike_now])
- [[SchedulerLike\_shouldYield]](concurrent.SchedulerLike.md#[schedulerlike_shouldyield])

### Methods

- [[SchedulerLike\_requestYield]](concurrent.SchedulerLike.md#[schedulerlike_requestyield])
- [[SchedulerLike\_schedule]](concurrent.SchedulerLike.md#[schedulerlike_schedule])
- [[SchedulerLike\_yield]](concurrent.SchedulerLike.md#[schedulerlike_yield])

## Properties

### [SchedulerLike\_inContinuation]

• `Readonly` **[SchedulerLike\_inContinuation]**: `boolean`

Boolean flag indicating the scheduler is currently
running a continuation.

___

### [SchedulerLike\_maxYieldInterval]

• `Readonly` **[SchedulerLike\_maxYieldInterval]**: `number`

The max number of milliseconds the scheduler will run
before yielding control back to the underlying system scheduler.

___

### [SchedulerLike\_now]

• `Readonly` **[SchedulerLike\_now]**: `number`

The current time in milliseconds.

___

### [SchedulerLike\_shouldYield]

• `Readonly` **[SchedulerLike\_shouldYield]**: `boolean`

Boolean flag indicating whether a running continuation
should yield control back to the scheduler.

## Methods

### [SchedulerLike\_requestYield]

▸ **[SchedulerLike_requestYield]**(): `void`

Request the scheduler to yield the current continuation.

#### Returns

`void`

___

### [SchedulerLike\_schedule]

▸ **[SchedulerLike_schedule]**(`continuation`, `options?`): [`DisposableLike`](utils.DisposableLike.md)

Schedule a continuation on the Scheduler.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `continuation` | [`SideEffect1`](../modules/functions.md#sideeffect1)<[`SchedulerLike`](concurrent.SchedulerLike.md)\> | The continuation to run on the scheduler. |
| `options?` | `Object` |  |
| `options.delay?` | `number` | The amount of time in ms to delay execution of the continuation. |

#### Returns

[`DisposableLike`](utils.DisposableLike.md)

___

### [SchedulerLike\_yield]

▸ **[SchedulerLike_yield]**(`delay?`): `void`

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
