
# Interface: DisposableLike

Represents an unmanaged resource that can be disposed.

## Hierarchy

* **DisposableLike**

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

▸ **add**(`disposable`: [DisposableOrTeardown](../README.md#disposableorteardown), ...`disposables`: [DisposableOrTeardown](../README.md#disposableorteardown)[]): *void*

Adds the given disposables to this container or disposes them if the container has been disposed.

**Parameters:**

Name | Type |
------ | ------ |
`disposable` | [DisposableOrTeardown](../README.md#disposableorteardown) |
`...disposables` | [DisposableOrTeardown](../README.md#disposableorteardown)[] |

**Returns:** *void*

___

###  dispose

▸ **dispose**(): *void*

Dispose the resource, the operation should be idempotent.

**Returns:** *void*

___

###  remove

▸ **remove**(`disposable`: [DisposableOrTeardown](../README.md#disposableorteardown), ...`disposables`: [DisposableOrTeardown](../README.md#disposableorteardown)[]): *void*

Removes and disposes the given disposables if they are part of this container.

**Parameters:**

Name | Type |
------ | ------ |
`disposable` | [DisposableOrTeardown](../README.md#disposableorteardown) |
`...disposables` | [DisposableOrTeardown](../README.md#disposableorteardown)[] |

**Returns:** *void*
