[Reactive-JS](../README.md) / [concurrent](../modules/concurrent.md) / ContinuationSchedulerLike

# Interface: ContinuationSchedulerLike

[concurrent](../modules/concurrent.md).ContinuationSchedulerLike

Schedulers are the core unit of concurrency, orchestration and
cooperative multi-tasking.

## Hierarchy

- [`SchedulerLike`](concurrent.SchedulerLike.md)

  ↳ **`ContinuationSchedulerLike`**

## Table of contents

### Properties

- [[SchedulerLike\_inContinuation]](concurrent.ContinuationSchedulerLike.md#[schedulerlike_incontinuation])
- [[SchedulerLike\_maxYieldInterval]](concurrent.ContinuationSchedulerLike.md#[schedulerlike_maxyieldinterval])
- [[SchedulerLike\_now]](concurrent.ContinuationSchedulerLike.md#[schedulerlike_now])
- [[SchedulerLike\_shouldYield]](concurrent.ContinuationSchedulerLike.md#[schedulerlike_shouldyield])

### Methods

- [[ContinuationSchedulerLike\_schedule]](concurrent.ContinuationSchedulerLike.md#[continuationschedulerlike_schedule])
- [[SchedulerLike\_requestYield]](concurrent.ContinuationSchedulerLike.md#[schedulerlike_requestyield])
- [[SchedulerLike\_schedule]](concurrent.ContinuationSchedulerLike.md#[schedulerlike_schedule])
- [[SchedulerLike\_yield]](concurrent.ContinuationSchedulerLike.md#[schedulerlike_yield])

## Properties

### [SchedulerLike\_inContinuation]

• `Readonly` **[SchedulerLike\_inContinuation]**: `boolean`

Boolean flag indicating the scheduler is currently
running a continuation.

#### Inherited from

[SchedulerLike](concurrent.SchedulerLike.md).[[SchedulerLike_inContinuation]](concurrent.SchedulerLike.md#[schedulerlike_incontinuation])

___

### [SchedulerLike\_maxYieldInterval]

• `Readonly` **[SchedulerLike\_maxYieldInterval]**: `number`

The max number of milliseconds the scheduler will run
before yielding control back to the underlying system scheduler.

#### Inherited from

[SchedulerLike](concurrent.SchedulerLike.md).[[SchedulerLike_maxYieldInterval]](concurrent.SchedulerLike.md#[schedulerlike_maxyieldinterval])

___

### [SchedulerLike\_now]

• `Readonly` **[SchedulerLike\_now]**: `number`

The current time in milliseconds.

#### Inherited from

[SchedulerLike](concurrent.SchedulerLike.md).[[SchedulerLike_now]](concurrent.SchedulerLike.md#[schedulerlike_now])

___

### [SchedulerLike\_shouldYield]

• `Readonly` **[SchedulerLike\_shouldYield]**: `boolean`

Boolean flag indicating whether a running continuation
should yield control back to the scheduler.

#### Inherited from

[SchedulerLike](concurrent.SchedulerLike.md).[[SchedulerLike_shouldYield]](concurrent.SchedulerLike.md#[schedulerlike_shouldyield])

## Methods

### [ContinuationSchedulerLike\_schedule]

▸ **[ContinuationSchedulerLike_schedule]**(`continuation`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `continuation` | [`ContinuationLike`](concurrent.ContinuationLike.md) |
| `options?` | `Object` |
| `options.delay?` | `number` |

#### Returns

`void`

___

### [SchedulerLike\_requestYield]

▸ **[SchedulerLike_requestYield]**(): `void`

Request the scheduler to yield the current continuation.

#### Returns

`void`

#### Inherited from

[SchedulerLike](concurrent.SchedulerLike.md).[[SchedulerLike_requestYield]](concurrent.SchedulerLike.md#[schedulerlike_requestyield])

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

#### Inherited from

[SchedulerLike](concurrent.SchedulerLike.md).[[SchedulerLike_schedule]](concurrent.SchedulerLike.md#[schedulerlike_schedule])

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

#### Inherited from

[SchedulerLike](concurrent.SchedulerLike.md).[[SchedulerLike_yield]](concurrent.SchedulerLike.md#[schedulerlike_yield])
