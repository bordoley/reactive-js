[Reactive-JS](../README.md) / [computations](../modules/computations.md) / PureComputationModule

# Interface: PureComputationModule<C\>

[computations](../modules/computations.md).PureComputationModule

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Computation`](computations.Computation.md) |

## Hierarchy

- **`PureComputationModule`**

  ↳ [`PureDeferredComputationModule`](computations.PureDeferredComputationModule.md)

  ↳ [`EventSourceModule`](events_EventSource.EventSourceModule.md)

## Table of contents

### Methods

- [fromReadonlyArray](computations.PureComputationModule.md#fromreadonlyarray)
- [keep](computations.PureComputationModule.md#keep)
- [map](computations.PureComputationModule.md#map)

## Methods

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`ComputationOf`](../modules/computations.md#computationof)<`C`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |
| `options.start?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`ComputationOf`](../modules/computations.md#computationof)<`C`, `T`\>\>

___

### keep

▸ **keep**<`T`\>(`predicate`): [`ComputationOperator`](../modules/computations.md#computationoperator)<`C`, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`ComputationOperator`](../modules/computations.md#computationoperator)<`C`, `T`, `T`\>

___

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`ComputationOperator`](../modules/computations.md#computationoperator)<`C`, `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, `TB`\> |

#### Returns

[`ComputationOperator`](../modules/computations.md#computationoperator)<`C`, `TA`, `TB`\>
