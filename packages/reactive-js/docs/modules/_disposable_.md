[reactive-js - v0.0.42](../README.md) › ["disposable"](_disposable_.md)

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

* [addDisposable](_disposable_.md#const-adddisposable)
* [addDisposableDisposeParentOnChildError](_disposable_.md#const-adddisposabledisposeparentonchilderror)
* [addOnDisposedWithError](_disposable_.md#const-addondisposedwitherror)
* [addOnDisposedWithErrorTeardown](_disposable_.md#const-addondisposedwitherrorteardown)
* [addOnDisposedWithoutError](_disposable_.md#const-addondisposedwithouterror)
* [addOnDisposedWithoutErrorTeardown](_disposable_.md#const-addondisposedwithouterrorteardown)
* [addTeardown](_disposable_.md#const-addteardown)
* [bindDisposables](_disposable_.md#const-binddisposables)
* [createDisposable](_disposable_.md#const-createdisposable)
* [createDisposableValue](_disposable_.md#const-createdisposablevalue)
* [createSerialDisposable](_disposable_.md#const-createserialdisposable)
* [dispose](_disposable_.md#const-dispose)
* [toDisposeOnErrorTeardown](_disposable_.md#const-todisposeonerrorteardown)
* [toErrorHandler](_disposable_.md#const-toerrorhandler)

## Type aliases

###  DisposableOrTeardown

Ƭ **DisposableOrTeardown**: *[DisposableLike](../interfaces/_disposable_.disposablelike.md) | [SideEffect1](_functions_.md#sideeffect1)‹[Option](_option_.md#option)‹[Exception](_disposable_.md#exception)››*

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

### `Const` addDisposable

▸ **addDisposable**(`parent`: [DisposableLike](../interfaces/_disposable_.disposablelike.md), `child`: [DisposableLike](../interfaces/_disposable_.disposablelike.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`parent` | [DisposableLike](../interfaces/_disposable_.disposablelike.md) |
`child` | [DisposableLike](../interfaces/_disposable_.disposablelike.md) |

**Returns:** *void*

___

### `Const` addDisposableDisposeParentOnChildError

▸ **addDisposableDisposeParentOnChildError**(`parent`: [DisposableLike](../interfaces/_disposable_.disposablelike.md), `child`: [DisposableLike](../interfaces/_disposable_.disposablelike.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`parent` | [DisposableLike](../interfaces/_disposable_.disposablelike.md) |
`child` | [DisposableLike](../interfaces/_disposable_.disposablelike.md) |

**Returns:** *void*

___

### `Const` addOnDisposedWithError

▸ **addOnDisposedWithError**(`parent`: [DisposableLike](../interfaces/_disposable_.disposablelike.md), `child`: [DisposableLike](../interfaces/_disposable_.disposablelike.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`parent` | [DisposableLike](../interfaces/_disposable_.disposablelike.md) |
`child` | [DisposableLike](../interfaces/_disposable_.disposablelike.md) |

**Returns:** *void*

___

### `Const` addOnDisposedWithErrorTeardown

▸ **addOnDisposedWithErrorTeardown**(`parent`: [DisposableLike](../interfaces/_disposable_.disposablelike.md), `teardown`: [SideEffect1](_functions_.md#sideeffect1)‹unknown›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`parent` | [DisposableLike](../interfaces/_disposable_.disposablelike.md) |
`teardown` | [SideEffect1](_functions_.md#sideeffect1)‹unknown› |

**Returns:** *void*

___

### `Const` addOnDisposedWithoutError

▸ **addOnDisposedWithoutError**(`parent`: [DisposableLike](../interfaces/_disposable_.disposablelike.md), `child`: [DisposableLike](../interfaces/_disposable_.disposablelike.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`parent` | [DisposableLike](../interfaces/_disposable_.disposablelike.md) |
`child` | [DisposableLike](../interfaces/_disposable_.disposablelike.md) |

**Returns:** *void*

___

### `Const` addOnDisposedWithoutErrorTeardown

▸ **addOnDisposedWithoutErrorTeardown**(`parent`: [DisposableLike](../interfaces/_disposable_.disposablelike.md), `teardown`: [SideEffect](_functions_.md#sideeffect)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`parent` | [DisposableLike](../interfaces/_disposable_.disposablelike.md) |
`teardown` | [SideEffect](_functions_.md#sideeffect) |

**Returns:** *void*

___

### `Const` addTeardown

▸ **addTeardown**(`parent`: [DisposableLike](../interfaces/_disposable_.disposablelike.md), `teardown`: [SideEffect1](_functions_.md#sideeffect1)‹[Option](_option_.md#option)‹[Exception](_disposable_.md#exception)››): *void*

**Parameters:**

Name | Type |
------ | ------ |
`parent` | [DisposableLike](../interfaces/_disposable_.disposablelike.md) |
`teardown` | [SideEffect1](_functions_.md#sideeffect1)‹[Option](_option_.md#option)‹[Exception](_disposable_.md#exception)›› |

**Returns:** *void*

___

### `Const` bindDisposables

▸ **bindDisposables**(`a`: [DisposableLike](../interfaces/_disposable_.disposablelike.md), `b`: [DisposableLike](../interfaces/_disposable_.disposablelike.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`a` | [DisposableLike](../interfaces/_disposable_.disposablelike.md) |
`b` | [DisposableLike](../interfaces/_disposable_.disposablelike.md) |

**Returns:** *void*

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

### `Const` toDisposeOnErrorTeardown

▸ **toDisposeOnErrorTeardown**(`disposable`: [DisposableLike](../interfaces/_disposable_.disposablelike.md)): *[SideEffect1](_functions_.md#sideeffect1)‹[Option](_option_.md#option)‹[Exception](_disposable_.md#exception)››*

**Parameters:**

Name | Type |
------ | ------ |
`disposable` | [DisposableLike](../interfaces/_disposable_.disposablelike.md) |

**Returns:** *[SideEffect1](_functions_.md#sideeffect1)‹[Option](_option_.md#option)‹[Exception](_disposable_.md#exception)››*

___

### `Const` toErrorHandler

▸ **toErrorHandler**(`disposable`: [DisposableLike](../interfaces/_disposable_.disposablelike.md)): *[SideEffect1](_functions_.md#sideeffect1)‹unknown›*

**Parameters:**

Name | Type |
------ | ------ |
`disposable` | [DisposableLike](../interfaces/_disposable_.disposablelike.md) |

**Returns:** *[SideEffect1](_functions_.md#sideeffect1)‹unknown›*
