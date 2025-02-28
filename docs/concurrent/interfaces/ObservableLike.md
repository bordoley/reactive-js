[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [concurrent](../README.md) / ObservableLike

# Interface: ObservableLike\<T\>

## Extends

- [`ComputationLike`](../../computations/interfaces/ComputationLike.md)

## Extended by

- [`DeferredObservableLike`](DeferredObservableLike.md)
- [`PureObservableLike`](PureObservableLike.md)

## Type Parameters

• **T** = `unknown`

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
