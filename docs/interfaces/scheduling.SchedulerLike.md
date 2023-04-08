[Reactive-JS](../README.md) / [scheduling](../modules/scheduling.md) / SchedulerLike

# Interface: SchedulerLike

[scheduling](../modules/scheduling.md).SchedulerLike

Schedulers are the core unit of concurrency, orchestration and
cooperative multi-tasking.

## Hierarchy

- [`DisposableLike`](util.DisposableLike.md)

  ↳ **`SchedulerLike`**

  ↳↳ [`ObserverLike`](rx.ObserverLike.md)

  ↳↳ [`PauseableSchedulerLike`](scheduling.PauseableSchedulerLike.md)

  ↳↳ [`PrioritySchedulerLike`](scheduling.PrioritySchedulerLike.md)

  ↳↳ [`VirtualTimeSchedulerLike`](scheduling.VirtualTimeSchedulerLike.md)

## Table of contents

### Properties

- [[SchedulerLike\_inContinuation]](scheduling.SchedulerLike.md#[schedulerlike_incontinuation])
- [[SchedulerLike\_maxYieldInterval]](scheduling.SchedulerLike.md#[schedulerlike_maxyieldinterval])
- [[SchedulerLike\_now]](scheduling.SchedulerLike.md#[schedulerlike_now])
- [[SchedulerLike\_shouldYield]](scheduling.SchedulerLike.md#[schedulerlike_shouldyield])

### Methods

- [[SchedulerLike\_requestYield]](scheduling.SchedulerLike.md#[schedulerlike_requestyield])
- [[SchedulerLike\_schedule]](scheduling.SchedulerLike.md#[schedulerlike_schedule])

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

▸ **[SchedulerLike_schedule]**(`continuation`, `options?`): [`DisposableLike`](util.DisposableLike.md)

Schedule a continuation on the Scheduler.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `continuation` | [`SideEffect1`](../modules/functions.md#sideeffect1)<[`ContinuationContextLike`](scheduling.ContinuationContextLike.md)\> | The continuation to run on the scheduler. |
| `options?` | `Object` |  |
| `options.delay?` | `number` | The amount of time in ms to delay execution of the continuation. |

#### Returns

[`DisposableLike`](util.DisposableLike.md)
