[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / AsyncIterableLike

# Interface: AsyncIterableLike\<T\>

## Extends

- `AsyncIterable`\<`T`\>.[`DeferredComputationLike`](DeferredComputationLike.md)

## Extended by

- [`PureAsyncIterableLike`](PureAsyncIterableLike.md)
- [`AsyncIterableWithSideEffectsLike`](AsyncIterableWithSideEffectsLike.md)

## Type Parameters

• **T** = `unknown`

## Properties

### \[ComputationLike\_isDeferred\]?

> `readonly` `optional` **\[ComputationLike\_isDeferred\]**: `true`

#### Inherited from

[`DeferredComputationLike`](DeferredComputationLike.md).[`[ComputationLike_isDeferred]`](DeferredComputationLike.md#computationlike_isdeferred)

***

### \[ComputationLike\_isPure\]?

> `readonly` `optional` **\[ComputationLike\_isPure\]**: `boolean`

#### Inherited from

[`DeferredComputationLike`](DeferredComputationLike.md).[`[ComputationLike_isPure]`](DeferredComputationLike.md#computationlike_ispure)

***

### \[ComputationLike\_isSynchronous\]

> `readonly` **\[ComputationLike\_isSynchronous\]**: `false`

#### Overrides

[`DeferredComputationLike`](DeferredComputationLike.md).[`[ComputationLike_isSynchronous]`](DeferredComputationLike.md#computationlike_issynchronous)
