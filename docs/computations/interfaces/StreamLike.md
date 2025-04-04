[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / StreamLike

# Interface: StreamLike\<TReq, T\>

A `ConsumerLike` type that consumes enqueued events to
be consumed.

## Extends

- [`ConsumerLike`](../../utils/interfaces/ConsumerLike.md)\<`TReq`\>.[`BroadcasterLike`](BroadcasterLike.md)\<`T`\>

## Extended by

- [`AnimationLike`](../Streamable/interfaces/AnimationLike.md)
- [`StateStoreStreamLike`](../Streamable/interfaces/StateStoreStreamLike.md)

## Type Parameters

• **TReq**

• **T**

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

## Methods

### \[EventSourceLike\_subscribe\]()

> **\[EventSourceLike\_subscribe\]**(`EventListener`): `void`

#### Parameters

##### EventListener

[`EventListenerLike`](../../utils/interfaces/EventListenerLike.md)

#### Returns

`void`

#### Inherited from

[`BroadcasterLike`](BroadcasterLike.md).[`[EventSourceLike_subscribe]`](BroadcasterLike.md#eventsourcelike_subscribe)
