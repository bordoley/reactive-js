[@reactive-js/core - v0.0.37](../README.md) › ["disposable"](_disposable_.md)

# Module: "disposable"

## Index

### Classes

* [AbstractDisposable](../classes/_disposable_.abstractdisposable.md)
* [AbstractSerialDisposable](../classes/_disposable_.abstractserialdisposable.md)

### Interfaces

* [DisposableLike](../interfaces/_disposable_.disposablelike.md)
* [DisposableValueLike](../interfaces/_disposable_.disposablevaluelike.md)
* [SerialDisposableLike](../interfaces/_disposable_.serialdisposablelike.md)

### Type aliases

* [DisposableOrTeardown](_disposable_.md#disposableorteardown)
* [Exception](_disposable_.md#exception)

### Variables

* [disposed](_disposable_.md#const-disposed)

### Functions

* [add](_disposable_.md#add)
* [addDisposableOrTeardown](_disposable_.md#const-adddisposableorteardown)
* [createDisposable](_disposable_.md#const-createdisposable)
* [createDisposableValue](_disposable_.md#const-createdisposablevalue)
* [createSerialDisposable](_disposable_.md#const-createserialdisposable)
* [dispose](_disposable_.md#const-dispose)
* [disposeOnError](_disposable_.md#const-disposeonerror)
* [toErrorHandler](_disposable_.md#const-toerrorhandler)

## Type aliases

###  DisposableOrTeardown

Ƭ **DisposableOrTeardown**: *[DisposableLike](../interfaces/_disposable_.disposablelike.md) | function*

___

###  Exception

Ƭ **Exception**: *object*

A wrapper around a caught error to handle corner cases such
as a function which throws undefined or string.

#### Type declaration:

* **cause**: *unknown*

## Variables

### `Const` disposed

• **disposed**: *[DisposableLike](../interfaces/_disposable_.disposablelike.md)* = _disposed

A disposed DisposableLike instance.

## Functions

###  add

▸ **add**<**T**>(`disposable`: T, `firstChild`: [DisposableOrTeardown](_disposable_.md#disposableorteardown), ...`others`: [DisposableOrTeardown](_disposable_.md#disposableorteardown)[]): *T*

**Type parameters:**

▪ **T**: *[DisposableLike](../interfaces/_disposable_.disposablelike.md)*

**Parameters:**

Name | Type |
------ | ------ |
`disposable` | T |
`firstChild` | [DisposableOrTeardown](_disposable_.md#disposableorteardown) |
`...others` | [DisposableOrTeardown](_disposable_.md#disposableorteardown)[] |

**Returns:** *T*

___

### `Const` addDisposableOrTeardown

▸ **addDisposableOrTeardown**<**T**>(`d`: [DisposableOrTeardown](_disposable_.md#disposableorteardown)): *[Function1](_functions_.md#function1)‹T, T›*

**Type parameters:**

▪ **T**: *[DisposableLike](../interfaces/_disposable_.disposablelike.md)*

**Parameters:**

Name | Type |
------ | ------ |
`d` | [DisposableOrTeardown](_disposable_.md#disposableorteardown) |

**Returns:** *[Function1](_functions_.md#function1)‹T, T›*

___

### `Const` createDisposable

▸ **createDisposable**(`onDispose?`: function): *[DisposableLike](../interfaces/_disposable_.disposablelike.md)*

Creates an empty DisposableLike instance.

**Parameters:**

▪`Optional`  **onDispose**: *function*

Optional teardown logic to attach to the newly created disposable.

▸ (`error?`: [Exception](_disposable_.md#exception)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error?` | [Exception](_disposable_.md#exception) |

**Returns:** *[DisposableLike](../interfaces/_disposable_.disposablelike.md)*

___

### `Const` createDisposableValue

▸ **createDisposableValue**<**T**>(`value`: T, `cleanup`: [SideEffect1](_functions_.md#sideeffect1)‹T›): *[DisposableValueLike](../interfaces/_disposable_.disposablevaluelike.md)‹T›*

Creates a new DisposableValueLike instance.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |
`cleanup` | [SideEffect1](_functions_.md#sideeffect1)‹T› |

**Returns:** *[DisposableValueLike](../interfaces/_disposable_.disposablevaluelike.md)‹T›*

___

### `Const` createSerialDisposable

▸ **createSerialDisposable**(): *[SerialDisposableLike](../interfaces/_disposable_.serialdisposablelike.md)*

Creates a new SerialDisposableLike instance containing a disposed instance.

**Returns:** *[SerialDisposableLike](../interfaces/_disposable_.serialdisposablelike.md)*

___

### `Const` dispose

▸ **dispose**(`disposable`: [DisposableLike](../interfaces/_disposable_.disposablelike.md), `e?`: [Exception](_disposable_.md#exception)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`disposable` | [DisposableLike](../interfaces/_disposable_.disposablelike.md) |
`e?` | [Exception](_disposable_.md#exception) |

**Returns:** *void*

___

### `Const` disposeOnError

▸ **disposeOnError**(`disposable`: [DisposableLike](../interfaces/_disposable_.disposablelike.md)): *(Anonymous function)*

**Parameters:**

Name | Type |
------ | ------ |
`disposable` | [DisposableLike](../interfaces/_disposable_.disposablelike.md) |

**Returns:** *(Anonymous function)*

___

### `Const` toErrorHandler

▸ **toErrorHandler**(`disposable`: [DisposableLike](../interfaces/_disposable_.disposablelike.md)): *[SideEffect1](_functions_.md#sideeffect1)‹unknown›*

**Parameters:**

Name | Type |
------ | ------ |
`disposable` | [DisposableLike](../interfaces/_disposable_.disposablelike.md) |

**Returns:** *[SideEffect1](_functions_.md#sideeffect1)‹unknown›*
