
# @reactive-js/disposable

## Index

### Interfaces

* [DisposableLike](interfaces/disposablelike.md)
* [DisposableWrapperLike](interfaces/disposablewrapperlike.md)
* [ErrorLike](interfaces/errorlike.md)
* [SerialDisposableLike](interfaces/serialdisposablelike.md)

### Variables

* [disposed](README.md#const-disposed)

### Functions

* [add](README.md#add)
* [createDisposable](README.md#const-createdisposable)
* [createDisposableWrapper](README.md#const-createdisposablewrapper)
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

### `Const` createDisposableWrapper

▸ **createDisposableWrapper**<**T**>(`value`: T, `cleanup`: function): *[DisposableWrapperLike](interfaces/disposablewrapperlike.md)‹T›*

Creates a new DisposableWrapperLike instance.

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

**Returns:** *[DisposableWrapperLike](interfaces/disposablewrapperlike.md)‹T›*

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
