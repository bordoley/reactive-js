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

- [[QueueLike\_push]](integrations_web.WindowLocationStreamLike.md#[queuelike_push])
- [[WindowLocationStreamLike\_goBack]](integrations_web.WindowLocationStreamLike.md#[windowlocationstreamlike_goback])

## Properties

### [WindowLocationStreamLike\_canGoBack]

• `Readonly` **[WindowLocationStreamLike\_canGoBack]**: `boolean`

## Methods

### [QueueLike\_push]

▸ **[QueueLike_push]**(`stateOrUpdater`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `stateOrUpdater` | [`WindowLocationURI`](integrations_web.WindowLocationURI.md) \| [`Updater`](../modules/functions.md#updater)<[`WindowLocationURI`](integrations_web.WindowLocationURI.md)\> |
| `options?` | `Object` |
| `options.replace?` | `boolean` |

#### Returns

`void`

#### Overrides

StreamLike.\_\_@QueueLike\_push@23086

___

### [WindowLocationStreamLike\_goBack]

▸ **[WindowLocationStreamLike_goBack]**(): `boolean`

#### Returns

`boolean`
