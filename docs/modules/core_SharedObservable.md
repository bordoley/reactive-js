[Reactive-JS](../README.md) / core/SharedObservable

# Module: core/SharedObservable

## Table of contents

### Constructor Functions

- [combineLatest](core_SharedObservable.md#combinelatest)
- [compute](core_SharedObservable.md#compute)
- [create](core_SharedObservable.md#create)
- [fromAsyncFactory](core_SharedObservable.md#fromasyncfactory)

### Operator Functions

- [backpressureStrategy](core_SharedObservable.md#backpressurestrategy)
- [buffer](core_SharedObservable.md#buffer)
- [decodeWithCharset](core_SharedObservable.md#decodewithcharset)
- [dispatchTo](core_SharedObservable.md#dispatchto)
- [distinctUntilChanged](core_SharedObservable.md#distinctuntilchanged)
- [enqueue](core_SharedObservable.md#enqueue)
- [flatMapAsync](core_SharedObservable.md#flatmapasync)
- [forEach](core_SharedObservable.md#foreach)
- [identity](core_SharedObservable.md#identity)
- [ignoreElements](core_SharedObservable.md#ignoreelements)
- [keep](core_SharedObservable.md#keep)
- [keepType](core_SharedObservable.md#keeptype)
- [map](core_SharedObservable.md#map)
- [mapTo](core_SharedObservable.md#mapto)
- [mergeWith](core_SharedObservable.md#mergewith)
- [onSubscribe](core_SharedObservable.md#onsubscribe)
- [pairwise](core_SharedObservable.md#pairwise)
- [pick](core_SharedObservable.md#pick)
- [scan](core_SharedObservable.md#scan)
- [skipFirst](core_SharedObservable.md#skipfirst)
- [subscribeOn](core_SharedObservable.md#subscribeon)
- [takeFirst](core_SharedObservable.md#takefirst)
- [takeLast](core_SharedObservable.md#takelast)
- [takeWhile](core_SharedObservable.md#takewhile)
- [throwIfEmpty](core_SharedObservable.md#throwifempty)
- [withCurrentTime](core_SharedObservable.md#withcurrenttime)
- [withLatestFrom](core_SharedObservable.md#withlatestfrom)

### Other Functions

- [subscribe](core_SharedObservable.md#subscribe)

### Transform Functions

- [firstAsync](core_SharedObservable.md#firstasync)
- [lastAsync](core_SharedObservable.md#lastasync)
- [toEventSource](core_SharedObservable.md#toeventsource)
- [toObservable](core_SharedObservable.md#toobservable)

## Constructor Functions

### combineLatest

▸ **combineLatest**<`TA`, `TB`\>(`a`, `b`): [`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<`TA`\> |
| `b` | [`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<`TB`\> |

#### Returns

[`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<readonly [`TA`, `TB`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<`TA`\> |
| `b` | [`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<`TB`\> |
| `c` | [`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<`TC`\> |

#### Returns

[`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<`TA`\> |
| `b` | [`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<`TB`\> |
| `c` | [`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<`TC`\> |
| `d` | [`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<`TD`\> |

#### Returns

[`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<`TA`\> |
| `b` | [`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<`TB`\> |
| `c` | [`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<`TC`\> |
| `d` | [`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<`TD`\> |
| `e` | [`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<`TE`\> |

#### Returns

[`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<`TA`\> |
| `b` | [`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<`TB`\> |
| `c` | [`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<`TC`\> |
| `d` | [`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<`TD`\> |
| `e` | [`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<`TE`\> |
| `f` | [`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<`TF`\> |

#### Returns

[`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<`TA`\> |
| `b` | [`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<`TB`\> |
| `c` | [`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<`TC`\> |
| `d` | [`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<`TD`\> |
| `e` | [`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<`TE`\> |
| `f` | [`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<`TF`\> |
| `g` | [`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<`TG`\> |

#### Returns

[`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<`TA`\> |
| `b` | [`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<`TB`\> |
| `c` | [`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<`TC`\> |
| `d` | [`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<`TD`\> |
| `e` | [`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<`TE`\> |
| `f` | [`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<`TF`\> |
| `g` | [`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<`TG`\> |
| `h` | [`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<`TH`\> |

#### Returns

[`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<`TA`\> |
| `b` | [`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<`TB`\> |
| `c` | [`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<`TC`\> |
| `d` | [`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<`TD`\> |
| `e` | [`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<`TE`\> |
| `f` | [`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<`TF`\> |
| `g` | [`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<`TG`\> |
| `h` | [`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<`TH`\> |
| `i` | [`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<`TI`\> |

#### Returns

[`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

### compute

▸ **compute**<`T`\>(`computation`, `options?`): [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `computation` | [`Factory`](functions.md#factory)<`T`\> |
| `options?` | `Object` |
| `options.mode?` | ``"batched"`` \| ``"combine-latest"`` |

#### Returns

[`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`T`\>

___

### create

▸ **create**<`T`\>(`f`): [`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`SideEffect1`](functions.md#sideeffect1)<[`ObserverLike`](../interfaces/core.ObserverLike.md)<`T`\>\> |

#### Returns

[`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<`T`\>

___

### fromAsyncFactory

▸ **fromAsyncFactory**<`T`\>(`f`): [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`abortSignal`: `AbortSignal`) => `Promise`<`T`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`T`\>

___

## Operator Functions

### backpressureStrategy

▸ **backpressureStrategy**<`T`\>(`capacity`, `backpressureStrategy`): [`Operator`](core.Containers.md#operator)<[`SharedObservableContainer`](../interfaces/core.SharedObservableContainer-1.md), `T`, `T`\>

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

[`Operator`](core.Containers.md#operator)<[`SharedObservableContainer`](../interfaces/core.SharedObservableContainer-1.md), `T`, `T`\>

___

### buffer

▸ **buffer**<`T`\>(`options?`): [`Operator`](core.Containers.md#operator)<[`SharedObservableContainer`](../interfaces/core.SharedObservableContainer-1.md), `T`, readonly `T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |
| `options.duration?` | `number` \| [`Function1`](functions.md#function1)<`T`, [`SharedObservableContainer`](../interfaces/core.SharedObservableContainer-1.md)\> |

#### Returns

[`Operator`](core.Containers.md#operator)<[`SharedObservableContainer`](../interfaces/core.SharedObservableContainer-1.md), `T`, readonly `T`[]\>

___

### decodeWithCharset

▸ **decodeWithCharset**(`options?`): [`Operator`](core.Containers.md#operator)<[`SharedObservableContainer`](../interfaces/core.SharedObservableContainer-1.md), `ArrayBuffer`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.charset?` | `string` |

#### Returns

[`Operator`](core.Containers.md#operator)<[`SharedObservableContainer`](../interfaces/core.SharedObservableContainer-1.md), `ArrayBuffer`, `string`\>

___

### dispatchTo

▸ **dispatchTo**<`T`\>(`dispatcher`): [`Operator`](core.Containers.md#operator)<[`SharedObservableContainer`](../interfaces/core.SharedObservableContainer-1.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatcher` | [`DispatcherLike`](../interfaces/core.DispatcherLike.md)<`T`\> |

#### Returns

[`Operator`](core.Containers.md#operator)<[`SharedObservableContainer`](../interfaces/core.SharedObservableContainer-1.md), `T`, `T`\>

___

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`Operator`](core.Containers.md#operator)<[`SharedObservableContainer`](../interfaces/core.SharedObservableContainer-1.md), `T`, `T`\>

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
| `options.equality?` | [`Equality`](functions.md#equality)<`T`\> |

#### Returns

[`Operator`](core.Containers.md#operator)<[`SharedObservableContainer`](../interfaces/core.SharedObservableContainer-1.md), `T`, `T`\>

___

### enqueue

▸ **enqueue**<`T`\>(`queue`): [`Operator`](core.Containers.md#operator)<[`SharedObservableContainer`](../interfaces/core.SharedObservableContainer-1.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `queue` | [`QueueableLike`](../interfaces/core.QueueableLike.md)<`T`\> |

#### Returns

[`Operator`](core.Containers.md#operator)<[`SharedObservableContainer`](../interfaces/core.SharedObservableContainer-1.md), `T`, `T`\>

___

### flatMapAsync

▸ **flatMapAsync**<`TA`, `TB`\>(`f`): [`Operator`](core.Containers.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer-1.md), `TA`, `TB`\>

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

[`Operator`](core.Containers.md#operator)<[`ObservableContainer`](../interfaces/core.ObservableContainer-1.md), `TA`, `TB`\>

___

### forEach

▸ **forEach**<`T`\>(`effect`): [`Operator`](core.Containers.md#operator)<[`SharedObservableContainer`](../interfaces/core.SharedObservableContainer-1.md), `T`, `T`\>

Returns a Containers.Operator that applies the side effect function to each
value emitted by the source.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect1`](functions.md#sideeffect1)<`T`\> |

#### Returns

[`Operator`](core.Containers.md#operator)<[`SharedObservableContainer`](../interfaces/core.SharedObservableContainer-1.md), `T`, `T`\>

___

### identity

▸ **identity**<`T`\>(): [`Operator`](core.Containers.md#operator)<[`SharedObservableContainer`](../interfaces/core.SharedObservableContainer-1.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](core.Containers.md#operator)<[`SharedObservableContainer`](../interfaces/core.SharedObservableContainer-1.md), `T`, `T`\>

___

### ignoreElements

▸ **ignoreElements**<`T`\>(): [`Operator`](core.Containers.md#operator)<[`SharedObservableContainer`](../interfaces/core.SharedObservableContainer-1.md), `unknown`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](core.Containers.md#operator)<[`SharedObservableContainer`](../interfaces/core.SharedObservableContainer-1.md), `unknown`, `T`\>

___

### keep

▸ **keep**<`T`\>(`predicate`): [`Operator`](core.Containers.md#operator)<[`SharedObservableContainer`](../interfaces/core.SharedObservableContainer-1.md), `T`, `T`\>

Returns a Containers.Operator that only emits items produced by the
source that satisfy the specified predicate.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`Operator`](core.Containers.md#operator)<[`SharedObservableContainer`](../interfaces/core.SharedObservableContainer-1.md), `T`, `T`\>

___

### keepType

▸ **keepType**<`TA`, `TB`\>(`predicate`): [`Operator`](core.Containers.md#operator)<[`SharedObservableContainer`](../interfaces/core.SharedObservableContainer-1.md), `TA`, `TB`\>

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

[`Operator`](core.Containers.md#operator)<[`SharedObservableContainer`](../interfaces/core.SharedObservableContainer-1.md), `TA`, `TB`\>

___

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`Operator`](core.Containers.md#operator)<[`SharedObservableContainer`](../interfaces/core.SharedObservableContainer-1.md), `TA`, `TB`\>

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
| `selector` | [`Function1`](functions.md#function1)<`TA`, `TB`\> | A pure map function that is applied each value emitted by the source |

#### Returns

[`Operator`](core.Containers.md#operator)<[`SharedObservableContainer`](../interfaces/core.SharedObservableContainer-1.md), `TA`, `TB`\>

___

### mapTo

▸ **mapTo**<`TA`, `TB`\>(`value`): [`Operator`](core.Containers.md#operator)<[`SharedObservableContainer`](../interfaces/core.SharedObservableContainer-1.md), `TA`, `TB`\>

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

[`Operator`](core.Containers.md#operator)<[`SharedObservableContainer`](../interfaces/core.SharedObservableContainer-1.md), `TA`, `TB`\>

___

### mergeWith

▸ **mergeWith**<`T`\>(`snd`, `...tail`): [`Operator`](core.Containers.md#operator)<[`SharedObservableContainer`](../interfaces/core.SharedObservableContainer-1.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<`T`\> |
| `...tail` | readonly [`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<`T`\>[] |

#### Returns

[`Operator`](core.Containers.md#operator)<[`SharedObservableContainer`](../interfaces/core.SharedObservableContainer-1.md), `T`, `T`\>

___

### onSubscribe

▸ **onSubscribe**<`T`\>(`f`): [`Operator`](core.Containers.md#operator)<[`SharedObservableContainer`](../interfaces/core.SharedObservableContainer-1.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Factory`](functions.md#factory)<`void` \| [`DisposableOrTeardown`](core.md#disposableorteardown)\> |

#### Returns

[`Operator`](core.Containers.md#operator)<[`SharedObservableContainer`](../interfaces/core.SharedObservableContainer-1.md), `T`, `T`\>

___

### pairwise

▸ **pairwise**<`T`\>(): [`Operator`](core.Containers.md#operator)<[`SharedObservableContainer`](../interfaces/core.SharedObservableContainer-1.md), `T`, readonly [`T`, `T`]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](core.Containers.md#operator)<[`SharedObservableContainer`](../interfaces/core.SharedObservableContainer-1.md), `T`, readonly [`T`, `T`]\>

___

### pick

▸ **pick**<`T`, `TKey`\>(`key`): [`Operator`](core.Containers.md#operator)<[`SharedObservableContainer`](../interfaces/core.SharedObservableContainer-1.md), `T`, `T`[`TKey`]\>

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

[`Operator`](core.Containers.md#operator)<[`SharedObservableContainer`](../interfaces/core.SharedObservableContainer-1.md), `T`, `T`[`TKey`]\>

▸ **pick**<`T`, `TKeyA`, `TKeyB`\>(`keyA`, `keyB`): [`Operator`](core.Containers.md#operator)<[`SharedObservableContainer`](../interfaces/core.SharedObservableContainer-1.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

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

[`Operator`](core.Containers.md#operator)<[`SharedObservableContainer`](../interfaces/core.SharedObservableContainer-1.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

▸ **pick**<`T`, `TKeyA`, `TKeyB`, `TKeyC`\>(`keyA`, `keyB`, `keyC`): [`Operator`](core.Containers.md#operator)<[`SharedObservableContainer`](../interfaces/core.SharedObservableContainer-1.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

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

[`Operator`](core.Containers.md#operator)<[`SharedObservableContainer`](../interfaces/core.SharedObservableContainer-1.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`Operator`](core.Containers.md#operator)<[`SharedObservableContainer`](../interfaces/core.SharedObservableContainer-1.md), `T`, `TAcc`\>

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
| `scanner` | [`Reducer`](functions.md#reducer)<`T`, `TAcc`\> | The accumulator function called on each source value. |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc`\> | The initial accumulation value. |

#### Returns

[`Operator`](core.Containers.md#operator)<[`SharedObservableContainer`](../interfaces/core.SharedObservableContainer-1.md), `T`, `TAcc`\>

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`Operator`](core.Containers.md#operator)<[`SharedObservableContainer`](../interfaces/core.SharedObservableContainer-1.md), `T`, `T`\>

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

[`Operator`](core.Containers.md#operator)<[`SharedObservableContainer`](../interfaces/core.SharedObservableContainer-1.md), `T`, `T`\>

___

### subscribeOn

▸ **subscribeOn**<`T`\>(`schedulerOrFactory`, `options?`): [`Function1`](functions.md#function1)<[`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`T`\>, [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schedulerOrFactory` | [`SchedulerLike`](../interfaces/core.SchedulerLike.md) \| [`Factory`](functions.md#factory)<[`SchedulerLike`](../interfaces/core.SchedulerLike.md) & [`DisposableLike`](../interfaces/core.DisposableLike.md)\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`T`\>, [`DeferredObservableLike`](../interfaces/core.DeferredObservableLike.md)<`T`\>\>

▸ **subscribeOn**<`T_1`\>(`schedulerOrFactory`, `options?`): [`Function1`](functions.md#function1)<[`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<`T_1`\>, [`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<`T_1`\>\>

#### Type parameters

| Name |
| :------ |
| `T_1` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schedulerOrFactory` | [`SchedulerLike`](../interfaces/core.SchedulerLike.md) \| [`Factory`](functions.md#factory)<[`SchedulerLike`](../interfaces/core.SchedulerLike.md) & [`DisposableLike`](../interfaces/core.DisposableLike.md)\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<`T_1`\>, [`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<`T_1`\>\>

▸ **subscribeOn**<`T_2`\>(`schedulerOrFactory`, `options?`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/core.ObservableLike.md)<`T_2`\>, [`ObservableLike`](../interfaces/core.ObservableLike.md)<`T_2`\>\>

#### Type parameters

| Name |
| :------ |
| `T_2` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schedulerOrFactory` | [`SchedulerLike`](../interfaces/core.SchedulerLike.md) \| [`Factory`](functions.md#factory)<[`SchedulerLike`](../interfaces/core.SchedulerLike.md) & [`DisposableLike`](../interfaces/core.DisposableLike.md)\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/core.ObservableLike.md)<`T_2`\>, [`ObservableLike`](../interfaces/core.ObservableLike.md)<`T_2`\>\>

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`Operator`](core.Containers.md#operator)<[`SharedObservableContainer`](../interfaces/core.SharedObservableContainer-1.md), `T`, `T`\>

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

[`Operator`](core.Containers.md#operator)<[`SharedObservableContainer`](../interfaces/core.SharedObservableContainer-1.md), `T`, `T`\>

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`Operator`](core.Containers.md#operator)<[`SharedObservableContainer`](../interfaces/core.SharedObservableContainer-1.md), `T`, `T`\>

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

[`Operator`](core.Containers.md#operator)<[`SharedObservableContainer`](../interfaces/core.SharedObservableContainer-1.md), `T`, `T`\>

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`Operator`](core.Containers.md#operator)<[`SharedObservableContainer`](../interfaces/core.SharedObservableContainer-1.md), `T`, `T`\>

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
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> | The predicate function. |
| `options?` | `Object` | - |
| `options.inclusive?` | `boolean` | - |

#### Returns

[`Operator`](core.Containers.md#operator)<[`SharedObservableContainer`](../interfaces/core.SharedObservableContainer-1.md), `T`, `T`\>

___

### throwIfEmpty

▸ **throwIfEmpty**<`T`\>(`factory`): [`Operator`](core.Containers.md#operator)<[`SharedObservableContainer`](../interfaces/core.SharedObservableContainer-1.md), `T`, `T`\>

Returns a Container that emits an error if the source completes without emitting a value.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `factory` | [`Factory`](functions.md#factory)<`unknown`\> | A factory function invoked to produce the error to be thrown. |

#### Returns

[`Operator`](core.Containers.md#operator)<[`SharedObservableContainer`](../interfaces/core.SharedObservableContainer-1.md), `T`, `T`\>

___

### withCurrentTime

▸ **withCurrentTime**<`T`, `TOut`\>(`selector`): [`Operator`](core.Containers.md#operator)<[`SharedObservableContainer`](../interfaces/core.SharedObservableContainer-1.md), `T`, `TOut`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function2`](functions.md#function2)<`number`, `T`, `TOut`\> |

#### Returns

[`Operator`](core.Containers.md#operator)<[`SharedObservableContainer`](../interfaces/core.SharedObservableContainer-1.md), `T`, `TOut`\>

___

### withLatestFrom

▸ **withLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`Operator`](core.Containers.md#operator)<[`SharedObservableContainer`](../interfaces/core.SharedObservableContainer-1.md), `TA`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<`TB`\> |
| `selector` | [`Function2`](functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`Operator`](core.Containers.md#operator)<[`SharedObservableContainer`](../interfaces/core.SharedObservableContainer-1.md), `TA`, `T`\>

___

## Other Functions

### subscribe

▸ **subscribe**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>, [`DisposableLike`](../interfaces/core.DisposableLike.md)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/core.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>, [`DisposableLike`](../interfaces/core.DisposableLike.md)\>

___

## Transform Functions

### firstAsync

▸ **firstAsync**<`T`\>(): [`Function1`](functions.md#function1)<[`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

▸ **firstAsync**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<[`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/core.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

___

### lastAsync

▸ **lastAsync**<`T`\>(): [`Function1`](functions.md#function1)<[`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

▸ **lastAsync**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<[`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/core.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

___

### toEventSource

▸ **toEventSource**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>, [`EventSourceLike`](../interfaces/core.EventSourceLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/core.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>, [`EventSourceLike`](../interfaces/core.EventSourceLike.md)<`T`\>\>

___

### toObservable

▸ **toObservable**<`T`\>(): [`Function1`](functions.md#function1)<[`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<`T`\>, [`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`SharedObservableLike`](../interfaces/core.SharedObservableLike.md)<`T`\>, [`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>\>
