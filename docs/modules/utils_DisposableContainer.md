[Reactive-JS](../README.md) / utils/DisposableContainer

# Module: utils/DisposableContainer

## Table of contents

### Interfaces

- [DisposableContainerModule](../interfaces/utils_DisposableContainer.DisposableContainerModule.md)

### Type Aliases

- [Signature](utils_DisposableContainer.md#signature)

### Functions

- [onComplete](utils_DisposableContainer.md#oncomplete)
- [onDisposed](utils_DisposableContainer.md#ondisposed)
- [onError](utils_DisposableContainer.md#onerror)
- [toAbortSignal](utils_DisposableContainer.md#toabortsignal)

## Type Aliases

### Signature

Ƭ **Signature**: [`DisposableContainerModule`](../interfaces/utils_DisposableContainer.DisposableContainerModule.md)

## Functions

### onComplete

▸ **onComplete**\<`TDisposable`\>(`teardown`): [`Updater`](functions.md#updater)\<`TDisposable`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposable` | extends [`DisposableContainerLike`](../interfaces/utils.DisposableContainerLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `teardown` | [`SideEffect`](functions.md#sideeffect) |

#### Returns

[`Updater`](functions.md#updater)\<`TDisposable`\>

___

### onDisposed

▸ **onDisposed**\<`TDisposable`\>(`teardown`): [`Updater`](functions.md#updater)\<`TDisposable`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposable` | extends [`DisposableContainerLike`](../interfaces/utils.DisposableContainerLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `teardown` | [`SideEffect1`](functions.md#sideeffect1)\<[`Optional`](functions.md#optional)\<`Error`\>\> |

#### Returns

[`Updater`](functions.md#updater)\<`TDisposable`\>

___

### onError

▸ **onError**\<`TDisposable`\>(`teardown`): [`Updater`](functions.md#updater)\<`TDisposable`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TDisposable` | extends [`DisposableContainerLike`](../interfaces/utils.DisposableContainerLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `teardown` | [`SideEffect1`](functions.md#sideeffect1)\<`Error`\> |

#### Returns

[`Updater`](functions.md#updater)\<`TDisposable`\>

___

### toAbortSignal

▸ **toAbortSignal**(`disposable`): `AbortSignal`

#### Parameters

| Name | Type |
| :------ | :------ |
| `disposable` | [`DisposableContainerLike`](../interfaces/utils.DisposableContainerLike.md) |

#### Returns

`AbortSignal`
