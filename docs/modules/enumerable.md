[Reactive-JS](../README.md) / enumerable

# Module: enumerable

## Table of contents

### Classes

- [AbstractEnumerable](../classes/enumerable.AbstractEnumerable.md)

### Interfaces

- [EnumerableLike](../interfaces/enumerable.EnumerableLike.md)
- [ToEnumerable](../interfaces/enumerable.ToEnumerable.md)

### Type Aliases

- [EnumerableOperator](enumerable.md#enumerableoperator)

### Variables

- [bufferT](enumerable.md#buffert)
- [concatAllT](enumerable.md#concatallt)
- [concatT](enumerable.md#concatt)
- [distinctUntilChangedT](enumerable.md#distinctuntilchangedt)
- [fromArrayT](enumerable.md#fromarrayt)
- [fromIterableT](enumerable.md#fromiterablet)
- [fromIteratorT](enumerable.md#fromiteratort)
- [generateT](enumerable.md#generatet)
- [keepT](enumerable.md#keept)
- [mapT](enumerable.md#mapt)
- [pairwiseT](enumerable.md#pairwiset)
- [repeatT](enumerable.md#repeatt)
- [scanT](enumerable.md#scant)
- [skipFirstT](enumerable.md#skipfirstt)
- [takeFirstT](enumerable.md#takefirstt)
- [takeLastT](enumerable.md#takelastt)
- [takeWhileT](enumerable.md#takewhilet)
- [throwIfEmptyT](enumerable.md#throwifemptyt)
- [toEnumerableT](enumerable.md#toenumerablet)
- [toIterableT](enumerable.md#toiterablet)
- [toRunnableT](enumerable.md#torunnablet)
- [type](enumerable.md#type)
- [usingT](enumerable.md#usingt)
- [zipT](enumerable.md#zipt)

### Functions

- [buffer](enumerable.md#buffer)
- [concat](enumerable.md#concat)
- [concatAll](enumerable.md#concatall)
- [createEnumerable](enumerable.md#createenumerable)
- [distinctUntilChanged](enumerable.md#distinctuntilchanged)
- [enumerate](enumerable.md#enumerate)
- [fromArray](enumerable.md#fromarray)
- [fromIterable](enumerable.md#fromiterable)
- [fromIterator](enumerable.md#fromiterator)
- [generate](enumerable.md#generate)
- [keep](enumerable.md#keep)
- [map](enumerable.md#map)
- [onNotify](enumerable.md#onnotify)
- [pairwise](enumerable.md#pairwise)
- [repeat](enumerable.md#repeat)
- [scan](enumerable.md#scan)
- [skipFirst](enumerable.md#skipfirst)
- [takeFirst](enumerable.md#takefirst)
- [takeLast](enumerable.md#takelast)
- [takeWhile](enumerable.md#takewhile)
- [throwIfEmpty](enumerable.md#throwifempty)
- [toEnumerable](enumerable.md#toenumerable)
- [toIterable](enumerable.md#toiterable)
- [toRunnable](enumerable.md#torunnable)
- [using](enumerable.md#using)
- [zip](enumerable.md#zip)

## Type Aliases

### EnumerableOperator

Ƭ **EnumerableOperator**<`TA`, `TB`\>: [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`TA`\>, [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`TB`\>\>

A unary function that transforms an EnumerableLike<TA> into a EnumerableLike<TB>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

## Variables

### bufferT

• `Const` **bufferT**: [`Buffer`](../interfaces/container.Buffer.md)<[`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`unknown`\>\>

___

### concatAllT

• `Const` **concatAllT**: [`ConcatAll`](../interfaces/container.ConcatAll.md)<[`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`unknown`\>\>

___

### concatT

• `Const` **concatT**: [`Concat`](../interfaces/container.Concat.md)<[`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`unknown`\>\>

___

### distinctUntilChangedT

• `Const` **distinctUntilChangedT**: [`DistinctUntilChanged`](../interfaces/container.DistinctUntilChanged.md)<[`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`unknown`\>\>

___

### fromArrayT

• `Const` **fromArrayT**: [`FromArray`](../interfaces/container.FromArray.md)<[`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`unknown`\>, [`FromArrayOptions`](../interfaces/container.FromArrayOptions.md)\>

___

### fromIterableT

• `Const` **fromIterableT**: [`FromIterable`](../interfaces/container.FromIterable.md)<[`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`unknown`\>\>

___

### fromIteratorT

• `Const` **fromIteratorT**: [`FromIterator`](../interfaces/container.FromIterator.md)<[`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`unknown`\>\>

___

### generateT

• `Const` **generateT**: [`Generate`](../interfaces/container.Generate.md)<[`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`unknown`\>\>

___

### keepT

• `Const` **keepT**: [`Keep`](../interfaces/container.Keep.md)<[`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`unknown`\>\>

___

### mapT

• `Const` **mapT**: [`Map`](../interfaces/container.Map.md)<[`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`unknown`\>\>

___

### pairwiseT

• `Const` **pairwiseT**: [`Pairwise`](../interfaces/container.Pairwise.md)<[`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`unknown`\>\>

___

### repeatT

• `Const` **repeatT**: [`Repeat`](../interfaces/container.Repeat.md)<[`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`unknown`\>\>

___

### scanT

• `Const` **scanT**: [`Scan`](../interfaces/container.Scan.md)<[`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`unknown`\>\>

___

### skipFirstT

• `Const` **skipFirstT**: [`SkipFirst`](../interfaces/container.SkipFirst.md)<[`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`unknown`\>\>

___

### takeFirstT

• `Const` **takeFirstT**: [`TakeFirst`](../interfaces/container.TakeFirst.md)<[`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`unknown`\>\>

___

### takeLastT

• `Const` **takeLastT**: [`TakeLast`](../interfaces/container.TakeLast.md)<[`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`unknown`\>\>

___

### takeWhileT

• `Const` **takeWhileT**: [`TakeWhile`](../interfaces/container.TakeWhile.md)<[`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`unknown`\>\>

___

### throwIfEmptyT

• `Const` **throwIfEmptyT**: [`ThrowIfEmpty`](../interfaces/container.ThrowIfEmpty.md)<[`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`unknown`\>\>

___

### toEnumerableT

• `Const` **toEnumerableT**: [`ToEnumerable`](../interfaces/enumerable.ToEnumerable.md)<[`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`unknown`\>\>

___

### toIterableT

• `Const` **toIterableT**: [`ToIterable`](../interfaces/container.ToIterable.md)<[`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`unknown`\>\>

___

### toRunnableT

• `Const` **toRunnableT**: [`ToRunnable`](../interfaces/runnable.ToRunnable.md)<[`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`unknown`\>\>

___

### type

• `Const` **type**: [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`unknown`\>

___

### usingT

• `Const` **usingT**: [`Using`](../interfaces/container.Using.md)<[`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`unknown`\>\>

___

### zipT

• `Const` **zipT**: [`Zip`](../interfaces/container.Zip.md)<[`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`unknown`\>\>

## Functions

### buffer

▸ **buffer**<`T`\>(`options?`): [`EnumerableOperator`](enumerable.md#enumerableoperator)<`T`, readonly `T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.maxBufferSize?` | `number` |

#### Returns

[`EnumerableOperator`](enumerable.md#enumerableoperator)<`T`, readonly `T`[]\>

___

### concat

▸ **concat**<`T`\>(`fst`, `snd`, ...`tail`): [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`T`\>

Creates an EnumerableLike which yields all values from each source sequentially.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`T`\> |
| `snd` | [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`T`\> |
| `...tail` | readonly [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`T`\>[] |

#### Returns

[`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`T`\>

___

### concatAll

▸ **concatAll**<`T`\>(): [`EnumerableOperator`](enumerable.md#enumerableoperator)<[`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`T`\>, `T`\>

Converts a higher-order EnumerableLike into a first-order EnumerableLike.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`EnumerableOperator`](enumerable.md#enumerableoperator)<[`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`T`\>, `T`\>

___

### createEnumerable

▸ **createEnumerable**<`T`\>(`enumerate`): [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `enumerate` | [`Factory`](functions.md#factory)<[`Enumerator`](../classes/enumerator.Enumerator.md)<`T`\>\> |

#### Returns

[`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`T`\>

___

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`EnumerableOperator`](enumerable.md#enumerableoperator)<`T`, `T`\>

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

[`EnumerableOperator`](enumerable.md#enumerableoperator)<`T`, `T`\>

___

### enumerate

▸ **enumerate**<`T`\>(`enumerable`): [`Enumerator`](../classes/enumerator.Enumerator.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `enumerable` | [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`T`\> |

#### Returns

[`Enumerator`](../classes/enumerator.Enumerator.md)<`T`\>

___

### fromArray

▸ **fromArray**<`T`\>(`options?`): [`Function1`](functions.md#function1)<readonly `T`[], [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`T`\>\>

Returns an EnumerableLike view over the `values` array.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<[`FromArrayOptions`](../interfaces/container.FromArrayOptions.md)\> |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`T`\>\>

___

### fromIterable

▸ **fromIterable**<`T`\>(): [`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`T`\>\>

Converts a javascript Iterable to an EnumerableLike.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`T`\>\>

___

### fromIterator

▸ **fromIterator**<`T`, `TReturn`, `TNext`\>(): [`Function1`](functions.md#function1)<[`Factory`](functions.md#factory)<`Iterator`<`T`, `TReturn`, `TNext`\>\>, [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`T`\>\>

Returns a single use EnumerableLike over the javascript Iterator
returned by the function `f`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TReturn` | `any` |
| `TNext` | `unknown` |

#### Returns

[`Function1`](functions.md#function1)<[`Factory`](functions.md#factory)<`Iterator`<`T`, `TReturn`, `TNext`\>\>, [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`T`\>\>

___

### generate

▸ **generate**<`T`\>(`generator`, `initialValue`): [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`T`\>

Generates an EnumerableLike from a generator function
that is applied to an accumulator value.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `generator` | [`Updater`](functions.md#updater)<`T`\> | the generator function. |
| `initialValue` | [`Factory`](functions.md#factory)<`T`\> | Factory function used to generate the initial accumulator. |

#### Returns

[`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`T`\>

___

### keep

▸ **keep**<`T`\>(`predicate`): [`EnumerableOperator`](enumerable.md#enumerableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`EnumerableOperator`](enumerable.md#enumerableoperator)<`T`, `T`\>

___

### map

▸ **map**<`TA`, `TB`\>(`mapper`): [`EnumerableOperator`](enumerable.md#enumerableoperator)<`TA`, `TB`\>

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

[`EnumerableOperator`](enumerable.md#enumerableoperator)<`TA`, `TB`\>

___

### onNotify

▸ **onNotify**<`T`\>(`onNotify`): [`EnumerableOperator`](enumerable.md#enumerableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `onNotify` | [`SideEffect1`](functions.md#sideeffect1)<`T`\> |

#### Returns

[`EnumerableOperator`](enumerable.md#enumerableoperator)<`T`, `T`\>

___

### pairwise

▸ **pairwise**<`T`\>(): [`EnumerableOperator`](enumerable.md#enumerableoperator)<`T`, [[`Option`](option.md#option)<`T`\>, `T`]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`EnumerableOperator`](enumerable.md#enumerableoperator)<`T`, [[`Option`](option.md#option)<`T`\>, `T`]\>

___

### repeat

▸ **repeat**<`T`\>(`predicate`): [`EnumerableOperator`](enumerable.md#enumerableoperator)<`T`, `T`\>

Returns an EnumerableLike that applies the predicate function each time the source
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

[`EnumerableOperator`](enumerable.md#enumerableoperator)<`T`, `T`\>

▸ **repeat**<`T`\>(`count`): [`EnumerableOperator`](enumerable.md#enumerableoperator)<`T`, `T`\>

Returns an EnumerableLike that repeats the source count times.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

[`EnumerableOperator`](enumerable.md#enumerableoperator)<`T`, `T`\>

▸ **repeat**<`T`\>(): [`EnumerableOperator`](enumerable.md#enumerableoperator)<`T`, `T`\>

Returns an EnumerableLike` that continually repeats the source.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`EnumerableOperator`](enumerable.md#enumerableoperator)<`T`, `T`\>

___

### scan

▸ **scan**<`T`, `TAcc`\>(`reducer`, `initialValue`): [`EnumerableOperator`](enumerable.md#enumerableoperator)<`T`, `TAcc`\>

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

[`EnumerableOperator`](enumerable.md#enumerableoperator)<`T`, `TAcc`\>

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`EnumerableOperator`](enumerable.md#enumerableoperator)<`T`, `T`\>

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

[`EnumerableOperator`](enumerable.md#enumerableoperator)<`T`, `T`\>

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`EnumerableOperator`](enumerable.md#enumerableoperator)<`T`, `T`\>

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

[`EnumerableOperator`](enumerable.md#enumerableoperator)<`T`, `T`\>

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`EnumerableOperator`](enumerable.md#enumerableoperator)<`T`, `T`\>

Returns an EnumerableLike that only yields the last `count` items yielded by the source.

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

[`EnumerableOperator`](enumerable.md#enumerableoperator)<`T`, `T`\>

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`EnumerableOperator`](enumerable.md#enumerableoperator)<`T`, `T`\>

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

[`EnumerableOperator`](enumerable.md#enumerableoperator)<`T`, `T`\>

___

### throwIfEmpty

▸ **throwIfEmpty**<`T`\>(`factory`): [`EnumerableOperator`](enumerable.md#enumerableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](functions.md#factory)<`unknown`\> |

#### Returns

[`EnumerableOperator`](enumerable.md#enumerableoperator)<`T`, `T`\>

___

### toEnumerable

▸ **toEnumerable**<`T`\>(): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`T`\>, [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`T`\>, [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`T`\>\>

___

### toIterable

▸ **toIterable**<`T`\>(): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`T`\>, `Iterable`<`T`\>\>

Converts an EnumerableLike into a javascript Iterable.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`T`\>, `Iterable`<`T`\>\>

___

### toRunnable

▸ **toRunnable**<`T`\>(): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`T`\>, [`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`T`\>, [`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`T`\>\>

___

### using

▸ **using**<`TResource`, `T`\>(`resourceFactory`, `containerFactory`): [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResource` | extends [`Disposable`](../classes/disposable.Disposable.md)<`TResource`\> |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `resourceFactory` | [`Factory`](functions.md#factory)<`TResource`\> |
| `containerFactory` | [`Function1`](functions.md#function1)<`TResource`, [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`T`\>\> |

#### Returns

[`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`T`\>

▸ **using**<`TResource1`, `TResource2`, `T`\>(`resourceFactory`, `containerFactory`): [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResource1` | extends [`Disposable`](../classes/disposable.Disposable.md)<`TResource1`\> |
| `TResource2` | extends [`Disposable`](../classes/disposable.Disposable.md)<`TResource2`\> |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `resourceFactory` | [`Factory`](functions.md#factory)<[`TResource1`, `TResource2`]\> |
| `containerFactory` | [`Function2`](functions.md#function2)<`TResource1`, `TResource2`, [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`T`\>\> |

#### Returns

[`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`T`\>

▸ **using**<`TResource1`, `TResource2`, `TResource3`, `T`\>(`resourceFactory`, `containerFactory`): [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResource1` | extends [`Disposable`](../classes/disposable.Disposable.md)<`TResource1`\> |
| `TResource2` | extends [`Disposable`](../classes/disposable.Disposable.md)<`TResource2`\> |
| `TResource3` | extends [`Disposable`](../classes/disposable.Disposable.md)<`TResource3`\> |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `resourceFactory` | [`Factory`](functions.md#factory)<[`TResource1`, `TResource2`, `TResource3`]\> |
| `containerFactory` | [`Function3`](functions.md#function3)<`TResource1`, `TResource2`, `TResource3`, [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`T`\>\> |

#### Returns

[`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`T`\>

▸ **using**<`TResource1`, `TResource2`, `TResource3`, `TResource4`, `T`\>(`resourceFactory`, `containerFactory`): [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResource1` | extends [`Disposable`](../classes/disposable.Disposable.md)<`TResource1`\> |
| `TResource2` | extends [`Disposable`](../classes/disposable.Disposable.md)<`TResource2`\> |
| `TResource3` | extends [`Disposable`](../classes/disposable.Disposable.md)<`TResource3`\> |
| `TResource4` | extends [`Disposable`](../classes/disposable.Disposable.md)<`TResource4`\> |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `resourceFactory` | [`Factory`](functions.md#factory)<[`TResource1`, `TResource2`, `TResource3`, `TResource4`]\> |
| `containerFactory` | [`Function4`](functions.md#function4)<`TResource1`, `TResource2`, `TResource3`, `TResource4`, [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`T`\>\> |

#### Returns

[`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`T`\>

▸ **using**<`TResource1`, `TResource2`, `TResource3`, `TResource4`, `TResource5`, `T`\>(`resourceFactory`, `containerFactory`): [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResource1` | extends [`Disposable`](../classes/disposable.Disposable.md)<`TResource1`\> |
| `TResource2` | extends [`Disposable`](../classes/disposable.Disposable.md)<`TResource2`\> |
| `TResource3` | extends [`Disposable`](../classes/disposable.Disposable.md)<`TResource3`\> |
| `TResource4` | extends [`Disposable`](../classes/disposable.Disposable.md)<`TResource4`\> |
| `TResource5` | extends [`Disposable`](../classes/disposable.Disposable.md)<`TResource5`\> |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `resourceFactory` | [`Factory`](functions.md#factory)<[`TResource1`, `TResource2`, `TResource3`, `TResource4`, `TResource5`]\> |
| `containerFactory` | [`Function5`](functions.md#function5)<`TResource1`, `TResource2`, `TResource3`, `TResource4`, `TResource5`, [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`T`\>\> |

#### Returns

[`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`T`\>

▸ **using**<`TResource`, `T`\>(`resourceFactory`, `runnableFactory`): [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResource` | extends [`Disposable`](../classes/disposable.Disposable.md)<`TResource`\> |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `resourceFactory` | [`Factory`](functions.md#factory)<`TResource` \| readonly `TResource`[]\> |
| `runnableFactory` | (...`resources`: readonly `TResource`[]) => [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`T`\> |

#### Returns

[`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`T`\>

___

### zip

▸ **zip**<`TA`, `TB`\>(`a`, `b`): [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`TB`\> |

#### Returns

[`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<readonly [`TA`, `TB`]\>

▸ **zip**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`TC`\> |

#### Returns

[`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`TD`\> |

#### Returns

[`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`TE`\> |

#### Returns

[`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`TF`\> |

#### Returns

[`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`TG`\> |

#### Returns

[`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`TG`\> |
| `h` | [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`TH`\> |

#### Returns

[`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`TG`\> |
| `h` | [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`TH`\> |
| `i` | [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`TI`\> |

#### Returns

[`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

▸ **zip**<`T`\>(...`enumerables`): [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<readonly `T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...enumerables` | readonly [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`T`\>[] |

#### Returns

[`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<readonly `T`[]\>
