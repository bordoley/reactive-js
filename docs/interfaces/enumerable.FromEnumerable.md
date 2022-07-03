[Reactive-JS](../README.md) / [enumerable](../modules/enumerable.md) / FromEnumerable

# Interface: FromEnumerable<C\>

[enumerable](../modules/enumerable.md).FromEnumerable

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](container.ContainerLike.md) |

## Hierarchy

- [`Container`](container.Container.md)<`C`\>

  ↳ **`FromEnumerable`**

## Table of contents

### Properties

- [TContainerOf](enumerable.FromEnumerable.md#tcontainerof)

### Methods

- [fromEnumerable](enumerable.FromEnumerable.md#fromenumerable)

## Properties

### TContainerOf

• `Optional` `Readonly` **TContainerOf**: `C`

#### Inherited from

[Container](container.Container.md).[TContainerOf](container.Container.md#tcontainerof)

## Methods

### fromEnumerable

▸ **fromEnumerable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](enumerable.EnumerableLike.md)<`T`\>, [`ContainerOf`](../modules/container.md#containerof)<`C`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](enumerable.EnumerableLike.md)<`T`\>, [`ContainerOf`](../modules/container.md#containerof)<`C`, `T`\>\>
