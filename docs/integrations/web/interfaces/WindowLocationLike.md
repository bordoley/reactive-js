[**Reactive-JS**](../../../README.md) • **Docs**

***

[Reactive-JS](../../../README.md) / [integrations/web](../README.md) / WindowLocationLike

# Interface: WindowLocationLike

## Extends

- [`MulticastObservableLike`](../../../concurrent/interfaces/MulticastObservableLike.md)\<[`WindowLocationURI`](WindowLocationURI.md)\>

## Properties

### \[ObservableLike\_isDeferred\]

> `readonly` **\[ObservableLike\_isDeferred\]**: `false`

Indicates if the `ObservableLike` is deferred, ie. cold.

#### Inherited from

[`MulticastObservableLike`](../../../concurrent/interfaces/MulticastObservableLike.md).[`[ObservableLike_isDeferred]`](../../../concurrent/interfaces/MulticastObservableLike.md#%5Bobservablelike_isdeferred%5D)

***

### \[ObservableLike\_isMulticasted\]

> `readonly` **\[ObservableLike\_isMulticasted\]**: `true`

Indicates if the `ObservableLike` is multicasted, ie. hot.

#### Inherited from

[`MulticastObservableLike`](../../../concurrent/interfaces/MulticastObservableLike.md).[`[ObservableLike_isMulticasted]`](../../../concurrent/interfaces/MulticastObservableLike.md#%5Bobservablelike_ismulticasted%5D)

***

### \[ObservableLike\_isPure\]

> `readonly` **\[ObservableLike\_isPure\]**: `true`

Indicates if subscribing to the `ObservableLike` is free of side-effects

#### Inherited from

[`MulticastObservableLike`](../../../concurrent/interfaces/MulticastObservableLike.md).[`[ObservableLike_isPure]`](../../../concurrent/interfaces/MulticastObservableLike.md#%5Bobservablelike_ispure%5D)

***

### \[ObservableLike\_isRunnable\]

> `readonly` **\[ObservableLike\_isRunnable\]**: `false`

Indicates if the `ObservableLike` supports being subscribed to
on a VirtualTimeScheduler.

#### Inherited from

[`MulticastObservableLike`](../../../concurrent/interfaces/MulticastObservableLike.md).[`[ObservableLike_isRunnable]`](../../../concurrent/interfaces/MulticastObservableLike.md#%5Bobservablelike_isrunnable%5D)

***

### \[WindowLocationLike\_canGoBack\]

> `readonly` **\[WindowLocationLike\_canGoBack\]**: [`StoreLike`](../../../events/interfaces/StoreLike.md)\<`boolean`\>

## Methods

### \[ObservableLike\_observe\]()

> **\[ObservableLike\_observe\]**(`observer`): `void`

Subscribes the given `ObserverLike` to the `ObservableLike` source.

#### Parameters

• **observer**: [`ObserverLike`](../../../concurrent/interfaces/ObserverLike.md)\<[`WindowLocationURI`](WindowLocationURI.md)\>

The observer.

#### Returns

`void`

#### Inherited from

[`MulticastObservableLike`](../../../concurrent/interfaces/MulticastObservableLike.md).[`[ObservableLike_observe]`](../../../concurrent/interfaces/MulticastObservableLike.md#%5Bobservablelike_observe%5D)

***

### \[WindowLocationLike\_goBack\]()

> **\[WindowLocationLike\_goBack\]**(): `void`

#### Returns

`void`

***

### \[WindowLocationLike\_push\]()

> **\[WindowLocationLike\_push\]**(`stateOrUpdater`): `void`

#### Parameters

• **stateOrUpdater**: [`WindowLocationURI`](WindowLocationURI.md) \| [`Updater`](../../../functions/type-aliases/Updater.md)\<[`WindowLocationURI`](WindowLocationURI.md)\>

#### Returns

`void`

***

### \[WindowLocationLike\_replace\]()

> **\[WindowLocationLike\_replace\]**(`stateOrUpdater`): `void`

#### Parameters

• **stateOrUpdater**: [`WindowLocationURI`](WindowLocationURI.md) \| [`Updater`](../../../functions/type-aliases/Updater.md)\<[`WindowLocationURI`](WindowLocationURI.md)\>

#### Returns

`void`
