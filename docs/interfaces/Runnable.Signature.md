[Reactive-JS](../README.md) / [Runnable](../modules/Runnable.md) / Signature

# Interface: Signature

[Runnable](../modules/Runnable.md).Signature

## Hierarchy

- [`RunnableContainerTypeClass`](type_classes.RunnableContainerTypeClass.md)<[`Type`](../modules/Runnable.md#type)\>

- [`HigherOrderObservableBaseTypeClass`](type_classes.HigherOrderObservableBaseTypeClass.md)<[`Type`](../modules/Runnable.md#type), [`Type`](../modules/Runnable.md#type)\>

  ↳ **`Signature`**

## Table of contents

### Operator Properties

- [concatAll](Runnable.Signature.md#concatall)
- [concatMap](Runnable.Signature.md#concatmap)
- [concatWith](Runnable.Signature.md#concatwith)

### Transform Properties

- [contains](Runnable.Signature.md#contains)

### Constructor Methods

- [concat](Runnable.Signature.md#concat)
- [empty](Runnable.Signature.md#empty)
- [fromEnumeratorFactory](Runnable.Signature.md#fromenumeratorfactory)
- [fromFactory](Runnable.Signature.md#fromfactory)
- [fromIterable](Runnable.Signature.md#fromiterable)
- [fromOptional](Runnable.Signature.md#fromoptional)
- [fromReadonlyArray](Runnable.Signature.md#fromreadonlyarray)
- [fromValue](Runnable.Signature.md#fromvalue)
- [zip](Runnable.Signature.md#zip)

### Operator Methods

- [distinctUntilChanged](Runnable.Signature.md#distinctuntilchanged)
- [endWith](Runnable.Signature.md#endwith)
- [exhaust](Runnable.Signature.md#exhaust)
- [exhaustMap](Runnable.Signature.md#exhaustmap)
- [flatMapIterable](Runnable.Signature.md#flatmapiterable)
- [forEach](Runnable.Signature.md#foreach)
- [keep](Runnable.Signature.md#keep)
- [keepType](Runnable.Signature.md#keeptype)
- [map](Runnable.Signature.md#map)
- [mapTo](Runnable.Signature.md#mapto)
- [mergeAll](Runnable.Signature.md#mergeall)
- [mergeMap](Runnable.Signature.md#mergemap)
- [pairwise](Runnable.Signature.md#pairwise)
- [pick](Runnable.Signature.md#pick)
- [scan](Runnable.Signature.md#scan)
- [skipFirst](Runnable.Signature.md#skipfirst)
- [startWith](Runnable.Signature.md#startwith)
- [switchAll](Runnable.Signature.md#switchall)
- [switchMap](Runnable.Signature.md#switchmap)
- [takeFirst](Runnable.Signature.md#takefirst)
- [takeLast](Runnable.Signature.md#takelast)
- [takeWhile](Runnable.Signature.md#takewhile)
- [zipWith](Runnable.Signature.md#zipwith)

### Other Methods

- [compute](Runnable.Signature.md#compute)
- [flow](Runnable.Signature.md#flow)
- [run](Runnable.Signature.md#run)
- [throttle](Runnable.Signature.md#throttle)

### Transform Methods

- [everySatisfy](Runnable.Signature.md#everysatisfy)
- [first](Runnable.Signature.md#first)
- [last](Runnable.Signature.md#last)
- [noneSatisfy](Runnable.Signature.md#nonesatisfy)
- [reduce](Runnable.Signature.md#reduce)
- [someSatisfy](Runnable.Signature.md#somesatisfy)
- [toReadonlyArray](Runnable.Signature.md#toreadonlyarray)

## Operator Properties

### concatAll

• **concatAll**: <T\>() => [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](types.RunnableContainer.md), [`RunnableLike`](types.RunnableLike.md)<`T`\>, `T`\>

#### Type declaration

▸ <`T`\>(): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](types.RunnableContainer.md), [`RunnableLike`](types.RunnableLike.md)<`T`\>, `T`\>

Converts a higher-order Container into a first-order
Container by concatenating the inner sources in order.

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](types.RunnableContainer.md), [`RunnableLike`](types.RunnableLike.md)<`T`\>, `T`\>

#### Inherited from

[HigherOrderObservableBaseTypeClass](type_classes.HigherOrderObservableBaseTypeClass.md).[concatAll](type_classes.HigherOrderObservableBaseTypeClass.md#concatall)

___

### concatMap

• **concatMap**: <TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, [`RunnableLike`](types.RunnableLike.md)<`TB`\>\>) => [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](types.RunnableContainer.md), `TA`, `TB`\>

#### Type declaration

▸ <`TA`, `TB`\>(`selector`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](types.RunnableContainer.md), `TA`, `TB`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](types.RunnableContainer.md), `TA`, `TB`\>

#### Inherited from

[HigherOrderObservableBaseTypeClass](type_classes.HigherOrderObservableBaseTypeClass.md).[concatMap](type_classes.HigherOrderObservableBaseTypeClass.md#concatmap)

___

### concatWith

• **concatWith**: <T\>(`snd`: [`RunnableLike`](types.RunnableLike.md)<`T`\>, ...`tail`: readonly [`RunnableLike`](types.RunnableLike.md)<`T`\>[]) => [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](types.RunnableContainer.md), `T`, `T`\>

#### Type declaration

▸ <`T`\>(`snd`, `...tail`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](types.RunnableContainer.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](types.RunnableContainer.md), `T`, `T`\>

#### Inherited from

[RunnableContainerTypeClass](type_classes.RunnableContainerTypeClass.md).[concatWith](type_classes.RunnableContainerTypeClass.md#concatwith)

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

[RunnableContainerTypeClass](type_classes.RunnableContainerTypeClass.md).[contains](type_classes.RunnableContainerTypeClass.md#contains)

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

[RunnableContainerTypeClass](type_classes.RunnableContainerTypeClass.md).[concat](type_classes.RunnableContainerTypeClass.md#concat)

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

[RunnableContainerTypeClass](type_classes.RunnableContainerTypeClass.md).[empty](type_classes.RunnableContainerTypeClass.md#empty)

___

### fromEnumeratorFactory

▸ **fromEnumeratorFactory**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Factory`](../modules/functions.md#factory)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Factory`](../modules/functions.md#factory)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

#### Inherited from

[RunnableContainerTypeClass](type_classes.RunnableContainerTypeClass.md).[fromEnumeratorFactory](type_classes.RunnableContainerTypeClass.md#fromenumeratorfactory)

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

[RunnableContainerTypeClass](type_classes.RunnableContainerTypeClass.md).[fromFactory](type_classes.RunnableContainerTypeClass.md#fromfactory)

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

[RunnableContainerTypeClass](type_classes.RunnableContainerTypeClass.md).[fromIterable](type_classes.RunnableContainerTypeClass.md#fromiterable)

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

[RunnableContainerTypeClass](type_classes.RunnableContainerTypeClass.md).[fromOptional](type_classes.RunnableContainerTypeClass.md#fromoptional)

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

[RunnableContainerTypeClass](type_classes.RunnableContainerTypeClass.md).[fromReadonlyArray](type_classes.RunnableContainerTypeClass.md#fromreadonlyarray)

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

[RunnableContainerTypeClass](type_classes.RunnableContainerTypeClass.md).[fromValue](type_classes.RunnableContainerTypeClass.md#fromvalue)

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

[RunnableContainerTypeClass](type_classes.RunnableContainerTypeClass.md).[zip](type_classes.RunnableContainerTypeClass.md#zip)

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

[RunnableContainerTypeClass](type_classes.RunnableContainerTypeClass.md).[zip](type_classes.RunnableContainerTypeClass.md#zip)

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

[RunnableContainerTypeClass](type_classes.RunnableContainerTypeClass.md).[zip](type_classes.RunnableContainerTypeClass.md#zip)

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

[RunnableContainerTypeClass](type_classes.RunnableContainerTypeClass.md).[zip](type_classes.RunnableContainerTypeClass.md#zip)

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

[RunnableContainerTypeClass](type_classes.RunnableContainerTypeClass.md).[zip](type_classes.RunnableContainerTypeClass.md#zip)

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

[RunnableContainerTypeClass](type_classes.RunnableContainerTypeClass.md).[zip](type_classes.RunnableContainerTypeClass.md#zip)

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

[RunnableContainerTypeClass](type_classes.RunnableContainerTypeClass.md).[zip](type_classes.RunnableContainerTypeClass.md#zip)

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

[RunnableContainerTypeClass](type_classes.RunnableContainerTypeClass.md).[zip](type_classes.RunnableContainerTypeClass.md#zip)

___

## Operator Methods

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](types.RunnableContainer.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](types.RunnableContainer.md), `T`, `T`\>

#### Inherited from

[RunnableContainerTypeClass](type_classes.RunnableContainerTypeClass.md).[distinctUntilChanged](type_classes.RunnableContainerTypeClass.md#distinctuntilchanged)

___

### endWith

▸ **endWith**<`T`\>(`value`, `...values`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](types.RunnableContainer.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](types.RunnableContainer.md), `T`, `T`\>

#### Inherited from

[RunnableContainerTypeClass](type_classes.RunnableContainerTypeClass.md).[endWith](type_classes.RunnableContainerTypeClass.md#endwith)

___

### exhaust

▸ **exhaust**<`T`\>(): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](types.RunnableContainer.md), [`RunnableLike`](types.RunnableLike.md)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](types.RunnableContainer.md), [`RunnableLike`](types.RunnableLike.md)<`T`\>, `T`\>

#### Inherited from

[HigherOrderObservableBaseTypeClass](type_classes.HigherOrderObservableBaseTypeClass.md).[exhaust](type_classes.HigherOrderObservableBaseTypeClass.md#exhaust)

___

### exhaustMap

▸ **exhaustMap**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](types.RunnableContainer.md), `TA`, `TB`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](types.RunnableContainer.md), `TA`, `TB`\>

#### Inherited from

[HigherOrderObservableBaseTypeClass](type_classes.HigherOrderObservableBaseTypeClass.md).[exhaustMap](type_classes.HigherOrderObservableBaseTypeClass.md#exhaustmap)

___

### flatMapIterable

▸ **flatMapIterable**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](types.RunnableContainer.md), `TA`, `TB`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](types.RunnableContainer.md), `TA`, `TB`\>

#### Inherited from

[HigherOrderObservableBaseTypeClass](type_classes.HigherOrderObservableBaseTypeClass.md).[flatMapIterable](type_classes.HigherOrderObservableBaseTypeClass.md#flatmapiterable)

___

### forEach

▸ **forEach**<`T`\>(`effect`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](types.RunnableContainer.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](types.RunnableContainer.md), `T`, `T`\>

#### Inherited from

[RunnableContainerTypeClass](type_classes.RunnableContainerTypeClass.md).[forEach](type_classes.RunnableContainerTypeClass.md#foreach)

___

### keep

▸ **keep**<`T`\>(`predicate`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](types.RunnableContainer.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](types.RunnableContainer.md), `T`, `T`\>

#### Inherited from

[RunnableContainerTypeClass](type_classes.RunnableContainerTypeClass.md).[keep](type_classes.RunnableContainerTypeClass.md#keep)

___

### keepType

▸ **keepType**<`TA`, `TB`\>(`predicate`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](types.RunnableContainer.md), `TA`, `TB`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](types.RunnableContainer.md), `TA`, `TB`\>

#### Inherited from

[RunnableContainerTypeClass](type_classes.RunnableContainerTypeClass.md).[keepType](type_classes.RunnableContainerTypeClass.md#keeptype)

___

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](types.RunnableContainer.md), `TA`, `TB`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](types.RunnableContainer.md), `TA`, `TB`\>

#### Inherited from

[RunnableContainerTypeClass](type_classes.RunnableContainerTypeClass.md).[map](type_classes.RunnableContainerTypeClass.md#map)

___

### mapTo

▸ **mapTo**<`TA`, `TB`\>(`value`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](types.RunnableContainer.md), `TA`, `TB`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](types.RunnableContainer.md), `TA`, `TB`\>

#### Inherited from

[RunnableContainerTypeClass](type_classes.RunnableContainerTypeClass.md).[mapTo](type_classes.RunnableContainerTypeClass.md#mapto)

___

### mergeAll

▸ **mergeAll**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](types.RunnableContainer.md), [`RunnableLike`](types.RunnableLike.md)<`T`\>, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](types.RunnableContainer.md), [`RunnableLike`](types.RunnableLike.md)<`T`\>, `T`\>

#### Inherited from

[HigherOrderObservableBaseTypeClass](type_classes.HigherOrderObservableBaseTypeClass.md).[mergeAll](type_classes.HigherOrderObservableBaseTypeClass.md#mergeall)

___

### mergeMap

▸ **mergeMap**<`TA`, `TB`\>(`selector`, `options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](types.RunnableContainer.md), `TA`, `TB`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](types.RunnableContainer.md), `TA`, `TB`\>

#### Inherited from

[HigherOrderObservableBaseTypeClass](type_classes.HigherOrderObservableBaseTypeClass.md).[mergeMap](type_classes.HigherOrderObservableBaseTypeClass.md#mergemap)

___

### pairwise

▸ **pairwise**<`T`\>(): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](types.RunnableContainer.md), `T`, readonly [`T`, `T`]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](types.RunnableContainer.md), `T`, readonly [`T`, `T`]\>

#### Inherited from

[RunnableContainerTypeClass](type_classes.RunnableContainerTypeClass.md).[pairwise](type_classes.RunnableContainerTypeClass.md#pairwise)

___

### pick

▸ **pick**<`T`, `TKey`\>(`key`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](types.RunnableContainer.md), `T`, `T`[`TKey`]\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](types.RunnableContainer.md), `T`, `T`[`TKey`]\>

#### Inherited from

[RunnableContainerTypeClass](type_classes.RunnableContainerTypeClass.md).[pick](type_classes.RunnableContainerTypeClass.md#pick)

▸ **pick**<`T`, `TKeyA`, `TKeyB`\>(`keyA`, `keyB`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](types.RunnableContainer.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](types.RunnableContainer.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

#### Inherited from

[RunnableContainerTypeClass](type_classes.RunnableContainerTypeClass.md).[pick](type_classes.RunnableContainerTypeClass.md#pick)

▸ **pick**<`T`, `TKeyA`, `TKeyB`, `TKeyC`\>(`keyA`, `keyB`, `keyC`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](types.RunnableContainer.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](types.RunnableContainer.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

#### Inherited from

[RunnableContainerTypeClass](type_classes.RunnableContainerTypeClass.md).[pick](type_classes.RunnableContainerTypeClass.md#pick)

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](types.RunnableContainer.md), `T`, `TAcc`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](types.RunnableContainer.md), `T`, `TAcc`\>

#### Inherited from

[RunnableContainerTypeClass](type_classes.RunnableContainerTypeClass.md).[scan](type_classes.RunnableContainerTypeClass.md#scan)

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](types.RunnableContainer.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](types.RunnableContainer.md), `T`, `T`\>

#### Inherited from

[RunnableContainerTypeClass](type_classes.RunnableContainerTypeClass.md).[skipFirst](type_classes.RunnableContainerTypeClass.md#skipfirst)

___

### startWith

▸ **startWith**<`T`\>(`value`, `...values`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](types.RunnableContainer.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](types.RunnableContainer.md), `T`, `T`\>

#### Inherited from

[RunnableContainerTypeClass](type_classes.RunnableContainerTypeClass.md).[startWith](type_classes.RunnableContainerTypeClass.md#startwith)

___

### switchAll

▸ **switchAll**<`T`\>(): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](types.RunnableContainer.md), [`RunnableLike`](types.RunnableLike.md)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](types.RunnableContainer.md), [`RunnableLike`](types.RunnableLike.md)<`T`\>, `T`\>

#### Inherited from

[HigherOrderObservableBaseTypeClass](type_classes.HigherOrderObservableBaseTypeClass.md).[switchAll](type_classes.HigherOrderObservableBaseTypeClass.md#switchall)

___

### switchMap

▸ **switchMap**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](types.RunnableContainer.md), `TA`, `TB`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](types.RunnableContainer.md), `TA`, `TB`\>

#### Inherited from

[HigherOrderObservableBaseTypeClass](type_classes.HigherOrderObservableBaseTypeClass.md).[switchMap](type_classes.HigherOrderObservableBaseTypeClass.md#switchmap)

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](types.RunnableContainer.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](types.RunnableContainer.md), `T`, `T`\>

#### Inherited from

[RunnableContainerTypeClass](type_classes.RunnableContainerTypeClass.md).[takeFirst](type_classes.RunnableContainerTypeClass.md#takefirst)

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](types.RunnableContainer.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](types.RunnableContainer.md), `T`, `T`\>

#### Inherited from

[RunnableContainerTypeClass](type_classes.RunnableContainerTypeClass.md).[takeLast](type_classes.RunnableContainerTypeClass.md#takelast)

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](types.RunnableContainer.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](types.RunnableContainer.md), `T`, `T`\>

#### Inherited from

[RunnableContainerTypeClass](type_classes.RunnableContainerTypeClass.md).[takeWhile](type_classes.RunnableContainerTypeClass.md#takewhile)

___

### zipWith

▸ **zipWith**<`TA`, `TB`\>(`b`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](types.RunnableContainer.md), `TA`, readonly [`TA`, `TB`]\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](types.RunnableContainer.md), `TA`, readonly [`TA`, `TB`]\>

#### Inherited from

[RunnableContainerTypeClass](type_classes.RunnableContainerTypeClass.md).[zipWith](type_classes.RunnableContainerTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`\>(`b`, `c`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](types.RunnableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`]\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](types.RunnableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`]\>

#### Inherited from

[RunnableContainerTypeClass](type_classes.RunnableContainerTypeClass.md).[zipWith](type_classes.RunnableContainerTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`\>(`b`, `c`, `d`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](types.RunnableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](types.RunnableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Inherited from

[RunnableContainerTypeClass](type_classes.RunnableContainerTypeClass.md).[zipWith](type_classes.RunnableContainerTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`b`, `c`, `d`, `e`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](types.RunnableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](types.RunnableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Inherited from

[RunnableContainerTypeClass](type_classes.RunnableContainerTypeClass.md).[zipWith](type_classes.RunnableContainerTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`b`, `c`, `d`, `e`, `f`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](types.RunnableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](types.RunnableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Inherited from

[RunnableContainerTypeClass](type_classes.RunnableContainerTypeClass.md).[zipWith](type_classes.RunnableContainerTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`b`, `c`, `d`, `e`, `f`, `g`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](types.RunnableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](types.RunnableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Inherited from

[RunnableContainerTypeClass](type_classes.RunnableContainerTypeClass.md).[zipWith](type_classes.RunnableContainerTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](types.RunnableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](types.RunnableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Inherited from

[RunnableContainerTypeClass](type_classes.RunnableContainerTypeClass.md).[zipWith](type_classes.RunnableContainerTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](types.RunnableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](types.RunnableContainer.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Inherited from

[RunnableContainerTypeClass](type_classes.RunnableContainerTypeClass.md).[zipWith](type_classes.RunnableContainerTypeClass.md#zipwith)

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

### throttle

▸ **throttle**<`T`\>(`wait`, `options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](types.RunnableContainer.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `wait` | [`Function1`](../modules/functions.md#function1)<`T`, [`RunnableLike`](types.RunnableLike.md)<`unknown`\>\> |
| `options?` | `Object` |
| `options.mode?` | ``"interval"`` \| ``"first"`` \| ``"last"`` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`RunnableContainer`](types.RunnableContainer.md), `T`, `T`\>

#### Inherited from

[HigherOrderObservableBaseTypeClass](type_classes.HigherOrderObservableBaseTypeClass.md).[throttle](type_classes.HigherOrderObservableBaseTypeClass.md#throttle)

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

[RunnableContainerTypeClass](type_classes.RunnableContainerTypeClass.md).[everySatisfy](type_classes.RunnableContainerTypeClass.md#everysatisfy)

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

[RunnableContainerTypeClass](type_classes.RunnableContainerTypeClass.md).[first](type_classes.RunnableContainerTypeClass.md#first)

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

[RunnableContainerTypeClass](type_classes.RunnableContainerTypeClass.md).[last](type_classes.RunnableContainerTypeClass.md#last)

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

[RunnableContainerTypeClass](type_classes.RunnableContainerTypeClass.md).[noneSatisfy](type_classes.RunnableContainerTypeClass.md#nonesatisfy)

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

[RunnableContainerTypeClass](type_classes.RunnableContainerTypeClass.md).[reduce](type_classes.RunnableContainerTypeClass.md#reduce)

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

[RunnableContainerTypeClass](type_classes.RunnableContainerTypeClass.md).[someSatisfy](type_classes.RunnableContainerTypeClass.md#somesatisfy)

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

[RunnableContainerTypeClass](type_classes.RunnableContainerTypeClass.md).[toReadonlyArray](type_classes.RunnableContainerTypeClass.md#toreadonlyarray)
