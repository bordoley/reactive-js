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

- [addChildAndDisposeOnError](disposable.md#addchildanddisposeonerror)
- [addDisposable](disposable.md#adddisposable)
- [addDisposableDisposeParentOnChildError](disposable.md#adddisposabledisposeparentonchilderror)
- [addOnDisposedWithError](disposable.md#addondisposedwitherror)
- [addOnDisposedWithErrorTeardown](disposable.md#addondisposedwitherrorteardown)
- [addOnDisposedWithoutError](disposable.md#addondisposedwithouterror)
- [addOnDisposedWithoutErrorTeardown](disposable.md#addondisposedwithouterrorteardown)
- [addTeardown](disposable.md#addteardown)
- [bindDisposables](disposable.md#binddisposables)
- [bindTo](disposable.md#bindto)
- [createDisposable](disposable.md#createdisposable)
- [createDisposableValue](disposable.md#createdisposablevalue)
- [createSerialDisposable](disposable.md#createserialdisposable)
- [dispose](disposable.md#dispose)
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

### addChildAndDisposeOnError

▸ **addChildAndDisposeOnError**<`T`\>(`child`): [`Function1`](functions.md#function1)<`T`, `T`\>

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

### addDisposable

▸ **addDisposable**(`parent`, `child`): `void`

Add `child` to `parent`, disposing the child when the parent is disposed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |
| `child` | [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |

#### Returns

`void`

___

### addDisposableDisposeParentOnChildError

▸ **addDisposableDisposeParentOnChildError**(`parent`, `child`): `void`

Add `child` to `parent`. If `child` is disposed with an error it disposed `parent`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |
| `child` | [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |

#### Returns

`void`

___

### addOnDisposedWithError

▸ **addOnDisposedWithError**(`parent`, `child`): `void`

Add `child` to `parent`, only disposing child when `parent` is disposed with an error.

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |
| `child` | [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |

#### Returns

`void`

___

### addOnDisposedWithErrorTeardown

▸ **addOnDisposedWithErrorTeardown**(`parent`, `teardown`): `void`

Add `teardown` to `parent` that is only invoked if `parent` is disposed with an error.

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |
| `teardown` | [`SideEffect1`](functions.md#sideeffect1)<`unknown`\> |

#### Returns

`void`

___

### addOnDisposedWithoutError

▸ **addOnDisposedWithoutError**(`parent`, `child`): `void`

Add `child` to `parent`, only disposing child when `parent` is disposed without an error.

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |
| `child` | [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |

#### Returns

`void`

___

### addOnDisposedWithoutErrorTeardown

▸ **addOnDisposedWithoutErrorTeardown**(`parent`, `teardown`): `void`

Add `teardown` to `parent` that is only invoked if `parent` is disposed without an error.

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |
| `teardown` | [`SideEffect`](functions.md#sideeffect) |

#### Returns

`void`

___

### addTeardown

▸ **addTeardown**(`parent`, `teardown`): `void`

Add `teardown` to `parent`, invoking `teardown` when `parent` is disposed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |
| `teardown` | [`SideEffect1`](functions.md#sideeffect1)<[`Option`](option.md#option)<[`Error`](../interfaces/disposable.Error.md)\>\> |

#### Returns

`void`

___

### bindDisposables

▸ **bindDisposables**(`a`, `b`): `void`

Bind the provided disposables such that if either disposable is disposed,
it disposes the other.

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |
| `b` | [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |

#### Returns

`void`

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

▸ **dispose**(`e?`): [`SideEffect1`](functions.md#sideeffect1)<[`DisposableLike`](../interfaces/disposable.DisposableLike.md)\>

Dispose `disposable` with an optional error.

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | [`Error`](../interfaces/disposable.Error.md) |

#### Returns

[`SideEffect1`](functions.md#sideeffect1)<[`DisposableLike`](../interfaces/disposable.DisposableLike.md)\>

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
