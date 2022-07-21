[Reactive-JS](../README.md) / [ix/EnumerableLike](../modules/ix_EnumerableLike.md) / ToEnumerable

# Interface: ToEnumerable<C\>

[ix/EnumerableLike](../modules/ix_EnumerableLike.md).ToEnumerable

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers_ContainerLike.ContainerLike.md) |

## Hierarchy

- [`Container`](../modules/containers_ContainerLike.md#container)<`C`\>

  ↳ **`ToEnumerable`**

## Table of contents

### Properties

- [TContainerOf](ix_EnumerableLike.ToEnumerable.md#tcontainerof)

### Methods

- [toEnumerable](ix_EnumerableLike.ToEnumerable.md#toenumerable)

## Properties

### TContainerOf

• `Optional` `Readonly` **TContainerOf**: `C`

#### Inherited from

Container.TContainerOf

## Methods

### toEnumerable

▸ **toEnumerable**<`T`\>(): [`Function1`](../modules/util_functions.md#function1)<[`ContainerOf`](../modules/containers_ContainerLike.md#containerof)<`C`, `T`\>, [`EnumerableLike`](ix_EnumerableLike.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/util_functions.md#function1)<[`ContainerOf`](../modules/containers_ContainerLike.md#containerof)<`C`, `T`\>, [`EnumerableLike`](ix_EnumerableLike.EnumerableLike.md)<`T`\>\>
