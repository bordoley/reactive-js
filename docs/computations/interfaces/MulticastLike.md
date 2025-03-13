[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / MulticastLike

# Interface: MulticastLike

## Extends

- [`MulticastComputationLike`](MulticastComputationLike.md).[`DisposableContainerLike`](../../utils/interfaces/DisposableContainerLike.md)

## Extended by

- [`EventSourceLike`](EventSourceLike.md)
- [`MulticastObservableLike`](MulticastObservableLike.md)

## Properties

### \[ComputationLike\_isDeferred\]

> `readonly` **\[ComputationLike\_isDeferred\]**: `false`

#### Inherited from

[`MulticastComputationLike`](MulticastComputationLike.md).[`[ComputationLike_isDeferred]`](MulticastComputationLike.md#computationlike_isdeferred)

***

### \[ComputationLike\_isPure\]?

> `readonly` `optional` **\[ComputationLike\_isPure\]**: `true`

#### Inherited from

[`MulticastComputationLike`](MulticastComputationLike.md).[`[ComputationLike_isPure]`](MulticastComputationLike.md#computationlike_ispure)

***

### \[ComputationLike\_isSynchronous\]

> `readonly` **\[ComputationLike\_isSynchronous\]**: `false`

#### Inherited from

[`MulticastComputationLike`](MulticastComputationLike.md).[`[ComputationLike_isSynchronous]`](MulticastComputationLike.md#computationlike_issynchronous)

## Methods

### \[DisposableContainerLike\_add\]()

#### Call Signature

> **\[DisposableContainerLike\_add\]**(`disposable`): `void`

Adds the given `DisposableLike` or teardown function to this container or disposes it if the container has been disposed.

##### Parameters

###### disposable

`Disposable`

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
