[Reactive-JS](../README.md) / [liftable](../modules/liftable.md) / Lift

# Interface: Lift<C\>

[liftable](../modules/liftable.md).Lift

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`LiftableLike`](liftable.LiftableLike.md) |

## Hierarchy

- [`Container`](container.Container.md)<`C`\>

  ↳ **`Lift`**

## Table of contents

### Properties

- [type](liftable.Lift.md#type)

### Methods

- [lift](liftable.Lift.md#lift)

## Properties

### type

• `Optional` `Readonly` **type**: `C`

#### Inherited from

[Container](container.Container.md).[type](container.Container.md#type)

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
