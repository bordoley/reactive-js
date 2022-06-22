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
| `operator` | [`Lift`](liftable.Lift.md)<`C`, `TVariance`\> extends { `variance?`: ``"contravariant"``  } ? [`Function1`](../modules/functions.md#function1)<[`LiftedStateOf`](../modules/liftable.md#liftedstateof)<`C`, `TB`\>, [`LiftedStateOf`](../modules/liftable.md#liftedstateof)<`C`, `TA`\>\> : [`Function1`](../modules/functions.md#function1)<[`LiftedStateOf`](../modules/liftable.md#liftedstateof)<`C`, `TA`\>, [`LiftedStateOf`](../modules/liftable.md#liftedstateof)<`C`, `TB`\>\> |

#### Returns

[`ContainerOperator`](../modules/container.md#containeroperator)<`C`, `TA`, `TB`\>
