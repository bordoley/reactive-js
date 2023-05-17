[Reactive-JS](../README.md) / [Runnable](../modules/Runnable.md) / RunnableModule

# Interface: RunnableModule

[Runnable](../modules/Runnable.md).RunnableModule

## Hierarchy

- [`RunnableContainerTypeClass`](types.RunnableContainerTypeClass.md)<[`Type`](../modules/Runnable.md#type)\>

- [`HigherOrderObservableBaseTypeClass`](types.HigherOrderObservableBaseTypeClass.md)<[`Type`](../modules/Runnable.md#type), [`Type`](../modules/Runnable.md#type)\>

  ↳ **`RunnableModule`**

## Table of contents

### Operator Properties

- [concatAll](Runnable.RunnableModule.md#concatall)
- [concatMap](Runnable.RunnableModule.md#concatmap)
- [concatWith](Runnable.RunnableModule.md#concatwith)

### Transform Properties

- [contains](Runnable.RunnableModule.md#contains)

### Constructor Methods

- [concat](Runnable.RunnableModule.md#concat)
- [empty](Runnable.RunnableModule.md#empty)
- [fromEnumerable](Runnable.RunnableModule.md#fromenumerable)
- [zip](Runnable.RunnableModule.md#zip)

### Operator Methods

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

- [buffer](Runnable.RunnableModule.md#buffer)
- [catchError](Runnable.RunnableModule.md#catcherror)
- [compute](Runnable.RunnableModule.md#compute)
- [flow](Runnable.RunnableModule.md#flow)
- [fromEnumeratorFactory](Runnable.RunnableModule.md#fromenumeratorfactory)
- [fromFactory](Runnable.RunnableModule.md#fromfactory)
- [fromIterable](Runnable.RunnableModule.md#fromiterable)
- [fromOptional](Runnable.RunnableModule.md#fromoptional)
- [fromReadonlyArray](Runnable.RunnableModule.md#fromreadonlyarray)
- [fromValue](Runnable.RunnableModule.md#fromvalue)
- [generate](Runnable.RunnableModule.md#generate)
- [run](Runnable.RunnableModule.md#run)
- [throws](Runnable.RunnableModule.md#throws)

### Transform Methods

- [everySatisfy](Runnable.RunnableModule.md#everysatisfy)
- [first](Runnable.RunnableModule.md#first)
- [last](Runnable.RunnableModule.md#last)
- [noneSatisfy](Runnable.RunnableModule.md#nonesatisfy)
- [reduce](Runnable.RunnableModule.md#reduce)
- [someSatisfy](Runnable.RunnableModule.md#somesatisfy)
- [toReadonlyArray](Runnable.RunnableModule.md#toreadonlyarray)

## Operator Properties

### concatAll

• **concatAll**: <T\>() => [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), [`RunnableLike`](types.RunnableLike.md)<`T`\>, `T`\>

#### Type declaration

▸ <`T`\>(): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), [`RunnableLike`](types.RunnableLike.md)<`T`\>, `T`\>

Converts a higher-order Container into a first-order
Container by concatenating the inner sources in order.

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), [`RunnableLike`](types.RunnableLike.md)<`T`\>, `T`\>

#### Inherited from

[HigherOrderObservableBaseTypeClass](types.HigherOrderObservableBaseTypeClass.md).[concatAll](types.HigherOrderObservableBaseTypeClass.md#concatall)

___

### concatMap

• **concatMap**: <TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, [`RunnableLike`](types.RunnableLike.md)<`TB`\>\>) => [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `TA`, `TB`\>

#### Type declaration

▸ <`TA`, `TB`\>(`selector`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `TA`, `TB`\>

##### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`RunnableLike`](types.RunnableLike.md)<`TB`\>\> |

##### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `TA`, `TB`\>

#### Inherited from

[HigherOrderObservableBaseTypeClass](types.HigherOrderObservableBaseTypeClass.md).[concatMap](types.HigherOrderObservableBaseTypeClass.md#concatmap)

___

### concatWith

• **concatWith**: <T\>(`snd`: [`RunnableLike`](types.RunnableLike.md)<`T`\>, ...`tail`: readonly [`RunnableLike`](types.RunnableLike.md)<`T`\>[]) => [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `T`, `T`\>

#### Type declaration

▸ <`T`\>(`snd`, `...tail`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `T`, `T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`RunnableLike`](types.RunnableLike.md)<`T`\> |
| `...tail` | readonly [`RunnableLike`](types.RunnableLike.md)<`T`\>[] |

##### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](Runnable.RunnableContainer.md), `T`, `T`\>

#### Inherited from

[RunnableContainerTypeClass](types.RunnableContainerTypeClass.md).[concatWith](types.RunnableContainerTypeClass.md#concatwith)

___

## Transform Properties

### contains

• **contains**: <T\>(`value`: `T`, `options?`: { `equality?`: [`Equality`](../modules/functions.md#equality)<`T`\>  }) => [`Function1`](../modules/functions.md#function1)<[`RunnableLike`](types.RunnableLike.md)<`T`\>, `boolean`\>

#### Type declaration

▸ <`T`\>(`value`, `options?`): [`Function1`](../modules/functions.md#function1)<[`RunnableLike`](types.RunnableLike.md)<`T`\>, `boolean`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `options?` | `Object` |
| `options.equality?` | [`Equality`](../modules/functions.md#equality)<`T`\> |

##### Returns

[`Function1`](../modules/functions.md#function1)<[`RunnableLike`](types.RunnableLike.md)<`T`\>, `boolean`\>

#### Inherited from

[RunnableContainerTypeClass](types.RunnableContainerTypeClass.md).[contains](types.RunnableContainerTypeClass.md#contains)

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

[RunnableContainerTypeClass](types.RunnableContainerTypeClass.md).[concat](types.RunnableContainerTypeClass.md#concat)

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

[RunnableContainerTypeClass](types.RunnableContainerTypeClass.md).[empty](types.RunnableContainerTypeClass.md#empty)

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

[RunnableContainerTypeClass](types.RunnableContainerTypeClass.md).[fromEnumerable](types.RunnableContainerTypeClass.md#fromenumerable)

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

[RunnableContainerTypeClass](types.RunnableContainerTypeClass.md).[zip](types.RunnableContainerTypeClass.md#zip)

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

[RunnableContainerTypeClass](types.RunnableContainerTypeClass.md).[zip](types.RunnableContainerTypeClass.md#zip)

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

[RunnableContainerTypeClass](types.RunnableContainerTypeClass.md).[zip](types.RunnableContainerTypeClass.md#zip)

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

[RunnableContainerTypeClass](types.RunnableContainerTypeClass.md).[zip](types.RunnableContainerTypeClass.md#zip)

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

[RunnableContainerTypeClass](types.RunnableContainerTypeClass.md).[zip](types.RunnableContainerTypeClass.md#zip)

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

[RunnableContainerTypeClass](types.RunnableContainerTypeClass.md).[zip](types.RunnableContainerTypeClass.md#zip)

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

[RunnableContainerTypeClass](types.RunnableContainerTypeClass.md).[zip](types.RunnableContainerTypeClass.md#zip)

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

[RunnableContainerTypeClass](types.RunnableContainerTypeClass.md).[zip](types.RunnableContainerTypeClass.md#zip)

___

## Operator Methods

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

[RunnableContainerTypeClass](types.RunnableContainerTypeClass.md).[distinctUntilChanged](types.RunnableContainerTypeClass.md#distinctuntilchanged)

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

[RunnableContainerTypeClass](types.RunnableContainerTypeClass.md).[endWith](types.RunnableContainerTypeClass.md#endwith)

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

[HigherOrderObservableBaseTypeClass](types.HigherOrderObservableBaseTypeClass.md).[exhaust](types.HigherOrderObservableBaseTypeClass.md#exhaust)

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

[HigherOrderObservableBaseTypeClass](types.HigherOrderObservableBaseTypeClass.md).[exhaustMap](types.HigherOrderObservableBaseTypeClass.md#exhaustmap)

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

[RunnableContainerTypeClass](types.RunnableContainerTypeClass.md).[flatMapIterable](types.RunnableContainerTypeClass.md#flatmapiterable)

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

[RunnableContainerTypeClass](types.RunnableContainerTypeClass.md).[forEach](types.RunnableContainerTypeClass.md#foreach)

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

[RunnableContainerTypeClass](types.RunnableContainerTypeClass.md).[ignoreElements](types.RunnableContainerTypeClass.md#ignoreelements)

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

[RunnableContainerTypeClass](types.RunnableContainerTypeClass.md).[keep](types.RunnableContainerTypeClass.md#keep)

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

[RunnableContainerTypeClass](types.RunnableContainerTypeClass.md).[keepType](types.RunnableContainerTypeClass.md#keeptype)

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

[RunnableContainerTypeClass](types.RunnableContainerTypeClass.md).[map](types.RunnableContainerTypeClass.md#map)

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

[RunnableContainerTypeClass](types.RunnableContainerTypeClass.md).[mapTo](types.RunnableContainerTypeClass.md#mapto)

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

[HigherOrderObservableBaseTypeClass](types.HigherOrderObservableBaseTypeClass.md).[mergeAll](types.HigherOrderObservableBaseTypeClass.md#mergeall)

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

[HigherOrderObservableBaseTypeClass](types.HigherOrderObservableBaseTypeClass.md).[mergeMap](types.HigherOrderObservableBaseTypeClass.md#mergemap)

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

[RunnableContainerTypeClass](types.RunnableContainerTypeClass.md).[pairwise](types.RunnableContainerTypeClass.md#pairwise)

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

[RunnableContainerTypeClass](types.RunnableContainerTypeClass.md).[pick](types.RunnableContainerTypeClass.md#pick)

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

[RunnableContainerTypeClass](types.RunnableContainerTypeClass.md).[pick](types.RunnableContainerTypeClass.md#pick)

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

[RunnableContainerTypeClass](types.RunnableContainerTypeClass.md).[pick](types.RunnableContainerTypeClass.md#pick)

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

[RunnableContainerTypeClass](types.RunnableContainerTypeClass.md).[scan](types.RunnableContainerTypeClass.md#scan)

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

[HigherOrderObservableBaseTypeClass](types.HigherOrderObservableBaseTypeClass.md).[scanLast](types.HigherOrderObservableBaseTypeClass.md#scanlast)

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

[HigherOrderObservableBaseTypeClass](types.HigherOrderObservableBaseTypeClass.md).[scanMany](types.HigherOrderObservableBaseTypeClass.md#scanmany)

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

[RunnableContainerTypeClass](types.RunnableContainerTypeClass.md).[skipFirst](types.RunnableContainerTypeClass.md#skipfirst)

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

[RunnableContainerTypeClass](types.RunnableContainerTypeClass.md).[startWith](types.RunnableContainerTypeClass.md#startwith)

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

[HigherOrderObservableBaseTypeClass](types.HigherOrderObservableBaseTypeClass.md).[switchAll](types.HigherOrderObservableBaseTypeClass.md#switchall)

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

[HigherOrderObservableBaseTypeClass](types.HigherOrderObservableBaseTypeClass.md).[switchMap](types.HigherOrderObservableBaseTypeClass.md#switchmap)

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

[RunnableContainerTypeClass](types.RunnableContainerTypeClass.md).[takeFirst](types.RunnableContainerTypeClass.md#takefirst)

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

[RunnableContainerTypeClass](types.RunnableContainerTypeClass.md).[takeLast](types.RunnableContainerTypeClass.md#takelast)

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

[RunnableContainerTypeClass](types.RunnableContainerTypeClass.md).[takeWhile](types.RunnableContainerTypeClass.md#takewhile)

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

[RunnableContainerTypeClass](types.RunnableContainerTypeClass.md).[zipWith](types.RunnableContainerTypeClass.md#zipwith)

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

[RunnableContainerTypeClass](types.RunnableContainerTypeClass.md).[zipWith](types.RunnableContainerTypeClass.md#zipwith)

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

[RunnableContainerTypeClass](types.RunnableContainerTypeClass.md).[zipWith](types.RunnableContainerTypeClass.md#zipwith)

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

[RunnableContainerTypeClass](types.RunnableContainerTypeClass.md).[zipWith](types.RunnableContainerTypeClass.md#zipwith)

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

[RunnableContainerTypeClass](types.RunnableContainerTypeClass.md).[zipWith](types.RunnableContainerTypeClass.md#zipwith)

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

[RunnableContainerTypeClass](types.RunnableContainerTypeClass.md).[zipWith](types.RunnableContainerTypeClass.md#zipwith)

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

[RunnableContainerTypeClass](types.RunnableContainerTypeClass.md).[zipWith](types.RunnableContainerTypeClass.md#zipwith)

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

[RunnableContainerTypeClass](types.RunnableContainerTypeClass.md).[zipWith](types.RunnableContainerTypeClass.md#zipwith)

___

## Other Methods

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

[RunnableContainerTypeClass](types.RunnableContainerTypeClass.md).[buffer](types.RunnableContainerTypeClass.md#buffer)

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

[HigherOrderObservableBaseTypeClass](types.HigherOrderObservableBaseTypeClass.md).[catchError](types.HigherOrderObservableBaseTypeClass.md#catcherror)

___

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

___

### fromEnumeratorFactory

▸ **fromEnumeratorFactory**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Factory`](../modules/functions.md#factory)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Factory`](../modules/functions.md#factory)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Overrides

[RunnableContainerTypeClass](types.RunnableContainerTypeClass.md).[fromEnumeratorFactory](types.RunnableContainerTypeClass.md#fromenumeratorfactory)

▸ **fromEnumeratorFactory**<`T`\>(`options`): [`Function1`](../modules/functions.md#function1)<[`Factory`](../modules/functions.md#factory)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

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

[`Function1`](../modules/functions.md#function1)<[`Factory`](../modules/functions.md#factory)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

#### Overrides

RunnableContainerTypeClass.fromEnumeratorFactory

___

### fromFactory

▸ **fromFactory**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Factory`](../modules/functions.md#factory)<`T`\>, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Factory`](../modules/functions.md#factory)<`T`\>, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Overrides

[RunnableContainerTypeClass](types.RunnableContainerTypeClass.md).[fromFactory](types.RunnableContainerTypeClass.md#fromfactory)

▸ **fromFactory**<`T`\>(`options`): [`Function1`](../modules/functions.md#function1)<[`Factory`](../modules/functions.md#factory)<`T`\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.delay` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Factory`](../modules/functions.md#factory)<`T`\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

#### Overrides

RunnableContainerTypeClass.fromFactory

___

### fromIterable

▸ **fromIterable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Overrides

[RunnableContainerTypeClass](types.RunnableContainerTypeClass.md).[fromIterable](types.RunnableContainerTypeClass.md#fromiterable)

▸ **fromIterable**<`T`\>(`options`): [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

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

[`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

#### Overrides

RunnableContainerTypeClass.fromIterable

___

### fromOptional

▸ **fromOptional**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Overrides

[RunnableContainerTypeClass](types.RunnableContainerTypeClass.md).[fromOptional](types.RunnableContainerTypeClass.md#fromoptional)

▸ **fromOptional**<`T`\>(`options`): [`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.delay` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

#### Overrides

RunnableContainerTypeClass.fromOptional

___

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`\>(): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Overrides

[RunnableContainerTypeClass](types.RunnableContainerTypeClass.md).[fromReadonlyArray](types.RunnableContainerTypeClass.md#fromreadonlyarray)

▸ **fromReadonlyArray**<`T`\>(`options`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

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

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Overrides

RunnableContainerTypeClass.fromReadonlyArray

▸ **fromReadonlyArray**<`T`\>(`options`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

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

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Overrides

RunnableContainerTypeClass.fromReadonlyArray

▸ **fromReadonlyArray**<`T`\>(`options`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

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

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Overrides

RunnableContainerTypeClass.fromReadonlyArray

▸ **fromReadonlyArray**<`T`\>(`options`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.count?` | `number` |
| `options.delay` | `number` |
| `options.delayStart?` | `boolean` |
| `options.start?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

#### Overrides

RunnableContainerTypeClass.fromReadonlyArray

___

### fromValue

▸ **fromValue**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`T`, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`T`, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Overrides

[RunnableContainerTypeClass](types.RunnableContainerTypeClass.md).[fromValue](types.RunnableContainerTypeClass.md#fromvalue)

▸ **fromValue**<`T`\>(`options`): [`Function1`](../modules/functions.md#function1)<`T`, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.delay` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`T`, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

#### Overrides

RunnableContainerTypeClass.fromValue

___

### generate

▸ **generate**<`T`\>(`generator`, `initialValue`): [`EnumerableLike`](types.EnumerableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `generator` | [`Updater`](../modules/functions.md#updater)<`T`\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`T`\> |

#### Returns

[`EnumerableLike`](types.EnumerableLike.md)<`T`\>

▸ **generate**<`T`\>(`generator`, `initialValue`, `options`): [`RunnableLike`](types.RunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `generator` | [`Updater`](../modules/functions.md#updater)<`T`\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`T`\> |
| `options` | `Object` |
| `options.delay` | `number` |
| `options.delayStart?` | `boolean` |

#### Returns

[`RunnableLike`](types.RunnableLike.md)<`T`\>

▸ **generate**<`T`\>(`generator`, `initialValue`, `options?`): [`RunnableLike`](types.RunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `generator` | [`Updater`](../modules/functions.md#updater)<`T`\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`T`\> |
| `options?` | `Object` |
| `options.delay?` | `number` |
| `options.delayStart?` | `boolean` |

#### Returns

[`RunnableLike`](types.RunnableLike.md)<`T`\>

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

[RunnableContainerTypeClass](types.RunnableContainerTypeClass.md).[everySatisfy](types.RunnableContainerTypeClass.md#everysatisfy)

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

[RunnableContainerTypeClass](types.RunnableContainerTypeClass.md).[first](types.RunnableContainerTypeClass.md#first)

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

[RunnableContainerTypeClass](types.RunnableContainerTypeClass.md).[last](types.RunnableContainerTypeClass.md#last)

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

[RunnableContainerTypeClass](types.RunnableContainerTypeClass.md).[noneSatisfy](types.RunnableContainerTypeClass.md#nonesatisfy)

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

[RunnableContainerTypeClass](types.RunnableContainerTypeClass.md).[reduce](types.RunnableContainerTypeClass.md#reduce)

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

[RunnableContainerTypeClass](types.RunnableContainerTypeClass.md).[someSatisfy](types.RunnableContainerTypeClass.md#somesatisfy)

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

[RunnableContainerTypeClass](types.RunnableContainerTypeClass.md).[toReadonlyArray](types.RunnableContainerTypeClass.md#toreadonlyarray)
