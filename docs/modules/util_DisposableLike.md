[Reactive-JS](../README.md) / util/DisposableLike

# Module: util/DisposableLike

## Table of contents

### Functions

- [toAbortSignal](util_DisposableLike.md#toabortsignal)
- [toErrorHandler](util_DisposableLike.md#toerrorhandler)
- [toObservable](util_DisposableLike.md#toobservable)

## Functions

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

▸ **toObservable**<`T`\>(): (`disposable`: [`DisposableLike`](../interfaces/util.DisposableLike.md)) => [`HotObservableLike`](../interfaces/rx.HotObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

`fn`

▸ (`disposable`): [`HotObservableLike`](../interfaces/rx.HotObservableLike.md)<`T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `disposable` | [`DisposableLike`](../interfaces/util.DisposableLike.md) |

##### Returns

[`HotObservableLike`](../interfaces/rx.HotObservableLike.md)<`T`\>
