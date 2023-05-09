[Reactive-JS](../README.md) / [types](../modules/types.md) / [IterableContainer](../modules/types.IterableContainer.md) / TypeClass

# Interface: TypeClass

[types](../modules/types.md).[IterableContainer](../modules/types.IterableContainer.md).TypeClass

## Hierarchy

- [`TypeClass`](types.Containers.TypeClass.md)<[`IterableContainer`](types.IterableContainer-1.md)\>

- [`TypeClass`](types.DeferredContainers.TypeClass.md)<[`IterableContainer`](types.IterableContainer-1.md)\>

- [`TypeClass`](types.RunnableContainers.TypeClass.md)<[`IterableContainer`](types.IterableContainer-1.md)\>

- [`TypeClass`](types.EnumerableContainers.TypeClass.md)<[`IterableContainer`](types.IterableContainer-1.md)\>

  ↳ **`TypeClass`**

## Table of contents

### Constructor Properties

- [fromRunnable](types.IterableContainer.TypeClass.md#fromrunnable)

### Operator Properties

- [buffer](types.IterableContainer.TypeClass.md#buffer)
- [concatAll](types.IterableContainer.TypeClass.md#concatall)
- [concatMap](types.IterableContainer.TypeClass.md#concatmap)
- [concatWith](types.IterableContainer.TypeClass.md#concatwith)
- [flatMapIterable](types.IterableContainer.TypeClass.md#flatmapiterable)
- [scanLast](types.IterableContainer.TypeClass.md#scanlast)

### Transform Properties

- [contains](types.IterableContainer.TypeClass.md#contains)
- [toObservable](types.IterableContainer.TypeClass.md#toobservable)
- [toRunnable](types.IterableContainer.TypeClass.md#torunnable)

### Constructor Methods

- [concat](types.IterableContainer.TypeClass.md#concat)
- [empty](types.IterableContainer.TypeClass.md#empty)
- [fromEnumerable](types.IterableContainer.TypeClass.md#fromenumerable)
- [fromEnumeratorFactory](types.IterableContainer.TypeClass.md#fromenumeratorfactory)
- [fromFactory](types.IterableContainer.TypeClass.md#fromfactory)
- [fromIterable](types.IterableContainer.TypeClass.md#fromiterable)
- [fromOptional](types.IterableContainer.TypeClass.md#fromoptional)
- [fromReadonlyArray](types.IterableContainer.TypeClass.md#fromreadonlyarray)
- [generate](types.IterableContainer.TypeClass.md#generate)
- [zip](types.IterableContainer.TypeClass.md#zip)

### Operator Methods

- [distinctUntilChanged](types.IterableContainer.TypeClass.md#distinctuntilchanged)
- [endWith](types.IterableContainer.TypeClass.md#endwith)
- [forEach](types.IterableContainer.TypeClass.md#foreach)
- [forkConcat](types.IterableContainer.TypeClass.md#forkconcat)
- [forkZip](types.IterableContainer.TypeClass.md#forkzip)
- [identity](types.IterableContainer.TypeClass.md#identity)
- [ignoreElements](types.IterableContainer.TypeClass.md#ignoreelements)
- [keep](types.IterableContainer.TypeClass.md#keep)
- [keepType](types.IterableContainer.TypeClass.md#keeptype)
- [map](types.IterableContainer.TypeClass.md#map)
- [mapTo](types.IterableContainer.TypeClass.md#mapto)
- [pairwise](types.IterableContainer.TypeClass.md#pairwise)
- [pick](types.IterableContainer.TypeClass.md#pick)
- [repeat](types.IterableContainer.TypeClass.md#repeat)
- [retry](types.IterableContainer.TypeClass.md#retry)
- [scan](types.IterableContainer.TypeClass.md#scan)
- [skipFirst](types.IterableContainer.TypeClass.md#skipfirst)
- [startWith](types.IterableContainer.TypeClass.md#startwith)
- [takeFirst](types.IterableContainer.TypeClass.md#takefirst)
- [takeLast](types.IterableContainer.TypeClass.md#takelast)
- [takeWhile](types.IterableContainer.TypeClass.md#takewhile)
- [zipWith](types.IterableContainer.TypeClass.md#zipwith)

### Transform Methods

- [enumerate](types.IterableContainer.TypeClass.md#enumerate)
- [everySatisfy](types.IterableContainer.TypeClass.md#everysatisfy)
- [first](types.IterableContainer.TypeClass.md#first)
- [firstAsync](types.IterableContainer.TypeClass.md#firstasync)
- [flow](types.IterableContainer.TypeClass.md#flow)
- [last](types.IterableContainer.TypeClass.md#last)
- [lastAsync](types.IterableContainer.TypeClass.md#lastasync)
- [noneSatisfy](types.IterableContainer.TypeClass.md#nonesatisfy)
- [reduce](types.IterableContainer.TypeClass.md#reduce)
- [someSatisfy](types.IterableContainer.TypeClass.md#somesatisfy)
- [toEnumerable](types.IterableContainer.TypeClass.md#toenumerable)
- [toIterable](types.IterableContainer.TypeClass.md#toiterable)
- [toReadonlyArray](types.IterableContainer.TypeClass.md#toreadonlyarray)

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

[TypeClass](types.DeferredContainers.TypeClass.md).[fromRunnable](types.DeferredContainers.TypeClass.md#fromrunnable)

___

## Operator Properties

### buffer

• **buffer**: <T\>(`options?`: { `count?`: `number`  }) => [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, readonly `T`[]\>

#### Type declaration

▸ <`T`\>(`options?`): [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, readonly `T`[]\>

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

[`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, readonly `T`[]\>

#### Inherited from

[TypeClass](types.Containers.TypeClass.md).[buffer](types.Containers.TypeClass.md#buffer)

___

### concatAll

• **concatAll**: <T\>() => [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `Iterable`<`T`\>, `T`\>

#### Type declaration

▸ <`T`\>(): [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `Iterable`<`T`\>, `T`\>

Converts a higher-order Container into a first-order
Container by concatenating the inner sources in order.

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `Iterable`<`T`\>, `T`\>

#### Inherited from

[TypeClass](types.DeferredContainers.TypeClass.md).[concatAll](types.DeferredContainers.TypeClass.md#concatall)

___

### concatMap

• **concatMap**: <TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, `Iterable`<`TB`\>\>) => [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `TA`, `TB`\>

#### Type declaration

▸ <`TA`, `TB`\>(`selector`): [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `TA`, `TB`\>

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

[`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `TA`, `TB`\>

#### Inherited from

[TypeClass](types.DeferredContainers.TypeClass.md).[concatMap](types.DeferredContainers.TypeClass.md#concatmap)

___

### concatWith

• **concatWith**: <T\>(`snd`: `Iterable`<`T`\>, ...`tail`: readonly `Iterable`<`T`\>[]) => [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `T`\>

#### Type declaration

▸ <`T`\>(`snd`, `...tail`): [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `T`\>

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

[`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](types.DeferredContainers.TypeClass.md).[concatWith](types.DeferredContainers.TypeClass.md#concatwith)

___

### flatMapIterable

• **flatMapIterable**: <TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, `Iterable`<`TB`\>\>) => [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `TA`, `TB`\>

#### Type declaration

▸ <`TA`, `TB`\>(`selector`): [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `TA`, `TB`\>

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

[`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `TA`, `TB`\>

#### Inherited from

[TypeClass](types.Containers.TypeClass.md).[flatMapIterable](types.Containers.TypeClass.md#flatmapiterable)

___

### scanLast

• **scanLast**: <T, TAcc\>(`scanner`: [`Function2`](../modules/functions.md#function2)<`TAcc`, `T`, `Iterable`<`TAcc`\>\>, `initialValue`: [`Factory`](../modules/functions.md#factory)<`TAcc`\>) => [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `TAcc`\>

#### Type declaration

▸ <`T`, `TAcc`\>(`scanner`, `initialValue`): [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `TAcc`\>

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

[`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `TAcc`\>

#### Inherited from

[TypeClass](types.Containers.TypeClass.md).[scanLast](types.Containers.TypeClass.md#scanlast)

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

[TypeClass](types.RunnableContainers.TypeClass.md).[contains](types.RunnableContainers.TypeClass.md#contains)

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

[TypeClass](types.Containers.TypeClass.md).[toObservable](types.Containers.TypeClass.md#toobservable)

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

[TypeClass](types.RunnableContainers.TypeClass.md).[toRunnable](types.RunnableContainers.TypeClass.md#torunnable)

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

[TypeClass](types.DeferredContainers.TypeClass.md).[concat](types.DeferredContainers.TypeClass.md#concat)

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

[TypeClass](types.DeferredContainers.TypeClass.md).[empty](types.DeferredContainers.TypeClass.md#empty)

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

[TypeClass](types.DeferredContainers.TypeClass.md).[fromEnumerable](types.DeferredContainers.TypeClass.md#fromenumerable)

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

[TypeClass](types.DeferredContainers.TypeClass.md).[fromEnumeratorFactory](types.DeferredContainers.TypeClass.md#fromenumeratorfactory)

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

[TypeClass](types.DeferredContainers.TypeClass.md).[fromFactory](types.DeferredContainers.TypeClass.md#fromfactory)

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

[TypeClass](types.DeferredContainers.TypeClass.md).[fromIterable](types.DeferredContainers.TypeClass.md#fromiterable)

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

[TypeClass](types.DeferredContainers.TypeClass.md).[fromOptional](types.DeferredContainers.TypeClass.md#fromoptional)

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

[TypeClass](types.DeferredContainers.TypeClass.md).[fromReadonlyArray](types.DeferredContainers.TypeClass.md#fromreadonlyarray)

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

[TypeClass](types.DeferredContainers.TypeClass.md).[generate](types.DeferredContainers.TypeClass.md#generate)

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

[TypeClass](types.Containers.TypeClass.md).[zip](types.Containers.TypeClass.md#zip)

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

[TypeClass](types.Containers.TypeClass.md).[zip](types.Containers.TypeClass.md#zip)

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

[TypeClass](types.Containers.TypeClass.md).[zip](types.Containers.TypeClass.md#zip)

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

[TypeClass](types.Containers.TypeClass.md).[zip](types.Containers.TypeClass.md#zip)

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

[TypeClass](types.Containers.TypeClass.md).[zip](types.Containers.TypeClass.md#zip)

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

[TypeClass](types.Containers.TypeClass.md).[zip](types.Containers.TypeClass.md#zip)

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

[TypeClass](types.Containers.TypeClass.md).[zip](types.Containers.TypeClass.md#zip)

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

[TypeClass](types.Containers.TypeClass.md).[zip](types.Containers.TypeClass.md#zip)

___

## Operator Methods

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `T`\>

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

[`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](types.Containers.TypeClass.md).[distinctUntilChanged](types.Containers.TypeClass.md#distinctuntilchanged)

___

### endWith

▸ **endWith**<`T`\>(`value`, `...values`): [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `T`\>

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

[`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](types.DeferredContainers.TypeClass.md).[endWith](types.DeferredContainers.TypeClass.md#endwith)

___

### forEach

▸ **forEach**<`T`\>(`effect`): [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `T`\>

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

[`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](types.Containers.TypeClass.md).[forEach](types.Containers.TypeClass.md#foreach)

___

### forkConcat

▸ **forkConcat**<`TIn`, `TOut`\>(`fst`, `snd`, `...tail`): [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `TIn`, `TOut`\>

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `TIn`, `TOut`\> |
| `snd` | [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `TIn`, `TOut`\> |
| `...tail` | readonly [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `TIn`, `TOut`\>[] |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `TIn`, `TOut`\>

#### Inherited from

[TypeClass](types.DeferredContainers.TypeClass.md).[forkConcat](types.DeferredContainers.TypeClass.md#forkconcat)

___

### forkZip

▸ **forkZip**<`T`, `TA`, `TB`\>(`a`, `b`): [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `TB`\> |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, readonly [`TA`, `TB`]\>

#### Inherited from

[TypeClass](types.Containers.TypeClass.md).[forkZip](types.Containers.TypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`]\>

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
| `a` | [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `TC`\> |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`]\>

#### Inherited from

[TypeClass](types.Containers.TypeClass.md).[forkZip](types.Containers.TypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `TD`\> |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Inherited from

[TypeClass](types.Containers.TypeClass.md).[forkZip](types.Containers.TypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `TE`\> |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Inherited from

[TypeClass](types.Containers.TypeClass.md).[forkZip](types.Containers.TypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `TE`\> |
| `f` | [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `TF`\> |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Inherited from

[TypeClass](types.Containers.TypeClass.md).[forkZip](types.Containers.TypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `TE`\> |
| `f` | [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `TF`\> |
| `g` | [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `TG`\> |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Inherited from

[TypeClass](types.Containers.TypeClass.md).[forkZip](types.Containers.TypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `TE`\> |
| `f` | [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `TF`\> |
| `g` | [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `TG`\> |
| `h` | [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `TH`\> |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Inherited from

[TypeClass](types.Containers.TypeClass.md).[forkZip](types.Containers.TypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `TE`\> |
| `f` | [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `TF`\> |
| `g` | [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `TG`\> |
| `h` | [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `TH`\> |
| `i` | [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `TI`\> |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Inherited from

[TypeClass](types.Containers.TypeClass.md).[forkZip](types.Containers.TypeClass.md#forkzip)

___

### identity

▸ **identity**<`T`\>(): [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](types.Containers.TypeClass.md).[identity](types.Containers.TypeClass.md#identity)

___

### ignoreElements

▸ **ignoreElements**<`T`\>(): [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `unknown`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `unknown`, `T`\>

#### Inherited from

[TypeClass](types.Containers.TypeClass.md).[ignoreElements](types.Containers.TypeClass.md#ignoreelements)

___

### keep

▸ **keep**<`T`\>(`predicate`): [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `T`\>

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

[`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](types.Containers.TypeClass.md).[keep](types.Containers.TypeClass.md#keep)

___

### keepType

▸ **keepType**<`TA`, `TB`\>(`predicate`): [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `TA`, `TB`\>

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

[`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `TA`, `TB`\>

#### Inherited from

[TypeClass](types.Containers.TypeClass.md).[keepType](types.Containers.TypeClass.md#keeptype)

___

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `TA`, `TB`\>

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

[`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `TA`, `TB`\>

#### Inherited from

[TypeClass](types.Containers.TypeClass.md).[map](types.Containers.TypeClass.md#map)

___

### mapTo

▸ **mapTo**<`TA`, `TB`\>(`value`): [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `TA`, `TB`\>

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

[`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `TA`, `TB`\>

#### Inherited from

[TypeClass](types.Containers.TypeClass.md).[mapTo](types.Containers.TypeClass.md#mapto)

___

### pairwise

▸ **pairwise**<`T`\>(): [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, readonly [`T`, `T`]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, readonly [`T`, `T`]\>

#### Inherited from

[TypeClass](types.Containers.TypeClass.md).[pairwise](types.Containers.TypeClass.md#pairwise)

___

### pick

▸ **pick**<`T`, `TKey`\>(`key`): [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `T`[`TKey`]\>

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

[`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `T`[`TKey`]\>

#### Inherited from

[TypeClass](types.Containers.TypeClass.md).[pick](types.Containers.TypeClass.md#pick)

▸ **pick**<`T`, `TKeyA`, `TKeyB`\>(`keyA`, `keyB`): [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

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

[`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

#### Inherited from

[TypeClass](types.Containers.TypeClass.md).[pick](types.Containers.TypeClass.md#pick)

▸ **pick**<`T`, `TKeyA`, `TKeyB`, `TKeyC`\>(`keyA`, `keyB`, `keyC`): [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

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

[`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

#### Inherited from

[TypeClass](types.Containers.TypeClass.md).[pick](types.Containers.TypeClass.md#pick)

___

### repeat

▸ **repeat**<`T`\>(`predicate`): [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `T`\>

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

[`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](types.DeferredContainers.TypeClass.md).[repeat](types.DeferredContainers.TypeClass.md#repeat)

▸ **repeat**<`T`\>(`count`): [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `T`\>

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

[`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](types.DeferredContainers.TypeClass.md).[repeat](types.DeferredContainers.TypeClass.md#repeat)

▸ **repeat**<`T`\>(): [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `T`\>

Returns a Container that mirrors the source, continually repeating it.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](types.DeferredContainers.TypeClass.md).[repeat](types.DeferredContainers.TypeClass.md#repeat)

___

### retry

▸ **retry**<`T`\>(): [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `T`\>

Returns an `ObservableLike` that mirrors the source, re-subscribing
if the source completes with an error.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](types.DeferredContainers.TypeClass.md).[retry](types.DeferredContainers.TypeClass.md#retry)

▸ **retry**<`T`\>(`predicate`): [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `T`\>

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

[`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](types.DeferredContainers.TypeClass.md).[retry](types.DeferredContainers.TypeClass.md#retry)

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `TAcc`\>

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

[`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `TAcc`\>

#### Inherited from

[TypeClass](types.Containers.TypeClass.md).[scan](types.Containers.TypeClass.md#scan)

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `T`\>

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

[`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](types.Containers.TypeClass.md).[skipFirst](types.Containers.TypeClass.md#skipfirst)

___

### startWith

▸ **startWith**<`T`\>(`value`, `...values`): [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `T`\>

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

[`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](types.DeferredContainers.TypeClass.md).[startWith](types.DeferredContainers.TypeClass.md#startwith)

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `T`\>

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

[`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](types.Containers.TypeClass.md).[takeFirst](types.Containers.TypeClass.md#takefirst)

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `T`\>

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

[`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](types.Containers.TypeClass.md).[takeLast](types.Containers.TypeClass.md#takelast)

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `T`\>

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

[`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](types.Containers.TypeClass.md).[takeWhile](types.Containers.TypeClass.md#takewhile)

___

### zipWith

▸ **zipWith**<`TA`, `TB`\>(`b`): [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `TA`, readonly [`TA`, `TB`]\>

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

[`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `TA`, readonly [`TA`, `TB`]\>

#### Inherited from

[TypeClass](types.Containers.TypeClass.md).[zipWith](types.Containers.TypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`\>(`b`, `c`): [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`]\>

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

[`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`]\>

#### Inherited from

[TypeClass](types.Containers.TypeClass.md).[zipWith](types.Containers.TypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`\>(`b`, `c`, `d`): [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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

[`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Inherited from

[TypeClass](types.Containers.TypeClass.md).[zipWith](types.Containers.TypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`b`, `c`, `d`, `e`): [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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

[`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Inherited from

[TypeClass](types.Containers.TypeClass.md).[zipWith](types.Containers.TypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`b`, `c`, `d`, `e`, `f`): [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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

[`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Inherited from

[TypeClass](types.Containers.TypeClass.md).[zipWith](types.Containers.TypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`b`, `c`, `d`, `e`, `f`, `g`): [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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

[`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Inherited from

[TypeClass](types.Containers.TypeClass.md).[zipWith](types.Containers.TypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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

[`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Inherited from

[TypeClass](types.Containers.TypeClass.md).[zipWith](types.Containers.TypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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

[`Operator`](../modules/types.Containers.md#operator)<[`IterableContainer`](types.IterableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Inherited from

[TypeClass](types.Containers.TypeClass.md).[zipWith](types.Containers.TypeClass.md#zipwith)

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

[TypeClass](types.EnumerableContainers.TypeClass.md).[enumerate](types.EnumerableContainers.TypeClass.md#enumerate)

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

[TypeClass](types.RunnableContainers.TypeClass.md).[everySatisfy](types.RunnableContainers.TypeClass.md#everysatisfy)

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

[TypeClass](types.RunnableContainers.TypeClass.md).[first](types.RunnableContainers.TypeClass.md#first)

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

[TypeClass](types.Containers.TypeClass.md).[firstAsync](types.Containers.TypeClass.md#firstasync)

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

[TypeClass](types.RunnableContainers.TypeClass.md).[flow](types.RunnableContainers.TypeClass.md#flow)

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

[TypeClass](types.RunnableContainers.TypeClass.md).[last](types.RunnableContainers.TypeClass.md#last)

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

[TypeClass](types.Containers.TypeClass.md).[lastAsync](types.Containers.TypeClass.md#lastasync)

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

[TypeClass](types.RunnableContainers.TypeClass.md).[noneSatisfy](types.RunnableContainers.TypeClass.md#nonesatisfy)

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

[TypeClass](types.RunnableContainers.TypeClass.md).[reduce](types.RunnableContainers.TypeClass.md#reduce)

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

[TypeClass](types.RunnableContainers.TypeClass.md).[someSatisfy](types.RunnableContainers.TypeClass.md#somesatisfy)

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

[TypeClass](types.EnumerableContainers.TypeClass.md).[toEnumerable](types.EnumerableContainers.TypeClass.md#toenumerable)

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

[TypeClass](types.EnumerableContainers.TypeClass.md).[toIterable](types.EnumerableContainers.TypeClass.md#toiterable)

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

[TypeClass](types.RunnableContainers.TypeClass.md).[toReadonlyArray](types.RunnableContainers.TypeClass.md#toreadonlyarray)
