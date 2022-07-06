[Reactive-JS](../README.md) / [liftableContainer](../modules/liftableContainer.md) / DecodeWithCharset

# Interface: DecodeWithCharset<C\>

[liftableContainer](../modules/liftableContainer.md).DecodeWithCharset

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`LiftableContainerLike`](liftableContainer.LiftableContainerLike.md) |

## Hierarchy

- [`Container`](container.Container.md)<`C`\>

  ↳ **`DecodeWithCharset`**

## Table of contents

### Properties

- [TContainerOf](liftableContainer.DecodeWithCharset.md#tcontainerof)

### Methods

- [decodeWithCharset](liftableContainer.DecodeWithCharset.md#decodewithcharset)

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
