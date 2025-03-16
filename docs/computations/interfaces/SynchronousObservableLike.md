[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / SynchronousObservableLike

# Interface: SynchronousObservableLike\<T\>

## Extends

- [`DeferredObservableLike`](DeferredObservableLike.md)\<`T`\>.[`SynchronousComputationLike`](SynchronousComputationLike.md)

## Extended by

- [`PureSynchronousObservableLike`](PureSynchronousObservableLike.md)
- [`SynchronousObservableWithSideEffectsLike`](SynchronousObservableWithSideEffectsLike.md)

## Type Parameters

• **T** = `unknown`

## Properties

### \[ComputationLike\_isDeferred\]?

> `readonly` `optional` **\[ComputationLike\_isDeferred\]**: `true`

#### Overrides

[`SynchronousComputationLike`](SynchronousComputationLike.md).[`[ComputationLike_isDeferred]`](SynchronousComputationLike.md#computationlike_isdeferred)

***

### \[ComputationLike\_isSynchronous\]?

> `readonly` `optional` **\[ComputationLike\_isSynchronous\]**: `true`

#### Overrides

[`SynchronousComputationLike`](SynchronousComputationLike.md).[`[ComputationLike_isSynchronous]`](SynchronousComputationLike.md#computationlike_issynchronous)
