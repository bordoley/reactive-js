[Reactive-JS](../README.md) / [rx](../modules/rx.md) / Lift

# Interface: Lift<C\>

[rx](../modules/rx.md).Lift

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableLike`](rx.ObservableLike.md) |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`Lift`**

## Table of contents

### Operator Methods

- [lift](rx.Lift.md#lift)

## Operator Methods

### lift

▸ **lift**<`TA`, `TB`\>(`operator`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `operator` | [`Function1`](../modules/functions.md#function1)<[`ObserverLike`](rx.ObserverLike.md)<`TB`\>, [`ObserverLike`](rx.ObserverLike.md)<`TA`\>\> |

#### Returns

[`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `TA`, `TB`\>
