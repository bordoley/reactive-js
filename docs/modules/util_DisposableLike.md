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
- [onComplete](util_DisposableLike.md#oncomplete)
- [onDisposed](util_DisposableLike.md#ondisposed)
- [onError](util_DisposableLike.md#onerror)
- [toAbortSignal](util_DisposableLike.md#toabortsignal)
- [toErrorHandler](util_DisposableLike.md#toerrorhandler)

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

▸ **addTo**<`T`\>(`parent`): [`Identity`](functions.md#identity)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`DisposableLike`](../interfaces/util.DisposableLike.md) |

#### Returns

[`Identity`](functions.md#identity)<`T`\>

___

### addToIgnoringChildErrors

▸ **addToIgnoringChildErrors**<`T`\>(`parent`): [`Identity`](functions.md#identity)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`DisposableLike`](../interfaces/util.DisposableLike.md) |

#### Returns

[`Identity`](functions.md#identity)<`T`\>

___

### bindTo

▸ **bindTo**<`T`\>(`child`): [`Identity`](functions.md#identity)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`DisposableLike`](../interfaces/util.DisposableLike.md) |

#### Returns

[`Identity`](functions.md#identity)<`T`\>

___

### create

▸ **create**(): [`DisposableLike`](../interfaces/util.DisposableLike.md)

#### Returns

[`DisposableLike`](../interfaces/util.DisposableLike.md)

___

### onComplete

▸ **onComplete**<`T`\>(`teardown`): [`Identity`](functions.md#identity)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `teardown` | [`SideEffect`](functions.md#sideeffect) |

#### Returns

[`Identity`](functions.md#identity)<`T`\>

___

### onDisposed

▸ **onDisposed**<`T`\>(`teardown`): [`Identity`](functions.md#identity)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `teardown` | [`SideEffect1`](functions.md#sideeffect1)<[`Option`](functions.md#option)<[`Error`](util.md#error)\>\> |

#### Returns

[`Identity`](functions.md#identity)<`T`\>

___

### onError

▸ **onError**<`T`\>(`teardown`): [`Identity`](functions.md#identity)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`DisposableLike`](../interfaces/util.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `teardown` | [`SideEffect1`](functions.md#sideeffect1)<[`Error`](util.md#error)\> |

#### Returns

[`Identity`](functions.md#identity)<`T`\>

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
