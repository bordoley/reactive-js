[Reactive-JS](../README.md) / [rx](../modules/rx.md) / ToEnumerable

# Interface: ToEnumerable<C, O\>

[rx](../modules/rx.md).ToEnumerable

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |
| `O` | `never` |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`ToEnumerable`**

## Table of contents

### Converter Methods

- [toEnumerable](rx.ToEnumerable.md#toenumerable)

## Converter Methods

### toEnumerable

▸ **toEnumerable**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, [`EnumerableLike`](rx.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `O` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, [`EnumerableLike`](rx.EnumerableLike.md)<`T`\>\>
