[Reactive-JS](../README.md) / [utils/DisposableContainer](../modules/utils_DisposableContainer.md) / DisposableContainerModule

# Interface: DisposableContainerModule

[utils/DisposableContainer](../modules/utils_DisposableContainer.md).DisposableContainerModule

## Table of contents

### Methods

- [onComplete](utils_DisposableContainer.DisposableContainerModule.md#oncomplete)
- [onDisposed](utils_DisposableContainer.DisposableContainerModule.md#ondisposed)
- [onError](utils_DisposableContainer.DisposableContainerModule.md#onerror)
- [toAbortSignal](utils_DisposableContainer.DisposableContainerModule.md#toabortsignal)

## Methods

### onComplete

▸ **onComplete**\<`TDisposable`\>(`teardown`): [`Updater`](../modules/functions.md#updater)\<`TDisposable`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposable` | extends [`DisposableContainerLike`](utils.DisposableContainerLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `teardown` | [`SideEffect`](../modules/functions.md#sideeffect) |

#### Returns

[`Updater`](../modules/functions.md#updater)\<`TDisposable`\>

___

### onDisposed

▸ **onDisposed**\<`TDisposable`\>(`teardown`): [`Updater`](../modules/functions.md#updater)\<`TDisposable`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposable` | extends [`DisposableContainerLike`](utils.DisposableContainerLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `teardown` | [`SideEffect1`](../modules/functions.md#sideeffect1)\<[`Optional`](../modules/functions.md#optional)\<`Error`\>\> |

#### Returns

[`Updater`](../modules/functions.md#updater)\<`TDisposable`\>

___

### onError

▸ **onError**\<`TDisposable`\>(`teardown`): [`Updater`](../modules/functions.md#updater)\<`TDisposable`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposable` | extends [`DisposableContainerLike`](utils.DisposableContainerLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `teardown` | [`SideEffect1`](../modules/functions.md#sideeffect1)\<`Error`\> |

#### Returns

[`Updater`](../modules/functions.md#updater)\<`TDisposable`\>

___

### toAbortSignal

▸ **toAbortSignal**(`disposable`): `AbortSignal`

#### Parameters

| Name | Type |
| :------ | :------ |
| `disposable` | [`DisposableContainerLike`](utils.DisposableContainerLike.md) |

#### Returns

`AbortSignal`
