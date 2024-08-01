[**Reactive-JS**](../../README.md) • **Docs**

***

[Reactive-JS](../../README.md) / [concurrent](../README.md) / RunnableWithSideEffectsLike

# Interface: RunnableWithSideEffectsLike\<T\>

## Extends

- [`RunnableLike`](RunnableLike.md)\<`T`\>

## Type Parameters

• **T** = `unknown`

## Properties

### \[ObservableLike\_isDeferred\]

> `readonly` **\[ObservableLike\_isDeferred\]**: `true`

Indicates if the `ObservableLike` is deferred, ie. cold.

#### Inherited from

[`RunnableLike`](RunnableLike.md).[`[ObservableLike_isDeferred]`](RunnableLike.md#%5Bobservablelike_isdeferred%5D)

***

### \[ObservableLike\_isMulticasted\]

> `readonly` **\[ObservableLike\_isMulticasted\]**: `false`

Indicates if the `ObservableLike` is multicasted, ie. hot.

#### Inherited from

[`RunnableLike`](RunnableLike.md).[`[ObservableLike_isMulticasted]`](RunnableLike.md#%5Bobservablelike_ismulticasted%5D)

***

### \[ObservableLike\_isPure\]

> `readonly` **\[ObservableLike\_isPure\]**: `false`

Indicates if subscribing to the `ObservableLike` is free of side-effects

#### Overrides

[`RunnableLike`](RunnableLike.md).[`[ObservableLike_isPure]`](RunnableLike.md#%5Bobservablelike_ispure%5D)

***

### \[ObservableLike\_isRunnable\]

> `readonly` **\[ObservableLike\_isRunnable\]**: `true`

Indicates if the `ObservableLike` supports being subscribed to
on a VirtualTimeScheduler.

#### Inherited from

[`RunnableLike`](RunnableLike.md).[`[ObservableLike_isRunnable]`](RunnableLike.md#%5Bobservablelike_isrunnable%5D)

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

[`RunnableLike`](RunnableLike.md).[`[ObservableLike_observe]`](RunnableLike.md#%5Bobservablelike_observe%5D)
