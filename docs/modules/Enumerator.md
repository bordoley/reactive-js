[Reactive-JS](../README.md) / Enumerator

# Module: Enumerator

## Table of contents

### Container Interfaces

- [EnumeratorContainer](../interfaces/Enumerator.EnumeratorContainer.md)

### Other Interfaces

- [EnumeratorModule](../interfaces/Enumerator.EnumeratorModule.md)

### Type Aliases

- [Signature](Enumerator.md#signature)
- [Type](Enumerator.md#type)

### Constructor Functions

- [concat](Enumerator.md#concat)
- [empty](Enumerator.md#empty)
- [fromEnumerable](Enumerator.md#fromenumerable)
- [fromEnumeratorFactory](Enumerator.md#fromenumeratorfactory)
- [fromFactory](Enumerator.md#fromfactory)
- [fromIterable](Enumerator.md#fromiterable)
- [fromOptional](Enumerator.md#fromoptional)
- [fromReadonlyArray](Enumerator.md#fromreadonlyarray)
- [fromValue](Enumerator.md#fromvalue)
- [zip](Enumerator.md#zip)

### Operator Functions

- [buffer](Enumerator.md#buffer)
- [concatAll](Enumerator.md#concatall)
- [concatMap](Enumerator.md#concatmap)
- [concatWith](Enumerator.md#concatwith)
- [distinctUntilChanged](Enumerator.md#distinctuntilchanged)
- [endWith](Enumerator.md#endwith)
- [flatMapIterable](Enumerator.md#flatmapiterable)
- [forEach](Enumerator.md#foreach)
- [ignoreElements](Enumerator.md#ignoreelements)
- [keep](Enumerator.md#keep)
- [keepType](Enumerator.md#keeptype)
- [map](Enumerator.md#map)
- [mapTo](Enumerator.md#mapto)
- [pairwise](Enumerator.md#pairwise)
- [pick](Enumerator.md#pick)
- [scan](Enumerator.md#scan)
- [skipFirst](Enumerator.md#skipfirst)
- [startWith](Enumerator.md#startwith)
- [takeFirst](Enumerator.md#takefirst)
- [takeLast](Enumerator.md#takelast)
- [takeWhile](Enumerator.md#takewhile)
- [zipWith](Enumerator.md#zipwith)

### Other Functions

- [toObservable](Enumerator.md#toobservable)

### Transform Functions

- [contains](Enumerator.md#contains)
- [everySatisfy](Enumerator.md#everysatisfy)
- [first](Enumerator.md#first)
- [last](Enumerator.md#last)
- [noneSatisfy](Enumerator.md#nonesatisfy)
- [reduce](Enumerator.md#reduce)
- [someSatisfy](Enumerator.md#somesatisfy)
- [toReadonlyArray](Enumerator.md#toreadonlyarray)

## Type Aliases

### Signature

Ƭ **Signature**: [`EnumeratorModule`](../interfaces/Enumerator.EnumeratorModule.md)

___

### Type

Ƭ **Type**: [`EnumeratorContainer`](../interfaces/Enumerator.EnumeratorContainer.md)

## Constructor Functions

### concat

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>

Returns a Container which emits all values from each source sequentially.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\> |
| `snd` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\> |
| `...tail` | readonly [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>[] |

#### Returns

[`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>

___

### empty

▸ **empty**<`T`\>(): [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>

Return an Container that emits no items.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>

___

### fromEnumerable

▸ **fromEnumerable**<`T`\>(): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>, [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>, [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>\>

___

### fromEnumeratorFactory

▸ **fromEnumeratorFactory**<`T`\>(): [`Function1`](functions.md#function1)<[`Factory`](functions.md#factory)<[`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>\>, [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`Factory`](functions.md#factory)<[`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>\>, [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>\>

___

### fromFactory

▸ **fromFactory**<`T`\>(): [`Function1`](functions.md#function1)<[`Factory`](functions.md#factory)<`T`\>, [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`Factory`](functions.md#factory)<`T`\>, [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>\>

___

### fromIterable

▸ **fromIterable**<`T`\>(): [`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>\>

___

### fromOptional

▸ **fromOptional**<`T`\>(): [`Function1`](functions.md#function1)<[`Optional`](functions.md#optional)<`T`\>, [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`Optional`](functions.md#optional)<`T`\>, [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>\>

___

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`\>(`options?`): [`Function1`](functions.md#function1)<readonly `T`[], [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>\>

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

### fromValue

▸ **fromValue**<`T`\>(): [`Function1`](functions.md#function1)<`T`, [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<`T`, [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>\>

___

### zip

▸ **zip**<`TA`, `TB`\>(`a`, `b`): [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<readonly [`TA`, `TB`]\>

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
| `a` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TA`\> |
| `b` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TB`\> |

#### Returns

[`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<readonly [`TA`, `TB`]\>

▸ **zip**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TA`\> |
| `b` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TB`\> |
| `c` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TC`\> |

#### Returns

[`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TA`\> |
| `b` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TB`\> |
| `c` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TC`\> |
| `d` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TD`\> |

#### Returns

[`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TA`\> |
| `b` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TB`\> |
| `c` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TC`\> |
| `d` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TD`\> |
| `e` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TE`\> |

#### Returns

[`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TA`\> |
| `b` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TB`\> |
| `c` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TC`\> |
| `d` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TD`\> |
| `e` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TE`\> |
| `f` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TF`\> |

#### Returns

[`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TA`\> |
| `b` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TB`\> |
| `c` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TC`\> |
| `d` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TD`\> |
| `e` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TE`\> |
| `f` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TF`\> |
| `g` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TG`\> |

#### Returns

[`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TA`\> |
| `b` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TB`\> |
| `c` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TC`\> |
| `d` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TD`\> |
| `e` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TE`\> |
| `f` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TF`\> |
| `g` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TG`\> |
| `h` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TH`\> |

#### Returns

[`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TA`\> |
| `b` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TB`\> |
| `c` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TC`\> |
| `d` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TD`\> |
| `e` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TE`\> |
| `f` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TF`\> |
| `g` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TG`\> |
| `h` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TH`\> |
| `i` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TI`\> |

#### Returns

[`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

## Operator Functions

### buffer

▸ **buffer**<`T`\>(`options?`): [`ContainerOperator`](types.md#containeroperator)<[`EnumeratorContainer`](../interfaces/Enumerator.EnumeratorContainer.md), `T`, readonly `T`[]\>

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

[`ContainerOperator`](types.md#containeroperator)<[`EnumeratorContainer`](../interfaces/Enumerator.EnumeratorContainer.md), `T`, readonly `T`[]\>

___

### concatAll

▸ **concatAll**<`T`\>(): [`ContainerOperator`](types.md#containeroperator)<[`EnumeratorContainer`](../interfaces/Enumerator.EnumeratorContainer.md), [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>, `T`\>

Converts a higher-order Container into a first-order
Container by concatenating the inner sources in order.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`EnumeratorContainer`](../interfaces/Enumerator.EnumeratorContainer.md), [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>, `T`\>

___

### concatMap

▸ **concatMap**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](types.md#containeroperator)<[`EnumeratorContainer`](../interfaces/Enumerator.EnumeratorContainer.md), `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TB`\>\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`EnumeratorContainer`](../interfaces/Enumerator.EnumeratorContainer.md), `TA`, `TB`\>

___

### concatWith

▸ **concatWith**<`T`\>(`snd`, `...tail`): [`ContainerOperator`](types.md#containeroperator)<[`EnumeratorContainer`](../interfaces/Enumerator.EnumeratorContainer.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\> |
| `...tail` | readonly [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>[] |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`EnumeratorContainer`](../interfaces/Enumerator.EnumeratorContainer.md), `T`, `T`\>

___

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`ContainerOperator`](types.md#containeroperator)<[`EnumeratorContainer`](../interfaces/Enumerator.EnumeratorContainer.md), `T`, `T`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`EnumeratorContainer`](../interfaces/Enumerator.EnumeratorContainer.md), `T`, `T`\>

___

### endWith

▸ **endWith**<`T`\>(`value`, `...values`): [`ContainerOperator`](types.md#containeroperator)<[`EnumeratorContainer`](../interfaces/Enumerator.EnumeratorContainer.md), `T`, `T`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`EnumeratorContainer`](../interfaces/Enumerator.EnumeratorContainer.md), `T`, `T`\>

___

### flatMapIterable

▸ **flatMapIterable**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](types.md#containeroperator)<[`EnumeratorContainer`](../interfaces/Enumerator.EnumeratorContainer.md), `TA`, `TB`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`EnumeratorContainer`](../interfaces/Enumerator.EnumeratorContainer.md), `TA`, `TB`\>

___

### forEach

▸ **forEach**<`T`\>(`effect`): [`ContainerOperator`](types.md#containeroperator)<[`EnumeratorContainer`](../interfaces/Enumerator.EnumeratorContainer.md), `T`, `T`\>

Returns a ContainerOperator that applies the side effect function to each
value emitted by the source.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect1`](functions.md#sideeffect1)<`T`\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`EnumeratorContainer`](../interfaces/Enumerator.EnumeratorContainer.md), `T`, `T`\>

___

### ignoreElements

▸ **ignoreElements**<`T`\>(): [`ContainerOperator`](types.md#containeroperator)<[`EnumeratorContainer`](../interfaces/Enumerator.EnumeratorContainer.md), `unknown`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`EnumeratorContainer`](../interfaces/Enumerator.EnumeratorContainer.md), `unknown`, `T`\>

___

### keep

▸ **keep**<`T`\>(`predicate`): [`ContainerOperator`](types.md#containeroperator)<[`EnumeratorContainer`](../interfaces/Enumerator.EnumeratorContainer.md), `T`, `T`\>

Returns a ContainerOperator that only emits items produced by the
source that satisfy the specified predicate.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`EnumeratorContainer`](../interfaces/Enumerator.EnumeratorContainer.md), `T`, `T`\>

___

### keepType

▸ **keepType**<`TA`, `TB`\>(`predicate`): [`ContainerOperator`](types.md#containeroperator)<[`EnumeratorContainer`](../interfaces/Enumerator.EnumeratorContainer.md), `TA`, `TB`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`EnumeratorContainer`](../interfaces/Enumerator.EnumeratorContainer.md), `TA`, `TB`\>

___

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](types.md#containeroperator)<[`EnumeratorContainer`](../interfaces/Enumerator.EnumeratorContainer.md), `TA`, `TB`\>

Returns a ContainerOperator that applies the `selector` function to each
value emitted by the source.

**`Typeparam`**

TA - The inner type of the source container

**`Typeparam`**

TB - The inner type of the mapped container

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, `TB`\> | A pure map function that is applied each value emitted by the source |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`EnumeratorContainer`](../interfaces/Enumerator.EnumeratorContainer.md), `TA`, `TB`\>

___

### mapTo

▸ **mapTo**<`TA`, `TB`\>(`value`): [`ContainerOperator`](types.md#containeroperator)<[`EnumeratorContainer`](../interfaces/Enumerator.EnumeratorContainer.md), `TA`, `TB`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`EnumeratorContainer`](../interfaces/Enumerator.EnumeratorContainer.md), `TA`, `TB`\>

___

### pairwise

▸ **pairwise**<`T`\>(): [`ContainerOperator`](types.md#containeroperator)<[`EnumeratorContainer`](../interfaces/Enumerator.EnumeratorContainer.md), `T`, readonly [`T`, `T`]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`EnumeratorContainer`](../interfaces/Enumerator.EnumeratorContainer.md), `T`, readonly [`T`, `T`]\>

___

### pick

▸ **pick**<`T`, `TKey`\>(`key`): [`ContainerOperator`](types.md#containeroperator)<[`EnumeratorContainer`](../interfaces/Enumerator.EnumeratorContainer.md), `T`, `T`[`TKey`]\>

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

[`ContainerOperator`](types.md#containeroperator)<[`EnumeratorContainer`](../interfaces/Enumerator.EnumeratorContainer.md), `T`, `T`[`TKey`]\>

▸ **pick**<`T`, `TKeyA`, `TKeyB`\>(`keyA`, `keyB`): [`ContainerOperator`](types.md#containeroperator)<[`EnumeratorContainer`](../interfaces/Enumerator.EnumeratorContainer.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

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

[`ContainerOperator`](types.md#containeroperator)<[`EnumeratorContainer`](../interfaces/Enumerator.EnumeratorContainer.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

▸ **pick**<`T`, `TKeyA`, `TKeyB`, `TKeyC`\>(`keyA`, `keyB`, `keyC`): [`ContainerOperator`](types.md#containeroperator)<[`EnumeratorContainer`](../interfaces/Enumerator.EnumeratorContainer.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

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

[`ContainerOperator`](types.md#containeroperator)<[`EnumeratorContainer`](../interfaces/Enumerator.EnumeratorContainer.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`ContainerOperator`](types.md#containeroperator)<[`EnumeratorContainer`](../interfaces/Enumerator.EnumeratorContainer.md), `T`, `TAcc`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`EnumeratorContainer`](../interfaces/Enumerator.EnumeratorContainer.md), `T`, `TAcc`\>

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`ContainerOperator`](types.md#containeroperator)<[`EnumeratorContainer`](../interfaces/Enumerator.EnumeratorContainer.md), `T`, `T`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`EnumeratorContainer`](../interfaces/Enumerator.EnumeratorContainer.md), `T`, `T`\>

___

### startWith

▸ **startWith**<`T`\>(`value`, `...values`): [`ContainerOperator`](types.md#containeroperator)<[`EnumeratorContainer`](../interfaces/Enumerator.EnumeratorContainer.md), `T`, `T`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`EnumeratorContainer`](../interfaces/Enumerator.EnumeratorContainer.md), `T`, `T`\>

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`ContainerOperator`](types.md#containeroperator)<[`EnumeratorContainer`](../interfaces/Enumerator.EnumeratorContainer.md), `T`, `T`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`EnumeratorContainer`](../interfaces/Enumerator.EnumeratorContainer.md), `T`, `T`\>

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`ContainerOperator`](types.md#containeroperator)<[`EnumeratorContainer`](../interfaces/Enumerator.EnumeratorContainer.md), `T`, `T`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`EnumeratorContainer`](../interfaces/Enumerator.EnumeratorContainer.md), `T`, `T`\>

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](types.md#containeroperator)<[`EnumeratorContainer`](../interfaces/Enumerator.EnumeratorContainer.md), `T`, `T`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`EnumeratorContainer`](../interfaces/Enumerator.EnumeratorContainer.md), `T`, `T`\>

___

### zipWith

▸ **zipWith**<`TA`, `TB`\>(`b`): [`ContainerOperator`](types.md#containeroperator)<[`EnumeratorContainer`](../interfaces/Enumerator.EnumeratorContainer.md), `TA`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TB`\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`EnumeratorContainer`](../interfaces/Enumerator.EnumeratorContainer.md), `TA`, readonly [`TA`, `TB`]\>

▸ **zipWith**<`TA`, `TB`, `TC`\>(`b`, `c`): [`ContainerOperator`](types.md#containeroperator)<[`EnumeratorContainer`](../interfaces/Enumerator.EnumeratorContainer.md), `TA`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TB`\> |
| `c` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TC`\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`EnumeratorContainer`](../interfaces/Enumerator.EnumeratorContainer.md), `TA`, readonly [`TA`, `TB`, `TC`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`\>(`b`, `c`, `d`): [`ContainerOperator`](types.md#containeroperator)<[`EnumeratorContainer`](../interfaces/Enumerator.EnumeratorContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `b` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TB`\> |
| `c` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TC`\> |
| `d` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TD`\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`EnumeratorContainer`](../interfaces/Enumerator.EnumeratorContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`b`, `c`, `d`, `e`): [`ContainerOperator`](types.md#containeroperator)<[`EnumeratorContainer`](../interfaces/Enumerator.EnumeratorContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `b` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TB`\> |
| `c` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TC`\> |
| `d` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TD`\> |
| `e` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TE`\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`EnumeratorContainer`](../interfaces/Enumerator.EnumeratorContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`b`, `c`, `d`, `e`, `f`): [`ContainerOperator`](types.md#containeroperator)<[`EnumeratorContainer`](../interfaces/Enumerator.EnumeratorContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `b` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TB`\> |
| `c` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TC`\> |
| `d` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TD`\> |
| `e` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TE`\> |
| `f` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TF`\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`EnumeratorContainer`](../interfaces/Enumerator.EnumeratorContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`b`, `c`, `d`, `e`, `f`, `g`): [`ContainerOperator`](types.md#containeroperator)<[`EnumeratorContainer`](../interfaces/Enumerator.EnumeratorContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `b` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TB`\> |
| `c` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TC`\> |
| `d` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TD`\> |
| `e` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TE`\> |
| `f` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TF`\> |
| `g` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TG`\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`EnumeratorContainer`](../interfaces/Enumerator.EnumeratorContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`): [`ContainerOperator`](types.md#containeroperator)<[`EnumeratorContainer`](../interfaces/Enumerator.EnumeratorContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `b` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TB`\> |
| `c` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TC`\> |
| `d` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TD`\> |
| `e` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TE`\> |
| `f` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TF`\> |
| `g` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TG`\> |
| `h` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TH`\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`EnumeratorContainer`](../interfaces/Enumerator.EnumeratorContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`ContainerOperator`](types.md#containeroperator)<[`EnumeratorContainer`](../interfaces/Enumerator.EnumeratorContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `b` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TB`\> |
| `c` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TC`\> |
| `d` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TD`\> |
| `e` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TE`\> |
| `f` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TF`\> |
| `g` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TG`\> |
| `h` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TH`\> |
| `i` | [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TI`\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`EnumeratorContainer`](../interfaces/Enumerator.EnumeratorContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

## Other Functions

### toObservable

▸ **toObservable**<`T`\>(): [`Function1`](functions.md#function1)<[`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

▸ **toObservable**<`T`\>(`options`): [`Function1`](functions.md#function1)<[`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.delay` | `number` |
| `options.delayStart?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>\>

___

## Transform Functions

### contains

▸ **contains**<`T`\>(`value`, `options?`): [`Function1`](functions.md#function1)<[`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>, `boolean`\>

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

[`Function1`](functions.md#function1)<[`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>, `boolean`\>

___

### everySatisfy

▸ **everySatisfy**<`T`\>(`predicate`): [`Function1`](functions.md#function1)<[`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>, `boolean`\>

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

[`Function1`](functions.md#function1)<[`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>, `boolean`\>

___

### first

▸ **first**<`T`\>(): [`Function1`](functions.md#function1)<[`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>, [`Optional`](functions.md#optional)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>, [`Optional`](functions.md#optional)<`T`\>\>

___

### last

▸ **last**<`T`\>(): [`Function1`](functions.md#function1)<[`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>, [`Optional`](functions.md#optional)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>, [`Optional`](functions.md#optional)<`T`\>\>

___

### noneSatisfy

▸ **noneSatisfy**<`T`\>(`predicate`): [`Function1`](functions.md#function1)<[`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](functions.md#function1)<[`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>, `boolean`\>

___

### reduce

▸ **reduce**<`T`, `TAcc`\>(`reducer`, `initialValue`): [`Function1`](functions.md#function1)<[`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>, `TAcc`\>

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

[`Function1`](functions.md#function1)<[`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>, `TAcc`\>

___

### someSatisfy

▸ **someSatisfy**<`T`\>(`predicate`): [`Function1`](functions.md#function1)<[`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](functions.md#function1)<[`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>, `boolean`\>

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(): [`Function1`](functions.md#function1)<[`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>, readonly `T`[]\>

Converts the Container to a `ReadonlyArrayContainer`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>, readonly `T`[]\>
