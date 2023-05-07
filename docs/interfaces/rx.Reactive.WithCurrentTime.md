[Reactive-JS](../README.md) / [rx](../modules/rx.md) / [Reactive](../modules/rx.Reactive.md) / WithCurrentTime

# Interface: WithCurrentTime<C\>

[rx](../modules/rx.md).[Reactive](../modules/rx.Reactive.md).WithCurrentTime

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableContainer`](rx.ObservableContainer.md) |

## Table of contents

### Operator Methods

- [withCurrentTime](rx.Reactive.WithCurrentTime.md#withcurrenttime)

## Operator Methods

### withCurrentTime

▸ **withCurrentTime**<`T`, `TOut`\>(`selector`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `TOut`\>

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

[`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `TOut`\>
