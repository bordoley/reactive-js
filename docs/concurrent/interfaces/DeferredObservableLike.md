[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [concurrent](../README.md) / DeferredObservableLike

# Interface: DeferredObservableLike\<T\>

## Extends

- [`ObservableLike`](ObservableLike.md)\<`T`\>

## Extended by

- [`RunnableLike`](RunnableLike.md)
- [`PureDeferredObservableLike`](PureDeferredObservableLike.md)
- [`DeferredObservableWithSideEffectsLike`](DeferredObservableWithSideEffectsLike.md)

## Type Parameters

• **T** = `unknown`

## Properties

### \[ObservableLike\_isDeferred\]

> `readonly` **\[ObservableLike\_isDeferred\]**: `true`

Indicates if the `ObservableLike` is deferred, ie. cold.

#### Overrides

[`ObservableLike`](ObservableLike.md).[`[ObservableLike_isDeferred]`](ObservableLike.md#observablelike_isdeferred)

***

### \[ObservableLike\_isMulticasted\]

> `readonly` **\[ObservableLike\_isMulticasted\]**: `false`

Indicates if the `ObservableLike` is multicasted, ie. hot.

#### Overrides

[`ObservableLike`](ObservableLike.md).[`[ObservableLike_isMulticasted]`](ObservableLike.md#observablelike_ismulticasted)
