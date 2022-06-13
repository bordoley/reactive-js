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

- [type](enumerable.ToEnumerable.md#type)

### Methods

- [toEnumerable](enumerable.ToEnumerable.md#toenumerable)

## Properties

### type

• `Optional` `Readonly` **type**: `C`

#### Inherited from

[Container](container.Container.md).[type](container.Container.md#type)

## Methods

### toEnumerable

▸ **toEnumerable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/container.md#containerof)<`C`, `T`\>, [`EnumerableLike`](enumerable.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/container.md#containerof)<`C`, `T`\>, [`EnumerableLike`](enumerable.EnumerableLike.md)<`T`\>\>
