[Reactive-JS](../README.md) / util/DisposableLike

# Module: util/DisposableLike

## Table of contents

### Variables

- [disposed](util_DisposableLike.md#disposed)

### Functions

- [add](util_DisposableLike.md#add)
- [addIgnoringChildErrors](util_DisposableLike.md#addignoringchilderrors)
- [addTo](util_DisposableLike.md#addto)
- [addToIgnoringChildErrors](util_DisposableLike.md#addtoignoringchilderrors)
- [bindTo](util_DisposableLike.md#bindto)
- [create](util_DisposableLike.md#create)
- [dispose](util_DisposableLike.md#dispose)
- [getException](util_DisposableLike.md#getexception)
- [isDisposed](util_DisposableLike.md#isdisposed)
- [onComplete](util_DisposableLike.md#oncomplete)
- [onDisposed](util_DisposableLike.md#ondisposed)
- [onError](util_DisposableLike.md#onerror)
- [toAbortSignal](util_DisposableLike.md#toabortsignal)
- [toErrorHandler](util_DisposableLike.md#toerrorhandler)
- [toObservable](util_DisposableLike.md#toobservable)

## Variables

### disposed

• `Const` **disposed**: [`DisposableLike`](../interfaces/util.DisposableLike.md)

## Functions

### add

▸ **add**<`T`\>(`child`): (`parent`: `T`) => `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`DisposableLike`](../interfaces/util.DisposableLike.md) |

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

### addIgnoringChildErrors

▸ **addIgnoringChildErrors**<`T`\>(`child`): (`parent`: `T`) => `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`DisposableLike`](../interfaces/util.DisposableLike.md) |

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

▸ **addTo**<`T`\>(`parent`): [`Updater`](functions.md#updater)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`DisposableLike`](../interfaces/util.DisposableLike.md) |

#### Returns

[`Updater`](functions.md#updater)<`T`\>

___

### addToIgnoringChildErrors

▸ **addToIgnoringChildErrors**<`T`\>(`parent`): [`Updater`](functions.md#updater)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`DisposableLike`](../interfaces/util.DisposableLike.md) |

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

### dispose

▸ **dispose**<`T`\>(`e?`): [`Updater`](functions.md#updater)<`T`\>

Dispose `disposable` with an optional error.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | [`Exception`](util.md#exception) |

#### Returns

[`Updater`](functions.md#updater)<`T`\>

___

### getException

▸ **getException**(`disposable`): [`Option`](functions.md#option)<[`Exception`](util.md#exception)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `disposable` | `Object` |
| `disposable.[DisposableLike_exception]` | [`Option`](functions.md#option)<[`Exception`](util.md#exception)\> |

#### Returns

[`Option`](functions.md#option)<[`Exception`](util.md#exception)\>

___

### isDisposed

▸ **isDisposed**(`disposable`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `disposable` | `Object` |
| `disposable.[DisposableLike_isDisposed]` | `boolean` |

#### Returns

`boolean`

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
| `teardown` | [`SideEffect1`](functions.md#sideeffect1)<[`Option`](functions.md#option)<[`Exception`](util.md#exception)\>\> |

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
| `teardown` | [`SideEffect1`](functions.md#sideeffect1)<[`Exception`](util.md#exception)\> |

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
