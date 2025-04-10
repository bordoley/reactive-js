[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [utils](../README.md) / SchedulerLike

# Interface: SchedulerLike

Schedulers are the core unit of concurrency, orchestration and
cooperative multi-tasking.

## Extends

- [`DisposableContainerLike`](DisposableContainerLike.md).[`ClockLike`](ClockLike.md)

## Extended by

- [`VirtualTimeSchedulerLike`](VirtualTimeSchedulerLike.md)
- [`PauseableSchedulerLike`](PauseableSchedulerLike.md)
- [`ObserverLike`](ObserverLike.md)

## Properties

### \[SchedulerLike\_inContinuation\]

> `readonly` **\[SchedulerLike\_inContinuation\]**: `boolean`

Boolean flag indicating the scheduler is currently
running a continuation.

***

### \[SchedulerLike\_maxYieldInterval\]

> `readonly` **\[SchedulerLike\_maxYieldInterval\]**: `number`

The max number of milliseconds the scheduler will run
before yielding control back to the underlying system scheduler.

***

### \[SchedulerLike\_shouldYield\]

> `readonly` **\[SchedulerLike\_shouldYield\]**: `boolean`

Boolean flag indicating whether a running continuation
should yield control back to the scheduler.

## Methods

### \[SchedulerLike\_requestYield\]()

> **\[SchedulerLike\_requestYield\]**(): `void`

Request the scheduler to yield the current continuation.

#### Returns

`void`

***

### \[SchedulerLike\_schedule\]()

> **\[SchedulerLike\_schedule\]**(`continuation`): [`DisposableLike`](DisposableLike.md)

Schedule a continuation on the Scheduler.

#### Parameters

##### continuation

[`SchedulerContinuation`](../type-aliases/SchedulerContinuation.md)

The continuation to run on the scheduler.

#### Returns

[`DisposableLike`](DisposableLike.md)
