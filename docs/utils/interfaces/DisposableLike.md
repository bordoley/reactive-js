[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [utils](../README.md) / DisposableLike

# Interface: DisposableLike

## Extends

- [`DisposableContainerLike`](DisposableContainerLike.md).`Disposable`

## Extended by

- [`SerialDisposableLike`](SerialDisposableLike.md)
- [`VirtualTimeSchedulerLike`](VirtualTimeSchedulerLike.md)
- [`EventListenerLike`](EventListenerLike.md)
- [`ObserverLike`](ObserverLike.md)

## Properties

### \[DisposableLike\_error\]

> `readonly` **\[DisposableLike\_error\]**: [`Optional`](../../functions/type-aliases/Optional.md)\<`Error`\>

The error the `Disposable` was disposed with if disposed.

***

### \[DisposableLike\_isDisposed\]

> `readonly` **\[DisposableLike\_isDisposed\]**: `boolean`

`true` if this resource has been disposed, otherwise false

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

#### Overrides

`Disposable.[dispose]`
