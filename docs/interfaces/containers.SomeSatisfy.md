[Reactive-JS](../README.md) / [containers](../modules/containers.md) / SomeSatisfy

# Interface: SomeSatisfy<C, O\>

[containers](../modules/containers.md).SomeSatisfy

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |
| `O` | `never` |

## Table of contents

### Operator Methods

- [someSatisfy](containers.SomeSatisfy.md#somesatisfy)

## Operator Methods

### someSatisfy

▸ **someSatisfy**<`T`\>(`predicate`, `options?`): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, `boolean`\>

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
