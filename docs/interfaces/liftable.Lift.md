[Reactive-JS](../README.md) / [liftable](../modules/liftable.md) / Lift

# Interface: Lift<C, TVariance\>

[liftable](../modules/liftable.md).Lift

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`LiftableLike`](liftable.LiftableLike.md) |
| `TVariance` | extends [`Variance`](../modules/liftable.md#variance) |

## Hierarchy

- [`Container`](container.Container.md)<`C`\>

  ↳ **`Lift`**

## Table of contents

### Properties

- [TContainerOf](liftable.Lift.md#tcontainerof)
- [variance](liftable.Lift.md#variance)

### Methods

- [lift](liftable.Lift.md#lift)

## Properties

### TContainerOf

• `Optional` `Readonly` **TContainerOf**: `C`

#### Inherited from

[Container](container.Container.md).[TContainerOf](container.Container.md#tcontainerof)

___

### variance

• **variance**: `TVariance`

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
| `operator` | [`LiftOperator`](../modules/liftable.md#liftoperator)<`C`, `TA`, `TB`, [`Lift`](liftable.Lift.md)<`C`, `TVariance`\>\> |

#### Returns

[`ContainerOperator`](../modules/container.md#containeroperator)<`C`, `TA`, `TB`\>
