[Reactive-JS](../README.md) / [core](../modules/core.md) / [ReactiveContainer](../modules/core.ReactiveContainer.md) / WithCurrentTime

# Interface: WithCurrentTime<C\>

[core](../modules/core.md).[ReactiveContainer](../modules/core.ReactiveContainer.md).WithCurrentTime

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableContainer`](core.ObservableContainer.md) |

## Table of contents

### Operator Methods

- [withCurrentTime](core.ReactiveContainer.WithCurrentTime.md#withcurrenttime)

## Operator Methods

### withCurrentTime

▸ **withCurrentTime**<`T`, `TOut`\>(`selector`): [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `TOut`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function2`](../modules/functions.md#function2)<`number`, `T`, `TOut`\> |

#### Returns

[`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `TOut`\>
