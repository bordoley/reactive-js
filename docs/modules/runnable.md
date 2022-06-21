[Reactive-JS](../README.md) / runnable

# Module: runnable

## Table of contents

### Classes

- [Sink](../classes/runnable.Sink.md)

### Interfaces

- [RunnableLike](../interfaces/runnable.RunnableLike.md)
- [ToRunnable](../interfaces/runnable.ToRunnable.md)

### Type Aliases

- [RunnableOperator](runnable.md#runnableoperator)

### Variables

- [decodeWithCharsetT](runnable.md#decodewithcharsett)
- [distinctUntilChangedT](runnable.md#distinctuntilchangedt)
- [fromArrayT](runnable.md#fromarrayt)
- [keepT](runnable.md#keept)
- [mapT](runnable.md#mapt)
- [pairwiseT](runnable.md#pairwiset)
- [reduceT](runnable.md#reducet)
- [scanT](runnable.md#scant)
- [skipFirstT](runnable.md#skipfirstt)
- [takeFirstT](runnable.md#takefirstt)
- [takeLastT](runnable.md#takelastt)
- [takeWhileT](runnable.md#takewhilet)
- [type](runnable.md#type)

### Functions

- [catchError](runnable.md#catcherror)
- [concat](runnable.md#concat)
- [concatAll](runnable.md#concatall)
- [contains](runnable.md#contains)
- [createRunnable](runnable.md#createrunnable)
- [decodeWithCharset](runnable.md#decodewithcharset)
- [distinctUntilChanged](runnable.md#distinctuntilchanged)
- [everySatisfy](runnable.md#everysatisfy)
- [first](runnable.md#first)
- [forEach](runnable.md#foreach)
- [fromArray](runnable.md#fromarray)
- [generate](runnable.md#generate)
- [keep](runnable.md#keep)
- [last](runnable.md#last)
- [map](runnable.md#map)
- [noneSatisfy](runnable.md#nonesatisfy)
- [onNotify](runnable.md#onnotify)
- [pairwise](runnable.md#pairwise)
- [reduce](runnable.md#reduce)
- [repeat](runnable.md#repeat)
- [scan](runnable.md#scan)
- [skipFirst](runnable.md#skipfirst)
- [someSatisfy](runnable.md#somesatisfy)
- [takeFirst](runnable.md#takefirst)
- [takeLast](runnable.md#takelast)
- [takeWhile](runnable.md#takewhile)
- [toArray](runnable.md#toarray)
- [toRunnable](runnable.md#torunnable)
- [using](runnable.md#using)

## Type Aliases

### RunnableOperator

Ƭ **RunnableOperator**<`TA`, `TB`\>: [`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`TA`\>, [`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

## Variables

### decodeWithCharsetT

• `Const` **decodeWithCharsetT**: [`DecodeWithCharset`](../interfaces/container.DecodeWithCharset.md)<[`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`unknown`\>\>

___

### distinctUntilChangedT

• `Const` **distinctUntilChangedT**: [`DistinctUntilChanged`](../interfaces/container.DistinctUntilChanged.md)<[`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`unknown`\>\>

___

### fromArrayT

• `Const` **fromArrayT**: [`FromArray`](../interfaces/container.FromArray.md)<[`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`unknown`\>, [`FromArrayOptions`](../interfaces/container.FromArrayOptions.md)\>

___

### keepT

• `Const` **keepT**: [`Keep`](../interfaces/container.Keep.md)<[`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`unknown`\>\>

___

### mapT

• `Const` **mapT**: [`Map`](../interfaces/container.Map.md)<[`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`unknown`\>\>

___

### pairwiseT

• `Const` **pairwiseT**: [`Pairwise`](../interfaces/container.Pairwise.md)<[`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`unknown`\>\>

___

### reduceT

• `Const` **reduceT**: [`Reduce`](../interfaces/container.Reduce.md)<[`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`unknown`\>\>

___

### scanT

• `Const` **scanT**: [`Scan`](../interfaces/container.Scan.md)<[`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`unknown`\>\>

___

### skipFirstT

• `Const` **skipFirstT**: [`SkipFirst`](../interfaces/container.SkipFirst.md)<[`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`unknown`\>\>

___

### takeFirstT

• `Const` **takeFirstT**: [`TakeFirst`](../interfaces/container.TakeFirst.md)<[`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`unknown`\>\>

___

### takeLastT

• `Const` **takeLastT**: [`TakeLast`](../interfaces/container.TakeLast.md)<[`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`unknown`\>\>

___

### takeWhileT

• `Const` **takeWhileT**: [`TakeWhile`](../interfaces/container.TakeWhile.md)<[`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`unknown`\>\>

___

### type

• `Const` **type**: [`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`unknown`\>

## Functions

### catchError

▸ **catchError**<`T`\>(`onError`): [`RunnableOperator`](runnable.md#runnableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `onError` | [`Function1`](functions.md#function1)<`unknown`, `void` \| [`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`T`\>\> |

#### Returns

[`RunnableOperator`](runnable.md#runnableoperator)<`T`, `T`\>

___

### concat

▸ **concat**<`T`\>(`fst`, `snd`, ...`tail`): [`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`T`\>

Creates an `RunnableLike` which emits all values from each source sequentially.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`T`\> |
| `snd` | [`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`T`\> |
| `...tail` | readonly [`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`T`\>[] |

#### Returns

[`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`T`\>

___

### concatAll

▸ **concatAll**<`T`\>(): [`RunnableOperator`](runnable.md#runnableoperator)<[`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`RunnableOperator`](runnable.md#runnableoperator)<[`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`T`\>, `T`\>

___

### contains

▸ **contains**<`T`\>(`value`, `options?`): [`Predicate`](functions.md#predicate)<[`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `options?` | `Object` |
| `options.equality?` | [`Equality`](functions.md#equality)<`T`\> |

#### Returns

[`Predicate`](functions.md#predicate)<[`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`T`\>\>

___

### createRunnable

▸ **createRunnable**<`T`\>(`run`): [`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `run` | [`SideEffect1`](functions.md#sideeffect1)<[`Sink`](../classes/runnable.Sink.md)<`T`\>\> |

#### Returns

[`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`T`\>

___

### decodeWithCharset

▸ **decodeWithCharset**(`charset?`): [`RunnableOperator`](runnable.md#runnableoperator)<`ArrayBuffer`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `charset?` | `string` |

#### Returns

[`RunnableOperator`](runnable.md#runnableoperator)<`ArrayBuffer`, `string`\>

___

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`RunnableOperator`](runnable.md#runnableoperator)<`T`, `T`\>

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

[`RunnableOperator`](runnable.md#runnableoperator)<`T`, `T`\>

___

### everySatisfy

▸ **everySatisfy**<`T`\>(`predicate`): [`Predicate`](functions.md#predicate)<[`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`Predicate`](functions.md#predicate)<[`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`T`\>\>

___

### first

▸ **first**<`T`\>(): [`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`T`\>, [`Option`](option.md#option)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`T`\>, [`Option`](option.md#option)<`T`\>\>

___

### forEach

▸ **forEach**<`T`\>(`f`): [`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`T`\>, `void`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`SideEffect1`](functions.md#sideeffect1)<`T`\> |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`T`\>, `void`\>

___

### fromArray

▸ **fromArray**<`T`\>(`options?`): [`Function1`](functions.md#function1)<readonly `T`[], [`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<readonly `T`[], [`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`T`\>\>

___

### generate

▸ **generate**<`T`\>(`generator`, `initialValue`): [`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`T`\>

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

[`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`T`\>

___

### keep

▸ **keep**<`T`\>(`predicate`): [`RunnableOperator`](runnable.md#runnableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`RunnableOperator`](runnable.md#runnableoperator)<`T`, `T`\>

___

### last

▸ **last**<`T`\>(): [`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`T`\>, [`Option`](option.md#option)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`T`\>, [`Option`](option.md#option)<`T`\>\>

___

### map

▸ **map**<`TA`, `TB`\>(`mapper`): [`RunnableOperator`](runnable.md#runnableoperator)<`TA`, `TB`\>

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

[`RunnableOperator`](runnable.md#runnableoperator)<`TA`, `TB`\>

___

### noneSatisfy

▸ **noneSatisfy**<`T`\>(`predicate`): [`Predicate`](functions.md#predicate)<[`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`Predicate`](functions.md#predicate)<[`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`T`\>\>

___

### onNotify

▸ **onNotify**<`T`\>(`onNotify`): [`RunnableOperator`](runnable.md#runnableoperator)<`T`, `T`\>

Returns an `RunnableLike` that forwards notifications to the provided `onNotify` function.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `onNotify` | [`SideEffect1`](functions.md#sideeffect1)<`T`\> | The function that is invoked when the observable source produces values. |

#### Returns

[`RunnableOperator`](runnable.md#runnableoperator)<`T`, `T`\>

___

### pairwise

▸ **pairwise**<`T`\>(): [`RunnableOperator`](runnable.md#runnableoperator)<`T`, [[`Option`](option.md#option)<`T`\>, `T`]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`RunnableOperator`](runnable.md#runnableoperator)<`T`, [[`Option`](option.md#option)<`T`\>, `T`]\>

___

### reduce

▸ **reduce**<`T`, `TAcc`\>(`reducer`, `initialValue`): [`RunnableOperator`](runnable.md#runnableoperator)<`T`, `TAcc`\>

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

[`RunnableOperator`](runnable.md#runnableoperator)<`T`, `TAcc`\>

___

### repeat

▸ **repeat**<`T`\>(`predicate`): [`RunnableOperator`](runnable.md#runnableoperator)<`T`, `T`\>

Returns an RunnableLike that applies the predicate function each time the source
completes to determine if the enumerable should be repeated.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`number`\> | The predicate function to apply. |

#### Returns

[`RunnableOperator`](runnable.md#runnableoperator)<`T`, `T`\>

▸ **repeat**<`T`\>(`count`): [`RunnableOperator`](runnable.md#runnableoperator)<`T`, `T`\>

Returns an RunnableLike that repeats the source count times.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

[`RunnableOperator`](runnable.md#runnableoperator)<`T`, `T`\>

▸ **repeat**<`T`\>(): [`RunnableOperator`](runnable.md#runnableoperator)<`T`, `T`\>

Returns an RunnableLike that continually repeats the source.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`RunnableOperator`](runnable.md#runnableoperator)<`T`, `T`\>

___

### scan

▸ **scan**<`T`, `TAcc`\>(`reducer`, `initialValue`): [`RunnableOperator`](runnable.md#runnableoperator)<`T`, `TAcc`\>

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

[`RunnableOperator`](runnable.md#runnableoperator)<`T`, `TAcc`\>

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`RunnableOperator`](runnable.md#runnableoperator)<`T`, `T`\>

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

[`RunnableOperator`](runnable.md#runnableoperator)<`T`, `T`\>

___

### someSatisfy

▸ **someSatisfy**<`T`\>(`predicate`): [`Predicate`](functions.md#predicate)<[`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`Predicate`](functions.md#predicate)<[`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`T`\>\>

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`RunnableOperator`](runnable.md#runnableoperator)<`T`, `T`\>

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

[`RunnableOperator`](runnable.md#runnableoperator)<`T`, `T`\>

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`RunnableOperator`](runnable.md#runnableoperator)<`T`, `T`\>

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

[`RunnableOperator`](runnable.md#runnableoperator)<`T`, `T`\>

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`RunnableOperator`](runnable.md#runnableoperator)<`T`, `T`\>

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

[`RunnableOperator`](runnable.md#runnableoperator)<`T`, `T`\>

___

### toArray

▸ **toArray**<`T`\>(): [`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`T`\>, readonly `T`[]\>

Accumulates all values emitted by `runnable` into an array.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`T`\>, readonly `T`[]\>

___

### toRunnable

▸ **toRunnable**<`T`\>(): [`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`T`\>, [`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`T`\>, [`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`T`\>\>

___

### using

▸ **using**<`TResource`, `T`\>(`resourceFactory`, `observableFactory`): [`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResource` | extends [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `resourceFactory` | [`Factory`](functions.md#factory)<`TResource`\> |
| `observableFactory` | [`Function1`](functions.md#function1)<`TResource`, [`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`T`\>\> |

#### Returns

[`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`T`\>

▸ **using**<`TResource1`, `TResource2`, `T`\>(`resourceFactory`, `observableFactory`): [`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResource1` | extends [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |
| `TResource2` | extends [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `resourceFactory` | [`Factory`](functions.md#factory)<[`TResource1`, `TResource2`]\> |
| `observableFactory` | [`Function2`](functions.md#function2)<`TResource1`, `TResource2`, [`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`T`\>\> |

#### Returns

[`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`T`\>

▸ **using**<`TResource1`, `TResource2`, `TResource3`, `T`\>(`resourceFactory`, `observableFactory`): [`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResource1` | extends [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |
| `TResource2` | extends [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |
| `TResource3` | extends [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `resourceFactory` | [`Factory`](functions.md#factory)<[`TResource1`, `TResource2`, `TResource3`]\> |
| `observableFactory` | [`Function3`](functions.md#function3)<`TResource1`, `TResource2`, `TResource3`, [`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`T`\>\> |

#### Returns

[`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`T`\>

▸ **using**<`TResource1`, `TResource2`, `TResource3`, `TResource4`, `T`\>(`resourceFactory`, `observableFactory`): [`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResource1` | extends [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |
| `TResource2` | extends [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |
| `TResource3` | extends [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |
| `TResource4` | extends [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `resourceFactory` | [`Factory`](functions.md#factory)<[`TResource1`, `TResource2`, `TResource3`, `TResource4`]\> |
| `observableFactory` | [`Function4`](functions.md#function4)<`TResource1`, `TResource2`, `TResource3`, `TResource4`, [`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`T`\>\> |

#### Returns

[`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`T`\>

▸ **using**<`TResource1`, `TResource2`, `TResource3`, `TResource4`, `TResource5`, `T`\>(`resourceFactory`, `observableFactory`): [`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResource1` | extends [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |
| `TResource2` | extends [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |
| `TResource3` | extends [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |
| `TResource4` | extends [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |
| `TResource5` | extends [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `resourceFactory` | [`Factory`](functions.md#factory)<[`TResource1`, `TResource2`, `TResource3`, `TResource4`, `TResource5`]\> |
| `observableFactory` | [`Function5`](functions.md#function5)<`TResource1`, `TResource2`, `TResource3`, `TResource4`, `TResource5`, [`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`T`\>\> |

#### Returns

[`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`T`\>

▸ **using**<`TResource`, `T`\>(`resourceFactory`, `observableFactory`): [`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResource` | extends [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `resourceFactory` | [`Factory`](functions.md#factory)<`TResource` \| readonly `TResource`[]\> |
| `observableFactory` | (...`resources`: readonly `TResource`[]) => [`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`T`\> |

#### Returns

[`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`T`\>
