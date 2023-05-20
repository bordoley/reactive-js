[Reactive-JS](../README.md) / [Disposable](../modules/Disposable.md) / DisposableModule

# Interface: DisposableModule

[Disposable](../modules/Disposable.md).DisposableModule

## Hierarchy

- [`MulticastingContainerModule`](types.MulticastingContainerModule.md)<[`Type`](../modules/Disposable.md#type)\>

  ↳ **`DisposableModule`**

## Table of contents

### Properties

- [disposed](Disposable.DisposableModule.md#disposed)

### Methods

- [add](Disposable.DisposableModule.md#add)
- [addTo](Disposable.DisposableModule.md#addto)
- [bindTo](Disposable.DisposableModule.md#bindto)
- [create](Disposable.DisposableModule.md#create)
- [onComplete](Disposable.DisposableModule.md#oncomplete)
- [onDisposed](Disposable.DisposableModule.md#ondisposed)
- [onError](Disposable.DisposableModule.md#onerror)
- [toAbortSignal](Disposable.DisposableModule.md#toabortsignal)
- [toErrorHandler](Disposable.DisposableModule.md#toerrorhandler)
- [using](Disposable.DisposableModule.md#using)
- [usingAsync](Disposable.DisposableModule.md#usingasync)
- [usingLazy](Disposable.DisposableModule.md#usinglazy)

## Properties

### disposed

• `Readonly` **disposed**: [`DisposableLike`](types.DisposableLike.md)

## Methods

### add

▸ **add**<`TDisposable`\>(`child`, `options?`): [`Updater`](../modules/functions.md#updater)<`TDisposable`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposable` | extends [`DisposableLike`](types.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`DisposableLike`](types.DisposableLike.md) |
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
| `TDisposable` | extends [`DisposableLike`](types.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`DisposableLike`](types.DisposableLike.md) |
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
| `TDisposable` | extends [`DisposableLike`](types.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`DisposableLike`](types.DisposableLike.md) |

#### Returns

[`Updater`](../modules/functions.md#updater)<`TDisposable`\>

___

### create

▸ **create**(): [`DisposableLike`](types.DisposableLike.md)

#### Returns

[`DisposableLike`](types.DisposableLike.md)

___

### onComplete

▸ **onComplete**<`TDisposable`\>(`teardown`): [`Updater`](../modules/functions.md#updater)<`TDisposable`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposable` | extends [`DisposableLike`](types.DisposableLike.md) |

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
| `TDisposable` | extends [`DisposableLike`](types.DisposableLike.md) |

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
| `TDisposable` | extends [`DisposableLike`](types.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `teardown` | [`SideEffect1`](../modules/functions.md#sideeffect1)<`Error`\> |

#### Returns

[`Updater`](../modules/functions.md#updater)<`TDisposable`\>

___

### toAbortSignal

▸ **toAbortSignal**(`disposable`): `AbortSignal`

#### Parameters

| Name | Type |
| :------ | :------ |
| `disposable` | [`DisposableLike`](types.DisposableLike.md) |

#### Returns

`AbortSignal`

___

### toErrorHandler

▸ **toErrorHandler**(`disposable`): [`SideEffect1`](../modules/functions.md#sideeffect1)<`unknown`\>

Returns a function that disposes `disposable` with an error wrapping the provided `cause`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `disposable` | [`DisposableLike`](types.DisposableLike.md) |

#### Returns

[`SideEffect1`](../modules/functions.md#sideeffect1)<`unknown`\>

___

### using

▸ **using**<`TDisposable`, `TResult`\>(`factoryOrDisposable`): [`Function1`](../modules/functions.md#function1)<[`Function1`](../modules/functions.md#function1)<`TDisposable`, `TResult`\>, `TResult`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposable` | extends [`DisposableLike`](types.DisposableLike.md) |
| `TResult` | `unknown` |

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
| `TDisposableA` | extends [`DisposableLike`](types.DisposableLike.md) |
| `TDisposableB` | extends [`DisposableLike`](types.DisposableLike.md) |
| `TResult` | `unknown` |

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
| `TDisposableA` | extends [`DisposableLike`](types.DisposableLike.md) |
| `TDisposableB` | extends [`DisposableLike`](types.DisposableLike.md) |
| `TDisposableC` | extends [`DisposableLike`](types.DisposableLike.md) |
| `TResult` | `unknown` |

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
| `TDisposable` | extends [`DisposableLike`](types.DisposableLike.md) |
| `TResult` | `unknown` |

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
| `TDisposableA` | extends [`DisposableLike`](types.DisposableLike.md) |
| `TDisposableB` | extends [`DisposableLike`](types.DisposableLike.md) |
| `TResult` | `unknown` |

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
| `TDisposableA` | extends [`DisposableLike`](types.DisposableLike.md) |
| `TDisposableB` | extends [`DisposableLike`](types.DisposableLike.md) |
| `TDisposableC` | extends [`DisposableLike`](types.DisposableLike.md) |
| `TResult` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factoryOrDisposableA` | `TDisposableA` \| [`Factory`](../modules/functions.md#factory)<`TDisposableA`\> |
| `factoryOrDisposableB` | `TDisposableB` \| [`Factory`](../modules/functions.md#factory)<`TDisposableB`\> |
| `factoryOrDisposableC` | `TDisposableC` \| [`Factory`](../modules/functions.md#factory)<`TDisposableC`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Function3`](../modules/functions.md#function3)<`TDisposableA`, `TDisposableB`, `TDisposableC`, `Promise`<`TResult`\>\>, `Promise`<`TResult`\>\>

___

### usingLazy

▸ **usingLazy**<`TDisposable`, `TResult`\>(`factoryOrDisposable`): [`Function1`](../modules/functions.md#function1)<[`Function1`](../modules/functions.md#function1)<`TDisposable`, `TResult`\>, [`Factory`](../modules/functions.md#factory)<`TResult`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposable` | extends [`DisposableLike`](types.DisposableLike.md) |
| `TResult` | `unknown` |

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
| `TDisposableA` | extends [`DisposableLike`](types.DisposableLike.md) |
| `TDisposableB` | extends [`DisposableLike`](types.DisposableLike.md) |
| `TResult` | `unknown` |

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
| `TDisposableA` | extends [`DisposableLike`](types.DisposableLike.md) |
| `TDisposableB` | extends [`DisposableLike`](types.DisposableLike.md) |
| `TDisposableC` | extends [`DisposableLike`](types.DisposableLike.md) |
| `TResult` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factoryOrDisposableA` | `TDisposableA` \| [`Factory`](../modules/functions.md#factory)<`TDisposableA`\> |
| `factoryOrDisposableB` | `TDisposableB` \| [`Factory`](../modules/functions.md#factory)<`TDisposableB`\> |
| `factoryOrDisposableC` | `TDisposableC` \| [`Factory`](../modules/functions.md#factory)<`TDisposableC`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Function3`](../modules/functions.md#function3)<`TDisposableA`, `TDisposableB`, `TDisposableC`, `TResult`\>, [`Factory`](../modules/functions.md#factory)<`TResult`\>\>
