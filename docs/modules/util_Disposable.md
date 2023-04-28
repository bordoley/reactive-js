[Reactive-JS](../README.md) / util/Disposable

# Module: util/Disposable

## Table of contents

### Variables

- [disposed](util_Disposable.md#disposed)

### Functions

- [add](util_Disposable.md#add)
- [addTo](util_Disposable.md#addto)
- [bindTo](util_Disposable.md#bindto)
- [create](util_Disposable.md#create)
- [onComplete](util_Disposable.md#oncomplete)
- [onDisposed](util_Disposable.md#ondisposed)
- [onError](util_Disposable.md#onerror)
- [toAbortSignal](util_Disposable.md#toabortsignal)
- [toErrorHandler](util_Disposable.md#toerrorhandler)
- [toObservable](util_Disposable.md#toobservable)
- [usingAsync](util_Disposable.md#usingasync)

## Variables

### disposed

• `Const` **disposed**: [`DisposableLike`](../interfaces/util.DisposableLike.md)

## Functions

### add

▸ **add**<`T`\>(`child`, `options?`): (`parent`: `T`) => `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`DisposableLike`](../interfaces/util.DisposableLike.md) |
| `options?` | `Object` |
| `options.ignoreChildErrors?` | `boolean` |

#### Returns

`fn`

▸ (`parent`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | `T` |

##### Returns

`T`

___

### addTo

▸ **addTo**<`T`\>(`parent`, `options?`): [`Updater`](functions.md#updater)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`DisposableLike`](../interfaces/util.DisposableLike.md) |
| `options?` | `Object` |
| `options.ignoreChildErrors?` | `boolean` |

#### Returns

[`Updater`](functions.md#updater)<`T`\>

___

### bindTo

▸ **bindTo**<`T`\>(`child`): [`Updater`](functions.md#updater)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`DisposableLike`](../interfaces/util.DisposableLike.md) |

#### Returns

[`Updater`](functions.md#updater)<`T`\>

___

### create

▸ **create**(): [`DisposableLike`](../interfaces/util.DisposableLike.md)

#### Returns

[`DisposableLike`](../interfaces/util.DisposableLike.md)

___

### onComplete

▸ **onComplete**<`T`\>(`teardown`): [`Updater`](functions.md#updater)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `teardown` | [`SideEffect`](functions.md#sideeffect) |

#### Returns

[`Updater`](functions.md#updater)<`T`\>

___

### onDisposed

▸ **onDisposed**<`T`\>(`teardown`): [`Updater`](functions.md#updater)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `teardown` | [`SideEffect1`](functions.md#sideeffect1)<[`Optional`](functions.md#optional)<`Error`\>\> |

#### Returns

[`Updater`](functions.md#updater)<`T`\>

___

### onError

▸ **onError**<`T`\>(`teardown`): [`Updater`](functions.md#updater)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `teardown` | [`SideEffect1`](functions.md#sideeffect1)<`Error`\> |

#### Returns

[`Updater`](functions.md#updater)<`T`\>

___

### toAbortSignal

▸ **toAbortSignal**(`disposable`): `AbortSignal`

#### Parameters

| Name | Type |
| :------ | :------ |
| `disposable` | [`DisposableLike`](../interfaces/util.DisposableLike.md) |

#### Returns

`AbortSignal`

___

### toErrorHandler

▸ **toErrorHandler**(`disposable`): [`SideEffect1`](functions.md#sideeffect1)<`unknown`\>

Returns a function that disposes `disposable` with an error wrapping the provided `cause`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `disposable` | [`DisposableLike`](../interfaces/util.DisposableLike.md) |

#### Returns

[`SideEffect1`](functions.md#sideeffect1)<`unknown`\>

___

### toObservable

▸ **toObservable**<`T`\>(): [`Function1`](functions.md#function1)<[`DisposableLike`](../interfaces/util.DisposableLike.md), [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`DisposableLike`](../interfaces/util.DisposableLike.md), [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

___

### usingAsync

▸ **usingAsync**<`TDisposable`, `TResult`\>(`factoryOrDisposable`): [`Function1`](functions.md#function1)<[`Function1`](functions.md#function1)<`TDisposable`, `Promise`<`TResult`\>\>, `Promise`<`TResult`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposable` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |
| `TResult` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factoryOrDisposable` | `TDisposable` \| [`Factory`](functions.md#factory)<`TDisposable`\> |

#### Returns

[`Function1`](functions.md#function1)<[`Function1`](functions.md#function1)<`TDisposable`, `Promise`<`TResult`\>\>, `Promise`<`TResult`\>\>

▸ **usingAsync**<`TDisposableA`, `TDisposableB`, `TResult_1`\>(`factoryOrDisposableA`, `factoryOrDisposableB`): [`Function1`](functions.md#function1)<[`Function2`](functions.md#function2)<`TDisposableA`, `TDisposableB`, `Promise`<`TResult_1`\>\>, `Promise`<`TResult_1`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposableA` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |
| `TDisposableB` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |
| `TResult_1` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factoryOrDisposableA` | `TDisposableA` \| [`Factory`](functions.md#factory)<`TDisposableA`\> |
| `factoryOrDisposableB` | `TDisposableB` \| [`Factory`](functions.md#factory)<`TDisposableB`\> |

#### Returns

[`Function1`](functions.md#function1)<[`Function2`](functions.md#function2)<`TDisposableA`, `TDisposableB`, `Promise`<`TResult_1`\>\>, `Promise`<`TResult_1`\>\>

▸ **usingAsync**<`TDisposableA_1`, `TDisposableB_1`, `TDisposableC`, `TResult_2`\>(`factoryOrDisposableA`, `factoryOrDisposableB`, `factoryOrDisposableC`): [`Function1`](functions.md#function1)<[`Function3`](functions.md#function3)<`TDisposableA_1`, `TDisposableB_1`, `TDisposableC`, `Promise`<`TResult_2`\>\>, `Promise`<`TResult_2`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposableA_1` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |
| `TDisposableB_1` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |
| `TDisposableC` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |
| `TResult_2` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factoryOrDisposableA` | `TDisposableA_1` \| [`Factory`](functions.md#factory)<`TDisposableA_1`\> |
| `factoryOrDisposableB` | `TDisposableB_1` \| [`Factory`](functions.md#factory)<`TDisposableB_1`\> |
| `factoryOrDisposableC` | `TDisposableC` \| [`Factory`](functions.md#factory)<`TDisposableC`\> |

#### Returns

[`Function1`](functions.md#function1)<[`Function3`](functions.md#function3)<`TDisposableA_1`, `TDisposableB_1`, `TDisposableC`, `Promise`<`TResult_2`\>\>, `Promise`<`TResult_2`\>\>
