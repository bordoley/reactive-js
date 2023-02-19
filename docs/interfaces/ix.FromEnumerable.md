[Reactive-JS](../README.md) / [ix](../modules/ix.md) / FromEnumerable

# Interface: FromEnumerable<C, O\>

[ix](../modules/ix.md).FromEnumerable

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |
| `O` | `never` |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`FromEnumerable`**

## Table of contents

### Properties

- [ContainerLike\_type](ix.FromEnumerable.md#containerlike_type)

### Methods

- [fromEnumerable](ix.FromEnumerable.md#fromenumerable)

## Properties

### ContainerLike\_type

• `Optional` `Readonly` **ContainerLike\_type**: `C`

#### Inherited from

[Container](containers.Container.md).[ContainerLike_type](containers.Container.md#containerlike_type)

## Methods

### fromEnumerable

▸ **fromEnumerable**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](ix.EnumerableLike.md)<`T`\>, [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `O` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](ix.EnumerableLike.md)<`T`\>, [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>\>
