[**Reactive-JS**](../../README.md) • **Docs**

***

[Reactive-JS](../../README.md) / [concurrent](../README.md) / DispatcherLike

# Interface: DispatcherLike\<T\>

A `QueueableLike` type that consumes enqueued events to
be dispatched from any execution constext.

## Extends

- [`QueueableLike`](../../utils/interfaces/QueueableLike.md)\<`T`\>.[`EventSourceLike`](../../events/interfaces/EventSourceLike.md)\<*typeof* [`DispatcherLikeEvent_ready`](../variables/DispatcherLikeEvent_ready.md) \| *typeof* [`DispatcherLikeEvent_capacityExceeded`](../variables/DispatcherLikeEvent_capacityExceeded.md) \| *typeof* [`DispatcherLikeEvent_completed`](../variables/DispatcherLikeEvent_completed.md)\>.[`DisposableLike`](../../utils/interfaces/DisposableLike.md)

## Extended by

- [`ObserverLike`](ObserverLike.md)
- [`StreamLike`](StreamLike.md)

## Type Parameters

• **T** = `unknown`

## Properties

### \[DispatcherLike\_isCompleted\]

> `readonly` **\[DispatcherLike\_isCompleted\]**: `boolean`

***

### \[DisposableLike\_error\]

> `readonly` **\[DisposableLike\_error\]**: [`Optional`](../../functions/type-aliases/Optional.md)\<`Error`\>

The error the `Disposable` was disposed with if disposed.

#### Inherited from

[`DisposableLike`](../../utils/interfaces/DisposableLike.md).[`[DisposableLike_error]`](../../utils/interfaces/DisposableLike.md#%5Bdisposablelike_error%5D)

***

### \[DisposableLike\_isDisposed\]

> `readonly` **\[DisposableLike\_isDisposed\]**: `boolean`

`true` if this resource has been disposed, otherwise false

#### Inherited from

[`DisposableLike`](../../utils/interfaces/DisposableLike.md).[`[DisposableLike_isDisposed]`](../../utils/interfaces/DisposableLike.md#%5Bdisposablelike_isdisposed%5D)

***

### \[QueueableLike\_backpressureStrategy\]

> `readonly` **\[QueueableLike\_backpressureStrategy\]**: [`BackpressureStrategy`](../../utils/type-aliases/BackpressureStrategy.md)

The back pressure strategy utilized by the queue when it is at capacity.

#### Inherited from

[`QueueableLike`](../../utils/interfaces/QueueableLike.md).[`[QueueableLike_backpressureStrategy]`](../../utils/interfaces/QueueableLike.md#%5Bqueueablelike_backpressurestrategy%5D)

***

### \[QueueableLike\_capacity\]

> `readonly` **\[QueueableLike\_capacity\]**: `number`

The number of items the queue is capable of efficiently buffering.

#### Inherited from

[`QueueableLike`](../../utils/interfaces/QueueableLike.md).[`[QueueableLike_capacity]`](../../utils/interfaces/QueueableLike.md#%5Bqueueablelike_capacity%5D)

## Methods

### \[DispatcherLike\_complete\]()

> **\[DispatcherLike\_complete\]**(): `void`

Communicates to the dispatcher that no more events will be enqueued.

#### Returns

`void`

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

[`DisposableLike`](../../utils/interfaces/DisposableLike.md).[`[DisposableContainerLike_add]`](../../utils/interfaces/DisposableLike.md#%5Bdisposablecontainerlike_add%5D)

#### \[DisposableContainerLike\_add\](teardown)

> **\[DisposableContainerLike\_add\]**(`teardown`): `void`

Adds the given teardown function to this container or disposes it if the container has been disposed.

##### Parameters

• **teardown**: [`SideEffect1`](../../functions/type-aliases/SideEffect1.md)\<[`Optional`](../../functions/type-aliases/Optional.md)\<`Error`\>\>

The teardown function to add.

##### Returns

`void`

##### Inherited from

[`DisposableLike`](../../utils/interfaces/DisposableLike.md).[`[DisposableContainerLike_add]`](../../utils/interfaces/DisposableLike.md#%5Bdisposablecontainerlike_add%5D)

***

### \[EventSourceLike\_addEventListener\]()

> **\[EventSourceLike\_addEventListener\]**(`listener`): `void`

#### Parameters

• **listener**: [`EventListenerLike`](../../events/interfaces/EventListenerLike.md)\<*typeof* [`DispatcherLikeEvent_ready`](../variables/DispatcherLikeEvent_ready.md) \| *typeof* [`DispatcherLikeEvent_capacityExceeded`](../variables/DispatcherLikeEvent_capacityExceeded.md) \| *typeof* [`DispatcherLikeEvent_completed`](../variables/DispatcherLikeEvent_completed.md)\>

#### Returns

`void`

#### Inherited from

[`EventSourceLike`](../../events/interfaces/EventSourceLike.md).[`[EventSourceLike_addEventListener]`](../../events/interfaces/EventSourceLike.md#%5Beventsourcelike_addeventlistener%5D)

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

[`QueueableLike`](../../utils/interfaces/QueueableLike.md).[`[QueueableLike_enqueue]`](../../utils/interfaces/QueueableLike.md#%5Bqueueablelike_enqueue%5D)

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

[`DisposableLike`](../../utils/interfaces/DisposableLike.md).[`[dispose]`](../../utils/interfaces/DisposableLike.md#%5Bdispose%5D)
