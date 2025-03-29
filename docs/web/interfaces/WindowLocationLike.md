[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [web](../README.md) / WindowLocationLike

# Interface: WindowLocationLike

## Extends

- [`BroadcasterLike`](../../computations/interfaces/BroadcasterLike.md)\<[`WindowLocationURI`](WindowLocationURI.md)\>

## Properties

### \[WindowLocationLike\_canGoBack\]

> `readonly` **\[WindowLocationLike\_canGoBack\]**: [`StoreLike`](../../computations/interfaces/StoreLike.md)\<`boolean`\>

## Methods

### \[WindowLocationLike\_goBack\]()

> **\[WindowLocationLike\_goBack\]**(): `void`

#### Returns

`void`

***

### \[WindowLocationLike\_push\]()

> **\[WindowLocationLike\_push\]**(`stateOrUpdater`): `void`

#### Parameters

##### stateOrUpdater

[`WindowLocationURI`](WindowLocationURI.md) | [`Updater`](../../functions/type-aliases/Updater.md)\<[`WindowLocationURI`](WindowLocationURI.md)\>

#### Returns

`void`

***

### \[WindowLocationLike\_replace\]()

> **\[WindowLocationLike\_replace\]**(`stateOrUpdater`): `void`

#### Parameters

##### stateOrUpdater

[`WindowLocationURI`](WindowLocationURI.md) | [`Updater`](../../functions/type-aliases/Updater.md)\<[`WindowLocationURI`](WindowLocationURI.md)\>

#### Returns

`void`
