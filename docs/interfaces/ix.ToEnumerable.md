[Reactive-JS](../README.md) / [ix](../modules/ix.md) / ToEnumerable

# Interface: ToEnumerable<C, O\>

[ix](../modules/ix.md).ToEnumerable

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |
| `O` | `never` |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`ToEnumerable`**

## Table of contents

### Properties

- [ContainerLike\_type](ix.ToEnumerable.md#containerlike_type)

### Methods

- [toEnumerable](ix.ToEnumerable.md#toenumerable)

## Properties

### ContainerLike\_type

• `Optional` `Readonly` **ContainerLike\_type**: `C`

#### Inherited from

[Container](containers.Container.md).[ContainerLike_type](containers.Container.md#containerlike_type)

## Methods

### toEnumerable

▸ **toEnumerable**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, [`EnumerableLike`](ix.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `O` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, [`EnumerableLike`](ix.EnumerableLike.md)<`T`\>\>
