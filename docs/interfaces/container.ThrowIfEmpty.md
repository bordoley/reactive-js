[Reactive-JS](../README.md) / [container](../modules/container.md) / ThrowIfEmpty

# Interface: ThrowIfEmpty<C\>

[container](../modules/container.md).ThrowIfEmpty

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](container.ContainerLike.md) |

## Hierarchy

- [`Container`](container.Container.md)<`C`\>

  ↳ **`ThrowIfEmpty`**

## Table of contents

### Properties

- [type](container.ThrowIfEmpty.md#type)

### Methods

- [throwIfEmpty](container.ThrowIfEmpty.md#throwifempty)

## Properties

### type

• `Optional` `Readonly` **type**: `C`

#### Inherited from

[Container](container.Container.md).[type](container.Container.md#type)

## Methods

### throwIfEmpty

▸ **throwIfEmpty**<`T`\>(`factory`): [`ContainerOperator`](../modules/container.md#containeroperator)<`C`, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](../modules/functions.md#factory)<`unknown`\> |

#### Returns

[`ContainerOperator`](../modules/container.md#containeroperator)<`C`, `T`, `T`\>
