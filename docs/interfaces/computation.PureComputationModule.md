[Reactive-JS](../README.md) / [computation](../modules/computation.md) / PureComputationModule

# Interface: PureComputationModule<C\>

[computation](../modules/computation.md).PureComputationModule

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Computation`](computation.Computation.md) |

## Hierarchy

- **`PureComputationModule`**

  ↳ [`ObservableModule`](concurrent_Observable.ObservableModule.md)

  ↳ [`EnumerableModule`](ix_Enumerable.EnumerableModule.md)

  ↳ [`EventSourceModule`](rx_EventSource.EventSourceModule.md)

## Table of contents

### Methods

- [buffer](computation.PureComputationModule.md#buffer)
- [decodeWithCharset](computation.PureComputationModule.md#decodewithcharset)
- [distinctUntilChanged](computation.PureComputationModule.md#distinctuntilchanged)
- [keep](computation.PureComputationModule.md#keep)
- [map](computation.PureComputationModule.md#map)
- [pairwise](computation.PureComputationModule.md#pairwise)
- [scan](computation.PureComputationModule.md#scan)
- [skipFirst](computation.PureComputationModule.md#skipfirst)
- [takeFirst](computation.PureComputationModule.md#takefirst)
- [takeWhile](computation.PureComputationModule.md#takewhile)

## Methods

### buffer

▸ **buffer**<`T`\>(`options?`): [`PureComputationOperator`](../modules/computation.md#purecomputationoperator)<`C`, `T`, readonly `T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |

#### Returns

[`PureComputationOperator`](../modules/computation.md#purecomputationoperator)<`C`, `T`, readonly `T`[]\>

___

### decodeWithCharset

▸ **decodeWithCharset**(`options?`): [`PureComputationOperator`](../modules/computation.md#purecomputationoperator)<`C`, `ArrayBuffer`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.charset?` | `string` |

#### Returns

[`PureComputationOperator`](../modules/computation.md#purecomputationoperator)<`C`, `ArrayBuffer`, `string`\>

___

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`PureComputationOperator`](../modules/computation.md#purecomputationoperator)<`C`, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.equality?` | [`Equality`](../modules/functions.md#equality)<`T`\> |

#### Returns

[`PureComputationOperator`](../modules/computation.md#purecomputationoperator)<`C`, `T`, `T`\>

___

### keep

▸ **keep**<`T`\>(`predicate`): [`PureComputationOperator`](../modules/computation.md#purecomputationoperator)<`C`, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`PureComputationOperator`](../modules/computation.md#purecomputationoperator)<`C`, `T`, `T`\>

___

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`PureComputationOperator`](../modules/computation.md#purecomputationoperator)<`C`, `TA`, `TB`\>

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

[`PureComputationOperator`](../modules/computation.md#purecomputationoperator)<`C`, `TA`, `TB`\>

___

### pairwise

▸ **pairwise**<`T`\>(): [`PureComputationOperator`](../modules/computation.md#purecomputationoperator)<`C`, `T`, [`Tuple2`](../modules/functions.md#tuple2)<`T`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`PureComputationOperator`](../modules/computation.md#purecomputationoperator)<`C`, `T`, [`Tuple2`](../modules/functions.md#tuple2)<`T`, `T`\>\>

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`PureComputationOperator`](../modules/computation.md#purecomputationoperator)<`C`, `T`, `TAcc`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Reducer`](../modules/functions.md#reducer)<`T`, `TAcc`\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

#### Returns

[`PureComputationOperator`](../modules/computation.md#purecomputationoperator)<`C`, `T`, `TAcc`\>

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`PureComputationOperator`](../modules/computation.md#purecomputationoperator)<`C`, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |

#### Returns

[`PureComputationOperator`](../modules/computation.md#purecomputationoperator)<`C`, `T`, `T`\>

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`PureComputationOperator`](../modules/computation.md#purecomputationoperator)<`C`, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |

#### Returns

[`PureComputationOperator`](../modules/computation.md#purecomputationoperator)<`C`, `T`, `T`\>

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`PureComputationOperator`](../modules/computation.md#purecomputationoperator)<`C`, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |
| `options?` | `Object` |
| `options.inclusive?` | `boolean` |

#### Returns

[`PureComputationOperator`](../modules/computation.md#purecomputationoperator)<`C`, `T`, `T`\>
