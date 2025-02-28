[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / RunnableLike

# Interface: RunnableLike\<T\>

Represents a deferred computation that is synchronously evaluated.

## Extends

- [`SynchronousComputationLike`](SynchronousComputationLike.md)

## Extended by

- [`PureRunnableLike`](PureRunnableLike.md)
- [`RunnableWithSideEffectsLike`](RunnableWithSideEffectsLike.md)

## Type Parameters

• **T** = `unknown`

## Properties

### \[ComputationLike\_isDeferred\]?

> `readonly` `optional` **\[ComputationLike\_isDeferred\]**: `true`

#### Inherited from

[`SynchronousComputationLike`](SynchronousComputationLike.md).[`[ComputationLike_isDeferred]`](SynchronousComputationLike.md#computationlike_isdeferred)

***

### \[ComputationLike\_isPure\]?

> `readonly` `optional` **\[ComputationLike\_isPure\]**: `boolean`

#### Inherited from

[`SynchronousComputationLike`](SynchronousComputationLike.md).[`[ComputationLike_isPure]`](SynchronousComputationLike.md#computationlike_ispure)

***

### \[ComputationLike\_isSynchronous\]?

> `readonly` `optional` **\[ComputationLike\_isSynchronous\]**: `true`

#### Inherited from

[`SynchronousComputationLike`](SynchronousComputationLike.md).[`[ComputationLike_isSynchronous]`](SynchronousComputationLike.md#computationlike_issynchronous)

## Methods

### \[RunnableLike\_eval\]()

> **\[RunnableLike\_eval\]**(`sink`): `void`

#### Parameters

##### sink

[`SinkLike`](SinkLike.md)\<`T`\>

#### Returns

`void`
