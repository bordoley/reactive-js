[Reactive-JS](../README.md) / [scheduler](../modules/scheduler.md) / SchedulerContinuationLike

# Interface: SchedulerContinuationLike

A unit of work to be executed by a scheduler.

## Hierarchy

* [*DisposableLike*](disposable.disposablelike.md)

  ↳ **SchedulerContinuationLike**

## Index

### Properties

* [error](scheduler.schedulercontinuationlike.md#error)
* [isDisposed](scheduler.schedulercontinuationlike.md#isdisposed)

### Methods

* [add](scheduler.schedulercontinuationlike.md#add)
* [addListener](scheduler.schedulercontinuationlike.md#addlistener)
* [continue](scheduler.schedulercontinuationlike.md#continue)
* [dispose](scheduler.schedulercontinuationlike.md#dispose)
* [removeListener](scheduler.schedulercontinuationlike.md#removelistener)

## Properties

### error

• `Readonly` **error**: [*Option*](../modules/option.md#option)<[*Error*](../modules/disposable.md#error)\>

Inherited from: [DisposableLike](disposable.disposablelike.md).[error](disposable.disposablelike.md#error)

The error the `DisposableLike` was disposed with if disposed.

___

### isDisposed

• `Readonly` **isDisposed**: *boolean*

Inherited from: [DisposableLike](disposable.disposablelike.md).[isDisposed](disposable.disposablelike.md#isdisposed)

`true` if this resource has been disposed, otherwise false

## Methods

### add

▸ **add**(`disposable`: [*DisposableOrTeardown*](../modules/disposable.md#disposableorteardown)): *void*

Inherited from: [DisposableLike](disposable.disposablelike.md)

Adds the given `DisposableOrTeardown` to this container or disposes it if the container has been disposed.

#### Parameters:

Name | Type |
------ | ------ |
`disposable` | [*DisposableOrTeardown*](../modules/disposable.md#disposableorteardown) |

**Returns:** *void*

`this`

___

### addListener

▸ **addListener**(`ev`: *onRunStatusChanged*, `listener`: [*SchedulerContinuationRunStatusChangedListenerLike*](scheduler.schedulercontinuationrunstatuschangedlistenerlike.md)): *void*

#### Parameters:

Name | Type |
------ | ------ |
`ev` | *onRunStatusChanged* |
`listener` | [*SchedulerContinuationRunStatusChangedListenerLike*](scheduler.schedulercontinuationrunstatuschangedlistenerlike.md) |

**Returns:** *void*

___

### continue

▸ **continue**(): *void*

Work function to be invoked by the scheduler after the specified delay.

**Returns:** *void*

___

### dispose

▸ **dispose**(`error?`: [*Option*](../modules/option.md#option)<[*Error*](../modules/disposable.md#error)\>): *void*

Inherited from: [DisposableLike](disposable.disposablelike.md)

Dispose the resource. Must be idempotent.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`error?` | [*Option*](../modules/option.md#option)<[*Error*](../modules/disposable.md#error)\> | An optional error that signals the resource is being disposed due to an error.    |

**Returns:** *void*

___

### removeListener

▸ **removeListener**(`ev`: *onRunStatusChanged*, `listener`: [*SchedulerContinuationRunStatusChangedListenerLike*](scheduler.schedulercontinuationrunstatuschangedlistenerlike.md)): *void*

#### Parameters:

Name | Type |
------ | ------ |
`ev` | *onRunStatusChanged* |
`listener` | [*SchedulerContinuationRunStatusChangedListenerLike*](scheduler.schedulercontinuationrunstatuschangedlistenerlike.md) |

**Returns:** *void*
