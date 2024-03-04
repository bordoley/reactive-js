[Reactive-JS](../README.md) / [utils/Disposable](../modules/utils_Disposable.md) / DisposableModule

# Interface: DisposableModule

[utils/Disposable](../modules/utils_Disposable.md).DisposableModule

## Table of contents

### Properties

- [disposed](utils_Disposable.DisposableModule.md#disposed)

### Methods

- [add](utils_Disposable.DisposableModule.md#add)
- [addTo](utils_Disposable.DisposableModule.md#addto)
- [addToContainer](utils_Disposable.DisposableModule.md#addtocontainer)
- [bindTo](utils_Disposable.DisposableModule.md#bindto)
- [create](utils_Disposable.DisposableModule.md#create)
- [raiseIfDisposedWithError](utils_Disposable.DisposableModule.md#raiseifdisposedwitherror)
- [toErrorHandler](utils_Disposable.DisposableModule.md#toerrorhandler)

## Properties

### disposed

• `Readonly` **disposed**: [`DisposableLike`](utils.DisposableLike.md)

## Methods

### add

▸ **add**\<`TDisposable`\>(`child`): [`Updater`](../modules/functions.md#updater)\<`TDisposable`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposable` | extends [`DisposableLike`](utils.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`DisposableLike`](utils.DisposableLike.md) |

#### Returns

[`Updater`](../modules/functions.md#updater)\<`TDisposable`\>

___

### addTo

▸ **addTo**\<`TDisposable`\>(`parent`): [`Updater`](../modules/functions.md#updater)\<`TDisposable`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposable` | extends [`DisposableLike`](utils.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`DisposableLike`](utils.DisposableLike.md) |

#### Returns

[`Updater`](../modules/functions.md#updater)\<`TDisposable`\>

___

### addToContainer

▸ **addToContainer**\<`TDisposable`\>(`parent`): [`Updater`](../modules/functions.md#updater)\<`TDisposable`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposable` | extends [`DisposableLike`](utils.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`DisposableContainerLike`](utils.DisposableContainerLike.md) |

#### Returns

[`Updater`](../modules/functions.md#updater)\<`TDisposable`\>

___

### bindTo

▸ **bindTo**\<`TDisposable`\>(`child`): [`Updater`](../modules/functions.md#updater)\<`TDisposable`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposable` | extends [`DisposableLike`](utils.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`DisposableLike`](utils.DisposableLike.md) |

#### Returns

[`Updater`](../modules/functions.md#updater)\<`TDisposable`\>

___

### create

▸ **create**(): [`DisposableLike`](utils.DisposableLike.md)

#### Returns

[`DisposableLike`](utils.DisposableLike.md)

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

### toErrorHandler

▸ **toErrorHandler**(`disposable`): [`SideEffect1`](../modules/functions.md#sideeffect1)\<`unknown`\>

Returns a function that disposes `disposable` with an error wrapping the provided `cause`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `disposable` | [`DisposableLike`](utils.DisposableLike.md) |

#### Returns

[`SideEffect1`](../modules/functions.md#sideeffect1)\<`unknown`\>
