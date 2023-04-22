[Reactive-JS](../README.md) / [containers](../modules/containers.md) / SkipFirst

# Interface: SkipFirst<C, O\>

[containers](../modules/containers.md).SkipFirst

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |
| `O` | `unknown` |

## Table of contents

### Operator Methods

- [skipFirst](containers.SkipFirst.md#skipfirst)

## Operator Methods

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`\>

Returns a ContainerLike that skips the first count items emitted by the source.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `O` & { `count?`: `number`  } |

#### Returns

[`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`\>
