[Reactive-JS](../README.md) / [core](../modules/core.md) / [ReactiveContainer](../modules/core.ReactiveContainer.md) / WithLatestFrom

# Interface: WithLatestFrom<C\>

[core](../modules/core.md).[ReactiveContainer](../modules/core.ReactiveContainer.md).WithLatestFrom

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableContainer`](core.ObservableContainer.md) |

## Table of contents

### Operator Methods

- [withLatestFrom](core.ReactiveContainer.WithLatestFrom.md#withlatestfrom)

## Operator Methods

### withLatestFrom

▸ **withLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`Operator`](../modules/core.Container.md#operator)<`C`, `TA`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Of`](../modules/core.Container.md#of)<`C`, `TB`\> |
| `selector` | [`Function2`](../modules/functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`Operator`](../modules/core.Container.md#operator)<`C`, `TA`, `T`\>
