[Reactive-JS](../README.md) / [container](../modules/container.md) / DecodeWithCharset

# Interface: DecodeWithCharset<C\>

[container](../modules/container.md).DecodeWithCharset

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](container.ContainerLike.md) |

## Hierarchy

- [`Container`](container.Container.md)<`C`\>

  ↳ **`DecodeWithCharset`**

## Table of contents

### Properties

- [type](container.DecodeWithCharset.md#type)

### Methods

- [decodeWithCharset](container.DecodeWithCharset.md#decodewithcharset)

## Properties

### type

• `Optional` `Readonly` **type**: `C`

#### Inherited from

[Container](container.Container.md).[type](container.Container.md#type)

## Methods

### decodeWithCharset

▸ **decodeWithCharset**(`charset?`): [`ContainerOperator`](../modules/container.md#containeroperator)<`C`, `ArrayBuffer`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `charset?` | `string` |

#### Returns

[`ContainerOperator`](../modules/container.md#containeroperator)<`C`, `ArrayBuffer`, `string`\>
