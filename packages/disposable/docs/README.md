
# @reactive-js/disposable

## Index

### Interfaces

* [DisposableLike](interfaces/disposablelike.md)
* [ErrorLike](interfaces/errorlike.md)
* [SerialDisposableLike](interfaces/serialdisposablelike.md)

### Variables

* [disposed](README.md#const-disposed)

### Functions

* [add](README.md#add)
* [createDisposable](README.md#const-createdisposable)
* [createSerialDisposable](README.md#const-createserialdisposable)
* [dispose](README.md#dispose)

## Variables

### `Const` disposed

• **disposed**: *[DisposableLike](interfaces/disposablelike.md)* =  _disposed

A disposed DisposableLike instance.

## Functions

###  add

▸ **add**<**This**>(`this`: object & This, `disposable`: [DisposableLike](interfaces/disposablelike.md) | function): *This*

**Type parameters:**

▪ **This**: *[DisposableLike](interfaces/disposablelike.md)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | object & This |
`disposable` | [DisposableLike](interfaces/disposablelike.md) &#124; function |

**Returns:** *This*

___

### `Const` createDisposable

▸ **createDisposable**(`onDispose?`: undefined | function): *[DisposableLike](interfaces/disposablelike.md)*

Creates an empty DisposableLike instance.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`onDispose?` | undefined &#124; function | Optional teardown logic to attach to the newly created disposable.  |

**Returns:** *[DisposableLike](interfaces/disposablelike.md)*

___

### `Const` createSerialDisposable

▸ **createSerialDisposable**(): *[SerialDisposableLike](interfaces/serialdisposablelike.md)*

Creates a new SerialDisposableLike instance containing a disposed instance.

**Returns:** *[SerialDisposableLike](interfaces/serialdisposablelike.md)*

___

###  dispose

▸ **dispose**(`this`: object, `error?`: [ErrorLike](interfaces/errorlike.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`this` | object |
`error?` | [ErrorLike](interfaces/errorlike.md) |

**Returns:** *void*
