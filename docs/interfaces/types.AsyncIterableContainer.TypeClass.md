[Reactive-JS](../README.md) / [types](../modules/types.md) / [AsyncIterableContainer](../modules/types.AsyncIterableContainer.md) / TypeClass

# Interface: TypeClass

[types](../modules/types.md).[AsyncIterableContainer](../modules/types.AsyncIterableContainer.md).TypeClass

## Hierarchy

- [`TypeClass`](types.Containers.TypeClass.md)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md)\>

  ↳ **`TypeClass`**

## Table of contents

### Operator Properties

- [buffer](types.AsyncIterableContainer.TypeClass.md#buffer)
- [flatMapIterable](types.AsyncIterableContainer.TypeClass.md#flatmapiterable)
- [scanLast](types.AsyncIterableContainer.TypeClass.md#scanlast)

### Transform Properties

- [toObservable](types.AsyncIterableContainer.TypeClass.md#toobservable)

### Constructor Methods

- [zip](types.AsyncIterableContainer.TypeClass.md#zip)

### Operator Methods

- [distinctUntilChanged](types.AsyncIterableContainer.TypeClass.md#distinctuntilchanged)
- [forEach](types.AsyncIterableContainer.TypeClass.md#foreach)
- [forkZip](types.AsyncIterableContainer.TypeClass.md#forkzip)
- [identity](types.AsyncIterableContainer.TypeClass.md#identity)
- [ignoreElements](types.AsyncIterableContainer.TypeClass.md#ignoreelements)
- [keep](types.AsyncIterableContainer.TypeClass.md#keep)
- [keepType](types.AsyncIterableContainer.TypeClass.md#keeptype)
- [map](types.AsyncIterableContainer.TypeClass.md#map)
- [mapTo](types.AsyncIterableContainer.TypeClass.md#mapto)
- [pairwise](types.AsyncIterableContainer.TypeClass.md#pairwise)
- [pick](types.AsyncIterableContainer.TypeClass.md#pick)
- [scan](types.AsyncIterableContainer.TypeClass.md#scan)
- [skipFirst](types.AsyncIterableContainer.TypeClass.md#skipfirst)
- [takeFirst](types.AsyncIterableContainer.TypeClass.md#takefirst)
- [takeLast](types.AsyncIterableContainer.TypeClass.md#takelast)
- [takeWhile](types.AsyncIterableContainer.TypeClass.md#takewhile)
- [zipWith](types.AsyncIterableContainer.TypeClass.md#zipwith)

### Transform Methods

- [firstAsync](types.AsyncIterableContainer.TypeClass.md#firstasync)
- [flow](types.AsyncIterableContainer.TypeClass.md#flow)
- [lastAsync](types.AsyncIterableContainer.TypeClass.md#lastasync)

## Operator Properties

### buffer

• **buffer**: <T\>(`options?`: { `count?`: `number`  }) => [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, readonly `T`[]\>

#### Type declaration

▸ <`T`\>(`options?`): [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, readonly `T`[]\>

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

[`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, readonly `T`[]\>

#### Inherited from

[TypeClass](types.Containers.TypeClass.md).[buffer](types.Containers.TypeClass.md#buffer)

___

### flatMapIterable

• **flatMapIterable**: <TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, `Iterable`<`TB`\>\>) => [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `TA`, `TB`\>

#### Type declaration

▸ <`TA`, `TB`\>(`selector`): [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `TA`, `TB`\>

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

[`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `TA`, `TB`\>

#### Inherited from

[TypeClass](types.Containers.TypeClass.md).[flatMapIterable](types.Containers.TypeClass.md#flatmapiterable)

___

### scanLast

• **scanLast**: <T, TAcc\>(`scanner`: [`Function2`](../modules/functions.md#function2)<`TAcc`, `T`, `AsyncIterable`<`TAcc`\>\>, `initialValue`: [`Factory`](../modules/functions.md#factory)<`TAcc`\>) => [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, `TAcc`\>

#### Type declaration

▸ <`T`, `TAcc`\>(`scanner`, `initialValue`): [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, `TAcc`\>

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

[`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, `TAcc`\>

#### Inherited from

[TypeClass](types.Containers.TypeClass.md).[scanLast](types.Containers.TypeClass.md#scanlast)

___

## Transform Properties

### toObservable

• **toObservable**: <T\>() => [`Function1`](../modules/functions.md#function1)<`AsyncIterable`<`T`\>, [`ObservableLike`](types.ObservableLike.md)<`T`\>\>

#### Type declaration

▸ <`T`\>(): [`Function1`](../modules/functions.md#function1)<`AsyncIterable`<`T`\>, [`ObservableLike`](types.ObservableLike.md)<`T`\>\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`Function1`](../modules/functions.md#function1)<`AsyncIterable`<`T`\>, [`ObservableLike`](types.ObservableLike.md)<`T`\>\>

#### Inherited from

[TypeClass](types.Containers.TypeClass.md).[toObservable](types.Containers.TypeClass.md#toobservable)

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

[TypeClass](types.Containers.TypeClass.md).[zip](types.Containers.TypeClass.md#zip)

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

[TypeClass](types.Containers.TypeClass.md).[zip](types.Containers.TypeClass.md#zip)

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

[TypeClass](types.Containers.TypeClass.md).[zip](types.Containers.TypeClass.md#zip)

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

[TypeClass](types.Containers.TypeClass.md).[zip](types.Containers.TypeClass.md#zip)

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

[TypeClass](types.Containers.TypeClass.md).[zip](types.Containers.TypeClass.md#zip)

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

[TypeClass](types.Containers.TypeClass.md).[zip](types.Containers.TypeClass.md#zip)

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

[TypeClass](types.Containers.TypeClass.md).[zip](types.Containers.TypeClass.md#zip)

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

[TypeClass](types.Containers.TypeClass.md).[zip](types.Containers.TypeClass.md#zip)

___

## Operator Methods

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, `T`\>

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

[`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](types.Containers.TypeClass.md).[distinctUntilChanged](types.Containers.TypeClass.md#distinctuntilchanged)

___

### forEach

▸ **forEach**<`T`\>(`effect`): [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, `T`\>

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

[`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](types.Containers.TypeClass.md).[forEach](types.Containers.TypeClass.md#foreach)

___

### forkZip

▸ **forkZip**<`T`, `TA`, `TB`\>(`a`, `b`): [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, `TB`\> |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, readonly [`TA`, `TB`]\>

#### Inherited from

[TypeClass](types.Containers.TypeClass.md).[forkZip](types.Containers.TypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`]\>

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
| `a` | [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, `TC`\> |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`]\>

#### Inherited from

[TypeClass](types.Containers.TypeClass.md).[forkZip](types.Containers.TypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, `TD`\> |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Inherited from

[TypeClass](types.Containers.TypeClass.md).[forkZip](types.Containers.TypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, `TE`\> |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Inherited from

[TypeClass](types.Containers.TypeClass.md).[forkZip](types.Containers.TypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, `TE`\> |
| `f` | [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, `TF`\> |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Inherited from

[TypeClass](types.Containers.TypeClass.md).[forkZip](types.Containers.TypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, `TE`\> |
| `f` | [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, `TF`\> |
| `g` | [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, `TG`\> |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Inherited from

[TypeClass](types.Containers.TypeClass.md).[forkZip](types.Containers.TypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, `TE`\> |
| `f` | [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, `TF`\> |
| `g` | [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, `TG`\> |
| `h` | [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, `TH`\> |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Inherited from

[TypeClass](types.Containers.TypeClass.md).[forkZip](types.Containers.TypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, `TE`\> |
| `f` | [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, `TF`\> |
| `g` | [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, `TG`\> |
| `h` | [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, `TH`\> |
| `i` | [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, `TI`\> |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Inherited from

[TypeClass](types.Containers.TypeClass.md).[forkZip](types.Containers.TypeClass.md#forkzip)

___

### identity

▸ **identity**<`T`\>(): [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](types.Containers.TypeClass.md).[identity](types.Containers.TypeClass.md#identity)

___

### ignoreElements

▸ **ignoreElements**<`T`\>(): [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `unknown`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `unknown`, `T`\>

#### Inherited from

[TypeClass](types.Containers.TypeClass.md).[ignoreElements](types.Containers.TypeClass.md#ignoreelements)

___

### keep

▸ **keep**<`T`\>(`predicate`): [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, `T`\>

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

[`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](types.Containers.TypeClass.md).[keep](types.Containers.TypeClass.md#keep)

___

### keepType

▸ **keepType**<`TA`, `TB`\>(`predicate`): [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `TA`, `TB`\>

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

[`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `TA`, `TB`\>

#### Inherited from

[TypeClass](types.Containers.TypeClass.md).[keepType](types.Containers.TypeClass.md#keeptype)

___

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `TA`, `TB`\>

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

[`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `TA`, `TB`\>

#### Inherited from

[TypeClass](types.Containers.TypeClass.md).[map](types.Containers.TypeClass.md#map)

___

### mapTo

▸ **mapTo**<`TA`, `TB`\>(`value`): [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `TA`, `TB`\>

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

[`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `TA`, `TB`\>

#### Inherited from

[TypeClass](types.Containers.TypeClass.md).[mapTo](types.Containers.TypeClass.md#mapto)

___

### pairwise

▸ **pairwise**<`T`\>(): [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, readonly [`T`, `T`]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, readonly [`T`, `T`]\>

#### Inherited from

[TypeClass](types.Containers.TypeClass.md).[pairwise](types.Containers.TypeClass.md#pairwise)

___

### pick

▸ **pick**<`T`, `TKey`\>(`key`): [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, `T`[`TKey`]\>

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

[`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, `T`[`TKey`]\>

#### Inherited from

[TypeClass](types.Containers.TypeClass.md).[pick](types.Containers.TypeClass.md#pick)

▸ **pick**<`T`, `TKeyA`, `TKeyB`\>(`keyA`, `keyB`): [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

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

[`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

#### Inherited from

[TypeClass](types.Containers.TypeClass.md).[pick](types.Containers.TypeClass.md#pick)

▸ **pick**<`T`, `TKeyA`, `TKeyB`, `TKeyC`\>(`keyA`, `keyB`, `keyC`): [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

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

[`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

#### Inherited from

[TypeClass](types.Containers.TypeClass.md).[pick](types.Containers.TypeClass.md#pick)

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, `TAcc`\>

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

[`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, `TAcc`\>

#### Inherited from

[TypeClass](types.Containers.TypeClass.md).[scan](types.Containers.TypeClass.md#scan)

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, `T`\>

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

[`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](types.Containers.TypeClass.md).[skipFirst](types.Containers.TypeClass.md#skipfirst)

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, `T`\>

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

[`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](types.Containers.TypeClass.md).[takeFirst](types.Containers.TypeClass.md#takefirst)

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, `T`\>

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

[`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](types.Containers.TypeClass.md).[takeLast](types.Containers.TypeClass.md#takelast)

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, `T`\>

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

[`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](types.Containers.TypeClass.md).[takeWhile](types.Containers.TypeClass.md#takewhile)

___

### zipWith

▸ **zipWith**<`TA`, `TB`\>(`b`): [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `TA`, readonly [`TA`, `TB`]\>

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

[`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `TA`, readonly [`TA`, `TB`]\>

#### Inherited from

[TypeClass](types.Containers.TypeClass.md).[zipWith](types.Containers.TypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`\>(`b`, `c`): [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`]\>

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

[`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`]\>

#### Inherited from

[TypeClass](types.Containers.TypeClass.md).[zipWith](types.Containers.TypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`\>(`b`, `c`, `d`): [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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

[`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Inherited from

[TypeClass](types.Containers.TypeClass.md).[zipWith](types.Containers.TypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`b`, `c`, `d`, `e`): [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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

[`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Inherited from

[TypeClass](types.Containers.TypeClass.md).[zipWith](types.Containers.TypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`b`, `c`, `d`, `e`, `f`): [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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

[`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Inherited from

[TypeClass](types.Containers.TypeClass.md).[zipWith](types.Containers.TypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`b`, `c`, `d`, `e`, `f`, `g`): [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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

[`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Inherited from

[TypeClass](types.Containers.TypeClass.md).[zipWith](types.Containers.TypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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

[`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Inherited from

[TypeClass](types.Containers.TypeClass.md).[zipWith](types.Containers.TypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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

[`Operator`](../modules/types.Containers.md#operator)<[`AsyncIterableContainer`](types.AsyncIterableContainer-1.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Inherited from

[TypeClass](types.Containers.TypeClass.md).[zipWith](types.Containers.TypeClass.md#zipwith)

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

[TypeClass](types.Containers.TypeClass.md).[firstAsync](types.Containers.TypeClass.md#firstasync)

___

### flow

▸ **flow**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<`AsyncIterable`<`T`\>, [`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\> & [`DisposableLike`](types.DisposableLike.md)\>

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

[`Function1`](../modules/functions.md#function1)<`AsyncIterable`<`T`\>, [`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\> & [`DisposableLike`](types.DisposableLike.md)\>

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

[TypeClass](types.Containers.TypeClass.md).[lastAsync](types.Containers.TypeClass.md#lastasync)
