
# @reactive-js/disposable

## Index

### Interfaces

* [DisposableLike](interfaces/disposablelike.md)
* [ErrorLike](interfaces/errorlike.md)
* [SerialDisposableLike](interfaces/serialdisposablelike.md)

### Type aliases

* [DisposableOrTeardown](README.md#disposableorteardown)

### Variables

* [disposed](README.md#const-disposed)

### Functions

* [createDisposable](README.md#const-createdisposable)
* [createSerialDisposable](README.md#const-createserialdisposable)
* [throwIfDisposed](README.md#const-throwifdisposed)

### Object literals

* [disposableMixin](README.md#const-disposablemixin)

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

## Object literals

### `Const` disposableMixin

### ▪ **disposableMixin**: *object*

###  add

▸ **add**<**This**>(`this`: object & This, `disposable`: [DisposableOrTeardown](README.md#disposableorteardown)): *This*

**Type parameters:**

▪ **This**: *[DisposableLike](interfaces/disposablelike.md)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | object & This |
`disposable` | [DisposableOrTeardown](README.md#disposableorteardown) |

**Returns:** *This*

###  dispose

▸ **dispose**(`this`: object, `error?`: [ErrorLike](interfaces/errorlike.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`this` | object |
`error?` | [ErrorLike](interfaces/errorlike.md) |

**Returns:** *void*
