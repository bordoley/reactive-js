[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / PublisherLike

# Interface: PublisherLike\<T\>

## Extends

- [`BroadcasterLike`](BroadcasterLike.md)\<`T`\>.[`EventListenerLike`](../../utils/interfaces/EventListenerLike.md)\<`T`\>

## Extended by

- [`WritableStoreLike`](WritableStoreLike.md)

## Type Parameters

• **T** = `unknown`

## Properties

### \[ComputationLike\_isDeferred\]

> `readonly` **\[ComputationLike\_isDeferred\]**: `false`

#### Inherited from

[`BroadcasterLike`](BroadcasterLike.md).[`[ComputationLike_isDeferred]`](BroadcasterLike.md#computationlike_isdeferred)

***

### \[ComputationLike\_isPure\]

> `readonly` **\[ComputationLike\_isPure\]**: [`Optional`](../../functions/type-aliases/Optional.md)\<`true`\>

#### Inherited from

[`BroadcasterLike`](BroadcasterLike.md).[`[ComputationLike_isPure]`](BroadcasterLike.md#computationlike_ispure)

***

### \[ComputationLike\_isSynchronous\]

> `readonly` **\[ComputationLike\_isSynchronous\]**: `false`

#### Inherited from

[`BroadcasterLike`](BroadcasterLike.md).[`[ComputationLike_isSynchronous]`](BroadcasterLike.md#computationlike_issynchronous)

***

### \[DisposableLike\_error\]

> `readonly` **\[DisposableLike\_error\]**: [`Optional`](../../functions/type-aliases/Optional.md)\<`Error`\>

The error the `Disposable` was disposed with if disposed.

#### Inherited from

[`EventListenerLike`](../../utils/interfaces/EventListenerLike.md).[`[DisposableLike_error]`](../../utils/interfaces/EventListenerLike.md#disposablelike_error)

***

### \[DisposableLike\_isDisposed\]

> `readonly` **\[DisposableLike\_isDisposed\]**: `boolean`

`true` if this resource has been disposed, otherwise false

#### Inherited from

[`EventListenerLike`](../../utils/interfaces/EventListenerLike.md).[`[DisposableLike_isDisposed]`](../../utils/interfaces/EventListenerLike.md#disposablelike_isdisposed)

## Methods

### \[dispose\]()

> **\[dispose\]**(`error`?): `void`

Dispose the resource.

#### Parameters

##### error?

`Error`

An optional error that signals the resource is being disposed due to an error.

#### Returns

`void`

#### Inherited from

[`EventListenerLike`](../../utils/interfaces/EventListenerLike.md).[`[dispose]`](../../utils/interfaces/EventListenerLike.md#dispose)

***

### \[EventListenerLike\_notify\]()

> **\[EventListenerLike\_notify\]**(`event`): `void`

Notifies the EventSink of the next notification produced by the source.

#### Parameters

##### event

`T`

#### Returns

`void`

#### Inherited from

[`EventListenerLike`](../../utils/interfaces/EventListenerLike.md).[`[EventListenerLike_notify]`](../../utils/interfaces/EventListenerLike.md#eventlistenerlike_notify)

***

### \[EventSourceLike\_subscribe\]()

> **\[EventSourceLike\_subscribe\]**(`EventListener`): `void`

#### Parameters

##### EventListener

[`EventListenerLike`](../../utils/interfaces/EventListenerLike.md)

#### Returns

`void`

#### Inherited from

[`BroadcasterLike`](BroadcasterLike.md).[`[EventSourceLike_subscribe]`](BroadcasterLike.md#eventsourcelike_subscribe)
