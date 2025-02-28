[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / RunnableLike

# Interface: RunnableLike\<T\>

Represents a deferred computation that is synchronously evaluated.

## Extends

- [`RunnableComputationLike`](RunnableComputationLike.md)

## Extended by

- [`PureRunnableLike`](PureRunnableLike.md)
- [`RunnableWithSideEffectsLike`](RunnableWithSideEffectsLike.md)

## Type Parameters

• **T** = `unknown`

## Properties

### \[ComputationLike\_isDeferred\]?

> `readonly` `optional` **\[ComputationLike\_isDeferred\]**: `true`

#### Inherited from

[`RunnableComputationLike`](RunnableComputationLike.md).[`[ComputationLike_isDeferred]`](RunnableComputationLike.md#computationlike_isdeferred)

***

### \[ComputationLike\_isInteractive\]

> `readonly` **\[ComputationLike\_isInteractive\]**: `false`

#### Inherited from

[`RunnableComputationLike`](RunnableComputationLike.md).[`[ComputationLike_isInteractive]`](RunnableComputationLike.md#computationlike_isinteractive)

***

### \[ComputationLike\_isPure\]?

> `readonly` `optional` **\[ComputationLike\_isPure\]**: `boolean`

#### Inherited from

[`RunnableComputationLike`](RunnableComputationLike.md).[`[ComputationLike_isPure]`](RunnableComputationLike.md#computationlike_ispure)

***

### \[ComputationLike\_isSynchronous\]?

> `readonly` `optional` **\[ComputationLike\_isSynchronous\]**: `true`

#### Inherited from

[`RunnableComputationLike`](RunnableComputationLike.md).[`[ComputationLike_isSynchronous]`](RunnableComputationLike.md#computationlike_issynchronous)

## Methods

### \[RunnableLike\_eval\]()

> **\[RunnableLike\_eval\]**(`sink`): `void`

#### Parameters

##### sink

[`SinkLike`](SinkLike.md)\<`T`\>

#### Returns

`void`
