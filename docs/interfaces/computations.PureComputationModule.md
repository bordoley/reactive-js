[Reactive-JS](../README.md) / [computations](../modules/computations.md) / PureComputationModule

# Interface: PureComputationModule<C\>

[computations](../modules/computations.md).PureComputationModule

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Computation`](computations.Computation.md) |

## Hierarchy

- **`PureComputationModule`**

  ↳ [`EnumerableModule`](collections_Enumerable.EnumerableModule.md)

  ↳ [`ObservableModule`](concurrent_Observable.ObservableModule.md)

  ↳ [`ObservableModule`](concurrent_Observable.ObservableModule.md)

  ↳ [`EventSourceModule`](events_EventSource.EventSourceModule.md)

## Table of contents

### Methods

- [buffer](computations.PureComputationModule.md#buffer)
- [decodeWithCharset](computations.PureComputationModule.md#decodewithcharset)
- [distinctUntilChanged](computations.PureComputationModule.md#distinctuntilchanged)
- [fromReadonlyArray](computations.PureComputationModule.md#fromreadonlyarray)
- [keep](computations.PureComputationModule.md#keep)
- [map](computations.PureComputationModule.md#map)
- [pairwise](computations.PureComputationModule.md#pairwise)
- [scan](computations.PureComputationModule.md#scan)
- [skipFirst](computations.PureComputationModule.md#skipfirst)
- [takeFirst](computations.PureComputationModule.md#takefirst)
- [takeWhile](computations.PureComputationModule.md#takewhile)

## Methods

### buffer

▸ **buffer**<`T`\>(`options?`): [`ComputationOperator`](../modules/computations.md#computationoperator)<`C`, `T`, readonly `T`[]\>

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

[`ComputationOperator`](../modules/computations.md#computationoperator)<`C`, `T`, readonly `T`[]\>

___

### decodeWithCharset

▸ **decodeWithCharset**(`options?`): [`ComputationOperator`](../modules/computations.md#computationoperator)<`C`, `ArrayBuffer`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.charset?` | `string` |

#### Returns

[`ComputationOperator`](../modules/computations.md#computationoperator)<`C`, `ArrayBuffer`, `string`\>

___

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`ComputationOperator`](../modules/computations.md#computationoperator)<`C`, `T`, `T`\>

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

[`ComputationOperator`](../modules/computations.md#computationoperator)<`C`, `T`, `T`\>

___

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`\>(): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`ComputationOf`](../modules/computations.md#computationof)<`C`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

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

___

### pairwise

▸ **pairwise**<`T`\>(): [`ComputationOperator`](../modules/computations.md#computationoperator)<`C`, `T`, [`Tuple2`](../modules/functions.md#tuple2)<`T`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ComputationOperator`](../modules/computations.md#computationoperator)<`C`, `T`, [`Tuple2`](../modules/functions.md#tuple2)<`T`, `T`\>\>

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`ComputationOperator`](../modules/computations.md#computationoperator)<`C`, `T`, `TAcc`\>

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

[`ComputationOperator`](../modules/computations.md#computationoperator)<`C`, `T`, `TAcc`\>

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`ComputationOperator`](../modules/computations.md#computationoperator)<`C`, `T`, `T`\>

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

[`ComputationOperator`](../modules/computations.md#computationoperator)<`C`, `T`, `T`\>

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`ComputationOperator`](../modules/computations.md#computationoperator)<`C`, `T`, `T`\>

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

[`ComputationOperator`](../modules/computations.md#computationoperator)<`C`, `T`, `T`\>

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`ComputationOperator`](../modules/computations.md#computationoperator)<`C`, `T`, `T`\>

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

[`ComputationOperator`](../modules/computations.md#computationoperator)<`C`, `T`, `T`\>
