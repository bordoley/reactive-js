[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / DeferredSourceLike

# Interface: DeferredSourceLike\<T, TEventListener\>

## Extends

- [`SourceLike`](SourceLike.md)\<`T`, `TEventListener`\>

## Type Parameters

• **T** = `unknown`

• **TEventListener** *extends* [`EventListenerLike`](../../utils/interfaces/EventListenerLike.md)\<`T`\> = [`EventListenerLike`](../../utils/interfaces/EventListenerLike.md)\<`T`\>

## Properties

### \[ComputationLike\_isDeferred\]?

> `optional` **\[ComputationLike\_isDeferred\]**: `true`

#### Overrides

[`SourceLike`](SourceLike.md).[`[ComputationLike_isDeferred]`](SourceLike.md#computationlike_isdeferred)

***

### \[ComputationLike\_isPure\]?

> `readonly` `optional` **\[ComputationLike\_isPure\]**: `boolean`

#### Inherited from

[`SourceLike`](SourceLike.md).[`[ComputationLike_isPure]`](SourceLike.md#computationlike_ispure)

***

### \[ComputationLike\_isSynchronous\]?

> `readonly` `optional` **\[ComputationLike\_isSynchronous\]**: `boolean`

#### Inherited from

[`SourceLike`](SourceLike.md).[`[ComputationLike_isSynchronous]`](SourceLike.md#computationlike_issynchronous)

## Methods

### \[SourceLike\_subscribe\]()

> **\[SourceLike\_subscribe\]**(`EventListener`): `void`

#### Parameters

##### EventListener

`TEventListener`

#### Returns

`void`

#### Inherited from

[`SourceLike`](SourceLike.md).[`[SourceLike_subscribe]`](SourceLike.md#sourcelike_subscribe)
