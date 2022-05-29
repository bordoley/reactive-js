[Reactive-JS](../README.md) / [disposable](../modules/disposable.md) / DisposableLike

# Interface: DisposableLike

Represents an unmanaged resource that can be disposed.

## Hierarchy

* **DisposableLike**

  ↳ [*DisposableValueLike*](disposable.disposablevaluelike.md)

  ↳ [*SerialDisposableLike*](disposable.serialdisposablelike.md)

  ↳ [*DispatcherLike*](observable.dispatcherlike.md)

  ↳ [*MulticastObservableLike*](observable.multicastobservablelike.md)

  ↳ [*ObserverLike*](observable.observerlike.md)

  ↳ [*SchedulerContinuationLike*](scheduler.schedulercontinuationlike.md)

  ↳ [*VirtualTimeSchedulerLike*](scheduler.virtualtimeschedulerlike.md)

## Implemented by

* [*AbstractDisposable*](../classes/disposable.abstractdisposable.md)

## Index

### Properties

* [error](disposable.disposablelike.md#error)
* [isDisposed](disposable.disposablelike.md#isdisposed)

### Methods

* [add](disposable.disposablelike.md#add)
* [dispose](disposable.disposablelike.md#dispose)

## Properties

### error

• `Readonly` **error**: [*Option*](../modules/option.md#option)<[*Error*](../modules/disposable.md#error)\>

The error the `DisposableLike` was disposed with if disposed.

___

### isDisposed

• `Readonly` **isDisposed**: *boolean*

`true` if this resource has been disposed, otherwise false

## Methods

### add

▸ **add**(`disposable`: [*DisposableOrTeardown*](../modules/disposable.md#disposableorteardown)): *void*

Adds the given `DisposableOrTeardown` to this container or disposes it if the container has been disposed.

#### Parameters:

Name | Type |
------ | ------ |
`disposable` | [*DisposableOrTeardown*](../modules/disposable.md#disposableorteardown) |

**Returns:** *void*

`this`

___

### dispose

▸ **dispose**(`error?`: [*Option*](../modules/option.md#option)<[*Error*](../modules/disposable.md#error)\>): *void*

Dispose the resource. Must be idempotent.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`error?` | [*Option*](../modules/option.md#option)<[*Error*](../modules/disposable.md#error)\> | An optional error that signals the resource is being disposed due to an error.    |

**Returns:** *void*
