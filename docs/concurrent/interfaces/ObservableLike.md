[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [concurrent](../README.md) / ObservableLike

# Interface: ObservableLike\<T\>

## Extended by

- [`DeferredObservableLike`](DeferredObservableLike.md)
- [`PureObservableLike`](PureObservableLike.md)

## Type Parameters

• **T** = `unknown`

## Properties

### \[ObservableLike\_isDeferred\]

> `readonly` **\[ObservableLike\_isDeferred\]**: `boolean`

Indicates if the `ObservableLike` is deferred, ie. cold. If false,
the observable is multicasted.

***

### \[ObservableLike\_isPure\]

> `readonly` **\[ObservableLike\_isPure\]**: `boolean`

Indicates if subscribing to the `ObservableLike` is free of side-effects

***

### \[ObservableLike\_isRunnable\]

> `readonly` **\[ObservableLike\_isRunnable\]**: `boolean`

Indicates if the `ObservableLike` supports being subscribed to
on a VirtualTimeScheduler.

## Methods

### \[ObservableLike\_observe\]()

> **\[ObservableLike\_observe\]**(`observer`): `void`

Subscribes the given `ObserverLike` to the `ObservableLike` source.

#### Parameters

##### observer

[`ObserverLike`](ObserverLike.md)\<`T`\>

The observer.

#### Returns

`void`
