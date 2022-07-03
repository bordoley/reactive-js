[Reactive-JS](../README.md) / [container](../modules/container.md) / Repeat

# Interface: Repeat<C\>

[container](../modules/container.md).Repeat

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](container.ContainerLike.md) |

## Hierarchy

- [`Container`](container.Container.md)<`C`\>

  ↳ **`Repeat`**

## Table of contents

### Properties

- [TContainerOf](container.Repeat.md#tcontainerof)

### Methods

- [repeat](container.Repeat.md#repeat)

## Properties

### TContainerOf

• `Optional` `Readonly` **TContainerOf**: `C`

#### Inherited from

[Container](container.Container.md).[TContainerOf](container.Container.md#tcontainerof)

## Methods

### repeat

▸ **repeat**<`T`\>(`predicate`): [`ContainerOperator`](../modules/container.md#containeroperator)<`C`, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`number`\> |

#### Returns

[`ContainerOperator`](../modules/container.md#containeroperator)<`C`, `T`, `T`\>

▸ **repeat**<`T`\>(`count`): [`ContainerOperator`](../modules/container.md#containeroperator)<`C`, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

[`ContainerOperator`](../modules/container.md#containeroperator)<`C`, `T`, `T`\>

▸ **repeat**<`T`\>(): [`ContainerOperator`](../modules/container.md#containeroperator)<`C`, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](../modules/container.md#containeroperator)<`C`, `T`, `T`\>
