[Reactive-JS](../README.md) / util/DisposableLike

# Module: util/DisposableLike

## Table of contents

### Interfaces

- [DisposableLike](../interfaces/util_DisposableLike.DisposableLike.md)

### Type Aliases

- [DisposableOrTeardown](util_DisposableLike.md#disposableorteardown)
- [Error](util_DisposableLike.md#error)

### Variables

- [DisposableLike\_add](util_DisposableLike.md#disposablelike_add)
- [DisposableLike\_dispose](util_DisposableLike.md#disposablelike_dispose)
- [DisposableLike\_error](util_DisposableLike.md#disposablelike_error)
- [DisposableLike\_isDisposed](util_DisposableLike.md#disposablelike_isdisposed)
- [disposed](util_DisposableLike.md#disposed)

### Functions

- [add](util_DisposableLike.md#add)
- [addIgnoringChildErrors](util_DisposableLike.md#addignoringchilderrors)
- [addTo](util_DisposableLike.md#addto)
- [addToIgnoringChildErrors](util_DisposableLike.md#addtoignoringchilderrors)
- [bindTo](util_DisposableLike.md#bindto)
- [dispose](util_DisposableLike.md#dispose)
- [getError](util_DisposableLike.md#geterror)
- [isDisposed](util_DisposableLike.md#isdisposed)
- [onComplete](util_DisposableLike.md#oncomplete)
- [onDisposed](util_DisposableLike.md#ondisposed)
- [onError](util_DisposableLike.md#onerror)
- [toAbortSignal](util_DisposableLike.md#toabortsignal)
- [toErrorHandler](util_DisposableLike.md#toerrorhandler)

## Type Aliases

### DisposableOrTeardown

Ƭ **DisposableOrTeardown**: [`DisposableLike`](../interfaces/util_DisposableLike.DisposableLike.md) \| [`SideEffect1`](util_functions.md#sideeffect1)<[`Option`](util_Option.md#option)<[`Error`](util_DisposableLike.md#error)\>\>

___

### Error

Ƭ **Error**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cause` | `unknown` |

## Variables

### DisposableLike\_add

• `Const` **DisposableLike\_add**: unique `symbol`

___

### DisposableLike\_dispose

• `Const` **DisposableLike\_dispose**: unique `symbol`

___

### DisposableLike\_error

• `Const` **DisposableLike\_error**: unique `symbol`

___

### DisposableLike\_isDisposed

• `Const` **DisposableLike\_isDisposed**: unique `symbol`

___

### disposed

• `Const` **disposed**: [`DisposableLike`](../interfaces/util_DisposableLike.DisposableLike.md)

## Functions

### add

▸ **add**<`T`\>(`child`): (`parent`: `T`) => `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`DisposableLike`](../interfaces/util_DisposableLike.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`DisposableLike`](../interfaces/util_DisposableLike.DisposableLike.md) |

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
| `T` | extends [`DisposableLike`](../interfaces/util_DisposableLike.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`DisposableLike`](../interfaces/util_DisposableLike.DisposableLike.md) |

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

▸ **addTo**<`T`\>(`parent`): [`Identity`](util_functions.md#identity)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`DisposableLike`](../interfaces/util_DisposableLike.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`DisposableLike`](../interfaces/util_DisposableLike.DisposableLike.md) |

#### Returns

[`Identity`](util_functions.md#identity)<`T`\>

___

### addToIgnoringChildErrors

▸ **addToIgnoringChildErrors**<`T`\>(`parent`): [`Identity`](util_functions.md#identity)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`DisposableLike`](../interfaces/util_DisposableLike.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`DisposableLike`](../interfaces/util_DisposableLike.DisposableLike.md) |

#### Returns

[`Identity`](util_functions.md#identity)<`T`\>

___

### bindTo

▸ **bindTo**<`T`\>(`child`): [`Identity`](util_functions.md#identity)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`DisposableLike`](../interfaces/util_DisposableLike.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`DisposableLike`](../interfaces/util_DisposableLike.DisposableLike.md) |

#### Returns

[`Identity`](util_functions.md#identity)<`T`\>

___

### dispose

▸ **dispose**<`T`\>(`e?`): [`Identity`](util_functions.md#identity)<`T`\>

Dispose `disposable` with an optional error.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`DisposableLike`](../interfaces/util_DisposableLike.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | [`Error`](util_DisposableLike.md#error) |

#### Returns

[`Identity`](util_functions.md#identity)<`T`\>

___

### getError

▸ **getError**(`disposable`): [`Option`](util_Option.md#option)<[`Error`](util_DisposableLike.md#error)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `disposable` | `Object` |
| `disposable.[DisposableLike_error]` | [`Option`](util_Option.md#option)<[`Error`](util_DisposableLike.md#error)\> |

#### Returns

[`Option`](util_Option.md#option)<[`Error`](util_DisposableLike.md#error)\>

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

▸ **onComplete**<`T`\>(`teardown`): [`Identity`](util_functions.md#identity)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`DisposableLike`](../interfaces/util_DisposableLike.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `teardown` | [`SideEffect`](util_functions.md#sideeffect) |

#### Returns

[`Identity`](util_functions.md#identity)<`T`\>

___

### onDisposed

▸ **onDisposed**<`T`\>(`teardown`): [`Identity`](util_functions.md#identity)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`DisposableLike`](../interfaces/util_DisposableLike.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `teardown` | [`SideEffect1`](util_functions.md#sideeffect1)<[`Option`](util_Option.md#option)<[`Error`](util_DisposableLike.md#error)\>\> |

#### Returns

[`Identity`](util_functions.md#identity)<`T`\>

___

### onError

▸ **onError**<`T`\>(`teardown`): [`Identity`](util_functions.md#identity)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`DisposableLike`](../interfaces/util_DisposableLike.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `teardown` | [`SideEffect1`](util_functions.md#sideeffect1)<[`Error`](util_DisposableLike.md#error)\> |

#### Returns

[`Identity`](util_functions.md#identity)<`T`\>

___

### toAbortSignal

▸ **toAbortSignal**(`disposable`): `AbortSignal`

#### Parameters

| Name | Type |
| :------ | :------ |
| `disposable` | [`DisposableLike`](../interfaces/util_DisposableLike.DisposableLike.md) |

#### Returns

`AbortSignal`

___

### toErrorHandler

▸ **toErrorHandler**(`disposable`): [`SideEffect1`](util_functions.md#sideeffect1)<`unknown`\>

Returns a function that disposes `disposable` with an error wrapping the provided `cause`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `disposable` | [`DisposableLike`](../interfaces/util_DisposableLike.DisposableLike.md) |

#### Returns

[`SideEffect1`](util_functions.md#sideeffect1)<`unknown`\>
