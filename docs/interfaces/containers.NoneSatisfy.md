[Reactive-JS](../README.md) / [containers](../modules/containers.md) / NoneSatisfy

# Interface: NoneSatisfy<C, O\>

[containers](../modules/containers.md).NoneSatisfy

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |
| `O` | `never` |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`NoneSatisfy`**

## Table of contents

### Operator Methods

- [noneSatisfy](containers.NoneSatisfy.md#nonesatisfy)

## Operator Methods

### noneSatisfy

▸ **noneSatisfy**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `boolean`\>

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

[`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `boolean`\>
