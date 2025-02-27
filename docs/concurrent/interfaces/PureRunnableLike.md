[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [concurrent](../README.md) / PureRunnableLike

# Interface: PureRunnableLike\<T\>

## Extends

- [`RunnableLike`](RunnableLike.md)\<`T`\>.[`PureDeferredObservableLike`](PureDeferredObservableLike.md)\<`T`\>

## Type Parameters

• **T** = `unknown`

## Properties

### \[ComputationLike\_isPure\]?

> `readonly` `optional` **\[ComputationLike\_isPure\]**: `true`

#### Overrides

[`PureDeferredObservableLike`](PureDeferredObservableLike.md).[`[ComputationLike_isPure]`](PureDeferredObservableLike.md#computationlike_ispure)

***

### \[ObservableLike\_isDeferred\]

> `readonly` **\[ObservableLike\_isDeferred\]**: `true`

Indicates if the `ObservableLike` is deferred, ie. cold. If false,
the observable is multicasted.

#### Overrides

[`PureDeferredObservableLike`](PureDeferredObservableLike.md).[`[ObservableLike_isDeferred]`](PureDeferredObservableLike.md#observablelike_isdeferred)

***

### \[ObservableLike\_isRunnable\]

> `readonly` **\[ObservableLike\_isRunnable\]**: `true`

#### Overrides

[`RunnableLike`](RunnableLike.md).[`[ObservableLike_isRunnable]`](RunnableLike.md#observablelike_isrunnable)
