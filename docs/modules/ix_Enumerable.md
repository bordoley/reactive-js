[Reactive-JS](../README.md) / ix/Enumerable

# Module: ix/Enumerable

## Table of contents

### Interfaces

- [EnumerableComputation](../interfaces/ix_Enumerable.EnumerableComputation.md)
- [EnumerableModule](../interfaces/ix_Enumerable.EnumerableModule.md)

### Type Aliases

- [Signature](ix_Enumerable.md#signature)
- [Type](ix_Enumerable.md#type)

### Functions

- [buffer](ix_Enumerable.md#buffer)
- [decodeWithCharset](ix_Enumerable.md#decodewithcharset)
- [distinctUntilChanged](ix_Enumerable.md#distinctuntilchanged)
- [keep](ix_Enumerable.md#keep)
- [map](ix_Enumerable.md#map)
- [pairwise](ix_Enumerable.md#pairwise)
- [reduce](ix_Enumerable.md#reduce)
- [scan](ix_Enumerable.md#scan)
- [skipFirst](ix_Enumerable.md#skipfirst)
- [takeFirst](ix_Enumerable.md#takefirst)
- [takeWhile](ix_Enumerable.md#takewhile)

## Type Aliases

### Signature

Ƭ **Signature**: [`EnumerableModule`](../interfaces/ix_Enumerable.EnumerableModule.md)

___

### Type

Ƭ **Type**: [`EnumerableComputation`](../interfaces/ix_Enumerable.EnumerableComputation.md)

## Functions

### buffer

▸ **buffer**<`T`\>(`options?`): [`PureComputationOperator`](computations.md#purecomputationoperator)<[`EnumerableComputation`](../interfaces/ix_Enumerable.EnumerableComputation.md), `T`, readonly `T`[]\>

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

[`PureComputationOperator`](computations.md#purecomputationoperator)<[`EnumerableComputation`](../interfaces/ix_Enumerable.EnumerableComputation.md), `T`, readonly `T`[]\>

___

### decodeWithCharset

▸ **decodeWithCharset**(`options?`): [`PureComputationOperator`](computations.md#purecomputationoperator)<[`EnumerableComputation`](../interfaces/ix_Enumerable.EnumerableComputation.md), `ArrayBuffer`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.charset?` | `string` |

#### Returns

[`PureComputationOperator`](computations.md#purecomputationoperator)<[`EnumerableComputation`](../interfaces/ix_Enumerable.EnumerableComputation.md), `ArrayBuffer`, `string`\>

___

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`PureComputationOperator`](computations.md#purecomputationoperator)<[`EnumerableComputation`](../interfaces/ix_Enumerable.EnumerableComputation.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.equality?` | [`Equality`](functions.md#equality)<`T`\> |

#### Returns

[`PureComputationOperator`](computations.md#purecomputationoperator)<[`EnumerableComputation`](../interfaces/ix_Enumerable.EnumerableComputation.md), `T`, `T`\>

___

### keep

▸ **keep**<`T`\>(`predicate`): [`PureComputationOperator`](computations.md#purecomputationoperator)<[`EnumerableComputation`](../interfaces/ix_Enumerable.EnumerableComputation.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`PureComputationOperator`](computations.md#purecomputationoperator)<[`EnumerableComputation`](../interfaces/ix_Enumerable.EnumerableComputation.md), `T`, `T`\>

___

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`PureComputationOperator`](computations.md#purecomputationoperator)<[`EnumerableComputation`](../interfaces/ix_Enumerable.EnumerableComputation.md), `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, `TB`\> |

#### Returns

[`PureComputationOperator`](computations.md#purecomputationoperator)<[`EnumerableComputation`](../interfaces/ix_Enumerable.EnumerableComputation.md), `TA`, `TB`\>

___

### pairwise

▸ **pairwise**<`T`\>(): [`PureComputationOperator`](computations.md#purecomputationoperator)<[`EnumerableComputation`](../interfaces/ix_Enumerable.EnumerableComputation.md), `T`, [`Tuple2`](functions.md#tuple2)<`T`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`PureComputationOperator`](computations.md#purecomputationoperator)<[`EnumerableComputation`](../interfaces/ix_Enumerable.EnumerableComputation.md), `T`, [`Tuple2`](functions.md#tuple2)<`T`, `T`\>\>

___

### reduce

▸ **reduce**<`T`, `TAcc`\>(`reducer`, `initialValue`): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>, `TAcc`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Reducer`](functions.md#reducer)<`T`, `TAcc`\> |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc`\> |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>, `TAcc`\>

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`PureComputationOperator`](computations.md#purecomputationoperator)<[`EnumerableComputation`](../interfaces/ix_Enumerable.EnumerableComputation.md), `T`, `TAcc`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Reducer`](functions.md#reducer)<`T`, `TAcc`\> |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc`\> |

#### Returns

[`PureComputationOperator`](computations.md#purecomputationoperator)<[`EnumerableComputation`](../interfaces/ix_Enumerable.EnumerableComputation.md), `T`, `TAcc`\>

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`PureComputationOperator`](computations.md#purecomputationoperator)<[`EnumerableComputation`](../interfaces/ix_Enumerable.EnumerableComputation.md), `T`, `T`\>

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

[`PureComputationOperator`](computations.md#purecomputationoperator)<[`EnumerableComputation`](../interfaces/ix_Enumerable.EnumerableComputation.md), `T`, `T`\>

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`PureComputationOperator`](computations.md#purecomputationoperator)<[`EnumerableComputation`](../interfaces/ix_Enumerable.EnumerableComputation.md), `T`, `T`\>

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

[`PureComputationOperator`](computations.md#purecomputationoperator)<[`EnumerableComputation`](../interfaces/ix_Enumerable.EnumerableComputation.md), `T`, `T`\>

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`PureComputationOperator`](computations.md#purecomputationoperator)<[`EnumerableComputation`](../interfaces/ix_Enumerable.EnumerableComputation.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |
| `options?` | `Object` |
| `options.inclusive?` | `boolean` |

#### Returns

[`PureComputationOperator`](computations.md#purecomputationoperator)<[`EnumerableComputation`](../interfaces/ix_Enumerable.EnumerableComputation.md), `T`, `T`\>
