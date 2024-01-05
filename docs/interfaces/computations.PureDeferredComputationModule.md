[Reactive-JS](../README.md) / [computations](../modules/computations.md) / PureDeferredComputationModule

# Interface: PureDeferredComputationModule<C\>

[computations](../modules/computations.md).PureDeferredComputationModule

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Computation`](computations.Computation.md) |

## Hierarchy

- [`PureComputationModule`](computations.PureComputationModule.md)<`C`\>

  ↳ **`PureDeferredComputationModule`**

  ↳↳ [`EnumerableModule`](collections_Enumerable.EnumerableModule.md)

## Table of contents

### Methods

- [buffer](computations.PureDeferredComputationModule.md#buffer)
- [decodeWithCharset](computations.PureDeferredComputationModule.md#decodewithcharset)
- [distinctUntilChanged](computations.PureDeferredComputationModule.md#distinctuntilchanged)
- [fromReadonlyArray](computations.PureDeferredComputationModule.md#fromreadonlyarray)
- [keep](computations.PureDeferredComputationModule.md#keep)
- [map](computations.PureDeferredComputationModule.md#map)
- [pairwise](computations.PureDeferredComputationModule.md#pairwise)
- [scan](computations.PureDeferredComputationModule.md#scan)
- [skipFirst](computations.PureDeferredComputationModule.md#skipfirst)
- [takeFirst](computations.PureDeferredComputationModule.md#takefirst)
- [takeWhile](computations.PureDeferredComputationModule.md#takewhile)

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
| `options.fatal?` | `boolean` |
| `options.ignoreBOM?` | `boolean` |

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

#### Inherited from

[PureComputationModule](computations.PureComputationModule.md).[fromReadonlyArray](computations.PureComputationModule.md#fromreadonlyarray)

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

#### Inherited from

[PureComputationModule](computations.PureComputationModule.md).[keep](computations.PureComputationModule.md#keep)

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

#### Inherited from

[PureComputationModule](computations.PureComputationModule.md).[map](computations.PureComputationModule.md#map)

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
