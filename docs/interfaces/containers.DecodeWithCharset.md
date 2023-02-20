[Reactive-JS](../README.md) / [containers](../modules/containers.md) / DecodeWithCharset

# Interface: DecodeWithCharset<C, O\>

[containers](../modules/containers.md).DecodeWithCharset

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |
| `O` | `unknown` |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`DecodeWithCharset`**

## Table of contents

### Properties

- [ContainerLike\_type](containers.DecodeWithCharset.md#containerlike_type)

### Operator Methods

- [decodeWithCharset](containers.DecodeWithCharset.md#decodewithcharset)

## Properties

### ContainerLike\_type

• `Optional` `Readonly` **ContainerLike\_type**: `C`

#### Inherited from

[Container](containers.Container.md).[ContainerLike_type](containers.Container.md#containerlike_type)

## Operator Methods

### decodeWithCharset

▸ **decodeWithCharset**(`options?`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `ArrayBuffer`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `O` & { `charset?`: `string`  } |

#### Returns

[`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `ArrayBuffer`, `string`\>
