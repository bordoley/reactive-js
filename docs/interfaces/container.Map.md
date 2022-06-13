[Reactive-JS](../README.md) / [container](../modules/container.md) / Map

# Interface: Map<C\>

[container](../modules/container.md).Map

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](container.ContainerLike.md) |

## Hierarchy

- [`Container`](container.Container.md)<`C`\>

  ↳ **`Map`**

## Table of contents

### Properties

- [type](container.Map.md#type)

### Methods

- [map](container.Map.md#map)

## Properties

### type

• `Optional` `Readonly` **type**: `C`

#### Inherited from

[Container](container.Container.md).[type](container.Container.md#type)

## Methods

### map

▸ **map**<`TA`, `TB`\>(`mapper`): [`ContainerOperator`](../modules/container.md#containeroperator)<`C`, `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapper` | [`Function1`](../modules/functions.md#function1)<`TA`, `TB`\> |

#### Returns

[`ContainerOperator`](../modules/container.md#containeroperator)<`C`, `TA`, `TB`\>
