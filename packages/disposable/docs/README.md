
# @reactive-js/disposable

## Index

### Classes

* [AbstractDisposable](classes/abstractdisposable.md)
* [AbstractSerialDisposable](classes/abstractserialdisposable.md)

### Interfaces

* [DisposableLike](interfaces/disposablelike.md)
* [DisposableValueLike](interfaces/disposablevaluelike.md)
* [ErrorLike](interfaces/errorlike.md)
* [SerialDisposableLike](interfaces/serialdisposablelike.md)

### Variables

* [disposed](README.md#const-disposed)

### Functions

* [createDisposable](README.md#const-createdisposable)
* [createDisposableValue](README.md#const-createdisposablevalue)
* [createSerialDisposable](README.md#const-createserialdisposable)

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
