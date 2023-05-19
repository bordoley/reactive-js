[Reactive-JS](../README.md) / Disposable

# Module: Disposable

## Table of contents

### Container Interfaces

- [DisposableContainer](../interfaces/Disposable.DisposableContainer.md)

### Other Interfaces

- [DisposableModule](../interfaces/Disposable.DisposableModule.md)

### Type Aliases

- [Signature](Disposable.md#signature)
- [Type](Disposable.md#type)

### Variables

- [disposed](Disposable.md#disposed)

### Other Functions

- [add](Disposable.md#add)
- [addEventHandler](Disposable.md#addeventhandler)
- [addTo](Disposable.md#addto)
- [bindTo](Disposable.md#bindto)
- [create](Disposable.md#create)
- [onComplete](Disposable.md#oncomplete)
- [onDisposed](Disposable.md#ondisposed)
- [onError](Disposable.md#onerror)
- [toAbortSignal](Disposable.md#toabortsignal)
- [toErrorHandler](Disposable.md#toerrorhandler)
- [using](Disposable.md#using)
- [usingAsync](Disposable.md#usingasync)
- [usingLazy](Disposable.md#usinglazy)

### Transform Functions

- [toEventSource](Disposable.md#toeventsource)
- [toObservable](Disposable.md#toobservable)
- [toReadonlyArrayAsync](Disposable.md#toreadonlyarrayasync)

## Type Aliases

### Signature

Ƭ **Signature**: [`DisposableModule`](../interfaces/Disposable.DisposableModule.md)

___

### Type

Ƭ **Type**: [`DisposableContainer`](../interfaces/Disposable.DisposableContainer.md)

## Variables

### disposed

• `Const` **disposed**: [`Signature`](Disposable.md#signature)[``"disposed"``]

## Other Functions

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

### addEventHandler

▸ **addEventHandler**<`T`\>(`handler`): [`Function1`](functions.md#function1)<[`DisposableLike`](../interfaces/types.DisposableLike.md), [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | [`SideEffect1`](functions.md#sideeffect1)<`T`\> |

#### Returns

[`Function1`](functions.md#function1)<[`DisposableLike`](../interfaces/types.DisposableLike.md), [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

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

### using

▸ **using**<`TDisposable`, `TResult`\>(`factoryOrDisposable`): [`Function1`](functions.md#function1)<[`Function1`](functions.md#function1)<`TDisposable`, `TResult`\>, `TResult`\>

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

[`Function1`](functions.md#function1)<[`Function1`](functions.md#function1)<`TDisposable`, `TResult`\>, `TResult`\>

▸ **using**<`TDisposableA`, `TDisposableB`, `TResult`\>(`factoryOrDisposableA`, `factoryOrDisposableB`): [`Function1`](functions.md#function1)<[`Function2`](functions.md#function2)<`TDisposableA`, `TDisposableB`, `TResult`\>, `TResult`\>

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

[`Function1`](functions.md#function1)<[`Function2`](functions.md#function2)<`TDisposableA`, `TDisposableB`, `TResult`\>, `TResult`\>

▸ **using**<`TDisposableA`, `TDisposableB`, `TDisposableC`, `TResult`\>(`factoryOrDisposableA`, `factoryOrDisposableB`, `factoryOrDisposableC`): [`Function1`](functions.md#function1)<[`Function3`](functions.md#function3)<`TDisposableA`, `TDisposableB`, `TDisposableC`, `TResult`\>, `TResult`\>

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

[`Function1`](functions.md#function1)<[`Function3`](functions.md#function3)<`TDisposableA`, `TDisposableB`, `TDisposableC`, `TResult`\>, `TResult`\>

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

___

### usingLazy

▸ **usingLazy**<`TDisposable`, `TResult`\>(`factoryOrDisposable`): [`Function1`](functions.md#function1)<[`Function1`](functions.md#function1)<`TDisposable`, `TResult`\>, [`Factory`](functions.md#factory)<`TResult`\>\>

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

[`Function1`](functions.md#function1)<[`Function1`](functions.md#function1)<`TDisposable`, `TResult`\>, [`Factory`](functions.md#factory)<`TResult`\>\>

▸ **usingLazy**<`TDisposableA`, `TDisposableB`, `TResult`\>(`factoryOrDisposableA`, `factoryOrDisposableB`): [`Function1`](functions.md#function1)<[`Function2`](functions.md#function2)<`TDisposableA`, `TDisposableB`, `TResult`\>, [`Factory`](functions.md#factory)<`TResult`\>\>

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

[`Function1`](functions.md#function1)<[`Function2`](functions.md#function2)<`TDisposableA`, `TDisposableB`, `TResult`\>, [`Factory`](functions.md#factory)<`TResult`\>\>

▸ **usingLazy**<`TDisposableA`, `TDisposableB`, `TDisposableC`, `TResult`\>(`factoryOrDisposableA`, `factoryOrDisposableB`, `factoryOrDisposableC`): [`Function1`](functions.md#function1)<[`Function3`](functions.md#function3)<`TDisposableA`, `TDisposableB`, `TDisposableC`, `TResult`\>, [`Factory`](functions.md#factory)<`TResult`\>\>

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

[`Function1`](functions.md#function1)<[`Function3`](functions.md#function3)<`TDisposableA`, `TDisposableB`, `TDisposableC`, `TResult`\>, [`Factory`](functions.md#factory)<`TResult`\>\>

___

## Transform Functions

### toEventSource

▸ **toEventSource**<`T`\>(): [`Function1`](functions.md#function1)<[`DisposableLike`](../interfaces/types.DisposableLike.md), [`EventSourceLike`](../interfaces/types.EventSourceLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`DisposableLike`](../interfaces/types.DisposableLike.md), [`EventSourceLike`](../interfaces/types.EventSourceLike.md)<`T`\>\>

___

### toObservable

▸ **toObservable**<`T`\>(): [`Function1`](functions.md#function1)<[`DisposableLike`](../interfaces/types.DisposableLike.md), [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`DisposableLike`](../interfaces/types.DisposableLike.md), [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`T`\>\>

___

### toReadonlyArrayAsync

▸ **toReadonlyArrayAsync**<`T`\>(): [`Function1`](functions.md#function1)<[`DisposableLike`](../interfaces/types.DisposableLike.md), `Promise`<readonly `T`[]\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`DisposableLike`](../interfaces/types.DisposableLike.md), `Promise`<readonly `T`[]\>\>
