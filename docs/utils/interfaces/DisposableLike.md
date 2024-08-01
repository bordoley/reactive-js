[**Reactive-JS**](../../README.md) • **Docs**

***

[Reactive-JS](../../README.md) / [utils](../README.md) / DisposableLike

# Interface: DisposableLike

## Extends

- [`DisposableContainerLike`](DisposableContainerLike.md).`Disposable`

## Extended by

- [`DispatcherLike`](../../concurrent/interfaces/DispatcherLike.md)
- [`PauseableLike`](../../concurrent/interfaces/PauseableLike.md)
- [`VirtualTimeSchedulerLike`](../../concurrent/interfaces/VirtualTimeSchedulerLike.md)
- [`EventListenerLike`](../../events/interfaces/EventListenerLike.md)
- [`WritableStoreLike`](../../events/interfaces/WritableStoreLike.md)
- [`SerialDisposableLike`](SerialDisposableLike.md)

## Properties

### \[DisposableLike\_error\]

> `readonly` **\[DisposableLike\_error\]**: [`Optional`](../../functions/type-aliases/Optional.md)\<`Error`\>

The error the `Disposable` was disposed with if disposed.

***

### \[DisposableLike\_isDisposed\]

> `readonly` **\[DisposableLike\_isDisposed\]**: `boolean`

`true` if this resource has been disposed, otherwise false

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

[`DisposableContainerLike`](DisposableContainerLike.md).[`[DisposableContainerLike_add]`](DisposableContainerLike.md#%5Bdisposablecontainerlike_add%5D)

#### \[DisposableContainerLike\_add\](teardown)

> **\[DisposableContainerLike\_add\]**(`teardown`): `void`

Adds the given teardown function to this container or disposes it if the container has been disposed.

##### Parameters

• **teardown**: [`SideEffect1`](../../functions/type-aliases/SideEffect1.md)\<[`Optional`](../../functions/type-aliases/Optional.md)\<`Error`\>\>

The teardown function to add.

##### Returns

`void`

##### Inherited from

[`DisposableContainerLike`](DisposableContainerLike.md).[`[DisposableContainerLike_add]`](DisposableContainerLike.md#%5Bdisposablecontainerlike_add%5D)

***

### \[dispose\]()

> **\[dispose\]**(`error`?): `void`

Dispose the resource.

#### Parameters

• **error?**: `Error`

An optional error that signals the resource is being disposed due to an error.

#### Returns

`void`

#### Overrides

`Disposable.[dispose]`
