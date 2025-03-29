[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / ProducerLike

# Interface: ProducerLike\<T\>

## Extends

- [`SourceLike`](SourceLike.md)\<`T`, [`ConsumerLike`](../../utils/interfaces/ConsumerLike.md)\<`T`\>\>.[`DeferredComputationLike`](DeferredComputationLike.md)

## Extended by

- [`PureProducerLike`](PureProducerLike.md)
- [`ProducerWithSideEffectsLike`](ProducerWithSideEffectsLike.md)

## Type Parameters

• **T** = `unknown`

## Properties

### \[ComputationLike\_isDeferred\]?

> `readonly` `optional` **\[ComputationLike\_isDeferred\]**: `true`

#### Overrides

[`DeferredComputationLike`](DeferredComputationLike.md).[`[ComputationLike_isDeferred]`](DeferredComputationLike.md#computationlike_isdeferred)

***

### \[ComputationLike\_isSynchronous\]

> `readonly` **\[ComputationLike\_isSynchronous\]**: `false`

#### Overrides

[`DeferredComputationLike`](DeferredComputationLike.md).[`[ComputationLike_isSynchronous]`](DeferredComputationLike.md#computationlike_issynchronous)
