[**Reactive-JS**](../../README.md) • **Docs**

***

[Reactive-JS](../../README.md) / [concurrent](../README.md) / MulticastObservableLike

# Interface: MulticastObservableLike\<T\>

## Extends

- [`PureObservableLike`](PureObservableLike.md)\<`T`\>

## Extended by

- [`SubjectLike`](SubjectLike.md)
- [`PauseableObservableLike`](PauseableObservableLike.md)
- [`StreamLike`](StreamLike.md)
- [`WindowLocationLike`](../../integrations/web/interfaces/WindowLocationLike.md)

## Type Parameters

• **T** = `unknown`

## Properties

### \[ObservableLike\_isDeferred\]

> `readonly` **\[ObservableLike\_isDeferred\]**: `false`

Indicates if the `ObservableLike` is deferred, ie. cold.

#### Overrides

[`PureObservableLike`](PureObservableLike.md).[`[ObservableLike_isDeferred]`](PureObservableLike.md#%5Bobservablelike_isdeferred%5D)

***

### \[ObservableLike\_isMulticasted\]

> `readonly` **\[ObservableLike\_isMulticasted\]**: `true`

Indicates if the `ObservableLike` is multicasted, ie. hot.

#### Overrides

[`PureObservableLike`](PureObservableLike.md).[`[ObservableLike_isMulticasted]`](PureObservableLike.md#%5Bobservablelike_ismulticasted%5D)

***

### \[ObservableLike\_isPure\]

> `readonly` **\[ObservableLike\_isPure\]**: `true`

Indicates if subscribing to the `ObservableLike` is free of side-effects

#### Inherited from

[`PureObservableLike`](PureObservableLike.md).[`[ObservableLike_isPure]`](PureObservableLike.md#%5Bobservablelike_ispure%5D)

***

### \[ObservableLike\_isRunnable\]

> `readonly` **\[ObservableLike\_isRunnable\]**: `false`

Indicates if the `ObservableLike` supports being subscribed to
on a VirtualTimeScheduler.

#### Overrides

[`PureObservableLike`](PureObservableLike.md).[`[ObservableLike_isRunnable]`](PureObservableLike.md#%5Bobservablelike_isrunnable%5D)

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

[`PureObservableLike`](PureObservableLike.md).[`[ObservableLike_observe]`](PureObservableLike.md#%5Bobservablelike_observe%5D)
