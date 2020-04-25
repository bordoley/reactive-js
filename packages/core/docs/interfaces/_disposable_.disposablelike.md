[@reactive-js/core - v0.0.37](../README.md) › ["disposable"](../modules/_disposable_.md) › [DisposableLike](_disposable_.disposablelike.md)

# Interface: DisposableLike

Represents an unmanaged resource that can be disposed.

## Hierarchy

* **DisposableLike**

  ↳ [SerialDisposableLike](_disposable_.serialdisposablelike.md)

  ↳ [DisposableValueLike](_disposable_.disposablevaluelike.md)

  ↳ [MulticastObservableLike](_observable_.multicastobservablelike.md)

  ↳ [SubscriberLike](_observable_.subscriberlike.md)

  ↳ [ReactiveCacheLike](_reactive_cache_.reactivecachelike.md)

  ↳ [ResourceManagerLike](_resource_manager_.resourcemanagerlike.md)

  ↳ [SchedulerContinuationLike](_scheduler_.schedulercontinuationlike.md)

  ↳ [VirtualTimeSchedulerLike](_scheduler_.virtualtimeschedulerlike.md)

## Implemented by

* [AbstractDelegatingSubscriber](../classes/_observable_.abstractdelegatingsubscriber.md)
* [AbstractDisposable](../classes/_disposable_.abstractdisposable.md)
* [AbstractSchedulerContinuation](../classes/_scheduler_.abstractschedulercontinuation.md)
* [AbstractSerialDisposable](../classes/_disposable_.abstractserialdisposable.md)

## Index

### Properties

* [isDisposed](_disposable_.disposablelike.md#isdisposed)

### Methods

* [add](_disposable_.disposablelike.md#add)
* [dispose](_disposable_.disposablelike.md#dispose)

## Properties

###  isDisposed

• **isDisposed**: *boolean*

`true` if this resource has been disposed, otherwise false

## Methods

###  add

▸ **add**(`disposable`: [DisposableLike](_disposable_.disposablelike.md) | function): *this*

Adds the given disposable to this container or disposes it if the container has been disposed.

**Parameters:**

Name | Type |
------ | ------ |
`disposable` | [DisposableLike](_disposable_.disposablelike.md) &#124; function |

**Returns:** *this*

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
