
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

▸ **add**(`disposable`: [DisposableOrTeardown](../README.md#disposableorteardown)): *this*

Adds the given disposables to this container or disposes them if the container has been disposed.

**Parameters:**

Name | Type |
------ | ------ |
`disposable` | [DisposableOrTeardown](../README.md#disposableorteardown) |

**Returns:** *this*

___

###  dispose

▸ **dispose**(`error?`: [ErrorLike](errorlike.md)): *void*

Dispose the resource, the operation should be idempotent.

**Parameters:**

Name | Type |
------ | ------ |
`error?` | [ErrorLike](errorlike.md) |

**Returns:** *void*
