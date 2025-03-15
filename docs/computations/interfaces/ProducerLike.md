[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / ProducerLike

# Interface: ProducerLike\<T\>

## Extends

- [`DeferredComputationLike`](DeferredComputationLike.md)

## Type Parameters

• **T** = `unknown`

## Properties

### \[ComputationLike\_isDeferred\]

> `readonly` **\[ComputationLike\_isDeferred\]**: `true`

#### Overrides

[`DeferredComputationLike`](DeferredComputationLike.md).[`[ComputationLike_isDeferred]`](DeferredComputationLike.md#computationlike_isdeferred)

***

### \[ComputationLike\_isSynchronous\]

> `readonly` **\[ComputationLike\_isSynchronous\]**: `false`

#### Overrides

[`DeferredComputationLike`](DeferredComputationLike.md).[`[ComputationLike_isSynchronous]`](DeferredComputationLike.md#computationlike_issynchronous)

## Methods

### \[ProducerLike\_consume\]()

> **\[ProducerLike\_consume\]**(`consumer`): `void`

#### Parameters

##### consumer

[`QueueableLike`](../../utils/interfaces/QueueableLike.md)\<`T`\>

#### Returns

`void`
