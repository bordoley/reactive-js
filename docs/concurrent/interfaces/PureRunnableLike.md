[**Reactive-JS**](../../README.md) • **Docs**

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

Indicates if the `ObservableLike` is deferred, ie. cold.

#### Overrides

[`PureDeferredObservableLike`](PureDeferredObservableLike.md).[`[ObservableLike_isDeferred]`](PureDeferredObservableLike.md#%5Bobservablelike_isdeferred%5D)

***

### \[ObservableLike\_isMulticasted\]

> `readonly` **\[ObservableLike\_isMulticasted\]**: `false`

Indicates if the `ObservableLike` is multicasted, ie. hot.

#### Inherited from

[`PureDeferredObservableLike`](PureDeferredObservableLike.md).[`[ObservableLike_isMulticasted]`](PureDeferredObservableLike.md#%5Bobservablelike_ismulticasted%5D)

***

### \[ObservableLike\_isPure\]

> `readonly` **\[ObservableLike\_isPure\]**: `true`

Indicates if subscribing to the `ObservableLike` is free of side-effects

#### Overrides

[`PureDeferredObservableLike`](PureDeferredObservableLike.md).[`[ObservableLike_isPure]`](PureDeferredObservableLike.md#%5Bobservablelike_ispure%5D)

***

### \[ObservableLike\_isRunnable\]

> `readonly` **\[ObservableLike\_isRunnable\]**: `true`

Indicates if the `ObservableLike` supports being subscribed to
on a VirtualTimeScheduler.

#### Overrides

[`PureDeferredObservableLike`](PureDeferredObservableLike.md).[`[ObservableLike_isRunnable]`](PureDeferredObservableLike.md#%5Bobservablelike_isrunnable%5D)

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

[`PureDeferredObservableLike`](PureDeferredObservableLike.md).[`[ObservableLike_observe]`](PureDeferredObservableLike.md#%5Bobservablelike_observe%5D)
