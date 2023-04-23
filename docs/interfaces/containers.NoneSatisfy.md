[Reactive-JS](../README.md) / [containers](../modules/containers.md) / NoneSatisfy

# Interface: NoneSatisfy<C, O\>

[containers](../modules/containers.md).NoneSatisfy

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |
| `O` | `never` |

## Table of contents

### Operator Methods

- [noneSatisfy](containers.NoneSatisfy.md#nonesatisfy)

## Operator Methods

### noneSatisfy

▸ **noneSatisfy**<`T`\>(`predicate`, `options?`): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |
| `options?` | `O` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, `boolean`\>
