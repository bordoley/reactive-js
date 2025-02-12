[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [concurrent](../README.md) / PureRunnableLike

# Interface: PureRunnableLike\<T\>

## Extends

- [`RunnableLike`](RunnableLike.md)\<`T`\>.[`PureDeferredObservableLike`](PureDeferredObservableLike.md)\<`T`\>

## Type Parameters

• **T** = `unknown`

## Properties

### \[ObservableLike\_isDeferred\]

> `readonly` **\[ObservableLike\_isDeferred\]**: `true`

Indicates if the `ObservableLike` is deferred, ie. cold. If false,
the observable is multicasted.

#### Overrides

[`PureDeferredObservableLike`](PureDeferredObservableLike.md).[`[ObservableLike_isDeferred]`](PureDeferredObservableLike.md#observablelike_isdeferred)

***

### \[ObservableLike\_isPure\]

> `readonly` **\[ObservableLike\_isPure\]**: `true`

Indicates if subscribing to the `ObservableLike` is free of side-effects

#### Overrides

[`PureDeferredObservableLike`](PureDeferredObservableLike.md).[`[ObservableLike_isPure]`](PureDeferredObservableLike.md#observablelike_ispure)

***

### \[ObservableLike\_isRunnable\]

> `readonly` **\[ObservableLike\_isRunnable\]**: `true`

#### Overrides

[`RunnableLike`](RunnableLike.md).[`[ObservableLike_isRunnable]`](RunnableLike.md#observablelike_isrunnable)
