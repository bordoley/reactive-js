[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / EventSourceLike

# Interface: EventSourceLike\<T\>

## Extends

- [`MulticastComputationLike`](MulticastComputationLike.md)

## Extended by

- [`PublisherLike`](PublisherLike.md)
- [`StoreLike`](StoreLike.md)

## Type Parameters

• **T** = `unknown`

## Properties

### \[ComputationLike\_isDeferred\]

> `readonly` **\[ComputationLike\_isDeferred\]**: `false`

#### Overrides

[`MulticastComputationLike`](MulticastComputationLike.md).[`[ComputationLike_isDeferred]`](MulticastComputationLike.md#computationlike_isdeferred)

***

### \[ComputationLike\_isPure\]?

> `readonly` `optional` **\[ComputationLike\_isPure\]**: `true`

#### Overrides

[`MulticastComputationLike`](MulticastComputationLike.md).[`[ComputationLike_isPure]`](MulticastComputationLike.md#computationlike_ispure)

***

### \[ComputationLike\_isSynchronous\]

> `readonly` **\[ComputationLike\_isSynchronous\]**: `false`

#### Overrides

[`MulticastComputationLike`](MulticastComputationLike.md).[`[ComputationLike_isSynchronous]`](MulticastComputationLike.md#computationlike_issynchronous)

## Methods

### \[EventSourceLike\_addEventListener\]()

> **\[EventSourceLike\_addEventListener\]**(`listener`): `void`

#### Parameters

##### listener

[`EventListenerLike`](EventListenerLike.md)\<`T`\>

#### Returns

`void`
