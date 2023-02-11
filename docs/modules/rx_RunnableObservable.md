[Reactive-JS](../README.md) / rx/RunnableObservable

# Module: rx/RunnableObservable

## Table of contents

### Functions

- [buffer](rx_RunnableObservable.md#buffer)
- [catchError](rx_RunnableObservable.md#catcherror)
- [combineLatest](rx_RunnableObservable.md#combinelatest)
- [concat](rx_RunnableObservable.md#concat)
- [concatAll](rx_RunnableObservable.md#concatall)
- [decodeWithCharset](rx_RunnableObservable.md#decodewithcharset)
- [defer](rx_RunnableObservable.md#defer)
- [distinctUntilChanged](rx_RunnableObservable.md#distinctuntilchanged)
- [empty](rx_RunnableObservable.md#empty)
- [everySatisfy](rx_RunnableObservable.md#everysatisfy)
- [exhaust](rx_RunnableObservable.md#exhaust)
- [forEach](rx_RunnableObservable.md#foreach)
- [fromArray](rx_RunnableObservable.md#fromarray)
- [generate](rx_RunnableObservable.md#generate)
- [keep](rx_RunnableObservable.md#keep)
- [map](rx_RunnableObservable.md#map)
- [merge](rx_RunnableObservable.md#merge)
- [mergeAll](rx_RunnableObservable.md#mergeall)
- [pairwise](rx_RunnableObservable.md#pairwise)
- [reduce](rx_RunnableObservable.md#reduce)
- [retry](rx_RunnableObservable.md#retry)
- [scan](rx_RunnableObservable.md#scan)
- [scanAsync](rx_RunnableObservable.md#scanasync)
- [skipFirst](rx_RunnableObservable.md#skipfirst)
- [someSatisfy](rx_RunnableObservable.md#somesatisfy)
- [switchAll](rx_RunnableObservable.md#switchall)
- [takeFirst](rx_RunnableObservable.md#takefirst)
- [takeLast](rx_RunnableObservable.md#takelast)
- [takeUntil](rx_RunnableObservable.md#takeuntil)
- [takeWhile](rx_RunnableObservable.md#takewhile)
- [throttle](rx_RunnableObservable.md#throttle)
- [throwIfEmpty](rx_RunnableObservable.md#throwifempty)
- [timeout](rx_RunnableObservable.md#timeout)
- [toFlowable](rx_RunnableObservable.md#toflowable)
- [toPromise](rx_RunnableObservable.md#topromise)
- [toReadonlyArray](rx_RunnableObservable.md#toreadonlyarray)
- [toRunnable](rx_RunnableObservable.md#torunnable)
- [withLatestFrom](rx_RunnableObservable.md#withlatestfrom)
- [zip](rx_RunnableObservable.md#zip)
- [zipLatest](rx_RunnableObservable.md#ziplatest)
- [zipWithLatestFrom](rx_RunnableObservable.md#zipwithlatestfrom)

## Functions

### buffer

▸ **buffer**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, readonly `T`[]\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, readonly `T`[]\>

___

### catchError

▸ **catchError**<`T`\>(`onError`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `onError` | [`Function1`](functions.md#function1)<`unknown`, `void` \| [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>\> |
| `options?` | `undefined` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

___

### combineLatest

▸ **combineLatest**<`TA`, `TB`\>(`a`, `b`): [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TA`\> |
| `b` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TB`\> |

#### Returns

[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<readonly [`TA`, `TB`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TA`\> |
| `b` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TB`\> |
| `c` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TC`\> |

#### Returns

[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TA`\> |
| `b` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TB`\> |
| `c` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TC`\> |
| `d` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TD`\> |

#### Returns

[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TA`\> |
| `b` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TB`\> |
| `c` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TC`\> |
| `d` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TD`\> |
| `e` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TE`\> |

#### Returns

[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TA`\> |
| `b` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TB`\> |
| `c` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TC`\> |
| `d` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TD`\> |
| `e` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TE`\> |
| `f` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TF`\> |

#### Returns

[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TA`\> |
| `b` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TB`\> |
| `c` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TC`\> |
| `d` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TD`\> |
| `e` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TE`\> |
| `f` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TF`\> |
| `g` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TG`\> |

#### Returns

[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TA`\> |
| `b` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TB`\> |
| `c` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TC`\> |
| `d` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TD`\> |
| `e` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TE`\> |
| `f` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TF`\> |
| `g` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TG`\> |
| `h` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TH`\> |

#### Returns

[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TA`\> |
| `b` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TB`\> |
| `c` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TC`\> |
| `d` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TD`\> |
| `e` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TE`\> |
| `f` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TF`\> |
| `g` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TG`\> |
| `h` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TH`\> |
| `i` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TI`\> |

#### Returns

[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

### concat

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\> |
| `snd` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\> |
| `...tail` | readonly [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>[] |

#### Returns

[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>

___

### concatAll

▸ **concatAll**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>, `T`\>

___

### decodeWithCharset

▸ **decodeWithCharset**(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `ArrayBuffer`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.charset?` | `string` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `ArrayBuffer`, `string`\>

___

### defer

▸ **defer**<`T`\>(`factory`, `options?`): [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](functions.md#factory)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>\> |
| `options?` | `undefined` |

#### Returns

[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>

___

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

___

### empty

▸ **empty**<`T`\>(`options?`): [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>

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

[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>

___

### everySatisfy

▸ **everySatisfy**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |
| `options?` | `undefined` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `boolean`\>

___

### exhaust

▸ **exhaust**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>, `T`\>

___

### forEach

▸ **forEach**<`T`\>(`effect`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect1`](functions.md#sideeffect1)<`T`\> |
| `options?` | `undefined` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

___

### fromArray

▸ **fromArray**<`T`\>(`options?`): [`Function1`](functions.md#function1)<readonly `T`[], [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | { `delay?`: `number` ; `delayStart?`: `boolean`  } & { `count?`: `number` ; `start?`: `number`  } |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>\>

___

### generate

▸ **generate**<`T`\>(`generator`, `initialValue`, `options?`): [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>

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

[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>

___

### keep

▸ **keep**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |
| `options?` | `undefined` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

___

### map

▸ **map**<`TA`, `TB`\>(`mapper`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapper` | [`Function1`](functions.md#function1)<`TA`, `TB`\> |
| `options?` | `undefined` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `TA`, `TB`\>

___

### merge

▸ **merge**<`T`\>(`fst`, `snd`, `...tail`): [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\> |
| `snd` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\> |
| `...tail` | readonly [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>[] |

#### Returns

[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>

___

### mergeAll

▸ **mergeAll**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.maxBufferSize?` | `number` |
| `options.maxConcurrency?` | `number` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>, `T`\>

___

### pairwise

▸ **pairwise**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, readonly [`T`, `T`]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, readonly [`T`, `T`]\>

___

### reduce

▸ **reduce**<`T`, `TAcc`\>(`reducer`, `initialValue`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `TAcc`\>

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
| `options?` | `undefined` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `TAcc`\>

___

### retry

▸ **retry**<`T`\>(): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

Returns an `ObservableLike` that mirrors the source, re-subscribing
if the source completes with an error.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

▸ **retry**<`T`\>(`predicate`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `TAcc`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Reducer`](functions.md#reducer)<`T`, `TAcc`\> |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc`\> |
| `options?` | `undefined` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `TAcc`\>

___

### scanAsync

▸ **scanAsync**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `TAcc`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`AsyncReducer`](rx.md#asyncreducer)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `TAcc`\> |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `TAcc`\>

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

___

### someSatisfy

▸ **someSatisfy**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |
| `options?` | `undefined` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `boolean`\>

___

### switchAll

▸ **switchAll**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>, `T`\>

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

___

### takeUntil

▸ **takeUntil**<`T`\>(`notifier`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `notifier` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

___

### throttle

▸ **throttle**<`T`\>(`duration`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

___

### throwIfEmpty

▸ **throwIfEmpty**<`T`\>(`factory`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

___

### timeout

▸ **timeout**<`T`\>(`duration`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `duration` | `number` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

▸ **timeout**<`T_1`\>(`duration`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T_1`, `T_1`\>

#### Type parameters

| Name |
| :------ |
| `T_1` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `duration` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T_1`, `T_1`\>

___

### toFlowable

▸ **toFlowable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>, [`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>, [`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`T`\>\>

___

### toPromise

▸ **toPromise**<`T`\>(`ctx`): [`Function1`](functions.md#function1)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>, [`PromiseableLike`](../interfaces/containers.PromiseableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`SchedulerLike`](../interfaces/scheduling.SchedulerLike.md) |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>, [`PromiseableLike`](../interfaces/containers.PromiseableLike.md)<`T`\>\>

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>, [`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>, [`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>\>

___

### toRunnable

▸ **toRunnable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>, [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.schedulerFactory?` | [`Factory`](functions.md#factory)<[`VirtualTimeSchedulerLike`](../interfaces/scheduling.VirtualTimeSchedulerLike.md)\> |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`T`\>, [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>\>

___

### withLatestFrom

▸ **withLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `TA`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TB`\> |
| `selector` | [`Function2`](functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `TA`, `T`\>

___

### zip

▸ **zip**<`TA`, `TB`\>(`a`, `b`): [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TA`\> |
| `b` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TB`\> |

#### Returns

[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<readonly [`TA`, `TB`]\>

▸ **zip**<`TA_1`, `TB_1`, `TC`\>(`a`, `b`, `c`): [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<readonly [`TA_1`, `TB_1`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA_1` |
| `TB_1` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TA_1`\> |
| `b` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TB_1`\> |
| `c` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TC`\> |

#### Returns

[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<readonly [`TA_1`, `TB_1`, `TC`]\>

▸ **zip**<`TA_2`, `TB_2`, `TC_1`, `TD`\>(`a`, `b`, `c`, `d`): [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<readonly [`TA_2`, `TB_2`, `TC_1`, `TD`]\>

#### Type parameters

| Name |
| :------ |
| `TA_2` |
| `TB_2` |
| `TC_1` |
| `TD` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TA_2`\> |
| `b` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TB_2`\> |
| `c` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TC_1`\> |
| `d` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TD`\> |

#### Returns

[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<readonly [`TA_2`, `TB_2`, `TC_1`, `TD`]\>

▸ **zip**<`TA_3`, `TB_3`, `TC_2`, `TD_1`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<readonly [`TA_3`, `TB_3`, `TC_2`, `TD_1`, `TE`]\>

#### Type parameters

| Name |
| :------ |
| `TA_3` |
| `TB_3` |
| `TC_2` |
| `TD_1` |
| `TE` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TA_3`\> |
| `b` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TB_3`\> |
| `c` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TC_2`\> |
| `d` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TD_1`\> |
| `e` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TE`\> |

#### Returns

[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<readonly [`TA_3`, `TB_3`, `TC_2`, `TD_1`, `TE`]\>

▸ **zip**<`TA_4`, `TB_4`, `TC_3`, `TD_2`, `TE_1`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<readonly [`TA_4`, `TB_4`, `TC_3`, `TD_2`, `TE_1`, `TF`]\>

#### Type parameters

| Name |
| :------ |
| `TA_4` |
| `TB_4` |
| `TC_3` |
| `TD_2` |
| `TE_1` |
| `TF` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TA_4`\> |
| `b` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TB_4`\> |
| `c` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TC_3`\> |
| `d` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TD_2`\> |
| `e` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TE_1`\> |
| `f` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TF`\> |

#### Returns

[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<readonly [`TA_4`, `TB_4`, `TC_3`, `TD_2`, `TE_1`, `TF`]\>

▸ **zip**<`TA_5`, `TB_5`, `TC_4`, `TD_3`, `TE_2`, `TF_1`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<readonly [`TA_5`, `TB_5`, `TC_4`, `TD_3`, `TE_2`, `TF_1`, `TG`]\>

#### Type parameters

| Name |
| :------ |
| `TA_5` |
| `TB_5` |
| `TC_4` |
| `TD_3` |
| `TE_2` |
| `TF_1` |
| `TG` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TA_5`\> |
| `b` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TB_5`\> |
| `c` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TC_4`\> |
| `d` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TD_3`\> |
| `e` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TE_2`\> |
| `f` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TF_1`\> |
| `g` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TG`\> |

#### Returns

[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<readonly [`TA_5`, `TB_5`, `TC_4`, `TD_3`, `TE_2`, `TF_1`, `TG`]\>

▸ **zip**<`TA_6`, `TB_6`, `TC_5`, `TD_4`, `TE_3`, `TF_2`, `TG_1`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<readonly [`TA_6`, `TB_6`, `TC_5`, `TD_4`, `TE_3`, `TF_2`, `TG_1`, `TH`]\>

#### Type parameters

| Name |
| :------ |
| `TA_6` |
| `TB_6` |
| `TC_5` |
| `TD_4` |
| `TE_3` |
| `TF_2` |
| `TG_1` |
| `TH` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TA_6`\> |
| `b` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TB_6`\> |
| `c` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TC_5`\> |
| `d` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TD_4`\> |
| `e` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TE_3`\> |
| `f` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TF_2`\> |
| `g` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TG_1`\> |
| `h` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TH`\> |

#### Returns

[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<readonly [`TA_6`, `TB_6`, `TC_5`, `TD_4`, `TE_3`, `TF_2`, `TG_1`, `TH`]\>

▸ **zip**<`TA_7`, `TB_7`, `TC_6`, `TD_5`, `TE_4`, `TF_3`, `TG_2`, `TH_1`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<readonly [`TA_7`, `TB_7`, `TC_6`, `TD_5`, `TE_4`, `TF_3`, `TG_2`, `TH_1`, `TI`]\>

#### Type parameters

| Name |
| :------ |
| `TA_7` |
| `TB_7` |
| `TC_6` |
| `TD_5` |
| `TE_4` |
| `TF_3` |
| `TG_2` |
| `TH_1` |
| `TI` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TA_7`\> |
| `b` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TB_7`\> |
| `c` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TC_6`\> |
| `d` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TD_5`\> |
| `e` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TE_4`\> |
| `f` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TF_3`\> |
| `g` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TG_2`\> |
| `h` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TH_1`\> |
| `i` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TI`\> |

#### Returns

[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<readonly [`TA_7`, `TB_7`, `TC_6`, `TD_5`, `TE_4`, `TF_3`, `TG_2`, `TH_1`, `TI`]\>

___

### zipLatest

▸ **zipLatest**<`TA`, `TB`\>(`a`, `b`): [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TA`\> |
| `b` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TB`\> |

#### Returns

[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<readonly [`TA`, `TB`]\>

▸ **zipLatest**<`TA_1`, `TB_1`, `TC`\>(`a`, `b`, `c`): [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<readonly [`TA_1`, `TB_1`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA_1` |
| `TB_1` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TA_1`\> |
| `b` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TB_1`\> |
| `c` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TC`\> |

#### Returns

[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<readonly [`TA_1`, `TB_1`, `TC`]\>

▸ **zipLatest**<`TA_2`, `TB_2`, `TC_1`, `TD`\>(`a`, `b`, `c`, `d`): [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<readonly [`TA_2`, `TB_2`, `TC_1`, `TD`]\>

#### Type parameters

| Name |
| :------ |
| `TA_2` |
| `TB_2` |
| `TC_1` |
| `TD` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TA_2`\> |
| `b` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TB_2`\> |
| `c` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TC_1`\> |
| `d` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TD`\> |

#### Returns

[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<readonly [`TA_2`, `TB_2`, `TC_1`, `TD`]\>

▸ **zipLatest**<`TA_3`, `TB_3`, `TC_2`, `TD_1`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<readonly [`TA_3`, `TB_3`, `TC_2`, `TD_1`, `TE`]\>

#### Type parameters

| Name |
| :------ |
| `TA_3` |
| `TB_3` |
| `TC_2` |
| `TD_1` |
| `TE` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TA_3`\> |
| `b` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TB_3`\> |
| `c` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TC_2`\> |
| `d` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TD_1`\> |
| `e` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TE`\> |

#### Returns

[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<readonly [`TA_3`, `TB_3`, `TC_2`, `TD_1`, `TE`]\>

▸ **zipLatest**<`TA_4`, `TB_4`, `TC_3`, `TD_2`, `TE_1`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<readonly [`TA_4`, `TB_4`, `TC_3`, `TD_2`, `TE_1`, `TF`]\>

#### Type parameters

| Name |
| :------ |
| `TA_4` |
| `TB_4` |
| `TC_3` |
| `TD_2` |
| `TE_1` |
| `TF` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TA_4`\> |
| `b` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TB_4`\> |
| `c` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TC_3`\> |
| `d` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TD_2`\> |
| `e` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TE_1`\> |
| `f` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TF`\> |

#### Returns

[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<readonly [`TA_4`, `TB_4`, `TC_3`, `TD_2`, `TE_1`, `TF`]\>

▸ **zipLatest**<`TA_5`, `TB_5`, `TC_4`, `TD_3`, `TE_2`, `TF_1`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<readonly [`TA_5`, `TB_5`, `TC_4`, `TD_3`, `TE_2`, `TF_1`, `TG`]\>

#### Type parameters

| Name |
| :------ |
| `TA_5` |
| `TB_5` |
| `TC_4` |
| `TD_3` |
| `TE_2` |
| `TF_1` |
| `TG` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TA_5`\> |
| `b` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TB_5`\> |
| `c` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TC_4`\> |
| `d` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TD_3`\> |
| `e` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TE_2`\> |
| `f` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TF_1`\> |
| `g` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TG`\> |

#### Returns

[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<readonly [`TA_5`, `TB_5`, `TC_4`, `TD_3`, `TE_2`, `TF_1`, `TG`]\>

▸ **zipLatest**<`TA_6`, `TB_6`, `TC_5`, `TD_4`, `TE_3`, `TF_2`, `TG_1`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<readonly [`TA_6`, `TB_6`, `TC_5`, `TD_4`, `TE_3`, `TF_2`, `TG_1`, `TH`]\>

#### Type parameters

| Name |
| :------ |
| `TA_6` |
| `TB_6` |
| `TC_5` |
| `TD_4` |
| `TE_3` |
| `TF_2` |
| `TG_1` |
| `TH` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TA_6`\> |
| `b` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TB_6`\> |
| `c` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TC_5`\> |
| `d` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TD_4`\> |
| `e` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TE_3`\> |
| `f` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TF_2`\> |
| `g` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TG_1`\> |
| `h` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TH`\> |

#### Returns

[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<readonly [`TA_6`, `TB_6`, `TC_5`, `TD_4`, `TE_3`, `TF_2`, `TG_1`, `TH`]\>

▸ **zipLatest**<`TA_7`, `TB_7`, `TC_6`, `TD_5`, `TE_4`, `TF_3`, `TG_2`, `TH_1`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<readonly [`TA_7`, `TB_7`, `TC_6`, `TD_5`, `TE_4`, `TF_3`, `TG_2`, `TH_1`, `TI`]\>

#### Type parameters

| Name |
| :------ |
| `TA_7` |
| `TB_7` |
| `TC_6` |
| `TD_5` |
| `TE_4` |
| `TF_3` |
| `TG_2` |
| `TH_1` |
| `TI` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TA_7`\> |
| `b` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TB_7`\> |
| `c` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TC_6`\> |
| `d` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TD_5`\> |
| `e` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TE_4`\> |
| `f` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TF_3`\> |
| `g` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TG_2`\> |
| `h` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TH_1`\> |
| `i` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TI`\> |

#### Returns

[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<readonly [`TA_7`, `TB_7`, `TC_6`, `TD_5`, `TE_4`, `TF_3`, `TG_2`, `TH_1`, `TI`]\>

___

### zipWithLatestFrom

▸ **zipWithLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `TA`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`TB`\> |
| `selector` | [`Function2`](functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `TA`, `T`\>
