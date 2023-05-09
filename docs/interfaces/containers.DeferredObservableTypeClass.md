[Reactive-JS](../README.md) / [containers](../modules/containers.md) / DeferredObservableTypeClass

# Interface: DeferredObservableTypeClass<C\>

[containers](../modules/containers.md).DeferredObservableTypeClass

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Type`](containers.DeferredObservableContainer.Type.md) |

## Hierarchy

- [`ObservableTypeClass`](containers.ObservableTypeClass.md)<`C`\>

- [`DeferredTypeClass`](containers.DeferredTypeClass.md)<`C`\>

  ↳ **`DeferredObservableTypeClass`**

  ↳↳ [`RunnableObservableTypeClass`](containers.RunnableObservableTypeClass.md)

  ↳↳ [`TypeClass`](containers.DeferredObservableContainer.TypeClass.md)

## Table of contents

### Constructor Properties

- [fromRunnable](containers.DeferredObservableTypeClass.md#fromrunnable)

### Operator Properties

- [buffer](containers.DeferredObservableTypeClass.md#buffer)
- [concatAll](containers.DeferredObservableTypeClass.md#concatall)
- [concatMap](containers.DeferredObservableTypeClass.md#concatmap)
- [concatWith](containers.DeferredObservableTypeClass.md#concatwith)
- [exhaust](containers.DeferredObservableTypeClass.md#exhaust)
- [exhaustMap](containers.DeferredObservableTypeClass.md#exhaustmap)
- [flatMapIterable](containers.DeferredObservableTypeClass.md#flatmapiterable)
- [mergeAll](containers.DeferredObservableTypeClass.md#mergeall)
- [mergeMap](containers.DeferredObservableTypeClass.md#mergemap)
- [mergeWith](containers.DeferredObservableTypeClass.md#mergewith)
- [scanLast](containers.DeferredObservableTypeClass.md#scanlast)
- [scanMany](containers.DeferredObservableTypeClass.md#scanmany)
- [switchAll](containers.DeferredObservableTypeClass.md#switchall)
- [switchMap](containers.DeferredObservableTypeClass.md#switchmap)

### Transform Properties

- [toObservable](containers.DeferredObservableTypeClass.md#toobservable)

### Constructor Methods

- [combineLatest](containers.DeferredObservableTypeClass.md#combinelatest)
- [concat](containers.DeferredObservableTypeClass.md#concat)
- [defer](containers.DeferredObservableTypeClass.md#defer)
- [empty](containers.DeferredObservableTypeClass.md#empty)
- [fromEnumerable](containers.DeferredObservableTypeClass.md#fromenumerable)
- [fromEnumeratorFactory](containers.DeferredObservableTypeClass.md#fromenumeratorfactory)
- [fromFactory](containers.DeferredObservableTypeClass.md#fromfactory)
- [fromIterable](containers.DeferredObservableTypeClass.md#fromiterable)
- [fromOptional](containers.DeferredObservableTypeClass.md#fromoptional)
- [fromReadonlyArray](containers.DeferredObservableTypeClass.md#fromreadonlyarray)
- [generate](containers.DeferredObservableTypeClass.md#generate)
- [merge](containers.DeferredObservableTypeClass.md#merge)
- [never](containers.DeferredObservableTypeClass.md#never)
- [throws](containers.DeferredObservableTypeClass.md#throws)
- [zip](containers.DeferredObservableTypeClass.md#zip)
- [zipLatest](containers.DeferredObservableTypeClass.md#ziplatest)

### Operator Methods

- [backpressureStrategy](containers.DeferredObservableTypeClass.md#backpressurestrategy)
- [catchError](containers.DeferredObservableTypeClass.md#catcherror)
- [decodeWithCharset](containers.DeferredObservableTypeClass.md#decodewithcharset)
- [dispatchTo](containers.DeferredObservableTypeClass.md#dispatchto)
- [distinctUntilChanged](containers.DeferredObservableTypeClass.md#distinctuntilchanged)
- [encodeUtf8](containers.DeferredObservableTypeClass.md#encodeutf8)
- [endWith](containers.DeferredObservableTypeClass.md#endwith)
- [enqueue](containers.DeferredObservableTypeClass.md#enqueue)
- [forEach](containers.DeferredObservableTypeClass.md#foreach)
- [forkCombineLatest](containers.DeferredObservableTypeClass.md#forkcombinelatest)
- [forkConcat](containers.DeferredObservableTypeClass.md#forkconcat)
- [forkMerge](containers.DeferredObservableTypeClass.md#forkmerge)
- [forkZip](containers.DeferredObservableTypeClass.md#forkzip)
- [forkZipLatest](containers.DeferredObservableTypeClass.md#forkziplatest)
- [identity](containers.DeferredObservableTypeClass.md#identity)
- [ignoreElements](containers.DeferredObservableTypeClass.md#ignoreelements)
- [keep](containers.DeferredObservableTypeClass.md#keep)
- [keepType](containers.DeferredObservableTypeClass.md#keeptype)
- [map](containers.DeferredObservableTypeClass.md#map)
- [mapTo](containers.DeferredObservableTypeClass.md#mapto)
- [pairwise](containers.DeferredObservableTypeClass.md#pairwise)
- [pick](containers.DeferredObservableTypeClass.md#pick)
- [repeat](containers.DeferredObservableTypeClass.md#repeat)
- [retry](containers.DeferredObservableTypeClass.md#retry)
- [scan](containers.DeferredObservableTypeClass.md#scan)
- [skipFirst](containers.DeferredObservableTypeClass.md#skipfirst)
- [startWith](containers.DeferredObservableTypeClass.md#startwith)
- [takeFirst](containers.DeferredObservableTypeClass.md#takefirst)
- [takeLast](containers.DeferredObservableTypeClass.md#takelast)
- [takeUntil](containers.DeferredObservableTypeClass.md#takeuntil)
- [takeWhile](containers.DeferredObservableTypeClass.md#takewhile)
- [throttle](containers.DeferredObservableTypeClass.md#throttle)
- [throwIfEmpty](containers.DeferredObservableTypeClass.md#throwifempty)
- [timeout](containers.DeferredObservableTypeClass.md#timeout)
- [withCurrentTime](containers.DeferredObservableTypeClass.md#withcurrenttime)
- [withLatestFrom](containers.DeferredObservableTypeClass.md#withlatestfrom)
- [zipWith](containers.DeferredObservableTypeClass.md#zipwith)
- [zipWithLatestFrom](containers.DeferredObservableTypeClass.md#zipwithlatestfrom)

### Transform Methods

- [firstAsync](containers.DeferredObservableTypeClass.md#firstasync)
- [lastAsync](containers.DeferredObservableTypeClass.md#lastasync)
- [multicast](containers.DeferredObservableTypeClass.md#multicast)
- [share](containers.DeferredObservableTypeClass.md#share)

## Constructor Properties

### fromRunnable

• **fromRunnable**: <T\>() => [`Function1`](../modules/functions.md#function1)<[`RunnableLike`](types.RunnableLike.md)<`T`\>, [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>\>

#### Type declaration

▸ <`T`\>(): [`Function1`](../modules/functions.md#function1)<[`RunnableLike`](types.RunnableLike.md)<`T`\>, [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`Function1`](../modules/functions.md#function1)<[`RunnableLike`](types.RunnableLike.md)<`T`\>, [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>\>

#### Inherited from

[DeferredTypeClass](containers.DeferredTypeClass.md).[fromRunnable](containers.DeferredTypeClass.md#fromrunnable)

___

## Operator Properties

### buffer

• **buffer**: <T\>(`options?`: { `count?`: `number`  }) => [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly `T`[]\>

#### Type declaration

▸ <`T`\>(`options?`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly `T`[]\>

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

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly `T`[]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[buffer](containers.ObservableTypeClass.md#buffer)

___

### concatAll

• **concatAll**: <T\>() => [`Operator`](../modules/containers.Containers.md#operator)<`C`, [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, `T`\>

#### Type declaration

▸ <`T`\>(): [`Operator`](../modules/containers.Containers.md#operator)<`C`, [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, `T`\>

Converts a higher-order Container into a first-order
Container by concatenating the inner sources in order.

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, `T`\>

#### Inherited from

[DeferredTypeClass](containers.DeferredTypeClass.md).[concatAll](containers.DeferredTypeClass.md#concatall)

___

### concatMap

• **concatMap**: <TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, [`Of`](../modules/containers.Containers.md#of)<`C`, `TB`\>\>) => [`Operator`](../modules/containers.Containers.md#operator)<`C`, `TA`, `TB`\>

#### Type declaration

▸ <`TA`, `TB`\>(`selector`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `TA`, `TB`\>

##### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`Of`](../modules/containers.Containers.md#of)<`C`, `TB`\>\> |

##### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `TA`, `TB`\>

#### Inherited from

[DeferredTypeClass](containers.DeferredTypeClass.md).[concatMap](containers.DeferredTypeClass.md#concatmap)

___

### concatWith

• **concatWith**: <T\>(`snd`: [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, ...`tail`: readonly [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>[]) => [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

#### Type declaration

▸ <`T`\>(`snd`, `...tail`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\> |
| `...tail` | readonly [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>[] |

##### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

#### Inherited from

[DeferredTypeClass](containers.DeferredTypeClass.md).[concatWith](containers.DeferredTypeClass.md#concatwith)

___

### exhaust

• **exhaust**: <T\>() => [`Operator`](../modules/containers.Containers.md#operator)<`C`, [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, `T`\>

#### Type declaration

▸ <`T`\>(): [`Operator`](../modules/containers.Containers.md#operator)<`C`, [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, `T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, `T`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[exhaust](containers.ObservableTypeClass.md#exhaust)

___

### exhaustMap

• **exhaustMap**: <TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, [`Of`](../modules/containers.Containers.md#of)<`C`, `TB`\>\>) => [`Operator`](../modules/containers.Containers.md#operator)<`C`, `TA`, `TB`\>

#### Type declaration

▸ <`TA`, `TB`\>(`selector`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `TA`, `TB`\>

##### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`Of`](../modules/containers.Containers.md#of)<`C`, `TB`\>\> |

##### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `TA`, `TB`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[exhaustMap](containers.ObservableTypeClass.md#exhaustmap)

___

### flatMapIterable

• **flatMapIterable**: <TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, `Iterable`<`TB`\>\>) => [`Operator`](../modules/containers.Containers.md#operator)<`C`, `TA`, `TB`\>

#### Type declaration

▸ <`TA`, `TB`\>(`selector`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `TA`, `TB`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `TA`, `TB`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[flatMapIterable](containers.ObservableTypeClass.md#flatmapiterable)

___

### mergeAll

• **mergeAll**: <T\>(`options?`: { `backpressureStrategy?`: ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` ; `capacity?`: `number` ; `concurrency?`: `number`  }) => [`Operator`](../modules/containers.Containers.md#operator)<`C`, [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, `T`\>

#### Type declaration

▸ <`T`\>(`options?`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, `T`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<`C`, [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, `T`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[mergeAll](containers.ObservableTypeClass.md#mergeall)

___

### mergeMap

• **mergeMap**: <TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, [`Of`](../modules/containers.Containers.md#of)<`C`, `TB`\>\>, `options?`: { `backpressureStrategy?`: ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` ; `capacity?`: `number` ; `concurrency?`: `number`  }) => [`Operator`](../modules/containers.Containers.md#operator)<`C`, `TA`, `TB`\>

#### Type declaration

▸ <`TA`, `TB`\>(`selector`, `options?`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `TA`, `TB`\>

##### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`Of`](../modules/containers.Containers.md#of)<`C`, `TB`\>\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.concurrency?` | `number` |

##### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `TA`, `TB`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[mergeMap](containers.ObservableTypeClass.md#mergemap)

___

### mergeWith

• **mergeWith**: <T\>(`snd`: [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, ...`tail`: readonly [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>[]) => [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

#### Type declaration

▸ <`T`\>(`snd`, `...tail`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\> |
| `...tail` | readonly [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>[] |

##### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[mergeWith](containers.ObservableTypeClass.md#mergewith)

___

### scanLast

• **scanLast**: <T, TAcc\>(`scanner`: [`Function2`](../modules/functions.md#function2)<`TAcc`, `T`, [`Of`](../modules/containers.Containers.md#of)<`C`, `TAcc`\>\>, `initialValue`: [`Factory`](../modules/functions.md#factory)<`TAcc`\>) => [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TAcc`\>

#### Type declaration

▸ <`T`, `TAcc`\>(`scanner`, `initialValue`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TAcc`\>

##### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Function2`](../modules/functions.md#function2)<`TAcc`, `T`, [`Of`](../modules/containers.Containers.md#of)<`C`, `TAcc`\>\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

##### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TAcc`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[scanLast](containers.ObservableTypeClass.md#scanlast)

___

### scanMany

• **scanMany**: <T, TAcc\>(`scanner`: [`Function2`](../modules/functions.md#function2)<`TAcc`, `T`, [`Of`](../modules/containers.Containers.md#of)<`C`, `TAcc`\>\>, `initialValue`: [`Factory`](../modules/functions.md#factory)<`TAcc`\>) => [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TAcc`\>

#### Type declaration

▸ <`T`, `TAcc`\>(`scanner`, `initialValue`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TAcc`\>

##### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Function2`](../modules/functions.md#function2)<`TAcc`, `T`, [`Of`](../modules/containers.Containers.md#of)<`C`, `TAcc`\>\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

##### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TAcc`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[scanMany](containers.ObservableTypeClass.md#scanmany)

___

### switchAll

• **switchAll**: <T\>() => [`Operator`](../modules/containers.Containers.md#operator)<`C`, [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, `T`\>

#### Type declaration

▸ <`T`\>(): [`Operator`](../modules/containers.Containers.md#operator)<`C`, [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, `T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, `T`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[switchAll](containers.ObservableTypeClass.md#switchall)

___

### switchMap

• **switchMap**: <TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, [`Of`](../modules/containers.Containers.md#of)<`C`, `TB`\>\>) => [`Operator`](../modules/containers.Containers.md#operator)<`C`, `TA`, `TB`\>

#### Type declaration

▸ <`TA`, `TB`\>(`selector`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `TA`, `TB`\>

##### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`Of`](../modules/containers.Containers.md#of)<`C`, `TB`\>\> |

##### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `TA`, `TB`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[switchMap](containers.ObservableTypeClass.md#switchmap)

___

## Transform Properties

### toObservable

• **toObservable**: <T\>() => [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, [`ObservableLike`](types.ObservableLike.md)<`T`\>\>

#### Type declaration

▸ <`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, [`ObservableLike`](types.ObservableLike.md)<`T`\>\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, [`ObservableLike`](types.ObservableLike.md)<`T`\>\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[toObservable](containers.ObservableTypeClass.md#toobservable)

## Constructor Methods

### combineLatest

▸ **combineLatest**<`TA`, `TB`\>(`a`, `b`): [`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TB`\> |

#### Returns

[`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[combineLatest](containers.ObservableTypeClass.md#combinelatest)

▸ **combineLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TC`\> |

#### Returns

[`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[combineLatest](containers.ObservableTypeClass.md#combinelatest)

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TD`\> |

#### Returns

[`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[combineLatest](containers.ObservableTypeClass.md#combinelatest)

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TE`\> |

#### Returns

[`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[combineLatest](containers.ObservableTypeClass.md#combinelatest)

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TE`\> |
| `f` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TF`\> |

#### Returns

[`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[combineLatest](containers.ObservableTypeClass.md#combinelatest)

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TE`\> |
| `f` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TF`\> |
| `g` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TG`\> |

#### Returns

[`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[combineLatest](containers.ObservableTypeClass.md#combinelatest)

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TE`\> |
| `f` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TF`\> |
| `g` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TG`\> |
| `h` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TH`\> |

#### Returns

[`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[combineLatest](containers.ObservableTypeClass.md#combinelatest)

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TE`\> |
| `f` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TF`\> |
| `g` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TG`\> |
| `h` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TH`\> |
| `i` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TI`\> |

#### Returns

[`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[combineLatest](containers.ObservableTypeClass.md#combinelatest)

___

### concat

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>

Returns a Container which emits all values from each source sequentially.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\> |
| `snd` | [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\> |
| `...tail` | readonly [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>[] |

#### Returns

[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>

#### Inherited from

[DeferredTypeClass](containers.DeferredTypeClass.md).[concat](containers.DeferredTypeClass.md#concat)

___

### defer

▸ **defer**<`T`\>(`factory`): [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](../modules/functions.md#factory)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>\> |

#### Returns

[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[defer](containers.ObservableTypeClass.md#defer)

___

### empty

▸ **empty**<`T`\>(`options?`): [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.delay?` | `number` |

#### Returns

[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>

#### Overrides

[DeferredTypeClass](containers.DeferredTypeClass.md).[empty](containers.DeferredTypeClass.md#empty)

___

### fromEnumerable

▸ **fromEnumerable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>, [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>\>

#### Inherited from

[DeferredTypeClass](containers.DeferredTypeClass.md).[fromEnumerable](containers.DeferredTypeClass.md#fromenumerable)

___

### fromEnumeratorFactory

▸ **fromEnumeratorFactory**<`T`\>(`factory`, `options?`): [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](../modules/functions.md#factory)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\> |
| `options?` | `Object` |
| `options.delay?` | `number` |
| `options.delayStart?` | `boolean` |

#### Returns

[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>

#### Overrides

[DeferredTypeClass](containers.DeferredTypeClass.md).[fromEnumeratorFactory](containers.DeferredTypeClass.md#fromenumeratorfactory)

___

### fromFactory

▸ **fromFactory**<`T`\>(`factory`, `options?`): [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](../modules/functions.md#factory)<`T`\> |
| `options?` | `Object` |
| `options.delay?` | `number` |

#### Returns

[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>

#### Overrides

[DeferredTypeClass](containers.DeferredTypeClass.md).[fromFactory](containers.DeferredTypeClass.md#fromfactory)

___

### fromIterable

▸ **fromIterable**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.delay?` | `number` |
| `options.delayStart?` | `boolean` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>\>

#### Overrides

[DeferredTypeClass](containers.DeferredTypeClass.md).[fromIterable](containers.DeferredTypeClass.md#fromiterable)

___

### fromOptional

▸ **fromOptional**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.delay?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>\>

#### Overrides

[DeferredTypeClass](containers.DeferredTypeClass.md).[fromOptional](containers.DeferredTypeClass.md#fromoptional)

___

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |
| `options.delay?` | `number` |
| `options.delayStart?` | `boolean` |
| `options.start?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>\>

#### Overrides

[DeferredTypeClass](containers.DeferredTypeClass.md).[fromReadonlyArray](containers.DeferredTypeClass.md#fromreadonlyarray)

___

### generate

▸ **generate**<`T`\>(`generator`, `initialValue`, `options?`): [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `generator` | [`Updater`](../modules/functions.md#updater)<`T`\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`T`\> |
| `options?` | `Object` |
| `options.delay?` | `number` |
| `options.delayStart?` | `boolean` |

#### Returns

[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>

#### Overrides

[DeferredTypeClass](containers.DeferredTypeClass.md).[generate](containers.DeferredTypeClass.md#generate)

___

### merge

▸ **merge**<`T`\>(`fst`, `snd`, `...tail`): [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\> |
| `snd` | [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\> |
| `...tail` | readonly [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>[] |

#### Returns

[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[merge](containers.ObservableTypeClass.md#merge)

___

### never

▸ **never**<`T`\>(): [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>

Returns a Container instance that emits no items and never disposes its state.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[never](containers.ObservableTypeClass.md#never)

___

### throws

▸ **throws**<`T`\>(`options?`): [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>

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

[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[throws](containers.ObservableTypeClass.md#throws)

___

### zip

▸ **zip**<`TA`, `TB`\>(`a`, `b`): [`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`]\>

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
| `a` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TB`\> |

#### Returns

[`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[zip](containers.ObservableTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TC`\> |

#### Returns

[`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[zip](containers.ObservableTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TD`\> |

#### Returns

[`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[zip](containers.ObservableTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TE`\> |

#### Returns

[`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[zip](containers.ObservableTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TE`\> |
| `f` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TF`\> |

#### Returns

[`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[zip](containers.ObservableTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TE`\> |
| `f` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TF`\> |
| `g` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TG`\> |

#### Returns

[`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[zip](containers.ObservableTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TE`\> |
| `f` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TF`\> |
| `g` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TG`\> |
| `h` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TH`\> |

#### Returns

[`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[zip](containers.ObservableTypeClass.md#zip)

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TE`\> |
| `f` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TF`\> |
| `g` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TG`\> |
| `h` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TH`\> |
| `i` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TI`\> |

#### Returns

[`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[zip](containers.ObservableTypeClass.md#zip)

___

### zipLatest

▸ **zipLatest**<`TA`, `TB`\>(`a`, `b`): [`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`]\>

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
| `a` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TB`\> |

#### Returns

[`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[zipLatest](containers.ObservableTypeClass.md#ziplatest)

▸ **zipLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TC`\> |

#### Returns

[`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[zipLatest](containers.ObservableTypeClass.md#ziplatest)

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TD`\> |

#### Returns

[`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[zipLatest](containers.ObservableTypeClass.md#ziplatest)

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TE`\> |

#### Returns

[`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[zipLatest](containers.ObservableTypeClass.md#ziplatest)

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TE`\> |
| `f` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TF`\> |

#### Returns

[`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[zipLatest](containers.ObservableTypeClass.md#ziplatest)

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TE`\> |
| `f` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TF`\> |
| `g` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TG`\> |

#### Returns

[`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[zipLatest](containers.ObservableTypeClass.md#ziplatest)

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TE`\> |
| `f` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TF`\> |
| `g` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TG`\> |
| `h` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TH`\> |

#### Returns

[`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[zipLatest](containers.ObservableTypeClass.md#ziplatest)

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TE`\> |
| `f` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TF`\> |
| `g` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TG`\> |
| `h` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TH`\> |
| `i` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TI`\> |

#### Returns

[`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[zipLatest](containers.ObservableTypeClass.md#ziplatest)

___

## Operator Methods

### backpressureStrategy

▸ **backpressureStrategy**<`T`\>(`capacity`, `backpressureStrategy`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[backpressureStrategy](containers.ObservableTypeClass.md#backpressurestrategy)

___

### catchError

▸ **catchError**<`T`\>(`onError`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

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
| `onError` | [`Function1`](../modules/functions.md#function1)<`unknown`, `void` \| [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>\> | A function that takes source error and either returns a Container to continue with or void if the error should be propagated. |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[catchError](containers.ObservableTypeClass.md#catcherror)

___

### decodeWithCharset

▸ **decodeWithCharset**(`options?`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `ArrayBuffer`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.charset?` | `string` |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `ArrayBuffer`, `string`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[decodeWithCharset](containers.ObservableTypeClass.md#decodewithcharset)

___

### dispatchTo

▸ **dispatchTo**<`T`\>(`dispatcher`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatcher` | [`DispatcherLike`](types.DispatcherLike.md)<`T`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[dispatchTo](containers.ObservableTypeClass.md#dispatchto)

___

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[distinctUntilChanged](containers.ObservableTypeClass.md#distinctuntilchanged)

___

### encodeUtf8

▸ **encodeUtf8**(): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `string`, `Uint8Array`\>

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `string`, `Uint8Array`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[encodeUtf8](containers.ObservableTypeClass.md#encodeutf8)

___

### endWith

▸ **endWith**<`T`\>(`value`, `...values`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

#### Inherited from

[DeferredTypeClass](containers.DeferredTypeClass.md).[endWith](containers.DeferredTypeClass.md#endwith)

___

### enqueue

▸ **enqueue**<`T`\>(`queue`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `queue` | [`QueueableLike`](types.QueueableLike.md)<`T`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[enqueue](containers.ObservableTypeClass.md#enqueue)

___

### forEach

▸ **forEach**<`T`\>(`effect`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[forEach](containers.ObservableTypeClass.md#foreach)

___

### forkCombineLatest

▸ **forkCombineLatest**<`T`, `TA`, `TB`\>(`a`, `b`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TB`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[forkCombineLatest](containers.ObservableTypeClass.md#forkcombinelatest)

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TC`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[forkCombineLatest](containers.ObservableTypeClass.md#forkcombinelatest)

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TD`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[forkCombineLatest](containers.ObservableTypeClass.md#forkcombinelatest)

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TE`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[forkCombineLatest](containers.ObservableTypeClass.md#forkcombinelatest)

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TE`\> |
| `f` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TF`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[forkCombineLatest](containers.ObservableTypeClass.md#forkcombinelatest)

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TE`\> |
| `f` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TF`\> |
| `g` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TG`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[forkCombineLatest](containers.ObservableTypeClass.md#forkcombinelatest)

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TE`\> |
| `f` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TF`\> |
| `g` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TG`\> |
| `h` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TH`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[forkCombineLatest](containers.ObservableTypeClass.md#forkcombinelatest)

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TE`\> |
| `f` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TF`\> |
| `g` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TG`\> |
| `h` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TH`\> |
| `i` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TI`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[forkCombineLatest](containers.ObservableTypeClass.md#forkcombinelatest)

___

### forkConcat

▸ **forkConcat**<`TIn`, `TOut`\>(`fst`, `snd`, `...tail`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `TIn`, `TOut`\>

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `TIn`, `TOut`\> |
| `snd` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `TIn`, `TOut`\> |
| `...tail` | readonly [`Operator`](../modules/containers.Containers.md#operator)<`C`, `TIn`, `TOut`\>[] |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `TIn`, `TOut`\>

#### Inherited from

[DeferredTypeClass](containers.DeferredTypeClass.md).[forkConcat](containers.DeferredTypeClass.md#forkconcat)

___

### forkMerge

▸ **forkMerge**<`TIn`, `TOut`\>(`fst`, `snd`, `...tail`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `TIn`, `TOut`\>

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `TIn`, `TOut`\> |
| `snd` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `TIn`, `TOut`\> |
| `...tail` | readonly [`Operator`](../modules/containers.Containers.md#operator)<`C`, `TIn`, `TOut`\>[] |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `TIn`, `TOut`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[forkMerge](containers.ObservableTypeClass.md#forkmerge)

___

### forkZip

▸ **forkZip**<`T`, `TA`, `TB`\>(`a`, `b`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TB`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[forkZip](containers.ObservableTypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TC`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[forkZip](containers.ObservableTypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TD`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[forkZip](containers.ObservableTypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TE`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[forkZip](containers.ObservableTypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TE`\> |
| `f` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TF`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[forkZip](containers.ObservableTypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TE`\> |
| `f` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TF`\> |
| `g` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TG`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[forkZip](containers.ObservableTypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TE`\> |
| `f` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TF`\> |
| `g` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TG`\> |
| `h` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TH`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[forkZip](containers.ObservableTypeClass.md#forkzip)

▸ **forkZip**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TE`\> |
| `f` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TF`\> |
| `g` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TG`\> |
| `h` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TH`\> |
| `i` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TI`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[forkZip](containers.ObservableTypeClass.md#forkzip)

___

### forkZipLatest

▸ **forkZipLatest**<`T`, `TA`, `TB`\>(`a`, `b`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TB`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[forkZipLatest](containers.ObservableTypeClass.md#forkziplatest)

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TC`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[forkZipLatest](containers.ObservableTypeClass.md#forkziplatest)

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TD`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[forkZipLatest](containers.ObservableTypeClass.md#forkziplatest)

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TE`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[forkZipLatest](containers.ObservableTypeClass.md#forkziplatest)

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TE`\> |
| `f` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TF`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[forkZipLatest](containers.ObservableTypeClass.md#forkziplatest)

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TE`\> |
| `f` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TF`\> |
| `g` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TG`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[forkZipLatest](containers.ObservableTypeClass.md#forkziplatest)

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TE`\> |
| `f` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TF`\> |
| `g` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TG`\> |
| `h` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TH`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[forkZipLatest](containers.ObservableTypeClass.md#forkziplatest)

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TE`\> |
| `f` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TF`\> |
| `g` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TG`\> |
| `h` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TH`\> |
| `i` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TI`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[forkZipLatest](containers.ObservableTypeClass.md#forkziplatest)

___

### identity

▸ **identity**<`T`\>(): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[identity](containers.ObservableTypeClass.md#identity)

___

### ignoreElements

▸ **ignoreElements**<`T`\>(): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `unknown`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `unknown`, `T`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[ignoreElements](containers.ObservableTypeClass.md#ignoreelements)

___

### keep

▸ **keep**<`T`\>(`predicate`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[keep](containers.ObservableTypeClass.md#keep)

___

### keepType

▸ **keepType**<`TA`, `TB`\>(`predicate`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `TA`, `TB`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `TA`, `TB`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[keepType](containers.ObservableTypeClass.md#keeptype)

___

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `TA`, `TB`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `TA`, `TB`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[map](containers.ObservableTypeClass.md#map)

___

### mapTo

▸ **mapTo**<`TA`, `TB`\>(`value`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `TA`, `TB`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `TA`, `TB`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[mapTo](containers.ObservableTypeClass.md#mapto)

___

### pairwise

▸ **pairwise**<`T`\>(): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`T`, `T`]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`T`, `T`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[pairwise](containers.ObservableTypeClass.md#pairwise)

___

### pick

▸ **pick**<`T`, `TKey`\>(`key`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`[`TKey`]\>

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

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`[`TKey`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[pick](containers.ObservableTypeClass.md#pick)

▸ **pick**<`T`, `TKeyA`, `TKeyB`\>(`keyA`, `keyB`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`[`TKeyA`][`TKeyB`]\>

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

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`[`TKeyA`][`TKeyB`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[pick](containers.ObservableTypeClass.md#pick)

▸ **pick**<`T`, `TKeyA`, `TKeyB`, `TKeyC`\>(`keyA`, `keyB`, `keyC`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

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

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[pick](containers.ObservableTypeClass.md#pick)

___

### repeat

▸ **repeat**<`T`\>(`predicate`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

#### Inherited from

[DeferredTypeClass](containers.DeferredTypeClass.md).[repeat](containers.DeferredTypeClass.md#repeat)

▸ **repeat**<`T`\>(`count`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

#### Inherited from

[DeferredTypeClass](containers.DeferredTypeClass.md).[repeat](containers.DeferredTypeClass.md#repeat)

▸ **repeat**<`T`\>(): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

Returns a Container that mirrors the source, continually repeating it.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

#### Inherited from

[DeferredTypeClass](containers.DeferredTypeClass.md).[repeat](containers.DeferredTypeClass.md#repeat)

___

### retry

▸ **retry**<`T`\>(): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

Returns an `ObservableLike` that mirrors the source, re-subscribing
if the source completes with an error.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

#### Inherited from

[DeferredTypeClass](containers.DeferredTypeClass.md).[retry](containers.DeferredTypeClass.md#retry)

▸ **retry**<`T`\>(`predicate`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

#### Inherited from

[DeferredTypeClass](containers.DeferredTypeClass.md).[retry](containers.DeferredTypeClass.md#retry)

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TAcc`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TAcc`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[scan](containers.ObservableTypeClass.md#scan)

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[skipFirst](containers.ObservableTypeClass.md#skipfirst)

___

### startWith

▸ **startWith**<`T`\>(`value`, `...values`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

#### Inherited from

[DeferredTypeClass](containers.DeferredTypeClass.md).[startWith](containers.DeferredTypeClass.md#startwith)

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[takeFirst](containers.ObservableTypeClass.md#takefirst)

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[takeLast](containers.ObservableTypeClass.md#takelast)

___

### takeUntil

▸ **takeUntil**<`T`\>(`notifier`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `notifier` | [`Of`](../modules/containers.Containers.md#of)<`C`, `unknown`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[takeUntil](containers.ObservableTypeClass.md#takeuntil)

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[takeWhile](containers.ObservableTypeClass.md#takewhile)

___

### throttle

▸ **throttle**<`T`\>(`duration`, `options?`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

Emits a value from the source, then ignores subsequent source values for a duration determined by another observable.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `duration` | [`Function1`](../modules/functions.md#function1)<`T`, [`Of`](../modules/containers.Containers.md#of)<`C`, `unknown`\>\> | Function function that is used to determine the silence duration in between emitted values. |
| `options?` | `Object` | - |
| `options.mode?` | ``"interval"`` \| ``"first"`` \| ``"last"`` | - |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[throttle](containers.ObservableTypeClass.md#throttle)

▸ **throttle**<`T`\>(`duration`, `options?`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[throttle](containers.ObservableTypeClass.md#throttle)

___

### throwIfEmpty

▸ **throwIfEmpty**<`T`\>(`factory`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[throwIfEmpty](containers.ObservableTypeClass.md#throwifempty)

___

### timeout

▸ **timeout**<`T`\>(`duration`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[timeout](containers.ObservableTypeClass.md#timeout)

▸ **timeout**<`T`\>(`duration`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `duration` | [`Of`](../modules/containers.Containers.md#of)<`C`, `unknown`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[timeout](containers.ObservableTypeClass.md#timeout)

___

### withCurrentTime

▸ **withCurrentTime**<`T`, `TOut`\>(`selector`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TOut`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TOut`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[withCurrentTime](containers.ObservableTypeClass.md#withcurrenttime)

___

### withLatestFrom

▸ **withLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `TA`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TB`\> |
| `selector` | [`Function2`](../modules/functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `TA`, `T`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[withLatestFrom](containers.ObservableTypeClass.md#withlatestfrom)

___

### zipWith

▸ **zipWith**<`TA`, `TB`\>(`b`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `TA`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TB`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `TA`, readonly [`TA`, `TB`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[zipWith](containers.ObservableTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`\>(`b`, `c`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TC`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[zipWith](containers.ObservableTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`\>(`b`, `c`, `d`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `b` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TD`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[zipWith](containers.ObservableTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`b`, `c`, `d`, `e`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `b` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TE`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[zipWith](containers.ObservableTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`b`, `c`, `d`, `e`, `f`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `b` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TE`\> |
| `f` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TF`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[zipWith](containers.ObservableTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`b`, `c`, `d`, `e`, `f`, `g`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `b` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TE`\> |
| `f` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TF`\> |
| `g` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TG`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[zipWith](containers.ObservableTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `b` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TE`\> |
| `f` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TF`\> |
| `g` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TG`\> |
| `h` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TH`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[zipWith](containers.ObservableTypeClass.md#zipwith)

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `b` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TE`\> |
| `f` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TF`\> |
| `g` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TG`\> |
| `h` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TH`\> |
| `i` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TI`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[zipWith](containers.ObservableTypeClass.md#zipwith)

___

### zipWithLatestFrom

▸ **zipWithLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `TA`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TB`\> |
| `selector` | [`Function2`](../modules/functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `TA`, `T`\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[zipWithLatestFrom](containers.ObservableTypeClass.md#zipwithlatestfrom)

___

## Transform Methods

### firstAsync

▸ **firstAsync**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[firstAsync](containers.ObservableTypeClass.md#firstasync)

▸ **firstAsync**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

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

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[firstAsync](containers.ObservableTypeClass.md#firstasync)

___

### lastAsync

▸ **lastAsync**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[lastAsync](containers.ObservableTypeClass.md#lastasync)

▸ **lastAsync**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

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

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Inherited from

[ObservableTypeClass](containers.ObservableTypeClass.md).[lastAsync](containers.ObservableTypeClass.md#lastasync)

___

### multicast

▸ **multicast**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, [`MulticastObservableLike`](types.MulticastObservableLike.md)<`T`\> & [`DisposableLike`](types.DisposableLike.md)\>

Returns a `MulticastObservableLike` backed by a single subscription to the source.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scheduler` | [`SchedulerLike`](types.SchedulerLike.md) | A `SchedulerLike` that is used to subscribe to the source observable. |
| `options?` | `Object` | - |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` | - |
| `options.capacity?` | `number` | The capacity of the stream's request queue. |
| `options.replay?` | `number` | The number of items to buffer for replay when an observer subscribes to the stream. |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, [`MulticastObservableLike`](types.MulticastObservableLike.md)<`T`\> & [`DisposableLike`](types.DisposableLike.md)\>

___

### share

▸ **share**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, [`SharedObservableLike`](types.SharedObservableLike.md)<`T`\>\>

Returns an `ObservableLike` backed by a shared refcounted subscription to the
source. When the refcount goes to 0, the underlying subscription
to the source is disposed.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scheduler` | [`SchedulerLike`](types.SchedulerLike.md) | A `SchedulerLike` that is used to subscribe to the source. |
| `options?` | `Object` | - |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` | - |
| `options.capacity?` | `number` | - |
| `options.replay?` | `number` | - |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, [`SharedObservableLike`](types.SharedObservableLike.md)<`T`\>\>
