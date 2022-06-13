[Reactive-JS](../README.md) / [container](../modules/container.md) / Reduce

# Interface: Reduce<C\>

[container](../modules/container.md).Reduce

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](container.ContainerLike.md) |

## Hierarchy

- [`Container`](container.Container.md)<`C`\>

  ↳ **`Reduce`**

## Table of contents

### Properties

- [type](container.Reduce.md#type)

### Methods

- [reduce](container.Reduce.md#reduce)

## Properties

### type

• `Optional` `Readonly` **type**: `C`

#### Inherited from

[Container](container.Container.md).[type](container.Container.md#type)

## Methods

### reduce

▸ **reduce**<`T`, `TAcc`\>(`reducer`, `initialValue`): [`ContainerOperator`](../modules/container.md#containeroperator)<`C`, `T`, `TAcc`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Reducer`](../modules/functions.md#reducer)<`T`, `TAcc`\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

#### Returns

[`ContainerOperator`](../modules/container.md#containeroperator)<`C`, `T`, `TAcc`\>
