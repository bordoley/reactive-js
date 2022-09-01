[Reactive-JS](../README.md) / [integrations/web](../modules/integrations_web.md) / WindowLocationStreamLike

# Interface: WindowLocationStreamLike

[integrations/web](../modules/integrations_web.md).WindowLocationStreamLike

## Hierarchy

- [`StreamLike`](streaming.StreamLike.md)<[`Updater`](../modules/functions.md#updater)<[`WindowLocationURI`](../modules/integrations_web.md#windowlocationuri)\> \| [`WindowLocationURI`](../modules/integrations_web.md#windowlocationuri), [`WindowLocationURI`](../modules/integrations_web.md#windowlocationuri)\>

  ↳ **`WindowLocationStreamLike`**

## Table of contents

### Methods

- [[DispatcherLike\_dispatch]](integrations_web.WindowLocationStreamLike.md#[dispatcherlike_dispatch])
- [[WindowLocationStreamLike\_goBack]](integrations_web.WindowLocationStreamLike.md#[windowlocationstreamlike_goback])

## Methods

### [DispatcherLike\_dispatch]

▸ **[DispatcherLike_dispatch]**(`stateOrUpdater`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `stateOrUpdater` | [`WindowLocationURI`](../modules/integrations_web.md#windowlocationuri) \| [`Updater`](../modules/functions.md#updater)<[`WindowLocationURI`](../modules/integrations_web.md#windowlocationuri)\> |
| `options?` | `Object` |
| `options.replace?` | `boolean` |

#### Returns

`void`

#### Overrides

StreamLike.\_\_@DispatcherLike\_dispatch@23468

___

### [WindowLocationStreamLike\_goBack]

▸ **[WindowLocationStreamLike_goBack]**(): `boolean`

#### Returns

`boolean`
