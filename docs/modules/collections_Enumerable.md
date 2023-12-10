[Reactive-JS](../README.md) / collections/Enumerable

# Module: collections/Enumerable

## Table of contents

### Interfaces

- [EnumerableComputation](../interfaces/collections_Enumerable.EnumerableComputation.md)
- [EnumerableModule](../interfaces/collections_Enumerable.EnumerableModule.md)

### Type Aliases

- [Signature](collections_Enumerable.md#signature)
- [Type](collections_Enumerable.md#type)

### Operator Functions

- [concatAll](collections_Enumerable.md#concatall)
- [concatMap](collections_Enumerable.md#concatmap)

### Other Functions

- [buffer](collections_Enumerable.md#buffer)
- [concat](collections_Enumerable.md#concat)
- [concatMany](collections_Enumerable.md#concatmany)
- [concatWith](collections_Enumerable.md#concatwith)
- [decodeWithCharset](collections_Enumerable.md#decodewithcharset)
- [distinctUntilChanged](collections_Enumerable.md#distinctuntilchanged)
- [empty](collections_Enumerable.md#empty)
- [fromReadonlyArray](collections_Enumerable.md#fromreadonlyarray)
- [generate](collections_Enumerable.md#generate)
- [keep](collections_Enumerable.md#keep)
- [map](collections_Enumerable.md#map)
- [pairwise](collections_Enumerable.md#pairwise)
- [range](collections_Enumerable.md#range)
- [reduce](collections_Enumerable.md#reduce)
- [repeat](collections_Enumerable.md#repeat)
- [scan](collections_Enumerable.md#scan)
- [skipFirst](collections_Enumerable.md#skipfirst)
- [takeFirst](collections_Enumerable.md#takefirst)
- [takeWhile](collections_Enumerable.md#takewhile)
- [toReadonlyArray](collections_Enumerable.md#toreadonlyarray)
- [zip](collections_Enumerable.md#zip)
- [zipWith](collections_Enumerable.md#zipwith)

## Type Aliases

### Signature

Ƭ **Signature**: [`EnumerableModule`](../interfaces/collections_Enumerable.EnumerableModule.md)

___

### Type

Ƭ **Type**: [`EnumerableComputation`](../interfaces/collections_Enumerable.EnumerableComputation.md)

## Operator Functions

### concatAll

▸ **concatAll**<`T`\>(): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<[`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`T`\>\>, [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`T`\>\>

Converts a higher-order Container into a first-order
Container by concatenating the inner sources in order.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<[`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`T`\>\>, [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`T`\>\>

___

### concatMap

▸ **concatMap**<`TA`, `TB`\>(`selector`): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TA`\>, [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TB`\>\> |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TA`\>, [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TB`\>\>

___

## Other Functions

### buffer

▸ **buffer**<`T`\>(`options?`): [`PureComputationOperator`](computations.md#purecomputationoperator)<[`EnumerableComputation`](../interfaces/collections_Enumerable.EnumerableComputation.md), `T`, readonly `T`[]\>

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

[`PureComputationOperator`](computations.md#purecomputationoperator)<[`EnumerableComputation`](../interfaces/collections_Enumerable.EnumerableComputation.md), `T`, readonly `T`[]\>

___

### concat

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`T`\> |
| `snd` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`T`\> |
| `...tail` | readonly [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`T`\>[] |

#### Returns

[`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`T`\>

___

### concatMany

▸ **concatMany**<`T`\>(`enumerables`): [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `enumerables` | readonly [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`T`\>[] |

#### Returns

[`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`T`\>

___

### concatWith

▸ **concatWith**<`T`\>(`snd`, `...tail`): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`T`\>, [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`T`\> |
| `...tail` | readonly [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`T`\>[] |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`T`\>, [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`T`\>\>

___

### decodeWithCharset

▸ **decodeWithCharset**(`options?`): [`PureComputationOperator`](computations.md#purecomputationoperator)<[`EnumerableComputation`](../interfaces/collections_Enumerable.EnumerableComputation.md), `ArrayBuffer`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.charset?` | `string` |

#### Returns

[`PureComputationOperator`](computations.md#purecomputationoperator)<[`EnumerableComputation`](../interfaces/collections_Enumerable.EnumerableComputation.md), `ArrayBuffer`, `string`\>

___

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`PureComputationOperator`](computations.md#purecomputationoperator)<[`EnumerableComputation`](../interfaces/collections_Enumerable.EnumerableComputation.md), `T`, `T`\>

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

[`PureComputationOperator`](computations.md#purecomputationoperator)<[`EnumerableComputation`](../interfaces/collections_Enumerable.EnumerableComputation.md), `T`, `T`\>

___

### empty

▸ **empty**<`T`\>(): [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`T`\>

___

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`\>(): [`Function1`](functions.md#function1)<readonly `T`[], [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`T`\>\>

___

### generate

▸ **generate**<`T`\>(`generator`, `initialValue`): [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `generator` | [`Updater`](functions.md#updater)<`T`\> |
| `initialValue` | [`Factory`](functions.md#factory)<`T`\> |

#### Returns

[`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`T`\>

___

### keep

▸ **keep**<`T`\>(`predicate`): [`PureComputationOperator`](computations.md#purecomputationoperator)<[`EnumerableComputation`](../interfaces/collections_Enumerable.EnumerableComputation.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`PureComputationOperator`](computations.md#purecomputationoperator)<[`EnumerableComputation`](../interfaces/collections_Enumerable.EnumerableComputation.md), `T`, `T`\>

___

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`PureComputationOperator`](computations.md#purecomputationoperator)<[`EnumerableComputation`](../interfaces/collections_Enumerable.EnumerableComputation.md), `TA`, `TB`\>

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

[`PureComputationOperator`](computations.md#purecomputationoperator)<[`EnumerableComputation`](../interfaces/collections_Enumerable.EnumerableComputation.md), `TA`, `TB`\>

___

### pairwise

▸ **pairwise**<`T`\>(): [`PureComputationOperator`](computations.md#purecomputationoperator)<[`EnumerableComputation`](../interfaces/collections_Enumerable.EnumerableComputation.md), `T`, [`Tuple2`](functions.md#tuple2)<`T`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`PureComputationOperator`](computations.md#purecomputationoperator)<[`EnumerableComputation`](../interfaces/collections_Enumerable.EnumerableComputation.md), `T`, [`Tuple2`](functions.md#tuple2)<`T`, `T`\>\>

___

### range

▸ **range**(`start`, `options?`): [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `start` | `number` |
| `options?` | `Object` |
| `options.count?` | `number` |

#### Returns

[`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`number`\>

___

### reduce

▸ **reduce**<`T`, `TAcc`\>(`reducer`, `initialValue`): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`T`\>, `TAcc`\>

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

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`T`\>, `TAcc`\>

___

### repeat

▸ **repeat**<`T`\>(`predicate`): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`T`\>, [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`number`\> |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`T`\>, [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`T`\>\>

▸ **repeat**<`T`\>(`count`): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`T`\>, [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`T`\>, [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`T`\>\>

▸ **repeat**<`T`\>(): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`T`\>, [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`T`\>, [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`T`\>\>

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`PureComputationOperator`](computations.md#purecomputationoperator)<[`EnumerableComputation`](../interfaces/collections_Enumerable.EnumerableComputation.md), `T`, `TAcc`\>

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

[`PureComputationOperator`](computations.md#purecomputationoperator)<[`EnumerableComputation`](../interfaces/collections_Enumerable.EnumerableComputation.md), `T`, `TAcc`\>

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`PureComputationOperator`](computations.md#purecomputationoperator)<[`EnumerableComputation`](../interfaces/collections_Enumerable.EnumerableComputation.md), `T`, `T`\>

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

[`PureComputationOperator`](computations.md#purecomputationoperator)<[`EnumerableComputation`](../interfaces/collections_Enumerable.EnumerableComputation.md), `T`, `T`\>

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`PureComputationOperator`](computations.md#purecomputationoperator)<[`EnumerableComputation`](../interfaces/collections_Enumerable.EnumerableComputation.md), `T`, `T`\>

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

[`PureComputationOperator`](computations.md#purecomputationoperator)<[`EnumerableComputation`](../interfaces/collections_Enumerable.EnumerableComputation.md), `T`, `T`\>

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`PureComputationOperator`](computations.md#purecomputationoperator)<[`EnumerableComputation`](../interfaces/collections_Enumerable.EnumerableComputation.md), `T`, `T`\>

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

[`PureComputationOperator`](computations.md#purecomputationoperator)<[`EnumerableComputation`](../interfaces/collections_Enumerable.EnumerableComputation.md), `T`, `T`\>

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`T`\>, readonly `T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`T`\>, readonly `T`[]\>

___

### zip

▸ **zip**<`TA`, `TB`\>(`a`, `b`): [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<[`Tuple2`](functions.md#tuple2)<`TA`, `TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TB`\> |

#### Returns

[`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<[`Tuple2`](functions.md#tuple2)<`TA`, `TB`\>\>

▸ **zip**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<[`Tuple3`](functions.md#tuple3)<`TA`, `TB`, `TC`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TC`\> |

#### Returns

[`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<[`Tuple3`](functions.md#tuple3)<`TA`, `TB`, `TC`\>\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<[`Tuple4`](functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>

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
| `a` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TD`\> |

#### Returns

[`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<[`Tuple4`](functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<[`Tuple5`](functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

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
| `a` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TE`\> |

#### Returns

[`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<[`Tuple5`](functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<[`Tuple6`](functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

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
| `a` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TF`\> |

#### Returns

[`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<[`Tuple6`](functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<[`Tuple7`](functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

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
| `a` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TG`\> |

#### Returns

[`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<[`Tuple7`](functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<[`Tuple8`](functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

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
| `a` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TG`\> |
| `h` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TH`\> |

#### Returns

[`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<[`Tuple8`](functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<[`Tuple9`](functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

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
| `a` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TG`\> |
| `h` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TH`\> |
| `i` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TI`\> |

#### Returns

[`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<[`Tuple9`](functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

___

### zipWith

▸ **zipWith**<`TA`, `TB`\>(`b`): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TA`\>, [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<[`Tuple2`](functions.md#tuple2)<`TA`, `TB`\>\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TB`\> |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TA`\>, [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<[`Tuple2`](functions.md#tuple2)<`TA`, `TB`\>\>\>

▸ **zipWith**<`TA`, `TB`, `TC`\>(`b`, `c`): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TA`\>, [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<[`Tuple3`](functions.md#tuple3)<`TA`, `TB`, `TC`\>\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TC`\> |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TA`\>, [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<[`Tuple3`](functions.md#tuple3)<`TA`, `TB`, `TC`\>\>\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`\>(`b`, `c`, `d`): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TA`\>, [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<[`Tuple4`](functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>\>

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
| `b` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TD`\> |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TA`\>, [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<[`Tuple4`](functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`b`, `c`, `d`, `e`): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TA`\>, [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<[`Tuple5`](functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>\>

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
| `b` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TE`\> |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TA`\>, [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<[`Tuple5`](functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`b`, `c`, `d`, `e`, `f`): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TA`\>, [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<[`Tuple6`](functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>\>

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
| `b` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TF`\> |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TA`\>, [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<[`Tuple6`](functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`b`, `c`, `d`, `e`, `f`, `g`): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TA`\>, [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<[`Tuple7`](functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>\>

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
| `b` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TG`\> |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TA`\>, [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<[`Tuple7`](functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TA`\>, [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<[`Tuple8`](functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>\>

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
| `b` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TG`\> |
| `h` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TH`\> |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TA`\>, [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<[`Tuple8`](functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TA`\>, [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<[`Tuple9`](functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>\>

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
| `b` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TG`\> |
| `h` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TH`\> |
| `i` | [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TI`\> |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<`TA`\>, [`EnumerableLike`](../interfaces/collections.EnumerableLike.md)<[`Tuple9`](functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>\>
