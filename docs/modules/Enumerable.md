[Reactive-JS](../README.md) / Enumerable

# Module: Enumerable

## Table of contents

### Container Interfaces

- [EnumerableContainer](../interfaces/Enumerable.EnumerableContainer.md)

### Other Interfaces

- [DisposableEnumeratorType](../interfaces/Enumerable.DisposableEnumeratorType.md)
- [EnumerableModule](../interfaces/Enumerable.EnumerableModule.md)

### Type Aliases

- [Signature](Enumerable.md#signature)
- [Type](Enumerable.md#type)

### Constructor Functions

- [concat](Enumerable.md#concat)
- [empty](Enumerable.md#empty)
- [fromEnumerable](Enumerable.md#fromenumerable)
- [fromEnumeratorFactory](Enumerable.md#fromenumeratorfactory)
- [fromFactory](Enumerable.md#fromfactory)
- [fromIterable](Enumerable.md#fromiterable)
- [fromOptional](Enumerable.md#fromoptional)
- [fromReadonlyArray](Enumerable.md#fromreadonlyarray)
- [fromValue](Enumerable.md#fromvalue)
- [zip](Enumerable.md#zip)

### Operator Functions

- [buffer](Enumerable.md#buffer)
- [concatAll](Enumerable.md#concatall)
- [concatMap](Enumerable.md#concatmap)
- [concatWith](Enumerable.md#concatwith)
- [distinctUntilChanged](Enumerable.md#distinctuntilchanged)
- [endWith](Enumerable.md#endwith)
- [flatMapIterable](Enumerable.md#flatmapiterable)
- [forEach](Enumerable.md#foreach)
- [ignoreElements](Enumerable.md#ignoreelements)
- [keep](Enumerable.md#keep)
- [keepType](Enumerable.md#keeptype)
- [map](Enumerable.md#map)
- [mapTo](Enumerable.md#mapto)
- [pairwise](Enumerable.md#pairwise)
- [pick](Enumerable.md#pick)
- [scan](Enumerable.md#scan)
- [skipFirst](Enumerable.md#skipfirst)
- [startWith](Enumerable.md#startwith)
- [takeFirst](Enumerable.md#takefirst)
- [takeLast](Enumerable.md#takelast)
- [takeWhile](Enumerable.md#takewhile)
- [zipWith](Enumerable.md#zipwith)

### Other Functions

- [compute](Enumerable.md#compute)
- [generate](Enumerable.md#generate)
- [throws](Enumerable.md#throws)

### Transform Functions

- [contains](Enumerable.md#contains)
- [enumerate](Enumerable.md#enumerate)
- [everySatisfy](Enumerable.md#everysatisfy)
- [first](Enumerable.md#first)
- [last](Enumerable.md#last)
- [noneSatisfy](Enumerable.md#nonesatisfy)
- [reduce](Enumerable.md#reduce)
- [someSatisfy](Enumerable.md#somesatisfy)
- [toIterable](Enumerable.md#toiterable)
- [toReadonlyArray](Enumerable.md#toreadonlyarray)

## Type Aliases

### Signature

Ƭ **Signature**: [`EnumerableModule`](../interfaces/Enumerable.EnumerableModule.md)

___

### Type

Ƭ **Type**: [`EnumerableContainer`](../interfaces/Enumerable.EnumerableContainer.md)

## Constructor Functions

### concat

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>

Returns a Container which emits all values from each source sequentially.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\> |
| `snd` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\> |
| `...tail` | readonly [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>[] |

#### Returns

[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>

___

### empty

▸ **empty**<`T`\>(): [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>

Return an Container that emits no items.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>

___

### fromEnumerable

▸ **fromEnumerable**<`T`\>(): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

___

### fromEnumeratorFactory

▸ **fromEnumeratorFactory**<`T`\>(): [`Function1`](functions.md#function1)<[`Factory`](functions.md#factory)<[`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>\>, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`Factory`](functions.md#factory)<[`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>\>, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

___

### fromFactory

▸ **fromFactory**<`T`\>(): [`Function1`](functions.md#function1)<[`Factory`](functions.md#factory)<`T`\>, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`Factory`](functions.md#factory)<`T`\>, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

___

### fromIterable

▸ **fromIterable**<`T`\>(): [`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

___

### fromOptional

▸ **fromOptional**<`T`\>(): [`Function1`](functions.md#function1)<[`Optional`](functions.md#optional)<`T`\>, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`Optional`](functions.md#optional)<`T`\>, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

___

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`\>(`options?`): [`Function1`](functions.md#function1)<readonly `T`[], [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

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

### fromValue

▸ **fromValue**<`T`\>(): [`Function1`](functions.md#function1)<`T`, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<`T`, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

___

### zip

▸ **zip**<`TA`, `TB`\>(`a`, `b`): [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<readonly [`TA`, `TB`]\>

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
| `a` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\> |

#### Returns

[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<readonly [`TA`, `TB`]\>

▸ **zip**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TC`\> |

#### Returns

[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TD`\> |

#### Returns

[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TE`\> |

#### Returns

[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TF`\> |

#### Returns

[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TG`\> |

#### Returns

[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TG`\> |
| `h` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TH`\> |

#### Returns

[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TG`\> |
| `h` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TH`\> |
| `i` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TI`\> |

#### Returns

[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

## Operator Functions

### buffer

▸ **buffer**<`T`\>(`options?`): [`ContainerOperator`](types.md#containeroperator)<[`EnumerableContainer`](../interfaces/Enumerable.EnumerableContainer.md), `T`, readonly `T`[]\>

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

[`ContainerOperator`](types.md#containeroperator)<[`EnumerableContainer`](../interfaces/Enumerable.EnumerableContainer.md), `T`, readonly `T`[]\>

___

### concatAll

▸ **concatAll**<`T`\>(): [`ContainerOperator`](types.md#containeroperator)<[`EnumerableContainer`](../interfaces/Enumerable.EnumerableContainer.md), [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>, `T`\>

Converts a higher-order Container into a first-order
Container by concatenating the inner sources in order.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`EnumerableContainer`](../interfaces/Enumerable.EnumerableContainer.md), [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>, `T`\>

___

### concatMap

▸ **concatMap**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](types.md#containeroperator)<[`EnumerableContainer`](../interfaces/Enumerable.EnumerableContainer.md), `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\>\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`EnumerableContainer`](../interfaces/Enumerable.EnumerableContainer.md), `TA`, `TB`\>

___

### concatWith

▸ **concatWith**<`T`\>(`snd`, `...tail`): [`ContainerOperator`](types.md#containeroperator)<[`EnumerableContainer`](../interfaces/Enumerable.EnumerableContainer.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\> |
| `...tail` | readonly [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>[] |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`EnumerableContainer`](../interfaces/Enumerable.EnumerableContainer.md), `T`, `T`\>

___

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`ContainerOperator`](types.md#containeroperator)<[`EnumerableContainer`](../interfaces/Enumerable.EnumerableContainer.md), `T`, `T`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`EnumerableContainer`](../interfaces/Enumerable.EnumerableContainer.md), `T`, `T`\>

___

### endWith

▸ **endWith**<`T`\>(`value`, `...values`): [`ContainerOperator`](types.md#containeroperator)<[`EnumerableContainer`](../interfaces/Enumerable.EnumerableContainer.md), `T`, `T`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`EnumerableContainer`](../interfaces/Enumerable.EnumerableContainer.md), `T`, `T`\>

___

### flatMapIterable

▸ **flatMapIterable**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](types.md#containeroperator)<[`EnumerableContainer`](../interfaces/Enumerable.EnumerableContainer.md), `TA`, `TB`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`EnumerableContainer`](../interfaces/Enumerable.EnumerableContainer.md), `TA`, `TB`\>

___

### forEach

▸ **forEach**<`T`\>(`effect`): [`ContainerOperator`](types.md#containeroperator)<[`EnumerableContainer`](../interfaces/Enumerable.EnumerableContainer.md), `T`, `T`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`EnumerableContainer`](../interfaces/Enumerable.EnumerableContainer.md), `T`, `T`\>

___

### ignoreElements

▸ **ignoreElements**<`T`\>(): [`ContainerOperator`](types.md#containeroperator)<[`EnumerableContainer`](../interfaces/Enumerable.EnumerableContainer.md), `unknown`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`EnumerableContainer`](../interfaces/Enumerable.EnumerableContainer.md), `unknown`, `T`\>

___

### keep

▸ **keep**<`T`\>(`predicate`): [`ContainerOperator`](types.md#containeroperator)<[`EnumerableContainer`](../interfaces/Enumerable.EnumerableContainer.md), `T`, `T`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`EnumerableContainer`](../interfaces/Enumerable.EnumerableContainer.md), `T`, `T`\>

___

### keepType

▸ **keepType**<`TA`, `TB`\>(`predicate`): [`ContainerOperator`](types.md#containeroperator)<[`EnumerableContainer`](../interfaces/Enumerable.EnumerableContainer.md), `TA`, `TB`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`EnumerableContainer`](../interfaces/Enumerable.EnumerableContainer.md), `TA`, `TB`\>

___

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](types.md#containeroperator)<[`EnumerableContainer`](../interfaces/Enumerable.EnumerableContainer.md), `TA`, `TB`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`EnumerableContainer`](../interfaces/Enumerable.EnumerableContainer.md), `TA`, `TB`\>

___

### mapTo

▸ **mapTo**<`TA`, `TB`\>(`value`): [`ContainerOperator`](types.md#containeroperator)<[`EnumerableContainer`](../interfaces/Enumerable.EnumerableContainer.md), `TA`, `TB`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`EnumerableContainer`](../interfaces/Enumerable.EnumerableContainer.md), `TA`, `TB`\>

___

### pairwise

▸ **pairwise**<`T`\>(): [`ContainerOperator`](types.md#containeroperator)<[`EnumerableContainer`](../interfaces/Enumerable.EnumerableContainer.md), `T`, readonly [`T`, `T`]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`EnumerableContainer`](../interfaces/Enumerable.EnumerableContainer.md), `T`, readonly [`T`, `T`]\>

___

### pick

▸ **pick**<`T`, `TKey`\>(`key`): [`ContainerOperator`](types.md#containeroperator)<[`EnumerableContainer`](../interfaces/Enumerable.EnumerableContainer.md), `T`, `T`[`TKey`]\>

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

[`ContainerOperator`](types.md#containeroperator)<[`EnumerableContainer`](../interfaces/Enumerable.EnumerableContainer.md), `T`, `T`[`TKey`]\>

▸ **pick**<`T`, `TKeyA`, `TKeyB`\>(`keyA`, `keyB`): [`ContainerOperator`](types.md#containeroperator)<[`EnumerableContainer`](../interfaces/Enumerable.EnumerableContainer.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

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

[`ContainerOperator`](types.md#containeroperator)<[`EnumerableContainer`](../interfaces/Enumerable.EnumerableContainer.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

▸ **pick**<`T`, `TKeyA`, `TKeyB`, `TKeyC`\>(`keyA`, `keyB`, `keyC`): [`ContainerOperator`](types.md#containeroperator)<[`EnumerableContainer`](../interfaces/Enumerable.EnumerableContainer.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

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

[`ContainerOperator`](types.md#containeroperator)<[`EnumerableContainer`](../interfaces/Enumerable.EnumerableContainer.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`ContainerOperator`](types.md#containeroperator)<[`EnumerableContainer`](../interfaces/Enumerable.EnumerableContainer.md), `T`, `TAcc`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`EnumerableContainer`](../interfaces/Enumerable.EnumerableContainer.md), `T`, `TAcc`\>

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`ContainerOperator`](types.md#containeroperator)<[`EnumerableContainer`](../interfaces/Enumerable.EnumerableContainer.md), `T`, `T`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`EnumerableContainer`](../interfaces/Enumerable.EnumerableContainer.md), `T`, `T`\>

___

### startWith

▸ **startWith**<`T`\>(`value`, `...values`): [`ContainerOperator`](types.md#containeroperator)<[`EnumerableContainer`](../interfaces/Enumerable.EnumerableContainer.md), `T`, `T`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`EnumerableContainer`](../interfaces/Enumerable.EnumerableContainer.md), `T`, `T`\>

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`ContainerOperator`](types.md#containeroperator)<[`EnumerableContainer`](../interfaces/Enumerable.EnumerableContainer.md), `T`, `T`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`EnumerableContainer`](../interfaces/Enumerable.EnumerableContainer.md), `T`, `T`\>

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`ContainerOperator`](types.md#containeroperator)<[`EnumerableContainer`](../interfaces/Enumerable.EnumerableContainer.md), `T`, `T`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`EnumerableContainer`](../interfaces/Enumerable.EnumerableContainer.md), `T`, `T`\>

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](types.md#containeroperator)<[`EnumerableContainer`](../interfaces/Enumerable.EnumerableContainer.md), `T`, `T`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`EnumerableContainer`](../interfaces/Enumerable.EnumerableContainer.md), `T`, `T`\>

___

### zipWith

▸ **zipWith**<`TA`, `TB`\>(`b`): [`ContainerOperator`](types.md#containeroperator)<[`EnumerableContainer`](../interfaces/Enumerable.EnumerableContainer.md), `TA`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`EnumerableContainer`](../interfaces/Enumerable.EnumerableContainer.md), `TA`, readonly [`TA`, `TB`]\>

▸ **zipWith**<`TA`, `TB`, `TC`\>(`b`, `c`): [`ContainerOperator`](types.md#containeroperator)<[`EnumerableContainer`](../interfaces/Enumerable.EnumerableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TC`\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`EnumerableContainer`](../interfaces/Enumerable.EnumerableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`\>(`b`, `c`, `d`): [`ContainerOperator`](types.md#containeroperator)<[`EnumerableContainer`](../interfaces/Enumerable.EnumerableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `b` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TD`\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`EnumerableContainer`](../interfaces/Enumerable.EnumerableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`b`, `c`, `d`, `e`): [`ContainerOperator`](types.md#containeroperator)<[`EnumerableContainer`](../interfaces/Enumerable.EnumerableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `b` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TE`\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`EnumerableContainer`](../interfaces/Enumerable.EnumerableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`b`, `c`, `d`, `e`, `f`): [`ContainerOperator`](types.md#containeroperator)<[`EnumerableContainer`](../interfaces/Enumerable.EnumerableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `b` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TF`\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`EnumerableContainer`](../interfaces/Enumerable.EnumerableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`b`, `c`, `d`, `e`, `f`, `g`): [`ContainerOperator`](types.md#containeroperator)<[`EnumerableContainer`](../interfaces/Enumerable.EnumerableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `b` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TG`\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`EnumerableContainer`](../interfaces/Enumerable.EnumerableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`): [`ContainerOperator`](types.md#containeroperator)<[`EnumerableContainer`](../interfaces/Enumerable.EnumerableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `b` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TG`\> |
| `h` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TH`\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`EnumerableContainer`](../interfaces/Enumerable.EnumerableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`ContainerOperator`](types.md#containeroperator)<[`EnumerableContainer`](../interfaces/Enumerable.EnumerableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `b` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TG`\> |
| `h` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TH`\> |
| `i` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TI`\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`EnumerableContainer`](../interfaces/Enumerable.EnumerableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

## Other Functions

### compute

▸ **compute**<`T`\>(`computation`, `options?`): [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `computation` | [`Factory`](functions.md#factory)<`T`\> |
| `options?` | `Object` |
| `options.mode?` | ``"batched"`` \| ``"combine-latest"`` |

#### Returns

[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>

___

### generate

▸ **generate**<`T`\>(`generator`, `initialValue`): [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>

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

[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>

___

### throws

▸ **throws**<`T`\>(): [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>

___

## Transform Functions

### contains

▸ **contains**<`T`\>(`value`, `options?`): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>, `boolean`\>

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

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>, `boolean`\>

___

### enumerate

▸ **enumerate**<`T`\>(): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>, [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\> & [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>, [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\> & [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

___

### everySatisfy

▸ **everySatisfy**<`T`\>(`predicate`): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>, `boolean`\>

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

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>, `boolean`\>

___

### first

▸ **first**<`T`\>(): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>, [`Optional`](functions.md#optional)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>, [`Optional`](functions.md#optional)<`T`\>\>

___

### last

▸ **last**<`T`\>(): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>, [`Optional`](functions.md#optional)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>, [`Optional`](functions.md#optional)<`T`\>\>

___

### noneSatisfy

▸ **noneSatisfy**<`T`\>(`predicate`): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>, `boolean`\>

___

### reduce

▸ **reduce**<`T`, `TAcc`\>(`reducer`, `initialValue`): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>, `TAcc`\>

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

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>, `TAcc`\>

___

### someSatisfy

▸ **someSatisfy**<`T`\>(`predicate`): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>, `boolean`\>

___

### toIterable

▸ **toIterable**<`T`\>(): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>, `Iterable`<`T`\>\>

Converts the Container to a `IterableLike`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>, `Iterable`<`T`\>\>

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>, readonly `T`[]\>

Converts the Container to a `ReadonlyArrayContainer`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>, readonly `T`[]\>
