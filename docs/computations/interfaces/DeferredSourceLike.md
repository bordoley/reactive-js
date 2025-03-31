[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / DeferredSourceLike

# Interface: DeferredSourceLike\<T, TConsumer\>

## Extends

- [`SourceLike`](SourceLike.md)\<`T`, `TConsumer`\>

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

[`SourceLike`](SourceLike.md).[`[ComputationLike_isDeferred]`](SourceLike.md#computationlike_isdeferred)

***

### \[ComputationLike\_isPure\]

> `readonly` **\[ComputationLike\_isPure\]**: `false` \| [`Optional`](../../functions/type-aliases/Optional.md)\<`true`\>

#### Inherited from

[`SourceLike`](SourceLike.md).[`[ComputationLike_isPure]`](SourceLike.md#computationlike_ispure)

***

### \[ComputationLike\_isSynchronous\]

> `readonly` **\[ComputationLike\_isSynchronous\]**: `false` \| [`Optional`](../../functions/type-aliases/Optional.md)\<`true`\>

#### Inherited from

[`SourceLike`](SourceLike.md).[`[ComputationLike_isSynchronous]`](SourceLike.md#computationlike_issynchronous)

## Methods

### \[SourceLike\_subscribe\]()

> **\[SourceLike\_subscribe\]**(`EventListener`): `void`

#### Parameters

##### EventListener

`TConsumer`

#### Returns

`void`

#### Inherited from

[`SourceLike`](SourceLike.md).[`[SourceLike_subscribe]`](SourceLike.md#sourcelike_subscribe)
