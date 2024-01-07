[Reactive-JS](../README.md) / [computations](../modules/computations.md) / PureStatefulComputationModule

# Interface: PureStatefulComputationModule<C\>

[computations](../modules/computations.md).PureStatefulComputationModule

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Computation`](computations.Computation.md) |

## Hierarchy

- **`PureStatefulComputationModule`**

  ↳ [`EnumerableModule`](collections_Enumerable.EnumerableModule.md)

## Table of contents

### Methods

- [buffer](computations.PureStatefulComputationModule.md#buffer)
- [decodeWithCharset](computations.PureStatefulComputationModule.md#decodewithcharset)
- [distinctUntilChanged](computations.PureStatefulComputationModule.md#distinctuntilchanged)
- [pairwise](computations.PureStatefulComputationModule.md#pairwise)
- [scan](computations.PureStatefulComputationModule.md#scan)
- [skipFirst](computations.PureStatefulComputationModule.md#skipfirst)
- [takeFirst](computations.PureStatefulComputationModule.md#takefirst)
- [takeWhile](computations.PureStatefulComputationModule.md#takewhile)

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
