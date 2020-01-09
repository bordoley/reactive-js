
# Interface: DisposableLike

Represents an unmanaged resource that can be disposed.

## Hierarchy

* **DisposableLike**

  ↳ [SerialDisposableLike](serialdisposablelike.md)

## Index

### Properties

* [isDisposed](disposablelike.md#isdisposed)

### Methods

* [add](disposablelike.md#add)
* [dispose](disposablelike.md#dispose)

## Properties

###  isDisposed

• **isDisposed**: *boolean*

Returns true if this resource has been disposed.

## Methods

###  add

▸ **add**(`disposable`: [DisposableLike](disposablelike.md) | function): *this*

Adds the given disposable to this container or disposes it if the container has been disposed.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`disposable` | [DisposableLike](disposablelike.md) &#124; function |   |

**Returns:** *this*

___

###  dispose

▸ **dispose**(`error?`: [ErrorLike](errorlike.md)): *void*

Dispose the resource. The operation is idempotent.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`error?` | [ErrorLike](errorlike.md) | An optional error that to signal that the resource is being disposed due to an error.  |

**Returns:** *void*
