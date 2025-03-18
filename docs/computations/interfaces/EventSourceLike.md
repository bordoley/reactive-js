[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / EventSourceLike

# Interface: EventSourceLike\<T\>

## Extends

- [`MulticastLike`](MulticastLike.md)

## Extended by

- [`AnimationStreamLike`](../Streamable/interfaces/AnimationStreamLike.md)
- [`PublisherLike`](PublisherLike.md)
- [`StoreLike`](StoreLike.md)

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

### \[EventSourceLike\_addEventListener\]()

> **\[EventSourceLike\_addEventListener\]**(`listener`): `void`

#### Parameters

##### listener

[`EventListenerLike`](../../utils/interfaces/EventListenerLike.md)\<`T`\>

#### Returns

`void`
