[Reactive-JS](../README.md) / disposable

# Module: disposable

## Index

### Classes

* [AbstractDisposable](../classes/disposable.abstractdisposable.md)
* [AbstractSerialDisposable](../classes/disposable.abstractserialdisposable.md)

### Interfaces

* [DisposableLike](../interfaces/disposable.disposablelike.md)
* [DisposableValueLike](../interfaces/disposable.disposablevaluelike.md)
* [SerialDisposableLike](../interfaces/disposable.serialdisposablelike.md)

### Type aliases

* [DisposableOrTeardown](disposable.md#disposableorteardown)
* [Error](disposable.md#error)

### Variables

* [disposed](disposable.md#disposed)

### Functions

* [addDisposable](disposable.md#adddisposable)
* [addDisposableDisposeParentOnChildError](disposable.md#adddisposabledisposeparentonchilderror)
* [addOnDisposedWithError](disposable.md#addondisposedwitherror)
* [addOnDisposedWithErrorTeardown](disposable.md#addondisposedwitherrorteardown)
* [addOnDisposedWithoutError](disposable.md#addondisposedwithouterror)
* [addOnDisposedWithoutErrorTeardown](disposable.md#addondisposedwithouterrorteardown)
* [addTeardown](disposable.md#addteardown)
* [bindDisposables](disposable.md#binddisposables)
* [createDisposable](disposable.md#createdisposable)
* [createDisposableValue](disposable.md#createdisposablevalue)
* [createSerialDisposable](disposable.md#createserialdisposable)
* [dispose](disposable.md#dispose)
* [toAbortSignal](disposable.md#toabortsignal)
* [toErrorHandler](disposable.md#toerrorhandler)

## Type aliases

### DisposableOrTeardown

Ƭ **DisposableOrTeardown**: [*DisposableLike*](../interfaces/disposable.disposablelike.md) \| [*SideEffect1*](functions.md#sideeffect1)<[*Option*](option.md#option)<[*Error*](disposable.md#error)\>\>

___

### Error

Ƭ **Error**: { `cause`: *unknown*  }

A wrapper around a caught error to handle corner cases such
as a function which throws undefined or string.

#### Type declaration:

Name | Type | Description |
------ | ------ | ------ |
`cause` | *unknown* | The underlying cause of the error.   |

## Variables

### disposed

• `Const` **disposed**: [*DisposableLike*](../interfaces/disposable.disposablelike.md)

A disposed `DisposableLike` instance.

## Functions

### addDisposable

▸ `Const`**addDisposable**(`parent`: [*DisposableLike*](../interfaces/disposable.disposablelike.md), `child`: [*DisposableLike*](../interfaces/disposable.disposablelike.md)): *void*

Add `child` to `parent`, disposing the child when the parent is disposed.

#### Parameters:

Name | Type |
------ | ------ |
`parent` | [*DisposableLike*](../interfaces/disposable.disposablelike.md) |
`child` | [*DisposableLike*](../interfaces/disposable.disposablelike.md) |

**Returns:** *void*

___

### addDisposableDisposeParentOnChildError

▸ `Const`**addDisposableDisposeParentOnChildError**(`parent`: [*DisposableLike*](../interfaces/disposable.disposablelike.md), `child`: [*DisposableLike*](../interfaces/disposable.disposablelike.md)): *void*

Add `child` to `parent`. If `child` is disposed with an error it disposed `parent`.

#### Parameters:

Name | Type |
------ | ------ |
`parent` | [*DisposableLike*](../interfaces/disposable.disposablelike.md) |
`child` | [*DisposableLike*](../interfaces/disposable.disposablelike.md) |

**Returns:** *void*

___

### addOnDisposedWithError

▸ `Const`**addOnDisposedWithError**(`parent`: [*DisposableLike*](../interfaces/disposable.disposablelike.md), `child`: [*DisposableLike*](../interfaces/disposable.disposablelike.md)): *void*

Add `child` to `parent`, only disposing child when `parent` is disposed with an error.

#### Parameters:

Name | Type |
------ | ------ |
`parent` | [*DisposableLike*](../interfaces/disposable.disposablelike.md) |
`child` | [*DisposableLike*](../interfaces/disposable.disposablelike.md) |

**Returns:** *void*

___

### addOnDisposedWithErrorTeardown

▸ `Const`**addOnDisposedWithErrorTeardown**(`parent`: [*DisposableLike*](../interfaces/disposable.disposablelike.md), `teardown`: [*SideEffect1*](functions.md#sideeffect1)<*unknown*\>): *void*

Add `teardown` to `parent` that is only invoked if `parent` is disposed with an error.

#### Parameters:

Name | Type |
------ | ------ |
`parent` | [*DisposableLike*](../interfaces/disposable.disposablelike.md) |
`teardown` | [*SideEffect1*](functions.md#sideeffect1)<*unknown*\> |

**Returns:** *void*

___

### addOnDisposedWithoutError

▸ `Const`**addOnDisposedWithoutError**(`parent`: [*DisposableLike*](../interfaces/disposable.disposablelike.md), `child`: [*DisposableLike*](../interfaces/disposable.disposablelike.md)): *void*

Add `child` to `parent`, only disposing child when `parent` is disposed without an error.

#### Parameters:

Name | Type |
------ | ------ |
`parent` | [*DisposableLike*](../interfaces/disposable.disposablelike.md) |
`child` | [*DisposableLike*](../interfaces/disposable.disposablelike.md) |

**Returns:** *void*

___

### addOnDisposedWithoutErrorTeardown

▸ `Const`**addOnDisposedWithoutErrorTeardown**(`parent`: [*DisposableLike*](../interfaces/disposable.disposablelike.md), `teardown`: [*SideEffect*](functions.md#sideeffect)): *void*

Add `teardown` to `parent` that is only invoked if `parent` is disposed without an error.

#### Parameters:

Name | Type |
------ | ------ |
`parent` | [*DisposableLike*](../interfaces/disposable.disposablelike.md) |
`teardown` | [*SideEffect*](functions.md#sideeffect) |

**Returns:** *void*

___

### addTeardown

▸ `Const`**addTeardown**(`parent`: [*DisposableLike*](../interfaces/disposable.disposablelike.md), `teardown`: [*SideEffect1*](functions.md#sideeffect1)<[*Option*](option.md#option)<[*Error*](disposable.md#error)\>\>): *void*

Add `teardown` to `parent`, invoking `teardown` when `parent` is disposed.

#### Parameters:

Name | Type |
------ | ------ |
`parent` | [*DisposableLike*](../interfaces/disposable.disposablelike.md) |
`teardown` | [*SideEffect1*](functions.md#sideeffect1)<[*Option*](option.md#option)<[*Error*](disposable.md#error)\>\> |

**Returns:** *void*

___

### bindDisposables

▸ `Const`**bindDisposables**(`a`: [*DisposableLike*](../interfaces/disposable.disposablelike.md), `b`: [*DisposableLike*](../interfaces/disposable.disposablelike.md)): *void*

Bind the provided disposables such that if either disposable is disposed,
it disposes the other.

#### Parameters:

Name | Type |
------ | ------ |
`a` | [*DisposableLike*](../interfaces/disposable.disposablelike.md) |
`b` | [*DisposableLike*](../interfaces/disposable.disposablelike.md) |

**Returns:** *void*

___

### createDisposable

▸ `Const`**createDisposable**(`onDispose?`: (`error?`: [*Option*](option.md#option)<[*Error*](disposable.md#error)\>) => *void*): [*DisposableLike*](../interfaces/disposable.disposablelike.md)

Creates an empty `DisposableLike` instance.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`onDispose?` | (`error?`: [*Option*](option.md#option)<[*Error*](disposable.md#error)\>) => *void* | Optional teardown logic to attach to the newly created disposable.    |

**Returns:** [*DisposableLike*](../interfaces/disposable.disposablelike.md)

___

### createDisposableValue

▸ `Const`**createDisposableValue**<T\>(`value`: T, `cleanup`: [*SideEffect1*](functions.md#sideeffect1)<T\>): [*DisposableValueLike*](../interfaces/disposable.disposablevaluelike.md)<T\>

Creates a new DisposableValueLike instance, which applies
the supplied `cleanup` side effect to `value` when disposed.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`value` | T |
`cleanup` | [*SideEffect1*](functions.md#sideeffect1)<T\> |

**Returns:** [*DisposableValueLike*](../interfaces/disposable.disposablevaluelike.md)<T\>

___

### createSerialDisposable

▸ `Const`**createSerialDisposable**(): [*SerialDisposableLike*](../interfaces/disposable.serialdisposablelike.md)

Creates a new `SerialDisposableLike` instance containing a disposed instance.

**Returns:** [*SerialDisposableLike*](../interfaces/disposable.serialdisposablelike.md)

___

### dispose

▸ `Const`**dispose**(`e?`: [*Option*](option.md#option)<[*Error*](disposable.md#error)\>): [*SideEffect1*](functions.md#sideeffect1)<[*DisposableLike*](../interfaces/disposable.disposablelike.md)\>

Dispose `disposable` with an optional error.

#### Parameters:

Name | Type |
------ | ------ |
`e?` | [*Option*](option.md#option)<[*Error*](disposable.md#error)\> |

**Returns:** [*SideEffect1*](functions.md#sideeffect1)<[*DisposableLike*](../interfaces/disposable.disposablelike.md)\>

___

### toAbortSignal

▸ `Const`**toAbortSignal**(`disposable`: [*DisposableLike*](../interfaces/disposable.disposablelike.md)): AbortSignal

#### Parameters:

Name | Type |
------ | ------ |
`disposable` | [*DisposableLike*](../interfaces/disposable.disposablelike.md) |

**Returns:** AbortSignal

___

### toErrorHandler

▸ `Const`**toErrorHandler**(`disposable`: [*DisposableLike*](../interfaces/disposable.disposablelike.md)): [*SideEffect1*](functions.md#sideeffect1)<*unknown*\>

Returns a function that disposes `disposable` with an error wrapping the provided `cause`.

#### Parameters:

Name | Type |
------ | ------ |
`disposable` | [*DisposableLike*](../interfaces/disposable.disposablelike.md) |

**Returns:** [*SideEffect1*](functions.md#sideeffect1)<*unknown*\>
