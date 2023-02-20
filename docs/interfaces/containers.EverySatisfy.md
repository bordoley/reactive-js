[Reactive-JS](../README.md) / [containers](../modules/containers.md) / EverySatisfy

# Interface: EverySatisfy<C, O\>

[containers](../modules/containers.md).EverySatisfy

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |
| `O` | `never` |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`EverySatisfy`**

## Table of contents

### Operator Methods

- [everySatisfy](containers.EverySatisfy.md#everysatisfy)

## Operator Methods

### everySatisfy

▸ **everySatisfy**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `boolean`\>

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
