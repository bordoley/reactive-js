[**Reactive-JS**](../../README.md) • **Docs**

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

### \[ObservableLike\_isDeferred\]

> `readonly` **\[ObservableLike\_isDeferred\]**: `boolean`

Indicates if the `ObservableLike` is deferred, ie. cold.

#### Inherited from

[`ObservableLike`](ObservableLike.md).[`[ObservableLike_isDeferred]`](ObservableLike.md#%5Bobservablelike_isdeferred%5D)

***

### \[ObservableLike\_isMulticasted\]

> `readonly` **\[ObservableLike\_isMulticasted\]**: `boolean`

Indicates if the `ObservableLike` is multicasted, ie. hot.

#### Inherited from

[`ObservableLike`](ObservableLike.md).[`[ObservableLike_isMulticasted]`](ObservableLike.md#%5Bobservablelike_ismulticasted%5D)

***

### \[ObservableLike\_isPure\]

> `readonly` **\[ObservableLike\_isPure\]**: `true`

Indicates if subscribing to the `ObservableLike` is free of side-effects

#### Overrides

[`ObservableLike`](ObservableLike.md).[`[ObservableLike_isPure]`](ObservableLike.md#%5Bobservablelike_ispure%5D)

***

### \[ObservableLike\_isRunnable\]

> `readonly` **\[ObservableLike\_isRunnable\]**: `boolean`

Indicates if the `ObservableLike` supports being subscribed to
on a VirtualTimeScheduler.

#### Inherited from

[`ObservableLike`](ObservableLike.md).[`[ObservableLike_isRunnable]`](ObservableLike.md#%5Bobservablelike_isrunnable%5D)

## Methods

### \[ObservableLike\_observe\]()

> **\[ObservableLike\_observe\]**(`observer`): `void`

Subscribes the given `ObserverLike` to the `ObservableLike` source.

#### Parameters

• **observer**: [`ObserverLike`](ObserverLike.md)\<`T`\>

The observer.

#### Returns

`void`

#### Inherited from

[`ObservableLike`](ObservableLike.md).[`[ObservableLike_observe]`](ObservableLike.md#%5Bobservablelike_observe%5D)
