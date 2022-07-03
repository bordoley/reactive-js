[Reactive-JS](../README.md) / [enumerable](../modules/enumerable.md) / ToEnumerable

# Interface: ToEnumerable<C\>

[enumerable](../modules/enumerable.md).ToEnumerable

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](container.ContainerLike.md) |

## Hierarchy

- [`Container`](container.Container.md)<`C`\>

  ↳ **`ToEnumerable`**

## Table of contents

### Properties

- [TContainerOf](enumerable.ToEnumerable.md#tcontainerof)

### Methods

- [toEnumerable](enumerable.ToEnumerable.md#toenumerable)

## Properties

### TContainerOf

• `Optional` `Readonly` **TContainerOf**: `C`

#### Inherited from

[Container](container.Container.md).[TContainerOf](container.Container.md#tcontainerof)

## Methods

### toEnumerable

▸ **toEnumerable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/container.md#containerof)<`C`, `T`\>, [`EnumerableLike`](enumerable.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/container.md#containerof)<`C`, `T`\>, [`EnumerableLike`](enumerable.EnumerableLike.md)<`T`\>\>
