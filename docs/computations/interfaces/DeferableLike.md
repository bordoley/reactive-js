[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / DeferableLike

# Interface: DeferableLike\<T\>

Represents a deferred computation that is synchronously evaluated.

## Extends

- [`ComputationLike`](ComputationLike.md)

## Extended by

- [`PureDeferableLike`](PureDeferableLike.md)
- [`DeferableWithSideEffectsLike`](DeferableWithSideEffectsLike.md)

## Type Parameters

• **T** = `unknown`

## Properties

### \[ComputationLike\_isPure\]

> **\[ComputationLike\_isPure\]**: `boolean`

#### Overrides

[`ComputationLike`](ComputationLike.md).[`[ComputationLike_isPure]`](ComputationLike.md#computationlike_ispure)

***

### \[ComputationLike\_isSynchronous\]?

> `optional` **\[ComputationLike\_isSynchronous\]**: `true`

#### Overrides

[`ComputationLike`](ComputationLike.md).[`[ComputationLike_isSynchronous]`](ComputationLike.md#computationlike_issynchronous)

## Methods

### \[DeferableLike\_eval\]()

> **\[DeferableLike\_eval\]**(`sink`): `void`

#### Parameters

##### sink

[`SinkLike`](SinkLike.md)\<`T`\>

#### Returns

`void`
