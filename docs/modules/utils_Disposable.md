[Reactive-JS](../README.md) / utils/Disposable

# Module: utils/Disposable

## Table of contents

### Interfaces

- [DisposableModule](../interfaces/utils_Disposable.DisposableModule.md)

### Type Aliases

- [Signature](utils_Disposable.md#signature)

### Variables

- [disposed](utils_Disposable.md#disposed)

### Functions

- [add](utils_Disposable.md#add)
- [addTo](utils_Disposable.md#addto)
- [addToContainer](utils_Disposable.md#addtocontainer)
- [bindTo](utils_Disposable.md#bindto)
- [create](utils_Disposable.md#create)
- [raiseIfDisposedWithError](utils_Disposable.md#raiseifdisposedwitherror)
- [toErrorHandler](utils_Disposable.md#toerrorhandler)

## Type Aliases

### Signature

Ƭ **Signature**: [`DisposableModule`](../interfaces/utils_Disposable.DisposableModule.md)

## Variables

### disposed

• `Const` **disposed**: [`Signature`](utils_Disposable.md#signature)[``"disposed"``]

## Functions

### add

▸ **add**\<`TDisposable`\>(`child`): [`Updater`](functions.md#updater)\<`TDisposable`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposable` | extends [`DisposableLike`](../interfaces/utils.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`DisposableLike`](../interfaces/utils.DisposableLike.md) |

#### Returns

[`Updater`](functions.md#updater)\<`TDisposable`\>

___

### addTo

▸ **addTo**\<`TDisposable`\>(`parent`): [`Updater`](functions.md#updater)\<`TDisposable`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposable` | extends [`DisposableLike`](../interfaces/utils.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`DisposableLike`](../interfaces/utils.DisposableLike.md) |

#### Returns

[`Updater`](functions.md#updater)\<`TDisposable`\>

___

### addToContainer

▸ **addToContainer**\<`TDisposable`\>(`parent`): [`Updater`](functions.md#updater)\<`TDisposable`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposable` | extends [`DisposableLike`](../interfaces/utils.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`DisposableContainerLike`](../interfaces/utils.DisposableContainerLike.md) |

#### Returns

[`Updater`](functions.md#updater)\<`TDisposable`\>

___

### bindTo

▸ **bindTo**\<`TDisposable`\>(`child`): [`Updater`](functions.md#updater)\<`TDisposable`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposable` | extends [`DisposableLike`](../interfaces/utils.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`DisposableLike`](../interfaces/utils.DisposableLike.md) |

#### Returns

[`Updater`](functions.md#updater)\<`TDisposable`\>

___

### create

▸ **create**(): [`DisposableLike`](../interfaces/utils.DisposableLike.md)

#### Returns

[`DisposableLike`](../interfaces/utils.DisposableLike.md)

___

### raiseIfDisposedWithError

▸ **raiseIfDisposedWithError**(`disposable`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `disposable` | [`DisposableLike`](../interfaces/utils.DisposableLike.md) |

#### Returns

`void`

___

### toErrorHandler

▸ **toErrorHandler**(`disposable`): [`SideEffect1`](functions.md#sideeffect1)\<`unknown`\>

Returns a function that disposes `disposable` with an error wrapping the provided `cause`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `disposable` | [`DisposableLike`](../interfaces/utils.DisposableLike.md) |

#### Returns

[`SideEffect1`](functions.md#sideeffect1)\<`unknown`\>
