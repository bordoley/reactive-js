[Reactive-JS](../README.md) / observable

# Module: observable

## Table of contents

### Classes

- [Observer](../classes/observable.Observer.md)

### Interfaces

- [DispatcherLike](../interfaces/observable.DispatcherLike.md)
- [MulticastObservableLike](../interfaces/observable.MulticastObservableLike.md)
- [ObservableLike](../interfaces/observable.ObservableLike.md)
- [StreamLike](../interfaces/observable.StreamLike.md)
- [SubjectLike](../interfaces/observable.SubjectLike.md)

### Type Aliases

- [AsyncReducer](observable.md#asyncreducer)
- [ObservableEffectMode](observable.md#observableeffectmode)
- [ObservableOperator](observable.md#observableoperator)
- [ThrottleMode](observable.md#throttlemode)

### Variables

- [concatAllT](observable.md#concatallt)
- [concatT](observable.md#concatt)
- [decodeWithCharsetT](observable.md#decodewithcharsett)
- [distinctUntilChangedT](observable.md#distinctuntilchangedt)
- [exhaustT](observable.md#exhaustt)
- [fromArrayT](observable.md#fromarrayt)
- [fromIteratorT](observable.md#fromiteratort)
- [keepT](observable.md#keept)
- [mapT](observable.md#mapt)
- [mergeAllT](observable.md#mergeallt)
- [pairwiseT](observable.md#pairwiset)
- [reduceT](observable.md#reducet)
- [scanT](observable.md#scant)
- [skipFirstT](observable.md#skipfirstt)
- [switchAllT](observable.md#switchallt)
- [takeFirstT](observable.md#takefirstt)
- [takeLastT](observable.md#takelastt)
- [takeWhileT](observable.md#takewhilet)
- [timeoutError](observable.md#timeouterror)
- [type](observable.md#type)
- [zipT](observable.md#zipt)

### Functions

- [\_\_currentScheduler](observable.md#__currentscheduler)
- [\_\_do](observable.md#__do)
- [\_\_memo](observable.md#__memo)
- [\_\_observe](observable.md#__observe)
- [\_\_using](observable.md#__using)
- [buffer](observable.md#buffer)
- [catchError](observable.md#catcherror)
- [combineLatest](observable.md#combinelatest)
- [combineLatestWith](observable.md#combinelatestwith)
- [concat](observable.md#concat)
- [concatAll](observable.md#concatall)
- [createObservable](observable.md#createobservable)
- [createSubject](observable.md#createsubject)
- [decodeWithCharset](observable.md#decodewithcharset)
- [defer](observable.md#defer)
- [dispatchTo](observable.md#dispatchto)
- [distinctUntilChanged](observable.md#distinctuntilchanged)
- [exhaust](observable.md#exhaust)
- [fromArray](observable.md#fromarray)
- [fromDisposable](observable.md#fromdisposable)
- [fromEnumerable](observable.md#fromenumerable)
- [fromIterable](observable.md#fromiterable)
- [fromIterator](observable.md#fromiterator)
- [fromPromise](observable.md#frompromise)
- [generate](observable.md#generate)
- [keep](observable.md#keep)
- [map](observable.md#map)
- [mapAsync](observable.md#mapasync)
- [merge](observable.md#merge)
- [mergeAll](observable.md#mergeall)
- [mergeWith](observable.md#mergewith)
- [never](observable.md#never)
- [observable](observable.md#observable)
- [onNotify](observable.md#onnotify)
- [onSubscribe](observable.md#onsubscribe)
- [pairwise](observable.md#pairwise)
- [publish](observable.md#publish)
- [reduce](observable.md#reduce)
- [repeat](observable.md#repeat)
- [retry](observable.md#retry)
- [scan](observable.md#scan)
- [scanAsync](observable.md#scanasync)
- [share](observable.md#share)
- [sink](observable.md#sink)
- [skipFirst](observable.md#skipfirst)
- [subscribe](observable.md#subscribe)
- [subscribeOn](observable.md#subscribeon)
- [switchAll](observable.md#switchall)
- [takeFirst](observable.md#takefirst)
- [takeLast](observable.md#takelast)
- [takeUntil](observable.md#takeuntil)
- [takeWhile](observable.md#takewhile)
- [throttle](observable.md#throttle)
- [throwIfEmpty](observable.md#throwifempty)
- [timeout](observable.md#timeout)
- [toEnumerable](observable.md#toenumerable)
- [toPromise](observable.md#topromise)
- [toRunnable](observable.md#torunnable)
- [using](observable.md#using)
- [withLatestFrom](observable.md#withlatestfrom)
- [zip](observable.md#zip)
- [zipLatest](observable.md#ziplatest)
- [zipLatestWith](observable.md#ziplatestwith)
- [zipWithLatestFrom](observable.md#zipwithlatestfrom)

## Type Aliases

### AsyncReducer

Ƭ **AsyncReducer**<`TAcc`, `T`\>: [`Function2`](functions.md#function2)<`TAcc`, `T`, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TAcc`\>\>

#### Type parameters

| Name |
| :------ |
| `TAcc` |
| `T` |

___

### ObservableEffectMode

Ƭ **ObservableEffectMode**: ``"batched"`` \| ``"combine-latest"``

___

### ObservableOperator

Ƭ **ObservableOperator**<`A`, `B`\>: [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`A`\>, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`B`\>\>

A function which converts an ObservableLike<A> to an ObservableLike<B>.

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

___

### ThrottleMode

Ƭ **ThrottleMode**: ``"first"`` \| ``"last"`` \| ``"interval"``

The throttle mode used by the `throttle` operator.
first - Takes a leading value.
last - Takes the trailing value.
interval -  Takes both the leading and trailing values.

## Variables

### concatAllT

• `Const` **concatAllT**: [`ConcatAll`](../interfaces/container.ConcatAll.md)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`unknown`\>, { `maxBufferSize`: `number`  }\>

___

### concatT

• `Const` **concatT**: [`Concat`](../interfaces/container.Concat.md)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`unknown`\>\>

___

### decodeWithCharsetT

• `Const` **decodeWithCharsetT**: [`DecodeWithCharset`](../interfaces/container.DecodeWithCharset.md)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`unknown`\>\>

___

### distinctUntilChangedT

• `Const` **distinctUntilChangedT**: [`DistinctUntilChanged`](../interfaces/container.DistinctUntilChanged.md)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`unknown`\>\>

___

### exhaustT

• `Const` **exhaustT**: [`ConcatAll`](../interfaces/container.ConcatAll.md)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`unknown`\>, `Record`<`string`, `never`\>\>

___

### fromArrayT

• `Const` **fromArrayT**: [`FromArray`](../interfaces/container.FromArray.md)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`unknown`\>, { `delay`: `number` ; `endIndex`: `number` ; `startIndex`: `number`  }\>

___

### fromIteratorT

• `Const` **fromIteratorT**: [`FromIterator`](../interfaces/container.FromIterator.md)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`unknown`\>, { `delay?`: `number`  }\>

___

### keepT

• `Const` **keepT**: [`Keep`](../interfaces/container.Keep.md)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`unknown`\>\>

___

### mapT

• `Const` **mapT**: [`Map`](../interfaces/container.Map.md)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`unknown`\>\>

___

### mergeAllT

• `Const` **mergeAllT**: [`ConcatAll`](../interfaces/container.ConcatAll.md)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`unknown`\>, { `maxBufferSize`: `number` ; `maxConcurrency`: `number`  }\>

___

### pairwiseT

• `Const` **pairwiseT**: [`Pairwise`](../interfaces/container.Pairwise.md)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`unknown`\>\>

___

### reduceT

• `Const` **reduceT**: [`Reduce`](../interfaces/container.Reduce.md)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`unknown`\>\>

___

### scanT

• `Const` **scanT**: [`Scan`](../interfaces/container.Scan.md)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`unknown`\>\>

___

### skipFirstT

• `Const` **skipFirstT**: [`SkipFirst`](../interfaces/container.SkipFirst.md)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`unknown`\>\>

___

### switchAllT

• `Const` **switchAllT**: [`ConcatAll`](../interfaces/container.ConcatAll.md)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`unknown`\>, `Record`<`string`, `never`\>\>

___

### takeFirstT

• `Const` **takeFirstT**: [`TakeFirst`](../interfaces/container.TakeFirst.md)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`unknown`\>\>

___

### takeLastT

• `Const` **takeLastT**: [`TakeLast`](../interfaces/container.TakeLast.md)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`unknown`\>\>

___

### takeWhileT

• `Const` **takeWhileT**: [`TakeWhile`](../interfaces/container.TakeWhile.md)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`unknown`\>\>

___

### timeoutError

• `Const` **timeoutError**: `symbol`

Symbol thrown when the timeout operator times out

___

### type

• `Const` **type**: [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`unknown`\>

___

### zipT

• `Const` **zipT**: [`Zip`](../interfaces/container.Zip.md)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`unknown`\>\>

## Functions

### \_\_currentScheduler

▸ **__currentScheduler**(): [`SchedulerLike`](../interfaces/scheduler.SchedulerLike.md)

#### Returns

[`SchedulerLike`](../interfaces/scheduler.SchedulerLike.md)

___

### \_\_do

▸ **__do**(`fn`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`SideEffect`](functions.md#sideeffect) |

#### Returns

`void`

▸ **__do**<`TA`\>(`fn`, `a`): `void`

#### Type parameters

| Name |
| :------ |
| `TA` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`SideEffect1`](functions.md#sideeffect1)<`TA`\> |
| `a` | `TA` |

#### Returns

`void`

▸ **__do**<`TA`, `TB`\>(`fn`, `a`, `b`): `void`

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`SideEffect2`](functions.md#sideeffect2)<`TA`, `TB`\> |
| `a` | `TA` |
| `b` | `TB` |

#### Returns

`void`

▸ **__do**<`TA`, `TB`, `TC`\>(`fn`, `a`, `b`, `c`): `void`

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`SideEffect3`](functions.md#sideeffect3)<`TA`, `TB`, `TC`\> |
| `a` | `TA` |
| `b` | `TB` |
| `c` | `TC` |

#### Returns

`void`

▸ **__do**<`TA`, `TB`, `TC`, `TD`\>(`fn`, `a`, `b`, `c`, `d`): `void`

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
| `fn` | [`SideEffect4`](functions.md#sideeffect4)<`TA`, `TB`, `TC`, `TD`\> |
| `a` | `TA` |
| `b` | `TB` |
| `c` | `TC` |
| `d` | `TD` |

#### Returns

`void`

▸ **__do**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`fn`, `a`, `b`, `c`, `d`, `e`): `void`

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
| `fn` | [`SideEffect5`](functions.md#sideeffect5)<`TA`, `TB`, `TC`, `TD`, `TE`\> |
| `a` | `TA` |
| `b` | `TB` |
| `c` | `TC` |
| `d` | `TD` |
| `e` | `TE` |

#### Returns

`void`

▸ **__do**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`fn`, `a`, `b`, `c`, `d`, `e`, `f`): `void`

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
| `fn` | [`SideEffect6`](functions.md#sideeffect6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\> |
| `a` | `TA` |
| `b` | `TB` |
| `c` | `TC` |
| `d` | `TD` |
| `e` | `TE` |
| `f` | `TF` |

#### Returns

`void`

___

### \_\_memo

▸ **__memo**<`T`\>(`fn`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`Factory`](functions.md#factory)<`T`\> |

#### Returns

`T`

▸ **__memo**<`TA`, `T`\>(`fn`, `a`): `T`

#### Type parameters

| Name |
| :------ |
| `TA` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`Function1`](functions.md#function1)<`TA`, `T`\> |
| `a` | `TA` |

#### Returns

`T`

▸ **__memo**<`TA`, `TB`, `T`\>(`fn`, `a`, `b`): `T`

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`Function2`](functions.md#function2)<`TA`, `TB`, `T`\> |
| `a` | `TA` |
| `b` | `TB` |

#### Returns

`T`

▸ **__memo**<`TA`, `TB`, `TC`, `T`\>(`fn`, `a`, `b`, `c`): `T`

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`Function3`](functions.md#function3)<`TA`, `TB`, `TC`, `T`\> |
| `a` | `TA` |
| `b` | `TB` |
| `c` | `TC` |

#### Returns

`T`

▸ **__memo**<`TA`, `TB`, `TC`, `TD`, `T`\>(`fn`, `a`, `b`, `c`, `d`): `T`

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`Function4`](functions.md#function4)<`TA`, `TB`, `TC`, `TD`, `T`\> |
| `a` | `TA` |
| `b` | `TB` |
| `c` | `TC` |
| `d` | `TD` |

#### Returns

`T`

▸ **__memo**<`TA`, `TB`, `TC`, `TD`, `TE`, `T`\>(`fn`, `a`, `b`, `c`, `d`, `e`): `T`

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`Function5`](functions.md#function5)<`TA`, `TB`, `TC`, `TD`, `TE`, `T`\> |
| `a` | `TA` |
| `b` | `TB` |
| `c` | `TC` |
| `d` | `TD` |
| `e` | `TE` |

#### Returns

`T`

▸ **__memo**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `T`\>(`fn`, `a`, `b`, `c`, `d`, `e`, `f`): `T`

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |
| `TF` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`Function6`](functions.md#function6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `T`\> |
| `a` | `TA` |
| `b` | `TB` |
| `c` | `TC` |
| `d` | `TD` |
| `e` | `TE` |
| `f` | `TF` |

#### Returns

`T`

___

### \_\_observe

▸ **__observe**<`T`\>(`observable`): [`Option`](option.md#option)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observable` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\> |

#### Returns

[`Option`](option.md#option)<`T`\>

___

### \_\_using

▸ **__using**<`T`\>(`fn`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`Factory`](functions.md#factory)<`T`\> |

#### Returns

`T`

▸ **__using**<`TA`, `T`\>(`fn`, `a`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TA` | `TA` |
| `T` | extends [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`Function1`](functions.md#function1)<`TA`, `T`\> |
| `a` | `TA` |

#### Returns

`T`

▸ **__using**<`TA`, `TB`, `T`\>(`fn`, `a`, `b`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TA` | `TA` |
| `TB` | `TB` |
| `T` | extends [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`Function2`](functions.md#function2)<`TA`, `TB`, `T`\> |
| `a` | `TA` |
| `b` | `TB` |

#### Returns

`T`

▸ **__using**<`TA`, `TB`, `TC`, `T`\>(`fn`, `a`, `b`, `c`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TA` | `TA` |
| `TB` | `TB` |
| `TC` | `TC` |
| `T` | extends [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`Function3`](functions.md#function3)<`TA`, `TB`, `TC`, `T`\> |
| `a` | `TA` |
| `b` | `TB` |
| `c` | `TC` |

#### Returns

`T`

▸ **__using**<`TA`, `TB`, `TC`, `TD`, `T`\>(`fn`, `a`, `b`, `c`, `d`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TA` | `TA` |
| `TB` | `TB` |
| `TC` | `TC` |
| `TD` | `TD` |
| `T` | extends [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`Function4`](functions.md#function4)<`TA`, `TB`, `TC`, `TD`, `T`\> |
| `a` | `TA` |
| `b` | `TB` |
| `c` | `TC` |
| `d` | `TD` |

#### Returns

`T`

▸ **__using**<`TA`, `TB`, `TC`, `TD`, `TE`, `T`\>(`fn`, `a`, `b`, `c`, `d`, `e`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TA` | `TA` |
| `TB` | `TB` |
| `TC` | `TC` |
| `TD` | `TD` |
| `TE` | `TE` |
| `T` | extends [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`Function5`](functions.md#function5)<`TA`, `TB`, `TC`, `TD`, `TE`, `T`\> |
| `a` | `TA` |
| `b` | `TB` |
| `c` | `TC` |
| `d` | `TD` |
| `e` | `TE` |

#### Returns

`T`

▸ **__using**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `T`\>(`fn`, `a`, `b`, `c`, `d`, `e`, `f`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TA` | `TA` |
| `TB` | `TB` |
| `TC` | `TC` |
| `TD` | `TD` |
| `TE` | `TE` |
| `TF` | `TF` |
| `T` | extends [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`Function6`](functions.md#function6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `T`\> |
| `a` | `TA` |
| `b` | `TB` |
| `c` | `TC` |
| `d` | `TD` |
| `e` | `TE` |
| `f` | `TF` |

#### Returns

`T`

___

### buffer

▸ **buffer**<`T`\>(`options?`): [`ObservableOperator`](observable.md#observableoperator)<`T`, readonly `T`[]\>

Returns an `ObservableLike` which buffers items produced by the source until either the
number of items reaches the specified maximum buffer size or the duration time expires.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Object` | A configuration object that specifies an optional `duration` function or time in ms, and an optional `maxBufferSize`. |
| `options.duration?` | `number` \| [`Function1`](functions.md#function1)<`T`, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`unknown`\>\> | - |
| `options.maxBufferSize?` | `number` | - |

#### Returns

[`ObservableOperator`](observable.md#observableoperator)<`T`, readonly `T`[]\>

___

### catchError

▸ **catchError**<`T`\>(`onError`): [`ObservableOperator`](observable.md#observableoperator)<`T`, `T`\>

Returns an `ObservableLike` which catches errors produced by the source and either continues with
the `ObservableLike` returned from the `onError` callback or swallows the error if
void is returned.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `onError` | [`Function1`](functions.md#function1)<`unknown`, `void` \| [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>\> | a function that takes source error and either returns an `ObservableLike` to continue with or void if the error should be propagated. |

#### Returns

[`ObservableOperator`](observable.md#observableoperator)<`T`, `T`\>

___

### combineLatest

▸ **combineLatest**<`TA`, `TB`\>(`a`, `b`): [`ObservableLike`](../interfaces/observable.ObservableLike.md)<[`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TB`\> |

#### Returns

[`ObservableLike`](../interfaces/observable.ObservableLike.md)<[`TA`, `TB`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `T`\>(`a`, `b`, `c`): [`ObservableLike`](../interfaces/observable.ObservableLike.md)<[`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TC`\> |

#### Returns

[`ObservableLike`](../interfaces/observable.ObservableLike.md)<[`TA`, `TB`, `TC`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`ObservableLike`](../interfaces/observable.ObservableLike.md)<[`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TD`\> |

#### Returns

[`ObservableLike`](../interfaces/observable.ObservableLike.md)<[`TA`, `TB`, `TC`, `TD`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`ObservableLike`](../interfaces/observable.ObservableLike.md)<[`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TE`\> |

#### Returns

[`ObservableLike`](../interfaces/observable.ObservableLike.md)<[`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`ObservableLike`](../interfaces/observable.ObservableLike.md)<[`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TF`\> |

#### Returns

[`ObservableLike`](../interfaces/observable.ObservableLike.md)<[`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`ObservableLike`](../interfaces/observable.ObservableLike.md)<[`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TG`\> |

#### Returns

[`ObservableLike`](../interfaces/observable.ObservableLike.md)<[`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`ObservableLike`](../interfaces/observable.ObservableLike.md)<[`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TG`\> |
| `h` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TH`\> |

#### Returns

[`ObservableLike`](../interfaces/observable.ObservableLike.md)<[`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`ObservableLike`](../interfaces/observable.ObservableLike.md)<[`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TG`\> |
| `h` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TH`\> |
| `i` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TI`\> |

#### Returns

[`ObservableLike`](../interfaces/observable.ObservableLike.md)<[`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

### combineLatestWith

▸ **combineLatestWith**<`TA`, `TB`\>(`snd`): [`ObservableOperator`](observable.md#observableoperator)<`TA`, [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TB`\> |

#### Returns

[`ObservableOperator`](observable.md#observableoperator)<`TA`, [`TA`, `TB`]\>

___

### concat

▸ **concat**<`T`\>(`fst`, `snd`, ...`tail`): [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>

Creates an `ObservableLike` which emits all values from each source sequentially.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\> |
| `snd` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\> |
| `...tail` | readonly [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>[] |

#### Returns

[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>

___

### concatAll

▸ **concatAll**<`T`\>(`options?`): [`ObservableOperator`](observable.md#observableoperator)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>, `T`\>

Converts a higher-order `ObservableLike` into a first-order
`ObservableLike` by concatenating the inner sources in order.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.maxBufferSize?` | `number` |

#### Returns

[`ObservableOperator`](observable.md#observableoperator)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>, `T`\>

___

### createObservable

▸ **createObservable**<`T`\>(`onSubscribe`): [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>

Factory for safely creating new `ObservableLike` instances. The onSubscribe function
is called with a `SafeObserverLike` that may be notified from any context.

Note, implementations should not do significant blocking work in
the onSubscribe function.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `onSubscribe` | [`SideEffect1`](functions.md#sideeffect1)<[`DispatcherLike`](../interfaces/observable.DispatcherLike.md)<`T`\>\> |

#### Returns

[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>

___

### createSubject

▸ **createSubject**<`T`\>(`options?`): [`SubjectLike`](../interfaces/observable.SubjectLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.replay?` | `number` |

#### Returns

[`SubjectLike`](../interfaces/observable.SubjectLike.md)<`T`\>

___

### decodeWithCharset

▸ **decodeWithCharset**(`charset?`): [`ObservableOperator`](observable.md#observableoperator)<`ArrayBuffer`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `charset?` | `string` |

#### Returns

[`ObservableOperator`](observable.md#observableoperator)<`ArrayBuffer`, `string`\>

___

### defer

▸ **defer**<`T`\>(`factory`, `options?`): [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Function1`](functions.md#function1)<[`Observer`](../classes/observable.Observer.md)<`T`\>, [`SideEffect`](functions.md#sideeffect)\> |
| `options?` | `Object` |
| `options.delay?` | `number` |

#### Returns

[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>

___

### dispatchTo

▸ **dispatchTo**<`T`\>(`dispatcher`): [`SideEffect1`](functions.md#sideeffect1)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatcher` | [`DispatcherLike`](../interfaces/observable.DispatcherLike.md)<`T`\> |

#### Returns

[`SideEffect1`](functions.md#sideeffect1)<`T`\>

___

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`ObservableOperator`](observable.md#observableoperator)<`T`, `T`\>

Returns an `ObservableLike` that emits all items emitted by the source that
are distinct by comparison from the previous item.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.equality?` | [`Equality`](functions.md#equality)<`T`\> |

#### Returns

[`ObservableOperator`](observable.md#observableoperator)<`T`, `T`\>

___

### exhaust

▸ **exhaust**<`T`\>(): [`ObservableOperator`](observable.md#observableoperator)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>, `T`\>

Converts a higher-order `ObservableLike` into a first-order `ObservableLike`
by dropping inner sources while the previous inner source
has not yet been disposed.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ObservableOperator`](observable.md#observableoperator)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>, `T`\>

___

### fromArray

▸ **fromArray**<`T`\>(`options?`): [`Function1`](functions.md#function1)<readonly `T`[], [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>\>

Creates an `ObservableLike` from the given array with a specified `delay` between emitted items.
An optional `startIndex` in the array maybe specified,

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Object` | Config object that specifies an optional `delay` between emitted items and an optional `startIndex` into the array. |
| `options.delay?` | `number` | - |
| `options.endIndex?` | `number` | - |
| `options.startIndex?` | `number` | - |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>\>

___

### fromDisposable

▸ **fromDisposable**(`disposable`): [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `disposable` | [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |

#### Returns

[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`unknown`\>

___

### fromEnumerable

▸ **fromEnumerable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`T`\>, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>\>

Creates an `ObservableLike` which enumerates through the values
produced by the provided `Enumerable` with a specified `delay` between emitted items.

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

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`T`\>, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>\>

___

### fromIterable

▸ **fromIterable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>\>

Creates an `ObservableLike` which iterates through the values
produced by the provided `Iterable` with a specified `delay` between emitted items.

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

[`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>\>

___

### fromIterator

▸ **fromIterator**<`T`, `TReturn`, `TNext`\>(`options?`): [`Function1`](functions.md#function1)<[`Factory`](functions.md#factory)<`Iterator`<`T`, `TReturn`, `TNext`\>\>, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>\>

Creates an `ObservableLike` which iterates through the values
produced by the provided `Iterator` with a specified `delay` between emitted items.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TReturn` | `any` |
| `TNext` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.delay?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`Factory`](functions.md#factory)<`Iterator`<`T`, `TReturn`, `TNext`\>\>, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>\>

___

### fromPromise

▸ **fromPromise**<`T`\>(`factory`): [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>

Converts a `Promise` to an `ObservableLike`. The provided promise factory
is invoked for each observer to the observable.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `factory` | [`Factory`](functions.md#factory)<`Promise`<`T`\>\> | Factory function to create a new `Promise` instance. |

#### Returns

[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>

___

### generate

▸ **generate**<`T`\>(`generator`, `initialValue`, `options?`): [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>

Generates an `ObservableLike` sequence from a generator function
that is applied to an accumulator value with a specified `delay`
between emitted items.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `generator` | [`Updater`](functions.md#updater)<`T`\> | the generator function. |
| `initialValue` | [`Factory`](functions.md#factory)<`T`\> | Factory function used to generate the initial accumulator. |
| `options?` | `Object` | - |
| `options.delay?` | `number` | - |

#### Returns

[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>

___

### keep

▸ **keep**<`T`\>(`predicate`): [`ObservableOperator`](observable.md#observableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`ObservableOperator`](observable.md#observableoperator)<`T`, `T`\>

___

### map

▸ **map**<`TA`, `TB`\>(`mapper`): [`ObservableOperator`](observable.md#observableoperator)<`TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapper` | [`Function1`](functions.md#function1)<`TA`, `TB`\> |

#### Returns

[`ObservableOperator`](observable.md#observableoperator)<`TA`, `TB`\>

___

### mapAsync

▸ **mapAsync**<`TA`, `TB`\>(`f`): [`ObservableOperator`](observable.md#observableoperator)<`TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Function1`](functions.md#function1)<`TA`, `Promise`<`TB`\>\> |

#### Returns

[`ObservableOperator`](observable.md#observableoperator)<`TA`, `TB`\>

___

### merge

▸ **merge**<`T`\>(`fst`, `snd`, ...`tail`): [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>

 Creates an `ObservableLike` which concurrently emits values from the sources.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\> |
| `snd` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\> |
| `...tail` | readonly [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>[] |

#### Returns

[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>

___

### mergeAll

▸ **mergeAll**<`T`\>(`options?`): [`ObservableOperator`](observable.md#observableoperator)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>, `T`\>

Converts a higher-order `ObservableLike` into a first-order `ObservableLike`
which concurrently delivers values emitted by the inner sources.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Object` | Optional configuration object. The `maxBufferSize` property specifies how many source observables may be queued before dropping previous observables. The `maxConcurrency` property specifies the maximum number of inner observables that may be subscribed to concurrently. |
| `options.maxBufferSize?` | `number` | - |
| `options.maxConcurrency?` | `number` | - |

#### Returns

[`ObservableOperator`](observable.md#observableoperator)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>, `T`\>

___

### mergeWith

▸ **mergeWith**<`T`\>(`snd`): [`ObservableOperator`](observable.md#observableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\> |

#### Returns

[`ObservableOperator`](observable.md#observableoperator)<`T`, `T`\>

___

### never

▸ **never**<`T`\>(): [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>

Returna an `ObservableLike` instance that emits no items and never disposes its observer.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>

___

### observable

▸ **observable**<`T`\>(`computation`, `__namedParameters?`): [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `computation` | [`Factory`](functions.md#factory)<`T`\> |
| `__namedParameters?` | `Object` |
| `__namedParameters.mode?` | [`ObservableEffectMode`](observable.md#observableeffectmode) |

#### Returns

[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>

___

### onNotify

▸ **onNotify**<`T`\>(`onNotify`): [`ObservableOperator`](observable.md#observableoperator)<`T`, `T`\>

Returns an `ObservableLike` that forwards notifications to the provided `onNotify` function.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `onNotify` | [`SideEffect1`](functions.md#sideeffect1)<`T`\> | The function that is invoked when the observable source produces values. |

#### Returns

[`ObservableOperator`](observable.md#observableoperator)<`T`, `T`\>

___

### onSubscribe

▸ **onSubscribe**<`T`\>(`f`): [`ObservableOperator`](observable.md#observableoperator)<`T`, `T`\>

Executes a side-effect when the observable is subscribed.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Factory`](functions.md#factory)<`void` \| [`DisposableOrTeardown`](disposable.md#disposableorteardown)\> |

#### Returns

[`ObservableOperator`](observable.md#observableoperator)<`T`, `T`\>

___

### pairwise

▸ **pairwise**<`T`\>(): [`ObservableOperator`](observable.md#observableoperator)<`T`, [[`Option`](option.md#option)<`T`\>, `T`]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ObservableOperator`](observable.md#observableoperator)<`T`, [[`Option`](option.md#option)<`T`\>, `T`]\>

___

### publish

▸ **publish**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>, [`MulticastObservableLike`](../interfaces/observable.MulticastObservableLike.md)<`T`\>\>

Returns a `MulticastObservableLike` backed by a single subscription to the source.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/scheduler.SchedulerLike.md) | A `SchedulerLike` that is used to subscribe to the source observable. |
| `options?` | `Object` | - |
| `options.replay?` | `number` | - |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>, [`MulticastObservableLike`](../interfaces/observable.MulticastObservableLike.md)<`T`\>\>

___

### reduce

▸ **reduce**<`T`, `TAcc`\>(`reducer`, `initialValue`): [`ObservableOperator`](observable.md#observableoperator)<`T`, `TAcc`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Reducer`](functions.md#reducer)<`T`, `TAcc`\> |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc`\> |

#### Returns

[`ObservableOperator`](observable.md#observableoperator)<`T`, `TAcc`\>

___

### repeat

▸ **repeat**<`T`\>(`predicate`): [`ObservableOperator`](observable.md#observableoperator)<`T`, `T`\>

Returns an `ObservableLike` that applies the predicate function each time the source
completes to determine if the subscription should be renewed.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`number`\> | The predicate function to apply. |

#### Returns

[`ObservableOperator`](observable.md#observableoperator)<`T`, `T`\>

▸ **repeat**<`T`\>(`count`): [`ObservableOperator`](observable.md#observableoperator)<`T`, `T`\>

Returns an `ObservableLike` that repeats the source count times.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

[`ObservableOperator`](observable.md#observableoperator)<`T`, `T`\>

▸ **repeat**<`T`\>(): [`ObservableOperator`](observable.md#observableoperator)<`T`, `T`\>

Returns an `ObservableLike` that continually repeats the source.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ObservableOperator`](observable.md#observableoperator)<`T`, `T`\>

___

### retry

▸ **retry**<`T`\>(): [`ObservableOperator`](observable.md#observableoperator)<`T`, `T`\>

Returns an `ObservableLike` that mirrors the source, re-subscribing
if the source completes with an error.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ObservableOperator`](observable.md#observableoperator)<`T`, `T`\>

▸ **retry**<`T`\>(`predicate`): [`ObservableOperator`](observable.md#observableoperator)<`T`, `T`\>

Returns an `ObservableLike` that mirrors the source, resubscrbing
if the source completes with an error which satisfies the predicate function.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Function2`](functions.md#function2)<`number`, `unknown`, `boolean`\> |

#### Returns

[`ObservableOperator`](observable.md#observableoperator)<`T`, `T`\>

___

### scan

▸ **scan**<`T`, `TAcc`\>(`reducer`, `initialValue`): [`ObservableOperator`](observable.md#observableoperator)<`T`, `TAcc`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Reducer`](functions.md#reducer)<`T`, `TAcc`\> |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc`\> |

#### Returns

[`ObservableOperator`](observable.md#observableoperator)<`T`, `TAcc`\>

___

### scanAsync

▸ **scanAsync**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`ObservableOperator`](observable.md#observableoperator)<`T`, `TAcc`\>

Returns the `ObservableLike` that applies an asynchronous accumulator function
over the source, and emits each intermediate result.

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scanner` | [`AsyncReducer`](observable.md#asyncreducer)<`TAcc`, `T`\> | The accumulator function called on each source value. |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc`\> | The initial accumulation value. |

#### Returns

[`ObservableOperator`](observable.md#observableoperator)<`T`, `TAcc`\>

___

### share

▸ **share**<`T`\>(`scheduler`, `options?`): [`ObservableOperator`](observable.md#observableoperator)<`T`, `T`\>

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
| `scheduler` | [`SchedulerLike`](../interfaces/scheduler.SchedulerLike.md) | A `SchedulerLike` that is used to subscribe to the source. |
| `options?` | `Object` | - |
| `options.replay?` | `number` | - |

#### Returns

[`ObservableOperator`](observable.md#observableoperator)<`T`, `T`\>

___

### sink

▸ **sink**<`T`\>(`observer`): [`SideEffect1`](functions.md#sideeffect1)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observer` | [`Observer`](../classes/observable.Observer.md)<`T`\> |

#### Returns

[`SideEffect1`](functions.md#sideeffect1)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>\>

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`ObservableOperator`](observable.md#observableoperator)<`T`, `T`\>

Returns an `ObservableLike` that skips the first count items emitted by the source.

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

[`ObservableOperator`](observable.md#observableoperator)<`T`, `T`\>

___

### subscribe

▸ **subscribe**<`T`\>(`scheduler`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>, [`DisposableLike`](../interfaces/disposable.DisposableLike.md)\>

Safely subscribes to an `ObservableLike` with a `ObserverLike` instance
using the provided scheduler. The returned `DisposableLike`
may used to cancel the subscription.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/scheduler.SchedulerLike.md) | The SchedulerLike instance that should be used by the source to notify it's observer. |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>, [`DisposableLike`](../interfaces/disposable.DisposableLike.md)\>

▸ **subscribe**<`T`\>(`scheduler`, `onNotify`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>, [`DisposableLike`](../interfaces/disposable.DisposableLike.md)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/scheduler.SchedulerLike.md) |
| `onNotify` | [`SideEffect1`](functions.md#sideeffect1)<`T`\> |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>, [`DisposableLike`](../interfaces/disposable.DisposableLike.md)\>

▸ **subscribe**<`This`, `T`\>(`scheduler`, `onNotify`, `onNotifyThis`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>, [`DisposableLike`](../interfaces/disposable.DisposableLike.md)\>

#### Type parameters

| Name |
| :------ |
| `This` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/scheduler.SchedulerLike.md) |
| `onNotify` | (`this`: `This`, `value`: `T`) => `void` |
| `onNotifyThis` | `This` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>, [`DisposableLike`](../interfaces/disposable.DisposableLike.md)\>

___

### subscribeOn

▸ **subscribeOn**<`T`\>(`scheduler`): [`ObservableOperator`](observable.md#observableoperator)<`T`, `T`\>

Returns an `ObservableLike` instance that subscribes to the source on the specified `SchedulerLike`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/scheduler.SchedulerLike.md) | `SchedulerLike` instance to use when subscribing to the source. |

#### Returns

[`ObservableOperator`](observable.md#observableoperator)<`T`, `T`\>

___

### switchAll

▸ **switchAll**<`T`\>(): [`ObservableOperator`](observable.md#observableoperator)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>, `T`\>

Converts a higher-order `ObservableLike` into a first-order `ObservableLike` producing
values only from the most recent source.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ObservableOperator`](observable.md#observableoperator)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>, `T`\>

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`ObservableOperator`](observable.md#observableoperator)<`T`, `T`\>

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

[`ObservableOperator`](observable.md#observableoperator)<`T`, `T`\>

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`ObservableOperator`](observable.md#observableoperator)<`T`, `T`\>

Returns an `ObservableLike` that only emits the last `count` items emitted by the source.

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

[`ObservableOperator`](observable.md#observableoperator)<`T`, `T`\>

___

### takeUntil

▸ **takeUntil**<`T`\>(`notifier`): [`ObservableOperator`](observable.md#observableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `notifier` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`unknown`\> |

#### Returns

[`ObservableOperator`](observable.md#observableoperator)<`T`, `T`\>

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`ObservableOperator`](observable.md#observableoperator)<`T`, `T`\>

Returns an `ObservableLike` which emits values emitted by the source as long
as each value satisfies the given predicate, and then completes as soon as
this predicate is not satisfied.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> | The predicate function. |
| `options?` | `Object` | - |
| `options.inclusive?` | `boolean` | - |

#### Returns

[`ObservableOperator`](observable.md#observableoperator)<`T`, `T`\>

___

### throttle

▸ **throttle**<`T`\>(`duration`, `options?`): [`ObservableOperator`](observable.md#observableoperator)<`T`, `T`\>

Emits a value from the source, then ignores subsequent source values for a duration determined by another observable.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `duration` | [`Function1`](functions.md#function1)<`T`, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`unknown`\>\> | Function function that is used to determine the silence duration in between emitted values. |
| `options?` | `Object` | - |
| `options.mode?` | [`ThrottleMode`](observable.md#throttlemode) | - |

#### Returns

[`ObservableOperator`](observable.md#observableoperator)<`T`, `T`\>

▸ **throttle**<`T`\>(`duration`, `options?`): [`ObservableOperator`](observable.md#observableoperator)<`T`, `T`\>

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
| `options.mode?` | [`ThrottleMode`](observable.md#throttlemode) | - |

#### Returns

[`ObservableOperator`](observable.md#observableoperator)<`T`, `T`\>

___

### throwIfEmpty

▸ **throwIfEmpty**<`T`\>(`factory`): [`ObservableOperator`](observable.md#observableoperator)<`T`, `T`\>

Returns an `ObservableLike` that emits an error if the source completes without emitting a value.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `factory` | [`Factory`](functions.md#factory)<`unknown`\> | A factory function invoked to produce the error to be thrown. |

#### Returns

[`ObservableOperator`](observable.md#observableoperator)<`T`, `T`\>

___

### timeout

▸ **timeout**<`T`\>(`duration`): [`ObservableOperator`](observable.md#observableoperator)<`T`, `T`\>

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

[`ObservableOperator`](observable.md#observableoperator)<`T`, `T`\>

▸ **timeout**<`T`\>(`duration`): [`ObservableOperator`](observable.md#observableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `duration` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`unknown`\> |

#### Returns

[`ObservableOperator`](observable.md#observableoperator)<`T`, `T`\>

___

### toEnumerable

▸ **toEnumerable**<`T`\>(): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>, [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>, [`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`T`\>\>

___

### toPromise

▸ **toPromise**<`T`\>(`scheduler`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>, `Promise`<`T`\>\>

Returns a Promise that completes with the last value produced by
the source.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/scheduler.SchedulerLike.md) | The scheduler upon which to subscribe to the source. |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>, `Promise`<`T`\>\>

___

### toRunnable

▸ **toRunnable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>, [`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.schedulerFactory?` | [`Factory`](functions.md#factory)<[`VirtualTimeSchedulerLike`](../interfaces/scheduler.VirtualTimeSchedulerLike.md)\> |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>, [`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`T`\>\>

___

### using

▸ **using**<`TResource`, `T`\>(`resourceFactory`, `observableFactory`): [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResource` | extends [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `resourceFactory` | [`Function1`](functions.md#function1)<[`SchedulerLike`](../interfaces/scheduler.SchedulerLike.md), `TResource`\> |
| `observableFactory` | [`Function1`](functions.md#function1)<`TResource`, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>\> |

#### Returns

[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>

▸ **using**<`TResource1`, `TResource2`, `T`\>(`resourceFactory`, `observableFactory`): [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResource1` | extends [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |
| `TResource2` | extends [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `resourceFactory` | [`Function1`](functions.md#function1)<[`SchedulerLike`](../interfaces/scheduler.SchedulerLike.md), [`TResource1`, `TResource2`]\> |
| `observableFactory` | [`Function2`](functions.md#function2)<`TResource1`, `TResource2`, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>\> |

#### Returns

[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>

▸ **using**<`TResource1`, `TResource2`, `TResource3`, `T`\>(`resourceFactory`, `observableFactory`): [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResource1` | extends [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |
| `TResource2` | extends [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |
| `TResource3` | extends [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `resourceFactory` | [`Function1`](functions.md#function1)<[`SchedulerLike`](../interfaces/scheduler.SchedulerLike.md), [`TResource1`, `TResource2`, `TResource3`]\> |
| `observableFactory` | [`Function3`](functions.md#function3)<`TResource1`, `TResource2`, `TResource3`, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>\> |

#### Returns

[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>

▸ **using**<`TResource1`, `TResource2`, `TResource3`, `TResource4`, `T`\>(`resourceFactory`, `observableFactory`): [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResource1` | extends [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |
| `TResource2` | extends [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |
| `TResource3` | extends [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |
| `TResource4` | extends [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `resourceFactory` | [`Function1`](functions.md#function1)<[`SchedulerLike`](../interfaces/scheduler.SchedulerLike.md), [`TResource1`, `TResource2`, `TResource3`, `TResource4`]\> |
| `observableFactory` | [`Function4`](functions.md#function4)<`TResource1`, `TResource2`, `TResource3`, `TResource4`, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>\> |

#### Returns

[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>

▸ **using**<`TResource1`, `TResource2`, `TResource3`, `TResource4`, `TResource5`, `T`\>(`resourceFactory`, `observableFactory`): [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResource1` | extends [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |
| `TResource2` | extends [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |
| `TResource3` | extends [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |
| `TResource4` | extends [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |
| `TResource5` | extends [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `resourceFactory` | [`Function1`](functions.md#function1)<[`SchedulerLike`](../interfaces/scheduler.SchedulerLike.md), [`TResource1`, `TResource2`, `TResource3`, `TResource4`, `TResource5`]\> |
| `observableFactory` | [`Function5`](functions.md#function5)<`TResource1`, `TResource2`, `TResource3`, `TResource4`, `TResource5`, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>\> |

#### Returns

[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>

▸ **using**<`TResource`, `T`\>(`resourceFactory`, `observableFactory`): [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResource` | extends [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `resourceFactory` | [`Function1`](functions.md#function1)<[`SchedulerLike`](../interfaces/scheduler.SchedulerLike.md), `TResource` \| readonly `TResource`[]\> |
| `observableFactory` | (...`resources`: readonly `TResource`[]) => [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\> |

#### Returns

[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>

___

### withLatestFrom

▸ **withLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`ObservableOperator`](observable.md#observableoperator)<`TA`, `T`\>

Returns an `ObservableLike` which combines the source with
the latest value from another `ObservableLike`.

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TB`\> |
| `selector` | [`Function2`](functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`ObservableOperator`](observable.md#observableoperator)<`TA`, `T`\>

___

### zip

▸ **zip**<`TA`, `TB`\>(`a`, `b`): [`ObservableLike`](../interfaces/observable.ObservableLike.md)<[`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TB`\> |

#### Returns

[`ObservableLike`](../interfaces/observable.ObservableLike.md)<[`TA`, `TB`]\>

▸ **zip**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`ObservableLike`](../interfaces/observable.ObservableLike.md)<[`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TC`\> |

#### Returns

[`ObservableLike`](../interfaces/observable.ObservableLike.md)<[`TA`, `TB`, `TC`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`ObservableLike`](../interfaces/observable.ObservableLike.md)<[`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TD`\> |

#### Returns

[`ObservableLike`](../interfaces/observable.ObservableLike.md)<[`TA`, `TB`, `TC`, `TD`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`ObservableLike`](../interfaces/observable.ObservableLike.md)<[`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TE`\> |

#### Returns

[`ObservableLike`](../interfaces/observable.ObservableLike.md)<[`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`ObservableLike`](../interfaces/observable.ObservableLike.md)<[`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TF`\> |

#### Returns

[`ObservableLike`](../interfaces/observable.ObservableLike.md)<[`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`ObservableLike`](../interfaces/observable.ObservableLike.md)<[`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TG`\> |

#### Returns

[`ObservableLike`](../interfaces/observable.ObservableLike.md)<[`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`ObservableLike`](../interfaces/observable.ObservableLike.md)<[`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TG`\> |
| `h` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TH`\> |

#### Returns

[`ObservableLike`](../interfaces/observable.ObservableLike.md)<[`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`ObservableLike`](../interfaces/observable.ObservableLike.md)<[`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TG`\> |
| `h` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TH`\> |
| `i` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TI`\> |

#### Returns

[`ObservableLike`](../interfaces/observable.ObservableLike.md)<[`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

### zipLatest

▸ **zipLatest**<`TA`, `TB`\>(`a`, `b`): [`ObservableLike`](../interfaces/observable.ObservableLike.md)<[`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TB`\> |

#### Returns

[`ObservableLike`](../interfaces/observable.ObservableLike.md)<[`TA`, `TB`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `T`\>(`a`, `b`, `c`): [`ObservableLike`](../interfaces/observable.ObservableLike.md)<[`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TC`\> |

#### Returns

[`ObservableLike`](../interfaces/observable.ObservableLike.md)<[`TA`, `TB`, `TC`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`ObservableLike`](../interfaces/observable.ObservableLike.md)<[`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TD`\> |

#### Returns

[`ObservableLike`](../interfaces/observable.ObservableLike.md)<[`TA`, `TB`, `TC`, `TD`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`ObservableLike`](../interfaces/observable.ObservableLike.md)<[`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TE`\> |

#### Returns

[`ObservableLike`](../interfaces/observable.ObservableLike.md)<[`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`ObservableLike`](../interfaces/observable.ObservableLike.md)<[`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TF`\> |

#### Returns

[`ObservableLike`](../interfaces/observable.ObservableLike.md)<[`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`ObservableLike`](../interfaces/observable.ObservableLike.md)<[`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TG`\> |

#### Returns

[`ObservableLike`](../interfaces/observable.ObservableLike.md)<[`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`ObservableLike`](../interfaces/observable.ObservableLike.md)<[`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TG`\> |
| `h` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TH`\> |

#### Returns

[`ObservableLike`](../interfaces/observable.ObservableLike.md)<[`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`ObservableLike`](../interfaces/observable.ObservableLike.md)<[`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TG`\> |
| `h` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TH`\> |
| `i` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TI`\> |

#### Returns

[`ObservableLike`](../interfaces/observable.ObservableLike.md)<[`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

### zipLatestWith

▸ **zipLatestWith**<`TA`, `TB`\>(`snd`): [`ObservableOperator`](observable.md#observableoperator)<`TA`, [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TB`\> |

#### Returns

[`ObservableOperator`](observable.md#observableoperator)<`TA`, [`TA`, `TB`]\>

___

### zipWithLatestFrom

▸ **zipWithLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`ObservableOperator`](observable.md#observableoperator)<`TA`, `T`\>

Returns an `ObservableLike` which combines the source with
the latest value from another `ObservableLike`.

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TB`\> |
| `selector` | [`Function2`](functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`ObservableOperator`](observable.md#observableoperator)<`TA`, `T`\>
