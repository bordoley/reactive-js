[Reactive-JS](../README.md) / [utils/Disposable](../modules/utils_Disposable.md) / DisposableModule

# Interface: DisposableModule

[utils/Disposable](../modules/utils_Disposable.md).DisposableModule

## Table of contents

### Properties

- [disposed](utils_Disposable.DisposableModule.md#disposed)

### Methods

- [add](utils_Disposable.DisposableModule.md#add)
- [addTo](utils_Disposable.DisposableModule.md#addto)
- [bindTo](utils_Disposable.DisposableModule.md#bindto)
- [create](utils_Disposable.DisposableModule.md#create)
- [onComplete](utils_Disposable.DisposableModule.md#oncomplete)
- [onDisposed](utils_Disposable.DisposableModule.md#ondisposed)
- [onError](utils_Disposable.DisposableModule.md#onerror)
- [raiseIfDisposedWithError](utils_Disposable.DisposableModule.md#raiseifdisposedwitherror)
- [toAbortSignal](utils_Disposable.DisposableModule.md#toabortsignal)
- [toErrorHandler](utils_Disposable.DisposableModule.md#toerrorhandler)
- [using](utils_Disposable.DisposableModule.md#using)
- [usingAsync](utils_Disposable.DisposableModule.md#usingasync)
- [usingAsyncLazy](utils_Disposable.DisposableModule.md#usingasynclazy)
- [usingLazy](utils_Disposable.DisposableModule.md#usinglazy)

## Properties

### disposed

• `Readonly` **disposed**: [`DisposableLike`](utils.DisposableLike.md)

## Methods

### add

▸ **add**<`TDisposable`\>(`child`, `options?`): [`Updater`](../modules/functions.md#updater)<`TDisposable`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposable` | extends [`DisposableLike`](utils.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`DisposableLike`](utils.DisposableLike.md) |
| `options?` | `Object` |
| `options.ignoreChildErrors?` | `boolean` |

#### Returns

[`Updater`](../modules/functions.md#updater)<`TDisposable`\>

___

### addTo

▸ **addTo**<`TDisposable`\>(`parent`, `options?`): [`Updater`](../modules/functions.md#updater)<`TDisposable`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposable` | extends [`DisposableLike`](utils.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`DisposableLike`](utils.DisposableLike.md) |
| `options?` | `Object` |
| `options.ignoreChildErrors?` | `boolean` |

#### Returns

[`Updater`](../modules/functions.md#updater)<`TDisposable`\>

___

### bindTo

▸ **bindTo**<`TDisposable`\>(`child`): [`Updater`](../modules/functions.md#updater)<`TDisposable`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposable` | extends [`DisposableLike`](utils.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`DisposableLike`](utils.DisposableLike.md) |

#### Returns

[`Updater`](../modules/functions.md#updater)<`TDisposable`\>

___

### create

▸ **create**(): [`DisposableLike`](utils.DisposableLike.md)

#### Returns

[`DisposableLike`](utils.DisposableLike.md)

___

### onComplete

▸ **onComplete**<`TDisposable`\>(`teardown`): [`Updater`](../modules/functions.md#updater)<`TDisposable`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposable` | extends [`DisposableLike`](utils.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `teardown` | [`SideEffect`](../modules/functions.md#sideeffect) |

#### Returns

[`Updater`](../modules/functions.md#updater)<`TDisposable`\>

___

### onDisposed

▸ **onDisposed**<`TDisposable`\>(`teardown`): [`Updater`](../modules/functions.md#updater)<`TDisposable`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposable` | extends [`DisposableLike`](utils.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `teardown` | [`SideEffect1`](../modules/functions.md#sideeffect1)<[`Optional`](../modules/functions.md#optional)<`Error`\>\> |

#### Returns

[`Updater`](../modules/functions.md#updater)<`TDisposable`\>

___

### onError

▸ **onError**<`TDisposable`\>(`teardown`): [`Updater`](../modules/functions.md#updater)<`TDisposable`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposable` | extends [`DisposableLike`](utils.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `teardown` | [`SideEffect1`](../modules/functions.md#sideeffect1)<`Error`\> |

#### Returns

[`Updater`](../modules/functions.md#updater)<`TDisposable`\>

___

### raiseIfDisposedWithError

▸ **raiseIfDisposedWithError**(`disposable`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `disposable` | [`DisposableLike`](utils.DisposableLike.md) |

#### Returns

`void`

___

### toAbortSignal

▸ **toAbortSignal**(`disposable`): `AbortSignal`

#### Parameters

| Name | Type |
| :------ | :------ |
| `disposable` | [`DisposableLike`](utils.DisposableLike.md) |

#### Returns

`AbortSignal`

___

### toErrorHandler

▸ **toErrorHandler**(`disposable`): [`SideEffect1`](../modules/functions.md#sideeffect1)<`unknown`\>

Returns a function that disposes `disposable` with an error wrapping the provided `cause`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `disposable` | [`DisposableLike`](utils.DisposableLike.md) |

#### Returns

[`SideEffect1`](../modules/functions.md#sideeffect1)<`unknown`\>

___

### using

▸ **using**<`TDisposable`, `TResult`\>(`factoryOrDisposable`): [`Function1`](../modules/functions.md#function1)<[`Function1`](../modules/functions.md#function1)<`TDisposable`, `TResult`\>, `TResult`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposable` | extends [`DisposableLike`](utils.DisposableLike.md) |
| `TResult` | `void` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factoryOrDisposable` | `TDisposable` \| [`Factory`](../modules/functions.md#factory)<`TDisposable`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Function1`](../modules/functions.md#function1)<`TDisposable`, `TResult`\>, `TResult`\>

▸ **using**<`TDisposableA`, `TDisposableB`, `TResult`\>(`factoryOrDisposableA`, `factoryOrDisposableB`): [`Function1`](../modules/functions.md#function1)<[`Function2`](../modules/functions.md#function2)<`TDisposableA`, `TDisposableB`, `TResult`\>, `TResult`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposableA` | extends [`DisposableLike`](utils.DisposableLike.md) |
| `TDisposableB` | extends [`DisposableLike`](utils.DisposableLike.md) |
| `TResult` | `void` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factoryOrDisposableA` | `TDisposableA` \| [`Factory`](../modules/functions.md#factory)<`TDisposableA`\> |
| `factoryOrDisposableB` | `TDisposableB` \| [`Factory`](../modules/functions.md#factory)<`TDisposableB`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Function2`](../modules/functions.md#function2)<`TDisposableA`, `TDisposableB`, `TResult`\>, `TResult`\>

▸ **using**<`TDisposableA`, `TDisposableB`, `TDisposableC`, `TResult`\>(`factoryOrDisposableA`, `factoryOrDisposableB`, `factoryOrDisposableC`): [`Function1`](../modules/functions.md#function1)<[`Function3`](../modules/functions.md#function3)<`TDisposableA`, `TDisposableB`, `TDisposableC`, `TResult`\>, `TResult`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposableA` | extends [`DisposableLike`](utils.DisposableLike.md) |
| `TDisposableB` | extends [`DisposableLike`](utils.DisposableLike.md) |
| `TDisposableC` | extends [`DisposableLike`](utils.DisposableLike.md) |
| `TResult` | `void` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factoryOrDisposableA` | `TDisposableA` \| [`Factory`](../modules/functions.md#factory)<`TDisposableA`\> |
| `factoryOrDisposableB` | `TDisposableB` \| [`Factory`](../modules/functions.md#factory)<`TDisposableB`\> |
| `factoryOrDisposableC` | `TDisposableC` \| [`Factory`](../modules/functions.md#factory)<`TDisposableC`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Function3`](../modules/functions.md#function3)<`TDisposableA`, `TDisposableB`, `TDisposableC`, `TResult`\>, `TResult`\>

___

### usingAsync

▸ **usingAsync**<`TDisposable`, `TResult`\>(`factoryOrDisposable`): [`Function1`](../modules/functions.md#function1)<[`Function1`](../modules/functions.md#function1)<`TDisposable`, `Promise`<`TResult`\>\>, `Promise`<`TResult`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposable` | extends [`DisposableLike`](utils.DisposableLike.md) |
| `TResult` | `void` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factoryOrDisposable` | `TDisposable` \| [`Factory`](../modules/functions.md#factory)<`TDisposable`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Function1`](../modules/functions.md#function1)<`TDisposable`, `Promise`<`TResult`\>\>, `Promise`<`TResult`\>\>

▸ **usingAsync**<`TDisposableA`, `TDisposableB`, `TResult`\>(`factoryOrDisposableA`, `factoryOrDisposableB`): [`Function1`](../modules/functions.md#function1)<[`Function2`](../modules/functions.md#function2)<`TDisposableA`, `TDisposableB`, `Promise`<`TResult`\>\>, `Promise`<`TResult`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposableA` | extends [`DisposableLike`](utils.DisposableLike.md) |
| `TDisposableB` | extends [`DisposableLike`](utils.DisposableLike.md) |
| `TResult` | `void` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factoryOrDisposableA` | `TDisposableA` \| [`Factory`](../modules/functions.md#factory)<`TDisposableA`\> |
| `factoryOrDisposableB` | `TDisposableB` \| [`Factory`](../modules/functions.md#factory)<`TDisposableB`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Function2`](../modules/functions.md#function2)<`TDisposableA`, `TDisposableB`, `Promise`<`TResult`\>\>, `Promise`<`TResult`\>\>

▸ **usingAsync**<`TDisposableA`, `TDisposableB`, `TDisposableC`, `TResult`\>(`factoryOrDisposableA`, `factoryOrDisposableB`, `factoryOrDisposableC`): [`Function1`](../modules/functions.md#function1)<[`Function3`](../modules/functions.md#function3)<`TDisposableA`, `TDisposableB`, `TDisposableC`, `Promise`<`TResult`\>\>, `Promise`<`TResult`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposableA` | extends [`DisposableLike`](utils.DisposableLike.md) |
| `TDisposableB` | extends [`DisposableLike`](utils.DisposableLike.md) |
| `TDisposableC` | extends [`DisposableLike`](utils.DisposableLike.md) |
| `TResult` | `void` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factoryOrDisposableA` | `TDisposableA` \| [`Factory`](../modules/functions.md#factory)<`TDisposableA`\> |
| `factoryOrDisposableB` | `TDisposableB` \| [`Factory`](../modules/functions.md#factory)<`TDisposableB`\> |
| `factoryOrDisposableC` | `TDisposableC` \| [`Factory`](../modules/functions.md#factory)<`TDisposableC`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Function3`](../modules/functions.md#function3)<`TDisposableA`, `TDisposableB`, `TDisposableC`, `Promise`<`TResult`\>\>, `Promise`<`TResult`\>\>

___

### usingAsyncLazy

▸ **usingAsyncLazy**<`TDisposable`, `TResult`\>(`factoryOrDisposable`): [`Function1`](../modules/functions.md#function1)<[`Function1`](../modules/functions.md#function1)<`TDisposable`, `Promise`<`TResult`\>\>, [`Factory`](../modules/functions.md#factory)<`Promise`<`TResult`\>\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposable` | extends [`DisposableLike`](utils.DisposableLike.md) |
| `TResult` | `void` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factoryOrDisposable` | `TDisposable` \| [`Factory`](../modules/functions.md#factory)<`TDisposable`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Function1`](../modules/functions.md#function1)<`TDisposable`, `Promise`<`TResult`\>\>, [`Factory`](../modules/functions.md#factory)<`Promise`<`TResult`\>\>\>

▸ **usingAsyncLazy**<`TDisposableA`, `TDisposableB`, `TResult`\>(`factoryOrDisposableA`, `factoryOrDisposableB`): [`Function1`](../modules/functions.md#function1)<[`Function2`](../modules/functions.md#function2)<`TDisposableA`, `TDisposableB`, `Promise`<`TResult`\>\>, [`Factory`](../modules/functions.md#factory)<`Promise`<`TResult`\>\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposableA` | extends [`DisposableLike`](utils.DisposableLike.md) |
| `TDisposableB` | extends [`DisposableLike`](utils.DisposableLike.md) |
| `TResult` | `void` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factoryOrDisposableA` | `TDisposableA` \| [`Factory`](../modules/functions.md#factory)<`TDisposableA`\> |
| `factoryOrDisposableB` | `TDisposableB` \| [`Factory`](../modules/functions.md#factory)<`TDisposableB`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Function2`](../modules/functions.md#function2)<`TDisposableA`, `TDisposableB`, `Promise`<`TResult`\>\>, [`Factory`](../modules/functions.md#factory)<`Promise`<`TResult`\>\>\>

▸ **usingAsyncLazy**<`TDisposableA`, `TDisposableB`, `TDisposableC`, `TResult`\>(`factoryOrDisposableA`, `factoryOrDisposableB`, `factoryOrDisposableC`): [`Function1`](../modules/functions.md#function1)<[`Function3`](../modules/functions.md#function3)<`TDisposableA`, `TDisposableB`, `TDisposableC`, `Promise`<`TResult`\>\>, [`Factory`](../modules/functions.md#factory)<`Promise`<`TResult`\>\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposableA` | extends [`DisposableLike`](utils.DisposableLike.md) |
| `TDisposableB` | extends [`DisposableLike`](utils.DisposableLike.md) |
| `TDisposableC` | extends [`DisposableLike`](utils.DisposableLike.md) |
| `TResult` | `void` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factoryOrDisposableA` | `TDisposableA` \| [`Factory`](../modules/functions.md#factory)<`TDisposableA`\> |
| `factoryOrDisposableB` | `TDisposableB` \| [`Factory`](../modules/functions.md#factory)<`TDisposableB`\> |
| `factoryOrDisposableC` | `TDisposableC` \| [`Factory`](../modules/functions.md#factory)<`TDisposableC`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Function3`](../modules/functions.md#function3)<`TDisposableA`, `TDisposableB`, `TDisposableC`, `Promise`<`TResult`\>\>, [`Factory`](../modules/functions.md#factory)<`Promise`<`TResult`\>\>\>

___

### usingLazy

▸ **usingLazy**<`TDisposable`, `TResult`\>(`factoryOrDisposable`): [`Function1`](../modules/functions.md#function1)<[`Function1`](../modules/functions.md#function1)<`TDisposable`, `TResult`\>, [`Factory`](../modules/functions.md#factory)<`TResult`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposable` | extends [`DisposableLike`](utils.DisposableLike.md) |
| `TResult` | `void` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factoryOrDisposable` | `TDisposable` \| [`Factory`](../modules/functions.md#factory)<`TDisposable`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Function1`](../modules/functions.md#function1)<`TDisposable`, `TResult`\>, [`Factory`](../modules/functions.md#factory)<`TResult`\>\>

▸ **usingLazy**<`TDisposableA`, `TDisposableB`, `TResult`\>(`factoryOrDisposableA`, `factoryOrDisposableB`): [`Function1`](../modules/functions.md#function1)<[`Function2`](../modules/functions.md#function2)<`TDisposableA`, `TDisposableB`, `TResult`\>, [`Factory`](../modules/functions.md#factory)<`TResult`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposableA` | extends [`DisposableLike`](utils.DisposableLike.md) |
| `TDisposableB` | extends [`DisposableLike`](utils.DisposableLike.md) |
| `TResult` | `void` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factoryOrDisposableA` | `TDisposableA` \| [`Factory`](../modules/functions.md#factory)<`TDisposableA`\> |
| `factoryOrDisposableB` | `TDisposableB` \| [`Factory`](../modules/functions.md#factory)<`TDisposableB`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Function2`](../modules/functions.md#function2)<`TDisposableA`, `TDisposableB`, `TResult`\>, [`Factory`](../modules/functions.md#factory)<`TResult`\>\>

▸ **usingLazy**<`TDisposableA`, `TDisposableB`, `TDisposableC`, `TResult`\>(`factoryOrDisposableA`, `factoryOrDisposableB`, `factoryOrDisposableC`): [`Function1`](../modules/functions.md#function1)<[`Function3`](../modules/functions.md#function3)<`TDisposableA`, `TDisposableB`, `TDisposableC`, `TResult`\>, [`Factory`](../modules/functions.md#factory)<`TResult`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposableA` | extends [`DisposableLike`](utils.DisposableLike.md) |
| `TDisposableB` | extends [`DisposableLike`](utils.DisposableLike.md) |
| `TDisposableC` | extends [`DisposableLike`](utils.DisposableLike.md) |
| `TResult` | `void` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factoryOrDisposableA` | `TDisposableA` \| [`Factory`](../modules/functions.md#factory)<`TDisposableA`\> |
| `factoryOrDisposableB` | `TDisposableB` \| [`Factory`](../modules/functions.md#factory)<`TDisposableB`\> |
| `factoryOrDisposableC` | `TDisposableC` \| [`Factory`](../modules/functions.md#factory)<`TDisposableC`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Function3`](../modules/functions.md#function3)<`TDisposableA`, `TDisposableB`, `TDisposableC`, `TResult`\>, [`Factory`](../modules/functions.md#factory)<`TResult`\>\>
