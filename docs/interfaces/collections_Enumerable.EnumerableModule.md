[Reactive-JS](../README.md) / [collections/Enumerable](../modules/collections_Enumerable.md) / EnumerableModule

# Interface: EnumerableModule

[collections/Enumerable](../modules/collections_Enumerable.md).EnumerableModule

## Hierarchy

- [`PureComputationModule`](computations.PureComputationModule.md)<[`EnumerableComputation`](collections_Enumerable.EnumerableComputation.md)\>

  ↳ **`EnumerableModule`**

## Table of contents

### Operator Methods

- [concatAll](collections_Enumerable.EnumerableModule.md#concatall)
- [concatMap](collections_Enumerable.EnumerableModule.md#concatmap)

### Other Methods

- [buffer](collections_Enumerable.EnumerableModule.md#buffer)
- [concat](collections_Enumerable.EnumerableModule.md#concat)
- [concatMany](collections_Enumerable.EnumerableModule.md#concatmany)
- [concatWith](collections_Enumerable.EnumerableModule.md#concatwith)
- [decodeWithCharset](collections_Enumerable.EnumerableModule.md#decodewithcharset)
- [distinctUntilChanged](collections_Enumerable.EnumerableModule.md#distinctuntilchanged)
- [empty](collections_Enumerable.EnumerableModule.md#empty)
- [generate](collections_Enumerable.EnumerableModule.md#generate)
- [keep](collections_Enumerable.EnumerableModule.md#keep)
- [map](collections_Enumerable.EnumerableModule.md#map)
- [pairwise](collections_Enumerable.EnumerableModule.md#pairwise)
- [range](collections_Enumerable.EnumerableModule.md#range)
- [reduce](collections_Enumerable.EnumerableModule.md#reduce)
- [repeat](collections_Enumerable.EnumerableModule.md#repeat)
- [scan](collections_Enumerable.EnumerableModule.md#scan)
- [skipFirst](collections_Enumerable.EnumerableModule.md#skipfirst)
- [takeFirst](collections_Enumerable.EnumerableModule.md#takefirst)
- [takeWhile](collections_Enumerable.EnumerableModule.md#takewhile)
- [toReadonlyArray](collections_Enumerable.EnumerableModule.md#toreadonlyarray)
- [zip](collections_Enumerable.EnumerableModule.md#zip)
- [zipWith](collections_Enumerable.EnumerableModule.md#zipwith)

## Operator Methods

### concatAll

▸ **concatAll**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](collections.EnumerableLike.md)<[`EnumerableLike`](collections.EnumerableLike.md)<`T`\>\>, [`EnumerableLike`](collections.EnumerableLike.md)<`T`\>\>

Converts a higher-order Container into a first-order
Container by concatenating the inner sources in order.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](collections.EnumerableLike.md)<[`EnumerableLike`](collections.EnumerableLike.md)<`T`\>\>, [`EnumerableLike`](collections.EnumerableLike.md)<`T`\>\>

___

### concatMap

▸ **concatMap**<`TA`, `TB`\>(`selector`): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](collections.EnumerableLike.md)<`TA`\>, [`EnumerableLike`](collections.EnumerableLike.md)<`TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`EnumerableLike`](collections.EnumerableLike.md)<`TB`\>\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](collections.EnumerableLike.md)<`TA`\>, [`EnumerableLike`](collections.EnumerableLike.md)<`TB`\>\>

___

## Other Methods

### buffer

▸ **buffer**<`T`\>(`options?`): [`PureComputationOperator`](../modules/computations.md#purecomputationoperator)<[`EnumerableComputation`](collections_Enumerable.EnumerableComputation.md), `T`, readonly `T`[]\>

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

[`PureComputationOperator`](../modules/computations.md#purecomputationoperator)<[`EnumerableComputation`](collections_Enumerable.EnumerableComputation.md), `T`, readonly `T`[]\>

#### Inherited from

[PureComputationModule](computations.PureComputationModule.md).[buffer](computations.PureComputationModule.md#buffer)

___

### concat

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`EnumerableLike`](collections.EnumerableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`EnumerableLike`](collections.EnumerableLike.md)<`T`\> |
| `snd` | [`EnumerableLike`](collections.EnumerableLike.md)<`T`\> |
| `...tail` | readonly [`EnumerableLike`](collections.EnumerableLike.md)<`T`\>[] |

#### Returns

[`EnumerableLike`](collections.EnumerableLike.md)<`T`\>

___

### concatMany

▸ **concatMany**<`T`\>(`enumerables`): [`EnumerableLike`](collections.EnumerableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `enumerables` | readonly [`EnumerableLike`](collections.EnumerableLike.md)<`T`\>[] |

#### Returns

[`EnumerableLike`](collections.EnumerableLike.md)<`T`\>

___

### concatWith

▸ **concatWith**<`T`\>(`snd`, `...tail`): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](collections.EnumerableLike.md)<`T`\>, [`EnumerableLike`](collections.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`EnumerableLike`](collections.EnumerableLike.md)<`T`\> |
| `...tail` | readonly [`EnumerableLike`](collections.EnumerableLike.md)<`T`\>[] |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](collections.EnumerableLike.md)<`T`\>, [`EnumerableLike`](collections.EnumerableLike.md)<`T`\>\>

___

### decodeWithCharset

▸ **decodeWithCharset**(`options?`): [`PureComputationOperator`](../modules/computations.md#purecomputationoperator)<[`EnumerableComputation`](collections_Enumerable.EnumerableComputation.md), `ArrayBuffer`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.charset?` | `string` |

#### Returns

[`PureComputationOperator`](../modules/computations.md#purecomputationoperator)<[`EnumerableComputation`](collections_Enumerable.EnumerableComputation.md), `ArrayBuffer`, `string`\>

#### Inherited from

[PureComputationModule](computations.PureComputationModule.md).[decodeWithCharset](computations.PureComputationModule.md#decodewithcharset)

___

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`PureComputationOperator`](../modules/computations.md#purecomputationoperator)<[`EnumerableComputation`](collections_Enumerable.EnumerableComputation.md), `T`, `T`\>

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

[`PureComputationOperator`](../modules/computations.md#purecomputationoperator)<[`EnumerableComputation`](collections_Enumerable.EnumerableComputation.md), `T`, `T`\>

#### Inherited from

[PureComputationModule](computations.PureComputationModule.md).[distinctUntilChanged](computations.PureComputationModule.md#distinctuntilchanged)

___

### empty

▸ **empty**<`T`\>(): [`EnumerableLike`](collections.EnumerableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`EnumerableLike`](collections.EnumerableLike.md)<`T`\>

___

### generate

▸ **generate**<`T`\>(`generator`, `initialValue`): [`EnumerableLike`](collections.EnumerableLike.md)<`T`\>

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

[`EnumerableLike`](collections.EnumerableLike.md)<`T`\>

___

### keep

▸ **keep**<`T`\>(`predicate`): [`PureComputationOperator`](../modules/computations.md#purecomputationoperator)<[`EnumerableComputation`](collections_Enumerable.EnumerableComputation.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`PureComputationOperator`](../modules/computations.md#purecomputationoperator)<[`EnumerableComputation`](collections_Enumerable.EnumerableComputation.md), `T`, `T`\>

#### Inherited from

[PureComputationModule](computations.PureComputationModule.md).[keep](computations.PureComputationModule.md#keep)

___

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`PureComputationOperator`](../modules/computations.md#purecomputationoperator)<[`EnumerableComputation`](collections_Enumerable.EnumerableComputation.md), `TA`, `TB`\>

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

[`PureComputationOperator`](../modules/computations.md#purecomputationoperator)<[`EnumerableComputation`](collections_Enumerable.EnumerableComputation.md), `TA`, `TB`\>

#### Inherited from

[PureComputationModule](computations.PureComputationModule.md).[map](computations.PureComputationModule.md#map)

___

### pairwise

▸ **pairwise**<`T`\>(): [`PureComputationOperator`](../modules/computations.md#purecomputationoperator)<[`EnumerableComputation`](collections_Enumerable.EnumerableComputation.md), `T`, [`Tuple2`](../modules/functions.md#tuple2)<`T`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`PureComputationOperator`](../modules/computations.md#purecomputationoperator)<[`EnumerableComputation`](collections_Enumerable.EnumerableComputation.md), `T`, [`Tuple2`](../modules/functions.md#tuple2)<`T`, `T`\>\>

#### Inherited from

[PureComputationModule](computations.PureComputationModule.md).[pairwise](computations.PureComputationModule.md#pairwise)

___

### range

▸ **range**(`start`, `options?`): [`EnumerableLike`](collections.EnumerableLike.md)<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `start` | `number` |
| `options?` | `Object` |
| `options.count?` | `number` |

#### Returns

[`EnumerableLike`](collections.EnumerableLike.md)<`number`\>

___

### reduce

▸ **reduce**<`T`, `TAcc`\>(`reducer`, `initialValue`): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](collections.EnumerableLike.md)<`T`\>, `TAcc`\>

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

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](collections.EnumerableLike.md)<`T`\>, `TAcc`\>

___

### repeat

▸ **repeat**<`T`\>(`predicate`): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](collections.EnumerableLike.md)<`T`\>, [`EnumerableLike`](collections.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`number`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](collections.EnumerableLike.md)<`T`\>, [`EnumerableLike`](collections.EnumerableLike.md)<`T`\>\>

▸ **repeat**<`T`\>(`count`): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](collections.EnumerableLike.md)<`T`\>, [`EnumerableLike`](collections.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](collections.EnumerableLike.md)<`T`\>, [`EnumerableLike`](collections.EnumerableLike.md)<`T`\>\>

▸ **repeat**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](collections.EnumerableLike.md)<`T`\>, [`EnumerableLike`](collections.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](collections.EnumerableLike.md)<`T`\>, [`EnumerableLike`](collections.EnumerableLike.md)<`T`\>\>

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`PureComputationOperator`](../modules/computations.md#purecomputationoperator)<[`EnumerableComputation`](collections_Enumerable.EnumerableComputation.md), `T`, `TAcc`\>

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

[`PureComputationOperator`](../modules/computations.md#purecomputationoperator)<[`EnumerableComputation`](collections_Enumerable.EnumerableComputation.md), `T`, `TAcc`\>

#### Inherited from

[PureComputationModule](computations.PureComputationModule.md).[scan](computations.PureComputationModule.md#scan)

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`PureComputationOperator`](../modules/computations.md#purecomputationoperator)<[`EnumerableComputation`](collections_Enumerable.EnumerableComputation.md), `T`, `T`\>

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

[`PureComputationOperator`](../modules/computations.md#purecomputationoperator)<[`EnumerableComputation`](collections_Enumerable.EnumerableComputation.md), `T`, `T`\>

#### Inherited from

[PureComputationModule](computations.PureComputationModule.md).[skipFirst](computations.PureComputationModule.md#skipfirst)

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`PureComputationOperator`](../modules/computations.md#purecomputationoperator)<[`EnumerableComputation`](collections_Enumerable.EnumerableComputation.md), `T`, `T`\>

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

[`PureComputationOperator`](../modules/computations.md#purecomputationoperator)<[`EnumerableComputation`](collections_Enumerable.EnumerableComputation.md), `T`, `T`\>

#### Inherited from

[PureComputationModule](computations.PureComputationModule.md).[takeFirst](computations.PureComputationModule.md#takefirst)

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`PureComputationOperator`](../modules/computations.md#purecomputationoperator)<[`EnumerableComputation`](collections_Enumerable.EnumerableComputation.md), `T`, `T`\>

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

[`PureComputationOperator`](../modules/computations.md#purecomputationoperator)<[`EnumerableComputation`](collections_Enumerable.EnumerableComputation.md), `T`, `T`\>

#### Inherited from

[PureComputationModule](computations.PureComputationModule.md).[takeWhile](computations.PureComputationModule.md#takewhile)

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](collections.EnumerableLike.md)<`T`\>, readonly `T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](collections.EnumerableLike.md)<`T`\>, readonly `T`[]\>

___

### zip

▸ **zip**<`TA`, `TB`\>(`a`, `b`): [`EnumerableLike`](collections.EnumerableLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`TA`, `TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`EnumerableLike`](collections.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](collections.EnumerableLike.md)<`TB`\> |

#### Returns

[`EnumerableLike`](collections.EnumerableLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`TA`, `TB`\>\>

▸ **zip**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`EnumerableLike`](collections.EnumerableLike.md)<[`Tuple3`](../modules/functions.md#tuple3)<`TA`, `TB`, `TC`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`EnumerableLike`](collections.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](collections.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](collections.EnumerableLike.md)<`TC`\> |

#### Returns

[`EnumerableLike`](collections.EnumerableLike.md)<[`Tuple3`](../modules/functions.md#tuple3)<`TA`, `TB`, `TC`\>\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`EnumerableLike`](collections.EnumerableLike.md)<[`Tuple4`](../modules/functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>

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
| `a` | [`EnumerableLike`](collections.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](collections.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](collections.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](collections.EnumerableLike.md)<`TD`\> |

#### Returns

[`EnumerableLike`](collections.EnumerableLike.md)<[`Tuple4`](../modules/functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`EnumerableLike`](collections.EnumerableLike.md)<[`Tuple5`](../modules/functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

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
| `a` | [`EnumerableLike`](collections.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](collections.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](collections.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](collections.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](collections.EnumerableLike.md)<`TE`\> |

#### Returns

[`EnumerableLike`](collections.EnumerableLike.md)<[`Tuple5`](../modules/functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`EnumerableLike`](collections.EnumerableLike.md)<[`Tuple6`](../modules/functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

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
| `a` | [`EnumerableLike`](collections.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](collections.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](collections.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](collections.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](collections.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](collections.EnumerableLike.md)<`TF`\> |

#### Returns

[`EnumerableLike`](collections.EnumerableLike.md)<[`Tuple6`](../modules/functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`EnumerableLike`](collections.EnumerableLike.md)<[`Tuple7`](../modules/functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

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
| `a` | [`EnumerableLike`](collections.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](collections.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](collections.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](collections.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](collections.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](collections.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](collections.EnumerableLike.md)<`TG`\> |

#### Returns

[`EnumerableLike`](collections.EnumerableLike.md)<[`Tuple7`](../modules/functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`EnumerableLike`](collections.EnumerableLike.md)<[`Tuple8`](../modules/functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

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
| `a` | [`EnumerableLike`](collections.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](collections.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](collections.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](collections.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](collections.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](collections.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](collections.EnumerableLike.md)<`TG`\> |
| `h` | [`EnumerableLike`](collections.EnumerableLike.md)<`TH`\> |

#### Returns

[`EnumerableLike`](collections.EnumerableLike.md)<[`Tuple8`](../modules/functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`EnumerableLike`](collections.EnumerableLike.md)<[`Tuple9`](../modules/functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

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
| `a` | [`EnumerableLike`](collections.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](collections.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](collections.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](collections.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](collections.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](collections.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](collections.EnumerableLike.md)<`TG`\> |
| `h` | [`EnumerableLike`](collections.EnumerableLike.md)<`TH`\> |
| `i` | [`EnumerableLike`](collections.EnumerableLike.md)<`TI`\> |

#### Returns

[`EnumerableLike`](collections.EnumerableLike.md)<[`Tuple9`](../modules/functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

___

### zipWith

▸ **zipWith**<`TA`, `TB`\>(`b`): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](collections.EnumerableLike.md)<`TA`\>, [`EnumerableLike`](collections.EnumerableLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`TA`, `TB`\>\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`EnumerableLike`](collections.EnumerableLike.md)<`TB`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](collections.EnumerableLike.md)<`TA`\>, [`EnumerableLike`](collections.EnumerableLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`TA`, `TB`\>\>\>

▸ **zipWith**<`TA`, `TB`, `TC`\>(`b`, `c`): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](collections.EnumerableLike.md)<`TA`\>, [`EnumerableLike`](collections.EnumerableLike.md)<[`Tuple3`](../modules/functions.md#tuple3)<`TA`, `TB`, `TC`\>\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`EnumerableLike`](collections.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](collections.EnumerableLike.md)<`TC`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](collections.EnumerableLike.md)<`TA`\>, [`EnumerableLike`](collections.EnumerableLike.md)<[`Tuple3`](../modules/functions.md#tuple3)<`TA`, `TB`, `TC`\>\>\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`\>(`b`, `c`, `d`): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](collections.EnumerableLike.md)<`TA`\>, [`EnumerableLike`](collections.EnumerableLike.md)<[`Tuple4`](../modules/functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>\>

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
| `b` | [`EnumerableLike`](collections.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](collections.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](collections.EnumerableLike.md)<`TD`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](collections.EnumerableLike.md)<`TA`\>, [`EnumerableLike`](collections.EnumerableLike.md)<[`Tuple4`](../modules/functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`b`, `c`, `d`, `e`): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](collections.EnumerableLike.md)<`TA`\>, [`EnumerableLike`](collections.EnumerableLike.md)<[`Tuple5`](../modules/functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>\>

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
| `b` | [`EnumerableLike`](collections.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](collections.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](collections.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](collections.EnumerableLike.md)<`TE`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](collections.EnumerableLike.md)<`TA`\>, [`EnumerableLike`](collections.EnumerableLike.md)<[`Tuple5`](../modules/functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`b`, `c`, `d`, `e`, `f`): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](collections.EnumerableLike.md)<`TA`\>, [`EnumerableLike`](collections.EnumerableLike.md)<[`Tuple6`](../modules/functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>\>

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
| `b` | [`EnumerableLike`](collections.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](collections.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](collections.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](collections.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](collections.EnumerableLike.md)<`TF`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](collections.EnumerableLike.md)<`TA`\>, [`EnumerableLike`](collections.EnumerableLike.md)<[`Tuple6`](../modules/functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`b`, `c`, `d`, `e`, `f`, `g`): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](collections.EnumerableLike.md)<`TA`\>, [`EnumerableLike`](collections.EnumerableLike.md)<[`Tuple7`](../modules/functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>\>

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
| `b` | [`EnumerableLike`](collections.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](collections.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](collections.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](collections.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](collections.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](collections.EnumerableLike.md)<`TG`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](collections.EnumerableLike.md)<`TA`\>, [`EnumerableLike`](collections.EnumerableLike.md)<[`Tuple7`](../modules/functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](collections.EnumerableLike.md)<`TA`\>, [`EnumerableLike`](collections.EnumerableLike.md)<[`Tuple8`](../modules/functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>\>

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
| `b` | [`EnumerableLike`](collections.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](collections.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](collections.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](collections.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](collections.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](collections.EnumerableLike.md)<`TG`\> |
| `h` | [`EnumerableLike`](collections.EnumerableLike.md)<`TH`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](collections.EnumerableLike.md)<`TA`\>, [`EnumerableLike`](collections.EnumerableLike.md)<[`Tuple8`](../modules/functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](collections.EnumerableLike.md)<`TA`\>, [`EnumerableLike`](collections.EnumerableLike.md)<[`Tuple9`](../modules/functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>\>

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
| `b` | [`EnumerableLike`](collections.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](collections.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](collections.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](collections.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](collections.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](collections.EnumerableLike.md)<`TG`\> |
| `h` | [`EnumerableLike`](collections.EnumerableLike.md)<`TH`\> |
| `i` | [`EnumerableLike`](collections.EnumerableLike.md)<`TI`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](collections.EnumerableLike.md)<`TA`\>, [`EnumerableLike`](collections.EnumerableLike.md)<[`Tuple9`](../modules/functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>\>
