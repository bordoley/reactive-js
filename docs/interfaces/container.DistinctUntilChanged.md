[Reactive-JS](../README.md) / [container](../modules/container.md) / DistinctUntilChanged

# Interface: DistinctUntilChanged<C\>

[container](../modules/container.md).DistinctUntilChanged

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](container.ContainerLike.md) |

## Hierarchy

- [`Container`](container.Container.md)<`C`\>

  ↳ **`DistinctUntilChanged`**

## Table of contents

### Properties

- [type](container.DistinctUntilChanged.md#type)

### Methods

- [distinctUntilChanged](container.DistinctUntilChanged.md#distinctuntilchanged)

## Properties

### type

• `Optional` `Readonly` **type**: `C`

#### Inherited from

[Container](container.Container.md).[type](container.Container.md#type)

## Methods

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`ContainerOperator`](../modules/container.md#containeroperator)<`C`, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.equality?` | [`Equality`](../modules/functions.md#equality)<`T`\> |

#### Returns

[`ContainerOperator`](../modules/container.md#containeroperator)<`C`, `T`, `T`\>
