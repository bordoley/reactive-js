
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
* [remove](disposablelike.md#remove)

## Properties

###  isDisposed

• **isDisposed**: *boolean*

Returns true if this resource has been disposed.

## Methods

###  add

▸ **add**(`disposable`: [DisposableOrTeardown](../README.md#disposableorteardown), ...`disposables`: [DisposableOrTeardown](../README.md#disposableorteardown)[]): *this*

Adds the given disposables to this container or disposes them if the container has been disposed.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`disposable` | [DisposableOrTeardown](../README.md#disposableorteardown) | - |
`...disposables` | [DisposableOrTeardown](../README.md#disposableorteardown)[] |   |

**Returns:** *this*

___

###  dispose

▸ **dispose**(): *boolean*

Dispose the resource, the operation should be idempotent.

**Returns:** *boolean*

___

###  remove

▸ **remove**(`disposable`: [DisposableOrTeardown](../README.md#disposableorteardown), ...`disposables`: [DisposableOrTeardown](../README.md#disposableorteardown)[]): *this*

Removes and disposes the given disposables if they are part of this container.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`disposable` | [DisposableOrTeardown](../README.md#disposableorteardown) | - |
`...disposables` | [DisposableOrTeardown](../README.md#disposableorteardown)[] |   |

**Returns:** *this*
