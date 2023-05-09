[Reactive-JS](../README.md) / [containers](../modules/containers.md) / [EventSourceContainer](../modules/containers.EventSourceContainer.md) / TypeClass

# Interface: TypeClass

[containers](../modules/containers.md).[EventSourceContainer](../modules/containers.EventSourceContainer.md).TypeClass

## Hierarchy

- [`TypeClass`](containers.Containers.TypeClass.md)<[`Type`](containers.EventSourceContainer.Type.md)\>

  ↳ **`TypeClass`**

## Table of contents

### Operator Properties

- [buffer](containers.EventSourceContainer.TypeClass.md#buffer)
- [flatMapIterable](containers.EventSourceContainer.TypeClass.md#flatmapiterable)
- [scanLast](containers.EventSourceContainer.TypeClass.md#scanlast)

### Transform Properties

- [toObservable](containers.EventSourceContainer.TypeClass.md#toobservable)

### Constructor Methods

- [zip](containers.EventSourceContainer.TypeClass.md#zip)

### Operator Methods

- [distinctUntilChanged](containers.EventSourceContainer.TypeClass.md#distinctuntilchanged)
- [forEach](containers.EventSourceContainer.TypeClass.md#foreach)
- [forkZip](containers.EventSourceContainer.TypeClass.md#forkzip)
- [identity](containers.EventSourceContainer.TypeClass.md#identity)
- [ignoreElements](containers.EventSourceContainer.TypeClass.md#ignoreelements)
- [keep](containers.EventSourceContainer.TypeClass.md#keep)
- [keepType](containers.EventSourceContainer.TypeClass.md#keeptype)
- [map](containers.EventSourceContainer.TypeClass.md#map)
- [mapTo](containers.EventSourceContainer.TypeClass.md#mapto)
- [pairwise](containers.EventSourceContainer.TypeClass.md#pairwise)
- [pick](containers.EventSourceContainer.TypeClass.md#pick)
- [scan](containers.EventSourceContainer.TypeClass.md#scan)
- [skipFirst](containers.EventSourceContainer.TypeClass.md#skipfirst)
- [takeFirst](containers.EventSourceContainer.TypeClass.md#takefirst)
- [takeLast](containers.EventSourceContainer.TypeClass.md#takelast)
- [takeWhile](containers.EventSourceContainer.TypeClass.md#takewhile)
- [zipWith](containers.EventSourceContainer.TypeClass.md#zipwith)

### Transform Methods

- [firstAsync](containers.EventSourceContainer.TypeClass.md#firstasync)
- [lastAsync](containers.EventSourceContainer.TypeClass.md#lastasync)

## Operator Properties

### buffer

• **buffer**: <T\>(`options?`: { `count?`: `number`  }) => [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, readonly `T`[]\>

#### Type declaration

▸ <`T`\>(`options?`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, readonly `T`[]\>

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

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, readonly `T`[]\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[buffer](containers.Containers.TypeClass.md#buffer)

___

### flatMapIterable

• **flatMapIterable**: <TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, `Iterable`<`TB`\>\>) => [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `TA`, `TB`\>

#### Type declaration

▸ <`TA`, `TB`\>(`selector`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `TA`, `TB`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `TA`, `TB`\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[flatMapIterable](containers.Containers.TypeClass.md#flatmapiterable)

___

### scanLast

• **scanLast**: <T, TAcc\>(`scanner`: [`Function2`](../modules/functions.md#function2)<`TAcc`, `T`, [`EventSourceLike`](types.EventSourceLike.md)<`TAcc`\>\>, `initialValue`: [`Factory`](../modules/functions.md#factory)<`TAcc`\>) => [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, `TAcc`\>

#### Type declaration

▸ <`T`, `TAcc`\>(`scanner`, `initialValue`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, `TAcc`\>

##### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Function2`](../modules/functions.md#function2)<`TAcc`, `T`, [`EventSourceLike`](types.EventSourceLike.md)<`TAcc`\>\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

##### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, `TAcc`\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[scanLast](containers.Containers.TypeClass.md#scanlast)

___

## Transform Properties

### toObservable

• **toObservable**: <T\>() => [`Function1`](../modules/functions.md#function1)<[`EventSourceLike`](types.EventSourceLike.md)<`T`\>, [`ObservableLike`](types.ObservableLike.md)<`T`\>\>

#### Type declaration

▸ <`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EventSourceLike`](types.EventSourceLike.md)<`T`\>, [`ObservableLike`](types.ObservableLike.md)<`T`\>\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`Function1`](../modules/functions.md#function1)<[`EventSourceLike`](types.EventSourceLike.md)<`T`\>, [`ObservableLike`](types.ObservableLike.md)<`T`\>\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[toObservable](containers.Containers.TypeClass.md#toobservable)

## Constructor Methods

### zip

▸ **zip**<`TA`, `TB`\>(`a`, `b`): [`EventSourceLike`](types.EventSourceLike.md)<readonly [`TA`, `TB`]\>

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
| `a` | [`EventSourceLike`](types.EventSourceLike.md)<`TA`\> |
| `b` | [`EventSourceLike`](types.EventSourceLike.md)<`TB`\> |

#### Returns

[`EventSourceLike`](types.EventSourceLike.md)<readonly [`TA`, `TB`]\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[zip](containers.Containers.TypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`EventSourceLike`](types.EventSourceLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`EventSourceLike`](types.EventSourceLike.md)<`TA`\> |
| `b` | [`EventSourceLike`](types.EventSourceLike.md)<`TB`\> |
| `c` | [`EventSourceLike`](types.EventSourceLike.md)<`TC`\> |

#### Returns

[`EventSourceLike`](types.EventSourceLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[zip](containers.Containers.TypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`EventSourceLike`](types.EventSourceLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`EventSourceLike`](types.EventSourceLike.md)<`TA`\> |
| `b` | [`EventSourceLike`](types.EventSourceLike.md)<`TB`\> |
| `c` | [`EventSourceLike`](types.EventSourceLike.md)<`TC`\> |
| `d` | [`EventSourceLike`](types.EventSourceLike.md)<`TD`\> |

#### Returns

[`EventSourceLike`](types.EventSourceLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[zip](containers.Containers.TypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`EventSourceLike`](types.EventSourceLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`EventSourceLike`](types.EventSourceLike.md)<`TA`\> |
| `b` | [`EventSourceLike`](types.EventSourceLike.md)<`TB`\> |
| `c` | [`EventSourceLike`](types.EventSourceLike.md)<`TC`\> |
| `d` | [`EventSourceLike`](types.EventSourceLike.md)<`TD`\> |
| `e` | [`EventSourceLike`](types.EventSourceLike.md)<`TE`\> |

#### Returns

[`EventSourceLike`](types.EventSourceLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[zip](containers.Containers.TypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`EventSourceLike`](types.EventSourceLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`EventSourceLike`](types.EventSourceLike.md)<`TA`\> |
| `b` | [`EventSourceLike`](types.EventSourceLike.md)<`TB`\> |
| `c` | [`EventSourceLike`](types.EventSourceLike.md)<`TC`\> |
| `d` | [`EventSourceLike`](types.EventSourceLike.md)<`TD`\> |
| `e` | [`EventSourceLike`](types.EventSourceLike.md)<`TE`\> |
| `f` | [`EventSourceLike`](types.EventSourceLike.md)<`TF`\> |

#### Returns

[`EventSourceLike`](types.EventSourceLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[zip](containers.Containers.TypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`EventSourceLike`](types.EventSourceLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`EventSourceLike`](types.EventSourceLike.md)<`TA`\> |
| `b` | [`EventSourceLike`](types.EventSourceLike.md)<`TB`\> |
| `c` | [`EventSourceLike`](types.EventSourceLike.md)<`TC`\> |
| `d` | [`EventSourceLike`](types.EventSourceLike.md)<`TD`\> |
| `e` | [`EventSourceLike`](types.EventSourceLike.md)<`TE`\> |
| `f` | [`EventSourceLike`](types.EventSourceLike.md)<`TF`\> |
| `g` | [`EventSourceLike`](types.EventSourceLike.md)<`TG`\> |

#### Returns

[`EventSourceLike`](types.EventSourceLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[zip](containers.Containers.TypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`EventSourceLike`](types.EventSourceLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`EventSourceLike`](types.EventSourceLike.md)<`TA`\> |
| `b` | [`EventSourceLike`](types.EventSourceLike.md)<`TB`\> |
| `c` | [`EventSourceLike`](types.EventSourceLike.md)<`TC`\> |
| `d` | [`EventSourceLike`](types.EventSourceLike.md)<`TD`\> |
| `e` | [`EventSourceLike`](types.EventSourceLike.md)<`TE`\> |
| `f` | [`EventSourceLike`](types.EventSourceLike.md)<`TF`\> |
| `g` | [`EventSourceLike`](types.EventSourceLike.md)<`TG`\> |
| `h` | [`EventSourceLike`](types.EventSourceLike.md)<`TH`\> |

#### Returns

[`EventSourceLike`](types.EventSourceLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[zip](containers.Containers.TypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`EventSourceLike`](types.EventSourceLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`EventSourceLike`](types.EventSourceLike.md)<`TA`\> |
| `b` | [`EventSourceLike`](types.EventSourceLike.md)<`TB`\> |
| `c` | [`EventSourceLike`](types.EventSourceLike.md)<`TC`\> |
| `d` | [`EventSourceLike`](types.EventSourceLike.md)<`TD`\> |
| `e` | [`EventSourceLike`](types.EventSourceLike.md)<`TE`\> |
| `f` | [`EventSourceLike`](types.EventSourceLike.md)<`TF`\> |
| `g` | [`EventSourceLike`](types.EventSourceLike.md)<`TG`\> |
| `h` | [`EventSourceLike`](types.EventSourceLike.md)<`TH`\> |
| `i` | [`EventSourceLike`](types.EventSourceLike.md)<`TI`\> |

#### Returns

[`EventSourceLike`](types.EventSourceLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[zip](containers.Containers.TypeClass.md#zip)

___

## Operator Methods

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, `T`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, `T`\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[distinctUntilChanged](containers.Containers.TypeClass.md#distinctuntilchanged)

___

### forEach

▸ **forEach**<`T`\>(`effect`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, `T`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, `T`\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[forEach](containers.Containers.TypeClass.md#foreach)

___

### forkZip

▸ **forkZip**<`T`, `TA`, `TB`\>(`a`, `b`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, `TB`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, readonly [`TA`, `TB`]\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[forkZip](containers.Containers.TypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, `TC`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`]\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[forkZip](containers.Containers.TypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, `TD`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[forkZip](containers.Containers.TypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, `TE`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[forkZip](containers.Containers.TypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, `TE`\> |
| `f` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, `TF`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[forkZip](containers.Containers.TypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, `TE`\> |
| `f` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, `TF`\> |
| `g` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, `TG`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[forkZip](containers.Containers.TypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, `TE`\> |
| `f` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, `TF`\> |
| `g` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, `TG`\> |
| `h` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, `TH`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[forkZip](containers.Containers.TypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, `TE`\> |
| `f` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, `TF`\> |
| `g` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, `TG`\> |
| `h` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, `TH`\> |
| `i` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, `TI`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[forkZip](containers.Containers.TypeClass.md#forkzip)

___

### identity

▸ **identity**<`T`\>(): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, `T`\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[identity](containers.Containers.TypeClass.md#identity)

___

### ignoreElements

▸ **ignoreElements**<`T`\>(): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `unknown`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `unknown`, `T`\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[ignoreElements](containers.Containers.TypeClass.md#ignoreelements)

___

### keep

▸ **keep**<`T`\>(`predicate`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, `T`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, `T`\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[keep](containers.Containers.TypeClass.md#keep)

___

### keepType

▸ **keepType**<`TA`, `TB`\>(`predicate`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `TA`, `TB`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `TA`, `TB`\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[keepType](containers.Containers.TypeClass.md#keeptype)

___

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `TA`, `TB`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `TA`, `TB`\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[map](containers.Containers.TypeClass.md#map)

___

### mapTo

▸ **mapTo**<`TA`, `TB`\>(`value`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `TA`, `TB`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `TA`, `TB`\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[mapTo](containers.Containers.TypeClass.md#mapto)

___

### pairwise

▸ **pairwise**<`T`\>(): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, readonly [`T`, `T`]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, readonly [`T`, `T`]\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[pairwise](containers.Containers.TypeClass.md#pairwise)

___

### pick

▸ **pick**<`T`, `TKey`\>(`key`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, `T`[`TKey`]\>

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

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, `T`[`TKey`]\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[pick](containers.Containers.TypeClass.md#pick)

▸ **pick**<`T`, `TKeyA`, `TKeyB`\>(`keyA`, `keyB`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

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

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[pick](containers.Containers.TypeClass.md#pick)

▸ **pick**<`T`, `TKeyA`, `TKeyB`, `TKeyC`\>(`keyA`, `keyB`, `keyC`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

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

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[pick](containers.Containers.TypeClass.md#pick)

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, `TAcc`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, `TAcc`\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[scan](containers.Containers.TypeClass.md#scan)

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, `T`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, `T`\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[skipFirst](containers.Containers.TypeClass.md#skipfirst)

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, `T`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, `T`\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[takeFirst](containers.Containers.TypeClass.md#takefirst)

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, `T`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, `T`\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[takeLast](containers.Containers.TypeClass.md#takelast)

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, `T`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `T`, `T`\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[takeWhile](containers.Containers.TypeClass.md#takewhile)

___

### zipWith

▸ **zipWith**<`TA`, `TB`\>(`b`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `TA`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`EventSourceLike`](types.EventSourceLike.md)<`TB`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `TA`, readonly [`TA`, `TB`]\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[zipWith](containers.Containers.TypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`\>(`b`, `c`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`EventSourceLike`](types.EventSourceLike.md)<`TB`\> |
| `c` | [`EventSourceLike`](types.EventSourceLike.md)<`TC`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`]\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[zipWith](containers.Containers.TypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`\>(`b`, `c`, `d`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `b` | [`EventSourceLike`](types.EventSourceLike.md)<`TB`\> |
| `c` | [`EventSourceLike`](types.EventSourceLike.md)<`TC`\> |
| `d` | [`EventSourceLike`](types.EventSourceLike.md)<`TD`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[zipWith](containers.Containers.TypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`b`, `c`, `d`, `e`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `b` | [`EventSourceLike`](types.EventSourceLike.md)<`TB`\> |
| `c` | [`EventSourceLike`](types.EventSourceLike.md)<`TC`\> |
| `d` | [`EventSourceLike`](types.EventSourceLike.md)<`TD`\> |
| `e` | [`EventSourceLike`](types.EventSourceLike.md)<`TE`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[zipWith](containers.Containers.TypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`b`, `c`, `d`, `e`, `f`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `b` | [`EventSourceLike`](types.EventSourceLike.md)<`TB`\> |
| `c` | [`EventSourceLike`](types.EventSourceLike.md)<`TC`\> |
| `d` | [`EventSourceLike`](types.EventSourceLike.md)<`TD`\> |
| `e` | [`EventSourceLike`](types.EventSourceLike.md)<`TE`\> |
| `f` | [`EventSourceLike`](types.EventSourceLike.md)<`TF`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[zipWith](containers.Containers.TypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`b`, `c`, `d`, `e`, `f`, `g`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `b` | [`EventSourceLike`](types.EventSourceLike.md)<`TB`\> |
| `c` | [`EventSourceLike`](types.EventSourceLike.md)<`TC`\> |
| `d` | [`EventSourceLike`](types.EventSourceLike.md)<`TD`\> |
| `e` | [`EventSourceLike`](types.EventSourceLike.md)<`TE`\> |
| `f` | [`EventSourceLike`](types.EventSourceLike.md)<`TF`\> |
| `g` | [`EventSourceLike`](types.EventSourceLike.md)<`TG`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[zipWith](containers.Containers.TypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `b` | [`EventSourceLike`](types.EventSourceLike.md)<`TB`\> |
| `c` | [`EventSourceLike`](types.EventSourceLike.md)<`TC`\> |
| `d` | [`EventSourceLike`](types.EventSourceLike.md)<`TD`\> |
| `e` | [`EventSourceLike`](types.EventSourceLike.md)<`TE`\> |
| `f` | [`EventSourceLike`](types.EventSourceLike.md)<`TF`\> |
| `g` | [`EventSourceLike`](types.EventSourceLike.md)<`TG`\> |
| `h` | [`EventSourceLike`](types.EventSourceLike.md)<`TH`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[zipWith](containers.Containers.TypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `b` | [`EventSourceLike`](types.EventSourceLike.md)<`TB`\> |
| `c` | [`EventSourceLike`](types.EventSourceLike.md)<`TC`\> |
| `d` | [`EventSourceLike`](types.EventSourceLike.md)<`TD`\> |
| `e` | [`EventSourceLike`](types.EventSourceLike.md)<`TE`\> |
| `f` | [`EventSourceLike`](types.EventSourceLike.md)<`TF`\> |
| `g` | [`EventSourceLike`](types.EventSourceLike.md)<`TG`\> |
| `h` | [`EventSourceLike`](types.EventSourceLike.md)<`TH`\> |
| `i` | [`EventSourceLike`](types.EventSourceLike.md)<`TI`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.EventSourceContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[zipWith](containers.Containers.TypeClass.md#zipwith)

___

## Transform Methods

### firstAsync

▸ **firstAsync**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EventSourceLike`](types.EventSourceLike.md)<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EventSourceLike`](types.EventSourceLike.md)<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[firstAsync](containers.Containers.TypeClass.md#firstasync)

___

### lastAsync

▸ **lastAsync**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EventSourceLike`](types.EventSourceLike.md)<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EventSourceLike`](types.EventSourceLike.md)<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Inherited from

[TypeClass](containers.Containers.TypeClass.md).[lastAsync](containers.Containers.TypeClass.md#lastasync)
