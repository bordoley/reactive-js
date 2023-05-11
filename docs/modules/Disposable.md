[Reactive-JS](../README.md) / Disposable

# Module: Disposable

## Table of contents

### Interfaces

- [Signature](../interfaces/Disposable.Signature.md)
- [Type](../interfaces/Disposable.Type.md)

### Variables

- [disposed](Disposable.md#disposed)

### Functions

- [add](Disposable.md#add)
- [addTo](Disposable.md#addto)
- [bindTo](Disposable.md#bindto)
- [create](Disposable.md#create)
- [onComplete](Disposable.md#oncomplete)
- [onDisposed](Disposable.md#ondisposed)
- [onError](Disposable.md#onerror)
- [toAbortSignal](Disposable.md#toabortsignal)
- [toErrorHandler](Disposable.md#toerrorhandler)
- [toSharedObservable](Disposable.md#tosharedobservable)
- [usingAsync](Disposable.md#usingasync)

## Variables

### disposed

• `Const` **disposed**: [`Signature`](../interfaces/Disposable.Signature.md)[``"disposed"``]

## Functions

### add

▸ **add**<`TDisposable`\>(`child`, `options?`): [`Updater`](functions.md#updater)<`TDisposable`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposable` | extends [`DisposableLike`](../interfaces/types.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`DisposableLike`](../interfaces/types.DisposableLike.md) |
| `options?` | `Object` |
| `options.ignoreChildErrors?` | `boolean` |

#### Returns

[`Updater`](functions.md#updater)<`TDisposable`\>

___

### addTo

▸ **addTo**<`TDisposable`\>(`parent`, `options?`): [`Updater`](functions.md#updater)<`TDisposable`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposable` | extends [`DisposableLike`](../interfaces/types.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`DisposableLike`](../interfaces/types.DisposableLike.md) |
| `options?` | `Object` |
| `options.ignoreChildErrors?` | `boolean` |

#### Returns

[`Updater`](functions.md#updater)<`TDisposable`\>

___

### bindTo

▸ **bindTo**<`TDisposable`\>(`child`): [`Updater`](functions.md#updater)<`TDisposable`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposable` | extends [`DisposableLike`](../interfaces/types.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`DisposableLike`](../interfaces/types.DisposableLike.md) |

#### Returns

[`Updater`](functions.md#updater)<`TDisposable`\>

___

### create

▸ **create**(): [`DisposableLike`](../interfaces/types.DisposableLike.md)

#### Returns

[`DisposableLike`](../interfaces/types.DisposableLike.md)

___

### onComplete

▸ **onComplete**<`TDisposable`\>(`teardown`): [`Updater`](functions.md#updater)<`TDisposable`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposable` | extends [`DisposableLike`](../interfaces/types.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `teardown` | [`SideEffect`](functions.md#sideeffect) |

#### Returns

[`Updater`](functions.md#updater)<`TDisposable`\>

___

### onDisposed

▸ **onDisposed**<`TDisposable`\>(`teardown`): [`Updater`](functions.md#updater)<`TDisposable`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposable` | extends [`DisposableLike`](../interfaces/types.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `teardown` | [`SideEffect1`](functions.md#sideeffect1)<[`Optional`](functions.md#optional)<`Error`\>\> |

#### Returns

[`Updater`](functions.md#updater)<`TDisposable`\>

___

### onError

▸ **onError**<`TDisposable`\>(`teardown`): [`Updater`](functions.md#updater)<`TDisposable`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposable` | extends [`DisposableLike`](../interfaces/types.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `teardown` | [`SideEffect1`](functions.md#sideeffect1)<`Error`\> |

#### Returns

[`Updater`](functions.md#updater)<`TDisposable`\>

___

### toAbortSignal

▸ **toAbortSignal**(`disposable`): `AbortSignal`

#### Parameters

| Name | Type |
| :------ | :------ |
| `disposable` | [`DisposableLike`](../interfaces/types.DisposableLike.md) |

#### Returns

`AbortSignal`

___

### toErrorHandler

▸ **toErrorHandler**(`disposable`): [`SideEffect1`](functions.md#sideeffect1)<`unknown`\>

Returns a function that disposes `disposable` with an error wrapping the provided `cause`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `disposable` | [`DisposableLike`](../interfaces/types.DisposableLike.md) |

#### Returns

[`SideEffect1`](functions.md#sideeffect1)<`unknown`\>

___

### toSharedObservable

▸ **toSharedObservable**<`T`\>(): [`Function1`](functions.md#function1)<[`DisposableLike`](../interfaces/types.DisposableLike.md), [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`DisposableLike`](../interfaces/types.DisposableLike.md), [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`T`\>\>

___

### usingAsync

▸ **usingAsync**<`TDisposable`, `TResult`\>(`factoryOrDisposable`): [`Function1`](functions.md#function1)<[`Function1`](functions.md#function1)<`TDisposable`, `Promise`<`TResult`\>\>, `Promise`<`TResult`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposable` | extends [`DisposableLike`](../interfaces/types.DisposableLike.md) |
| `TResult` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factoryOrDisposable` | `TDisposable` \| [`Factory`](functions.md#factory)<`TDisposable`\> |

#### Returns

[`Function1`](functions.md#function1)<[`Function1`](functions.md#function1)<`TDisposable`, `Promise`<`TResult`\>\>, `Promise`<`TResult`\>\>

▸ **usingAsync**<`TDisposableA`, `TDisposableB`, `TResult`\>(`factoryOrDisposableA`, `factoryOrDisposableB`): [`Function1`](functions.md#function1)<[`Function2`](functions.md#function2)<`TDisposableA`, `TDisposableB`, `Promise`<`TResult`\>\>, `Promise`<`TResult`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposableA` | extends [`DisposableLike`](../interfaces/types.DisposableLike.md) |
| `TDisposableB` | extends [`DisposableLike`](../interfaces/types.DisposableLike.md) |
| `TResult` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factoryOrDisposableA` | `TDisposableA` \| [`Factory`](functions.md#factory)<`TDisposableA`\> |
| `factoryOrDisposableB` | `TDisposableB` \| [`Factory`](functions.md#factory)<`TDisposableB`\> |

#### Returns

[`Function1`](functions.md#function1)<[`Function2`](functions.md#function2)<`TDisposableA`, `TDisposableB`, `Promise`<`TResult`\>\>, `Promise`<`TResult`\>\>

▸ **usingAsync**<`TDisposableA`, `TDisposableB`, `TDisposableC`, `TResult`\>(`factoryOrDisposableA`, `factoryOrDisposableB`, `factoryOrDisposableC`): [`Function1`](functions.md#function1)<[`Function3`](functions.md#function3)<`TDisposableA`, `TDisposableB`, `TDisposableC`, `Promise`<`TResult`\>\>, `Promise`<`TResult`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposableA` | extends [`DisposableLike`](../interfaces/types.DisposableLike.md) |
| `TDisposableB` | extends [`DisposableLike`](../interfaces/types.DisposableLike.md) |
| `TDisposableC` | extends [`DisposableLike`](../interfaces/types.DisposableLike.md) |
| `TResult` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factoryOrDisposableA` | `TDisposableA` \| [`Factory`](functions.md#factory)<`TDisposableA`\> |
| `factoryOrDisposableB` | `TDisposableB` \| [`Factory`](functions.md#factory)<`TDisposableB`\> |
| `factoryOrDisposableC` | `TDisposableC` \| [`Factory`](functions.md#factory)<`TDisposableC`\> |

#### Returns

[`Function1`](functions.md#function1)<[`Function3`](functions.md#function3)<`TDisposableA`, `TDisposableB`, `TDisposableC`, `Promise`<`TResult`\>\>, `Promise`<`TResult`\>\>
