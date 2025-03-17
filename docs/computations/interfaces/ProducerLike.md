[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / ProducerLike

# Interface: ProducerLike\<T\>

## Extends

- [`ComputationLike`](ComputationLike.md)

## Extended by

- [`PureProducerLike`](PureProducerLike.md)
- [`ProducerWithSideEffectsLike`](ProducerWithSideEffectsLike.md)

## Type Parameters

• **T** = `unknown`

## Properties

### \[ComputationLike\_isDeferred\]?

> `readonly` `optional` **\[ComputationLike\_isDeferred\]**: `true`

#### Overrides

[`ComputationLike`](ComputationLike.md).[`[ComputationLike_isDeferred]`](ComputationLike.md#computationlike_isdeferred)

## Methods

### \[ProducerLike\_consume\]()

> **\[ProducerLike\_consume\]**(`consumer`): `void`

#### Parameters

##### consumer

[`ConsumerLike`](../../utils/interfaces/ConsumerLike.md)\<`T`\>

#### Returns

`void`
