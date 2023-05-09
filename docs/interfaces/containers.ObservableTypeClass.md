[Reactive-JS](../README.md) / [containers](../modules/containers.md) / ObservableTypeClass

# Interface: ObservableTypeClass<C\>

[containers](../modules/containers.md).ObservableTypeClass

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Type`](containers.ObservableContainer.Type.md) |

## Hierarchy

- [`ContainerTypeClass`](containers.ContainerTypeClass.md)<`C`\>

- [`StatefulTypeClass`](containers.StatefulTypeClass.md)<`C`\>

  ↳ **`ObservableTypeClass`**

  ↳↳ [`TypeClass`](containers.ObservableContainer.TypeClass.md)

  ↳↳ [`TypeClass`](containers.SharedObservableContainer.TypeClass.md)

  ↳↳ [`TypeClass`](containers.PauseableObservableContainer.TypeClass.md)

  ↳↳ [`DeferredObservableTypeClass`](containers.DeferredObservableTypeClass.md)

## Table of contents

### Operator Properties

- [buffer](containers.ObservableTypeClass.md#buffer)
- [exhaust](containers.ObservableTypeClass.md#exhaust)
- [exhaustMap](containers.ObservableTypeClass.md#exhaustmap)
- [flatMapIterable](containers.ObservableTypeClass.md#flatmapiterable)
- [mergeAll](containers.ObservableTypeClass.md#mergeall)
- [mergeMap](containers.ObservableTypeClass.md#mergemap)
- [mergeWith](containers.ObservableTypeClass.md#mergewith)
- [scanLast](containers.ObservableTypeClass.md#scanlast)
- [scanMany](containers.ObservableTypeClass.md#scanmany)
- [switchAll](containers.ObservableTypeClass.md#switchall)
- [switchMap](containers.ObservableTypeClass.md#switchmap)

### Transform Properties

- [toObservable](containers.ObservableTypeClass.md#toobservable)

### Constructor Methods

- [combineLatest](containers.ObservableTypeClass.md#combinelatest)
- [defer](containers.ObservableTypeClass.md#defer)
- [merge](containers.ObservableTypeClass.md#merge)
- [never](containers.ObservableTypeClass.md#never)
- [throws](containers.ObservableTypeClass.md#throws)
- [zip](containers.ObservableTypeClass.md#zip)
- [zipLatest](containers.ObservableTypeClass.md#ziplatest)

### Operator Methods

- [backpressureStrategy](containers.ObservableTypeClass.md#backpressurestrategy)
- [catchError](containers.ObservableTypeClass.md#catcherror)
- [decodeWithCharset](containers.ObservableTypeClass.md#decodewithcharset)
- [dispatchTo](containers.ObservableTypeClass.md#dispatchto)
- [distinctUntilChanged](containers.ObservableTypeClass.md#distinctuntilchanged)
- [encodeUtf8](containers.ObservableTypeClass.md#encodeutf8)
- [enqueue](containers.ObservableTypeClass.md#enqueue)
- [forEach](containers.ObservableTypeClass.md#foreach)
- [forkCombineLatest](containers.ObservableTypeClass.md#forkcombinelatest)
- [forkMerge](containers.ObservableTypeClass.md#forkmerge)
- [forkZip](containers.ObservableTypeClass.md#forkzip)
- [forkZipLatest](containers.ObservableTypeClass.md#forkziplatest)
- [identity](containers.ObservableTypeClass.md#identity)
- [ignoreElements](containers.ObservableTypeClass.md#ignoreelements)
- [keep](containers.ObservableTypeClass.md#keep)
- [keepType](containers.ObservableTypeClass.md#keeptype)
- [map](containers.ObservableTypeClass.md#map)
- [mapTo](containers.ObservableTypeClass.md#mapto)
- [pairwise](containers.ObservableTypeClass.md#pairwise)
- [pick](containers.ObservableTypeClass.md#pick)
- [scan](containers.ObservableTypeClass.md#scan)
- [skipFirst](containers.ObservableTypeClass.md#skipfirst)
- [takeFirst](containers.ObservableTypeClass.md#takefirst)
- [takeLast](containers.ObservableTypeClass.md#takelast)
- [takeUntil](containers.ObservableTypeClass.md#takeuntil)
- [takeWhile](containers.ObservableTypeClass.md#takewhile)
- [throttle](containers.ObservableTypeClass.md#throttle)
- [throwIfEmpty](containers.ObservableTypeClass.md#throwifempty)
- [timeout](containers.ObservableTypeClass.md#timeout)
- [withCurrentTime](containers.ObservableTypeClass.md#withcurrenttime)
- [withLatestFrom](containers.ObservableTypeClass.md#withlatestfrom)
- [zipWith](containers.ObservableTypeClass.md#zipwith)
- [zipWithLatestFrom](containers.ObservableTypeClass.md#zipwithlatestfrom)

### Transform Methods

- [firstAsync](containers.ObservableTypeClass.md#firstasync)
- [lastAsync](containers.ObservableTypeClass.md#lastasync)

## Operator Properties

### buffer

• **buffer**: <T\>(`options?`: { `count?`: `number`  }) => [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, readonly `T`[]\>

#### Type declaration

▸ <`T`\>(`options?`): [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, readonly `T`[]\>

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

[`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, readonly `T`[]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[buffer](containers.ContainerTypeClass.md#buffer)

___

### exhaust

• **exhaust**: <T\>() => [`Operator`](../modules/containers.Container.md#operator)<`C`, [`Of`](../modules/containers.Container.md#of)<`C`, `T`\>, `T`\>

#### Type declaration

▸ <`T`\>(): [`Operator`](../modules/containers.Container.md#operator)<`C`, [`Of`](../modules/containers.Container.md#of)<`C`, `T`\>, `T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`Operator`](../modules/containers.Container.md#operator)<`C`, [`Of`](../modules/containers.Container.md#of)<`C`, `T`\>, `T`\>

___

### exhaustMap

• **exhaustMap**: <TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, [`Of`](../modules/containers.Container.md#of)<`C`, `TB`\>\>) => [`Operator`](../modules/containers.Container.md#operator)<`C`, `TA`, `TB`\>

#### Type declaration

▸ <`TA`, `TB`\>(`selector`): [`Operator`](../modules/containers.Container.md#operator)<`C`, `TA`, `TB`\>

##### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`Of`](../modules/containers.Container.md#of)<`C`, `TB`\>\> |

##### Returns

[`Operator`](../modules/containers.Container.md#operator)<`C`, `TA`, `TB`\>

___

### flatMapIterable

• **flatMapIterable**: <TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, `Iterable`<`TB`\>\>) => [`Operator`](../modules/containers.Container.md#operator)<`C`, `TA`, `TB`\>

#### Type declaration

▸ <`TA`, `TB`\>(`selector`): [`Operator`](../modules/containers.Container.md#operator)<`C`, `TA`, `TB`\>

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

[`Operator`](../modules/containers.Container.md#operator)<`C`, `TA`, `TB`\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[flatMapIterable](containers.ContainerTypeClass.md#flatmapiterable)

___

### mergeAll

• **mergeAll**: <T\>(`options?`: { `backpressureStrategy?`: ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` ; `capacity?`: `number` ; `concurrency?`: `number`  }) => [`Operator`](../modules/containers.Container.md#operator)<`C`, [`Of`](../modules/containers.Container.md#of)<`C`, `T`\>, `T`\>

#### Type declaration

▸ <`T`\>(`options?`): [`Operator`](../modules/containers.Container.md#operator)<`C`, [`Of`](../modules/containers.Container.md#of)<`C`, `T`\>, `T`\>

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

[`Operator`](../modules/containers.Container.md#operator)<`C`, [`Of`](../modules/containers.Container.md#of)<`C`, `T`\>, `T`\>

___

### mergeMap

• **mergeMap**: <TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, [`Of`](../modules/containers.Container.md#of)<`C`, `TB`\>\>, `options?`: { `backpressureStrategy?`: ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` ; `capacity?`: `number` ; `concurrency?`: `number`  }) => [`Operator`](../modules/containers.Container.md#operator)<`C`, `TA`, `TB`\>

#### Type declaration

▸ <`TA`, `TB`\>(`selector`, `options?`): [`Operator`](../modules/containers.Container.md#operator)<`C`, `TA`, `TB`\>

##### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`Of`](../modules/containers.Container.md#of)<`C`, `TB`\>\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.concurrency?` | `number` |

##### Returns

[`Operator`](../modules/containers.Container.md#operator)<`C`, `TA`, `TB`\>

___

### mergeWith

• **mergeWith**: <T\>(`snd`: [`Of`](../modules/containers.Container.md#of)<`C`, `T`\>, ...`tail`: readonly [`Of`](../modules/containers.Container.md#of)<`C`, `T`\>[]) => [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `T`\>

#### Type declaration

▸ <`T`\>(`snd`, `...tail`): [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`Of`](../modules/containers.Container.md#of)<`C`, `T`\> |
| `...tail` | readonly [`Of`](../modules/containers.Container.md#of)<`C`, `T`\>[] |

##### Returns

[`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `T`\>

___

### scanLast

• **scanLast**: <T, TAcc\>(`scanner`: [`Function2`](../modules/functions.md#function2)<`TAcc`, `T`, [`Of`](../modules/containers.Container.md#of)<`C`, `TAcc`\>\>, `initialValue`: [`Factory`](../modules/functions.md#factory)<`TAcc`\>) => [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TAcc`\>

#### Type declaration

▸ <`T`, `TAcc`\>(`scanner`, `initialValue`): [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TAcc`\>

##### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Function2`](../modules/functions.md#function2)<`TAcc`, `T`, [`Of`](../modules/containers.Container.md#of)<`C`, `TAcc`\>\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

##### Returns

[`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TAcc`\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[scanLast](containers.ContainerTypeClass.md#scanlast)

___

### scanMany

• **scanMany**: <T, TAcc\>(`scanner`: [`Function2`](../modules/functions.md#function2)<`TAcc`, `T`, [`Of`](../modules/containers.Container.md#of)<`C`, `TAcc`\>\>, `initialValue`: [`Factory`](../modules/functions.md#factory)<`TAcc`\>) => [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TAcc`\>

#### Type declaration

▸ <`T`, `TAcc`\>(`scanner`, `initialValue`): [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TAcc`\>

##### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Function2`](../modules/functions.md#function2)<`TAcc`, `T`, [`Of`](../modules/containers.Container.md#of)<`C`, `TAcc`\>\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

##### Returns

[`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TAcc`\>

___

### switchAll

• **switchAll**: <T\>() => [`Operator`](../modules/containers.Container.md#operator)<`C`, [`Of`](../modules/containers.Container.md#of)<`C`, `T`\>, `T`\>

#### Type declaration

▸ <`T`\>(): [`Operator`](../modules/containers.Container.md#operator)<`C`, [`Of`](../modules/containers.Container.md#of)<`C`, `T`\>, `T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`Operator`](../modules/containers.Container.md#operator)<`C`, [`Of`](../modules/containers.Container.md#of)<`C`, `T`\>, `T`\>

___

### switchMap

• **switchMap**: <TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, [`Of`](../modules/containers.Container.md#of)<`C`, `TB`\>\>) => [`Operator`](../modules/containers.Container.md#operator)<`C`, `TA`, `TB`\>

#### Type declaration

▸ <`TA`, `TB`\>(`selector`): [`Operator`](../modules/containers.Container.md#operator)<`C`, `TA`, `TB`\>

##### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`Of`](../modules/containers.Container.md#of)<`C`, `TB`\>\> |

##### Returns

[`Operator`](../modules/containers.Container.md#operator)<`C`, `TA`, `TB`\>

___

## Transform Properties

### toObservable

• **toObservable**: <T\>() => [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Container.md#of)<`C`, `T`\>, [`ObservableLike`](types.ObservableLike.md)<`T`\>\>

#### Type declaration

▸ <`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Container.md#of)<`C`, `T`\>, [`ObservableLike`](types.ObservableLike.md)<`T`\>\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Container.md#of)<`C`, `T`\>, [`ObservableLike`](types.ObservableLike.md)<`T`\>\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[toObservable](containers.ContainerTypeClass.md#toobservable)

## Constructor Methods

### combineLatest

▸ **combineLatest**<`TA`, `TB`\>(`a`, `b`): [`Of`](../modules/containers.Container.md#of)<`C`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Of`](../modules/containers.Container.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/containers.Container.md#of)<`C`, `TB`\> |

#### Returns

[`Of`](../modules/containers.Container.md#of)<`C`, readonly [`TA`, `TB`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Of`](../modules/containers.Container.md#of)<`C`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Of`](../modules/containers.Container.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/containers.Container.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/containers.Container.md#of)<`C`, `TC`\> |

#### Returns

[`Of`](../modules/containers.Container.md#of)<`C`, readonly [`TA`, `TB`, `TC`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Of`](../modules/containers.Container.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`Of`](../modules/containers.Container.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/containers.Container.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/containers.Container.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/containers.Container.md#of)<`C`, `TD`\> |

#### Returns

[`Of`](../modules/containers.Container.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`Of`](../modules/containers.Container.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`Of`](../modules/containers.Container.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/containers.Container.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/containers.Container.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/containers.Container.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/containers.Container.md#of)<`C`, `TE`\> |

#### Returns

[`Of`](../modules/containers.Container.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`Of`](../modules/containers.Container.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`Of`](../modules/containers.Container.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/containers.Container.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/containers.Container.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/containers.Container.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/containers.Container.md#of)<`C`, `TE`\> |
| `f` | [`Of`](../modules/containers.Container.md#of)<`C`, `TF`\> |

#### Returns

[`Of`](../modules/containers.Container.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`Of`](../modules/containers.Container.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`Of`](../modules/containers.Container.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/containers.Container.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/containers.Container.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/containers.Container.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/containers.Container.md#of)<`C`, `TE`\> |
| `f` | [`Of`](../modules/containers.Container.md#of)<`C`, `TF`\> |
| `g` | [`Of`](../modules/containers.Container.md#of)<`C`, `TG`\> |

#### Returns

[`Of`](../modules/containers.Container.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Of`](../modules/containers.Container.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`Of`](../modules/containers.Container.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/containers.Container.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/containers.Container.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/containers.Container.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/containers.Container.md#of)<`C`, `TE`\> |
| `f` | [`Of`](../modules/containers.Container.md#of)<`C`, `TF`\> |
| `g` | [`Of`](../modules/containers.Container.md#of)<`C`, `TG`\> |
| `h` | [`Of`](../modules/containers.Container.md#of)<`C`, `TH`\> |

#### Returns

[`Of`](../modules/containers.Container.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Of`](../modules/containers.Container.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`Of`](../modules/containers.Container.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/containers.Container.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/containers.Container.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/containers.Container.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/containers.Container.md#of)<`C`, `TE`\> |
| `f` | [`Of`](../modules/containers.Container.md#of)<`C`, `TF`\> |
| `g` | [`Of`](../modules/containers.Container.md#of)<`C`, `TG`\> |
| `h` | [`Of`](../modules/containers.Container.md#of)<`C`, `TH`\> |
| `i` | [`Of`](../modules/containers.Container.md#of)<`C`, `TI`\> |

#### Returns

[`Of`](../modules/containers.Container.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

### defer

▸ **defer**<`T`\>(`factory`): [`Of`](../modules/containers.Container.md#of)<`C`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](../modules/functions.md#factory)<[`Of`](../modules/containers.Container.md#of)<`C`, `T`\>\> |

#### Returns

[`Of`](../modules/containers.Container.md#of)<`C`, `T`\>

#### Inherited from

[StatefulTypeClass](containers.StatefulTypeClass.md).[defer](containers.StatefulTypeClass.md#defer)

___

### merge

▸ **merge**<`T`\>(`fst`, `snd`, `...tail`): [`Of`](../modules/containers.Container.md#of)<`C`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Of`](../modules/containers.Container.md#of)<`C`, `T`\> |
| `snd` | [`Of`](../modules/containers.Container.md#of)<`C`, `T`\> |
| `...tail` | readonly [`Of`](../modules/containers.Container.md#of)<`C`, `T`\>[] |

#### Returns

[`Of`](../modules/containers.Container.md#of)<`C`, `T`\>

___

### never

▸ **never**<`T`\>(): [`Of`](../modules/containers.Container.md#of)<`C`, `T`\>

Returns a Container instance that emits no items and never disposes its state.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Of`](../modules/containers.Container.md#of)<`C`, `T`\>

___

### throws

▸ **throws**<`T`\>(`options?`): [`Of`](../modules/containers.Container.md#of)<`C`, `T`\>

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

[`Of`](../modules/containers.Container.md#of)<`C`, `T`\>

#### Inherited from

[StatefulTypeClass](containers.StatefulTypeClass.md).[throws](containers.StatefulTypeClass.md#throws)

___

### zip

▸ **zip**<`TA`, `TB`\>(`a`, `b`): [`Of`](../modules/containers.Container.md#of)<`C`, readonly [`TA`, `TB`]\>

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
| `a` | [`Of`](../modules/containers.Container.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/containers.Container.md#of)<`C`, `TB`\> |

#### Returns

[`Of`](../modules/containers.Container.md#of)<`C`, readonly [`TA`, `TB`]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[zip](containers.ContainerTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Of`](../modules/containers.Container.md#of)<`C`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Of`](../modules/containers.Container.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/containers.Container.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/containers.Container.md#of)<`C`, `TC`\> |

#### Returns

[`Of`](../modules/containers.Container.md#of)<`C`, readonly [`TA`, `TB`, `TC`]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[zip](containers.ContainerTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Of`](../modules/containers.Container.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`Of`](../modules/containers.Container.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/containers.Container.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/containers.Container.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/containers.Container.md#of)<`C`, `TD`\> |

#### Returns

[`Of`](../modules/containers.Container.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[zip](containers.ContainerTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`Of`](../modules/containers.Container.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`Of`](../modules/containers.Container.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/containers.Container.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/containers.Container.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/containers.Container.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/containers.Container.md#of)<`C`, `TE`\> |

#### Returns

[`Of`](../modules/containers.Container.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[zip](containers.ContainerTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`Of`](../modules/containers.Container.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`Of`](../modules/containers.Container.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/containers.Container.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/containers.Container.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/containers.Container.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/containers.Container.md#of)<`C`, `TE`\> |
| `f` | [`Of`](../modules/containers.Container.md#of)<`C`, `TF`\> |

#### Returns

[`Of`](../modules/containers.Container.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[zip](containers.ContainerTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`Of`](../modules/containers.Container.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`Of`](../modules/containers.Container.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/containers.Container.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/containers.Container.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/containers.Container.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/containers.Container.md#of)<`C`, `TE`\> |
| `f` | [`Of`](../modules/containers.Container.md#of)<`C`, `TF`\> |
| `g` | [`Of`](../modules/containers.Container.md#of)<`C`, `TG`\> |

#### Returns

[`Of`](../modules/containers.Container.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[zip](containers.ContainerTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Of`](../modules/containers.Container.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`Of`](../modules/containers.Container.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/containers.Container.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/containers.Container.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/containers.Container.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/containers.Container.md#of)<`C`, `TE`\> |
| `f` | [`Of`](../modules/containers.Container.md#of)<`C`, `TF`\> |
| `g` | [`Of`](../modules/containers.Container.md#of)<`C`, `TG`\> |
| `h` | [`Of`](../modules/containers.Container.md#of)<`C`, `TH`\> |

#### Returns

[`Of`](../modules/containers.Container.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[zip](containers.ContainerTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Of`](../modules/containers.Container.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`Of`](../modules/containers.Container.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/containers.Container.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/containers.Container.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/containers.Container.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/containers.Container.md#of)<`C`, `TE`\> |
| `f` | [`Of`](../modules/containers.Container.md#of)<`C`, `TF`\> |
| `g` | [`Of`](../modules/containers.Container.md#of)<`C`, `TG`\> |
| `h` | [`Of`](../modules/containers.Container.md#of)<`C`, `TH`\> |
| `i` | [`Of`](../modules/containers.Container.md#of)<`C`, `TI`\> |

#### Returns

[`Of`](../modules/containers.Container.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[zip](containers.ContainerTypeClass.md#zip)

___

### zipLatest

▸ **zipLatest**<`TA`, `TB`\>(`a`, `b`): [`Of`](../modules/containers.Container.md#of)<`C`, readonly [`TA`, `TB`]\>

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
| `a` | [`Of`](../modules/containers.Container.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/containers.Container.md#of)<`C`, `TB`\> |

#### Returns

[`Of`](../modules/containers.Container.md#of)<`C`, readonly [`TA`, `TB`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Of`](../modules/containers.Container.md#of)<`C`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Of`](../modules/containers.Container.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/containers.Container.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/containers.Container.md#of)<`C`, `TC`\> |

#### Returns

[`Of`](../modules/containers.Container.md#of)<`C`, readonly [`TA`, `TB`, `TC`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Of`](../modules/containers.Container.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`Of`](../modules/containers.Container.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/containers.Container.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/containers.Container.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/containers.Container.md#of)<`C`, `TD`\> |

#### Returns

[`Of`](../modules/containers.Container.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`Of`](../modules/containers.Container.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`Of`](../modules/containers.Container.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/containers.Container.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/containers.Container.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/containers.Container.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/containers.Container.md#of)<`C`, `TE`\> |

#### Returns

[`Of`](../modules/containers.Container.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`Of`](../modules/containers.Container.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`Of`](../modules/containers.Container.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/containers.Container.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/containers.Container.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/containers.Container.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/containers.Container.md#of)<`C`, `TE`\> |
| `f` | [`Of`](../modules/containers.Container.md#of)<`C`, `TF`\> |

#### Returns

[`Of`](../modules/containers.Container.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`Of`](../modules/containers.Container.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`Of`](../modules/containers.Container.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/containers.Container.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/containers.Container.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/containers.Container.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/containers.Container.md#of)<`C`, `TE`\> |
| `f` | [`Of`](../modules/containers.Container.md#of)<`C`, `TF`\> |
| `g` | [`Of`](../modules/containers.Container.md#of)<`C`, `TG`\> |

#### Returns

[`Of`](../modules/containers.Container.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Of`](../modules/containers.Container.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`Of`](../modules/containers.Container.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/containers.Container.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/containers.Container.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/containers.Container.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/containers.Container.md#of)<`C`, `TE`\> |
| `f` | [`Of`](../modules/containers.Container.md#of)<`C`, `TF`\> |
| `g` | [`Of`](../modules/containers.Container.md#of)<`C`, `TG`\> |
| `h` | [`Of`](../modules/containers.Container.md#of)<`C`, `TH`\> |

#### Returns

[`Of`](../modules/containers.Container.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Of`](../modules/containers.Container.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`Of`](../modules/containers.Container.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/containers.Container.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/containers.Container.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/containers.Container.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/containers.Container.md#of)<`C`, `TE`\> |
| `f` | [`Of`](../modules/containers.Container.md#of)<`C`, `TF`\> |
| `g` | [`Of`](../modules/containers.Container.md#of)<`C`, `TG`\> |
| `h` | [`Of`](../modules/containers.Container.md#of)<`C`, `TH`\> |
| `i` | [`Of`](../modules/containers.Container.md#of)<`C`, `TI`\> |

#### Returns

[`Of`](../modules/containers.Container.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

## Operator Methods

### backpressureStrategy

▸ **backpressureStrategy**<`T`\>(`capacity`, `backpressureStrategy`): [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `T`\>

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

[`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `T`\>

___

### catchError

▸ **catchError**<`T`\>(`onError`): [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `T`\>

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
| `onError` | [`Function1`](../modules/functions.md#function1)<`unknown`, `void` \| [`Of`](../modules/containers.Container.md#of)<`C`, `T`\>\> | A function that takes source error and either returns a Container to continue with or void if the error should be propagated. |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `T`\>

#### Inherited from

[StatefulTypeClass](containers.StatefulTypeClass.md).[catchError](containers.StatefulTypeClass.md#catcherror)

___

### decodeWithCharset

▸ **decodeWithCharset**(`options?`): [`Operator`](../modules/containers.Container.md#operator)<`C`, `ArrayBuffer`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.charset?` | `string` |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<`C`, `ArrayBuffer`, `string`\>

#### Inherited from

[StatefulTypeClass](containers.StatefulTypeClass.md).[decodeWithCharset](containers.StatefulTypeClass.md#decodewithcharset)

___

### dispatchTo

▸ **dispatchTo**<`T`\>(`dispatcher`): [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatcher` | [`DispatcherLike`](types.DispatcherLike.md)<`T`\> |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `T`\>

___

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `T`\>

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

[`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `T`\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[distinctUntilChanged](containers.ContainerTypeClass.md#distinctuntilchanged)

___

### encodeUtf8

▸ **encodeUtf8**(): [`Operator`](../modules/containers.Container.md#operator)<`C`, `string`, `Uint8Array`\>

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<`C`, `string`, `Uint8Array`\>

#### Inherited from

[StatefulTypeClass](containers.StatefulTypeClass.md).[encodeUtf8](containers.StatefulTypeClass.md#encodeutf8)

___

### enqueue

▸ **enqueue**<`T`\>(`queue`): [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `queue` | [`QueueableLike`](types.QueueableLike.md)<`T`\> |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `T`\>

___

### forEach

▸ **forEach**<`T`\>(`effect`): [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `T`\>

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

[`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `T`\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[forEach](containers.ContainerTypeClass.md#foreach)

___

### forkCombineLatest

▸ **forkCombineLatest**<`T`, `TA`, `TB`\>(`a`, `b`): [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TB`\> |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, readonly [`TA`, `TB`]\>

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`]\>

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
| `a` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TC`\> |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`]\>

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TD`\> |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TE`\> |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TE`\> |
| `f` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TF`\> |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TE`\> |
| `f` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TF`\> |
| `g` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TG`\> |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TE`\> |
| `f` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TF`\> |
| `g` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TG`\> |
| `h` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TH`\> |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TE`\> |
| `f` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TF`\> |
| `g` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TG`\> |
| `h` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TH`\> |
| `i` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TI`\> |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

### forkMerge

▸ **forkMerge**<`TIn`, `TOut`\>(`fst`, `snd`, `...tail`): [`Operator`](../modules/containers.Container.md#operator)<`C`, `TIn`, `TOut`\>

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `TIn`, `TOut`\> |
| `snd` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `TIn`, `TOut`\> |
| `...tail` | readonly [`Operator`](../modules/containers.Container.md#operator)<`C`, `TIn`, `TOut`\>[] |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<`C`, `TIn`, `TOut`\>

___

### forkZip

▸ **forkZip**<`T`, `TA`, `TB`\>(`a`, `b`): [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TB`\> |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, readonly [`TA`, `TB`]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[forkZip](containers.ContainerTypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`]\>

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
| `a` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TC`\> |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[forkZip](containers.ContainerTypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TD`\> |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[forkZip](containers.ContainerTypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TE`\> |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[forkZip](containers.ContainerTypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TE`\> |
| `f` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TF`\> |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[forkZip](containers.ContainerTypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TE`\> |
| `f` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TF`\> |
| `g` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TG`\> |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[forkZip](containers.ContainerTypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TE`\> |
| `f` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TF`\> |
| `g` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TG`\> |
| `h` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TH`\> |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[forkZip](containers.ContainerTypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TE`\> |
| `f` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TF`\> |
| `g` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TG`\> |
| `h` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TH`\> |
| `i` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TI`\> |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[forkZip](containers.ContainerTypeClass.md#forkzip)

___

### forkZipLatest

▸ **forkZipLatest**<`T`, `TA`, `TB`\>(`a`, `b`): [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TB`\> |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, readonly [`TA`, `TB`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`]\>

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
| `a` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TC`\> |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TD`\> |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TE`\> |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TE`\> |
| `f` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TF`\> |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TE`\> |
| `f` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TF`\> |
| `g` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TG`\> |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TE`\> |
| `f` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TF`\> |
| `g` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TG`\> |
| `h` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TH`\> |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TE`\> |
| `f` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TF`\> |
| `g` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TG`\> |
| `h` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TH`\> |
| `i` | [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TI`\> |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

### identity

▸ **identity**<`T`\>(): [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `T`\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[identity](containers.ContainerTypeClass.md#identity)

___

### ignoreElements

▸ **ignoreElements**<`T`\>(): [`Operator`](../modules/containers.Container.md#operator)<`C`, `unknown`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<`C`, `unknown`, `T`\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[ignoreElements](containers.ContainerTypeClass.md#ignoreelements)

___

### keep

▸ **keep**<`T`\>(`predicate`): [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `T`\>

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

[`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `T`\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[keep](containers.ContainerTypeClass.md#keep)

___

### keepType

▸ **keepType**<`TA`, `TB`\>(`predicate`): [`Operator`](../modules/containers.Container.md#operator)<`C`, `TA`, `TB`\>

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

[`Operator`](../modules/containers.Container.md#operator)<`C`, `TA`, `TB`\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[keepType](containers.ContainerTypeClass.md#keeptype)

___

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`Operator`](../modules/containers.Container.md#operator)<`C`, `TA`, `TB`\>

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

[`Operator`](../modules/containers.Container.md#operator)<`C`, `TA`, `TB`\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[map](containers.ContainerTypeClass.md#map)

___

### mapTo

▸ **mapTo**<`TA`, `TB`\>(`value`): [`Operator`](../modules/containers.Container.md#operator)<`C`, `TA`, `TB`\>

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

[`Operator`](../modules/containers.Container.md#operator)<`C`, `TA`, `TB`\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[mapTo](containers.ContainerTypeClass.md#mapto)

___

### pairwise

▸ **pairwise**<`T`\>(): [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, readonly [`T`, `T`]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, readonly [`T`, `T`]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[pairwise](containers.ContainerTypeClass.md#pairwise)

___

### pick

▸ **pick**<`T`, `TKey`\>(`key`): [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `T`[`TKey`]\>

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

[`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `T`[`TKey`]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[pick](containers.ContainerTypeClass.md#pick)

▸ **pick**<`T`, `TKeyA`, `TKeyB`\>(`keyA`, `keyB`): [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `T`[`TKeyA`][`TKeyB`]\>

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

[`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `T`[`TKeyA`][`TKeyB`]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[pick](containers.ContainerTypeClass.md#pick)

▸ **pick**<`T`, `TKeyA`, `TKeyB`, `TKeyC`\>(`keyA`, `keyB`, `keyC`): [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

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

[`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[pick](containers.ContainerTypeClass.md#pick)

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TAcc`\>

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

[`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TAcc`\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[scan](containers.ContainerTypeClass.md#scan)

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `T`\>

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

[`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `T`\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[skipFirst](containers.ContainerTypeClass.md#skipfirst)

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `T`\>

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

[`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `T`\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[takeFirst](containers.ContainerTypeClass.md#takefirst)

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `T`\>

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

[`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `T`\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[takeLast](containers.ContainerTypeClass.md#takelast)

___

### takeUntil

▸ **takeUntil**<`T`\>(`notifier`): [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `notifier` | [`Of`](../modules/containers.Container.md#of)<`C`, `unknown`\> |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `T`\>

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `T`\>

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

[`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `T`\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[takeWhile](containers.ContainerTypeClass.md#takewhile)

___

### throttle

▸ **throttle**<`T`\>(`duration`, `options?`): [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `T`\>

Emits a value from the source, then ignores subsequent source values for a duration determined by another observable.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `duration` | [`Function1`](../modules/functions.md#function1)<`T`, [`Of`](../modules/containers.Container.md#of)<`C`, `unknown`\>\> | Function function that is used to determine the silence duration in between emitted values. |
| `options?` | `Object` | - |
| `options.mode?` | ``"interval"`` \| ``"first"`` \| ``"last"`` | - |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `T`\>

▸ **throttle**<`T`\>(`duration`, `options?`): [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `T`\>

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

[`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `T`\>

___

### throwIfEmpty

▸ **throwIfEmpty**<`T`\>(`factory`): [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `T`\>

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

[`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `T`\>

#### Inherited from

[StatefulTypeClass](containers.StatefulTypeClass.md).[throwIfEmpty](containers.StatefulTypeClass.md#throwifempty)

___

### timeout

▸ **timeout**<`T`\>(`duration`): [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `T`\>

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

[`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `T`\>

▸ **timeout**<`T`\>(`duration`): [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `duration` | [`Of`](../modules/containers.Container.md#of)<`C`, `unknown`\> |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `T`\>

___

### withCurrentTime

▸ **withCurrentTime**<`T`, `TOut`\>(`selector`): [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TOut`\>

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

[`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `TOut`\>

___

### withLatestFrom

▸ **withLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`Operator`](../modules/containers.Container.md#operator)<`C`, `TA`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Of`](../modules/containers.Container.md#of)<`C`, `TB`\> |
| `selector` | [`Function2`](../modules/functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<`C`, `TA`, `T`\>

___

### zipWith

▸ **zipWith**<`TA`, `TB`\>(`b`): [`Operator`](../modules/containers.Container.md#operator)<`C`, `TA`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`Of`](../modules/containers.Container.md#of)<`C`, `TB`\> |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<`C`, `TA`, readonly [`TA`, `TB`]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[zipWith](containers.ContainerTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`\>(`b`, `c`): [`Operator`](../modules/containers.Container.md#operator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`Of`](../modules/containers.Container.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/containers.Container.md#of)<`C`, `TC`\> |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[zipWith](containers.ContainerTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`\>(`b`, `c`, `d`): [`Operator`](../modules/containers.Container.md#operator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `b` | [`Of`](../modules/containers.Container.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/containers.Container.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/containers.Container.md#of)<`C`, `TD`\> |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[zipWith](containers.ContainerTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`b`, `c`, `d`, `e`): [`Operator`](../modules/containers.Container.md#operator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `b` | [`Of`](../modules/containers.Container.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/containers.Container.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/containers.Container.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/containers.Container.md#of)<`C`, `TE`\> |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[zipWith](containers.ContainerTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`b`, `c`, `d`, `e`, `f`): [`Operator`](../modules/containers.Container.md#operator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `b` | [`Of`](../modules/containers.Container.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/containers.Container.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/containers.Container.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/containers.Container.md#of)<`C`, `TE`\> |
| `f` | [`Of`](../modules/containers.Container.md#of)<`C`, `TF`\> |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[zipWith](containers.ContainerTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`b`, `c`, `d`, `e`, `f`, `g`): [`Operator`](../modules/containers.Container.md#operator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `b` | [`Of`](../modules/containers.Container.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/containers.Container.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/containers.Container.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/containers.Container.md#of)<`C`, `TE`\> |
| `f` | [`Of`](../modules/containers.Container.md#of)<`C`, `TF`\> |
| `g` | [`Of`](../modules/containers.Container.md#of)<`C`, `TG`\> |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[zipWith](containers.ContainerTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Operator`](../modules/containers.Container.md#operator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `b` | [`Of`](../modules/containers.Container.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/containers.Container.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/containers.Container.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/containers.Container.md#of)<`C`, `TE`\> |
| `f` | [`Of`](../modules/containers.Container.md#of)<`C`, `TF`\> |
| `g` | [`Of`](../modules/containers.Container.md#of)<`C`, `TG`\> |
| `h` | [`Of`](../modules/containers.Container.md#of)<`C`, `TH`\> |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[zipWith](containers.ContainerTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Operator`](../modules/containers.Container.md#operator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `b` | [`Of`](../modules/containers.Container.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/containers.Container.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/containers.Container.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/containers.Container.md#of)<`C`, `TE`\> |
| `f` | [`Of`](../modules/containers.Container.md#of)<`C`, `TF`\> |
| `g` | [`Of`](../modules/containers.Container.md#of)<`C`, `TG`\> |
| `h` | [`Of`](../modules/containers.Container.md#of)<`C`, `TH`\> |
| `i` | [`Of`](../modules/containers.Container.md#of)<`C`, `TI`\> |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Inherited from

[ContainerTypeClass](containers.ContainerTypeClass.md).[zipWith](containers.ContainerTypeClass.md#zipwith)

___

### zipWithLatestFrom

▸ **zipWithLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`Operator`](../modules/containers.Container.md#operator)<`C`, `TA`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Of`](../modules/containers.Container.md#of)<`C`, `TB`\> |
| `selector` | [`Function2`](../modules/functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<`C`, `TA`, `T`\>

___

## Transform Methods

### firstAsync

▸ **firstAsync**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Container.md#of)<`C`, `T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Container.md#of)<`C`, `T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Overrides

[ContainerTypeClass](containers.ContainerTypeClass.md).[firstAsync](containers.ContainerTypeClass.md#firstasync)

▸ **firstAsync**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Container.md#of)<`C`, `T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

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

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Container.md#of)<`C`, `T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Overrides

ContainerTypeClass.firstAsync

___

### lastAsync

▸ **lastAsync**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Container.md#of)<`C`, `T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Container.md#of)<`C`, `T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Overrides

[ContainerTypeClass](containers.ContainerTypeClass.md).[lastAsync](containers.ContainerTypeClass.md#lastasync)

▸ **lastAsync**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Container.md#of)<`C`, `T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

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

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Container.md#of)<`C`, `T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Overrides

ContainerTypeClass.lastAsync
