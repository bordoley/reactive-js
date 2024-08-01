[**Reactive-JS**](../../README.md) • **Docs**

***

[Reactive-JS](../../README.md) / [events](../README.md) / ErrorSafeEventListenerLike

# Interface: ErrorSafeEventListenerLike\<T\>

## Extends

- [`EventListenerLike`](EventListenerLike.md)\<`T`\>

## Extended by

- [`SubjectLike`](../../concurrent/interfaces/SubjectLike.md)
- [`PublisherLike`](PublisherLike.md)

## Type Parameters

• **T** = `unknown`

## Properties

### \[DisposableLike\_error\]

> `readonly` **\[DisposableLike\_error\]**: [`Optional`](../../functions/type-aliases/Optional.md)\<`Error`\>

The error the `Disposable` was disposed with if disposed.

#### Inherited from

[`EventListenerLike`](EventListenerLike.md).[`[DisposableLike_error]`](EventListenerLike.md#%5Bdisposablelike_error%5D)

***

### \[DisposableLike\_isDisposed\]

> `readonly` **\[DisposableLike\_isDisposed\]**: `boolean`

`true` if this resource has been disposed, otherwise false

#### Inherited from

[`EventListenerLike`](EventListenerLike.md).[`[DisposableLike_isDisposed]`](EventListenerLike.md#%5Bdisposablelike_isdisposed%5D)

***

### \[EventListenerLike\_isErrorSafe\]

> `readonly` **\[EventListenerLike\_isErrorSafe\]**: `true`

#### Overrides

[`EventListenerLike`](EventListenerLike.md).[`[EventListenerLike_isErrorSafe]`](EventListenerLike.md#%5Beventlistenerlike_iserrorsafe%5D)

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

[`EventListenerLike`](EventListenerLike.md).[`[DisposableContainerLike_add]`](EventListenerLike.md#%5Bdisposablecontainerlike_add%5D)

#### \[DisposableContainerLike\_add\](teardown)

> **\[DisposableContainerLike\_add\]**(`teardown`): `void`

Adds the given teardown function to this container or disposes it if the container has been disposed.

##### Parameters

• **teardown**: [`SideEffect1`](../../functions/type-aliases/SideEffect1.md)\<[`Optional`](../../functions/type-aliases/Optional.md)\<`Error`\>\>

The teardown function to add.

##### Returns

`void`

##### Inherited from

[`EventListenerLike`](EventListenerLike.md).[`[DisposableContainerLike_add]`](EventListenerLike.md#%5Bdisposablecontainerlike_add%5D)

***

### \[EventListenerLike\_notify\]()

> **\[EventListenerLike\_notify\]**(`event`): `void`

Notifies the EventListener of the next notification produced by the source.

#### Parameters

• **event**: `T`

#### Returns

`void`

#### Inherited from

[`EventListenerLike`](EventListenerLike.md).[`[EventListenerLike_notify]`](EventListenerLike.md#%5Beventlistenerlike_notify%5D)

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

[`EventListenerLike`](EventListenerLike.md).[`[dispose]`](EventListenerLike.md#%5Bdispose%5D)
