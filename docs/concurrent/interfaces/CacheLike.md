[**Reactive-JS**](../../README.md) • **Docs**

***

[Reactive-JS](../../README.md) / [concurrent](../README.md) / CacheLike

# Interface: CacheLike\<T\>

Represents a duplex stream

## Extends

- [`StreamLike`](StreamLike.md)\<[`ReadonlyObjectMapLike`](../../collections/type-aliases/ReadonlyObjectMapLike.md)\<`string`, [`Function1`](../../functions/type-aliases/Function1.md)\<[`Optional`](../../functions/type-aliases/Optional.md)\<`T`\>, [`Optional`](../../functions/type-aliases/Optional.md)\<`T`\>\>\>, `never`\>

## Type Parameters

• **T**

## Properties

### \[DispatcherLike\_isCompleted\]

> `readonly` **\[DispatcherLike\_isCompleted\]**: `boolean`

#### Inherited from

[`StreamLike`](StreamLike.md).[`[DispatcherLike_isCompleted]`](StreamLike.md#%5Bdispatcherlike_iscompleted%5D)

***

### \[DisposableLike\_error\]

> `readonly` **\[DisposableLike\_error\]**: [`Optional`](../../functions/type-aliases/Optional.md)\<`Error`\>

The error the `Disposable` was disposed with if disposed.

#### Inherited from

[`StreamLike`](StreamLike.md).[`[DisposableLike_error]`](StreamLike.md#%5Bdisposablelike_error%5D)

***

### \[DisposableLike\_isDisposed\]

> `readonly` **\[DisposableLike\_isDisposed\]**: `boolean`

`true` if this resource has been disposed, otherwise false

#### Inherited from

[`StreamLike`](StreamLike.md).[`[DisposableLike_isDisposed]`](StreamLike.md#%5Bdisposablelike_isdisposed%5D)

***

### \[ObservableLike\_isDeferred\]

> `readonly` **\[ObservableLike\_isDeferred\]**: `false`

Indicates if the `ObservableLike` is deferred, ie. cold.

#### Inherited from

[`StreamLike`](StreamLike.md).[`[ObservableLike_isDeferred]`](StreamLike.md#%5Bobservablelike_isdeferred%5D)

***

### \[ObservableLike\_isMulticasted\]

> `readonly` **\[ObservableLike\_isMulticasted\]**: `true`

Indicates if the `ObservableLike` is multicasted, ie. hot.

#### Inherited from

[`StreamLike`](StreamLike.md).[`[ObservableLike_isMulticasted]`](StreamLike.md#%5Bobservablelike_ismulticasted%5D)

***

### \[ObservableLike\_isPure\]

> `readonly` **\[ObservableLike\_isPure\]**: `true`

Indicates if subscribing to the `ObservableLike` is free of side-effects

#### Inherited from

[`StreamLike`](StreamLike.md).[`[ObservableLike_isPure]`](StreamLike.md#%5Bobservablelike_ispure%5D)

***

### \[ObservableLike\_isRunnable\]

> `readonly` **\[ObservableLike\_isRunnable\]**: `false`

Indicates if the `ObservableLike` supports being subscribed to
on a VirtualTimeScheduler.

#### Inherited from

[`StreamLike`](StreamLike.md).[`[ObservableLike_isRunnable]`](StreamLike.md#%5Bobservablelike_isrunnable%5D)

***

### \[QueueableLike\_backpressureStrategy\]

> `readonly` **\[QueueableLike\_backpressureStrategy\]**: [`BackpressureStrategy`](../../utils/type-aliases/BackpressureStrategy.md)

The back pressure strategy utilized by the queue when it is at capacity.

#### Inherited from

[`StreamLike`](StreamLike.md).[`[QueueableLike_backpressureStrategy]`](StreamLike.md#%5Bqueueablelike_backpressurestrategy%5D)

***

### \[QueueableLike\_capacity\]

> `readonly` **\[QueueableLike\_capacity\]**: `number`

The number of items the queue is capable of efficiently buffering.

#### Inherited from

[`StreamLike`](StreamLike.md).[`[QueueableLike_capacity]`](StreamLike.md#%5Bqueueablelike_capacity%5D)

## Methods

### \[CacheLike\_get\]()

> **\[CacheLike\_get\]**(`index`): [`ObservableLike`](ObservableLike.md)\<`T`\>

#### Parameters

• **index**: `string`

#### Returns

[`ObservableLike`](ObservableLike.md)\<`T`\>

***

### \[DispatcherLike\_complete\]()

> **\[DispatcherLike\_complete\]**(): `void`

Communicates to the dispatcher that no more events will be enqueued.

#### Returns

`void`

#### Inherited from

[`StreamLike`](StreamLike.md).[`[DispatcherLike_complete]`](StreamLike.md#%5Bdispatcherlike_complete%5D)

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

[`StreamLike`](StreamLike.md).[`[DisposableContainerLike_add]`](StreamLike.md#%5Bdisposablecontainerlike_add%5D)

#### \[DisposableContainerLike\_add\](teardown)

> **\[DisposableContainerLike\_add\]**(`teardown`): `void`

Adds the given teardown function to this container or disposes it if the container has been disposed.

##### Parameters

• **teardown**: [`SideEffect1`](../../functions/type-aliases/SideEffect1.md)\<[`Optional`](../../functions/type-aliases/Optional.md)\<`Error`\>\>

The teardown function to add.

##### Returns

`void`

##### Inherited from

[`StreamLike`](StreamLike.md).[`[DisposableContainerLike_add]`](StreamLike.md#%5Bdisposablecontainerlike_add%5D)

***

### \[EventSourceLike\_addEventListener\]()

> **\[EventSourceLike\_addEventListener\]**(`listener`): `void`

#### Parameters

• **listener**: [`EventListenerLike`](../../events/interfaces/EventListenerLike.md)\<*typeof* [`DispatcherLikeEvent_ready`](../variables/DispatcherLikeEvent_ready.md) \| *typeof* [`DispatcherLikeEvent_capacityExceeded`](../variables/DispatcherLikeEvent_capacityExceeded.md) \| *typeof* [`DispatcherLikeEvent_completed`](../variables/DispatcherLikeEvent_completed.md)\>

#### Returns

`void`

#### Inherited from

[`StreamLike`](StreamLike.md).[`[EventSourceLike_addEventListener]`](StreamLike.md#%5Beventsourcelike_addeventlistener%5D)

***

### \[ObservableLike\_observe\]()

> **\[ObservableLike\_observe\]**(`observer`): `void`

Subscribes the given `ObserverLike` to the `ObservableLike` source.

#### Parameters

• **observer**: [`ObserverLike`](ObserverLike.md)\<`never`\>

The observer.

#### Returns

`void`

#### Inherited from

[`StreamLike`](StreamLike.md).[`[ObservableLike_observe]`](StreamLike.md#%5Bobservablelike_observe%5D)

***

### \[QueueableLike\_enqueue\]()

> **\[QueueableLike\_enqueue\]**(`req`): `boolean`

Enqueue an item onto the queue.

#### Parameters

• **req**: [`ReadonlyObjectMapLike`](../../collections/type-aliases/ReadonlyObjectMapLike.md)\<`string`, [`Function1`](../../functions/type-aliases/Function1.md)\<[`Optional`](../../functions/type-aliases/Optional.md)\<`T`\>, [`Optional`](../../functions/type-aliases/Optional.md)\<`T`\>\>\>

The value to enqueue.

#### Returns

`boolean`

`true` if the queue has additional remaining capacity otherwise `false`.

#### Inherited from

[`StreamLike`](StreamLike.md).[`[QueueableLike_enqueue]`](StreamLike.md#%5Bqueueablelike_enqueue%5D)

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

[`StreamLike`](StreamLike.md).[`[dispose]`](StreamLike.md#%5Bdispose%5D)
