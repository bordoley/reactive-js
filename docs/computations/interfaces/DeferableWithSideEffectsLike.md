[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / DeferableWithSideEffectsLike

# Interface: DeferableWithSideEffectsLike\<T\>

Represents a deferred computation that is synchronously evaluated.

## Extends

- [`DeferableLike`](DeferableLike.md)\<`T`\>

## Type Parameters

• **T** = `unknown`

## Properties

### \[ComputationLike\_isPure\]

> `readonly` **\[ComputationLike\_isPure\]**: `false`

#### Overrides

[`DeferableLike`](DeferableLike.md).[`[ComputationLike_isPure]`](DeferableLike.md#computationlike_ispure)

## Methods

### \[DeferableLike\_eval\]()

> **\[DeferableLike\_eval\]**(`sink`): `void`

#### Parameters

##### sink

[`SinkLike`](SinkLike.md)\<`T`\>

#### Returns

`void`

#### Inherited from

[`DeferableLike`](DeferableLike.md).[`[DeferableLike_eval]`](DeferableLike.md#deferablelike_eval)
