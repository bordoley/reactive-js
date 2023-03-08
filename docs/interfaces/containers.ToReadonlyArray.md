[Reactive-JS](../README.md) / [containers](../modules/containers.md) / ToReadonlyArray

# Interface: ToReadonlyArray<C, O\>

[containers](../modules/containers.md).ToReadonlyArray

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |
| `O` | `never` |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`ToReadonlyArray`**

## Table of contents

### Transform Methods

- [toReadonlyArray](containers.ToReadonlyArray.md#toreadonlyarray)

## Transform Methods

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, [`ReadonlyArrayLike`](containers.ReadonlyArrayLike.md)<`T`\>\>

Converts the ContainerLike to a `ReadonlyArrayLike`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `O` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, [`ReadonlyArrayLike`](containers.ReadonlyArrayLike.md)<`T`\>\>
