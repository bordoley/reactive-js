[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / BroadcasterLike

# Interface: BroadcasterLike\<T\>

## Extends

- [`SourceLike`](SourceLike.md)\<`T`\>.[`DisposableContainerLike`](../../utils/interfaces/DisposableContainerLike.md).[`MulticastComputationLike`](MulticastComputationLike.md)

## Extended by

- [`PublisherLike`](PublisherLike.md)
- [`StoreLike`](StoreLike.md)
- [`StreamLike`](StreamLike.md)
- [`WindowLocationLike`](../../web/interfaces/WindowLocationLike.md)

## Type Parameters

• **T** = `unknown`

## Properties

### \[ComputationLike\_isDeferred\]

> `readonly` **\[ComputationLike\_isDeferred\]**: `false`

#### Overrides

[`MulticastComputationLike`](MulticastComputationLike.md).[`[ComputationLike_isDeferred]`](MulticastComputationLike.md#computationlike_isdeferred)

***

### \[ComputationLike\_isPure\]

> `readonly` **\[ComputationLike\_isPure\]**: [`Optional`](../../functions/type-aliases/Optional.md)\<`true`\>

#### Overrides

[`MulticastComputationLike`](MulticastComputationLike.md).[`[ComputationLike_isPure]`](MulticastComputationLike.md#computationlike_ispure)

***

### \[ComputationLike\_isSynchronous\]

> `readonly` **\[ComputationLike\_isSynchronous\]**: `false`

#### Overrides

[`MulticastComputationLike`](MulticastComputationLike.md).[`[ComputationLike_isSynchronous]`](MulticastComputationLike.md#computationlike_issynchronous)

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

[`MulticastComputationLike`](MulticastComputationLike.md).[`[DisposableContainerLike_add]`](MulticastComputationLike.md#disposablecontainerlike_add)

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

[`MulticastComputationLike`](MulticastComputationLike.md).[`[DisposableContainerLike_add]`](MulticastComputationLike.md#disposablecontainerlike_add)

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

[`MulticastComputationLike`](MulticastComputationLike.md).[`[DisposableContainerLike_add]`](MulticastComputationLike.md#disposablecontainerlike_add)

***

### \[SourceLike\_subscribe\]()

> **\[SourceLike\_subscribe\]**(`EventListener`): `void`

#### Parameters

##### EventListener

[`EventListenerLike`](../../utils/interfaces/EventListenerLike.md)

#### Returns

`void`

#### Inherited from

[`SourceLike`](SourceLike.md).[`[SourceLike_subscribe]`](SourceLike.md#sourcelike_subscribe)
