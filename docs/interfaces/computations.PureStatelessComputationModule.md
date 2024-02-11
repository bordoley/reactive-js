[Reactive-JS](../README.md) / [computations](../modules/computations.md) / PureStatelessComputationModule

# Interface: PureStatelessComputationModule\<C\>

[computations](../modules/computations.md).PureStatelessComputationModule

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Computation`](computations.Computation.md) |

## Hierarchy

- **`PureStatelessComputationModule`**

  ↳ [`EnumerableModule`](collections_Enumerable.EnumerableModule.md)

  ↳ [`EventSourceModule`](events_EventSource.EventSourceModule.md)

## Table of contents

### Methods

- [keep](computations.PureStatelessComputationModule.md#keep)
- [map](computations.PureStatelessComputationModule.md#map)

## Methods

### keep

▸ **keep**\<`T`\>(`predicate`): [`ComputationOperator`](../modules/computations.md#computationoperator)\<`C`, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)\<`T`\> |

#### Returns

[`ComputationOperator`](../modules/computations.md#computationoperator)\<`C`, `T`, `T`\>

___

### map

▸ **map**\<`TA`, `TB`\>(`selector`): [`ComputationOperator`](../modules/computations.md#computationoperator)\<`C`, `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)\<`TA`, `TB`\> |

#### Returns

[`ComputationOperator`](../modules/computations.md#computationoperator)\<`C`, `TA`, `TB`\>
