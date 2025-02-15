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

### \[ObservableLike\_isDeferred\]

> `readonly` **\[ObservableLike\_isDeferred\]**: `true`

Indicates if the `ObservableLike` is deferred, ie. cold. If false,
the observable is multicasted.

#### Overrides

[`DeferredObservableLike`](DeferredObservableLike.md).[`[ObservableLike_isDeferred]`](DeferredObservableLike.md#observablelike_isdeferred)

***

### \[ObservableLike\_isPure\]

> `readonly` **\[ObservableLike\_isPure\]**: `true`

Indicates if subscribing to the `ObservableLike` is free of side-effects

#### Overrides

[`PureObservableLike`](PureObservableLike.md).[`[ObservableLike_isPure]`](PureObservableLike.md#observablelike_ispure)
