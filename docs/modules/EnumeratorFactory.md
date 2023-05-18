[Reactive-JS](../README.md) / EnumeratorFactory

# Module: EnumeratorFactory

## Table of contents

### Container Interfaces

- [EnumeratorFactoryContainer](../interfaces/EnumeratorFactory.EnumeratorFactoryContainer.md)

### Other Interfaces

- [EnumeratorFactoryModule](../interfaces/EnumeratorFactory.EnumeratorFactoryModule.md)

### Type Aliases

- [Signature](EnumeratorFactory.md#signature)
- [Type](EnumeratorFactory.md#type)

### Constructor Functions

- [concat](EnumeratorFactory.md#concat)
- [empty](EnumeratorFactory.md#empty)
- [fromEnumerable](EnumeratorFactory.md#fromenumerable)
- [fromEnumeratorFactory](EnumeratorFactory.md#fromenumeratorfactory)
- [fromFactory](EnumeratorFactory.md#fromfactory)
- [fromIterable](EnumeratorFactory.md#fromiterable)
- [fromOptional](EnumeratorFactory.md#fromoptional)
- [fromReadonlyArray](EnumeratorFactory.md#fromreadonlyarray)
- [fromValue](EnumeratorFactory.md#fromvalue)
- [zip](EnumeratorFactory.md#zip)

### Operator Functions

- [buffer](EnumeratorFactory.md#buffer)
- [concatAll](EnumeratorFactory.md#concatall)
- [concatMap](EnumeratorFactory.md#concatmap)
- [concatWith](EnumeratorFactory.md#concatwith)
- [distinctUntilChanged](EnumeratorFactory.md#distinctuntilchanged)
- [endWith](EnumeratorFactory.md#endwith)
- [flatMapIterable](EnumeratorFactory.md#flatmapiterable)
- [forEach](EnumeratorFactory.md#foreach)
- [ignoreElements](EnumeratorFactory.md#ignoreelements)
- [keep](EnumeratorFactory.md#keep)
- [keepType](EnumeratorFactory.md#keeptype)
- [map](EnumeratorFactory.md#map)
- [mapTo](EnumeratorFactory.md#mapto)
- [pairwise](EnumeratorFactory.md#pairwise)
- [pick](EnumeratorFactory.md#pick)
- [repeat](EnumeratorFactory.md#repeat)
- [scan](EnumeratorFactory.md#scan)
- [skipFirst](EnumeratorFactory.md#skipfirst)
- [startWith](EnumeratorFactory.md#startwith)
- [takeFirst](EnumeratorFactory.md#takefirst)
- [takeLast](EnumeratorFactory.md#takelast)
- [takeWhile](EnumeratorFactory.md#takewhile)
- [zipWith](EnumeratorFactory.md#zipwith)

### Other Functions

- [toEnumeratorFactory](EnumeratorFactory.md#toenumeratorfactory)
- [toObservable](EnumeratorFactory.md#toobservable)

### Transform Functions

- [contains](EnumeratorFactory.md#contains)
- [enumerate](EnumeratorFactory.md#enumerate)
- [everySatisfy](EnumeratorFactory.md#everysatisfy)
- [first](EnumeratorFactory.md#first)
- [last](EnumeratorFactory.md#last)
- [noneSatisfy](EnumeratorFactory.md#nonesatisfy)
- [reduce](EnumeratorFactory.md#reduce)
- [someSatisfy](EnumeratorFactory.md#somesatisfy)
- [toIterable](EnumeratorFactory.md#toiterable)
- [toReadonlyArray](EnumeratorFactory.md#toreadonlyarray)

## Type Aliases

### Signature

Ƭ **Signature**: [`EnumeratorFactoryModule`](../interfaces/EnumeratorFactory.EnumeratorFactoryModule.md)

___

### Type

Ƭ **Type**: [`EnumeratorFactoryContainer`](../interfaces/EnumeratorFactory.EnumeratorFactoryContainer.md)

## Constructor Functions

### concat

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`T`\>

Returns a Container which emits all values from each source sequentially.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`T`\> |
| `snd` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`T`\> |
| `...tail` | readonly [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`T`\>[] |

#### Returns

[`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`T`\>

___

### empty

▸ **empty**<`T`\>(): [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`T`\>

Return an Container that emits no items.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`T`\>

___

### fromEnumerable

▸ **fromEnumerable**<`T`\>(): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>, [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>, [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`T`\>\>

___

### fromEnumeratorFactory

▸ **fromEnumeratorFactory**<`T`\>(): [`Function1`](functions.md#function1)<[`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`T`\>, [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`T`\>, [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`T`\>\>

___

### fromFactory

▸ **fromFactory**<`T`\>(): [`Function1`](functions.md#function1)<[`Factory`](functions.md#factory)<`T`\>, [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`Factory`](functions.md#factory)<`T`\>, [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`T`\>\>

___

### fromIterable

▸ **fromIterable**<`T`\>(): [`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`T`\>\>

___

### fromOptional

▸ **fromOptional**<`T`\>(): [`Function1`](functions.md#function1)<[`Optional`](functions.md#optional)<`T`\>, [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`Optional`](functions.md#optional)<`T`\>, [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`T`\>\>

___

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`\>(`options?`): [`Function1`](functions.md#function1)<readonly `T`[], [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`T`\>\>

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

[`Function1`](functions.md#function1)<readonly `T`[], [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`T`\>\>

___

### fromValue

▸ **fromValue**<`T`\>(): [`Function1`](functions.md#function1)<`T`, [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<`T`, [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`T`\>\>

___

### zip

▸ **zip**<`TA`, `TB`\>(`a`, `b`): [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<readonly [`TA`, `TB`]\>

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
| `a` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TA`\> |
| `b` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TB`\> |

#### Returns

[`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<readonly [`TA`, `TB`]\>

▸ **zip**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TA`\> |
| `b` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TB`\> |
| `c` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TC`\> |

#### Returns

[`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<readonly [`TA`, `TB`, `TC`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TA`\> |
| `b` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TB`\> |
| `c` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TC`\> |
| `d` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TD`\> |

#### Returns

[`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TA`\> |
| `b` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TB`\> |
| `c` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TC`\> |
| `d` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TD`\> |
| `e` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TE`\> |

#### Returns

[`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TA`\> |
| `b` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TB`\> |
| `c` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TC`\> |
| `d` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TD`\> |
| `e` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TE`\> |
| `f` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TF`\> |

#### Returns

[`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TA`\> |
| `b` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TB`\> |
| `c` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TC`\> |
| `d` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TD`\> |
| `e` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TE`\> |
| `f` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TF`\> |
| `g` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TG`\> |

#### Returns

[`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TA`\> |
| `b` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TB`\> |
| `c` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TC`\> |
| `d` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TD`\> |
| `e` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TE`\> |
| `f` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TF`\> |
| `g` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TG`\> |
| `h` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TH`\> |

#### Returns

[`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TA`\> |
| `b` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TB`\> |
| `c` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TC`\> |
| `d` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TD`\> |
| `e` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TE`\> |
| `f` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TF`\> |
| `g` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TG`\> |
| `h` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TH`\> |
| `i` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TI`\> |

#### Returns

[`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

## Operator Functions

### buffer

▸ **buffer**<`T`\>(`options?`): [`ContainerOperator`](types.md#containeroperator)<[`EnumeratorFactoryContainer`](../interfaces/EnumeratorFactory.EnumeratorFactoryContainer.md), `T`, readonly `T`[]\>

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

[`ContainerOperator`](types.md#containeroperator)<[`EnumeratorFactoryContainer`](../interfaces/EnumeratorFactory.EnumeratorFactoryContainer.md), `T`, readonly `T`[]\>

___

### concatAll

▸ **concatAll**<`T`\>(): [`ContainerOperator`](types.md#containeroperator)<[`EnumeratorFactoryContainer`](../interfaces/EnumeratorFactory.EnumeratorFactoryContainer.md), [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`T`\>, `T`\>

Converts a higher-order Container into a first-order
Container by concatenating the inner sources in order.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`EnumeratorFactoryContainer`](../interfaces/EnumeratorFactory.EnumeratorFactoryContainer.md), [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`T`\>, `T`\>

___

### concatMap

▸ **concatMap**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](types.md#containeroperator)<[`EnumeratorFactoryContainer`](../interfaces/EnumeratorFactory.EnumeratorFactoryContainer.md), `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TB`\>\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`EnumeratorFactoryContainer`](../interfaces/EnumeratorFactory.EnumeratorFactoryContainer.md), `TA`, `TB`\>

___

### concatWith

▸ **concatWith**<`T`\>(`snd`, `...tail`): [`ContainerOperator`](types.md#containeroperator)<[`EnumeratorFactoryContainer`](../interfaces/EnumeratorFactory.EnumeratorFactoryContainer.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`T`\> |
| `...tail` | readonly [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`T`\>[] |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`EnumeratorFactoryContainer`](../interfaces/EnumeratorFactory.EnumeratorFactoryContainer.md), `T`, `T`\>

___

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`ContainerOperator`](types.md#containeroperator)<[`EnumeratorFactoryContainer`](../interfaces/EnumeratorFactory.EnumeratorFactoryContainer.md), `T`, `T`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`EnumeratorFactoryContainer`](../interfaces/EnumeratorFactory.EnumeratorFactoryContainer.md), `T`, `T`\>

___

### endWith

▸ **endWith**<`T`\>(`value`, `...values`): [`ContainerOperator`](types.md#containeroperator)<[`EnumeratorFactoryContainer`](../interfaces/EnumeratorFactory.EnumeratorFactoryContainer.md), `T`, `T`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`EnumeratorFactoryContainer`](../interfaces/EnumeratorFactory.EnumeratorFactoryContainer.md), `T`, `T`\>

___

### flatMapIterable

▸ **flatMapIterable**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](types.md#containeroperator)<[`EnumeratorFactoryContainer`](../interfaces/EnumeratorFactory.EnumeratorFactoryContainer.md), `TA`, `TB`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`EnumeratorFactoryContainer`](../interfaces/EnumeratorFactory.EnumeratorFactoryContainer.md), `TA`, `TB`\>

___

### forEach

▸ **forEach**<`T`\>(`effect`): [`ContainerOperator`](types.md#containeroperator)<[`EnumeratorFactoryContainer`](../interfaces/EnumeratorFactory.EnumeratorFactoryContainer.md), `T`, `T`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`EnumeratorFactoryContainer`](../interfaces/EnumeratorFactory.EnumeratorFactoryContainer.md), `T`, `T`\>

___

### ignoreElements

▸ **ignoreElements**<`T`\>(): [`ContainerOperator`](types.md#containeroperator)<[`EnumeratorFactoryContainer`](../interfaces/EnumeratorFactory.EnumeratorFactoryContainer.md), `unknown`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`EnumeratorFactoryContainer`](../interfaces/EnumeratorFactory.EnumeratorFactoryContainer.md), `unknown`, `T`\>

___

### keep

▸ **keep**<`T`\>(`predicate`): [`ContainerOperator`](types.md#containeroperator)<[`EnumeratorFactoryContainer`](../interfaces/EnumeratorFactory.EnumeratorFactoryContainer.md), `T`, `T`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`EnumeratorFactoryContainer`](../interfaces/EnumeratorFactory.EnumeratorFactoryContainer.md), `T`, `T`\>

___

### keepType

▸ **keepType**<`TA`, `TB`\>(`predicate`): [`ContainerOperator`](types.md#containeroperator)<[`EnumeratorFactoryContainer`](../interfaces/EnumeratorFactory.EnumeratorFactoryContainer.md), `TA`, `TB`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`EnumeratorFactoryContainer`](../interfaces/EnumeratorFactory.EnumeratorFactoryContainer.md), `TA`, `TB`\>

___

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](types.md#containeroperator)<[`EnumeratorFactoryContainer`](../interfaces/EnumeratorFactory.EnumeratorFactoryContainer.md), `TA`, `TB`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`EnumeratorFactoryContainer`](../interfaces/EnumeratorFactory.EnumeratorFactoryContainer.md), `TA`, `TB`\>

___

### mapTo

▸ **mapTo**<`TA`, `TB`\>(`value`): [`ContainerOperator`](types.md#containeroperator)<[`EnumeratorFactoryContainer`](../interfaces/EnumeratorFactory.EnumeratorFactoryContainer.md), `TA`, `TB`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`EnumeratorFactoryContainer`](../interfaces/EnumeratorFactory.EnumeratorFactoryContainer.md), `TA`, `TB`\>

___

### pairwise

▸ **pairwise**<`T`\>(): [`ContainerOperator`](types.md#containeroperator)<[`EnumeratorFactoryContainer`](../interfaces/EnumeratorFactory.EnumeratorFactoryContainer.md), `T`, readonly [`T`, `T`]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`EnumeratorFactoryContainer`](../interfaces/EnumeratorFactory.EnumeratorFactoryContainer.md), `T`, readonly [`T`, `T`]\>

___

### pick

▸ **pick**<`T`, `TKey`\>(`key`): [`ContainerOperator`](types.md#containeroperator)<[`EnumeratorFactoryContainer`](../interfaces/EnumeratorFactory.EnumeratorFactoryContainer.md), `T`, `T`[`TKey`]\>

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

[`ContainerOperator`](types.md#containeroperator)<[`EnumeratorFactoryContainer`](../interfaces/EnumeratorFactory.EnumeratorFactoryContainer.md), `T`, `T`[`TKey`]\>

▸ **pick**<`T`, `TKeyA`, `TKeyB`\>(`keyA`, `keyB`): [`ContainerOperator`](types.md#containeroperator)<[`EnumeratorFactoryContainer`](../interfaces/EnumeratorFactory.EnumeratorFactoryContainer.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

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

[`ContainerOperator`](types.md#containeroperator)<[`EnumeratorFactoryContainer`](../interfaces/EnumeratorFactory.EnumeratorFactoryContainer.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

▸ **pick**<`T`, `TKeyA`, `TKeyB`, `TKeyC`\>(`keyA`, `keyB`, `keyC`): [`ContainerOperator`](types.md#containeroperator)<[`EnumeratorFactoryContainer`](../interfaces/EnumeratorFactory.EnumeratorFactoryContainer.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

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

[`ContainerOperator`](types.md#containeroperator)<[`EnumeratorFactoryContainer`](../interfaces/EnumeratorFactory.EnumeratorFactoryContainer.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

___

### repeat

▸ **repeat**<`T`\>(`count`): [`ContainerOperator`](types.md#containeroperator)<[`EnumeratorFactoryContainer`](../interfaces/EnumeratorFactory.EnumeratorFactoryContainer.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`EnumeratorFactoryContainer`](../interfaces/EnumeratorFactory.EnumeratorFactoryContainer.md), `T`, `T`\>

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`ContainerOperator`](types.md#containeroperator)<[`EnumeratorFactoryContainer`](../interfaces/EnumeratorFactory.EnumeratorFactoryContainer.md), `T`, `TAcc`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`EnumeratorFactoryContainer`](../interfaces/EnumeratorFactory.EnumeratorFactoryContainer.md), `T`, `TAcc`\>

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`ContainerOperator`](types.md#containeroperator)<[`EnumeratorFactoryContainer`](../interfaces/EnumeratorFactory.EnumeratorFactoryContainer.md), `T`, `T`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`EnumeratorFactoryContainer`](../interfaces/EnumeratorFactory.EnumeratorFactoryContainer.md), `T`, `T`\>

___

### startWith

▸ **startWith**<`T`\>(`value`, `...values`): [`ContainerOperator`](types.md#containeroperator)<[`EnumeratorFactoryContainer`](../interfaces/EnumeratorFactory.EnumeratorFactoryContainer.md), `T`, `T`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`EnumeratorFactoryContainer`](../interfaces/EnumeratorFactory.EnumeratorFactoryContainer.md), `T`, `T`\>

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`ContainerOperator`](types.md#containeroperator)<[`EnumeratorFactoryContainer`](../interfaces/EnumeratorFactory.EnumeratorFactoryContainer.md), `T`, `T`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`EnumeratorFactoryContainer`](../interfaces/EnumeratorFactory.EnumeratorFactoryContainer.md), `T`, `T`\>

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`ContainerOperator`](types.md#containeroperator)<[`EnumeratorFactoryContainer`](../interfaces/EnumeratorFactory.EnumeratorFactoryContainer.md), `T`, `T`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`EnumeratorFactoryContainer`](../interfaces/EnumeratorFactory.EnumeratorFactoryContainer.md), `T`, `T`\>

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](types.md#containeroperator)<[`EnumeratorFactoryContainer`](../interfaces/EnumeratorFactory.EnumeratorFactoryContainer.md), `T`, `T`\>

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

[`ContainerOperator`](types.md#containeroperator)<[`EnumeratorFactoryContainer`](../interfaces/EnumeratorFactory.EnumeratorFactoryContainer.md), `T`, `T`\>

___

### zipWith

▸ **zipWith**<`TA`, `TB`\>(`b`): [`ContainerOperator`](types.md#containeroperator)<[`EnumeratorFactoryContainer`](../interfaces/EnumeratorFactory.EnumeratorFactoryContainer.md), `TA`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TB`\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`EnumeratorFactoryContainer`](../interfaces/EnumeratorFactory.EnumeratorFactoryContainer.md), `TA`, readonly [`TA`, `TB`]\>

▸ **zipWith**<`TA`, `TB`, `TC`\>(`b`, `c`): [`ContainerOperator`](types.md#containeroperator)<[`EnumeratorFactoryContainer`](../interfaces/EnumeratorFactory.EnumeratorFactoryContainer.md), `TA`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TB`\> |
| `c` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TC`\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`EnumeratorFactoryContainer`](../interfaces/EnumeratorFactory.EnumeratorFactoryContainer.md), `TA`, readonly [`TA`, `TB`, `TC`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`\>(`b`, `c`, `d`): [`ContainerOperator`](types.md#containeroperator)<[`EnumeratorFactoryContainer`](../interfaces/EnumeratorFactory.EnumeratorFactoryContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `b` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TB`\> |
| `c` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TC`\> |
| `d` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TD`\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`EnumeratorFactoryContainer`](../interfaces/EnumeratorFactory.EnumeratorFactoryContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`b`, `c`, `d`, `e`): [`ContainerOperator`](types.md#containeroperator)<[`EnumeratorFactoryContainer`](../interfaces/EnumeratorFactory.EnumeratorFactoryContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `b` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TB`\> |
| `c` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TC`\> |
| `d` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TD`\> |
| `e` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TE`\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`EnumeratorFactoryContainer`](../interfaces/EnumeratorFactory.EnumeratorFactoryContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`b`, `c`, `d`, `e`, `f`): [`ContainerOperator`](types.md#containeroperator)<[`EnumeratorFactoryContainer`](../interfaces/EnumeratorFactory.EnumeratorFactoryContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `b` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TB`\> |
| `c` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TC`\> |
| `d` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TD`\> |
| `e` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TE`\> |
| `f` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TF`\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`EnumeratorFactoryContainer`](../interfaces/EnumeratorFactory.EnumeratorFactoryContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`b`, `c`, `d`, `e`, `f`, `g`): [`ContainerOperator`](types.md#containeroperator)<[`EnumeratorFactoryContainer`](../interfaces/EnumeratorFactory.EnumeratorFactoryContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `b` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TB`\> |
| `c` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TC`\> |
| `d` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TD`\> |
| `e` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TE`\> |
| `f` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TF`\> |
| `g` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TG`\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`EnumeratorFactoryContainer`](../interfaces/EnumeratorFactory.EnumeratorFactoryContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`): [`ContainerOperator`](types.md#containeroperator)<[`EnumeratorFactoryContainer`](../interfaces/EnumeratorFactory.EnumeratorFactoryContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `b` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TB`\> |
| `c` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TC`\> |
| `d` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TD`\> |
| `e` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TE`\> |
| `f` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TF`\> |
| `g` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TG`\> |
| `h` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TH`\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`EnumeratorFactoryContainer`](../interfaces/EnumeratorFactory.EnumeratorFactoryContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`ContainerOperator`](types.md#containeroperator)<[`EnumeratorFactoryContainer`](../interfaces/EnumeratorFactory.EnumeratorFactoryContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `b` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TB`\> |
| `c` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TC`\> |
| `d` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TD`\> |
| `e` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TE`\> |
| `f` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TF`\> |
| `g` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TG`\> |
| `h` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TH`\> |
| `i` | [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TI`\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`EnumeratorFactoryContainer`](../interfaces/EnumeratorFactory.EnumeratorFactoryContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

## Other Functions

### toEnumeratorFactory

▸ **toEnumeratorFactory**<`T`\>(): [`Function1`](functions.md#function1)<[`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`T`\>, [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`T`\>, [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`T`\>\>

___

### toObservable

▸ **toObservable**<`T`\>(): [`Function1`](functions.md#function1)<[`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`T`\>, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`T`\>, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

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

▸ **contains**<`T`\>(`value`, `options?`): [`Function1`](functions.md#function1)<[`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`T`\>, `boolean`\>

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

[`Function1`](functions.md#function1)<[`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`T`\>, `boolean`\>

___

### enumerate

▸ **enumerate**<`T`\>(): [`Function1`](functions.md#function1)<[`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`T`\>, [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`T`\>, [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>\>

___

### everySatisfy

▸ **everySatisfy**<`T`\>(`predicate`): [`Function1`](functions.md#function1)<[`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`T`\>, `boolean`\>

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

[`Function1`](functions.md#function1)<[`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`T`\>, `boolean`\>

___

### first

▸ **first**<`T`\>(): [`Function1`](functions.md#function1)<[`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`T`\>, [`Optional`](functions.md#optional)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`T`\>, [`Optional`](functions.md#optional)<`T`\>\>

___

### last

▸ **last**<`T`\>(): [`Function1`](functions.md#function1)<[`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`T`\>, [`Optional`](functions.md#optional)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`T`\>, [`Optional`](functions.md#optional)<`T`\>\>

___

### noneSatisfy

▸ **noneSatisfy**<`T`\>(`predicate`): [`Function1`](functions.md#function1)<[`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`T`\>, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](functions.md#function1)<[`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`T`\>, `boolean`\>

___

### reduce

▸ **reduce**<`T`, `TAcc`\>(`reducer`, `initialValue`): [`Function1`](functions.md#function1)<[`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`T`\>, `TAcc`\>

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

[`Function1`](functions.md#function1)<[`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`T`\>, `TAcc`\>

___

### someSatisfy

▸ **someSatisfy**<`T`\>(`predicate`): [`Function1`](functions.md#function1)<[`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`T`\>, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](functions.md#function1)<[`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`T`\>, `boolean`\>

___

### toIterable

▸ **toIterable**<`T`\>(): [`Function1`](functions.md#function1)<[`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`T`\>, `Iterable`<`T`\>\>

Converts the Container to a `IterableLike`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`T`\>, `Iterable`<`T`\>\>

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(): [`Function1`](functions.md#function1)<[`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`T`\>, readonly `T`[]\>

Converts the Container to a `ReadonlyArrayContainer`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`T`\>, readonly `T`[]\>
