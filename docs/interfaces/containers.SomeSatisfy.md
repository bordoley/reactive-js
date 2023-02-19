[Reactive-JS](../README.md) / [containers](../modules/containers.md) / SomeSatisfy

# Interface: SomeSatisfy<C, O\>

[containers](../modules/containers.md).SomeSatisfy

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](containers.ContainerLike.md) |
| `O` | `never` |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`SomeSatisfy`**

## Table of contents

### Properties

- [ContainerLike\_type](containers.SomeSatisfy.md#containerlike_type)

### Methods

- [someSatisfy](containers.SomeSatisfy.md#somesatisfy)

## Properties

### ContainerLike\_type

• `Optional` `Readonly` **ContainerLike\_type**: `C`

#### Inherited from

[Container](containers.Container.md).[ContainerLike_type](containers.Container.md#containerlike_type)

## Methods

### someSatisfy

▸ **someSatisfy**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `boolean`\>

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
