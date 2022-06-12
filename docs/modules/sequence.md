[Reactive-JS](../README.md) / sequence

# Module: sequence

## Table of contents

### Type Aliases

- [Sequence](sequence.md#sequence)
- [SequenceOperator](sequence.md#sequenceoperator)
- [SequenceResult](sequence.md#sequenceresult)

### Functions

- [concat](sequence.md#concat)
- [concatAll](sequence.md#concatall)
- [concatMap](sequence.md#concatmap)
- [concatWith](sequence.md#concatwith)
- [distinctUntilChanged](sequence.md#distinctuntilchanged)
- [done](sequence.md#done)
- [empty](sequence.md#empty)
- [endWith](sequence.md#endwith)
- [fromArray](sequence.md#fromarray)
- [fromValue](sequence.md#fromvalue)
- [generate](sequence.md#generate)
- [keep](sequence.md#keep)
- [map](sequence.md#map)
- [mapTo](sequence.md#mapto)
- [notify](sequence.md#notify)
- [repeat](sequence.md#repeat)
- [scan](sequence.md#scan)
- [seek](sequence.md#seek)
- [skipFirst](sequence.md#skipfirst)
- [startWith](sequence.md#startwith)
- [takeFirst](sequence.md#takefirst)
- [takeLast](sequence.md#takelast)
- [takeWhile](sequence.md#takewhile)
- [toRunnable](sequence.md#torunnable)

## Type Aliases

### Sequence

Ƭ **Sequence**<`T`\>: [`Factory`](functions.md#factory)<[`SequenceResult`](sequence.md#sequenceresult)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

___

### SequenceOperator

Ƭ **SequenceOperator**<`TA`, `TB`\>: [`Function1`](functions.md#function1)<[`Sequence`](sequence.md#sequence)<`TA`\>, [`Sequence`](sequence.md#sequence)<`TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

___

### SequenceResult

Ƭ **SequenceResult**<`_T`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `_T` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `[___type__]` | `never` |

## Functions

### concat

▸ **concat**<`T`\>(`fst`, `snd`, ...`tail`): [`Sequence`](sequence.md#sequence)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Sequence`](sequence.md#sequence)<`T`\> |
| `snd` | [`Sequence`](sequence.md#sequence)<`T`\> |
| `...tail` | readonly [`Sequence`](sequence.md#sequence)<`T`\>[] |

#### Returns

[`Sequence`](sequence.md#sequence)<`T`\>

___

### concatAll

▸ **concatAll**<`T`\>(): [`SequenceOperator`](sequence.md#sequenceoperator)<[`Sequence`](sequence.md#sequence)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`SequenceOperator`](sequence.md#sequenceoperator)<[`Sequence`](sequence.md#sequence)<`T`\>, `T`\>

___

### concatMap

▸ **concatMap**<`TA`, `TB`\>(`mapper`): [`SequenceOperator`](sequence.md#sequenceoperator)<`TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapper` | [`Function1`](functions.md#function1)<`TA`, [`Sequence`](sequence.md#sequence)<`TB`\>\> |

#### Returns

[`SequenceOperator`](sequence.md#sequenceoperator)<`TA`, `TB`\>

___

### concatWith

▸ **concatWith**<`T`\>(`snd`): [`SequenceOperator`](sequence.md#sequenceoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`Sequence`](sequence.md#sequence)<`T`\> |

#### Returns

[`SequenceOperator`](sequence.md#sequenceoperator)<`T`, `T`\>

___

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`SequenceOperator`](sequence.md#sequenceoperator)<`T`, `T`\>

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

[`SequenceOperator`](sequence.md#sequenceoperator)<`T`, `T`\>

___

### done

▸ **done**<`T`\>(): [`SequenceResult`](sequence.md#sequenceresult)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`SequenceResult`](sequence.md#sequenceresult)<`T`\>

___

### empty

▸ **empty**<`T`\>(): [`Sequence`](sequence.md#sequence)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Sequence`](sequence.md#sequence)<`T`\>

___

### endWith

▸ **endWith**<`T`\>(`value`, ...`values`): [`SequenceOperator`](sequence.md#sequenceoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `...values` | readonly `T`[] |

#### Returns

[`SequenceOperator`](sequence.md#sequenceoperator)<`T`, `T`\>

___

### fromArray

▸ **fromArray**<`T`\>(`options?`): [`Function1`](functions.md#function1)<readonly `T`[], [`Sequence`](sequence.md#sequence)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.endIndex?` | `number` |
| `options.startIndex?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], [`Sequence`](sequence.md#sequence)<`T`\>\>

___

### fromValue

▸ **fromValue**<`T`\>(): [`Function1`](functions.md#function1)<`T`, [`Sequence`](sequence.md#sequence)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<`T`, [`Sequence`](sequence.md#sequence)<`T`\>\>

___

### generate

▸ **generate**<`T`\>(`generator`, `initialValue`): [`Sequence`](sequence.md#sequence)<`T`\>

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

[`Sequence`](sequence.md#sequence)<`T`\>

___

### keep

▸ **keep**<`T`\>(`predicate`): [`SequenceOperator`](sequence.md#sequenceoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`SequenceOperator`](sequence.md#sequenceoperator)<`T`, `T`\>

___

### map

▸ **map**<`TA`, `TB`\>(`mapper`): [`SequenceOperator`](sequence.md#sequenceoperator)<`TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapper` | [`Function1`](functions.md#function1)<`TA`, `TB`\> |

#### Returns

[`SequenceOperator`](sequence.md#sequenceoperator)<`TA`, `TB`\>

___

### mapTo

▸ **mapTo**<`TA`, `TB`\>(`v`): [`SequenceOperator`](sequence.md#sequenceoperator)<`TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `TB` |

#### Returns

[`SequenceOperator`](sequence.md#sequenceoperator)<`TA`, `TB`\>

___

### notify

▸ **notify**<`T`\>(`data`, `next`): [`SequenceResult`](sequence.md#sequenceresult)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `T` |
| `next` | [`Sequence`](sequence.md#sequence)<`T`\> |

#### Returns

[`SequenceResult`](sequence.md#sequenceresult)<`T`\>

___

### repeat

▸ **repeat**<`T`\>(`predicate`): [`SequenceOperator`](sequence.md#sequenceoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`number`\> |

#### Returns

[`SequenceOperator`](sequence.md#sequenceoperator)<`T`, `T`\>

▸ **repeat**<`T`\>(`count`): [`SequenceOperator`](sequence.md#sequenceoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

[`SequenceOperator`](sequence.md#sequenceoperator)<`T`, `T`\>

▸ **repeat**<`T`\>(): [`SequenceOperator`](sequence.md#sequenceoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`SequenceOperator`](sequence.md#sequenceoperator)<`T`, `T`\>

___

### scan

▸ **scan**<`T`, `TAcc`\>(`reducer`, `initialValue`): [`SequenceOperator`](sequence.md#sequenceoperator)<`T`, `TAcc`\>

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

[`SequenceOperator`](sequence.md#sequenceoperator)<`T`, `TAcc`\>

___

### seek

▸ **seek**<`T`\>(`count`): [`SequenceOperator`](sequence.md#sequenceoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

[`SequenceOperator`](sequence.md#sequenceoperator)<`T`, `T`\>

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`SequenceOperator`](sequence.md#sequenceoperator)<`T`, `T`\>

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

[`SequenceOperator`](sequence.md#sequenceoperator)<`T`, `T`\>

___

### startWith

▸ **startWith**<`T`\>(`value`, ...`values`): [`SequenceOperator`](sequence.md#sequenceoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `...values` | readonly `T`[] |

#### Returns

[`SequenceOperator`](sequence.md#sequenceoperator)<`T`, `T`\>

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`SequenceOperator`](sequence.md#sequenceoperator)<`T`, `T`\>

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

[`SequenceOperator`](sequence.md#sequenceoperator)<`T`, `T`\>

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`SequenceOperator`](sequence.md#sequenceoperator)<`T`, `T`\>

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

[`SequenceOperator`](sequence.md#sequenceoperator)<`T`, `T`\>

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`SequenceOperator`](sequence.md#sequenceoperator)<`T`, `T`\>

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

[`SequenceOperator`](sequence.md#sequenceoperator)<`T`, `T`\>

___

### toRunnable

▸ **toRunnable**<`T`\>(): [`Function1`](functions.md#function1)<[`Sequence`](sequence.md#sequence)<`T`\>, [`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`Sequence`](sequence.md#sequence)<`T`\>, [`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`T`\>\>
