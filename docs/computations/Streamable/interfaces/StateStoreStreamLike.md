[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Streamable](../README.md) / StateStoreStreamLike

# Interface: StateStoreStreamLike\<TAction, T\>

A `ConsumerLike` type that consumes enqueued events to
be consumed.

## Extends

- [`StreamLike`](../../interfaces/StreamLike.md)\<`TAction`, `T`\>.[`StoreLike`](../../interfaces/StoreLike.md)\<`T`\>

## Extended by

- [`SpringLike`](SpringLike.md)

## Type Parameters

• **TAction**

• **T**

## Properties

### \[ComputationLike\_isDeferred\]

> `readonly` **\[ComputationLike\_isDeferred\]**: `false`

#### Inherited from

[`StoreLike`](../../interfaces/StoreLike.md).[`[ComputationLike_isDeferred]`](../../interfaces/StoreLike.md#computationlike_isdeferred)

***

### \[ComputationLike\_isPure\]

> `readonly` **\[ComputationLike\_isPure\]**: [`Optional`](../../../functions/type-aliases/Optional.md)\<`true`\>

#### Inherited from

[`StoreLike`](../../interfaces/StoreLike.md).[`[ComputationLike_isPure]`](../../interfaces/StoreLike.md#computationlike_ispure)

***

### \[ComputationLike\_isSynchronous\]

> `readonly` **\[ComputationLike\_isSynchronous\]**: `false`

#### Inherited from

[`StoreLike`](../../interfaces/StoreLike.md).[`[ComputationLike_isSynchronous]`](../../interfaces/StoreLike.md#computationlike_issynchronous)

***

### \[StoreLike\_value\]

> `readonly` **\[StoreLike\_value\]**: `T`

#### Inherited from

[`StoreLike`](../../interfaces/StoreLike.md).[`[StoreLike_value]`](../../interfaces/StoreLike.md#storelike_value)

## Methods

### \[EventSourceLike\_subscribe\]()

> **\[EventSourceLike\_subscribe\]**(`EventListener`): `void`

#### Parameters

##### EventListener

[`EventListenerLike`](../../../utils/interfaces/EventListenerLike.md)

#### Returns

`void`

#### Inherited from

[`StoreLike`](../../interfaces/StoreLike.md).[`[EventSourceLike_subscribe]`](../../interfaces/StoreLike.md#eventsourcelike_subscribe)
