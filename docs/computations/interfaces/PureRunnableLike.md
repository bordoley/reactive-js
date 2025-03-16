[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / PureRunnableLike

# Interface: PureRunnableLike\<T\>

Represents a deferred computation that is synchronously evaluated.

## Extends

- [`RunnableLike`](RunnableLike.md)\<`T`\>

## Type Parameters

• **T** = `unknown`

## Properties

### \[ComputationLike\_isDeferred\]

> `readonly` **\[ComputationLike\_isDeferred\]**: `false`

#### Inherited from

[`RunnableLike`](RunnableLike.md).[`[ComputationLike_isDeferred]`](RunnableLike.md#computationlike_isdeferred)

***

### \[ComputationLike\_isPure\]?

> `readonly` `optional` **\[ComputationLike\_isPure\]**: `true`

#### Overrides

[`RunnableLike`](RunnableLike.md).[`[ComputationLike_isPure]`](RunnableLike.md#computationlike_ispure)

***

### \[ComputationLike\_isSynchronous\]?

> `readonly` `optional` **\[ComputationLike\_isSynchronous\]**: `true`

#### Inherited from

[`RunnableLike`](RunnableLike.md).[`[ComputationLike_isSynchronous]`](RunnableLike.md#computationlike_issynchronous)

## Methods

### \[RunnableLike\_eval\]()

> **\[RunnableLike\_eval\]**(`sink`): `void`

#### Parameters

##### sink

[`SinkLike`](../../utils/interfaces/SinkLike.md)\<`T`\>

#### Returns

`void`

#### Inherited from

[`RunnableLike`](RunnableLike.md).[`[RunnableLike_eval]`](RunnableLike.md#runnablelike_eval)
