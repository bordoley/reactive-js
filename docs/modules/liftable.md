[Reactive-JS](../README.md) / liftable

# Module: liftable

## Table of contents

### Classes

- [AbtractDisposableLiftable](../classes/liftable.AbtractDisposableLiftable.md)

### Interfaces

- [Lift](../interfaces/liftable.Lift.md)
- [LiftableLike](../interfaces/liftable.LiftableLike.md)
- [LiftableStateLike](../interfaces/liftable.LiftableStateLike.md)

### Type Aliases

- [ContraVariant](liftable.md#contravariant)
- [Covariant](liftable.md#covariant)
- [LiftOperator](liftable.md#liftoperator)
- [LiftOperatorIn](liftable.md#liftoperatorin)
- [LiftOperatorOut](liftable.md#liftoperatorout)
- [LiftableStateOf](liftable.md#liftablestateof)
- [Variance](liftable.md#variance)

### Variables

- [contraVariant](liftable.md#contravariant-1)
- [covariant](liftable.md#covariant-1)

### Functions

- [lift](liftable.md#lift)

## Type Aliases

### ContraVariant

Ƭ **ContraVariant**: ``1``

___

### Covariant

Ƭ **Covariant**: ``0``

___

### LiftOperator

Ƭ **LiftOperator**<`C`, `TA`, `TB`, `M`\>: [`Function1`](functions.md#function1)<[`LiftOperatorIn`](liftable.md#liftoperatorin)<`C`, `TA`, `TB`, `M`\>, [`LiftOperatorOut`](liftable.md#liftoperatorout)<`C`, `TA`, `TB`, `M`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`LiftableLike`](../interfaces/liftable.LiftableLike.md) |
| `TA` | `TA` |
| `TB` | `TB` |
| `M` | extends [`Lift`](../interfaces/liftable.Lift.md)<`C`, [`Variance`](liftable.md#variance)\> |

___

### LiftOperatorIn

Ƭ **LiftOperatorIn**<`C`, `TA`, `TB`, `M`\>: `M` extends { `variance?`: [`ContraVariant`](liftable.md#contravariant)  } ? [`LiftableStateOf`](liftable.md#liftablestateof)<`C`, `TB`\> : [`LiftableStateOf`](liftable.md#liftablestateof)<`C`, `TA`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`LiftableLike`](../interfaces/liftable.LiftableLike.md) |
| `TA` | `TA` |
| `TB` | `TB` |
| `M` | extends [`Lift`](../interfaces/liftable.Lift.md)<`C`, [`Variance`](liftable.md#variance)\> |

___

### LiftOperatorOut

Ƭ **LiftOperatorOut**<`C`, `TA`, `TB`, `M`\>: `M` extends { `variance?`: [`ContraVariant`](liftable.md#contravariant)  } ? [`LiftableStateOf`](liftable.md#liftablestateof)<`C`, `TA`\> : [`LiftableStateOf`](liftable.md#liftablestateof)<`C`, `TB`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`LiftableLike`](../interfaces/liftable.LiftableLike.md) |
| `TA` | `TA` |
| `TB` | `TB` |
| `M` | extends [`Lift`](../interfaces/liftable.Lift.md)<`C`, [`Variance`](liftable.md#variance)\> |

___

### LiftableStateOf

Ƭ **LiftableStateOf**<`C`, `T`\>: `C` extends { `TLiftableState`: `unknown`  } ? `C` & { `T`: `T`  }[``"TLiftableState"``] : { `_C`: `C` ; `_T`: () => `T`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`LiftableLike`](../interfaces/liftable.LiftableLike.md) |
| `T` | `T` |

___

### Variance

Ƭ **Variance**: [`Covariant`](liftable.md#covariant) \| [`ContraVariant`](liftable.md#contravariant)

## Variables

### contraVariant

• `Const` **contraVariant**: [`ContraVariant`](liftable.md#contravariant)

___

### covariant

• `Const` **covariant**: [`Covariant`](liftable.md#covariant)

## Functions

### lift

▸ **lift**<`C`, `TA`, `TB`, `TVariance`\>(`m`): [`Function1`](functions.md#function1)<[`LiftOperator`](liftable.md#liftoperator)<`C`, `TA`, `TB`, [`Lift`](../interfaces/liftable.Lift.md)<`C`, `TVariance`\>\>, [`ContainerOperator`](container.md#containeroperator)<`C`, `TA`, `TB`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`LiftableLike`](../interfaces/liftable.LiftableLike.md) |
| `TA` | `TA` |
| `TB` | `TB` |
| `TVariance` | extends [`Variance`](liftable.md#variance) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Lift`](../interfaces/liftable.Lift.md)<`C`, `TVariance`\> |

#### Returns

[`Function1`](functions.md#function1)<[`LiftOperator`](liftable.md#liftoperator)<`C`, `TA`, `TB`, [`Lift`](../interfaces/liftable.Lift.md)<`C`, `TVariance`\>\>, [`ContainerOperator`](container.md#containeroperator)<`C`, `TA`, `TB`\>\>
