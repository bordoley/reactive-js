[Reactive-JS](../README.md) / [rx](../modules/rx.md) / GenerateLast

# Interface: GenerateLast<C, CInner, O\>

[rx](../modules/rx.md).GenerateLast

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |
| `CInner` | extends [`ObservableLike`](rx.ObservableLike.md) |
| `O` | `never` |

## Table of contents

### Constructor Methods

- [generateLast](rx.GenerateLast.md#generatelast)

## Constructor Methods

### generateLast

▸ **generateLast**<`T`\>(`generator`, `initialValue`, `options?`): [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `generator` | [`Function1`](../modules/functions.md#function1)<`T`, [`ContainerOf`](../modules/containers.md#containerof)<`CInner`, `T`\>\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`T`\> |
| `options?` | `O` |

#### Returns

[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>
