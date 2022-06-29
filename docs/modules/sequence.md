[Reactive-JS](../README.md) / sequence

# Module: sequence

## Table of contents

### Interfaces

- [SequenceLike](../interfaces/sequence.SequenceLike.md)
- [SequenceResultNotify](../interfaces/sequence.SequenceResultNotify.md)

### Type Aliases

- [Sequence](sequence.md#sequence)
- [SequenceOperator](sequence.md#sequenceoperator)
- [SequenceResult](sequence.md#sequenceresult)

### Variables

- [concatAllT](sequence.md#concatallt)
- [concatT](sequence.md#concatt)
- [distinctUntilChangedT](sequence.md#distinctuntilchangedt)
- [fromArrayT](sequence.md#fromarrayt)
- [generateT](sequence.md#generatet)
- [keepT](sequence.md#keept)
- [mapT](sequence.md#mapt)
- [pairwiseT](sequence.md#pairwiset)
- [repeatT](sequence.md#repeatt)
- [scanT](sequence.md#scant)
- [sequenceResultDone](sequence.md#sequenceresultdone)
- [skipFirstT](sequence.md#skipfirstt)
- [takeFirstT](sequence.md#takefirstt)
- [takeLastT](sequence.md#takelastt)
- [takeWhileT](sequence.md#takewhilet)
- [toEnumerableT](sequence.md#toenumerablet)
- [toRunnableT](sequence.md#torunnablet)
- [type](sequence.md#type)
- [zipT](sequence.md#zipt)

### Functions

- [concat](sequence.md#concat)
- [concatAll](sequence.md#concatall)
- [distinctUntilChanged](sequence.md#distinctuntilchanged)
- [fromArray](sequence.md#fromarray)
- [generate](sequence.md#generate)
- [keep](sequence.md#keep)
- [map](sequence.md#map)
- [pairwise](sequence.md#pairwise)
- [repeat](sequence.md#repeat)
- [scan](sequence.md#scan)
- [seek](sequence.md#seek)
- [skipFirst](sequence.md#skipfirst)
- [takeFirst](sequence.md#takefirst)
- [takeLast](sequence.md#takelast)
- [takeWhile](sequence.md#takewhile)
- [toEnumerable](sequence.md#toenumerable)
- [toRunnable](sequence.md#torunnable)
- [zip](sequence.md#zip)

## Type Aliases

### Sequence

Ƭ **Sequence**<`T`\>: [`Factory`](functions.md#factory)<[`SequenceResult`](sequence.md#sequenceresult)<`T`\>\> & [`SequenceLike`](../interfaces/sequence.SequenceLike.md)

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

Ƭ **SequenceResult**<`T`\>: [`SequenceResultNotify`](../interfaces/sequence.SequenceResultNotify.md)<`T`\> \| typeof [`sequenceResultDone`](sequence.md#sequenceresultdone)

#### Type parameters

| Name |
| :------ |
| `T` |

## Variables

### concatAllT

• `Const` **concatAllT**: [`ConcatAll`](../interfaces/container.ConcatAll.md)<[`Sequence`](sequence.md#sequence)<`unknown`\>\>

___

### concatT

• `Const` **concatT**: [`Concat`](../interfaces/container.Concat.md)<[`Sequence`](sequence.md#sequence)<`unknown`\>\>

___

### distinctUntilChangedT

• `Const` **distinctUntilChangedT**: [`DistinctUntilChanged`](../interfaces/container.DistinctUntilChanged.md)<[`Sequence`](sequence.md#sequence)<`unknown`\>\>

___

### fromArrayT

• `Const` **fromArrayT**: [`FromArray`](../interfaces/container.FromArray.md)<[`Sequence`](sequence.md#sequence)<`unknown`\>\>

___

### generateT

• `Const` **generateT**: [`Generate`](../interfaces/container.Generate.md)<[`Sequence`](sequence.md#sequence)<`unknown`\>\>

___

### keepT

• `Const` **keepT**: [`Keep`](../interfaces/container.Keep.md)<[`Sequence`](sequence.md#sequence)<`unknown`\>\>

___

### mapT

• `Const` **mapT**: [`Map`](../interfaces/container.Map.md)<[`Sequence`](sequence.md#sequence)<`unknown`\>\>

___

### pairwiseT

• `Const` **pairwiseT**: [`Pairwise`](../interfaces/container.Pairwise.md)<[`Sequence`](sequence.md#sequence)<`unknown`\>\>

___

### repeatT

• `Const` **repeatT**: [`Repeat`](../interfaces/container.Repeat.md)<[`Sequence`](sequence.md#sequence)<`unknown`\>\>

___

### scanT

• `Const` **scanT**: [`Scan`](../interfaces/container.Scan.md)<[`Sequence`](sequence.md#sequence)<`unknown`\>\>

___

### sequenceResultDone

• `Const` **sequenceResultDone**: unique `symbol`

___

### skipFirstT

• `Const` **skipFirstT**: [`SkipFirst`](../interfaces/container.SkipFirst.md)<[`Sequence`](sequence.md#sequence)<`unknown`\>\>

___

### takeFirstT

• `Const` **takeFirstT**: [`TakeFirst`](../interfaces/container.TakeFirst.md)<[`Sequence`](sequence.md#sequence)<`unknown`\>\>

___

### takeLastT

• `Const` **takeLastT**: [`TakeLast`](../interfaces/container.TakeLast.md)<[`Sequence`](sequence.md#sequence)<`unknown`\>\>

___

### takeWhileT

• `Const` **takeWhileT**: [`TakeWhile`](../interfaces/container.TakeWhile.md)<[`Sequence`](sequence.md#sequence)<`unknown`\>\>

___

### toEnumerableT

• `Const` **toEnumerableT**: [`ToEnumerable`](../interfaces/enumerable.ToEnumerable.md)<[`Sequence`](sequence.md#sequence)<`unknown`\>\>

___

### toRunnableT

• `Const` **toRunnableT**: [`ToRunnable`](../interfaces/runnable.ToRunnable.md)<[`Sequence`](sequence.md#sequence)<`unknown`\>\>

___

### type

• `Const` **type**: [`Sequence`](sequence.md#sequence)<`unknown`\>

___

### zipT

• `Const` **zipT**: [`Zip`](../interfaces/container.Zip.md)<[`Sequence`](sequence.md#sequence)<`unknown`\>\>

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

### fromArray

▸ **fromArray**<`T`\>(`options?`): [`Function1`](functions.md#function1)<readonly `T`[], [`Sequence`](sequence.md#sequence)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<[`FromArrayOptions`](../interfaces/container.FromArrayOptions.md)\> |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], [`Sequence`](sequence.md#sequence)<`T`\>\>

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

### pairwise

▸ **pairwise**<`T`\>(): [`SequenceOperator`](sequence.md#sequenceoperator)<`T`, readonly [[`Option`](option.md#option)<`T`\>, `T`]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`SequenceOperator`](sequence.md#sequenceoperator)<`T`, readonly [[`Option`](option.md#option)<`T`\>, `T`]\>

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

### toEnumerable

▸ **toEnumerable**<`T`\>(): [`Function1`](functions.md#function1)<[`Sequence`](sequence.md#sequence)<`T`\>, [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`Sequence`](sequence.md#sequence)<`T`\>, [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`T`\>\>

___

### toRunnable

▸ **toRunnable**<`T`\>(): [`Function1`](functions.md#function1)<[`Sequence`](sequence.md#sequence)<`T`\>, [`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`Sequence`](sequence.md#sequence)<`T`\>, [`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`T`\>\>

___

### zip

▸ **zip**<`TA`, `TB`\>(`a`, `b`): [`Sequence`](sequence.md#sequence)<readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Sequence`](sequence.md#sequence)<`TA`\> |
| `b` | [`Sequence`](sequence.md#sequence)<`TB`\> |

#### Returns

[`Sequence`](sequence.md#sequence)<readonly [`TA`, `TB`]\>

▸ **zip**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Sequence`](sequence.md#sequence)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Sequence`](sequence.md#sequence)<`TA`\> |
| `b` | [`Sequence`](sequence.md#sequence)<`TB`\> |
| `c` | [`Sequence`](sequence.md#sequence)<`TC`\> |

#### Returns

[`Sequence`](sequence.md#sequence)<readonly [`TA`, `TB`, `TC`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Sequence`](sequence.md#sequence)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`Sequence`](sequence.md#sequence)<`TA`\> |
| `b` | [`Sequence`](sequence.md#sequence)<`TB`\> |
| `c` | [`Sequence`](sequence.md#sequence)<`TC`\> |
| `d` | [`Sequence`](sequence.md#sequence)<`TD`\> |

#### Returns

[`Sequence`](sequence.md#sequence)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`Sequence`](sequence.md#sequence)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`Sequence`](sequence.md#sequence)<`TA`\> |
| `b` | [`Sequence`](sequence.md#sequence)<`TB`\> |
| `c` | [`Sequence`](sequence.md#sequence)<`TC`\> |
| `d` | [`Sequence`](sequence.md#sequence)<`TD`\> |
| `e` | [`Sequence`](sequence.md#sequence)<`TE`\> |

#### Returns

[`Sequence`](sequence.md#sequence)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`Sequence`](sequence.md#sequence)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`Sequence`](sequence.md#sequence)<`TA`\> |
| `b` | [`Sequence`](sequence.md#sequence)<`TB`\> |
| `c` | [`Sequence`](sequence.md#sequence)<`TC`\> |
| `d` | [`Sequence`](sequence.md#sequence)<`TD`\> |
| `e` | [`Sequence`](sequence.md#sequence)<`TE`\> |
| `f` | [`Sequence`](sequence.md#sequence)<`TF`\> |

#### Returns

[`Sequence`](sequence.md#sequence)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`Sequence`](sequence.md#sequence)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`Sequence`](sequence.md#sequence)<`TA`\> |
| `b` | [`Sequence`](sequence.md#sequence)<`TB`\> |
| `c` | [`Sequence`](sequence.md#sequence)<`TC`\> |
| `d` | [`Sequence`](sequence.md#sequence)<`TD`\> |
| `e` | [`Sequence`](sequence.md#sequence)<`TE`\> |
| `f` | [`Sequence`](sequence.md#sequence)<`TF`\> |
| `g` | [`Sequence`](sequence.md#sequence)<`TG`\> |

#### Returns

[`Sequence`](sequence.md#sequence)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Sequence`](sequence.md#sequence)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`Sequence`](sequence.md#sequence)<`TA`\> |
| `b` | [`Sequence`](sequence.md#sequence)<`TB`\> |
| `c` | [`Sequence`](sequence.md#sequence)<`TC`\> |
| `d` | [`Sequence`](sequence.md#sequence)<`TD`\> |
| `e` | [`Sequence`](sequence.md#sequence)<`TE`\> |
| `f` | [`Sequence`](sequence.md#sequence)<`TF`\> |
| `g` | [`Sequence`](sequence.md#sequence)<`TG`\> |
| `h` | [`Sequence`](sequence.md#sequence)<`TH`\> |

#### Returns

[`Sequence`](sequence.md#sequence)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Sequence`](sequence.md#sequence)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`Sequence`](sequence.md#sequence)<`TA`\> |
| `b` | [`Sequence`](sequence.md#sequence)<`TB`\> |
| `c` | [`Sequence`](sequence.md#sequence)<`TC`\> |
| `d` | [`Sequence`](sequence.md#sequence)<`TD`\> |
| `e` | [`Sequence`](sequence.md#sequence)<`TE`\> |
| `f` | [`Sequence`](sequence.md#sequence)<`TF`\> |
| `g` | [`Sequence`](sequence.md#sequence)<`TG`\> |
| `h` | [`Sequence`](sequence.md#sequence)<`TH`\> |
| `i` | [`Sequence`](sequence.md#sequence)<`TI`\> |

#### Returns

[`Sequence`](sequence.md#sequence)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

▸ **zip**<`T`\>(...`enumerables`): [`Sequence`](sequence.md#sequence)<readonly `T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...enumerables` | readonly [`Sequence`](sequence.md#sequence)<`T`\>[] |

#### Returns

[`Sequence`](sequence.md#sequence)<readonly `T`[]\>
