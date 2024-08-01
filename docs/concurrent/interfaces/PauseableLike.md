[**Reactive-JS**](../../README.md) • **Docs**

***

[Reactive-JS](../../README.md) / [concurrent](../README.md) / PauseableLike

# Interface: PauseableLike

## Extends

- [`DisposableLike`](../../utils/interfaces/DisposableLike.md)

## Extended by

- [`PauseableSchedulerLike`](PauseableSchedulerLike.md)
- [`PauseableObservableLike`](PauseableObservableLike.md)

## Properties

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

### \[PauseableLike\_isPaused\]

> `readonly` **\[PauseableLike\_isPaused\]**: [`StoreLike`](../../events/interfaces/StoreLike.md)\<`boolean`\>

Boolean flag indicating if the PauseableLike is currently paused or not.

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

### \[PauseableLike\_pause\]()

> **\[PauseableLike\_pause\]**(): `void`

Imperatively pause the source.

#### Returns

`void`

***

### \[PauseableLike\_resume\]()

> **\[PauseableLike\_resume\]**(): `void`

Imperatively resume the source.

#### Returns

`void`

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
