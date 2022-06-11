[Reactive-JS](../README.md) / [web](../modules/web.md) / WindowLocationStreamLike

# Interface: WindowLocationStreamLike

[web](../modules/web.md).WindowLocationStreamLike

## Hierarchy

- [`StreamLike`](observable.StreamLike.md)<[`Updater`](../modules/functions.md#updater)<[`WindowLocationURI`](../modules/web.md#windowlocationuri)\> \| [`WindowLocationURI`](../modules/web.md#windowlocationuri), [`WindowLocationURI`](../modules/web.md#windowlocationuri)\>

  ↳ **`WindowLocationStreamLike`**

## Table of contents

### Methods

- [dispatch](web.WindowLocationStreamLike.md#dispatch)
- [goBack](web.WindowLocationStreamLike.md#goback)

## Methods

### dispatch

▸ **dispatch**(`stateOrUpdater`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `stateOrUpdater` | [`WindowLocationURI`](../modules/web.md#windowlocationuri) \| [`Updater`](../modules/functions.md#updater)<[`WindowLocationURI`](../modules/web.md#windowlocationuri)\> |
| `options?` | `Object` |
| `options.replace?` | `boolean` |

#### Returns

`void`

#### Overrides

StreamLike.dispatch

___

### goBack

▸ **goBack**(): `boolean`

#### Returns

`boolean`
