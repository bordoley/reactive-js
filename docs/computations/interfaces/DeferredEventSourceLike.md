[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / DeferredEventSourceLike

# Interface: DeferredEventSourceLike\<T, TConsumer\>

## Extends

- [`EventSourceLike`](EventSourceLike.md)\<`T`, `TConsumer`\>.`AsyncIterable`\<`T`\>

## Extended by

- [`ProducerLike`](ProducerLike.md)
- [`ObservableLike`](ObservableLike.md)

## Type Parameters

• **T** = `unknown`

• **TConsumer** *extends* [`ConsumerLike`](../../utils/interfaces/ConsumerLike.md)\<`T`\> = [`ConsumerLike`](../../utils/interfaces/ConsumerLike.md)\<`T`\>

## Properties

### \[ComputationLike\_isDeferred\]

> **\[ComputationLike\_isDeferred\]**: [`Optional`](../../functions/type-aliases/Optional.md)\<`true`\>

#### Overrides

[`EventSourceLike`](EventSourceLike.md).[`[ComputationLike_isDeferred]`](EventSourceLike.md#computationlike_isdeferred)

***

### \[ComputationLike\_isPure\]

> `readonly` **\[ComputationLike\_isPure\]**: `false` \| [`Optional`](../../functions/type-aliases/Optional.md)\<`true`\>

#### Inherited from

[`EventSourceLike`](EventSourceLike.md).[`[ComputationLike_isPure]`](EventSourceLike.md#computationlike_ispure)

***

### \[ComputationLike\_isSynchronous\]

> `readonly` **\[ComputationLike\_isSynchronous\]**: `false` \| [`Optional`](../../functions/type-aliases/Optional.md)\<`true`\>

#### Inherited from

[`EventSourceLike`](EventSourceLike.md).[`[ComputationLike_isSynchronous]`](EventSourceLike.md#computationlike_issynchronous)

## Methods

### \[asyncIterator\]()

> **\[asyncIterator\]**(`options`?): `AsyncIterator`\<`T`\>

#### Parameters

##### options?

###### scheduler?

[`SchedulerLike`](../../utils/interfaces/SchedulerLike.md)

#### Returns

`AsyncIterator`\<`T`\>

#### Overrides

`AsyncIterable.[asyncIterator]`

***

### \[EventSourceLike\_subscribe\]()

> **\[EventSourceLike\_subscribe\]**(`EventListener`): `void`

#### Parameters

##### EventListener

`TConsumer`

#### Returns

`void`

#### Inherited from

[`EventSourceLike`](EventSourceLike.md).[`[EventSourceLike_subscribe]`](EventSourceLike.md#eventsourcelike_subscribe)
