[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / PublisherLike

# Interface: PublisherLike\<T\>

## Extends

- [`BroadcasterLike`](BroadcasterLike.md)\<`T`\>.[`SinkLike`](../../utils/interfaces/SinkLike.md)\<`T`\>

## Extended by

- [`WritableStoreLike`](WritableStoreLike.md)

## Type Parameters

• **T** = `unknown`

## Properties

### \[ComputationLike\_isDeferred\]

> `readonly` **\[ComputationLike\_isDeferred\]**: `false`

#### Inherited from

[`BroadcasterLike`](BroadcasterLike.md).[`[ComputationLike_isDeferred]`](BroadcasterLike.md#computationlike_isdeferred)

***

### \[ComputationLike\_isPure\]

> `readonly` **\[ComputationLike\_isPure\]**: [`Optional`](../../functions/type-aliases/Optional.md)\<`true`\>

#### Inherited from

[`BroadcasterLike`](BroadcasterLike.md).[`[ComputationLike_isPure]`](BroadcasterLike.md#computationlike_ispure)

***

### \[ComputationLike\_isSynchronous\]

> `readonly` **\[ComputationLike\_isSynchronous\]**: `false`

#### Inherited from

[`BroadcasterLike`](BroadcasterLike.md).[`[ComputationLike_isSynchronous]`](BroadcasterLike.md#computationlike_issynchronous)

***

### \[SinkLike\_isCompleted\]

> `readonly` **\[SinkLike\_isCompleted\]**: `boolean`

#### Inherited from

[`SinkLike`](../../utils/interfaces/SinkLike.md).[`[SinkLike_isCompleted]`](../../utils/interfaces/SinkLike.md#sinklike_iscompleted)

## Methods

### \[SinkLike\_complete\]()

> **\[SinkLike\_complete\]**(): `void`

#### Returns

`void`

#### Inherited from

[`SinkLike`](../../utils/interfaces/SinkLike.md).[`[SinkLike_complete]`](../../utils/interfaces/SinkLike.md#sinklike_complete)

***

### \[SourceLike\_subscribe\]()

> **\[SourceLike\_subscribe\]**(`EventListener`): `void`

#### Parameters

##### EventListener

[`EventListenerLike`](../../utils/interfaces/EventListenerLike.md)

#### Returns

`void`

#### Inherited from

[`BroadcasterLike`](BroadcasterLike.md).[`[SourceLike_subscribe]`](BroadcasterLike.md#sourcelike_subscribe)
