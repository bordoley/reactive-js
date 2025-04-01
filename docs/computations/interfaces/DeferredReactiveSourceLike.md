[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / DeferredReactiveSourceLike

# Interface: DeferredReactiveSourceLike\<T, TConsumer\>

## Extends

- [`ReactiveSourceLike`](ReactiveSourceLike.md)\<`T`, `TConsumer`\>

## Extended by

- [`ProducerLike`](ProducerLike.md)
- [`ObservableLike`](ObservableLike.md)

## Type Parameters

• **T** = `unknown`

• **TConsumer** *extends* [`ConsumerLike`](../../utils/interfaces/ConsumerLike.md)\<`T`\> = [`ConsumerLike`](../../utils/interfaces/ConsumerLike.md)\<`T`\>

## Properties

### \[ComputationLike\_isDeferred\]

> **\[ComputationLike\_isDeferred\]**: `true`

#### Overrides

[`ReactiveSourceLike`](ReactiveSourceLike.md).[`[ComputationLike_isDeferred]`](ReactiveSourceLike.md#computationlike_isdeferred)

***

### \[ComputationLike\_isPure\]

> `readonly` **\[ComputationLike\_isPure\]**: `false` \| [`Optional`](../../functions/type-aliases/Optional.md)\<`true`\>

#### Inherited from

[`ReactiveSourceLike`](ReactiveSourceLike.md).[`[ComputationLike_isPure]`](ReactiveSourceLike.md#computationlike_ispure)

***

### \[ComputationLike\_isSynchronous\]

> `readonly` **\[ComputationLike\_isSynchronous\]**: `false` \| [`Optional`](../../functions/type-aliases/Optional.md)\<`true`\>

#### Inherited from

[`ReactiveSourceLike`](ReactiveSourceLike.md).[`[ComputationLike_isSynchronous]`](ReactiveSourceLike.md#computationlike_issynchronous)

## Methods

### \[ReactiveSourceLike\_subscribe\]()

> **\[ReactiveSourceLike\_subscribe\]**(`EventListener`): `void`

#### Parameters

##### EventListener

`TConsumer`

#### Returns

`void`

#### Inherited from

[`ReactiveSourceLike`](ReactiveSourceLike.md).[`[ReactiveSourceLike_subscribe]`](ReactiveSourceLike.md#reactivesourcelike_subscribe)
