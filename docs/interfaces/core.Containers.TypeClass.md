[Reactive-JS](../README.md) / [core](../modules/core.md) / [Containers](../modules/core.Containers.md) / TypeClass

# Interface: TypeClass<C\>

[core](../modules/core.md).[Containers](../modules/core.Containers.md).TypeClass

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](core.Container.md) |

## Hierarchy

- **`TypeClass`**

  ↳ [`TypeClass`](core.AsynchronousContainers.TypeClass.md)

  ↳ [`TypeClass`](core.DeferredContainers.TypeClass.md)

  ↳ [`TypeClass`](core.RunnableContainers.TypeClass.md)

  ↳ [`TypeClass`](core.StatefulContainers.TypeClass.md)

  ↳ [`TypeClass`](core.EnumerableContainers.TypeClass.md)

  ↳ [`TypeClass`](core.ReactiveContainers.TypeClass.md)

## Table of contents

### Constructor Properties

- [fromRunnable](core.Containers.TypeClass.md#fromrunnable)

### Operator Properties

- [buffer](core.Containers.TypeClass.md#buffer)
- [flatMapIterable](core.Containers.TypeClass.md#flatmapiterable)
- [scanLast](core.Containers.TypeClass.md#scanlast)

### Transform Properties

- [toObservable](core.Containers.TypeClass.md#toobservable)

### Constructor Methods

- [empty](core.Containers.TypeClass.md#empty)
- [fromEnumerable](core.Containers.TypeClass.md#fromenumerable)
- [fromEnumeratorFactory](core.Containers.TypeClass.md#fromenumeratorfactory)
- [fromFactory](core.Containers.TypeClass.md#fromfactory)
- [fromIterable](core.Containers.TypeClass.md#fromiterable)
- [fromOptional](core.Containers.TypeClass.md#fromoptional)
- [fromReadonlyArray](core.Containers.TypeClass.md#fromreadonlyarray)
- [generate](core.Containers.TypeClass.md#generate)
- [zip](core.Containers.TypeClass.md#zip)

### Operator Methods

- [distinctUntilChanged](core.Containers.TypeClass.md#distinctuntilchanged)
- [forEach](core.Containers.TypeClass.md#foreach)
- [forkZip](core.Containers.TypeClass.md#forkzip)
- [identity](core.Containers.TypeClass.md#identity)
- [ignoreElements](core.Containers.TypeClass.md#ignoreelements)
- [keep](core.Containers.TypeClass.md#keep)
- [keepType](core.Containers.TypeClass.md#keeptype)
- [map](core.Containers.TypeClass.md#map)
- [mapTo](core.Containers.TypeClass.md#mapto)
- [pairwise](core.Containers.TypeClass.md#pairwise)
- [pick](core.Containers.TypeClass.md#pick)
- [scan](core.Containers.TypeClass.md#scan)
- [skipFirst](core.Containers.TypeClass.md#skipfirst)
- [takeFirst](core.Containers.TypeClass.md#takefirst)
- [takeLast](core.Containers.TypeClass.md#takelast)
- [takeWhile](core.Containers.TypeClass.md#takewhile)
- [zipWith](core.Containers.TypeClass.md#zipwith)

### Transform Methods

- [firstAsync](core.Containers.TypeClass.md#firstasync)
- [lastAsync](core.Containers.TypeClass.md#lastasync)

## Constructor Properties

### fromRunnable

• **fromRunnable**: <T\>() => [`Function1`](../modules/functions.md#function1)<[`RunnableLike`](core.RunnableLike.md)<`T`\>, [`Of`](../modules/core.Containers.md#of)<`C`, `T`\>\>

#### Type declaration

▸ <`T`\>(): [`Function1`](../modules/functions.md#function1)<[`RunnableLike`](core.RunnableLike.md)<`T`\>, [`Of`](../modules/core.Containers.md#of)<`C`, `T`\>\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`Function1`](../modules/functions.md#function1)<[`RunnableLike`](core.RunnableLike.md)<`T`\>, [`Of`](../modules/core.Containers.md#of)<`C`, `T`\>\>

___

## Operator Properties

### buffer

• **buffer**: <T\>(`options?`: { `count?`: `number`  }) => [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, readonly `T`[]\>

#### Type declaration

▸ <`T`\>(`options?`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, readonly `T`[]\>

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

[`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, readonly `T`[]\>

___

### flatMapIterable

• **flatMapIterable**: <TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, `Iterable`<`TB`\>\>) => [`Operator`](../modules/core.Containers.md#operator)<`C`, `TA`, `TB`\>

#### Type declaration

▸ <`TA`, `TB`\>(`selector`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `TA`, `TB`\>

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

[`Operator`](../modules/core.Containers.md#operator)<`C`, `TA`, `TB`\>

___

### scanLast

• **scanLast**: <T, TAcc\>(`scanner`: [`Function2`](../modules/functions.md#function2)<`TAcc`, `T`, [`Of`](../modules/core.Containers.md#of)<`C`, `TAcc`\>\>, `initialValue`: [`Factory`](../modules/functions.md#factory)<`TAcc`\>) => [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TAcc`\>

#### Type declaration

▸ <`T`, `TAcc`\>(`scanner`, `initialValue`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TAcc`\>

##### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Function2`](../modules/functions.md#function2)<`TAcc`, `T`, [`Of`](../modules/core.Containers.md#of)<`C`, `TAcc`\>\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

##### Returns

[`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TAcc`\>

___

## Transform Properties

### toObservable

• **toObservable**: <T\>() => [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>, [`ObservableLike`](core.ObservableLike.md)<`T`\>\>

#### Type declaration

▸ <`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>, [`ObservableLike`](core.ObservableLike.md)<`T`\>\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>, [`ObservableLike`](core.ObservableLike.md)<`T`\>\>

## Constructor Methods

### empty

▸ **empty**<`T`\>(): [`Of`](../modules/core.Containers.md#of)<`C`, `T`\>

Return an Container that emits no items.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>

___

### fromEnumerable

▸ **fromEnumerable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](core.EnumerableLike.md)<`T`\>, [`Of`](../modules/core.Containers.md#of)<`C`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](core.EnumerableLike.md)<`T`\>, [`Of`](../modules/core.Containers.md#of)<`C`, `T`\>\>

___

### fromEnumeratorFactory

▸ **fromEnumeratorFactory**<`T`\>(`factory`): [`Of`](../modules/core.Containers.md#of)<`C`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](../modules/functions.md#factory)<[`EnumeratorLike`](core.EnumeratorLike.md)<`T`\>\> |

#### Returns

[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>

___

### fromFactory

▸ **fromFactory**<`T`\>(`factory`): [`Of`](../modules/core.Containers.md#of)<`C`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](../modules/functions.md#factory)<`T`\> |

#### Returns

[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>

___

### fromIterable

▸ **fromIterable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`Of`](../modules/core.Containers.md#of)<`C`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`Of`](../modules/core.Containers.md#of)<`C`, `T`\>\>

___

### fromOptional

▸ **fromOptional**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, [`Of`](../modules/core.Containers.md#of)<`C`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, [`Of`](../modules/core.Containers.md#of)<`C`, `T`\>\>

___

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`Of`](../modules/core.Containers.md#of)<`C`, `T`\>\>

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

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`Of`](../modules/core.Containers.md#of)<`C`, `T`\>\>

___

### generate

▸ **generate**<`T`\>(`generator`, `initialValue`): [`Of`](../modules/core.Containers.md#of)<`C`, `T`\>

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

[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>

___

### zip

▸ **zip**<`TA`, `TB`\>(`a`, `b`): [`Of`](../modules/core.Containers.md#of)<`C`, readonly [`TA`, `TB`]\>

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
| `a` | [`Of`](../modules/core.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/core.Containers.md#of)<`C`, `TB`\> |

#### Returns

[`Of`](../modules/core.Containers.md#of)<`C`, readonly [`TA`, `TB`]\>

▸ **zip**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Of`](../modules/core.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Of`](../modules/core.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/core.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/core.Containers.md#of)<`C`, `TC`\> |

#### Returns

[`Of`](../modules/core.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Of`](../modules/core.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`Of`](../modules/core.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/core.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/core.Containers.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/core.Containers.md#of)<`C`, `TD`\> |

#### Returns

[`Of`](../modules/core.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`Of`](../modules/core.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`Of`](../modules/core.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/core.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/core.Containers.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/core.Containers.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/core.Containers.md#of)<`C`, `TE`\> |

#### Returns

[`Of`](../modules/core.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`Of`](../modules/core.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`Of`](../modules/core.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/core.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/core.Containers.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/core.Containers.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/core.Containers.md#of)<`C`, `TE`\> |
| `f` | [`Of`](../modules/core.Containers.md#of)<`C`, `TF`\> |

#### Returns

[`Of`](../modules/core.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`Of`](../modules/core.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`Of`](../modules/core.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/core.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/core.Containers.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/core.Containers.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/core.Containers.md#of)<`C`, `TE`\> |
| `f` | [`Of`](../modules/core.Containers.md#of)<`C`, `TF`\> |
| `g` | [`Of`](../modules/core.Containers.md#of)<`C`, `TG`\> |

#### Returns

[`Of`](../modules/core.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Of`](../modules/core.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`Of`](../modules/core.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/core.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/core.Containers.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/core.Containers.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/core.Containers.md#of)<`C`, `TE`\> |
| `f` | [`Of`](../modules/core.Containers.md#of)<`C`, `TF`\> |
| `g` | [`Of`](../modules/core.Containers.md#of)<`C`, `TG`\> |
| `h` | [`Of`](../modules/core.Containers.md#of)<`C`, `TH`\> |

#### Returns

[`Of`](../modules/core.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Of`](../modules/core.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`Of`](../modules/core.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/core.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/core.Containers.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/core.Containers.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/core.Containers.md#of)<`C`, `TE`\> |
| `f` | [`Of`](../modules/core.Containers.md#of)<`C`, `TF`\> |
| `g` | [`Of`](../modules/core.Containers.md#of)<`C`, `TG`\> |
| `h` | [`Of`](../modules/core.Containers.md#of)<`C`, `TH`\> |
| `i` | [`Of`](../modules/core.Containers.md#of)<`C`, `TI`\> |

#### Returns

[`Of`](../modules/core.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

## Operator Methods

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `T`\>

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

[`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `T`\>

___

### forEach

▸ **forEach**<`T`\>(`effect`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `T`\>

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

[`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `T`\>

___

### forkZip

▸ **forkZip**<`T`, `TA`, `TB`\>(`a`, `b`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TB`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`]\>

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
| `a` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TC`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TD`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TD`\> |
| `e` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TE`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TD`\> |
| `e` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TE`\> |
| `f` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TF`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TD`\> |
| `e` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TE`\> |
| `f` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TF`\> |
| `g` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TG`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TD`\> |
| `e` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TE`\> |
| `f` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TF`\> |
| `g` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TG`\> |
| `h` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TH`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TD`\> |
| `e` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TE`\> |
| `f` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TF`\> |
| `g` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TG`\> |
| `h` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TH`\> |
| `i` | [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TI`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

### identity

▸ **identity**<`T`\>(): [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `T`\>

___

### ignoreElements

▸ **ignoreElements**<`T`\>(): [`Operator`](../modules/core.Containers.md#operator)<`C`, `unknown`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<`C`, `unknown`, `T`\>

___

### keep

▸ **keep**<`T`\>(`predicate`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `T`\>

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

[`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `T`\>

___

### keepType

▸ **keepType**<`TA`, `TB`\>(`predicate`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `TA`, `TB`\>

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

[`Operator`](../modules/core.Containers.md#operator)<`C`, `TA`, `TB`\>

___

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `TA`, `TB`\>

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

[`Operator`](../modules/core.Containers.md#operator)<`C`, `TA`, `TB`\>

___

### mapTo

▸ **mapTo**<`TA`, `TB`\>(`value`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `TA`, `TB`\>

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

[`Operator`](../modules/core.Containers.md#operator)<`C`, `TA`, `TB`\>

___

### pairwise

▸ **pairwise**<`T`\>(): [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, readonly [`T`, `T`]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, readonly [`T`, `T`]\>

___

### pick

▸ **pick**<`T`, `TKey`\>(`key`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `T`[`TKey`]\>

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

[`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `T`[`TKey`]\>

▸ **pick**<`T`, `TKeyA`, `TKeyB`\>(`keyA`, `keyB`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `T`[`TKeyA`][`TKeyB`]\>

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

[`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `T`[`TKeyA`][`TKeyB`]\>

▸ **pick**<`T`, `TKeyA`, `TKeyB`, `TKeyC`\>(`keyA`, `keyB`, `keyC`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

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

[`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TAcc`\>

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

[`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `TAcc`\>

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `T`\>

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

[`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `T`\>

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `T`\>

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

[`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `T`\>

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `T`\>

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

[`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `T`\>

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `T`\>

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

[`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `T`\>

___

### zipWith

▸ **zipWith**<`TA`, `TB`\>(`b`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `TA`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`Of`](../modules/core.Containers.md#of)<`C`, `TB`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<`C`, `TA`, readonly [`TA`, `TB`]\>

▸ **zipWith**<`TA`, `TB`, `TC`\>(`b`, `c`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`Of`](../modules/core.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/core.Containers.md#of)<`C`, `TC`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`\>(`b`, `c`, `d`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `b` | [`Of`](../modules/core.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/core.Containers.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/core.Containers.md#of)<`C`, `TD`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`b`, `c`, `d`, `e`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `b` | [`Of`](../modules/core.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/core.Containers.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/core.Containers.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/core.Containers.md#of)<`C`, `TE`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`b`, `c`, `d`, `e`, `f`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `b` | [`Of`](../modules/core.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/core.Containers.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/core.Containers.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/core.Containers.md#of)<`C`, `TE`\> |
| `f` | [`Of`](../modules/core.Containers.md#of)<`C`, `TF`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`b`, `c`, `d`, `e`, `f`, `g`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `b` | [`Of`](../modules/core.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/core.Containers.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/core.Containers.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/core.Containers.md#of)<`C`, `TE`\> |
| `f` | [`Of`](../modules/core.Containers.md#of)<`C`, `TF`\> |
| `g` | [`Of`](../modules/core.Containers.md#of)<`C`, `TG`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `b` | [`Of`](../modules/core.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/core.Containers.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/core.Containers.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/core.Containers.md#of)<`C`, `TE`\> |
| `f` | [`Of`](../modules/core.Containers.md#of)<`C`, `TF`\> |
| `g` | [`Of`](../modules/core.Containers.md#of)<`C`, `TG`\> |
| `h` | [`Of`](../modules/core.Containers.md#of)<`C`, `TH`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `b` | [`Of`](../modules/core.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/core.Containers.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/core.Containers.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/core.Containers.md#of)<`C`, `TE`\> |
| `f` | [`Of`](../modules/core.Containers.md#of)<`C`, `TF`\> |
| `g` | [`Of`](../modules/core.Containers.md#of)<`C`, `TG`\> |
| `h` | [`Of`](../modules/core.Containers.md#of)<`C`, `TH`\> |
| `i` | [`Of`](../modules/core.Containers.md#of)<`C`, `TI`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

## Transform Methods

### firstAsync

▸ **firstAsync**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

___

### lastAsync

▸ **lastAsync**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>
