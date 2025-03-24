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

### \[ComputationLike\_isPure\]?

> `readonly` `optional` **\[ComputationLike\_isPure\]**: `true`

#### Overrides

[`MulticastComputationLike`](MulticastComputationLike.md).[`[ComputationLike_isPure]`](MulticastComputationLike.md#computationlike_ispure)

***

### \[ComputationLike\_isSynchronous\]

> `readonly` **\[ComputationLike\_isSynchronous\]**: `false`

#### Overrides

[`MulticastComputationLike`](MulticastComputationLike.md).[`[ComputationLike_isSynchronous]`](MulticastComputationLike.md#computationlike_issynchronous)
