[Reactive-JS](../README.md) / [Enumerable](../modules/Enumerable.md) / Signature

# Interface: Signature

[Enumerable](../modules/Enumerable.md).Signature

## Hierarchy

- [`EnumerableContainerTypeClass`](type_classes.EnumerableContainerTypeClass.md)<[`Type`](Enumerable.Type.md), [`DisposableEnumeratorType`](Enumerable.DisposableEnumeratorType.md)\>

  ↳ **`Signature`**

## Table of contents

### Operator Properties

- [concatAll](Enumerable.Signature.md#concatall)
- [concatMap](Enumerable.Signature.md#concatmap)
- [concatWith](Enumerable.Signature.md#concatwith)

### Transform Properties

- [contains](Enumerable.Signature.md#contains)

### Constructor Methods

- [concat](Enumerable.Signature.md#concat)
- [empty](Enumerable.Signature.md#empty)
- [fromEnumeratorFactory](Enumerable.Signature.md#fromenumeratorfactory)
- [fromFactory](Enumerable.Signature.md#fromfactory)
- [fromIterable](Enumerable.Signature.md#fromiterable)
- [fromOptional](Enumerable.Signature.md#fromoptional)
- [fromReadonlyArray](Enumerable.Signature.md#fromreadonlyarray)
- [fromValue](Enumerable.Signature.md#fromvalue)
- [zip](Enumerable.Signature.md#zip)

### Operator Methods

- [distinctUntilChanged](Enumerable.Signature.md#distinctuntilchanged)
- [endWith](Enumerable.Signature.md#endwith)
- [flatMapIterable](Enumerable.Signature.md#flatmapiterable)
- [forEach](Enumerable.Signature.md#foreach)
- [keep](Enumerable.Signature.md#keep)
- [keepType](Enumerable.Signature.md#keeptype)
- [map](Enumerable.Signature.md#map)
- [mapTo](Enumerable.Signature.md#mapto)
- [pairwise](Enumerable.Signature.md#pairwise)
- [pick](Enumerable.Signature.md#pick)
- [scan](Enumerable.Signature.md#scan)
- [skipFirst](Enumerable.Signature.md#skipfirst)
- [startWith](Enumerable.Signature.md#startwith)
- [takeFirst](Enumerable.Signature.md#takefirst)
- [takeLast](Enumerable.Signature.md#takelast)
- [takeWhile](Enumerable.Signature.md#takewhile)
- [zipWith](Enumerable.Signature.md#zipwith)

### Transform Methods

- [enumerate](Enumerable.Signature.md#enumerate)
- [everySatisfy](Enumerable.Signature.md#everysatisfy)
- [first](Enumerable.Signature.md#first)
- [firstAsync](Enumerable.Signature.md#firstasync)
- [last](Enumerable.Signature.md#last)
- [lastAsync](Enumerable.Signature.md#lastasync)
- [noneSatisfy](Enumerable.Signature.md#nonesatisfy)
- [reduce](Enumerable.Signature.md#reduce)
- [someSatisfy](Enumerable.Signature.md#somesatisfy)
- [toIterable](Enumerable.Signature.md#toiterable)
- [toReadonlyArray](Enumerable.Signature.md#toreadonlyarray)

## Operator Properties

### concatAll

• **concatAll**: <T\>() => [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerable.Type.md), [`EnumerableLike`](types.EnumerableLike.md)<`T`\>, `T`\>

#### Type declaration

▸ <`T`\>(): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerable.Type.md), [`EnumerableLike`](types.EnumerableLike.md)<`T`\>, `T`\>

Converts a higher-order Container into a first-order
Container by concatenating the inner sources in order.

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerable.Type.md), [`EnumerableLike`](types.EnumerableLike.md)<`T`\>, `T`\>

#### Inherited from

[EnumerableContainerTypeClass](type_classes.EnumerableContainerTypeClass.md).[concatAll](type_classes.EnumerableContainerTypeClass.md#concatall)

___

### concatMap

• **concatMap**: <TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, [`EnumerableLike`](types.EnumerableLike.md)<`TB`\>\>) => [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerable.Type.md), `TA`, `TB`\>

#### Type declaration

▸ <`TA`, `TB`\>(`selector`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerable.Type.md), `TA`, `TB`\>

##### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`EnumerableLike`](types.EnumerableLike.md)<`TB`\>\> |

##### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerable.Type.md), `TA`, `TB`\>

#### Inherited from

[EnumerableContainerTypeClass](type_classes.EnumerableContainerTypeClass.md).[concatMap](type_classes.EnumerableContainerTypeClass.md#concatmap)

___

### concatWith

• **concatWith**: <T\>(`snd`: [`EnumerableLike`](types.EnumerableLike.md)<`T`\>, ...`tail`: readonly [`EnumerableLike`](types.EnumerableLike.md)<`T`\>[]) => [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerable.Type.md), `T`, `T`\>

#### Type declaration

▸ <`T`\>(`snd`, `...tail`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerable.Type.md), `T`, `T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`EnumerableLike`](types.EnumerableLike.md)<`T`\> |
| `...tail` | readonly [`EnumerableLike`](types.EnumerableLike.md)<`T`\>[] |

##### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerable.Type.md), `T`, `T`\>

#### Inherited from

[EnumerableContainerTypeClass](type_classes.EnumerableContainerTypeClass.md).[concatWith](type_classes.EnumerableContainerTypeClass.md#concatwith)

___

## Transform Properties

### contains

• **contains**: <T\>(`value`: `T`, `options?`: { `equality?`: [`Equality`](../modules/functions.md#equality)<`T`\>  }) => [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, `boolean`\>

#### Type declaration

▸ <`T`\>(`value`, `options?`): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, `boolean`\>

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

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, `boolean`\>

#### Inherited from

[EnumerableContainerTypeClass](type_classes.EnumerableContainerTypeClass.md).[contains](type_classes.EnumerableContainerTypeClass.md#contains)

## Constructor Methods

### concat

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`EnumerableLike`](types.EnumerableLike.md)<`T`\>

Returns a Container which emits all values from each source sequentially.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`EnumerableLike`](types.EnumerableLike.md)<`T`\> |
| `snd` | [`EnumerableLike`](types.EnumerableLike.md)<`T`\> |
| `...tail` | readonly [`EnumerableLike`](types.EnumerableLike.md)<`T`\>[] |

#### Returns

[`EnumerableLike`](types.EnumerableLike.md)<`T`\>

#### Inherited from

[EnumerableContainerTypeClass](type_classes.EnumerableContainerTypeClass.md).[concat](type_classes.EnumerableContainerTypeClass.md#concat)

___

### empty

▸ **empty**<`T`\>(): [`EnumerableLike`](types.EnumerableLike.md)<`T`\>

Return an Container that emits no items.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`EnumerableLike`](types.EnumerableLike.md)<`T`\>

#### Inherited from

[EnumerableContainerTypeClass](type_classes.EnumerableContainerTypeClass.md).[empty](type_classes.EnumerableContainerTypeClass.md#empty)

___

### fromEnumeratorFactory

▸ **fromEnumeratorFactory**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Factory`](../modules/functions.md#factory)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Factory`](../modules/functions.md#factory)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Inherited from

[EnumerableContainerTypeClass](type_classes.EnumerableContainerTypeClass.md).[fromEnumeratorFactory](type_classes.EnumerableContainerTypeClass.md#fromenumeratorfactory)

___

### fromFactory

▸ **fromFactory**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Factory`](../modules/functions.md#factory)<`T`\>, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Factory`](../modules/functions.md#factory)<`T`\>, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Inherited from

[EnumerableContainerTypeClass](type_classes.EnumerableContainerTypeClass.md).[fromFactory](type_classes.EnumerableContainerTypeClass.md#fromfactory)

___

### fromIterable

▸ **fromIterable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Inherited from

[EnumerableContainerTypeClass](type_classes.EnumerableContainerTypeClass.md).[fromIterable](type_classes.EnumerableContainerTypeClass.md#fromiterable)

___

### fromOptional

▸ **fromOptional**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Inherited from

[EnumerableContainerTypeClass](type_classes.EnumerableContainerTypeClass.md).[fromOptional](type_classes.EnumerableContainerTypeClass.md#fromoptional)

___

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

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

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Inherited from

[EnumerableContainerTypeClass](type_classes.EnumerableContainerTypeClass.md).[fromReadonlyArray](type_classes.EnumerableContainerTypeClass.md#fromreadonlyarray)

___

### fromValue

▸ **fromValue**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`T`, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`T`, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Inherited from

[EnumerableContainerTypeClass](type_classes.EnumerableContainerTypeClass.md).[fromValue](type_classes.EnumerableContainerTypeClass.md#fromvalue)

___

### zip

▸ **zip**<`TA`, `TB`\>(`a`, `b`): [`EnumerableLike`](types.EnumerableLike.md)<readonly [`TA`, `TB`]\>

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
| `a` | [`EnumerableLike`](types.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](types.EnumerableLike.md)<`TB`\> |

#### Returns

[`EnumerableLike`](types.EnumerableLike.md)<readonly [`TA`, `TB`]\>

#### Inherited from

[EnumerableContainerTypeClass](type_classes.EnumerableContainerTypeClass.md).[zip](type_classes.EnumerableContainerTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`EnumerableLike`](types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`EnumerableLike`](types.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](types.EnumerableLike.md)<`TC`\> |

#### Returns

[`EnumerableLike`](types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Inherited from

[EnumerableContainerTypeClass](type_classes.EnumerableContainerTypeClass.md).[zip](type_classes.EnumerableContainerTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`EnumerableLike`](types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`EnumerableLike`](types.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](types.EnumerableLike.md)<`TD`\> |

#### Returns

[`EnumerableLike`](types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Inherited from

[EnumerableContainerTypeClass](type_classes.EnumerableContainerTypeClass.md).[zip](type_classes.EnumerableContainerTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`EnumerableLike`](types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`EnumerableLike`](types.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](types.EnumerableLike.md)<`TE`\> |

#### Returns

[`EnumerableLike`](types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Inherited from

[EnumerableContainerTypeClass](type_classes.EnumerableContainerTypeClass.md).[zip](type_classes.EnumerableContainerTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`EnumerableLike`](types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`EnumerableLike`](types.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](types.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](types.EnumerableLike.md)<`TF`\> |

#### Returns

[`EnumerableLike`](types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Inherited from

[EnumerableContainerTypeClass](type_classes.EnumerableContainerTypeClass.md).[zip](type_classes.EnumerableContainerTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`EnumerableLike`](types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`EnumerableLike`](types.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](types.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](types.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](types.EnumerableLike.md)<`TG`\> |

#### Returns

[`EnumerableLike`](types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Inherited from

[EnumerableContainerTypeClass](type_classes.EnumerableContainerTypeClass.md).[zip](type_classes.EnumerableContainerTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`EnumerableLike`](types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`EnumerableLike`](types.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](types.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](types.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](types.EnumerableLike.md)<`TG`\> |
| `h` | [`EnumerableLike`](types.EnumerableLike.md)<`TH`\> |

#### Returns

[`EnumerableLike`](types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Inherited from

[EnumerableContainerTypeClass](type_classes.EnumerableContainerTypeClass.md).[zip](type_classes.EnumerableContainerTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`EnumerableLike`](types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`EnumerableLike`](types.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](types.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](types.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](types.EnumerableLike.md)<`TG`\> |
| `h` | [`EnumerableLike`](types.EnumerableLike.md)<`TH`\> |
| `i` | [`EnumerableLike`](types.EnumerableLike.md)<`TI`\> |

#### Returns

[`EnumerableLike`](types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Inherited from

[EnumerableContainerTypeClass](type_classes.EnumerableContainerTypeClass.md).[zip](type_classes.EnumerableContainerTypeClass.md#zip)

___

## Operator Methods

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerable.Type.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerable.Type.md), `T`, `T`\>

#### Inherited from

[EnumerableContainerTypeClass](type_classes.EnumerableContainerTypeClass.md).[distinctUntilChanged](type_classes.EnumerableContainerTypeClass.md#distinctuntilchanged)

___

### endWith

▸ **endWith**<`T`\>(`value`, `...values`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerable.Type.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerable.Type.md), `T`, `T`\>

#### Inherited from

[EnumerableContainerTypeClass](type_classes.EnumerableContainerTypeClass.md).[endWith](type_classes.EnumerableContainerTypeClass.md#endwith)

___

### flatMapIterable

▸ **flatMapIterable**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerable.Type.md), `TA`, `TB`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerable.Type.md), `TA`, `TB`\>

#### Inherited from

[EnumerableContainerTypeClass](type_classes.EnumerableContainerTypeClass.md).[flatMapIterable](type_classes.EnumerableContainerTypeClass.md#flatmapiterable)

___

### forEach

▸ **forEach**<`T`\>(`effect`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerable.Type.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerable.Type.md), `T`, `T`\>

#### Inherited from

[EnumerableContainerTypeClass](type_classes.EnumerableContainerTypeClass.md).[forEach](type_classes.EnumerableContainerTypeClass.md#foreach)

___

### keep

▸ **keep**<`T`\>(`predicate`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerable.Type.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerable.Type.md), `T`, `T`\>

#### Inherited from

[EnumerableContainerTypeClass](type_classes.EnumerableContainerTypeClass.md).[keep](type_classes.EnumerableContainerTypeClass.md#keep)

___

### keepType

▸ **keepType**<`TA`, `TB`\>(`predicate`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerable.Type.md), `TA`, `TB`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerable.Type.md), `TA`, `TB`\>

#### Inherited from

[EnumerableContainerTypeClass](type_classes.EnumerableContainerTypeClass.md).[keepType](type_classes.EnumerableContainerTypeClass.md#keeptype)

___

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerable.Type.md), `TA`, `TB`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerable.Type.md), `TA`, `TB`\>

#### Inherited from

[EnumerableContainerTypeClass](type_classes.EnumerableContainerTypeClass.md).[map](type_classes.EnumerableContainerTypeClass.md#map)

___

### mapTo

▸ **mapTo**<`TA`, `TB`\>(`value`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerable.Type.md), `TA`, `TB`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerable.Type.md), `TA`, `TB`\>

#### Inherited from

[EnumerableContainerTypeClass](type_classes.EnumerableContainerTypeClass.md).[mapTo](type_classes.EnumerableContainerTypeClass.md#mapto)

___

### pairwise

▸ **pairwise**<`T`\>(): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerable.Type.md), `T`, readonly [`T`, `T`]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerable.Type.md), `T`, readonly [`T`, `T`]\>

#### Inherited from

[EnumerableContainerTypeClass](type_classes.EnumerableContainerTypeClass.md).[pairwise](type_classes.EnumerableContainerTypeClass.md#pairwise)

___

### pick

▸ **pick**<`T`, `TKey`\>(`key`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerable.Type.md), `T`, `T`[`TKey`]\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerable.Type.md), `T`, `T`[`TKey`]\>

#### Inherited from

[EnumerableContainerTypeClass](type_classes.EnumerableContainerTypeClass.md).[pick](type_classes.EnumerableContainerTypeClass.md#pick)

▸ **pick**<`T`, `TKeyA`, `TKeyB`\>(`keyA`, `keyB`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerable.Type.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerable.Type.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

#### Inherited from

[EnumerableContainerTypeClass](type_classes.EnumerableContainerTypeClass.md).[pick](type_classes.EnumerableContainerTypeClass.md#pick)

▸ **pick**<`T`, `TKeyA`, `TKeyB`, `TKeyC`\>(`keyA`, `keyB`, `keyC`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerable.Type.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerable.Type.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

#### Inherited from

[EnumerableContainerTypeClass](type_classes.EnumerableContainerTypeClass.md).[pick](type_classes.EnumerableContainerTypeClass.md#pick)

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerable.Type.md), `T`, `TAcc`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerable.Type.md), `T`, `TAcc`\>

#### Inherited from

[EnumerableContainerTypeClass](type_classes.EnumerableContainerTypeClass.md).[scan](type_classes.EnumerableContainerTypeClass.md#scan)

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerable.Type.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerable.Type.md), `T`, `T`\>

#### Inherited from

[EnumerableContainerTypeClass](type_classes.EnumerableContainerTypeClass.md).[skipFirst](type_classes.EnumerableContainerTypeClass.md#skipfirst)

___

### startWith

▸ **startWith**<`T`\>(`value`, `...values`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerable.Type.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerable.Type.md), `T`, `T`\>

#### Inherited from

[EnumerableContainerTypeClass](type_classes.EnumerableContainerTypeClass.md).[startWith](type_classes.EnumerableContainerTypeClass.md#startwith)

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerable.Type.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerable.Type.md), `T`, `T`\>

#### Inherited from

[EnumerableContainerTypeClass](type_classes.EnumerableContainerTypeClass.md).[takeFirst](type_classes.EnumerableContainerTypeClass.md#takefirst)

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerable.Type.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerable.Type.md), `T`, `T`\>

#### Inherited from

[EnumerableContainerTypeClass](type_classes.EnumerableContainerTypeClass.md).[takeLast](type_classes.EnumerableContainerTypeClass.md#takelast)

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerable.Type.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerable.Type.md), `T`, `T`\>

#### Inherited from

[EnumerableContainerTypeClass](type_classes.EnumerableContainerTypeClass.md).[takeWhile](type_classes.EnumerableContainerTypeClass.md#takewhile)

___

### zipWith

▸ **zipWith**<`TA`, `TB`\>(`b`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerable.Type.md), `TA`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`EnumerableLike`](types.EnumerableLike.md)<`TB`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerable.Type.md), `TA`, readonly [`TA`, `TB`]\>

#### Inherited from

[EnumerableContainerTypeClass](type_classes.EnumerableContainerTypeClass.md).[zipWith](type_classes.EnumerableContainerTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`\>(`b`, `c`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerable.Type.md), `TA`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`EnumerableLike`](types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](types.EnumerableLike.md)<`TC`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerable.Type.md), `TA`, readonly [`TA`, `TB`, `TC`]\>

#### Inherited from

[EnumerableContainerTypeClass](type_classes.EnumerableContainerTypeClass.md).[zipWith](type_classes.EnumerableContainerTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`\>(`b`, `c`, `d`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerable.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `b` | [`EnumerableLike`](types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](types.EnumerableLike.md)<`TD`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerable.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Inherited from

[EnumerableContainerTypeClass](type_classes.EnumerableContainerTypeClass.md).[zipWith](type_classes.EnumerableContainerTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`b`, `c`, `d`, `e`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerable.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `b` | [`EnumerableLike`](types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](types.EnumerableLike.md)<`TE`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerable.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Inherited from

[EnumerableContainerTypeClass](type_classes.EnumerableContainerTypeClass.md).[zipWith](type_classes.EnumerableContainerTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`b`, `c`, `d`, `e`, `f`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerable.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `b` | [`EnumerableLike`](types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](types.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](types.EnumerableLike.md)<`TF`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerable.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Inherited from

[EnumerableContainerTypeClass](type_classes.EnumerableContainerTypeClass.md).[zipWith](type_classes.EnumerableContainerTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`b`, `c`, `d`, `e`, `f`, `g`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerable.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `b` | [`EnumerableLike`](types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](types.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](types.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](types.EnumerableLike.md)<`TG`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerable.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Inherited from

[EnumerableContainerTypeClass](type_classes.EnumerableContainerTypeClass.md).[zipWith](type_classes.EnumerableContainerTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerable.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `b` | [`EnumerableLike`](types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](types.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](types.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](types.EnumerableLike.md)<`TG`\> |
| `h` | [`EnumerableLike`](types.EnumerableLike.md)<`TH`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerable.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Inherited from

[EnumerableContainerTypeClass](type_classes.EnumerableContainerTypeClass.md).[zipWith](type_classes.EnumerableContainerTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerable.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `b` | [`EnumerableLike`](types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](types.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](types.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](types.EnumerableLike.md)<`TG`\> |
| `h` | [`EnumerableLike`](types.EnumerableLike.md)<`TH`\> |
| `i` | [`EnumerableLike`](types.EnumerableLike.md)<`TI`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerable.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Inherited from

[EnumerableContainerTypeClass](type_classes.EnumerableContainerTypeClass.md).[zipWith](type_classes.EnumerableContainerTypeClass.md#zipwith)

___

## Transform Methods

### enumerate

▸ **enumerate**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\> & [`DisposableLike`](types.DisposableLike.md)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\> & [`DisposableLike`](types.DisposableLike.md)\>

#### Inherited from

[EnumerableContainerTypeClass](type_classes.EnumerableContainerTypeClass.md).[enumerate](type_classes.EnumerableContainerTypeClass.md#enumerate)

___

### everySatisfy

▸ **everySatisfy**<`T`\>(`predicate`): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, `boolean`\>

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

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, `boolean`\>

#### Inherited from

[EnumerableContainerTypeClass](type_classes.EnumerableContainerTypeClass.md).[everySatisfy](type_classes.EnumerableContainerTypeClass.md#everysatisfy)

___

### first

▸ **first**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, [`Optional`](../modules/functions.md#optional)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, [`Optional`](../modules/functions.md#optional)<`T`\>\>

#### Inherited from

[EnumerableContainerTypeClass](type_classes.EnumerableContainerTypeClass.md).[first](type_classes.EnumerableContainerTypeClass.md#first)

___

### firstAsync

▸ **firstAsync**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Inherited from

[EnumerableContainerTypeClass](type_classes.EnumerableContainerTypeClass.md).[firstAsync](type_classes.EnumerableContainerTypeClass.md#firstasync)

___

### last

▸ **last**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, [`Optional`](../modules/functions.md#optional)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, [`Optional`](../modules/functions.md#optional)<`T`\>\>

#### Inherited from

[EnumerableContainerTypeClass](type_classes.EnumerableContainerTypeClass.md).[last](type_classes.EnumerableContainerTypeClass.md#last)

___

### lastAsync

▸ **lastAsync**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Inherited from

[EnumerableContainerTypeClass](type_classes.EnumerableContainerTypeClass.md).[lastAsync](type_classes.EnumerableContainerTypeClass.md#lastasync)

___

### noneSatisfy

▸ **noneSatisfy**<`T`\>(`predicate`): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, `boolean`\>

#### Inherited from

[EnumerableContainerTypeClass](type_classes.EnumerableContainerTypeClass.md).[noneSatisfy](type_classes.EnumerableContainerTypeClass.md#nonesatisfy)

___

### reduce

▸ **reduce**<`T`, `TAcc`\>(`reducer`, `initialValue`): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, `TAcc`\>

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

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, `TAcc`\>

#### Inherited from

[EnumerableContainerTypeClass](type_classes.EnumerableContainerTypeClass.md).[reduce](type_classes.EnumerableContainerTypeClass.md#reduce)

___

### someSatisfy

▸ **someSatisfy**<`T`\>(`predicate`): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, `boolean`\>

#### Inherited from

[EnumerableContainerTypeClass](type_classes.EnumerableContainerTypeClass.md).[someSatisfy](type_classes.EnumerableContainerTypeClass.md#somesatisfy)

___

### toIterable

▸ **toIterable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, `Iterable`<`T`\>\>

Converts the Container to a `IterableLike`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, `Iterable`<`T`\>\>

#### Inherited from

[EnumerableContainerTypeClass](type_classes.EnumerableContainerTypeClass.md).[toIterable](type_classes.EnumerableContainerTypeClass.md#toiterable)

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, readonly `T`[]\>

Converts the Container to a `ReadonlyArrayContainer`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, readonly `T`[]\>

#### Inherited from

[EnumerableContainerTypeClass](type_classes.EnumerableContainerTypeClass.md).[toReadonlyArray](type_classes.EnumerableContainerTypeClass.md#toreadonlyarray)
