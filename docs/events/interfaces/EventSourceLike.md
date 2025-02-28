[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [events](../README.md) / EventSourceLike

# Interface: EventSourceLike\<T\>

## Extends

- [`PureComputationLike`](../../computations/interfaces/PureComputationLike.md).[`ReactiveComputationLike`](../../computations/interfaces/ReactiveComputationLike.md)

## Extended by

- [`DispatcherLike`](../../concurrent/interfaces/DispatcherLike.md)
- [`PublisherLike`](PublisherLike.md)
- [`StoreLike`](StoreLike.md)

## Type Parameters

• **T** = `unknown`

## Properties

### \[ComputationLike\_isDeferred\]

> `readonly` **\[ComputationLike\_isDeferred\]**: `false`

#### Overrides

[`ReactiveComputationLike`](../../computations/interfaces/ReactiveComputationLike.md).[`[ComputationLike_isDeferred]`](../../computations/interfaces/ReactiveComputationLike.md#computationlike_isdeferred)

***

### \[ComputationLike\_isInteractive\]

> `readonly` **\[ComputationLike\_isInteractive\]**: `false`

#### Overrides

[`ReactiveComputationLike`](../../computations/interfaces/ReactiveComputationLike.md).[`[ComputationLike_isInteractive]`](../../computations/interfaces/ReactiveComputationLike.md#computationlike_isinteractive)

***

### \[ComputationLike\_isPure\]?

> `readonly` `optional` **\[ComputationLike\_isPure\]**: `true`

#### Overrides

[`ReactiveComputationLike`](../../computations/interfaces/ReactiveComputationLike.md).[`[ComputationLike_isPure]`](../../computations/interfaces/ReactiveComputationLike.md#computationlike_ispure)

***

### \[ComputationLike\_isSynchronous\]

> `readonly` **\[ComputationLike\_isSynchronous\]**: `false`

#### Overrides

[`ReactiveComputationLike`](../../computations/interfaces/ReactiveComputationLike.md).[`[ComputationLike_isSynchronous]`](../../computations/interfaces/ReactiveComputationLike.md#computationlike_issynchronous)

## Methods

### \[EventSourceLike\_addEventListener\]()

> **\[EventSourceLike\_addEventListener\]**(`listener`): `void`

#### Parameters

##### listener

[`EventListenerLike`](EventListenerLike.md)\<`T`\>

#### Returns

`void`
