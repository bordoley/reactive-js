[Reactive-JS](../README.md) / [rx](../modules/rx.md) / [Reactive](../modules/rx.Reactive.md) / ZipWithLatestFrom

# Interface: ZipWithLatestFrom<C\>

[rx](../modules/rx.md).[Reactive](../modules/rx.Reactive.md).ZipWithLatestFrom

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](containers.Container-1.md) |

## Table of contents

### Operator Methods

- [zipWithLatestFrom](rx.Reactive.ZipWithLatestFrom.md#zipwithlatestfrom)

## Operator Methods

### zipWithLatestFrom

▸ **zipWithLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `TA`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`ContainerOf`](../modules/containers.md#containerof)<`C`, `TB`\> |
| `selector` | [`Function2`](../modules/functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `TA`, `T`\>
