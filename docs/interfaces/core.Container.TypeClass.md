[Reactive-JS](../README.md) / [core](../modules/core.md) / [Container](../modules/core.Container.md) / TypeClass

# Interface: TypeClass<C\>

[core](../modules/core.md).[Container](../modules/core.Container.md).TypeClass

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](core.Container-1.md) |

## Hierarchy

- **`TypeClass`**

  ↳ [`TypeClass`](core.ReactiveContainer.TypeClass.md)

## Table of contents

### Constructor Properties

- [fromRunnable](core.Container.TypeClass.md#fromrunnable)

### Operator Properties

- [buffer](core.Container.TypeClass.md#buffer)
- [concatAll](core.Container.TypeClass.md#concatall)
- [concatMap](core.Container.TypeClass.md#concatmap)
- [concatWith](core.Container.TypeClass.md#concatwith)
- [flatMapIterable](core.Container.TypeClass.md#flatmapiterable)

### Transform Properties

- [contains](core.Container.TypeClass.md#contains)
- [toObservable](core.Container.TypeClass.md#toobservable)
- [toRunnable](core.Container.TypeClass.md#torunnable)

### Constructor Methods

- [concat](core.Container.TypeClass.md#concat)
- [empty](core.Container.TypeClass.md#empty)
- [fromAsyncIterable](core.Container.TypeClass.md#fromasynciterable)
- [fromEnumerable](core.Container.TypeClass.md#fromenumerable)
- [fromEnumeratorFactory](core.Container.TypeClass.md#fromenumeratorfactory)
- [fromFactory](core.Container.TypeClass.md#fromfactory)
- [fromIterable](core.Container.TypeClass.md#fromiterable)
- [fromOptional](core.Container.TypeClass.md#fromoptional)
- [fromReadonlyArray](core.Container.TypeClass.md#fromreadonlyarray)
- [generate](core.Container.TypeClass.md#generate)
- [zip](core.Container.TypeClass.md#zip)

### Operator Methods

- [distinctUntilChanged](core.Container.TypeClass.md#distinctuntilchanged)
- [endWith](core.Container.TypeClass.md#endwith)
- [forEach](core.Container.TypeClass.md#foreach)
- [forkConcat](core.Container.TypeClass.md#forkconcat)
- [forkZip](core.Container.TypeClass.md#forkzip)
- [identity](core.Container.TypeClass.md#identity)
- [ignoreElements](core.Container.TypeClass.md#ignoreelements)
- [keep](core.Container.TypeClass.md#keep)
- [keepType](core.Container.TypeClass.md#keeptype)
- [map](core.Container.TypeClass.md#map)
- [mapTo](core.Container.TypeClass.md#mapto)
- [pairwise](core.Container.TypeClass.md#pairwise)
- [pick](core.Container.TypeClass.md#pick)
- [repeat](core.Container.TypeClass.md#repeat)
- [scan](core.Container.TypeClass.md#scan)
- [skipFirst](core.Container.TypeClass.md#skipfirst)
- [startWith](core.Container.TypeClass.md#startwith)
- [takeFirst](core.Container.TypeClass.md#takefirst)
- [takeLast](core.Container.TypeClass.md#takelast)
- [takeWhile](core.Container.TypeClass.md#takewhile)
- [zipWith](core.Container.TypeClass.md#zipwith)

### Transform Methods

- [everySatisfy](core.Container.TypeClass.md#everysatisfy)
- [first](core.Container.TypeClass.md#first)
- [flow](core.Container.TypeClass.md#flow)
- [last](core.Container.TypeClass.md#last)
- [noneSatisfy](core.Container.TypeClass.md#nonesatisfy)
- [reduce](core.Container.TypeClass.md#reduce)
- [someSatisfy](core.Container.TypeClass.md#somesatisfy)
- [toEnumerable](core.Container.TypeClass.md#toenumerable)
- [toIterable](core.Container.TypeClass.md#toiterable)
- [toReadonlyArray](core.Container.TypeClass.md#toreadonlyarray)

## Constructor Properties

### fromRunnable

• **fromRunnable**: <T\>() => [`Function1`](../modules/functions.md#function1)<[`RunnableLike`](core.RunnableLike.md)<`T`\>, [`Of`](../modules/core.Container.md#of)<`C`, `T`\>\>

#### Type declaration

▸ <`T`\>(): [`Function1`](../modules/functions.md#function1)<[`RunnableLike`](core.RunnableLike.md)<`T`\>, [`Of`](../modules/core.Container.md#of)<`C`, `T`\>\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`Function1`](../modules/functions.md#function1)<[`RunnableLike`](core.RunnableLike.md)<`T`\>, [`Of`](../modules/core.Container.md#of)<`C`, `T`\>\>

___

## Operator Properties

### buffer

• **buffer**: <T\>(`options?`: { `count?`: `number`  }) => [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, readonly `T`[]\>

#### Type declaration

▸ <`T`\>(`options?`): [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, readonly `T`[]\>

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

[`Operator`](../modules/core.Container.md#operator)<`C`, `T`, readonly `T`[]\>

___

### concatAll

• **concatAll**: <T\>() => [`Operator`](../modules/core.Container.md#operator)<`C`, [`Of`](../modules/core.Container.md#of)<`C`, `T`\>, `T`\>

#### Type declaration

▸ <`T`\>(): [`Operator`](../modules/core.Container.md#operator)<`C`, [`Of`](../modules/core.Container.md#of)<`C`, `T`\>, `T`\>

Converts a higher-order Container into a first-order
Container by concatenating the inner sources in order.

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`Operator`](../modules/core.Container.md#operator)<`C`, [`Of`](../modules/core.Container.md#of)<`C`, `T`\>, `T`\>

___

### concatMap

• **concatMap**: <TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, [`Of`](../modules/core.Container.md#of)<`C`, `TB`\>\>) => [`Operator`](../modules/core.Container.md#operator)<`C`, `TA`, `TB`\>

#### Type declaration

▸ <`TA`, `TB`\>(`selector`): [`Operator`](../modules/core.Container.md#operator)<`C`, `TA`, `TB`\>

##### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`Of`](../modules/core.Container.md#of)<`C`, `TB`\>\> |

##### Returns

[`Operator`](../modules/core.Container.md#operator)<`C`, `TA`, `TB`\>

___

### concatWith

• **concatWith**: <T\>(`snd`: [`Of`](../modules/core.Container.md#of)<`C`, `T`\>, ...`tail`: readonly [`Of`](../modules/core.Container.md#of)<`C`, `T`\>[]) => [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`\>

#### Type declaration

▸ <`T`\>(`snd`, `...tail`): [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`Of`](../modules/core.Container.md#of)<`C`, `T`\> |
| `...tail` | readonly [`Of`](../modules/core.Container.md#of)<`C`, `T`\>[] |

##### Returns

[`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`\>

___

### flatMapIterable

• **flatMapIterable**: <TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, `Iterable`<`TB`\>\>) => [`Operator`](../modules/core.Container.md#operator)<`C`, `TA`, `TB`\>

#### Type declaration

▸ <`TA`, `TB`\>(`selector`): [`Operator`](../modules/core.Container.md#operator)<`C`, `TA`, `TB`\>

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

[`Operator`](../modules/core.Container.md#operator)<`C`, `TA`, `TB`\>

___

## Transform Properties

### contains

• **contains**: <T\>(`value`: `T`, `options?`: { `equality?`: [`Equality`](../modules/functions.md#equality)<`T`\>  }) => [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Container.md#of)<`C`, `T`\>, `boolean`\>

#### Type declaration

▸ <`T`\>(`value`, `options?`): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Container.md#of)<`C`, `T`\>, `boolean`\>

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

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Container.md#of)<`C`, `T`\>, `boolean`\>

___

### toObservable

• **toObservable**: <T\>() => [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Container.md#of)<`C`, `T`\>, [`ObservableLike`](core.ObservableLike.md)<`T`\>\>

#### Type declaration

▸ <`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Container.md#of)<`C`, `T`\>, [`ObservableLike`](core.ObservableLike.md)<`T`\>\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Container.md#of)<`C`, `T`\>, [`ObservableLike`](core.ObservableLike.md)<`T`\>\>

___

### toRunnable

• **toRunnable**: <T\>() => [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Container.md#of)<`C`, `T`\>, [`RunnableLike`](core.RunnableLike.md)<`T`\>\>

#### Type declaration

▸ <`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Container.md#of)<`C`, `T`\>, [`RunnableLike`](core.RunnableLike.md)<`T`\>\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Container.md#of)<`C`, `T`\>, [`RunnableLike`](core.RunnableLike.md)<`T`\>\>

## Constructor Methods

### concat

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`Of`](../modules/core.Container.md#of)<`C`, `T`\>

Returns a Container which emits all values from each source sequentially.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Of`](../modules/core.Container.md#of)<`C`, `T`\> |
| `snd` | [`Of`](../modules/core.Container.md#of)<`C`, `T`\> |
| `...tail` | readonly [`Of`](../modules/core.Container.md#of)<`C`, `T`\>[] |

#### Returns

[`Of`](../modules/core.Container.md#of)<`C`, `T`\>

___

### empty

▸ **empty**<`T`\>(): [`Of`](../modules/core.Container.md#of)<`C`, `T`\>

Return an Container that emits no items.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Of`](../modules/core.Container.md#of)<`C`, `T`\>

___

### fromAsyncIterable

▸ **fromAsyncIterable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`AsyncIterable`<`T`\>, [`Of`](../modules/core.Container.md#of)<`C`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`AsyncIterable`<`T`\>, [`Of`](../modules/core.Container.md#of)<`C`, `T`\>\>

___

### fromEnumerable

▸ **fromEnumerable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](core.EnumerableLike.md)<`T`\>, [`Of`](../modules/core.Container.md#of)<`C`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](core.EnumerableLike.md)<`T`\>, [`Of`](../modules/core.Container.md#of)<`C`, `T`\>\>

___

### fromEnumeratorFactory

▸ **fromEnumeratorFactory**<`T`\>(`factory`): [`Of`](../modules/core.Container.md#of)<`C`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](../modules/functions.md#factory)<[`EnumeratorLike`](core.EnumeratorLike.md)<`T`\>\> |

#### Returns

[`Of`](../modules/core.Container.md#of)<`C`, `T`\>

___

### fromFactory

▸ **fromFactory**<`T`\>(`factory`): [`Of`](../modules/core.Container.md#of)<`C`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](../modules/functions.md#factory)<`T`\> |

#### Returns

[`Of`](../modules/core.Container.md#of)<`C`, `T`\>

___

### fromIterable

▸ **fromIterable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`Of`](../modules/core.Container.md#of)<`C`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`Of`](../modules/core.Container.md#of)<`C`, `T`\>\>

___

### fromOptional

▸ **fromOptional**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, [`Of`](../modules/core.Container.md#of)<`C`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, [`Of`](../modules/core.Container.md#of)<`C`, `T`\>\>

___

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`Of`](../modules/core.Container.md#of)<`C`, `T`\>\>

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

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`Of`](../modules/core.Container.md#of)<`C`, `T`\>\>

___

### generate

▸ **generate**<`T`\>(`generator`, `initialValue`): [`Of`](../modules/core.Container.md#of)<`C`, `T`\>

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

[`Of`](../modules/core.Container.md#of)<`C`, `T`\>

___

### zip

▸ **zip**<`TA`, `TB`\>(`a`, `b`): [`Of`](../modules/core.Container.md#of)<`C`, readonly [`TA`, `TB`]\>

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
| `a` | [`Of`](../modules/core.Container.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/core.Container.md#of)<`C`, `TB`\> |

#### Returns

[`Of`](../modules/core.Container.md#of)<`C`, readonly [`TA`, `TB`]\>

▸ **zip**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Of`](../modules/core.Container.md#of)<`C`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Of`](../modules/core.Container.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/core.Container.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/core.Container.md#of)<`C`, `TC`\> |

#### Returns

[`Of`](../modules/core.Container.md#of)<`C`, readonly [`TA`, `TB`, `TC`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Of`](../modules/core.Container.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`Of`](../modules/core.Container.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/core.Container.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/core.Container.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/core.Container.md#of)<`C`, `TD`\> |

#### Returns

[`Of`](../modules/core.Container.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`Of`](../modules/core.Container.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`Of`](../modules/core.Container.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/core.Container.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/core.Container.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/core.Container.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/core.Container.md#of)<`C`, `TE`\> |

#### Returns

[`Of`](../modules/core.Container.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`Of`](../modules/core.Container.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`Of`](../modules/core.Container.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/core.Container.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/core.Container.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/core.Container.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/core.Container.md#of)<`C`, `TE`\> |
| `f` | [`Of`](../modules/core.Container.md#of)<`C`, `TF`\> |

#### Returns

[`Of`](../modules/core.Container.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`Of`](../modules/core.Container.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`Of`](../modules/core.Container.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/core.Container.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/core.Container.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/core.Container.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/core.Container.md#of)<`C`, `TE`\> |
| `f` | [`Of`](../modules/core.Container.md#of)<`C`, `TF`\> |
| `g` | [`Of`](../modules/core.Container.md#of)<`C`, `TG`\> |

#### Returns

[`Of`](../modules/core.Container.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Of`](../modules/core.Container.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`Of`](../modules/core.Container.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/core.Container.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/core.Container.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/core.Container.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/core.Container.md#of)<`C`, `TE`\> |
| `f` | [`Of`](../modules/core.Container.md#of)<`C`, `TF`\> |
| `g` | [`Of`](../modules/core.Container.md#of)<`C`, `TG`\> |
| `h` | [`Of`](../modules/core.Container.md#of)<`C`, `TH`\> |

#### Returns

[`Of`](../modules/core.Container.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Of`](../modules/core.Container.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`Of`](../modules/core.Container.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/core.Container.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/core.Container.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/core.Container.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/core.Container.md#of)<`C`, `TE`\> |
| `f` | [`Of`](../modules/core.Container.md#of)<`C`, `TF`\> |
| `g` | [`Of`](../modules/core.Container.md#of)<`C`, `TG`\> |
| `h` | [`Of`](../modules/core.Container.md#of)<`C`, `TH`\> |
| `i` | [`Of`](../modules/core.Container.md#of)<`C`, `TI`\> |

#### Returns

[`Of`](../modules/core.Container.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

## Operator Methods

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`\>

Returns a Container.Operator that emits all items emitted by the source that
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

[`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`\>

___

### endWith

▸ **endWith**<`T`\>(`value`, `...values`): [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`\>

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

[`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`\>

___

### forEach

▸ **forEach**<`T`\>(`effect`): [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`\>

Returns a Container.Operator that applies the side effect function to each
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

[`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`\>

___

### forkConcat

▸ **forkConcat**<`TIn`, `TOut`\>(`fst`, `snd`, `...tail`): [`Operator`](../modules/core.Container.md#operator)<`C`, `TIn`, `TOut`\>

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Operator`](../modules/core.Container.md#operator)<`C`, `TIn`, `TOut`\> |
| `snd` | [`Operator`](../modules/core.Container.md#operator)<`C`, `TIn`, `TOut`\> |
| `...tail` | readonly [`Operator`](../modules/core.Container.md#operator)<`C`, `TIn`, `TOut`\>[] |

#### Returns

[`Operator`](../modules/core.Container.md#operator)<`C`, `TIn`, `TOut`\>

___

### forkZip

▸ **forkZip**<`T`, `TA`, `TB`\>(`a`, `b`): [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `TB`\> |

#### Returns

[`Operator`](../modules/core.Container.md#operator)<`C`, `T`, readonly [`TA`, `TB`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`]\>

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
| `a` | [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `TC`\> |

#### Returns

[`Operator`](../modules/core.Container.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `TD`\> |

#### Returns

[`Operator`](../modules/core.Container.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `TD`\> |
| `e` | [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `TE`\> |

#### Returns

[`Operator`](../modules/core.Container.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `TD`\> |
| `e` | [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `TE`\> |
| `f` | [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `TF`\> |

#### Returns

[`Operator`](../modules/core.Container.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `TD`\> |
| `e` | [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `TE`\> |
| `f` | [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `TF`\> |
| `g` | [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `TG`\> |

#### Returns

[`Operator`](../modules/core.Container.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `TD`\> |
| `e` | [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `TE`\> |
| `f` | [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `TF`\> |
| `g` | [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `TG`\> |
| `h` | [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `TH`\> |

#### Returns

[`Operator`](../modules/core.Container.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `TD`\> |
| `e` | [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `TE`\> |
| `f` | [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `TF`\> |
| `g` | [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `TG`\> |
| `h` | [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `TH`\> |
| `i` | [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `TI`\> |

#### Returns

[`Operator`](../modules/core.Container.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

### identity

▸ **identity**<`T`\>(): [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`\>

___

### ignoreElements

▸ **ignoreElements**<`T`\>(): [`Operator`](../modules/core.Container.md#operator)<`C`, `unknown`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](../modules/core.Container.md#operator)<`C`, `unknown`, `T`\>

___

### keep

▸ **keep**<`T`\>(`predicate`): [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`\>

Returns a Container.Operator that only emits items produced by the
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

[`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`\>

___

### keepType

▸ **keepType**<`TA`, `TB`\>(`predicate`): [`Operator`](../modules/core.Container.md#operator)<`C`, `TA`, `TB`\>

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

[`Operator`](../modules/core.Container.md#operator)<`C`, `TA`, `TB`\>

___

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`Operator`](../modules/core.Container.md#operator)<`C`, `TA`, `TB`\>

Returns a Container.Operator that applies the `selector` function to each
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

[`Operator`](../modules/core.Container.md#operator)<`C`, `TA`, `TB`\>

___

### mapTo

▸ **mapTo**<`TA`, `TB`\>(`value`): [`Operator`](../modules/core.Container.md#operator)<`C`, `TA`, `TB`\>

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

[`Operator`](../modules/core.Container.md#operator)<`C`, `TA`, `TB`\>

___

### pairwise

▸ **pairwise**<`T`\>(): [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, readonly [`T`, `T`]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](../modules/core.Container.md#operator)<`C`, `T`, readonly [`T`, `T`]\>

___

### pick

▸ **pick**<`T`, `TKey`\>(`key`): [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`[`TKey`]\>

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

[`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`[`TKey`]\>

▸ **pick**<`T`, `TKeyA`, `TKeyB`\>(`keyA`, `keyB`): [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`[`TKeyA`][`TKeyB`]\>

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

[`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`[`TKeyA`][`TKeyB`]\>

▸ **pick**<`T`, `TKeyA`, `TKeyB`, `TKeyC`\>(`keyA`, `keyB`, `keyC`): [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

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

[`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

___

### repeat

▸ **repeat**<`T`\>(`predicate`): [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`\>

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

[`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`\>

▸ **repeat**<`T`\>(`count`): [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`\>

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

[`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`\>

▸ **repeat**<`T`\>(): [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`\>

Returns a Container that mirrors the source, continually repeating it.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`\>

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `TAcc`\>

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

[`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `TAcc`\>

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`\>

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

[`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`\>

___

### startWith

▸ **startWith**<`T`\>(`value`, `...values`): [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`\>

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

[`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`\>

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`\>

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

[`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`\>

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`\>

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

[`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`\>

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`\>

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

[`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`\>

___

### zipWith

▸ **zipWith**<`TA`, `TB`\>(`b`): [`Operator`](../modules/core.Container.md#operator)<`C`, `TA`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`Of`](../modules/core.Container.md#of)<`C`, `TB`\> |

#### Returns

[`Operator`](../modules/core.Container.md#operator)<`C`, `TA`, readonly [`TA`, `TB`]\>

▸ **zipWith**<`TA`, `TB`, `TC`\>(`b`, `c`): [`Operator`](../modules/core.Container.md#operator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`Of`](../modules/core.Container.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/core.Container.md#of)<`C`, `TC`\> |

#### Returns

[`Operator`](../modules/core.Container.md#operator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`\>(`b`, `c`, `d`): [`Operator`](../modules/core.Container.md#operator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `b` | [`Of`](../modules/core.Container.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/core.Container.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/core.Container.md#of)<`C`, `TD`\> |

#### Returns

[`Operator`](../modules/core.Container.md#operator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`b`, `c`, `d`, `e`): [`Operator`](../modules/core.Container.md#operator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `b` | [`Of`](../modules/core.Container.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/core.Container.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/core.Container.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/core.Container.md#of)<`C`, `TE`\> |

#### Returns

[`Operator`](../modules/core.Container.md#operator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`b`, `c`, `d`, `e`, `f`): [`Operator`](../modules/core.Container.md#operator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `b` | [`Of`](../modules/core.Container.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/core.Container.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/core.Container.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/core.Container.md#of)<`C`, `TE`\> |
| `f` | [`Of`](../modules/core.Container.md#of)<`C`, `TF`\> |

#### Returns

[`Operator`](../modules/core.Container.md#operator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`b`, `c`, `d`, `e`, `f`, `g`): [`Operator`](../modules/core.Container.md#operator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `b` | [`Of`](../modules/core.Container.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/core.Container.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/core.Container.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/core.Container.md#of)<`C`, `TE`\> |
| `f` | [`Of`](../modules/core.Container.md#of)<`C`, `TF`\> |
| `g` | [`Of`](../modules/core.Container.md#of)<`C`, `TG`\> |

#### Returns

[`Operator`](../modules/core.Container.md#operator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Operator`](../modules/core.Container.md#operator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `b` | [`Of`](../modules/core.Container.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/core.Container.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/core.Container.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/core.Container.md#of)<`C`, `TE`\> |
| `f` | [`Of`](../modules/core.Container.md#of)<`C`, `TF`\> |
| `g` | [`Of`](../modules/core.Container.md#of)<`C`, `TG`\> |
| `h` | [`Of`](../modules/core.Container.md#of)<`C`, `TH`\> |

#### Returns

[`Operator`](../modules/core.Container.md#operator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Operator`](../modules/core.Container.md#operator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `b` | [`Of`](../modules/core.Container.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/core.Container.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/core.Container.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/core.Container.md#of)<`C`, `TE`\> |
| `f` | [`Of`](../modules/core.Container.md#of)<`C`, `TF`\> |
| `g` | [`Of`](../modules/core.Container.md#of)<`C`, `TG`\> |
| `h` | [`Of`](../modules/core.Container.md#of)<`C`, `TH`\> |
| `i` | [`Of`](../modules/core.Container.md#of)<`C`, `TI`\> |

#### Returns

[`Operator`](../modules/core.Container.md#operator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

## Transform Methods

### everySatisfy

▸ **everySatisfy**<`T`\>(`predicate`): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Container.md#of)<`C`, `T`\>, `boolean`\>

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

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Container.md#of)<`C`, `T`\>, `boolean`\>

___

### first

▸ **first**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Container.md#of)<`C`, `T`\>, [`Optional`](../modules/functions.md#optional)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Container.md#of)<`C`, `T`\>, [`Optional`](../modules/functions.md#optional)<`T`\>\>

___

### flow

▸ **flow**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Container.md#of)<`C`, `T`\>, [`PauseableObservableLike`](core.PauseableObservableLike.md)<`T`\> & [`DisposableLike`](core.DisposableLike.md)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](core.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Container.md#of)<`C`, `T`\>, [`PauseableObservableLike`](core.PauseableObservableLike.md)<`T`\> & [`DisposableLike`](core.DisposableLike.md)\>

___

### last

▸ **last**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Container.md#of)<`C`, `T`\>, [`Optional`](../modules/functions.md#optional)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Container.md#of)<`C`, `T`\>, [`Optional`](../modules/functions.md#optional)<`T`\>\>

___

### noneSatisfy

▸ **noneSatisfy**<`T`\>(`predicate`): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Container.md#of)<`C`, `T`\>, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Container.md#of)<`C`, `T`\>, `boolean`\>

___

### reduce

▸ **reduce**<`T`, `TAcc`\>(`reducer`, `initialValue`): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Container.md#of)<`C`, `T`\>, `TAcc`\>

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

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Container.md#of)<`C`, `T`\>, `TAcc`\>

___

### someSatisfy

▸ **someSatisfy**<`T`\>(`predicate`): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Container.md#of)<`C`, `T`\>, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Container.md#of)<`C`, `T`\>, `boolean`\>

___

### toEnumerable

▸ **toEnumerable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Container.md#of)<`C`, `T`\>, [`EnumerableLike`](core.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Container.md#of)<`C`, `T`\>, [`EnumerableLike`](core.EnumerableLike.md)<`T`\>\>

___

### toIterable

▸ **toIterable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Container.md#of)<`C`, `T`\>, `Iterable`<`T`\>\>

Converts the Container to a `IterableLike`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Container.md#of)<`C`, `T`\>, `Iterable`<`T`\>\>

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Container.md#of)<`C`, `T`\>, readonly `T`[]\>

Converts the Container to a `ReadonlyArrayContainer`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Container.md#of)<`C`, `T`\>, readonly `T`[]\>
