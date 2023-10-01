[Reactive-JS](../README.md) / [ix/Enumerable](../modules/ix_Enumerable.md) / EnumerableModule

# Interface: EnumerableModule

[ix/Enumerable](../modules/ix_Enumerable.md).EnumerableModule

## Hierarchy

- [`PureComputationModule`](computations.PureComputationModule.md)<[`EnumerableComputation`](ix_Enumerable.EnumerableComputation.md)\>

  ↳ **`EnumerableModule`**

## Table of contents

### Methods

- [buffer](ix_Enumerable.EnumerableModule.md#buffer)
- [concat](ix_Enumerable.EnumerableModule.md#concat)
- [concatMany](ix_Enumerable.EnumerableModule.md#concatmany)
- [concatWith](ix_Enumerable.EnumerableModule.md#concatwith)
- [decodeWithCharset](ix_Enumerable.EnumerableModule.md#decodewithcharset)
- [distinctUntilChanged](ix_Enumerable.EnumerableModule.md#distinctuntilchanged)
- [keep](ix_Enumerable.EnumerableModule.md#keep)
- [map](ix_Enumerable.EnumerableModule.md#map)
- [pairwise](ix_Enumerable.EnumerableModule.md#pairwise)
- [reduce](ix_Enumerable.EnumerableModule.md#reduce)
- [scan](ix_Enumerable.EnumerableModule.md#scan)
- [skipFirst](ix_Enumerable.EnumerableModule.md#skipfirst)
- [takeFirst](ix_Enumerable.EnumerableModule.md#takefirst)
- [takeWhile](ix_Enumerable.EnumerableModule.md#takewhile)

## Methods

### buffer

▸ **buffer**<`T`\>(`options?`): [`PureComputationOperator`](../modules/computations.md#purecomputationoperator)<[`EnumerableComputation`](ix_Enumerable.EnumerableComputation.md), `T`, readonly `T`[]\>

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

[`PureComputationOperator`](../modules/computations.md#purecomputationoperator)<[`EnumerableComputation`](ix_Enumerable.EnumerableComputation.md), `T`, readonly `T`[]\>

#### Inherited from

[PureComputationModule](computations.PureComputationModule.md).[buffer](computations.PureComputationModule.md#buffer)

___

### concat

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`EnumerableLike`](ix.EnumerableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`EnumerableLike`](ix.EnumerableLike.md)<`T`\> |
| `snd` | [`EnumerableLike`](ix.EnumerableLike.md)<`T`\> |
| `...tail` | readonly [`EnumerableLike`](ix.EnumerableLike.md)<`T`\>[] |

#### Returns

[`EnumerableLike`](ix.EnumerableLike.md)<`T`\>

___

### concatMany

▸ **concatMany**<`T`\>(`enumerables`): [`EnumerableLike`](ix.EnumerableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `enumerables` | readonly [`EnumerableLike`](ix.EnumerableLike.md)<`T`\>[] |

#### Returns

[`EnumerableLike`](ix.EnumerableLike.md)<`T`\>

___

### concatWith

▸ **concatWith**<`T`\>(`snd`, `...tail`): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](ix.EnumerableLike.md)<`T`\>, [`EnumerableLike`](ix.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`EnumerableLike`](ix.EnumerableLike.md)<`T`\> |
| `...tail` | readonly [`EnumerableLike`](ix.EnumerableLike.md)<`T`\>[] |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](ix.EnumerableLike.md)<`T`\>, [`EnumerableLike`](ix.EnumerableLike.md)<`T`\>\>

___

### decodeWithCharset

▸ **decodeWithCharset**(`options?`): [`PureComputationOperator`](../modules/computations.md#purecomputationoperator)<[`EnumerableComputation`](ix_Enumerable.EnumerableComputation.md), `ArrayBuffer`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.charset?` | `string` |

#### Returns

[`PureComputationOperator`](../modules/computations.md#purecomputationoperator)<[`EnumerableComputation`](ix_Enumerable.EnumerableComputation.md), `ArrayBuffer`, `string`\>

#### Inherited from

[PureComputationModule](computations.PureComputationModule.md).[decodeWithCharset](computations.PureComputationModule.md#decodewithcharset)

___

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`PureComputationOperator`](../modules/computations.md#purecomputationoperator)<[`EnumerableComputation`](ix_Enumerable.EnumerableComputation.md), `T`, `T`\>

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

[`PureComputationOperator`](../modules/computations.md#purecomputationoperator)<[`EnumerableComputation`](ix_Enumerable.EnumerableComputation.md), `T`, `T`\>

#### Inherited from

[PureComputationModule](computations.PureComputationModule.md).[distinctUntilChanged](computations.PureComputationModule.md#distinctuntilchanged)

___

### keep

▸ **keep**<`T`\>(`predicate`): [`PureComputationOperator`](../modules/computations.md#purecomputationoperator)<[`EnumerableComputation`](ix_Enumerable.EnumerableComputation.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`PureComputationOperator`](../modules/computations.md#purecomputationoperator)<[`EnumerableComputation`](ix_Enumerable.EnumerableComputation.md), `T`, `T`\>

#### Inherited from

[PureComputationModule](computations.PureComputationModule.md).[keep](computations.PureComputationModule.md#keep)

___

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`PureComputationOperator`](../modules/computations.md#purecomputationoperator)<[`EnumerableComputation`](ix_Enumerable.EnumerableComputation.md), `TA`, `TB`\>

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

[`PureComputationOperator`](../modules/computations.md#purecomputationoperator)<[`EnumerableComputation`](ix_Enumerable.EnumerableComputation.md), `TA`, `TB`\>

#### Inherited from

[PureComputationModule](computations.PureComputationModule.md).[map](computations.PureComputationModule.md#map)

___

### pairwise

▸ **pairwise**<`T`\>(): [`PureComputationOperator`](../modules/computations.md#purecomputationoperator)<[`EnumerableComputation`](ix_Enumerable.EnumerableComputation.md), `T`, [`Tuple2`](../modules/functions.md#tuple2)<`T`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`PureComputationOperator`](../modules/computations.md#purecomputationoperator)<[`EnumerableComputation`](ix_Enumerable.EnumerableComputation.md), `T`, [`Tuple2`](../modules/functions.md#tuple2)<`T`, `T`\>\>

#### Inherited from

[PureComputationModule](computations.PureComputationModule.md).[pairwise](computations.PureComputationModule.md#pairwise)

___

### reduce

▸ **reduce**<`T`, `TAcc`\>(`reducer`, `initialValue`): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](ix.EnumerableLike.md)<`T`\>, `TAcc`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Reducer`](../modules/functions.md#reducer)<`T`, `TAcc`\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](ix.EnumerableLike.md)<`T`\>, `TAcc`\>

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`PureComputationOperator`](../modules/computations.md#purecomputationoperator)<[`EnumerableComputation`](ix_Enumerable.EnumerableComputation.md), `T`, `TAcc`\>

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

[`PureComputationOperator`](../modules/computations.md#purecomputationoperator)<[`EnumerableComputation`](ix_Enumerable.EnumerableComputation.md), `T`, `TAcc`\>

#### Inherited from

[PureComputationModule](computations.PureComputationModule.md).[scan](computations.PureComputationModule.md#scan)

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`PureComputationOperator`](../modules/computations.md#purecomputationoperator)<[`EnumerableComputation`](ix_Enumerable.EnumerableComputation.md), `T`, `T`\>

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

[`PureComputationOperator`](../modules/computations.md#purecomputationoperator)<[`EnumerableComputation`](ix_Enumerable.EnumerableComputation.md), `T`, `T`\>

#### Inherited from

[PureComputationModule](computations.PureComputationModule.md).[skipFirst](computations.PureComputationModule.md#skipfirst)

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`PureComputationOperator`](../modules/computations.md#purecomputationoperator)<[`EnumerableComputation`](ix_Enumerable.EnumerableComputation.md), `T`, `T`\>

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

[`PureComputationOperator`](../modules/computations.md#purecomputationoperator)<[`EnumerableComputation`](ix_Enumerable.EnumerableComputation.md), `T`, `T`\>

#### Inherited from

[PureComputationModule](computations.PureComputationModule.md).[takeFirst](computations.PureComputationModule.md#takefirst)

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`PureComputationOperator`](../modules/computations.md#purecomputationoperator)<[`EnumerableComputation`](ix_Enumerable.EnumerableComputation.md), `T`, `T`\>

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

[`PureComputationOperator`](../modules/computations.md#purecomputationoperator)<[`EnumerableComputation`](ix_Enumerable.EnumerableComputation.md), `T`, `T`\>

#### Inherited from

[PureComputationModule](computations.PureComputationModule.md).[takeWhile](computations.PureComputationModule.md#takewhile)
