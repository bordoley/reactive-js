[Reactive-JS](../README.md) / [containers](../modules/containers.md) / ToIterable

# Interface: ToIterable<C, O\>

[containers](../modules/containers.md).ToIterable

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |
| `O` | `never` |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`ToIterable`**

## Table of contents

### Converter Methods

- [toIterable](containers.ToIterable.md#toiterable)

## Converter Methods

### toIterable

▸ **toIterable**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, [`IterableLike`](containers.IterableLike.md)<`T`\>\>

Converts the ContainerLike to a `IterableLike`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `O` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, [`IterableLike`](containers.IterableLike.md)<`T`\>\>
