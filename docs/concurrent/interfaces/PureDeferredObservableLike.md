[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [concurrent](../README.md) / PureDeferredObservableLike

# Interface: PureDeferredObservableLike\<T\>

## Extends

- [`DeferredObservableLike`](DeferredObservableLike.md)\<`T`\>.[`PureObservableLike`](PureObservableLike.md)\<`T`\>

## Extended by

- [`PureRunnableLike`](PureRunnableLike.md)

## Type Parameters

• **T** = `unknown`

## Properties

### \[ComputationLike\_isPure\]?

> `readonly` `optional` **\[ComputationLike\_isPure\]**: `true`

#### Overrides

[`PureObservableLike`](PureObservableLike.md).[`[ComputationLike_isPure]`](PureObservableLike.md#computationlike_ispure)

***

### \[ObservableLike\_isDeferred\]

> `readonly` **\[ObservableLike\_isDeferred\]**: `true`

Indicates if the `ObservableLike` is deferred, ie. cold. If false,
the observable is multicasted.

#### Overrides

[`DeferredObservableLike`](DeferredObservableLike.md).[`[ObservableLike_isDeferred]`](DeferredObservableLike.md#observablelike_isdeferred)
