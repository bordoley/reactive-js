[Reactive-JS](../README.md) / [containers](../modules/containers.md) / [PromiseContainer](../modules/containers.PromiseContainer.md) / TypeClass

# Interface: TypeClass

[containers](../modules/containers.md).[PromiseContainer](../modules/containers.PromiseContainer.md).TypeClass

## Hierarchy

- [`ContainerTypeClass`](containers.ContainerTypeClass.md)<[`Type`](containers.PromiseContainer.Type.md)\>

  ↳ **`TypeClass`**

## Table of contents

### Operator Properties

- [buffer](containers.PromiseContainer.TypeClass.md#buffer)
- [flatMapIterable](containers.PromiseContainer.TypeClass.md#flatmapiterable)
- [scanLast](containers.PromiseContainer.TypeClass.md#scanlast)

### Transform Properties

- [toObservable](containers.PromiseContainer.TypeClass.md#toobservable)

### Constructor Methods

- [zip](containers.PromiseContainer.TypeClass.md#zip)

### Operator Methods

- [distinctUntilChanged](containers.PromiseContainer.TypeClass.md#distinctuntilchanged)
- [forEach](containers.PromiseContainer.TypeClass.md#foreach)
- [forkZip](containers.PromiseContainer.TypeClass.md#forkzip)
- [identity](containers.PromiseContainer.TypeClass.md#identity)
- [ignoreElements](containers.PromiseContainer.TypeClass.md#ignoreelements)
- [keep](containers.PromiseContainer.TypeClass.md#keep)
- [keepType](containers.PromiseContainer.TypeClass.md#keeptype)
- [map](containers.PromiseContainer.TypeClass.md#map)
- [mapTo](containers.PromiseContainer.TypeClass.md#mapto)
- [pairwise](containers.PromiseContainer.TypeClass.md#pairwise)
- [pick](containers.PromiseContainer.TypeClass.md#pick)
- [scan](containers.PromiseContainer.TypeClass.md#scan)
- [skipFirst](containers.PromiseContainer.TypeClass.md#skipfirst)
- [takeFirst](containers.PromiseContainer.TypeClass.md#takefirst)
- [takeLast](containers.PromiseContainer.TypeClass.md#takelast)
- [takeWhile](containers.PromiseContainer.TypeClass.md#takewhile)
- [zipWith](containers.PromiseContainer.TypeClass.md#zipwith)

### Transform Methods

- [firstAsync](containers.PromiseContainer.TypeClass.md#firstasync)
- [lastAsync](containers.PromiseContainer.TypeClass.md#lastasync)

## Operator Properties

### buffer

• **buffer**: <T\>(`options?`: { `count?`: `number`  }) => [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, readonly `T`[]\>

#### Type declaration

▸ <`T`\>(`options?`): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, readonly `T`[]\>

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

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, readonly `T`[]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[buffer](containers.ContainerTypeClass.md#buffer)

___

### flatMapIterable

• **flatMapIterable**: <TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, `Iterable`<`TB`\>\>) => [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `TA`, `TB`\>

#### Type declaration

▸ <`TA`, `TB`\>(`selector`): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `TA`, `TB`\>

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

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `TA`, `TB`\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[flatMapIterable](containers.ContainerTypeClass.md#flatmapiterable)

___

### scanLast

• **scanLast**: <T, TAcc\>(`scanner`: [`Function2`](../modules/functions.md#function2)<`TAcc`, `T`, `PromiseLike`<`TAcc`\>\>, `initialValue`: [`Factory`](../modules/functions.md#factory)<`TAcc`\>) => [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, `TAcc`\>

#### Type declaration

▸ <`T`, `TAcc`\>(`scanner`, `initialValue`): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, `TAcc`\>

##### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Function2`](../modules/functions.md#function2)<`TAcc`, `T`, `PromiseLike`<`TAcc`\>\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

##### Returns

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, `TAcc`\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[scanLast](containers.ContainerTypeClass.md#scanlast)

___

## Transform Properties

### toObservable

• **toObservable**: <T\>() => [`Function1`](../modules/functions.md#function1)<`PromiseLike`<`T`\>, [`ObservableLike`](types.ObservableLike.md)<`T`\>\>

#### Type declaration

▸ <`T`\>(): [`Function1`](../modules/functions.md#function1)<`PromiseLike`<`T`\>, [`ObservableLike`](types.ObservableLike.md)<`T`\>\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`Function1`](../modules/functions.md#function1)<`PromiseLike`<`T`\>, [`ObservableLike`](types.ObservableLike.md)<`T`\>\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[toObservable](containers.ContainerTypeClass.md#toobservable)

## Constructor Methods

### zip

▸ **zip**<`TA`, `TB`\>(`a`, `b`): `PromiseLike`<readonly [`TA`, `TB`]\>

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
| `a` | `PromiseLike`<`TA`\> |
| `b` | `PromiseLike`<`TB`\> |

#### Returns

`PromiseLike`<readonly [`TA`, `TB`]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[zip](containers.ContainerTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): `PromiseLike`<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `PromiseLike`<`TA`\> |
| `b` | `PromiseLike`<`TB`\> |
| `c` | `PromiseLike`<`TC`\> |

#### Returns

`PromiseLike`<readonly [`TA`, `TB`, `TC`]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[zip](containers.ContainerTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): `PromiseLike`<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | `PromiseLike`<`TA`\> |
| `b` | `PromiseLike`<`TB`\> |
| `c` | `PromiseLike`<`TC`\> |
| `d` | `PromiseLike`<`TD`\> |

#### Returns

`PromiseLike`<readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[zip](containers.ContainerTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): `PromiseLike`<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | `PromiseLike`<`TA`\> |
| `b` | `PromiseLike`<`TB`\> |
| `c` | `PromiseLike`<`TC`\> |
| `d` | `PromiseLike`<`TD`\> |
| `e` | `PromiseLike`<`TE`\> |

#### Returns

`PromiseLike`<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[zip](containers.ContainerTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): `PromiseLike`<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | `PromiseLike`<`TA`\> |
| `b` | `PromiseLike`<`TB`\> |
| `c` | `PromiseLike`<`TC`\> |
| `d` | `PromiseLike`<`TD`\> |
| `e` | `PromiseLike`<`TE`\> |
| `f` | `PromiseLike`<`TF`\> |

#### Returns

`PromiseLike`<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[zip](containers.ContainerTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): `PromiseLike`<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | `PromiseLike`<`TA`\> |
| `b` | `PromiseLike`<`TB`\> |
| `c` | `PromiseLike`<`TC`\> |
| `d` | `PromiseLike`<`TD`\> |
| `e` | `PromiseLike`<`TE`\> |
| `f` | `PromiseLike`<`TF`\> |
| `g` | `PromiseLike`<`TG`\> |

#### Returns

`PromiseLike`<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[zip](containers.ContainerTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): `PromiseLike`<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | `PromiseLike`<`TA`\> |
| `b` | `PromiseLike`<`TB`\> |
| `c` | `PromiseLike`<`TC`\> |
| `d` | `PromiseLike`<`TD`\> |
| `e` | `PromiseLike`<`TE`\> |
| `f` | `PromiseLike`<`TF`\> |
| `g` | `PromiseLike`<`TG`\> |
| `h` | `PromiseLike`<`TH`\> |

#### Returns

`PromiseLike`<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[zip](containers.ContainerTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): `PromiseLike`<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | `PromiseLike`<`TA`\> |
| `b` | `PromiseLike`<`TB`\> |
| `c` | `PromiseLike`<`TC`\> |
| `d` | `PromiseLike`<`TD`\> |
| `e` | `PromiseLike`<`TE`\> |
| `f` | `PromiseLike`<`TF`\> |
| `g` | `PromiseLike`<`TG`\> |
| `h` | `PromiseLike`<`TH`\> |
| `i` | `PromiseLike`<`TI`\> |

#### Returns

`PromiseLike`<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[zip](containers.ContainerTypeClass.md#zip)

___

## Operator Methods

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, `T`\>

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

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, `T`\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[distinctUntilChanged](containers.ContainerTypeClass.md#distinctuntilchanged)

___

### forEach

▸ **forEach**<`T`\>(`effect`): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, `T`\>

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

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, `T`\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[forEach](containers.ContainerTypeClass.md#foreach)

___

### forkZip

▸ **forkZip**<`T`, `TA`, `TB`\>(`a`, `b`): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, `TB`\> |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, readonly [`TA`, `TB`]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[forkZip](containers.ContainerTypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`]\>

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
| `a` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, `TC`\> |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[forkZip](containers.ContainerTypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, `TD`\> |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[forkZip](containers.ContainerTypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, `TE`\> |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[forkZip](containers.ContainerTypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, `TE`\> |
| `f` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, `TF`\> |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[forkZip](containers.ContainerTypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, `TE`\> |
| `f` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, `TF`\> |
| `g` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, `TG`\> |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[forkZip](containers.ContainerTypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, `TE`\> |
| `f` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, `TF`\> |
| `g` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, `TG`\> |
| `h` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, `TH`\> |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[forkZip](containers.ContainerTypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, `TE`\> |
| `f` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, `TF`\> |
| `g` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, `TG`\> |
| `h` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, `TH`\> |
| `i` | [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, `TI`\> |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[forkZip](containers.ContainerTypeClass.md#forkzip)

___

### identity

▸ **identity**<`T`\>(): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, `T`\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[identity](containers.ContainerTypeClass.md#identity)

___

### ignoreElements

▸ **ignoreElements**<`T`\>(): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `unknown`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `unknown`, `T`\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[ignoreElements](containers.ContainerTypeClass.md#ignoreelements)

___

### keep

▸ **keep**<`T`\>(`predicate`): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, `T`\>

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

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, `T`\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[keep](containers.ContainerTypeClass.md#keep)

___

### keepType

▸ **keepType**<`TA`, `TB`\>(`predicate`): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `TA`, `TB`\>

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

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `TA`, `TB`\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[keepType](containers.ContainerTypeClass.md#keeptype)

___

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `TA`, `TB`\>

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

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `TA`, `TB`\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[map](containers.ContainerTypeClass.md#map)

___

### mapTo

▸ **mapTo**<`TA`, `TB`\>(`value`): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `TA`, `TB`\>

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

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `TA`, `TB`\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[mapTo](containers.ContainerTypeClass.md#mapto)

___

### pairwise

▸ **pairwise**<`T`\>(): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, readonly [`T`, `T`]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, readonly [`T`, `T`]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[pairwise](containers.ContainerTypeClass.md#pairwise)

___

### pick

▸ **pick**<`T`, `TKey`\>(`key`): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, `T`[`TKey`]\>

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

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, `T`[`TKey`]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[pick](containers.ContainerTypeClass.md#pick)

▸ **pick**<`T`, `TKeyA`, `TKeyB`\>(`keyA`, `keyB`): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

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

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[pick](containers.ContainerTypeClass.md#pick)

▸ **pick**<`T`, `TKeyA`, `TKeyB`, `TKeyC`\>(`keyA`, `keyB`, `keyC`): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

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

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[pick](containers.ContainerTypeClass.md#pick)

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, `TAcc`\>

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

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, `TAcc`\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[scan](containers.ContainerTypeClass.md#scan)

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, `T`\>

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

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, `T`\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[skipFirst](containers.ContainerTypeClass.md#skipfirst)

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, `T`\>

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

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, `T`\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[takeFirst](containers.ContainerTypeClass.md#takefirst)

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, `T`\>

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

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, `T`\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[takeLast](containers.ContainerTypeClass.md#takelast)

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, `T`\>

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

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `T`, `T`\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[takeWhile](containers.ContainerTypeClass.md#takewhile)

___

### zipWith

▸ **zipWith**<`TA`, `TB`\>(`b`): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `TA`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `PromiseLike`<`TB`\> |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `TA`, readonly [`TA`, `TB`]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[zipWith](containers.ContainerTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`\>(`b`, `c`): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `PromiseLike`<`TB`\> |
| `c` | `PromiseLike`<`TC`\> |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[zipWith](containers.ContainerTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`\>(`b`, `c`, `d`): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `b` | `PromiseLike`<`TB`\> |
| `c` | `PromiseLike`<`TC`\> |
| `d` | `PromiseLike`<`TD`\> |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[zipWith](containers.ContainerTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`b`, `c`, `d`, `e`): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `b` | `PromiseLike`<`TB`\> |
| `c` | `PromiseLike`<`TC`\> |
| `d` | `PromiseLike`<`TD`\> |
| `e` | `PromiseLike`<`TE`\> |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[zipWith](containers.ContainerTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`b`, `c`, `d`, `e`, `f`): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `b` | `PromiseLike`<`TB`\> |
| `c` | `PromiseLike`<`TC`\> |
| `d` | `PromiseLike`<`TD`\> |
| `e` | `PromiseLike`<`TE`\> |
| `f` | `PromiseLike`<`TF`\> |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[zipWith](containers.ContainerTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`b`, `c`, `d`, `e`, `f`, `g`): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `b` | `PromiseLike`<`TB`\> |
| `c` | `PromiseLike`<`TC`\> |
| `d` | `PromiseLike`<`TD`\> |
| `e` | `PromiseLike`<`TE`\> |
| `f` | `PromiseLike`<`TF`\> |
| `g` | `PromiseLike`<`TG`\> |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[zipWith](containers.ContainerTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `b` | `PromiseLike`<`TB`\> |
| `c` | `PromiseLike`<`TC`\> |
| `d` | `PromiseLike`<`TD`\> |
| `e` | `PromiseLike`<`TE`\> |
| `f` | `PromiseLike`<`TF`\> |
| `g` | `PromiseLike`<`TG`\> |
| `h` | `PromiseLike`<`TH`\> |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[zipWith](containers.ContainerTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `b` | `PromiseLike`<`TB`\> |
| `c` | `PromiseLike`<`TC`\> |
| `d` | `PromiseLike`<`TD`\> |
| `e` | `PromiseLike`<`TE`\> |
| `f` | `PromiseLike`<`TF`\> |
| `g` | `PromiseLike`<`TG`\> |
| `h` | `PromiseLike`<`TH`\> |
| `i` | `PromiseLike`<`TI`\> |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<[`Type`](containers.PromiseContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[zipWith](containers.ContainerTypeClass.md#zipwith)

___

## Transform Methods

### firstAsync

▸ **firstAsync**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`PromiseLike`<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`PromiseLike`<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[firstAsync](containers.ContainerTypeClass.md#firstasync)

___

### lastAsync

▸ **lastAsync**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`PromiseLike`<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`PromiseLike`<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[lastAsync](containers.ContainerTypeClass.md#lastasync)
