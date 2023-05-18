[Reactive-JS](../README.md) / [EnumeratorFactory](../modules/EnumeratorFactory.md) / EnumeratorFactoryModule

# Interface: EnumeratorFactoryModule

[EnumeratorFactory](../modules/EnumeratorFactory.md).EnumeratorFactoryModule

## Hierarchy

- [`EnumerableContainerTypeClass`](types.EnumerableContainerTypeClass.md)<[`Type`](../modules/EnumeratorFactory.md#type)\>

  ↳ **`EnumeratorFactoryModule`**

## Table of contents

### Constructor Methods

- [concat](EnumeratorFactory.EnumeratorFactoryModule.md#concat)
- [empty](EnumeratorFactory.EnumeratorFactoryModule.md#empty)
- [fromEnumerable](EnumeratorFactory.EnumeratorFactoryModule.md#fromenumerable)
- [fromEnumeratorFactory](EnumeratorFactory.EnumeratorFactoryModule.md#fromenumeratorfactory)
- [fromFactory](EnumeratorFactory.EnumeratorFactoryModule.md#fromfactory)
- [fromIterable](EnumeratorFactory.EnumeratorFactoryModule.md#fromiterable)
- [fromOptional](EnumeratorFactory.EnumeratorFactoryModule.md#fromoptional)
- [fromReadonlyArray](EnumeratorFactory.EnumeratorFactoryModule.md#fromreadonlyarray)
- [fromValue](EnumeratorFactory.EnumeratorFactoryModule.md#fromvalue)
- [zip](EnumeratorFactory.EnumeratorFactoryModule.md#zip)

### Operator Methods

- [buffer](EnumeratorFactory.EnumeratorFactoryModule.md#buffer)
- [concatAll](EnumeratorFactory.EnumeratorFactoryModule.md#concatall)
- [concatMap](EnumeratorFactory.EnumeratorFactoryModule.md#concatmap)
- [concatWith](EnumeratorFactory.EnumeratorFactoryModule.md#concatwith)
- [distinctUntilChanged](EnumeratorFactory.EnumeratorFactoryModule.md#distinctuntilchanged)
- [endWith](EnumeratorFactory.EnumeratorFactoryModule.md#endwith)
- [flatMapIterable](EnumeratorFactory.EnumeratorFactoryModule.md#flatmapiterable)
- [forEach](EnumeratorFactory.EnumeratorFactoryModule.md#foreach)
- [ignoreElements](EnumeratorFactory.EnumeratorFactoryModule.md#ignoreelements)
- [keep](EnumeratorFactory.EnumeratorFactoryModule.md#keep)
- [keepType](EnumeratorFactory.EnumeratorFactoryModule.md#keeptype)
- [map](EnumeratorFactory.EnumeratorFactoryModule.md#map)
- [mapTo](EnumeratorFactory.EnumeratorFactoryModule.md#mapto)
- [pairwise](EnumeratorFactory.EnumeratorFactoryModule.md#pairwise)
- [pick](EnumeratorFactory.EnumeratorFactoryModule.md#pick)
- [repeat](EnumeratorFactory.EnumeratorFactoryModule.md#repeat)
- [scan](EnumeratorFactory.EnumeratorFactoryModule.md#scan)
- [skipFirst](EnumeratorFactory.EnumeratorFactoryModule.md#skipfirst)
- [startWith](EnumeratorFactory.EnumeratorFactoryModule.md#startwith)
- [takeFirst](EnumeratorFactory.EnumeratorFactoryModule.md#takefirst)
- [takeLast](EnumeratorFactory.EnumeratorFactoryModule.md#takelast)
- [takeWhile](EnumeratorFactory.EnumeratorFactoryModule.md#takewhile)
- [zipWith](EnumeratorFactory.EnumeratorFactoryModule.md#zipwith)

### Other Methods

- [toEnumeratorFactory](EnumeratorFactory.EnumeratorFactoryModule.md#toenumeratorfactory)
- [toObservable](EnumeratorFactory.EnumeratorFactoryModule.md#toobservable)

### Transform Methods

- [contains](EnumeratorFactory.EnumeratorFactoryModule.md#contains)
- [enumerate](EnumeratorFactory.EnumeratorFactoryModule.md#enumerate)
- [everySatisfy](EnumeratorFactory.EnumeratorFactoryModule.md#everysatisfy)
- [first](EnumeratorFactory.EnumeratorFactoryModule.md#first)
- [last](EnumeratorFactory.EnumeratorFactoryModule.md#last)
- [noneSatisfy](EnumeratorFactory.EnumeratorFactoryModule.md#nonesatisfy)
- [reduce](EnumeratorFactory.EnumeratorFactoryModule.md#reduce)
- [someSatisfy](EnumeratorFactory.EnumeratorFactoryModule.md#somesatisfy)
- [toIterable](EnumeratorFactory.EnumeratorFactoryModule.md#toiterable)
- [toReadonlyArray](EnumeratorFactory.EnumeratorFactoryModule.md#toreadonlyarray)

## Constructor Methods

### concat

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`T`\>

Returns a Container which emits all values from each source sequentially.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`T`\> |
| `snd` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`T`\> |
| `...tail` | readonly [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`T`\>[] |

#### Returns

[`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`T`\>

#### Inherited from

[EnumerableContainerTypeClass](types.EnumerableContainerTypeClass.md).[concat](types.EnumerableContainerTypeClass.md#concat)

___

### empty

▸ **empty**<`T`\>(): [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`T`\>

Return an Container that emits no items.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`T`\>

#### Inherited from

[EnumerableContainerTypeClass](types.EnumerableContainerTypeClass.md).[empty](types.EnumerableContainerTypeClass.md#empty)

___

### fromEnumerable

▸ **fromEnumerable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`T`\>\>

#### Inherited from

[EnumerableContainerTypeClass](types.EnumerableContainerTypeClass.md).[fromEnumerable](types.EnumerableContainerTypeClass.md#fromenumerable)

___

### fromEnumeratorFactory

▸ **fromEnumeratorFactory**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`T`\>, [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`T`\>, [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`T`\>\>

#### Inherited from

[EnumerableContainerTypeClass](types.EnumerableContainerTypeClass.md).[fromEnumeratorFactory](types.EnumerableContainerTypeClass.md#fromenumeratorfactory)

___

### fromFactory

▸ **fromFactory**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Factory`](../modules/functions.md#factory)<`T`\>, [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Factory`](../modules/functions.md#factory)<`T`\>, [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`T`\>\>

#### Inherited from

[EnumerableContainerTypeClass](types.EnumerableContainerTypeClass.md).[fromFactory](types.EnumerableContainerTypeClass.md#fromfactory)

___

### fromIterable

▸ **fromIterable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`T`\>\>

#### Inherited from

[EnumerableContainerTypeClass](types.EnumerableContainerTypeClass.md).[fromIterable](types.EnumerableContainerTypeClass.md#fromiterable)

___

### fromOptional

▸ **fromOptional**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`T`\>\>

#### Inherited from

[EnumerableContainerTypeClass](types.EnumerableContainerTypeClass.md).[fromOptional](types.EnumerableContainerTypeClass.md#fromoptional)

___

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`T`\>\>

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

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`T`\>\>

#### Inherited from

[EnumerableContainerTypeClass](types.EnumerableContainerTypeClass.md).[fromReadonlyArray](types.EnumerableContainerTypeClass.md#fromreadonlyarray)

___

### fromValue

▸ **fromValue**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`T`, [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`T`, [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`T`\>\>

#### Inherited from

[EnumerableContainerTypeClass](types.EnumerableContainerTypeClass.md).[fromValue](types.EnumerableContainerTypeClass.md#fromvalue)

___

### zip

▸ **zip**<`TA`, `TB`\>(`a`, `b`): [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<readonly [`TA`, `TB`]\>

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
| `a` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TA`\> |
| `b` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TB`\> |

#### Returns

[`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<readonly [`TA`, `TB`]\>

#### Inherited from

[EnumerableContainerTypeClass](types.EnumerableContainerTypeClass.md).[zip](types.EnumerableContainerTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TA`\> |
| `b` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TB`\> |
| `c` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TC`\> |

#### Returns

[`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<readonly [`TA`, `TB`, `TC`]\>

#### Inherited from

[EnumerableContainerTypeClass](types.EnumerableContainerTypeClass.md).[zip](types.EnumerableContainerTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TA`\> |
| `b` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TB`\> |
| `c` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TC`\> |
| `d` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TD`\> |

#### Returns

[`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Inherited from

[EnumerableContainerTypeClass](types.EnumerableContainerTypeClass.md).[zip](types.EnumerableContainerTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TA`\> |
| `b` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TB`\> |
| `c` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TC`\> |
| `d` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TD`\> |
| `e` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TE`\> |

#### Returns

[`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Inherited from

[EnumerableContainerTypeClass](types.EnumerableContainerTypeClass.md).[zip](types.EnumerableContainerTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TA`\> |
| `b` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TB`\> |
| `c` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TC`\> |
| `d` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TD`\> |
| `e` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TE`\> |
| `f` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TF`\> |

#### Returns

[`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Inherited from

[EnumerableContainerTypeClass](types.EnumerableContainerTypeClass.md).[zip](types.EnumerableContainerTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TA`\> |
| `b` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TB`\> |
| `c` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TC`\> |
| `d` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TD`\> |
| `e` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TE`\> |
| `f` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TF`\> |
| `g` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TG`\> |

#### Returns

[`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Inherited from

[EnumerableContainerTypeClass](types.EnumerableContainerTypeClass.md).[zip](types.EnumerableContainerTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TA`\> |
| `b` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TB`\> |
| `c` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TC`\> |
| `d` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TD`\> |
| `e` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TE`\> |
| `f` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TF`\> |
| `g` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TG`\> |
| `h` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TH`\> |

#### Returns

[`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Inherited from

[EnumerableContainerTypeClass](types.EnumerableContainerTypeClass.md).[zip](types.EnumerableContainerTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TA`\> |
| `b` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TB`\> |
| `c` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TC`\> |
| `d` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TD`\> |
| `e` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TE`\> |
| `f` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TF`\> |
| `g` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TG`\> |
| `h` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TH`\> |
| `i` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TI`\> |

#### Returns

[`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Inherited from

[EnumerableContainerTypeClass](types.EnumerableContainerTypeClass.md).[zip](types.EnumerableContainerTypeClass.md#zip)

___

## Operator Methods

### buffer

▸ **buffer**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorFactoryContainer`](EnumeratorFactory.EnumeratorFactoryContainer.md), `T`, readonly `T`[]\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorFactoryContainer`](EnumeratorFactory.EnumeratorFactoryContainer.md), `T`, readonly `T`[]\>

#### Inherited from

[EnumerableContainerTypeClass](types.EnumerableContainerTypeClass.md).[buffer](types.EnumerableContainerTypeClass.md#buffer)

___

### concatAll

▸ **concatAll**<`T`\>(): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorFactoryContainer`](EnumeratorFactory.EnumeratorFactoryContainer.md), [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`T`\>, `T`\>

Converts a higher-order Container into a first-order
Container by concatenating the inner sources in order.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorFactoryContainer`](EnumeratorFactory.EnumeratorFactoryContainer.md), [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`T`\>, `T`\>

#### Inherited from

[EnumerableContainerTypeClass](types.EnumerableContainerTypeClass.md).[concatAll](types.EnumerableContainerTypeClass.md#concatall)

___

### concatMap

▸ **concatMap**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorFactoryContainer`](EnumeratorFactory.EnumeratorFactoryContainer.md), `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TB`\>\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorFactoryContainer`](EnumeratorFactory.EnumeratorFactoryContainer.md), `TA`, `TB`\>

#### Inherited from

[EnumerableContainerTypeClass](types.EnumerableContainerTypeClass.md).[concatMap](types.EnumerableContainerTypeClass.md#concatmap)

___

### concatWith

▸ **concatWith**<`T`\>(`snd`, `...tail`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorFactoryContainer`](EnumeratorFactory.EnumeratorFactoryContainer.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`T`\> |
| `...tail` | readonly [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`T`\>[] |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorFactoryContainer`](EnumeratorFactory.EnumeratorFactoryContainer.md), `T`, `T`\>

#### Inherited from

[EnumerableContainerTypeClass](types.EnumerableContainerTypeClass.md).[concatWith](types.EnumerableContainerTypeClass.md#concatwith)

___

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorFactoryContainer`](EnumeratorFactory.EnumeratorFactoryContainer.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorFactoryContainer`](EnumeratorFactory.EnumeratorFactoryContainer.md), `T`, `T`\>

#### Inherited from

[EnumerableContainerTypeClass](types.EnumerableContainerTypeClass.md).[distinctUntilChanged](types.EnumerableContainerTypeClass.md#distinctuntilchanged)

___

### endWith

▸ **endWith**<`T`\>(`value`, `...values`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorFactoryContainer`](EnumeratorFactory.EnumeratorFactoryContainer.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorFactoryContainer`](EnumeratorFactory.EnumeratorFactoryContainer.md), `T`, `T`\>

#### Inherited from

[EnumerableContainerTypeClass](types.EnumerableContainerTypeClass.md).[endWith](types.EnumerableContainerTypeClass.md#endwith)

___

### flatMapIterable

▸ **flatMapIterable**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorFactoryContainer`](EnumeratorFactory.EnumeratorFactoryContainer.md), `TA`, `TB`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorFactoryContainer`](EnumeratorFactory.EnumeratorFactoryContainer.md), `TA`, `TB`\>

#### Inherited from

[EnumerableContainerTypeClass](types.EnumerableContainerTypeClass.md).[flatMapIterable](types.EnumerableContainerTypeClass.md#flatmapiterable)

___

### forEach

▸ **forEach**<`T`\>(`effect`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorFactoryContainer`](EnumeratorFactory.EnumeratorFactoryContainer.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorFactoryContainer`](EnumeratorFactory.EnumeratorFactoryContainer.md), `T`, `T`\>

#### Inherited from

[EnumerableContainerTypeClass](types.EnumerableContainerTypeClass.md).[forEach](types.EnumerableContainerTypeClass.md#foreach)

___

### ignoreElements

▸ **ignoreElements**<`T`\>(): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorFactoryContainer`](EnumeratorFactory.EnumeratorFactoryContainer.md), `unknown`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorFactoryContainer`](EnumeratorFactory.EnumeratorFactoryContainer.md), `unknown`, `T`\>

#### Inherited from

[EnumerableContainerTypeClass](types.EnumerableContainerTypeClass.md).[ignoreElements](types.EnumerableContainerTypeClass.md#ignoreelements)

___

### keep

▸ **keep**<`T`\>(`predicate`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorFactoryContainer`](EnumeratorFactory.EnumeratorFactoryContainer.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorFactoryContainer`](EnumeratorFactory.EnumeratorFactoryContainer.md), `T`, `T`\>

#### Inherited from

[EnumerableContainerTypeClass](types.EnumerableContainerTypeClass.md).[keep](types.EnumerableContainerTypeClass.md#keep)

___

### keepType

▸ **keepType**<`TA`, `TB`\>(`predicate`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorFactoryContainer`](EnumeratorFactory.EnumeratorFactoryContainer.md), `TA`, `TB`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorFactoryContainer`](EnumeratorFactory.EnumeratorFactoryContainer.md), `TA`, `TB`\>

#### Inherited from

[EnumerableContainerTypeClass](types.EnumerableContainerTypeClass.md).[keepType](types.EnumerableContainerTypeClass.md#keeptype)

___

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorFactoryContainer`](EnumeratorFactory.EnumeratorFactoryContainer.md), `TA`, `TB`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorFactoryContainer`](EnumeratorFactory.EnumeratorFactoryContainer.md), `TA`, `TB`\>

#### Inherited from

[EnumerableContainerTypeClass](types.EnumerableContainerTypeClass.md).[map](types.EnumerableContainerTypeClass.md#map)

___

### mapTo

▸ **mapTo**<`TA`, `TB`\>(`value`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorFactoryContainer`](EnumeratorFactory.EnumeratorFactoryContainer.md), `TA`, `TB`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorFactoryContainer`](EnumeratorFactory.EnumeratorFactoryContainer.md), `TA`, `TB`\>

#### Inherited from

[EnumerableContainerTypeClass](types.EnumerableContainerTypeClass.md).[mapTo](types.EnumerableContainerTypeClass.md#mapto)

___

### pairwise

▸ **pairwise**<`T`\>(): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorFactoryContainer`](EnumeratorFactory.EnumeratorFactoryContainer.md), `T`, readonly [`T`, `T`]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorFactoryContainer`](EnumeratorFactory.EnumeratorFactoryContainer.md), `T`, readonly [`T`, `T`]\>

#### Inherited from

[EnumerableContainerTypeClass](types.EnumerableContainerTypeClass.md).[pairwise](types.EnumerableContainerTypeClass.md#pairwise)

___

### pick

▸ **pick**<`T`, `TKey`\>(`key`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorFactoryContainer`](EnumeratorFactory.EnumeratorFactoryContainer.md), `T`, `T`[`TKey`]\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorFactoryContainer`](EnumeratorFactory.EnumeratorFactoryContainer.md), `T`, `T`[`TKey`]\>

#### Inherited from

[EnumerableContainerTypeClass](types.EnumerableContainerTypeClass.md).[pick](types.EnumerableContainerTypeClass.md#pick)

▸ **pick**<`T`, `TKeyA`, `TKeyB`\>(`keyA`, `keyB`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorFactoryContainer`](EnumeratorFactory.EnumeratorFactoryContainer.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorFactoryContainer`](EnumeratorFactory.EnumeratorFactoryContainer.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

#### Inherited from

[EnumerableContainerTypeClass](types.EnumerableContainerTypeClass.md).[pick](types.EnumerableContainerTypeClass.md#pick)

▸ **pick**<`T`, `TKeyA`, `TKeyB`, `TKeyC`\>(`keyA`, `keyB`, `keyC`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorFactoryContainer`](EnumeratorFactory.EnumeratorFactoryContainer.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorFactoryContainer`](EnumeratorFactory.EnumeratorFactoryContainer.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

#### Inherited from

[EnumerableContainerTypeClass](types.EnumerableContainerTypeClass.md).[pick](types.EnumerableContainerTypeClass.md#pick)

___

### repeat

▸ **repeat**<`T`\>(`count`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorFactoryContainer`](EnumeratorFactory.EnumeratorFactoryContainer.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorFactoryContainer`](EnumeratorFactory.EnumeratorFactoryContainer.md), `T`, `T`\>

#### Inherited from

[EnumerableContainerTypeClass](types.EnumerableContainerTypeClass.md).[repeat](types.EnumerableContainerTypeClass.md#repeat)

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorFactoryContainer`](EnumeratorFactory.EnumeratorFactoryContainer.md), `T`, `TAcc`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorFactoryContainer`](EnumeratorFactory.EnumeratorFactoryContainer.md), `T`, `TAcc`\>

#### Inherited from

[EnumerableContainerTypeClass](types.EnumerableContainerTypeClass.md).[scan](types.EnumerableContainerTypeClass.md#scan)

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorFactoryContainer`](EnumeratorFactory.EnumeratorFactoryContainer.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorFactoryContainer`](EnumeratorFactory.EnumeratorFactoryContainer.md), `T`, `T`\>

#### Inherited from

[EnumerableContainerTypeClass](types.EnumerableContainerTypeClass.md).[skipFirst](types.EnumerableContainerTypeClass.md#skipfirst)

___

### startWith

▸ **startWith**<`T`\>(`value`, `...values`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorFactoryContainer`](EnumeratorFactory.EnumeratorFactoryContainer.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorFactoryContainer`](EnumeratorFactory.EnumeratorFactoryContainer.md), `T`, `T`\>

#### Inherited from

[EnumerableContainerTypeClass](types.EnumerableContainerTypeClass.md).[startWith](types.EnumerableContainerTypeClass.md#startwith)

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorFactoryContainer`](EnumeratorFactory.EnumeratorFactoryContainer.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorFactoryContainer`](EnumeratorFactory.EnumeratorFactoryContainer.md), `T`, `T`\>

#### Inherited from

[EnumerableContainerTypeClass](types.EnumerableContainerTypeClass.md).[takeFirst](types.EnumerableContainerTypeClass.md#takefirst)

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorFactoryContainer`](EnumeratorFactory.EnumeratorFactoryContainer.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorFactoryContainer`](EnumeratorFactory.EnumeratorFactoryContainer.md), `T`, `T`\>

#### Inherited from

[EnumerableContainerTypeClass](types.EnumerableContainerTypeClass.md).[takeLast](types.EnumerableContainerTypeClass.md#takelast)

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorFactoryContainer`](EnumeratorFactory.EnumeratorFactoryContainer.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorFactoryContainer`](EnumeratorFactory.EnumeratorFactoryContainer.md), `T`, `T`\>

#### Inherited from

[EnumerableContainerTypeClass](types.EnumerableContainerTypeClass.md).[takeWhile](types.EnumerableContainerTypeClass.md#takewhile)

___

### zipWith

▸ **zipWith**<`TA`, `TB`\>(`b`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorFactoryContainer`](EnumeratorFactory.EnumeratorFactoryContainer.md), `TA`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TB`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorFactoryContainer`](EnumeratorFactory.EnumeratorFactoryContainer.md), `TA`, readonly [`TA`, `TB`]\>

#### Inherited from

[EnumerableContainerTypeClass](types.EnumerableContainerTypeClass.md).[zipWith](types.EnumerableContainerTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`\>(`b`, `c`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorFactoryContainer`](EnumeratorFactory.EnumeratorFactoryContainer.md), `TA`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TB`\> |
| `c` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TC`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorFactoryContainer`](EnumeratorFactory.EnumeratorFactoryContainer.md), `TA`, readonly [`TA`, `TB`, `TC`]\>

#### Inherited from

[EnumerableContainerTypeClass](types.EnumerableContainerTypeClass.md).[zipWith](types.EnumerableContainerTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`\>(`b`, `c`, `d`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorFactoryContainer`](EnumeratorFactory.EnumeratorFactoryContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `b` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TB`\> |
| `c` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TC`\> |
| `d` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TD`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorFactoryContainer`](EnumeratorFactory.EnumeratorFactoryContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Inherited from

[EnumerableContainerTypeClass](types.EnumerableContainerTypeClass.md).[zipWith](types.EnumerableContainerTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`b`, `c`, `d`, `e`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorFactoryContainer`](EnumeratorFactory.EnumeratorFactoryContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `b` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TB`\> |
| `c` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TC`\> |
| `d` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TD`\> |
| `e` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TE`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorFactoryContainer`](EnumeratorFactory.EnumeratorFactoryContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Inherited from

[EnumerableContainerTypeClass](types.EnumerableContainerTypeClass.md).[zipWith](types.EnumerableContainerTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`b`, `c`, `d`, `e`, `f`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorFactoryContainer`](EnumeratorFactory.EnumeratorFactoryContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `b` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TB`\> |
| `c` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TC`\> |
| `d` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TD`\> |
| `e` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TE`\> |
| `f` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TF`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorFactoryContainer`](EnumeratorFactory.EnumeratorFactoryContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Inherited from

[EnumerableContainerTypeClass](types.EnumerableContainerTypeClass.md).[zipWith](types.EnumerableContainerTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`b`, `c`, `d`, `e`, `f`, `g`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorFactoryContainer`](EnumeratorFactory.EnumeratorFactoryContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `b` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TB`\> |
| `c` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TC`\> |
| `d` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TD`\> |
| `e` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TE`\> |
| `f` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TF`\> |
| `g` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TG`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorFactoryContainer`](EnumeratorFactory.EnumeratorFactoryContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Inherited from

[EnumerableContainerTypeClass](types.EnumerableContainerTypeClass.md).[zipWith](types.EnumerableContainerTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorFactoryContainer`](EnumeratorFactory.EnumeratorFactoryContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `b` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TB`\> |
| `c` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TC`\> |
| `d` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TD`\> |
| `e` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TE`\> |
| `f` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TF`\> |
| `g` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TG`\> |
| `h` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TH`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorFactoryContainer`](EnumeratorFactory.EnumeratorFactoryContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Inherited from

[EnumerableContainerTypeClass](types.EnumerableContainerTypeClass.md).[zipWith](types.EnumerableContainerTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorFactoryContainer`](EnumeratorFactory.EnumeratorFactoryContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `b` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TB`\> |
| `c` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TC`\> |
| `d` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TD`\> |
| `e` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TE`\> |
| `f` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TF`\> |
| `g` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TG`\> |
| `h` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TH`\> |
| `i` | [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`TI`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`EnumeratorFactoryContainer`](EnumeratorFactory.EnumeratorFactoryContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Inherited from

[EnumerableContainerTypeClass](types.EnumerableContainerTypeClass.md).[zipWith](types.EnumerableContainerTypeClass.md#zipwith)

___

## Other Methods

### toEnumeratorFactory

▸ **toEnumeratorFactory**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`T`\>, [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`T`\>, [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`T`\>\>

#### Inherited from

[EnumerableContainerTypeClass](types.EnumerableContainerTypeClass.md).[toEnumeratorFactory](types.EnumerableContainerTypeClass.md#toenumeratorfactory)

___

### toObservable

▸ **toObservable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`T`\>, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`T`\>, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Overrides

[EnumerableContainerTypeClass](types.EnumerableContainerTypeClass.md).[toObservable](types.EnumerableContainerTypeClass.md#toobservable)

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

#### Overrides

EnumerableContainerTypeClass.toObservable

___

## Transform Methods

### contains

▸ **contains**<`T`\>(`value`, `options?`): [`Function1`](../modules/functions.md#function1)<[`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`T`\>, `boolean`\>

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

[`Function1`](../modules/functions.md#function1)<[`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`T`\>, `boolean`\>

#### Inherited from

[EnumerableContainerTypeClass](types.EnumerableContainerTypeClass.md).[contains](types.EnumerableContainerTypeClass.md#contains)

___

### enumerate

▸ **enumerate**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

#### Inherited from

[EnumerableContainerTypeClass](types.EnumerableContainerTypeClass.md).[enumerate](types.EnumerableContainerTypeClass.md#enumerate)

___

### everySatisfy

▸ **everySatisfy**<`T`\>(`predicate`): [`Function1`](../modules/functions.md#function1)<[`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`T`\>, `boolean`\>

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

[`Function1`](../modules/functions.md#function1)<[`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`T`\>, `boolean`\>

#### Inherited from

[EnumerableContainerTypeClass](types.EnumerableContainerTypeClass.md).[everySatisfy](types.EnumerableContainerTypeClass.md#everysatisfy)

___

### first

▸ **first**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`T`\>, [`Optional`](../modules/functions.md#optional)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`T`\>, [`Optional`](../modules/functions.md#optional)<`T`\>\>

#### Inherited from

[EnumerableContainerTypeClass](types.EnumerableContainerTypeClass.md).[first](types.EnumerableContainerTypeClass.md#first)

___

### last

▸ **last**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`T`\>, [`Optional`](../modules/functions.md#optional)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`T`\>, [`Optional`](../modules/functions.md#optional)<`T`\>\>

#### Inherited from

[EnumerableContainerTypeClass](types.EnumerableContainerTypeClass.md).[last](types.EnumerableContainerTypeClass.md#last)

___

### noneSatisfy

▸ **noneSatisfy**<`T`\>(`predicate`): [`Function1`](../modules/functions.md#function1)<[`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`T`\>, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`T`\>, `boolean`\>

#### Inherited from

[EnumerableContainerTypeClass](types.EnumerableContainerTypeClass.md).[noneSatisfy](types.EnumerableContainerTypeClass.md#nonesatisfy)

___

### reduce

▸ **reduce**<`T`, `TAcc`\>(`reducer`, `initialValue`): [`Function1`](../modules/functions.md#function1)<[`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`T`\>, `TAcc`\>

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

[`Function1`](../modules/functions.md#function1)<[`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`T`\>, `TAcc`\>

#### Inherited from

[EnumerableContainerTypeClass](types.EnumerableContainerTypeClass.md).[reduce](types.EnumerableContainerTypeClass.md#reduce)

___

### someSatisfy

▸ **someSatisfy**<`T`\>(`predicate`): [`Function1`](../modules/functions.md#function1)<[`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`T`\>, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`T`\>, `boolean`\>

#### Inherited from

[EnumerableContainerTypeClass](types.EnumerableContainerTypeClass.md).[someSatisfy](types.EnumerableContainerTypeClass.md#somesatisfy)

___

### toIterable

▸ **toIterable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`T`\>, `Iterable`<`T`\>\>

Converts the Container to a `IterableLike`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`T`\>, `Iterable`<`T`\>\>

#### Inherited from

[EnumerableContainerTypeClass](types.EnumerableContainerTypeClass.md).[toIterable](types.EnumerableContainerTypeClass.md#toiterable)

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`T`\>, readonly `T`[]\>

Converts the Container to a `ReadonlyArrayContainer`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`T`\>, readonly `T`[]\>

#### Inherited from

[EnumerableContainerTypeClass](types.EnumerableContainerTypeClass.md).[toReadonlyArray](types.EnumerableContainerTypeClass.md#toreadonlyarray)
