[Reactive-JS](../README.md) / [rx](../modules/rx.md) / FromEnumerable

# Interface: FromEnumerable<C, O\>

[rx](../modules/rx.md).FromEnumerable

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |
| `O` | `never` |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`FromEnumerable`**

## Table of contents

### Constructor Methods

- [fromEnumerable](rx.FromEnumerable.md#fromenumerable)

## Constructor Methods

### fromEnumerable

▸ **fromEnumerable**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](rx.EnumerableLike.md)<`T`\>, [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `O` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](rx.EnumerableLike.md)<`T`\>, [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>\>
