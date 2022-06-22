[Reactive-JS](../README.md) / [liftable](../modules/liftable.md) / Lift

# Interface: Lift<C, TVariance\>

[liftable](../modules/liftable.md).Lift

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`LiftableLike`](liftable.LiftableLike.md) |
| `TVariance` | extends ``"covariant"`` \| ``"contravariant"`` = ``"contravariant"`` |

## Hierarchy

- [`Container`](container.Container.md)<`C`\>

  ↳ **`Lift`**

  ↳↳ [`Lift`](source.Lift.md)

## Table of contents

### Properties

- [type](liftable.Lift.md#type)
- [variance](liftable.Lift.md#variance)

### Methods

- [lift](liftable.Lift.md#lift)

## Properties

### type

• `Optional` `Readonly` **type**: `C`

#### Inherited from

[Container](container.Container.md).[type](container.Container.md#type)

___

### variance

• `Optional` **variance**: `TVariance`

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
| `operator` | [`LiftOperator`](../modules/liftable.md#liftoperator)<`TA`, `TB`, `C`, [`Lift`](liftable.Lift.md)<`C`, `TVariance`\>\> |

#### Returns

[`ContainerOperator`](../modules/container.md#containeroperator)<`C`, `TA`, `TB`\>
