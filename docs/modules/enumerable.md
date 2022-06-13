[Reactive-JS](../README.md) / enumerable

# Module: enumerable

## Table of contents

### Interfaces

- [EnumerableLike](../interfaces/enumerable.EnumerableLike.md)
- [EnumeratorLike](../interfaces/enumerable.EnumeratorLike.md)
- [ToEnumerable](../interfaces/enumerable.ToEnumerable.md)

### Type Aliases

- [EnumerableOperator](enumerable.md#enumerableoperator)
- [EnumeratorOperator](enumerable.md#enumeratoroperator)

### Variables

- [fromArrayT](enumerable.md#fromarrayt)
- [keepT](enumerable.md#keept)
- [type](enumerable.md#type)

### Functions

- [concat](enumerable.md#concat)
- [concatAll](enumerable.md#concatall)
- [current](enumerable.md#current)
- [distinctUntilChanged](enumerable.md#distinctuntilchanged)
- [enumerate](enumerable.md#enumerate)
- [fromArray](enumerable.md#fromarray)
- [fromIterable](enumerable.md#fromiterable)
- [fromIterator](enumerable.md#fromiterator)
- [generate](enumerable.md#generate)
- [hasCurrent](enumerable.md#hascurrent)
- [keep](enumerable.md#keep)
- [lift](enumerable.md#lift)
- [map](enumerable.md#map)
- [move](enumerable.md#move)
- [repeat](enumerable.md#repeat)
- [scan](enumerable.md#scan)
- [skipFirst](enumerable.md#skipfirst)
- [takeFirst](enumerable.md#takefirst)
- [takeLast](enumerable.md#takelast)
- [takeWhile](enumerable.md#takewhile)
- [toEnumerable](enumerable.md#toenumerable)
- [toIterable](enumerable.md#toiterable)
- [toRunnable](enumerable.md#torunnable)
- [zip](enumerable.md#zip)
- [zipEnumerators](enumerable.md#zipenumerators)

## Type Aliases

### EnumerableOperator

Ƭ **EnumerableOperator**<`TA`, `TB`\>: [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`TA`\>, [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`TB`\>\>

A unary function that transforms an EnumerableLike<TA> into a EnumerableLike<TB>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

___

### EnumeratorOperator

Ƭ **EnumeratorOperator**<`TA`, `TB`\>: [`Function1`](functions.md#function1)<[`EnumeratorLike`](../interfaces/enumerable.EnumeratorLike.md)<`TA`\>, [`EnumeratorLike`](../interfaces/enumerable.EnumeratorLike.md)<`TB`\>\>

A unary function that transforms an EnumeratorLike<TA> into a EnumeratorLike<TB>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

## Variables

### fromArrayT

• `Const` **fromArrayT**: [`FromArray`](../interfaces/container.FromArray.md)<[`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`unknown`\>, [`FromArrayOptions`](../interfaces/container.FromArrayOptions.md)\>

___

### keepT

• `Const` **keepT**: [`Keep`](../interfaces/container.Keep.md)<[`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`unknown`\>\>

___

### type

• `Const` **type**: [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`unknown`\>

## Functions

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

### current

▸ **current**<`T`\>(`enumerator`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `enumerator` | [`EnumeratorLike`](../interfaces/enumerable.EnumeratorLike.md)<`T`\> |

#### Returns

`T`

___

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`EnumerableOperator`](enumerable.md#enumerableoperator)<`T`, `T`\>

Returns an `ObservableLike` that emits all items emitted by the source that
are distinct by comparison from the previous item.

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

▸ **enumerate**<`T`\>(`enumerable`): [`EnumeratorLike`](../interfaces/enumerable.EnumeratorLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `enumerable` | [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`T`\> |

#### Returns

[`EnumeratorLike`](../interfaces/enumerable.EnumeratorLike.md)<`T`\>

___

### fromArray

▸ **fromArray**<`T`\>(`options?`): (`values`: readonly `T`[]) => [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`T`\>

Returns an EnumerableLike view over the `values` array.

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

`fn`

▸ (`values`): [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `values` | readonly `T`[] |

##### Returns

[`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`T`\>

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

### hasCurrent

▸ **hasCurrent**<`T`\>(`enumerator`): `boolean`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `enumerator` | [`EnumeratorLike`](../interfaces/enumerable.EnumeratorLike.md)<`T`\> |

#### Returns

`boolean`

___

### keep

▸ **keep**<`T`\>(`predicate`): [`EnumerableOperator`](enumerable.md#enumerableoperator)<`T`, `T`\>

Returns an `EnumerableLike` that only emits items from the
source that satisfy the specified type predicate.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> | The predicate function. |

#### Returns

[`EnumerableOperator`](enumerable.md#enumerableoperator)<`T`, `T`\>

___

### lift

▸ **lift**<`TA`, `TB`\>(`operator`): [`EnumerableOperator`](enumerable.md#enumerableoperator)<`TA`, `TB`\>

Returns an EnumerableOperator that applies `operator` to
the EnumeratorLike returned by the source when enumerated.

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `operator` | [`EnumeratorOperator`](enumerable.md#enumeratoroperator)<`TA`, `TB`\> |

#### Returns

[`EnumerableOperator`](enumerable.md#enumerableoperator)<`TA`, `TB`\>

___

### map

▸ **map**<`TA`, `TB`\>(`mapper`): [`EnumerableOperator`](enumerable.md#enumerableoperator)<`TA`, `TB`\>

Returns an `EnumerableLike` that applies the `mapper` function to each
value emitted by the source.

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mapper` | [`Function1`](functions.md#function1)<`TA`, `TB`\> | The map function to apply each value. Must be a pure function. |

#### Returns

[`EnumerableOperator`](enumerable.md#enumerableoperator)<`TA`, `TB`\>

___

### move

▸ **move**<`T`\>(`enumerator`): `boolean`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `enumerator` | [`EnumeratorLike`](../interfaces/enumerable.EnumeratorLike.md)<`T`\> |

#### Returns

`boolean`

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

Returns an EnumerableLike which yields values emitted by the source as long
as each value satisfies the given predicate.

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

Returns an EnumerableLike that skips the first `count` values emitted by the source.

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

Returns an EnumerableLike that only yields the first `count` values emitted by the source.

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

Returns an EnumerableLike which yields values emitted by the source as long
as each value satisfies the given predicate.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> | The predicate function. |
| `options?` | `Object` | - |
| `options.inclusive?` | `boolean` | - |

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

### zip

▸ **zip**<`TA`, `TB`\>(`a`, `b`): [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<[`TA`, `TB`]\>

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

[`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<[`TA`, `TB`]\>

▸ **zip**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<[`TA`, `TB`, `TC`]\>

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

[`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<[`TA`, `TB`, `TC`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<[`TA`, `TB`, `TC`, `TD`]\>

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

[`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<[`TA`, `TB`, `TC`, `TD`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<[`TA`, `TB`, `TC`, `TD`, `TE`]\>

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

[`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<[`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<[`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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

[`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<[`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<[`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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

[`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<[`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<[`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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

[`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<[`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<[`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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

[`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<[`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

### zipEnumerators

▸ **zipEnumerators**(`enumerators`): [`EnumeratorLike`](../interfaces/enumerable.EnumeratorLike.md)<readonly `unknown`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `enumerators` | readonly [`EnumeratorLike`](../interfaces/enumerable.EnumeratorLike.md)<`unknown`\>[] |

#### Returns

[`EnumeratorLike`](../interfaces/enumerable.EnumeratorLike.md)<readonly `unknown`[]\>
