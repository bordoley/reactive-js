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

- [[QueueableLike\_push]](integrations_web.WindowLocationStreamLike.md#[queueablelike_push])
- [[WindowLocationStreamLike\_goBack]](integrations_web.WindowLocationStreamLike.md#[windowlocationstreamlike_goback])

## Properties

### [WindowLocationStreamLike\_canGoBack]

• `Readonly` **[WindowLocationStreamLike\_canGoBack]**: `boolean`

## Methods

### [QueueableLike\_push]

▸ **[QueueableLike_push]**(`stateOrUpdater`, `options?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `stateOrUpdater` | [`WindowLocationURI`](integrations_web.WindowLocationURI.md) \| [`Updater`](../modules/functions.md#updater)<[`WindowLocationURI`](integrations_web.WindowLocationURI.md)\> |
| `options?` | `Object` |
| `options.replace?` | `boolean` |

#### Returns

`boolean`

#### Overrides

StreamLike.\_\_@QueueableLike\_push@23799

___

### [WindowLocationStreamLike\_goBack]

▸ **[WindowLocationStreamLike_goBack]**(): `boolean`

#### Returns

`boolean`
