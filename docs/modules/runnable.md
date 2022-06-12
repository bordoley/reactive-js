[Reactive-JS](../README.md) / runnable

# Module: runnable

## Table of contents

### Classes

- [AbstractDelegatingSink](../classes/runnable.AbstractDelegatingSink.md)

### Interfaces

- [RunnableLike](../interfaces/runnable.RunnableLike.md)
- [SinkLike](../interfaces/runnable.SinkLike.md)

### Type Aliases

- [RunnableOperator](runnable.md#runnableoperator)
- [SinkOperator](runnable.md#sinkoperator)

### Variables

- [sinkDone](runnable.md#sinkdone)

### Functions

- [compute](runnable.md#compute)
- [concat](runnable.md#concat)
- [concatAll](runnable.md#concatall)
- [concatMap](runnable.md#concatmap)
- [concatWith](runnable.md#concatwith)
- [contains](runnable.md#contains)
- [createRunnable](runnable.md#createrunnable)
- [distinctUntilChanged](runnable.md#distinctuntilchanged)
- [empty](runnable.md#empty)
- [endWith](runnable.md#endwith)
- [everySatisfy](runnable.md#everysatisfy)
- [first](runnable.md#first)
- [forEach](runnable.md#foreach)
- [fromArray](runnable.md#fromarray)
- [fromValue](runnable.md#fromvalue)
- [generate](runnable.md#generate)
- [keep](runnable.md#keep)
- [keepType](runnable.md#keeptype)
- [last](runnable.md#last)
- [lift](runnable.md#lift)
- [map](runnable.md#map)
- [mapTo](runnable.md#mapto)
- [noneSatisfy](runnable.md#nonesatisfy)
- [reduce](runnable.md#reduce)
- [repeat](runnable.md#repeat)
- [scan](runnable.md#scan)
- [skipFirst](runnable.md#skipfirst)
- [someSatisfy](runnable.md#somesatisfy)
- [startWith](runnable.md#startwith)
- [takeFirst](runnable.md#takefirst)
- [takeLast](runnable.md#takelast)
- [takeWhile](runnable.md#takewhile)
- [toArray](runnable.md#toarray)
- [toRunnable](runnable.md#torunnable)

## Type Aliases

### RunnableOperator

Ƭ **RunnableOperator**<`TA`, `TB`\>: [`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`TA`\>, [`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

___

### SinkOperator

Ƭ **SinkOperator**<`TA`, `TB`\>: [`Function1`](functions.md#function1)<[`SinkLike`](../interfaces/runnable.SinkLike.md)<`TB`\>, [`SinkLike`](../interfaces/runnable.SinkLike.md)<`TA`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

## Variables

### sinkDone

• `Const` **sinkDone**: unique `symbol`

## Functions

### compute

▸ **compute**<`T`\>(): [`Function1`](functions.md#function1)<[`Factory`](functions.md#factory)<`T`\>, [`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`Factory`](functions.md#factory)<`T`\>, [`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`T`\>\>

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

### concatMap

▸ **concatMap**<`TA`, `TB`\>(`mapper`): [`RunnableOperator`](runnable.md#runnableoperator)<`TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapper` | [`Function1`](functions.md#function1)<`TA`, [`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`TB`\>\> |

#### Returns

[`RunnableOperator`](runnable.md#runnableoperator)<`TA`, `TB`\>

___

### concatWith

▸ **concatWith**<`T`\>(`snd`): [`RunnableOperator`](runnable.md#runnableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`T`\> |

#### Returns

[`RunnableOperator`](runnable.md#runnableoperator)<`T`, `T`\>

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
| `run` | [`SideEffect1`](functions.md#sideeffect1)<[`SinkLike`](../interfaces/runnable.SinkLike.md)<`T`\>\> |

#### Returns

[`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`T`\>

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

### empty

▸ **empty**<`T`\>(): [`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`T`\>

___

### endWith

▸ **endWith**<`T`\>(`value`, ...`values`): [`RunnableOperator`](runnable.md#runnableoperator)<`T`, `T`\>

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

▸ **first**<`T`\>(`runnable`): [`Option`](option.md#option)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `runnable` | [`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`T`\> |

#### Returns

[`Option`](option.md#option)<`T`\>

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

### fromValue

▸ **fromValue**<`T`\>(): [`Function1`](functions.md#function1)<`T`, [`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<`T`, [`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`T`\>\>

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

### keepType

▸ **keepType**<`TA`, `TB`\>(`predicate`): [`RunnableOperator`](runnable.md#runnableoperator)<`TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`TypePredicate`](functions.md#typepredicate)<`TA`, `TB`\> |

#### Returns

[`RunnableOperator`](runnable.md#runnableoperator)<`TA`, `TB`\>

___

### last

▸ **last**<`T`\>(`runnable`): [`Option`](option.md#option)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `runnable` | [`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`T`\> |

#### Returns

[`Option`](option.md#option)<`T`\>

___

### lift

▸ **lift**<`TA`, `TB`\>(`operator`): [`RunnableOperator`](runnable.md#runnableoperator)<`TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `operator` | [`SinkOperator`](runnable.md#sinkoperator)<`TA`, `TB`\> |

#### Returns

[`RunnableOperator`](runnable.md#runnableoperator)<`TA`, `TB`\>

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

### mapTo

▸ **mapTo**<`TA`, `TB`\>(`value`): [`RunnableOperator`](runnable.md#runnableoperator)<`TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `TB` |

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

### reduce

▸ **reduce**<`T`, `TAcc`\>(`reducer`, `initialValue`): [`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`T`\>, `TAcc`\>

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

[`Function1`](functions.md#function1)<[`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`T`\>, `TAcc`\>

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

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`RunnableOperator`](runnable.md#runnableoperator)<`T`, `TAcc`\>

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

### startWith

▸ **startWith**<`T`\>(`value`, ...`values`): [`RunnableOperator`](runnable.md#runnableoperator)<`T`, `T`\>

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

[`RunnableOperator`](runnable.md#runnableoperator)<`T`, `T`\>

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
