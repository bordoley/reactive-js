[Reactive-JS](../README.md) / [Enumerator](../modules/Enumerator.md) / Signature

# Interface: Signature

[Enumerator](../modules/Enumerator.md).Signature

## Hierarchy

- [`ContainerTypeClass`](type_classes.ContainerTypeClass.md)<[`Type`](Enumerator.Type.md)\>

- [`DeferredTypeClass`](type_classes.DeferredTypeClass.md)<[`Type`](Enumerator.Type.md)\>

- [`RunnableTypeClass`](type_classes.RunnableTypeClass.md)<[`Type`](Enumerator.Type.md)\>

  ↳ **`Signature`**

## Table of contents

### Constructor Properties

- [fromRunnable](Enumerator.Signature.md#fromrunnable)

### Operator Properties

- [buffer](Enumerator.Signature.md#buffer)
- [concatAll](Enumerator.Signature.md#concatall)
- [concatMap](Enumerator.Signature.md#concatmap)
- [concatWith](Enumerator.Signature.md#concatwith)
- [flatMapIterable](Enumerator.Signature.md#flatmapiterable)
- [scanLast](Enumerator.Signature.md#scanlast)

### Transform Properties

- [contains](Enumerator.Signature.md#contains)

### Constructor Methods

- [concat](Enumerator.Signature.md#concat)
- [empty](Enumerator.Signature.md#empty)
- [fromEnumerable](Enumerator.Signature.md#fromenumerable)
- [fromEnumeratorFactory](Enumerator.Signature.md#fromenumeratorfactory)
- [fromFactory](Enumerator.Signature.md#fromfactory)
- [fromIterable](Enumerator.Signature.md#fromiterable)
- [fromOptional](Enumerator.Signature.md#fromoptional)
- [fromReadonlyArray](Enumerator.Signature.md#fromreadonlyarray)
- [generate](Enumerator.Signature.md#generate)
- [zip](Enumerator.Signature.md#zip)

### Operator Methods

- [distinctUntilChanged](Enumerator.Signature.md#distinctuntilchanged)
- [endWith](Enumerator.Signature.md#endwith)
- [forEach](Enumerator.Signature.md#foreach)
- [forkConcat](Enumerator.Signature.md#forkconcat)
- [forkZip](Enumerator.Signature.md#forkzip)
- [ignoreElements](Enumerator.Signature.md#ignoreelements)
- [keep](Enumerator.Signature.md#keep)
- [keepType](Enumerator.Signature.md#keeptype)
- [map](Enumerator.Signature.md#map)
- [mapTo](Enumerator.Signature.md#mapto)
- [pairwise](Enumerator.Signature.md#pairwise)
- [pick](Enumerator.Signature.md#pick)
- [repeat](Enumerator.Signature.md#repeat)
- [retry](Enumerator.Signature.md#retry)
- [scan](Enumerator.Signature.md#scan)
- [skipFirst](Enumerator.Signature.md#skipfirst)
- [startWith](Enumerator.Signature.md#startwith)
- [takeFirst](Enumerator.Signature.md#takefirst)
- [takeLast](Enumerator.Signature.md#takelast)
- [takeWhile](Enumerator.Signature.md#takewhile)
- [zipWith](Enumerator.Signature.md#zipwith)

### Transform Methods

- [everySatisfy](Enumerator.Signature.md#everysatisfy)
- [first](Enumerator.Signature.md#first)
- [firstAsync](Enumerator.Signature.md#firstasync)
- [flow](Enumerator.Signature.md#flow)
- [last](Enumerator.Signature.md#last)
- [lastAsync](Enumerator.Signature.md#lastasync)
- [noneSatisfy](Enumerator.Signature.md#nonesatisfy)
- [reduce](Enumerator.Signature.md#reduce)
- [someSatisfy](Enumerator.Signature.md#somesatisfy)
- [toReadonlyArray](Enumerator.Signature.md#toreadonlyarray)

## Constructor Properties

### fromRunnable

• **fromRunnable**: <T\>() => [`Function1`](../modules/functions.md#function1)<[`RunnableLike`](types.RunnableLike.md)<`T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

#### Type declaration

▸ <`T`\>(): [`Function1`](../modules/functions.md#function1)<[`RunnableLike`](types.RunnableLike.md)<`T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`Function1`](../modules/functions.md#function1)<[`RunnableLike`](types.RunnableLike.md)<`T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

#### Inherited from

[DeferredTypeClass](type_classes.DeferredTypeClass.md).[fromRunnable](type_classes.DeferredTypeClass.md#fromrunnable)

___

## Operator Properties

### buffer

• **buffer**: <T\>(`options?`: { `count?`: `number`  }) => [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, readonly `T`[]\>

#### Type declaration

▸ <`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, readonly `T`[]\>

Returns a Container which buffers items produced by the source until the
number of items reaches the specified maximum buffer size.

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |

##### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, readonly `T`[]\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[buffer](type_classes.ContainerTypeClass.md#buffer)

___

### concatAll

• **concatAll**: <T\>() => [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>, `T`\>

#### Type declaration

▸ <`T`\>(): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>, `T`\>

Converts a higher-order Container into a first-order
Container by concatenating the inner sources in order.

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>, `T`\>

#### Inherited from

[DeferredTypeClass](type_classes.DeferredTypeClass.md).[concatAll](type_classes.DeferredTypeClass.md#concatall)

___

### concatMap

• **concatMap**: <TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, [`EnumeratorLike`](types.EnumeratorLike.md)<`TB`\>\>) => [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `TA`, `TB`\>

#### Type declaration

▸ <`TA`, `TB`\>(`selector`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `TA`, `TB`\>

##### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`EnumeratorLike`](types.EnumeratorLike.md)<`TB`\>\> |

##### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `TA`, `TB`\>

#### Inherited from

[DeferredTypeClass](type_classes.DeferredTypeClass.md).[concatMap](type_classes.DeferredTypeClass.md#concatmap)

___

### concatWith

• **concatWith**: <T\>(`snd`: [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>, ...`tail`: readonly [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>[]) => [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `T`\>

#### Type declaration

▸ <`T`\>(`snd`, `...tail`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\> |
| `...tail` | readonly [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>[] |

##### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `T`\>

#### Inherited from

[DeferredTypeClass](type_classes.DeferredTypeClass.md).[concatWith](type_classes.DeferredTypeClass.md#concatwith)

___

### flatMapIterable

• **flatMapIterable**: <TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, `Iterable`<`TB`\>\>) => [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `TA`, `TB`\>

#### Type declaration

▸ <`TA`, `TB`\>(`selector`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `TA`, `TB`\>

##### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, `Iterable`<`TB`\>\> |

##### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `TA`, `TB`\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[flatMapIterable](type_classes.ContainerTypeClass.md#flatmapiterable)

___

### scanLast

• **scanLast**: <T, TAcc\>(`scanner`: [`Function2`](../modules/functions.md#function2)<`TAcc`, `T`, [`EnumeratorLike`](types.EnumeratorLike.md)<`TAcc`\>\>, `initialValue`: [`Factory`](../modules/functions.md#factory)<`TAcc`\>) => [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `TAcc`\>

#### Type declaration

▸ <`T`, `TAcc`\>(`scanner`, `initialValue`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `TAcc`\>

##### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Function2`](../modules/functions.md#function2)<`TAcc`, `T`, [`EnumeratorLike`](types.EnumeratorLike.md)<`TAcc`\>\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

##### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `TAcc`\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[scanLast](type_classes.ContainerTypeClass.md#scanlast)

___

## Transform Properties

### contains

• **contains**: <T\>(`value`: `T`, `options?`: { `equality?`: [`Equality`](../modules/functions.md#equality)<`T`\>  }) => [`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>, `boolean`\>

#### Type declaration

▸ <`T`\>(`value`, `options?`): [`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>, `boolean`\>

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

[`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>, `boolean`\>

#### Inherited from

[RunnableTypeClass](type_classes.RunnableTypeClass.md).[contains](type_classes.RunnableTypeClass.md#contains)

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

[DeferredTypeClass](type_classes.DeferredTypeClass.md).[concat](type_classes.DeferredTypeClass.md#concat)

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

[DeferredTypeClass](type_classes.DeferredTypeClass.md).[empty](type_classes.DeferredTypeClass.md#empty)

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

[DeferredTypeClass](type_classes.DeferredTypeClass.md).[fromEnumerable](type_classes.DeferredTypeClass.md#fromenumerable)

___

### fromEnumeratorFactory

▸ **fromEnumeratorFactory**<`T`\>(`factory`): [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](../modules/functions.md#factory)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\> |

#### Returns

[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>

#### Inherited from

[DeferredTypeClass](type_classes.DeferredTypeClass.md).[fromEnumeratorFactory](type_classes.DeferredTypeClass.md#fromenumeratorfactory)

___

### fromFactory

▸ **fromFactory**<`T`\>(`factory`): [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](../modules/functions.md#factory)<`T`\> |

#### Returns

[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>

#### Inherited from

[DeferredTypeClass](type_classes.DeferredTypeClass.md).[fromFactory](type_classes.DeferredTypeClass.md#fromfactory)

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

[DeferredTypeClass](type_classes.DeferredTypeClass.md).[fromIterable](type_classes.DeferredTypeClass.md#fromiterable)

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

[DeferredTypeClass](type_classes.DeferredTypeClass.md).[fromOptional](type_classes.DeferredTypeClass.md#fromoptional)

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

[DeferredTypeClass](type_classes.DeferredTypeClass.md).[fromReadonlyArray](type_classes.DeferredTypeClass.md#fromreadonlyarray)

___

### generate

▸ **generate**<`T`\>(`generator`, `initialValue`): [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>

Generates a Container from a generator function
that is applied to an accumulator value between emitted items.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `generator` | [`Updater`](../modules/functions.md#updater)<`T`\> | The generator function. |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`T`\> | Factory function used to generate the initial accumulator. |

#### Returns

[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>

#### Inherited from

[DeferredTypeClass](type_classes.DeferredTypeClass.md).[generate](type_classes.DeferredTypeClass.md#generate)

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

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[zip](type_classes.ContainerTypeClass.md#zip)

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

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[zip](type_classes.ContainerTypeClass.md#zip)

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

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[zip](type_classes.ContainerTypeClass.md#zip)

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

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[zip](type_classes.ContainerTypeClass.md#zip)

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

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[zip](type_classes.ContainerTypeClass.md#zip)

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

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[zip](type_classes.ContainerTypeClass.md#zip)

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

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[zip](type_classes.ContainerTypeClass.md#zip)

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

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[zip](type_classes.ContainerTypeClass.md#zip)

___

## Operator Methods

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `T`\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[distinctUntilChanged](type_classes.ContainerTypeClass.md#distinctuntilchanged)

___

### endWith

▸ **endWith**<`T`\>(`value`, `...values`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `T`\>

#### Inherited from

[DeferredTypeClass](type_classes.DeferredTypeClass.md).[endWith](type_classes.DeferredTypeClass.md#endwith)

___

### forEach

▸ **forEach**<`T`\>(`effect`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `T`\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[forEach](type_classes.ContainerTypeClass.md#foreach)

___

### forkConcat

▸ **forkConcat**<`TIn`, `TOut`\>(`fst`, `snd`, `...tail`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `TIn`, `TOut`\>

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `TIn`, `TOut`\> |
| `snd` | [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `TIn`, `TOut`\> |
| `...tail` | readonly [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `TIn`, `TOut`\>[] |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `TIn`, `TOut`\>

#### Inherited from

[DeferredTypeClass](type_classes.DeferredTypeClass.md).[forkConcat](type_classes.DeferredTypeClass.md#forkconcat)

___

### forkZip

▸ **forkZip**<`T`, `TA`, `TB`\>(`a`, `b`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `TA`\> |
| `b` | [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `TB`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, readonly [`TA`, `TB`]\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[forkZip](type_classes.ContainerTypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `TA`\> |
| `b` | [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `TB`\> |
| `c` | [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `TC`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, readonly [`TA`, `TB`, `TC`]\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[forkZip](type_classes.ContainerTypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |
| `TC` |
| `TD` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `TA`\> |
| `b` | [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `TB`\> |
| `c` | [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `TC`\> |
| `d` | [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `TD`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[forkZip](type_classes.ContainerTypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `TA`\> |
| `b` | [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `TB`\> |
| `c` | [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `TC`\> |
| `d` | [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `TD`\> |
| `e` | [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `TE`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[forkZip](type_classes.ContainerTypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |
| `TF` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `TA`\> |
| `b` | [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `TB`\> |
| `c` | [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `TC`\> |
| `d` | [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `TD`\> |
| `e` | [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `TE`\> |
| `f` | [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `TF`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[forkZip](type_classes.ContainerTypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
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
| `a` | [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `TA`\> |
| `b` | [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `TB`\> |
| `c` | [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `TC`\> |
| `d` | [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `TD`\> |
| `e` | [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `TE`\> |
| `f` | [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `TF`\> |
| `g` | [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `TG`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[forkZip](type_classes.ContainerTypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
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
| `a` | [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `TA`\> |
| `b` | [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `TB`\> |
| `c` | [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `TC`\> |
| `d` | [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `TD`\> |
| `e` | [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `TE`\> |
| `f` | [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `TF`\> |
| `g` | [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `TG`\> |
| `h` | [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `TH`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[forkZip](type_classes.ContainerTypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
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
| `a` | [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `TA`\> |
| `b` | [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `TB`\> |
| `c` | [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `TC`\> |
| `d` | [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `TD`\> |
| `e` | [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `TE`\> |
| `f` | [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `TF`\> |
| `g` | [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `TG`\> |
| `h` | [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `TH`\> |
| `i` | [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `TI`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[forkZip](type_classes.ContainerTypeClass.md#forkzip)

___

### ignoreElements

▸ **ignoreElements**<`T`\>(): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `unknown`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `unknown`, `T`\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[ignoreElements](type_classes.ContainerTypeClass.md#ignoreelements)

___

### keep

▸ **keep**<`T`\>(`predicate`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `T`\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[keep](type_classes.ContainerTypeClass.md#keep)

___

### keepType

▸ **keepType**<`TA`, `TB`\>(`predicate`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `TA`, `TB`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `TA`, `TB`\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[keepType](type_classes.ContainerTypeClass.md#keeptype)

___

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `TA`, `TB`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `TA`, `TB`\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[map](type_classes.ContainerTypeClass.md#map)

___

### mapTo

▸ **mapTo**<`TA`, `TB`\>(`value`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `TA`, `TB`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `TA`, `TB`\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[mapTo](type_classes.ContainerTypeClass.md#mapto)

___

### pairwise

▸ **pairwise**<`T`\>(): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, readonly [`T`, `T`]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, readonly [`T`, `T`]\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[pairwise](type_classes.ContainerTypeClass.md#pairwise)

___

### pick

▸ **pick**<`T`, `TKey`\>(`key`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `T`[`TKey`]\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `T`[`TKey`]\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[pick](type_classes.ContainerTypeClass.md#pick)

▸ **pick**<`T`, `TKeyA`, `TKeyB`\>(`keyA`, `keyB`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[pick](type_classes.ContainerTypeClass.md#pick)

▸ **pick**<`T`, `TKeyA`, `TKeyB`, `TKeyC`\>(`keyA`, `keyB`, `keyC`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[pick](type_classes.ContainerTypeClass.md#pick)

___

### repeat

▸ **repeat**<`T`\>(`predicate`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `T`\>

Returns a Container that mirrors the source, repeating it whenever the predicate returns true.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`number`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `T`\>

#### Inherited from

[DeferredTypeClass](type_classes.DeferredTypeClass.md).[repeat](type_classes.DeferredTypeClass.md#repeat)

▸ **repeat**<`T`\>(`count`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `T`\>

Returns a Container that mirrors the source, repeating it `count` times.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `T`\>

#### Inherited from

[DeferredTypeClass](type_classes.DeferredTypeClass.md).[repeat](type_classes.DeferredTypeClass.md#repeat)

▸ **repeat**<`T`\>(): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `T`\>

Returns a Container that mirrors the source, continually repeating it.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `T`\>

#### Inherited from

[DeferredTypeClass](type_classes.DeferredTypeClass.md).[repeat](type_classes.DeferredTypeClass.md#repeat)

___

### retry

▸ **retry**<`T`\>(): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `T`\>

Returns an `ObservableLike` that mirrors the source, re-subscribing
if the source completes with an error.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `T`\>

#### Inherited from

[DeferredTypeClass](type_classes.DeferredTypeClass.md).[retry](type_classes.DeferredTypeClass.md#retry)

▸ **retry**<`T`\>(`predicate`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `T`\>

Returns an `ObservableLike` that mirrors the source, resubscrbing
if the source completes with an error which satisfies the predicate function.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Function2`](../modules/functions.md#function2)<`number`, `unknown`, `boolean`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `T`\>

#### Inherited from

[DeferredTypeClass](type_classes.DeferredTypeClass.md).[retry](type_classes.DeferredTypeClass.md#retry)

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `TAcc`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `TAcc`\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[scan](type_classes.ContainerTypeClass.md#scan)

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `T`\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[skipFirst](type_classes.ContainerTypeClass.md#skipfirst)

___

### startWith

▸ **startWith**<`T`\>(`value`, `...values`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `T`\>

#### Inherited from

[DeferredTypeClass](type_classes.DeferredTypeClass.md).[startWith](type_classes.DeferredTypeClass.md#startwith)

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `T`\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[takeFirst](type_classes.ContainerTypeClass.md#takefirst)

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `T`\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[takeLast](type_classes.ContainerTypeClass.md#takelast)

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `T`, `T`\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[takeWhile](type_classes.ContainerTypeClass.md#takewhile)

___

### zipWith

▸ **zipWith**<`TA`, `TB`\>(`b`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `TA`, readonly [`TA`, `TB`]\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `TA`, readonly [`TA`, `TB`]\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[zipWith](type_classes.ContainerTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`\>(`b`, `c`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `TA`, readonly [`TA`, `TB`, `TC`]\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `TA`, readonly [`TA`, `TB`, `TC`]\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[zipWith](type_classes.ContainerTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`\>(`b`, `c`, `d`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[zipWith](type_classes.ContainerTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`b`, `c`, `d`, `e`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[zipWith](type_classes.ContainerTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`b`, `c`, `d`, `e`, `f`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[zipWith](type_classes.ContainerTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`b`, `c`, `d`, `e`, `f`, `g`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[zipWith](type_classes.ContainerTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[zipWith](type_classes.ContainerTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<[`Type`](Enumerator.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[zipWith](type_classes.ContainerTypeClass.md#zipwith)

___

## Transform Methods

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

[RunnableTypeClass](type_classes.RunnableTypeClass.md).[everySatisfy](type_classes.RunnableTypeClass.md#everysatisfy)

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

[RunnableTypeClass](type_classes.RunnableTypeClass.md).[first](type_classes.RunnableTypeClass.md#first)

___

### firstAsync

▸ **firstAsync**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[firstAsync](type_classes.ContainerTypeClass.md#firstasync)

___

### flow

▸ **flow**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>, [`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\> & [`DisposableLike`](types.DisposableLike.md)\>

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

[`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>, [`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\> & [`DisposableLike`](types.DisposableLike.md)\>

#### Inherited from

[RunnableTypeClass](type_classes.RunnableTypeClass.md).[flow](type_classes.RunnableTypeClass.md#flow)

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

[RunnableTypeClass](type_classes.RunnableTypeClass.md).[last](type_classes.RunnableTypeClass.md#last)

___

### lastAsync

▸ **lastAsync**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Inherited from

[ContainerTypeClass](type_classes.ContainerTypeClass.md).[lastAsync](type_classes.ContainerTypeClass.md#lastasync)

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

[RunnableTypeClass](type_classes.RunnableTypeClass.md).[noneSatisfy](type_classes.RunnableTypeClass.md#nonesatisfy)

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

[RunnableTypeClass](type_classes.RunnableTypeClass.md).[reduce](type_classes.RunnableTypeClass.md#reduce)

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

[RunnableTypeClass](type_classes.RunnableTypeClass.md).[someSatisfy](type_classes.RunnableTypeClass.md#somesatisfy)

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

[RunnableTypeClass](type_classes.RunnableTypeClass.md).[toReadonlyArray](type_classes.RunnableTypeClass.md#toreadonlyarray)
