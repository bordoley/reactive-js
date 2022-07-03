[Reactive-JS](../README.md) / [container](../modules/container.md) / SkipFirst

# Interface: SkipFirst<C\>

[container](../modules/container.md).SkipFirst

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](container.ContainerLike.md) |

## Hierarchy

- [`Container`](container.Container.md)<`C`\>

  ↳ **`SkipFirst`**

## Table of contents

### Properties

- [TContainerOf](container.SkipFirst.md#tcontainerof)

### Methods

- [skipFirst](container.SkipFirst.md#skipfirst)

## Properties

### TContainerOf

• `Optional` `Readonly` **TContainerOf**: `C`

#### Inherited from

[Container](container.Container.md).[TContainerOf](container.Container.md#tcontainerof)

## Methods

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`ContainerOperator`](../modules/container.md#containeroperator)<`C`, `T`, `T`\>

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
