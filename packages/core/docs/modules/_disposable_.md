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

* [Exception](_disposable_.md#exception)

### Variables

* [disposed](_disposable_.md#const-disposed)

### Functions

* [createDisposable](_disposable_.md#const-createdisposable)
* [createDisposableValue](_disposable_.md#const-createdisposablevalue)
* [createSerialDisposable](_disposable_.md#const-createserialdisposable)

## Type aliases

###  Exception

Ƭ **Exception**: *object*

A wrapper around a caught exception to handle corner cases such
as a function which throws undefined or string.

#### Type declaration:

* **cause**: *unknown*

## Variables

### `Const` disposed

• **disposed**: *[DisposableLike](../interfaces/_disposable_.disposablelike.md)* = _disposed

A disposed DisposableLike instance.

## Functions

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

▸ **createDisposableValue**<**T**>(`value`: T, `cleanup`: function): *[DisposableValueLike](../interfaces/_disposable_.disposablevaluelike.md)‹T›*

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

**Returns:** *[DisposableValueLike](../interfaces/_disposable_.disposablevaluelike.md)‹T›*

___

### `Const` createSerialDisposable

▸ **createSerialDisposable**(): *[SerialDisposableLike](../interfaces/_disposable_.serialdisposablelike.md)*

Creates a new SerialDisposableLike instance containing a disposed instance.

**Returns:** *[SerialDisposableLike](../interfaces/_disposable_.serialdisposablelike.md)*
