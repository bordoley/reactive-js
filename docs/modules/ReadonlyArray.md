[Reactive-JS](../README.md) / ReadonlyArray

# Module: ReadonlyArray

## Table of contents

### Container Interfaces

- [ReadonlyArrayContainer](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md)

### Module Interfaces

- [ReadonlyArrayModule](../interfaces/ReadonlyArray.ReadonlyArrayModule.md)

### Type Aliases

- [Signature](ReadonlyArray.md#signature)
- [TKeyBase](ReadonlyArray.md#tkeybase)
- [Type](ReadonlyArray.md#type)

### Constructor Functions

- [empty](ReadonlyArray.md#empty)
- [fromEnumerable](ReadonlyArray.md#fromenumerable)
- [fromFactory](ReadonlyArray.md#fromfactory)
- [fromIterable](ReadonlyArray.md#fromiterable)
- [fromOptional](ReadonlyArray.md#fromoptional)
- [fromReadonlyArray](ReadonlyArray.md#fromreadonlyarray)
- [fromValue](ReadonlyArray.md#fromvalue)

### Operator Functions

- [buffer](ReadonlyArray.md#buffer)
- [distinctUntilChanged](ReadonlyArray.md#distinctuntilchanged)
- [forEach](ReadonlyArray.md#foreach)
- [forEachWithKey](ReadonlyArray.md#foreachwithkey)
- [keep](ReadonlyArray.md#keep)
- [keepWithKey](ReadonlyArray.md#keepwithkey)
- [map](ReadonlyArray.md#map)
- [mapWithKey](ReadonlyArray.md#mapwithkey)
- [pairwise](ReadonlyArray.md#pairwise)
- [scan](ReadonlyArray.md#scan)
- [skipFirst](ReadonlyArray.md#skipfirst)
- [takeFirst](ReadonlyArray.md#takefirst)
- [takeLast](ReadonlyArray.md#takelast)
- [takeWhile](ReadonlyArray.md#takewhile)

### Transform Functions

- [entries](ReadonlyArray.md#entries)
- [enumerate](ReadonlyArray.md#enumerate)
- [keySet](ReadonlyArray.md#keyset)
- [keys](ReadonlyArray.md#keys)
- [reduce](ReadonlyArray.md#reduce)
- [reduceWithKey](ReadonlyArray.md#reducewithkey)
- [toDictionary](ReadonlyArray.md#todictionary)
- [toEventSource](ReadonlyArray.md#toeventsource)
- [toIndexedCollection](ReadonlyArray.md#toindexedcollection)
- [toIterable](ReadonlyArray.md#toiterable)
- [toObservable](ReadonlyArray.md#toobservable)
- [toReadonlyArray](ReadonlyArray.md#toreadonlyarray)
- [toReadonlyMap](ReadonlyArray.md#toreadonlymap)
- [values](ReadonlyArray.md#values)

## Type Aliases

### Signature

Ƭ **Signature**: [`ReadonlyArrayModule`](../interfaces/ReadonlyArray.ReadonlyArrayModule.md)

___

### TKeyBase

Ƭ **TKeyBase**: [`KeyOf`](types.md#keyof)<[`Type`](ReadonlyArray.md#type)\>

___

### Type

Ƭ **Type**: [`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md)

## Constructor Functions

### empty

▸ **empty**<`T`, `TKey`\>(): readonly `T`[]

Return an Container that emits no items.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` = `number` |

#### Returns

readonly `T`[]

___

### fromEnumerable

▸ **fromEnumerable**<`T`\>(): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>, readonly `T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>, readonly `T`[]\>

___

### fromFactory

▸ **fromFactory**<`T`\>(): [`Function1`](functions.md#function1)<[`Factory`](functions.md#factory)<`T`\>, readonly `T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`Factory`](functions.md#factory)<`T`\>, readonly `T`[]\>

___

### fromIterable

▸ **fromIterable**<`T`\>(): [`Function1`](functions.md#function1)<`Iterable`<`T`\>, readonly `T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<`Iterable`<`T`\>, readonly `T`[]\>

___

### fromOptional

▸ **fromOptional**<`T`\>(): [`Function1`](functions.md#function1)<[`Optional`](functions.md#optional)<`T`\>, readonly `T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`Optional`](functions.md#optional)<`T`\>, readonly `T`[]\>

___

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`\>(`options?`): [`Function1`](functions.md#function1)<readonly `T`[], readonly `T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |
| `options.start?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], readonly `T`[]\>

___

### fromValue

▸ **fromValue**<`T`\>(): [`Function1`](functions.md#function1)<`T`, readonly `T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<`T`, readonly `T`[]\>

___

## Operator Functions

### buffer

▸ **buffer**<`T`\>(`options?`): [`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `T`, readonly `T`[], `number`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `T`, readonly `T`[], `number`\>

___

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `T`, `T`, `number`\>

Returns a ContainerOperator that emits all items emitted by the source that
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

[`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `T`, `T`, `number`\>

___

### forEach

▸ **forEach**<`T`, `TKey`\>(`effect`): [`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `T`, `T`, `TKey`\>

Returns a ContainerOperator that applies the side effect function to each
value emitted by the source.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` = `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect1`](functions.md#sideeffect1)<`T`\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `T`, `T`, `TKey`\>

___

### forEachWithKey

▸ **forEachWithKey**<`T`, `TKey`\>(`effect`): [`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `T`, `T`, `TKey`\>

Returns a ContainerOperator that applies the side effect function to each
value emitted by the source.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` = `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect2`](functions.md#sideeffect2)<`T`, `TKey`\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `T`, `T`, `TKey`\>

___

### keep

▸ **keep**<`T`, `TKey`\>(`predicate`): [`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `T`, `T`, `TKey`\>

Returns a ContainerOperator that only emits items produced by the
source that satisfy the specified predicate.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` = `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `T`, `T`, `TKey`\>

___

### keepWithKey

▸ **keepWithKey**<`T`, `TKey`\>(`predicate`): [`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `T`, `T`, `TKey`\>

Returns a ContainerOperator that only emits items produced by the
source that satisfy the specified predicate.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` = `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Function2`](functions.md#function2)<`T`, `TKey`, `boolean`\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `T`, `T`, `TKey`\>

___

### map

▸ **map**<`TA`, `TB`, `TKey`\>(`selector`): [`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `TA`, `TB`, `TKey`\>

Returns a ContainerOperator that applies the `selector` function to each
value emitted by the source.

**`Typeparam`**

TA - The inner type of the source container

**`Typeparam`**

TB - The inner type of the mapped container

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TA` | `TA` |
| `TB` | `TB` |
| `TKey` | extends `number` = `number` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, `TB`\> | A pure map function that is applied each value emitted by the source |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `TA`, `TB`, `TKey`\>

___

### mapWithKey

▸ **mapWithKey**<`TA`, `TB`, `TKey`\>(`selector`): [`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `TA`, `TB`, `TKey`\>

Returns a ContainerOperator that applies the `selector` function to each
value emitted by the source.

**`Typeparam`**

TA - The inner type of the source container

**`Typeparam`**

TB - The inner type of the mapped container

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TA` | `TA` |
| `TB` | `TB` |
| `TKey` | extends `number` = `number` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | [`Function2`](functions.md#function2)<`TA`, `TKey`, `TB`\> | A pure map function that is applied each value emitted by the source |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `TA`, `TB`, `TKey`\>

___

### pairwise

▸ **pairwise**<`T`\>(): [`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `T`, [`Tuple2`](functions.md#tuple2)<`T`, `T`\>, `number`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `T`, [`Tuple2`](functions.md#tuple2)<`T`, `T`\>, `number`\>

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `T`, `TAcc`, `number`\>

Returns a Container that applies an accumulator function over the source,
and emits each intermediate result.

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scanner` | [`Reducer`](functions.md#reducer)<`T`, `TAcc`\> | The accumulator function called on each source value. |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc`\> | The initial accumulation value. |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `T`, `TAcc`, `number`\>

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `T`, `T`, `number`\>

Returns a Container that skips the first count items emitted by the source.

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

[`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `T`, `T`, `number`\>

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `T`, `T`, `number`\>

Returns a Container that only emits the first `count` values emitted by the source.

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

[`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `T`, `T`, `number`\>

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `T`, `T`, `number`\>

Returns a Container that only emits the last `count` items emitted by the source.

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

[`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `T`, `T`, `number`\>

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `T`, `T`, `number`\>

Returns a Container which emits values emitted by the source as long
as each value satisfies the given predicate, and then completes as soon as
this predicate is not satisfied.

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

[`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `T`, `T`, `number`\>

___

## Transform Functions

### entries

▸ **entries**<`T`, `TKey`\>(): [`Function1`](functions.md#function1)<readonly `T`[], [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<[`Tuple2`](functions.md#tuple2)<`TKey`, `T`\>\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` = `number` |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<[`Tuple2`](functions.md#tuple2)<`TKey`, `T`\>\>\>

___

### enumerate

▸ **enumerate**<`T`\>(`options?`): [`Function1`](functions.md#function1)<readonly `T`[], [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |
| `options.start?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>\>

___

### keySet

▸ **keySet**<`TKey`\>(): [`Function1`](functions.md#function1)<readonly `unknown`[], `ReadonlySet`<`TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `number` |

#### Returns

[`Function1`](functions.md#function1)<readonly `unknown`[], `ReadonlySet`<`TKey`\>\>

___

### keys

▸ **keys**<`TKey`\>(): [`Function1`](functions.md#function1)<readonly `unknown`[], [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `number` |

#### Returns

[`Function1`](functions.md#function1)<readonly `unknown`[], [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TKey`\>\>

___

### reduce

▸ **reduce**<`T`, `TAcc`, `TKey`\>(`reducer`, `initialValue`): [`Function1`](functions.md#function1)<readonly `T`[], `TAcc`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TAcc` | `TAcc` |
| `TKey` | extends `number` = `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Reducer`](functions.md#reducer)<`T`, `TAcc`\> |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc`\> |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], `TAcc`\>

___

### reduceWithKey

▸ **reduceWithKey**<`T`, `TAcc`, `TKey`\>(`reducer`, `initialValue`): [`Function1`](functions.md#function1)<readonly `T`[], `TAcc`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TAcc` | `TAcc` |
| `TKey` | extends `number` = `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Function3`](functions.md#function3)<`TAcc`, `T`, `TKey`, `TAcc`\> |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc`\> |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], `TAcc`\>

___

### toDictionary

▸ **toDictionary**<`T`, `TKey`\>(): [`Function1`](functions.md#function1)<readonly `T`[], [`DictionaryLike`](../interfaces/types.DictionaryLike.md)<`TKey`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], [`DictionaryLike`](../interfaces/types.DictionaryLike.md)<`TKey`, `T`\>\>

___

### toEventSource

▸ **toEventSource**<`T`\>(`options?`): [`Function1`](functions.md#function1)<readonly `T`[], [`EventSourceLike`](../interfaces/types.EventSourceLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |
| `options.start?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], [`EventSourceLike`](../interfaces/types.EventSourceLike.md)<`T`\>\>

___

### toIndexedCollection

▸ **toIndexedCollection**<`T`\>(`options?`): [`Function1`](functions.md#function1)<readonly `T`[], [`IndexedCollectionLike`](../interfaces/types.IndexedCollectionLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |
| `options.start?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], [`IndexedCollectionLike`](../interfaces/types.IndexedCollectionLike.md)<`T`\>\>

___

### toIterable

▸ **toIterable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<readonly `T`[], `Iterable`<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |
| `options.start?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], `Iterable`<`T`\>\>

___

### toObservable

▸ **toObservable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<readonly `T`[], [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |
| `options.start?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(`options?`): [`Function1`](functions.md#function1)<readonly `T`[], readonly `T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |
| `options.start?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], readonly `T`[]\>

___

### toReadonlyMap

▸ **toReadonlyMap**<`T`, `TKey`\>(): [`Function1`](functions.md#function1)<readonly `T`[], `ReadonlyMap`<`TKey`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], `ReadonlyMap`<`TKey`, `T`\>\>

___

### values

▸ **values**<`T`, `TKey`\>(): [`Function1`](functions.md#function1)<readonly `T`[], [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` = `number` |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>
