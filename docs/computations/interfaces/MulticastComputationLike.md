[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / MulticastComputationLike

# Interface: MulticastComputationLike

## Extends

- [`DisposableContainerLike`](../../utils/interfaces/DisposableContainerLike.md)

## Extended by

- [`BroadcasterLike`](BroadcasterLike.md)

## Properties

### \[ComputationLike\_isDeferred\]

> `readonly` **\[ComputationLike\_isDeferred\]**: `false`

***

### \[ComputationLike\_isPure\]

> `readonly` **\[ComputationLike\_isPure\]**: [`Optional`](../../functions/type-aliases/Optional.md)\<`true`\>

***

### \[ComputationLike\_isSynchronous\]

> `readonly` **\[ComputationLike\_isSynchronous\]**: `false`

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

[`DisposableContainerLike`](../../utils/interfaces/DisposableContainerLike.md).[`[DisposableContainerLike_add]`](../../utils/interfaces/DisposableContainerLike.md#disposablecontainerlike_add)

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

[`DisposableContainerLike`](../../utils/interfaces/DisposableContainerLike.md).[`[DisposableContainerLike_add]`](../../utils/interfaces/DisposableContainerLike.md#disposablecontainerlike_add)

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

[`DisposableContainerLike`](../../utils/interfaces/DisposableContainerLike.md).[`[DisposableContainerLike_add]`](../../utils/interfaces/DisposableContainerLike.md#disposablecontainerlike_add)
