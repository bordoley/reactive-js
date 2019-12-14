
# @reactive-js/disposable

## Index

### Interfaces

* [DisposableLike](interfaces/disposablelike.md)
* [SerialDisposableLike](interfaces/serialdisposablelike.md)

### Type aliases

* [DisposableOrTeardown](README.md#disposableorteardown)

### Variables

* [disposed](README.md#const-disposed)

### Functions

* [createDisposable](README.md#const-createdisposable)
* [createSerialDisposable](README.md#const-createserialdisposable)
* [throwIfDisposed](README.md#const-throwifdisposed)

## Type aliases

###  DisposableOrTeardown

Ƭ **DisposableOrTeardown**: *[DisposableLike](interfaces/disposablelike.md) | function*

## Variables

### `Const` disposed

• **disposed**: *[DisposableLike](interfaces/disposablelike.md)* =  _disposed

A disposed DisposableLike instance.

## Functions

### `Const` createDisposable

▸ **createDisposable**(`onDispose?`: undefined | function): *[DisposableLike](interfaces/disposablelike.md)*

Creates an empty DisposableLike instance.

**Parameters:**

Name | Type |
------ | ------ |
`onDispose?` | undefined &#124; function |

**Returns:** *[DisposableLike](interfaces/disposablelike.md)*

___

### `Const` createSerialDisposable

▸ **createSerialDisposable**(): *[SerialDisposableLike](interfaces/serialdisposablelike.md)*

Creates a new SerialDisposableLike instance containing a disposed instance.

**Returns:** *[SerialDisposableLike](interfaces/serialdisposablelike.md)*

___

### `Const` throwIfDisposed

▸ **throwIfDisposed**(`disposable`: [DisposableLike](interfaces/disposablelike.md)): *void*

Throws an exception if the given disposable is disposed.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`disposable` | [DisposableLike](interfaces/disposablelike.md) |   |

**Returns:** *void*
