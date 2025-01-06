[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [concurrent](../README.md) / PureObservableLike

# Interface: PureObservableLike\<T\>

## Extends

- [`ObservableLike`](ObservableLike.md)\<`T`\>

## Extended by

- [`PureDeferredObservableLike`](PureDeferredObservableLike.md)
- [`MulticastObservableLike`](MulticastObservableLike.md)

## Type Parameters

• **T** = `unknown`

## Properties

### \[ObservableLike\_isPure\]

> `readonly` **\[ObservableLike\_isPure\]**: `true`

Indicates if subscribing to the `ObservableLike` is free of side-effects

#### Overrides

[`ObservableLike`](ObservableLike.md).[`[ObservableLike_isPure]`](ObservableLike.md#observablelike_ispure)
