[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / SynchronousObservableWithSideEffectsLike

# Interface: SynchronousObservableWithSideEffectsLike\<T\>

## Extends

- [`SynchronousObservableLike`](SynchronousObservableLike.md)\<`T`\>.[`DeferredObservableWithSideEffectsLike`](DeferredObservableWithSideEffectsLike.md)\<`T`\>

## Type Parameters

• **T** = `unknown`

## Properties

### \[ComputationLike\_isDeferred\]?

> `readonly` `optional` **\[ComputationLike\_isDeferred\]**: `true`

#### Overrides

[`SynchronousObservableLike`](SynchronousObservableLike.md).[`[ComputationLike_isDeferred]`](SynchronousObservableLike.md#computationlike_isdeferred)

***

### \[ComputationLike\_isPure\]

> `readonly` **\[ComputationLike\_isPure\]**: `false`

#### Overrides

[`DeferredObservableWithSideEffectsLike`](DeferredObservableWithSideEffectsLike.md).[`[ComputationLike_isPure]`](DeferredObservableWithSideEffectsLike.md#computationlike_ispure)

***

### \[ComputationLike\_isSynchronous\]?

> `readonly` `optional` **\[ComputationLike\_isSynchronous\]**: `true`

#### Overrides

[`SynchronousObservableLike`](SynchronousObservableLike.md).[`[ComputationLike_isSynchronous]`](SynchronousObservableLike.md#computationlike_issynchronous)
