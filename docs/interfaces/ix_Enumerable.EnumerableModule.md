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
- [empty](ix_Enumerable.EnumerableModule.md#empty)
- [generate](ix_Enumerable.EnumerableModule.md#generate)
- [keep](ix_Enumerable.EnumerableModule.md#keep)
- [map](ix_Enumerable.EnumerableModule.md#map)
- [pairwise](ix_Enumerable.EnumerableModule.md#pairwise)
- [range](ix_Enumerable.EnumerableModule.md#range)
- [reduce](ix_Enumerable.EnumerableModule.md#reduce)
- [scan](ix_Enumerable.EnumerableModule.md#scan)
- [skipFirst](ix_Enumerable.EnumerableModule.md#skipfirst)
- [takeFirst](ix_Enumerable.EnumerableModule.md#takefirst)
- [takeWhile](ix_Enumerable.EnumerableModule.md#takewhile)
- [zip](ix_Enumerable.EnumerableModule.md#zip)
- [zipWith](ix_Enumerable.EnumerableModule.md#zipwith)

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

### empty

▸ **empty**<`T`\>(): [`EnumerableLike`](ix.EnumerableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`EnumerableLike`](ix.EnumerableLike.md)<`T`\>

___

### generate

▸ **generate**<`T`\>(`generator`, `initialValue`): [`EnumerableLike`](ix.EnumerableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `generator` | [`Updater`](../modules/functions.md#updater)<`T`\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`T`\> |

#### Returns

[`EnumerableLike`](ix.EnumerableLike.md)<`T`\>

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

### range

▸ **range**(`start`, `options?`): [`EnumerableLike`](ix.EnumerableLike.md)<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `start` | `number` |
| `options?` | `Object` |
| `options.count?` | `number` |

#### Returns

[`EnumerableLike`](ix.EnumerableLike.md)<`number`\>

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

___

### zip

▸ **zip**<`TA`, `TB`\>(`a`, `b`): [`EnumerableLike`](ix.EnumerableLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`TA`, `TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`EnumerableLike`](ix.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](ix.EnumerableLike.md)<`TB`\> |

#### Returns

[`EnumerableLike`](ix.EnumerableLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`TA`, `TB`\>\>

▸ **zip**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`EnumerableLike`](ix.EnumerableLike.md)<[`Tuple3`](../modules/functions.md#tuple3)<`TA`, `TB`, `TC`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`EnumerableLike`](ix.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](ix.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](ix.EnumerableLike.md)<`TC`\> |

#### Returns

[`EnumerableLike`](ix.EnumerableLike.md)<[`Tuple3`](../modules/functions.md#tuple3)<`TA`, `TB`, `TC`\>\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`EnumerableLike`](ix.EnumerableLike.md)<[`Tuple4`](../modules/functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`EnumerableLike`](ix.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](ix.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](ix.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](ix.EnumerableLike.md)<`TD`\> |

#### Returns

[`EnumerableLike`](ix.EnumerableLike.md)<[`Tuple4`](../modules/functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`EnumerableLike`](ix.EnumerableLike.md)<[`Tuple5`](../modules/functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`EnumerableLike`](ix.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](ix.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](ix.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](ix.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](ix.EnumerableLike.md)<`TE`\> |

#### Returns

[`EnumerableLike`](ix.EnumerableLike.md)<[`Tuple5`](../modules/functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`EnumerableLike`](ix.EnumerableLike.md)<[`Tuple6`](../modules/functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |
| `TF` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`EnumerableLike`](ix.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](ix.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](ix.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](ix.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](ix.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](ix.EnumerableLike.md)<`TF`\> |

#### Returns

[`EnumerableLike`](ix.EnumerableLike.md)<[`Tuple6`](../modules/functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`EnumerableLike`](ix.EnumerableLike.md)<[`Tuple7`](../modules/functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |
| `TF` |
| `TG` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`EnumerableLike`](ix.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](ix.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](ix.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](ix.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](ix.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](ix.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](ix.EnumerableLike.md)<`TG`\> |

#### Returns

[`EnumerableLike`](ix.EnumerableLike.md)<[`Tuple7`](../modules/functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`EnumerableLike`](ix.EnumerableLike.md)<[`Tuple8`](../modules/functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |
| `TF` |
| `TG` |
| `TH` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`EnumerableLike`](ix.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](ix.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](ix.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](ix.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](ix.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](ix.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](ix.EnumerableLike.md)<`TG`\> |
| `h` | [`EnumerableLike`](ix.EnumerableLike.md)<`TH`\> |

#### Returns

[`EnumerableLike`](ix.EnumerableLike.md)<[`Tuple8`](../modules/functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`EnumerableLike`](ix.EnumerableLike.md)<[`Tuple9`](../modules/functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |
| `TF` |
| `TG` |
| `TH` |
| `TI` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`EnumerableLike`](ix.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](ix.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](ix.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](ix.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](ix.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](ix.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](ix.EnumerableLike.md)<`TG`\> |
| `h` | [`EnumerableLike`](ix.EnumerableLike.md)<`TH`\> |
| `i` | [`EnumerableLike`](ix.EnumerableLike.md)<`TI`\> |

#### Returns

[`EnumerableLike`](ix.EnumerableLike.md)<[`Tuple9`](../modules/functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

___

### zipWith

▸ **zipWith**<`TA`, `TB`\>(`b`): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](ix.EnumerableLike.md)<`TA`\>, [`EnumerableLike`](ix.EnumerableLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`TA`, `TB`\>\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`EnumerableLike`](ix.EnumerableLike.md)<`TB`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](ix.EnumerableLike.md)<`TA`\>, [`EnumerableLike`](ix.EnumerableLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`TA`, `TB`\>\>\>

▸ **zipWith**<`TA`, `TB`, `TC`\>(`b`, `c`): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](ix.EnumerableLike.md)<`TA`\>, [`EnumerableLike`](ix.EnumerableLike.md)<[`Tuple3`](../modules/functions.md#tuple3)<`TA`, `TB`, `TC`\>\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`EnumerableLike`](ix.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](ix.EnumerableLike.md)<`TC`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](ix.EnumerableLike.md)<`TA`\>, [`EnumerableLike`](ix.EnumerableLike.md)<[`Tuple3`](../modules/functions.md#tuple3)<`TA`, `TB`, `TC`\>\>\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`\>(`b`, `c`, `d`): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](ix.EnumerableLike.md)<`TA`\>, [`EnumerableLike`](ix.EnumerableLike.md)<[`Tuple4`](../modules/functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`EnumerableLike`](ix.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](ix.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](ix.EnumerableLike.md)<`TD`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](ix.EnumerableLike.md)<`TA`\>, [`EnumerableLike`](ix.EnumerableLike.md)<[`Tuple4`](../modules/functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`b`, `c`, `d`, `e`): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](ix.EnumerableLike.md)<`TA`\>, [`EnumerableLike`](ix.EnumerableLike.md)<[`Tuple5`](../modules/functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`EnumerableLike`](ix.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](ix.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](ix.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](ix.EnumerableLike.md)<`TE`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](ix.EnumerableLike.md)<`TA`\>, [`EnumerableLike`](ix.EnumerableLike.md)<[`Tuple5`](../modules/functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`b`, `c`, `d`, `e`, `f`): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](ix.EnumerableLike.md)<`TA`\>, [`EnumerableLike`](ix.EnumerableLike.md)<[`Tuple6`](../modules/functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |
| `TF` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`EnumerableLike`](ix.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](ix.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](ix.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](ix.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](ix.EnumerableLike.md)<`TF`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](ix.EnumerableLike.md)<`TA`\>, [`EnumerableLike`](ix.EnumerableLike.md)<[`Tuple6`](../modules/functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`b`, `c`, `d`, `e`, `f`, `g`): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](ix.EnumerableLike.md)<`TA`\>, [`EnumerableLike`](ix.EnumerableLike.md)<[`Tuple7`](../modules/functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |
| `TF` |
| `TG` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`EnumerableLike`](ix.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](ix.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](ix.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](ix.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](ix.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](ix.EnumerableLike.md)<`TG`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](ix.EnumerableLike.md)<`TA`\>, [`EnumerableLike`](ix.EnumerableLike.md)<[`Tuple7`](../modules/functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](ix.EnumerableLike.md)<`TA`\>, [`EnumerableLike`](ix.EnumerableLike.md)<[`Tuple8`](../modules/functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |
| `TF` |
| `TG` |
| `TH` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`EnumerableLike`](ix.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](ix.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](ix.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](ix.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](ix.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](ix.EnumerableLike.md)<`TG`\> |
| `h` | [`EnumerableLike`](ix.EnumerableLike.md)<`TH`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](ix.EnumerableLike.md)<`TA`\>, [`EnumerableLike`](ix.EnumerableLike.md)<[`Tuple8`](../modules/functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](ix.EnumerableLike.md)<`TA`\>, [`EnumerableLike`](ix.EnumerableLike.md)<[`Tuple9`](../modules/functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |
| `TF` |
| `TG` |
| `TH` |
| `TI` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`EnumerableLike`](ix.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](ix.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](ix.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](ix.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](ix.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](ix.EnumerableLike.md)<`TG`\> |
| `h` | [`EnumerableLike`](ix.EnumerableLike.md)<`TH`\> |
| `i` | [`EnumerableLike`](ix.EnumerableLike.md)<`TI`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](ix.EnumerableLike.md)<`TA`\>, [`EnumerableLike`](ix.EnumerableLike.md)<[`Tuple9`](../modules/functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>\>
