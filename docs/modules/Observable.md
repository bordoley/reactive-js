[Reactive-JS](../README.md) / Observable

# Module: Observable

## Table of contents

### Namespaces

- [Animation](Observable.Animation.md)

### Container Interfaces

- [ObservableContainer](../interfaces/Observable.ObservableContainer.md)

### Module Interfaces

- [ObservableModule](../interfaces/Observable.ObservableModule.md)

### Type Aliases

- [Animation](Observable.md#animation)
- [AnyObservableLike](Observable.md#anyobservablelike)
- [DeferredObservableUpperBoundObservableOperator](Observable.md#deferredobservableupperboundobservableoperator)
- [MaybeMulticastObservableLike](Observable.md#maybemulticastobservablelike)
- [ObservableOperator](Observable.md#observableoperator)
- [RunnableUpperBoundObservableOperator](Observable.md#runnableupperboundobservableoperator)
- [Signature](Observable.md#signature)
- [Type](Observable.md#type)

### Constructor Functions

- [animate](Observable.md#animate)
- [combineLatest](Observable.md#combinelatest)
- [concat](Observable.md#concat)

### Operator Functions

- [backpressureStrategy](Observable.md#backpressurestrategy)
- [buffer](Observable.md#buffer)
- [catchError](Observable.md#catcherror)
- [flatMapIterable](Observable.md#flatmapiterable)

### Other Functions

- [concatMany](Observable.md#concatmany)
- [concatWith](Observable.md#concatwith)
- [create](Observable.md#create)
- [createPublisher](Observable.md#createpublisher)
- [createRefCountedPublisher](Observable.md#createrefcountedpublisher)
- [currentTime](Observable.md#currenttime)
- [decodeWithCharset](Observable.md#decodewithcharset)
- [defer](Observable.md#defer)
- [dispatchTo](Observable.md#dispatchto)
- [distinctUntilChanged](Observable.md#distinctuntilchanged)
- [empty](Observable.md#empty)
- [encodeUtf8](Observable.md#encodeutf8)
- [endWith](Observable.md#endwith)
- [enqueue](Observable.md#enqueue)
- [firstAsync](Observable.md#firstasync)
- [flatMapAsync](Observable.md#flatmapasync)
- [forEach](Observable.md#foreach)
- [forkCombineLatest](Observable.md#forkcombinelatest)
- [forkConcat](Observable.md#forkconcat)
- [forkMerge](Observable.md#forkmerge)
- [forkZip](Observable.md#forkzip)
- [forkZipLatest](Observable.md#forkziplatest)
- [fromAsyncFactory](Observable.md#fromasyncfactory)
- [fromEnumeratorFactory](Observable.md#fromenumeratorfactory)
- [fromFactory](Observable.md#fromfactory)
- [fromIterable](Observable.md#fromiterable)
- [fromOptional](Observable.md#fromoptional)
- [fromReadonlyArray](Observable.md#fromreadonlyarray)
- [fromValue](Observable.md#fromvalue)
- [generate](Observable.md#generate)
- [ignoreElements](Observable.md#ignoreelements)
- [isDeferredObservable](Observable.md#isdeferredobservable)
- [isEnumerable](Observable.md#isenumerable)
- [isMulticastObservable](Observable.md#ismulticastobservable)
- [isRunnable](Observable.md#isrunnable)
- [keep](Observable.md#keep)
- [keepType](Observable.md#keeptype)
- [lastAsync](Observable.md#lastasync)
- [map](Observable.md#map)
- [mapTo](Observable.md#mapto)
- [merge](Observable.md#merge)
- [mergeMany](Observable.md#mergemany)
- [mergeWith](Observable.md#mergewith)
- [never](Observable.md#never)
- [onSubscribe](Observable.md#onsubscribe)
- [pairwise](Observable.md#pairwise)
- [pick](Observable.md#pick)
- [scan](Observable.md#scan)
- [skipFirst](Observable.md#skipfirst)
- [startWith](Observable.md#startwith)
- [subscribe](Observable.md#subscribe)
- [subscribeOn](Observable.md#subscribeon)
- [takeFirst](Observable.md#takefirst)
- [takeLast](Observable.md#takelast)
- [takeUntil](Observable.md#takeuntil)
- [takeWhile](Observable.md#takewhile)
- [throttle](Observable.md#throttle)
- [throwIfEmpty](Observable.md#throwifempty)
- [throws](Observable.md#throws)
- [toEventSource](Observable.md#toeventsource)
- [toReadonlyArrayAsync](Observable.md#toreadonlyarrayasync)
- [withCurrentTime](Observable.md#withcurrenttime)
- [withLatestFrom](Observable.md#withlatestfrom)
- [zip](Observable.md#zip)
- [zipLatest](Observable.md#ziplatest)
- [zipWith](Observable.md#zipwith)
- [zipWithLatestFrom](Observable.md#zipwithlatestfrom)

## Type Aliases

### Animation

Ƭ **Animation**<`T`\>: [`Delay`](../interfaces/Observable.Animation.Delay.md) \| [`Loop`](../interfaces/Observable.Animation.Loop.md)<`T`\> \| `T` extends `number` ? [`KeyFrame`](../interfaces/Observable.Animation.KeyFrame.md) \| [`Spring`](../interfaces/Observable.Animation.Spring.md) \| [`Frame`](../interfaces/Observable.Animation.Frame.md) & { `selector?`: `never`  } : [`KeyFrame`](../interfaces/Observable.Animation.KeyFrame.md) \| [`Spring`](../interfaces/Observable.Animation.Spring.md) \| [`Frame`](../interfaces/Observable.Animation.Frame.md) & { `selector`: [`Function1`](functions.md#function1)<`number`, `T`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `number` |

___

### AnyObservableLike

Ƭ **AnyObservableLike**<`T`\>: [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\> \| [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\> \| [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\> \| [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`T`\> \| [`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

___

### DeferredObservableUpperBoundObservableOperator

Ƭ **DeferredObservableUpperBoundObservableOperator**<`TIn`, `TOut`\>: <TObservableIn\>(`observable`: `TObservableIn`) => `TObservableIn` extends [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TIn`\> ? [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TOut`\> : `TObservableIn` extends [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TIn`\> ? [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TOut`\> : [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TOut`\>

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Type declaration

▸ <`TObservableIn`\>(`observable`): `TObservableIn` extends [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TIn`\> ? [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TOut`\> : `TObservableIn` extends [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TIn`\> ? [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TOut`\> : [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TOut`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TIn`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `observable` | `TObservableIn` |

##### Returns

`TObservableIn` extends [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TIn`\> ? [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TOut`\> : `TObservableIn` extends [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TIn`\> ? [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TOut`\> : [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TOut`\>

___

### MaybeMulticastObservableLike

Ƭ **MaybeMulticastObservableLike**<`T`\>: [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`T`\> \| [`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

___

### ObservableOperator

Ƭ **ObservableOperator**<`TIn`, `TOut`\>: <TObservableIn\>(`observable`: `TObservableIn`) => `TObservableIn` extends [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TIn`\> ? [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TOut`\> : `TObservableIn` extends [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TIn`\> ? [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TOut`\> : `TObservableIn` extends [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TIn`\> ? [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TOut`\> : `TObservableIn` extends [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TIn`\> ? [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TOut`\> : [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TOut`\>

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Type declaration

▸ <`TObservableIn`\>(`observable`): `TObservableIn` extends [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TIn`\> ? [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TOut`\> : `TObservableIn` extends [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TIn`\> ? [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TOut`\> : `TObservableIn` extends [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TIn`\> ? [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TOut`\> : `TObservableIn` extends [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TIn`\> ? [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TOut`\> : [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TOut`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TIn`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `observable` | `TObservableIn` |

##### Returns

`TObservableIn` extends [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TIn`\> ? [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TOut`\> : `TObservableIn` extends [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TIn`\> ? [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TOut`\> : `TObservableIn` extends [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TIn`\> ? [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TOut`\> : `TObservableIn` extends [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TIn`\> ? [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TOut`\> : [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TOut`\>

___

### RunnableUpperBoundObservableOperator

Ƭ **RunnableUpperBoundObservableOperator**<`TIn`, `TOut`\>: <TObservableIn\>(`observable`: `TObservableIn`) => `TObservableIn` extends [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TIn`\> ? [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TOut`\> : `TObservableIn` extends [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TIn`\> ? [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TOut`\> : `TObservableIn` extends [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TIn`\> ? [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TOut`\> : [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TOut`\>

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Type declaration

▸ <`TObservableIn`\>(`observable`): `TObservableIn` extends [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TIn`\> ? [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TOut`\> : `TObservableIn` extends [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TIn`\> ? [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TOut`\> : `TObservableIn` extends [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TIn`\> ? [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TOut`\> : [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TOut`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TIn`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `observable` | `TObservableIn` |

##### Returns

`TObservableIn` extends [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TIn`\> ? [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TOut`\> : `TObservableIn` extends [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TIn`\> ? [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TOut`\> : `TObservableIn` extends [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TIn`\> ? [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TOut`\> : [`ObservableLike`](../interfaces/types.ObservableLike.md)<`TOut`\>

___

### Signature

Ƭ **Signature**: [`ObservableModule`](../interfaces/Observable.ObservableModule.md)

___

### Type

Ƭ **Type**: [`ObservableContainer`](../interfaces/Observable.ObservableContainer.md)

## Constructor Functions

### animate

▸ **animate**<`T`\>(`configs`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `configs` | [`Animation`](Observable.md#animation)<`T`\> \| readonly [`Animation`](Observable.md#animation)<`T`\>[] |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>

___

### combineLatest

▸ **combineLatest**<`TA`, `TB`\>(`a`, `b`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TE`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TF`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TG`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TH`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TH`\> |
| `i` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TI`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

▸ **combineLatest**<`TA`, `TB`\>(`a`, `b`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TE`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TF`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TF`\> |
| `g` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TG`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TF`\> |
| `g` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TG`\> |
| `h` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TH`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TF`\> |
| `g` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TG`\> |
| `h` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TH`\> |
| `i` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TI`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

▸ **combineLatest**<`TA`, `TB`\>(`a`, `b`): [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TA`\> |
| `b` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TB`\> |

#### Returns

[`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TA`\> |
| `b` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |

#### Returns

[`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TA`\> |
| `b` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TB`\> |
| `c` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TC`\> |
| `d` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TD`\> |

#### Returns

[`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TA`\> |
| `b` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TB`\> |
| `c` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TC`\> |
| `d` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TD`\> |
| `e` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TE`\> |

#### Returns

[`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TA`\> |
| `b` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TB`\> |
| `c` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TC`\> |
| `d` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TD`\> |
| `e` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TE`\> |
| `f` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TF`\> |

#### Returns

[`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TA`\> |
| `b` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TB`\> |
| `c` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TC`\> |
| `d` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TD`\> |
| `e` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TE`\> |
| `f` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TF`\> |
| `g` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TG`\> |

#### Returns

[`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TA`\> |
| `b` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TB`\> |
| `c` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TC`\> |
| `d` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TD`\> |
| `e` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TE`\> |
| `f` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TF`\> |
| `g` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TG`\> |
| `h` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TH`\> |

#### Returns

[`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TA`\> |
| `b` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TB`\> |
| `c` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TC`\> |
| `d` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TD`\> |
| `e` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TE`\> |
| `f` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TF`\> |
| `g` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TG`\> |
| `h` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TH`\> |
| `i` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TI`\> |

#### Returns

[`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

### concat

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\> |
| `snd` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\> |
| `...tail` | readonly [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>[] |

#### Returns

[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\> |
| `snd` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\> |
| `...tail` | readonly [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>[] |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\> |
| `snd` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\> |
| `...tail` | readonly [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>[] |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`T`\> |
| `snd` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\> |
| `...tail` | readonly [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>[] |

#### Returns

[`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`T`\>

___

## Operator Functions

### backpressureStrategy

▸ **backpressureStrategy**<`T`\>(`capacity`, `backpressureStrategy`): [`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`\>

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

[`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`\>

___

### buffer

▸ **buffer**<`T`\>(`options?`): [`ObservableOperator`](Observable.md#observableoperator)<`T`, readonly `T`[]\>

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

[`ObservableOperator`](Observable.md#observableoperator)<`T`, readonly `T`[]\>

___

### catchError

▸ **catchError**<`T`\>(`onError`): [`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `onError` | [`SideEffect1`](functions.md#sideeffect1)<`Error`\> |

#### Returns

[`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`\>

___

### flatMapIterable

▸ **flatMapIterable**<`TA`, `TB`\>(`selector`): [`ObservableOperator`](Observable.md#observableoperator)<`TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, `Iterable`<`TB`\>\> |

#### Returns

[`ObservableOperator`](Observable.md#observableoperator)<`TA`, `TB`\>

___

## Other Functions

### concatMany

▸ **concatMany**<`T`\>(`observables`): [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>[] |

#### Returns

[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>

▸ **concatMany**<`T`\>(`observables`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>[] |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>

▸ **concatMany**<`T`\>(`observables`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>[] |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>

▸ **concatMany**<`T`\>(`observables`): [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [[`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`T`\>, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>] |

#### Returns

[`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`T`\>

___

### concatWith

▸ **concatWith**<`T`\>(`snd`, `...tail`): [`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\> |
| `...tail` | readonly [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>[] |

#### Returns

[`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`\>

▸ **concatWith**<`T`\>(`snd`, `...tail`): [`RunnableUpperBoundObservableOperator`](Observable.md#runnableupperboundobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\> |
| `...tail` | readonly [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>[] |

#### Returns

[`RunnableUpperBoundObservableOperator`](Observable.md#runnableupperboundobservableoperator)<`T`, `T`\>

▸ **concatWith**<`T`\>(`snd`, `...tail`): [`DeferredObservableUpperBoundObservableOperator`](Observable.md#deferredobservableupperboundobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\> |
| `...tail` | readonly [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>[] |

#### Returns

[`DeferredObservableUpperBoundObservableOperator`](Observable.md#deferredobservableupperboundobservableoperator)<`T`, `T`\>

___

### create

▸ **create**<`T`\>(`f`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`SideEffect1`](functions.md#sideeffect1)<[`ObserverLike`](../interfaces/types.ObserverLike.md)<`T`\>\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>

___

### createPublisher

▸ **createPublisher**<`T`\>(`options?`): [`PublisherLike`](../interfaces/types.PublisherLike.md)<`T`\>

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

[`PublisherLike`](../interfaces/types.PublisherLike.md)<`T`\>

___

### createRefCountedPublisher

▸ **createRefCountedPublisher**<`T`\>(`options?`): [`PublisherLike`](../interfaces/types.PublisherLike.md)<`T`\>

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

[`PublisherLike`](../interfaces/types.PublisherLike.md)<`T`\>

___

### currentTime

▸ **currentTime**(`options?`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.delay?` | `number` |
| `options.delayStart?` | `boolean` |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<`number`\>

___

### decodeWithCharset

▸ **decodeWithCharset**(`options?`): [`ObservableOperator`](Observable.md#observableoperator)<`ArrayBuffer`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.charset?` | `string` |

#### Returns

[`ObservableOperator`](Observable.md#observableoperator)<`ArrayBuffer`, `string`\>

___

### defer

▸ **defer**<`T`\>(`f`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Factory`](functions.md#factory)<[`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`T`\>\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>

___

### dispatchTo

▸ **dispatchTo**<`T`\>(`dispatcher`): [`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatcher` | [`DispatcherLike`](../interfaces/types.DispatcherLike.md)<`T`\> |

#### Returns

[`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`\>

___

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`\>

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

[`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`\>

___

### empty

▸ **empty**<`T`\>(): [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>

▸ **empty**<`T`\>(`options`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.delay` | `number` |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>

___

### encodeUtf8

▸ **encodeUtf8**(): [`ObservableOperator`](Observable.md#observableoperator)<`string`, `Uint8Array`\>

#### Returns

[`ObservableOperator`](Observable.md#observableoperator)<`string`, `Uint8Array`\>

___

### endWith

▸ **endWith**<`T`\>(`value`, `...values`): [`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`\>

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

[`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`\>

___

### enqueue

▸ **enqueue**<`T`\>(`queue`): [`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `queue` | [`QueueableLike`](../interfaces/types.QueueableLike.md)<`T`\> |

#### Returns

[`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`\>

___

### firstAsync

▸ **firstAsync**<`T`\>(): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, `Promise`<[`Optional`](functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, `Promise`<[`Optional`](functions.md#optional)<`T`\>\>\>

▸ **firstAsync**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, `Promise`<[`Optional`](functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/types.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, `Promise`<[`Optional`](functions.md#optional)<`T`\>\>\>

___

### flatMapAsync

▸ **flatMapAsync**<`TA`, `TB`\>(`f`): [`DeferredObservableUpperBoundObservableOperator`](Observable.md#deferredobservableupperboundobservableoperator)<`TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Function2`](functions.md#function2)<`TA`, `AbortSignal`, `Promise`<`TB`\>\> |

#### Returns

[`DeferredObservableUpperBoundObservableOperator`](Observable.md#deferredobservableupperboundobservableoperator)<`TA`, `TB`\>

___

### forEach

▸ **forEach**<`T`\>(`effect`): [`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect1`](functions.md#sideeffect1)<`T`\> |

#### Returns

[`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`\>

___

### forkCombineLatest

▸ **forkCombineLatest**<`TObservableIn`, `TIn`, `TA`, `TB`\>(`a`, `b`): [`Function1`](functions.md#function1)<`TObservableIn`, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<[`TA`, `TB`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TIn`, `TObservableIn`\> |
| `TIn` | `TIn` |
| `TA` | `TA` |
| `TB` | `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Function1`](functions.md#function1)<`TObservableIn`, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TA`\>\> |
| `b` | [`Function1`](functions.md#function1)<`TObservableIn`, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\>\> |

#### Returns

[`Function1`](functions.md#function1)<`TObservableIn`, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<[`TA`, `TB`]\>\>

▸ **forkCombineLatest**<`TObservableIn`, `TIn`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Function1`](functions.md#function1)<`TObservableIn`, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<[`TA`, `TB`, `TC`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TIn`, `TObservableIn`\> |
| `TIn` | `TIn` |
| `TA` | `TA` |
| `TB` | `TB` |
| `TC` | `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Function1`](functions.md#function1)<`TObservableIn`, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TA`\>\> |
| `b` | [`Function1`](functions.md#function1)<`TObservableIn`, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\>\> |
| `c` | [`Function1`](functions.md#function1)<`TObservableIn`, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TC`\>\> |

#### Returns

[`Function1`](functions.md#function1)<`TObservableIn`, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<[`TA`, `TB`, `TC`]\>\>

▸ **forkCombineLatest**<`TObservableIn`, `TIn`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Function1`](functions.md#function1)<`TObservableIn`, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<[`TA`, `TB`, `TC`, `TD`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TIn`, `TObservableIn`\> |
| `TIn` | `TIn` |
| `TA` | `TA` |
| `TB` | `TB` |
| `TC` | `TC` |
| `TD` | `TD` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Function1`](functions.md#function1)<`TObservableIn`, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TA`\>\> |
| `b` | [`Function1`](functions.md#function1)<`TObservableIn`, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\>\> |
| `c` | [`Function1`](functions.md#function1)<`TObservableIn`, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TC`\>\> |
| `d` | [`Function1`](functions.md#function1)<`TObservableIn`, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TD`\>\> |

#### Returns

[`Function1`](functions.md#function1)<`TObservableIn`, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<[`TA`, `TB`, `TC`, `TD`]\>\>

▸ **forkCombineLatest**<`TObservableIn`, `TIn`, `TA`, `TB`\>(`a`, `b`): [`Function1`](functions.md#function1)<`TObservableIn`, [`RunnableLike`](../interfaces/types.RunnableLike.md)<[`TA`, `TB`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TIn`, `TObservableIn`\> |
| `TIn` | `TIn` |
| `TA` | `TA` |
| `TB` | `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Function1`](functions.md#function1)<`TObservableIn`, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\>\> |
| `b` | [`Function1`](functions.md#function1)<`TObservableIn`, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\>\> |

#### Returns

[`Function1`](functions.md#function1)<`TObservableIn`, [`RunnableLike`](../interfaces/types.RunnableLike.md)<[`TA`, `TB`]\>\>

▸ **forkCombineLatest**<`TObservableIn`, `TIn`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Function1`](functions.md#function1)<`TObservableIn`, [`RunnableLike`](../interfaces/types.RunnableLike.md)<[`TA`, `TB`, `TC`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TIn`, `TObservableIn`\> |
| `TIn` | `TIn` |
| `TA` | `TA` |
| `TB` | `TB` |
| `TC` | `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Function1`](functions.md#function1)<`TObservableIn`, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\>\> |
| `b` | [`Function1`](functions.md#function1)<`TObservableIn`, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\>\> |
| `c` | [`Function1`](functions.md#function1)<`TObservableIn`, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\>\> |

#### Returns

[`Function1`](functions.md#function1)<`TObservableIn`, [`RunnableLike`](../interfaces/types.RunnableLike.md)<[`TA`, `TB`, `TC`]\>\>

▸ **forkCombineLatest**<`TObservableIn`, `TIn`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Function1`](functions.md#function1)<`TObservableIn`, [`RunnableLike`](../interfaces/types.RunnableLike.md)<[`TA`, `TB`, `TC`, `TD`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TIn`, `TObservableIn`\> |
| `TIn` | `TIn` |
| `TA` | `TA` |
| `TB` | `TB` |
| `TC` | `TC` |
| `TD` | `TD` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Function1`](functions.md#function1)<`TObservableIn`, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\>\> |
| `b` | [`Function1`](functions.md#function1)<`TObservableIn`, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\>\> |
| `c` | [`Function1`](functions.md#function1)<`TObservableIn`, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\>\> |
| `d` | [`Function1`](functions.md#function1)<`TObservableIn`, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\>\> |

#### Returns

[`Function1`](functions.md#function1)<`TObservableIn`, [`RunnableLike`](../interfaces/types.RunnableLike.md)<[`TA`, `TB`, `TC`, `TD`]\>\>

▸ **forkCombineLatest**<`TObservableIn`, `TIn`, `TA`, `TB`\>(`a`, `b`): [`Function1`](functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<[`TA`, `TB`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TIn`, `TObservableIn`\> |
| `TIn` | `TIn` |
| `TA` | `TA` |
| `TB` | `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Function1`](functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\>\> |
| `b` | [`Function1`](functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\>\> |

#### Returns

[`Function1`](functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<[`TA`, `TB`]\>\>

▸ **forkCombineLatest**<`TObservableIn`, `TIn`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Function1`](functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<[`TA`, `TB`, `TC`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TIn`, `TObservableIn`\> |
| `TIn` | `TIn` |
| `TA` | `TA` |
| `TB` | `TB` |
| `TC` | `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Function1`](functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\>\> |
| `b` | [`Function1`](functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\>\> |
| `c` | [`Function1`](functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\>\> |

#### Returns

[`Function1`](functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<[`TA`, `TB`, `TC`]\>\>

▸ **forkCombineLatest**<`TObservableIn`, `TIn`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Function1`](functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<[`TA`, `TB`, `TC`, `TD`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TIn`, `TObservableIn`\> |
| `TIn` | `TIn` |
| `TA` | `TA` |
| `TB` | `TB` |
| `TC` | `TC` |
| `TD` | `TD` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Function1`](functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\>\> |
| `b` | [`Function1`](functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\>\> |
| `c` | [`Function1`](functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\>\> |
| `d` | [`Function1`](functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\>\> |

#### Returns

[`Function1`](functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<[`TA`, `TB`, `TC`, `TD`]\>\>

▸ **forkCombineLatest**<`TObservableIn`, `TIn`, `TA`, `TB`\>(`a`, `b`): [`Function1`](functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<[`TA`, `TB`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TIn`, `TObservableIn`\> |
| `TIn` | `TIn` |
| `TA` | `TA` |
| `TB` | `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Function1`](functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TA`\>\> |
| `b` | [`Function1`](functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TB`\>\> |

#### Returns

[`Function1`](functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<[`TA`, `TB`]\>\>

▸ **forkCombineLatest**<`TObservableIn`, `TIn`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Function1`](functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<[`TA`, `TB`, `TC`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TIn`, `TObservableIn`\> |
| `TIn` | `TIn` |
| `TA` | `TA` |
| `TB` | `TB` |
| `TC` | `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Function1`](functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TA`\>\> |
| `b` | [`Function1`](functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TB`\>\> |
| `c` | [`Function1`](functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TC`\>\> |

#### Returns

[`Function1`](functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<[`TA`, `TB`, `TC`]\>\>

▸ **forkCombineLatest**<`TObservableIn`, `TIn`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Function1`](functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<[`TA`, `TB`, `TC`, `TD`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TIn`, `TObservableIn`\> |
| `TIn` | `TIn` |
| `TA` | `TA` |
| `TB` | `TB` |
| `TC` | `TC` |
| `TD` | `TD` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Function1`](functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TA`\>\> |
| `b` | [`Function1`](functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TB`\>\> |
| `c` | [`Function1`](functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TC`\>\> |
| `d` | [`Function1`](functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TD`\>\> |

#### Returns

[`Function1`](functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<[`TA`, `TB`, `TC`, `TD`]\>\>

▸ **forkCombineLatest**<`TObservableIn`, `TIn`, `TA`, `TB`\>(`a`, `b`): [`Function1`](functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<[`TA`, `TB`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TIn`, `TObservableIn`\> |
| `TIn` | `TIn` |
| `TA` | `TA` |
| `TB` | `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Function1`](functions.md#function1)<`TObservableIn`, [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TA`\>\> |
| `b` | [`Function1`](functions.md#function1)<`TObservableIn`, [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TB`\>\> |

#### Returns

[`Function1`](functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<[`TA`, `TB`]\>\>

▸ **forkCombineLatest**<`TObservableIn`, `TIn`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Function1`](functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<[`TA`, `TB`, `TC`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TIn`, `TObservableIn`\> |
| `TIn` | `TIn` |
| `TA` | `TA` |
| `TB` | `TB` |
| `TC` | `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Function1`](functions.md#function1)<`TObservableIn`, [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TA`\>\> |
| `b` | [`Function1`](functions.md#function1)<`TObservableIn`, [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TB`\>\> |
| `c` | [`Function1`](functions.md#function1)<`TObservableIn`, [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TC`\>\> |

#### Returns

[`Function1`](functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<[`TA`, `TB`, `TC`]\>\>

▸ **forkCombineLatest**<`TObservableIn`, `TIn`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Function1`](functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<[`TA`, `TB`, `TC`, `TD`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TIn`, `TObservableIn`\> |
| `TIn` | `TIn` |
| `TA` | `TA` |
| `TB` | `TB` |
| `TC` | `TC` |
| `TD` | `TD` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Function1`](functions.md#function1)<`TObservableIn`, [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TA`\>\> |
| `b` | [`Function1`](functions.md#function1)<`TObservableIn`, [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TB`\>\> |
| `c` | [`Function1`](functions.md#function1)<`TObservableIn`, [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TC`\>\> |
| `d` | [`Function1`](functions.md#function1)<`TObservableIn`, [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TD`\>\> |

#### Returns

[`Function1`](functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<[`TA`, `TB`, `TC`, `TD`]\>\>

___

### forkConcat

▸ **forkConcat**<`TObservableIn`, `TIn`, `TOut`\>(`fst`, `snd`, `...tail`): [`Function1`](functions.md#function1)<`TObservableIn`, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TOut`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TIn`, `TObservableIn`\> |
| `TIn` | `TIn` |
| `TOut` | `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Function1`](functions.md#function1)<`TObservableIn`, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TOut`\>\> |
| `snd` | [`Function1`](functions.md#function1)<`TObservableIn`, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TOut`\>\> |
| `...tail` | readonly [`Function1`](functions.md#function1)<`TObservableIn`, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TOut`\>\>[] |

#### Returns

[`Function1`](functions.md#function1)<`TObservableIn`, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TOut`\>\>

▸ **forkConcat**<`TObservableIn`, `TIn`, `TOut`\>(`fst`, `snd`, `...tail`): [`Function1`](functions.md#function1)<`TObservableIn`, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TOut`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TIn`, `TObservableIn`\> |
| `TIn` | `TIn` |
| `TOut` | `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Function1`](functions.md#function1)<`TObservableIn`, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TOut`\>\> |
| `snd` | [`Function1`](functions.md#function1)<`TObservableIn`, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TOut`\>\> |
| `...tail` | readonly [`Function1`](functions.md#function1)<`TObservableIn`, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TOut`\>\>[] |

#### Returns

[`Function1`](functions.md#function1)<`TObservableIn`, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TOut`\>\>

▸ **forkConcat**<`TObservableIn`, `TIn`, `TOut`\>(`fst`, `snd`, `...tail`): [`Function1`](functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TOut`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TIn`, `TObservableIn`\> |
| `TIn` | `TIn` |
| `TOut` | `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Function1`](functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TOut`\>\> |
| `snd` | [`Function1`](functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TOut`\>\> |
| `...tail` | readonly [`Function1`](functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TOut`\>\>[] |

#### Returns

[`Function1`](functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TOut`\>\>

▸ **forkConcat**<`TObservableIn`, `TIn`, `TOut`\>(`fst`, `snd`, `...tail`): [`Function1`](functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TOut`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TIn`, `TObservableIn`\> |
| `TIn` | `TIn` |
| `TOut` | `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Function1`](functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TOut`\>\> |
| `snd` | [`Function1`](functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TOut`\>\> |
| `...tail` | readonly [`Function1`](functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TOut`\>\>[] |

#### Returns

[`Function1`](functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TOut`\>\>

___

### forkMerge

▸ **forkMerge**<`TObservableIn`, `TIn`, `TOut`\>(`fst`, `snd`, `...tail`): [`Function1`](functions.md#function1)<`TObservableIn`, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TOut`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TIn`, `TObservableIn`\> |
| `TIn` | `TIn` |
| `TOut` | `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Function1`](functions.md#function1)<`TObservableIn`, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TOut`\>\> |
| `snd` | [`Function1`](functions.md#function1)<`TObservableIn`, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TOut`\>\> |
| `...tail` | readonly [`Function1`](functions.md#function1)<`TObservableIn`, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TOut`\>\>[] |

#### Returns

[`Function1`](functions.md#function1)<`TObservableIn`, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TOut`\>\>

▸ **forkMerge**<`TObservableIn`, `TIn`, `TOut`\>(`fst`, `snd`, `...tail`): [`Function1`](functions.md#function1)<`TObservableIn`, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TOut`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TIn`, `TObservableIn`\> |
| `TIn` | `TIn` |
| `TOut` | `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Function1`](functions.md#function1)<`TObservableIn`, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TOut`\>\> |
| `snd` | [`Function1`](functions.md#function1)<`TObservableIn`, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TOut`\>\> |
| `...tail` | readonly [`Function1`](functions.md#function1)<`TObservableIn`, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TOut`\>\>[] |

#### Returns

[`Function1`](functions.md#function1)<`TObservableIn`, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TOut`\>\>

▸ **forkMerge**<`TObservableIn`, `TIn`, `TOut`\>(`fst`, `snd`, `...tail`): [`Function1`](functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TOut`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TIn`, `TObservableIn`\> |
| `TIn` | `TIn` |
| `TOut` | `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Function1`](functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TOut`\>\> |
| `snd` | [`Function1`](functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TOut`\>\> |
| `...tail` | readonly [`Function1`](functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TOut`\>\>[] |

#### Returns

[`Function1`](functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TOut`\>\>

▸ **forkMerge**<`TObservableIn`, `TIn`, `TOut`\>(`fst`, `snd`, `...tail`): [`Function1`](functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TOut`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TIn`, `TObservableIn`\> |
| `TIn` | `TIn` |
| `TOut` | `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Function1`](functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TOut`\>\> |
| `snd` | [`Function1`](functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TOut`\>\> |
| `...tail` | readonly [`Function1`](functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TOut`\>\>[] |

#### Returns

[`Function1`](functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TOut`\>\>

▸ **forkMerge**<`TObservableIn`, `TIn`, `TOut`\>(`fst`, `snd`, `...tail`): [`Function1`](functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TOut`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TIn`, `TObservableIn`\> |
| `TIn` | `TIn` |
| `TOut` | `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Function1`](functions.md#function1)<`TObservableIn`, [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TOut`\>\> |
| `snd` | [`Function1`](functions.md#function1)<`TObservableIn`, [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TOut`\>\> |
| `...tail` | readonly [`Function1`](functions.md#function1)<`TObservableIn`, [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TOut`\>\>[] |

#### Returns

[`Function1`](functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TOut`\>\>

___

### forkZip

▸ **forkZip**<`TObservableIn`, `TIn`, `TA`, `TB`\>(`a`, `b`): [`Function1`](functions.md#function1)<`TObservableIn`, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<[`TA`, `TB`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TIn`, `TObservableIn`\> |
| `TIn` | `TIn` |
| `TA` | `TA` |
| `TB` | `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Function1`](functions.md#function1)<`TObservableIn`, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TA`\>\> |
| `b` | [`Function1`](functions.md#function1)<`TObservableIn`, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\>\> |

#### Returns

[`Function1`](functions.md#function1)<`TObservableIn`, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<[`TA`, `TB`]\>\>

▸ **forkZip**<`TObservableIn`, `TIn`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Function1`](functions.md#function1)<`TObservableIn`, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<[`TA`, `TB`, `TC`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TIn`, `TObservableIn`\> |
| `TIn` | `TIn` |
| `TA` | `TA` |
| `TB` | `TB` |
| `TC` | `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Function1`](functions.md#function1)<`TObservableIn`, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TA`\>\> |
| `b` | [`Function1`](functions.md#function1)<`TObservableIn`, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\>\> |
| `c` | [`Function1`](functions.md#function1)<`TObservableIn`, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TC`\>\> |

#### Returns

[`Function1`](functions.md#function1)<`TObservableIn`, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<[`TA`, `TB`, `TC`]\>\>

▸ **forkZip**<`TObservableIn`, `TIn`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Function1`](functions.md#function1)<`TObservableIn`, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<[`TA`, `TB`, `TC`, `TD`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TIn`, `TObservableIn`\> |
| `TIn` | `TIn` |
| `TA` | `TA` |
| `TB` | `TB` |
| `TC` | `TC` |
| `TD` | `TD` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Function1`](functions.md#function1)<`TObservableIn`, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TA`\>\> |
| `b` | [`Function1`](functions.md#function1)<`TObservableIn`, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\>\> |
| `c` | [`Function1`](functions.md#function1)<`TObservableIn`, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TC`\>\> |
| `d` | [`Function1`](functions.md#function1)<`TObservableIn`, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TD`\>\> |

#### Returns

[`Function1`](functions.md#function1)<`TObservableIn`, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<[`TA`, `TB`, `TC`, `TD`]\>\>

▸ **forkZip**<`TObservableIn`, `TIn`, `TA`, `TB`\>(`a`, `b`): [`Function1`](functions.md#function1)<`TObservableIn`, [`RunnableLike`](../interfaces/types.RunnableLike.md)<[`TA`, `TB`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TIn`, `TObservableIn`\> |
| `TIn` | `TIn` |
| `TA` | `TA` |
| `TB` | `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Function1`](functions.md#function1)<`TObservableIn`, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\>\> |
| `b` | [`Function1`](functions.md#function1)<`TObservableIn`, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\>\> |

#### Returns

[`Function1`](functions.md#function1)<`TObservableIn`, [`RunnableLike`](../interfaces/types.RunnableLike.md)<[`TA`, `TB`]\>\>

▸ **forkZip**<`TObservableIn`, `TIn`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Function1`](functions.md#function1)<`TObservableIn`, [`RunnableLike`](../interfaces/types.RunnableLike.md)<[`TA`, `TB`, `TC`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TIn`, `TObservableIn`\> |
| `TIn` | `TIn` |
| `TA` | `TA` |
| `TB` | `TB` |
| `TC` | `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Function1`](functions.md#function1)<`TObservableIn`, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\>\> |
| `b` | [`Function1`](functions.md#function1)<`TObservableIn`, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\>\> |
| `c` | [`Function1`](functions.md#function1)<`TObservableIn`, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\>\> |

#### Returns

[`Function1`](functions.md#function1)<`TObservableIn`, [`RunnableLike`](../interfaces/types.RunnableLike.md)<[`TA`, `TB`, `TC`]\>\>

▸ **forkZip**<`TObservableIn`, `TIn`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Function1`](functions.md#function1)<`TObservableIn`, [`RunnableLike`](../interfaces/types.RunnableLike.md)<[`TA`, `TB`, `TC`, `TD`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TIn`, `TObservableIn`\> |
| `TIn` | `TIn` |
| `TA` | `TA` |
| `TB` | `TB` |
| `TC` | `TC` |
| `TD` | `TD` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Function1`](functions.md#function1)<`TObservableIn`, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\>\> |
| `b` | [`Function1`](functions.md#function1)<`TObservableIn`, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\>\> |
| `c` | [`Function1`](functions.md#function1)<`TObservableIn`, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\>\> |
| `d` | [`Function1`](functions.md#function1)<`TObservableIn`, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\>\> |

#### Returns

[`Function1`](functions.md#function1)<`TObservableIn`, [`RunnableLike`](../interfaces/types.RunnableLike.md)<[`TA`, `TB`, `TC`, `TD`]\>\>

▸ **forkZip**<`TObservableIn`, `TIn`, `TA`, `TB`\>(`a`, `b`): [`Function1`](functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<[`TA`, `TB`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TIn`, `TObservableIn`\> |
| `TIn` | `TIn` |
| `TA` | `TA` |
| `TB` | `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Function1`](functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\>\> |
| `b` | [`Function1`](functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\>\> |

#### Returns

[`Function1`](functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<[`TA`, `TB`]\>\>

▸ **forkZip**<`TObservableIn`, `TIn`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Function1`](functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<[`TA`, `TB`, `TC`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TIn`, `TObservableIn`\> |
| `TIn` | `TIn` |
| `TA` | `TA` |
| `TB` | `TB` |
| `TC` | `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Function1`](functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\>\> |
| `b` | [`Function1`](functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\>\> |
| `c` | [`Function1`](functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\>\> |

#### Returns

[`Function1`](functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<[`TA`, `TB`, `TC`]\>\>

▸ **forkZip**<`TObservableIn`, `TIn`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Function1`](functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<[`TA`, `TB`, `TC`, `TD`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TIn`, `TObservableIn`\> |
| `TIn` | `TIn` |
| `TA` | `TA` |
| `TB` | `TB` |
| `TC` | `TC` |
| `TD` | `TD` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Function1`](functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\>\> |
| `b` | [`Function1`](functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\>\> |
| `c` | [`Function1`](functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\>\> |
| `d` | [`Function1`](functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\>\> |

#### Returns

[`Function1`](functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<[`TA`, `TB`, `TC`, `TD`]\>\>

▸ **forkZip**<`TObservableIn`, `TIn`, `TA`, `TB`\>(`a`, `b`): [`Function1`](functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<[`TA`, `TB`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TIn`, `TObservableIn`\> |
| `TIn` | `TIn` |
| `TA` | `TA` |
| `TB` | `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Function1`](functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TA`\>\> |
| `b` | [`Function1`](functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TB`\>\> |

#### Returns

[`Function1`](functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<[`TA`, `TB`]\>\>

▸ **forkZip**<`TObservableIn`, `TIn`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Function1`](functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<[`TA`, `TB`, `TC`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TIn`, `TObservableIn`\> |
| `TIn` | `TIn` |
| `TA` | `TA` |
| `TB` | `TB` |
| `TC` | `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Function1`](functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TA`\>\> |
| `b` | [`Function1`](functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TB`\>\> |
| `c` | [`Function1`](functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TC`\>\> |

#### Returns

[`Function1`](functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<[`TA`, `TB`, `TC`]\>\>

▸ **forkZip**<`TObservableIn`, `TIn`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Function1`](functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<[`TA`, `TB`, `TC`, `TD`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TIn`, `TObservableIn`\> |
| `TIn` | `TIn` |
| `TA` | `TA` |
| `TB` | `TB` |
| `TC` | `TC` |
| `TD` | `TD` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Function1`](functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TA`\>\> |
| `b` | [`Function1`](functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TB`\>\> |
| `c` | [`Function1`](functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TC`\>\> |
| `d` | [`Function1`](functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TD`\>\> |

#### Returns

[`Function1`](functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<[`TA`, `TB`, `TC`, `TD`]\>\>

▸ **forkZip**<`TObservableIn`, `TIn`, `TA`, `TB`\>(`a`, `b`): [`Function1`](functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<[`TA`, `TB`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TIn`, `TObservableIn`\> |
| `TIn` | `TIn` |
| `TA` | `TA` |
| `TB` | `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Function1`](functions.md#function1)<`TObservableIn`, [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TA`\>\> |
| `b` | [`Function1`](functions.md#function1)<`TObservableIn`, [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TB`\>\> |

#### Returns

[`Function1`](functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<[`TA`, `TB`]\>\>

▸ **forkZip**<`TObservableIn`, `TIn`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Function1`](functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<[`TA`, `TB`, `TC`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TIn`, `TObservableIn`\> |
| `TIn` | `TIn` |
| `TA` | `TA` |
| `TB` | `TB` |
| `TC` | `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Function1`](functions.md#function1)<`TObservableIn`, [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TA`\>\> |
| `b` | [`Function1`](functions.md#function1)<`TObservableIn`, [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TB`\>\> |
| `c` | [`Function1`](functions.md#function1)<`TObservableIn`, [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TC`\>\> |

#### Returns

[`Function1`](functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<[`TA`, `TB`, `TC`]\>\>

▸ **forkZip**<`TObservableIn`, `TIn`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Function1`](functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<[`TA`, `TB`, `TC`, `TD`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TIn`, `TObservableIn`\> |
| `TIn` | `TIn` |
| `TA` | `TA` |
| `TB` | `TB` |
| `TC` | `TC` |
| `TD` | `TD` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Function1`](functions.md#function1)<`TObservableIn`, [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TA`\>\> |
| `b` | [`Function1`](functions.md#function1)<`TObservableIn`, [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TB`\>\> |
| `c` | [`Function1`](functions.md#function1)<`TObservableIn`, [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TC`\>\> |
| `d` | [`Function1`](functions.md#function1)<`TObservableIn`, [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TD`\>\> |

#### Returns

[`Function1`](functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<[`TA`, `TB`, `TC`, `TD`]\>\>

___

### forkZipLatest

▸ **forkZipLatest**<`TObservableIn`, `TIn`, `TA`, `TB`\>(`a`, `b`): [`Function1`](functions.md#function1)<`TObservableIn`, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<[`TA`, `TB`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TIn`, `TObservableIn`\> |
| `TIn` | `TIn` |
| `TA` | `TA` |
| `TB` | `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Function1`](functions.md#function1)<`TObservableIn`, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TA`\>\> |
| `b` | [`Function1`](functions.md#function1)<`TObservableIn`, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\>\> |

#### Returns

[`Function1`](functions.md#function1)<`TObservableIn`, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<[`TA`, `TB`]\>\>

▸ **forkZipLatest**<`TObservableIn`, `TIn`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Function1`](functions.md#function1)<`TObservableIn`, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<[`TA`, `TB`, `TC`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TIn`, `TObservableIn`\> |
| `TIn` | `TIn` |
| `TA` | `TA` |
| `TB` | `TB` |
| `TC` | `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Function1`](functions.md#function1)<`TObservableIn`, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TA`\>\> |
| `b` | [`Function1`](functions.md#function1)<`TObservableIn`, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\>\> |
| `c` | [`Function1`](functions.md#function1)<`TObservableIn`, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TC`\>\> |

#### Returns

[`Function1`](functions.md#function1)<`TObservableIn`, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<[`TA`, `TB`, `TC`]\>\>

▸ **forkZipLatest**<`TObservableIn`, `TIn`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Function1`](functions.md#function1)<`TObservableIn`, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<[`TA`, `TB`, `TC`, `TD`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TIn`, `TObservableIn`\> |
| `TIn` | `TIn` |
| `TA` | `TA` |
| `TB` | `TB` |
| `TC` | `TC` |
| `TD` | `TD` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Function1`](functions.md#function1)<`TObservableIn`, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TA`\>\> |
| `b` | [`Function1`](functions.md#function1)<`TObservableIn`, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\>\> |
| `c` | [`Function1`](functions.md#function1)<`TObservableIn`, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TC`\>\> |
| `d` | [`Function1`](functions.md#function1)<`TObservableIn`, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TD`\>\> |

#### Returns

[`Function1`](functions.md#function1)<`TObservableIn`, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<[`TA`, `TB`, `TC`, `TD`]\>\>

▸ **forkZipLatest**<`TObservableIn`, `TIn`, `TA`, `TB`\>(`a`, `b`): [`Function1`](functions.md#function1)<`TObservableIn`, [`RunnableLike`](../interfaces/types.RunnableLike.md)<[`TA`, `TB`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TIn`, `TObservableIn`\> |
| `TIn` | `TIn` |
| `TA` | `TA` |
| `TB` | `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Function1`](functions.md#function1)<`TObservableIn`, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\>\> |
| `b` | [`Function1`](functions.md#function1)<`TObservableIn`, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\>\> |

#### Returns

[`Function1`](functions.md#function1)<`TObservableIn`, [`RunnableLike`](../interfaces/types.RunnableLike.md)<[`TA`, `TB`]\>\>

▸ **forkZipLatest**<`TObservableIn`, `TIn`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Function1`](functions.md#function1)<`TObservableIn`, [`RunnableLike`](../interfaces/types.RunnableLike.md)<[`TA`, `TB`, `TC`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TIn`, `TObservableIn`\> |
| `TIn` | `TIn` |
| `TA` | `TA` |
| `TB` | `TB` |
| `TC` | `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Function1`](functions.md#function1)<`TObservableIn`, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\>\> |
| `b` | [`Function1`](functions.md#function1)<`TObservableIn`, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\>\> |
| `c` | [`Function1`](functions.md#function1)<`TObservableIn`, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\>\> |

#### Returns

[`Function1`](functions.md#function1)<`TObservableIn`, [`RunnableLike`](../interfaces/types.RunnableLike.md)<[`TA`, `TB`, `TC`]\>\>

▸ **forkZipLatest**<`TObservableIn`, `TIn`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Function1`](functions.md#function1)<`TObservableIn`, [`RunnableLike`](../interfaces/types.RunnableLike.md)<[`TA`, `TB`, `TC`, `TD`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TIn`, `TObservableIn`\> |
| `TIn` | `TIn` |
| `TA` | `TA` |
| `TB` | `TB` |
| `TC` | `TC` |
| `TD` | `TD` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Function1`](functions.md#function1)<`TObservableIn`, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\>\> |
| `b` | [`Function1`](functions.md#function1)<`TObservableIn`, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\>\> |
| `c` | [`Function1`](functions.md#function1)<`TObservableIn`, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\>\> |
| `d` | [`Function1`](functions.md#function1)<`TObservableIn`, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\>\> |

#### Returns

[`Function1`](functions.md#function1)<`TObservableIn`, [`RunnableLike`](../interfaces/types.RunnableLike.md)<[`TA`, `TB`, `TC`, `TD`]\>\>

▸ **forkZipLatest**<`TObservableIn`, `TIn`, `TA`, `TB`\>(`a`, `b`): [`Function1`](functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<[`TA`, `TB`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TIn`, `TObservableIn`\> |
| `TIn` | `TIn` |
| `TA` | `TA` |
| `TB` | `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Function1`](functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\>\> |
| `b` | [`Function1`](functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\>\> |

#### Returns

[`Function1`](functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<[`TA`, `TB`]\>\>

▸ **forkZipLatest**<`TObservableIn`, `TIn`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Function1`](functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<[`TA`, `TB`, `TC`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TIn`, `TObservableIn`\> |
| `TIn` | `TIn` |
| `TA` | `TA` |
| `TB` | `TB` |
| `TC` | `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Function1`](functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\>\> |
| `b` | [`Function1`](functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\>\> |
| `c` | [`Function1`](functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\>\> |

#### Returns

[`Function1`](functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<[`TA`, `TB`, `TC`]\>\>

▸ **forkZipLatest**<`TObservableIn`, `TIn`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Function1`](functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<[`TA`, `TB`, `TC`, `TD`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TIn`, `TObservableIn`\> |
| `TIn` | `TIn` |
| `TA` | `TA` |
| `TB` | `TB` |
| `TC` | `TC` |
| `TD` | `TD` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Function1`](functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\>\> |
| `b` | [`Function1`](functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\>\> |
| `c` | [`Function1`](functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\>\> |
| `d` | [`Function1`](functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\>\> |

#### Returns

[`Function1`](functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<[`TA`, `TB`, `TC`, `TD`]\>\>

▸ **forkZipLatest**<`TObservableIn`, `TIn`, `TA`, `TB`\>(`a`, `b`): [`Function1`](functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<[`TA`, `TB`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TIn`, `TObservableIn`\> |
| `TIn` | `TIn` |
| `TA` | `TA` |
| `TB` | `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Function1`](functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TA`\>\> |
| `b` | [`Function1`](functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TB`\>\> |

#### Returns

[`Function1`](functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<[`TA`, `TB`]\>\>

▸ **forkZipLatest**<`TObservableIn`, `TIn`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Function1`](functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<[`TA`, `TB`, `TC`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TIn`, `TObservableIn`\> |
| `TIn` | `TIn` |
| `TA` | `TA` |
| `TB` | `TB` |
| `TC` | `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Function1`](functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TA`\>\> |
| `b` | [`Function1`](functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TB`\>\> |
| `c` | [`Function1`](functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TC`\>\> |

#### Returns

[`Function1`](functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<[`TA`, `TB`, `TC`]\>\>

▸ **forkZipLatest**<`TObservableIn`, `TIn`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Function1`](functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<[`TA`, `TB`, `TC`, `TD`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TIn`, `TObservableIn`\> |
| `TIn` | `TIn` |
| `TA` | `TA` |
| `TB` | `TB` |
| `TC` | `TC` |
| `TD` | `TD` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Function1`](functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TA`\>\> |
| `b` | [`Function1`](functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TB`\>\> |
| `c` | [`Function1`](functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TC`\>\> |
| `d` | [`Function1`](functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TD`\>\> |

#### Returns

[`Function1`](functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<[`TA`, `TB`, `TC`, `TD`]\>\>

▸ **forkZipLatest**<`TObservableIn`, `TIn`, `TA`, `TB`\>(`a`, `b`): [`Function1`](functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<[`TA`, `TB`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TIn`, `TObservableIn`\> |
| `TIn` | `TIn` |
| `TA` | `TA` |
| `TB` | `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Function1`](functions.md#function1)<`TObservableIn`, [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TA`\>\> |
| `b` | [`Function1`](functions.md#function1)<`TObservableIn`, [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TB`\>\> |

#### Returns

[`Function1`](functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<[`TA`, `TB`]\>\>

▸ **forkZipLatest**<`TObservableIn`, `TIn`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Function1`](functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<[`TA`, `TB`, `TC`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TIn`, `TObservableIn`\> |
| `TIn` | `TIn` |
| `TA` | `TA` |
| `TB` | `TB` |
| `TC` | `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Function1`](functions.md#function1)<`TObservableIn`, [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TA`\>\> |
| `b` | [`Function1`](functions.md#function1)<`TObservableIn`, [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TB`\>\> |
| `c` | [`Function1`](functions.md#function1)<`TObservableIn`, [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TC`\>\> |

#### Returns

[`Function1`](functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<[`TA`, `TB`, `TC`]\>\>

▸ **forkZipLatest**<`TObservableIn`, `TIn`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Function1`](functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<[`TA`, `TB`, `TC`, `TD`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TIn`, `TObservableIn`\> |
| `TIn` | `TIn` |
| `TA` | `TA` |
| `TB` | `TB` |
| `TC` | `TC` |
| `TD` | `TD` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Function1`](functions.md#function1)<`TObservableIn`, [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TA`\>\> |
| `b` | [`Function1`](functions.md#function1)<`TObservableIn`, [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TB`\>\> |
| `c` | [`Function1`](functions.md#function1)<`TObservableIn`, [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TC`\>\> |
| `d` | [`Function1`](functions.md#function1)<`TObservableIn`, [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TD`\>\> |

#### Returns

[`Function1`](functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<[`TA`, `TB`, `TC`, `TD`]\>\>

___

### fromAsyncFactory

▸ **fromAsyncFactory**<`T`\>(): [`Function1`](functions.md#function1)<[`Function1`](functions.md#function1)<`AbortSignal`, `Promise`<`T`\>\>, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`Function1`](functions.md#function1)<`AbortSignal`, `Promise`<`T`\>\>, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

___

### fromEnumeratorFactory

▸ **fromEnumeratorFactory**<`T`\>(): [`Function1`](functions.md#function1)<[`Factory`](functions.md#factory)<[`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>\>, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`Factory`](functions.md#factory)<[`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>\>, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

▸ **fromEnumeratorFactory**<`T`\>(`options`): [`Function1`](functions.md#function1)<[`Factory`](functions.md#factory)<[`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>\>, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.delay` | `number` |
| `options.delayStart?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<[`Factory`](functions.md#factory)<[`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>\>, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>\>

___

### fromFactory

▸ **fromFactory**<`T`\>(): [`Function1`](functions.md#function1)<[`Factory`](functions.md#factory)<`T`\>, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`Factory`](functions.md#factory)<`T`\>, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

▸ **fromFactory**<`T`\>(`options`): [`Function1`](functions.md#function1)<[`Factory`](functions.md#factory)<`T`\>, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.delay` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`Factory`](functions.md#factory)<`T`\>, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>\>

___

### fromIterable

▸ **fromIterable**<`T`\>(): [`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

▸ **fromIterable**<`T`\>(`options`): [`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.delay` | `number` |
| `options.delayStart?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>\>

___

### fromOptional

▸ **fromOptional**<`T`\>(): [`Function1`](functions.md#function1)<[`Optional`](functions.md#optional)<`T`\>, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`Optional`](functions.md#optional)<`T`\>, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

▸ **fromOptional**<`T`\>(`options`): [`Function1`](functions.md#function1)<[`Optional`](functions.md#optional)<`T`\>, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.delay` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`Optional`](functions.md#optional)<`T`\>, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>\>

___

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`\>(): [`Function1`](functions.md#function1)<readonly `T`[], [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

▸ **fromReadonlyArray**<`T`\>(`options`): [`Function1`](functions.md#function1)<readonly `T`[], [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.count` | `number` |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

▸ **fromReadonlyArray**<`T`\>(`options`): [`Function1`](functions.md#function1)<readonly `T`[], [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.count` | `number` |
| `options.start` | `number` |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

▸ **fromReadonlyArray**<`T`\>(`options`): [`Function1`](functions.md#function1)<readonly `T`[], [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.start` | `number` |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

▸ **fromReadonlyArray**<`T`\>(`options`): [`Function1`](functions.md#function1)<readonly `T`[], [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.count?` | `number` |
| `options.delay` | `number` |
| `options.delayStart?` | `boolean` |
| `options.start?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>\>

___

### fromValue

▸ **fromValue**<`T`\>(): [`Function1`](functions.md#function1)<`T`, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<`T`, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

▸ **fromValue**<`T`\>(`options`): [`Function1`](functions.md#function1)<`T`, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.delay` | `number` |

#### Returns

[`Function1`](functions.md#function1)<`T`, [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>\>

___

### generate

▸ **generate**<`T`\>(`generator`, `initialValue`): [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `generator` | [`Updater`](functions.md#updater)<`T`\> |
| `initialValue` | [`Factory`](functions.md#factory)<`T`\> |

#### Returns

[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>

▸ **generate**<`T`\>(`generator`, `initialValue`, `options`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `generator` | [`Updater`](functions.md#updater)<`T`\> |
| `initialValue` | [`Factory`](functions.md#factory)<`T`\> |
| `options` | `Object` |
| `options.delay` | `number` |
| `options.delayStart?` | `boolean` |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>

▸ **generate**<`T`\>(`generator`, `initialValue`, `options?`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `generator` | [`Updater`](functions.md#updater)<`T`\> |
| `initialValue` | [`Factory`](functions.md#factory)<`T`\> |
| `options?` | `Object` |
| `options.delay?` | `number` |
| `options.delayStart?` | `boolean` |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>

___

### ignoreElements

▸ **ignoreElements**<`T`\>(): [`ObservableOperator`](Observable.md#observableoperator)<`unknown`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ObservableOperator`](Observable.md#observableoperator)<`unknown`, `T`\>

___

### isDeferredObservable

▸ **isDeferredObservable**<`T`\>(`obs`): obs is DeferredObservableLike<T\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obs` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\> |

#### Returns

obs is DeferredObservableLike<T\>

___

### isEnumerable

▸ **isEnumerable**<`T`\>(`obs`): obs is EnumerableLike<T\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obs` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\> |

#### Returns

obs is EnumerableLike<T\>

___

### isMulticastObservable

▸ **isMulticastObservable**<`T`\>(`obs`): obs is MulticastObservableLike<T\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obs` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\> |

#### Returns

obs is MulticastObservableLike<T\>

___

### isRunnable

▸ **isRunnable**<`T`\>(`obs`): obs is RunnableLike<T\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obs` | [`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\> |

#### Returns

obs is RunnableLike<T\>

___

### keep

▸ **keep**<`T`\>(`predicate`): [`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`\>

___

### keepType

▸ **keepType**<`TA`, `TB`\>(`predicate`): [`ContainerOperator`](types.md#containeroperator)<[`ObservableContainer`](../interfaces/Observable.ObservableContainer.md), `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`TypePredicate`](functions.md#typepredicate)<`TA`, `TB`\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`ObservableContainer`](../interfaces/Observable.ObservableContainer.md), `TA`, `TB`\>

▸ **keepType**<`TA`, `TB`\>(`predicate`): [`ObservableOperator`](Observable.md#observableoperator)<`TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`TypePredicate`](functions.md#typepredicate)<`TA`, `TB`\> |

#### Returns

[`ObservableOperator`](Observable.md#observableoperator)<`TA`, `TB`\>

___

### lastAsync

▸ **lastAsync**<`T`\>(): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, `Promise`<[`Optional`](functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, `Promise`<[`Optional`](functions.md#optional)<`T`\>\>\>

▸ **lastAsync**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, `Promise`<[`Optional`](functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/types.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, `Promise`<[`Optional`](functions.md#optional)<`T`\>\>\>

___

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`ObservableOperator`](Observable.md#observableoperator)<`TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, `TB`\> |

#### Returns

[`ObservableOperator`](Observable.md#observableoperator)<`TA`, `TB`\>

___

### mapTo

▸ **mapTo**<`TA`, `TB`\>(`value`): [`ObservableOperator`](Observable.md#observableoperator)<`TA`, `TB`\>

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

[`ObservableOperator`](Observable.md#observableoperator)<`TA`, `TB`\>

___

### merge

▸ **merge**<`T`\>(`fst`, `snd`, `...tail`): [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\> |
| `snd` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\> |
| `...tail` | readonly [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>[] |

#### Returns

[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>

▸ **merge**<`T`\>(`fst`, `snd`, `...tail`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\> |
| `snd` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\> |
| `...tail` | readonly [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>[] |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>

▸ **merge**<`T`\>(`fst`, `snd`, `...tail`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\> |
| `snd` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\> |
| `...tail` | readonly [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>[] |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>

▸ **merge**<`T`\>(`fst`, `snd`, `...tail`): [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`T`\> |
| `snd` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`T`\> |
| `...tail` | readonly [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`T`\>[] |

#### Returns

[`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`T`\>

___

### mergeMany

▸ **mergeMany**<`T`\>(`observables`): [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>[] |

#### Returns

[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>

▸ **mergeMany**<`T`\>(`observables`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>[] |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>

▸ **mergeMany**<`T`\>(`observables`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>[] |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>

▸ **mergeMany**<`T`\>(`observables`): [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`T`\>[] |

#### Returns

[`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`T`\>

___

### mergeWith

▸ **mergeWith**<`T`\>(`snd`, `...tail`): [`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\> |
| `...tail` | readonly [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>[] |

#### Returns

[`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`\>

▸ **mergeWith**<`T`\>(`snd`, `...tail`): [`RunnableUpperBoundObservableOperator`](Observable.md#runnableupperboundobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\> |
| `...tail` | readonly [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>[] |

#### Returns

[`RunnableUpperBoundObservableOperator`](Observable.md#runnableupperboundobservableoperator)<`T`, `T`\>

▸ **mergeWith**<`T`\>(`snd`, `...tail`): [`DeferredObservableUpperBoundObservableOperator`](Observable.md#deferredobservableupperboundobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\> |
| `...tail` | readonly [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>[] |

#### Returns

[`DeferredObservableUpperBoundObservableOperator`](Observable.md#deferredobservableupperboundobservableoperator)<`T`, `T`\>

▸ **mergeWith**<`T`\>(`snd`, `...tail`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`T`\> |
| `...tail` | readonly [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`T`\>[] |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`T`\>\>

___

### never

▸ **never**<`T`\>(): [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`T`\>

___

### onSubscribe

▸ **onSubscribe**<`T`\>(`f`): [`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Factory`](functions.md#factory)<[`DisposableLike`](../interfaces/types.DisposableLike.md)\> |

#### Returns

[`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`\>

▸ **onSubscribe**<`T`\>(`f`): [`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Factory`](functions.md#factory)<[`SideEffect1`](functions.md#sideeffect1)<[`Optional`](functions.md#optional)<`Error`\>\>\> |

#### Returns

[`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`\>

▸ **onSubscribe**<`T`\>(`f`): [`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`SideEffect`](functions.md#sideeffect) |

#### Returns

[`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`\>

___

### pairwise

▸ **pairwise**<`T`\>(): [`ObservableOperator`](Observable.md#observableoperator)<`T`, readonly [`T`, `T`]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ObservableOperator`](Observable.md#observableoperator)<`T`, readonly [`T`, `T`]\>

___

### pick

▸ **pick**<`T`, `TKey`\>(`key`): [`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`[`TKey`]\>

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

[`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`[`TKey`]\>

▸ **pick**<`T`, `TKeyA`, `TKeyB`\>(`keyA`, `keyB`): [`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`[`TKeyA`][`TKeyB`]\>

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

[`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`[`TKeyA`][`TKeyB`]\>

▸ **pick**<`T`, `TKeyA`, `TKeyB`, `TKeyC`\>(`keyA`, `keyB`, `keyC`): [`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

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

[`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

___

### scan

▸ **scan**<`T`, `TAcc`\>(`reducer`, `initialValue`): [`ObservableOperator`](Observable.md#observableoperator)<`T`, `TAcc`\>

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

[`ObservableOperator`](Observable.md#observableoperator)<`T`, `TAcc`\>

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`\>

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

[`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`\>

___

### startWith

▸ **startWith**<`T`\>(`value`, `...values`): [`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`\>

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

[`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`\>

___

### subscribe

▸ **subscribe**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/types.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

___

### subscribeOn

▸ **subscribeOn**<`T`\>(`schedulerOrFactory`, `options?`): [`DeferredObservableUpperBoundObservableOperator`](Observable.md#deferredobservableupperboundobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schedulerOrFactory` | [`SchedulerLike`](../interfaces/types.SchedulerLike.md) \| [`Factory`](functions.md#factory)<[`SchedulerLike`](../interfaces/types.SchedulerLike.md) & [`DisposableLike`](../interfaces/types.DisposableLike.md)\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`DeferredObservableUpperBoundObservableOperator`](Observable.md#deferredobservableupperboundobservableoperator)<`T`, `T`\>

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`\>

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

[`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`\>

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`\>

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

[`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`\>

___

### takeUntil

▸ **takeUntil**<`T`\>(`notifier`): [`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `notifier` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`unknown`\> |

#### Returns

[`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`\>

▸ **takeUntil**<`T`\>(`notifier`): [`RunnableUpperBoundObservableOperator`](Observable.md#runnableupperboundobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `notifier` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`unknown`\> |

#### Returns

[`RunnableUpperBoundObservableOperator`](Observable.md#runnableupperboundobservableoperator)<`T`, `T`\>

▸ **takeUntil**<`T`\>(`notifier`): [`DeferredObservableUpperBoundObservableOperator`](Observable.md#deferredobservableupperboundobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `notifier` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`unknown`\> |

#### Returns

[`DeferredObservableUpperBoundObservableOperator`](Observable.md#deferredobservableupperboundobservableoperator)<`T`, `T`\>

▸ **takeUntil**<`T`\>(`notifier`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `notifier` | [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`unknown`\> |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`T`\>\>

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |
| `options?` | `Object` |
| `options.inclusive?` | `boolean` |

#### Returns

[`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`\>

___

### throttle

▸ **throttle**<`T`\>(`duration`, `options?`): [`RunnableUpperBoundObservableOperator`](Observable.md#runnableupperboundobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `duration` | `number` |
| `options?` | `Object` |
| `options.mode?` | ``"interval"`` \| ``"first"`` \| ``"last"`` |

#### Returns

[`RunnableUpperBoundObservableOperator`](Observable.md#runnableupperboundobservableoperator)<`T`, `T`\>

___

### throwIfEmpty

▸ **throwIfEmpty**<`T`\>(`factory`, `options?`): [`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](functions.md#factory)<`unknown`\> |
| `options?` | `undefined` |

#### Returns

[`ObservableOperator`](Observable.md#observableoperator)<`T`, `T`\>

___

### throws

▸ **throws**<`T`\>(): [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>

▸ **throws**<`T`\>(`options`): [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.raise` | [`Factory`](functions.md#factory)<`unknown`\> |

#### Returns

[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>

▸ **throws**<`T`\>(`options`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.delay` | `number` |
| `options.raise?` | [`Factory`](functions.md#factory)<`unknown`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<`T`\>

___

### toEventSource

▸ **toEventSource**<`T`\>(): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, [`EventSourceLike`](../interfaces/types.EventSourceLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, [`EventSourceLike`](../interfaces/types.EventSourceLike.md)<`T`\>\>

▸ **toEventSource**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, [`EventSourceLike`](../interfaces/types.EventSourceLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/types.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, [`EventSourceLike`](../interfaces/types.EventSourceLike.md)<`T`\>\>

___

### toReadonlyArrayAsync

▸ **toReadonlyArrayAsync**<`T`\>(): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, `Promise`<readonly `T`[]\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, `Promise`<readonly `T`[]\>\>

▸ **toReadonlyArrayAsync**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, `Promise`<readonly `T`[]\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/types.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>, `Promise`<readonly `T`[]\>\>

___

### withCurrentTime

▸ **withCurrentTime**<`TA`, `TB`\>(`selector`): [`ObservableOperator`](Observable.md#observableoperator)<`TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function2`](functions.md#function2)<`number`, `TA`, `TB`\> |

#### Returns

[`ObservableOperator`](Observable.md#observableoperator)<`TA`, `TB`\>

___

### withLatestFrom

▸ **withLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`ObservableOperator`](Observable.md#observableoperator)<`TA`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\> |
| `selector` | [`Function2`](functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`ObservableOperator`](Observable.md#observableoperator)<`TA`, `T`\>

▸ **withLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`RunnableUpperBoundObservableOperator`](Observable.md#runnableupperboundobservableoperator)<`TA`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `selector` | [`Function2`](functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`RunnableUpperBoundObservableOperator`](Observable.md#runnableupperboundobservableoperator)<`TA`, `T`\>

▸ **withLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`DeferredObservableUpperBoundObservableOperator`](Observable.md#deferredobservableupperboundobservableoperator)<`TA`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `selector` | [`Function2`](functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`DeferredObservableUpperBoundObservableOperator`](Observable.md#deferredobservableupperboundobservableoperator)<`TA`, `T`\>

▸ **withLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`Function1`](functions.md#function1)<[`AnyObservableLike`](Observable.md#anyobservablelike)<`TA`\>, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TB`\> |
| `selector` | [`Function2`](functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`Function1`](functions.md#function1)<[`AnyObservableLike`](Observable.md#anyobservablelike)<`TA`\>, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`T`\>\>

___

### zip

▸ **zip**<`TA`, `TB`\>(`a`, `b`): [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\> |

#### Returns

[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<readonly [`TA`, `TB`]\>

▸ **zip**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TC`\> |

#### Returns

[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TD`\> |

#### Returns

[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TE`\> |

#### Returns

[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TF`\> |

#### Returns

[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TG`\> |

#### Returns

[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TG`\> |
| `h` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TH`\> |

#### Returns

[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TG`\> |
| `h` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TH`\> |
| `i` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TI`\> |

#### Returns

[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

▸ **zip**<`TA`, `TB`\>(`a`, `b`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`]\>

▸ **zip**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TE`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TF`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TG`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TH`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TH`\> |
| `i` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TI`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

▸ **zip**<`TA`, `TB`\>(`a`, `b`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`]\>

▸ **zip**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TE`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TF`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TF`\> |
| `g` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TG`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TF`\> |
| `g` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TG`\> |
| `h` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TH`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TF`\> |
| `g` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TG`\> |
| `h` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TH`\> |
| `i` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TI`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

▸ **zip**<`TA`, `TB`\>(`a`, `b`): [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TA`\> |
| `b` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TB`\> |

#### Returns

[`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`]\>

▸ **zip**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TA`\> |
| `b` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TB`\> |
| `c` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TC`\> |

#### Returns

[`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TA`\> |
| `b` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TB`\> |
| `c` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TC`\> |
| `d` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TD`\> |

#### Returns

[`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TA`\> |
| `b` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TB`\> |
| `c` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TC`\> |
| `d` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TD`\> |
| `e` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TE`\> |

#### Returns

[`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TA`\> |
| `b` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TB`\> |
| `c` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TC`\> |
| `d` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TD`\> |
| `e` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TE`\> |
| `f` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TF`\> |

#### Returns

[`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TA`\> |
| `b` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TB`\> |
| `c` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TC`\> |
| `d` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TD`\> |
| `e` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TE`\> |
| `f` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TF`\> |
| `g` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TG`\> |

#### Returns

[`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TA`\> |
| `b` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TB`\> |
| `c` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TC`\> |
| `d` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TD`\> |
| `e` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TE`\> |
| `f` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TF`\> |
| `g` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TG`\> |
| `h` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TH`\> |

#### Returns

[`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TA`\> |
| `b` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TB`\> |
| `c` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TC`\> |
| `d` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TD`\> |
| `e` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TE`\> |
| `f` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TF`\> |
| `g` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TG`\> |
| `h` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TH`\> |
| `i` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TI`\> |

#### Returns

[`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

### zipLatest

▸ **zipLatest**<`TA`, `TB`\>(`a`, `b`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TE`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TF`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TG`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TH`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TH`\> |
| `i` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TI`\> |

#### Returns

[`RunnableLike`](../interfaces/types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

▸ **zipLatest**<`TA`, `TB`\>(`a`, `b`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TE`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TF`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TF`\> |
| `g` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TG`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TF`\> |
| `g` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TG`\> |
| `h` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TH`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TF`\> |
| `g` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TG`\> |
| `h` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TH`\> |
| `i` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TI`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

▸ **zipLatest**<`TA`, `TB`\>(`a`, `b`): [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TA`\> |
| `b` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TB`\> |

#### Returns

[`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TA`\> |
| `b` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |

#### Returns

[`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TA`\> |
| `b` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TB`\> |
| `c` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TC`\> |
| `d` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TD`\> |

#### Returns

[`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TA`\> |
| `b` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TB`\> |
| `c` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TC`\> |
| `d` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TD`\> |
| `e` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TE`\> |

#### Returns

[`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TA`\> |
| `b` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TB`\> |
| `c` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TC`\> |
| `d` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TD`\> |
| `e` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TE`\> |
| `f` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TF`\> |

#### Returns

[`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TA`\> |
| `b` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TB`\> |
| `c` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TC`\> |
| `d` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TD`\> |
| `e` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TE`\> |
| `f` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TF`\> |
| `g` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TG`\> |

#### Returns

[`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TA`\> |
| `b` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TB`\> |
| `c` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TC`\> |
| `d` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TD`\> |
| `e` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TE`\> |
| `f` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TF`\> |
| `g` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TG`\> |
| `h` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TH`\> |

#### Returns

[`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TA`\> |
| `b` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TB`\> |
| `c` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TC`\> |
| `d` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TD`\> |
| `e` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TE`\> |
| `f` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TF`\> |
| `g` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TG`\> |
| `h` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TH`\> |
| `i` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TI`\> |

#### Returns

[`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

### zipWith

▸ **zipWith**<`TA`, `TB`\>(`b`): [`ObservableOperator`](Observable.md#observableoperator)<`TA`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\> |

#### Returns

[`ObservableOperator`](Observable.md#observableoperator)<`TA`, readonly [`TA`, `TB`]\>

▸ **zipWith**<`TA`, `TB`, `TC`\>(`b`, `c`): [`ObservableOperator`](Observable.md#observableoperator)<`TA`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TC`\> |

#### Returns

[`ObservableOperator`](Observable.md#observableoperator)<`TA`, readonly [`TA`, `TB`, `TC`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`\>(`b`, `c`, `d`): [`ObservableOperator`](Observable.md#observableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `b` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TD`\> |

#### Returns

[`ObservableOperator`](Observable.md#observableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`b`, `c`, `d`, `e`): [`ObservableOperator`](Observable.md#observableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `b` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TE`\> |

#### Returns

[`ObservableOperator`](Observable.md#observableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`b`, `c`, `d`, `e`, `f`): [`ObservableOperator`](Observable.md#observableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `b` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TF`\> |

#### Returns

[`ObservableOperator`](Observable.md#observableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`b`, `c`, `d`, `e`, `f`, `g`): [`ObservableOperator`](Observable.md#observableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `b` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TG`\> |

#### Returns

[`ObservableOperator`](Observable.md#observableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`): [`ObservableOperator`](Observable.md#observableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `b` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TG`\> |
| `h` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TH`\> |

#### Returns

[`ObservableOperator`](Observable.md#observableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`ObservableOperator`](Observable.md#observableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `b` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TG`\> |
| `h` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TH`\> |
| `i` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TI`\> |

#### Returns

[`ObservableOperator`](Observable.md#observableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

▸ **zipWith**<`TA`, `TB`\>(`b`): [`RunnableUpperBoundObservableOperator`](Observable.md#runnableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |

#### Returns

[`RunnableUpperBoundObservableOperator`](Observable.md#runnableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`]\>

▸ **zipWith**<`TA`, `TB`, `TC`\>(`b`, `c`): [`RunnableUpperBoundObservableOperator`](Observable.md#runnableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |

#### Returns

[`RunnableUpperBoundObservableOperator`](Observable.md#runnableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`, `TC`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`\>(`b`, `c`, `d`): [`RunnableUpperBoundObservableOperator`](Observable.md#runnableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\> |

#### Returns

[`RunnableUpperBoundObservableOperator`](Observable.md#runnableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`b`, `c`, `d`, `e`): [`RunnableUpperBoundObservableOperator`](Observable.md#runnableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TE`\> |

#### Returns

[`RunnableUpperBoundObservableOperator`](Observable.md#runnableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`b`, `c`, `d`, `e`, `f`): [`RunnableUpperBoundObservableOperator`](Observable.md#runnableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TF`\> |

#### Returns

[`RunnableUpperBoundObservableOperator`](Observable.md#runnableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`b`, `c`, `d`, `e`, `f`, `g`): [`RunnableUpperBoundObservableOperator`](Observable.md#runnableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TG`\> |

#### Returns

[`RunnableUpperBoundObservableOperator`](Observable.md#runnableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`): [`RunnableUpperBoundObservableOperator`](Observable.md#runnableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TH`\> |

#### Returns

[`RunnableUpperBoundObservableOperator`](Observable.md#runnableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`RunnableUpperBoundObservableOperator`](Observable.md#runnableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `b` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TH`\> |
| `i` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TI`\> |

#### Returns

[`RunnableUpperBoundObservableOperator`](Observable.md#runnableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

▸ **zipWith**<`TA`, `TB`\>(`b`): [`DeferredObservableUpperBoundObservableOperator`](Observable.md#deferredobservableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |

#### Returns

[`DeferredObservableUpperBoundObservableOperator`](Observable.md#deferredobservableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`]\>

▸ **zipWith**<`TA`, `TB`, `TC`\>(`b`, `c`): [`DeferredObservableUpperBoundObservableOperator`](Observable.md#deferredobservableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |

#### Returns

[`DeferredObservableUpperBoundObservableOperator`](Observable.md#deferredobservableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`, `TC`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`\>(`b`, `c`, `d`): [`DeferredObservableUpperBoundObservableOperator`](Observable.md#deferredobservableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\> |

#### Returns

[`DeferredObservableUpperBoundObservableOperator`](Observable.md#deferredobservableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`b`, `c`, `d`, `e`): [`DeferredObservableUpperBoundObservableOperator`](Observable.md#deferredobservableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TE`\> |

#### Returns

[`DeferredObservableUpperBoundObservableOperator`](Observable.md#deferredobservableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`b`, `c`, `d`, `e`, `f`): [`DeferredObservableUpperBoundObservableOperator`](Observable.md#deferredobservableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TF`\> |

#### Returns

[`DeferredObservableUpperBoundObservableOperator`](Observable.md#deferredobservableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`b`, `c`, `d`, `e`, `f`, `g`): [`DeferredObservableUpperBoundObservableOperator`](Observable.md#deferredobservableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TF`\> |
| `g` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TG`\> |

#### Returns

[`DeferredObservableUpperBoundObservableOperator`](Observable.md#deferredobservableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`): [`DeferredObservableUpperBoundObservableOperator`](Observable.md#deferredobservableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TF`\> |
| `g` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TG`\> |
| `h` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TH`\> |

#### Returns

[`DeferredObservableUpperBoundObservableOperator`](Observable.md#deferredobservableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`DeferredObservableUpperBoundObservableOperator`](Observable.md#deferredobservableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `b` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TF`\> |
| `g` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TG`\> |
| `h` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TH`\> |
| `i` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TI`\> |

#### Returns

[`DeferredObservableUpperBoundObservableOperator`](Observable.md#deferredobservableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

▸ **zipWith**<`TA`, `TB`\>(`b`): [`Function1`](functions.md#function1)<[`AnyObservableLike`](Observable.md#anyobservablelike)<`TA`\>, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`]\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TB`\> |

#### Returns

[`Function1`](functions.md#function1)<[`AnyObservableLike`](Observable.md#anyobservablelike)<`TA`\>, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`]\>\>

▸ **zipWith**<`TA`, `TB`, `TC`\>(`b`, `c`): [`Function1`](functions.md#function1)<[`AnyObservableLike`](Observable.md#anyobservablelike)<`TA`\>, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TB`\> |
| `c` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TC`\> |

#### Returns

[`Function1`](functions.md#function1)<[`AnyObservableLike`](Observable.md#anyobservablelike)<`TA`\>, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`\>(`b`, `c`, `d`): [`Function1`](functions.md#function1)<[`AnyObservableLike`](Observable.md#anyobservablelike)<`TA`\>, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>\>

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
| `b` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TB`\> |
| `c` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TC`\> |
| `d` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TD`\> |

#### Returns

[`Function1`](functions.md#function1)<[`AnyObservableLike`](Observable.md#anyobservablelike)<`TA`\>, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`b`, `c`, `d`, `e`): [`Function1`](functions.md#function1)<[`AnyObservableLike`](Observable.md#anyobservablelike)<`TA`\>, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>\>

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
| `b` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TB`\> |
| `c` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TC`\> |
| `d` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TD`\> |
| `e` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TE`\> |

#### Returns

[`Function1`](functions.md#function1)<[`AnyObservableLike`](Observable.md#anyobservablelike)<`TA`\>, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`b`, `c`, `d`, `e`, `f`): [`Function1`](functions.md#function1)<[`AnyObservableLike`](Observable.md#anyobservablelike)<`TA`\>, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>\>

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
| `b` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TB`\> |
| `c` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TC`\> |
| `d` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TD`\> |
| `e` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TE`\> |
| `f` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TF`\> |

#### Returns

[`Function1`](functions.md#function1)<[`AnyObservableLike`](Observable.md#anyobservablelike)<`TA`\>, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`b`, `c`, `d`, `e`, `f`, `g`): [`Function1`](functions.md#function1)<[`AnyObservableLike`](Observable.md#anyobservablelike)<`TA`\>, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>\>

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
| `b` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TB`\> |
| `c` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TC`\> |
| `d` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TD`\> |
| `e` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TE`\> |
| `f` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TF`\> |
| `g` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TG`\> |

#### Returns

[`Function1`](functions.md#function1)<[`AnyObservableLike`](Observable.md#anyobservablelike)<`TA`\>, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Function1`](functions.md#function1)<[`AnyObservableLike`](Observable.md#anyobservablelike)<`TA`\>, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>\>

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
| `b` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TB`\> |
| `c` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TC`\> |
| `d` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TD`\> |
| `e` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TE`\> |
| `f` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TF`\> |
| `g` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TG`\> |
| `h` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TH`\> |

#### Returns

[`Function1`](functions.md#function1)<[`AnyObservableLike`](Observable.md#anyobservablelike)<`TA`\>, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Function1`](functions.md#function1)<[`AnyObservableLike`](Observable.md#anyobservablelike)<`TA`\>, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>\>

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
| `b` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TB`\> |
| `c` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TC`\> |
| `d` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TD`\> |
| `e` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TE`\> |
| `f` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TF`\> |
| `g` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TG`\> |
| `h` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TH`\> |
| `i` | [`MaybeMulticastObservableLike`](Observable.md#maybemulticastobservablelike)<`TI`\> |

#### Returns

[`Function1`](functions.md#function1)<[`AnyObservableLike`](Observable.md#anyobservablelike)<`TA`\>, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>\>

___

### zipWithLatestFrom

▸ **zipWithLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`ObservableOperator`](Observable.md#observableoperator)<`TA`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\> |
| `selector` | [`Function2`](functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`ObservableOperator`](Observable.md#observableoperator)<`TA`, `T`\>

▸ **zipWithLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`RunnableUpperBoundObservableOperator`](Observable.md#runnableupperboundobservableoperator)<`TA`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`RunnableLike`](../interfaces/types.RunnableLike.md)<`TB`\> |
| `selector` | [`Function2`](functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`RunnableUpperBoundObservableOperator`](Observable.md#runnableupperboundobservableoperator)<`TA`, `T`\>

▸ **zipWithLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`DeferredObservableUpperBoundObservableOperator`](Observable.md#deferredobservableupperboundobservableoperator)<`TA`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`TB`\> |
| `selector` | [`Function2`](functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`DeferredObservableUpperBoundObservableOperator`](Observable.md#deferredobservableupperboundobservableoperator)<`TA`, `T`\>

▸ **zipWithLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`Function1`](functions.md#function1)<[`AnyObservableLike`](Observable.md#anyobservablelike)<`TA`\>, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`TB`\> |
| `selector` | [`Function2`](functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`Function1`](functions.md#function1)<[`AnyObservableLike`](Observable.md#anyobservablelike)<`TA`\>, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`T`\>\>
