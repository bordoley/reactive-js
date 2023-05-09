[Reactive-JS](../README.md) / [containers](../modules/containers.md) / [PauseableObservableContainer](../modules/containers.PauseableObservableContainer.md) / TypeClass

# Interface: TypeClass

[containers](../modules/containers.md).[PauseableObservableContainer](../modules/containers.PauseableObservableContainer.md).TypeClass

## Hierarchy

- [`ObservableTypeClass`](containers.ObservableTypeClass.md)<[`Type`](containers.PauseableObservableContainer.Type.md)\>

  ↳ **`TypeClass`**

## Table of contents

### Operator Properties

- [buffer](containers.PauseableObservableContainer.TypeClass.md#buffer)
- [exhaust](containers.PauseableObservableContainer.TypeClass.md#exhaust)
- [exhaustMap](containers.PauseableObservableContainer.TypeClass.md#exhaustmap)
- [flatMapIterable](containers.PauseableObservableContainer.TypeClass.md#flatmapiterable)
- [mergeAll](containers.PauseableObservableContainer.TypeClass.md#mergeall)
- [mergeMap](containers.PauseableObservableContainer.TypeClass.md#mergemap)
- [mergeWith](containers.PauseableObservableContainer.TypeClass.md#mergewith)
- [scanLast](containers.PauseableObservableContainer.TypeClass.md#scanlast)
- [scanMany](containers.PauseableObservableContainer.TypeClass.md#scanmany)
- [switchAll](containers.PauseableObservableContainer.TypeClass.md#switchall)
- [switchMap](containers.PauseableObservableContainer.TypeClass.md#switchmap)

### Transform Properties

- [toObservable](containers.PauseableObservableContainer.TypeClass.md#toobservable)

### Constructor Methods

- [combineLatest](containers.PauseableObservableContainer.TypeClass.md#combinelatest)
- [defer](containers.PauseableObservableContainer.TypeClass.md#defer)
- [merge](containers.PauseableObservableContainer.TypeClass.md#merge)
- [never](containers.PauseableObservableContainer.TypeClass.md#never)
- [throws](containers.PauseableObservableContainer.TypeClass.md#throws)
- [zip](containers.PauseableObservableContainer.TypeClass.md#zip)
- [zipLatest](containers.PauseableObservableContainer.TypeClass.md#ziplatest)

### Operator Methods

- [backpressureStrategy](containers.PauseableObservableContainer.TypeClass.md#backpressurestrategy)
- [catchError](containers.PauseableObservableContainer.TypeClass.md#catcherror)
- [decodeWithCharset](containers.PauseableObservableContainer.TypeClass.md#decodewithcharset)
- [dispatchTo](containers.PauseableObservableContainer.TypeClass.md#dispatchto)
- [distinctUntilChanged](containers.PauseableObservableContainer.TypeClass.md#distinctuntilchanged)
- [encodeUtf8](containers.PauseableObservableContainer.TypeClass.md#encodeutf8)
- [enqueue](containers.PauseableObservableContainer.TypeClass.md#enqueue)
- [forEach](containers.PauseableObservableContainer.TypeClass.md#foreach)
- [forkCombineLatest](containers.PauseableObservableContainer.TypeClass.md#forkcombinelatest)
- [forkMerge](containers.PauseableObservableContainer.TypeClass.md#forkmerge)
- [forkZip](containers.PauseableObservableContainer.TypeClass.md#forkzip)
- [forkZipLatest](containers.PauseableObservableContainer.TypeClass.md#forkziplatest)
- [identity](containers.PauseableObservableContainer.TypeClass.md#identity)
- [ignoreElements](containers.PauseableObservableContainer.TypeClass.md#ignoreelements)
- [keep](containers.PauseableObservableContainer.TypeClass.md#keep)
- [keepType](containers.PauseableObservableContainer.TypeClass.md#keeptype)
- [map](containers.PauseableObservableContainer.TypeClass.md#map)
- [mapTo](containers.PauseableObservableContainer.TypeClass.md#mapto)
- [pairwise](containers.PauseableObservableContainer.TypeClass.md#pairwise)
- [pick](containers.PauseableObservableContainer.TypeClass.md#pick)
- [scan](containers.PauseableObservableContainer.TypeClass.md#scan)
- [skipFirst](containers.PauseableObservableContainer.TypeClass.md#skipfirst)
- [takeFirst](containers.PauseableObservableContainer.TypeClass.md#takefirst)
- [takeLast](containers.PauseableObservableContainer.TypeClass.md#takelast)
- [takeUntil](containers.PauseableObservableContainer.TypeClass.md#takeuntil)
- [takeWhile](containers.PauseableObservableContainer.TypeClass.md#takewhile)
- [throttle](containers.PauseableObservableContainer.TypeClass.md#throttle)
- [throwIfEmpty](containers.PauseableObservableContainer.TypeClass.md#throwifempty)
- [timeout](containers.PauseableObservableContainer.TypeClass.md#timeout)
- [withCurrentTime](containers.PauseableObservableContainer.TypeClass.md#withcurrenttime)
- [withLatestFrom](containers.PauseableObservableContainer.TypeClass.md#withlatestfrom)
- [zipWith](containers.PauseableObservableContainer.TypeClass.md#zipwith)
- [zipWithLatestFrom](containers.PauseableObservableContainer.TypeClass.md#zipwithlatestfrom)

### Transform Methods

- [firstAsync](containers.PauseableObservableContainer.TypeClass.md#firstasync)
- [lastAsync](containers.PauseableObservableContainer.TypeClass.md#lastasync)

## Operator Properties

### buffer

• **buffer**: <T\>(`options?`: { `count?`: `number`  }) => [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly `T`[]\>

#### Type declaration

▸ <`T`\>(`options?`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly `T`[]\>

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

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly `T`[]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[buffer](containers.ObservableTypeClass.md#buffer)

___

### exhaust

• **exhaust**: <T\>() => [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), [`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\>, `T`\>

#### Type declaration

▸ <`T`\>(): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), [`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\>, `T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), [`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\>, `T`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[exhaust](containers.ObservableTypeClass.md#exhaust)

___

### exhaustMap

• **exhaustMap**: <TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\>\>) => [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `TA`, `TB`\>

#### Type declaration

▸ <`TA`, `TB`\>(`selector`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `TA`, `TB`\>

##### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\>\> |

##### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `TA`, `TB`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[exhaustMap](containers.ObservableTypeClass.md#exhaustmap)

___

### flatMapIterable

• **flatMapIterable**: <TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, `Iterable`<`TB`\>\>) => [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `TA`, `TB`\>

#### Type declaration

▸ <`TA`, `TB`\>(`selector`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `TA`, `TB`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `TA`, `TB`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[flatMapIterable](containers.ObservableTypeClass.md#flatmapiterable)

___

### mergeAll

• **mergeAll**: <T\>(`options?`: { `backpressureStrategy?`: ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` ; `capacity?`: `number` ; `concurrency?`: `number`  }) => [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), [`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\>, `T`\>

#### Type declaration

▸ <`T`\>(`options?`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), [`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\>, `T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.concurrency?` | `number` |

##### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), [`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\>, `T`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[mergeAll](containers.ObservableTypeClass.md#mergeall)

___

### mergeMap

• **mergeMap**: <TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\>\>, `options?`: { `backpressureStrategy?`: ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` ; `capacity?`: `number` ; `concurrency?`: `number`  }) => [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `TA`, `TB`\>

#### Type declaration

▸ <`TA`, `TB`\>(`selector`, `options?`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `TA`, `TB`\>

##### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\>\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.concurrency?` | `number` |

##### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `TA`, `TB`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[mergeMap](containers.ObservableTypeClass.md#mergemap)

___

### mergeWith

• **mergeWith**: <T\>(`snd`: [`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\>, ...`tail`: readonly [`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\>[]) => [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `T`\>

#### Type declaration

▸ <`T`\>(`snd`, `...tail`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\> |
| `...tail` | readonly [`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\>[] |

##### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `T`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[mergeWith](containers.ObservableTypeClass.md#mergewith)

___

### scanLast

• **scanLast**: <T, TAcc\>(`scanner`: [`Function2`](../modules/functions.md#function2)<`TAcc`, `T`, [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TAcc`\>\>, `initialValue`: [`Factory`](../modules/functions.md#factory)<`TAcc`\>) => [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TAcc`\>

#### Type declaration

▸ <`T`, `TAcc`\>(`scanner`, `initialValue`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TAcc`\>

##### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Function2`](../modules/functions.md#function2)<`TAcc`, `T`, [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TAcc`\>\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

##### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TAcc`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[scanLast](containers.ObservableTypeClass.md#scanlast)

___

### scanMany

• **scanMany**: <T, TAcc\>(`scanner`: [`Function2`](../modules/functions.md#function2)<`TAcc`, `T`, [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TAcc`\>\>, `initialValue`: [`Factory`](../modules/functions.md#factory)<`TAcc`\>) => [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TAcc`\>

#### Type declaration

▸ <`T`, `TAcc`\>(`scanner`, `initialValue`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TAcc`\>

##### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Function2`](../modules/functions.md#function2)<`TAcc`, `T`, [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TAcc`\>\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

##### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TAcc`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[scanMany](containers.ObservableTypeClass.md#scanmany)

___

### switchAll

• **switchAll**: <T\>() => [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), [`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\>, `T`\>

#### Type declaration

▸ <`T`\>(): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), [`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\>, `T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), [`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\>, `T`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[switchAll](containers.ObservableTypeClass.md#switchall)

___

### switchMap

• **switchMap**: <TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\>\>) => [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `TA`, `TB`\>

#### Type declaration

▸ <`TA`, `TB`\>(`selector`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `TA`, `TB`\>

##### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\>\> |

##### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `TA`, `TB`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[switchMap](containers.ObservableTypeClass.md#switchmap)

___

## Transform Properties

### toObservable

• **toObservable**: <T\>() => [`Function1`](../modules/functions.md#function1)<[`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\>, [`ObservableLike`](types.ObservableLike.md)<`T`\>\>

#### Type declaration

▸ <`T`\>(): [`Function1`](../modules/functions.md#function1)<[`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\>, [`ObservableLike`](types.ObservableLike.md)<`T`\>\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`Function1`](../modules/functions.md#function1)<[`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\>, [`ObservableLike`](types.ObservableLike.md)<`T`\>\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[toObservable](containers.ObservableTypeClass.md#toobservable)

## Constructor Methods

### combineLatest

▸ **combineLatest**<`TA`, `TB`\>(`a`, `b`): [`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TA`\> |
| `b` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\> |

#### Returns

[`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[combineLatest](containers.ObservableTypeClass.md#combinelatest)

▸ **combineLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TA`\> |
| `b` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\> |
| `c` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TC`\> |

#### Returns

[`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[combineLatest](containers.ObservableTypeClass.md#combinelatest)

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TA`\> |
| `b` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\> |
| `c` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TC`\> |
| `d` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TD`\> |

#### Returns

[`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[combineLatest](containers.ObservableTypeClass.md#combinelatest)

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TA`\> |
| `b` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\> |
| `c` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TC`\> |
| `d` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TD`\> |
| `e` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TE`\> |

#### Returns

[`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[combineLatest](containers.ObservableTypeClass.md#combinelatest)

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TA`\> |
| `b` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\> |
| `c` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TC`\> |
| `d` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TD`\> |
| `e` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TE`\> |
| `f` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TF`\> |

#### Returns

[`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[combineLatest](containers.ObservableTypeClass.md#combinelatest)

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TA`\> |
| `b` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\> |
| `c` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TC`\> |
| `d` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TD`\> |
| `e` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TE`\> |
| `f` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TF`\> |
| `g` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TG`\> |

#### Returns

[`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[combineLatest](containers.ObservableTypeClass.md#combinelatest)

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TA`\> |
| `b` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\> |
| `c` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TC`\> |
| `d` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TD`\> |
| `e` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TE`\> |
| `f` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TF`\> |
| `g` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TG`\> |
| `h` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TH`\> |

#### Returns

[`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[combineLatest](containers.ObservableTypeClass.md#combinelatest)

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TA`\> |
| `b` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\> |
| `c` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TC`\> |
| `d` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TD`\> |
| `e` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TE`\> |
| `f` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TF`\> |
| `g` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TG`\> |
| `h` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TH`\> |
| `i` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TI`\> |

#### Returns

[`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[combineLatest](containers.ObservableTypeClass.md#combinelatest)

___

### defer

▸ **defer**<`T`\>(`factory`): [`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](../modules/functions.md#factory)<[`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\>\> |

#### Returns

[`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[defer](containers.ObservableTypeClass.md#defer)

___

### merge

▸ **merge**<`T`\>(`fst`, `snd`, `...tail`): [`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\> |
| `snd` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\> |
| `...tail` | readonly [`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\>[] |

#### Returns

[`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[merge](containers.ObservableTypeClass.md#merge)

___

### never

▸ **never**<`T`\>(): [`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\>

Returns a Container instance that emits no items and never disposes its state.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[never](containers.ObservableTypeClass.md#never)

___

### throws

▸ **throws**<`T`\>(`options?`): [`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.raise?` | [`Factory`](../modules/functions.md#factory)<`unknown`\> |

#### Returns

[`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[throws](containers.ObservableTypeClass.md#throws)

___

### zip

▸ **zip**<`TA`, `TB`\>(`a`, `b`): [`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`]\>

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
| `a` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TA`\> |
| `b` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\> |

#### Returns

[`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[zip](containers.ObservableTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TA`\> |
| `b` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\> |
| `c` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TC`\> |

#### Returns

[`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[zip](containers.ObservableTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TA`\> |
| `b` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\> |
| `c` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TC`\> |
| `d` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TD`\> |

#### Returns

[`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[zip](containers.ObservableTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TA`\> |
| `b` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\> |
| `c` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TC`\> |
| `d` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TD`\> |
| `e` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TE`\> |

#### Returns

[`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[zip](containers.ObservableTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TA`\> |
| `b` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\> |
| `c` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TC`\> |
| `d` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TD`\> |
| `e` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TE`\> |
| `f` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TF`\> |

#### Returns

[`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[zip](containers.ObservableTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TA`\> |
| `b` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\> |
| `c` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TC`\> |
| `d` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TD`\> |
| `e` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TE`\> |
| `f` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TF`\> |
| `g` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TG`\> |

#### Returns

[`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[zip](containers.ObservableTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TA`\> |
| `b` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\> |
| `c` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TC`\> |
| `d` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TD`\> |
| `e` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TE`\> |
| `f` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TF`\> |
| `g` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TG`\> |
| `h` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TH`\> |

#### Returns

[`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[zip](containers.ObservableTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TA`\> |
| `b` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\> |
| `c` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TC`\> |
| `d` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TD`\> |
| `e` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TE`\> |
| `f` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TF`\> |
| `g` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TG`\> |
| `h` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TH`\> |
| `i` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TI`\> |

#### Returns

[`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[zip](containers.ObservableTypeClass.md#zip)

___

### zipLatest

▸ **zipLatest**<`TA`, `TB`\>(`a`, `b`): [`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`]\>

Returns a container that zips the latest values from
multiple sources.

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TA`\> |
| `b` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\> |

#### Returns

[`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[zipLatest](containers.ObservableTypeClass.md#ziplatest)

▸ **zipLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TA`\> |
| `b` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\> |
| `c` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TC`\> |

#### Returns

[`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[zipLatest](containers.ObservableTypeClass.md#ziplatest)

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TA`\> |
| `b` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\> |
| `c` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TC`\> |
| `d` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TD`\> |

#### Returns

[`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[zipLatest](containers.ObservableTypeClass.md#ziplatest)

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TA`\> |
| `b` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\> |
| `c` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TC`\> |
| `d` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TD`\> |
| `e` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TE`\> |

#### Returns

[`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[zipLatest](containers.ObservableTypeClass.md#ziplatest)

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TA`\> |
| `b` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\> |
| `c` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TC`\> |
| `d` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TD`\> |
| `e` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TE`\> |
| `f` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TF`\> |

#### Returns

[`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[zipLatest](containers.ObservableTypeClass.md#ziplatest)

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TA`\> |
| `b` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\> |
| `c` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TC`\> |
| `d` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TD`\> |
| `e` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TE`\> |
| `f` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TF`\> |
| `g` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TG`\> |

#### Returns

[`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[zipLatest](containers.ObservableTypeClass.md#ziplatest)

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TA`\> |
| `b` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\> |
| `c` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TC`\> |
| `d` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TD`\> |
| `e` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TE`\> |
| `f` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TF`\> |
| `g` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TG`\> |
| `h` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TH`\> |

#### Returns

[`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[zipLatest](containers.ObservableTypeClass.md#ziplatest)

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TA`\> |
| `b` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\> |
| `c` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TC`\> |
| `d` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TD`\> |
| `e` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TE`\> |
| `f` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TF`\> |
| `g` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TG`\> |
| `h` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TH`\> |
| `i` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TI`\> |

#### Returns

[`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[zipLatest](containers.ObservableTypeClass.md#ziplatest)

___

## Operator Methods

### backpressureStrategy

▸ **backpressureStrategy**<`T`\>(`capacity`, `backpressureStrategy`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `capacity` | `number` |
| `backpressureStrategy` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `T`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[backpressureStrategy](containers.ObservableTypeClass.md#backpressurestrategy)

___

### catchError

▸ **catchError**<`T`\>(`onError`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `T`\>

Returns a Container which catches errors produced by the source and either continues with
the Container returned from the `onError` callback or swallows the error if
void is returned.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `onError` | [`Function1`](../modules/functions.md#function1)<`unknown`, `void` \| [`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\>\> | A function that takes source error and either returns a Container to continue with or void if the error should be propagated. |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `T`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[catchError](containers.ObservableTypeClass.md#catcherror)

___

### decodeWithCharset

▸ **decodeWithCharset**(`options?`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `ArrayBuffer`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.charset?` | `string` |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `ArrayBuffer`, `string`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[decodeWithCharset](containers.ObservableTypeClass.md#decodewithcharset)

___

### dispatchTo

▸ **dispatchTo**<`T`\>(`dispatcher`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatcher` | [`DispatcherLike`](types.DispatcherLike.md)<`T`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `T`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[dispatchTo](containers.ObservableTypeClass.md#dispatchto)

___

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `T`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `T`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[distinctUntilChanged](containers.ObservableTypeClass.md#distinctuntilchanged)

___

### encodeUtf8

▸ **encodeUtf8**(): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `string`, `Uint8Array`\>

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `string`, `Uint8Array`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[encodeUtf8](containers.ObservableTypeClass.md#encodeutf8)

___

### enqueue

▸ **enqueue**<`T`\>(`queue`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `queue` | [`QueueableLike`](types.QueueableLike.md)<`T`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `T`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[enqueue](containers.ObservableTypeClass.md#enqueue)

___

### forEach

▸ **forEach**<`T`\>(`effect`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `T`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `T`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[forEach](containers.ObservableTypeClass.md#foreach)

___

### forkCombineLatest

▸ **forkCombineLatest**<`T`, `TA`, `TB`\>(`a`, `b`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TB`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[forkCombineLatest](containers.ObservableTypeClass.md#forkcombinelatest)

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TC`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[forkCombineLatest](containers.ObservableTypeClass.md#forkcombinelatest)

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TD`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[forkCombineLatest](containers.ObservableTypeClass.md#forkcombinelatest)

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TE`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[forkCombineLatest](containers.ObservableTypeClass.md#forkcombinelatest)

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TE`\> |
| `f` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TF`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[forkCombineLatest](containers.ObservableTypeClass.md#forkcombinelatest)

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TE`\> |
| `f` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TF`\> |
| `g` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TG`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[forkCombineLatest](containers.ObservableTypeClass.md#forkcombinelatest)

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TE`\> |
| `f` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TF`\> |
| `g` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TG`\> |
| `h` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TH`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[forkCombineLatest](containers.ObservableTypeClass.md#forkcombinelatest)

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TE`\> |
| `f` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TF`\> |
| `g` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TG`\> |
| `h` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TH`\> |
| `i` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TI`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[forkCombineLatest](containers.ObservableTypeClass.md#forkcombinelatest)

___

### forkMerge

▸ **forkMerge**<`TIn`, `TOut`\>(`fst`, `snd`, `...tail`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `TIn`, `TOut`\>

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `TIn`, `TOut`\> |
| `snd` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `TIn`, `TOut`\> |
| `...tail` | readonly [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `TIn`, `TOut`\>[] |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `TIn`, `TOut`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[forkMerge](containers.ObservableTypeClass.md#forkmerge)

___

### forkZip

▸ **forkZip**<`T`, `TA`, `TB`\>(`a`, `b`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TB`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[forkZip](containers.ObservableTypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TC`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[forkZip](containers.ObservableTypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TD`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[forkZip](containers.ObservableTypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TE`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[forkZip](containers.ObservableTypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TE`\> |
| `f` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TF`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[forkZip](containers.ObservableTypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TE`\> |
| `f` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TF`\> |
| `g` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TG`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[forkZip](containers.ObservableTypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TE`\> |
| `f` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TF`\> |
| `g` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TG`\> |
| `h` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TH`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[forkZip](containers.ObservableTypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TE`\> |
| `f` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TF`\> |
| `g` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TG`\> |
| `h` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TH`\> |
| `i` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TI`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[forkZip](containers.ObservableTypeClass.md#forkzip)

___

### forkZipLatest

▸ **forkZipLatest**<`T`, `TA`, `TB`\>(`a`, `b`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TB`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[forkZipLatest](containers.ObservableTypeClass.md#forkziplatest)

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TC`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[forkZipLatest](containers.ObservableTypeClass.md#forkziplatest)

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TD`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[forkZipLatest](containers.ObservableTypeClass.md#forkziplatest)

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TE`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[forkZipLatest](containers.ObservableTypeClass.md#forkziplatest)

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TE`\> |
| `f` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TF`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[forkZipLatest](containers.ObservableTypeClass.md#forkziplatest)

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TE`\> |
| `f` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TF`\> |
| `g` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TG`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[forkZipLatest](containers.ObservableTypeClass.md#forkziplatest)

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TE`\> |
| `f` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TF`\> |
| `g` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TG`\> |
| `h` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TH`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[forkZipLatest](containers.ObservableTypeClass.md#forkziplatest)

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TE`\> |
| `f` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TF`\> |
| `g` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TG`\> |
| `h` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TH`\> |
| `i` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TI`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[forkZipLatest](containers.ObservableTypeClass.md#forkziplatest)

___

### identity

▸ **identity**<`T`\>(): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `T`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[identity](containers.ObservableTypeClass.md#identity)

___

### ignoreElements

▸ **ignoreElements**<`T`\>(): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `unknown`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `unknown`, `T`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[ignoreElements](containers.ObservableTypeClass.md#ignoreelements)

___

### keep

▸ **keep**<`T`\>(`predicate`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `T`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `T`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[keep](containers.ObservableTypeClass.md#keep)

___

### keepType

▸ **keepType**<`TA`, `TB`\>(`predicate`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `TA`, `TB`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `TA`, `TB`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[keepType](containers.ObservableTypeClass.md#keeptype)

___

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `TA`, `TB`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `TA`, `TB`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[map](containers.ObservableTypeClass.md#map)

___

### mapTo

▸ **mapTo**<`TA`, `TB`\>(`value`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `TA`, `TB`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `TA`, `TB`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[mapTo](containers.ObservableTypeClass.md#mapto)

___

### pairwise

▸ **pairwise**<`T`\>(): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`T`, `T`]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`T`, `T`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[pairwise](containers.ObservableTypeClass.md#pairwise)

___

### pick

▸ **pick**<`T`, `TKey`\>(`key`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `T`[`TKey`]\>

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

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `T`[`TKey`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[pick](containers.ObservableTypeClass.md#pick)

▸ **pick**<`T`, `TKeyA`, `TKeyB`\>(`keyA`, `keyB`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

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

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[pick](containers.ObservableTypeClass.md#pick)

▸ **pick**<`T`, `TKeyA`, `TKeyB`, `TKeyC`\>(`keyA`, `keyB`, `keyC`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

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

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[pick](containers.ObservableTypeClass.md#pick)

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TAcc`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TAcc`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[scan](containers.ObservableTypeClass.md#scan)

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `T`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `T`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[skipFirst](containers.ObservableTypeClass.md#skipfirst)

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `T`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `T`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[takeFirst](containers.ObservableTypeClass.md#takefirst)

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `T`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `T`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[takeLast](containers.ObservableTypeClass.md#takelast)

___

### takeUntil

▸ **takeUntil**<`T`\>(`notifier`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `notifier` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`unknown`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `T`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[takeUntil](containers.ObservableTypeClass.md#takeuntil)

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `T`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `T`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[takeWhile](containers.ObservableTypeClass.md#takewhile)

___

### throttle

▸ **throttle**<`T`\>(`duration`, `options?`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `T`\>

Emits a value from the source, then ignores subsequent source values for a duration determined by another observable.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `duration` | [`Function1`](../modules/functions.md#function1)<`T`, [`PauseableObservableLike`](types.PauseableObservableLike.md)<`unknown`\>\> | Function function that is used to determine the silence duration in between emitted values. |
| `options?` | `Object` | - |
| `options.mode?` | ``"interval"`` \| ``"first"`` \| ``"last"`` | - |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `T`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[throttle](containers.ObservableTypeClass.md#throttle)

▸ **throttle**<`T`\>(`duration`, `options?`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `T`\>

Returns an `ObservableLike` which emits a value from the source,
then ignores subsequent source values for `duration` milliseconds.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `duration` | `number` | Time to wait before emitting another value after emitting the last value, measured in milliseconds. |
| `options?` | `Object` | - |
| `options.mode?` | ``"interval"`` \| ``"first"`` \| ``"last"`` | - |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `T`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[throttle](containers.ObservableTypeClass.md#throttle)

___

### throwIfEmpty

▸ **throwIfEmpty**<`T`\>(`factory`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `T`\>

Returns a Container that emits an error if the source completes without emitting a value.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `factory` | [`Factory`](../modules/functions.md#factory)<`unknown`\> | A factory function invoked to produce the error to be thrown. |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `T`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[throwIfEmpty](containers.ObservableTypeClass.md#throwifempty)

___

### timeout

▸ **timeout**<`T`\>(`duration`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `T`\>

Returns an `ObservableLike` that completes with an error if the source
does not emit a value in given time span.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `duration` | `number` | Time in ms within which the source must emit values. |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `T`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[timeout](containers.ObservableTypeClass.md#timeout)

▸ **timeout**<`T`\>(`duration`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `duration` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`unknown`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `T`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[timeout](containers.ObservableTypeClass.md#timeout)

___

### withCurrentTime

▸ **withCurrentTime**<`T`, `TOut`\>(`selector`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TOut`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function2`](../modules/functions.md#function2)<`number`, `T`, `TOut`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TOut`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[withCurrentTime](containers.ObservableTypeClass.md#withcurrenttime)

___

### withLatestFrom

▸ **withLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `TA`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\> |
| `selector` | [`Function2`](../modules/functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `TA`, `T`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[withLatestFrom](containers.ObservableTypeClass.md#withlatestfrom)

___

### zipWith

▸ **zipWith**<`TA`, `TB`\>(`b`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `TA`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `TA`, readonly [`TA`, `TB`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[zipWith](containers.ObservableTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`\>(`b`, `c`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\> |
| `c` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TC`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[zipWith](containers.ObservableTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`\>(`b`, `c`, `d`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `b` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\> |
| `c` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TC`\> |
| `d` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TD`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[zipWith](containers.ObservableTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`b`, `c`, `d`, `e`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `b` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\> |
| `c` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TC`\> |
| `d` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TD`\> |
| `e` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TE`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[zipWith](containers.ObservableTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`b`, `c`, `d`, `e`, `f`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `b` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\> |
| `c` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TC`\> |
| `d` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TD`\> |
| `e` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TE`\> |
| `f` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TF`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[zipWith](containers.ObservableTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`b`, `c`, `d`, `e`, `f`, `g`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `b` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\> |
| `c` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TC`\> |
| `d` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TD`\> |
| `e` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TE`\> |
| `f` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TF`\> |
| `g` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TG`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[zipWith](containers.ObservableTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `b` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\> |
| `c` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TC`\> |
| `d` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TD`\> |
| `e` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TE`\> |
| `f` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TF`\> |
| `g` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TG`\> |
| `h` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TH`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[zipWith](containers.ObservableTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `b` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\> |
| `c` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TC`\> |
| `d` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TD`\> |
| `e` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TE`\> |
| `f` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TF`\> |
| `g` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TG`\> |
| `h` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TH`\> |
| `i` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TI`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[zipWith](containers.ObservableTypeClass.md#zipwith)

___

### zipWithLatestFrom

▸ **zipWithLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `TA`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\> |
| `selector` | [`Function2`](../modules/functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `TA`, `T`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[zipWithLatestFrom](containers.ObservableTypeClass.md#zipwithlatestfrom)

___

## Transform Methods

### firstAsync

▸ **firstAsync**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[firstAsync](containers.ObservableTypeClass.md#firstasync)

▸ **firstAsync**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

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

[`Function1`](../modules/functions.md#function1)<[`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[firstAsync](containers.ObservableTypeClass.md#firstasync)

___

### lastAsync

▸ **lastAsync**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[lastAsync](containers.ObservableTypeClass.md#lastasync)

▸ **lastAsync**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

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

[`Function1`](../modules/functions.md#function1)<[`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[lastAsync](containers.ObservableTypeClass.md#lastasync)
