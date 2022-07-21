[Reactive-JS](../README.md) / [ix/EnumerableLike](../modules/ix_EnumerableLike.md) / FromEnumerable

# Interface: FromEnumerable<C\>

[ix/EnumerableLike](../modules/ix_EnumerableLike.md).FromEnumerable

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers_ContainerLike.ContainerLike.md) |

## Hierarchy

- [`Container`](../modules/containers_ContainerLike.md#container)<`C`\>

  ↳ **`FromEnumerable`**

## Table of contents

### Properties

- [TContainerOf](ix_EnumerableLike.FromEnumerable.md#tcontainerof)

### Methods

- [fromEnumerable](ix_EnumerableLike.FromEnumerable.md#fromenumerable)

## Properties

### TContainerOf

• `Optional` `Readonly` **TContainerOf**: `C`

#### Inherited from

Container.TContainerOf

## Methods

### fromEnumerable

▸ **fromEnumerable**<`T`\>(): [`Function1`](../modules/util_functions.md#function1)<[`EnumerableLike`](ix_EnumerableLike.EnumerableLike.md)<`T`\>, [`ContainerOf`](../modules/containers_ContainerLike.md#containerof)<`C`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/util_functions.md#function1)<[`EnumerableLike`](ix_EnumerableLike.EnumerableLike.md)<`T`\>, [`ContainerOf`](../modules/containers_ContainerLike.md#containerof)<`C`, `T`\>\>
