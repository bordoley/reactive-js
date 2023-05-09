[Reactive-JS](../README.md) / [containers](../modules/containers.md) / EnumerableObservableTypeClass

# Interface: EnumerableObservableTypeClass<C\>

[containers](../modules/containers.md).EnumerableObservableTypeClass

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Type`](containers.EnumerableContainer.Type.md) |

## Hierarchy

- [`RunnableObservableTypeClass`](containers.RunnableObservableTypeClass.md)<`C`\>

  ↳ **`EnumerableObservableTypeClass`**

  ↳↳ [`TypeClass`](containers.EnumerableContainer.TypeClass.md)

## Table of contents

### Constructor Properties

- [fromRunnable](containers.EnumerableObservableTypeClass.md#fromrunnable)

### Operator Properties

- [buffer](containers.EnumerableObservableTypeClass.md#buffer)
- [concatAll](containers.EnumerableObservableTypeClass.md#concatall)
- [concatMap](containers.EnumerableObservableTypeClass.md#concatmap)
- [concatWith](containers.EnumerableObservableTypeClass.md#concatwith)
- [exhaust](containers.EnumerableObservableTypeClass.md#exhaust)
- [exhaustMap](containers.EnumerableObservableTypeClass.md#exhaustmap)
- [flatMapIterable](containers.EnumerableObservableTypeClass.md#flatmapiterable)
- [mergeAll](containers.EnumerableObservableTypeClass.md#mergeall)
- [mergeMap](containers.EnumerableObservableTypeClass.md#mergemap)
- [mergeWith](containers.EnumerableObservableTypeClass.md#mergewith)
- [scanLast](containers.EnumerableObservableTypeClass.md#scanlast)
- [scanMany](containers.EnumerableObservableTypeClass.md#scanmany)
- [switchAll](containers.EnumerableObservableTypeClass.md#switchall)
- [switchMap](containers.EnumerableObservableTypeClass.md#switchmap)

### Transform Properties

- [contains](containers.EnumerableObservableTypeClass.md#contains)
- [toObservable](containers.EnumerableObservableTypeClass.md#toobservable)
- [toRunnable](containers.EnumerableObservableTypeClass.md#torunnable)

### Constructor Methods

- [combineLatest](containers.EnumerableObservableTypeClass.md#combinelatest)
- [concat](containers.EnumerableObservableTypeClass.md#concat)
- [defer](containers.EnumerableObservableTypeClass.md#defer)
- [empty](containers.EnumerableObservableTypeClass.md#empty)
- [fromEnumerable](containers.EnumerableObservableTypeClass.md#fromenumerable)
- [fromEnumeratorFactory](containers.EnumerableObservableTypeClass.md#fromenumeratorfactory)
- [fromFactory](containers.EnumerableObservableTypeClass.md#fromfactory)
- [fromIterable](containers.EnumerableObservableTypeClass.md#fromiterable)
- [fromOptional](containers.EnumerableObservableTypeClass.md#fromoptional)
- [fromReadonlyArray](containers.EnumerableObservableTypeClass.md#fromreadonlyarray)
- [generate](containers.EnumerableObservableTypeClass.md#generate)
- [merge](containers.EnumerableObservableTypeClass.md#merge)
- [never](containers.EnumerableObservableTypeClass.md#never)
- [throws](containers.EnumerableObservableTypeClass.md#throws)
- [zip](containers.EnumerableObservableTypeClass.md#zip)
- [zipLatest](containers.EnumerableObservableTypeClass.md#ziplatest)

### Operator Methods

- [backpressureStrategy](containers.EnumerableObservableTypeClass.md#backpressurestrategy)
- [catchError](containers.EnumerableObservableTypeClass.md#catcherror)
- [decodeWithCharset](containers.EnumerableObservableTypeClass.md#decodewithcharset)
- [dispatchTo](containers.EnumerableObservableTypeClass.md#dispatchto)
- [distinctUntilChanged](containers.EnumerableObservableTypeClass.md#distinctuntilchanged)
- [encodeUtf8](containers.EnumerableObservableTypeClass.md#encodeutf8)
- [endWith](containers.EnumerableObservableTypeClass.md#endwith)
- [enqueue](containers.EnumerableObservableTypeClass.md#enqueue)
- [forEach](containers.EnumerableObservableTypeClass.md#foreach)
- [forkCombineLatest](containers.EnumerableObservableTypeClass.md#forkcombinelatest)
- [forkConcat](containers.EnumerableObservableTypeClass.md#forkconcat)
- [forkMerge](containers.EnumerableObservableTypeClass.md#forkmerge)
- [forkZip](containers.EnumerableObservableTypeClass.md#forkzip)
- [forkZipLatest](containers.EnumerableObservableTypeClass.md#forkziplatest)
- [identity](containers.EnumerableObservableTypeClass.md#identity)
- [ignoreElements](containers.EnumerableObservableTypeClass.md#ignoreelements)
- [keep](containers.EnumerableObservableTypeClass.md#keep)
- [keepType](containers.EnumerableObservableTypeClass.md#keeptype)
- [map](containers.EnumerableObservableTypeClass.md#map)
- [mapTo](containers.EnumerableObservableTypeClass.md#mapto)
- [pairwise](containers.EnumerableObservableTypeClass.md#pairwise)
- [pick](containers.EnumerableObservableTypeClass.md#pick)
- [repeat](containers.EnumerableObservableTypeClass.md#repeat)
- [retry](containers.EnumerableObservableTypeClass.md#retry)
- [scan](containers.EnumerableObservableTypeClass.md#scan)
- [skipFirst](containers.EnumerableObservableTypeClass.md#skipfirst)
- [startWith](containers.EnumerableObservableTypeClass.md#startwith)
- [takeFirst](containers.EnumerableObservableTypeClass.md#takefirst)
- [takeLast](containers.EnumerableObservableTypeClass.md#takelast)
- [takeUntil](containers.EnumerableObservableTypeClass.md#takeuntil)
- [takeWhile](containers.EnumerableObservableTypeClass.md#takewhile)
- [throttle](containers.EnumerableObservableTypeClass.md#throttle)
- [throwIfEmpty](containers.EnumerableObservableTypeClass.md#throwifempty)
- [timeout](containers.EnumerableObservableTypeClass.md#timeout)
- [withCurrentTime](containers.EnumerableObservableTypeClass.md#withcurrenttime)
- [withLatestFrom](containers.EnumerableObservableTypeClass.md#withlatestfrom)
- [zipWith](containers.EnumerableObservableTypeClass.md#zipwith)
- [zipWithLatestFrom](containers.EnumerableObservableTypeClass.md#zipwithlatestfrom)

### Transform Methods

- [everySatisfy](containers.EnumerableObservableTypeClass.md#everysatisfy)
- [first](containers.EnumerableObservableTypeClass.md#first)
- [firstAsync](containers.EnumerableObservableTypeClass.md#firstasync)
- [flow](containers.EnumerableObservableTypeClass.md#flow)
- [last](containers.EnumerableObservableTypeClass.md#last)
- [lastAsync](containers.EnumerableObservableTypeClass.md#lastasync)
- [multicast](containers.EnumerableObservableTypeClass.md#multicast)
- [noneSatisfy](containers.EnumerableObservableTypeClass.md#nonesatisfy)
- [reduce](containers.EnumerableObservableTypeClass.md#reduce)
- [share](containers.EnumerableObservableTypeClass.md#share)
- [someSatisfy](containers.EnumerableObservableTypeClass.md#somesatisfy)
- [toReadonlyArray](containers.EnumerableObservableTypeClass.md#toreadonlyarray)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[fromRunnable](containers.RunnableObservableTypeClass.md#fromrunnable)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[buffer](containers.RunnableObservableTypeClass.md#buffer)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[concatAll](containers.RunnableObservableTypeClass.md#concatall)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[concatMap](containers.RunnableObservableTypeClass.md#concatmap)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[concatWith](containers.RunnableObservableTypeClass.md#concatwith)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[exhaust](containers.RunnableObservableTypeClass.md#exhaust)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[exhaustMap](containers.RunnableObservableTypeClass.md#exhaustmap)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[flatMapIterable](containers.RunnableObservableTypeClass.md#flatmapiterable)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[mergeAll](containers.RunnableObservableTypeClass.md#mergeall)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[mergeMap](containers.RunnableObservableTypeClass.md#mergemap)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[mergeWith](containers.RunnableObservableTypeClass.md#mergewith)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[scanLast](containers.RunnableObservableTypeClass.md#scanlast)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[scanMany](containers.RunnableObservableTypeClass.md#scanmany)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[switchAll](containers.RunnableObservableTypeClass.md#switchall)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[switchMap](containers.RunnableObservableTypeClass.md#switchmap)

___

## Transform Properties

### contains

• **contains**: <T\>(`value`: `T`, `options?`: { `equality?`: [`Equality`](../modules/functions.md#equality)<`T`\>  }) => [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, `boolean`\>

#### Type declaration

▸ <`T`\>(`value`, `options?`): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, `boolean`\>

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

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, `boolean`\>

#### Inherited from

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[contains](containers.RunnableObservableTypeClass.md#contains)

___

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[toObservable](containers.RunnableObservableTypeClass.md#toobservable)

___

### toRunnable

• **toRunnable**: <T\>() => [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

#### Type declaration

▸ <`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

#### Inherited from

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[toRunnable](containers.RunnableObservableTypeClass.md#torunnable)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[combineLatest](containers.RunnableObservableTypeClass.md#combinelatest)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[combineLatest](containers.RunnableObservableTypeClass.md#combinelatest)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[combineLatest](containers.RunnableObservableTypeClass.md#combinelatest)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[combineLatest](containers.RunnableObservableTypeClass.md#combinelatest)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[combineLatest](containers.RunnableObservableTypeClass.md#combinelatest)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[combineLatest](containers.RunnableObservableTypeClass.md#combinelatest)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[combineLatest](containers.RunnableObservableTypeClass.md#combinelatest)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[combineLatest](containers.RunnableObservableTypeClass.md#combinelatest)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[concat](containers.RunnableObservableTypeClass.md#concat)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[defer](containers.RunnableObservableTypeClass.md#defer)

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

#### Inherited from

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[empty](containers.RunnableObservableTypeClass.md#empty)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[fromEnumerable](containers.RunnableObservableTypeClass.md#fromenumerable)

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

#### Inherited from

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[fromEnumeratorFactory](containers.RunnableObservableTypeClass.md#fromenumeratorfactory)

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

#### Inherited from

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[fromFactory](containers.RunnableObservableTypeClass.md#fromfactory)

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

#### Inherited from

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[fromIterable](containers.RunnableObservableTypeClass.md#fromiterable)

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

#### Inherited from

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[fromOptional](containers.RunnableObservableTypeClass.md#fromoptional)

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

#### Inherited from

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[fromReadonlyArray](containers.RunnableObservableTypeClass.md#fromreadonlyarray)

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

#### Inherited from

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[generate](containers.RunnableObservableTypeClass.md#generate)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[merge](containers.RunnableObservableTypeClass.md#merge)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[never](containers.RunnableObservableTypeClass.md#never)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[throws](containers.RunnableObservableTypeClass.md#throws)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[zip](containers.RunnableObservableTypeClass.md#zip)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[zip](containers.RunnableObservableTypeClass.md#zip)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[zip](containers.RunnableObservableTypeClass.md#zip)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[zip](containers.RunnableObservableTypeClass.md#zip)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[zip](containers.RunnableObservableTypeClass.md#zip)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[zip](containers.RunnableObservableTypeClass.md#zip)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[zip](containers.RunnableObservableTypeClass.md#zip)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[zip](containers.RunnableObservableTypeClass.md#zip)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[zipLatest](containers.RunnableObservableTypeClass.md#ziplatest)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[zipLatest](containers.RunnableObservableTypeClass.md#ziplatest)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[zipLatest](containers.RunnableObservableTypeClass.md#ziplatest)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[zipLatest](containers.RunnableObservableTypeClass.md#ziplatest)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[zipLatest](containers.RunnableObservableTypeClass.md#ziplatest)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[zipLatest](containers.RunnableObservableTypeClass.md#ziplatest)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[zipLatest](containers.RunnableObservableTypeClass.md#ziplatest)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[zipLatest](containers.RunnableObservableTypeClass.md#ziplatest)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[backpressureStrategy](containers.RunnableObservableTypeClass.md#backpressurestrategy)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[catchError](containers.RunnableObservableTypeClass.md#catcherror)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[decodeWithCharset](containers.RunnableObservableTypeClass.md#decodewithcharset)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[dispatchTo](containers.RunnableObservableTypeClass.md#dispatchto)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[distinctUntilChanged](containers.RunnableObservableTypeClass.md#distinctuntilchanged)

___

### encodeUtf8

▸ **encodeUtf8**(): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `string`, `Uint8Array`\>

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `string`, `Uint8Array`\>

#### Inherited from

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[encodeUtf8](containers.RunnableObservableTypeClass.md#encodeutf8)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[endWith](containers.RunnableObservableTypeClass.md#endwith)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[enqueue](containers.RunnableObservableTypeClass.md#enqueue)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[forEach](containers.RunnableObservableTypeClass.md#foreach)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[forkCombineLatest](containers.RunnableObservableTypeClass.md#forkcombinelatest)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[forkCombineLatest](containers.RunnableObservableTypeClass.md#forkcombinelatest)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[forkCombineLatest](containers.RunnableObservableTypeClass.md#forkcombinelatest)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[forkCombineLatest](containers.RunnableObservableTypeClass.md#forkcombinelatest)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[forkCombineLatest](containers.RunnableObservableTypeClass.md#forkcombinelatest)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[forkCombineLatest](containers.RunnableObservableTypeClass.md#forkcombinelatest)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[forkCombineLatest](containers.RunnableObservableTypeClass.md#forkcombinelatest)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[forkCombineLatest](containers.RunnableObservableTypeClass.md#forkcombinelatest)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[forkConcat](containers.RunnableObservableTypeClass.md#forkconcat)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[forkMerge](containers.RunnableObservableTypeClass.md#forkmerge)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[forkZip](containers.RunnableObservableTypeClass.md#forkzip)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[forkZip](containers.RunnableObservableTypeClass.md#forkzip)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[forkZip](containers.RunnableObservableTypeClass.md#forkzip)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[forkZip](containers.RunnableObservableTypeClass.md#forkzip)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[forkZip](containers.RunnableObservableTypeClass.md#forkzip)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[forkZip](containers.RunnableObservableTypeClass.md#forkzip)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[forkZip](containers.RunnableObservableTypeClass.md#forkzip)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[forkZip](containers.RunnableObservableTypeClass.md#forkzip)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[forkZipLatest](containers.RunnableObservableTypeClass.md#forkziplatest)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[forkZipLatest](containers.RunnableObservableTypeClass.md#forkziplatest)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[forkZipLatest](containers.RunnableObservableTypeClass.md#forkziplatest)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[forkZipLatest](containers.RunnableObservableTypeClass.md#forkziplatest)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[forkZipLatest](containers.RunnableObservableTypeClass.md#forkziplatest)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[forkZipLatest](containers.RunnableObservableTypeClass.md#forkziplatest)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[forkZipLatest](containers.RunnableObservableTypeClass.md#forkziplatest)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[forkZipLatest](containers.RunnableObservableTypeClass.md#forkziplatest)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[identity](containers.RunnableObservableTypeClass.md#identity)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[ignoreElements](containers.RunnableObservableTypeClass.md#ignoreelements)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[keep](containers.RunnableObservableTypeClass.md#keep)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[keepType](containers.RunnableObservableTypeClass.md#keeptype)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[map](containers.RunnableObservableTypeClass.md#map)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[mapTo](containers.RunnableObservableTypeClass.md#mapto)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[pairwise](containers.RunnableObservableTypeClass.md#pairwise)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[pick](containers.RunnableObservableTypeClass.md#pick)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[pick](containers.RunnableObservableTypeClass.md#pick)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[pick](containers.RunnableObservableTypeClass.md#pick)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[repeat](containers.RunnableObservableTypeClass.md#repeat)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[repeat](containers.RunnableObservableTypeClass.md#repeat)

▸ **repeat**<`T`\>(): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

Returns a Container that mirrors the source, continually repeating it.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

#### Inherited from

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[repeat](containers.RunnableObservableTypeClass.md#repeat)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[retry](containers.RunnableObservableTypeClass.md#retry)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[retry](containers.RunnableObservableTypeClass.md#retry)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[scan](containers.RunnableObservableTypeClass.md#scan)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[skipFirst](containers.RunnableObservableTypeClass.md#skipfirst)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[startWith](containers.RunnableObservableTypeClass.md#startwith)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[takeFirst](containers.RunnableObservableTypeClass.md#takefirst)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[takeLast](containers.RunnableObservableTypeClass.md#takelast)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[takeUntil](containers.RunnableObservableTypeClass.md#takeuntil)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[takeWhile](containers.RunnableObservableTypeClass.md#takewhile)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[throttle](containers.RunnableObservableTypeClass.md#throttle)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[throttle](containers.RunnableObservableTypeClass.md#throttle)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[throwIfEmpty](containers.RunnableObservableTypeClass.md#throwifempty)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[timeout](containers.RunnableObservableTypeClass.md#timeout)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[timeout](containers.RunnableObservableTypeClass.md#timeout)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[withCurrentTime](containers.RunnableObservableTypeClass.md#withcurrenttime)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[withLatestFrom](containers.RunnableObservableTypeClass.md#withlatestfrom)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[zipWith](containers.RunnableObservableTypeClass.md#zipwith)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[zipWith](containers.RunnableObservableTypeClass.md#zipwith)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[zipWith](containers.RunnableObservableTypeClass.md#zipwith)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[zipWith](containers.RunnableObservableTypeClass.md#zipwith)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[zipWith](containers.RunnableObservableTypeClass.md#zipwith)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[zipWith](containers.RunnableObservableTypeClass.md#zipwith)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[zipWith](containers.RunnableObservableTypeClass.md#zipwith)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[zipWith](containers.RunnableObservableTypeClass.md#zipwith)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[zipWithLatestFrom](containers.RunnableObservableTypeClass.md#zipwithlatestfrom)

___

## Transform Methods

### everySatisfy

▸ **everySatisfy**<`T`\>(`predicate`): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, `boolean`\>

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

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, `boolean`\>

#### Inherited from

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[everySatisfy](containers.RunnableObservableTypeClass.md#everysatisfy)

___

### first

▸ **first**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, [`Optional`](../modules/functions.md#optional)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, [`Optional`](../modules/functions.md#optional)<`T`\>\>

#### Inherited from

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[first](containers.RunnableObservableTypeClass.md#first)

___

### firstAsync

▸ **firstAsync**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Inherited from

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[firstAsync](containers.RunnableObservableTypeClass.md#firstasync)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[firstAsync](containers.RunnableObservableTypeClass.md#firstasync)

___

### flow

▸ **flow**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, [`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\> & [`DisposableLike`](types.DisposableLike.md)\>

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

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, [`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\> & [`DisposableLike`](types.DisposableLike.md)\>

#### Inherited from

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[flow](containers.RunnableObservableTypeClass.md#flow)

___

### last

▸ **last**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, [`Optional`](../modules/functions.md#optional)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, [`Optional`](../modules/functions.md#optional)<`T`\>\>

#### Inherited from

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[last](containers.RunnableObservableTypeClass.md#last)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[lastAsync](containers.RunnableObservableTypeClass.md#lastasync)

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

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[lastAsync](containers.RunnableObservableTypeClass.md#lastasync)

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

#### Inherited from

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[multicast](containers.RunnableObservableTypeClass.md#multicast)

___

### noneSatisfy

▸ **noneSatisfy**<`T`\>(`predicate`): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, `boolean`\>

#### Inherited from

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[noneSatisfy](containers.RunnableObservableTypeClass.md#nonesatisfy)

___

### reduce

▸ **reduce**<`T`, `TAcc`\>(`reducer`, `initialValue`): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, `TAcc`\>

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

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, `TAcc`\>

#### Inherited from

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[reduce](containers.RunnableObservableTypeClass.md#reduce)

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

#### Inherited from

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[share](containers.RunnableObservableTypeClass.md#share)

___

### someSatisfy

▸ **someSatisfy**<`T`\>(`predicate`): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, `boolean`\>

#### Inherited from

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[someSatisfy](containers.RunnableObservableTypeClass.md#somesatisfy)

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, readonly `T`[]\>

Converts the Container to a `ReadonlyArrayContainer`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, readonly `T`[]\>

#### Inherited from

[RunnableObservableTypeClass](containers.RunnableObservableTypeClass.md).[toReadonlyArray](containers.RunnableObservableTypeClass.md#toreadonlyarray)
