[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / SourceLike

# Interface: SourceLike\<T, TEventListener\>

## Extends

- [`ComputationLike`](ComputationLike.md)

## Extended by

- [`ProducerLike`](ProducerLike.md)
- [`ObservableLike`](ObservableLike.md)
- [`BroadcasterLike`](BroadcasterLike.md)

## Type Parameters

• **T** = `unknown`

• **TEventListener** *extends* [`EventListenerLike`](../../utils/interfaces/EventListenerLike.md)\<`T`\> = [`EventListenerLike`](../../utils/interfaces/EventListenerLike.md)\<`T`\>

## Properties

### \[ComputationLike\_isDeferred\]?

> `readonly` `optional` **\[ComputationLike\_isDeferred\]**: `boolean`

#### Inherited from

[`ComputationLike`](ComputationLike.md).[`[ComputationLike_isDeferred]`](ComputationLike.md#computationlike_isdeferred)

***

### \[ComputationLike\_isPure\]?

> `readonly` `optional` **\[ComputationLike\_isPure\]**: `boolean`

#### Inherited from

[`ComputationLike`](ComputationLike.md).[`[ComputationLike_isPure]`](ComputationLike.md#computationlike_ispure)

***

### \[ComputationLike\_isSynchronous\]?

> `readonly` `optional` **\[ComputationLike\_isSynchronous\]**: `boolean`

#### Inherited from

[`ComputationLike`](ComputationLike.md).[`[ComputationLike_isSynchronous]`](ComputationLike.md#computationlike_issynchronous)

## Methods

### \[SourceLike\_subscribe\]()

> **\[SourceLike\_subscribe\]**(`EventListener`): `void`

#### Parameters

##### EventListener

`TEventListener`

#### Returns

`void`
