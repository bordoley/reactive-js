[Reactive-JS](../README.md) / [containers](../modules/containers.md) / [EnumeratorContainer](../modules/containers.EnumeratorContainer.md) / TypeClass

# Interface: TypeClass

[containers](../modules/containers.md).[EnumeratorContainer](../modules/containers.EnumeratorContainer.md).TypeClass

## Hierarchy

- [`ContainerTypeClass`](containers.ContainerTypeClass.md)<[`Type`](containers.EnumeratorContainer.Type.md)\>

- [`DeferredTypeClass`](containers.DeferredTypeClass.md)<[`Type`](containers.EnumeratorContainer.Type.md)\>

- [`RunnableTypeClass`](containers.RunnableTypeClass.md)<[`Type`](containers.EnumeratorContainer.Type.md)\>

  ↳ **`TypeClass`**

## Table of contents

### Constructor Properties

- [fromRunnable](containers.EnumeratorContainer.TypeClass.md#fromrunnable)

### Operator Properties

- [buffer](containers.EnumeratorContainer.TypeClass.md#buffer)
- [concatAll](containers.EnumeratorContainer.TypeClass.md#concatall)
- [concatMap](containers.EnumeratorContainer.TypeClass.md#concatmap)
- [concatWith](containers.EnumeratorContainer.TypeClass.md#concatwith)
- [flatMapIterable](containers.EnumeratorContainer.TypeClass.md#flatmapiterable)
- [scanLast](containers.EnumeratorContainer.TypeClass.md#scanlast)

### Transform Properties

- [contains](containers.EnumeratorContainer.TypeClass.md#contains)
- [toObservable](containers.EnumeratorContainer.TypeClass.md#toobservable)
- [toRunnable](containers.EnumeratorContainer.TypeClass.md#torunnable)

### Constructor Methods

- [concat](containers.EnumeratorContainer.TypeClass.md#concat)
- [empty](containers.EnumeratorContainer.TypeClass.md#empty)
- [fromEnumerable](containers.EnumeratorContainer.TypeClass.md#fromenumerable)
- [fromEnumeratorFactory](containers.EnumeratorContainer.TypeClass.md#fromenumeratorfactory)
- [fromFactory](containers.EnumeratorContainer.TypeClass.md#fromfactory)
- [fromIterable](containers.EnumeratorContainer.TypeClass.md#fromiterable)
- [fromOptional](containers.EnumeratorContainer.TypeClass.md#fromoptional)
- [fromReadonlyArray](containers.EnumeratorContainer.TypeClass.md#fromreadonlyarray)
- [generate](containers.EnumeratorContainer.TypeClass.md#generate)
- [zip](containers.EnumeratorContainer.TypeClass.md#zip)

### Operator Methods

- [distinctUntilChanged](containers.EnumeratorContainer.TypeClass.md#distinctuntilchanged)
- [endWith](containers.EnumeratorContainer.TypeClass.md#endwith)
- [forEach](containers.EnumeratorContainer.TypeClass.md#foreach)
- [forkConcat](containers.EnumeratorContainer.TypeClass.md#forkconcat)
- [forkZip](containers.EnumeratorContainer.TypeClass.md#forkzip)
- [identity](containers.EnumeratorContainer.TypeClass.md#identity)
- [ignoreElements](containers.EnumeratorContainer.TypeClass.md#ignoreelements)
- [keep](containers.EnumeratorContainer.TypeClass.md#keep)
- [keepType](containers.EnumeratorContainer.TypeClass.md#keeptype)
- [map](containers.EnumeratorContainer.TypeClass.md#map)
- [mapTo](containers.EnumeratorContainer.TypeClass.md#mapto)
- [pairwise](containers.EnumeratorContainer.TypeClass.md#pairwise)
- [pick](containers.EnumeratorContainer.TypeClass.md#pick)
- [repeat](containers.EnumeratorContainer.TypeClass.md#repeat)
- [retry](containers.EnumeratorContainer.TypeClass.md#retry)
- [scan](containers.EnumeratorContainer.TypeClass.md#scan)
- [skipFirst](containers.EnumeratorContainer.TypeClass.md#skipfirst)
- [startWith](containers.EnumeratorContainer.TypeClass.md#startwith)
- [takeFirst](containers.EnumeratorContainer.TypeClass.md#takefirst)
- [takeLast](containers.EnumeratorContainer.TypeClass.md#takelast)
- [takeWhile](containers.EnumeratorContainer.TypeClass.md#takewhile)
- [zipWith](containers.EnumeratorContainer.TypeClass.md#zipwith)

### Transform Methods

- [everySatisfy](containers.EnumeratorContainer.TypeClass.md#everysatisfy)
- [first](containers.EnumeratorContainer.TypeClass.md#first)
- [firstAsync](containers.EnumeratorContainer.TypeClass.md#firstasync)
- [flow](containers.EnumeratorContainer.TypeClass.md#flow)
- [last](containers.EnumeratorContainer.TypeClass.md#last)
- [lastAsync](containers.EnumeratorContainer.TypeClass.md#lastasync)
- [noneSatisfy](containers.EnumeratorContainer.TypeClass.md#nonesatisfy)
- [reduce](containers.EnumeratorContainer.TypeClass.md#reduce)
- [someSatisfy](containers.EnumeratorContainer.TypeClass.md#somesatisfy)
- [toReadonlyArray](containers.EnumeratorContainer.TypeClass.md#toreadonlyarray)

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

[DeferredTypeClass](containers.DeferredTypeClass.md).[fromRunnable](containers.DeferredTypeClass.md#fromrunnable)

___

## Operator Properties

### buffer

• **buffer**: <T\>(`options?`: { `count?`: `number`  }) => [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, readonly `T`[]\>

#### Type declaration

▸ <`T`\>(`options?`): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, readonly `T`[]\>

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

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, readonly `T`[]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[buffer](containers.ContainerTypeClass.md#buffer)

___

### concatAll

• **concatAll**: <T\>() => [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>, `T`\>

#### Type declaration

▸ <`T`\>(): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>, `T`\>

Converts a higher-order Container into a first-order
Container by concatenating the inner sources in order.

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>, `T`\>

#### Inherited from

[DeferredTypeClass](containers.DeferredTypeClass.md).[concatAll](containers.DeferredTypeClass.md#concatall)

___

### concatMap

• **concatMap**: <TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, [`EnumeratorLike`](types.EnumeratorLike.md)<`TB`\>\>) => [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `TA`, `TB`\>

#### Type declaration

▸ <`TA`, `TB`\>(`selector`): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `TA`, `TB`\>

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

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `TA`, `TB`\>

#### Inherited from

[DeferredTypeClass](containers.DeferredTypeClass.md).[concatMap](containers.DeferredTypeClass.md#concatmap)

___

### concatWith

• **concatWith**: <T\>(`snd`: [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>, ...`tail`: readonly [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>[]) => [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `T`\>

#### Type declaration

▸ <`T`\>(`snd`, `...tail`): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `T`\>

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

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `T`\>

#### Inherited from

[DeferredTypeClass](containers.DeferredTypeClass.md).[concatWith](containers.DeferredTypeClass.md#concatwith)

___

### flatMapIterable

• **flatMapIterable**: <TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, `Iterable`<`TB`\>\>) => [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `TA`, `TB`\>

#### Type declaration

▸ <`TA`, `TB`\>(`selector`): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `TA`, `TB`\>

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

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `TA`, `TB`\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[flatMapIterable](containers.ContainerTypeClass.md#flatmapiterable)

___

### scanLast

• **scanLast**: <T, TAcc\>(`scanner`: [`Function2`](../modules/functions.md#function2)<`TAcc`, `T`, [`EnumeratorLike`](types.EnumeratorLike.md)<`TAcc`\>\>, `initialValue`: [`Factory`](../modules/functions.md#factory)<`TAcc`\>) => [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `TAcc`\>

#### Type declaration

▸ <`T`, `TAcc`\>(`scanner`, `initialValue`): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `TAcc`\>

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

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `TAcc`\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[scanLast](containers.ContainerTypeClass.md#scanlast)

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

[RunnableTypeClass](containers.RunnableTypeClass.md).[contains](containers.RunnableTypeClass.md#contains)

___

### toObservable

• **toObservable**: <T\>() => [`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>, [`ObservableLike`](types.ObservableLike.md)<`T`\>\>

#### Type declaration

▸ <`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>, [`ObservableLike`](types.ObservableLike.md)<`T`\>\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>, [`ObservableLike`](types.ObservableLike.md)<`T`\>\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[toObservable](containers.ContainerTypeClass.md#toobservable)

___

### toRunnable

• **toRunnable**: <T\>() => [`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

#### Type declaration

▸ <`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

#### Inherited from

[RunnableTypeClass](containers.RunnableTypeClass.md).[toRunnable](containers.RunnableTypeClass.md#torunnable)

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

[DeferredTypeClass](containers.DeferredTypeClass.md).[concat](containers.DeferredTypeClass.md#concat)

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

[DeferredTypeClass](containers.DeferredTypeClass.md).[empty](containers.DeferredTypeClass.md#empty)

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

[DeferredTypeClass](containers.DeferredTypeClass.md).[fromEnumerable](containers.DeferredTypeClass.md#fromenumerable)

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

[DeferredTypeClass](containers.DeferredTypeClass.md).[fromEnumeratorFactory](containers.DeferredTypeClass.md#fromenumeratorfactory)

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

[DeferredTypeClass](containers.DeferredTypeClass.md).[fromFactory](containers.DeferredTypeClass.md#fromfactory)

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

[DeferredTypeClass](containers.DeferredTypeClass.md).[fromIterable](containers.DeferredTypeClass.md#fromiterable)

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

[DeferredTypeClass](containers.DeferredTypeClass.md).[fromOptional](containers.DeferredTypeClass.md#fromoptional)

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

[DeferredTypeClass](containers.DeferredTypeClass.md).[fromReadonlyArray](containers.DeferredTypeClass.md#fromreadonlyarray)

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

[DeferredTypeClass](containers.DeferredTypeClass.md).[generate](containers.DeferredTypeClass.md#generate)

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

[ContainerTypeClass](containers.ContainerTypeClass.md).[zip](containers.ContainerTypeClass.md#zip)

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

[ContainerTypeClass](containers.ContainerTypeClass.md).[zip](containers.ContainerTypeClass.md#zip)

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

[ContainerTypeClass](containers.ContainerTypeClass.md).[zip](containers.ContainerTypeClass.md#zip)

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

[ContainerTypeClass](containers.ContainerTypeClass.md).[zip](containers.ContainerTypeClass.md#zip)

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

[ContainerTypeClass](containers.ContainerTypeClass.md).[zip](containers.ContainerTypeClass.md#zip)

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

[ContainerTypeClass](containers.ContainerTypeClass.md).[zip](containers.ContainerTypeClass.md#zip)

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

[ContainerTypeClass](containers.ContainerTypeClass.md).[zip](containers.ContainerTypeClass.md#zip)

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

[ContainerTypeClass](containers.ContainerTypeClass.md).[zip](containers.ContainerTypeClass.md#zip)

___

## Operator Methods

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `T`\>

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

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `T`\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[distinctUntilChanged](containers.ContainerTypeClass.md#distinctuntilchanged)

___

### endWith

▸ **endWith**<`T`\>(`value`, `...values`): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `T`\>

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

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `T`\>

#### Inherited from

[DeferredTypeClass](containers.DeferredTypeClass.md).[endWith](containers.DeferredTypeClass.md#endwith)

___

### forEach

▸ **forEach**<`T`\>(`effect`): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `T`\>

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

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `T`\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[forEach](containers.ContainerTypeClass.md#foreach)

___

### forkConcat

▸ **forkConcat**<`TIn`, `TOut`\>(`fst`, `snd`, `...tail`): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `TIn`, `TOut`\>

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `TIn`, `TOut`\> |
| `snd` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `TIn`, `TOut`\> |
| `...tail` | readonly [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `TIn`, `TOut`\>[] |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `TIn`, `TOut`\>

#### Inherited from

[DeferredTypeClass](containers.DeferredTypeClass.md).[forkConcat](containers.DeferredTypeClass.md#forkconcat)

___

### forkZip

▸ **forkZip**<`T`, `TA`, `TB`\>(`a`, `b`): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `TB`\> |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, readonly [`TA`, `TB`]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[forkZip](containers.ContainerTypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`]\>

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
| `a` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `TC`\> |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[forkZip](containers.ContainerTypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `TD`\> |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[forkZip](containers.ContainerTypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `TE`\> |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[forkZip](containers.ContainerTypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `TE`\> |
| `f` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `TF`\> |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[forkZip](containers.ContainerTypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `TE`\> |
| `f` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `TF`\> |
| `g` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `TG`\> |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[forkZip](containers.ContainerTypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `TE`\> |
| `f` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `TF`\> |
| `g` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `TG`\> |
| `h` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `TH`\> |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[forkZip](containers.ContainerTypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `TE`\> |
| `f` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `TF`\> |
| `g` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `TG`\> |
| `h` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `TH`\> |
| `i` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `TI`\> |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[forkZip](containers.ContainerTypeClass.md#forkzip)

___

### identity

▸ **identity**<`T`\>(): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `T`\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[identity](containers.ContainerTypeClass.md#identity)

___

### ignoreElements

▸ **ignoreElements**<`T`\>(): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `unknown`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `unknown`, `T`\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[ignoreElements](containers.ContainerTypeClass.md#ignoreelements)

___

### keep

▸ **keep**<`T`\>(`predicate`): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `T`\>

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

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `T`\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[keep](containers.ContainerTypeClass.md#keep)

___

### keepType

▸ **keepType**<`TA`, `TB`\>(`predicate`): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `TA`, `TB`\>

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

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `TA`, `TB`\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[keepType](containers.ContainerTypeClass.md#keeptype)

___

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `TA`, `TB`\>

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

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `TA`, `TB`\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[map](containers.ContainerTypeClass.md#map)

___

### mapTo

▸ **mapTo**<`TA`, `TB`\>(`value`): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `TA`, `TB`\>

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

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `TA`, `TB`\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[mapTo](containers.ContainerTypeClass.md#mapto)

___

### pairwise

▸ **pairwise**<`T`\>(): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, readonly [`T`, `T`]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, readonly [`T`, `T`]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[pairwise](containers.ContainerTypeClass.md#pairwise)

___

### pick

▸ **pick**<`T`, `TKey`\>(`key`): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `T`[`TKey`]\>

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

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `T`[`TKey`]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[pick](containers.ContainerTypeClass.md#pick)

▸ **pick**<`T`, `TKeyA`, `TKeyB`\>(`keyA`, `keyB`): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

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

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[pick](containers.ContainerTypeClass.md#pick)

▸ **pick**<`T`, `TKeyA`, `TKeyB`, `TKeyC`\>(`keyA`, `keyB`, `keyC`): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

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

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[pick](containers.ContainerTypeClass.md#pick)

___

### repeat

▸ **repeat**<`T`\>(`predicate`): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `T`\>

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

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `T`\>

#### Inherited from

[DeferredTypeClass](containers.DeferredTypeClass.md).[repeat](containers.DeferredTypeClass.md#repeat)

▸ **repeat**<`T`\>(`count`): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `T`\>

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

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `T`\>

#### Inherited from

[DeferredTypeClass](containers.DeferredTypeClass.md).[repeat](containers.DeferredTypeClass.md#repeat)

▸ **repeat**<`T`\>(): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `T`\>

Returns a Container that mirrors the source, continually repeating it.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `T`\>

#### Inherited from

[DeferredTypeClass](containers.DeferredTypeClass.md).[repeat](containers.DeferredTypeClass.md#repeat)

___

### retry

▸ **retry**<`T`\>(): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `T`\>

Returns an `ObservableLike` that mirrors the source, re-subscribing
if the source completes with an error.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `T`\>

#### Inherited from

[DeferredTypeClass](containers.DeferredTypeClass.md).[retry](containers.DeferredTypeClass.md#retry)

▸ **retry**<`T`\>(`predicate`): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `T`\>

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

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `T`\>

#### Inherited from

[DeferredTypeClass](containers.DeferredTypeClass.md).[retry](containers.DeferredTypeClass.md#retry)

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `TAcc`\>

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

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `TAcc`\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[scan](containers.ContainerTypeClass.md#scan)

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `T`\>

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

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `T`\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[skipFirst](containers.ContainerTypeClass.md#skipfirst)

___

### startWith

▸ **startWith**<`T`\>(`value`, `...values`): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `T`\>

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

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `T`\>

#### Inherited from

[DeferredTypeClass](containers.DeferredTypeClass.md).[startWith](containers.DeferredTypeClass.md#startwith)

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `T`\>

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

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `T`\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[takeFirst](containers.ContainerTypeClass.md#takefirst)

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `T`\>

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

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `T`\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[takeLast](containers.ContainerTypeClass.md#takelast)

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `T`\>

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

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `T`, `T`\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[takeWhile](containers.ContainerTypeClass.md#takewhile)

___

### zipWith

▸ **zipWith**<`TA`, `TB`\>(`b`): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `TA`, readonly [`TA`, `TB`]\>

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

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `TA`, readonly [`TA`, `TB`]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[zipWith](containers.ContainerTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`\>(`b`, `c`): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`]\>

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

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[zipWith](containers.ContainerTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`\>(`b`, `c`, `d`): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[zipWith](containers.ContainerTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`b`, `c`, `d`, `e`): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[zipWith](containers.ContainerTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`b`, `c`, `d`, `e`, `f`): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[zipWith](containers.ContainerTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`b`, `c`, `d`, `e`, `f`, `g`): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[zipWith](containers.ContainerTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[zipWith](containers.ContainerTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.EnumeratorContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[zipWith](containers.ContainerTypeClass.md#zipwith)

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

[RunnableTypeClass](containers.RunnableTypeClass.md).[everySatisfy](containers.RunnableTypeClass.md#everysatisfy)

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

[RunnableTypeClass](containers.RunnableTypeClass.md).[first](containers.RunnableTypeClass.md#first)

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

[ContainerTypeClass](containers.ContainerTypeClass.md).[firstAsync](containers.ContainerTypeClass.md#firstasync)

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

[RunnableTypeClass](containers.RunnableTypeClass.md).[flow](containers.RunnableTypeClass.md#flow)

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

[RunnableTypeClass](containers.RunnableTypeClass.md).[last](containers.RunnableTypeClass.md#last)

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

[ContainerTypeClass](containers.ContainerTypeClass.md).[lastAsync](containers.ContainerTypeClass.md#lastasync)

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

[RunnableTypeClass](containers.RunnableTypeClass.md).[noneSatisfy](containers.RunnableTypeClass.md#nonesatisfy)

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

[RunnableTypeClass](containers.RunnableTypeClass.md).[reduce](containers.RunnableTypeClass.md#reduce)

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

[RunnableTypeClass](containers.RunnableTypeClass.md).[someSatisfy](containers.RunnableTypeClass.md#somesatisfy)

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

[RunnableTypeClass](containers.RunnableTypeClass.md).[toReadonlyArray](containers.RunnableTypeClass.md#toreadonlyarray)
