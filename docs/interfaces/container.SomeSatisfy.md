[Reactive-JS](../README.md) / [container](../modules/container.md) / SomeSatisfy

# Interface: SomeSatisfy<C\>

[container](../modules/container.md).SomeSatisfy

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](container.ContainerLike.md) |

## Hierarchy

- [`Container`](container.Container.md)<`C`\>

  ↳ **`SomeSatisfy`**

## Table of contents

### Properties

- [type](container.SomeSatisfy.md#type)

### Methods

- [someSatisfy](container.SomeSatisfy.md#somesatisfy)

## Properties

### type

• `Optional` `Readonly` **type**: `C`

#### Inherited from

[Container](container.Container.md).[type](container.Container.md#type)

## Methods

### someSatisfy

▸ **someSatisfy**<`T`\>(`predicate`): [`ContainerOperator`](../modules/container.md#containeroperator)<`C`, `T`, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`ContainerOperator`](../modules/container.md#containeroperator)<`C`, `T`, `boolean`\>
