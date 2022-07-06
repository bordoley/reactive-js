[Reactive-JS](../README.md) / observable

# Module: observable

## Table of contents

### Classes

- [Subject](../classes/observable.Subject.md)

### Interfaces

- [EnumerableObservableLike](../interfaces/observable.EnumerableObservableLike.md)
- [FromObservable](../interfaces/observable.FromObservable.md)
- [MulticastObservableLike](../interfaces/observable.MulticastObservableLike.md)
- [ObservableLike](../interfaces/observable.ObservableLike.md)
- [RunnableObservableLike](../interfaces/observable.RunnableObservableLike.md)
- [ScanAsync](../interfaces/observable.ScanAsync.md)
- [ToObservable](../interfaces/observable.ToObservable.md)

### Type Aliases

- [AsyncReducer](observable.md#asyncreducer)
- [DefaultObservable](observable.md#defaultobservable)
- [EnumerableObservable](observable.md#enumerableobservable)
- [ObservableEffectMode](observable.md#observableeffectmode)
- [ObservableOperator](observable.md#observableoperator)
- [RunnableObservable](observable.md#runnableobservable)
- [ThrottleMode](observable.md#throttlemode)

### Variables

- [TContainerOf](observable.md#tcontainerof)
- [bufferT](observable.md#buffert)
- [catchErrorT](observable.md#catcherrort)
- [combineLatestT](observable.md#combinelatestt)
- [concatAllT](observable.md#concatallt)
- [concatT](observable.md#concatt)
- [createT](observable.md#createt)
- [decodeWithCharsetT](observable.md#decodewithcharsett)
- [deferT](observable.md#defert)
- [distinctUntilChangedT](observable.md#distinctuntilchangedt)
- [everySatisfyT](observable.md#everysatisfyt)
- [exhaustT](observable.md#exhaustt)
- [fromArrayT](observable.md#fromarrayt)
- [fromEnumerableT](observable.md#fromenumerablet)
- [fromIterableT](observable.md#fromiterablet)
- [fromIteratorT](observable.md#fromiteratort)
- [fromObservableT](observable.md#fromobservablet)
- [generateT](observable.md#generatet)
- [keepT](observable.md#keept)
- [mapT](observable.md#mapt)
- [mergeAllT](observable.md#mergeallt)
- [mergeT](observable.md#merget)
- [pairwiseT](observable.md#pairwiset)
- [reduceT](observable.md#reducet)
- [repeatT](observable.md#repeatt)
- [scanAsyncT](observable.md#scanasynct)
- [scanT](observable.md#scant)
- [skipFirstT](observable.md#skipfirstt)
- [someSatisfyT](observable.md#somesatisfyt)
- [switchAllT](observable.md#switchallt)
- [takeFirstT](observable.md#takefirstt)
- [takeLastT](observable.md#takelastt)
- [takeWhileT](observable.md#takewhilet)
- [throwIfEmptyT](observable.md#throwifemptyt)
- [timeoutError](observable.md#timeouterror)
- [toEnumerableT](observable.md#toenumerablet)
- [toObservableT](observable.md#toobservablet)
- [toRunnableT](observable.md#torunnablet)
- [usingT](observable.md#usingt)
- [zipLatestT](observable.md#ziplatestt)
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
- [concat](observable.md#concat)
- [concatAll](observable.md#concatall)
- [createObservable](observable.md#createobservable)
- [decodeWithCharset](observable.md#decodewithcharset)
- [defer](observable.md#defer)
- [distinctUntilChanged](observable.md#distinctuntilchanged)
- [everySatisfy](observable.md#everysatisfy)
- [exhaust](observable.md#exhaust)
- [forkCombineLatest](observable.md#forkcombinelatest)
- [forkMerge](observable.md#forkmerge)
- [forkZipLatest](observable.md#forkziplatest)
- [fromArray](observable.md#fromarray)
- [fromDisposable](observable.md#fromdisposable)
- [fromEnumerable](observable.md#fromenumerable)
- [fromIterable](observable.md#fromiterable)
- [fromIterator](observable.md#fromiterator)
- [fromObservable](observable.md#fromobservable)
- [fromPromise](observable.md#frompromise)
- [generate](observable.md#generate)
- [getObserverCount](observable.md#getobservercount)
- [getReplay](observable.md#getreplay)
- [isEnumerable](observable.md#isenumerable)
- [isRunnable](observable.md#isrunnable)
- [keep](observable.md#keep)
- [map](observable.md#map)
- [mapAsync](observable.md#mapasync)
- [merge](observable.md#merge)
- [mergeAll](observable.md#mergeall)
- [multicast](observable.md#multicast)
- [never](observable.md#never)
- [observable](observable.md#observable)
- [onNotify](observable.md#onnotify)
- [onSubscribe](observable.md#onsubscribe)
- [pairwise](observable.md#pairwise)
- [publish](observable.md#publish)
- [publishTo](observable.md#publishto)
- [reduce](observable.md#reduce)
- [repeat](observable.md#repeat)
- [retry](observable.md#retry)
- [scan](observable.md#scan)
- [scanAsync](observable.md#scanasync)
- [share](observable.md#share)
- [skipFirst](observable.md#skipfirst)
- [someSatisfy](observable.md#somesatisfy)
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
- [toObservable](observable.md#toobservable)
- [toPromise](observable.md#topromise)
- [toRunnable](observable.md#torunnable)
- [using](observable.md#using)
- [withLatestFrom](observable.md#withlatestfrom)
- [zip](observable.md#zip)
- [zipLatest](observable.md#ziplatest)
- [zipWithLatestFrom](observable.md#zipwithlatestfrom)

## Type Aliases

### AsyncReducer

Ƭ **AsyncReducer**<`T`, `TAcc`\>: [`Function2`](functions.md#function2)<`TAcc`, `T`, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TAcc`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

___

### DefaultObservable

Ƭ **DefaultObservable**: ``0``

___

### EnumerableObservable

Ƭ **EnumerableObservable**: ``2``

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

### RunnableObservable

Ƭ **RunnableObservable**: ``1``

___

### ThrottleMode

Ƭ **ThrottleMode**: ``"first"`` \| ``"last"`` \| ``"interval"``

The throttle mode used by the `throttle` operator.
first - Takes a leading value.
last - Takes the trailing value.
interval -  Takes both the leading and trailing values.

## Variables

### TContainerOf

• `Const` **TContainerOf**: [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`unknown`\>

___

### bufferT

• `Const` **bufferT**: [`Buffer`](../interfaces/container.Buffer.md)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`unknown`\>\>

___

### catchErrorT

• `Const` **catchErrorT**: [`CatchError`](../interfaces/liftableContainer.CatchError.md)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`unknown`\>\>

___

### combineLatestT

• `Const` **combineLatestT**: [`Zip`](../interfaces/container.Zip.md)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`unknown`\>\>

___

### concatAllT

• `Const` **concatAllT**: [`ConcatAll`](../interfaces/container.ConcatAll.md)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`unknown`\>, { `maxBufferSize`: `number`  }\>

___

### concatT

• `Const` **concatT**: [`Concat`](../interfaces/container.Concat.md)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`unknown`\>\>

___

### createT

• `Const` **createT**: [`CreateReactiveContainer`](../interfaces/reactiveContainer.CreateReactiveContainer.md)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`unknown`\>\>

___

### decodeWithCharsetT

• `Const` **decodeWithCharsetT**: [`DecodeWithCharset`](../interfaces/liftableContainer.DecodeWithCharset.md)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`unknown`\>\>

___

### deferT

• `Const` **deferT**: [`Defer`](../interfaces/liftableContainer.Defer.md)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`unknown`\>\>

___

### distinctUntilChangedT

• `Const` **distinctUntilChangedT**: [`DistinctUntilChanged`](../interfaces/container.DistinctUntilChanged.md)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`unknown`\>\>

___

### everySatisfyT

• `Const` **everySatisfyT**: [`EverySatisfy`](../interfaces/container.EverySatisfy.md)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`unknown`\>\>

___

### exhaustT

• `Const` **exhaustT**: [`ConcatAll`](../interfaces/container.ConcatAll.md)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`unknown`\>, `Record`<`string`, `never`\>\>

___

### fromArrayT

• `Const` **fromArrayT**: [`FromArray`](../interfaces/container.FromArray.md)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`unknown`\>, { `delay`: `number` ; `endIndex`: `number` ; `startIndex`: `number`  }\>

___

### fromEnumerableT

• `Const` **fromEnumerableT**: [`FromEnumerable`](../interfaces/enumerable.FromEnumerable.md)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`unknown`\>\>

___

### fromIterableT

• `Const` **fromIterableT**: [`FromIterable`](../interfaces/liftableContainer.FromIterable.md)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`unknown`\>\>

___

### fromIteratorT

• `Const` **fromIteratorT**: [`FromIterator`](../interfaces/liftableContainer.FromIterator.md)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`unknown`\>, { `delay?`: `number`  }\>

___

### fromObservableT

• `Const` **fromObservableT**: [`FromObservable`](../interfaces/observable.FromObservable.md)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`unknown`\>\>

___

### generateT

• `Const` **generateT**: [`Generate`](../interfaces/container.Generate.md)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`unknown`\>\>

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

### mergeT

• `Const` **mergeT**: [`Concat`](../interfaces/container.Concat.md)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`unknown`\>\>

___

### pairwiseT

• `Const` **pairwiseT**: [`Pairwise`](../interfaces/container.Pairwise.md)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`unknown`\>\>

___

### reduceT

• `Const` **reduceT**: [`Reduce`](../interfaces/container.Reduce.md)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`unknown`\>\>

___

### repeatT

• `Const` **repeatT**: [`Repeat`](../interfaces/container.Repeat.md)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`unknown`\>\>

___

### scanAsyncT

• `Const` **scanAsyncT**: [`ScanAsync`](../interfaces/observable.ScanAsync.md)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`unknown`\>\>

___

### scanT

• `Const` **scanT**: [`Scan`](../interfaces/container.Scan.md)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`unknown`\>\>

___

### skipFirstT

• `Const` **skipFirstT**: [`SkipFirst`](../interfaces/container.SkipFirst.md)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`unknown`\>\>

___

### someSatisfyT

• `Const` **someSatisfyT**: [`SomeSatisfy`](../interfaces/container.SomeSatisfy.md)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`unknown`\>\>

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

### throwIfEmptyT

• `Const` **throwIfEmptyT**: [`ThrowIfEmpty`](../interfaces/liftableContainer.ThrowIfEmpty.md)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`unknown`\>\>

___

### timeoutError

• `Const` **timeoutError**: `symbol`

Symbol thrown when the timeout operator times out

___

### toEnumerableT

• `Const` **toEnumerableT**: [`ToEnumerable`](../interfaces/enumerable.ToEnumerable.md)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`unknown`\>\>

___

### toObservableT

• `Const` **toObservableT**: [`ToObservable`](../interfaces/observable.ToObservable.md)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`unknown`\>\>

___

### toRunnableT

• `Const` **toRunnableT**: [`ToRunnable`](../interfaces/runnable.ToRunnable.md)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`unknown`\>\>

___

### usingT

• `Const` **usingT**: [`Using`](../interfaces/liftableContainer.Using.md)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`unknown`\>\>

___

### zipLatestT

• `Const` **zipLatestT**: [`Zip`](../interfaces/container.Zip.md)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`unknown`\>\>

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
| `T` | extends [`Disposable`](../classes/disposable.Disposable.md)<`T`\> |

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
| `T` | extends [`Disposable`](../classes/disposable.Disposable.md)<`T`\> |

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
| `T` | extends [`Disposable`](../classes/disposable.Disposable.md)<`T`\> |

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
| `T` | extends [`Disposable`](../classes/disposable.Disposable.md)<`T`\> |

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
| `T` | extends [`Disposable`](../classes/disposable.Disposable.md)<`T`\> |

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
| `T` | extends [`Disposable`](../classes/disposable.Disposable.md)<`T`\> |

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
| `T` | extends [`Disposable`](../classes/disposable.Disposable.md)<`T`\> |

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

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `onError` | [`Function1`](functions.md#function1)<`unknown`, `void` \| [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>\> |

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

▸ **createObservable**<`T`\>(`f`): [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`SideEffect1`](functions.md#sideeffect1)<[`Observer`](../classes/observer.Observer.md)<`T`\>\> |

#### Returns

[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>

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
| `factory` | [`Factory`](functions.md#factory)<[`SideEffect1`](functions.md#sideeffect1)<[`Observer`](../classes/observer.Observer.md)<`T`\>\>\> |
| `options?` | `Object` |
| `options.delay?` | `number` |

#### Returns

[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>

▸ **defer**<`T`\>(`factory`): [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](functions.md#factory)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>\> |

#### Returns

[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>

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

### everySatisfy

▸ **everySatisfy**<`T`\>(`predicate`): [`ObservableOperator`](observable.md#observableoperator)<`T`, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`ObservableOperator`](observable.md#observableoperator)<`T`, `boolean`\>

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

### forkCombineLatest

▸ **forkCombineLatest**<`T`, `TA`, `TB`\>(`a`, `b`): [`ObservableOperator`](observable.md#observableoperator)<`T`, [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TA`\> |
| `b` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TB`\> |

#### Returns

[`ObservableOperator`](observable.md#observableoperator)<`T`, [`TA`, `TB`]\>

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`ObservableOperator`](observable.md#observableoperator)<`T`, [`TA`, `TB`, `TC`]\>

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
| `a` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TA`\> |
| `b` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TB`\> |
| `c` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TC`\> |

#### Returns

[`ObservableOperator`](observable.md#observableoperator)<`T`, [`TA`, `TB`, `TC`]\>

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`ObservableOperator`](observable.md#observableoperator)<`T`, [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TA`\> |
| `b` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TB`\> |
| `c` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TC`\> |
| `d` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TD`\> |

#### Returns

[`ObservableOperator`](observable.md#observableoperator)<`T`, [`TA`, `TB`, `TC`, `TD`]\>

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`ObservableOperator`](observable.md#observableoperator)<`T`, [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TA`\> |
| `b` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TB`\> |
| `c` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TC`\> |
| `d` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TD`\> |
| `e` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TE`\> |

#### Returns

[`ObservableOperator`](observable.md#observableoperator)<`T`, [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`ObservableOperator`](observable.md#observableoperator)<`T`, [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TA`\> |
| `b` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TB`\> |
| `c` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TC`\> |
| `d` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TD`\> |
| `e` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TE`\> |
| `f` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TF`\> |

#### Returns

[`ObservableOperator`](observable.md#observableoperator)<`T`, [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`ObservableOperator`](observable.md#observableoperator)<`T`, [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TA`\> |
| `b` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TB`\> |
| `c` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TC`\> |
| `d` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TD`\> |
| `e` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TE`\> |
| `f` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TF`\> |
| `g` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TG`\> |

#### Returns

[`ObservableOperator`](observable.md#observableoperator)<`T`, [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`ObservableOperator`](observable.md#observableoperator)<`T`, [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TA`\> |
| `b` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TB`\> |
| `c` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TC`\> |
| `d` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TD`\> |
| `e` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TE`\> |
| `f` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TF`\> |
| `g` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TG`\> |
| `h` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TH`\> |

#### Returns

[`ObservableOperator`](observable.md#observableoperator)<`T`, [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`ObservableOperator`](observable.md#observableoperator)<`T`, [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TA`\> |
| `b` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TB`\> |
| `c` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TC`\> |
| `d` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TD`\> |
| `e` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TE`\> |
| `f` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TF`\> |
| `g` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TG`\> |
| `h` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TH`\> |
| `i` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TI`\> |

#### Returns

[`ObservableOperator`](observable.md#observableoperator)<`T`, [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

### forkMerge

▸ **forkMerge**<`TIn`, `TOut`\>(`fst`, `snd`, ...`tail`): [`ObservableOperator`](observable.md#observableoperator)<`TIn`, `TOut`\>

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`ObservableOperator`](observable.md#observableoperator)<`TIn`, `TOut`\> |
| `snd` | [`ObservableOperator`](observable.md#observableoperator)<`TIn`, `TOut`\> |
| `...tail` | readonly [`ObservableOperator`](observable.md#observableoperator)<`TIn`, `TOut`\>[] |

#### Returns

[`ObservableOperator`](observable.md#observableoperator)<`TIn`, `TOut`\>

___

### forkZipLatest

▸ **forkZipLatest**<`T`, `TA`, `TB`\>(`a`, `b`): [`ObservableOperator`](observable.md#observableoperator)<`T`, [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TA`\> |
| `b` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TB`\> |

#### Returns

[`ObservableOperator`](observable.md#observableoperator)<`T`, [`TA`, `TB`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`ObservableOperator`](observable.md#observableoperator)<`T`, [`TA`, `TB`, `TC`]\>

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
| `a` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TA`\> |
| `b` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TB`\> |
| `c` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TC`\> |

#### Returns

[`ObservableOperator`](observable.md#observableoperator)<`T`, [`TA`, `TB`, `TC`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`ObservableOperator`](observable.md#observableoperator)<`T`, [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TA`\> |
| `b` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TB`\> |
| `c` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TC`\> |
| `d` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TD`\> |

#### Returns

[`ObservableOperator`](observable.md#observableoperator)<`T`, [`TA`, `TB`, `TC`, `TD`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`ObservableOperator`](observable.md#observableoperator)<`T`, [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TA`\> |
| `b` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TB`\> |
| `c` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TC`\> |
| `d` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TD`\> |
| `e` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TE`\> |

#### Returns

[`ObservableOperator`](observable.md#observableoperator)<`T`, [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`ObservableOperator`](observable.md#observableoperator)<`T`, [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TA`\> |
| `b` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TB`\> |
| `c` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TC`\> |
| `d` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TD`\> |
| `e` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TE`\> |
| `f` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TF`\> |

#### Returns

[`ObservableOperator`](observable.md#observableoperator)<`T`, [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`ObservableOperator`](observable.md#observableoperator)<`T`, [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TA`\> |
| `b` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TB`\> |
| `c` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TC`\> |
| `d` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TD`\> |
| `e` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TE`\> |
| `f` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TF`\> |
| `g` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TG`\> |

#### Returns

[`ObservableOperator`](observable.md#observableoperator)<`T`, [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`ObservableOperator`](observable.md#observableoperator)<`T`, [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TA`\> |
| `b` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TB`\> |
| `c` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TC`\> |
| `d` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TD`\> |
| `e` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TE`\> |
| `f` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TF`\> |
| `g` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TG`\> |
| `h` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TH`\> |

#### Returns

[`ObservableOperator`](observable.md#observableoperator)<`T`, [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`ObservableOperator`](observable.md#observableoperator)<`T`, [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TA`\> |
| `b` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TB`\> |
| `c` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TC`\> |
| `d` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TD`\> |
| `e` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TE`\> |
| `f` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TF`\> |
| `g` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TG`\> |
| `h` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TH`\> |
| `i` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `TI`\> |

#### Returns

[`ObservableOperator`](observable.md#observableoperator)<`T`, [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `options?` | `Partial`<{ `delay`: `number` ; `delayStart`: `boolean` ; `endIndex`: `number` ; `startIndex`: `number`  }\> | Config object that specifies an optional `delay` between emitted items and an optional `startIndex` into the array. |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>\>

___

### fromDisposable

▸ **fromDisposable**<`T`\>(`disposable`): [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `disposable` | [`Disposable`](../classes/disposable.Disposable.md) |

#### Returns

[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>

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
| `options.delayStart?` | `boolean` |

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
| `options.delayStart?` | `boolean` |

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
| `options.delayStart?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<[`Factory`](functions.md#factory)<`Iterator`<`T`, `TReturn`, `TNext`\>\>, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>\>

___

### fromObservable

▸ **fromObservable**<`T`\>(): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>\>

___

### fromPromise

▸ **fromPromise**<`T`\>(`factory`): [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](functions.md#factory)<`Promise`<`T`\>\> |

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
| `options.delayStart?` | `boolean` | - |

#### Returns

[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>

___

### getObserverCount

▸ **getObserverCount**<`T`\>(`observable`): `number`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observable` | [`MulticastObservableLike`](../interfaces/observable.MulticastObservableLike.md)<`T`\> |

#### Returns

`number`

___

### getReplay

▸ **getReplay**<`T`\>(`observable`): `number`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observable` | [`MulticastObservableLike`](../interfaces/observable.MulticastObservableLike.md)<`T`\> |

#### Returns

`number`

___

### isEnumerable

▸ **isEnumerable**<`T`\>(`obs`): obs is EnumerableObservableLike<T\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obs` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\> |

#### Returns

obs is EnumerableObservableLike<T\>

___

### isRunnable

▸ **isRunnable**<`T`\>(`obs`): obs is RunnableObservableLike<T\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obs` | [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\> |

#### Returns

obs is RunnableObservableLike<T\>

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

### multicast

▸ **multicast**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>, [`MulticastObservableLike`](../interfaces/observable.MulticastObservableLike.md)<`T`\>\>

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

### never

▸ **never**<`T`\>(): [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>

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

▸ **onSubscribe**<`T`\>(`f`): [`ContainerOperator`](container.md#containeroperator)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Factory`](functions.md#factory)<`void` \| [`DisposableOrTeardown`](disposable.md#disposableorteardown)\> |

#### Returns

[`ContainerOperator`](container.md#containeroperator)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`unknown`\>, `T`, `T`\>

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

▸ **publish**<`T`\>(`v`): [`Function1`](functions.md#function1)<[`Subject`](../classes/observable.Subject.md)<`T`\>, [`Subject`](../classes/observable.Subject.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `T` |

#### Returns

[`Function1`](functions.md#function1)<[`Subject`](../classes/observable.Subject.md)<`T`\>, [`Subject`](../classes/observable.Subject.md)<`T`\>\>

___

### publishTo

▸ **publishTo**<`T`\>(`subject`): [`SideEffect1`](functions.md#sideeffect1)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `subject` | [`Subject`](../classes/observable.Subject.md)<`T`\> |

#### Returns

[`SideEffect1`](functions.md#sideeffect1)<`T`\>

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
| `scanner` | [`AsyncReducer`](observable.md#asyncreducer)<`T`, `TAcc`\> | The accumulator function called on each source value. |
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

### someSatisfy

▸ **someSatisfy**<`T`\>(`predicate`): [`ObservableOperator`](observable.md#observableoperator)<`T`, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`ObservableOperator`](observable.md#observableoperator)<`T`, `boolean`\>

___

### subscribe

▸ **subscribe**<`T`\>(`scheduler`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>, [`Disposable`](../classes/disposable.Disposable.md)\>

Safely subscribes to an `ObservableLike` with a `ObserverLike` instance
using the provided scheduler. The returned `Disposable`
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

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>, [`Disposable`](../classes/disposable.Disposable.md)\>

___

### subscribeOn

▸ **subscribeOn**<`T`\>(`scheduler`): [`ObservableOperator`](observable.md#observableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/scheduler.SchedulerLike.md) |

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

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](functions.md#factory)<`unknown`\> |

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

### toObservable

▸ **toObservable**<`T`\>(): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>\>

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

▸ **using**<`TResource`, `T`\>(`resourceFactory`, `containerFactory`): [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResource` | extends [`Disposable`](../classes/disposable.Disposable.md)<`TResource`\> |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `resourceFactory` | [`Factory`](functions.md#factory)<`TResource`\> |
| `containerFactory` | [`Function1`](functions.md#function1)<`TResource`, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>\> |

#### Returns

[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>

▸ **using**<`TResource1`, `TResource2`, `T`\>(`resourceFactory`, `containerFactory`): [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResource1` | extends [`Disposable`](../classes/disposable.Disposable.md)<`TResource1`\> |
| `TResource2` | extends [`Disposable`](../classes/disposable.Disposable.md)<`TResource2`\> |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `resourceFactory` | [`Factory`](functions.md#factory)<[`TResource1`, `TResource2`]\> |
| `containerFactory` | [`Function2`](functions.md#function2)<`TResource1`, `TResource2`, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>\> |

#### Returns

[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>

▸ **using**<`TResource1`, `TResource2`, `TResource3`, `T`\>(`resourceFactory`, `containerFactory`): [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResource1` | extends [`Disposable`](../classes/disposable.Disposable.md)<`TResource1`\> |
| `TResource2` | extends [`Disposable`](../classes/disposable.Disposable.md)<`TResource2`\> |
| `TResource3` | extends [`Disposable`](../classes/disposable.Disposable.md)<`TResource3`\> |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `resourceFactory` | [`Factory`](functions.md#factory)<[`TResource1`, `TResource2`, `TResource3`]\> |
| `containerFactory` | [`Function3`](functions.md#function3)<`TResource1`, `TResource2`, `TResource3`, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>\> |

#### Returns

[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>

▸ **using**<`TResource1`, `TResource2`, `TResource3`, `TResource4`, `T`\>(`resourceFactory`, `containerFactory`): [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResource1` | extends [`Disposable`](../classes/disposable.Disposable.md)<`TResource1`\> |
| `TResource2` | extends [`Disposable`](../classes/disposable.Disposable.md)<`TResource2`\> |
| `TResource3` | extends [`Disposable`](../classes/disposable.Disposable.md)<`TResource3`\> |
| `TResource4` | extends [`Disposable`](../classes/disposable.Disposable.md)<`TResource4`\> |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `resourceFactory` | [`Factory`](functions.md#factory)<[`TResource1`, `TResource2`, `TResource3`, `TResource4`]\> |
| `containerFactory` | [`Function4`](functions.md#function4)<`TResource1`, `TResource2`, `TResource3`, `TResource4`, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>\> |

#### Returns

[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>

▸ **using**<`TResource1`, `TResource2`, `TResource3`, `TResource4`, `TResource5`, `T`\>(`resourceFactory`, `containerFactory`): [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResource1` | extends [`Disposable`](../classes/disposable.Disposable.md)<`TResource1`\> |
| `TResource2` | extends [`Disposable`](../classes/disposable.Disposable.md)<`TResource2`\> |
| `TResource3` | extends [`Disposable`](../classes/disposable.Disposable.md)<`TResource3`\> |
| `TResource4` | extends [`Disposable`](../classes/disposable.Disposable.md)<`TResource4`\> |
| `TResource5` | extends [`Disposable`](../classes/disposable.Disposable.md)<`TResource5`\> |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `resourceFactory` | [`Factory`](functions.md#factory)<[`TResource1`, `TResource2`, `TResource3`, `TResource4`, `TResource5`]\> |
| `containerFactory` | [`Function5`](functions.md#function5)<`TResource1`, `TResource2`, `TResource3`, `TResource4`, `TResource5`, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>\> |

#### Returns

[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>

▸ **using**<`TResource`, `T`\>(`resourceFactory`, `runnableFactory`): [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResource` | extends [`Disposable`](../classes/disposable.Disposable.md)<`TResource`\> |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `resourceFactory` | [`Factory`](functions.md#factory)<`TResource` \| readonly `TResource`[]\> |
| `runnableFactory` | (...`resources`: readonly `TResource`[]) => [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\> |

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

▸ **zip**<`TA`, `TB`\>(`a`, `b`): [`ObservableLike`](../interfaces/observable.ObservableLike.md)<readonly [`TA`, `TB`]\>

Combines multiple sources to create an `ObservableLike` whose values are calculated from the values,
in order, of each of its input sources.

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

[`ObservableLike`](../interfaces/observable.ObservableLike.md)<readonly [`TA`, `TB`]\>

▸ **zip**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`ObservableLike`](../interfaces/observable.ObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

Combines multiple sources to create an `ObservableLike` whose values are calculated from the values,
in order, of each of its input sources.

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

[`ObservableLike`](../interfaces/observable.ObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`ObservableLike`](../interfaces/observable.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

Combines multiple sources to create an `ObservableLike` whose values are calculated from the values,
in order, of each of its input sources.

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

[`ObservableLike`](../interfaces/observable.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`ObservableLike`](../interfaces/observable.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

Combines multiple sources to create an `ObservableLike` whose values are calculated from the values,
in order, of each of its input sources.

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

[`ObservableLike`](../interfaces/observable.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`ObservableLike`](../interfaces/observable.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

Combines multiple sources to create an `ObservableLike` whose values are calculated from the values,
in order, of each of its input sources.

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

[`ObservableLike`](../interfaces/observable.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`ObservableLike`](../interfaces/observable.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

Combines multiple sources to create an `ObservableLike` whose values are calculated from the values,
in order, of each of its input sources.

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

[`ObservableLike`](../interfaces/observable.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`ObservableLike`](../interfaces/observable.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

Combines multiple sources to create an `ObservableLike` whose values are calculated from the values,
in order, of each of its input sources.

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

[`ObservableLike`](../interfaces/observable.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`ObservableLike`](../interfaces/observable.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

Combines multiple sources to create an `ObservableLike` whose values are calculated from the values,
in order, of each of its input sources.

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

[`ObservableLike`](../interfaces/observable.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

▸ **zip**<`T`\>(...`enumerables`): [`ObservableLike`](../interfaces/observable.ObservableLike.md)<readonly `T`[]\>

Combines multiple sources to create an `ObservableLike` whose values are calculated from the values,
in order, of each of its input sources.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...enumerables` | readonly [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>[] |

#### Returns

[`ObservableLike`](../interfaces/observable.ObservableLike.md)<readonly `T`[]\>

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
