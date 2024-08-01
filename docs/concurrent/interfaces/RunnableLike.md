[**Reactive-JS**](../../README.md) • **Docs**

***

[Reactive-JS](../../README.md) / [concurrent](../README.md) / RunnableLike

# Interface: RunnableLike\<T\>

## Extends

- [`DeferredObservableLike`](DeferredObservableLike.md)\<`T`\>

## Extended by

- [`PureRunnableLike`](PureRunnableLike.md)
- [`RunnableWithSideEffectsLike`](RunnableWithSideEffectsLike.md)

## Type Parameters

• **T** = `unknown`

## Properties

### \[ObservableLike\_isDeferred\]

> `readonly` **\[ObservableLike\_isDeferred\]**: `true`

Indicates if the `ObservableLike` is deferred, ie. cold.

#### Inherited from

[`DeferredObservableLike`](DeferredObservableLike.md).[`[ObservableLike_isDeferred]`](DeferredObservableLike.md#%5Bobservablelike_isdeferred%5D)

***

### \[ObservableLike\_isMulticasted\]

> `readonly` **\[ObservableLike\_isMulticasted\]**: `false`

Indicates if the `ObservableLike` is multicasted, ie. hot.

#### Inherited from

[`DeferredObservableLike`](DeferredObservableLike.md).[`[ObservableLike_isMulticasted]`](DeferredObservableLike.md#%5Bobservablelike_ismulticasted%5D)

***

### \[ObservableLike\_isPure\]

> `readonly` **\[ObservableLike\_isPure\]**: `boolean`

Indicates if subscribing to the `ObservableLike` is free of side-effects

#### Inherited from

[`DeferredObservableLike`](DeferredObservableLike.md).[`[ObservableLike_isPure]`](DeferredObservableLike.md#%5Bobservablelike_ispure%5D)

***

### \[ObservableLike\_isRunnable\]

> `readonly` **\[ObservableLike\_isRunnable\]**: `true`

Indicates if the `ObservableLike` supports being subscribed to
on a VirtualTimeScheduler.

#### Overrides

[`DeferredObservableLike`](DeferredObservableLike.md).[`[ObservableLike_isRunnable]`](DeferredObservableLike.md#%5Bobservablelike_isrunnable%5D)

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

[`DeferredObservableLike`](DeferredObservableLike.md).[`[ObservableLike_observe]`](DeferredObservableLike.md#%5Bobservablelike_observe%5D)
