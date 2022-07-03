[Reactive-JS](../README.md) / [container](../modules/container.md) / TakeFirst

# Interface: TakeFirst<C\>

[container](../modules/container.md).TakeFirst

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](container.ContainerLike.md) |

## Hierarchy

- [`Container`](container.Container.md)<`C`\>

  ↳ **`TakeFirst`**

## Table of contents

### Properties

- [TContainerOf](container.TakeFirst.md#tcontainerof)

### Methods

- [takeFirst](container.TakeFirst.md#takefirst)

## Properties

### TContainerOf

• `Optional` `Readonly` **TContainerOf**: `C`

#### Inherited from

[Container](container.Container.md).[TContainerOf](container.Container.md#tcontainerof)

## Methods

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`ContainerOperator`](../modules/container.md#containeroperator)<`C`, `T`, `T`\>

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
