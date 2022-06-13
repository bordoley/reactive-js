[Reactive-JS](../README.md) / [container](../modules/container.md) / TakeLast

# Interface: TakeLast<C\>

[container](../modules/container.md).TakeLast

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](container.ContainerLike.md) |

## Hierarchy

- [`Container`](container.Container.md)<`C`\>

  ↳ **`TakeLast`**

## Table of contents

### Properties

- [type](container.TakeLast.md#type)

### Methods

- [takeLast](container.TakeLast.md#takelast)

## Properties

### type

• `Optional` `Readonly` **type**: `C`

#### Inherited from

[Container](container.Container.md).[type](container.Container.md#type)

## Methods

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`ContainerOperator`](../modules/container.md#containeroperator)<`C`, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |

#### Returns

[`ContainerOperator`](../modules/container.md#containeroperator)<`C`, `T`, `T`\>
