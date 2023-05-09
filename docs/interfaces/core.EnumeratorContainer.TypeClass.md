[Reactive-JS](../README.md) / [core](../modules/core.md) / [EnumeratorContainer](../modules/core.EnumeratorContainer.md) / TypeClass

# Interface: TypeClass

[core](../modules/core.md).[EnumeratorContainer](../modules/core.EnumeratorContainer.md).TypeClass

## Hierarchy

- [`TypeClass`](core.Containers.TypeClass.md)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md)\>

- [`TypeClass`](core.DeferredContainers.TypeClass.md)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md)\>

- [`TypeClass`](core.RunnableContainers.TypeClass.md)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md)\>

  ↳ **`TypeClass`**

## Table of contents

### Constructor Properties

- [fromRunnable](core.EnumeratorContainer.TypeClass.md#fromrunnable)

### Operator Properties

- [buffer](core.EnumeratorContainer.TypeClass.md#buffer)
- [concatAll](core.EnumeratorContainer.TypeClass.md#concatall)
- [concatMap](core.EnumeratorContainer.TypeClass.md#concatmap)
- [concatWith](core.EnumeratorContainer.TypeClass.md#concatwith)
- [flatMapIterable](core.EnumeratorContainer.TypeClass.md#flatmapiterable)
- [scanLast](core.EnumeratorContainer.TypeClass.md#scanlast)

### Transform Properties

- [contains](core.EnumeratorContainer.TypeClass.md#contains)
- [toObservable](core.EnumeratorContainer.TypeClass.md#toobservable)
- [toRunnable](core.EnumeratorContainer.TypeClass.md#torunnable)

### Constructor Methods

- [concat](core.EnumeratorContainer.TypeClass.md#concat)
- [empty](core.EnumeratorContainer.TypeClass.md#empty)
- [fromEnumerable](core.EnumeratorContainer.TypeClass.md#fromenumerable)
- [fromEnumeratorFactory](core.EnumeratorContainer.TypeClass.md#fromenumeratorfactory)
- [fromFactory](core.EnumeratorContainer.TypeClass.md#fromfactory)
- [fromIterable](core.EnumeratorContainer.TypeClass.md#fromiterable)
- [fromOptional](core.EnumeratorContainer.TypeClass.md#fromoptional)
- [fromReadonlyArray](core.EnumeratorContainer.TypeClass.md#fromreadonlyarray)
- [generate](core.EnumeratorContainer.TypeClass.md#generate)
- [zip](core.EnumeratorContainer.TypeClass.md#zip)

### Operator Methods

- [distinctUntilChanged](core.EnumeratorContainer.TypeClass.md#distinctuntilchanged)
- [endWith](core.EnumeratorContainer.TypeClass.md#endwith)
- [forEach](core.EnumeratorContainer.TypeClass.md#foreach)
- [forkConcat](core.EnumeratorContainer.TypeClass.md#forkconcat)
- [forkZip](core.EnumeratorContainer.TypeClass.md#forkzip)
- [identity](core.EnumeratorContainer.TypeClass.md#identity)
- [ignoreElements](core.EnumeratorContainer.TypeClass.md#ignoreelements)
- [keep](core.EnumeratorContainer.TypeClass.md#keep)
- [keepType](core.EnumeratorContainer.TypeClass.md#keeptype)
- [map](core.EnumeratorContainer.TypeClass.md#map)
- [mapTo](core.EnumeratorContainer.TypeClass.md#mapto)
- [pairwise](core.EnumeratorContainer.TypeClass.md#pairwise)
- [pick](core.EnumeratorContainer.TypeClass.md#pick)
- [repeat](core.EnumeratorContainer.TypeClass.md#repeat)
- [retry](core.EnumeratorContainer.TypeClass.md#retry)
- [scan](core.EnumeratorContainer.TypeClass.md#scan)
- [skipFirst](core.EnumeratorContainer.TypeClass.md#skipfirst)
- [startWith](core.EnumeratorContainer.TypeClass.md#startwith)
- [takeFirst](core.EnumeratorContainer.TypeClass.md#takefirst)
- [takeLast](core.EnumeratorContainer.TypeClass.md#takelast)
- [takeWhile](core.EnumeratorContainer.TypeClass.md#takewhile)
- [zipWith](core.EnumeratorContainer.TypeClass.md#zipwith)

### Transform Methods

- [everySatisfy](core.EnumeratorContainer.TypeClass.md#everysatisfy)
- [first](core.EnumeratorContainer.TypeClass.md#first)
- [firstAsync](core.EnumeratorContainer.TypeClass.md#firstasync)
- [flow](core.EnumeratorContainer.TypeClass.md#flow)
- [last](core.EnumeratorContainer.TypeClass.md#last)
- [lastAsync](core.EnumeratorContainer.TypeClass.md#lastasync)
- [noneSatisfy](core.EnumeratorContainer.TypeClass.md#nonesatisfy)
- [reduce](core.EnumeratorContainer.TypeClass.md#reduce)
- [someSatisfy](core.EnumeratorContainer.TypeClass.md#somesatisfy)
- [toReadonlyArray](core.EnumeratorContainer.TypeClass.md#toreadonlyarray)

## Constructor Properties

### fromRunnable

• **fromRunnable**: <T\>() => [`Function1`](../modules/functions.md#function1)<[`RunnableLike`](core.RunnableLike.md)<`T`\>, [`EnumeratorLike`](core.EnumeratorLike.md)<`T`\>\>

#### Type declaration

▸ <`T`\>(): [`Function1`](../modules/functions.md#function1)<[`RunnableLike`](core.RunnableLike.md)<`T`\>, [`EnumeratorLike`](core.EnumeratorLike.md)<`T`\>\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`Function1`](../modules/functions.md#function1)<[`RunnableLike`](core.RunnableLike.md)<`T`\>, [`EnumeratorLike`](core.EnumeratorLike.md)<`T`\>\>

#### Inherited from

[TypeClass](core.DeferredContainers.TypeClass.md).[fromRunnable](core.DeferredContainers.TypeClass.md#fromrunnable)

___

## Operator Properties

### buffer

• **buffer**: <T\>(`options?`: { `count?`: `number`  }) => [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, readonly `T`[]\>

#### Type declaration

▸ <`T`\>(`options?`): [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, readonly `T`[]\>

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

[`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, readonly `T`[]\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[buffer](core.Containers.TypeClass.md#buffer)

___

### concatAll

• **concatAll**: <T\>() => [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), [`EnumeratorLike`](core.EnumeratorLike.md)<`T`\>, `T`\>

#### Type declaration

▸ <`T`\>(): [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), [`EnumeratorLike`](core.EnumeratorLike.md)<`T`\>, `T`\>

Converts a higher-order Container into a first-order
Container by concatenating the inner sources in order.

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), [`EnumeratorLike`](core.EnumeratorLike.md)<`T`\>, `T`\>

#### Inherited from

[TypeClass](core.DeferredContainers.TypeClass.md).[concatAll](core.DeferredContainers.TypeClass.md#concatall)

___

### concatMap

• **concatMap**: <TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, [`EnumeratorLike`](core.EnumeratorLike.md)<`TB`\>\>) => [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `TA`, `TB`\>

#### Type declaration

▸ <`TA`, `TB`\>(`selector`): [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `TA`, `TB`\>

##### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`EnumeratorLike`](core.EnumeratorLike.md)<`TB`\>\> |

##### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `TA`, `TB`\>

#### Inherited from

[TypeClass](core.DeferredContainers.TypeClass.md).[concatMap](core.DeferredContainers.TypeClass.md#concatmap)

___

### concatWith

• **concatWith**: <T\>(`snd`: [`EnumeratorLike`](core.EnumeratorLike.md)<`T`\>, ...`tail`: readonly [`EnumeratorLike`](core.EnumeratorLike.md)<`T`\>[]) => [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `T`\>

#### Type declaration

▸ <`T`\>(`snd`, `...tail`): [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`EnumeratorLike`](core.EnumeratorLike.md)<`T`\> |
| `...tail` | readonly [`EnumeratorLike`](core.EnumeratorLike.md)<`T`\>[] |

##### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](core.DeferredContainers.TypeClass.md).[concatWith](core.DeferredContainers.TypeClass.md#concatwith)

___

### flatMapIterable

• **flatMapIterable**: <TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, `Iterable`<`TB`\>\>) => [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `TA`, `TB`\>

#### Type declaration

▸ <`TA`, `TB`\>(`selector`): [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `TA`, `TB`\>

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

[`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `TA`, `TB`\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[flatMapIterable](core.Containers.TypeClass.md#flatmapiterable)

___

### scanLast

• **scanLast**: <T, TAcc\>(`scanner`: [`Function2`](../modules/functions.md#function2)<`TAcc`, `T`, [`EnumeratorLike`](core.EnumeratorLike.md)<`TAcc`\>\>, `initialValue`: [`Factory`](../modules/functions.md#factory)<`TAcc`\>) => [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `TAcc`\>

#### Type declaration

▸ <`T`, `TAcc`\>(`scanner`, `initialValue`): [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `TAcc`\>

##### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Function2`](../modules/functions.md#function2)<`TAcc`, `T`, [`EnumeratorLike`](core.EnumeratorLike.md)<`TAcc`\>\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

##### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `TAcc`\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[scanLast](core.Containers.TypeClass.md#scanlast)

___

## Transform Properties

### contains

• **contains**: <T\>(`value`: `T`, `options?`: { `equality?`: [`Equality`](../modules/functions.md#equality)<`T`\>  }) => [`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](core.EnumeratorLike.md)<`T`\>, `boolean`\>

#### Type declaration

▸ <`T`\>(`value`, `options?`): [`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](core.EnumeratorLike.md)<`T`\>, `boolean`\>

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

[`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](core.EnumeratorLike.md)<`T`\>, `boolean`\>

#### Inherited from

[TypeClass](core.RunnableContainers.TypeClass.md).[contains](core.RunnableContainers.TypeClass.md#contains)

___

### toObservable

• **toObservable**: <T\>() => [`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](core.EnumeratorLike.md)<`T`\>, [`ObservableLike`](core.ObservableLike.md)<`T`\>\>

#### Type declaration

▸ <`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](core.EnumeratorLike.md)<`T`\>, [`ObservableLike`](core.ObservableLike.md)<`T`\>\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](core.EnumeratorLike.md)<`T`\>, [`ObservableLike`](core.ObservableLike.md)<`T`\>\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[toObservable](core.Containers.TypeClass.md#toobservable)

___

### toRunnable

• **toRunnable**: <T\>() => [`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](core.EnumeratorLike.md)<`T`\>, [`RunnableLike`](core.RunnableLike.md)<`T`\>\>

#### Type declaration

▸ <`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](core.EnumeratorLike.md)<`T`\>, [`RunnableLike`](core.RunnableLike.md)<`T`\>\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](core.EnumeratorLike.md)<`T`\>, [`RunnableLike`](core.RunnableLike.md)<`T`\>\>

#### Inherited from

[TypeClass](core.RunnableContainers.TypeClass.md).[toRunnable](core.RunnableContainers.TypeClass.md#torunnable)

## Constructor Methods

### concat

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`EnumeratorLike`](core.EnumeratorLike.md)<`T`\>

Returns a Container which emits all values from each source sequentially.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`EnumeratorLike`](core.EnumeratorLike.md)<`T`\> |
| `snd` | [`EnumeratorLike`](core.EnumeratorLike.md)<`T`\> |
| `...tail` | readonly [`EnumeratorLike`](core.EnumeratorLike.md)<`T`\>[] |

#### Returns

[`EnumeratorLike`](core.EnumeratorLike.md)<`T`\>

#### Inherited from

[TypeClass](core.DeferredContainers.TypeClass.md).[concat](core.DeferredContainers.TypeClass.md#concat)

___

### empty

▸ **empty**<`T`\>(): [`EnumeratorLike`](core.EnumeratorLike.md)<`T`\>

Return an Container that emits no items.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`EnumeratorLike`](core.EnumeratorLike.md)<`T`\>

#### Inherited from

[TypeClass](core.DeferredContainers.TypeClass.md).[empty](core.DeferredContainers.TypeClass.md#empty)

___

### fromEnumerable

▸ **fromEnumerable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](core.EnumerableLike.md)<`T`\>, [`EnumeratorLike`](core.EnumeratorLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](core.EnumerableLike.md)<`T`\>, [`EnumeratorLike`](core.EnumeratorLike.md)<`T`\>\>

#### Inherited from

[TypeClass](core.DeferredContainers.TypeClass.md).[fromEnumerable](core.DeferredContainers.TypeClass.md#fromenumerable)

___

### fromEnumeratorFactory

▸ **fromEnumeratorFactory**<`T`\>(`factory`): [`EnumeratorLike`](core.EnumeratorLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](../modules/functions.md#factory)<[`EnumeratorLike`](core.EnumeratorLike.md)<`T`\>\> |

#### Returns

[`EnumeratorLike`](core.EnumeratorLike.md)<`T`\>

#### Inherited from

[TypeClass](core.DeferredContainers.TypeClass.md).[fromEnumeratorFactory](core.DeferredContainers.TypeClass.md#fromenumeratorfactory)

___

### fromFactory

▸ **fromFactory**<`T`\>(`factory`): [`EnumeratorLike`](core.EnumeratorLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](../modules/functions.md#factory)<`T`\> |

#### Returns

[`EnumeratorLike`](core.EnumeratorLike.md)<`T`\>

#### Inherited from

[TypeClass](core.DeferredContainers.TypeClass.md).[fromFactory](core.DeferredContainers.TypeClass.md#fromfactory)

___

### fromIterable

▸ **fromIterable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`EnumeratorLike`](core.EnumeratorLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`EnumeratorLike`](core.EnumeratorLike.md)<`T`\>\>

#### Inherited from

[TypeClass](core.DeferredContainers.TypeClass.md).[fromIterable](core.DeferredContainers.TypeClass.md#fromiterable)

___

### fromOptional

▸ **fromOptional**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, [`EnumeratorLike`](core.EnumeratorLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, [`EnumeratorLike`](core.EnumeratorLike.md)<`T`\>\>

#### Inherited from

[TypeClass](core.DeferredContainers.TypeClass.md).[fromOptional](core.DeferredContainers.TypeClass.md#fromoptional)

___

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumeratorLike`](core.EnumeratorLike.md)<`T`\>\>

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

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumeratorLike`](core.EnumeratorLike.md)<`T`\>\>

#### Inherited from

[TypeClass](core.DeferredContainers.TypeClass.md).[fromReadonlyArray](core.DeferredContainers.TypeClass.md#fromreadonlyarray)

___

### generate

▸ **generate**<`T`\>(`generator`, `initialValue`): [`EnumeratorLike`](core.EnumeratorLike.md)<`T`\>

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

[`EnumeratorLike`](core.EnumeratorLike.md)<`T`\>

#### Inherited from

[TypeClass](core.DeferredContainers.TypeClass.md).[generate](core.DeferredContainers.TypeClass.md#generate)

___

### zip

▸ **zip**<`TA`, `TB`\>(`a`, `b`): [`EnumeratorLike`](core.EnumeratorLike.md)<readonly [`TA`, `TB`]\>

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
| `a` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TA`\> |
| `b` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TB`\> |

#### Returns

[`EnumeratorLike`](core.EnumeratorLike.md)<readonly [`TA`, `TB`]\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[zip](core.Containers.TypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`EnumeratorLike`](core.EnumeratorLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TA`\> |
| `b` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TB`\> |
| `c` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TC`\> |

#### Returns

[`EnumeratorLike`](core.EnumeratorLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[zip](core.Containers.TypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`EnumeratorLike`](core.EnumeratorLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TA`\> |
| `b` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TB`\> |
| `c` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TC`\> |
| `d` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TD`\> |

#### Returns

[`EnumeratorLike`](core.EnumeratorLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[zip](core.Containers.TypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`EnumeratorLike`](core.EnumeratorLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TA`\> |
| `b` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TB`\> |
| `c` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TC`\> |
| `d` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TD`\> |
| `e` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TE`\> |

#### Returns

[`EnumeratorLike`](core.EnumeratorLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[zip](core.Containers.TypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`EnumeratorLike`](core.EnumeratorLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TA`\> |
| `b` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TB`\> |
| `c` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TC`\> |
| `d` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TD`\> |
| `e` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TE`\> |
| `f` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TF`\> |

#### Returns

[`EnumeratorLike`](core.EnumeratorLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[zip](core.Containers.TypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`EnumeratorLike`](core.EnumeratorLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TA`\> |
| `b` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TB`\> |
| `c` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TC`\> |
| `d` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TD`\> |
| `e` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TE`\> |
| `f` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TF`\> |
| `g` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TG`\> |

#### Returns

[`EnumeratorLike`](core.EnumeratorLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[zip](core.Containers.TypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`EnumeratorLike`](core.EnumeratorLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TA`\> |
| `b` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TB`\> |
| `c` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TC`\> |
| `d` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TD`\> |
| `e` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TE`\> |
| `f` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TF`\> |
| `g` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TG`\> |
| `h` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TH`\> |

#### Returns

[`EnumeratorLike`](core.EnumeratorLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[zip](core.Containers.TypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`EnumeratorLike`](core.EnumeratorLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TA`\> |
| `b` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TB`\> |
| `c` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TC`\> |
| `d` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TD`\> |
| `e` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TE`\> |
| `f` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TF`\> |
| `g` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TG`\> |
| `h` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TH`\> |
| `i` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TI`\> |

#### Returns

[`EnumeratorLike`](core.EnumeratorLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[zip](core.Containers.TypeClass.md#zip)

___

## Operator Methods

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `T`\>

Returns a Containers.Operator that emits all items emitted by the source that
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

[`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[distinctUntilChanged](core.Containers.TypeClass.md#distinctuntilchanged)

___

### endWith

▸ **endWith**<`T`\>(`value`, `...values`): [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `T`\>

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

[`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](core.DeferredContainers.TypeClass.md).[endWith](core.DeferredContainers.TypeClass.md#endwith)

___

### forEach

▸ **forEach**<`T`\>(`effect`): [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `T`\>

Returns a Containers.Operator that applies the side effect function to each
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

[`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[forEach](core.Containers.TypeClass.md#foreach)

___

### forkConcat

▸ **forkConcat**<`TIn`, `TOut`\>(`fst`, `snd`, `...tail`): [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `TIn`, `TOut`\>

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `TIn`, `TOut`\> |
| `snd` | [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `TIn`, `TOut`\> |
| `...tail` | readonly [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `TIn`, `TOut`\>[] |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `TIn`, `TOut`\>

#### Inherited from

[TypeClass](core.DeferredContainers.TypeClass.md).[forkConcat](core.DeferredContainers.TypeClass.md#forkconcat)

___

### forkZip

▸ **forkZip**<`T`, `TA`, `TB`\>(`a`, `b`): [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `TB`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, readonly [`TA`, `TB`]\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[forkZip](core.Containers.TypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`]\>

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
| `a` | [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `TC`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`]\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[forkZip](core.Containers.TypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `TD`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[forkZip](core.Containers.TypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `TE`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[forkZip](core.Containers.TypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `TE`\> |
| `f` | [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `TF`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[forkZip](core.Containers.TypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `TE`\> |
| `f` | [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `TF`\> |
| `g` | [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `TG`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[forkZip](core.Containers.TypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `TE`\> |
| `f` | [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `TF`\> |
| `g` | [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `TG`\> |
| `h` | [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `TH`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[forkZip](core.Containers.TypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `TE`\> |
| `f` | [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `TF`\> |
| `g` | [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `TG`\> |
| `h` | [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `TH`\> |
| `i` | [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `TI`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[forkZip](core.Containers.TypeClass.md#forkzip)

___

### identity

▸ **identity**<`T`\>(): [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[identity](core.Containers.TypeClass.md#identity)

___

### ignoreElements

▸ **ignoreElements**<`T`\>(): [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `unknown`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `unknown`, `T`\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[ignoreElements](core.Containers.TypeClass.md#ignoreelements)

___

### keep

▸ **keep**<`T`\>(`predicate`): [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `T`\>

Returns a Containers.Operator that only emits items produced by the
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

[`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[keep](core.Containers.TypeClass.md#keep)

___

### keepType

▸ **keepType**<`TA`, `TB`\>(`predicate`): [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `TA`, `TB`\>

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

[`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `TA`, `TB`\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[keepType](core.Containers.TypeClass.md#keeptype)

___

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `TA`, `TB`\>

Returns a Containers.Operator that applies the `selector` function to each
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

[`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `TA`, `TB`\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[map](core.Containers.TypeClass.md#map)

___

### mapTo

▸ **mapTo**<`TA`, `TB`\>(`value`): [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `TA`, `TB`\>

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

[`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `TA`, `TB`\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[mapTo](core.Containers.TypeClass.md#mapto)

___

### pairwise

▸ **pairwise**<`T`\>(): [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, readonly [`T`, `T`]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, readonly [`T`, `T`]\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[pairwise](core.Containers.TypeClass.md#pairwise)

___

### pick

▸ **pick**<`T`, `TKey`\>(`key`): [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `T`[`TKey`]\>

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

[`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `T`[`TKey`]\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[pick](core.Containers.TypeClass.md#pick)

▸ **pick**<`T`, `TKeyA`, `TKeyB`\>(`keyA`, `keyB`): [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

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

[`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[pick](core.Containers.TypeClass.md#pick)

▸ **pick**<`T`, `TKeyA`, `TKeyB`, `TKeyC`\>(`keyA`, `keyB`, `keyC`): [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

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

[`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[pick](core.Containers.TypeClass.md#pick)

___

### repeat

▸ **repeat**<`T`\>(`predicate`): [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `T`\>

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

[`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](core.DeferredContainers.TypeClass.md).[repeat](core.DeferredContainers.TypeClass.md#repeat)

▸ **repeat**<`T`\>(`count`): [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `T`\>

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

[`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](core.DeferredContainers.TypeClass.md).[repeat](core.DeferredContainers.TypeClass.md#repeat)

▸ **repeat**<`T`\>(): [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `T`\>

Returns a Container that mirrors the source, continually repeating it.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](core.DeferredContainers.TypeClass.md).[repeat](core.DeferredContainers.TypeClass.md#repeat)

___

### retry

▸ **retry**<`T`\>(): [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `T`\>

Returns an `ObservableLike` that mirrors the source, re-subscribing
if the source completes with an error.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](core.DeferredContainers.TypeClass.md).[retry](core.DeferredContainers.TypeClass.md#retry)

▸ **retry**<`T`\>(`predicate`): [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `T`\>

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

[`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](core.DeferredContainers.TypeClass.md).[retry](core.DeferredContainers.TypeClass.md#retry)

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `TAcc`\>

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

[`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `TAcc`\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[scan](core.Containers.TypeClass.md#scan)

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `T`\>

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

[`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[skipFirst](core.Containers.TypeClass.md#skipfirst)

___

### startWith

▸ **startWith**<`T`\>(`value`, `...values`): [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `T`\>

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

[`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](core.DeferredContainers.TypeClass.md).[startWith](core.DeferredContainers.TypeClass.md#startwith)

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `T`\>

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

[`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[takeFirst](core.Containers.TypeClass.md#takefirst)

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `T`\>

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

[`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[takeLast](core.Containers.TypeClass.md#takelast)

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `T`\>

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

[`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[takeWhile](core.Containers.TypeClass.md#takewhile)

___

### zipWith

▸ **zipWith**<`TA`, `TB`\>(`b`): [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `TA`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TB`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `TA`, readonly [`TA`, `TB`]\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[zipWith](core.Containers.TypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`\>(`b`, `c`): [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TB`\> |
| `c` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TC`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`]\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[zipWith](core.Containers.TypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`\>(`b`, `c`, `d`): [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `b` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TB`\> |
| `c` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TC`\> |
| `d` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TD`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[zipWith](core.Containers.TypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`b`, `c`, `d`, `e`): [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `b` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TB`\> |
| `c` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TC`\> |
| `d` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TD`\> |
| `e` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TE`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[zipWith](core.Containers.TypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`b`, `c`, `d`, `e`, `f`): [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `b` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TB`\> |
| `c` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TC`\> |
| `d` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TD`\> |
| `e` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TE`\> |
| `f` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TF`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[zipWith](core.Containers.TypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`b`, `c`, `d`, `e`, `f`, `g`): [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `b` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TB`\> |
| `c` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TC`\> |
| `d` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TD`\> |
| `e` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TE`\> |
| `f` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TF`\> |
| `g` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TG`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[zipWith](core.Containers.TypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `b` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TB`\> |
| `c` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TC`\> |
| `d` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TD`\> |
| `e` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TE`\> |
| `f` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TF`\> |
| `g` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TG`\> |
| `h` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TH`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[zipWith](core.Containers.TypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `b` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TB`\> |
| `c` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TC`\> |
| `d` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TD`\> |
| `e` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TE`\> |
| `f` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TF`\> |
| `g` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TG`\> |
| `h` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TH`\> |
| `i` | [`EnumeratorLike`](core.EnumeratorLike.md)<`TI`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`EnumeratorContainer`](core.EnumeratorContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[zipWith](core.Containers.TypeClass.md#zipwith)

___

## Transform Methods

### everySatisfy

▸ **everySatisfy**<`T`\>(`predicate`): [`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](core.EnumeratorLike.md)<`T`\>, `boolean`\>

Determines whether all the members of an Container satisfy the predicate.
The predicate function is invoked for each element in the Container until the
it returns false, or until the end of the Containers.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](core.EnumeratorLike.md)<`T`\>, `boolean`\>

#### Inherited from

[TypeClass](core.RunnableContainers.TypeClass.md).[everySatisfy](core.RunnableContainers.TypeClass.md#everysatisfy)

___

### first

▸ **first**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](core.EnumeratorLike.md)<`T`\>, [`Optional`](../modules/functions.md#optional)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](core.EnumeratorLike.md)<`T`\>, [`Optional`](../modules/functions.md#optional)<`T`\>\>

#### Inherited from

[TypeClass](core.RunnableContainers.TypeClass.md).[first](core.RunnableContainers.TypeClass.md#first)

___

### firstAsync

▸ **firstAsync**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](core.EnumeratorLike.md)<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](core.EnumeratorLike.md)<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[firstAsync](core.Containers.TypeClass.md#firstasync)

___

### flow

▸ **flow**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](core.EnumeratorLike.md)<`T`\>, [`PauseableObservableLike`](core.PauseableObservableLike.md)<`T`\> & [`DisposableLike`](core.DisposableLike.md)\>

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

[`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](core.EnumeratorLike.md)<`T`\>, [`PauseableObservableLike`](core.PauseableObservableLike.md)<`T`\> & [`DisposableLike`](core.DisposableLike.md)\>

#### Inherited from

[TypeClass](core.RunnableContainers.TypeClass.md).[flow](core.RunnableContainers.TypeClass.md#flow)

___

### last

▸ **last**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](core.EnumeratorLike.md)<`T`\>, [`Optional`](../modules/functions.md#optional)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](core.EnumeratorLike.md)<`T`\>, [`Optional`](../modules/functions.md#optional)<`T`\>\>

#### Inherited from

[TypeClass](core.RunnableContainers.TypeClass.md).[last](core.RunnableContainers.TypeClass.md#last)

___

### lastAsync

▸ **lastAsync**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](core.EnumeratorLike.md)<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](core.EnumeratorLike.md)<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[lastAsync](core.Containers.TypeClass.md#lastasync)

___

### noneSatisfy

▸ **noneSatisfy**<`T`\>(`predicate`): [`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](core.EnumeratorLike.md)<`T`\>, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](core.EnumeratorLike.md)<`T`\>, `boolean`\>

#### Inherited from

[TypeClass](core.RunnableContainers.TypeClass.md).[noneSatisfy](core.RunnableContainers.TypeClass.md#nonesatisfy)

___

### reduce

▸ **reduce**<`T`, `TAcc`\>(`reducer`, `initialValue`): [`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](core.EnumeratorLike.md)<`T`\>, `TAcc`\>

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

[`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](core.EnumeratorLike.md)<`T`\>, `TAcc`\>

#### Inherited from

[TypeClass](core.RunnableContainers.TypeClass.md).[reduce](core.RunnableContainers.TypeClass.md#reduce)

___

### someSatisfy

▸ **someSatisfy**<`T`\>(`predicate`): [`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](core.EnumeratorLike.md)<`T`\>, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](core.EnumeratorLike.md)<`T`\>, `boolean`\>

#### Inherited from

[TypeClass](core.RunnableContainers.TypeClass.md).[someSatisfy](core.RunnableContainers.TypeClass.md#somesatisfy)

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](core.EnumeratorLike.md)<`T`\>, readonly `T`[]\>

Converts the Container to a `ReadonlyArrayContainer`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](core.EnumeratorLike.md)<`T`\>, readonly `T`[]\>

#### Inherited from

[TypeClass](core.RunnableContainers.TypeClass.md).[toReadonlyArray](core.RunnableContainers.TypeClass.md#toreadonlyarray)
