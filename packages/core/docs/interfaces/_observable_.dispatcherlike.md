[@reactive-js/core - v0.0.37](../README.md) › ["observable"](../modules/_observable_.md) › [DispatcherLike](_observable_.dispatcherlike.md)

# Interface: DispatcherLike <**T**>

## Type parameters

▪ **T**

## Hierarchy

* [DisposableLike](_disposable_.disposablelike.md)

  ↳ **DispatcherLike**

  ↳ [StreamLike](_observable_.streamlike.md)

## Index

### Properties

* [isDisposed](_observable_.dispatcherlike.md#isdisposed)

### Methods

* [add](_observable_.dispatcherlike.md#add)
* [dispatch](_observable_.dispatcherlike.md#dispatch)
* [dispose](_observable_.dispatcherlike.md#dispose)

## Properties

###  isDisposed

• **isDisposed**: *boolean*

*Inherited from [DisposableLike](_disposable_.disposablelike.md).[isDisposed](_disposable_.disposablelike.md#isdisposed)*

`true` if this resource has been disposed, otherwise false

## Methods

###  add

▸ **add**(`disposable`: DisposableOrTeardown): *this*

*Inherited from [DisposableLike](_disposable_.disposablelike.md).[add](_disposable_.disposablelike.md#add)*

Adds the given disposable to this container or disposes it if the container has been disposed.

**Parameters:**

Name | Type |
------ | ------ |
`disposable` | DisposableOrTeardown |

**Returns:** *this*

`this`

___

###  dispatch

▸ **dispatch**(`req`: T): *void*

Dispatches the next request

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`req` | T |   |

**Returns:** *void*

___

###  dispose

▸ **dispose**(`error?`: [Exception](../modules/_disposable_.md#exception)): *void*

*Inherited from [DisposableLike](_disposable_.disposablelike.md).[dispose](_disposable_.disposablelike.md#dispose)*

Dispose the resource. The operation is idempotent.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`error?` | [Exception](../modules/_disposable_.md#exception) | An optional error that to signal that the resource is being disposed due to an error.  |

**Returns:** *void*
