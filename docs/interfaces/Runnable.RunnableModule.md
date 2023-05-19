[Reactive-JS](../README.md) / [Runnable](../modules/Runnable.md) / RunnableModule

# Interface: RunnableModule

[Runnable](../modules/Runnable.md).RunnableModule

## Hierarchy

- [`RunnableTypeClass`](types.RunnableTypeClass.md)<[`Type`](../modules/Runnable.md#type)\>

- [`HigherOrderObservableTypeClass`](types.HigherOrderObservableTypeClass.md)<[`Type`](../modules/Runnable.md#type), [`Type`](../modules/Runnable.md#type)\>

  ↳ **`RunnableModule`**

## Table of contents

### Constructor Methods

- [concat](Runnable.RunnableModule.md#concat)
- [empty](Runnable.RunnableModule.md#empty)
- [fromEnumerable](Runnable.RunnableModule.md#fromenumerable)
- [fromEnumeratorFactory](Runnable.RunnableModule.md#fromenumeratorfactory)
- [fromFactory](Runnable.RunnableModule.md#fromfactory)
- [fromIterable](Runnable.RunnableModule.md#fromiterable)
- [fromOptional](Runnable.RunnableModule.md#fromoptional)
- [fromReadonlyArray](Runnable.RunnableModule.md#fromreadonlyarray)
- [fromValue](Runnable.RunnableModule.md#fromvalue)
- [zip](Runnable.RunnableModule.md#zip)

### Operator Methods

- [buffer](Runnable.RunnableModule.md#buffer)
- [catchError](Runnable.RunnableModule.md#catcherror)
- [concatAll](Runnable.RunnableModule.md#concatall)
- [concatMap](Runnable.RunnableModule.md#concatmap)
- [concatWith](Runnable.RunnableModule.md#concatwith)
- [distinctUntilChanged](Runnable.RunnableModule.md#distinctuntilchanged)
- [endWith](Runnable.RunnableModule.md#endwith)
- [exhaust](Runnable.RunnableModule.md#exhaust)
- [exhaustMap](Runnable.RunnableModule.md#exhaustmap)
- [flatMapIterable](Runnable.RunnableModule.md#flatmapiterable)
- [forEach](Runnable.RunnableModule.md#foreach)
- [ignoreElements](Runnable.RunnableModule.md#ignoreelements)
- [keep](Runnable.RunnableModule.md#keep)
- [keepType](Runnable.RunnableModule.md#keeptype)
- [map](Runnable.RunnableModule.md#map)
- [mapTo](Runnable.RunnableModule.md#mapto)
- [mergeAll](Runnable.RunnableModule.md#mergeall)
- [mergeMap](Runnable.RunnableModule.md#mergemap)
- [pairwise](Runnable.RunnableModule.md#pairwise)
- [pick](Runnable.RunnableModule.md#pick)
- [repeat](Runnable.RunnableModule.md#repeat)
- [scan](Runnable.RunnableModule.md#scan)
- [scanLast](Runnable.RunnableModule.md#scanlast)
- [scanMany](Runnable.RunnableModule.md#scanmany)
- [skipFirst](Runnable.RunnableModule.md#skipfirst)
- [startWith](Runnable.RunnableModule.md#startwith)
- [switchAll](Runnable.RunnableModule.md#switchall)
- [switchMap](Runnable.RunnableModule.md#switchmap)
- [takeFirst](Runnable.RunnableModule.md#takefirst)
- [takeLast](Runnable.RunnableModule.md#takelast)
- [takeWhile](Runnable.RunnableModule.md#takewhile)
- [zipWith](Runnable.RunnableModule.md#zipwith)

### Other Methods

- [compute](Runnable.RunnableModule.md#compute)
- [flow](Runnable.RunnableModule.md#flow)
- [run](Runnable.RunnableModule.md#run)
- [throws](Runnable.RunnableModule.md#throws)

### Transform Methods

- [contains](Runnable.RunnableModule.md#contains)
- [everySatisfy](Runnable.RunnableModule.md#everysatisfy)
- [first](Runnable.RunnableModule.md#first)
- [last](Runnable.RunnableModule.md#last)
- [noneSatisfy](Runnable.RunnableModule.md#nonesatisfy)
- [reduce](Runnable.RunnableModule.md#reduce)
- [someSatisfy](Runnable.RunnableModule.md#somesatisfy)
- [toObservable](Runnable.RunnableModule.md#toobservable)
- [toReadonlyArray](Runnable.RunnableModule.md#toreadonlyarray)

## Constructor Methods

### concat

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`RunnableLike`](types.RunnableLike.md)<`T`\>

Returns a Container which emits all values from each source sequentially.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`RunnableLike`](types.RunnableLike.md)<`T`\> |
| `snd` | [`RunnableLike`](types.RunnableLike.md)<`T`\> |
| `...tail` | readonly [`RunnableLike`](types.RunnableLike.md)<`T`\>[] |

#### Returns

[`RunnableLike`](types.RunnableLike.md)<`T`\>

#### Inherited from

[RunnableTypeClass](types.RunnableTypeClass.md).[concat](types.RunnableTypeClass.md#concat)

___

### empty

▸ **empty**<`T`\>(): [`RunnableLike`](types.RunnableLike.md)<`T`\>

Return an Container that emits no items.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`RunnableLike`](types.RunnableLike.md)<`T`\>

#### Inherited from

[RunnableTypeClass](types.RunnableTypeClass.md).[empty](types.RunnableTypeClass.md#empty)

___

### fromEnumerable

▸ **fromEnumerable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

#### Inherited from

[RunnableTypeClass](types.RunnableTypeClass.md).[fromEnumerable](types.RunnableTypeClass.md#fromenumerable)

___

### fromEnumeratorFactory

▸ **fromEnumeratorFactory**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`T`\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`T`\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

#### Inherited from

[RunnableTypeClass](types.RunnableTypeClass.md).[fromEnumeratorFactory](types.RunnableTypeClass.md#fromenumeratorfactory)

___

### fromFactory

▸ **fromFactory**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Factory`](../modules/functions.md#factory)<`T`\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Factory`](../modules/functions.md#factory)<`T`\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

#### Inherited from

[RunnableTypeClass](types.RunnableTypeClass.md).[fromFactory](types.RunnableTypeClass.md#fromfactory)

___

### fromIterable

▸ **fromIterable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

#### Inherited from

[RunnableTypeClass](types.RunnableTypeClass.md).[fromIterable](types.RunnableTypeClass.md#fromiterable)

___

### fromOptional

▸ **fromOptional**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

#### Inherited from

[RunnableTypeClass](types.RunnableTypeClass.md).[fromOptional](types.RunnableTypeClass.md#fromoptional)

___

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

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

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

#### Inherited from

[RunnableTypeClass](types.RunnableTypeClass.md).[fromReadonlyArray](types.RunnableTypeClass.md#fromreadonlyarray)

___

### fromValue

▸ **fromValue**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`T`, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`T`, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

#### Inherited from

[RunnableTypeClass](types.RunnableTypeClass.md).[fromValue](types.RunnableTypeClass.md#fromvalue)

___

### zip

▸ **zip**<`TA`, `TB`\>(`a`, `b`): [`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`]\>

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
| `a` | [`RunnableLike`](types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](types.RunnableLike.md)<`TB`\> |

#### Returns

[`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`]\>

#### Inherited from

[RunnableTypeClass](types.RunnableTypeClass.md).[zip](types.RunnableTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableLike`](types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](types.RunnableLike.md)<`TC`\> |

#### Returns

[`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Inherited from

[RunnableTypeClass](types.RunnableTypeClass.md).[zip](types.RunnableTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`RunnableLike`](types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](types.RunnableLike.md)<`TD`\> |

#### Returns

[`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Inherited from

[RunnableTypeClass](types.RunnableTypeClass.md).[zip](types.RunnableTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`RunnableLike`](types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](types.RunnableLike.md)<`TE`\> |

#### Returns

[`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Inherited from

[RunnableTypeClass](types.RunnableTypeClass.md).[zip](types.RunnableTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`RunnableLike`](types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](types.RunnableLike.md)<`TF`\> |

#### Returns

[`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Inherited from

[RunnableTypeClass](types.RunnableTypeClass.md).[zip](types.RunnableTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`RunnableLike`](types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](types.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](types.RunnableLike.md)<`TG`\> |

#### Returns

[`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Inherited from

[RunnableTypeClass](types.RunnableTypeClass.md).[zip](types.RunnableTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`RunnableLike`](types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](types.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](types.RunnableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](types.RunnableLike.md)<`TH`\> |

#### Returns

[`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Inherited from

[RunnableTypeClass](types.RunnableTypeClass.md).[zip](types.RunnableTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`RunnableLike`](types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](types.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](types.RunnableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](types.RunnableLike.md)<`TH`\> |
| `i` | [`RunnableLike`](types.RunnableLike.md)<`TI`\> |

#### Returns

[`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Inherited from

[RunnableTypeClass](types.RunnableTypeClass.md).[zip](types.RunnableTypeClass.md#zip)

___

## Operator Methods

### buffer

▸ **buffer**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `T`, readonly `T`[]\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `T`, readonly `T`[]\>

#### Inherited from

[RunnableTypeClass](types.RunnableTypeClass.md).[buffer](types.RunnableTypeClass.md#buffer)

___

### catchError

▸ **catchError**<`T`\>(`onError`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `onError` | [`Function2`](../modules/functions.md#function2)<`Error`, [`RunnableLike`](types.RunnableLike.md)<`T`\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `T`, `T`\>

#### Inherited from

[HigherOrderObservableTypeClass](types.HigherOrderObservableTypeClass.md).[catchError](types.HigherOrderObservableTypeClass.md#catcherror)

___

### concatAll

▸ **concatAll**<`T`\>(): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), [`RunnableLike`](types.RunnableLike.md)<`T`\>, `T`\>

Converts a higher-order Container into a first-order
Container by concatenating the inner sources in order.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), [`RunnableLike`](types.RunnableLike.md)<`T`\>, `T`\>

#### Inherited from

[HigherOrderObservableTypeClass](types.HigherOrderObservableTypeClass.md).[concatAll](types.HigherOrderObservableTypeClass.md#concatall)

___

### concatMap

▸ **concatMap**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`RunnableLike`](types.RunnableLike.md)<`TB`\>\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `TA`, `TB`\>

#### Inherited from

[HigherOrderObservableTypeClass](types.HigherOrderObservableTypeClass.md).[concatMap](types.HigherOrderObservableTypeClass.md#concatmap)

___

### concatWith

▸ **concatWith**<`T`\>(`snd`, `...tail`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`RunnableLike`](types.RunnableLike.md)<`T`\> |
| `...tail` | readonly [`RunnableLike`](types.RunnableLike.md)<`T`\>[] |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `T`, `T`\>

#### Inherited from

[RunnableTypeClass](types.RunnableTypeClass.md).[concatWith](types.RunnableTypeClass.md#concatwith)

___

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `T`, `T`\>

#### Inherited from

[RunnableTypeClass](types.RunnableTypeClass.md).[distinctUntilChanged](types.RunnableTypeClass.md#distinctuntilchanged)

___

### endWith

▸ **endWith**<`T`\>(`value`, `...values`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `T`, `T`\>

#### Inherited from

[RunnableTypeClass](types.RunnableTypeClass.md).[endWith](types.RunnableTypeClass.md#endwith)

___

### exhaust

▸ **exhaust**<`T`\>(): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), [`RunnableLike`](types.RunnableLike.md)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), [`RunnableLike`](types.RunnableLike.md)<`T`\>, `T`\>

#### Inherited from

[HigherOrderObservableTypeClass](types.HigherOrderObservableTypeClass.md).[exhaust](types.HigherOrderObservableTypeClass.md#exhaust)

___

### exhaustMap

▸ **exhaustMap**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`RunnableLike`](types.RunnableLike.md)<`TB`\>\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `TA`, `TB`\>

#### Inherited from

[HigherOrderObservableTypeClass](types.HigherOrderObservableTypeClass.md).[exhaustMap](types.HigherOrderObservableTypeClass.md#exhaustmap)

___

### flatMapIterable

▸ **flatMapIterable**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `TA`, `TB`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `TA`, `TB`\>

#### Inherited from

[RunnableTypeClass](types.RunnableTypeClass.md).[flatMapIterable](types.RunnableTypeClass.md#flatmapiterable)

___

### forEach

▸ **forEach**<`T`\>(`effect`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `T`, `T`\>

#### Inherited from

[RunnableTypeClass](types.RunnableTypeClass.md).[forEach](types.RunnableTypeClass.md#foreach)

___

### ignoreElements

▸ **ignoreElements**<`T`\>(): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `unknown`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `unknown`, `T`\>

#### Inherited from

[RunnableTypeClass](types.RunnableTypeClass.md).[ignoreElements](types.RunnableTypeClass.md#ignoreelements)

___

### keep

▸ **keep**<`T`\>(`predicate`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `T`, `T`\>

#### Inherited from

[RunnableTypeClass](types.RunnableTypeClass.md).[keep](types.RunnableTypeClass.md#keep)

___

### keepType

▸ **keepType**<`TA`, `TB`\>(`predicate`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `TA`, `TB`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `TA`, `TB`\>

#### Inherited from

[RunnableTypeClass](types.RunnableTypeClass.md).[keepType](types.RunnableTypeClass.md#keeptype)

___

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `TA`, `TB`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `TA`, `TB`\>

#### Inherited from

[RunnableTypeClass](types.RunnableTypeClass.md).[map](types.RunnableTypeClass.md#map)

___

### mapTo

▸ **mapTo**<`TA`, `TB`\>(`value`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `TA`, `TB`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `TA`, `TB`\>

#### Inherited from

[RunnableTypeClass](types.RunnableTypeClass.md).[mapTo](types.RunnableTypeClass.md#mapto)

___

### mergeAll

▸ **mergeAll**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), [`RunnableLike`](types.RunnableLike.md)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.concurrency?` | `number` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), [`RunnableLike`](types.RunnableLike.md)<`T`\>, `T`\>

#### Inherited from

[HigherOrderObservableTypeClass](types.HigherOrderObservableTypeClass.md).[mergeAll](types.HigherOrderObservableTypeClass.md#mergeall)

___

### mergeMap

▸ **mergeMap**<`TA`, `TB`\>(`selector`, `options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`RunnableLike`](types.RunnableLike.md)<`TB`\>\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.concurrency?` | `number` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `TA`, `TB`\>

#### Inherited from

[HigherOrderObservableTypeClass](types.HigherOrderObservableTypeClass.md).[mergeMap](types.HigherOrderObservableTypeClass.md#mergemap)

___

### pairwise

▸ **pairwise**<`T`\>(): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `T`, readonly [`T`, `T`]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `T`, readonly [`T`, `T`]\>

#### Inherited from

[RunnableTypeClass](types.RunnableTypeClass.md).[pairwise](types.RunnableTypeClass.md#pairwise)

___

### pick

▸ **pick**<`T`, `TKey`\>(`key`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `T`, `T`[`TKey`]\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `T`, `T`[`TKey`]\>

#### Inherited from

[RunnableTypeClass](types.RunnableTypeClass.md).[pick](types.RunnableTypeClass.md#pick)

▸ **pick**<`T`, `TKeyA`, `TKeyB`\>(`keyA`, `keyB`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

#### Inherited from

[RunnableTypeClass](types.RunnableTypeClass.md).[pick](types.RunnableTypeClass.md#pick)

▸ **pick**<`T`, `TKeyA`, `TKeyB`, `TKeyC`\>(`keyA`, `keyB`, `keyC`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

#### Inherited from

[RunnableTypeClass](types.RunnableTypeClass.md).[pick](types.RunnableTypeClass.md#pick)

___

### repeat

▸ **repeat**<`T`\>(`count`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `T`, `T`\>

#### Inherited from

[RunnableTypeClass](types.RunnableTypeClass.md).[repeat](types.RunnableTypeClass.md#repeat)

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `T`, `TAcc`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `T`, `TAcc`\>

#### Inherited from

[RunnableTypeClass](types.RunnableTypeClass.md).[scan](types.RunnableTypeClass.md#scan)

___

### scanLast

▸ **scanLast**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `T`, `TAcc`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Function2`](../modules/functions.md#function2)<`TAcc`, `T`, [`RunnableLike`](types.RunnableLike.md)<`TAcc`\>\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `T`, `TAcc`\>

#### Inherited from

[HigherOrderObservableTypeClass](types.HigherOrderObservableTypeClass.md).[scanLast](types.HigherOrderObservableTypeClass.md#scanlast)

___

### scanMany

▸ **scanMany**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `T`, `TAcc`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Function2`](../modules/functions.md#function2)<`TAcc`, `T`, [`RunnableLike`](types.RunnableLike.md)<`TAcc`\>\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `T`, `TAcc`\>

#### Inherited from

[HigherOrderObservableTypeClass](types.HigherOrderObservableTypeClass.md).[scanMany](types.HigherOrderObservableTypeClass.md#scanmany)

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `T`, `T`\>

#### Inherited from

[RunnableTypeClass](types.RunnableTypeClass.md).[skipFirst](types.RunnableTypeClass.md#skipfirst)

___

### startWith

▸ **startWith**<`T`\>(`value`, `...values`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `T`, `T`\>

#### Inherited from

[RunnableTypeClass](types.RunnableTypeClass.md).[startWith](types.RunnableTypeClass.md#startwith)

___

### switchAll

▸ **switchAll**<`T`\>(): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), [`RunnableLike`](types.RunnableLike.md)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), [`RunnableLike`](types.RunnableLike.md)<`T`\>, `T`\>

#### Inherited from

[HigherOrderObservableTypeClass](types.HigherOrderObservableTypeClass.md).[switchAll](types.HigherOrderObservableTypeClass.md#switchall)

___

### switchMap

▸ **switchMap**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`RunnableLike`](types.RunnableLike.md)<`TB`\>\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `TA`, `TB`\>

#### Inherited from

[HigherOrderObservableTypeClass](types.HigherOrderObservableTypeClass.md).[switchMap](types.HigherOrderObservableTypeClass.md#switchmap)

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `T`, `T`\>

#### Inherited from

[RunnableTypeClass](types.RunnableTypeClass.md).[takeFirst](types.RunnableTypeClass.md#takefirst)

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `T`, `T`\>

#### Inherited from

[RunnableTypeClass](types.RunnableTypeClass.md).[takeLast](types.RunnableTypeClass.md#takelast)

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `T`, `T`\>

#### Inherited from

[RunnableTypeClass](types.RunnableTypeClass.md).[takeWhile](types.RunnableTypeClass.md#takewhile)

___

### zipWith

▸ **zipWith**<`TA`, `TB`\>(`b`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `TA`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`RunnableLike`](types.RunnableLike.md)<`TB`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `TA`, readonly [`TA`, `TB`]\>

#### Inherited from

[RunnableTypeClass](types.RunnableTypeClass.md).[zipWith](types.RunnableTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`\>(`b`, `c`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`RunnableLike`](types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](types.RunnableLike.md)<`TC`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`]\>

#### Inherited from

[RunnableTypeClass](types.RunnableTypeClass.md).[zipWith](types.RunnableTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`\>(`b`, `c`, `d`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `b` | [`RunnableLike`](types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](types.RunnableLike.md)<`TD`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Inherited from

[RunnableTypeClass](types.RunnableTypeClass.md).[zipWith](types.RunnableTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`b`, `c`, `d`, `e`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `b` | [`RunnableLike`](types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](types.RunnableLike.md)<`TE`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Inherited from

[RunnableTypeClass](types.RunnableTypeClass.md).[zipWith](types.RunnableTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`b`, `c`, `d`, `e`, `f`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `b` | [`RunnableLike`](types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](types.RunnableLike.md)<`TF`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Inherited from

[RunnableTypeClass](types.RunnableTypeClass.md).[zipWith](types.RunnableTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`b`, `c`, `d`, `e`, `f`, `g`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `b` | [`RunnableLike`](types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](types.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](types.RunnableLike.md)<`TG`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Inherited from

[RunnableTypeClass](types.RunnableTypeClass.md).[zipWith](types.RunnableTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `b` | [`RunnableLike`](types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](types.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](types.RunnableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](types.RunnableLike.md)<`TH`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Inherited from

[RunnableTypeClass](types.RunnableTypeClass.md).[zipWith](types.RunnableTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `b` | [`RunnableLike`](types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](types.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](types.RunnableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](types.RunnableLike.md)<`TH`\> |
| `i` | [`RunnableLike`](types.RunnableLike.md)<`TI`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Inherited from

[RunnableTypeClass](types.RunnableTypeClass.md).[zipWith](types.RunnableTypeClass.md#zipwith)

___

## Other Methods

### compute

▸ **compute**<`T`\>(`computation`, `options?`): [`RunnableLike`](types.RunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `computation` | [`Factory`](../modules/functions.md#factory)<`T`\> |
| `options?` | `Object` |
| `options.mode?` | ``"batched"`` \| ``"combine-latest"`` |

#### Returns

[`RunnableLike`](types.RunnableLike.md)<`T`\>

___

### flow

▸ **flow**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`RunnableLike`](types.RunnableLike.md)<`T`\>, [`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\> & [`DisposableLike`](types.DisposableLike.md)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](types.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`RunnableLike`](types.RunnableLike.md)<`T`\>, [`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\> & [`DisposableLike`](types.DisposableLike.md)\>

#### Inherited from

[RunnableTypeClass](types.RunnableTypeClass.md).[flow](types.RunnableTypeClass.md#flow)

___

### run

▸ **run**<`T`\>(`options?`): [`SideEffect1`](../modules/functions.md#sideeffect1)<[`RunnableLike`](types.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.backpressureStrategy` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`SideEffect1`](../modules/functions.md#sideeffect1)<[`RunnableLike`](types.RunnableLike.md)<`T`\>\>

___

### throws

▸ **throws**<`T`\>(): [`EnumerableLike`](types.EnumerableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`EnumerableLike`](types.EnumerableLike.md)<`T`\>

▸ **throws**<`T`\>(`options`): [`EnumerableLike`](types.EnumerableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.raise` | [`Factory`](../modules/functions.md#factory)<`unknown`\> |

#### Returns

[`EnumerableLike`](types.EnumerableLike.md)<`T`\>

▸ **throws**<`T`\>(`options`): [`RunnableLike`](types.RunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.delay` | `number` |
| `options.raise?` | [`Factory`](../modules/functions.md#factory)<`unknown`\> |

#### Returns

[`RunnableLike`](types.RunnableLike.md)<`T`\>

___

## Transform Methods

### contains

▸ **contains**<`T`\>(`value`, `options?`): [`Function1`](../modules/functions.md#function1)<[`RunnableLike`](types.RunnableLike.md)<`T`\>, `boolean`\>

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

[`Function1`](../modules/functions.md#function1)<[`RunnableLike`](types.RunnableLike.md)<`T`\>, `boolean`\>

#### Inherited from

[RunnableTypeClass](types.RunnableTypeClass.md).[contains](types.RunnableTypeClass.md#contains)

___

### everySatisfy

▸ **everySatisfy**<`T`\>(`predicate`): [`Function1`](../modules/functions.md#function1)<[`RunnableLike`](types.RunnableLike.md)<`T`\>, `boolean`\>

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

[`Function1`](../modules/functions.md#function1)<[`RunnableLike`](types.RunnableLike.md)<`T`\>, `boolean`\>

#### Inherited from

[RunnableTypeClass](types.RunnableTypeClass.md).[everySatisfy](types.RunnableTypeClass.md#everysatisfy)

___

### first

▸ **first**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`RunnableLike`](types.RunnableLike.md)<`T`\>, [`Optional`](../modules/functions.md#optional)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`RunnableLike`](types.RunnableLike.md)<`T`\>, [`Optional`](../modules/functions.md#optional)<`T`\>\>

#### Inherited from

[RunnableTypeClass](types.RunnableTypeClass.md).[first](types.RunnableTypeClass.md#first)

___

### last

▸ **last**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`RunnableLike`](types.RunnableLike.md)<`T`\>, [`Optional`](../modules/functions.md#optional)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`RunnableLike`](types.RunnableLike.md)<`T`\>, [`Optional`](../modules/functions.md#optional)<`T`\>\>

#### Inherited from

[RunnableTypeClass](types.RunnableTypeClass.md).[last](types.RunnableTypeClass.md#last)

___

### noneSatisfy

▸ **noneSatisfy**<`T`\>(`predicate`): [`Function1`](../modules/functions.md#function1)<[`RunnableLike`](types.RunnableLike.md)<`T`\>, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`RunnableLike`](types.RunnableLike.md)<`T`\>, `boolean`\>

#### Inherited from

[RunnableTypeClass](types.RunnableTypeClass.md).[noneSatisfy](types.RunnableTypeClass.md#nonesatisfy)

___

### reduce

▸ **reduce**<`T`, `TAcc`\>(`reducer`, `initialValue`): [`Function1`](../modules/functions.md#function1)<[`RunnableLike`](types.RunnableLike.md)<`T`\>, `TAcc`\>

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

[`Function1`](../modules/functions.md#function1)<[`RunnableLike`](types.RunnableLike.md)<`T`\>, `TAcc`\>

#### Inherited from

[RunnableTypeClass](types.RunnableTypeClass.md).[reduce](types.RunnableTypeClass.md#reduce)

___

### someSatisfy

▸ **someSatisfy**<`T`\>(`predicate`): [`Function1`](../modules/functions.md#function1)<[`RunnableLike`](types.RunnableLike.md)<`T`\>, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`RunnableLike`](types.RunnableLike.md)<`T`\>, `boolean`\>

#### Inherited from

[RunnableTypeClass](types.RunnableTypeClass.md).[someSatisfy](types.RunnableTypeClass.md#somesatisfy)

___

### toObservable

▸ **toObservable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`RunnableLike`](types.RunnableLike.md)<`T`\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`RunnableLike`](types.RunnableLike.md)<`T`\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

#### Inherited from

[RunnableTypeClass](types.RunnableTypeClass.md).[toObservable](types.RunnableTypeClass.md#toobservable)

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`RunnableLike`](types.RunnableLike.md)<`T`\>, readonly `T`[]\>

Converts the Container to a `ReadonlyArrayContainer`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`RunnableLike`](types.RunnableLike.md)<`T`\>, readonly `T`[]\>

#### Inherited from

[RunnableTypeClass](types.RunnableTypeClass.md).[toReadonlyArray](types.RunnableTypeClass.md#toreadonlyarray)
