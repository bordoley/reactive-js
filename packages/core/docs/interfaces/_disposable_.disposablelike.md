[@reactive-js/core - v0.0.42](../README.md) › ["disposable"](../modules/_disposable_.md) › [DisposableLike](_disposable_.disposablelike.md)

# Interface: DisposableLike

Represents an unmanaged resource that can be disposed.

## Hierarchy

* **DisposableLike**

  ↳ [SerialDisposableLike](_disposable_.serialdisposablelike.md)

  ↳ [DisposableValueLike](_disposable_.disposablevaluelike.md)

  ↳ [DispatcherLike](_observable_.dispatcherlike.md)

  ↳ [MulticastObservableLike](_observable_.multicastobservablelike.md)

  ↳ [ObserverLike](_observable_.observerlike.md)

  ↳ [SchedulerContinuationLike](_scheduler_.schedulercontinuationlike.md)

  ↳ [VirtualTimeSchedulerLike](_scheduler_.virtualtimeschedulerlike.md)

## Implemented by

* [AbstractDisposable](../classes/_disposable_.abstractdisposable.md)
* [AbstractSerialDisposable](../classes/_disposable_.abstractserialdisposable.md)

## Index

### Properties

* [error](_disposable_.disposablelike.md#error)
* [isDisposed](_disposable_.disposablelike.md#isdisposed)

### Methods

* [add](_disposable_.disposablelike.md#add)
* [dispose](_disposable_.disposablelike.md#dispose)

## Properties

###  error

• **error**: *[Option](../modules/_option_.md#option)‹[Exception](../modules/_disposable_.md#exception)›*

The error the disposable was disposed with if disposed.

___

###  isDisposed

• **isDisposed**: *boolean*

`true` if this resource has been disposed, otherwise false

## Methods

###  add

▸ **add**(`disposable`: [DisposableOrTeardown](../modules/_disposable_.md#disposableorteardown)): *void*

Adds the given disposable to this container or disposes it if the container has been disposed.

**Parameters:**

Name | Type |
------ | ------ |
`disposable` | [DisposableOrTeardown](../modules/_disposable_.md#disposableorteardown) |

**Returns:** *void*

`this`

___

###  dispose

▸ **dispose**(`error?`: [Exception](../modules/_disposable_.md#exception)): *void*

Dispose the resource. The operation is idempotent.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`error?` | [Exception](../modules/_disposable_.md#exception) | An optional error that to signal that the resource is being disposed due to an error.  |

**Returns:** *void*
