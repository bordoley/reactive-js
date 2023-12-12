[Reactive-JS](../README.md) / [concurrent/Observable](../modules/concurrent_Observable.md) / ObservableModule

# Interface: ObservableModule

[concurrent/Observable](../modules/concurrent_Observable.md).ObservableModule

## Hierarchy

- [`PureComputationModule`](computations.PureComputationModule.md)<[`ObservableComputation`](concurrent_Observable.ObservableComputation.md)\>

- [`PureComputationModule`](computations.PureComputationModule.md)<[`PureRunnableComputation`](concurrent_Observable.PureRunnableComputation.md)\>

  ↳ **`ObservableModule`**

## Table of contents

### Properties

- [concatAll](concurrent_Observable.ObservableModule.md#concatall)
- [concatMap](concurrent_Observable.ObservableModule.md#concatmap)
- [currentTime](concurrent_Observable.ObservableModule.md#currenttime)
- [exhaust](concurrent_Observable.ObservableModule.md#exhaust)
- [exhaustMap](concurrent_Observable.ObservableModule.md#exhaustmap)
- [switchAll](concurrent_Observable.ObservableModule.md#switchall)
- [switchMap](concurrent_Observable.ObservableModule.md#switchmap)

### Methods

- [animate](concurrent_Observable.ObservableModule.md#animate)
- [backpressureStrategy](concurrent_Observable.ObservableModule.md#backpressurestrategy)
- [buffer](concurrent_Observable.ObservableModule.md#buffer)
- [catchError](concurrent_Observable.ObservableModule.md#catcherror)
- [combineLatest](concurrent_Observable.ObservableModule.md#combinelatest)
- [computeDeferred](concurrent_Observable.ObservableModule.md#computedeferred)
- [computeRunnable](concurrent_Observable.ObservableModule.md#computerunnable)
- [concat](concurrent_Observable.ObservableModule.md#concat)
- [concatMany](concurrent_Observable.ObservableModule.md#concatmany)
- [concatWith](concurrent_Observable.ObservableModule.md#concatwith)
- [create](concurrent_Observable.ObservableModule.md#create)
- [debug](concurrent_Observable.ObservableModule.md#debug)
- [decodeWithCharset](concurrent_Observable.ObservableModule.md#decodewithcharset)
- [defer](concurrent_Observable.ObservableModule.md#defer)
- [dispatchTo](concurrent_Observable.ObservableModule.md#dispatchto)
- [distinctUntilChanged](concurrent_Observable.ObservableModule.md#distinctuntilchanged)
- [empty](concurrent_Observable.ObservableModule.md#empty)
- [encodeUtf8](concurrent_Observable.ObservableModule.md#encodeutf8)
- [endWith](concurrent_Observable.ObservableModule.md#endwith)
- [enqueue](concurrent_Observable.ObservableModule.md#enqueue)
- [firstAsync](concurrent_Observable.ObservableModule.md#firstasync)
- [flatMapAsync](concurrent_Observable.ObservableModule.md#flatmapasync)
- [flatMapIterable](concurrent_Observable.ObservableModule.md#flatmapiterable)
- [flow](concurrent_Observable.ObservableModule.md#flow)
- [forEach](concurrent_Observable.ObservableModule.md#foreach)
- [forkMerge](concurrent_Observable.ObservableModule.md#forkmerge)
- [fromAsyncFactory](concurrent_Observable.ObservableModule.md#fromasyncfactory)
- [fromAsyncIterable](concurrent_Observable.ObservableModule.md#fromasynciterable)
- [fromEnumerable](concurrent_Observable.ObservableModule.md#fromenumerable)
- [fromEventSource](concurrent_Observable.ObservableModule.md#fromeventsource)
- [fromFactory](concurrent_Observable.ObservableModule.md#fromfactory)
- [fromIterable](concurrent_Observable.ObservableModule.md#fromiterable)
- [fromOptional](concurrent_Observable.ObservableModule.md#fromoptional)
- [fromPromise](concurrent_Observable.ObservableModule.md#frompromise)
- [fromReadonlyArray](concurrent_Observable.ObservableModule.md#fromreadonlyarray)
- [fromStore](concurrent_Observable.ObservableModule.md#fromstore)
- [fromValue](concurrent_Observable.ObservableModule.md#fromvalue)
- [ignoreElements](concurrent_Observable.ObservableModule.md#ignoreelements)
- [isDeferred](concurrent_Observable.ObservableModule.md#isdeferred)
- [isPure](concurrent_Observable.ObservableModule.md#ispure)
- [isReplayObservable](concurrent_Observable.ObservableModule.md#isreplayobservable)
- [isRunnable](concurrent_Observable.ObservableModule.md#isrunnable)
- [keep](concurrent_Observable.ObservableModule.md#keep)
- [lastAsync](concurrent_Observable.ObservableModule.md#lastasync)
- [log](concurrent_Observable.ObservableModule.md#log)
- [map](concurrent_Observable.ObservableModule.md#map)
- [merge](concurrent_Observable.ObservableModule.md#merge)
- [mergeAll](concurrent_Observable.ObservableModule.md#mergeall)
- [mergeMany](concurrent_Observable.ObservableModule.md#mergemany)
- [mergeMap](concurrent_Observable.ObservableModule.md#mergemap)
- [mergeWith](concurrent_Observable.ObservableModule.md#mergewith)
- [multicast](concurrent_Observable.ObservableModule.md#multicast)
- [never](concurrent_Observable.ObservableModule.md#never)
- [onSubscribe](concurrent_Observable.ObservableModule.md#onsubscribe)
- [pairwise](concurrent_Observable.ObservableModule.md#pairwise)
- [reduce](concurrent_Observable.ObservableModule.md#reduce)
- [repeat](concurrent_Observable.ObservableModule.md#repeat)
- [retry](concurrent_Observable.ObservableModule.md#retry)
- [run](concurrent_Observable.ObservableModule.md#run)
- [scan](concurrent_Observable.ObservableModule.md#scan)
- [scanMany](concurrent_Observable.ObservableModule.md#scanmany)
- [share](concurrent_Observable.ObservableModule.md#share)
- [skipFirst](concurrent_Observable.ObservableModule.md#skipfirst)
- [spring](concurrent_Observable.ObservableModule.md#spring)
- [startWith](concurrent_Observable.ObservableModule.md#startwith)
- [subscribe](concurrent_Observable.ObservableModule.md#subscribe)
- [subscribeOn](concurrent_Observable.ObservableModule.md#subscribeon)
- [takeFirst](concurrent_Observable.ObservableModule.md#takefirst)
- [takeLast](concurrent_Observable.ObservableModule.md#takelast)
- [takeUntil](concurrent_Observable.ObservableModule.md#takeuntil)
- [takeWhile](concurrent_Observable.ObservableModule.md#takewhile)
- [throttle](concurrent_Observable.ObservableModule.md#throttle)
- [throwIfEmpty](concurrent_Observable.ObservableModule.md#throwifempty)
- [throws](concurrent_Observable.ObservableModule.md#throws)
- [toEventSource](concurrent_Observable.ObservableModule.md#toeventsource)
- [toReadonlyArray](concurrent_Observable.ObservableModule.md#toreadonlyarray)
- [toReadonlyArrayAsync](concurrent_Observable.ObservableModule.md#toreadonlyarrayasync)
- [withCurrentTime](concurrent_Observable.ObservableModule.md#withcurrenttime)
- [withLatestFrom](concurrent_Observable.ObservableModule.md#withlatestfrom)
- [zipLatest](concurrent_Observable.ObservableModule.md#ziplatest)

## Properties

### concatAll

• **concatAll**: <T\>(`options`: { `[ObservableLike_isDeferred]`: ``true`` ; `[ObservableLike_isPure]`: ``true`` ; `[ObservableLike_isRunnable]`: ``true``  }) => [`Function1`](../modules/functions.md#function1)<[`PureRunnableLike`](concurrent.PureRunnableLike.md)<[`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>\>, [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>\><T\>(`options`: { `[ObservableLike_isDeferred]`: ``true`` ; `[ObservableLike_isPure]`: ``false`` ; `[ObservableLike_isRunnable]`: ``true``  }) => [`Function1`](../modules/functions.md#function1)<[`RunnableLike`](concurrent.RunnableLike.md)<[`RunnableLike`](concurrent.RunnableLike.md)<`T`\>\>, [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\>\><T\>(`options`: { `[ObservableLike_isDeferred]`: ``true`` ; `[ObservableLike_isPure]`: `boolean` ; `[ObservableLike_isRunnable]`: `boolean`  }) => [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<[`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>\>, [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`T`\>\><T\>() => [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<[`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>\>, [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`T`\>\>

#### Type declaration

▸ <`T`\>(`options`): [`Function1`](../modules/functions.md#function1)<[`PureRunnableLike`](concurrent.PureRunnableLike.md)<[`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>\>, [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.[ObservableLike_isDeferred]` | ``true`` |
| `options.[ObservableLike_isPure]` | ``true`` |
| `options.[ObservableLike_isRunnable]` | ``true`` |

##### Returns

[`Function1`](../modules/functions.md#function1)<[`PureRunnableLike`](concurrent.PureRunnableLike.md)<[`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>\>, [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>\>

▸ <`T`\>(`options`): [`Function1`](../modules/functions.md#function1)<[`RunnableLike`](concurrent.RunnableLike.md)<[`RunnableLike`](concurrent.RunnableLike.md)<`T`\>\>, [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\>\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.[ObservableLike_isDeferred]` | ``true`` |
| `options.[ObservableLike_isPure]` | ``false`` |
| `options.[ObservableLike_isRunnable]` | ``true`` |

##### Returns

[`Function1`](../modules/functions.md#function1)<[`RunnableLike`](concurrent.RunnableLike.md)<[`RunnableLike`](concurrent.RunnableLike.md)<`T`\>\>, [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\>\>

▸ <`T`\>(`options`): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<[`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>\>, [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`T`\>\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.[ObservableLike_isDeferred]` | ``true`` |
| `options.[ObservableLike_isPure]` | `boolean` |
| `options.[ObservableLike_isRunnable]` | `boolean` |

##### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<[`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>\>, [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`T`\>\>

▸ <`T`\>(): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<[`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>\>, [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`T`\>\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<[`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>\>, [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`T`\>\>

___

### concatMap

• **concatMap**: <TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TB`\>\>, `options`: { `[ObservableLike_isDeferred]`: ``true`` ; `[ObservableLike_isPure]`: ``true`` ; `[ObservableLike_isRunnable]`: ``true``  }) => [`Function1`](../modules/functions.md#function1)<[`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TA`\>, [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TB`\>\><TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\>\>, `options`: { `[ObservableLike_isDeferred]`: ``true`` ; `[ObservableLike_isPure]`: ``false`` ; `[ObservableLike_isRunnable]`: ``true``  }) => [`Function1`](../modules/functions.md#function1)<[`RunnableLike`](concurrent.RunnableLike.md)<`TA`\>, [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TB`\>\><TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TB`\>\>, `options`: { `[ObservableLike_isDeferred]`: `boolean` ; `[ObservableLike_isPure]`: `boolean` ; `[ObservableLike_isRunnable]`: `boolean`  }) => [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`TA`\>, [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`TB`\>\><TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TB`\>\>) => [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`TA`\>, [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`TB`\>\>

#### Type declaration

▸ <`TA`, `TB`\>(`selector`, `options`): [`Function1`](../modules/functions.md#function1)<[`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TA`\>, [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TB`\>\>

##### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TB`\>\> |
| `options` | `Object` |
| `options.[ObservableLike_isDeferred]` | ``true`` |
| `options.[ObservableLike_isPure]` | ``true`` |
| `options.[ObservableLike_isRunnable]` | ``true`` |

##### Returns

[`Function1`](../modules/functions.md#function1)<[`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TA`\>, [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TB`\>\>

▸ <`TA`, `TB`\>(`selector`, `options`): [`Function1`](../modules/functions.md#function1)<[`RunnableLike`](concurrent.RunnableLike.md)<`TA`\>, [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TB`\>\>

##### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\>\> |
| `options` | `Object` |
| `options.[ObservableLike_isDeferred]` | ``true`` |
| `options.[ObservableLike_isPure]` | ``false`` |
| `options.[ObservableLike_isRunnable]` | ``true`` |

##### Returns

[`Function1`](../modules/functions.md#function1)<[`RunnableLike`](concurrent.RunnableLike.md)<`TA`\>, [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TB`\>\>

▸ <`TA`, `TB`\>(`selector`, `options`): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`TA`\>, [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`TB`\>\>

##### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TB`\>\> |
| `options` | `Object` |
| `options.[ObservableLike_isDeferred]` | `boolean` |
| `options.[ObservableLike_isPure]` | `boolean` |
| `options.[ObservableLike_isRunnable]` | `boolean` |

##### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`TA`\>, [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`TB`\>\>

▸ <`TA`, `TB`\>(`selector`): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`TA`\>, [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`TB`\>\>

##### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TB`\>\> |

##### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`TA`\>, [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`TB`\>\>

___

### currentTime

• **currentTime**: [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`number`\>

___

### exhaust

• **exhaust**: <T\>(`options`: { `[ObservableLike_isDeferred]`: ``true`` ; `[ObservableLike_isPure]`: ``true`` ; `[ObservableLike_isRunnable]`: ``true``  }) => [`Function1`](../modules/functions.md#function1)<[`PureRunnableLike`](concurrent.PureRunnableLike.md)<[`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>\>, [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>\><T\>(`options`: { `[ObservableLike_isDeferred]`: ``true`` ; `[ObservableLike_isPure]`: ``false`` ; `[ObservableLike_isRunnable]`: ``true``  }) => [`Function1`](../modules/functions.md#function1)<[`RunnableLike`](concurrent.RunnableLike.md)<[`RunnableLike`](concurrent.RunnableLike.md)<`T`\>\>, [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\>\><T\>(`options`: { `[ObservableLike_isDeferred]`: ``true`` ; `[ObservableLike_isPure]`: `boolean` ; `[ObservableLike_isRunnable]`: `boolean`  }) => [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<[`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>\>, [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`T`\>\><T\>() => [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<[`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>\>, [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`T`\>\>

#### Type declaration

▸ <`T`\>(`options`): [`Function1`](../modules/functions.md#function1)<[`PureRunnableLike`](concurrent.PureRunnableLike.md)<[`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>\>, [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.[ObservableLike_isDeferred]` | ``true`` |
| `options.[ObservableLike_isPure]` | ``true`` |
| `options.[ObservableLike_isRunnable]` | ``true`` |

##### Returns

[`Function1`](../modules/functions.md#function1)<[`PureRunnableLike`](concurrent.PureRunnableLike.md)<[`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>\>, [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>\>

▸ <`T`\>(`options`): [`Function1`](../modules/functions.md#function1)<[`RunnableLike`](concurrent.RunnableLike.md)<[`RunnableLike`](concurrent.RunnableLike.md)<`T`\>\>, [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\>\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.[ObservableLike_isDeferred]` | ``true`` |
| `options.[ObservableLike_isPure]` | ``false`` |
| `options.[ObservableLike_isRunnable]` | ``true`` |

##### Returns

[`Function1`](../modules/functions.md#function1)<[`RunnableLike`](concurrent.RunnableLike.md)<[`RunnableLike`](concurrent.RunnableLike.md)<`T`\>\>, [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\>\>

▸ <`T`\>(`options`): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<[`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>\>, [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`T`\>\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.[ObservableLike_isDeferred]` | ``true`` |
| `options.[ObservableLike_isPure]` | `boolean` |
| `options.[ObservableLike_isRunnable]` | `boolean` |

##### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<[`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>\>, [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`T`\>\>

▸ <`T`\>(): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<[`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>\>, [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`T`\>\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<[`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>\>, [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`T`\>\>

___

### exhaustMap

• **exhaustMap**: <TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TB`\>\>, `options`: { `[ObservableLike_isDeferred]`: ``true`` ; `[ObservableLike_isPure]`: ``true`` ; `[ObservableLike_isRunnable]`: ``true``  }) => [`Function1`](../modules/functions.md#function1)<[`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TA`\>, [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TB`\>\><TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\>\>, `options`: { `[ObservableLike_isDeferred]`: ``true`` ; `[ObservableLike_isPure]`: ``false`` ; `[ObservableLike_isRunnable]`: ``true``  }) => [`Function1`](../modules/functions.md#function1)<[`RunnableLike`](concurrent.RunnableLike.md)<`TA`\>, [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TB`\>\><TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TB`\>\>, `options`: { `[ObservableLike_isDeferred]`: `boolean` ; `[ObservableLike_isPure]`: `boolean` ; `[ObservableLike_isRunnable]`: `boolean`  }) => [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`TA`\>, [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`TB`\>\><TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TB`\>\>) => [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`TA`\>, [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`TB`\>\>

#### Type declaration

▸ <`TA`, `TB`\>(`selector`, `options`): [`Function1`](../modules/functions.md#function1)<[`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TA`\>, [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TB`\>\>

##### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TB`\>\> |
| `options` | `Object` |
| `options.[ObservableLike_isDeferred]` | ``true`` |
| `options.[ObservableLike_isPure]` | ``true`` |
| `options.[ObservableLike_isRunnable]` | ``true`` |

##### Returns

[`Function1`](../modules/functions.md#function1)<[`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TA`\>, [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TB`\>\>

▸ <`TA`, `TB`\>(`selector`, `options`): [`Function1`](../modules/functions.md#function1)<[`RunnableLike`](concurrent.RunnableLike.md)<`TA`\>, [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TB`\>\>

##### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\>\> |
| `options` | `Object` |
| `options.[ObservableLike_isDeferred]` | ``true`` |
| `options.[ObservableLike_isPure]` | ``false`` |
| `options.[ObservableLike_isRunnable]` | ``true`` |

##### Returns

[`Function1`](../modules/functions.md#function1)<[`RunnableLike`](concurrent.RunnableLike.md)<`TA`\>, [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TB`\>\>

▸ <`TA`, `TB`\>(`selector`, `options`): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`TA`\>, [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`TB`\>\>

##### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TB`\>\> |
| `options` | `Object` |
| `options.[ObservableLike_isDeferred]` | `boolean` |
| `options.[ObservableLike_isPure]` | `boolean` |
| `options.[ObservableLike_isRunnable]` | `boolean` |

##### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`TA`\>, [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`TB`\>\>

▸ <`TA`, `TB`\>(`selector`): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`TA`\>, [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`TB`\>\>

##### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TB`\>\> |

##### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`TA`\>, [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`TB`\>\>

___

### switchAll

• **switchAll**: <T\>(`options`: { `[ObservableLike_isDeferred]`: ``true`` ; `[ObservableLike_isPure]`: ``true`` ; `[ObservableLike_isRunnable]`: ``true``  }) => [`Function1`](../modules/functions.md#function1)<[`PureRunnableLike`](concurrent.PureRunnableLike.md)<[`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>\>, [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>\><T\>(`options`: { `[ObservableLike_isDeferred]`: ``true`` ; `[ObservableLike_isPure]`: ``false`` ; `[ObservableLike_isRunnable]`: ``true``  }) => [`Function1`](../modules/functions.md#function1)<[`RunnableLike`](concurrent.RunnableLike.md)<[`RunnableLike`](concurrent.RunnableLike.md)<`T`\>\>, [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\>\><T\>(`options`: { `[ObservableLike_isDeferred]`: ``true`` ; `[ObservableLike_isPure]`: `boolean` ; `[ObservableLike_isRunnable]`: `boolean`  }) => [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<[`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>\>, [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`T`\>\><T\>() => [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<[`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>\>, [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`T`\>\>

#### Type declaration

▸ <`T`\>(`options`): [`Function1`](../modules/functions.md#function1)<[`PureRunnableLike`](concurrent.PureRunnableLike.md)<[`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>\>, [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.[ObservableLike_isDeferred]` | ``true`` |
| `options.[ObservableLike_isPure]` | ``true`` |
| `options.[ObservableLike_isRunnable]` | ``true`` |

##### Returns

[`Function1`](../modules/functions.md#function1)<[`PureRunnableLike`](concurrent.PureRunnableLike.md)<[`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>\>, [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>\>

▸ <`T`\>(`options`): [`Function1`](../modules/functions.md#function1)<[`RunnableLike`](concurrent.RunnableLike.md)<[`RunnableLike`](concurrent.RunnableLike.md)<`T`\>\>, [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\>\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.[ObservableLike_isDeferred]` | ``true`` |
| `options.[ObservableLike_isPure]` | ``false`` |
| `options.[ObservableLike_isRunnable]` | ``true`` |

##### Returns

[`Function1`](../modules/functions.md#function1)<[`RunnableLike`](concurrent.RunnableLike.md)<[`RunnableLike`](concurrent.RunnableLike.md)<`T`\>\>, [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\>\>

▸ <`T`\>(`options`): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<[`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>\>, [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`T`\>\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.[ObservableLike_isDeferred]` | ``true`` |
| `options.[ObservableLike_isPure]` | `boolean` |
| `options.[ObservableLike_isRunnable]` | `boolean` |

##### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<[`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>\>, [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`T`\>\>

▸ <`T`\>(): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<[`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>\>, [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`T`\>\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<[`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>\>, [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`T`\>\>

___

### switchMap

• **switchMap**: <TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TB`\>\>, `options`: { `[ObservableLike_isDeferred]`: ``true`` ; `[ObservableLike_isPure]`: ``true`` ; `[ObservableLike_isRunnable]`: ``true``  }) => [`Function1`](../modules/functions.md#function1)<[`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TA`\>, [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TB`\>\><TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\>\>, `options`: { `[ObservableLike_isDeferred]`: ``true`` ; `[ObservableLike_isPure]`: ``false`` ; `[ObservableLike_isRunnable]`: ``true``  }) => [`Function1`](../modules/functions.md#function1)<[`RunnableLike`](concurrent.RunnableLike.md)<`TA`\>, [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TB`\>\><TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TB`\>\>, `options`: { `[ObservableLike_isDeferred]`: `boolean` ; `[ObservableLike_isPure]`: `boolean` ; `[ObservableLike_isRunnable]`: `boolean`  }) => [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`TA`\>, [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`TB`\>\><TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TB`\>\>) => [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`TA`\>, [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`TB`\>\>

#### Type declaration

▸ <`TA`, `TB`\>(`selector`, `options`): [`Function1`](../modules/functions.md#function1)<[`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TA`\>, [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TB`\>\>

##### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TB`\>\> |
| `options` | `Object` |
| `options.[ObservableLike_isDeferred]` | ``true`` |
| `options.[ObservableLike_isPure]` | ``true`` |
| `options.[ObservableLike_isRunnable]` | ``true`` |

##### Returns

[`Function1`](../modules/functions.md#function1)<[`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TA`\>, [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TB`\>\>

▸ <`TA`, `TB`\>(`selector`, `options`): [`Function1`](../modules/functions.md#function1)<[`RunnableLike`](concurrent.RunnableLike.md)<`TA`\>, [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TB`\>\>

##### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\>\> |
| `options` | `Object` |
| `options.[ObservableLike_isDeferred]` | ``true`` |
| `options.[ObservableLike_isPure]` | ``false`` |
| `options.[ObservableLike_isRunnable]` | ``true`` |

##### Returns

[`Function1`](../modules/functions.md#function1)<[`RunnableLike`](concurrent.RunnableLike.md)<`TA`\>, [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TB`\>\>

▸ <`TA`, `TB`\>(`selector`, `options`): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`TA`\>, [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`TB`\>\>

##### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TB`\>\> |
| `options` | `Object` |
| `options.[ObservableLike_isDeferred]` | `boolean` |
| `options.[ObservableLike_isPure]` | `boolean` |
| `options.[ObservableLike_isRunnable]` | `boolean` |

##### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`TA`\>, [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`TB`\>\>

▸ <`TA`, `TB`\>(`selector`): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`TA`\>, [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`TB`\>\>

##### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TB`\>\> |

##### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`TA`\>, [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`TB`\>\>

## Methods

### animate

▸ **animate**<`T`\>(`configs`): [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `configs` | [`Animation`](../modules/concurrent_Observable.md#animation)<`T`\> \| readonly [`Animation`](../modules/concurrent_Observable.md#animation)<`T`\>[] |

#### Returns

[`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>

___

### backpressureStrategy

▸ **backpressureStrategy**<`T`\>(`capacity`, `backpressureStrategy`): [`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

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

[`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

___

### buffer

▸ **buffer**<`T`\>(`options?`): [`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, readonly `T`[]\>

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

[`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, readonly `T`[]\>

#### Overrides

[PureComputationModule](computations.PureComputationModule.md).[buffer](computations.PureComputationModule.md#buffer)

___

### catchError

▸ **catchError**<`T`\>(`onError`): [`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `onError` | [`SideEffect1`](../modules/functions.md#sideeffect1)<`Error`\> |

#### Returns

[`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

___

### combineLatest

▸ **combineLatest**<`TA`, `TB`\>(`a`, `b`): [`PureRunnableLike`](concurrent.PureRunnableLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`TA`, `TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TA`\> |
| `b` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TB`\> |

#### Returns

[`PureRunnableLike`](concurrent.PureRunnableLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`TA`, `TB`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`PureRunnableLike`](concurrent.PureRunnableLike.md)<[`Tuple3`](../modules/functions.md#tuple3)<`TA`, `TB`, `TC`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TA`\> |
| `b` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TB`\> |
| `c` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TC`\> |

#### Returns

[`PureRunnableLike`](concurrent.PureRunnableLike.md)<[`Tuple3`](../modules/functions.md#tuple3)<`TA`, `TB`, `TC`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`PureRunnableLike`](concurrent.PureRunnableLike.md)<[`Tuple4`](../modules/functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>

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
| `a` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TA`\> |
| `b` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TB`\> |
| `c` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TC`\> |
| `d` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TD`\> |

#### Returns

[`PureRunnableLike`](concurrent.PureRunnableLike.md)<[`Tuple4`](../modules/functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`PureRunnableLike`](concurrent.PureRunnableLike.md)<[`Tuple5`](../modules/functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

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
| `a` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TA`\> |
| `b` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TB`\> |
| `c` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TC`\> |
| `d` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TD`\> |
| `e` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TE`\> |

#### Returns

[`PureRunnableLike`](concurrent.PureRunnableLike.md)<[`Tuple5`](../modules/functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`PureRunnableLike`](concurrent.PureRunnableLike.md)<[`Tuple6`](../modules/functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

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
| `a` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TA`\> |
| `b` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TB`\> |
| `c` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TC`\> |
| `d` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TD`\> |
| `e` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TE`\> |
| `f` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TF`\> |

#### Returns

[`PureRunnableLike`](concurrent.PureRunnableLike.md)<[`Tuple6`](../modules/functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`PureRunnableLike`](concurrent.PureRunnableLike.md)<[`Tuple7`](../modules/functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

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
| `a` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TA`\> |
| `b` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TB`\> |
| `c` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TC`\> |
| `d` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TD`\> |
| `e` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TE`\> |
| `f` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TF`\> |
| `g` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TG`\> |

#### Returns

[`PureRunnableLike`](concurrent.PureRunnableLike.md)<[`Tuple7`](../modules/functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`PureRunnableLike`](concurrent.PureRunnableLike.md)<[`Tuple8`](../modules/functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

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
| `a` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TA`\> |
| `b` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TB`\> |
| `c` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TC`\> |
| `d` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TD`\> |
| `e` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TE`\> |
| `f` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TF`\> |
| `g` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TG`\> |
| `h` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TH`\> |

#### Returns

[`PureRunnableLike`](concurrent.PureRunnableLike.md)<[`Tuple8`](../modules/functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`PureRunnableLike`](concurrent.PureRunnableLike.md)<[`Tuple9`](../modules/functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

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
| `a` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TA`\> |
| `b` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TB`\> |
| `c` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TC`\> |
| `d` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TD`\> |
| `e` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TE`\> |
| `f` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TF`\> |
| `g` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TG`\> |
| `h` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TH`\> |
| `i` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TI`\> |

#### Returns

[`PureRunnableLike`](concurrent.PureRunnableLike.md)<[`Tuple9`](../modules/functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

▸ **combineLatest**<`TA`, `TB`\>(`a`, `b`): [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`TA`, `TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> |

#### Returns

[`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`TA`, `TB`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<[`Tuple3`](../modules/functions.md#tuple3)<`TA`, `TB`, `TC`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](concurrent.RunnableLike.md)<`TC`\> |

#### Returns

[`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<[`Tuple3`](../modules/functions.md#tuple3)<`TA`, `TB`, `TC`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<[`Tuple4`](../modules/functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>

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
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](concurrent.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](concurrent.RunnableLike.md)<`TD`\> |

#### Returns

[`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<[`Tuple4`](../modules/functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<[`Tuple5`](../modules/functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

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
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](concurrent.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](concurrent.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](concurrent.RunnableLike.md)<`TE`\> |

#### Returns

[`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<[`Tuple5`](../modules/functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<[`Tuple6`](../modules/functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

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
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](concurrent.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](concurrent.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](concurrent.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](concurrent.RunnableLike.md)<`TF`\> |

#### Returns

[`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<[`Tuple6`](../modules/functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<[`Tuple7`](../modules/functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

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
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](concurrent.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](concurrent.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](concurrent.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](concurrent.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](concurrent.RunnableLike.md)<`TG`\> |

#### Returns

[`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<[`Tuple7`](../modules/functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<[`Tuple8`](../modules/functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

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
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](concurrent.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](concurrent.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](concurrent.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](concurrent.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](concurrent.RunnableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](concurrent.RunnableLike.md)<`TH`\> |

#### Returns

[`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<[`Tuple8`](../modules/functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<[`Tuple9`](../modules/functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

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
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](concurrent.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](concurrent.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](concurrent.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](concurrent.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](concurrent.RunnableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](concurrent.RunnableLike.md)<`TH`\> |
| `i` | [`RunnableLike`](concurrent.RunnableLike.md)<`TI`\> |

#### Returns

[`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<[`Tuple9`](../modules/functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

▸ **combineLatest**<`TA`, `TB`\>(`a`, `b`): [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`TA`, `TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TB`\> |

#### Returns

[`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`TA`, `TB`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<[`Tuple3`](../modules/functions.md#tuple3)<`TA`, `TB`, `TC`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TC`\> |

#### Returns

[`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<[`Tuple3`](../modules/functions.md#tuple3)<`TA`, `TB`, `TC`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<[`Tuple4`](../modules/functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>

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
| `a` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TD`\> |

#### Returns

[`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<[`Tuple4`](../modules/functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<[`Tuple5`](../modules/functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

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
| `a` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TD`\> |
| `e` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TE`\> |

#### Returns

[`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<[`Tuple5`](../modules/functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<[`Tuple6`](../modules/functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

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
| `a` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TD`\> |
| `e` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TE`\> |
| `f` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TF`\> |

#### Returns

[`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<[`Tuple6`](../modules/functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<[`Tuple7`](../modules/functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

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
| `a` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TD`\> |
| `e` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TE`\> |
| `f` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TF`\> |
| `g` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TG`\> |

#### Returns

[`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<[`Tuple7`](../modules/functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<[`Tuple8`](../modules/functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

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
| `a` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TD`\> |
| `e` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TE`\> |
| `f` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TF`\> |
| `g` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TG`\> |
| `h` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TH`\> |

#### Returns

[`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<[`Tuple8`](../modules/functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<[`Tuple9`](../modules/functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

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
| `a` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TD`\> |
| `e` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TE`\> |
| `f` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TF`\> |
| `g` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TG`\> |
| `h` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TH`\> |
| `i` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TI`\> |

#### Returns

[`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<[`Tuple9`](../modules/functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

▸ **combineLatest**<`TA`, `TB`\>(`a`, `b`): [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`TA`, `TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ObservableLike`](concurrent.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](concurrent.ObservableLike.md)<`TB`\> |

#### Returns

[`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`TA`, `TB`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<[`Tuple3`](../modules/functions.md#tuple3)<`TA`, `TB`, `TC`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ObservableLike`](concurrent.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](concurrent.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](concurrent.ObservableLike.md)<`TC`\> |

#### Returns

[`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<[`Tuple3`](../modules/functions.md#tuple3)<`TA`, `TB`, `TC`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<[`Tuple4`](../modules/functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>

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
| `a` | [`ObservableLike`](concurrent.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](concurrent.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](concurrent.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](concurrent.ObservableLike.md)<`TD`\> |

#### Returns

[`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<[`Tuple4`](../modules/functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<[`Tuple5`](../modules/functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

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
| `a` | [`ObservableLike`](concurrent.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](concurrent.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](concurrent.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](concurrent.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](concurrent.ObservableLike.md)<`TE`\> |

#### Returns

[`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<[`Tuple5`](../modules/functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<[`Tuple6`](../modules/functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

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
| `a` | [`ObservableLike`](concurrent.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](concurrent.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](concurrent.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](concurrent.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](concurrent.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](concurrent.ObservableLike.md)<`TF`\> |

#### Returns

[`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<[`Tuple6`](../modules/functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<[`Tuple7`](../modules/functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

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
| `a` | [`ObservableLike`](concurrent.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](concurrent.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](concurrent.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](concurrent.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](concurrent.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](concurrent.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](concurrent.ObservableLike.md)<`TG`\> |

#### Returns

[`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<[`Tuple7`](../modules/functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<[`Tuple8`](../modules/functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

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
| `a` | [`ObservableLike`](concurrent.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](concurrent.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](concurrent.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](concurrent.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](concurrent.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](concurrent.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](concurrent.ObservableLike.md)<`TG`\> |
| `h` | [`ObservableLike`](concurrent.ObservableLike.md)<`TH`\> |

#### Returns

[`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<[`Tuple8`](../modules/functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<[`Tuple9`](../modules/functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

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
| `a` | [`ObservableLike`](concurrent.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](concurrent.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](concurrent.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](concurrent.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](concurrent.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](concurrent.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](concurrent.ObservableLike.md)<`TG`\> |
| `h` | [`ObservableLike`](concurrent.ObservableLike.md)<`TH`\> |
| `i` | [`ObservableLike`](concurrent.ObservableLike.md)<`TI`\> |

#### Returns

[`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<[`Tuple9`](../modules/functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

___

### computeDeferred

▸ **computeDeferred**<`T`\>(`computation`, `options?`): [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `computation` | [`Factory`](../modules/functions.md#factory)<`T`\> |
| `options?` | `Object` |
| `options.mode?` | ``"batched"`` \| ``"combine-latest"`` |

#### Returns

[`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`T`\>

___

### computeRunnable

▸ **computeRunnable**<`T`\>(`computation`, `options?`): [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `computation` | [`Factory`](../modules/functions.md#factory)<`T`\> |
| `options?` | `Object` |
| `options.mode?` | ``"batched"`` \| ``"combine-latest"`` |

#### Returns

[`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\>

___

### concat

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\> |
| `snd` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\> |
| `...tail` | readonly [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>[] |

#### Returns

[`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`RunnableLike`](concurrent.RunnableLike.md)<`T`\> |
| `snd` | [`RunnableLike`](concurrent.RunnableLike.md)<`T`\> |
| `...tail` | readonly [`RunnableLike`](concurrent.RunnableLike.md)<`T`\>[] |

#### Returns

[`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\>

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\> |
| `snd` | [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\> |
| `...tail` | readonly [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>[] |

#### Returns

[`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`T`\>

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\> |
| `snd` | [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\> |
| `...tail` | readonly [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`unknown`\>[] |

#### Returns

[`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\>

___

### concatMany

▸ **concatMany**<`T`\>(`observables`): [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>[] |

#### Returns

[`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>

▸ **concatMany**<`T`\>(`observables`): [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [`RunnableLike`](concurrent.RunnableLike.md)<`T`\>[] |

#### Returns

[`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\>

▸ **concatMany**<`T`\>(`observables`): [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`unknown`\>[] |

#### Returns

[`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`T`\>

▸ **concatMany**<`T`\>(`observables`): [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [[`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\>, [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`unknown`\>] |

#### Returns

[`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\>

___

### concatWith

▸ **concatWith**<`T`\>(`snd`, `...tail`): [`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\> |
| `...tail` | readonly [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>[] |

#### Returns

[`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

▸ **concatWith**<`T`\>(`snd`, `...tail`): <TObservable\>(`obs`: `TObservable`) => `TObservable` extends [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\> ? [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\> : `TObservable` extends [`RunnableLike`](concurrent.RunnableLike.md)<`T`\> ? [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\> : `TObservable` extends [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`T`\> ? [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`T`\> : [`ObservableLike`](concurrent.ObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`RunnableLike`](concurrent.RunnableLike.md)<`T`\> |
| `...tail` | readonly [`RunnableLike`](concurrent.RunnableLike.md)<`T`\>[] |

#### Returns

`fn`

▸ <`TObservable`\>(`obs`): `TObservable` extends [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\> ? [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\> : `TObservable` extends [`RunnableLike`](concurrent.RunnableLike.md)<`T`\> ? [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\> : `TObservable` extends [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`T`\> ? [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`T`\> : [`ObservableLike`](concurrent.ObservableLike.md)<`T`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservable` | extends [`ObservableLike`](concurrent.ObservableLike.md)<`T`, `TObservable`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `obs` | `TObservable` |

##### Returns

`TObservable` extends [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\> ? [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\> : `TObservable` extends [`RunnableLike`](concurrent.RunnableLike.md)<`T`\> ? [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\> : `TObservable` extends [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`T`\> ? [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`T`\> : [`ObservableLike`](concurrent.ObservableLike.md)<`T`\>

▸ **concatWith**<`T`\>(`snd`, `...tail`): <TObservable\>(`obs`: `TObservable`) => `TObservable` extends [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\> ? [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\> : `TObservable` extends [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\> ? [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`T`\> : [`ObservableLike`](concurrent.ObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\> |
| `...tail` | readonly [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>[] |

#### Returns

`fn`

▸ <`TObservable`\>(`obs`): `TObservable` extends [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\> ? [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\> : `TObservable` extends [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\> ? [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`T`\> : [`ObservableLike`](concurrent.ObservableLike.md)<`T`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservable` | extends [`ObservableLike`](concurrent.ObservableLike.md)<`T`, `TObservable`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `obs` | `TObservable` |

##### Returns

`TObservable` extends [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\> ? [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\> : `TObservable` extends [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\> ? [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`T`\> : [`ObservableLike`](concurrent.ObservableLike.md)<`T`\>

___

### create

▸ **create**<`T`\>(`f`): [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`SideEffect1`](../modules/functions.md#sideeffect1)<[`ObserverLike`](concurrent.ObserverLike.md)<`T`\>\> |

#### Returns

[`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`T`\>

___

### debug

▸ **debug**<`T`\>(): [`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

___

### decodeWithCharset

▸ **decodeWithCharset**(`options?`): [`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`ArrayBuffer`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.charset?` | `string` |

#### Returns

[`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`ArrayBuffer`, `string`\>

#### Overrides

[PureComputationModule](computations.PureComputationModule.md).[decodeWithCharset](computations.PureComputationModule.md#decodewithcharset)

___

### defer

▸ **defer**<`T`\>(`f`): [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Factory`](../modules/functions.md#factory)<[`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\>\> |

#### Returns

[`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`T`\>

___

### dispatchTo

▸ **dispatchTo**<`T`\>(`dispatcher`): [`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatcher` | [`DispatcherLike`](concurrent.DispatcherLike.md)<`T`\> |

#### Returns

[`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

___

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

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

[`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

#### Overrides

[PureComputationModule](computations.PureComputationModule.md).[distinctUntilChanged](computations.PureComputationModule.md#distinctuntilchanged)

___

### empty

▸ **empty**<`T`\>(`options?`): [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.delay` | `number` |

#### Returns

[`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>

___

### encodeUtf8

▸ **encodeUtf8**(): [`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`string`, `Uint8Array`\>

#### Returns

[`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`string`, `Uint8Array`\>

___

### endWith

▸ **endWith**<`T`\>(`value`, `...values`): [`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

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

[`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

___

### enqueue

▸ **enqueue**<`T`\>(`queue`): [`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `queue` | [`QueueableLike`](utils.QueueableLike.md)<`T`\> |

#### Returns

[`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

___

### firstAsync

▸ **firstAsync**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`T`\>, `Promise`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`T`\>, `Promise`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

▸ **firstAsync**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`T`\>, `Promise`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](concurrent.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`T`\>, `Promise`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

___

### flatMapAsync

▸ **flatMapAsync**<`TA`, `TB`\>(`f`): <TObservableIn\>(`observable`: `TObservableIn`) => `TObservableIn` extends [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`unknown`\> ? [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TB`\> : [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`TB`\>

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

`fn`

▸ <`TObservableIn`\>(`observable`): `TObservableIn` extends [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`unknown`\> ? [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TB`\> : [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`TB`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`ObservableLike`](concurrent.ObservableLike.md)<`TA`, `TObservableIn`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `observable` | `TObservableIn` |

##### Returns

`TObservableIn` extends [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`unknown`\> ? [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TB`\> : [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`TB`\>

___

### flatMapIterable

▸ **flatMapIterable**<`TA`, `TB`\>(`selector`): [`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`TA`, `TB`\>

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

[`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`TA`, `TB`\>

___

### flow

▸ **flow**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`RunnableLike`](concurrent.RunnableLike.md)<`T`\>, [`FlowableLike`](concurrent.FlowableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`RunnableLike`](concurrent.RunnableLike.md)<`T`\>, [`FlowableLike`](concurrent.FlowableLike.md)<`T`\>\>

___

### forEach

▸ **forEach**<`T`\>(`effect`): [`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect1`](../modules/functions.md#sideeffect1)<`T`\> |

#### Returns

[`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

___

### forkMerge

▸ **forkMerge**<`TOut`, `TObservableIn`, `TObservableOut`\>(`fst`, `snd`, `...tail`): `TObservableIn` extends [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`unknown`\> ? `TObservableOut` extends [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TOut`\> ? [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TOut`\>\> : `TObservableOut` extends [`RunnableLike`](concurrent.RunnableLike.md)<`TOut`\> ? [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TOut`\>\> : `TObservableOut` extends [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TOut`\> ? [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`TOut`\>\> : [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`TOut`\>\> : `TObservableIn` extends [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`unknown`\> ? `TObservableOut` extends [`RunnableLike`](concurrent.RunnableLike.md)<`TOut`\> ? [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TOut`\>\> : `TObservableOut` extends [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TOut`\> ? [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`TOut`\>\> : [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`TOut`\>\> : `TObservableIn` extends [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`unknown`\> ? `TObservableOut` extends [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TOut`\> ? [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`TOut`\>\> : [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`TOut`\>\> : `TObservableIn` extends [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`unknown`\> ? `TObservableOut` extends [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TOut`\> ? [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`TOut`\>\> : [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`TOut`\>\> : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TOut` | `TOut` |
| `TObservableIn` | extends [`ObservableLike`](concurrent.ObservableLike.md)<`unknown`, `TObservableIn`\> |
| `TObservableOut` | extends [`ObservableLike`](concurrent.ObservableLike.md)<`TOut`, `TObservableOut`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Function1`](../modules/functions.md#function1)<`TObservableIn`, `TObservableOut`\> |
| `snd` | [`Function1`](../modules/functions.md#function1)<`TObservableIn`, `TObservableOut`\> |
| `...tail` | readonly [`Function1`](../modules/functions.md#function1)<`TObservableIn`, `TObservableOut`\>[] |

#### Returns

`TObservableIn` extends [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`unknown`\> ? `TObservableOut` extends [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TOut`\> ? [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TOut`\>\> : `TObservableOut` extends [`RunnableLike`](concurrent.RunnableLike.md)<`TOut`\> ? [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TOut`\>\> : `TObservableOut` extends [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TOut`\> ? [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`TOut`\>\> : [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`TOut`\>\> : `TObservableIn` extends [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`unknown`\> ? `TObservableOut` extends [`RunnableLike`](concurrent.RunnableLike.md)<`TOut`\> ? [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TOut`\>\> : `TObservableOut` extends [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TOut`\> ? [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`TOut`\>\> : [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`TOut`\>\> : `TObservableIn` extends [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`unknown`\> ? `TObservableOut` extends [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TOut`\> ? [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`TOut`\>\> : [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`TOut`\>\> : `TObservableIn` extends [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`unknown`\> ? `TObservableOut` extends [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TOut`\> ? [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`TOut`\>\> : [`Function1`](../modules/functions.md#function1)<`TObservableIn`, [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`TOut`\>\> : `never`

___

### fromAsyncFactory

▸ **fromAsyncFactory**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Function1`](../modules/functions.md#function1)<`AbortSignal`, `Promise`<`T`\>\>, [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Function1`](../modules/functions.md#function1)<`AbortSignal`, `Promise`<`T`\>\>, [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`T`\>\>

___

### fromAsyncIterable

▸ **fromAsyncIterable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`AsyncIterable`<`T`\>, [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`AsyncIterable`<`T`\>, [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`T`\>\>

___

### fromEnumerable

▸ **fromEnumerable**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](collections.EnumerableLike.md)<`T`\>, [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.delay` | `number` |
| `options.delayStart?` | `boolean` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](collections.EnumerableLike.md)<`T`\>, [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>\>

___

### fromEventSource

▸ **fromEventSource**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EventSourceLike`](events.EventSourceLike.md)<`T`\>, [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EventSourceLike`](events.EventSourceLike.md)<`T`\>, [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\>\>

___

### fromFactory

▸ **fromFactory**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Factory`](../modules/functions.md#factory)<`T`\>, [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Factory`](../modules/functions.md#factory)<`T`\>, [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>\>

___

### fromIterable

▸ **fromIterable**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.delay` | `number` |
| `options.delayStart?` | `boolean` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\>\>

___

### fromOptional

▸ **fromOptional**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.delay` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>\>

___

### fromPromise

▸ **fromPromise**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`Promise`<`T`\>, [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`Promise`<`T`\>, [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\>\>

___

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.delay` | `number` |
| `options.delayStart?` | `boolean` |

#### Returns

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>\>

#### Overrides

[PureComputationModule](computations.PureComputationModule.md).[fromReadonlyArray](computations.PureComputationModule.md#fromreadonlyarray)

___

### fromStore

▸ **fromStore**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`StoreLike`](events.StoreLike.md)<`T`\>, [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`StoreLike`](events.StoreLike.md)<`T`\>, [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\>\>

___

### fromValue

▸ **fromValue**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<`T`, [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.delay` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`T`, [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>\>

___

### ignoreElements

▸ **ignoreElements**<`T`\>(): [`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`unknown`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`unknown`, `T`\>

___

### isDeferred

▸ **isDeferred**<`T`\>(`obs`): obs is DeferredObservableLike<T\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obs` | [`ObservableLike`](concurrent.ObservableLike.md)<`T`\> |

#### Returns

obs is DeferredObservableLike<T\>

___

### isPure

▸ **isPure**<`T`\>(`obs`): obs is PureObservableLike<T\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obs` | [`ObservableLike`](concurrent.ObservableLike.md)<`T`\> |

#### Returns

obs is PureObservableLike<T\>

___

### isReplayObservable

▸ **isReplayObservable**<`T`\>(`o`): o is ReplayObservableLike<T\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | [`ObservableLike`](concurrent.ObservableLike.md)<`T`\> |

#### Returns

o is ReplayObservableLike<T\>

___

### isRunnable

▸ **isRunnable**<`T`\>(`obs`): obs is RunnableLike<T\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obs` | [`ObservableLike`](concurrent.ObservableLike.md)<`T`\> |

#### Returns

obs is RunnableLike<T\>

___

### keep

▸ **keep**<`T`\>(`predicate`): [`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

#### Overrides

[PureComputationModule](computations.PureComputationModule.md).[keep](computations.PureComputationModule.md#keep)

___

### lastAsync

▸ **lastAsync**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`T`\>, `Promise`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`T`\>, `Promise`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

▸ **lastAsync**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`T`\>, `Promise`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](concurrent.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`T`\>, `Promise`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

___

### log

▸ **log**<`T`\>(): [`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

___

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`TA`, `TB`\>

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

[`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`TA`, `TB`\>

#### Overrides

[PureComputationModule](computations.PureComputationModule.md).[map](computations.PureComputationModule.md#map)

___

### merge

▸ **merge**<`T`\>(`fst`, `snd`, `...tail`): [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\> |
| `snd` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\> |
| `...tail` | readonly [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>[] |

#### Returns

[`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>

▸ **merge**<`T`\>(`fst`, `snd`, `...tail`): [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`RunnableLike`](concurrent.RunnableLike.md)<`T`\> |
| `snd` | [`RunnableLike`](concurrent.RunnableLike.md)<`T`\> |
| `...tail` | readonly [`RunnableLike`](concurrent.RunnableLike.md)<`T`\>[] |

#### Returns

[`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\>

▸ **merge**<`T`\>(`fst`, `snd`, `...tail`): [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`T`\> |
| `snd` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`T`\> |
| `...tail` | readonly [`PureObservableLike`](concurrent.PureObservableLike.md)<`T`\>[] |

#### Returns

[`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\>

▸ **merge**<`T`\>(`fst`, `snd`, `...tail`): [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`ObservableLike`](concurrent.ObservableLike.md)<`T`\> |
| `snd` | [`ObservableLike`](concurrent.ObservableLike.md)<`T`\> |
| `...tail` | readonly [`ObservableLike`](concurrent.ObservableLike.md)<`T`\>[] |

#### Returns

[`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`T`\>

___

### mergeAll

▸ **mergeAll**<`T`\>(`options`): [`Function1`](../modules/functions.md#function1)<[`PureRunnableLike`](concurrent.PureRunnableLike.md)<[`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>\>, [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.[ObservableLike_isDeferred]` | ``true`` |
| `options.[ObservableLike_isPure]` | ``true`` |
| `options.[ObservableLike_isRunnable]` | ``true`` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.concurrency?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`PureRunnableLike`](concurrent.PureRunnableLike.md)<[`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>\>, [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>\>

▸ **mergeAll**<`T`\>(`options`): [`Function1`](../modules/functions.md#function1)<[`RunnableLike`](concurrent.RunnableLike.md)<[`RunnableLike`](concurrent.RunnableLike.md)<`T`\>\>, [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.[ObservableLike_isDeferred]` | ``true`` |
| `options.[ObservableLike_isPure]` | ``false`` |
| `options.[ObservableLike_isRunnable]` | ``true`` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.concurrency?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`RunnableLike`](concurrent.RunnableLike.md)<[`RunnableLike`](concurrent.RunnableLike.md)<`T`\>\>, [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\>\>

▸ **mergeAll**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<[`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>\>, [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.concurrency?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<[`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>\>, [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`T`\>\>

___

### mergeMany

▸ **mergeMany**<`T`\>(`observables`): [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>[] |

#### Returns

[`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>

▸ **mergeMany**<`T`\>(`observables`): [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [`RunnableLike`](concurrent.RunnableLike.md)<`T`\>[] |

#### Returns

[`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\>

▸ **mergeMany**<`T`\>(`observables`): [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [`PureObservableLike`](concurrent.PureObservableLike.md)<`T`\>[] |

#### Returns

[`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\>

▸ **mergeMany**<`T`\>(`observables`): [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observables` | readonly [`ObservableLike`](concurrent.ObservableLike.md)<`T`\>[] |

#### Returns

[`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`T`\>

___

### mergeMap

▸ **mergeMap**<`TA`, `TB`\>(`selector`, `options`): [`Function1`](../modules/functions.md#function1)<[`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TA`\>, [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TB`\>\> |
| `options` | `Object` |
| `options.[ObservableLike_isDeferred]` | ``true`` |
| `options.[ObservableLike_isPure]` | ``true`` |
| `options.[ObservableLike_isRunnable]` | ``true`` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.concurrency?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TA`\>, [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TB`\>\>

▸ **mergeMap**<`TA`, `TB`\>(`selector`, `options`): [`Function1`](../modules/functions.md#function1)<[`RunnableLike`](concurrent.RunnableLike.md)<`TA`\>, [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\>\> |
| `options` | `Object` |
| `options.[ObservableLike_isDeferred]` | ``true`` |
| `options.[ObservableLike_isPure]` | ``false`` |
| `options.[ObservableLike_isRunnable]` | ``true`` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.concurrency?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`RunnableLike`](concurrent.RunnableLike.md)<`TA`\>, [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TB`\>\>

▸ **mergeMap**<`TA`, `TB`\>(`selector`, `options?`): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`TA`\>, [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TB`\>\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.concurrency?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`TA`\>, [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`TB`\>\>

___

### mergeWith

▸ **mergeWith**<`T`\>(`snd`, `...tail`): [`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\> |
| `...tail` | readonly [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`T`\>[] |

#### Returns

[`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

▸ **mergeWith**<`T`\>(`snd`, `...tail`): [`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`RunnableLike`](concurrent.RunnableLike.md)<`T`\> |
| `...tail` | readonly [`RunnableLike`](concurrent.RunnableLike.md)<`T`\>[] |

#### Returns

[`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

▸ **mergeWith**<`T`\>(`snd`, `...tail`): <TObservableIn\>(`observableIn`: `TObservableIn`) => `TObservableIn` extends [`PureObservableLike`](concurrent.PureObservableLike.md)<`T`\> ? [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\> : [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`T`\> |
| `...tail` | readonly [`PureObservableLike`](concurrent.PureObservableLike.md)<`T`\>[] |

#### Returns

`fn`

▸ <`TObservableIn`\>(`observableIn`): `TObservableIn` extends [`PureObservableLike`](concurrent.PureObservableLike.md)<`T`\> ? [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\> : [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`T`\>

##### Type parameters

| Name |
| :------ |
| `TObservableIn` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `observableIn` | `TObservableIn` |

##### Returns

`TObservableIn` extends [`PureObservableLike`](concurrent.PureObservableLike.md)<`T`\> ? [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\> : [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`T`\>

▸ **mergeWith**<`T`\>(`snd`, `...tail`): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`T`\>, [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`ObservableLike`](concurrent.ObservableLike.md)<`T`\> |
| `...tail` | readonly [`ObservableLike`](concurrent.ObservableLike.md)<`T`\>[] |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`T`\>, [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`T`\>\>

___

### multicast

▸ **multicast**<`T`\>(`schedulerOrFactory`, `options?`): [`Function1`](../modules/functions.md#function1)<[`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>, [`ReplayObservableLike`](concurrent.ReplayObservableLike.md)<`T`\> & [`DisposableLike`](utils.DisposableLike.md)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schedulerOrFactory` | [`SchedulerLike`](concurrent.SchedulerLike.md) \| [`Factory`](../modules/functions.md#factory)<[`SchedulerLike`](concurrent.SchedulerLike.md) & [`DisposableLike`](utils.DisposableLike.md)\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.replay?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>, [`ReplayObservableLike`](concurrent.ReplayObservableLike.md)<`T`\> & [`DisposableLike`](utils.DisposableLike.md)\>

___

### never

▸ **never**<`T`\>(): [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\>

___

### onSubscribe

▸ **onSubscribe**<`T`\>(`f`): [`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Factory`](../modules/functions.md#factory)<[`DisposableLike`](utils.DisposableLike.md)\> |

#### Returns

[`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

▸ **onSubscribe**<`T`\>(`f`): [`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Factory`](../modules/functions.md#factory)<[`SideEffect1`](../modules/functions.md#sideeffect1)<[`Optional`](../modules/functions.md#optional)<`Error`\>\>\> |

#### Returns

[`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

▸ **onSubscribe**<`T`\>(`f`): [`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`SideEffect`](../modules/functions.md#sideeffect) |

#### Returns

[`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

___

### pairwise

▸ **pairwise**<`T`\>(): [`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, [`Tuple2`](../modules/functions.md#tuple2)<`T`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, [`Tuple2`](../modules/functions.md#tuple2)<`T`, `T`\>\>

#### Overrides

[PureComputationModule](computations.PureComputationModule.md).[pairwise](computations.PureComputationModule.md#pairwise)

___

### reduce

▸ **reduce**<`T`, `TAcc`\>(`reducer`, `initialValue`): [`Function1`](../modules/functions.md#function1)<[`RunnableLike`](concurrent.RunnableLike.md)<`T`\>, `TAcc`\>

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

[`Function1`](../modules/functions.md#function1)<[`RunnableLike`](concurrent.RunnableLike.md)<`T`\>, `TAcc`\>

___

### repeat

▸ **repeat**<`T`\>(`predicate`): [`PureDeferredSideEffectsObservableOperator`](../modules/concurrent_Observable.md#puredeferredsideeffectsobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`number`\> |

#### Returns

[`PureDeferredSideEffectsObservableOperator`](../modules/concurrent_Observable.md#puredeferredsideeffectsobservableoperator)<`T`, `T`\>

▸ **repeat**<`T`\>(`count`): [`PureDeferredSideEffectsObservableOperator`](../modules/concurrent_Observable.md#puredeferredsideeffectsobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

[`PureDeferredSideEffectsObservableOperator`](../modules/concurrent_Observable.md#puredeferredsideeffectsobservableoperator)<`T`, `T`\>

▸ **repeat**<`T`\>(): [`PureDeferredSideEffectsObservableOperator`](../modules/concurrent_Observable.md#puredeferredsideeffectsobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`PureDeferredSideEffectsObservableOperator`](../modules/concurrent_Observable.md#puredeferredsideeffectsobservableoperator)<`T`, `T`\>

___

### retry

▸ **retry**<`T`\>(`shouldRetry?`): [`PureDeferredSideEffectsObservableOperator`](../modules/concurrent_Observable.md#puredeferredsideeffectsobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `shouldRetry?` | (`count`: `number`, `error`: `Error`) => `boolean` |

#### Returns

[`PureDeferredSideEffectsObservableOperator`](../modules/concurrent_Observable.md#puredeferredsideeffectsobservableoperator)<`T`, `T`\>

___

### run

▸ **run**<`T`\>(`options?`): [`SideEffect1`](../modules/functions.md#sideeffect1)<[`RunnableLike`](concurrent.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.backpressureStrategy` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`SideEffect1`](../modules/functions.md#sideeffect1)<[`RunnableLike`](concurrent.RunnableLike.md)<`T`\>\>

___

### scan

▸ **scan**<`T`, `TAcc`\>(`reducer`, `initialValue`): [`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, `TAcc`\>

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

[`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, `TAcc`\>

#### Overrides

[PureComputationModule](computations.PureComputationModule.md).[scan](computations.PureComputationModule.md#scan)

___

### scanMany

▸ **scanMany**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`T`\>, [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`TAcc`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Function2`](../modules/functions.md#function2)<`TAcc`, `T`, [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`TAcc`\>\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`T`\>, [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`TAcc`\>\>

___

### share

▸ **share**<`T`\>(`schedulerOrFactory`, `options?`): [`Function1`](../modules/functions.md#function1)<[`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>, [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schedulerOrFactory` | [`SchedulerLike`](concurrent.SchedulerLike.md) \| [`Factory`](../modules/functions.md#factory)<[`SchedulerLike`](concurrent.SchedulerLike.md) & [`DisposableLike`](utils.DisposableLike.md)\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.replay?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`T`\>, [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\>\>

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

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

[`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

#### Overrides

[PureComputationModule](computations.PureComputationModule.md).[skipFirst](computations.PureComputationModule.md#skipfirst)

___

### spring

▸ **spring**(`options?`): [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.damping?` | `number` |
| `options.precision?` | `number` |
| `options.stiffness?` | `number` |

#### Returns

[`PureRunnableLike`](concurrent.PureRunnableLike.md)<`number`\>

___

### startWith

▸ **startWith**<`T`\>(`value`, `...values`): [`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

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

[`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

___

### subscribe

▸ **subscribe**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`T`\>, [`DisposableLike`](utils.DisposableLike.md)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](concurrent.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`T`\>, [`DisposableLike`](utils.DisposableLike.md)\>

___

### subscribeOn

▸ **subscribeOn**<`T`\>(`schedulerOrFactory`, `options?`): <TObservableIn\>(`observable`: `TObservableIn`) => `TObservableIn` extends [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`unknown`\> ? [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\> : [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schedulerOrFactory` | [`SchedulerLike`](concurrent.SchedulerLike.md) \| [`Factory`](../modules/functions.md#factory)<[`SchedulerLike`](concurrent.SchedulerLike.md) & [`DisposableLike`](utils.DisposableLike.md)\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

`fn`

▸ <`TObservableIn`\>(`observable`): `TObservableIn` extends [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`unknown`\> ? [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\> : [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`T`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TObservableIn` | extends [`ObservableLike`](concurrent.ObservableLike.md)<`T`, `TObservableIn`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `observable` | `TObservableIn` |

##### Returns

`TObservableIn` extends [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`unknown`\> ? [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\> : [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`T`\>

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

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

[`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

#### Overrides

[PureComputationModule](computations.PureComputationModule.md).[takeFirst](computations.PureComputationModule.md#takefirst)

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

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

[`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

___

### takeUntil

▸ **takeUntil**<`T`\>(`notifier`): [`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `notifier` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`unknown`\> |

#### Returns

[`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

▸ **takeUntil**<`T`\>(`notifier`): [`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `notifier` | [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`unknown`\> |

#### Returns

[`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

▸ **takeUntil**<`T`\>(`notifier`): [`DeferredSideEffectsObservableOperator`](../modules/concurrent_Observable.md#deferredsideeffectsobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `notifier` | [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`unknown`\> |

#### Returns

[`DeferredSideEffectsObservableOperator`](../modules/concurrent_Observable.md#deferredsideeffectsobservableoperator)<`T`, `T`\>

▸ **takeUntil**<`T`\>(`notifier`): [`MulticastObservableOperator`](../modules/concurrent_Observable.md#multicastobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `notifier` | [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`unknown`\> |

#### Returns

[`MulticastObservableOperator`](../modules/concurrent_Observable.md#multicastobservableoperator)<`T`, `T`\>

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

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

[`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

#### Overrides

[PureComputationModule](computations.PureComputationModule.md).[takeWhile](computations.PureComputationModule.md#takewhile)

___

### throttle

▸ **throttle**<`T`\>(`duration`, `options?`): [`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

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

[`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`T`, `T`\>

___

### throwIfEmpty

▸ **throwIfEmpty**<`T`\>(`factory`, `options?`): [`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

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

[`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`T`, `T`\>

___

### throws

▸ **throws**<`T`\>(`options?`): [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\>

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

[`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\>

▸ **throws**<`T`\>(`options`): [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.delay?` | `number` |
| `options.raise` | [`Factory`](../modules/functions.md#factory)<`unknown`\> |

#### Returns

[`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`T`\>

___

### toEventSource

▸ **toEventSource**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`T`\>, [`EventSourceLike`](events.EventSourceLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`T`\>, [`EventSourceLike`](events.EventSourceLike.md)<`T`\>\>

▸ **toEventSource**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`T`\>, [`EventSourceLike`](events.EventSourceLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](concurrent.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`T`\>, [`EventSourceLike`](events.EventSourceLike.md)<`T`\>\>

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`RunnableLike`](concurrent.RunnableLike.md)<`T`\>, readonly `T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`RunnableLike`](concurrent.RunnableLike.md)<`T`\>, readonly `T`[]\>

___

### toReadonlyArrayAsync

▸ **toReadonlyArrayAsync**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`T`\>, `Promise`<readonly `T`[]\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`T`\>, `Promise`<readonly `T`[]\>\>

▸ **toReadonlyArrayAsync**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`T`\>, `Promise`<readonly `T`[]\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](concurrent.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`T`\>, `Promise`<readonly `T`[]\>\>

___

### withCurrentTime

▸ **withCurrentTime**<`TA`, `TB`\>(`selector`): [`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`TA`, `TB`\>

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

[`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`TA`, `TB`\>

___

### withLatestFrom

▸ **withLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`TA`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TB`\> |
| `selector` | [`Function2`](../modules/functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`PureObservableOperator`](../modules/concurrent_Observable.md#pureobservableoperator)<`TA`, `T`\>

▸ **withLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`TA`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<`TB`\> |
| `selector` | [`Function2`](../modules/functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`ObservableOperatorWithSideEffects`](../modules/concurrent_Observable.md#observableoperatorwithsideeffects)<`TA`, `T`\>

▸ **withLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`DeferredSideEffectsObservableOperator`](../modules/concurrent_Observable.md#deferredsideeffectsobservableoperator)<`TA`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`TB`\> |
| `selector` | [`Function2`](../modules/functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`DeferredSideEffectsObservableOperator`](../modules/concurrent_Observable.md#deferredsideeffectsobservableoperator)<`TA`, `T`\>

▸ **withLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`TA`\>, [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`TB`\> |
| `selector` | [`Function2`](../modules/functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](concurrent.ObservableLike.md)<`TA`\>, [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<`T`\>\>

___

### zipLatest

▸ **zipLatest**<`TA`, `TB`\>(`a`, `b`): [`PureRunnableLike`](concurrent.PureRunnableLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`TA`, `TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TA`\> |
| `b` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TB`\> |

#### Returns

[`PureRunnableLike`](concurrent.PureRunnableLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`TA`, `TB`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`PureRunnableLike`](concurrent.PureRunnableLike.md)<[`Tuple3`](../modules/functions.md#tuple3)<`TA`, `TB`, `TC`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TA`\> |
| `b` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TB`\> |
| `c` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TC`\> |

#### Returns

[`PureRunnableLike`](concurrent.PureRunnableLike.md)<[`Tuple3`](../modules/functions.md#tuple3)<`TA`, `TB`, `TC`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`PureRunnableLike`](concurrent.PureRunnableLike.md)<[`Tuple4`](../modules/functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>

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
| `a` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TA`\> |
| `b` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TB`\> |
| `c` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TC`\> |
| `d` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TD`\> |

#### Returns

[`PureRunnableLike`](concurrent.PureRunnableLike.md)<[`Tuple4`](../modules/functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`PureRunnableLike`](concurrent.PureRunnableLike.md)<[`Tuple5`](../modules/functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

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
| `a` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TA`\> |
| `b` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TB`\> |
| `c` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TC`\> |
| `d` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TD`\> |
| `e` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TE`\> |

#### Returns

[`PureRunnableLike`](concurrent.PureRunnableLike.md)<[`Tuple5`](../modules/functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`PureRunnableLike`](concurrent.PureRunnableLike.md)<[`Tuple6`](../modules/functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

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
| `a` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TA`\> |
| `b` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TB`\> |
| `c` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TC`\> |
| `d` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TD`\> |
| `e` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TE`\> |
| `f` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TF`\> |

#### Returns

[`PureRunnableLike`](concurrent.PureRunnableLike.md)<[`Tuple6`](../modules/functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`PureRunnableLike`](concurrent.PureRunnableLike.md)<[`Tuple7`](../modules/functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

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
| `a` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TA`\> |
| `b` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TB`\> |
| `c` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TC`\> |
| `d` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TD`\> |
| `e` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TE`\> |
| `f` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TF`\> |
| `g` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TG`\> |

#### Returns

[`PureRunnableLike`](concurrent.PureRunnableLike.md)<[`Tuple7`](../modules/functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`PureRunnableLike`](concurrent.PureRunnableLike.md)<[`Tuple8`](../modules/functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

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
| `a` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TA`\> |
| `b` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TB`\> |
| `c` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TC`\> |
| `d` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TD`\> |
| `e` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TE`\> |
| `f` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TF`\> |
| `g` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TG`\> |
| `h` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TH`\> |

#### Returns

[`PureRunnableLike`](concurrent.PureRunnableLike.md)<[`Tuple8`](../modules/functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`PureRunnableLike`](concurrent.PureRunnableLike.md)<[`Tuple9`](../modules/functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

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
| `a` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TA`\> |
| `b` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TB`\> |
| `c` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TC`\> |
| `d` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TD`\> |
| `e` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TE`\> |
| `f` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TF`\> |
| `g` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TG`\> |
| `h` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TH`\> |
| `i` | [`PureRunnableLike`](concurrent.PureRunnableLike.md)<`TI`\> |

#### Returns

[`PureRunnableLike`](concurrent.PureRunnableLike.md)<[`Tuple9`](../modules/functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

▸ **zipLatest**<`TA`, `TB`\>(`a`, `b`): [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`TA`, `TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> |

#### Returns

[`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`TA`, `TB`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<[`Tuple3`](../modules/functions.md#tuple3)<`TA`, `TB`, `TC`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](concurrent.RunnableLike.md)<`TC`\> |

#### Returns

[`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<[`Tuple3`](../modules/functions.md#tuple3)<`TA`, `TB`, `TC`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<[`Tuple4`](../modules/functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>

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
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](concurrent.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](concurrent.RunnableLike.md)<`TD`\> |

#### Returns

[`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<[`Tuple4`](../modules/functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<[`Tuple5`](../modules/functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

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
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](concurrent.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](concurrent.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](concurrent.RunnableLike.md)<`TE`\> |

#### Returns

[`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<[`Tuple5`](../modules/functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<[`Tuple6`](../modules/functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

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
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](concurrent.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](concurrent.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](concurrent.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](concurrent.RunnableLike.md)<`TF`\> |

#### Returns

[`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<[`Tuple6`](../modules/functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<[`Tuple7`](../modules/functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

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
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](concurrent.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](concurrent.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](concurrent.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](concurrent.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](concurrent.RunnableLike.md)<`TG`\> |

#### Returns

[`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<[`Tuple7`](../modules/functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<[`Tuple8`](../modules/functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

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
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](concurrent.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](concurrent.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](concurrent.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](concurrent.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](concurrent.RunnableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](concurrent.RunnableLike.md)<`TH`\> |

#### Returns

[`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<[`Tuple8`](../modules/functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<[`Tuple9`](../modules/functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

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
| `a` | [`RunnableLike`](concurrent.RunnableLike.md)<`TA`\> |
| `b` | [`RunnableLike`](concurrent.RunnableLike.md)<`TB`\> |
| `c` | [`RunnableLike`](concurrent.RunnableLike.md)<`TC`\> |
| `d` | [`RunnableLike`](concurrent.RunnableLike.md)<`TD`\> |
| `e` | [`RunnableLike`](concurrent.RunnableLike.md)<`TE`\> |
| `f` | [`RunnableLike`](concurrent.RunnableLike.md)<`TF`\> |
| `g` | [`RunnableLike`](concurrent.RunnableLike.md)<`TG`\> |
| `h` | [`RunnableLike`](concurrent.RunnableLike.md)<`TH`\> |
| `i` | [`RunnableLike`](concurrent.RunnableLike.md)<`TI`\> |

#### Returns

[`RunnableWithSideEffectsLike`](concurrent.RunnableWithSideEffectsLike.md)<[`Tuple9`](../modules/functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

▸ **zipLatest**<`TA`, `TB`\>(`a`, `b`): [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`TA`, `TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TB`\> |

#### Returns

[`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`TA`, `TB`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<[`Tuple3`](../modules/functions.md#tuple3)<`TA`, `TB`, `TC`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TC`\> |

#### Returns

[`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<[`Tuple3`](../modules/functions.md#tuple3)<`TA`, `TB`, `TC`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<[`Tuple4`](../modules/functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>

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
| `a` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TD`\> |

#### Returns

[`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<[`Tuple4`](../modules/functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<[`Tuple5`](../modules/functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

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
| `a` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TD`\> |
| `e` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TE`\> |

#### Returns

[`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<[`Tuple5`](../modules/functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<[`Tuple6`](../modules/functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

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
| `a` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TD`\> |
| `e` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TE`\> |
| `f` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TF`\> |

#### Returns

[`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<[`Tuple6`](../modules/functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<[`Tuple7`](../modules/functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

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
| `a` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TD`\> |
| `e` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TE`\> |
| `f` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TF`\> |
| `g` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TG`\> |

#### Returns

[`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<[`Tuple7`](../modules/functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<[`Tuple8`](../modules/functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

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
| `a` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TD`\> |
| `e` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TE`\> |
| `f` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TF`\> |
| `g` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TG`\> |
| `h` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TH`\> |

#### Returns

[`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<[`Tuple8`](../modules/functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<[`Tuple9`](../modules/functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

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
| `a` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TA`\> |
| `b` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TB`\> |
| `c` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TC`\> |
| `d` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TD`\> |
| `e` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TE`\> |
| `f` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TF`\> |
| `g` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TG`\> |
| `h` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TH`\> |
| `i` | [`PureObservableLike`](concurrent.PureObservableLike.md)<`TI`\> |

#### Returns

[`MulticastObservableLike`](concurrent.MulticastObservableLike.md)<[`Tuple9`](../modules/functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

▸ **zipLatest**<`TA`, `TB`\>(`a`, `b`): [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`TA`, `TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ObservableLike`](concurrent.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](concurrent.ObservableLike.md)<`TB`\> |

#### Returns

[`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`TA`, `TB`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<[`Tuple3`](../modules/functions.md#tuple3)<`TA`, `TB`, `TC`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ObservableLike`](concurrent.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](concurrent.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](concurrent.ObservableLike.md)<`TC`\> |

#### Returns

[`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<[`Tuple3`](../modules/functions.md#tuple3)<`TA`, `TB`, `TC`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<[`Tuple4`](../modules/functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>

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
| `a` | [`ObservableLike`](concurrent.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](concurrent.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](concurrent.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](concurrent.ObservableLike.md)<`TD`\> |

#### Returns

[`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<[`Tuple4`](../modules/functions.md#tuple4)<`TA`, `TB`, `TC`, `TD`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<[`Tuple5`](../modules/functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

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
| `a` | [`ObservableLike`](concurrent.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](concurrent.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](concurrent.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](concurrent.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](concurrent.ObservableLike.md)<`TE`\> |

#### Returns

[`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<[`Tuple5`](../modules/functions.md#tuple5)<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<[`Tuple6`](../modules/functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

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
| `a` | [`ObservableLike`](concurrent.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](concurrent.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](concurrent.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](concurrent.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](concurrent.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](concurrent.ObservableLike.md)<`TF`\> |

#### Returns

[`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<[`Tuple6`](../modules/functions.md#tuple6)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<[`Tuple7`](../modules/functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

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
| `a` | [`ObservableLike`](concurrent.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](concurrent.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](concurrent.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](concurrent.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](concurrent.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](concurrent.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](concurrent.ObservableLike.md)<`TG`\> |

#### Returns

[`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<[`Tuple7`](../modules/functions.md#tuple7)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<[`Tuple8`](../modules/functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

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
| `a` | [`ObservableLike`](concurrent.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](concurrent.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](concurrent.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](concurrent.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](concurrent.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](concurrent.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](concurrent.ObservableLike.md)<`TG`\> |
| `h` | [`ObservableLike`](concurrent.ObservableLike.md)<`TH`\> |

#### Returns

[`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<[`Tuple8`](../modules/functions.md#tuple8)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<[`Tuple9`](../modules/functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

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
| `a` | [`ObservableLike`](concurrent.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](concurrent.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](concurrent.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](concurrent.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](concurrent.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](concurrent.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](concurrent.ObservableLike.md)<`TG`\> |
| `h` | [`ObservableLike`](concurrent.ObservableLike.md)<`TH`\> |
| `i` | [`ObservableLike`](concurrent.ObservableLike.md)<`TI`\> |

#### Returns

[`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<[`Tuple9`](../modules/functions.md#tuple9)<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>
