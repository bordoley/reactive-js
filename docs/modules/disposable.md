[Reactive-JS](../README.md) / disposable

# Module: disposable

## Table of contents

### Classes

- [AbstractDisposable](../classes/disposable.AbstractDisposable.md)
- [AbstractSerialDisposable](../classes/disposable.AbstractSerialDisposable.md)

### Interfaces

- [DisposableLike](../interfaces/disposable.DisposableLike.md)
- [DisposableValueLike](../interfaces/disposable.DisposableValueLike.md)
- [Error](../interfaces/disposable.Error.md)
- [SerialDisposableLike](../interfaces/disposable.SerialDisposableLike.md)

### Type Aliases

- [DisposableOrTeardown](disposable.md#disposableorteardown)

### Variables

- [disposed](disposable.md#disposed)

### Functions

- [add](disposable.md#add)
- [addTo](disposable.md#addto)
- [bindTo](disposable.md#bindto)
- [createDisposable](disposable.md#createdisposable)
- [createDisposableValue](disposable.md#createdisposablevalue)
- [createSerialDisposable](disposable.md#createserialdisposable)
- [dispose](disposable.md#dispose)
- [isDisposed](disposable.md#isdisposed)
- [onComplete](disposable.md#oncomplete)
- [onDisposed](disposable.md#ondisposed)
- [onError](disposable.md#onerror)
- [toAbortSignal](disposable.md#toabortsignal)
- [toErrorHandler](disposable.md#toerrorhandler)

## Type Aliases

### DisposableOrTeardown

Ƭ **DisposableOrTeardown**: [`DisposableLike`](../interfaces/disposable.DisposableLike.md) \| [`SideEffect1`](functions.md#sideeffect1)<[`Option`](option.md#option)<[`Error`](../interfaces/disposable.Error.md)\>\>

## Variables

### disposed

• `Const` **disposed**: [`DisposableLike`](../interfaces/disposable.DisposableLike.md)

A disposed `DisposableLike` instance.

## Functions

### add

▸ **add**<`T`\>(`child`, `ignoreChildErrors`): [`Function1`](functions.md#function1)<`T`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |
| `ignoreChildErrors` | ``true`` |

#### Returns

[`Function1`](functions.md#function1)<`T`, `T`\>

▸ **add**<`T`\>(`child`): [`Function1`](functions.md#function1)<`T`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |

#### Returns

[`Function1`](functions.md#function1)<`T`, `T`\>

___

### addTo

▸ **addTo**<`T`\>(`child`, `ignoreChildErrors`): [`Function1`](functions.md#function1)<`T`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |
| `ignoreChildErrors` | ``true`` |

#### Returns

[`Function1`](functions.md#function1)<`T`, `T`\>

▸ **addTo**<`T`\>(`child`): [`Function1`](functions.md#function1)<`T`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |

#### Returns

[`Function1`](functions.md#function1)<`T`, `T`\>

___

### bindTo

▸ **bindTo**<`T`\>(`child`): [`Function1`](functions.md#function1)<`T`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |

#### Returns

[`Function1`](functions.md#function1)<`T`, `T`\>

___

### createDisposable

▸ **createDisposable**(`onDispose?`): [`DisposableLike`](../interfaces/disposable.DisposableLike.md)

Creates an empty `DisposableLike` instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `onDispose?` | (`error?`: [`Error`](../interfaces/disposable.Error.md)) => `void` | Optional teardown logic to attach to the newly created disposable. |

#### Returns

[`DisposableLike`](../interfaces/disposable.DisposableLike.md)

___

### createDisposableValue

▸ **createDisposableValue**<`T`\>(`value`, `cleanup`): [`DisposableValueLike`](../interfaces/disposable.DisposableValueLike.md)<`T`\>

Creates a new DisposableValueLike instance, which applies
the supplied `cleanup` side effect to `value` when disposed.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `cleanup` | [`SideEffect1`](functions.md#sideeffect1)<`T`\> |

#### Returns

[`DisposableValueLike`](../interfaces/disposable.DisposableValueLike.md)<`T`\>

___

### createSerialDisposable

▸ **createSerialDisposable**(): [`SerialDisposableLike`](../interfaces/disposable.SerialDisposableLike.md)

Creates a new `SerialDisposableLike` instance containing a disposed instance.

#### Returns

[`SerialDisposableLike`](../interfaces/disposable.SerialDisposableLike.md)

___

### dispose

▸ **dispose**<`T`\>(`e?`): [`Function1`](functions.md#function1)<`T`, `T`\>

Dispose `disposable` with an optional error.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | [`Error`](../interfaces/disposable.Error.md) |

#### Returns

[`Function1`](functions.md#function1)<`T`, `T`\>

___

### isDisposed

▸ **isDisposed**(`disposable`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `disposable` | [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |

#### Returns

`boolean`

___

### onComplete

▸ **onComplete**<`T`\>(`teardown`): [`Function1`](functions.md#function1)<`T`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `teardown` | [`SideEffect`](functions.md#sideeffect) |

#### Returns

[`Function1`](functions.md#function1)<`T`, `T`\>

___

### onDisposed

▸ **onDisposed**<`T`\>(`teardown`): [`Function1`](functions.md#function1)<`T`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `teardown` | [`SideEffect1`](functions.md#sideeffect1)<[`Option`](option.md#option)<[`Error`](../interfaces/disposable.Error.md)\>\> |

#### Returns

[`Function1`](functions.md#function1)<`T`, `T`\>

___

### onError

▸ **onError**<`T`\>(`teardown`): [`Function1`](functions.md#function1)<`T`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `teardown` | [`SideEffect1`](functions.md#sideeffect1)<[`Error`](../interfaces/disposable.Error.md)\> |

#### Returns

[`Function1`](functions.md#function1)<`T`, `T`\>

___

### toAbortSignal

▸ **toAbortSignal**(`disposable`): `AbortSignal`

#### Parameters

| Name | Type |
| :------ | :------ |
| `disposable` | [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |

#### Returns

`AbortSignal`

___

### toErrorHandler

▸ **toErrorHandler**(`disposable`): [`SideEffect1`](functions.md#sideeffect1)<`unknown`\>

Returns a function that disposes `disposable` with an error wrapping the provided `cause`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `disposable` | [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |

#### Returns

[`SideEffect1`](functions.md#sideeffect1)<`unknown`\>
