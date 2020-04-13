
# @reactive-js/disposable

## Index

### Classes

* [AbstractDisposable](classes/abstractdisposable.md)
* [AbstractSerialDisposable](classes/abstractserialdisposable.md)

### Interfaces

* [DisposableLike](interfaces/disposablelike.md)
* [DisposableValueLike](interfaces/disposablevaluelike.md)
* [SerialDisposableLike](interfaces/serialdisposablelike.md)

### Type aliases

* [Exception](README.md#exception)

### Variables

* [disposed](README.md#const-disposed)

### Functions

* [createDisposable](README.md#const-createdisposable)
* [createDisposableValue](README.md#const-createdisposablevalue)
* [createSerialDisposable](README.md#const-createserialdisposable)

## Type aliases

###  Exception

Ƭ **Exception**: *object*

A wrapper around a caught exception to handle corner cases such
as a function which throws undefined or string.

#### Type declaration:

## Variables

### `Const` disposed

• **disposed**: *[DisposableLike](interfaces/disposablelike.md)* =  _disposed

A disposed DisposableLike instance.

## Functions

### `Const` createDisposable

▸ **createDisposable**(`onDispose?`: undefined | function): *[DisposableLike](interfaces/disposablelike.md)*

Creates an empty DisposableLike instance.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`onDispose?` | undefined &#124; function | Optional teardown logic to attach to the newly created disposable.  |

**Returns:** *[DisposableLike](interfaces/disposablelike.md)*

___

### `Const` createDisposableValue

▸ **createDisposableValue**<**T**>(`value`: T, `cleanup`: function): *[DisposableValueLike](interfaces/disposablevaluelike.md)‹T›*

Creates a new DisposableValueLike instance.

**Type parameters:**

▪ **T**

**Parameters:**

▪ **value**: *T*

▪ **cleanup**: *function*

▸ (`v`: T): *void*

**Parameters:**

Name | Type |
------ | ------ |
`v` | T |

**Returns:** *[DisposableValueLike](interfaces/disposablevaluelike.md)‹T›*

___

### `Const` createSerialDisposable

▸ **createSerialDisposable**(): *[SerialDisposableLike](interfaces/serialdisposablelike.md)*

Creates a new SerialDisposableLike instance containing a disposed instance.

**Returns:** *[SerialDisposableLike](interfaces/serialdisposablelike.md)*
