[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / IterableLike

# Interface: IterableLike\<T\>

## Extends

- `Iterable`\<`T`\>.[`SynchronousComputationLike`](SynchronousComputationLike.md).[`DeferredComputationLike`](DeferredComputationLike.md)

## Extended by

- [`PureIterableLike`](PureIterableLike.md)
- [`IterableWithSideEffectsLike`](IterableWithSideEffectsLike.md)

## Type Parameters

• **T** = `unknown`

## Properties

### \[ComputationLike\_isDeferred\]?

> `optional` **\[ComputationLike\_isDeferred\]**: `true`

#### Overrides

[`DeferredComputationLike`](DeferredComputationLike.md).[`[ComputationLike_isDeferred]`](DeferredComputationLike.md#computationlike_isdeferred)

***

### \[ComputationLike\_isPure\]?

> `readonly` `optional` **\[ComputationLike\_isPure\]**: `boolean`

#### Inherited from

[`DeferredComputationLike`](DeferredComputationLike.md).[`[ComputationLike_isPure]`](DeferredComputationLike.md#computationlike_ispure)

***

### \[ComputationLike\_isSynchronous\]?

> `optional` **\[ComputationLike\_isSynchronous\]**: `true`

#### Overrides

[`DeferredComputationLike`](DeferredComputationLike.md).[`[ComputationLike_isSynchronous]`](DeferredComputationLike.md#computationlike_issynchronous)
