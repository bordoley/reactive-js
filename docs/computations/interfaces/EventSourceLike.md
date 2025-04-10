[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / EventSourceLike

# Interface: EventSourceLike\<T, TEventListener\>

## Extends

- [`ComputationLike`](ComputationLike.md)

## Extended by

- [`DeferredEventSourceLike`](DeferredEventSourceLike.md)
- [`BroadcasterLike`](BroadcasterLike.md)

## Type Parameters

• **T** = `unknown`

• **TEventListener** *extends* [`EventListenerLike`](../../utils/interfaces/EventListenerLike.md)\<`T`\> = [`EventListenerLike`](../../utils/interfaces/EventListenerLike.md)\<`T`\>

## Properties

### \[ComputationLike\_isDeferred\]

> `readonly` **\[ComputationLike\_isDeferred\]**: `false` \| [`Optional`](../../functions/type-aliases/Optional.md)\<`true`\>

#### Inherited from

[`ComputationLike`](ComputationLike.md).[`[ComputationLike_isDeferred]`](ComputationLike.md#computationlike_isdeferred)

***

### \[ComputationLike\_isPure\]

> `readonly` **\[ComputationLike\_isPure\]**: `false` \| [`Optional`](../../functions/type-aliases/Optional.md)\<`true`\>

#### Inherited from

[`ComputationLike`](ComputationLike.md).[`[ComputationLike_isPure]`](ComputationLike.md#computationlike_ispure)

***

### \[ComputationLike\_isSynchronous\]

> `readonly` **\[ComputationLike\_isSynchronous\]**: `false` \| [`Optional`](../../functions/type-aliases/Optional.md)\<`true`\>

#### Inherited from

[`ComputationLike`](ComputationLike.md).[`[ComputationLike_isSynchronous]`](ComputationLike.md#computationlike_issynchronous)

## Methods

### \[EventSourceLike\_subscribe\]()

> **\[EventSourceLike\_subscribe\]**(`EventListener`): `void`

#### Parameters

##### EventListener

`TEventListener`

#### Returns

`void`
