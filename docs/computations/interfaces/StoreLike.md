[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / StoreLike

# Interface: StoreLike\<T\>

## Extends

- [`BroadcasterLike`](BroadcasterLike.md)\<`T`\>

## Extended by

- [`StateStoreStreamLike`](../Streamable/interfaces/StateStoreStreamLike.md)
- [`WritableStoreLike`](WritableStoreLike.md)
- [`WindowLocationLike`](../../web/interfaces/WindowLocationLike.md)

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

### \[StoreLike\_value\]

> `readonly` **\[StoreLike\_value\]**: `T`

## Methods

### \[DisposableContainerLike\_add\]()

#### Call Signature

> **\[DisposableContainerLike\_add\]**(`disposable`): `void`

Adds the given `DisposableLike` or teardown function to this container or disposes it if the container has been disposed.

##### Parameters

###### disposable

[`DisposableLike`](../../utils/interfaces/DisposableLike.md)

The disposable to add.

##### Returns

`void`

##### Inherited from

[`BroadcasterLike`](BroadcasterLike.md).[`[DisposableContainerLike_add]`](BroadcasterLike.md#disposablecontainerlike_add)

#### Call Signature

> **\[DisposableContainerLike\_add\]**(`teardown`): `void`

Adds the given teardown function to this container or disposes it if the container has been disposed.

##### Parameters

###### teardown

[`SideEffect1`](../../functions/type-aliases/SideEffect1.md)\<[`Optional`](../../functions/type-aliases/Optional.md)\<`Error`\>\>

The teardown function to add.

##### Returns

`void`

##### Inherited from

[`BroadcasterLike`](BroadcasterLike.md).[`[DisposableContainerLike_add]`](BroadcasterLike.md#disposablecontainerlike_add)

#### Call Signature

> **\[DisposableContainerLike\_add\]**(`teardown`): `void`

Adds the given teardown function to this container or disposes it if the container has been disposed.

##### Parameters

###### teardown

[`Method1`](../../functions/type-aliases/Method1.md)\<[`DisposableLike`](../../utils/interfaces/DisposableLike.md), [`Optional`](../../functions/type-aliases/Optional.md)\<`Error`\>\>

The teardown function to add.

##### Returns

`void`

##### Inherited from

[`BroadcasterLike`](BroadcasterLike.md).[`[DisposableContainerLike_add]`](BroadcasterLike.md#disposablecontainerlike_add)

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
