[Reactive-JS](../README.md) / [integrations/web](../modules/integrations_web.md) / WindowLocationLike

# Interface: WindowLocationLike

[integrations/web](../modules/integrations_web.md).WindowLocationLike

## Hierarchy

- [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)\<[`WindowLocationURI`](integrations_web.WindowLocationURI.md)\>

  ↳ **`WindowLocationLike`**

## Table of contents

### Properties

- [[WindowLocationLike\_canGoBack]](integrations_web.WindowLocationLike.md#[windowlocationlike_cangoback])

### Methods

- [[WindowLocationLike\_goBack]](integrations_web.WindowLocationLike.md#[windowlocationlike_goback])
- [[WindowLocationLike\_push]](integrations_web.WindowLocationLike.md#[windowlocationlike_push])
- [[WindowLocationLike\_replace]](integrations_web.WindowLocationLike.md#[windowlocationlike_replace])

## Properties

### [WindowLocationLike\_canGoBack]

• `Readonly` **[WindowLocationLike\_canGoBack]**: [`StoreLike`](events.StoreLike.md)\<`boolean`\>

## Methods

### [WindowLocationLike\_goBack]

▸ **[WindowLocationLike_goBack]**(): `void`

#### Returns

`void`

___

### [WindowLocationLike\_push]

▸ **[WindowLocationLike_push]**(`stateOrUpdater`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `stateOrUpdater` | [`WindowLocationURI`](integrations_web.WindowLocationURI.md) \| [`Updater`](../modules/functions.md#updater)\<[`WindowLocationURI`](integrations_web.WindowLocationURI.md)\> |

#### Returns

`void`

___

### [WindowLocationLike\_replace]

▸ **[WindowLocationLike_replace]**(`stateOrUpdater`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `stateOrUpdater` | [`WindowLocationURI`](integrations_web.WindowLocationURI.md) \| [`Updater`](../modules/functions.md#updater)\<[`WindowLocationURI`](integrations_web.WindowLocationURI.md)\> |

#### Returns

`void`
