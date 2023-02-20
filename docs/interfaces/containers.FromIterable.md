[Reactive-JS](../README.md) / [containers](../modules/containers.md) / FromIterable

# Interface: FromIterable<C, O\>

[containers](../modules/containers.md).FromIterable

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |
| `O` | `never` |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`FromIterable`**

## Table of contents

### Constructor Methods

- [fromIterable](containers.FromIterable.md#fromiterable)

## Constructor Methods

### fromIterable

▸ **fromIterable**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `O` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>\>
