[Reactive-JS](../README.md) / [liftable](../modules/liftable.md) / DecodeWithCharset

# Interface: DecodeWithCharset<C\>

[liftable](../modules/liftable.md).DecodeWithCharset

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`LiftableLike`](liftable.LiftableLike.md) |

## Hierarchy

- [`Container`](container.Container.md)<`C`\>

  ↳ **`DecodeWithCharset`**

## Table of contents

### Properties

- [TContainerOf](liftable.DecodeWithCharset.md#tcontainerof)

### Methods

- [decodeWithCharset](liftable.DecodeWithCharset.md#decodewithcharset)

## Properties

### TContainerOf

• `Optional` `Readonly` **TContainerOf**: `C`

#### Inherited from

[Container](container.Container.md).[TContainerOf](container.Container.md#tcontainerof)

## Methods

### decodeWithCharset

▸ **decodeWithCharset**(`charset?`): [`ContainerOperator`](../modules/container.md#containeroperator)<`C`, `ArrayBuffer`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `charset?` | `string` |

#### Returns

[`ContainerOperator`](../modules/container.md#containeroperator)<`C`, `ArrayBuffer`, `string`\>
