[**Reactive-JS**](../../README.md) • **Docs**

***

[Reactive-JS](../../README.md) / [concurrent](../README.md) / ObserverLike

# Interface: ObserverLike\<T\>

A consumer of push-based notifications.

## Extends

- [`DispatcherLike`](DispatcherLike.md)\<`T`\>.[`SchedulerLike`](SchedulerLike.md)

## Type Parameters

• **T** = `unknown`

## Properties

### \[DispatcherLike\_isCompleted\]

> `readonly` **\[DispatcherLike\_isCompleted\]**: `boolean`

#### Inherited from

[`DispatcherLike`](DispatcherLike.md).[`[DispatcherLike_isCompleted]`](DispatcherLike.md#%5Bdispatcherlike_iscompleted%5D)

***

### \[DisposableLike\_error\]

> `readonly` **\[DisposableLike\_error\]**: [`Optional`](../../functions/type-aliases/Optional.md)\<`Error`\>

The error the `Disposable` was disposed with if disposed.

#### Inherited from

[`DispatcherLike`](DispatcherLike.md).[`[DisposableLike_error]`](DispatcherLike.md#%5Bdisposablelike_error%5D)

***

### \[DisposableLike\_isDisposed\]

> `readonly` **\[DisposableLike\_isDisposed\]**: `boolean`

`true` if this resource has been disposed, otherwise false

#### Inherited from

[`DispatcherLike`](DispatcherLike.md).[`[DisposableLike_isDisposed]`](DispatcherLike.md#%5Bdisposablelike_isdisposed%5D)

***

### \[QueueableLike\_backpressureStrategy\]

> `readonly` **\[QueueableLike\_backpressureStrategy\]**: [`BackpressureStrategy`](../../utils/type-aliases/BackpressureStrategy.md)

The back pressure strategy utilized by the queue when it is at capacity.

#### Inherited from

[`DispatcherLike`](DispatcherLike.md).[`[QueueableLike_backpressureStrategy]`](DispatcherLike.md#%5Bqueueablelike_backpressurestrategy%5D)

***

### \[QueueableLike\_capacity\]

> `readonly` **\[QueueableLike\_capacity\]**: `number`

The number of items the queue is capable of efficiently buffering.

#### Inherited from

[`DispatcherLike`](DispatcherLike.md).[`[QueueableLike_capacity]`](DispatcherLike.md#%5Bqueueablelike_capacity%5D)

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

### \[DispatcherLike\_complete\]()

> **\[DispatcherLike\_complete\]**(): `void`

Communicates to the dispatcher that no more events will be enqueued.

#### Returns

`void`

#### Inherited from

[`DispatcherLike`](DispatcherLike.md).[`[DispatcherLike_complete]`](DispatcherLike.md#%5Bdispatcherlike_complete%5D)

***

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

[`SchedulerLike`](SchedulerLike.md).[`[DisposableContainerLike_add]`](SchedulerLike.md#%5Bdisposablecontainerlike_add%5D)

#### \[DisposableContainerLike\_add\](teardown)

> **\[DisposableContainerLike\_add\]**(`teardown`): `void`

Adds the given teardown function to this container or disposes it if the container has been disposed.

##### Parameters

• **teardown**: [`SideEffect1`](../../functions/type-aliases/SideEffect1.md)\<[`Optional`](../../functions/type-aliases/Optional.md)\<`Error`\>\>

The teardown function to add.

##### Returns

`void`

##### Inherited from

[`SchedulerLike`](SchedulerLike.md).[`[DisposableContainerLike_add]`](SchedulerLike.md#%5Bdisposablecontainerlike_add%5D)

***

### \[EventSourceLike\_addEventListener\]()

> **\[EventSourceLike\_addEventListener\]**(`listener`): `void`

#### Parameters

• **listener**: [`EventListenerLike`](../../events/interfaces/EventListenerLike.md)\<*typeof* [`DispatcherLikeEvent_ready`](../variables/DispatcherLikeEvent_ready.md) \| *typeof* [`DispatcherLikeEvent_capacityExceeded`](../variables/DispatcherLikeEvent_capacityExceeded.md) \| *typeof* [`DispatcherLikeEvent_completed`](../variables/DispatcherLikeEvent_completed.md)\>

#### Returns

`void`

#### Inherited from

[`DispatcherLike`](DispatcherLike.md).[`[EventSourceLike_addEventListener]`](DispatcherLike.md#%5Beventsourcelike_addeventlistener%5D)

***

### \[ObserverLike\_notify\]()

> **\[ObserverLike\_notify\]**(`event`): `void`

Notifies the observer of the next notification produced by the source.

#### Parameters

• **event**: `T`

#### Returns

`void`

***

### \[QueueableLike\_enqueue\]()

> **\[QueueableLike\_enqueue\]**(`req`): `boolean`

Enqueue an item onto the queue.

#### Parameters

• **req**: `T`

The value to enqueue.

#### Returns

`boolean`

`true` if the queue has additional remaining capacity otherwise `false`.

#### Inherited from

[`DispatcherLike`](DispatcherLike.md).[`[QueueableLike_enqueue]`](DispatcherLike.md#%5Bqueueablelike_enqueue%5D)

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

[`DispatcherLike`](DispatcherLike.md).[`[dispose]`](DispatcherLike.md#%5Bdispose%5D)
