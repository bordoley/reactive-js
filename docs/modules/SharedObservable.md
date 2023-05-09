[Reactive-JS](../README.md) / SharedObservable

# Module: SharedObservable

## Table of contents

### Constructor Functions

- [combineLatest](SharedObservable.md#combinelatest)
- [compute](SharedObservable.md#compute)
- [create](SharedObservable.md#create)
- [defer](SharedObservable.md#defer)
- [fromAsyncFactory](SharedObservable.md#fromasyncfactory)

### Operator Functions

- [backpressureStrategy](SharedObservable.md#backpressurestrategy)
- [buffer](SharedObservable.md#buffer)
- [decodeWithCharset](SharedObservable.md#decodewithcharset)
- [dispatchTo](SharedObservable.md#dispatchto)
- [distinctUntilChanged](SharedObservable.md#distinctuntilchanged)
- [enqueue](SharedObservable.md#enqueue)
- [flatMapAsync](SharedObservable.md#flatmapasync)
- [forEach](SharedObservable.md#foreach)
- [identity](SharedObservable.md#identity)
- [ignoreElements](SharedObservable.md#ignoreelements)
- [keep](SharedObservable.md#keep)
- [keepType](SharedObservable.md#keeptype)
- [map](SharedObservable.md#map)
- [mapTo](SharedObservable.md#mapto)
- [mergeWith](SharedObservable.md#mergewith)
- [onSubscribe](SharedObservable.md#onsubscribe)
- [pairwise](SharedObservable.md#pairwise)
- [pick](SharedObservable.md#pick)
- [scan](SharedObservable.md#scan)
- [skipFirst](SharedObservable.md#skipfirst)
- [subscribeOn](SharedObservable.md#subscribeon)
- [takeFirst](SharedObservable.md#takefirst)
- [takeLast](SharedObservable.md#takelast)
- [takeWhile](SharedObservable.md#takewhile)
- [throwIfEmpty](SharedObservable.md#throwifempty)
- [withCurrentTime](SharedObservable.md#withcurrenttime)
- [withLatestFrom](SharedObservable.md#withlatestfrom)

### Other Functions

- [subscribe](SharedObservable.md#subscribe)

### Transform Functions

- [firstAsync](SharedObservable.md#firstasync)
- [lastAsync](SharedObservable.md#lastasync)
- [toEventSource](SharedObservable.md#toeventsource)
- [toObservable](SharedObservable.md#toobservable)

## Constructor Functions

### combineLatest

▸ **combineLatest**<`TA`, `TB`\>(`a`, `b`): [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`TA`\> |
| `b` | [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`TB`\> |

#### Returns

[`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<readonly [`TA`, `TB`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`TA`\> |
| `b` | [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`TB`\> |
| `c` | [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`TC`\> |

#### Returns

[`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`TA`\> |
| `b` | [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`TB`\> |
| `c` | [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`TC`\> |
| `d` | [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`TD`\> |

#### Returns

[`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`TA`\> |
| `b` | [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`TB`\> |
| `c` | [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`TC`\> |
| `d` | [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`TD`\> |
| `e` | [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`TE`\> |

#### Returns

[`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`TA`\> |
| `b` | [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`TB`\> |
| `c` | [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`TC`\> |
| `d` | [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`TD`\> |
| `e` | [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`TE`\> |
| `f` | [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`TF`\> |

#### Returns

[`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`TA`\> |
| `b` | [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`TB`\> |
| `c` | [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`TC`\> |
| `d` | [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`TD`\> |
| `e` | [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`TE`\> |
| `f` | [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`TF`\> |
| `g` | [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`TG`\> |

#### Returns

[`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`TA`\> |
| `b` | [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`TB`\> |
| `c` | [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`TC`\> |
| `d` | [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`TD`\> |
| `e` | [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`TE`\> |
| `f` | [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`TF`\> |
| `g` | [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`TG`\> |
| `h` | [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`TH`\> |

#### Returns

[`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`TA`\> |
| `b` | [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`TB`\> |
| `c` | [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`TC`\> |
| `d` | [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`TD`\> |
| `e` | [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`TE`\> |
| `f` | [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`TF`\> |
| `g` | [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`TG`\> |
| `h` | [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`TH`\> |
| `i` | [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`TI`\> |

#### Returns

[`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

### compute

▸ **compute**<`T`\>(`computation`, `options?`): [`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>

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

[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>

___

### create

▸ **create**<`T`\>(`f`): [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`SideEffect1`](functions.md#sideeffect1)<[`ObserverLike`](../interfaces/types.ObserverLike.md)<`T`\>\> |

#### Returns

[`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`T`\>

___

### defer

▸ **defer**<`T`\>(`factory`): [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](functions.md#factory)<[`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`T`\>\> |

#### Returns

[`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`T`\>

___

### fromAsyncFactory

▸ **fromAsyncFactory**<`T`\>(`f`): [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`abortSignal`: `AbortSignal`) => `Promise`<`T`\> |

#### Returns

[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>

___

## Operator Functions

### backpressureStrategy

▸ **backpressureStrategy**<`T`\>(`capacity`, `backpressureStrategy`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.SharedObservableContainer.Type.md), `T`, `T`\>

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

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.SharedObservableContainer.Type.md), `T`, `T`\>

___

### buffer

▸ **buffer**<`T`\>(`options?`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.SharedObservableContainer.Type.md), `T`, readonly `T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |
| `options.duration?` | `number` \| [`Function1`](functions.md#function1)<`T`, [`Type`](../interfaces/containers.SharedObservableContainer.Type.md)\> |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.SharedObservableContainer.Type.md), `T`, readonly `T`[]\>

___

### decodeWithCharset

▸ **decodeWithCharset**(`options?`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.SharedObservableContainer.Type.md), `ArrayBuffer`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.charset?` | `string` |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.SharedObservableContainer.Type.md), `ArrayBuffer`, `string`\>

___

### dispatchTo

▸ **dispatchTo**<`T`\>(`dispatcher`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.SharedObservableContainer.Type.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatcher` | [`DispatcherLike`](../interfaces/types.DispatcherLike.md)<`T`\> |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.SharedObservableContainer.Type.md), `T`, `T`\>

___

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.SharedObservableContainer.Type.md), `T`, `T`\>

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

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.SharedObservableContainer.Type.md), `T`, `T`\>

___

### enqueue

▸ **enqueue**<`T`\>(`queue`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.SharedObservableContainer.Type.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `queue` | [`QueueableLike`](../interfaces/types.QueueableLike.md)<`T`\> |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.SharedObservableContainer.Type.md), `T`, `T`\>

___

### flatMapAsync

▸ **flatMapAsync**<`TA`, `TB`\>(`f`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.ObservableContainer.Type.md), `TA`, `TB`\>

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

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.ObservableContainer.Type.md), `TA`, `TB`\>

___

### forEach

▸ **forEach**<`T`\>(`effect`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.SharedObservableContainer.Type.md), `T`, `T`\>

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

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.SharedObservableContainer.Type.md), `T`, `T`\>

___

### identity

▸ **identity**<`T`\>(): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.SharedObservableContainer.Type.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.SharedObservableContainer.Type.md), `T`, `T`\>

___

### ignoreElements

▸ **ignoreElements**<`T`\>(): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.SharedObservableContainer.Type.md), `unknown`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.SharedObservableContainer.Type.md), `unknown`, `T`\>

___

### keep

▸ **keep**<`T`\>(`predicate`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.SharedObservableContainer.Type.md), `T`, `T`\>

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

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.SharedObservableContainer.Type.md), `T`, `T`\>

___

### keepType

▸ **keepType**<`TA`, `TB`\>(`predicate`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.SharedObservableContainer.Type.md), `TA`, `TB`\>

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

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.SharedObservableContainer.Type.md), `TA`, `TB`\>

___

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.SharedObservableContainer.Type.md), `TA`, `TB`\>

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

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.SharedObservableContainer.Type.md), `TA`, `TB`\>

___

### mapTo

▸ **mapTo**<`TA`, `TB`\>(`value`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.SharedObservableContainer.Type.md), `TA`, `TB`\>

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

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.SharedObservableContainer.Type.md), `TA`, `TB`\>

___

### mergeWith

▸ **mergeWith**<`T`\>(`snd`, `...tail`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.SharedObservableContainer.Type.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`T`\> |
| `...tail` | readonly [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`T`\>[] |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.SharedObservableContainer.Type.md), `T`, `T`\>

___

### onSubscribe

▸ **onSubscribe**<`T`\>(`f`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.SharedObservableContainer.Type.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Factory`](functions.md#factory)<`void` \| [`DisposableOrTeardown`](types.md#disposableorteardown)\> |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.SharedObservableContainer.Type.md), `T`, `T`\>

___

### pairwise

▸ **pairwise**<`T`\>(): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.SharedObservableContainer.Type.md), `T`, readonly [`T`, `T`]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.SharedObservableContainer.Type.md), `T`, readonly [`T`, `T`]\>

___

### pick

▸ **pick**<`T`, `TKey`\>(`key`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.SharedObservableContainer.Type.md), `T`, `T`[`TKey`]\>

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

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.SharedObservableContainer.Type.md), `T`, `T`[`TKey`]\>

▸ **pick**<`T`, `TKeyA`, `TKeyB`\>(`keyA`, `keyB`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.SharedObservableContainer.Type.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

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

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.SharedObservableContainer.Type.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

▸ **pick**<`T`, `TKeyA`, `TKeyB`, `TKeyC`\>(`keyA`, `keyB`, `keyC`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.SharedObservableContainer.Type.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

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

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.SharedObservableContainer.Type.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.SharedObservableContainer.Type.md), `T`, `TAcc`\>

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

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.SharedObservableContainer.Type.md), `T`, `TAcc`\>

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.SharedObservableContainer.Type.md), `T`, `T`\>

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

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.SharedObservableContainer.Type.md), `T`, `T`\>

___

### subscribeOn

▸ **subscribeOn**<`T`\>(`schedulerOrFactory`, `options?`): [`Function1`](functions.md#function1)<[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

▸ **subscribeOn**<`T_1`\>(`schedulerOrFactory`, `options?`): [`Function1`](functions.md#function1)<[`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`T_1`\>, [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`T_1`\>\>

#### Type parameters

| Name |
| :------ |
| `T_1` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schedulerOrFactory` | [`SchedulerLike`](../interfaces/types.SchedulerLike.md) \| [`Factory`](functions.md#factory)<[`SchedulerLike`](../interfaces/types.SchedulerLike.md) & [`DisposableLike`](../interfaces/types.DisposableLike.md)\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`T_1`\>, [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`T_1`\>\>

▸ **subscribeOn**<`T_2`\>(`schedulerOrFactory`, `options?`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T_2`\>, [`ObservableLike`](../interfaces/types.ObservableLike.md)<`T_2`\>\>

#### Type parameters

| Name |
| :------ |
| `T_2` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schedulerOrFactory` | [`SchedulerLike`](../interfaces/types.SchedulerLike.md) \| [`Factory`](functions.md#factory)<[`SchedulerLike`](../interfaces/types.SchedulerLike.md) & [`DisposableLike`](../interfaces/types.DisposableLike.md)\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/types.ObservableLike.md)<`T_2`\>, [`ObservableLike`](../interfaces/types.ObservableLike.md)<`T_2`\>\>

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.SharedObservableContainer.Type.md), `T`, `T`\>

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

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.SharedObservableContainer.Type.md), `T`, `T`\>

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.SharedObservableContainer.Type.md), `T`, `T`\>

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

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.SharedObservableContainer.Type.md), `T`, `T`\>

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.SharedObservableContainer.Type.md), `T`, `T`\>

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

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.SharedObservableContainer.Type.md), `T`, `T`\>

___

### throwIfEmpty

▸ **throwIfEmpty**<`T`\>(`factory`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.SharedObservableContainer.Type.md), `T`, `T`\>

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

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.SharedObservableContainer.Type.md), `T`, `T`\>

___

### withCurrentTime

▸ **withCurrentTime**<`T`, `TOut`\>(`selector`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.SharedObservableContainer.Type.md), `T`, `TOut`\>

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

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.SharedObservableContainer.Type.md), `T`, `TOut`\>

___

### withLatestFrom

▸ **withLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.SharedObservableContainer.Type.md), `TA`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`TB`\> |
| `selector` | [`Function2`](functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`Type`](../interfaces/containers.SharedObservableContainer.Type.md), `TA`, `T`\>

___

## Other Functions

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

## Transform Functions

### firstAsync

▸ **firstAsync**<`T`\>(): [`Function1`](functions.md#function1)<[`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

▸ **firstAsync**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<[`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

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

[`Function1`](functions.md#function1)<[`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

___

### lastAsync

▸ **lastAsync**<`T`\>(): [`Function1`](functions.md#function1)<[`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

▸ **lastAsync**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<[`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

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

[`Function1`](functions.md#function1)<[`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](functions.md#optional)<`T`\>\>\>

___

### toEventSource

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

### toObservable

▸ **toObservable**<`T`\>(): [`Function1`](functions.md#function1)<[`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`T`\>, [`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`T`\>, [`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>\>
