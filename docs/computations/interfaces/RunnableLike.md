[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / RunnableLike

# Interface: RunnableLike\<T\>

Represents a deferred computation that is synchronously evaluated.

## Extends

- [`SynchronousReactiveComputation`](SynchronousReactiveComputation.md)

## Extended by

- [`PureRunnableLike`](PureRunnableLike.md)
- [`RunnableWithSideEffectsLike`](RunnableWithSideEffectsLike.md)

## Type Parameters

• **T** = `unknown`

## Properties

### \[ComputationLike\_isDeferred\]?

> `readonly` `optional` **\[ComputationLike\_isDeferred\]**: `true`

#### Inherited from

[`SynchronousReactiveComputation`](SynchronousReactiveComputation.md).[`[ComputationLike_isDeferred]`](SynchronousReactiveComputation.md#computationlike_isdeferred)

***

### \[ComputationLike\_isInteractive\]

> `readonly` **\[ComputationLike\_isInteractive\]**: `false`

#### Inherited from

[`SynchronousReactiveComputation`](SynchronousReactiveComputation.md).[`[ComputationLike_isInteractive]`](SynchronousReactiveComputation.md#computationlike_isinteractive)

***

### \[ComputationLike\_isPure\]?

> `readonly` `optional` **\[ComputationLike\_isPure\]**: `boolean`

#### Inherited from

[`SynchronousReactiveComputation`](SynchronousReactiveComputation.md).[`[ComputationLike_isPure]`](SynchronousReactiveComputation.md#computationlike_ispure)

***

### \[ComputationLike\_isSynchronous\]?

> `readonly` `optional` **\[ComputationLike\_isSynchronous\]**: `true`

#### Inherited from

[`SynchronousReactiveComputation`](SynchronousReactiveComputation.md).[`[ComputationLike_isSynchronous]`](SynchronousReactiveComputation.md#computationlike_issynchronous)

## Methods

### \[RunnableLike\_eval\]()

> **\[RunnableLike\_eval\]**(`sink`): `void`

#### Parameters

##### sink

[`SinkLike`](SinkLike.md)\<`T`\>

#### Returns

`void`
