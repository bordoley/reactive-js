[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / BroadcasterLike

# Interface: BroadcasterLike\<T\>

## Extends

- [`ComputationLike`](ComputationLike.md).[`MulticastLike`](MulticastLike.md)

## Extended by

- [`SubjectLike`](SubjectLike.md)

## Type Parameters

• **T** = `unknown`

## Properties

### \[ComputationLike\_isDeferred\]

> `readonly` **\[ComputationLike\_isDeferred\]**: `false`

#### Overrides

[`MulticastLike`](MulticastLike.md).[`[ComputationLike_isDeferred]`](MulticastLike.md#computationlike_isdeferred)

***

### \[ComputationLike\_isPure\]?

> `readonly` `optional` **\[ComputationLike\_isPure\]**: `true`

#### Overrides

[`MulticastLike`](MulticastLike.md).[`[ComputationLike_isPure]`](MulticastLike.md#computationlike_ispure)

***

### \[ComputationLike\_isSynchronous\]

> `readonly` **\[ComputationLike\_isSynchronous\]**: `false`

#### Overrides

[`MulticastLike`](MulticastLike.md).[`[ComputationLike_isSynchronous]`](MulticastLike.md#computationlike_issynchronous)

## Methods

### \[BroadcasterLike\_connect\]()

> **\[BroadcasterLike\_connect\]**(`sink`): `void`

#### Parameters

##### sink

[`SinkLike`](../../utils/interfaces/SinkLike.md)\<`T`\>

#### Returns

`void`

***

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

[`MulticastLike`](MulticastLike.md).[`[DisposableContainerLike_add]`](MulticastLike.md#disposablecontainerlike_add)

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

[`MulticastLike`](MulticastLike.md).[`[DisposableContainerLike_add]`](MulticastLike.md#disposablecontainerlike_add)

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

[`MulticastLike`](MulticastLike.md).[`[DisposableContainerLike_add]`](MulticastLike.md#disposablecontainerlike_add)
