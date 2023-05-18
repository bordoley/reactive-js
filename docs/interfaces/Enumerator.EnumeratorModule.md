[Reactive-JS](../README.md) / [Enumerator](../modules/Enumerator.md) / EnumeratorModule

# Interface: EnumeratorModule

[Enumerator](../modules/Enumerator.md).EnumeratorModule

## Hierarchy

- [`EnumeratorContainerTypeClass`](types.EnumeratorContainerTypeClass.md)<[`Type`](../modules/Enumerator.md#type)\>

  ↳ **`EnumeratorModule`**

## Table of contents

### Constructor Methods

- [concat](Enumerator.EnumeratorModule.md#concat)
- [empty](Enumerator.EnumeratorModule.md#empty)
- [fromEnumerable](Enumerator.EnumeratorModule.md#fromenumerable)
- [fromEnumeratorFactory](Enumerator.EnumeratorModule.md#fromenumeratorfactory)
- [fromFactory](Enumerator.EnumeratorModule.md#fromfactory)
- [fromIterable](Enumerator.EnumeratorModule.md#fromiterable)
- [fromOptional](Enumerator.EnumeratorModule.md#fromoptional)
- [fromReadonlyArray](Enumerator.EnumeratorModule.md#fromreadonlyarray)
- [fromValue](Enumerator.EnumeratorModule.md#fromvalue)
- [zip](Enumerator.EnumeratorModule.md#zip)

### Operator Methods

- [buffer](Enumerator.EnumeratorModule.md#buffer)
- [concatAll](Enumerator.EnumeratorModule.md#concatall)
- [concatMap](Enumerator.EnumeratorModule.md#concatmap)
- [concatWith](Enumerator.EnumeratorModule.md#concatwith)
- [distinctUntilChanged](Enumerator.EnumeratorModule.md#distinctuntilchanged)
- [endWith](Enumerator.EnumeratorModule.md#endwith)
- [flatMapIterable](Enumerator.EnumeratorModule.md#flatmapiterable)
- [forEach](Enumerator.EnumeratorModule.md#foreach)
- [ignoreElements](Enumerator.EnumeratorModule.md#ignoreelements)
- [keep](Enumerator.EnumeratorModule.md#keep)
- [keepType](Enumerator.EnumeratorModule.md#keeptype)
- [map](Enumerator.EnumeratorModule.md#map)
- [mapTo](Enumerator.EnumeratorModule.md#mapto)
- [pairwise](Enumerator.EnumeratorModule.md#pairwise)
- [pick](Enumerator.EnumeratorModule.md#pick)
- [scan](Enumerator.EnumeratorModule.md#scan)
- [skipFirst](Enumerator.EnumeratorModule.md#skipfirst)
- [startWith](Enumerator.EnumeratorModule.md#startwith)
- [takeFirst](Enumerator.EnumeratorModule.md#takefirst)
- [takeLast](Enumerator.EnumeratorModule.md#takelast)
- [takeWhile](Enumerator.EnumeratorModule.md#takewhile)
- [zipWith](Enumerator.EnumeratorModule.md#zipwith)

### Other Methods

- [toObservable](Enumerator.EnumeratorModule.md#toobservable)

### Transform Methods

- [contains](Enumerator.EnumeratorModule.md#contains)
- [everySatisfy](Enumerator.EnumeratorModule.md#everysatisfy)
- [first](Enumerator.EnumeratorModule.md#first)
- [last](Enumerator.EnumeratorModule.md#last)
- [noneSatisfy](Enumerator.EnumeratorModule.md#nonesatisfy)
- [reduce](Enumerator.EnumeratorModule.md#reduce)
- [someSatisfy](Enumerator.EnumeratorModule.md#somesatisfy)
- [toReadonlyArray](Enumerator.EnumeratorModule.md#toreadonlyarray)

## Constructor Methods

### concat

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>

Returns a Container which emits all values from each source sequentially.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\> |
| `snd` | [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\> |
| `...tail` | readonly [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>[] |

#### Returns

[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>

#### Inherited from

[EnumeratorContainerTypeClass](types.EnumeratorContainerTypeClass.md).[concat](types.EnumeratorContainerTypeClass.md#concat)

___

### empty

▸ **empty**<`T`\>(): [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>

Return an Container that emits no items.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>

#### Inherited from

[EnumeratorContainerTypeClass](types.EnumeratorContainerTypeClass.md).[empty](types.EnumeratorContainerTypeClass.md#empty)

___

### fromEnumerable

▸ **fromEnumerable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

#### Inherited from

[EnumeratorContainerTypeClass](types.EnumeratorContainerTypeClass.md).[fromEnumerable](types.EnumeratorContainerTypeClass.md#fromenumerable)

___

### fromEnumeratorFactory

▸ **fromEnumeratorFactory**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Factory`](../modules/functions.md#factory)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Factory`](../modules/functions.md#factory)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

#### Inherited from

[EnumeratorContainerTypeClass](types.EnumeratorContainerTypeClass.md).[fromEnumeratorFactory](types.EnumeratorContainerTypeClass.md#fromenumeratorfactory)

___

### fromFactory

▸ **fromFactory**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Factory`](../modules/functions.md#factory)<`T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Factory`](../modules/functions.md#factory)<`T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

#### Inherited from

[EnumeratorContainerTypeClass](types.EnumeratorContainerTypeClass.md).[fromFactory](types.EnumeratorContainerTypeClass.md#fromfactory)

___

### fromIterable

▸ **fromIterable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

#### Inherited from

[EnumeratorContainerTypeClass](types.EnumeratorContainerTypeClass.md).[fromIterable](types.EnumeratorContainerTypeClass.md#fromiterable)

___

### fromOptional

▸ **fromOptional**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

#### Inherited from

[EnumeratorContainerTypeClass](types.EnumeratorContainerTypeClass.md).[fromOptional](types.EnumeratorContainerTypeClass.md#fromoptional)

___

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

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

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

#### Inherited from

[EnumeratorContainerTypeClass](types.EnumeratorContainerTypeClass.md).[fromReadonlyArray](types.EnumeratorContainerTypeClass.md#fromreadonlyarray)

___

### fromValue

▸ **fromValue**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`T`, [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`T`, [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

#### Inherited from

[EnumeratorContainerTypeClass](types.EnumeratorContainerTypeClass.md).[fromValue](types.EnumeratorContainerTypeClass.md#fromvalue)

___

### zip

▸ **zip**<`TA`, `TB`\>(`a`, `b`): [`EnumeratorLike`](types.EnumeratorLike.md)<readonly [`TA`, `TB`]\>

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
| `a` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TA`\> |
| `b` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TB`\> |

#### Returns

[`EnumeratorLike`](types.EnumeratorLike.md)<readonly [`TA`, `TB`]\>

#### Inherited from

[EnumeratorContainerTypeClass](types.EnumeratorContainerTypeClass.md).[zip](types.EnumeratorContainerTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`EnumeratorLike`](types.EnumeratorLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TA`\> |
| `b` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TB`\> |
| `c` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TC`\> |

#### Returns

[`EnumeratorLike`](types.EnumeratorLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Inherited from

[EnumeratorContainerTypeClass](types.EnumeratorContainerTypeClass.md).[zip](types.EnumeratorContainerTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`EnumeratorLike`](types.EnumeratorLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TA`\> |
| `b` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TB`\> |
| `c` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TC`\> |
| `d` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TD`\> |

#### Returns

[`EnumeratorLike`](types.EnumeratorLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Inherited from

[EnumeratorContainerTypeClass](types.EnumeratorContainerTypeClass.md).[zip](types.EnumeratorContainerTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`EnumeratorLike`](types.EnumeratorLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TA`\> |
| `b` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TB`\> |
| `c` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TC`\> |
| `d` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TD`\> |
| `e` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TE`\> |

#### Returns

[`EnumeratorLike`](types.EnumeratorLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Inherited from

[EnumeratorContainerTypeClass](types.EnumeratorContainerTypeClass.md).[zip](types.EnumeratorContainerTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`EnumeratorLike`](types.EnumeratorLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TA`\> |
| `b` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TB`\> |
| `c` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TC`\> |
| `d` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TD`\> |
| `e` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TE`\> |
| `f` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TF`\> |

#### Returns

[`EnumeratorLike`](types.EnumeratorLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Inherited from

[EnumeratorContainerTypeClass](types.EnumeratorContainerTypeClass.md).[zip](types.EnumeratorContainerTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`EnumeratorLike`](types.EnumeratorLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TA`\> |
| `b` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TB`\> |
| `c` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TC`\> |
| `d` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TD`\> |
| `e` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TE`\> |
| `f` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TF`\> |
| `g` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TG`\> |

#### Returns

[`EnumeratorLike`](types.EnumeratorLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Inherited from

[EnumeratorContainerTypeClass](types.EnumeratorContainerTypeClass.md).[zip](types.EnumeratorContainerTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`EnumeratorLike`](types.EnumeratorLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TA`\> |
| `b` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TB`\> |
| `c` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TC`\> |
| `d` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TD`\> |
| `e` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TE`\> |
| `f` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TF`\> |
| `g` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TG`\> |
| `h` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TH`\> |

#### Returns

[`EnumeratorLike`](types.EnumeratorLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Inherited from

[EnumeratorContainerTypeClass](types.EnumeratorContainerTypeClass.md).[zip](types.EnumeratorContainerTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`EnumeratorLike`](types.EnumeratorLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TA`\> |
| `b` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TB`\> |
| `c` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TC`\> |
| `d` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TD`\> |
| `e` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TE`\> |
| `f` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TF`\> |
| `g` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TG`\> |
| `h` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TH`\> |
| `i` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TI`\> |

#### Returns

[`EnumeratorLike`](types.EnumeratorLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Inherited from

[EnumeratorContainerTypeClass](types.EnumeratorContainerTypeClass.md).[zip](types.EnumeratorContainerTypeClass.md#zip)

___

## Operator Methods

### buffer

▸ **buffer**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](Enumerator.EnumeratorContainer.md), `T`, readonly `T`[]\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](Enumerator.EnumeratorContainer.md), `T`, readonly `T`[]\>

#### Inherited from

[EnumeratorContainerTypeClass](types.EnumeratorContainerTypeClass.md).[buffer](types.EnumeratorContainerTypeClass.md#buffer)

___

### concatAll

▸ **concatAll**<`T`\>(): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](Enumerator.EnumeratorContainer.md), [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>, `T`\>

Converts a higher-order Container into a first-order
Container by concatenating the inner sources in order.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](Enumerator.EnumeratorContainer.md), [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>, `T`\>

#### Inherited from

[EnumeratorContainerTypeClass](types.EnumeratorContainerTypeClass.md).[concatAll](types.EnumeratorContainerTypeClass.md#concatall)

___

### concatMap

▸ **concatMap**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](Enumerator.EnumeratorContainer.md), `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`EnumeratorLike`](types.EnumeratorLike.md)<`TB`\>\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](Enumerator.EnumeratorContainer.md), `TA`, `TB`\>

#### Inherited from

[EnumeratorContainerTypeClass](types.EnumeratorContainerTypeClass.md).[concatMap](types.EnumeratorContainerTypeClass.md#concatmap)

___

### concatWith

▸ **concatWith**<`T`\>(`snd`, `...tail`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](Enumerator.EnumeratorContainer.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\> |
| `...tail` | readonly [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>[] |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](Enumerator.EnumeratorContainer.md), `T`, `T`\>

#### Inherited from

[EnumeratorContainerTypeClass](types.EnumeratorContainerTypeClass.md).[concatWith](types.EnumeratorContainerTypeClass.md#concatwith)

___

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](Enumerator.EnumeratorContainer.md), `T`, `T`\>

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
| `options.equality?` | [`Equality`](../modules/functions.md#equality)<`T`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](Enumerator.EnumeratorContainer.md), `T`, `T`\>

#### Inherited from

[EnumeratorContainerTypeClass](types.EnumeratorContainerTypeClass.md).[distinctUntilChanged](types.EnumeratorContainerTypeClass.md#distinctuntilchanged)

___

### endWith

▸ **endWith**<`T`\>(`value`, `...values`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](Enumerator.EnumeratorContainer.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](Enumerator.EnumeratorContainer.md), `T`, `T`\>

#### Inherited from

[EnumeratorContainerTypeClass](types.EnumeratorContainerTypeClass.md).[endWith](types.EnumeratorContainerTypeClass.md#endwith)

___

### flatMapIterable

▸ **flatMapIterable**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](Enumerator.EnumeratorContainer.md), `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, `Iterable`<`TB`\>\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](Enumerator.EnumeratorContainer.md), `TA`, `TB`\>

#### Inherited from

[EnumeratorContainerTypeClass](types.EnumeratorContainerTypeClass.md).[flatMapIterable](types.EnumeratorContainerTypeClass.md#flatmapiterable)

___

### forEach

▸ **forEach**<`T`\>(`effect`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](Enumerator.EnumeratorContainer.md), `T`, `T`\>

Returns a ContainerOperator that applies the side effect function to each
value emitted by the source.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect1`](../modules/functions.md#sideeffect1)<`T`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](Enumerator.EnumeratorContainer.md), `T`, `T`\>

#### Inherited from

[EnumeratorContainerTypeClass](types.EnumeratorContainerTypeClass.md).[forEach](types.EnumeratorContainerTypeClass.md#foreach)

___

### ignoreElements

▸ **ignoreElements**<`T`\>(): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](Enumerator.EnumeratorContainer.md), `unknown`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](Enumerator.EnumeratorContainer.md), `unknown`, `T`\>

#### Inherited from

[EnumeratorContainerTypeClass](types.EnumeratorContainerTypeClass.md).[ignoreElements](types.EnumeratorContainerTypeClass.md#ignoreelements)

___

### keep

▸ **keep**<`T`\>(`predicate`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](Enumerator.EnumeratorContainer.md), `T`, `T`\>

Returns a ContainerOperator that only emits items produced by the
source that satisfy the specified predicate.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](Enumerator.EnumeratorContainer.md), `T`, `T`\>

#### Inherited from

[EnumeratorContainerTypeClass](types.EnumeratorContainerTypeClass.md).[keep](types.EnumeratorContainerTypeClass.md#keep)

___

### keepType

▸ **keepType**<`TA`, `TB`\>(`predicate`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](Enumerator.EnumeratorContainer.md), `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`TypePredicate`](../modules/functions.md#typepredicate)<`TA`, `TB`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](Enumerator.EnumeratorContainer.md), `TA`, `TB`\>

#### Inherited from

[EnumeratorContainerTypeClass](types.EnumeratorContainerTypeClass.md).[keepType](types.EnumeratorContainerTypeClass.md#keeptype)

___

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](Enumerator.EnumeratorContainer.md), `TA`, `TB`\>

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
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, `TB`\> | A pure map function that is applied each value emitted by the source |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](Enumerator.EnumeratorContainer.md), `TA`, `TB`\>

#### Inherited from

[EnumeratorContainerTypeClass](types.EnumeratorContainerTypeClass.md).[map](types.EnumeratorContainerTypeClass.md#map)

___

### mapTo

▸ **mapTo**<`TA`, `TB`\>(`value`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](Enumerator.EnumeratorContainer.md), `TA`, `TB`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](Enumerator.EnumeratorContainer.md), `TA`, `TB`\>

#### Inherited from

[EnumeratorContainerTypeClass](types.EnumeratorContainerTypeClass.md).[mapTo](types.EnumeratorContainerTypeClass.md#mapto)

___

### pairwise

▸ **pairwise**<`T`\>(): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](Enumerator.EnumeratorContainer.md), `T`, readonly [`T`, `T`]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](Enumerator.EnumeratorContainer.md), `T`, readonly [`T`, `T`]\>

#### Inherited from

[EnumeratorContainerTypeClass](types.EnumeratorContainerTypeClass.md).[pairwise](types.EnumeratorContainerTypeClass.md#pairwise)

___

### pick

▸ **pick**<`T`, `TKey`\>(`key`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](Enumerator.EnumeratorContainer.md), `T`, `T`[`TKey`]\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](Enumerator.EnumeratorContainer.md), `T`, `T`[`TKey`]\>

#### Inherited from

[EnumeratorContainerTypeClass](types.EnumeratorContainerTypeClass.md).[pick](types.EnumeratorContainerTypeClass.md#pick)

▸ **pick**<`T`, `TKeyA`, `TKeyB`\>(`keyA`, `keyB`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](Enumerator.EnumeratorContainer.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](Enumerator.EnumeratorContainer.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

#### Inherited from

[EnumeratorContainerTypeClass](types.EnumeratorContainerTypeClass.md).[pick](types.EnumeratorContainerTypeClass.md#pick)

▸ **pick**<`T`, `TKeyA`, `TKeyB`, `TKeyC`\>(`keyA`, `keyB`, `keyC`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](Enumerator.EnumeratorContainer.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](Enumerator.EnumeratorContainer.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

#### Inherited from

[EnumeratorContainerTypeClass](types.EnumeratorContainerTypeClass.md).[pick](types.EnumeratorContainerTypeClass.md#pick)

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](Enumerator.EnumeratorContainer.md), `T`, `TAcc`\>

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
| `scanner` | [`Reducer`](../modules/functions.md#reducer)<`T`, `TAcc`\> | The accumulator function called on each source value. |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> | The initial accumulation value. |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](Enumerator.EnumeratorContainer.md), `T`, `TAcc`\>

#### Inherited from

[EnumeratorContainerTypeClass](types.EnumeratorContainerTypeClass.md).[scan](types.EnumeratorContainerTypeClass.md#scan)

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](Enumerator.EnumeratorContainer.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](Enumerator.EnumeratorContainer.md), `T`, `T`\>

#### Inherited from

[EnumeratorContainerTypeClass](types.EnumeratorContainerTypeClass.md).[skipFirst](types.EnumeratorContainerTypeClass.md#skipfirst)

___

### startWith

▸ **startWith**<`T`\>(`value`, `...values`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](Enumerator.EnumeratorContainer.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](Enumerator.EnumeratorContainer.md), `T`, `T`\>

#### Inherited from

[EnumeratorContainerTypeClass](types.EnumeratorContainerTypeClass.md).[startWith](types.EnumeratorContainerTypeClass.md#startwith)

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](Enumerator.EnumeratorContainer.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](Enumerator.EnumeratorContainer.md), `T`, `T`\>

#### Inherited from

[EnumeratorContainerTypeClass](types.EnumeratorContainerTypeClass.md).[takeFirst](types.EnumeratorContainerTypeClass.md#takefirst)

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](Enumerator.EnumeratorContainer.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](Enumerator.EnumeratorContainer.md), `T`, `T`\>

#### Inherited from

[EnumeratorContainerTypeClass](types.EnumeratorContainerTypeClass.md).[takeLast](types.EnumeratorContainerTypeClass.md#takelast)

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](Enumerator.EnumeratorContainer.md), `T`, `T`\>

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
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> | The predicate function. |
| `options?` | `Object` | - |
| `options.inclusive?` | `boolean` | - |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](Enumerator.EnumeratorContainer.md), `T`, `T`\>

#### Inherited from

[EnumeratorContainerTypeClass](types.EnumeratorContainerTypeClass.md).[takeWhile](types.EnumeratorContainerTypeClass.md#takewhile)

___

### zipWith

▸ **zipWith**<`TA`, `TB`\>(`b`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](Enumerator.EnumeratorContainer.md), `TA`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TB`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](Enumerator.EnumeratorContainer.md), `TA`, readonly [`TA`, `TB`]\>

#### Inherited from

[EnumeratorContainerTypeClass](types.EnumeratorContainerTypeClass.md).[zipWith](types.EnumeratorContainerTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`\>(`b`, `c`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](Enumerator.EnumeratorContainer.md), `TA`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TB`\> |
| `c` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TC`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](Enumerator.EnumeratorContainer.md), `TA`, readonly [`TA`, `TB`, `TC`]\>

#### Inherited from

[EnumeratorContainerTypeClass](types.EnumeratorContainerTypeClass.md).[zipWith](types.EnumeratorContainerTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`\>(`b`, `c`, `d`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](Enumerator.EnumeratorContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `b` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TB`\> |
| `c` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TC`\> |
| `d` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TD`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](Enumerator.EnumeratorContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Inherited from

[EnumeratorContainerTypeClass](types.EnumeratorContainerTypeClass.md).[zipWith](types.EnumeratorContainerTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`b`, `c`, `d`, `e`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](Enumerator.EnumeratorContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `b` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TB`\> |
| `c` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TC`\> |
| `d` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TD`\> |
| `e` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TE`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](Enumerator.EnumeratorContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Inherited from

[EnumeratorContainerTypeClass](types.EnumeratorContainerTypeClass.md).[zipWith](types.EnumeratorContainerTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`b`, `c`, `d`, `e`, `f`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](Enumerator.EnumeratorContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `b` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TB`\> |
| `c` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TC`\> |
| `d` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TD`\> |
| `e` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TE`\> |
| `f` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TF`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](Enumerator.EnumeratorContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Inherited from

[EnumeratorContainerTypeClass](types.EnumeratorContainerTypeClass.md).[zipWith](types.EnumeratorContainerTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`b`, `c`, `d`, `e`, `f`, `g`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](Enumerator.EnumeratorContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `b` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TB`\> |
| `c` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TC`\> |
| `d` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TD`\> |
| `e` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TE`\> |
| `f` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TF`\> |
| `g` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TG`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](Enumerator.EnumeratorContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Inherited from

[EnumeratorContainerTypeClass](types.EnumeratorContainerTypeClass.md).[zipWith](types.EnumeratorContainerTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](Enumerator.EnumeratorContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `b` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TB`\> |
| `c` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TC`\> |
| `d` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TD`\> |
| `e` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TE`\> |
| `f` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TF`\> |
| `g` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TG`\> |
| `h` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TH`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](Enumerator.EnumeratorContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Inherited from

[EnumeratorContainerTypeClass](types.EnumeratorContainerTypeClass.md).[zipWith](types.EnumeratorContainerTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](Enumerator.EnumeratorContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `b` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TB`\> |
| `c` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TC`\> |
| `d` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TD`\> |
| `e` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TE`\> |
| `f` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TF`\> |
| `g` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TG`\> |
| `h` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TH`\> |
| `i` | [`EnumeratorLike`](types.EnumeratorLike.md)<`TI`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorContainer`](Enumerator.EnumeratorContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Inherited from

[EnumeratorContainerTypeClass](types.EnumeratorContainerTypeClass.md).[zipWith](types.EnumeratorContainerTypeClass.md#zipwith)

___

## Other Methods

### toObservable

▸ **toObservable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

▸ **toObservable**<`T`\>(`options`): [`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

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

[`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

___

## Transform Methods

### contains

▸ **contains**<`T`\>(`value`, `options?`): [`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `options?` | `Object` |
| `options.equality?` | [`Equality`](../modules/functions.md#equality)<`T`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>, `boolean`\>

#### Inherited from

[EnumeratorContainerTypeClass](types.EnumeratorContainerTypeClass.md).[contains](types.EnumeratorContainerTypeClass.md#contains)

___

### everySatisfy

▸ **everySatisfy**<`T`\>(`predicate`): [`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>, `boolean`\>

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
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>, `boolean`\>

#### Inherited from

[EnumeratorContainerTypeClass](types.EnumeratorContainerTypeClass.md).[everySatisfy](types.EnumeratorContainerTypeClass.md#everysatisfy)

___

### first

▸ **first**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>, [`Optional`](../modules/functions.md#optional)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>, [`Optional`](../modules/functions.md#optional)<`T`\>\>

#### Inherited from

[EnumeratorContainerTypeClass](types.EnumeratorContainerTypeClass.md).[first](types.EnumeratorContainerTypeClass.md#first)

___

### last

▸ **last**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>, [`Optional`](../modules/functions.md#optional)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>, [`Optional`](../modules/functions.md#optional)<`T`\>\>

#### Inherited from

[EnumeratorContainerTypeClass](types.EnumeratorContainerTypeClass.md).[last](types.EnumeratorContainerTypeClass.md#last)

___

### noneSatisfy

▸ **noneSatisfy**<`T`\>(`predicate`): [`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>, `boolean`\>

#### Inherited from

[EnumeratorContainerTypeClass](types.EnumeratorContainerTypeClass.md).[noneSatisfy](types.EnumeratorContainerTypeClass.md#nonesatisfy)

___

### reduce

▸ **reduce**<`T`, `TAcc`\>(`reducer`, `initialValue`): [`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>, `TAcc`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Reducer`](../modules/functions.md#reducer)<`T`, `TAcc`\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>, `TAcc`\>

#### Inherited from

[EnumeratorContainerTypeClass](types.EnumeratorContainerTypeClass.md).[reduce](types.EnumeratorContainerTypeClass.md#reduce)

___

### someSatisfy

▸ **someSatisfy**<`T`\>(`predicate`): [`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>, `boolean`\>

#### Inherited from

[EnumeratorContainerTypeClass](types.EnumeratorContainerTypeClass.md).[someSatisfy](types.EnumeratorContainerTypeClass.md#somesatisfy)

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>, readonly `T`[]\>

Converts the Container to a `ReadonlyArrayContainer`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>, readonly `T`[]\>

#### Inherited from

[EnumeratorContainerTypeClass](types.EnumeratorContainerTypeClass.md).[toReadonlyArray](types.EnumeratorContainerTypeClass.md#toreadonlyarray)
