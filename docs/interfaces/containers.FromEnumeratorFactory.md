[Reactive-JS](../README.md) / [containers](../modules/containers.md) / FromEnumeratorFactory

# Interface: FromEnumeratorFactory<C, O\>

[containers](../modules/containers.md).FromEnumeratorFactory

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |
| `O` | `never` |

## Table of contents

### Constructor Methods

- [fromEnumeratorFactory](containers.FromEnumeratorFactory.md#fromenumeratorfactory)

## Constructor Methods

### fromEnumeratorFactory

▸ **fromEnumeratorFactory**<`T`\>(`factory`, `options?`): [`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](../modules/functions.md#factory)<[`EnumeratorLike`](containers.EnumeratorLike.md)<`T`\>\> |
| `options?` | `O` |

#### Returns

[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>
