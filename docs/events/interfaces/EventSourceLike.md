[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [events](../README.md) / EventSourceLike

# Interface: EventSourceLike\<T\>

## Extends

- [`PureComputationLike`](../../computations/interfaces/PureComputationLike.md)

## Extended by

- [`DispatcherLike`](../../concurrent/interfaces/DispatcherLike.md)
- [`PublisherLike`](PublisherLike.md)
- [`StoreLike`](StoreLike.md)

## Type Parameters

• **T** = `unknown`

## Properties

### \[ComputationLike\_isSynchronous\]

> `readonly` **\[ComputationLike\_isSynchronous\]**: `false`

#### Overrides

[`PureComputationLike`](../../computations/interfaces/PureComputationLike.md).[`[ComputationLike_isSynchronous]`](../../computations/interfaces/PureComputationLike.md#computationlike_issynchronous)

## Methods

### \[EventSourceLike\_addEventListener\]()

> **\[EventSourceLike\_addEventListener\]**(`listener`): `void`

#### Parameters

##### listener

[`EventListenerLike`](EventListenerLike.md)\<`T`\>

#### Returns

`void`
