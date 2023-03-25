[Reactive-JS](../README.md) / [integrations/web](../modules/integrations_web.md) / WindowLocationStreamLike

# Interface: WindowLocationStreamLike

[integrations/web](../modules/integrations_web.md).WindowLocationStreamLike

## Hierarchy

- [`StreamLike`](streaming.StreamLike.md)<[`Updater`](../modules/functions.md#updater)<[`WindowLocationURI`](integrations_web.WindowLocationURI.md)\> \| [`WindowLocationURI`](integrations_web.WindowLocationURI.md), [`WindowLocationURI`](integrations_web.WindowLocationURI.md)\>

  ↳ **`WindowLocationStreamLike`**

## Table of contents

### Properties

- [[WindowLocationStreamLike\_canGoBack]](integrations_web.WindowLocationStreamLike.md#[windowlocationstreamlike_cangoback])

### Methods

- [[WindowLocationStreamLike\_goBack]](integrations_web.WindowLocationStreamLike.md#[windowlocationstreamlike_goback])
- [[WindowLocationStreamLike\_replace]](integrations_web.WindowLocationStreamLike.md#[windowlocationstreamlike_replace])

## Properties

### [WindowLocationStreamLike\_canGoBack]

• `Readonly` **[WindowLocationStreamLike\_canGoBack]**: [`ObservableLike`](rx.ObservableLike.md)<`boolean`\>

## Methods

### [WindowLocationStreamLike\_goBack]

▸ **[WindowLocationStreamLike_goBack]**(): `void`

#### Returns

`void`

___

### [WindowLocationStreamLike\_replace]

▸ **[WindowLocationStreamLike_replace]**(`stateOrUpdater`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `stateOrUpdater` | [`WindowLocationURI`](integrations_web.WindowLocationURI.md) \| [`Updater`](../modules/functions.md#updater)<[`WindowLocationURI`](integrations_web.WindowLocationURI.md)\> |

#### Returns

`boolean`
