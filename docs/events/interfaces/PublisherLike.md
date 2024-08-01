[**Reactive-JS**](../../README.md) • **Docs**

***

[Reactive-JS](../../README.md) / [events](../README.md) / PublisherLike

# Interface: PublisherLike\<T\>

## Extends

- [`EventSourceLike`](EventSourceLike.md)\<`T`\>.[`ErrorSafeEventListenerLike`](ErrorSafeEventListenerLike.md)\<`T`\>

## Type Parameters

• **T** = `unknown`

## Properties

### \[DisposableLike\_error\]

> `readonly` **\[DisposableLike\_error\]**: [`Optional`](../../functions/type-aliases/Optional.md)\<`Error`\>

The error the `Disposable` was disposed with if disposed.

#### Inherited from

[`ErrorSafeEventListenerLike`](ErrorSafeEventListenerLike.md).[`[DisposableLike_error]`](ErrorSafeEventListenerLike.md#%5Bdisposablelike_error%5D)

***

### \[DisposableLike\_isDisposed\]

> `readonly` **\[DisposableLike\_isDisposed\]**: `boolean`

`true` if this resource has been disposed, otherwise false

#### Inherited from

[`ErrorSafeEventListenerLike`](ErrorSafeEventListenerLike.md).[`[DisposableLike_isDisposed]`](ErrorSafeEventListenerLike.md#%5Bdisposablelike_isdisposed%5D)

***

### \[EventListenerLike\_isErrorSafe\]

> `readonly` **\[EventListenerLike\_isErrorSafe\]**: `true`

#### Inherited from

[`ErrorSafeEventListenerLike`](ErrorSafeEventListenerLike.md).[`[EventListenerLike_isErrorSafe]`](ErrorSafeEventListenerLike.md#%5Beventlistenerlike_iserrorsafe%5D)

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

[`ErrorSafeEventListenerLike`](ErrorSafeEventListenerLike.md).[`[DisposableContainerLike_add]`](ErrorSafeEventListenerLike.md#%5Bdisposablecontainerlike_add%5D)

#### \[DisposableContainerLike\_add\](teardown)

> **\[DisposableContainerLike\_add\]**(`teardown`): `void`

Adds the given teardown function to this container or disposes it if the container has been disposed.

##### Parameters

• **teardown**: [`SideEffect1`](../../functions/type-aliases/SideEffect1.md)\<[`Optional`](../../functions/type-aliases/Optional.md)\<`Error`\>\>

The teardown function to add.

##### Returns

`void`

##### Inherited from

[`ErrorSafeEventListenerLike`](ErrorSafeEventListenerLike.md).[`[DisposableContainerLike_add]`](ErrorSafeEventListenerLike.md#%5Bdisposablecontainerlike_add%5D)

***

### \[EventListenerLike\_notify\]()

> **\[EventListenerLike\_notify\]**(`event`): `void`

Notifies the EventListener of the next notification produced by the source.

#### Parameters

• **event**: `T`

#### Returns

`void`

#### Inherited from

[`ErrorSafeEventListenerLike`](ErrorSafeEventListenerLike.md).[`[EventListenerLike_notify]`](ErrorSafeEventListenerLike.md#%5Beventlistenerlike_notify%5D)

***

### \[EventSourceLike\_addEventListener\]()

> **\[EventSourceLike\_addEventListener\]**(`listener`): `void`

#### Parameters

• **listener**: [`EventListenerLike`](EventListenerLike.md)\<`T`\>

#### Returns

`void`

#### Inherited from

[`EventSourceLike`](EventSourceLike.md).[`[EventSourceLike_addEventListener]`](EventSourceLike.md#%5Beventsourcelike_addeventlistener%5D)

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

[`ErrorSafeEventListenerLike`](ErrorSafeEventListenerLike.md).[`[dispose]`](ErrorSafeEventListenerLike.md#%5Bdispose%5D)
