[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / StreamLike

# Interface: StreamLike\<TReq, T\>

A `ConsumerLike` type that consumes enqueued events to
be consumed.

## Extends

- [`ConsumerLike`](../../utils/interfaces/ConsumerLike.md)\<`TReq`\>.[`BroadcasterLike`](BroadcasterLike.md)\<`T`\>.[`PauseableLike`](../../utils/interfaces/PauseableLike.md)

## Extended by

- [`AnimationLike`](../Streamable/interfaces/AnimationLike.md)

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

***

### \[PauseableLike\_isPaused\]

> `readonly` **\[PauseableLike\_isPaused\]**: [`StoreLike`](StoreLike.md)\<`boolean`\>

Boolean flag indicating if the PauseableLike is currently paused or not.

#### Inherited from

[`PauseableLike`](../../utils/interfaces/PauseableLike.md).[`[PauseableLike_isPaused]`](../../utils/interfaces/PauseableLike.md#pauseablelike_ispaused)

## Methods

### \[PauseableLike\_pause\]()

> **\[PauseableLike\_pause\]**(): `void`

Imperatively pause the source.

#### Returns

`void`

#### Inherited from

[`PauseableLike`](../../utils/interfaces/PauseableLike.md).[`[PauseableLike_pause]`](../../utils/interfaces/PauseableLike.md#pauseablelike_pause)

***

### \[PauseableLike\_resume\]()

> **\[PauseableLike\_resume\]**(): `void`

Imperatively resume the source.

#### Returns

`void`

#### Inherited from

[`PauseableLike`](../../utils/interfaces/PauseableLike.md).[`[PauseableLike_resume]`](../../utils/interfaces/PauseableLike.md#pauseablelike_resume)

***

### \[ReactiveSourceLike\_subscribe\]()

> **\[ReactiveSourceLike\_subscribe\]**(`EventListener`): `void`

#### Parameters

##### EventListener

[`EventListenerLike`](../../utils/interfaces/EventListenerLike.md)

#### Returns

`void`

#### Inherited from

[`BroadcasterLike`](BroadcasterLike.md).[`[ReactiveSourceLike_subscribe]`](BroadcasterLike.md#reactivesourcelike_subscribe)
