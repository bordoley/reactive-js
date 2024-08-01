[**Reactive-JS**](../../README.md) • **Docs**

***

[Reactive-JS](../../README.md) / [concurrent](../README.md) / StreamLike

# Interface: StreamLike\<TReq, T\>

Represents a duplex stream

## Extends

- [`DispatcherLike`](DispatcherLike.md)\<`TReq`\>.[`MulticastObservableLike`](MulticastObservableLike.md)\<`T`\>

## Extended by

- [`CacheLike`](CacheLike.md)

## Type Parameters

• **TReq**

• **T**

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

### \[ObservableLike\_isDeferred\]

> `readonly` **\[ObservableLike\_isDeferred\]**: `false`

Indicates if the `ObservableLike` is deferred, ie. cold.

#### Inherited from

[`MulticastObservableLike`](MulticastObservableLike.md).[`[ObservableLike_isDeferred]`](MulticastObservableLike.md#%5Bobservablelike_isdeferred%5D)

***

### \[ObservableLike\_isMulticasted\]

> `readonly` **\[ObservableLike\_isMulticasted\]**: `true`

Indicates if the `ObservableLike` is multicasted, ie. hot.

#### Inherited from

[`MulticastObservableLike`](MulticastObservableLike.md).[`[ObservableLike_isMulticasted]`](MulticastObservableLike.md#%5Bobservablelike_ismulticasted%5D)

***

### \[ObservableLike\_isPure\]

> `readonly` **\[ObservableLike\_isPure\]**: `true`

Indicates if subscribing to the `ObservableLike` is free of side-effects

#### Inherited from

[`MulticastObservableLike`](MulticastObservableLike.md).[`[ObservableLike_isPure]`](MulticastObservableLike.md#%5Bobservablelike_ispure%5D)

***

### \[ObservableLike\_isRunnable\]

> `readonly` **\[ObservableLike\_isRunnable\]**: `false`

Indicates if the `ObservableLike` supports being subscribed to
on a VirtualTimeScheduler.

#### Inherited from

[`MulticastObservableLike`](MulticastObservableLike.md).[`[ObservableLike_isRunnable]`](MulticastObservableLike.md#%5Bobservablelike_isrunnable%5D)

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

[`DispatcherLike`](DispatcherLike.md).[`[DisposableContainerLike_add]`](DispatcherLike.md#%5Bdisposablecontainerlike_add%5D)

#### \[DisposableContainerLike\_add\](teardown)

> **\[DisposableContainerLike\_add\]**(`teardown`): `void`

Adds the given teardown function to this container or disposes it if the container has been disposed.

##### Parameters

• **teardown**: [`SideEffect1`](../../functions/type-aliases/SideEffect1.md)\<[`Optional`](../../functions/type-aliases/Optional.md)\<`Error`\>\>

The teardown function to add.

##### Returns

`void`

##### Inherited from

[`DispatcherLike`](DispatcherLike.md).[`[DisposableContainerLike_add]`](DispatcherLike.md#%5Bdisposablecontainerlike_add%5D)

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

### \[ObservableLike\_observe\]()

> **\[ObservableLike\_observe\]**(`observer`): `void`

Subscribes the given `ObserverLike` to the `ObservableLike` source.

#### Parameters

• **observer**: [`ObserverLike`](ObserverLike.md)\<`T`\>

The observer.

#### Returns

`void`

#### Inherited from

[`MulticastObservableLike`](MulticastObservableLike.md).[`[ObservableLike_observe]`](MulticastObservableLike.md#%5Bobservablelike_observe%5D)

***

### \[QueueableLike\_enqueue\]()

> **\[QueueableLike\_enqueue\]**(`req`): `boolean`

Enqueue an item onto the queue.

#### Parameters

• **req**: `TReq`

The value to enqueue.

#### Returns

`boolean`

`true` if the queue has additional remaining capacity otherwise `false`.

#### Inherited from

[`DispatcherLike`](DispatcherLike.md).[`[QueueableLike_enqueue]`](DispatcherLike.md#%5Bqueueablelike_enqueue%5D)

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
