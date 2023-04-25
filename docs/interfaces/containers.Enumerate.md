[Reactive-JS](../README.md) / [containers](../modules/containers.md) / Enumerate

# Interface: Enumerate<C, CEnumerator, O\>

[containers](../modules/containers.md).Enumerate

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |
| `CEnumerator` | extends [`EnumeratorLike`](containers.EnumeratorLike.md) = [`EnumeratorLike`](containers.EnumeratorLike.md) |
| `O` | `never` |

## Table of contents

### Transform Methods

- [enumerate](containers.Enumerate.md#enumerate)

## Transform Methods

### enumerate

▸ **enumerate**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, [`ContainerOf`](../modules/containers.md#containerof)<`CEnumerator`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `O` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, [`ContainerOf`](../modules/containers.md#containerof)<`CEnumerator`, `T`\>\>
