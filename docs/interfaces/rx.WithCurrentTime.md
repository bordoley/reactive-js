[Reactive-JS](../README.md) / [rx](../modules/rx.md) / WithCurrentTime

# Interface: WithCurrentTime<C\>

[rx](../modules/rx.md).WithCurrentTime

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableLike`](rx.ObservableLike.md) |

## Hierarchy

- [`Container`](containers.Container.md)<`C`\>

  ↳ **`WithCurrentTime`**

## Table of contents

### Operator Methods

- [withCurrentTime](rx.WithCurrentTime.md#withcurrenttime)

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
