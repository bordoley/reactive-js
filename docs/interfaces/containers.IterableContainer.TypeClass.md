[Reactive-JS](../README.md) / [containers](../modules/containers.md) / [IterableContainer](../modules/containers.IterableContainer.md) / TypeClass

# Interface: TypeClass

[containers](../modules/containers.md).[IterableContainer](../modules/containers.IterableContainer.md).TypeClass

## Hierarchy

- [`TypeClass`](containers.Containers.TypeClass.md)<[`IterableContainer`](containers.IterableContainer-1.md)\>

- [`TypeClass`](containers.DeferredContainers.TypeClass.md)<[`IterableContainer`](containers.IterableContainer-1.md)\>

- [`TypeClass`](containers.RunnableContainers.TypeClass.md)<[`IterableContainer`](containers.IterableContainer-1.md)\>

- [`TypeClass`](containers.EnumerableContainers.TypeClass.md)<[`IterableContainer`](containers.IterableContainer-1.md)\>

  ↳ **`TypeClass`**

## Table of contents

### Constructor Properties

- [fromRunnable](containers.IterableContainer.TypeClass.md#fromrunnable)

### Operator Properties

- [buffer](containers.IterableContainer.TypeClass.md#buffer)
- [concatAll](containers.IterableContainer.TypeClass.md#concatall)
- [concatMap](containers.IterableContainer.TypeClass.md#concatmap)
- [concatWith](containers.IterableContainer.TypeClass.md#concatwith)
- [flatMapIterable](containers.IterableContainer.TypeClass.md#flatmapiterable)
- [scanLast](containers.IterableContainer.TypeClass.md#scanlast)

### Transform Properties

- [contains](containers.IterableContainer.TypeClass.md#contains)
- [toObservable](containers.IterableContainer.TypeClass.md#toobservable)
- [toRunnable](containers.IterableContainer.TypeClass.md#torunnable)

### Constructor Methods

- [concat](containers.IterableContainer.TypeClass.md#concat)
- [empty](containers.IterableContainer.TypeClass.md#empty)
- [fromEnumerable](containers.IterableContainer.TypeClass.md#fromenumerable)
- [fromEnumeratorFactory](containers.IterableContainer.TypeClass.md#fromenumeratorfactory)
- [fromFactory](containers.IterableContainer.TypeClass.md#fromfactory)
- [fromIterable](containers.IterableContainer.TypeClass.md#fromiterable)
- [fromOptional](containers.IterableContainer.TypeClass.md#fromoptional)
- [fromReadonlyArray](containers.IterableContainer.TypeClass.md#fromreadonlyarray)
- [generate](containers.IterableContainer.TypeClass.md#generate)
- [zip](containers.IterableContainer.TypeClass.md#zip)

### Operator Methods

- [distinctUntilChanged](containers.IterableContainer.TypeClass.md#distinctuntilchanged)
- [endWith](containers.IterableContainer.TypeClass.md#endwith)
- [forEach](containers.IterableContainer.TypeClass.md#foreach)
- [forkConcat](containers.IterableContainer.TypeClass.md#forkconcat)
- [forkZip](containers.IterableContainer.TypeClass.md#forkzip)
- [identity](containers.IterableContainer.TypeClass.md#identity)
- [ignoreElements](containers.IterableContainer.TypeClass.md#ignoreelements)
- [keep](containers.IterableContainer.TypeClass.md#keep)
- [keepType](containers.IterableContainer.TypeClass.md#keeptype)
- [map](containers.IterableContainer.TypeClass.md#map)
- [mapTo](containers.IterableContainer.TypeClass.md#mapto)
- [pairwise](containers.IterableContainer.TypeClass.md#pairwise)
- [pick](containers.IterableContainer.TypeClass.md#pick)
- [repeat](containers.IterableContainer.TypeClass.md#repeat)
- [retry](containers.IterableContainer.TypeClass.md#retry)
- [scan](containers.IterableContainer.TypeClass.md#scan)
- [skipFirst](containers.IterableContainer.TypeClass.md#skipfirst)
- [startWith](containers.IterableContainer.TypeClass.md#startwith)
- [takeFirst](containers.IterableContainer.TypeClass.md#takefirst)
- [takeLast](containers.IterableContainer.TypeClass.md#takelast)
- [takeWhile](containers.IterableContainer.TypeClass.md#takewhile)
- [zipWith](containers.IterableContainer.TypeClass.md#zipwith)

### Transform Methods

- [enumerate](containers.IterableContainer.TypeClass.md#enumerate)
- [everySatisfy](containers.IterableContainer.TypeClass.md#everysatisfy)
- [first](containers.IterableContainer.TypeClass.md#first)
- [firstAsync](containers.IterableContainer.TypeClass.md#firstasync)
- [flow](containers.IterableContainer.TypeClass.md#flow)
- [last](containers.IterableContainer.TypeClass.md#last)
- [lastAsync](containers.IterableContainer.TypeClass.md#lastasync)
- [noneSatisfy](containers.IterableContainer.TypeClass.md#nonesatisfy)
- [reduce](containers.IterableContainer.TypeClass.md#reduce)
- [someSatisfy](containers.IterableContainer.TypeClass.md#somesatisfy)
- [toEnumerable](containers.IterableContainer.TypeClass.md#toenumerable)
- [toIterable](containers.IterableContainer.TypeClass.md#toiterable)
- [toReadonlyArray](containers.IterableContainer.TypeClass.md#toreadonlyarray)

## Constructor Properties

### fromRunnable

• **fromRunnable**: <T\>() => [`Function1`](../modules/functions.md#function1)<[`RunnableLike`](types.RunnableLike.md)<`T`\>, `Iterable`<`T`\>\>

#### Type declaration

▸ <`T`\>(): [`Function1`](../modules/functions.md#function1)<[`RunnableLike`](types.RunnableLike.md)<`T`\>, `Iterable`<`T`\>\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`Function1`](../modules/functions.md#function1)<[`RunnableLike`](types.RunnableLike.md)<`T`\>, `Iterable`<`T`\>\>

#### Inherited from

[TypeClass](containers.DeferredContainers.TypeClass.md).[fromRunnable](containers.DeferredContainers.TypeClass.md#fromrunnable)

___

## Operator Properties

### buffer

• **buffer**: <T\>(`options?`: { `count?`: `number`  }) => [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, readonly `T`[]\>

#### Type declaration

▸ <`T`\>(`options?`): [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, readonly `T`[]\>

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

[`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, readonly `T`[]\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[buffer](containers.Containers.TypeClass.md#buffer)

___

### concatAll

• **concatAll**: <T\>() => [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `Iterable`<`T`\>, `T`\>

#### Type declaration

▸ <`T`\>(): [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `Iterable`<`T`\>, `T`\>

Converts a higher-order Container into a first-order
Container by concatenating the inner sources in order.

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `Iterable`<`T`\>, `T`\>

#### Inherited from

[TypeClass](containers.DeferredContainers.TypeClass.md).[concatAll](containers.DeferredContainers.TypeClass.md#concatall)

___

### concatMap

• **concatMap**: <TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, `Iterable`<`TB`\>\>) => [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `TA`, `TB`\>

#### Type declaration

▸ <`TA`, `TB`\>(`selector`): [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `TA`, `TB`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `TA`, `TB`\>

#### Inherited from

[TypeClass](containers.DeferredContainers.TypeClass.md).[concatMap](containers.DeferredContainers.TypeClass.md#concatmap)

___

### concatWith

• **concatWith**: <T\>(`snd`: `Iterable`<`T`\>, ...`tail`: readonly `Iterable`<`T`\>[]) => [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `T`\>

#### Type declaration

▸ <`T`\>(`snd`, `...tail`): [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | `Iterable`<`T`\> |
| `...tail` | readonly `Iterable`<`T`\>[] |

##### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](containers.DeferredContainers.TypeClass.md).[concatWith](containers.DeferredContainers.TypeClass.md#concatwith)

___

### flatMapIterable

• **flatMapIterable**: <TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, `Iterable`<`TB`\>\>) => [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `TA`, `TB`\>

#### Type declaration

▸ <`TA`, `TB`\>(`selector`): [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `TA`, `TB`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `TA`, `TB`\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[flatMapIterable](containers.Containers.TypeClass.md#flatmapiterable)

___

### scanLast

• **scanLast**: <T, TAcc\>(`scanner`: [`Function2`](../modules/functions.md#function2)<`TAcc`, `T`, `Iterable`<`TAcc`\>\>, `initialValue`: [`Factory`](../modules/functions.md#factory)<`TAcc`\>) => [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `TAcc`\>

#### Type declaration

▸ <`T`, `TAcc`\>(`scanner`, `initialValue`): [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `TAcc`\>

##### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Function2`](../modules/functions.md#function2)<`TAcc`, `T`, `Iterable`<`TAcc`\>\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

##### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `TAcc`\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[scanLast](containers.Containers.TypeClass.md#scanlast)

___

## Transform Properties

### contains

• **contains**: <T\>(`value`: `T`, `options?`: { `equality?`: [`Equality`](../modules/functions.md#equality)<`T`\>  }) => [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, `boolean`\>

#### Type declaration

▸ <`T`\>(`value`, `options?`): [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, `boolean`\>

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

[`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, `boolean`\>

#### Inherited from

[TypeClass](containers.RunnableContainers.TypeClass.md).[contains](containers.RunnableContainers.TypeClass.md#contains)

___

### toObservable

• **toObservable**: <T\>() => [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`ObservableLike`](types.ObservableLike.md)<`T`\>\>

#### Type declaration

▸ <`T`\>(): [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`ObservableLike`](types.ObservableLike.md)<`T`\>\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`ObservableLike`](types.ObservableLike.md)<`T`\>\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[toObservable](containers.Containers.TypeClass.md#toobservable)

___

### toRunnable

• **toRunnable**: <T\>() => [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

#### Type declaration

▸ <`T`\>(): [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

#### Inherited from

[TypeClass](containers.RunnableContainers.TypeClass.md).[toRunnable](containers.RunnableContainers.TypeClass.md#torunnable)

## Constructor Methods

### concat

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): `Iterable`<`T`\>

Returns a Container which emits all values from each source sequentially.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | `Iterable`<`T`\> |
| `snd` | `Iterable`<`T`\> |
| `...tail` | readonly `Iterable`<`T`\>[] |

#### Returns

`Iterable`<`T`\>

#### Inherited from

[TypeClass](containers.DeferredContainers.TypeClass.md).[concat](containers.DeferredContainers.TypeClass.md#concat)

___

### empty

▸ **empty**<`T`\>(): `Iterable`<`T`\>

Return an Container that emits no items.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

`Iterable`<`T`\>

#### Inherited from

[TypeClass](containers.DeferredContainers.TypeClass.md).[empty](containers.DeferredContainers.TypeClass.md#empty)

___

### fromEnumerable

▸ **fromEnumerable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, `Iterable`<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, `Iterable`<`T`\>\>

#### Inherited from

[TypeClass](containers.DeferredContainers.TypeClass.md).[fromEnumerable](containers.DeferredContainers.TypeClass.md#fromenumerable)

___

### fromEnumeratorFactory

▸ **fromEnumeratorFactory**<`T`\>(`factory`): `Iterable`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](../modules/functions.md#factory)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\> |

#### Returns

`Iterable`<`T`\>

#### Inherited from

[TypeClass](containers.DeferredContainers.TypeClass.md).[fromEnumeratorFactory](containers.DeferredContainers.TypeClass.md#fromenumeratorfactory)

___

### fromFactory

▸ **fromFactory**<`T`\>(`factory`): `Iterable`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](../modules/functions.md#factory)<`T`\> |

#### Returns

`Iterable`<`T`\>

#### Inherited from

[TypeClass](containers.DeferredContainers.TypeClass.md).[fromFactory](containers.DeferredContainers.TypeClass.md#fromfactory)

___

### fromIterable

▸ **fromIterable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, `Iterable`<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, `Iterable`<`T`\>\>

#### Inherited from

[TypeClass](containers.DeferredContainers.TypeClass.md).[fromIterable](containers.DeferredContainers.TypeClass.md#fromiterable)

___

### fromOptional

▸ **fromOptional**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, `Iterable`<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, `Iterable`<`T`\>\>

#### Inherited from

[TypeClass](containers.DeferredContainers.TypeClass.md).[fromOptional](containers.DeferredContainers.TypeClass.md#fromoptional)

___

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], `Iterable`<`T`\>\>

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

[`Function1`](../modules/functions.md#function1)<readonly `T`[], `Iterable`<`T`\>\>

#### Inherited from

[TypeClass](containers.DeferredContainers.TypeClass.md).[fromReadonlyArray](containers.DeferredContainers.TypeClass.md#fromreadonlyarray)

___

### generate

▸ **generate**<`T`\>(`generator`, `initialValue`): `Iterable`<`T`\>

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

`Iterable`<`T`\>

#### Inherited from

[TypeClass](containers.DeferredContainers.TypeClass.md).[generate](containers.DeferredContainers.TypeClass.md#generate)

___

### zip

▸ **zip**<`TA`, `TB`\>(`a`, `b`): `Iterable`<readonly [`TA`, `TB`]\>

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
| `a` | `Iterable`<`TA`\> |
| `b` | `Iterable`<`TB`\> |

#### Returns

`Iterable`<readonly [`TA`, `TB`]\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[zip](containers.Containers.TypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): `Iterable`<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `Iterable`<`TA`\> |
| `b` | `Iterable`<`TB`\> |
| `c` | `Iterable`<`TC`\> |

#### Returns

`Iterable`<readonly [`TA`, `TB`, `TC`]\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[zip](containers.Containers.TypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): `Iterable`<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | `Iterable`<`TA`\> |
| `b` | `Iterable`<`TB`\> |
| `c` | `Iterable`<`TC`\> |
| `d` | `Iterable`<`TD`\> |

#### Returns

`Iterable`<readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[zip](containers.Containers.TypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): `Iterable`<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | `Iterable`<`TA`\> |
| `b` | `Iterable`<`TB`\> |
| `c` | `Iterable`<`TC`\> |
| `d` | `Iterable`<`TD`\> |
| `e` | `Iterable`<`TE`\> |

#### Returns

`Iterable`<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[zip](containers.Containers.TypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): `Iterable`<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | `Iterable`<`TA`\> |
| `b` | `Iterable`<`TB`\> |
| `c` | `Iterable`<`TC`\> |
| `d` | `Iterable`<`TD`\> |
| `e` | `Iterable`<`TE`\> |
| `f` | `Iterable`<`TF`\> |

#### Returns

`Iterable`<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[zip](containers.Containers.TypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): `Iterable`<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | `Iterable`<`TA`\> |
| `b` | `Iterable`<`TB`\> |
| `c` | `Iterable`<`TC`\> |
| `d` | `Iterable`<`TD`\> |
| `e` | `Iterable`<`TE`\> |
| `f` | `Iterable`<`TF`\> |
| `g` | `Iterable`<`TG`\> |

#### Returns

`Iterable`<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[zip](containers.Containers.TypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): `Iterable`<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | `Iterable`<`TA`\> |
| `b` | `Iterable`<`TB`\> |
| `c` | `Iterable`<`TC`\> |
| `d` | `Iterable`<`TD`\> |
| `e` | `Iterable`<`TE`\> |
| `f` | `Iterable`<`TF`\> |
| `g` | `Iterable`<`TG`\> |
| `h` | `Iterable`<`TH`\> |

#### Returns

`Iterable`<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[zip](containers.Containers.TypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): `Iterable`<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | `Iterable`<`TA`\> |
| `b` | `Iterable`<`TB`\> |
| `c` | `Iterable`<`TC`\> |
| `d` | `Iterable`<`TD`\> |
| `e` | `Iterable`<`TE`\> |
| `f` | `Iterable`<`TF`\> |
| `g` | `Iterable`<`TG`\> |
| `h` | `Iterable`<`TH`\> |
| `i` | `Iterable`<`TI`\> |

#### Returns

`Iterable`<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[zip](containers.Containers.TypeClass.md#zip)

___

## Operator Methods

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `T`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[distinctUntilChanged](containers.Containers.TypeClass.md#distinctuntilchanged)

___

### endWith

▸ **endWith**<`T`\>(`value`, `...values`): [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `T`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](containers.DeferredContainers.TypeClass.md).[endWith](containers.DeferredContainers.TypeClass.md#endwith)

___

### forEach

▸ **forEach**<`T`\>(`effect`): [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `T`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[forEach](containers.Containers.TypeClass.md#foreach)

___

### forkConcat

▸ **forkConcat**<`TIn`, `TOut`\>(`fst`, `snd`, `...tail`): [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `TIn`, `TOut`\>

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `TIn`, `TOut`\> |
| `snd` | [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `TIn`, `TOut`\> |
| `...tail` | readonly [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `TIn`, `TOut`\>[] |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `TIn`, `TOut`\>

#### Inherited from

[TypeClass](containers.DeferredContainers.TypeClass.md).[forkConcat](containers.DeferredContainers.TypeClass.md#forkconcat)

___

### forkZip

▸ **forkZip**<`T`, `TA`, `TB`\>(`a`, `b`): [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `TB`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, readonly [`TA`, `TB`]\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[forkZip](containers.Containers.TypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `TC`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`]\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[forkZip](containers.Containers.TypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `TD`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[forkZip](containers.Containers.TypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `TE`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[forkZip](containers.Containers.TypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `TE`\> |
| `f` | [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `TF`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[forkZip](containers.Containers.TypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `TE`\> |
| `f` | [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `TF`\> |
| `g` | [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `TG`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[forkZip](containers.Containers.TypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `TE`\> |
| `f` | [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `TF`\> |
| `g` | [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `TG`\> |
| `h` | [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `TH`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[forkZip](containers.Containers.TypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `TE`\> |
| `f` | [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `TF`\> |
| `g` | [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `TG`\> |
| `h` | [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `TH`\> |
| `i` | [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `TI`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[forkZip](containers.Containers.TypeClass.md#forkzip)

___

### identity

▸ **identity**<`T`\>(): [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[identity](containers.Containers.TypeClass.md#identity)

___

### ignoreElements

▸ **ignoreElements**<`T`\>(): [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `unknown`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `unknown`, `T`\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[ignoreElements](containers.Containers.TypeClass.md#ignoreelements)

___

### keep

▸ **keep**<`T`\>(`predicate`): [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `T`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[keep](containers.Containers.TypeClass.md#keep)

___

### keepType

▸ **keepType**<`TA`, `TB`\>(`predicate`): [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `TA`, `TB`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `TA`, `TB`\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[keepType](containers.Containers.TypeClass.md#keeptype)

___

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `TA`, `TB`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `TA`, `TB`\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[map](containers.Containers.TypeClass.md#map)

___

### mapTo

▸ **mapTo**<`TA`, `TB`\>(`value`): [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `TA`, `TB`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `TA`, `TB`\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[mapTo](containers.Containers.TypeClass.md#mapto)

___

### pairwise

▸ **pairwise**<`T`\>(): [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, readonly [`T`, `T`]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, readonly [`T`, `T`]\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[pairwise](containers.Containers.TypeClass.md#pairwise)

___

### pick

▸ **pick**<`T`, `TKey`\>(`key`): [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `T`[`TKey`]\>

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

[`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `T`[`TKey`]\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[pick](containers.Containers.TypeClass.md#pick)

▸ **pick**<`T`, `TKeyA`, `TKeyB`\>(`keyA`, `keyB`): [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

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

[`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[pick](containers.Containers.TypeClass.md#pick)

▸ **pick**<`T`, `TKeyA`, `TKeyB`, `TKeyC`\>(`keyA`, `keyB`, `keyC`): [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

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

[`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[pick](containers.Containers.TypeClass.md#pick)

___

### repeat

▸ **repeat**<`T`\>(`predicate`): [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `T`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](containers.DeferredContainers.TypeClass.md).[repeat](containers.DeferredContainers.TypeClass.md#repeat)

▸ **repeat**<`T`\>(`count`): [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `T`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](containers.DeferredContainers.TypeClass.md).[repeat](containers.DeferredContainers.TypeClass.md#repeat)

▸ **repeat**<`T`\>(): [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `T`\>

Returns a Container that mirrors the source, continually repeating it.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](containers.DeferredContainers.TypeClass.md).[repeat](containers.DeferredContainers.TypeClass.md#repeat)

___

### retry

▸ **retry**<`T`\>(): [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `T`\>

Returns an `ObservableLike` that mirrors the source, re-subscribing
if the source completes with an error.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](containers.DeferredContainers.TypeClass.md).[retry](containers.DeferredContainers.TypeClass.md#retry)

▸ **retry**<`T`\>(`predicate`): [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `T`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](containers.DeferredContainers.TypeClass.md).[retry](containers.DeferredContainers.TypeClass.md#retry)

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `TAcc`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `TAcc`\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[scan](containers.Containers.TypeClass.md#scan)

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `T`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[skipFirst](containers.Containers.TypeClass.md#skipfirst)

___

### startWith

▸ **startWith**<`T`\>(`value`, `...values`): [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `T`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](containers.DeferredContainers.TypeClass.md).[startWith](containers.DeferredContainers.TypeClass.md#startwith)

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `T`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[takeFirst](containers.Containers.TypeClass.md#takefirst)

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `T`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[takeLast](containers.Containers.TypeClass.md#takelast)

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `T`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[takeWhile](containers.Containers.TypeClass.md#takewhile)

___

### zipWith

▸ **zipWith**<`TA`, `TB`\>(`b`): [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `TA`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `Iterable`<`TB`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `TA`, readonly [`TA`, `TB`]\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[zipWith](containers.Containers.TypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`\>(`b`, `c`): [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `Iterable`<`TB`\> |
| `c` | `Iterable`<`TC`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`]\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[zipWith](containers.Containers.TypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`\>(`b`, `c`, `d`): [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `b` | `Iterable`<`TB`\> |
| `c` | `Iterable`<`TC`\> |
| `d` | `Iterable`<`TD`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[zipWith](containers.Containers.TypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`b`, `c`, `d`, `e`): [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `b` | `Iterable`<`TB`\> |
| `c` | `Iterable`<`TC`\> |
| `d` | `Iterable`<`TD`\> |
| `e` | `Iterable`<`TE`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[zipWith](containers.Containers.TypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`b`, `c`, `d`, `e`, `f`): [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `b` | `Iterable`<`TB`\> |
| `c` | `Iterable`<`TC`\> |
| `d` | `Iterable`<`TD`\> |
| `e` | `Iterable`<`TE`\> |
| `f` | `Iterable`<`TF`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[zipWith](containers.Containers.TypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`b`, `c`, `d`, `e`, `f`, `g`): [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `b` | `Iterable`<`TB`\> |
| `c` | `Iterable`<`TC`\> |
| `d` | `Iterable`<`TD`\> |
| `e` | `Iterable`<`TE`\> |
| `f` | `Iterable`<`TF`\> |
| `g` | `Iterable`<`TG`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[zipWith](containers.Containers.TypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `b` | `Iterable`<`TB`\> |
| `c` | `Iterable`<`TC`\> |
| `d` | `Iterable`<`TD`\> |
| `e` | `Iterable`<`TE`\> |
| `f` | `Iterable`<`TF`\> |
| `g` | `Iterable`<`TG`\> |
| `h` | `Iterable`<`TH`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[zipWith](containers.Containers.TypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `b` | `Iterable`<`TB`\> |
| `c` | `Iterable`<`TC`\> |
| `d` | `Iterable`<`TD`\> |
| `e` | `Iterable`<`TE`\> |
| `f` | `Iterable`<`TF`\> |
| `g` | `Iterable`<`TG`\> |
| `h` | `Iterable`<`TH`\> |
| `i` | `Iterable`<`TI`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`IterableContainer`](containers.IterableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[zipWith](containers.Containers.TypeClass.md#zipwith)

___

## Transform Methods

### enumerate

▸ **enumerate**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

#### Inherited from

[TypeClass](containers.EnumerableContainers.TypeClass.md).[enumerate](containers.EnumerableContainers.TypeClass.md#enumerate)

___

### everySatisfy

▸ **everySatisfy**<`T`\>(`predicate`): [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, `boolean`\>

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

[`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, `boolean`\>

#### Inherited from

[TypeClass](containers.RunnableContainers.TypeClass.md).[everySatisfy](containers.RunnableContainers.TypeClass.md#everysatisfy)

___

### first

▸ **first**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`Optional`](../modules/functions.md#optional)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`Optional`](../modules/functions.md#optional)<`T`\>\>

#### Inherited from

[TypeClass](containers.RunnableContainers.TypeClass.md).[first](containers.RunnableContainers.TypeClass.md#first)

___

### firstAsync

▸ **firstAsync**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[firstAsync](containers.Containers.TypeClass.md#firstasync)

___

### flow

▸ **flow**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\> & [`DisposableLike`](types.DisposableLike.md)\>

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

[`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\> & [`DisposableLike`](types.DisposableLike.md)\>

#### Inherited from

[TypeClass](containers.RunnableContainers.TypeClass.md).[flow](containers.RunnableContainers.TypeClass.md#flow)

___

### last

▸ **last**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`Optional`](../modules/functions.md#optional)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`Optional`](../modules/functions.md#optional)<`T`\>\>

#### Inherited from

[TypeClass](containers.RunnableContainers.TypeClass.md).[last](containers.RunnableContainers.TypeClass.md#last)

___

### lastAsync

▸ **lastAsync**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[lastAsync](containers.Containers.TypeClass.md#lastasync)

___

### noneSatisfy

▸ **noneSatisfy**<`T`\>(`predicate`): [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, `boolean`\>

#### Inherited from

[TypeClass](containers.RunnableContainers.TypeClass.md).[noneSatisfy](containers.RunnableContainers.TypeClass.md#nonesatisfy)

___

### reduce

▸ **reduce**<`T`, `TAcc`\>(`reducer`, `initialValue`): [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, `TAcc`\>

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

[`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, `TAcc`\>

#### Inherited from

[TypeClass](containers.RunnableContainers.TypeClass.md).[reduce](containers.RunnableContainers.TypeClass.md#reduce)

___

### someSatisfy

▸ **someSatisfy**<`T`\>(`predicate`): [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, `boolean`\>

#### Inherited from

[TypeClass](containers.RunnableContainers.TypeClass.md).[someSatisfy](containers.RunnableContainers.TypeClass.md#somesatisfy)

___

### toEnumerable

▸ **toEnumerable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Inherited from

[TypeClass](containers.EnumerableContainers.TypeClass.md).[toEnumerable](containers.EnumerableContainers.TypeClass.md#toenumerable)

___

### toIterable

▸ **toIterable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, `Iterable`<`T`\>\>

Converts the Container to a `IterableLike`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, `Iterable`<`T`\>\>

#### Inherited from

[TypeClass](containers.EnumerableContainers.TypeClass.md).[toIterable](containers.EnumerableContainers.TypeClass.md#toiterable)

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, readonly `T`[]\>

Converts the Container to a `ReadonlyArrayContainer`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, readonly `T`[]\>

#### Inherited from

[TypeClass](containers.RunnableContainers.TypeClass.md).[toReadonlyArray](containers.RunnableContainers.TypeClass.md#toreadonlyarray)
