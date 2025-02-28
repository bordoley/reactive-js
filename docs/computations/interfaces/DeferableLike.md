[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / DeferableLike

# Interface: DeferableLike\<T\>

Represents a deferred computation that is synchronously evaluated.

## Extends

- [`SynchronousComputationLike`](SynchronousComputationLike.md)

## Extended by

- [`PureDeferableLike`](PureDeferableLike.md)
- [`DeferableWithSideEffectsLike`](DeferableWithSideEffectsLike.md)

## Type Parameters

• **T** = `unknown`

## Properties

### \[ComputationLike\_isDeferred\]?

> `readonly` `optional` **\[ComputationLike\_isDeferred\]**: `true`

#### Inherited from

[`SynchronousComputationLike`](SynchronousComputationLike.md).[`[ComputationLike_isDeferred]`](SynchronousComputationLike.md#computationlike_isdeferred)

***

### \[ComputationLike\_isPure\]

> **\[ComputationLike\_isPure\]**: `boolean`

#### Overrides

[`SynchronousComputationLike`](SynchronousComputationLike.md).[`[ComputationLike_isPure]`](SynchronousComputationLike.md#computationlike_ispure)

***

### \[ComputationLike\_isSynchronous\]?

> `readonly` `optional` **\[ComputationLike\_isSynchronous\]**: `true`

#### Inherited from

[`SynchronousComputationLike`](SynchronousComputationLike.md).[`[ComputationLike_isSynchronous]`](SynchronousComputationLike.md#computationlike_issynchronous)

## Methods

### \[DeferableLike\_eval\]()

> **\[DeferableLike\_eval\]**(`sink`): `void`

#### Parameters

##### sink

[`SinkLike`](SinkLike.md)\<`T`\>

#### Returns

`void`
