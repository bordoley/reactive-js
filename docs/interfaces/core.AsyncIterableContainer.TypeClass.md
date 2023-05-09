[Reactive-JS](../README.md) / [core](../modules/core.md) / [AsyncIterableContainer](../modules/core.AsyncIterableContainer.md) / TypeClass

# Interface: TypeClass

[core](../modules/core.md).[AsyncIterableContainer](../modules/core.AsyncIterableContainer.md).TypeClass

## Hierarchy

- [`TypeClass`](core.Containers.TypeClass.md)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md)\>

  ↳ **`TypeClass`**

## Table of contents

### Operator Properties

- [buffer](core.AsyncIterableContainer.TypeClass.md#buffer)
- [flatMapIterable](core.AsyncIterableContainer.TypeClass.md#flatmapiterable)
- [scanLast](core.AsyncIterableContainer.TypeClass.md#scanlast)

### Transform Properties

- [toObservable](core.AsyncIterableContainer.TypeClass.md#toobservable)

### Constructor Methods

- [zip](core.AsyncIterableContainer.TypeClass.md#zip)

### Operator Methods

- [distinctUntilChanged](core.AsyncIterableContainer.TypeClass.md#distinctuntilchanged)
- [forEach](core.AsyncIterableContainer.TypeClass.md#foreach)
- [forkZip](core.AsyncIterableContainer.TypeClass.md#forkzip)
- [identity](core.AsyncIterableContainer.TypeClass.md#identity)
- [ignoreElements](core.AsyncIterableContainer.TypeClass.md#ignoreelements)
- [keep](core.AsyncIterableContainer.TypeClass.md#keep)
- [keepType](core.AsyncIterableContainer.TypeClass.md#keeptype)
- [map](core.AsyncIterableContainer.TypeClass.md#map)
- [mapTo](core.AsyncIterableContainer.TypeClass.md#mapto)
- [pairwise](core.AsyncIterableContainer.TypeClass.md#pairwise)
- [pick](core.AsyncIterableContainer.TypeClass.md#pick)
- [scan](core.AsyncIterableContainer.TypeClass.md#scan)
- [skipFirst](core.AsyncIterableContainer.TypeClass.md#skipfirst)
- [takeFirst](core.AsyncIterableContainer.TypeClass.md#takefirst)
- [takeLast](core.AsyncIterableContainer.TypeClass.md#takelast)
- [takeWhile](core.AsyncIterableContainer.TypeClass.md#takewhile)
- [zipWith](core.AsyncIterableContainer.TypeClass.md#zipwith)

### Transform Methods

- [firstAsync](core.AsyncIterableContainer.TypeClass.md#firstasync)
- [flow](core.AsyncIterableContainer.TypeClass.md#flow)
- [lastAsync](core.AsyncIterableContainer.TypeClass.md#lastasync)

## Operator Properties

### buffer

• **buffer**: <T\>(`options?`: { `count?`: `number`  }) => [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, readonly `T`[]\>

#### Type declaration

▸ <`T`\>(`options?`): [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, readonly `T`[]\>

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

[`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, readonly `T`[]\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[buffer](core.Containers.TypeClass.md#buffer)

___

### flatMapIterable

• **flatMapIterable**: <TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, `Iterable`<`TB`\>\>) => [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `TA`, `TB`\>

#### Type declaration

▸ <`TA`, `TB`\>(`selector`): [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `TA`, `TB`\>

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

[`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `TA`, `TB`\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[flatMapIterable](core.Containers.TypeClass.md#flatmapiterable)

___

### scanLast

• **scanLast**: <T, TAcc\>(`scanner`: [`Function2`](../modules/functions.md#function2)<`TAcc`, `T`, `AsyncIterable`<`TAcc`\>\>, `initialValue`: [`Factory`](../modules/functions.md#factory)<`TAcc`\>) => [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, `TAcc`\>

#### Type declaration

▸ <`T`, `TAcc`\>(`scanner`, `initialValue`): [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, `TAcc`\>

##### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Function2`](../modules/functions.md#function2)<`TAcc`, `T`, `AsyncIterable`<`TAcc`\>\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

##### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, `TAcc`\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[scanLast](core.Containers.TypeClass.md#scanlast)

___

## Transform Properties

### toObservable

• **toObservable**: <T\>() => [`Function1`](../modules/functions.md#function1)<`AsyncIterable`<`T`\>, [`ObservableLike`](core.ObservableLike.md)<`T`\>\>

#### Type declaration

▸ <`T`\>(): [`Function1`](../modules/functions.md#function1)<`AsyncIterable`<`T`\>, [`ObservableLike`](core.ObservableLike.md)<`T`\>\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`Function1`](../modules/functions.md#function1)<`AsyncIterable`<`T`\>, [`ObservableLike`](core.ObservableLike.md)<`T`\>\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[toObservable](core.Containers.TypeClass.md#toobservable)

## Constructor Methods

### zip

▸ **zip**<`TA`, `TB`\>(`a`, `b`): `AsyncIterable`<readonly [`TA`, `TB`]\>

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
| `a` | `AsyncIterable`<`TA`\> |
| `b` | `AsyncIterable`<`TB`\> |

#### Returns

`AsyncIterable`<readonly [`TA`, `TB`]\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[zip](core.Containers.TypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): `AsyncIterable`<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `AsyncIterable`<`TA`\> |
| `b` | `AsyncIterable`<`TB`\> |
| `c` | `AsyncIterable`<`TC`\> |

#### Returns

`AsyncIterable`<readonly [`TA`, `TB`, `TC`]\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[zip](core.Containers.TypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): `AsyncIterable`<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | `AsyncIterable`<`TA`\> |
| `b` | `AsyncIterable`<`TB`\> |
| `c` | `AsyncIterable`<`TC`\> |
| `d` | `AsyncIterable`<`TD`\> |

#### Returns

`AsyncIterable`<readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[zip](core.Containers.TypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): `AsyncIterable`<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | `AsyncIterable`<`TA`\> |
| `b` | `AsyncIterable`<`TB`\> |
| `c` | `AsyncIterable`<`TC`\> |
| `d` | `AsyncIterable`<`TD`\> |
| `e` | `AsyncIterable`<`TE`\> |

#### Returns

`AsyncIterable`<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[zip](core.Containers.TypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): `AsyncIterable`<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | `AsyncIterable`<`TA`\> |
| `b` | `AsyncIterable`<`TB`\> |
| `c` | `AsyncIterable`<`TC`\> |
| `d` | `AsyncIterable`<`TD`\> |
| `e` | `AsyncIterable`<`TE`\> |
| `f` | `AsyncIterable`<`TF`\> |

#### Returns

`AsyncIterable`<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[zip](core.Containers.TypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): `AsyncIterable`<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | `AsyncIterable`<`TA`\> |
| `b` | `AsyncIterable`<`TB`\> |
| `c` | `AsyncIterable`<`TC`\> |
| `d` | `AsyncIterable`<`TD`\> |
| `e` | `AsyncIterable`<`TE`\> |
| `f` | `AsyncIterable`<`TF`\> |
| `g` | `AsyncIterable`<`TG`\> |

#### Returns

`AsyncIterable`<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[zip](core.Containers.TypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): `AsyncIterable`<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | `AsyncIterable`<`TA`\> |
| `b` | `AsyncIterable`<`TB`\> |
| `c` | `AsyncIterable`<`TC`\> |
| `d` | `AsyncIterable`<`TD`\> |
| `e` | `AsyncIterable`<`TE`\> |
| `f` | `AsyncIterable`<`TF`\> |
| `g` | `AsyncIterable`<`TG`\> |
| `h` | `AsyncIterable`<`TH`\> |

#### Returns

`AsyncIterable`<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[zip](core.Containers.TypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): `AsyncIterable`<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | `AsyncIterable`<`TA`\> |
| `b` | `AsyncIterable`<`TB`\> |
| `c` | `AsyncIterable`<`TC`\> |
| `d` | `AsyncIterable`<`TD`\> |
| `e` | `AsyncIterable`<`TE`\> |
| `f` | `AsyncIterable`<`TF`\> |
| `g` | `AsyncIterable`<`TG`\> |
| `h` | `AsyncIterable`<`TH`\> |
| `i` | `AsyncIterable`<`TI`\> |

#### Returns

`AsyncIterable`<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[zip](core.Containers.TypeClass.md#zip)

___

## Operator Methods

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, `T`\>

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

[`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[distinctUntilChanged](core.Containers.TypeClass.md#distinctuntilchanged)

___

### forEach

▸ **forEach**<`T`\>(`effect`): [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, `T`\>

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

[`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[forEach](core.Containers.TypeClass.md#foreach)

___

### forkZip

▸ **forkZip**<`T`, `TA`, `TB`\>(`a`, `b`): [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, `TB`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, readonly [`TA`, `TB`]\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[forkZip](core.Containers.TypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`]\>

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
| `a` | [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, `TC`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`]\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[forkZip](core.Containers.TypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, `TD`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[forkZip](core.Containers.TypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, `TE`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[forkZip](core.Containers.TypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, `TE`\> |
| `f` | [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, `TF`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[forkZip](core.Containers.TypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, `TE`\> |
| `f` | [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, `TF`\> |
| `g` | [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, `TG`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[forkZip](core.Containers.TypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, `TE`\> |
| `f` | [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, `TF`\> |
| `g` | [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, `TG`\> |
| `h` | [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, `TH`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[forkZip](core.Containers.TypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, `TE`\> |
| `f` | [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, `TF`\> |
| `g` | [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, `TG`\> |
| `h` | [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, `TH`\> |
| `i` | [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, `TI`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[forkZip](core.Containers.TypeClass.md#forkzip)

___

### identity

▸ **identity**<`T`\>(): [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[identity](core.Containers.TypeClass.md#identity)

___

### ignoreElements

▸ **ignoreElements**<`T`\>(): [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `unknown`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `unknown`, `T`\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[ignoreElements](core.Containers.TypeClass.md#ignoreelements)

___

### keep

▸ **keep**<`T`\>(`predicate`): [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, `T`\>

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

[`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[keep](core.Containers.TypeClass.md#keep)

___

### keepType

▸ **keepType**<`TA`, `TB`\>(`predicate`): [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `TA`, `TB`\>

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

[`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `TA`, `TB`\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[keepType](core.Containers.TypeClass.md#keeptype)

___

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `TA`, `TB`\>

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

[`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `TA`, `TB`\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[map](core.Containers.TypeClass.md#map)

___

### mapTo

▸ **mapTo**<`TA`, `TB`\>(`value`): [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `TA`, `TB`\>

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

[`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `TA`, `TB`\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[mapTo](core.Containers.TypeClass.md#mapto)

___

### pairwise

▸ **pairwise**<`T`\>(): [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, readonly [`T`, `T`]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, readonly [`T`, `T`]\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[pairwise](core.Containers.TypeClass.md#pairwise)

___

### pick

▸ **pick**<`T`, `TKey`\>(`key`): [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, `T`[`TKey`]\>

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

[`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, `T`[`TKey`]\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[pick](core.Containers.TypeClass.md#pick)

▸ **pick**<`T`, `TKeyA`, `TKeyB`\>(`keyA`, `keyB`): [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

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

[`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[pick](core.Containers.TypeClass.md#pick)

▸ **pick**<`T`, `TKeyA`, `TKeyB`, `TKeyC`\>(`keyA`, `keyB`, `keyC`): [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

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

[`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[pick](core.Containers.TypeClass.md#pick)

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, `TAcc`\>

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

[`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, `TAcc`\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[scan](core.Containers.TypeClass.md#scan)

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, `T`\>

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

[`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[skipFirst](core.Containers.TypeClass.md#skipfirst)

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, `T`\>

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

[`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[takeFirst](core.Containers.TypeClass.md#takefirst)

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, `T`\>

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

[`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[takeLast](core.Containers.TypeClass.md#takelast)

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, `T`\>

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

[`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[takeWhile](core.Containers.TypeClass.md#takewhile)

___

### zipWith

▸ **zipWith**<`TA`, `TB`\>(`b`): [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `TA`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `AsyncIterable`<`TB`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `TA`, readonly [`TA`, `TB`]\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[zipWith](core.Containers.TypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`\>(`b`, `c`): [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `AsyncIterable`<`TB`\> |
| `c` | `AsyncIterable`<`TC`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`]\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[zipWith](core.Containers.TypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`\>(`b`, `c`, `d`): [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `b` | `AsyncIterable`<`TB`\> |
| `c` | `AsyncIterable`<`TC`\> |
| `d` | `AsyncIterable`<`TD`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[zipWith](core.Containers.TypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`b`, `c`, `d`, `e`): [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `b` | `AsyncIterable`<`TB`\> |
| `c` | `AsyncIterable`<`TC`\> |
| `d` | `AsyncIterable`<`TD`\> |
| `e` | `AsyncIterable`<`TE`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[zipWith](core.Containers.TypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`b`, `c`, `d`, `e`, `f`): [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `b` | `AsyncIterable`<`TB`\> |
| `c` | `AsyncIterable`<`TC`\> |
| `d` | `AsyncIterable`<`TD`\> |
| `e` | `AsyncIterable`<`TE`\> |
| `f` | `AsyncIterable`<`TF`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[zipWith](core.Containers.TypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`b`, `c`, `d`, `e`, `f`, `g`): [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `b` | `AsyncIterable`<`TB`\> |
| `c` | `AsyncIterable`<`TC`\> |
| `d` | `AsyncIterable`<`TD`\> |
| `e` | `AsyncIterable`<`TE`\> |
| `f` | `AsyncIterable`<`TF`\> |
| `g` | `AsyncIterable`<`TG`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[zipWith](core.Containers.TypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `b` | `AsyncIterable`<`TB`\> |
| `c` | `AsyncIterable`<`TC`\> |
| `d` | `AsyncIterable`<`TD`\> |
| `e` | `AsyncIterable`<`TE`\> |
| `f` | `AsyncIterable`<`TF`\> |
| `g` | `AsyncIterable`<`TG`\> |
| `h` | `AsyncIterable`<`TH`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[zipWith](core.Containers.TypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `b` | `AsyncIterable`<`TB`\> |
| `c` | `AsyncIterable`<`TC`\> |
| `d` | `AsyncIterable`<`TD`\> |
| `e` | `AsyncIterable`<`TE`\> |
| `f` | `AsyncIterable`<`TF`\> |
| `g` | `AsyncIterable`<`TG`\> |
| `h` | `AsyncIterable`<`TH`\> |
| `i` | `AsyncIterable`<`TI`\> |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<[`AsyncIterableContainer`](core.AsyncIterableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[zipWith](core.Containers.TypeClass.md#zipwith)

___

## Transform Methods

### firstAsync

▸ **firstAsync**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`AsyncIterable`<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`AsyncIterable`<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[firstAsync](core.Containers.TypeClass.md#firstasync)

___

### flow

▸ **flow**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<`AsyncIterable`<`T`\>, [`PauseableObservableLike`](core.PauseableObservableLike.md)<`T`\> & [`DisposableLike`](core.DisposableLike.md)\>

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

[`Function1`](../modules/functions.md#function1)<`AsyncIterable`<`T`\>, [`PauseableObservableLike`](core.PauseableObservableLike.md)<`T`\> & [`DisposableLike`](core.DisposableLike.md)\>

___

### lastAsync

▸ **lastAsync**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`AsyncIterable`<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`AsyncIterable`<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Inherited from

[TypeClass](core.Containers.TypeClass.md).[lastAsync](core.Containers.TypeClass.md#lastasync)
