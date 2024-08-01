[**Reactive-JS**](../../README.md) • **Docs**

***

[Reactive-JS](../../README.md) / [concurrent](../README.md) / PauseableSchedulerLike

# Interface: PauseableSchedulerLike

A `SchedulerLike` that supports imperative pausing and resuming
of it's run loop.

## Extends

- [`SchedulerLike`](SchedulerLike.md).[`PauseableLike`](PauseableLike.md)

## Properties

### \[DisposableLike\_error\]

> `readonly` **\[DisposableLike\_error\]**: [`Optional`](../../functions/type-aliases/Optional.md)\<`Error`\>

The error the `Disposable` was disposed with if disposed.

#### Inherited from

[`PauseableLike`](PauseableLike.md).[`[DisposableLike_error]`](PauseableLike.md#%5Bdisposablelike_error%5D)

***

### \[DisposableLike\_isDisposed\]

> `readonly` **\[DisposableLike\_isDisposed\]**: `boolean`

`true` if this resource has been disposed, otherwise false

#### Inherited from

[`PauseableLike`](PauseableLike.md).[`[DisposableLike_isDisposed]`](PauseableLike.md#%5Bdisposablelike_isdisposed%5D)

***

### \[PauseableLike\_isPaused\]

> `readonly` **\[PauseableLike\_isPaused\]**: [`StoreLike`](../../events/interfaces/StoreLike.md)\<`boolean`\>

Boolean flag indicating if the PauseableLike is currently paused or not.

#### Inherited from

[`PauseableLike`](PauseableLike.md).[`[PauseableLike_isPaused]`](PauseableLike.md#%5Bpauseablelike_ispaused%5D)

***

### \[SchedulerLike\_inContinuation\]

> `readonly` **\[SchedulerLike\_inContinuation\]**: `boolean`

Boolean flag indicating the scheduler is currently
running a continuation.

#### Inherited from

[`SchedulerLike`](SchedulerLike.md).[`[SchedulerLike_inContinuation]`](SchedulerLike.md#%5Bschedulerlike_incontinuation%5D)

***

### \[SchedulerLike\_maxYieldInterval\]

> `readonly` **\[SchedulerLike\_maxYieldInterval\]**: `number`

The max number of milliseconds the scheduler will run
before yielding control back to the underlying system scheduler.

#### Inherited from

[`SchedulerLike`](SchedulerLike.md).[`[SchedulerLike_maxYieldInterval]`](SchedulerLike.md#%5Bschedulerlike_maxyieldinterval%5D)

***

### \[SchedulerLike\_now\]

> `readonly` **\[SchedulerLike\_now\]**: `number`

The current time in milliseconds.

#### Inherited from

[`SchedulerLike`](SchedulerLike.md).[`[SchedulerLike_now]`](SchedulerLike.md#%5Bschedulerlike_now%5D)

***

### \[SchedulerLike\_shouldYield\]

> `readonly` **\[SchedulerLike\_shouldYield\]**: `boolean`

Boolean flag indicating whether a running continuation
should yield control back to the scheduler.

#### Inherited from

[`SchedulerLike`](SchedulerLike.md).[`[SchedulerLike_shouldYield]`](SchedulerLike.md#%5Bschedulerlike_shouldyield%5D)

## Methods

### \[DisposableContainerLike\_add\]()

#### \[DisposableContainerLike\_add\](disposable)

> **\[DisposableContainerLike\_add\]**(`disposable`): `void`

Adds the given `DisposableLike` or teardown function to this container or disposes it if the container has been disposed.

##### Parameters

• **disposable**: `Disposable`

The disposable to add.

##### Returns

`void`

##### Inherited from

[`PauseableLike`](PauseableLike.md).[`[DisposableContainerLike_add]`](PauseableLike.md#%5Bdisposablecontainerlike_add%5D)

#### \[DisposableContainerLike\_add\](teardown)

> **\[DisposableContainerLike\_add\]**(`teardown`): `void`

Adds the given teardown function to this container or disposes it if the container has been disposed.

##### Parameters

• **teardown**: [`SideEffect1`](../../functions/type-aliases/SideEffect1.md)\<[`Optional`](../../functions/type-aliases/Optional.md)\<`Error`\>\>

The teardown function to add.

##### Returns

`void`

##### Inherited from

[`PauseableLike`](PauseableLike.md).[`[DisposableContainerLike_add]`](PauseableLike.md#%5Bdisposablecontainerlike_add%5D)

***

### \[PauseableLike\_pause\]()

> **\[PauseableLike\_pause\]**(): `void`

Imperatively pause the source.

#### Returns

`void`

#### Inherited from

[`PauseableLike`](PauseableLike.md).[`[PauseableLike_pause]`](PauseableLike.md#%5Bpauseablelike_pause%5D)

***

### \[PauseableLike\_resume\]()

> **\[PauseableLike\_resume\]**(): `void`

Imperatively resume the source.

#### Returns

`void`

#### Inherited from

[`PauseableLike`](PauseableLike.md).[`[PauseableLike_resume]`](PauseableLike.md#%5Bpauseablelike_resume%5D)

***

### \[SchedulerLike\_requestYield\]()

> **\[SchedulerLike\_requestYield\]**(): `void`

Request the scheduler to yield the current continuation.

#### Returns

`void`

#### Inherited from

[`SchedulerLike`](SchedulerLike.md).[`[SchedulerLike_requestYield]`](SchedulerLike.md#%5Bschedulerlike_requestyield%5D)

***

### \[SchedulerLike\_schedule\]()

> **\[SchedulerLike\_schedule\]**(`continuation`, `options`?): [`DisposableLike`](../../utils/interfaces/DisposableLike.md)

Schedule a continuation on the Scheduler.

#### Parameters

• **continuation**: [`SideEffect1`](../../functions/type-aliases/SideEffect1.md)\<[`ContinuationContextLike`](ContinuationContextLike.md)\>

The continuation to run on the scheduler.

• **options?**

• **options.delay?**: `number`

The amount of time in ms to delay execution of the continuation.

#### Returns

[`DisposableLike`](../../utils/interfaces/DisposableLike.md)

#### Inherited from

[`SchedulerLike`](SchedulerLike.md).[`[SchedulerLike_schedule]`](SchedulerLike.md#%5Bschedulerlike_schedule%5D)

***

### \[dispose\]()

> **\[dispose\]**(`error`?): `void`

Dispose the resource.

#### Parameters

• **error?**: `Error`

An optional error that signals the resource is being disposed due to an error.

#### Returns

`void`

#### Inherited from

[`PauseableLike`](PauseableLike.md).[`[dispose]`](PauseableLike.md#%5Bdispose%5D)
