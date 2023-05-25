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

- [concat](ReadonlyArray.md#concat)
- [empty](ReadonlyArray.md#empty)
- [fromEnumerable](ReadonlyArray.md#fromenumerable)
- [fromFactory](ReadonlyArray.md#fromfactory)
- [fromOptional](ReadonlyArray.md#fromoptional)
- [fromReadonlyArray](ReadonlyArray.md#fromreadonlyarray)
- [fromValue](ReadonlyArray.md#fromvalue)
- [zip](ReadonlyArray.md#zip)

### Operator Functions

- [buffer](ReadonlyArray.md#buffer)
- [concatAll](ReadonlyArray.md#concatall)
- [concatMap](ReadonlyArray.md#concatmap)
- [concatWith](ReadonlyArray.md#concatwith)
- [distinctUntilChanged](ReadonlyArray.md#distinctuntilchanged)
- [endWith](ReadonlyArray.md#endwith)
- [flatMapIterable](ReadonlyArray.md#flatmapiterable)
- [forEach](ReadonlyArray.md#foreach)
- [forEachWithKey](ReadonlyArray.md#foreachwithkey)
- [keep](ReadonlyArray.md#keep)
- [keepType](ReadonlyArray.md#keeptype)
- [keepWithKey](ReadonlyArray.md#keepwithkey)
- [map](ReadonlyArray.md#map)
- [mapTo](ReadonlyArray.md#mapto)
- [mapWithKey](ReadonlyArray.md#mapwithkey)
- [pairwise](ReadonlyArray.md#pairwise)
- [pick](ReadonlyArray.md#pick)
- [repeat](ReadonlyArray.md#repeat)
- [scan](ReadonlyArray.md#scan)
- [skipFirst](ReadonlyArray.md#skipfirst)
- [startWith](ReadonlyArray.md#startwith)
- [takeFirst](ReadonlyArray.md#takefirst)
- [takeLast](ReadonlyArray.md#takelast)
- [takeWhile](ReadonlyArray.md#takewhile)
- [zipWith](ReadonlyArray.md#zipwith)

### Other Functions

- [flow](ReadonlyArray.md#flow)
- [fromIterable](ReadonlyArray.md#fromiterable)

### Transform Functions

- [contains](ReadonlyArray.md#contains)
- [entries](ReadonlyArray.md#entries)
- [enumerate](ReadonlyArray.md#enumerate)
- [everySatisfy](ReadonlyArray.md#everysatisfy)
- [first](ReadonlyArray.md#first)
- [last](ReadonlyArray.md#last)
- [noneSatisfy](ReadonlyArray.md#nonesatisfy)
- [reduce](ReadonlyArray.md#reduce)
- [reduceWithKey](ReadonlyArray.md#reducewithkey)
- [someSatisfy](ReadonlyArray.md#somesatisfy)
- [toIterable](ReadonlyArray.md#toiterable)
- [toObservable](ReadonlyArray.md#toobservable)
- [toReadonlyArray](ReadonlyArray.md#toreadonlyarray)
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

### concat

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): readonly `T`[]

Returns a Container which emits all values from each source sequentially.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | readonly `T`[] |
| `snd` | readonly `T`[] |
| `...tail` | readonly readonly T[][] |

#### Returns

readonly `T`[]

___

### empty

▸ **empty**<`T`\>(): readonly `T`[]

Return an Container that emits no items.

#### Type parameters

| Name |
| :------ |
| `T` |

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

### zip

▸ **zip**<`TA`, `TB`\>(`a`, `b`): readonly readonly [`TA`, `TB`][]

Combines multiple sources to create a Container whose values are calculated from the values,
in order, of each of its input sources.

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | readonly `TA`[] |
| `b` | readonly `TB`[] |

#### Returns

readonly readonly [`TA`, `TB`][]

▸ **zip**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): readonly readonly [`TA`, `TB`, `TC`][]

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | readonly `TA`[] |
| `b` | readonly `TB`[] |
| `c` | readonly `TC`[] |

#### Returns

readonly readonly [`TA`, `TB`, `TC`][]

▸ **zip**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): readonly readonly [`TA`, `TB`, `TC`, `TD`][]

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
| `a` | readonly `TA`[] |
| `b` | readonly `TB`[] |
| `c` | readonly `TC`[] |
| `d` | readonly `TD`[] |

#### Returns

readonly readonly [`TA`, `TB`, `TC`, `TD`][]

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): readonly readonly [`TA`, `TB`, `TC`, `TD`, `TE`][]

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
| `a` | readonly `TA`[] |
| `b` | readonly `TB`[] |
| `c` | readonly `TC`[] |
| `d` | readonly `TD`[] |
| `e` | readonly `TE`[] |

#### Returns

readonly readonly [`TA`, `TB`, `TC`, `TD`, `TE`][]

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): readonly readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`][]

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
| `a` | readonly `TA`[] |
| `b` | readonly `TB`[] |
| `c` | readonly `TC`[] |
| `d` | readonly `TD`[] |
| `e` | readonly `TE`[] |
| `f` | readonly `TF`[] |

#### Returns

readonly readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`][]

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): readonly readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`][]

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
| `a` | readonly `TA`[] |
| `b` | readonly `TB`[] |
| `c` | readonly `TC`[] |
| `d` | readonly `TD`[] |
| `e` | readonly `TE`[] |
| `f` | readonly `TF`[] |
| `g` | readonly `TG`[] |

#### Returns

readonly readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`][]

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): readonly readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`][]

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
| `a` | readonly `TA`[] |
| `b` | readonly `TB`[] |
| `c` | readonly `TC`[] |
| `d` | readonly `TD`[] |
| `e` | readonly `TE`[] |
| `f` | readonly `TF`[] |
| `g` | readonly `TG`[] |
| `h` | readonly `TH`[] |

#### Returns

readonly readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`][]

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): readonly readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`][]

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
| `a` | readonly `TA`[] |
| `b` | readonly `TB`[] |
| `c` | readonly `TC`[] |
| `d` | readonly `TD`[] |
| `e` | readonly `TE`[] |
| `f` | readonly `TF`[] |
| `g` | readonly `TG`[] |
| `h` | readonly `TH`[] |
| `i` | readonly `TI`[] |

#### Returns

readonly readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`][]

___

## Operator Functions

### buffer

▸ **buffer**<`T`\>(`options?`): [`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `T`, readonly `T`[]\>

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

[`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `T`, readonly `T`[]\>

___

### concatAll

▸ **concatAll**<`T`\>(): [`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), readonly `T`[], `T`\>

Converts a higher-order Container into a first-order
Container by concatenating the inner sources in order.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), readonly `T`[], `T`\>

___

### concatMap

▸ **concatMap**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, readonly `TB`[]\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `TA`, `TB`\>

___

### concatWith

▸ **concatWith**<`T`\>(`snd`, `...tail`): [`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | readonly `T`[] |
| `...tail` | readonly readonly T[][] |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `T`, `T`\>

___

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `T`, `T`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `T`, `T`\>

___

### endWith

▸ **endWith**<`T`\>(`value`, `...values`): [`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `T`, `T`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `T`, `T`\>

___

### flatMapIterable

▸ **flatMapIterable**<`TA`, `TB`\>(`selector`): [`Function1`](functions.md#function1)<readonly `TA`[], readonly `TB`[]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, `Iterable`<`TB`\>\> |

#### Returns

[`Function1`](functions.md#function1)<readonly `TA`[], readonly `TB`[]\>

___

### forEach

▸ **forEach**<`T`, `TKey`\>(`effect`): [`KeyedContainerOperator`](types.md#keyedcontaineroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `TKey`, `T`, `T`\>

Returns a ContainerOperator that applies the side effect function to each
value emitted by the source.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect1`](functions.md#sideeffect1)<`T`\> |

#### Returns

[`KeyedContainerOperator`](types.md#keyedcontaineroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `TKey`, `T`, `T`\>

___

### forEachWithKey

▸ **forEachWithKey**<`T`, `TKey`\>(`effect`): [`KeyedContainerOperator`](types.md#keyedcontaineroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `TKey`, `T`, `T`\>

Returns a KeyedContainerOperator that applies the side effect function to each
value emitted by the source.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect2`](functions.md#sideeffect2)<`T`, `TKey`\> |

#### Returns

[`KeyedContainerOperator`](types.md#keyedcontaineroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `TKey`, `T`, `T`\>

___

### keep

▸ **keep**<`T`, `TKey`\>(`predicate`): [`KeyedContainerOperator`](types.md#keyedcontaineroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `TKey`, `T`, `T`\>

Returns a ContainerOperator that only emits items produced by the
source that satisfy the specified predicate.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`KeyedContainerOperator`](types.md#keyedcontaineroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `TKey`, `T`, `T`\>

___

### keepType

▸ **keepType**<`TA`, `TB`\>(`predicate`): [`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `TA`, `TB`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `TA`, `TB`\>

▸ **keepType**<`TA`, `TB`, `TKey`\>(`predicate`): [`KeyedContainerOperator`](types.md#keyedcontaineroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `TKey`, `TA`, `TB`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TA` | `TA` |
| `TB` | `TB` |
| `TKey` | extends `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`TypePredicate`](functions.md#typepredicate)<`TA`, `TB`\> |

#### Returns

[`KeyedContainerOperator`](types.md#keyedcontaineroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `TKey`, `TA`, `TB`\>

___

### keepWithKey

▸ **keepWithKey**<`T`, `TKey`\>(`predicate`): [`KeyedContainerOperator`](types.md#keyedcontaineroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `TKey`, `T`, `T`\>

Returns a ContainerOperator that only emits items produced by the
source that satisfy the specified predicate.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Function2`](functions.md#function2)<`T`, `TKey`, `boolean`\> |

#### Returns

[`KeyedContainerOperator`](types.md#keyedcontaineroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `TKey`, `T`, `T`\>

___

### map

▸ **map**<`TA`, `TB`, `TKey`\>(`selector`): [`KeyedContainerOperator`](types.md#keyedcontaineroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `TKey`, `TA`, `TB`\>

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
| `TKey` | extends `number` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, `TB`\> | A pure map function that is applied each value emitted by the source |

#### Returns

[`KeyedContainerOperator`](types.md#keyedcontaineroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `TKey`, `TA`, `TB`\>

___

### mapTo

▸ **mapTo**<`TA`, `TB`\>(`value`): [`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `TA`, `TB`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `TA`, `TB`\>

___

### mapWithKey

▸ **mapWithKey**<`TA`, `TB`, `TKey`\>(`selector`): [`KeyedContainerOperator`](types.md#keyedcontaineroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `TKey`, `TA`, `TB`\>

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
| `TKey` | extends `number` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | [`Function2`](functions.md#function2)<`TA`, `TKey`, `TB`\> | A pure map function that is applied each value emitted by the source |

#### Returns

[`KeyedContainerOperator`](types.md#keyedcontaineroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `TKey`, `TA`, `TB`\>

___

### pairwise

▸ **pairwise**<`T`\>(): [`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `T`, readonly [`T`, `T`]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `T`, readonly [`T`, `T`]\>

___

### pick

▸ **pick**<`T`, `TKey`\>(`key`): [`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `T`, `T`[`TKey`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `TKey` |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `T`, `T`[`TKey`]\>

▸ **pick**<`T`, `TKeyA`, `TKeyB`\>(`keyA`, `keyB`): [`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKeyA` | extends `string` \| `number` \| `symbol` |
| `TKeyB` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyA` | `TKeyA` |
| `keyB` | `TKeyB` |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

▸ **pick**<`T`, `TKeyA`, `TKeyB`, `TKeyC`\>(`keyA`, `keyB`, `keyC`): [`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKeyA` | extends `string` \| `number` \| `symbol` |
| `TKeyB` | extends `string` \| `number` \| `symbol` |
| `TKeyC` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyA` | `TKeyA` |
| `keyB` | `TKeyB` |
| `keyC` | `TKeyC` |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

___

### repeat

▸ **repeat**<`T`\>(): [`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `T`, `T`\>

▸ **repeat**<`T`\>(`count`): [`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `T`, `T`\>

▸ **repeat**<`T`\>(`predicate`): [`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`number`\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `T`, `T`\>

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `T`, `TAcc`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `T`, `TAcc`\>

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `T`, `T`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `T`, `T`\>

___

### startWith

▸ **startWith**<`T`\>(`value`, `...values`): [`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `T`, `T`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `T`, `T`\>

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `T`, `T`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `T`, `T`\>

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `T`, `T`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `T`, `T`\>

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `T`, `T`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `T`, `T`\>

___

### zipWith

▸ **zipWith**<`TA`, `TB`\>(`b`): [`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `TA`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | readonly `TB`[] |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `TA`, readonly [`TA`, `TB`]\>

▸ **zipWith**<`TA`, `TB`, `TC`\>(`b`, `c`): [`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `TA`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | readonly `TB`[] |
| `c` | readonly `TC`[] |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `TA`, readonly [`TA`, `TB`, `TC`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`\>(`b`, `c`, `d`): [`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `b` | readonly `TB`[] |
| `c` | readonly `TC`[] |
| `d` | readonly `TD`[] |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`b`, `c`, `d`, `e`): [`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `b` | readonly `TB`[] |
| `c` | readonly `TC`[] |
| `d` | readonly `TD`[] |
| `e` | readonly `TE`[] |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`b`, `c`, `d`, `e`, `f`): [`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `b` | readonly `TB`[] |
| `c` | readonly `TC`[] |
| `d` | readonly `TD`[] |
| `e` | readonly `TE`[] |
| `f` | readonly `TF`[] |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`b`, `c`, `d`, `e`, `f`, `g`): [`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `b` | readonly `TB`[] |
| `c` | readonly `TC`[] |
| `d` | readonly `TD`[] |
| `e` | readonly `TE`[] |
| `f` | readonly `TF`[] |
| `g` | readonly `TG`[] |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`): [`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `b` | readonly `TB`[] |
| `c` | readonly `TC`[] |
| `d` | readonly `TD`[] |
| `e` | readonly `TE`[] |
| `f` | readonly `TF`[] |
| `g` | readonly `TG`[] |
| `h` | readonly `TH`[] |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `b` | readonly `TB`[] |
| `c` | readonly `TC`[] |
| `d` | readonly `TD`[] |
| `e` | readonly `TE`[] |
| `f` | readonly `TF`[] |
| `g` | readonly `TG`[] |
| `h` | readonly `TH`[] |
| `i` | readonly `TI`[] |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`ReadonlyArrayContainer`](../interfaces/ReadonlyArray.ReadonlyArrayContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

## Other Functions

### flow

▸ **flow**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<readonly `T`[], [`PauseableObservableLike`](../interfaces/types.PauseableObservableLike.md)<`T`\> & [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/types.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], [`PauseableObservableLike`](../interfaces/types.PauseableObservableLike.md)<`T`\> & [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

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

## Transform Functions

### contains

▸ **contains**<`T`\>(`value`, `options?`): [`Function1`](functions.md#function1)<readonly `T`[], `boolean`\>

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

[`Function1`](functions.md#function1)<readonly `T`[], `boolean`\>

___

### entries

▸ **entries**<`T`, `TKey`\>(): [`Function1`](functions.md#function1)<readonly `T`[], [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<[`TKey`, `T`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<[`TKey`, `T`]\>\>

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

### everySatisfy

▸ **everySatisfy**<`T`\>(`predicate`): [`Function1`](functions.md#function1)<readonly `T`[], `boolean`\>

Determines whether all the members of an Container satisfy the predicate.
The predicate function is invoked for each element in the Container until the
it returns false, or until the end of the Container.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], `boolean`\>

___

### first

▸ **first**<`T`\>(): [`Function1`](functions.md#function1)<readonly `T`[], [`Optional`](functions.md#optional)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], [`Optional`](functions.md#optional)<`T`\>\>

___

### last

▸ **last**<`T`\>(): [`Function1`](functions.md#function1)<readonly `T`[], [`Optional`](functions.md#optional)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], [`Optional`](functions.md#optional)<`T`\>\>

___

### noneSatisfy

▸ **noneSatisfy**<`T`\>(`predicate`): [`Function1`](functions.md#function1)<readonly `T`[], `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], `boolean`\>

___

### reduce

▸ **reduce**<`T`, `TAcc`, `TKey`\>(`reducer`, `initialValue`): [`Function1`](functions.md#function1)<readonly `T`[], `TAcc`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TAcc` | `TAcc` |
| `TKey` | extends `number` |

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
| `TKey` | extends `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Function3`](functions.md#function3)<`TAcc`, `T`, `TKey`, `TAcc`\> |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc`\> |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], `TAcc`\>

___

### someSatisfy

▸ **someSatisfy**<`T`\>(`predicate`): [`Function1`](functions.md#function1)<readonly `T`[], `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], `boolean`\>

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

▸ **toObservable**<`T`\>(): [`Function1`](functions.md#function1)<readonly `T`[], [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

▸ **toObservable**<`T`\>(`options`): [`Function1`](functions.md#function1)<readonly `T`[], [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.count` | `number` |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

▸ **toObservable**<`T`\>(`options`): [`Function1`](functions.md#function1)<readonly `T`[], [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.count` | `number` |
| `options.start` | `number` |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

▸ **toObservable**<`T`\>(`options`): [`Function1`](functions.md#function1)<readonly `T`[], [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.start` | `number` |

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

### values

▸ **values**<`T`\>(): [`Function1`](functions.md#function1)<readonly `T`[], [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>
