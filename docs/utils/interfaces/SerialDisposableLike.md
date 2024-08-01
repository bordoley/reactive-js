[**Reactive-JS**](../../README.md) • **Docs**

***

[Reactive-JS](../../README.md) / [utils](../README.md) / SerialDisposableLike

# Interface: SerialDisposableLike\<TDisposable\>

## Extends

- [`DisposableLike`](DisposableLike.md)

## Type Parameters

• **TDisposable** *extends* [`DisposableLike`](DisposableLike.md) = [`DisposableLike`](DisposableLike.md)

## Properties

### \[DisposableLike\_error\]

> `readonly` **\[DisposableLike\_error\]**: [`Optional`](../../functions/type-aliases/Optional.md)\<`Error`\>

The error the `Disposable` was disposed with if disposed.

#### Inherited from

[`DisposableLike`](DisposableLike.md).[`[DisposableLike_error]`](DisposableLike.md#%5Bdisposablelike_error%5D)

***

### \[DisposableLike\_isDisposed\]

> `readonly` **\[DisposableLike\_isDisposed\]**: `boolean`

`true` if this resource has been disposed, otherwise false

#### Inherited from

[`DisposableLike`](DisposableLike.md).[`[DisposableLike_isDisposed]`](DisposableLike.md#%5Bdisposablelike_isdisposed%5D)

## Accessors

### \[SerialDisposableLike\_current\]

> `get` **\[SerialDisposableLike\_current\]**(): `TDisposable`

> `set` **\[SerialDisposableLike\_current\]**(`v`): `void`

#### Parameters

• **v**: `TDisposable`

#### Returns

`TDisposable`

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

[`DisposableLike`](DisposableLike.md).[`[DisposableContainerLike_add]`](DisposableLike.md#%5Bdisposablecontainerlike_add%5D)

#### \[DisposableContainerLike\_add\](teardown)

> **\[DisposableContainerLike\_add\]**(`teardown`): `void`

Adds the given teardown function to this container or disposes it if the container has been disposed.

##### Parameters

• **teardown**: [`SideEffect1`](../../functions/type-aliases/SideEffect1.md)\<[`Optional`](../../functions/type-aliases/Optional.md)\<`Error`\>\>

The teardown function to add.

##### Returns

`void`

##### Inherited from

[`DisposableLike`](DisposableLike.md).[`[DisposableContainerLike_add]`](DisposableLike.md#%5Bdisposablecontainerlike_add%5D)

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

[`DisposableLike`](DisposableLike.md).[`[dispose]`](DisposableLike.md#%5Bdispose%5D)
