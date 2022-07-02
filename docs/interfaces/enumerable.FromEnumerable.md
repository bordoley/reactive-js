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

- [type](enumerable.FromEnumerable.md#type)

### Methods

- [fromEnumerable](enumerable.FromEnumerable.md#fromenumerable)

## Properties

### type

• `Optional` `Readonly` **type**: `C`

#### Inherited from

[Container](container.Container.md).[type](container.Container.md#type)

## Methods

### fromEnumerable

▸ **fromEnumerable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](enumerable.EnumerableLike.md)<`T`\>, [`ContainerOf`](../modules/container.md#containerof)<`C`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](enumerable.EnumerableLike.md)<`T`\>, [`ContainerOf`](../modules/container.md#containerof)<`C`, `T`\>\>
