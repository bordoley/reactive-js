[Reactive-JS](../README.md) / [web](../modules/web.md) / WindowLocationStreamLike

# Interface: WindowLocationStreamLike

[web](../modules/web.md).WindowLocationStreamLike

## Hierarchy

- [`StreamLike`](observable.StreamLike.md)<[`Updater`](../modules/functions.md#updater)<[`WindowLocationURI`](web.WindowLocationURI.md)\> \| [`WindowLocationURI`](web.WindowLocationURI.md), [`WindowLocationURI`](web.WindowLocationURI.md)\>

  ↳ **`WindowLocationStreamLike`**

## Table of contents

### Properties

- [T](web.WindowLocationStreamLike.md#t)

### Methods

- [dispatch](web.WindowLocationStreamLike.md#dispatch)
- [goBack](web.WindowLocationStreamLike.md#goback)

## Properties

### T

• **T**: `unknown`

#### Inherited from

StreamLike.T

## Methods

### dispatch

▸ **dispatch**(`this`, `stateOrUpdater`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`WindowLocationStreamLike`](web.WindowLocationStreamLike.md) |
| `stateOrUpdater` | [`WindowLocationURI`](web.WindowLocationURI.md) \| [`Updater`](../modules/functions.md#updater)<[`WindowLocationURI`](web.WindowLocationURI.md)\> |
| `options?` | `Object` |
| `options.replace?` | `boolean` |

#### Returns

`void`

#### Overrides

StreamLike.dispatch

___

### goBack

▸ **goBack**(`this`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`WindowLocationURI`](web.WindowLocationURI.md) |

#### Returns

`boolean`
