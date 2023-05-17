[Reactive-JS](../README.md) / [Observable](../modules/Observable.md) / ObservableModule

# Interface: ObservableModule

[Observable](../modules/Observable.md).ObservableModule

## Table of contents

### Operator Methods

- [flatMapIterable](Observable.ObservableModule.md#flatmapiterable)

### Other Methods

- [animate](Observable.ObservableModule.md#animate)
- [backpressureStrategy](Observable.ObservableModule.md#backpressurestrategy)
- [buffer](Observable.ObservableModule.md#buffer)
- [concat](Observable.ObservableModule.md#concat)
- [concatMany](Observable.ObservableModule.md#concatmany)
- [concatWith](Observable.ObservableModule.md#concatwith)
- [create](Observable.ObservableModule.md#create)
- [createPublisher](Observable.ObservableModule.md#createpublisher)
- [createRefCountedPublisher](Observable.ObservableModule.md#createrefcountedpublisher)
- [currentTime](Observable.ObservableModule.md#currenttime)
- [decodeWithCharset](Observable.ObservableModule.md#decodewithcharset)
- [defer](Observable.ObservableModule.md#defer)
- [dispatchTo](Observable.ObservableModule.md#dispatchto)
- [distinctUntilChanged](Observable.ObservableModule.md#distinctuntilchanged)
- [empty](Observable.ObservableModule.md#empty)
- [encodeUtf8](Observable.ObservableModule.md#encodeutf8)
- [endWith](Observable.ObservableModule.md#endwith)
- [enqueue](Observable.ObservableModule.md#enqueue)
- [firstAsync](Observable.ObservableModule.md#firstasync)
- [flatMapAsync](Observable.ObservableModule.md#flatmapasync)
- [forEach](Observable.ObservableModule.md#foreach)
- [forkConcat](Observable.ObservableModule.md#forkconcat)
- [forkMerge](Observable.ObservableModule.md#forkmerge)
- [forkZip](Observable.ObservableModule.md#forkzip)
- [fromAsyncFactory](Observable.ObservableModule.md#fromasyncfactory)
- [fromEnumeratorFactory](Observable.ObservableModule.md#fromenumeratorfactory)
- [fromFactory](Observable.ObservableModule.md#fromfactory)
- [fromIterable](Observable.ObservableModule.md#fromiterable)
- [fromOptional](Observable.ObservableModule.md#fromoptional)
- [fromReadonlyArray](Observable.ObservableModule.md#fromreadonlyarray)
- [fromValue](Observable.ObservableModule.md#fromvalue)
- [generate](Observable.ObservableModule.md#generate)
- [ignoreElements](Observable.ObservableModule.md#ignoreelements)
- [isDeferredObservable](Observable.ObservableModule.md#isdeferredobservable)
- [isEnumerable](Observable.ObservableModule.md#isenumerable)
- [isMulticastObservable](Observable.ObservableModule.md#ismulticastobservable)
- [isRunnable](Observable.ObservableModule.md#isrunnable)
- [keep](Observable.ObservableModule.md#keep)
- [keepType](Observable.ObservableModule.md#keeptype)
- [lastAsync](Observable.ObservableModule.md#lastasync)
- [map](Observable.ObservableModule.md#map)
- [mapTo](Observable.ObservableModule.md#mapto)
- [merge](Observable.ObservableModule.md#merge)
- [mergeMany](Observable.ObservableModule.md#mergemany)
- [mergeWith](Observable.ObservableModule.md#mergewith)
- [never](Observable.ObservableModule.md#never)
- [onSubscribe](Observable.ObservableModule.md#onsubscribe)
- [pairwise](Observable.ObservableModule.md#pairwise)
- [pick](Observable.ObservableModule.md#pick)
- [scan](Observable.ObservableModule.md#scan)
- [skipFirst](Observable.ObservableModule.md#skipfirst)
- [startWith](Observable.ObservableModule.md#startwith)
- [subscribe](Observable.ObservableModule.md#subscribe)
- [subscribeOn](Observable.ObservableModule.md#subscribeon)
- [takeFirst](Observable.ObservableModule.md#takefirst)
- [takeLast](Observable.ObservableModule.md#takelast)
- [takeWhile](Observable.ObservableModule.md#takewhile)
- [throttle](Observable.ObservableModule.md#throttle)
- [throwIfEmpty](Observable.ObservableModule.md#throwifempty)
- [throws](Observable.ObservableModule.md#throws)
- [toEventSource](Observable.ObservableModule.md#toeventsource)
- [withCurrentTime](Observable.ObservableModule.md#withcurrenttime)
- [withLatestFrom](Observable.ObservableModule.md#withlatestfrom)
- [zip](Observable.ObservableModule.md#zip)
- [zipWith](Observable.ObservableModule.md#zipwith)

## Operator Methods

### flatMapIterable

▸ **flatMapIterable**<`TA`, `TB`\>(`selector`): [`EnumerableUpperBoundObservableOperator`](../modules/Observable.md#enumerableupperboundobservableoperator)<`TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, `Iterable`<`TB`\>\> |

#### Returns

[`EnumerableUpperBoundObservableOperator`](../modules/Observable.md#enumerableupperboundobservableoperator)<`TA`, `TB`\>

___

## Other Methods

### animate

▸ **animate**<`T`\>(`configs`): [`RunnableLike`](types.RunnableLike.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `configs` | [`Animation`](../modules/Observable.md#animation)<`T`\> \| readonly [`Animation`](../modules/Observable.md#animation)<`T`\>[] |

#### Returns

[`RunnableLike`](types.RunnableLike.md)<`T`\>

___

### backpressureStrategy

▸ **backpressureStrategy**<`T`\>(`capacity`, `backpressureStrategy`): [`EnumerableUpperBoundObservableOperator`](../modules/Observable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

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

[`EnumerableUpperBoundObservableOperator`](../modules/Observable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

___

### buffer

▸ **buffer**<`T`\>(`options?`): [`EnumerableUpperBoundObservableOperator`](../modules/Observable.md#enumerableupperboundobservableoperator)<`T`, readonly `T`[]\>

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

[`EnumerableUpperBoundObservableOperator`](../modules/Observable.md#enumerableupperboundobservableoperator)<`T`, readonly `T`[]\>

___

### concat

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`EnumerableLike`](types.EnumerableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`EnumerableLike`](types.EnumerableLike.md)<`T`\> |
| `snd` | [`EnumerableLike`](types.EnumerableLike.md)<`T`\> |
| `...tail` | readonly [`EnumerableLike`](types.EnumerableLike.md)<`T`\>[] |

#### Returns

[`EnumerableLike`](types.EnumerableLike.md)<`T`\>

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`RunnableLike`](types.RunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`RunnableLike`](types.RunnableLike.md)<`T`\> |
| `snd` | [`RunnableLike`](types.RunnableLike.md)<`T`\> |
| `...tail` | readonly [`RunnableLike`](types.RunnableLike.md)<`T`\>[] |

#### Returns

[`RunnableLike`](types.RunnableLike.md)<`T`\>

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\> |
| `snd` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\> |
| `...tail` | readonly [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>[] |

#### Returns

[`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`MulticastObservableLike`](types.MulticastObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`MulticastObservableLike`](types.MulticastObservableLike.md)<`T`\> |
| `snd` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\> |
| `...tail` | readonly [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>[] |

#### Returns

[`MulticastObservableLike`](types.MulticastObservableLike.md)<`T`\>

___

### concatMany

▸ **concatMany**<`T`\>(`observables`): [`EnumerableLike`](types.EnumerableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [`EnumerableLike`](types.EnumerableLike.md)<`T`\>[] |

#### Returns

[`EnumerableLike`](types.EnumerableLike.md)<`T`\>

▸ **concatMany**<`T`\>(`observables`): [`RunnableLike`](types.RunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [`RunnableLike`](types.RunnableLike.md)<`T`\>[] |

#### Returns

[`RunnableLike`](types.RunnableLike.md)<`T`\>

▸ **concatMany**<`T`\>(`observables`): [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>[] |

#### Returns

[`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>

▸ **concatMany**<`T`\>(`observables`): [`MulticastObservableLike`](types.MulticastObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [[`MulticastObservableLike`](types.MulticastObservableLike.md)<`T`\>, [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>] |

#### Returns

[`MulticastObservableLike`](types.MulticastObservableLike.md)<`T`\>

___

### concatWith

▸ **concatWith**<`T`\>(`snd`, `...tail`): [`EnumerableUpperBoundObservableOperator`](../modules/Observable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`EnumerableLike`](types.EnumerableLike.md)<`T`\> |
| `...tail` | readonly [`EnumerableLike`](types.EnumerableLike.md)<`T`\>[] |

#### Returns

[`EnumerableUpperBoundObservableOperator`](../modules/Observable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

▸ **concatWith**<`T`\>(`snd`, `...tail`): [`RunnableUpperBoundObservableOperator`](../modules/Observable.md#runnableupperboundobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`RunnableLike`](types.RunnableLike.md)<`T`\> |
| `...tail` | readonly [`RunnableLike`](types.RunnableLike.md)<`T`\>[] |

#### Returns

[`RunnableUpperBoundObservableOperator`](../modules/Observable.md#runnableupperboundobservableoperator)<`T`, `T`\>

▸ **concatWith**<`T`\>(`snd`, `...tail`): [`DeferredObservableUpperBoundObservableOperator`](../modules/Observable.md#deferredobservableupperboundobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\> |
| `...tail` | readonly [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>[] |

#### Returns

[`DeferredObservableUpperBoundObservableOperator`](../modules/Observable.md#deferredobservableupperboundobservableoperator)<`T`, `T`\>

___

### create

▸ **create**<`T`\>(`f`): [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`SideEffect1`](../modules/functions.md#sideeffect1)<[`ObserverLike`](types.ObserverLike.md)<`T`\>\> |

#### Returns

[`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>

___

### createPublisher

▸ **createPublisher**<`T`\>(`options?`): [`PublisherLike`](types.PublisherLike.md)<`T`\>

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

[`PublisherLike`](types.PublisherLike.md)<`T`\>

___

### createRefCountedPublisher

▸ **createRefCountedPublisher**<`T`\>(`options?`): [`PublisherLike`](types.PublisherLike.md)<`T`\>

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

[`PublisherLike`](types.PublisherLike.md)<`T`\>

___

### currentTime

▸ **currentTime**(`options?`): [`RunnableLike`](types.RunnableLike.md)<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.delay?` | `number` |
| `options.delayStart?` | `boolean` |

#### Returns

[`RunnableLike`](types.RunnableLike.md)<`number`\>

___

### decodeWithCharset

▸ **decodeWithCharset**(`options?`): [`EnumerableUpperBoundObservableOperator`](../modules/Observable.md#enumerableupperboundobservableoperator)<`ArrayBuffer`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.charset?` | `string` |

#### Returns

[`EnumerableUpperBoundObservableOperator`](../modules/Observable.md#enumerableupperboundobservableoperator)<`ArrayBuffer`, `string`\>

___

### defer

▸ **defer**<`T`\>(`f`): [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Factory`](../modules/functions.md#factory)<[`MulticastObservableLike`](types.MulticastObservableLike.md)<`T`\> & [`DisposableLike`](types.DisposableLike.md)\> |

#### Returns

[`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>

___

### dispatchTo

▸ **dispatchTo**<`T`\>(`dispatcher`): [`EnumerableUpperBoundObservableOperator`](../modules/Observable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatcher` | [`DispatcherLike`](types.DispatcherLike.md)<`T`\> |

#### Returns

[`EnumerableUpperBoundObservableOperator`](../modules/Observable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

___

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`EnumerableUpperBoundObservableOperator`](../modules/Observable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

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

[`EnumerableUpperBoundObservableOperator`](../modules/Observable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

___

### empty

▸ **empty**<`T`\>(): [`EnumerableLike`](types.EnumerableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`EnumerableLike`](types.EnumerableLike.md)<`T`\>

▸ **empty**<`T`\>(`options`): [`RunnableLike`](types.RunnableLike.md)<`T`\>

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

[`RunnableLike`](types.RunnableLike.md)<`T`\>

___

### encodeUtf8

▸ **encodeUtf8**(): [`EnumerableUpperBoundObservableOperator`](../modules/Observable.md#enumerableupperboundobservableoperator)<`string`, `Uint8Array`\>

#### Returns

[`EnumerableUpperBoundObservableOperator`](../modules/Observable.md#enumerableupperboundobservableoperator)<`string`, `Uint8Array`\>

___

### endWith

▸ **endWith**<`T`\>(`value`, `...values`): [`EnumerableUpperBoundObservableOperator`](../modules/Observable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

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

[`EnumerableUpperBoundObservableOperator`](../modules/Observable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

___

### enqueue

▸ **enqueue**<`T`\>(`queue`): [`EnumerableUpperBoundObservableOperator`](../modules/Observable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `queue` | [`QueueableLike`](types.QueueableLike.md)<`T`\> |

#### Returns

[`EnumerableUpperBoundObservableOperator`](../modules/Observable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

___

### firstAsync

▸ **firstAsync**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`T`\>, `Promise`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`T`\>, `Promise`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

▸ **firstAsync**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`T`\>, `Promise`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

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

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`T`\>, `Promise`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

___

### flatMapAsync

▸ **flatMapAsync**<`TA`, `TB`\>(`f`): [`DeferredObservableUpperBoundObservableOperator`](../modules/Observable.md#deferredobservableupperboundobservableoperator)<`TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Function2`](../modules/functions.md#function2)<`TA`, `AbortSignal`, `Promise`<`TB`\>\> |

#### Returns

[`DeferredObservableUpperBoundObservableOperator`](../modules/Observable.md#deferredobservableupperboundobservableoperator)<`TA`, `TB`\>

___

### forEach

▸ **forEach**<`T`\>(`effect`): [`EnumerableUpperBoundObservableOperator`](../modules/Observable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect1`](../modules/functions.md#sideeffect1)<`T`\> |

#### Returns

[`EnumerableUpperBoundObservableOperator`](../modules/Observable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

___

### forkConcat

▸ **forkConcat**<`TObservableIn`, `TIn`, `TOut`\>(`fst`, `snd`, `...tail`): [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`EnumerableLike`](types.EnumerableLike.md)<`TOut`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`EnumerableLike`](types.EnumerableLike.md)<`TIn`, `TObservableIn`\> |
| `TIn` | `TIn` |
| `TOut` | `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`EnumerableLike`](types.EnumerableLike.md)<`TOut`\>\> |
| `snd` | [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`EnumerableLike`](types.EnumerableLike.md)<`TOut`\>\> |
| `...tail` | readonly [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`EnumerableLike`](types.EnumerableLike.md)<`TOut`\>\>[] |

#### Returns

[`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`EnumerableLike`](types.EnumerableLike.md)<`TOut`\>\>

▸ **forkConcat**<`TObservableIn`, `TIn`, `TOut`\>(`fst`, `snd`, `...tail`): [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`RunnableLike`](types.RunnableLike.md)<`TOut`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`RunnableLike`](types.RunnableLike.md)<`TIn`, `TObservableIn`\> |
| `TIn` | `TIn` |
| `TOut` | `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`RunnableLike`](types.RunnableLike.md)<`TOut`\>\> |
| `snd` | [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`RunnableLike`](types.RunnableLike.md)<`TOut`\>\> |
| `...tail` | readonly [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`RunnableLike`](types.RunnableLike.md)<`TOut`\>\>[] |

#### Returns

[`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`RunnableLike`](types.RunnableLike.md)<`TOut`\>\>

▸ **forkConcat**<`TObservableIn`, `TIn`, `TOut`\>(`fst`, `snd`, `...tail`): [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TOut`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TIn`, `TObservableIn`\> |
| `TIn` | `TIn` |
| `TOut` | `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TOut`\>\> |
| `snd` | [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TOut`\>\> |
| `...tail` | readonly [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TOut`\>\>[] |

#### Returns

[`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TOut`\>\>

▸ **forkConcat**<`TObservableIn`, `TIn`, `TOut`\>(`fst`, `snd`, `...tail`): [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](types.MulticastObservableLike.md)<`TOut`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TIn`, `TObservableIn`\> |
| `TIn` | `TIn` |
| `TOut` | `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](types.MulticastObservableLike.md)<`TOut`\>\> |
| `snd` | [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TOut`\>\> |
| `...tail` | readonly [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TOut`\>\>[] |

#### Returns

[`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](types.MulticastObservableLike.md)<`TOut`\>\>

___

### forkMerge

▸ **forkMerge**<`TObservableIn`, `TIn`, `TOut`\>(`fst`, `snd`, `...tail`): [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`EnumerableLike`](types.EnumerableLike.md)<`TOut`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`EnumerableLike`](types.EnumerableLike.md)<`TIn`, `TObservableIn`\> |
| `TIn` | `TIn` |
| `TOut` | `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`EnumerableLike`](types.EnumerableLike.md)<`TOut`\>\> |
| `snd` | [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`EnumerableLike`](types.EnumerableLike.md)<`TOut`\>\> |
| `...tail` | readonly [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`EnumerableLike`](types.EnumerableLike.md)<`TOut`\>\>[] |

#### Returns

[`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`EnumerableLike`](types.EnumerableLike.md)<`TOut`\>\>

▸ **forkMerge**<`TObservableIn`, `TIn`, `TOut`\>(`fst`, `snd`, `...tail`): [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`RunnableLike`](types.RunnableLike.md)<`TOut`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`RunnableLike`](types.RunnableLike.md)<`TIn`, `TObservableIn`\> |
| `TIn` | `TIn` |
| `TOut` | `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`RunnableLike`](types.RunnableLike.md)<`TOut`\>\> |
| `snd` | [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`RunnableLike`](types.RunnableLike.md)<`TOut`\>\> |
| `...tail` | readonly [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`RunnableLike`](types.RunnableLike.md)<`TOut`\>\>[] |

#### Returns

[`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`RunnableLike`](types.RunnableLike.md)<`TOut`\>\>

▸ **forkMerge**<`TObservableIn`, `TIn`, `TOut`\>(`fst`, `snd`, `...tail`): [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TOut`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TIn`, `TObservableIn`\> |
| `TIn` | `TIn` |
| `TOut` | `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TOut`\>\> |
| `snd` | [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TOut`\>\> |
| `...tail` | readonly [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TOut`\>\>[] |

#### Returns

[`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TOut`\>\>

▸ **forkMerge**<`TObservableIn`, `TIn`, `TOut`\>(`fst`, `snd`, `...tail`): [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](types.MulticastObservableLike.md)<`TOut`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`MulticastObservableLike`](types.MulticastObservableLike.md)<`TIn`, `TObservableIn`\> |
| `TIn` | `TIn` |
| `TOut` | `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](types.MulticastObservableLike.md)<`TOut`\>\> |
| `snd` | [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](types.MulticastObservableLike.md)<`TOut`\>\> |
| `...tail` | readonly [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](types.MulticastObservableLike.md)<`TOut`\>\>[] |

#### Returns

[`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](types.MulticastObservableLike.md)<`TOut`\>\>

▸ **forkMerge**<`TObservableIn`, `TIn`, `TOut`\>(`fst`, `snd`, `...tail`): [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](types.MulticastObservableLike.md)<`TOut`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TIn`, `TObservableIn`\> |
| `TIn` | `TIn` |
| `TOut` | `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TOut`\>\> |
| `snd` | [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TOut`\>\> |
| `...tail` | readonly [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TOut`\>\>[] |

#### Returns

[`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](types.MulticastObservableLike.md)<`TOut`\>\>

___

### forkZip

▸ **forkZip**<`TObservableIn`, `TIn`, `TA`, `TB`\>(`a`, `b`): [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`EnumerableLike`](types.EnumerableLike.md)<[`TA`, `TB`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`EnumerableLike`](types.EnumerableLike.md)<`TIn`, `TObservableIn`\> |
| `TIn` | `TIn` |
| `TA` | `TA` |
| `TB` | `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`EnumerableLike`](types.EnumerableLike.md)<`TA`\>\> |
| `b` | [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`EnumerableLike`](types.EnumerableLike.md)<`TB`\>\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`EnumerableLike`](types.EnumerableLike.md)<[`TA`, `TB`]\>\>

▸ **forkZip**<`TObservableIn`, `TIn`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`EnumerableLike`](types.EnumerableLike.md)<[`TA`, `TB`, `TC`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`EnumerableLike`](types.EnumerableLike.md)<`TIn`, `TObservableIn`\> |
| `TIn` | `TIn` |
| `TA` | `TA` |
| `TB` | `TB` |
| `TC` | `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`EnumerableLike`](types.EnumerableLike.md)<`TA`\>\> |
| `b` | [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`EnumerableLike`](types.EnumerableLike.md)<`TB`\>\> |
| `c` | [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`EnumerableLike`](types.EnumerableLike.md)<`TC`\>\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`EnumerableLike`](types.EnumerableLike.md)<[`TA`, `TB`, `TC`]\>\>

▸ **forkZip**<`TObservableIn`, `TIn`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`EnumerableLike`](types.EnumerableLike.md)<[`TA`, `TB`, `TC`, `TD`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`EnumerableLike`](types.EnumerableLike.md)<`TIn`, `TObservableIn`\> |
| `TIn` | `TIn` |
| `TA` | `TA` |
| `TB` | `TB` |
| `TC` | `TC` |
| `TD` | `TD` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`EnumerableLike`](types.EnumerableLike.md)<`TA`\>\> |
| `b` | [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`EnumerableLike`](types.EnumerableLike.md)<`TB`\>\> |
| `c` | [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`EnumerableLike`](types.EnumerableLike.md)<`TC`\>\> |
| `d` | [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`EnumerableLike`](types.EnumerableLike.md)<`TD`\>\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`EnumerableLike`](types.EnumerableLike.md)<[`TA`, `TB`, `TC`, `TD`]\>\>

▸ **forkZip**<`TObservableIn`, `TIn`, `TA`, `TB`\>(`a`, `b`): [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`RunnableLike`](types.RunnableLike.md)<[`TA`, `TB`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`RunnableLike`](types.RunnableLike.md)<`TIn`, `TObservableIn`\> |
| `TIn` | `TIn` |
| `TA` | `TA` |
| `TB` | `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`RunnableLike`](types.RunnableLike.md)<`TA`\>\> |
| `b` | [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`RunnableLike`](types.RunnableLike.md)<`TB`\>\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`RunnableLike`](types.RunnableLike.md)<[`TA`, `TB`]\>\>

▸ **forkZip**<`TObservableIn`, `TIn`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`RunnableLike`](types.RunnableLike.md)<[`TA`, `TB`, `TC`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`RunnableLike`](types.RunnableLike.md)<`TIn`, `TObservableIn`\> |
| `TIn` | `TIn` |
| `TA` | `TA` |
| `TB` | `TB` |
| `TC` | `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`RunnableLike`](types.RunnableLike.md)<`TA`\>\> |
| `b` | [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`RunnableLike`](types.RunnableLike.md)<`TB`\>\> |
| `c` | [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`RunnableLike`](types.RunnableLike.md)<`TC`\>\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`RunnableLike`](types.RunnableLike.md)<[`TA`, `TB`, `TC`]\>\>

▸ **forkZip**<`TObservableIn`, `TIn`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`RunnableLike`](types.RunnableLike.md)<[`TA`, `TB`, `TC`, `TD`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`RunnableLike`](types.RunnableLike.md)<`TIn`, `TObservableIn`\> |
| `TIn` | `TIn` |
| `TA` | `TA` |
| `TB` | `TB` |
| `TC` | `TC` |
| `TD` | `TD` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`RunnableLike`](types.RunnableLike.md)<`TA`\>\> |
| `b` | [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`RunnableLike`](types.RunnableLike.md)<`TB`\>\> |
| `c` | [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`RunnableLike`](types.RunnableLike.md)<`TC`\>\> |
| `d` | [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`RunnableLike`](types.RunnableLike.md)<`TD`\>\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`RunnableLike`](types.RunnableLike.md)<[`TA`, `TB`, `TC`, `TD`]\>\>

▸ **forkZip**<`TObservableIn`, `TIn`, `TA`, `TB`\>(`a`, `b`): [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](types.DeferredObservableLike.md)<[`TA`, `TB`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TIn`, `TObservableIn`\> |
| `TIn` | `TIn` |
| `TA` | `TA` |
| `TB` | `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TA`\>\> |
| `b` | [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TB`\>\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](types.DeferredObservableLike.md)<[`TA`, `TB`]\>\>

▸ **forkZip**<`TObservableIn`, `TIn`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](types.DeferredObservableLike.md)<[`TA`, `TB`, `TC`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TIn`, `TObservableIn`\> |
| `TIn` | `TIn` |
| `TA` | `TA` |
| `TB` | `TB` |
| `TC` | `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TA`\>\> |
| `b` | [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TB`\>\> |
| `c` | [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TC`\>\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](types.DeferredObservableLike.md)<[`TA`, `TB`, `TC`]\>\>

▸ **forkZip**<`TObservableIn`, `TIn`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](types.DeferredObservableLike.md)<[`TA`, `TB`, `TC`, `TD`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TIn`, `TObservableIn`\> |
| `TIn` | `TIn` |
| `TA` | `TA` |
| `TB` | `TB` |
| `TC` | `TC` |
| `TD` | `TD` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TA`\>\> |
| `b` | [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TB`\>\> |
| `c` | [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TC`\>\> |
| `d` | [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TD`\>\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`DeferredObservableLike`](types.DeferredObservableLike.md)<[`TA`, `TB`, `TC`, `TD`]\>\>

▸ **forkZip**<`TObservableIn`, `TIn`, `TA`, `TB`\>(`a`, `b`): [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](types.MulticastObservableLike.md)<[`TA`, `TB`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`MulticastObservableLike`](types.MulticastObservableLike.md)<`TIn`, `TObservableIn`\> |
| `TIn` | `TIn` |
| `TA` | `TA` |
| `TB` | `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](types.MulticastObservableLike.md)<`TA`\>\> |
| `b` | [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](types.MulticastObservableLike.md)<`TB`\>\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](types.MulticastObservableLike.md)<[`TA`, `TB`]\>\>

▸ **forkZip**<`TObservableIn`, `TIn`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](types.MulticastObservableLike.md)<[`TA`, `TB`, `TC`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`MulticastObservableLike`](types.MulticastObservableLike.md)<`TIn`, `TObservableIn`\> |
| `TIn` | `TIn` |
| `TA` | `TA` |
| `TB` | `TB` |
| `TC` | `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](types.MulticastObservableLike.md)<`TA`\>\> |
| `b` | [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](types.MulticastObservableLike.md)<`TB`\>\> |
| `c` | [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](types.MulticastObservableLike.md)<`TC`\>\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](types.MulticastObservableLike.md)<[`TA`, `TB`, `TC`]\>\>

▸ **forkZip**<`TObservableIn`, `TIn`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](types.MulticastObservableLike.md)<[`TA`, `TB`, `TC`, `TD`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`MulticastObservableLike`](types.MulticastObservableLike.md)<`TIn`, `TObservableIn`\> |
| `TIn` | `TIn` |
| `TA` | `TA` |
| `TB` | `TB` |
| `TC` | `TC` |
| `TD` | `TD` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](types.MulticastObservableLike.md)<`TA`\>\> |
| `b` | [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](types.MulticastObservableLike.md)<`TB`\>\> |
| `c` | [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](types.MulticastObservableLike.md)<`TC`\>\> |
| `d` | [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](types.MulticastObservableLike.md)<`TD`\>\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](types.MulticastObservableLike.md)<[`TA`, `TB`, `TC`, `TD`]\>\>

▸ **forkZip**<`TObservableIn`, `TIn`, `TA`, `TB`\>(`a`, `b`): [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](types.MulticastObservableLike.md)<[`TA`, `TB`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TIn`, `TObservableIn`\> |
| `TIn` | `TIn` |
| `TA` | `TA` |
| `TB` | `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TA`\>\> |
| `b` | [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TB`\>\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](types.MulticastObservableLike.md)<[`TA`, `TB`]\>\>

▸ **forkZip**<`TObservableIn`, `TIn`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](types.MulticastObservableLike.md)<[`TA`, `TB`, `TC`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TIn`, `TObservableIn`\> |
| `TIn` | `TIn` |
| `TA` | `TA` |
| `TB` | `TB` |
| `TC` | `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TA`\>\> |
| `b` | [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TB`\>\> |
| `c` | [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TC`\>\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](types.MulticastObservableLike.md)<[`TA`, `TB`, `TC`]\>\>

▸ **forkZip**<`TObservableIn`, `TIn`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](types.MulticastObservableLike.md)<[`TA`, `TB`, `TC`, `TD`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TIn`, `TObservableIn`\> |
| `TIn` | `TIn` |
| `TA` | `TA` |
| `TB` | `TB` |
| `TC` | `TC` |
| `TD` | `TD` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TA`\>\> |
| `b` | [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TB`\>\> |
| `c` | [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TC`\>\> |
| `d` | [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TD`\>\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`MulticastObservableLike`](types.MulticastObservableLike.md)<[`TA`, `TB`, `TC`, `TD`]\>\>

___

### fromAsyncFactory

▸ **fromAsyncFactory**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Function1`](../modules/functions.md#function1)<`AbortSignal`, `Promise`<`T`\>\>, [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Function1`](../modules/functions.md#function1)<`AbortSignal`, `Promise`<`T`\>\>, [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>\>

___

### fromEnumeratorFactory

▸ **fromEnumeratorFactory**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Factory`](../modules/functions.md#factory)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Factory`](../modules/functions.md#factory)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

▸ **fromEnumeratorFactory**<`T`\>(`options`): [`Function1`](../modules/functions.md#function1)<[`Factory`](../modules/functions.md#factory)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

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

[`Function1`](../modules/functions.md#function1)<[`Factory`](../modules/functions.md#factory)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

___

### fromFactory

▸ **fromFactory**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Factory`](../modules/functions.md#factory)<`T`\>, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Factory`](../modules/functions.md#factory)<`T`\>, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

▸ **fromFactory**<`T`\>(`options`): [`Function1`](../modules/functions.md#function1)<[`Factory`](../modules/functions.md#factory)<`T`\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

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

[`Function1`](../modules/functions.md#function1)<[`Factory`](../modules/functions.md#factory)<`T`\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

___

### fromIterable

▸ **fromIterable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

▸ **fromIterable**<`T`\>(`options`): [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

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

[`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

___

### fromOptional

▸ **fromOptional**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

▸ **fromOptional**<`T`\>(`options`): [`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

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

[`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

___

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`\>(): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

▸ **fromReadonlyArray**<`T`\>(`options`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

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

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

▸ **fromReadonlyArray**<`T`\>(`options`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

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

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

▸ **fromReadonlyArray**<`T`\>(`options`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

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

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

▸ **fromReadonlyArray**<`T`\>(`options`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

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

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

___

### fromValue

▸ **fromValue**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`T`, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`T`, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

▸ **fromValue**<`T`\>(`options`): [`Function1`](../modules/functions.md#function1)<`T`, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

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

[`Function1`](../modules/functions.md#function1)<`T`, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

___

### generate

▸ **generate**<`T`\>(`generator`, `initialValue`): [`EnumerableLike`](types.EnumerableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `generator` | [`Updater`](../modules/functions.md#updater)<`T`\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`T`\> |

#### Returns

[`EnumerableLike`](types.EnumerableLike.md)<`T`\>

▸ **generate**<`T`\>(`generator`, `initialValue`, `options`): [`RunnableLike`](types.RunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `generator` | [`Updater`](../modules/functions.md#updater)<`T`\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`T`\> |
| `options` | `Object` |
| `options.delay` | `number` |
| `options.delayStart?` | `boolean` |

#### Returns

[`RunnableLike`](types.RunnableLike.md)<`T`\>

▸ **generate**<`T`\>(`generator`, `initialValue`, `options?`): [`RunnableLike`](types.RunnableLike.md)<`T`\>

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

[`RunnableLike`](types.RunnableLike.md)<`T`\>

___

### ignoreElements

▸ **ignoreElements**<`T`\>(): [`EnumerableUpperBoundObservableOperator`](../modules/Observable.md#enumerableupperboundobservableoperator)<`unknown`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`EnumerableUpperBoundObservableOperator`](../modules/Observable.md#enumerableupperboundobservableoperator)<`unknown`, `T`\>

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
| `obs` | [`ObservableLike`](types.ObservableLike.md)<`T`\> |

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
| `obs` | [`ObservableLike`](types.ObservableLike.md)<`T`\> |

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
| `obs` | [`ObservableLike`](types.ObservableLike.md)<`T`\> |

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
| `obs` | [`ObservableLike`](types.ObservableLike.md)<`T`\> |

#### Returns

obs is RunnableLike<T\>

___

### keep

▸ **keep**<`T`\>(`predicate`): [`EnumerableUpperBoundObservableOperator`](../modules/Observable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`EnumerableUpperBoundObservableOperator`](../modules/Observable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

___

### keepType

▸ **keepType**<`TA`, `TB`\>(`predicate`): [`EnumerableUpperBoundObservableOperator`](../modules/Observable.md#enumerableupperboundobservableoperator)<`TA`, `TB`\>

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

[`EnumerableUpperBoundObservableOperator`](../modules/Observable.md#enumerableupperboundobservableoperator)<`TA`, `TB`\>

___

### lastAsync

▸ **lastAsync**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`T`\>, `Promise`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`T`\>, `Promise`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

▸ **lastAsync**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`T`\>, `Promise`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

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

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`T`\>, `Promise`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

___

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`EnumerableUpperBoundObservableOperator`](../modules/Observable.md#enumerableupperboundobservableoperator)<`TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, `TB`\> |

#### Returns

[`EnumerableUpperBoundObservableOperator`](../modules/Observable.md#enumerableupperboundobservableoperator)<`TA`, `TB`\>

___

### mapTo

▸ **mapTo**<`TA`, `TB`\>(`value`): [`EnumerableUpperBoundObservableOperator`](../modules/Observable.md#enumerableupperboundobservableoperator)<`TA`, `TB`\>

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

[`EnumerableUpperBoundObservableOperator`](../modules/Observable.md#enumerableupperboundobservableoperator)<`TA`, `TB`\>

___

### merge

▸ **merge**<`T`\>(`fst`, `snd`, `...tail`): [`EnumerableLike`](types.EnumerableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`EnumerableLike`](types.EnumerableLike.md)<`T`\> |
| `snd` | [`EnumerableLike`](types.EnumerableLike.md)<`T`\> |
| `...tail` | readonly [`EnumerableLike`](types.EnumerableLike.md)<`T`\>[] |

#### Returns

[`EnumerableLike`](types.EnumerableLike.md)<`T`\>

▸ **merge**<`T`\>(`fst`, `snd`, `...tail`): [`RunnableLike`](types.RunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`RunnableLike`](types.RunnableLike.md)<`T`\> |
| `snd` | [`RunnableLike`](types.RunnableLike.md)<`T`\> |
| `...tail` | readonly [`RunnableLike`](types.RunnableLike.md)<`T`\>[] |

#### Returns

[`RunnableLike`](types.RunnableLike.md)<`T`\>

▸ **merge**<`T`\>(`fst`, `snd`, `...tail`): [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\> |
| `snd` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\> |
| `...tail` | readonly [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>[] |

#### Returns

[`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>

▸ **merge**<`T`\>(`fst`, `snd`, `...tail`): [`MulticastObservableLike`](types.MulticastObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`T`\> |
| `snd` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`T`\> |
| `...tail` | readonly [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`T`\>[] |

#### Returns

[`MulticastObservableLike`](types.MulticastObservableLike.md)<`T`\>

___

### mergeMany

▸ **mergeMany**<`T`\>(`observables`): [`EnumerableLike`](types.EnumerableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [`EnumerableLike`](types.EnumerableLike.md)<`T`\>[] |

#### Returns

[`EnumerableLike`](types.EnumerableLike.md)<`T`\>

▸ **mergeMany**<`T`\>(`observables`): [`RunnableLike`](types.RunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [`RunnableLike`](types.RunnableLike.md)<`T`\>[] |

#### Returns

[`RunnableLike`](types.RunnableLike.md)<`T`\>

▸ **mergeMany**<`T`\>(`observables`): [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>[] |

#### Returns

[`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>

▸ **mergeMany**<`T`\>(`observables`): [`MulticastObservableLike`](types.MulticastObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`T`\>[] |

#### Returns

[`MulticastObservableLike`](types.MulticastObservableLike.md)<`T`\>

___

### mergeWith

▸ **mergeWith**<`T`\>(`snd`, `...tail`): [`EnumerableUpperBoundObservableOperator`](../modules/Observable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`EnumerableLike`](types.EnumerableLike.md)<`T`\> |
| `...tail` | readonly [`EnumerableLike`](types.EnumerableLike.md)<`T`\>[] |

#### Returns

[`EnumerableUpperBoundObservableOperator`](../modules/Observable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

▸ **mergeWith**<`T`\>(`snd`, `...tail`): [`RunnableUpperBoundObservableOperator`](../modules/Observable.md#runnableupperboundobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`RunnableLike`](types.RunnableLike.md)<`T`\> |
| `...tail` | readonly [`RunnableLike`](types.RunnableLike.md)<`T`\>[] |

#### Returns

[`RunnableUpperBoundObservableOperator`](../modules/Observable.md#runnableupperboundobservableoperator)<`T`, `T`\>

▸ **mergeWith**<`T`\>(`snd`, `...tail`): [`DeferredObservableUpperBoundObservableOperator`](../modules/Observable.md#deferredobservableupperboundobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\> |
| `...tail` | readonly [`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>[] |

#### Returns

[`DeferredObservableUpperBoundObservableOperator`](../modules/Observable.md#deferredobservableupperboundobservableoperator)<`T`, `T`\>

▸ **mergeWith**<`T`\>(`snd`, `...tail`): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`T`\>, [`MulticastObservableLike`](types.MulticastObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`T`\> |
| `...tail` | readonly [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`T`\>[] |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`T`\>, [`MulticastObservableLike`](types.MulticastObservableLike.md)<`T`\>\>

___

### never

▸ **never**<`T`\>(): [`MulticastObservableLike`](types.MulticastObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`MulticastObservableLike`](types.MulticastObservableLike.md)<`T`\>

___

### onSubscribe

▸ **onSubscribe**<`T`\>(`f`): [`EnumerableUpperBoundObservableOperator`](../modules/Observable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Factory`](../modules/functions.md#factory)<`void` \| [`DisposableOrTeardown`](../modules/types.md#disposableorteardown)\> |

#### Returns

[`EnumerableUpperBoundObservableOperator`](../modules/Observable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

___

### pairwise

▸ **pairwise**<`T`\>(): [`EnumerableUpperBoundObservableOperator`](../modules/Observable.md#enumerableupperboundobservableoperator)<`T`, readonly [`T`, `T`]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`EnumerableUpperBoundObservableOperator`](../modules/Observable.md#enumerableupperboundobservableoperator)<`T`, readonly [`T`, `T`]\>

___

### pick

▸ **pick**<`T`, `TKey`\>(`key`): [`EnumerableUpperBoundObservableOperator`](../modules/Observable.md#enumerableupperboundobservableoperator)<`T`, `T`[`TKey`]\>

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

[`EnumerableUpperBoundObservableOperator`](../modules/Observable.md#enumerableupperboundobservableoperator)<`T`, `T`[`TKey`]\>

▸ **pick**<`T`, `TKeyA`, `TKeyB`\>(`keyA`, `keyB`): [`EnumerableUpperBoundObservableOperator`](../modules/Observable.md#enumerableupperboundobservableoperator)<`T`, `T`[`TKeyA`][`TKeyB`]\>

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

[`EnumerableUpperBoundObservableOperator`](../modules/Observable.md#enumerableupperboundobservableoperator)<`T`, `T`[`TKeyA`][`TKeyB`]\>

▸ **pick**<`T`, `TKeyA`, `TKeyB`, `TKeyC`\>(`keyA`, `keyB`, `keyC`): [`EnumerableUpperBoundObservableOperator`](../modules/Observable.md#enumerableupperboundobservableoperator)<`T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

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

[`EnumerableUpperBoundObservableOperator`](../modules/Observable.md#enumerableupperboundobservableoperator)<`T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

___

### scan

▸ **scan**<`T`, `TAcc`\>(`reducer`, `initialValue`): [`EnumerableUpperBoundObservableOperator`](../modules/Observable.md#enumerableupperboundobservableoperator)<`T`, `TAcc`\>

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

[`EnumerableUpperBoundObservableOperator`](../modules/Observable.md#enumerableupperboundobservableoperator)<`T`, `TAcc`\>

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`EnumerableUpperBoundObservableOperator`](../modules/Observable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

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

[`EnumerableUpperBoundObservableOperator`](../modules/Observable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

___

### startWith

▸ **startWith**<`T`\>(`value`, `...values`): [`EnumerableUpperBoundObservableOperator`](../modules/Observable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

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

[`EnumerableUpperBoundObservableOperator`](../modules/Observable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

___

### subscribe

▸ **subscribe**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`T`\>, [`DisposableLike`](types.DisposableLike.md)\>

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

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`T`\>, [`DisposableLike`](types.DisposableLike.md)\>

___

### subscribeOn

▸ **subscribeOn**<`T`\>(`schedulerOrFactory`, `options?`): [`DeferredObservableUpperBoundObservableOperator`](../modules/Observable.md#deferredobservableupperboundobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schedulerOrFactory` | [`SchedulerLike`](types.SchedulerLike.md) \| [`Factory`](../modules/functions.md#factory)<[`SchedulerLike`](types.SchedulerLike.md) & [`DisposableLike`](types.DisposableLike.md)\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`DeferredObservableUpperBoundObservableOperator`](../modules/Observable.md#deferredobservableupperboundobservableoperator)<`T`, `T`\>

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`EnumerableUpperBoundObservableOperator`](../modules/Observable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

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

[`EnumerableUpperBoundObservableOperator`](../modules/Observable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`EnumerableUpperBoundObservableOperator`](../modules/Observable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

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

[`EnumerableUpperBoundObservableOperator`](../modules/Observable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`EnumerableUpperBoundObservableOperator`](../modules/Observable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |
| `options?` | `Object` |
| `options.inclusive?` | `boolean` |

#### Returns

[`EnumerableUpperBoundObservableOperator`](../modules/Observable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

___

### throttle

▸ **throttle**<`T`\>(`duration`, `options?`): [`RunnableUpperBoundObservableOperator`](../modules/Observable.md#runnableupperboundobservableoperator)<`T`, `T`\>

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

[`RunnableUpperBoundObservableOperator`](../modules/Observable.md#runnableupperboundobservableoperator)<`T`, `T`\>

___

### throwIfEmpty

▸ **throwIfEmpty**<`T`\>(`factory`, `options?`): [`EnumerableUpperBoundObservableOperator`](../modules/Observable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](../modules/functions.md#factory)<`unknown`\> |
| `options?` | `undefined` |

#### Returns

[`EnumerableUpperBoundObservableOperator`](../modules/Observable.md#enumerableupperboundobservableoperator)<`T`, `T`\>

___

### throws

▸ **throws**<`T`\>(): [`EnumerableLike`](types.EnumerableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`EnumerableLike`](types.EnumerableLike.md)<`T`\>

▸ **throws**<`T`\>(`options`): [`EnumerableLike`](types.EnumerableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.raise` | [`Factory`](../modules/functions.md#factory)<`unknown`\> |

#### Returns

[`EnumerableLike`](types.EnumerableLike.md)<`T`\>

▸ **throws**<`T`\>(`options`): [`RunnableLike`](types.RunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.delay` | `number` |
| `options.raise?` | [`Factory`](../modules/functions.md#factory)<`unknown`\> |

#### Returns

[`RunnableLike`](types.RunnableLike.md)<`T`\>

___

### toEventSource

▸ **toEventSource**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`T`\>, [`EventSourceLike`](types.EventSourceLike.md)<`T`\>\>

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

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`T`\>, [`EventSourceLike`](types.EventSourceLike.md)<`T`\>\>

___

### withCurrentTime

▸ **withCurrentTime**<`TA`, `TB`\>(`selector`): [`EnumerableUpperBoundObservableOperator`](../modules/Observable.md#enumerableupperboundobservableoperator)<`TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function2`](../modules/functions.md#function2)<`number`, `TA`, `TB`\> |

#### Returns

[`EnumerableUpperBoundObservableOperator`](../modules/Observable.md#enumerableupperboundobservableoperator)<`TA`, `TB`\>

___

### withLatestFrom

▸ **withLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`EnumerableUpperBoundObservableOperator`](../modules/Observable.md#enumerableupperboundobservableoperator)<`TA`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`EnumerableLike`](types.EnumerableLike.md)<`TB`\> |
| `selector` | [`Function2`](../modules/functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`EnumerableUpperBoundObservableOperator`](../modules/Observable.md#enumerableupperboundobservableoperator)<`TA`, `T`\>

▸ **withLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`RunnableUpperBoundObservableOperator`](../modules/Observable.md#runnableupperboundobservableoperator)<`TA`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`RunnableLike`](types.RunnableLike.md)<`TB`\> |
| `selector` | [`Function2`](../modules/functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`RunnableUpperBoundObservableOperator`](../modules/Observable.md#runnableupperboundobservableoperator)<`TA`, `T`\>

▸ **withLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`DeferredObservableUpperBoundObservableOperator`](../modules/Observable.md#deferredobservableupperboundobservableoperator)<`TA`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TB`\> |
| `selector` | [`Function2`](../modules/functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`DeferredObservableUpperBoundObservableOperator`](../modules/Observable.md#deferredobservableupperboundobservableoperator)<`TA`, `T`\>

▸ **withLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`Function1`](../modules/functions.md#function1)<[`AnyObservableLike`](../modules/Observable.md#anyobservablelike)<`TA`\>, [`MulticastObservableLike`](types.MulticastObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`MulticastObservableLike`](types.MulticastObservableLike.md)<`TB`\> |
| `selector` | [`Function2`](../modules/functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`AnyObservableLike`](../modules/Observable.md#anyobservablelike)<`TA`\>, [`MulticastObservableLike`](types.MulticastObservableLike.md)<`T`\>\>

___

### zip

▸ **zip**<`TA`, `TB`\>(`a`, `b`): [`EnumerableLike`](types.EnumerableLike.md)<readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`EnumerableLike`](types.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](types.EnumerableLike.md)<`TB`\> |

#### Returns

[`EnumerableLike`](types.EnumerableLike.md)<readonly [`TA`, `TB`]\>

▸ **zip**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`EnumerableLike`](types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`EnumerableLike`](types.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](types.EnumerableLike.md)<`TC`\> |

#### Returns

[`EnumerableLike`](types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`EnumerableLike`](types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`EnumerableLike`](types.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](types.EnumerableLike.md)<`TD`\> |

#### Returns

[`EnumerableLike`](types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`EnumerableLike`](types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`EnumerableLike`](types.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](types.EnumerableLike.md)<`TE`\> |

#### Returns

[`EnumerableLike`](types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`EnumerableLike`](types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`EnumerableLike`](types.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](types.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](types.EnumerableLike.md)<`TF`\> |

#### Returns

[`EnumerableLike`](types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`EnumerableLike`](types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`EnumerableLike`](types.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](types.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](types.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](types.EnumerableLike.md)<`TG`\> |

#### Returns

[`EnumerableLike`](types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`EnumerableLike`](types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`EnumerableLike`](types.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](types.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](types.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](types.EnumerableLike.md)<`TG`\> |
| `h` | [`EnumerableLike`](types.EnumerableLike.md)<`TH`\> |

#### Returns

[`EnumerableLike`](types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`EnumerableLike`](types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`EnumerableLike`](types.EnumerableLike.md)<`TA`\> |
| `b` | [`EnumerableLike`](types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](types.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](types.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](types.EnumerableLike.md)<`TG`\> |
| `h` | [`EnumerableLike`](types.EnumerableLike.md)<`TH`\> |
| `i` | [`EnumerableLike`](types.EnumerableLike.md)<`TI`\> |

#### Returns

[`EnumerableLike`](types.EnumerableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

▸ **zip**<`TA`, `TB`\>(`a`, `b`): [`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableLike`](types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](types.RunnableLike.md)<`TB`\> |

#### Returns

[`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`]\>

▸ **zip**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableLike`](types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](types.RunnableLike.md)<`TC`\> |

#### Returns

[`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`RunnableLike`](types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](types.RunnableLike.md)<`TD`\> |

#### Returns

[`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`RunnableLike`](types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](types.RunnableLike.md)<`TE`\> |

#### Returns

[`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`RunnableLike`](types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](types.RunnableLike.md)<`TF`\> |

#### Returns

[`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`RunnableLike`](types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](types.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](types.RunnableLike.md)<`TG`\> |

#### Returns

[`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`RunnableLike`](types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](types.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](types.RunnableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](types.RunnableLike.md)<`TH`\> |

#### Returns

[`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`RunnableLike`](types.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](types.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](types.RunnableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](types.RunnableLike.md)<`TH`\> |
| `i` | [`RunnableLike`](types.RunnableLike.md)<`TI`\> |

#### Returns

[`RunnableLike`](types.RunnableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

▸ **zip**<`TA`, `TB`\>(`a`, `b`): [`DeferredObservableLike`](types.DeferredObservableLike.md)<readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TB`\> |

#### Returns

[`DeferredObservableLike`](types.DeferredObservableLike.md)<readonly [`TA`, `TB`]\>

▸ **zip**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`DeferredObservableLike`](types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TC`\> |

#### Returns

[`DeferredObservableLike`](types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`DeferredObservableLike`](types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TD`\> |

#### Returns

[`DeferredObservableLike`](types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`DeferredObservableLike`](types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TE`\> |

#### Returns

[`DeferredObservableLike`](types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`DeferredObservableLike`](types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TF`\> |

#### Returns

[`DeferredObservableLike`](types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`DeferredObservableLike`](types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TF`\> |
| `g` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TG`\> |

#### Returns

[`DeferredObservableLike`](types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`DeferredObservableLike`](types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TF`\> |
| `g` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TG`\> |
| `h` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TH`\> |

#### Returns

[`DeferredObservableLike`](types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`DeferredObservableLike`](types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TA`\> |
| `b` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TF`\> |
| `g` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TG`\> |
| `h` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TH`\> |
| `i` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TI`\> |

#### Returns

[`DeferredObservableLike`](types.DeferredObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

▸ **zip**<`TA`, `TB`\>(`a`, `b`): [`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TA`\> |
| `b` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TB`\> |

#### Returns

[`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`]\>

▸ **zip**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TA`\> |
| `b` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TB`\> |
| `c` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TC`\> |

#### Returns

[`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TA`\> |
| `b` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TB`\> |
| `c` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TC`\> |
| `d` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TD`\> |

#### Returns

[`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TA`\> |
| `b` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TB`\> |
| `c` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TC`\> |
| `d` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TD`\> |
| `e` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TE`\> |

#### Returns

[`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TA`\> |
| `b` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TB`\> |
| `c` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TC`\> |
| `d` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TD`\> |
| `e` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TE`\> |
| `f` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TF`\> |

#### Returns

[`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TA`\> |
| `b` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TB`\> |
| `c` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TC`\> |
| `d` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TD`\> |
| `e` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TE`\> |
| `f` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TF`\> |
| `g` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TG`\> |

#### Returns

[`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TA`\> |
| `b` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TB`\> |
| `c` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TC`\> |
| `d` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TD`\> |
| `e` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TE`\> |
| `f` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TF`\> |
| `g` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TG`\> |
| `h` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TH`\> |

#### Returns

[`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TA`\> |
| `b` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TB`\> |
| `c` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TC`\> |
| `d` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TD`\> |
| `e` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TE`\> |
| `f` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TF`\> |
| `g` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TG`\> |
| `h` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TH`\> |
| `i` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TI`\> |

#### Returns

[`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

### zipWith

▸ **zipWith**<`TA`, `TB`\>(`b`): [`EnumerableUpperBoundObservableOperator`](../modules/Observable.md#enumerableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`EnumerableLike`](types.EnumerableLike.md)<`TB`\> |

#### Returns

[`EnumerableUpperBoundObservableOperator`](../modules/Observable.md#enumerableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`]\>

▸ **zipWith**<`TA`, `TB`, `TC`\>(`b`, `c`): [`EnumerableUpperBoundObservableOperator`](../modules/Observable.md#enumerableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`EnumerableLike`](types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](types.EnumerableLike.md)<`TC`\> |

#### Returns

[`EnumerableUpperBoundObservableOperator`](../modules/Observable.md#enumerableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`, `TC`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`\>(`b`, `c`, `d`): [`EnumerableUpperBoundObservableOperator`](../modules/Observable.md#enumerableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `b` | [`EnumerableLike`](types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](types.EnumerableLike.md)<`TD`\> |

#### Returns

[`EnumerableUpperBoundObservableOperator`](../modules/Observable.md#enumerableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`b`, `c`, `d`, `e`): [`EnumerableUpperBoundObservableOperator`](../modules/Observable.md#enumerableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `b` | [`EnumerableLike`](types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](types.EnumerableLike.md)<`TE`\> |

#### Returns

[`EnumerableUpperBoundObservableOperator`](../modules/Observable.md#enumerableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`b`, `c`, `d`, `e`, `f`): [`EnumerableUpperBoundObservableOperator`](../modules/Observable.md#enumerableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `b` | [`EnumerableLike`](types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](types.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](types.EnumerableLike.md)<`TF`\> |

#### Returns

[`EnumerableUpperBoundObservableOperator`](../modules/Observable.md#enumerableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`b`, `c`, `d`, `e`, `f`, `g`): [`EnumerableUpperBoundObservableOperator`](../modules/Observable.md#enumerableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `b` | [`EnumerableLike`](types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](types.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](types.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](types.EnumerableLike.md)<`TG`\> |

#### Returns

[`EnumerableUpperBoundObservableOperator`](../modules/Observable.md#enumerableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`): [`EnumerableUpperBoundObservableOperator`](../modules/Observable.md#enumerableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `b` | [`EnumerableLike`](types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](types.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](types.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](types.EnumerableLike.md)<`TG`\> |
| `h` | [`EnumerableLike`](types.EnumerableLike.md)<`TH`\> |

#### Returns

[`EnumerableUpperBoundObservableOperator`](../modules/Observable.md#enumerableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`EnumerableUpperBoundObservableOperator`](../modules/Observable.md#enumerableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `b` | [`EnumerableLike`](types.EnumerableLike.md)<`TB`\> |
| `c` | [`EnumerableLike`](types.EnumerableLike.md)<`TC`\> |
| `d` | [`EnumerableLike`](types.EnumerableLike.md)<`TD`\> |
| `e` | [`EnumerableLike`](types.EnumerableLike.md)<`TE`\> |
| `f` | [`EnumerableLike`](types.EnumerableLike.md)<`TF`\> |
| `g` | [`EnumerableLike`](types.EnumerableLike.md)<`TG`\> |
| `h` | [`EnumerableLike`](types.EnumerableLike.md)<`TH`\> |
| `i` | [`EnumerableLike`](types.EnumerableLike.md)<`TI`\> |

#### Returns

[`EnumerableUpperBoundObservableOperator`](../modules/Observable.md#enumerableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

▸ **zipWith**<`TA`, `TB`\>(`b`): [`RunnableUpperBoundObservableOperator`](../modules/Observable.md#runnableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`RunnableLike`](types.RunnableLike.md)<`TB`\> |

#### Returns

[`RunnableUpperBoundObservableOperator`](../modules/Observable.md#runnableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`]\>

▸ **zipWith**<`TA`, `TB`, `TC`\>(`b`, `c`): [`RunnableUpperBoundObservableOperator`](../modules/Observable.md#runnableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`RunnableLike`](types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](types.RunnableLike.md)<`TC`\> |

#### Returns

[`RunnableUpperBoundObservableOperator`](../modules/Observable.md#runnableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`, `TC`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`\>(`b`, `c`, `d`): [`RunnableUpperBoundObservableOperator`](../modules/Observable.md#runnableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `b` | [`RunnableLike`](types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](types.RunnableLike.md)<`TD`\> |

#### Returns

[`RunnableUpperBoundObservableOperator`](../modules/Observable.md#runnableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`b`, `c`, `d`, `e`): [`RunnableUpperBoundObservableOperator`](../modules/Observable.md#runnableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `b` | [`RunnableLike`](types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](types.RunnableLike.md)<`TE`\> |

#### Returns

[`RunnableUpperBoundObservableOperator`](../modules/Observable.md#runnableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`b`, `c`, `d`, `e`, `f`): [`RunnableUpperBoundObservableOperator`](../modules/Observable.md#runnableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `b` | [`RunnableLike`](types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](types.RunnableLike.md)<`TF`\> |

#### Returns

[`RunnableUpperBoundObservableOperator`](../modules/Observable.md#runnableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`b`, `c`, `d`, `e`, `f`, `g`): [`RunnableUpperBoundObservableOperator`](../modules/Observable.md#runnableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `b` | [`RunnableLike`](types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](types.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](types.RunnableLike.md)<`TG`\> |

#### Returns

[`RunnableUpperBoundObservableOperator`](../modules/Observable.md#runnableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`): [`RunnableUpperBoundObservableOperator`](../modules/Observable.md#runnableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `b` | [`RunnableLike`](types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](types.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](types.RunnableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](types.RunnableLike.md)<`TH`\> |

#### Returns

[`RunnableUpperBoundObservableOperator`](../modules/Observable.md#runnableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`RunnableUpperBoundObservableOperator`](../modules/Observable.md#runnableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `b` | [`RunnableLike`](types.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](types.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](types.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](types.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](types.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](types.RunnableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](types.RunnableLike.md)<`TH`\> |
| `i` | [`RunnableLike`](types.RunnableLike.md)<`TI`\> |

#### Returns

[`RunnableUpperBoundObservableOperator`](../modules/Observable.md#runnableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

▸ **zipWith**<`TA`, `TB`\>(`b`): [`DeferredObservableUpperBoundObservableOperator`](../modules/Observable.md#deferredobservableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TB`\> |

#### Returns

[`DeferredObservableUpperBoundObservableOperator`](../modules/Observable.md#deferredobservableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`]\>

▸ **zipWith**<`TA`, `TB`, `TC`\>(`b`, `c`): [`DeferredObservableUpperBoundObservableOperator`](../modules/Observable.md#deferredobservableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TC`\> |

#### Returns

[`DeferredObservableUpperBoundObservableOperator`](../modules/Observable.md#deferredobservableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`, `TC`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`\>(`b`, `c`, `d`): [`DeferredObservableUpperBoundObservableOperator`](../modules/Observable.md#deferredobservableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `b` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TD`\> |

#### Returns

[`DeferredObservableUpperBoundObservableOperator`](../modules/Observable.md#deferredobservableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`b`, `c`, `d`, `e`): [`DeferredObservableUpperBoundObservableOperator`](../modules/Observable.md#deferredobservableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `b` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TE`\> |

#### Returns

[`DeferredObservableUpperBoundObservableOperator`](../modules/Observable.md#deferredobservableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`b`, `c`, `d`, `e`, `f`): [`DeferredObservableUpperBoundObservableOperator`](../modules/Observable.md#deferredobservableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `b` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TF`\> |

#### Returns

[`DeferredObservableUpperBoundObservableOperator`](../modules/Observable.md#deferredobservableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`b`, `c`, `d`, `e`, `f`, `g`): [`DeferredObservableUpperBoundObservableOperator`](../modules/Observable.md#deferredobservableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `b` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TF`\> |
| `g` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TG`\> |

#### Returns

[`DeferredObservableUpperBoundObservableOperator`](../modules/Observable.md#deferredobservableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`): [`DeferredObservableUpperBoundObservableOperator`](../modules/Observable.md#deferredobservableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `b` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TF`\> |
| `g` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TG`\> |
| `h` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TH`\> |

#### Returns

[`DeferredObservableUpperBoundObservableOperator`](../modules/Observable.md#deferredobservableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`DeferredObservableUpperBoundObservableOperator`](../modules/Observable.md#deferredobservableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `b` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TB`\> |
| `c` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TC`\> |
| `d` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TD`\> |
| `e` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TE`\> |
| `f` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TF`\> |
| `g` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TG`\> |
| `h` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TH`\> |
| `i` | [`DeferredObservableLike`](types.DeferredObservableLike.md)<`TI`\> |

#### Returns

[`DeferredObservableUpperBoundObservableOperator`](../modules/Observable.md#deferredobservableupperboundobservableoperator)<`TA`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

▸ **zipWith**<`TA`, `TB`\>(`b`): [`Function1`](../modules/functions.md#function1)<[`AnyObservableLike`](../modules/Observable.md#anyobservablelike)<`TA`\>, [`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`]\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`MulticastObservableLike`](types.MulticastObservableLike.md)<`TB`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`AnyObservableLike`](../modules/Observable.md#anyobservablelike)<`TA`\>, [`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`]\>\>

▸ **zipWith**<`TA`, `TB`, `TC`\>(`b`, `c`): [`Function1`](../modules/functions.md#function1)<[`AnyObservableLike`](../modules/Observable.md#anyobservablelike)<`TA`\>, [`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TB`\> |
| `c` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TC`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`AnyObservableLike`](../modules/Observable.md#anyobservablelike)<`TA`\>, [`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`\>(`b`, `c`, `d`): [`Function1`](../modules/functions.md#function1)<[`AnyObservableLike`](../modules/Observable.md#anyobservablelike)<`TA`\>, [`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>\>

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
| `b` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TB`\> |
| `c` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TC`\> |
| `d` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TD`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`AnyObservableLike`](../modules/Observable.md#anyobservablelike)<`TA`\>, [`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`b`, `c`, `d`, `e`): [`Function1`](../modules/functions.md#function1)<[`AnyObservableLike`](../modules/Observable.md#anyobservablelike)<`TA`\>, [`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>\>

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
| `b` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TB`\> |
| `c` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TC`\> |
| `d` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TD`\> |
| `e` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TE`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`AnyObservableLike`](../modules/Observable.md#anyobservablelike)<`TA`\>, [`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`b`, `c`, `d`, `e`, `f`): [`Function1`](../modules/functions.md#function1)<[`AnyObservableLike`](../modules/Observable.md#anyobservablelike)<`TA`\>, [`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>\>

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
| `b` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TB`\> |
| `c` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TC`\> |
| `d` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TD`\> |
| `e` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TE`\> |
| `f` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TF`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`AnyObservableLike`](../modules/Observable.md#anyobservablelike)<`TA`\>, [`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`b`, `c`, `d`, `e`, `f`, `g`): [`Function1`](../modules/functions.md#function1)<[`AnyObservableLike`](../modules/Observable.md#anyobservablelike)<`TA`\>, [`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>\>

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
| `b` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TB`\> |
| `c` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TC`\> |
| `d` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TD`\> |
| `e` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TE`\> |
| `f` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TF`\> |
| `g` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TG`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`AnyObservableLike`](../modules/Observable.md#anyobservablelike)<`TA`\>, [`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Function1`](../modules/functions.md#function1)<[`AnyObservableLike`](../modules/Observable.md#anyobservablelike)<`TA`\>, [`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>\>

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
| `b` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TB`\> |
| `c` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TC`\> |
| `d` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TD`\> |
| `e` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TE`\> |
| `f` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TF`\> |
| `g` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TG`\> |
| `h` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TH`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`AnyObservableLike`](../modules/Observable.md#anyobservablelike)<`TA`\>, [`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>\>

▸ **zipWith**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Function1`](../modules/functions.md#function1)<[`AnyObservableLike`](../modules/Observable.md#anyobservablelike)<`TA`\>, [`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>\>

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
| `b` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TB`\> |
| `c` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TC`\> |
| `d` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TD`\> |
| `e` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TE`\> |
| `f` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TF`\> |
| `g` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TG`\> |
| `h` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TH`\> |
| `i` | [`MaybeMulticastObservableLike`](../modules/Observable.md#maybemulticastobservablelike)<`TI`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`AnyObservableLike`](../modules/Observable.md#anyobservablelike)<`TA`\>, [`MulticastObservableLike`](types.MulticastObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>\>
