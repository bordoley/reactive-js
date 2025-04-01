[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / ProducerLike

# Interface: ProducerLike\<T\>

## Extends

- [`DeferredReactiveSourceLike`](DeferredReactiveSourceLike.md)\<`T`, [`ConsumerLike`](../../utils/interfaces/ConsumerLike.md)\<`T`\>\>.[`ComputationLike`](ComputationLike.md)

## Extended by

- [`PureProducerLike`](PureProducerLike.md)
- [`ProducerWithSideEffectsLike`](ProducerWithSideEffectsLike.md)

## Type Parameters

• **T** = `unknown`

## Properties

### \[ComputationLike\_isDeferred\]

> `readonly` **\[ComputationLike\_isDeferred\]**: `true`

#### Overrides

[`ComputationLike`](ComputationLike.md).[`[ComputationLike_isDeferred]`](ComputationLike.md#computationlike_isdeferred)

***

### \[ComputationLike\_isPure\]

> `readonly` **\[ComputationLike\_isPure\]**: `false` \| [`Optional`](../../functions/type-aliases/Optional.md)\<`true`\>

#### Inherited from

[`ComputationLike`](ComputationLike.md).[`[ComputationLike_isPure]`](ComputationLike.md#computationlike_ispure)

***

### \[ComputationLike\_isSynchronous\]

> `readonly` **\[ComputationLike\_isSynchronous\]**: `false`

#### Overrides

[`ComputationLike`](ComputationLike.md).[`[ComputationLike_isSynchronous]`](ComputationLike.md#computationlike_issynchronous)

## Methods

### \[ReactiveSourceLike\_subscribe\]()

> **\[ReactiveSourceLike\_subscribe\]**(`EventListener`): `void`

#### Parameters

##### EventListener

[`ConsumerLike`](../../utils/interfaces/ConsumerLike.md)

#### Returns

`void`

#### Inherited from

[`DeferredReactiveSourceLike`](DeferredReactiveSourceLike.md).[`[ReactiveSourceLike_subscribe]`](DeferredReactiveSourceLike.md#reactivesourcelike_subscribe)
