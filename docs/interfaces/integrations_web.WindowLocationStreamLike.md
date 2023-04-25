[Reactive-JS](../README.md) / [integrations/web](../modules/integrations_web.md) / WindowLocationStreamLike

# Interface: WindowLocationStreamLike

[integrations/web](../modules/integrations_web.md).WindowLocationStreamLike

## Hierarchy

- [`StreamLike`](rx.StreamLike.md)<[`Updater`](../modules/functions.md#updater)<[`WindowLocationURI`](integrations_web.WindowLocationURI.md)\> \| [`WindowLocationURI`](integrations_web.WindowLocationURI.md), [`WindowLocationURI`](integrations_web.WindowLocationURI.md)\>

  ↳ **`WindowLocationStreamLike`**

## Table of contents

### Properties

- [[\_\_\_WindowLocationStreamLike\_canGoBack]](integrations_web.WindowLocationStreamLike.md#[___windowlocationstreamlike_cangoback])

### Methods

- [[\_\_\_WindowLocationStreamLike\_goBack]](integrations_web.WindowLocationStreamLike.md#[___windowlocationstreamlike_goback])
- [[\_\_\_WindowLocationStreamLike\_replace]](integrations_web.WindowLocationStreamLike.md#[___windowlocationstreamlike_replace])

## Properties

### [\_\_\_WindowLocationStreamLike\_canGoBack]

• `Readonly` **[\_\_\_WindowLocationStreamLike\_canGoBack]**: [`ObservableLike`](rx.ObservableLike.md)<`boolean`\>

## Methods

### [\_\_\_WindowLocationStreamLike\_goBack]

▸ **[___WindowLocationStreamLike_goBack]**(): `void`

#### Returns

`void`

___

### [\_\_\_WindowLocationStreamLike\_replace]

▸ **[___WindowLocationStreamLike_replace]**(`stateOrUpdater`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `stateOrUpdater` | [`WindowLocationURI`](integrations_web.WindowLocationURI.md) \| [`Updater`](../modules/functions.md#updater)<[`WindowLocationURI`](integrations_web.WindowLocationURI.md)\> |

#### Returns

`boolean`
