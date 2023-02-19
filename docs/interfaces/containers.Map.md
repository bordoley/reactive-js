[Reactive-JS](../README.md) / [containers](../modules/containers.md) / Map

# Interface: Map<C, O\>

[containers](../modules/containers.md).Map

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |
| `O` | `never` |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`Map`**

## Table of contents

### Properties

- [ContainerLike\_type](containers.Map.md#containerlike_type)

### Methods

- [map](containers.Map.md#map)

## Properties

### ContainerLike\_type

• `Optional` `Readonly` **ContainerLike\_type**: `C`

#### Inherited from

[Container](containers.Container.md).[ContainerLike_type](containers.Container.md#containerlike_type)

## Methods

### map

▸ **map**<`TA`, `TB`\>(`mapper`, `options?`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapper` | [`Function1`](../modules/functions.md#function1)<`TA`, `TB`\> |
| `options?` | `O` |

#### Returns

[`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `TA`, `TB`\>
