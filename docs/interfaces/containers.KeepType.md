[Reactive-JS](../README.md) / [containers](../modules/containers.md) / KeepType

# Interface: KeepType<C, O\>

[containers](../modules/containers.md).KeepType

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |
| `O` | `never` |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`KeepType`**

## Table of contents

### Operator Methods

- [keepType](containers.KeepType.md#keeptype)

## Operator Methods

### keepType

▸ **keepType**<`TA`, `TB`\>(`predicate`, `options?`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`TypePredicate`](../modules/functions.md#typepredicate)<`TA`, `TB`\> |
| `options?` | `O` |

#### Returns

[`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `TA`, `TB`\>
