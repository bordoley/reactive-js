[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [utils](../README.md) / FlowControllerLike

# Interface: FlowControllerLike

## Extends

- [`DisposableLike`](DisposableLike.md)

## Extended by

- [`FlowControllerQueueLike`](FlowControllerQueueLike.md)
- [`ConsumerLike`](ConsumerLike.md)

## Properties

### \[DisposableLike\_error\]

> `readonly` **\[DisposableLike\_error\]**: [`Optional`](../../functions/type-aliases/Optional.md)\<`Error`\>

The error the `Disposable` was disposed with if disposed.

#### Inherited from

[`DisposableLike`](DisposableLike.md).[`[DisposableLike_error]`](DisposableLike.md#disposablelike_error)

***

### \[DisposableLike\_isDisposed\]

> `readonly` **\[DisposableLike\_isDisposed\]**: `boolean`

`true` if this resource has been disposed, otherwise false

#### Inherited from

[`DisposableLike`](DisposableLike.md).[`[DisposableLike_isDisposed]`](DisposableLike.md#disposablelike_isdisposed)

***

### \[FlowControllerLike\_isReady\]

> `readonly` **\[FlowControllerLike\_isReady\]**: `boolean`

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

[`DisposableLike`](DisposableLike.md).[`[dispose]`](DisposableLike.md#dispose)

***

### \[FlowControllerLike\_addOnReadyListener\]()

> **\[FlowControllerLike\_addOnReadyListener\]**(`callback`): [`DisposableLike`](DisposableLike.md)

#### Parameters

##### callback

[`SideEffect1`](../../functions/type-aliases/SideEffect1.md)\<`void`\>

#### Returns

[`DisposableLike`](DisposableLike.md)
