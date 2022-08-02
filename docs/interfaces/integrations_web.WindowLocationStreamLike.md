[Reactive-JS](../README.md) / [integrations/web](../modules/integrations_web.md) / WindowLocationStreamLike

# Interface: WindowLocationStreamLike

[integrations/web](../modules/integrations_web.md).WindowLocationStreamLike

## Hierarchy

- [`StreamLike`](streaming.StreamLike.md)<[`Updater`](../modules/functions.md#updater)<[`WindowLocationURI`](integrations_web.WindowLocationURI.md)\> \| [`WindowLocationURI`](integrations_web.WindowLocationURI.md), [`WindowLocationURI`](integrations_web.WindowLocationURI.md)\>

  ↳ **`WindowLocationStreamLike`**

## Table of contents

### Properties

- [T](integrations_web.WindowLocationStreamLike.md#t)

### Methods

- [dispatch](integrations_web.WindowLocationStreamLike.md#dispatch)
- [goBack](integrations_web.WindowLocationStreamLike.md#goback)

## Properties

### T

• `Optional` `Readonly` **T**: `unknown`

#### Inherited from

StreamLike.T

## Methods

### dispatch

▸ **dispatch**(`this`, `stateOrUpdater`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`WindowLocationStreamLike`](integrations_web.WindowLocationStreamLike.md) |
| `stateOrUpdater` | [`WindowLocationURI`](integrations_web.WindowLocationURI.md) \| [`Updater`](../modules/functions.md#updater)<[`WindowLocationURI`](integrations_web.WindowLocationURI.md)\> |
| `options?` | `Object` |
| `options.replace?` | `boolean` |

#### Returns

`void`

___

### goBack

▸ **goBack**(`this`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`WindowLocationStreamLike`](integrations_web.WindowLocationStreamLike.md) |

#### Returns

`boolean`
