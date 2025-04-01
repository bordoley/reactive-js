[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / ProducerWithSideEffectsLike

# Interface: ProducerWithSideEffectsLike\<T\>

## Extends

- [`ProducerLike`](ProducerLike.md)\<`T`\>

## Type Parameters

• **T** = `unknown`

## Properties

### \[ComputationLike\_isDeferred\]

> `readonly` **\[ComputationLike\_isDeferred\]**: `true`

#### Inherited from

[`ProducerLike`](ProducerLike.md).[`[ComputationLike_isDeferred]`](ProducerLike.md#computationlike_isdeferred)

***

### \[ComputationLike\_isPure\]

> `readonly` **\[ComputationLike\_isPure\]**: `false`

#### Overrides

[`ProducerLike`](ProducerLike.md).[`[ComputationLike_isPure]`](ProducerLike.md#computationlike_ispure)

***

### \[ComputationLike\_isSynchronous\]

> `readonly` **\[ComputationLike\_isSynchronous\]**: `false`

#### Inherited from

[`ProducerLike`](ProducerLike.md).[`[ComputationLike_isSynchronous]`](ProducerLike.md#computationlike_issynchronous)

## Methods

### \[ReactiveSourceLike\_subscribe\]()

> **\[ReactiveSourceLike\_subscribe\]**(`EventListener`): `void`

#### Parameters

##### EventListener

[`ConsumerLike`](../../utils/interfaces/ConsumerLike.md)

#### Returns

`void`

#### Inherited from

[`ProducerLike`](ProducerLike.md).[`[ReactiveSourceLike_subscribe]`](ProducerLike.md#reactivesourcelike_subscribe)
