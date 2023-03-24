[Reactive-JS](../README.md) / util/Disposable

# Module: util/Disposable

## Table of contents

### Variables

- [disposed](util_Disposable.md#disposed)

### Functions

- [add](util_Disposable.md#add)
- [addIgnoringChildErrors](util_Disposable.md#addignoringchilderrors)
- [addTo](util_Disposable.md#addto)
- [addToIgnoringChildErrors](util_Disposable.md#addtoignoringchilderrors)
- [bindTo](util_Disposable.md#bindto)
- [create](util_Disposable.md#create)
- [onComplete](util_Disposable.md#oncomplete)
- [onDisposed](util_Disposable.md#ondisposed)
- [onError](util_Disposable.md#onerror)
- [toAbortSignal](util_Disposable.md#toabortsignal)
- [toErrorHandler](util_Disposable.md#toerrorhandler)
- [toObservable](util_Disposable.md#toobservable)

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

### onComplete

▸ **onComplete**<`T`\>(`teardown`, `ctx?`): [`Updater`](functions.md#updater)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `teardown` | [`SideEffect`](functions.md#sideeffect) |
| `ctx?` | `unknown` |

#### Returns

[`Updater`](functions.md#updater)<`T`\>

___

### onDisposed

▸ **onDisposed**<`T`\>(`teardown`, `ctx?`): [`Updater`](functions.md#updater)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `teardown` | [`SideEffect1`](functions.md#sideeffect1)<[`Optional`](functions.md#optional)<`Error`\>\> |
| `ctx?` | `unknown` |

#### Returns

[`Updater`](functions.md#updater)<`T`\>

___

### onError

▸ **onError**<`T`\>(`teardown`, `ctx?`): [`Updater`](functions.md#updater)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `teardown` | [`SideEffect1`](functions.md#sideeffect1)<`Error`\> |
| `ctx?` | `unknown` |

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
