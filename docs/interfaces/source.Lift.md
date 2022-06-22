[Reactive-JS](../README.md) / [source](../modules/source.md) / Lift

# Interface: Lift<C\>

[source](../modules/source.md).Lift

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`SourceLike`](source.SourceLike.md) |

## Hierarchy

- [`Lift`](liftable.Lift.md)<`C`\>

  ↳ **`Lift`**

## Table of contents

### Properties

- [type](source.Lift.md#type)
- [variance](source.Lift.md#variance)

### Methods

- [lift](source.Lift.md#lift)

## Properties

### type

• `Optional` `Readonly` **type**: `C`

#### Inherited from

[Lift](liftable.Lift.md).[type](liftable.Lift.md#type)

___

### variance

• `Optional` **variance**: ``"contravariant"``

#### Inherited from

[Lift](liftable.Lift.md).[variance](liftable.Lift.md#variance)

## Methods

### lift

▸ **lift**<`TA`, `TB`\>(`operator`): [`ContainerOperator`](../modules/container.md#containeroperator)<`C`, `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `operator` | [`Function1`](../modules/functions.md#function1)<[`LiftedStateOf`](../modules/liftable.md#liftedstateof)<`C`, `TB`\>, [`LiftedStateOf`](../modules/liftable.md#liftedstateof)<`C`, `TA`\>\> |

#### Returns

[`ContainerOperator`](../modules/container.md#containeroperator)<`C`, `TA`, `TB`\>

#### Overrides

[Lift](liftable.Lift.md).[lift](liftable.Lift.md#lift)
