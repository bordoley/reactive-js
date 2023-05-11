[Reactive-JS](../README.md) / [integrations/web](../modules/integrations_web.md) / WindowLocationLike

# Interface: WindowLocationLike

[integrations/web](../modules/integrations_web.md).WindowLocationLike

## Hierarchy

- [`MulticastObservableLike`](types.MulticastObservableLike.md)<[`WindowLocationURI`](integrations_web.WindowLocationURI.md)\>

  ↳ **`WindowLocationLike`**

## Table of contents

### Properties

- [[\_\_\_WindowLocationLike\_canGoBack]](integrations_web.WindowLocationLike.md#[___windowlocationlike_cangoback])

### Methods

- [[\_\_\_WindowLocationLike\_goBack]](integrations_web.WindowLocationLike.md#[___windowlocationlike_goback])
- [[\_\_\_WindowLocationLike\_push]](integrations_web.WindowLocationLike.md#[___windowlocationlike_push])
- [[\_\_\_WindowLocationLike\_replace]](integrations_web.WindowLocationLike.md#[___windowlocationlike_replace])

## Properties

### [\_\_\_WindowLocationLike\_canGoBack]

• `Readonly` **[\_\_\_WindowLocationLike\_canGoBack]**: [`SharedObservableLike`](types.SharedObservableLike.md)<`boolean`\>

## Methods

### [\_\_\_WindowLocationLike\_goBack]

▸ **[___WindowLocationLike_goBack]**(): `void`

#### Returns

`void`

___

### [\_\_\_WindowLocationLike\_push]

▸ **[___WindowLocationLike_push]**(`stateOrUpdater`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `stateOrUpdater` | [`WindowLocationURI`](integrations_web.WindowLocationURI.md) \| [`Updater`](../modules/functions.md#updater)<[`WindowLocationURI`](integrations_web.WindowLocationURI.md)\> |

#### Returns

`void`

___

### [\_\_\_WindowLocationLike\_replace]

▸ **[___WindowLocationLike_replace]**(`stateOrUpdater`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `stateOrUpdater` | [`WindowLocationURI`](integrations_web.WindowLocationURI.md) \| [`Updater`](../modules/functions.md#updater)<[`WindowLocationURI`](integrations_web.WindowLocationURI.md)\> |

#### Returns

`void`
