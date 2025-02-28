[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / PureDeferableLike

# Interface: PureDeferableLike\<T\>

Represents a deferred computation that is synchronously evaluated.

## Extends

- [`DeferableLike`](DeferableLike.md)\<`T`\>

## Type Parameters

• **T** = `unknown`

## Properties

### \[ComputationLike\_isDeferred\]?

> `readonly` `optional` **\[ComputationLike\_isDeferred\]**: `boolean`

#### Inherited from

[`DeferableLike`](DeferableLike.md).[`[ComputationLike_isDeferred]`](DeferableLike.md#computationlike_isdeferred)

***

### \[ComputationLike\_isPure\]

> `readonly` **\[ComputationLike\_isPure\]**: `true`

#### Overrides

[`DeferableLike`](DeferableLike.md).[`[ComputationLike_isPure]`](DeferableLike.md#computationlike_ispure)

***

### \[ComputationLike\_isSynchronous\]?

> `optional` **\[ComputationLike\_isSynchronous\]**: `true`

#### Inherited from

[`DeferableLike`](DeferableLike.md).[`[ComputationLike_isSynchronous]`](DeferableLike.md#computationlike_issynchronous)

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
