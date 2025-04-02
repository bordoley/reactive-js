[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Streamable](../README.md) / StateStoreStreamLike

# Interface: StateStoreStreamLike\<TAction, T\>

A `ConsumerLike` type that consumes enqueued events to
be consumed.

## Extends

- [`StreamLike`](../../interfaces/StreamLike.md)\<`TAction`, `T`\>.[`StoreLike`](../../interfaces/StoreLike.md)\<`T`\>

## Extended by

- [`SpringStreamLike`](SpringStreamLike.md)

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

### \[PauseableLike\_isPaused\]

> `readonly` **\[PauseableLike\_isPaused\]**: [`StoreLike`](../../interfaces/StoreLike.md)\<`boolean`\>

Boolean flag indicating if the PauseableLike is currently paused or not.

#### Inherited from

[`StreamLike`](../../interfaces/StreamLike.md).[`[PauseableLike_isPaused]`](../../interfaces/StreamLike.md#pauseablelike_ispaused)

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

***

### \[PauseableLike\_pause\]()

> **\[PauseableLike\_pause\]**(): `void`

Imperatively pause the source.

#### Returns

`void`

#### Inherited from

[`StreamLike`](../../interfaces/StreamLike.md).[`[PauseableLike_pause]`](../../interfaces/StreamLike.md#pauseablelike_pause)

***

### \[PauseableLike\_resume\]()

> **\[PauseableLike\_resume\]**(): `void`

Imperatively resume the source.

#### Returns

`void`

#### Inherited from

[`StreamLike`](../../interfaces/StreamLike.md).[`[PauseableLike_resume]`](../../interfaces/StreamLike.md#pauseablelike_resume)
