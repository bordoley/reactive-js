[**Reactive-JS**](../../README.md) • **Docs**

***

[Reactive-JS](../../README.md) / [concurrent](../README.md) / PauseableObservableLike

# Interface: PauseableObservableLike\<T\>

## Extends

- [`MulticastObservableLike`](MulticastObservableLike.md)\<`T`\>.[`PauseableLike`](PauseableLike.md)

## Type Parameters

• **T** = `unknown`

## Properties

### \[DisposableLike\_error\]

> `readonly` **\[DisposableLike\_error\]**: [`Optional`](../../functions/type-aliases/Optional.md)\<`Error`\>

The error the `Disposable` was disposed with if disposed.

#### Inherited from

[`PauseableLike`](PauseableLike.md).[`[DisposableLike_error]`](PauseableLike.md#%5Bdisposablelike_error%5D)

***

### \[DisposableLike\_isDisposed\]

> `readonly` **\[DisposableLike\_isDisposed\]**: `boolean`

`true` if this resource has been disposed, otherwise false

#### Inherited from

[`PauseableLike`](PauseableLike.md).[`[DisposableLike_isDisposed]`](PauseableLike.md#%5Bdisposablelike_isdisposed%5D)

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

### \[PauseableLike\_isPaused\]

> `readonly` **\[PauseableLike\_isPaused\]**: [`StoreLike`](../../events/interfaces/StoreLike.md)\<`boolean`\>

Boolean flag indicating if the PauseableLike is currently paused or not.

#### Inherited from

[`PauseableLike`](PauseableLike.md).[`[PauseableLike_isPaused]`](PauseableLike.md#%5Bpauseablelike_ispaused%5D)

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

[`PauseableLike`](PauseableLike.md).[`[DisposableContainerLike_add]`](PauseableLike.md#%5Bdisposablecontainerlike_add%5D)

#### \[DisposableContainerLike\_add\](teardown)

> **\[DisposableContainerLike\_add\]**(`teardown`): `void`

Adds the given teardown function to this container or disposes it if the container has been disposed.

##### Parameters

• **teardown**: [`SideEffect1`](../../functions/type-aliases/SideEffect1.md)\<[`Optional`](../../functions/type-aliases/Optional.md)\<`Error`\>\>

The teardown function to add.

##### Returns

`void`

##### Inherited from

[`PauseableLike`](PauseableLike.md).[`[DisposableContainerLike_add]`](PauseableLike.md#%5Bdisposablecontainerlike_add%5D)

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

### \[PauseableLike\_pause\]()

> **\[PauseableLike\_pause\]**(): `void`

Imperatively pause the source.

#### Returns

`void`

#### Inherited from

[`PauseableLike`](PauseableLike.md).[`[PauseableLike_pause]`](PauseableLike.md#%5Bpauseablelike_pause%5D)

***

### \[PauseableLike\_resume\]()

> **\[PauseableLike\_resume\]**(): `void`

Imperatively resume the source.

#### Returns

`void`

#### Inherited from

[`PauseableLike`](PauseableLike.md).[`[PauseableLike_resume]`](PauseableLike.md#%5Bpauseablelike_resume%5D)

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

[`PauseableLike`](PauseableLike.md).[`[dispose]`](PauseableLike.md#%5Bdispose%5D)
