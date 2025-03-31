[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / WritableStoreLike

# Interface: WritableStoreLike\<T\>

## Extends

- [`StoreLike`](StoreLike.md)\<`T`\>.[`PublisherLike`](PublisherLike.md)\<`T`\>

## Type Parameters

• **T** = `unknown`

## Properties

### \[ComputationLike\_isDeferred\]

> `readonly` **\[ComputationLike\_isDeferred\]**: `false`

#### Inherited from

[`PublisherLike`](PublisherLike.md).[`[ComputationLike_isDeferred]`](PublisherLike.md#computationlike_isdeferred)

***

### \[ComputationLike\_isPure\]

> `readonly` **\[ComputationLike\_isPure\]**: [`Optional`](../../functions/type-aliases/Optional.md)\<`true`\>

#### Inherited from

[`PublisherLike`](PublisherLike.md).[`[ComputationLike_isPure]`](PublisherLike.md#computationlike_ispure)

***

### \[ComputationLike\_isSynchronous\]

> `readonly` **\[ComputationLike\_isSynchronous\]**: `false`

#### Inherited from

[`PublisherLike`](PublisherLike.md).[`[ComputationLike_isSynchronous]`](PublisherLike.md#computationlike_issynchronous)

***

### \[SinkLike\_isCompleted\]

> `readonly` **\[SinkLike\_isCompleted\]**: `boolean`

#### Inherited from

[`PublisherLike`](PublisherLike.md).[`[SinkLike_isCompleted]`](PublisherLike.md#sinklike_iscompleted)

***

### \[StoreLike\_value\]

> **\[StoreLike\_value\]**: `T`

#### Overrides

[`StoreLike`](StoreLike.md).[`[StoreLike_value]`](StoreLike.md#storelike_value)

## Methods

### \[SinkLike\_complete\]()

> **\[SinkLike\_complete\]**(): `void`

#### Returns

`void`

#### Inherited from

[`PublisherLike`](PublisherLike.md).[`[SinkLike_complete]`](PublisherLike.md#sinklike_complete)

***

### \[SourceLike\_subscribe\]()

> **\[SourceLike\_subscribe\]**(`EventListener`): `void`

#### Parameters

##### EventListener

[`EventListenerLike`](../../utils/interfaces/EventListenerLike.md)

#### Returns

`void`

#### Inherited from

[`PublisherLike`](PublisherLike.md).[`[SourceLike_subscribe]`](PublisherLike.md#sourcelike_subscribe)
