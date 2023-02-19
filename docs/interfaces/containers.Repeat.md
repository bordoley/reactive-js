[Reactive-JS](../README.md) / [containers](../modules/containers.md) / Repeat

# Interface: Repeat<C, O\>

[containers](../modules/containers.md).Repeat

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |
| `O` | `never` |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`Repeat`**

## Table of contents

### Properties

- [ContainerLike\_type](containers.Repeat.md#containerlike_type)

### Methods

- [repeat](containers.Repeat.md#repeat)

## Properties

### ContainerLike\_type

• `Optional` `Readonly` **ContainerLike\_type**: `C`

#### Inherited from

[Container](containers.Container.md).[ContainerLike_type](containers.Container.md#containerlike_type)

## Methods

### repeat

▸ **repeat**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`number`\> |
| `options?` | `O` |

#### Returns

[`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`\>

▸ **repeat**<`T`\>(`count`, `options?`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |
| `options?` | `O` |

#### Returns

[`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`\>

▸ **repeat**<`T`\>(`options?`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `O` |

#### Returns

[`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`\>
