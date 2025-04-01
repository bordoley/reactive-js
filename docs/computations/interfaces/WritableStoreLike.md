[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / WritableStoreLike

# Interface: WritableStoreLike\<T\>

## Extends

- [`StoreLike`](StoreLike.md)\<`T`\>.[`PublisherLike`](PublisherLike.md)\<`T`\>

## Type Parameters

• **T** = `unknown`

## Properties

### \[ComputationLike\_isDeferred\]

> `readonly` **\[ComputationLike\_isDeferred\]**: `false`

#### Inherited from

[`PublisherLike`](PublisherLike.md).[`[ComputationLike_isDeferred]`](PublisherLike.md#computationlike_isdeferred)

***

### \[ComputationLike\_isPure\]

> `readonly` **\[ComputationLike\_isPure\]**: [`Optional`](../../functions/type-aliases/Optional.md)\<`true`\>

#### Inherited from

[`PublisherLike`](PublisherLike.md).[`[ComputationLike_isPure]`](PublisherLike.md#computationlike_ispure)

***

### \[ComputationLike\_isSynchronous\]

> `readonly` **\[ComputationLike\_isSynchronous\]**: `false`

#### Inherited from

[`PublisherLike`](PublisherLike.md).[`[ComputationLike_isSynchronous]`](PublisherLike.md#computationlike_issynchronous)

***

### \[DisposableLike\_error\]

> `readonly` **\[DisposableLike\_error\]**: [`Optional`](../../functions/type-aliases/Optional.md)\<`Error`\>

The error the `Disposable` was disposed with if disposed.

#### Inherited from

[`PublisherLike`](PublisherLike.md).[`[DisposableLike_error]`](PublisherLike.md#disposablelike_error)

***

### \[DisposableLike\_isDisposed\]

> `readonly` **\[DisposableLike\_isDisposed\]**: `boolean`

`true` if this resource has been disposed, otherwise false

#### Inherited from

[`PublisherLike`](PublisherLike.md).[`[DisposableLike_isDisposed]`](PublisherLike.md#disposablelike_isdisposed)

***

### \[StoreLike\_value\]

> **\[StoreLike\_value\]**: `T`

#### Overrides

[`StoreLike`](StoreLike.md).[`[StoreLike_value]`](StoreLike.md#storelike_value)

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

[`PublisherLike`](PublisherLike.md).[`[dispose]`](PublisherLike.md#dispose)

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

[`PublisherLike`](PublisherLike.md).[`[EventListenerLike_notify]`](PublisherLike.md#eventlistenerlike_notify)

***

### \[ReactiveSourceLike\_subscribe\]()

> **\[ReactiveSourceLike\_subscribe\]**(`EventListener`): `void`

#### Parameters

##### EventListener

[`EventListenerLike`](../../utils/interfaces/EventListenerLike.md)

#### Returns

`void`

#### Inherited from

[`PublisherLike`](PublisherLike.md).[`[ReactiveSourceLike_subscribe]`](PublisherLike.md#reactivesourcelike_subscribe)
